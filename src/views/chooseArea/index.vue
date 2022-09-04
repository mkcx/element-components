<template>
  <m-choose-area @change="onChange"></m-choose-area>
</template>

<script setup lang='ts'>
import { ElMessage } from 'element-plus'
const onChange = (res: any) => {
  let resStr: string = ''
  Object.keys(res).forEach((key) => {
    resStr += res[key].name + '-'
  })
  ElMessage.warning('当前选择的是：' + resStr)
}
</script>

<style lang='scss' scoped>
</style>
