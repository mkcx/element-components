<template>
  <m-menu
    :list="menus"
    class="el-menu-vertical-demo"
    :collapse="collapse"
    :default-active="$route.path"
    :default-openeds="[$route.path]"
    router
    :unique-opened="true"
  ></m-menu>
</template>

<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router'
const props = defineProps<{ collapse: boolean }>()
const router = useRouter()
const menus = router.options.routes
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
