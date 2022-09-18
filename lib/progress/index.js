import { defineComponent as l, ref as p, watchEffect as c, resolveComponent as s, openBlock as i, createBlock as m, mergeProps as u } from "vue";
const f = /* @__PURE__ */ l({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 50
    },
    time: {
      type: Number,
      default: 3e3
    },
    isAnimation: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n, t = p(0);
    return c(
      () => {
        if (e.isAnimation) {
          let r = Math.ceil(e.time / e.percentage), a = setInterval(() => {
            t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(a));
          }, r);
        } else
          t.value = e.percentage;
      }
    ), (r, a) => {
      const o = s("el-progress");
      return i(), m(o, u({ percentage: t.value }, r.$attrs), null, 16, ["percentage"]);
    };
  }
}), v = {
  install(n) {
    n.component("m-progress", f);
  }
};
export {
  v as default
};
