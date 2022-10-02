import { createApp } from 'vue'
import router from '@/router/index'
// import ElementUi from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { toLine } from '@/utils'
import mComponents from './components/index'
// import mComponents from '../lib'
import '../lib/style.css'
// import '@/mock'
import lazy from './directives/lazy'

const app = createApp(App)

for (let key in Icons) {
  app.component(`el-icon${toLine(key)}`, (Icons as any)[key])
}

app.directive('lazy', lazy)
app.use(router)
// app.use(ElementUi)
app.use(mComponents)
app.mount('#app')

//  TS泛型的理解
// function print<T>(arg: T): T {
//   console.log(arg)
//   return arg
// }

// const res = print(123)
// // 定义泛型为指定类型
// const res1 = print<string>('1234')
// // TS类型推断，自动导出类型
// const res2 = print('string')

// // 使用type类型别名定义函数
// type Print = <T>(arg: T) => T
// const printFn: Print = function print(arg) {
//   console.log(arg)
//   return arg
// }

// // 使用interface与泛型定义函数
// interface IPrint<T> {
//   (arg: T): T
// }

// function iPrint<T>(arg: T) {
//   console.log(arg)
//   return arg
// }

// const myPrint: IPrint<number> = iPrint
// console.log('接口泛型', myPrint(123))

// // 泛型默认类型
// interface Iprint2<T = number> {
//   (arg: T): T
// }

// function iprint2<T>(arg: T) {
//   console.log(arg)
//   return arg
// }

// const myPrint2: Iprint2 = iprint2

// console.log('默认参数', myPrint2(957))

// // 处理多个函数参数
// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// const swapRes = swap(['lin', 99])

// // 函数副作用操作
// // 例如可以清晰的知道请求后端返回的结构
// interface UserInfo {
//   name: string
//   age: number
// }

// function request<T>(url: string): Promise<T> {
//   return fetch(url).then((res) => res.json())
// }

// request<UserInfo>('user/info').then((res) => {
//   console.log(res)
// })

// // 泛型约束
// // 比如说函数的参数必须要有length属性
// interface ILength {
//   length: number
// }

// function printLength<T extends ILength>(arg: T) {
//   console.log(arg.length)
//   return arg
// }

// console.log(printLength('4545'))
// console.log({ length: 10 })

// // 泛型约束类
// // 定义一个栈，入栈和出栈必须统一类型
// class Stack<T> {
//   private data: T[] = []
//   push(item: T) {
//     return this.data.push(item)
//   }
//   // 注意泛型不能约束static
//   // static pop1(): T {
//   //   return this.data.pop()
//   // }
//   pop(): T | undefined {
//     return this.data.pop()
//   }
// }

// // 泛型约束接口
// interface IKeyValue<T, U> {
//   key: T
//   value: U
// }
// const obj1: IKeyValue<string, number> = {
//   key: 'age',
//   value: 18
// }
// const obj2: IKeyValue<number, string> = {
//   key: 18,
//   value: 'age'
// }

// // 泛型定义数组
// const arr1: number[] = [1, 2, 3]
// const arr: Array<string> = ['1', '2', '3']

// // 实战， 泛型约束后端接口参数类型
// import axios from 'axios'

// interface API {
//   'book/detail': {
//     id: number
//   }
//   'book/comment': {
//     id: number
//     comment: string
//   }
// }

// function requestFn<T extends keyof API>(url: T, obj: API[T]) {
//   return axios.post(url, obj)
// }
// requestFn('book/detail', {
//   id: 1
// })
