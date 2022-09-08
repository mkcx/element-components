export interface MenuItem {
  path: string
  meta: {
    title?: string
  }
  icon?: string
  i?: string // 经过处理后的图标组件
  children?: MenuItem[]
}
