import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { DataList } from './types'

const Random = Mock.Random

const dataList: DataList[] = []
for (let i = 0; i < 100; i++) {
  const template = {
    date: Random.date(),
    name: Random.name(),
    address: Random.province()
  }
  dataList.push(template)
}

const mockList: MockMethod[] = [
  {
    url: '/api/list',
    method: 'post', // 请求方式
    statusCode: 200, // 返回的http状态码
    response: (params: any) => {
      let info = params.body
      let [index, size, total] = [info.current, info.pageSize, dataList.length]
      let len = total / size
      let totalPages =
        len - parseInt(String(len)) > 0 ? parseInt(String(len)) : 1
      let newDataList = dataList.slice(index * size, (index + 1) * size)
      return {
        code: '200',
        message: '获取成功',
        data: {
          current: index,
          pageSize: size,
          rows: newDataList,
          total: total,
          totalPage: totalPages
        }
      }
    }
  }
]

export default mockList
