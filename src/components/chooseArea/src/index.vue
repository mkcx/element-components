<template>
  <el-select placeholder="请选择省份" v-model="province">
    <el-option v-for="item in allArea" :key="item.code" :label="item.name" :value="item.code" />
  </el-select>
  <el-select style="margin-left: 10px;" placeholder="请选择省份" v-model="city" :disabled="!province">
    <el-option v-for="item in selectCity" :key="item.code" :label="item.name" :value="item.code" />
  </el-select>
  <el-select style="margin-left: 10px;" placeholder="请选择区/县" v-model="area" :disabled="!city">
    <el-option v-for="item in selectArea" :key="item.code" :label="item.name" :value="item.code" />
  </el-select>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import allArea from '../pca-code.json'

export type AreaItem = {
  name: string
  code: string
  children?: AreaItem[]
}

export type AddressData = {
  name: string
  code: string
}

const emits = defineEmits(['change'])

const allAreas = ref(allArea)
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')

const selectCity = ref<AreaItem[]>([])
const selectArea = ref<AreaItem[]>([])

watch(
  () => province.value,
  (val) => {
    if (val) {
      const cities = allAreas.value.find((item) => item.code === province.value)!.children
      selectCity.value = cities
      city.value = ''
      area.value = ''
    }
  }
)

watch(
  () => city.value,
  (val) => {
    if (val) {
      const areaData = selectCity.value.find((item) => item.code === city.value)!.children!
      selectArea.value = areaData
      area.value = ''
    }
  }
)

watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: AddressData = {
        name: allAreas.value.find((item) => item.code === province.value)!.name,
        code: province.value
      }
      let cityData: AddressData = {
        name: selectCity.value.find((item) => item.code === city.value)!.name,
        code: city.value
      }
      let areaData: AddressData = {
        name: selectArea.value.find((item) => item.code === area.value)!.name,
        code: city.value
      }
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<style lang='scss' scoped>
</style>
