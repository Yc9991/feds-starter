import { defineConfig, presetWind4, presetIcons } from 'unocss'

export default defineConfig({
    content: {
        filesystem: [
          '/src/**/*.{vue,html,js,ts}',
        ],
      },
    presets: [
        presetWind4({
            preflights: {
                reset: true,
            }
        }),
        presetIcons()
    ],
})