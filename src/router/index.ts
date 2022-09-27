import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import layout from '@/components/layout/src/index.vue'
import directives from './modules/directives'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/element/home',
    component: layout,
    meta: {
      title: 'element组件',
      icon: 'Menu'
    },
    children: [
      {
        path: '/element/home',
        meta: {
          title: '首页',
          icon: 'Menu'
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/element/chooseIcon',
        meta: {
          title: '图标选择器',
          icon: 'Menu'
        },
        component: () => import('@/views/chooseIcon/index.vue')
      },
      {
        path: '/element/chooseArea',
        meta: {
          title: '省市区选择器',
          icon: 'Menu'
        },
        component: () => import('@/views/chooseArea/index.vue')
      },
      {
        path: '/element/trend',
        meta: {
          title: '趋势标记',
          icon: 'Menu'
        },
        component: () => import('@/views/trend/index.vue')
      },
      {
        path: '/element/notification',
        meta: {
          title: '消息提示',
          icon: 'Menu'
        },
        component: () => import('@/views/notification/index.vue')
      },
      {
        path: '/element/menu',
        meta: {
          title: '菜单',
          icon: 'Menu'
        },
        component: () => import('@/views/menu/index.vue')
      },
      {
        path: '/element/progress',
        meta: {
          title: '进度条',
          icon: 'Menu'
        },
        component: () => import('@/views/progress/index.vue')
      },
      {
        path: '/element/table',
        meta: {
          title: '二次封装表格',
          icon: 'Menu'
        },
        component: () => import('@/views/table/index.vue')
      },
      {
        path: '/element/calendar',
        meta: {
          title: '日历组件',
          icon: 'Menu'
        },
        component: () => import('@/views/calendar/index.vue')
      }
    ]
  },
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
  },
  directives
]

const router = createRouter({
  routes,
  history: createWebHashHistory('/element-components/')
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title as string
  next()
})
export default router
