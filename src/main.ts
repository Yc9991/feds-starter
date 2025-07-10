//@ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
    components: { ...components },
    directives,
})

//@ts-ignore
const pinia = window.pinia ?? createPinia()

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')
