import { defineComponent as t, openBlock as n, createElementBlock as o } from "vue";
const r = { class: "list" }, s = /* @__PURE__ */ t({
  __name: "index",
  props: {
    list: {
      type: Array,
      required: !0,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (a, c) => (n(), o("div", r));
  }
}), l = {
  install(e) {
    e.component("m-list", s);
  }
};
export {
  l as default
};
