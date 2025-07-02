import fs from 'fs'
import path from 'path'
import { normalizePath } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import type { Plugin } from 'vite'

interface FederationExposeOptions {
  dir?: string
  name?: string
  filename?: string
  shared?: Record<string, any> | string[]
}

/* ───────────────── helpers ───────────────── */

const toSlug = (seg: string) =>
  seg
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camel → kebab
    .replace(/\s+/g, '-')                   // spaces → dash
    .toLowerCase()                          // lower
// keep underscores / brackets untouched

function buildKey(abs: string, pagesRoot: string): string {
  const rel = normalizePath(path.relative(pagesRoot, abs))            // e.g. "contoh/catatan_/index.vue"
    .replace(/\.vue$/, '')                                            // strip .vue
  const parts = rel.split('/')

  // helper to get element from the end
  const last = <T>(arr: T[]) => arr[arr.length - 1]
  const last2 = <T>(arr: T[]) => arr[arr.length - 2]

  // 1️⃣  collapse “…/index.vue”
  if (last(parts) === 'index') parts.pop()

  // 2️⃣  collapse “…/foo/foo.vue”
  if (
    parts.length >= 2 &&
    last(parts).toLowerCase() === last2(parts)
  ) {
    parts.pop()
  }

  const slug = parts.map(toSlug).join('-')
  return `./${slug || 'index'}`   // 👈 when slug === '' → './index'
}

function walk(dir: string, vueFiles: string[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, vueFiles)
    else if (entry.isFile() && entry.name.endsWith('.vue')) vueFiles.push(full)
  }
}

/* ───────────────── plugin ───────────────── */

export async function federationAutoExpose(
  opts: FederationExposeOptions = {}
): Promise<Plugin> {
  const {
    dir = 'src/pages',
    name = 'example',
    filename = 'remoteEntry.js',
    shared,
  } = opts

  const defaultShared = ['vue', 'vue-router', 'pinia', '@vueuse/core']

  const pagesRoot = path.resolve(process.cwd(), dir)
  const files: string[] = []
  walk(pagesRoot, files)

  const exposes: Record<string, string> = {}

  // first add index.vue & same-name.vue so they win
  for (const abs of files.sort((a, b) => a.localeCompare(b))) {
    const key = buildKey(abs, pagesRoot)
    if (!exposes[key]) {
      exposes[key] = normalizePath(path.relative(process.cwd(), abs))
    }
  }

  const overrideShared = Array.isArray(shared) ? [...defaultShared, ...shared] : defaultShared

  const uniqueShared = [...new Set(overrideShared)]

  return {
    enforce: 'pre',
    ...federation({
      name,
      filename,
      shared: uniqueShared,
      exposes,
    })

  }
}
