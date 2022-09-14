<template>
  <el-button type="primary" @click="handleClick">选择图标</el-button>
  <div class="m-choose-icon-dialog">
    <el-dialog :title="title" v-model="_visible">
      <div class="container">
        <div
          v-for="(item ,index) in Object.keys(ELIcons)"
          :key="index"
          class="item"
          @click="handleCopy(item)"
        >
          <div class="icon">
            <component :is="`el-icon${toLine(item)}`"></component>
          </div>
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import * as ELIcons from '@element-plus/icons-vue'
import { toLine } from '../../utils/index'
import useCopy from '../../hooks/useCopy/index'

const props = defineProps<{
  title: string
  visible: boolean
}>()

const emits = defineEmits(['update:visible'])

const _visible = computed({
  get(): boolean {
    return props.visible
  },
  set(val: boolean) {
    emits('update:visible', val)
  }
})

const handleClick = () => {
  _visible.value = !_visible.value
}

const handleCopy = (value: string) => {
  useCopy(`<el-icon${toLine(value)} />`)
  _visible.value = false
}
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
