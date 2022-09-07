<template>
  <div style="width: 120px">
    <m-menu :list="menus" default-active="3-1"></m-menu>
  </div>
</template>

<script setup lang='ts'>
const menus = [
  {
    path: '1',
    meta: {
      title: '菜单1'
    },
    icon: 'Menu'
  },
  {
    path: '2',
    meta: {
      title: '菜单2'
    },
    icon: 'Menu'
  },
  {
    path: '3',
    meta: {
      title: '菜单3'
    },
    icon: 'Menu',
    children: [
      {
        path: '3-1',
        meta: {
          title: '菜单3-1'
        },
        icon: 'Menu'
      }
    ]
  }
]
</script>

<style lang='scss' scoped>
</style>
