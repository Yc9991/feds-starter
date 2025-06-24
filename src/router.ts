import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import routes from '~pages'

const router = createRouter({
    //@ts-ignore
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

