import { RouteRecordRaw } from 'vue-router'
import layout from '@/components/layout/src/index.vue'
const route: RouteRecordRaw[] = [
  {
    path: '/scroll',
    name: 'scroll',
    component: layout,
    redirect: '/scroll/virtualScroll',
    meta: {
      title: '滚动组件',
      icon: 'Menu'
    },
    children: [
      {
        path: '/scroll/virtualScroll',
        meta: {
          title: '虚拟滚动组件',
          icon: 'Menu'
        },
        component: () => import('@/views/scroll/virtualScroll/index.vue')
      }
    ]
  }
]

export default route
