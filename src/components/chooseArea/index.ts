import { App } from 'vue'
import Component from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-choose-area', Component)
  }
}
