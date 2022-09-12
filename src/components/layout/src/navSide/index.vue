<template>
  <m-menu
    :list="menus"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    :default-active="$route.path"
    active-text-color="#f40"
    router
  ></m-menu>
</template>

<script setup lang='ts'>
const props = defineProps<{ collapse: boolean }>()
const menus = [
  {
    path: '/chooseIcon',
    meta: {
      title: '图标选择器'
    },
    icon: 'Menu'
  },
  {
    path: '/chooseArea',
    meta: {
      title: '省市区选择器'
    },
    icon: 'Menu'
  },
  {
    path: '/trend',
    meta: {
      title: '趋势选择器'
    },
    icon: 'Menu'
  },
  {
    path: '/notification',
    meta: {
      title: '消息通知'
    },
    icon: 'Menu'
  },
  {
    path: '/menu',
    meta: {
      title: '菜单组件'
    },
    icon: 'Menu'
  },
  {
    path: '/progress',
    meta: {
      title: '进度条'
    },
    icon: 'Menu'
  },
  {
    path: '/table',
    meta: {
      title: '表格'
    },
    icon: 'Menu'
  }
]
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
