<script setup lang="ts">
import type { FederationConfigs } from '@/plugins/federation-auto-expose'

declare global {
    interface Window {
        configNameList: string[]
        [configName]: FederationConfigs
    }
}
const name = 'example'
const configName = `${name}Config`
Array.isArray(window.configNameList) && window.configNameList.push(configName)

window[configName] = {
    name,
    menu: [
        {
            title: 'Contoh',
            url: '/contoh',
            icon: 'home',
            items: [
                {
                    title: 'Contoh List',
                    url: '/contoh',
                    icon: 'home-share',
                },
                {
                    title: 'Catatan',
                    url: '/catatan_',
                    icon: 'home',

                    items: [
                        {
                            title: 'Catatan List',
                            url: '/catatan_',
                            icon: 'home',
                        },
                        {
                            title: 'Lagi',
                            url: '/lagi_',
                            icon: 'home',

                        },
                    ]
                }
            ]


        },

    ]
}
</script>

<template>
    <div>

    </div>
</template>