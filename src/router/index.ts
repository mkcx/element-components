import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import elementUi from './modules/element-ui'
import scroll from './modules/scroll'
import directives from './modules/directives'
import vueDocDemo from './modules/vue-doc-demo'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/element/home',
    meta: {
      hideMenu: true
    }
  },
  ...elementUi,
  ...scroll,
  ...directives,
  ...vueDocDemo
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
