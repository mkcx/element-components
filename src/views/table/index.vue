<template>
  <div>
    <m-table
      :data="tableData"
      :options="options"
      elementLoadingText="加载中..."
      elementLoadingBackground="rgba(0, 0, 0, .6)"
      @cell-confirm="cellCheck"
      @cell-cancel="cellClose"
      isEditRow
      v-model:editRowIndex="editRowIndex"
      pagination
      @sizeChange="handelSizeChange"
      @currentChange="handelCurrentChange"
      :currentPage="current"
      :pageSize="pageSize"
      :total="total"
    >
      <template #name="{scope}">
        <el-tag>{{ scope.row.name }}</el-tag>
      </template>
      <template #action="{scope}">
        <el-button type="primary" @click="edit(scope)">编辑</el-button>
        <el-button type="danger" @click="dele(scope)">删除</el-button>
      </template>
      <template #editRow="{scope}">
        <el-button type="primary" @click="confirm(scope)">确认</el-button>
        <el-button type="danger" @click="cancel(scope)">取消</el-button>
      </template>
    </m-table>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { TableOptions } from '@/components/table/src/types'
import { Loading } from 'element-plus/es/components/loading/src/service'
import axios from 'axios'
import { getUser } from '@/api/user'

type TableData = {
  date: string
  name: string
  address: string
}
const tableData = ref<TableData[]>([])
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name'
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    width: 200
  },
  {
    label: '操作',
    align: 'center',
    action: true
  }
]

// 分页参数
const current = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(0)

// 编辑行的按钮
const editRowIndex = ref<string>('')
const edit = (scope: any) => {
  editRowIndex.value = 'edit'
}

const dele = (scope: any) => {
  console.log('删除', scope)
}

// 单元格编辑确认函数
const cellCheck = (scope: any) => {
  console.log('父级', scope)
}
// 单元格取消编辑回调函数
const cellClose = (scope: any) => {
  console.log('父级', scope)
}
// 可编辑行确认回调
const confirm = (scope: any) => {
  console.log(scope)
}

const cancel = (scope: any) => {
  console.log(scope)
}

const handelSizeChange = (val: number) => {
  pageSize.value = val
  getData()
}

const handelCurrentChange = (val: number) => {
  current.value = val
  getData()
}

const getData = () => {
  getUser({
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    tableData.value = res.data.rows
    total.value = res.data.total
  })
}

onMounted(() => {
  getData()
})
</script>

<style lang='scss' scoped>
</style>
