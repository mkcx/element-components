import { RouteRecordRaw } from 'vue-router'
import layout from '@/components/layout/src/index.vue'
const route: RouteRecordRaw[] = [
  {
    path: '/vueDocDemo',
    name: 'vueDocDemo',
    component: layout,
    redirect: '/vueDocDemo/transition',
    meta: {
      hideMenu: false,
      title: 'vue3文档demo',
      icon: 'Menu'
    },
    children: [
      {
        path: '/vueDocDemo/transition',
        meta: {
          title: '动画过渡组件',
          icon: 'Menu'
        },
        component: () => import('@/views/vueDocDemo/transition/index.vue')
      }
    ]
  }
]

export default route
