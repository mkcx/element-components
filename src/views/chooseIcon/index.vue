<template>
  <div>
    <m-choose-icon title="图标选择器" v-model:visible="visible"></m-choose-icon>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const visible = ref<boolean>(false)
</script>

<style lang='scss' scoped>
</style>
