import { RouteRecordRaw } from 'vue-router'
import layout from '@/components/layout/src/index.vue'
const route: RouteRecordRaw[] = [
  {
    path: '/directives',
    name: 'directives',
    component: layout,
    redirect: '/directives/lazy',
    meta: {
      title: '指令',
      icon: 'Menu'
    },
    children: [
      {
        path: '/directives/lazy',
        meta: {
          title: '懒加载指令',
          icon: 'Menu'
        },
        component: () => import('@/views/directives/lazy/index.vue')
      }
    ]
  }
]

export default route
