import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login/index.vue'
import LayoutView from '@/views/Layout/index.vue'
import HomeView from '@/views/Home/index.vue'
import CategoryView from '@/views/Category/index.vue'
import SubCategoryView from '@/views/subCategory/index.vue'
import DetailView from '@/views/Detail/index.vue'
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
          path: '/category/:id',
          component: CategoryView,
        },
        {
          path: '/category/sub/:id',
          component: SubCategoryView,
        },
        {
          path: '/detail/:id',
          component: DetailView,
        },
      ]
    },
    {
      path: '/login',
      component: LoginView,
    },
  ],
  // 路由行为定制
  scrollBehavior () {
    // ...
    return {
      top: 0
    }
  }
})

export default router
