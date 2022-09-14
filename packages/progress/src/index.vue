<template>
  <el-progress :percentage="percent" v-bind="$attrs" />
</template>

<script setup lang='ts'>
import { ref, watch, watchEffect } from 'vue'
const props = defineProps({
  percentage: {
    type: Number,
    default: 50
  },
  time: {
    type: Number,
    default: 3000
  },
  isAnimation: {
    type: Boolean,
    default: false
  }
})

const percent = ref(0)

watchEffect(
  // () => props.isAnimation,
  () => {
    if (props.isAnimation) {
      let t = Math.ceil(props.time / props.percentage)
      let timer = setInterval(() => {
        percent.value += 1
        if (percent.value >= props.percentage) {
          percent.value = props.percentage
          clearInterval(timer)
        }
      }, t)
    } else {
      percent.value = props.percentage
    }
  }
)
</script>

<style lang='scss' scoped>
</style>
