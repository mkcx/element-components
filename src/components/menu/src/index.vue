<template>
  <el-menu :router="router" :default-active="defaultActive" v-bind="$attrs">
    <template v-for="(item, index) in menu" :key="index">
      <el-menu-item v-if="!item.children || !item.children.length" :index="item.path">
        <component v-if="item.meta.icon" :is="`el-icon${toLine(item.meta.icon)}`"></component>
        <span>{{item.meta.title}}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <component v-if="item.meta.icon" :is="`el-icon${toLine(item.meta.icon)}`"></component>
          <span>{{item.meta.title}}</span>
        </template>
        <template v-for="(item1, index1) in item.children" :key="index1">
          <el-menu-item :index="item1.path">
            <component v-if="item1.meta.icon" :is="`el-icon${toLine(item1.meta.icon)}`"></component>
            <span>{{item1.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang='ts'>
import { PropType, computed } from 'vue'
import { MenuItem } from '../types'
import { toLine, filterMenu } from '@/utils/index'

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

const menu = computed(() => {
  return filterMenu(props.list)
})
</script>

<style lang='scss' scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
