import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login/index.vue'
import LayoutView from '@/views/Layout/index.vue'
import HomeView from '@/views/Home/index.vue'
import CategoryView from '@/views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children:[
        {
          path: '/',
          component: HomeView,
        },
        {
          path: '/category',
          component: CategoryView,
        },
      ]
    },
    {
      path: '/login',
      component: LoginView,
    },
  ],
})

export default router
