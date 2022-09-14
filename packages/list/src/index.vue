<template>
  <div class="list"></div>
</template>

<script setup lang='ts'>
import { ActionOptions, ListOptions } from '../types'
import { PropType } from 'vue'

let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
    default: () => []
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})
</script>

<style lang='scss' scoped>
</style>
