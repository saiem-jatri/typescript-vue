import { createRouter, createWebHistory } from 'vue-router'
import Counter from "@/pages/counterPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})

export default router
