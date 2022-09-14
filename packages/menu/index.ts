import { App } from 'vue'
import Component from './src/index.vue'
import infiniteMenu from './menu'

export default {
  install(app: App) {
    app.component('m-menu', Component)
    app.component('m-infinite-menu', infiniteMenu)
  }
}
