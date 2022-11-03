import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import TodoCreate from '../views/TodoCreate.vue'
import TodoUpdate from '../views/TodoUpdate.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoList
    },
    {
      path: '/create',
      name: 'create',
      component: TodoCreate
    },
    {
      path: '/update/:id',
      name: 'update',
      component: TodoUpdate
    }
  ]
})

export default router
