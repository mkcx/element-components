<template>
  <div>
    <div style="width: 120px">
      <m-menu :list="menus" default-active="3-1"></m-menu>
    </div>
    <div style="width:300px; float: right;">
      <m-infinite-menu :list="menus2" active-text-color="red"></m-infinite-menu>
    </div>
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

const menus2 = [
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
        icon: 'Menu',
        children: [
          {
            path: '3-1-1',
            meta: {
              title: '菜单3-1-1'
            },
            icon: 'Menu',
            children: [
              {
                path: '3-1-1-1',
                meta: {
                  title: '菜单3-1-1-1'
                },
                icon: 'Menu',
                children: [
                  {
                    path: '3-1-1-1-1',
                    meta: {
                      title: '菜单3-1-1-1-1'
                    },
                    icon: 'Menu'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: '3-2',
        meta: {
          title: '菜单3-2'
        },
        icon: 'Menu'
      }
    ]
  }
]
</script>

<style lang='scss' scoped>
</style>
