import { ElMessage } from 'element-plus'

export default (value: string) => {
  const input = document.createElement('input')
  input.value = value
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}
