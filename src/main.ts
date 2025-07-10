//@ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import './federation'

const vuetify = createVuetify({
    components: { ...components },
    directives,
    defaults: {
        VBtn: {
            size: 'small',
        }
    }
})

//@ts-ignore
const pinia = window.pinia ?? createPinia()

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')