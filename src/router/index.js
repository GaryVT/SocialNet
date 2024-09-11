import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostView.vue')//lazu loading
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')//lazu loading
  },
  {
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
