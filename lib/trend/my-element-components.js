import { defineComponent as y, useSlots as p, computed as C, openBlock as n, createElementBlock as d, createElementVNode as u, normalizeStyle as s, unref as l, renderSlot as m, toDisplayString as v, createBlock as a, resolveDynamicComponent as f } from "vue";
const i = (e) => e.replace(/([A-Z])/g, "-$1").toLocaleLowerCase(), x = { class: "trend" }, g = { key: 1 }, S = { class: "icon" }, w = /* @__PURE__ */ y({
  __name: "index",
  props: {
    text: {
      type: String,
      default: "\u8D8B\u52BF\u6587\u5B57"
    },
    type: {
      type: String,
      default: "up"
    },
    upIconColor: {
      type: String,
      default: "#ff0000"
    },
    downIconColor: {
      type: String,
      default: "#00ff00"
    },
    reverseColor: {
      type: Boolean,
      default: !1
    },
    upTextColor: {
      type: String,
      default: "#ff0000"
    },
    downTextColor: {
      type: String,
      default: "#00ff00"
    },
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    }
  },
  setup(e) {
    const t = e, o = p(), r = C(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (c, k) => (n(), d("div", x, [
      u("div", {
        class: "text",
        style: s({ color: l(r) })
      }, [
        l(o).default ? m(c.$slots, "default", { key: 0 }, void 0, !0) : (n(), d("div", g, v(e.text), 1))
      ], 4),
      u("div", S, [
        e.type === "up" ? (n(), a(f(`el-icon${l(i)(e.upIcon)}`), {
          key: 0,
          style: s({ color: e.reverseColor ? "#00ff00" : e.upIconColor })
        }, null, 8, ["style"])) : (n(), a(f(`el-icon${l(i)(e.downIcon)}`), {
          key: 1,
          style: s({ color: e.reverseColor ? "#ff0000" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const _ = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, c] of t)
    o[r] = c;
  return o;
}, I = /* @__PURE__ */ _(w, [["__scopeId", "data-v-b6cb77f1"]]), b = {
  install(e) {
    e.component("m-trend", I);
  }
};
export {
  b as default
};
