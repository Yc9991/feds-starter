import fs from 'fs'
import path from 'path'
import { normalizePath, Plugin } from 'vite'
import federation from '@originjs/vite-plugin-federation'

interface FederationExposeOptions {
  dir?: string
  name?: string
  filename?: string
  shared?: Record<string, any> | string[]
  include?: string[]
  exclude?: string[]
}

/* ─── slug + key helpers ───────────────────────────────────────────── */

const toSlug = (seg: string) =>
  seg
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

function buildExposeKey(abs: string, pagesRoot: string) {
  const rel = normalizePath(path.relative(pagesRoot, abs)).replace(/\.vue$/, '')
  const parts = rel.split('/')

  const last = <T>(a: T[]) => a[a.length - 1]
  const prev = <T>(a: T[]) => a[a.length - 2]

  if (last(parts) === 'index') parts.pop()                                   // foo/index.vue  -> foo
  if (parts.length >= 2 && last(parts).toLowerCase() === prev(parts)) parts.pop() // foo/foo.vue -> foo

  const slug = parts.map(toSlug).join('-')
  return `./${slug || 'index'}`
}

/* ─── recursive scan ──────────────────────────────────────────────── */

function collectVueFiles(dir: string): string[] {
  const out: string[] = [];
  (function walk(d: string) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) walk(full)
      else if (e.isFile() && e.name.endsWith('.vue')) out.push(full)
    }
  })(dir)
  return out
}

/* ─── simple glob → RegExp ─────────────────────────────────────────── */

function globToRegex(glob: string): RegExp {
  const esc = (s: string) => s.replace(/[-/\\^$+?.()|[\]{}]/g, '\\$&')
  const re = glob
    .replace(/^\/+/, '')               // drop leading /
    .replace(/\*\*/g, '##ALL##')
    .replace(/\*/g, '##DIR##')
    .replace(/\?/g, '##ONE##')
    .split('/').map(esc).join('\\/')
    .replace(/##ALL##/g, '.*')
    .replace(/##DIR##/g, '[^/]*')
    .replace(/##ONE##/g, '.')
  return new RegExp(`^${re}$`)
}

/* ─── plugin ───────────────────────────────────────────────────────── */

export async function federationAutoExpose(opts: FederationExposeOptions = {}): Promise<Plugin> {
  const {
    dir = 'src/pages',
    name = 'example',
    filename = 'remoteEntry.js',
    shared,
    include = [],
    exclude = [],
  } = opts

  const defaultShared = ['vue', 'vue-router', 'pinia', '@vueuse/core']

  const pagesRoot = path.resolve(process.cwd(), dir)
  const files = collectVueFiles(pagesRoot)

  // compile glob arrays once
  const incRE = include.map(globToRegex)
  const excRE = exclude.map(globToRegex)

  const exposes: Record<string, string> = {}

  for (const abs of files) {
    const relPosix = normalizePath(path.relative(pagesRoot, abs))   // e.g. "contoh/news/hello.vue"

    const incOK = !incRE.length || incRE.some(r => r.test(relPosix))
    const excOK = !excRE.length || !excRE.some(r => r.test(relPosix))
    if (!incOK || !excOK) continue

    const key = buildExposeKey(abs, pagesRoot)
    if (!exposes[key]) {
      exposes[key] = normalizePath(path.relative(process.cwd(), abs))
    }
  }

  const overrideShared = Array.isArray(shared) ? [...defaultShared, ...shared] : defaultShared

  const uniqueShared = [...new Set(overrideShared)]


  return {
    enforce: 'pre',
    ...federation({ name, filename, shared: uniqueShared, exposes })
  }
}





// import fs from 'fs'
// import path from 'path'
// import { normalizePath } from 'vite'
// import federation from '@originjs/vite-plugin-federation'
// import type { Plugin } from 'vite'

// interface FederationExposeOptions {
//   dir?: string
//   name?: string
//   filename?: string
//   shared?: Record<string, any> | string[]
// }

// /* ───────────────── helpers ───────────────── */

// const toSlug = (seg: string) =>
//   seg
//     .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camel → kebab
//     .replace(/\s+/g, '-')                   // spaces → dash
//     .toLowerCase()                          // lower
// // keep underscores / brackets untouched

// function buildKey(abs: string, pagesRoot: string): string {
//   const rel = normalizePath(path.relative(pagesRoot, abs))            // e.g. "contoh/catatan_/index.vue"
//     .replace(/\.vue$/, '')                                            // strip .vue
//   const parts = rel.split('/')

//   // helper to get element from the end
//   const last = <T>(arr: T[]) => arr[arr.length - 1]
//   const last2 = <T>(arr: T[]) => arr[arr.length - 2]

//   // 1️⃣  collapse “…/index.vue”
//   if (last(parts) === 'index') parts.pop()

//   // 2️⃣  collapse “…/foo/foo.vue”
//   if (
//     parts.length >= 2 &&
//     last(parts).toLowerCase() === last2(parts)
//   ) {
//     parts.pop()
//   }

//   const slug = parts.map(toSlug).join('-')
//   return `./${slug || 'index'}`   // 👈 when slug === '' → './index'
// }

// function walk(dir: string, vueFiles: string[]) {
//   for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
//     const full = path.join(dir, entry.name)
//     if (entry.isDirectory()) walk(full, vueFiles)
//     else if (entry.isFile() && entry.name.endsWith('.vue')) vueFiles.push(full)
//   }
// }

// /* ───────────────── plugin ───────────────── */

// export async function federationAutoExpose(
//   opts: FederationExposeOptions = {}
// ): Promise<Plugin> {
//   const {
//     dir = 'src/pages',
//     name = 'example',
//     filename = 'remoteEntry.js',
//     shared,
//     include,
//     exclude
//   } = opts

//   const defaultShared = ['vue', 'vue-router', 'pinia', '@vueuse/core']

//   const pagesRoot = path.resolve(process.cwd(), dir)
//   const files: string[] = []
//   walk(pagesRoot, files)

//   const exposes: Record<string, string> = {}

//   // first add index.vue & same-name.vue so they win
//   for (const abs of files.sort((a, b) => a.localeCompare(b))) {
//     const key = buildKey(abs, pagesRoot)
//     if (!exposes[key]) {
//       exposes[key] = normalizePath(path.relative(process.cwd(), abs))
//     }
//   }

//   const overrideShared = Array.isArray(shared) ? [...defaultShared, ...shared] : defaultShared

//   const uniqueShared = [...new Set(overrideShared)]

//   return {
//     enforce: 'pre',
//     ...federation({
//       name,
//       filename,
//       shared: uniqueShared,
//       exposes,
//     })

//   }
// }
