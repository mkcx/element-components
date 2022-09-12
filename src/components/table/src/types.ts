// 定义表格行的接口
export interface TableOptions {
  // 表头
  label: string
  // 字段名称
  prop: string
  // 列宽度
  width?: string | number
  // 对齐方式
  align?: 'left' | 'center' | 'right'
  // 自定义模板名称
  slot?: string
  // 是否为操作项
  action?: boolean
  // 是否为可编辑
  editable?: boolean
}
