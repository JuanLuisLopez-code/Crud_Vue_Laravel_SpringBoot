import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TodoList.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/TodoCreate.vue')
    },
    {
      path: '/update/:id',
      name: 'update',
      component: () => import('../views/TodoUpdate.vue')
    }
  ]
})

export default router
