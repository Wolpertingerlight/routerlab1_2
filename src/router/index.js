import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    props:true,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path:'/details/:name',
    name:'details',
    props:true,
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    props:true,
    component: () => import(/* webpackChunkName: "sale" */ '../views/Sale.vue')
  },
  {
    path: '/dishes',
    name: 'dishes',
    props:true,
    component: () => import(/* webpackChunkName: "sale" */ '../views/Dishes.vue')
  },
  {
    path:'/type/:name',
    name:'type',
    props:true,
    component: () => import(/* webpackChunkName: "details" */ '../views/Type.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
