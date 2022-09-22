import Request from './axios'

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptors: (config) => {
      return config
    },
    responseInterceptors: (result) => {
      return result
    }
  }
})

import type { RequestConfig } from './axios/types'

interface HttpRequestConfig<T> extends RequestConfig {
  data?: T
}
interface HttpResponse<T> {
  code: number
  message: string
  data: T
}

const HttpRequest = <D, T = any>(config: HttpRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<HttpResponse<T>>(config)
}
export default HttpRequest
