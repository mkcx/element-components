<template>
  <div>
    <m-virtual-scroll :list="list" :itemHeight="100">
      <template #default="{scope}">
        <div
          style="height: 100%; margin-top: 10px; color: red; border: 1px solid #abcdef;"
        >{{ scope }}</div>
      </template>
    </m-virtual-scroll>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const list = ref<number[]>([])
const arr: Number[] = []
for (let i = 0; i < 30; i++) {
  list.value.push(i)
}
setTimeout(() => {
  for (let index = 30; index < 100; index++) {
    list.value.push(index)
  }
}, 10000)
</script>

<style lang='scss' scoped>
</style>
