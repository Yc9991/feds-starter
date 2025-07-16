import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import dotenv from 'dotenv'
import mkcert from 'vite-plugin-mkcert'
import { unheadVueComposablesImports } from '@unhead/vue'
import { federationAutoExpose } from './src/plugins/federation-auto-expose'
// import vuetify  from 'vite-plugin-vuetify'

dotenv.config()

const ODATA_URL = process.env.VITE_ODATA_API_BASE_URL ? process.env.VITE_ODATA_API_BASE_URL : `${process.env.VITE_API_BASE_URL}/odata`

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.PORT),
    proxy: {
      '/odata': {
        target: ODATA_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/odata/, '')
      }
    }
  },
  preview: {
    port: Number(process.env.PORT),
  },
  build: {
    minify: true,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a ui5- as custom elements
          isCustomElement: tag => tag.includes('ui5-')
        }
      }
    }),
    // vuetify({ 
    //   // styles: 'sass',
    // }),
    UnoCSS(),
    //@ts-ignore
    Pages(),
    //@ts-ignore
    process.env.VITE_HTTPS == 'true' && mkcert({
      force: true,
      savePath: './cert'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        unheadVueComposablesImports
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    federationAutoExpose({
      name: 'feds-starter',
      expose: {
        configFile: 'src/pages/guide/config.vue',
        include: ['src/pages/contoh/**'],
      }
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    }),

  ],
})
