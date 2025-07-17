import { defineConfig } from "federation-bundle/runtime";

export default defineConfig({
    name: "example",
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

                        }
                    ]
                }
            ]


        },

    ]
});