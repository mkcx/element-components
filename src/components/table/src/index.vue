<template>
  <el-table
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-box="elementLoadingSvgBox"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 没有编辑行操作 -->
          <template v-else>
            <template v-if="(scope.$index + scope.column.id) === currentEdit">
              <el-row flex>
                <el-col :span="18">
                  <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                </el-col>
                <el-col :span="6">
                  <div class="icons">
                    <el-icon-check class="check" @click.stop="check(scope)"></el-icon-check>
                    <el-icon-close class="close" @click.stop="close(scope)"></el-icon-close>
                  </div>
                </el-col>
              </el-row>
            </template>
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                :is="`el-icon${toLine(cellEditIcon)}`"
                el-icon-edit
                v-if="item.editable"
                @click.stop="clickEdit(scope)"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions.label"
      :align="actionOptions.align"
      :width="actionOptions.width"
    >
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.isEditRow" :scope="scope"></slot>
        <slot name="action" v-else :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
  <div v-if="pagination" class="pagination" :style="{justifyContent: pageAlign }">
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang='ts'>
import { PropType, computed, ref, onMounted, watch } from 'vue'
import { TableOptions } from './types'
import { toLine } from '@/utils'
import cloneDeep from 'lodash/cloneDeep'

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 加载文案
  elementLoadingText: {
    type: String
  },
  // 旋转时动画名称
  elementLoadingSpinner: {
    type: String
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String
  },
  // 加载svg图标
  elementLoadingSvg: {
    type: String
  },
  // 加载svg的配置
  elementLoadingSvgBox: {
    type: String
  },
  // 单元格编辑图标
  cellEditIcon: {
    type: String,
    default: 'Edit'
  },
  // 是否可编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行的按钮标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false
  },
  // 当前分页数据
  currentPage: {
    type: Number,
    default: 1
  },
  // 页面规则选择
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 50, 100]
  },
  // 每一页的数据
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
})

// 分发事件
const emits = defineEmits([
  'cell-confirm',
  'cell-cancel',
  'update: editRowIndex',
  'sizeChange',
  'currentChange'
])

// 过滤操作选项
let tableOptions = computed(() => {
  return props.options.filter((item) => !item.action)
})
let actionOptions = computed(() => {
  return props.options.find((item) => item.action)
})

// 拷贝表格数据
const tableData = ref<any[]>(cloneDeep(props.data))
// 拷贝当前按钮标识
const cloneEditRowIndex = ref<string>(props.editRowIndex)

// 表格加载属性
const isLoading = computed(() => !props.data || !props.data.length)

// 当前点击的单元格
const currentEdit = ref<string>('')

// 点击编辑回调函数
const clickEdit = (scope: any) => {
  tableData.value.map((item) => {
    item.rowEdit = false
  })
  emits('update: editRowIndex', '')
  currentEdit.value = scope.$index + scope.column.id
}

// 单元格确认编辑
const check = (scope: any) => {
  currentEdit.value = ''
  emits('cell-confirm', scope)
}
// 单元格取消编辑
const close = (scope: any) => {
  currentEdit.value = ''
  emits('cell-cancel', scope)
}

// 点击每一行的操作
const rowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项的内容
  if (column.label === actionOptions.value!.label) {
    // 编辑行的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      currentEdit.value = ''
      // 点击的按钮是做可编辑操作
      row.rowEdit = !row.rowEdit
      // 重置其他数据的属性
      tableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false
        }
      })
      if (!row.rowEdit) {
        emits('update: editRowIndex', '')
      }
    }
  }
}

// 分页的条数改变
const handleSizeChange = (val: number) => {
  emits('sizeChange', val)
}

// 分页的页数改变
const handleCurrentChange = (val: number) => {
  emits('currentChange', val)
}

// 分页对其方式
const pageAlign = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'center') return 'center'
  else return 'flex-end'
})
// 监听父组件传过来的数据
watch(
  () => props.data,
  (val) => {
    tableData.value = cloneDeep(val)
    tableData.value.map((item) => {
      // 添加一个是否可编辑的属性
      item.rowEdit = false
    })
  },
  {
    deep: true
  }
)

watch(
  () => props.editRowIndex,
  (val) => {
    if (val) cloneEditRowIndex.value = val
  }
)

onMounted(() => {
  tableData.value.map((item) => {
    // 添加一个是否可编辑的属性
    item.rowEdit = false
  })
})
</script>

<style lang='scss' scoped>
.icons {
  .check {
    color: green;
  }
  .close {
    margin-left: 10px;
    color: red;
  }
}
.pagination {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
</style>
