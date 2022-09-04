<template>
  <div class="trend">
    <div class="text" :style="{color: textColor}">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        v-if="type === 'up'"
        :is="`el-icon${toLine(upIcon)}`"
        :style="{color: !reverseColor ?  upIconColor : '#00ff00'}"
      ></component>
      <component
        v-else
        :is="`el-icon${toLine(downIcon)}`"
        :style="{color: !reverseColor ? downIconColor : '#ff0000'}"
      ></component>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useSlots, computed } from 'vue'
import { toLine } from '@/utils/index'
const props = defineProps({
  text: {
    type: String,
    default: '趋势文字'
  },
  type: {
    type: String,
    default: 'up'
  },
  upIconColor: {
    type: String,
    default: '#ff0000'
  },
  downIconColor: {
    type: String,
    default: '#00ff00'
  },
  reverseColor: {
    type: Boolean,
    default: false
  },
  upTextColor: {
    type: String,
    default: '#ff0000'
  },
  downTextColor: {
    type: String,
    default: '#00ff00'
  },
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  downIcon: {
    type: String,
    default: 'ArrowDown'
  }
})

const slots = useSlots()

const textColor = computed((): string => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang='scss' scoped>
.trend {
  display: flex;
  align-items: center;
  .icon {
    margin-left: 5px;
  }
  svg {
    width: 0.8em;
    height: 0.8em;
  }
}
</style>
