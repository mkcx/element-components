<template>
  <div>
    <h1>过渡动画技巧：动态class</h1>
    <div :class="{shake: disabled}">
      <el-button @click="warnDisabled">Click</el-button>
    </div>
    <br />
    <h1>状态驱动的动画</h1>
    <div
      class="movearea"
      :style="{backgroundColor: `hsl(${x}, 80%, 50%)`}"
      @mousemove="onMousemove"
    >
      <p>把鼠标放在这里移动</p>
      <p>X：{{ x }}</p>
    </div>
    <br />
    <!-- <h1>基于侦听器的动画</h1>
    <div>
      改变数值:
      <input v-model="num" placeholder />
      <p>数值动画：{{ tweened.toFixed(0) }}</p>
    </div>-->
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import gsap from 'gsap'
const disabled = ref(false)
const warnDisabled = () => {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 2000)
}

const x = ref<number>(0)
const onMousemove = (e: Event) => {
  x.value = e.clientX
}

const num = ref<number>(0)
const tweened = ref<number>(0)
watch(
  () => num.value,
  (val) => {
    gsap.to(this, {
      duration: 0.5,
      tweened: Number(val) || 0
    })
  }
)
</script>

<style lang='scss' scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.16, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.movearea {
  transition: 0.3s background-color ease;
}
</style>
