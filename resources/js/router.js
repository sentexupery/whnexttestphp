import Vue from 'vue'
import VueRouter from "vue-router";


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/advert',
            component: () => import('./components/Advert/Index'),
            name: 'advert.index'
        },
        {
            path: '/advert/create',
            component: () => import('./components/Advert/Create'),
            name: 'advert.create'
        },
        {
            path: '/advert/:id',
            component: () => import('./components/Advert/Show'),
            name: 'advert.show'
        }
    ]
})
