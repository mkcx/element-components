export interface CalendarEventItem {
  // 时间标题
  title: string
  // 开始时间
  start: string
  // 结束时间
  end: string
  // 是否可拖动
  editable?: boolean
}
