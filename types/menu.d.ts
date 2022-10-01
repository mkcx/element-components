declare interface MenuMeta {
  title?: string
  icon?: string
  i?: string // 经过处理后的图标组件
  hideMenu?: boolean
}
declare interface MenuItem {
  path: string
  name?: string
  meta: MenuMeta
  children?: MenuItem[]
}
