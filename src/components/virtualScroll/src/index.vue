<template>
  <div
    class="virtual-scroll"
    :style="`height: ${height}px; width: ${width}px`"
    @scroll="handelScroll"
  >
    <div class="scroll-wrap" :style="`height: ${wrapHeight}px`">
      <div
        v-for="(item, index) in realList"
        :key="index"
        class="scroll-item"
        :style="`width: 100%; height: ${itemHeight}px;transform: translateY(${scrollNum}px)`"
      >
        {{item}}
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, PropType, ref } from 'vue'
const props = defineProps({
  itemHeight: {
    type: Number,
    default: 50
  },
  height: {
    type: Number,
    default: 500
  },
  width: {
    type: Number,
    default: 300
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})
let lastTime: number = 0
// 记录滚动元素
const el = ref<EventTarget>()
// 用于记录滚动高度
const scrollHeight = ref<number>(0)
const scrollNum = ref<number>(0)
const realList = ref<number[]>([])
const wrapHeight = computed(() => {
  return props.list.length * props.itemHeight
})
let showList: Number = 0
const initVirtualScroll = () => {
  showList = Math.floor(props.height / props.itemHeight) + 4
  realList.value = props.list.slice(0, showList)
}
const handelScroll = (e: EventTarget) => {
  if (new Date().getTime() - lastTime > 40) {
    // 设置时间间隔，防止滚动事件高频触发消耗内存资源
    el.value = e
    scrollHeight.value = e.target.scrollTop
    getList()
    lastTime = new Date().getTime()
  }
}
const getList = () => {
  scrollNum.value = scrollHeight.value - (scrollHeight.value % props.itemHeight) // 获取已滚动到页面上方不可见的li元素的总高度（translateY的偏移高度）
  const len = scrollNum.value / props.itemHeight // 计算已经有多少个li滚动到页面上方（视图上方用户不可见的数量）
  realList.value = props.list.slice(len, len + showList) // 每次滚动事件后重新计算展示内
}
onMounted(() => {
  initVirtualScroll()
})
</script>

<style lang='scss' scoped>
.virtual-scroll {
  position: relative;
  overflow-y: auto;
}
.scroll-wrap {
  width: 100%;
  position: absolute;
}
.scroll-item {
  width: 100%;
  height: 50px;
}
</style>
