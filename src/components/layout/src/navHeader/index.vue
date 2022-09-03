<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-show="collapse"></el-icon-expand>
      <el-icon-fold v-show="!collapse"></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{ collapse: boolean }>()
const emits = defineEmits(['update:collapse'])
const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
}
</style>
