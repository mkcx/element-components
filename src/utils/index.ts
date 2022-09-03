export const toLine = (value: string) => {
  console.log(value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase())
  return value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
}
