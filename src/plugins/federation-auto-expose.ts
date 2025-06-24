import path from 'path'
import fg from 'fast-glob'
import federation from '@originjs/vite-plugin-federation'
import type { Plugin } from 'vite'

interface FederationExposeOptions {
    dir?: string
    name?: string
    filename?: string
    shared?: Record<string, any> | string[]
    exposeTransform?: (fileName: string) => string
}

// ✅ Dynamic kebab-case and repeat-1-word transform
function defaultExposeTransform(fileName: string): string {
    const kebab = fileName
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase → kebab-case
        .toLowerCase()

    const parts = kebab.split('-')
    if (parts.length === 1) {
        return `./${parts[0]}-${parts[0]}`
    }
    return `./${kebab}`
}

export async function federationAutoExpose(
    options: FederationExposeOptions = {}
): Promise<Plugin> {
    const {
        dir = 'src/components/Federation',
        name = 'example',
        filename = 'remoteEntry.js',
        shared = ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        exposeTransform = defaultExposeTransform,
    } = options

    const folderPath = path.resolve(process.cwd(), dir)
    const files = await fg(['*.vue'], { cwd: folderPath, onlyFiles: true })

    const exposes: Record<string, string> = {
        './LOAD': './' + path.posix.join(dir, 'Load.vue'),
    }

    for (const file of files) {
        const fileName = path.basename(file, '.vue')
        if (fileName.toLowerCase() === 'load') continue
        exposes[exposeTransform(fileName)] = './' + path.posix.join(dir, file)
    }
    return federation({
        name,
        filename,
        shared,
        exposes,
    })
}