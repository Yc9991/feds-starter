import fs from 'fs'
import path from 'path'
import { normalizePath, Plugin } from 'vite'
import federation from '@originjs/vite-plugin-federation'

interface FederationExposeOptions {
  name?: string
  filename?: string
  expose?: {
    dir?: string
    include?: string[]
    exclude?: string[],
    configFile?: `${string}.vue`
  },
  shared?: {
    include?: Record<string, any> | string[],
    exclude?: ('vue' | 'vue-router' | 'pinia' | '@vueuse/core')[]
  }
}

export interface FederationConfigs {
  name: string,
  menu?: SidebarMenu[],
}

interface SidebarMenu {
  title: string,
  subtitle?: string,
  url?: string,
  icon?: string,
  color?: string,
  button?: {
    title?: string,
    icon?: string
  }
  items?: SidebarMenu[],
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

export function federationAutoExpose(opts: FederationExposeOptions = {}): Plugin {
  const {
    name = 'example',
    filename = 'remoteEntry.js',
    shared,
    expose,
  } = opts

  const {
    dir = 'src/pages',
    configFile,
    include = [],
    exclude = [],
  } = expose || {}

  const defaultShared = ['vue', 'vue-router', 'pinia', '@vueuse/core']

  const pagesRoot = path.resolve(process.cwd(), dir)
  const files = collectVueFiles(pagesRoot)

  // compile glob arrays once
  const incRE = include.map(globToRegex)
  const excRE = exclude.map(globToRegex)

  const exposes: Record<string, string> = {}

  const configAbs = configFile ? path.resolve(process.cwd(), configFile) : null

  for (const abs of files) {
    if (configAbs && normalizePath(abs) === normalizePath(configAbs)) continue // ✅ skip configFile from include loop

    const relPosix = normalizePath(path.relative(process.cwd(), abs))
    const incOK = !incRE.length || incRE.some(r => r.test(relPosix))
    const excOK = !excRE.length || !excRE.some(r => r.test(relPosix))
    if (!incOK || !excOK) continue

    const key = buildExposeKey(abs, pagesRoot)
    if (!exposes[key]) {
      exposes[key] = normalizePath(path.relative(process.cwd(), abs))
    }
  }

  // 👉 If configFile is set, ensure it's added
  if (configFile) {
    const abs = path.resolve(process.cwd(), configFile)
    if (fs.existsSync(abs) && abs.endsWith('.vue')) {
      const key = './config' // 👈 override the key regardless of location
      if (!exposes[key]) {
        exposes[key] = normalizePath(path.relative(process.cwd(), abs))
      }
    } else {
      console.warn(`[federationAutoExpose] configFile not found or not a .vue file: ${configFile}`)
    }
  }


  const overrideShared = Array.isArray(shared?.include)
    ? [...defaultShared, ...shared.include]
    : defaultShared

  const uniqueShared = [...new Set(overrideShared)]

  const excludeShared = uniqueShared.filter((e) =>
    !opts.shared?.exclude || !opts.shared?.exclude.includes(e)
  )


  return {
    enforce: 'pre',
    ...federation({ name, filename, shared: excludeShared, exposes })
  }



}


