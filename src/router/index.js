import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/TeamView.vue')
    }
  ]
})

export default router
