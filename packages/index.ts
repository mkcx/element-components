import { App } from 'vue'
import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import table from './table'
import calendar from './calendar'

import './styles/base.scss'
import './styles/ui.scss'

const components = [
  chooseIcon,
  chooseArea,
  trend,
  notification,
  list,
  menu,
  progress,
  table,
  calendar
]
export default {
  install(app: App) {
    components.map((item) => app.use(item))
  }
}
