<template>
  <el-menu :router="router" :default-active="defaultActive" v-bind="{...attrs}">
    <template v-for="(item, index) in list" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.path">
        <component v-if="item.icon" :is="`el-icon${toLine(item.icon)}`"></component>
        <span>{{item.meta.title}}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <component v-if="item.icon" :is="`el-icon${toLine(item.icon)}`"></component>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item v-for="(item1, index1) in item.children" :key="index1" :index="item.path">
          <component v-if="item1.icon" :is="`el-icon${toLine(item1.icon)}`"></component>
          <span>{{item1.meta.title}}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang='ts'>
import { PropType, useAttrs } from 'vue'
import { MenuItem } from '../types'
import { toLine } from '@/utils/index'

const props = defineProps({
  list: {
    type: Array as PropType<MenuItem[]>,
    require: true
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false
  }
})

const attrs = useAttrs()
console.log('attrs', attrs)
</script>

<style lang='scss' scoped>
</style>
