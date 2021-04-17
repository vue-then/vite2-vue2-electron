import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const constantRouterMap = [
    { path: '/login', name: "login", component: () => import('../views/auth/Login.vue'), hidden: true },
    { path: '/register', name: "register", component: () => import('../views/auth/Registered.vue'), hidden: true },
    { path: '/forgetPWD', name: "forget", component: () => import('../views/auth/ForgetPWD.vue'), hidden: true },
    { path: '/setPWD', name: "set", component: () => import('../views/auth/SetPWD.vue'), hidden: true },
    { path: '/404', component: () => import('../views/404.vue'), hidden: true },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('../views/dashboard/index.vue')
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'example' },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('../views/table/index.vue'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('../views/tree/index.vue'),
                meta: { title: 'Tree', icon: 'tree' }
            }
        ]
    },

    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('../views/form/index.vue'),
                meta: { title: 'Form', icon: 'form' }
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
]

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
// const router = new VueRouter({
//   routes
// })

export default new VueRouter({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

