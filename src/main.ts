//@ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import router from './router'

const pinia = createPinia()
//@ts-ignore
window.pinia = pinia

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
