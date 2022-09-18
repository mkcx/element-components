import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import layout from '@/components/layout/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/chooseIcon',
        component: () => import('@/views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('@/views/chooseArea/index.vue')
      },
      {
        path: '/trend',
        component: () => import('@/views/trend/index.vue')
      },
      {
        path: '/notification',
        component: () => import('@/views/notification/index.vue')
      },
      {
        path: '/menu',
        component: () => import('@/views/menu/index.vue')
      },
      {
        path: '/progress',
        component: () => import('@/views/progress/index.vue')
      },
      {
        path: '/table',
        component: () => import('@/views/table/index.vue')
      },
      {
        path: '/calendar',
        component: () => import('@/views/calendar/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory('/element-components/')
})

export default router
