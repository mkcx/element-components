import { defineComponent as i, resolveComponent as o, openBlock as n, createBlock as a, withCtx as t, renderSlot as m, createVNode as u, resolveDynamicComponent as d, unref as s } from "vue";
const p = (e) => e.replace(/([A-Z])/g, "-$1").toLocaleLowerCase(), f = /* @__PURE__ */ i({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number,
      default: 99
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (l, v) => {
      const c = o("el-badge"), r = o("el-popover");
      return n(), a(r, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: t(() => [
          m(l.$slots, "default")
        ]),
        reference: t(() => [
          u(c, {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: t(() => [
              (n(), a(d(`el-icon${s(p)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
}), g = {
  install(e) {
    e.component("m-notification", f);
  }
};
export {
  g as default
};
