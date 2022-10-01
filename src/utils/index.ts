export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
}
export const filterMenu = (menu: MenuItem[]): MenuItem[] => {
  const res: MenuItem[] = []
  menu.forEach((item) => {
    if (!item.meta.hideMenu) {
      res.push(item)
    }
    if (item.children && item.children.length) {
      item.children = filterMenu(item.children)
    }
  })
  return res
}
