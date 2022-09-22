import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any

  responseInterceptors?: <T = AxiosResponse>(config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
