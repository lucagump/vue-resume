import Vue from 'vue'
import VueRouter from 'vue-router'
import Init from '../views/Init.vue'
import About from '../views/About.vue'
import Home from '../views/HomeDesktop.vue'
import HomeMobile from '../views/HomeMobile.vue'
import P404 from '../views/P404.vue'

//check prom for import components and 404
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Root',
        component: Init
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/HomeMobile',
        name: 'HomeMobile',
        component: HomeMobile
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '*',
        name: '*',
        component: P404
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router