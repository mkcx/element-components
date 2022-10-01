import { defineComponent, PropType, useAttrs, computed } from 'vue'
import { MenuItem } from './types'
import * as Icons from '@element-plus/icons-vue'
import { filterMenu } from '@/utils/index'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<MenuItem[]>,
      require: true,
      default: () => []
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const menus = filterMenu(props.list)
    let attrs = useAttrs()
    // 渲染无限层级菜单方法
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.meta.i = (Icons as any)[item.meta.icon!]
        // 处理sub-menu的title插槽
        let slots = {
          // 每个插槽其实是一个函数
          title: () => {
            return (
              <>
                {item.meta.i ? <item.meta.i /> : ''}
                <span>{item.meta.title}</span>
              </>
            )
          }
        }
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.path} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.path} {...attrs}>
            {item.meta.i ? <item.meta.i /> : ''}
            <span>{item.meta.title}</span>
          </el-menu-item>
        )
      })
      //
    }
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router}>
          {renderMenu(menus)}
        </el-menu>
      )
    }
  }
})
