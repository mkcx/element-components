import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import layout from '@/components/layout/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
