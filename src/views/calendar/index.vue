<template>
  <div>
    <m-calendar
      :events="events"
      :eventContent="eventContent"
      @dateClick="dateClick"
      @eventClick="eventClick"
      displayEventEnd
    ></m-calendar>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { CalendarEventItem } from '@/components/calendar/src/types'
import { EventClickArg, EventContentArg } from '@fullcalendar/core'
import { DateClickArg } from '@fullcalendar/interaction'

const events = ref<CalendarEventItem[]>([
  {
    title: '学习',
    start: new Date('2022-9-13 8:00'),
    end: new Date('2022-9-15 18:30'),
    editable: true
  },
  {
    title: '上班',
    start: new Date('2022-9-14 8:00'),
    end: new Date('2022-9-25 17:30')
  }
])

const dateClick = (info: DateClickArg) => {
  console.log(info)
  events.value.push({
    title: '洗澡',
    start: info.dateStr + ' 23:30',
    end: info.dateStr + ' 23:50'
  })
}
const eventClick = (info: EventClickArg) => {
  console.log(info)
}
const eventContent = (info: EventContentArg) => {
  const el: HTMLElement = document.createElement('div')
  const timeTextArr = info.timeText.split('-')
  const start = timeTextArr[0]
    .replace('上午', '')
    .replace('下午', '')
    .replace('时', '')
  const end = timeTextArr[1]
    .replace('上午', '')
    .replace('下午', '')
    .replace('时', '')
  el.innerHTML = `
        <div>开始时间：${start},</div>
        <div>结束时间：${end},</div>
        <div>标题：${info.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}
</script>

<style lang='scss' scoped>
</style>
