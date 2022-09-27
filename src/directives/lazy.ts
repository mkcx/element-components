export default {
  mounted(el: HTMLEmbedElement) {
    const imgSrc = el.src
    el.src = ''
    // 观察者
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 元素在可视区域，或离开可视区域时触发
      if (isIntersecting) {
        el.src = imgSrc
        // 停止观察
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
}
