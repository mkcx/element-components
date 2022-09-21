export interface MenuItem {
  path: string
  name?: string
  meta: {
    title?: string
    icon?: string
    i?: string // 经过处理后的图标组件
  }
  children?: MenuItem[]
}
