<template>
  <div class="example">
    <div class="title">type</div>
    <m-trend text="销售额" type="up"></m-trend>
    <m-trend text="销售额" type="down">显示插槽</m-trend>
  </div>
  <div class="example">
    <div class="title">颜色反转</div>
    <m-trend text="销售额" type="up" reverseColor></m-trend>
    <m-trend text="销售额" type="down" :reverseColor="true">显示插槽</m-trend>
  </div>

  <div class="example">
    <div class="title">自定义图标</div>
    <m-trend text="销售额" type="up" reverseColor upIcon="Notification"></m-trend>
    <m-trend text="销售额" type="down" downIcon="Notification">显示插槽</m-trend>
  </div>

  <div class="example">
    <div class="title">文字颜色</div>
    <m-trend text="销售额" type="up" reverseColor upIcon="Notification" upTextColor="#abcdef"></m-trend>
    <m-trend text="销售额" type="down" downIcon="Notification" downTextColor="#654321">显示插槽</m-trend>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.example {
  position: relative;
  display: flex;
  border: 1px solid #999;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  .title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 6px;
  }
}
</style>
