<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse">
    <el-menu-item index="1">
      <el-icon-menu />
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <template #title>时间选择器</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>
const props = defineProps<{ collapse: boolean }>()
</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
