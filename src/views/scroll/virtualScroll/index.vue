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
for (let i = 0; i < 1000; i++) {
  list.value.push(i)
}
</script>

<style lang='scss' scoped>
</style>
