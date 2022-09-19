<template>
  <div>
    <m-virtual-scroll :list="list"></m-virtual-scroll>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const list = ref<number[]>([])
for (let i = 0; i < 1000; i++) {
  list.value.push(i)
}
</script>

<style lang='scss' scoped>
</style>
