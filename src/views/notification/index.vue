<template>
  <div>
    <m-notification :value="50"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30" icon="Comment"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30">
      <template #default>
        <m-list></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
</style>
