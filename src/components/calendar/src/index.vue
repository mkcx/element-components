<template>
  <div id="calendar"></div>
</template>

<script setup lang='ts'>
import { onMounted, PropType, ref, render, watch } from 'vue'
import '@fullcalendar/core/vdom'
import {
  Calendar,
  DateSelectArg,
  EventClickArg,
  EventContentArg
} from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import { CalendarEventItem } from './types'
const props = defineProps({
  // 语言
  locale: {
    type: String,
    default: 'zh-cn'
  },
  // 试图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => ({
      today: '今天',
      month: '月',
      week: '周',
      day: '日',
      prevYear: '上一年',
      nextYear: '下一年',
      prev: '上一月',
      next: '下一月'
    })
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => ({
      start: 'title',
      center: '',
      end: 'prev today next'
    })
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => ({})
  },
  // 事件源
  events: {
    type: Array as PropType<CalendarEventItem[]>,
    default: () => []
  },
  // 显示结束时间
  displayEventEnd: {
    type: Boolean,
    default: false
  },
  eventContent: {
    type: Function
  }
})

const emits = defineEmits(['dateClick', 'eventClick'])

const calendar = ref<Calendar>()
const renderCalendar = () => {
  const el: HTMLElement = document.getElementById('calendar')
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.locale,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,

      eventSources: [
        {
          // 渲染事件
          events(e, callback) {
            callback(props.events)
          }
        }
      ],
      dateClick(info: DateSelectArg) {
        emits('dateClick', info)
      },
      eventClick(info: EventClickArg) {
        emits('eventClick', info)
      },
      displayEventEnd: props.displayEventEnd,
      eventContent: props.eventContent
    })
    calendar.value.render()
  }
}
watch(
  () => props.events,
  () => {
    renderCalendar()
  },
  { deep: true }
)
onMounted(() => {
  renderCalendar()
})
</script>

<style lang='scss' scoped>
</style>
