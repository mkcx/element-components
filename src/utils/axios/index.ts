import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RequestConfig, RequestInterceptors } from './types'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorObj = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptorObj?.requestInterceptors,
      this.interceptorObj?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptorObj?.responseInterceptors,
      this.interceptorObj?.responseInterceptorsCatch
    )

    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err: any) => err
    )
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      } 
      this.instance.request<any, T>(config).then(res => {
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors<T>(res)
        }
        resolve(res)
      }).catch((err: any) => reject(err))
    }) 
    
  }
}

export default Request
