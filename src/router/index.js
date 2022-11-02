import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
//home_empty prueba para redirect
    {
      path: '/home_empty',
      name: '/home_empty',
      component: HomeView
    }
  ]
})

export default router
