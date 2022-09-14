import { createApp } from 'vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { toLine } from '@/utils'
// import mComponents from './components/index'
import mComponents from '../lib/m-element-components.js'
import '../lib/style.css'
import '@/mock'

const app = createApp(App)

for (let key in Icons) {
  app.component(`el-icon${toLine(key)}`, (Icons as any)[key])
}

app.use(router)
app.use(ElementPlus)
app.use(mComponents)
app.mount('#app')
