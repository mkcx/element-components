<template>
  <div
    class="virtual-scroll"
    :style="`height: ${height}px; width: ${width}px`"
    @scroll="handelScroll"
  >
    <div class="scroll-wrap">
      <div
        v-for="(item, index) in realList"
        :key="index"
        class="scroll-item"
        :style="`width: 100%; height: ${itemHeight}px;transform: translateY(${scrollNum}px)`"
      >
        <slot :scope="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, PropType, ref, watch } from 'vue'
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
// 最后一次滚动事件，防抖用的
let lastTime: number = 0
// 记录滚动元素
let el: Event = null
// 用于记录滚动高度
const scrollHeight = ref<number>(0)
const scrollNum = ref<number>(0)
const realList = ref<number[]>([])
let showList: Number = 0
const initVirtualScroll = () => {
  showList = Math.floor(props.height / props.itemHeight) + 4
  realList.value = props.list.slice(0, showList)
  // 判断监听元素是否保存到ele字段中
  if (el) {
    // 如果元素存在ele中则将scrollTop初始化为0;
    el.target.scrollTop = 0
    // 初始化translateY的偏移高度
    scrollNum.value = 0
  }
  lastTime = Date.now()
}
const handelScroll = (e: Event) => {
  if (Date.now() - lastTime > 20) {
    // 设置时间间隔，防止滚动事件高频触发消耗内存资源
    el = e
    scrollHeight.value = e.target.scrollTop
    getList()
    lastTime = Date.now()
  }
}
const getList = () => {
  scrollNum.value = scrollHeight.value - (scrollHeight.value % props.itemHeight) // 获取已滚动到页面上方不可见的li元素的总高度（translateY的偏移高度）
  const len = scrollNum.value / props.itemHeight // 计算已经有多少个li滚动到页面上方（视图上方用户不可见的数量）
  realList.value = props.list.slice(len, len + showList) // 每次滚动事件后重新计算展示内
}

watch(
  () => props.list,
  () => {
    initVirtualScroll()
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<style lang='scss' scoped>
.virtual-scroll {
  position: relative;
  overflow-y: auto;
  scrollbar-width: 4px;
  user-select: none;
  &::-webkit-scrollbar {
    width: 4px;
    height: 12px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 100%;
    background: #d8d8d8;
    border-radius: 2px;
    transition: all 0.2s ease;
    &:hover {
      background: #b4b4b4;
    }
  }
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
