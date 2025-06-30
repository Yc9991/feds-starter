//@ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
import router from './router'

//@ts-ignore
const pinia = window.pinia ?? createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
