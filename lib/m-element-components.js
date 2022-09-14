import { openBlock as m, createElementBlock as f, createElementVNode as u, createStaticVNode as i1, getCurrentScope as c1, onScopeDispose as l1, ref as K, unref as H, getCurrentInstance as ua, onMounted as an, nextTick as s1, watch as he, warn as d1, provide as u1, computed as X, inject as m1, defineComponent as ce, mergeProps as rn, renderSlot as _e, normalizeClass as be, createVNode as N, Transition as qo, withCtx as W, withDirectives as ma, toDisplayString as ze, vShow as Go, shallowReactive as f1, createBlock as B, normalizeStyle as ut, createCommentVNode as pe, resolveDynamicComponent as ge, Fragment as ne, withModifiers as At, isVNode as fa, render as ir, resolveComponent as G, isRef as Fn, renderList as Ie, createTextVNode as h1, useSlots as v1, useAttrs as Yo, watchEffect as p1, resolveDirective as _1 } from "vue";
/*! Element Plus Icons Vue v2.0.9 */
var v = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, r] of t)
    n[a] = r;
  return n;
}, g1 = {
  name: "AddLocation"
}, w1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), C1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), b1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1), $1 = [
  y1,
  C1,
  b1
];
function E1(e, t, n, a, r, o) {
  return m(), f("svg", w1, $1);
}
var x1 = /* @__PURE__ */ v(g1, [["render", E1], ["__file", "add-location.vue"]]), S1 = {
  name: "Aim"
}, z1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), D1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1), H1 = [
  M1,
  D1
];
function T1(e, t, n, a, r, o) {
  return m(), f("svg", z1, H1);
}
var R1 = /* @__PURE__ */ v(S1, [["render", T1], ["__file", "aim.vue"]]), V1 = {
  name: "AlarmClock"
}, A1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), I1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1), L1 = [
  k1,
  I1
];
function P1(e, t, n, a, r, o) {
  return m(), f("svg", A1, L1);
}
var B1 = /* @__PURE__ */ v(V1, [["render", P1], ["__file", "alarm-clock.vue"]]), O1 = {
  name: "Apple"
}, N1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1), U1 = [
  F1
];
function W1(e, t, n, a, r, o) {
  return m(), f("svg", N1, U1);
}
var j1 = /* @__PURE__ */ v(O1, [["render", W1], ["__file", "apple.vue"]]), q1 = {
  name: "ArrowDownBold"
}, G1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y1 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), Z1 = [
  Y1
];
function X1(e, t, n, a, r, o) {
  return m(), f("svg", G1, Z1);
}
var K1 = /* @__PURE__ */ v(q1, [["render", X1], ["__file", "arrow-down-bold.vue"]]), Q1 = {
  name: "ArrowDown"
}, J1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ei = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), ti = [
  ei
];
function ni(e, t, n, a, r, o) {
  return m(), f("svg", J1, ti);
}
var ai = /* @__PURE__ */ v(Q1, [["render", ni], ["__file", "arrow-down.vue"]]), ri = {
  name: "ArrowLeftBold"
}, oi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ii = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1), ci = [
  ii
];
function li(e, t, n, a, r, o) {
  return m(), f("svg", oi, ci);
}
var si = /* @__PURE__ */ v(ri, [["render", li], ["__file", "arrow-left-bold.vue"]]), di = {
  name: "ArrowLeft"
}, ui = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), fi = [
  mi
];
function hi(e, t, n, a, r, o) {
  return m(), f("svg", ui, fi);
}
var vi = /* @__PURE__ */ v(di, [["render", hi], ["__file", "arrow-left.vue"]]), pi = {
  name: "ArrowRightBold"
}, _i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1), wi = [
  gi
];
function yi(e, t, n, a, r, o) {
  return m(), f("svg", _i, wi);
}
var Ci = /* @__PURE__ */ v(pi, [["render", yi], ["__file", "arrow-right-bold.vue"]]), bi = {
  name: "ArrowRight"
}, $i = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ei = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), xi = [
  Ei
];
function Si(e, t, n, a, r, o) {
  return m(), f("svg", $i, xi);
}
var zi = /* @__PURE__ */ v(bi, [["render", Si], ["__file", "arrow-right.vue"]]), Mi = {
  name: "ArrowUpBold"
}, Di = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), Ti = [
  Hi
];
function Ri(e, t, n, a, r, o) {
  return m(), f("svg", Di, Ti);
}
var Vi = /* @__PURE__ */ v(Mi, [["render", Ri], ["__file", "arrow-up-bold.vue"]]), Ai = {
  name: "ArrowUp"
}, ki = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ii = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Li = [
  Ii
];
function Pi(e, t, n, a, r, o) {
  return m(), f("svg", ki, Li);
}
var Bi = /* @__PURE__ */ v(Ai, [["render", Pi], ["__file", "arrow-up.vue"]]), Oi = {
  name: "Avatar"
}, Ni = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1), Ui = [
  Fi
];
function Wi(e, t, n, a, r, o) {
  return m(), f("svg", Ni, Ui);
}
var ji = /* @__PURE__ */ v(Oi, [["render", Wi], ["__file", "avatar.vue"]]), qi = {
  name: "Back"
}, Gi = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), Zi = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1), Xi = [
  Yi,
  Zi
];
function Ki(e, t, n, a, r, o) {
  return m(), f("svg", Gi, Xi);
}
var Qi = /* @__PURE__ */ v(qi, [["render", Ki], ["__file", "back.vue"]]), Ji = {
  name: "Baseball"
}, ec = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), nc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1), ac = [
  tc,
  nc
];
function rc(e, t, n, a, r, o) {
  return m(), f("svg", ec, ac);
}
var oc = /* @__PURE__ */ v(Ji, [["render", rc], ["__file", "baseball.vue"]]), ic = {
  name: "Basketball"
}, cc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1), sc = [
  lc
];
function dc(e, t, n, a, r, o) {
  return m(), f("svg", cc, sc);
}
var uc = /* @__PURE__ */ v(ic, [["render", dc], ["__file", "basketball.vue"]]), mc = {
  name: "BellFilled"
}, fc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1), vc = [
  hc
];
function pc(e, t, n, a, r, o) {
  return m(), f("svg", fc, vc);
}
var _c = /* @__PURE__ */ v(mc, [["render", pc], ["__file", "bell-filled.vue"]]), gc = {
  name: "Bell"
}, wc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), Cc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), bc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), $c = [
  yc,
  Cc,
  bc
];
function Ec(e, t, n, a, r, o) {
  return m(), f("svg", wc, $c);
}
var xc = /* @__PURE__ */ v(gc, [["render", Ec], ["__file", "bell.vue"]]), Sc = {
  name: "Bicycle"
}, zc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mc = /* @__PURE__ */ i1('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), Dc = [
  Mc
];
function Hc(e, t, n, a, r, o) {
  return m(), f("svg", zc, Dc);
}
var Tc = /* @__PURE__ */ v(Sc, [["render", Hc], ["__file", "bicycle.vue"]]), Rc = {
  name: "BottomLeft"
}, Vc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ac = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), kc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1), Ic = [
  Ac,
  kc
];
function Lc(e, t, n, a, r, o) {
  return m(), f("svg", Vc, Ic);
}
var Pc = /* @__PURE__ */ v(Rc, [["render", Lc], ["__file", "bottom-left.vue"]]), Bc = {
  name: "BottomRight"
}, Oc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), Fc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1), Uc = [
  Nc,
  Fc
];
function Wc(e, t, n, a, r, o) {
  return m(), f("svg", Oc, Uc);
}
var jc = /* @__PURE__ */ v(Bc, [["render", Wc], ["__file", "bottom-right.vue"]]), qc = {
  name: "Bottom"
}, Gc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yc = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1), Zc = [
  Yc
];
function Xc(e, t, n, a, r, o) {
  return m(), f("svg", Gc, Zc);
}
var Kc = /* @__PURE__ */ v(qc, [["render", Xc], ["__file", "bottom.vue"]]), Qc = {
  name: "Bowl"
}, Jc = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, el = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1), tl = [
  el
];
function nl(e, t, n, a, r, o) {
  return m(), f("svg", Jc, tl);
}
var al = /* @__PURE__ */ v(Qc, [["render", nl], ["__file", "bowl.vue"]]), rl = {
  name: "Box"
}, ol = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, il = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), cl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), ll = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1), sl = [
  il,
  cl,
  ll
];
function dl(e, t, n, a, r, o) {
  return m(), f("svg", ol, sl);
}
var ul = /* @__PURE__ */ v(rl, [["render", dl], ["__file", "box.vue"]]), ml = {
  name: "Briefcase"
}, fl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1), vl = [
  hl
];
function pl(e, t, n, a, r, o) {
  return m(), f("svg", fl, vl);
}
var _l = /* @__PURE__ */ v(ml, [["render", pl], ["__file", "briefcase.vue"]]), gl = {
  name: "BrushFilled"
}, wl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1), Cl = [
  yl
];
function bl(e, t, n, a, r, o) {
  return m(), f("svg", wl, Cl);
}
var $l = /* @__PURE__ */ v(gl, [["render", bl], ["__file", "brush-filled.vue"]]), El = {
  name: "Brush"
}, xl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1), zl = [
  Sl
];
function Ml(e, t, n, a, r, o) {
  return m(), f("svg", xl, zl);
}
var Dl = /* @__PURE__ */ v(El, [["render", Ml], ["__file", "brush.vue"]]), Hl = {
  name: "Burger"
}, Tl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1), Vl = [
  Rl
];
function Al(e, t, n, a, r, o) {
  return m(), f("svg", Tl, Vl);
}
var kl = /* @__PURE__ */ v(Hl, [["render", Al], ["__file", "burger.vue"]]), Il = {
  name: "Calendar"
}, Ll = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), Bl = [
  Pl
];
function Ol(e, t, n, a, r, o) {
  return m(), f("svg", Ll, Bl);
}
var Nl = /* @__PURE__ */ v(Il, [["render", Ol], ["__file", "calendar.vue"]]), Fl = {
  name: "CameraFilled"
}, Ul = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), jl = [
  Wl
];
function ql(e, t, n, a, r, o) {
  return m(), f("svg", Ul, jl);
}
var Gl = /* @__PURE__ */ v(Fl, [["render", ql], ["__file", "camera-filled.vue"]]), Yl = {
  name: "Camera"
}, Zl = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xl = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), Kl = [
  Xl
];
function Ql(e, t, n, a, r, o) {
  return m(), f("svg", Zl, Kl);
}
var Jl = /* @__PURE__ */ v(Yl, [["render", Ql], ["__file", "camera.vue"]]), es = {
  name: "CaretBottom"
}, ts = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ns = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1), as = [
  ns
];
function rs(e, t, n, a, r, o) {
  return m(), f("svg", ts, as);
}
var os = /* @__PURE__ */ v(es, [["render", rs], ["__file", "caret-bottom.vue"]]), is = {
  name: "CaretLeft"
}, cs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ls = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), ss = [
  ls
];
function ds(e, t, n, a, r, o) {
  return m(), f("svg", cs, ss);
}
var us = /* @__PURE__ */ v(is, [["render", ds], ["__file", "caret-left.vue"]]), ms = {
  name: "CaretRight"
}, fs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), vs = [
  hs
];
function ps(e, t, n, a, r, o) {
  return m(), f("svg", fs, vs);
}
var _s = /* @__PURE__ */ v(ms, [["render", ps], ["__file", "caret-right.vue"]]), gs = {
  name: "CaretTop"
}, ws = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ys = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1), Cs = [
  ys
];
function bs(e, t, n, a, r, o) {
  return m(), f("svg", ws, Cs);
}
var $s = /* @__PURE__ */ v(gs, [["render", bs], ["__file", "caret-top.vue"]]), Es = {
  name: "Cellphone"
}, xs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ss = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), zs = [
  Ss
];
function Ms(e, t, n, a, r, o) {
  return m(), f("svg", xs, zs);
}
var Ds = /* @__PURE__ */ v(Es, [["render", Ms], ["__file", "cellphone.vue"]]), Hs = {
  name: "ChatDotRound"
}, Ts = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), Vs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), As = [
  Rs,
  Vs
];
function ks(e, t, n, a, r, o) {
  return m(), f("svg", Ts, As);
}
var Is = /* @__PURE__ */ v(Hs, [["render", ks], ["__file", "chat-dot-round.vue"]]), Ls = {
  name: "ChatDotSquare"
}, Ps = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), Os = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), Ns = [
  Bs,
  Os
];
function Fs(e, t, n, a, r, o) {
  return m(), f("svg", Ps, Ns);
}
var Us = /* @__PURE__ */ v(Ls, [["render", Fs], ["__file", "chat-dot-square.vue"]]), Ws = {
  name: "ChatLineRound"
}, js = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), Gs = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), Ys = [
  qs,
  Gs
];
function Zs(e, t, n, a, r, o) {
  return m(), f("svg", js, Ys);
}
var Xs = /* @__PURE__ */ v(Ws, [["render", Zs], ["__file", "chat-line-round.vue"]]), Ks = {
  name: "ChatLineSquare"
}, Qs = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Js = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), ed = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), td = [
  Js,
  ed
];
function nd(e, t, n, a, r, o) {
  return m(), f("svg", Qs, td);
}
var ad = /* @__PURE__ */ v(Ks, [["render", nd], ["__file", "chat-line-square.vue"]]), rd = {
  name: "ChatRound"
}, od = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, id = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), cd = [
  id
];
function ld(e, t, n, a, r, o) {
  return m(), f("svg", od, cd);
}
var sd = /* @__PURE__ */ v(rd, [["render", ld], ["__file", "chat-round.vue"]]), dd = {
  name: "ChatSquare"
}, ud = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, md = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), fd = [
  md
];
function hd(e, t, n, a, r, o) {
  return m(), f("svg", ud, fd);
}
var vd = /* @__PURE__ */ v(dd, [["render", hd], ["__file", "chat-square.vue"]]), pd = {
  name: "Check"
}, _d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gd = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), wd = [
  gd
];
function yd(e, t, n, a, r, o) {
  return m(), f("svg", _d, wd);
}
var Cd = /* @__PURE__ */ v(pd, [["render", yd], ["__file", "check.vue"]]), bd = {
  name: "Checked"
}, $d = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ed = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1), xd = [
  Ed
];
function Sd(e, t, n, a, r, o) {
  return m(), f("svg", $d, xd);
}
var zd = /* @__PURE__ */ v(bd, [["render", Sd], ["__file", "checked.vue"]]), Md = {
  name: "Cherry"
}, Dd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hd = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1), Td = [
  Hd
];
function Rd(e, t, n, a, r, o) {
  return m(), f("svg", Dd, Td);
}
var Vd = /* @__PURE__ */ v(Md, [["render", Rd], ["__file", "cherry.vue"]]), Ad = {
  name: "Chicken"
}, kd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Id = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1), Ld = [
  Id
];
function Pd(e, t, n, a, r, o) {
  return m(), f("svg", kd, Ld);
}
var Bd = /* @__PURE__ */ v(Ad, [["render", Pd], ["__file", "chicken.vue"]]), Od = {
  name: "ChromeFilled"
}, Nd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Fd = /* @__PURE__ */ u("path", {
  d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z",
  fill: "currentColor"
}, null, -1), Ud = /* @__PURE__ */ u("path", {
  d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z",
  fill: "currentColor"
}, null, -1), Wd = /* @__PURE__ */ u("path", {
  d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zM512.01 938.68H512zM414.76 701.95a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z",
  fill: "currentColor"
}, null, -1), jd = [
  Fd,
  Ud,
  Wd
];
function qd(e, t, n, a, r, o) {
  return m(), f("svg", Nd, jd);
}
var Gd = /* @__PURE__ */ v(Od, [["render", qd], ["__file", "chrome-filled.vue"]]), Yd = {
  name: "CircleCheckFilled"
}, Zd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xd = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), Kd = [
  Xd
];
function Qd(e, t, n, a, r, o) {
  return m(), f("svg", Zd, Kd);
}
var Jd = /* @__PURE__ */ v(Yd, [["render", Qd], ["__file", "circle-check-filled.vue"]]), e4 = {
  name: "CircleCheck"
}, t4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), a4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), r4 = [
  n4,
  a4
];
function o4(e, t, n, a, r, o) {
  return m(), f("svg", t4, r4);
}
var i4 = /* @__PURE__ */ v(e4, [["render", o4], ["__file", "circle-check.vue"]]), c4 = {
  name: "CircleCloseFilled"
}, l4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), d4 = [
  s4
];
function u4(e, t, n, a, r, o) {
  return m(), f("svg", l4, d4);
}
var ha = /* @__PURE__ */ v(c4, [["render", u4], ["__file", "circle-close-filled.vue"]]), m4 = {
  name: "CircleClose"
}, f4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), v4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), p4 = [
  h4,
  v4
];
function _4(e, t, n, a, r, o) {
  return m(), f("svg", f4, p4);
}
var g4 = /* @__PURE__ */ v(m4, [["render", _4], ["__file", "circle-close.vue"]]), w4 = {
  name: "CirclePlusFilled"
}, y4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, C4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1), b4 = [
  C4
];
function $4(e, t, n, a, r, o) {
  return m(), f("svg", y4, b4);
}
var E4 = /* @__PURE__ */ v(w4, [["render", $4], ["__file", "circle-plus-filled.vue"]]), x4 = {
  name: "CirclePlus"
}, S4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), M4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), D4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), H4 = [
  z4,
  M4,
  D4
];
function T4(e, t, n, a, r, o) {
  return m(), f("svg", S4, H4);
}
var R4 = /* @__PURE__ */ v(x4, [["render", T4], ["__file", "circle-plus.vue"]]), V4 = {
  name: "Clock"
}, A4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), I4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), L4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), P4 = [
  k4,
  I4,
  L4
];
function B4(e, t, n, a, r, o) {
  return m(), f("svg", A4, P4);
}
var O4 = /* @__PURE__ */ v(V4, [["render", B4], ["__file", "clock.vue"]]), N4 = {
  name: "CloseBold"
}, F4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, U4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1), W4 = [
  U4
];
function j4(e, t, n, a, r, o) {
  return m(), f("svg", F4, W4);
}
var q4 = /* @__PURE__ */ v(N4, [["render", j4], ["__file", "close-bold.vue"]]), G4 = {
  name: "Close"
}, Y4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z4 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), X4 = [
  Z4
];
function K4(e, t, n, a, r, o) {
  return m(), f("svg", Y4, X4);
}
var Zo = /* @__PURE__ */ v(G4, [["render", K4], ["__file", "close.vue"]]), Q4 = {
  name: "Cloudy"
}, J4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), t3 = [
  e3
];
function n3(e, t, n, a, r, o) {
  return m(), f("svg", J4, t3);
}
var a3 = /* @__PURE__ */ v(Q4, [["render", n3], ["__file", "cloudy.vue"]]), r3 = {
  name: "CoffeeCup"
}, o3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1), c3 = [
  i3
];
function l3(e, t, n, a, r, o) {
  return m(), f("svg", o3, c3);
}
var s3 = /* @__PURE__ */ v(r3, [["render", l3], ["__file", "coffee-cup.vue"]]), d3 = {
  name: "Coffee"
}, u3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, m3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1), f3 = [
  m3
];
function h3(e, t, n, a, r, o) {
  return m(), f("svg", u3, f3);
}
var v3 = /* @__PURE__ */ v(d3, [["render", h3], ["__file", "coffee.vue"]]), p3 = {
  name: "Coin"
}, _3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, g3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), w3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), y3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1), C3 = [
  g3,
  w3,
  y3
];
function b3(e, t, n, a, r, o) {
  return m(), f("svg", _3, C3);
}
var $3 = /* @__PURE__ */ v(p3, [["render", b3], ["__file", "coin.vue"]]), E3 = {
  name: "ColdDrink"
}, x3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1), z3 = [
  S3
];
function M3(e, t, n, a, r, o) {
  return m(), f("svg", x3, z3);
}
var D3 = /* @__PURE__ */ v(E3, [["render", M3], ["__file", "cold-drink.vue"]]), H3 = {
  name: "CollectionTag"
}, T3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1), V3 = [
  R3
];
function A3(e, t, n, a, r, o) {
  return m(), f("svg", T3, V3);
}
var k3 = /* @__PURE__ */ v(H3, [["render", A3], ["__file", "collection-tag.vue"]]), I3 = {
  name: "Collection"
}, L3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, P3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), B3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1), O3 = [
  P3,
  B3
];
function N3(e, t, n, a, r, o) {
  return m(), f("svg", L3, O3);
}
var F3 = /* @__PURE__ */ v(I3, [["render", N3], ["__file", "collection.vue"]]), U3 = {
  name: "Comment"
}, W3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1), q3 = [
  j3
];
function G3(e, t, n, a, r, o) {
  return m(), f("svg", W3, q3);
}
var Y3 = /* @__PURE__ */ v(U3, [["render", G3], ["__file", "comment.vue"]]), Z3 = {
  name: "Compass"
}, X3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Q3 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1), J3 = [
  K3,
  Q3
];
function e6(e, t, n, a, r, o) {
  return m(), f("svg", X3, J3);
}
var t6 = /* @__PURE__ */ v(Z3, [["render", e6], ["__file", "compass.vue"]]), n6 = {
  name: "Connection"
}, a6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, r6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), o6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1), i6 = [
  r6,
  o6
];
function c6(e, t, n, a, r, o) {
  return m(), f("svg", a6, i6);
}
var l6 = /* @__PURE__ */ v(n6, [["render", c6], ["__file", "connection.vue"]]), s6 = {
  name: "Coordinate"
}, d6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), m6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), f6 = [
  u6,
  m6
];
function h6(e, t, n, a, r, o) {
  return m(), f("svg", d6, f6);
}
var v6 = /* @__PURE__ */ v(s6, [["render", h6], ["__file", "coordinate.vue"]]), p6 = {
  name: "CopyDocument"
}, _6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, g6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), w6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1), y6 = [
  g6,
  w6
];
function C6(e, t, n, a, r, o) {
  return m(), f("svg", _6, y6);
}
var b6 = /* @__PURE__ */ v(p6, [["render", C6], ["__file", "copy-document.vue"]]), $6 = {
  name: "Cpu"
}, E6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, x6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), S6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1), z6 = [
  x6,
  S6
];
function M6(e, t, n, a, r, o) {
  return m(), f("svg", E6, z6);
}
var D6 = /* @__PURE__ */ v($6, [["render", M6], ["__file", "cpu.vue"]]), H6 = {
  name: "CreditCard"
}, T6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), V6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1), A6 = [
  R6,
  V6
];
function k6(e, t, n, a, r, o) {
  return m(), f("svg", T6, A6);
}
var I6 = /* @__PURE__ */ v(H6, [["render", k6], ["__file", "credit-card.vue"]]), L6 = {
  name: "Crop"
}, P6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), O6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1), N6 = [
  B6,
  O6
];
function F6(e, t, n, a, r, o) {
  return m(), f("svg", P6, N6);
}
var U6 = /* @__PURE__ */ v(L6, [["render", F6], ["__file", "crop.vue"]]), W6 = {
  name: "DArrowLeft"
}, j6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), G6 = [
  q6
];
function Y6(e, t, n, a, r, o) {
  return m(), f("svg", j6, G6);
}
var Z6 = /* @__PURE__ */ v(W6, [["render", Y6], ["__file", "d-arrow-left.vue"]]), X6 = {
  name: "DArrowRight"
}, K6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Q6 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), J6 = [
  Q6
];
function eu(e, t, n, a, r, o) {
  return m(), f("svg", K6, J6);
}
var tu = /* @__PURE__ */ v(X6, [["render", eu], ["__file", "d-arrow-right.vue"]]), nu = {
  name: "DCaret"
}, au = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ru = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1), ou = [
  ru
];
function iu(e, t, n, a, r, o) {
  return m(), f("svg", au, ou);
}
var cu = /* @__PURE__ */ v(nu, [["render", iu], ["__file", "d-caret.vue"]]), lu = {
  name: "DataAnalysis"
}, su = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, du = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1), uu = [
  du
];
function mu(e, t, n, a, r, o) {
  return m(), f("svg", su, uu);
}
var fu = /* @__PURE__ */ v(lu, [["render", mu], ["__file", "data-analysis.vue"]]), hu = {
  name: "DataBoard"
}, vu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), _u = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), gu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1), wu = [
  pu,
  _u,
  gu
];
function yu(e, t, n, a, r, o) {
  return m(), f("svg", vu, wu);
}
var Cu = /* @__PURE__ */ v(hu, [["render", yu], ["__file", "data-board.vue"]]), bu = {
  name: "DataLine"
}, $u = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Eu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1), xu = [
  Eu
];
function Su(e, t, n, a, r, o) {
  return m(), f("svg", $u, xu);
}
var zu = /* @__PURE__ */ v(bu, [["render", Su], ["__file", "data-line.vue"]]), Mu = {
  name: "DeleteFilled"
}, Du = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1), Tu = [
  Hu
];
function Ru(e, t, n, a, r, o) {
  return m(), f("svg", Du, Tu);
}
var Vu = /* @__PURE__ */ v(Mu, [["render", Ru], ["__file", "delete-filled.vue"]]), Au = {
  name: "DeleteLocation"
}, ku = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Iu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Lu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), Pu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), Bu = [
  Iu,
  Lu,
  Pu
];
function Ou(e, t, n, a, r, o) {
  return m(), f("svg", ku, Bu);
}
var Nu = /* @__PURE__ */ v(Au, [["render", Ou], ["__file", "delete-location.vue"]]), Fu = {
  name: "Delete"
}, Uu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), ju = [
  Wu
];
function qu(e, t, n, a, r, o) {
  return m(), f("svg", Uu, ju);
}
var Gu = /* @__PURE__ */ v(Fu, [["render", qu], ["__file", "delete.vue"]]), Yu = {
  name: "Dessert"
}, Zu = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xu = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1), Ku = [
  Xu
];
function Qu(e, t, n, a, r, o) {
  return m(), f("svg", Zu, Ku);
}
var Ju = /* @__PURE__ */ v(Yu, [["render", Qu], ["__file", "dessert.vue"]]), e8 = {
  name: "Discount"
}, t8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, n8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), a8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), r8 = [
  n8,
  a8
];
function o8(e, t, n, a, r, o) {
  return m(), f("svg", t8, r8);
}
var i8 = /* @__PURE__ */ v(e8, [["render", o8], ["__file", "discount.vue"]]), c8 = {
  name: "DishDot"
}, l8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1), d8 = [
  s8
];
function u8(e, t, n, a, r, o) {
  return m(), f("svg", l8, d8);
}
var m8 = /* @__PURE__ */ v(c8, [["render", u8], ["__file", "dish-dot.vue"]]), f8 = {
  name: "Dish"
}, h8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, v8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1), p8 = [
  v8
];
function _8(e, t, n, a, r, o) {
  return m(), f("svg", h8, p8);
}
var g8 = /* @__PURE__ */ v(f8, [["render", _8], ["__file", "dish.vue"]]), w8 = {
  name: "DocumentAdd"
}, y8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, C8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), b8 = [
  C8
];
function $8(e, t, n, a, r, o) {
  return m(), f("svg", y8, b8);
}
var E8 = /* @__PURE__ */ v(w8, [["render", $8], ["__file", "document-add.vue"]]), x8 = {
  name: "DocumentChecked"
}, S8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, z8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1), M8 = [
  z8
];
function D8(e, t, n, a, r, o) {
  return m(), f("svg", S8, M8);
}
var H8 = /* @__PURE__ */ v(x8, [["render", D8], ["__file", "document-checked.vue"]]), T8 = {
  name: "DocumentCopy"
}, R8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, V8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1), A8 = [
  V8
];
function k8(e, t, n, a, r, o) {
  return m(), f("svg", R8, A8);
}
var I8 = /* @__PURE__ */ v(T8, [["render", k8], ["__file", "document-copy.vue"]]), L8 = {
  name: "DocumentDelete"
}, P8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, B8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1), O8 = [
  B8
];
function N8(e, t, n, a, r, o) {
  return m(), f("svg", P8, O8);
}
var F8 = /* @__PURE__ */ v(L8, [["render", N8], ["__file", "document-delete.vue"]]), U8 = {
  name: "DocumentRemove"
}, W8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, j8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1), q8 = [
  j8
];
function G8(e, t, n, a, r, o) {
  return m(), f("svg", W8, q8);
}
var Y8 = /* @__PURE__ */ v(U8, [["render", G8], ["__file", "document-remove.vue"]]), Z8 = {
  name: "Document"
}, X8 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, K8 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), Q8 = [
  K8
];
function J8(e, t, n, a, r, o) {
  return m(), f("svg", X8, Q8);
}
var em = /* @__PURE__ */ v(Z8, [["render", J8], ["__file", "document.vue"]]), tm = {
  name: "Download"
}, nm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, am = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), rm = [
  am
];
function om(e, t, n, a, r, o) {
  return m(), f("svg", nm, rm);
}
var im = /* @__PURE__ */ v(tm, [["render", om], ["__file", "download.vue"]]), cm = {
  name: "Drizzling"
}, lm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1), dm = [
  sm
];
function um(e, t, n, a, r, o) {
  return m(), f("svg", lm, dm);
}
var mm = /* @__PURE__ */ v(cm, [["render", um], ["__file", "drizzling.vue"]]), fm = {
  name: "EditPen"
}, hm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vm = /* @__PURE__ */ u("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), pm = [
  vm
];
function _m(e, t, n, a, r, o) {
  return m(), f("svg", hm, pm);
}
var gm = /* @__PURE__ */ v(fm, [["render", _m], ["__file", "edit-pen.vue"]]), wm = {
  name: "Edit"
}, ym = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Cm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), bm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), $m = [
  Cm,
  bm
];
function Em(e, t, n, a, r, o) {
  return m(), f("svg", ym, $m);
}
var xm = /* @__PURE__ */ v(wm, [["render", Em], ["__file", "edit.vue"]]), Sm = {
  name: "ElemeFilled"
}, zm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Mm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1), Dm = [
  Mm
];
function Hm(e, t, n, a, r, o) {
  return m(), f("svg", zm, Dm);
}
var Tm = /* @__PURE__ */ v(Sm, [["render", Hm], ["__file", "eleme-filled.vue"]]), Rm = {
  name: "Eleme"
}, Vm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Am = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1), km = [
  Am
];
function Im(e, t, n, a, r, o) {
  return m(), f("svg", Vm, km);
}
var Lm = /* @__PURE__ */ v(Rm, [["render", Im], ["__file", "eleme.vue"]]), Pm = {
  name: "ElementPlus"
}, Bm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Om = /* @__PURE__ */ u("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1), Nm = [
  Om
];
function Fm(e, t, n, a, r, o) {
  return m(), f("svg", Bm, Nm);
}
var Um = /* @__PURE__ */ v(Pm, [["render", Fm], ["__file", "element-plus.vue"]]), Wm = {
  name: "Expand"
}, jm = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), Gm = [
  qm
];
function Ym(e, t, n, a, r, o) {
  return m(), f("svg", jm, Gm);
}
var Zm = /* @__PURE__ */ v(Wm, [["render", Ym], ["__file", "expand.vue"]]), Xm = {
  name: "Failed"
}, Km = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qm = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1), Jm = [
  Qm
];
function ef(e, t, n, a, r, o) {
  return m(), f("svg", Km, Jm);
}
var tf = /* @__PURE__ */ v(Xm, [["render", ef], ["__file", "failed.vue"]]), nf = {
  name: "Female"
}, af = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), of = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), cf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), lf = [
  rf,
  of,
  cf
];
function sf(e, t, n, a, r, o) {
  return m(), f("svg", af, lf);
}
var df = /* @__PURE__ */ v(nf, [["render", sf], ["__file", "female.vue"]]), uf = {
  name: "Files"
}, mf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ff = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1), hf = [
  ff
];
function vf(e, t, n, a, r, o) {
  return m(), f("svg", mf, hf);
}
var pf = /* @__PURE__ */ v(uf, [["render", vf], ["__file", "files.vue"]]), _f = {
  name: "Film"
}, gf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), yf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1), Cf = [
  wf,
  yf
];
function bf(e, t, n, a, r, o) {
  return m(), f("svg", gf, Cf);
}
var $f = /* @__PURE__ */ v(_f, [["render", bf], ["__file", "film.vue"]]), Ef = {
  name: "Filter"
}, xf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), zf = [
  Sf
];
function Mf(e, t, n, a, r, o) {
  return m(), f("svg", xf, zf);
}
var Df = /* @__PURE__ */ v(Ef, [["render", Mf], ["__file", "filter.vue"]]), Hf = {
  name: "Finished"
}, Tf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1), Vf = [
  Rf
];
function Af(e, t, n, a, r, o) {
  return m(), f("svg", Tf, Vf);
}
var kf = /* @__PURE__ */ v(Hf, [["render", Af], ["__file", "finished.vue"]]), If = {
  name: "FirstAidKit"
}, Lf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), Bf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), Of = [
  Pf,
  Bf
];
function Nf(e, t, n, a, r, o) {
  return m(), f("svg", Lf, Of);
}
var Ff = /* @__PURE__ */ v(If, [["render", Nf], ["__file", "first-aid-kit.vue"]]), Uf = {
  name: "Flag"
}, Wf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1), qf = [
  jf
];
function Gf(e, t, n, a, r, o) {
  return m(), f("svg", Wf, qf);
}
var Yf = /* @__PURE__ */ v(Uf, [["render", Gf], ["__file", "flag.vue"]]), Zf = {
  name: "Fold"
}, Xf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kf = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1), Qf = [
  Kf
];
function Jf(e, t, n, a, r, o) {
  return m(), f("svg", Xf, Qf);
}
var eh = /* @__PURE__ */ v(Zf, [["render", Jf], ["__file", "fold.vue"]]), th = {
  name: "FolderAdd"
}, nh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ah = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1), rh = [
  ah
];
function oh(e, t, n, a, r, o) {
  return m(), f("svg", nh, rh);
}
var ih = /* @__PURE__ */ v(th, [["render", oh], ["__file", "folder-add.vue"]]), ch = {
  name: "FolderChecked"
}, lh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1), dh = [
  sh
];
function uh(e, t, n, a, r, o) {
  return m(), f("svg", lh, dh);
}
var mh = /* @__PURE__ */ v(ch, [["render", uh], ["__file", "folder-checked.vue"]]), fh = {
  name: "FolderDelete"
}, hh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1), ph = [
  vh
];
function _h(e, t, n, a, r, o) {
  return m(), f("svg", hh, ph);
}
var gh = /* @__PURE__ */ v(fh, [["render", _h], ["__file", "folder-delete.vue"]]), wh = {
  name: "FolderOpened"
}, yh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ch = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1), bh = [
  Ch
];
function $h(e, t, n, a, r, o) {
  return m(), f("svg", yh, bh);
}
var Eh = /* @__PURE__ */ v(wh, [["render", $h], ["__file", "folder-opened.vue"]]), xh = {
  name: "FolderRemove"
}, Sh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1), Mh = [
  zh
];
function Dh(e, t, n, a, r, o) {
  return m(), f("svg", Sh, Mh);
}
var Hh = /* @__PURE__ */ v(xh, [["render", Dh], ["__file", "folder-remove.vue"]]), Th = {
  name: "Folder"
}, Rh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1), Ah = [
  Vh
];
function kh(e, t, n, a, r, o) {
  return m(), f("svg", Rh, Ah);
}
var Ih = /* @__PURE__ */ v(Th, [["render", kh], ["__file", "folder.vue"]]), Lh = {
  name: "Food"
}, Ph = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1), Oh = [
  Bh
];
function Nh(e, t, n, a, r, o) {
  return m(), f("svg", Ph, Oh);
}
var Fh = /* @__PURE__ */ v(Lh, [["render", Nh], ["__file", "food.vue"]]), Uh = {
  name: "Football"
}, Wh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), qh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1), Gh = [
  jh,
  qh
];
function Yh(e, t, n, a, r, o) {
  return m(), f("svg", Wh, Gh);
}
var Zh = /* @__PURE__ */ v(Uh, [["render", Yh], ["__file", "football.vue"]]), Xh = {
  name: "ForkSpoon"
}, Kh = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qh = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), Jh = [
  Qh
];
function e5(e, t, n, a, r, o) {
  return m(), f("svg", Kh, Jh);
}
var t5 = /* @__PURE__ */ v(Xh, [["render", e5], ["__file", "fork-spoon.vue"]]), n5 = {
  name: "Fries"
}, a5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, r5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1), o5 = [
  r5
];
function i5(e, t, n, a, r, o) {
  return m(), f("svg", a5, o5);
}
var c5 = /* @__PURE__ */ v(n5, [["render", i5], ["__file", "fries.vue"]]), l5 = {
  name: "FullScreen"
}, s5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, d5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), u5 = [
  d5
];
function m5(e, t, n, a, r, o) {
  return m(), f("svg", s5, u5);
}
var f5 = /* @__PURE__ */ v(l5, [["render", m5], ["__file", "full-screen.vue"]]), h5 = {
  name: "GobletFull"
}, v5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1), _5 = [
  p5
];
function g5(e, t, n, a, r, o) {
  return m(), f("svg", v5, _5);
}
var w5 = /* @__PURE__ */ v(h5, [["render", g5], ["__file", "goblet-full.vue"]]), y5 = {
  name: "GobletSquareFull"
}, C5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, b5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1), $5 = [
  b5
];
function E5(e, t, n, a, r, o) {
  return m(), f("svg", C5, $5);
}
var x5 = /* @__PURE__ */ v(y5, [["render", E5], ["__file", "goblet-square-full.vue"]]), S5 = {
  name: "GobletSquare"
}, z5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, M5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1), D5 = [
  M5
];
function H5(e, t, n, a, r, o) {
  return m(), f("svg", z5, D5);
}
var T5 = /* @__PURE__ */ v(S5, [["render", H5], ["__file", "goblet-square.vue"]]), R5 = {
  name: "Goblet"
}, V5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, A5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1), k5 = [
  A5
];
function I5(e, t, n, a, r, o) {
  return m(), f("svg", V5, k5);
}
var L5 = /* @__PURE__ */ v(R5, [["render", I5], ["__file", "goblet.vue"]]), P5 = {
  name: "GoldMedal"
}, B5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, O5 = /* @__PURE__ */ u("path", {
  d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z",
  fill: "currentColor"
}, null, -1), N5 = /* @__PURE__ */ u("path", {
  d: "M544 480H416v64h64v192h-64v64h192v-64h-64z",
  fill: "currentColor"
}, null, -1), F5 = [
  O5,
  N5
];
function U5(e, t, n, a, r, o) {
  return m(), f("svg", B5, F5);
}
var W5 = /* @__PURE__ */ v(P5, [["render", U5], ["__file", "gold-medal.vue"]]), j5 = {
  name: "GoodsFilled"
}, q5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, G5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1), Y5 = [
  G5
];
function Z5(e, t, n, a, r, o) {
  return m(), f("svg", q5, Y5);
}
var X5 = /* @__PURE__ */ v(j5, [["render", Z5], ["__file", "goods-filled.vue"]]), K5 = {
  name: "Goods"
}, Q5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J5 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1), ev = [
  J5
];
function tv(e, t, n, a, r, o) {
  return m(), f("svg", Q5, ev);
}
var nv = /* @__PURE__ */ v(K5, [["render", tv], ["__file", "goods.vue"]]), av = {
  name: "Grape"
}, rv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ov = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), iv = [
  ov
];
function cv(e, t, n, a, r, o) {
  return m(), f("svg", rv, iv);
}
var lv = /* @__PURE__ */ v(av, [["render", cv], ["__file", "grape.vue"]]), sv = {
  name: "Grid"
}, dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uv = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1), mv = [
  uv
];
function fv(e, t, n, a, r, o) {
  return m(), f("svg", dv, mv);
}
var hv = /* @__PURE__ */ v(sv, [["render", fv], ["__file", "grid.vue"]]), vv = {
  name: "Guide"
}, pv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _v = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), gv = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1), wv = [
  _v,
  gv
];
function yv(e, t, n, a, r, o) {
  return m(), f("svg", pv, wv);
}
var Cv = /* @__PURE__ */ v(vv, [["render", yv], ["__file", "guide.vue"]]), bv = {
  name: "Handbag"
}, $v = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Ev = /* @__PURE__ */ u("path", {
  d: "M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z",
  fill: "currentColor"
}, null, -1), xv = [
  Ev
];
function Sv(e, t, n, a, r, o) {
  return m(), f("svg", $v, xv);
}
var zv = /* @__PURE__ */ v(bv, [["render", Sv], ["__file", "handbag.vue"]]), Mv = {
  name: "Headset"
}, Dv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hv = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1), Tv = [
  Hv
];
function Rv(e, t, n, a, r, o) {
  return m(), f("svg", Dv, Tv);
}
var Vv = /* @__PURE__ */ v(Mv, [["render", Rv], ["__file", "headset.vue"]]), Av = {
  name: "HelpFilled"
}, kv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Iv = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1), Lv = [
  Iv
];
function Pv(e, t, n, a, r, o) {
  return m(), f("svg", kv, Lv);
}
var Bv = /* @__PURE__ */ v(Av, [["render", Pv], ["__file", "help-filled.vue"]]), Ov = {
  name: "Help"
}, Nv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fv = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Uv = [
  Fv
];
function Wv(e, t, n, a, r, o) {
  return m(), f("svg", Nv, Uv);
}
var jv = /* @__PURE__ */ v(Ov, [["render", Wv], ["__file", "help.vue"]]), qv = {
  name: "Hide"
}, Gv = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yv = /* @__PURE__ */ u("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Zv = /* @__PURE__ */ u("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Xv = [
  Yv,
  Zv
];
function Kv(e, t, n, a, r, o) {
  return m(), f("svg", Gv, Xv);
}
var Qv = /* @__PURE__ */ v(qv, [["render", Kv], ["__file", "hide.vue"]]), Jv = {
  name: "Histogram"
}, ep = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1), np = [
  tp
];
function ap(e, t, n, a, r, o) {
  return m(), f("svg", ep, np);
}
var rp = /* @__PURE__ */ v(Jv, [["render", ap], ["__file", "histogram.vue"]]), op = {
  name: "HomeFilled"
}, ip = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), lp = [
  cp
];
function sp(e, t, n, a, r, o) {
  return m(), f("svg", ip, lp);
}
var dp = /* @__PURE__ */ v(op, [["render", sp], ["__file", "home-filled.vue"]]), up = {
  name: "HotWater"
}, mp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1), hp = [
  fp
];
function vp(e, t, n, a, r, o) {
  return m(), f("svg", mp, hp);
}
var pp = /* @__PURE__ */ v(up, [["render", vp], ["__file", "hot-water.vue"]]), _p = {
  name: "House"
}, gp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1), yp = [
  wp
];
function Cp(e, t, n, a, r, o) {
  return m(), f("svg", gp, yp);
}
var bp = /* @__PURE__ */ v(_p, [["render", Cp], ["__file", "house.vue"]]), $p = {
  name: "IceCreamRound"
}, Ep = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1), Sp = [
  xp
];
function zp(e, t, n, a, r, o) {
  return m(), f("svg", Ep, Sp);
}
var Mp = /* @__PURE__ */ v($p, [["render", zp], ["__file", "ice-cream-round.vue"]]), Dp = {
  name: "IceCreamSquare"
}, Hp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), Rp = [
  Tp
];
function Vp(e, t, n, a, r, o) {
  return m(), f("svg", Hp, Rp);
}
var Ap = /* @__PURE__ */ v(Dp, [["render", Vp], ["__file", "ice-cream-square.vue"]]), kp = {
  name: "IceCream"
}, Ip = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Lp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1), Pp = [
  Lp
];
function Bp(e, t, n, a, r, o) {
  return m(), f("svg", Ip, Pp);
}
var Op = /* @__PURE__ */ v(kp, [["render", Bp], ["__file", "ice-cream.vue"]]), Np = {
  name: "IceDrink"
}, Fp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Up = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1), Wp = [
  Up
];
function jp(e, t, n, a, r, o) {
  return m(), f("svg", Fp, Wp);
}
var qp = /* @__PURE__ */ v(Np, [["render", jp], ["__file", "ice-drink.vue"]]), Gp = {
  name: "IceTea"
}, Yp = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Zp = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1), Xp = [
  Zp
];
function Kp(e, t, n, a, r, o) {
  return m(), f("svg", Yp, Xp);
}
var Qp = /* @__PURE__ */ v(Gp, [["render", Kp], ["__file", "ice-tea.vue"]]), Jp = {
  name: "InfoFilled"
}, e_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, t_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), n_ = [
  t_
];
function a_(e, t, n, a, r, o) {
  return m(), f("svg", e_, n_);
}
var va = /* @__PURE__ */ v(Jp, [["render", a_], ["__file", "info-filled.vue"]]), r_ = {
  name: "Iphone"
}, o_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, i_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1), c_ = [
  i_
];
function l_(e, t, n, a, r, o) {
  return m(), f("svg", o_, c_);
}
var s_ = /* @__PURE__ */ v(r_, [["render", l_], ["__file", "iphone.vue"]]), d_ = {
  name: "Key"
}, u_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, m_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1), f_ = [
  m_
];
function h_(e, t, n, a, r, o) {
  return m(), f("svg", u_, f_);
}
var v_ = /* @__PURE__ */ v(d_, [["render", h_], ["__file", "key.vue"]]), p_ = {
  name: "KnifeFork"
}, __ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, g_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1), w_ = [
  g_
];
function y_(e, t, n, a, r, o) {
  return m(), f("svg", __, w_);
}
var C_ = /* @__PURE__ */ v(p_, [["render", y_], ["__file", "knife-fork.vue"]]), b_ = {
  name: "Lightning"
}, $_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, E_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), x_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1), S_ = [
  E_,
  x_
];
function z_(e, t, n, a, r, o) {
  return m(), f("svg", $_, S_);
}
var M_ = /* @__PURE__ */ v(b_, [["render", z_], ["__file", "lightning.vue"]]), D_ = {
  name: "Link"
}, H_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1), R_ = [
  T_
];
function V_(e, t, n, a, r, o) {
  return m(), f("svg", H_, R_);
}
var A_ = /* @__PURE__ */ v(D_, [["render", V_], ["__file", "link.vue"]]), k_ = {
  name: "List"
}, I_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, L_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1), P_ = [
  L_
];
function B_(e, t, n, a, r, o) {
  return m(), f("svg", I_, P_);
}
var O_ = /* @__PURE__ */ v(k_, [["render", B_], ["__file", "list.vue"]]), N_ = {
  name: "Loading"
}, F_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, U_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), W_ = [
  U_
];
function j_(e, t, n, a, r, o) {
  return m(), f("svg", F_, W_);
}
var q_ = /* @__PURE__ */ v(N_, [["render", j_], ["__file", "loading.vue"]]), G_ = {
  name: "LocationFilled"
}, Y_ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z_ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1), X_ = [
  Z_
];
function K_(e, t, n, a, r, o) {
  return m(), f("svg", Y_, X_);
}
var Q_ = /* @__PURE__ */ v(G_, [["render", K_], ["__file", "location-filled.vue"]]), J_ = {
  name: "LocationInformation"
}, e9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, t9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), n9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), a9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), r9 = [
  t9,
  n9,
  a9
];
function o9(e, t, n, a, r, o) {
  return m(), f("svg", e9, r9);
}
var i9 = /* @__PURE__ */ v(J_, [["render", o9], ["__file", "location-information.vue"]]), c9 = {
  name: "Location"
}, l9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, s9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), d9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), u9 = [
  s9,
  d9
];
function m9(e, t, n, a, r, o) {
  return m(), f("svg", l9, u9);
}
var f9 = /* @__PURE__ */ v(c9, [["render", m9], ["__file", "location.vue"]]), h9 = {
  name: "Lock"
}, v9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, p9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), _9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1), g9 = [
  p9,
  _9
];
function w9(e, t, n, a, r, o) {
  return m(), f("svg", v9, g9);
}
var y9 = /* @__PURE__ */ v(h9, [["render", w9], ["__file", "lock.vue"]]), C9 = {
  name: "Lollipop"
}, b9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1), E9 = [
  $9
];
function x9(e, t, n, a, r, o) {
  return m(), f("svg", b9, E9);
}
var S9 = /* @__PURE__ */ v(C9, [["render", x9], ["__file", "lollipop.vue"]]), z9 = {
  name: "MagicStick"
}, M9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), H9 = [
  D9
];
function T9(e, t, n, a, r, o) {
  return m(), f("svg", M9, H9);
}
var R9 = /* @__PURE__ */ v(z9, [["render", T9], ["__file", "magic-stick.vue"]]), V9 = {
  name: "Magnet"
}, A9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1), I9 = [
  k9
];
function L9(e, t, n, a, r, o) {
  return m(), f("svg", A9, I9);
}
var P9 = /* @__PURE__ */ v(V9, [["render", L9], ["__file", "magnet.vue"]]), B9 = {
  name: "Male"
}, O9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, N9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), F9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), U9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1), W9 = [
  N9,
  F9,
  U9
];
function j9(e, t, n, a, r, o) {
  return m(), f("svg", O9, W9);
}
var q9 = /* @__PURE__ */ v(B9, [["render", j9], ["__file", "male.vue"]]), G9 = {
  name: "Management"
}, Y9 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Z9 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1), X9 = [
  Z9
];
function K9(e, t, n, a, r, o) {
  return m(), f("svg", Y9, X9);
}
var Q9 = /* @__PURE__ */ v(G9, [["render", K9], ["__file", "management.vue"]]), J9 = {
  name: "MapLocation"
}, e7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, t7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), n7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1), a7 = [
  t7,
  n7
];
function r7(e, t, n, a, r, o) {
  return m(), f("svg", e7, a7);
}
var o7 = /* @__PURE__ */ v(J9, [["render", r7], ["__file", "map-location.vue"]]), i7 = {
  name: "Medal"
}, c7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, l7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), s7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1), d7 = [
  l7,
  s7
];
function u7(e, t, n, a, r, o) {
  return m(), f("svg", c7, d7);
}
var m7 = /* @__PURE__ */ v(i7, [["render", u7], ["__file", "medal.vue"]]), f7 = {
  name: "Memo"
}, h7 = {
  version: "1.1",
  id: "a",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, v7 = /* @__PURE__ */ u("path", {
  d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
  fill: "currentColor"
}, null, -1), p7 = /* @__PURE__ */ u("path", {
  d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z",
  fill: "currentColor"
}, null, -1), _7 = /* @__PURE__ */ u("path", {
  d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zM480 704h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z",
  fill: "currentColor"
}, null, -1), g7 = [
  v7,
  p7,
  _7
];
function w7(e, t, n, a, r, o) {
  return m(), f("svg", h7, g7);
}
var y7 = /* @__PURE__ */ v(f7, [["render", w7], ["__file", "memo.vue"]]), C7 = {
  name: "Menu"
}, b7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1), E7 = [
  $7
];
function x7(e, t, n, a, r, o) {
  return m(), f("svg", b7, E7);
}
var S7 = /* @__PURE__ */ v(C7, [["render", x7], ["__file", "menu.vue"]]), z7 = {
  name: "MessageBox"
}, M7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, D7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1), H7 = [
  D7
];
function T7(e, t, n, a, r, o) {
  return m(), f("svg", M7, H7);
}
var R7 = /* @__PURE__ */ v(z7, [["render", T7], ["__file", "message-box.vue"]]), V7 = {
  name: "Message"
}, A7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, k7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), I7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), L7 = [
  k7,
  I7
];
function P7(e, t, n, a, r, o) {
  return m(), f("svg", A7, L7);
}
var B7 = /* @__PURE__ */ v(V7, [["render", P7], ["__file", "message.vue"]]), O7 = {
  name: "Mic"
}, N7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, F7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1), U7 = [
  F7
];
function W7(e, t, n, a, r, o) {
  return m(), f("svg", N7, U7);
}
var j7 = /* @__PURE__ */ v(O7, [["render", W7], ["__file", "mic.vue"]]), q7 = {
  name: "Microphone"
}, G7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Y7 = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1), Z7 = [
  Y7
];
function X7(e, t, n, a, r, o) {
  return m(), f("svg", G7, Z7);
}
var K7 = /* @__PURE__ */ v(q7, [["render", X7], ["__file", "microphone.vue"]]), Q7 = {
  name: "MilkTea"
}, J7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1), tg = [
  eg
];
function ng(e, t, n, a, r, o) {
  return m(), f("svg", J7, tg);
}
var ag = /* @__PURE__ */ v(Q7, [["render", ng], ["__file", "milk-tea.vue"]]), rg = {
  name: "Minus"
}, og = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ig = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), cg = [
  ig
];
function lg(e, t, n, a, r, o) {
  return m(), f("svg", og, cg);
}
var sg = /* @__PURE__ */ v(rg, [["render", lg], ["__file", "minus.vue"]]), dg = {
  name: "Money"
}, ug = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), fg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), hg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), vg = [
  mg,
  fg,
  hg
];
function pg(e, t, n, a, r, o) {
  return m(), f("svg", ug, vg);
}
var _g = /* @__PURE__ */ v(dg, [["render", pg], ["__file", "money.vue"]]), gg = {
  name: "Monitor"
}, wg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1), Cg = [
  yg
];
function bg(e, t, n, a, r, o) {
  return m(), f("svg", wg, Cg);
}
var $g = /* @__PURE__ */ v(gg, [["render", bg], ["__file", "monitor.vue"]]), Eg = {
  name: "MoonNight"
}, xg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), zg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1), Mg = [
  Sg,
  zg
];
function Dg(e, t, n, a, r, o) {
  return m(), f("svg", xg, Mg);
}
var Hg = /* @__PURE__ */ v(Eg, [["render", Dg], ["__file", "moon-night.vue"]]), Tg = {
  name: "Moon"
}, Rg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Vg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), Ag = [
  Vg
];
function kg(e, t, n, a, r, o) {
  return m(), f("svg", Rg, Ag);
}
var Ig = /* @__PURE__ */ v(Tg, [["render", kg], ["__file", "moon.vue"]]), Lg = {
  name: "MoreFilled"
}, Pg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Bg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), Og = [
  Bg
];
function Ng(e, t, n, a, r, o) {
  return m(), f("svg", Pg, Og);
}
var Fg = /* @__PURE__ */ v(Lg, [["render", Ng], ["__file", "more-filled.vue"]]), Ug = {
  name: "More"
}, Wg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), qg = [
  jg
];
function Gg(e, t, n, a, r, o) {
  return m(), f("svg", Wg, qg);
}
var Yg = /* @__PURE__ */ v(Ug, [["render", Gg], ["__file", "more.vue"]]), Zg = {
  name: "MostlyCloudy"
}, Xg = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Kg = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1), Qg = [
  Kg
];
function Jg(e, t, n, a, r, o) {
  return m(), f("svg", Xg, Qg);
}
var ew = /* @__PURE__ */ v(Zg, [["render", Jg], ["__file", "mostly-cloudy.vue"]]), tw = {
  name: "Mouse"
}, nw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, aw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), rw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1), ow = [
  aw,
  rw
];
function iw(e, t, n, a, r, o) {
  return m(), f("svg", nw, ow);
}
var cw = /* @__PURE__ */ v(tw, [["render", iw], ["__file", "mouse.vue"]]), lw = {
  name: "Mug"
}, sw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1), uw = [
  dw
];
function mw(e, t, n, a, r, o) {
  return m(), f("svg", sw, uw);
}
var fw = /* @__PURE__ */ v(lw, [["render", mw], ["__file", "mug.vue"]]), hw = {
  name: "MuteNotification"
}, vw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), _w = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), gw = [
  pw,
  _w
];
function ww(e, t, n, a, r, o) {
  return m(), f("svg", vw, gw);
}
var yw = /* @__PURE__ */ v(hw, [["render", ww], ["__file", "mute-notification.vue"]]), Cw = {
  name: "Mute"
}, bw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $w = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), Ew = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), xw = [
  $w,
  Ew
];
function Sw(e, t, n, a, r, o) {
  return m(), f("svg", bw, xw);
}
var zw = /* @__PURE__ */ v(Cw, [["render", Sw], ["__file", "mute.vue"]]), Mw = {
  name: "NoSmoking"
}, Dw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), Tw = [
  Hw
];
function Rw(e, t, n, a, r, o) {
  return m(), f("svg", Dw, Tw);
}
var Vw = /* @__PURE__ */ v(Mw, [["render", Rw], ["__file", "no-smoking.vue"]]), Aw = {
  name: "Notebook"
}, kw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Iw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), Lw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), Pw = [
  Iw,
  Lw
];
function Bw(e, t, n, a, r, o) {
  return m(), f("svg", kw, Pw);
}
var Ow = /* @__PURE__ */ v(Aw, [["render", Bw], ["__file", "notebook.vue"]]), Nw = {
  name: "Notification"
}, Fw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), Ww = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), jw = [
  Uw,
  Ww
];
function qw(e, t, n, a, r, o) {
  return m(), f("svg", Fw, jw);
}
var Gw = /* @__PURE__ */ v(Nw, [["render", qw], ["__file", "notification.vue"]]), Yw = {
  name: "Odometer"
}, Zw = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Kw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), Qw = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1), Jw = [
  Xw,
  Kw,
  Qw
];
function ey(e, t, n, a, r, o) {
  return m(), f("svg", Zw, Jw);
}
var ty = /* @__PURE__ */ v(Yw, [["render", ey], ["__file", "odometer.vue"]]), ny = {
  name: "OfficeBuilding"
}, ay = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ry = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), oy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), iy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1), cy = [
  ry,
  oy,
  iy
];
function ly(e, t, n, a, r, o) {
  return m(), f("svg", ay, cy);
}
var sy = /* @__PURE__ */ v(ny, [["render", ly], ["__file", "office-building.vue"]]), dy = {
  name: "Open"
}, uy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, my = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), fy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), hy = [
  my,
  fy
];
function vy(e, t, n, a, r, o) {
  return m(), f("svg", uy, hy);
}
var py = /* @__PURE__ */ v(dy, [["render", vy], ["__file", "open.vue"]]), _y = {
  name: "Operation"
}, gy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), yy = [
  wy
];
function Cy(e, t, n, a, r, o) {
  return m(), f("svg", gy, yy);
}
var by = /* @__PURE__ */ v(_y, [["render", Cy], ["__file", "operation.vue"]]), $y = {
  name: "Opportunity"
}, Ey = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1), Sy = [
  xy
];
function zy(e, t, n, a, r, o) {
  return m(), f("svg", Ey, Sy);
}
var My = /* @__PURE__ */ v($y, [["render", zy], ["__file", "opportunity.vue"]]), Dy = {
  name: "Orange"
}, Hy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ty = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1), Ry = [
  Ty
];
function Vy(e, t, n, a, r, o) {
  return m(), f("svg", Hy, Ry);
}
var Ay = /* @__PURE__ */ v(Dy, [["render", Vy], ["__file", "orange.vue"]]), ky = {
  name: "Paperclip"
}, Iy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ly = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), Py = [
  Ly
];
function By(e, t, n, a, r, o) {
  return m(), f("svg", Iy, Py);
}
var Oy = /* @__PURE__ */ v(ky, [["render", By], ["__file", "paperclip.vue"]]), Ny = {
  name: "PartlyCloudy"
}, Fy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), Wy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1), jy = [
  Uy,
  Wy
];
function qy(e, t, n, a, r, o) {
  return m(), f("svg", Fy, jy);
}
var Gy = /* @__PURE__ */ v(Ny, [["render", qy], ["__file", "partly-cloudy.vue"]]), Yy = {
  name: "Pear"
}, Zy = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xy = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1), Ky = [
  Xy
];
function Qy(e, t, n, a, r, o) {
  return m(), f("svg", Zy, Ky);
}
var Jy = /* @__PURE__ */ v(Yy, [["render", Qy], ["__file", "pear.vue"]]), eC = {
  name: "PhoneFilled"
}, tC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, nC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1), aC = [
  nC
];
function rC(e, t, n, a, r, o) {
  return m(), f("svg", tC, aC);
}
var oC = /* @__PURE__ */ v(eC, [["render", rC], ["__file", "phone-filled.vue"]]), iC = {
  name: "Phone"
}, cC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1), sC = [
  lC
];
function dC(e, t, n, a, r, o) {
  return m(), f("svg", cC, sC);
}
var uC = /* @__PURE__ */ v(iC, [["render", dC], ["__file", "phone.vue"]]), mC = {
  name: "PictureFilled"
}, fC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1), vC = [
  hC
];
function pC(e, t, n, a, r, o) {
  return m(), f("svg", fC, vC);
}
var _C = /* @__PURE__ */ v(mC, [["render", pC], ["__file", "picture-filled.vue"]]), gC = {
  name: "PictureRounded"
}, wC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), CC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1), bC = [
  yC,
  CC
];
function $C(e, t, n, a, r, o) {
  return m(), f("svg", wC, bC);
}
var EC = /* @__PURE__ */ v(gC, [["render", $C], ["__file", "picture-rounded.vue"]]), xC = {
  name: "Picture"
}, SC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, zC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), MC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), DC = [
  zC,
  MC
];
function HC(e, t, n, a, r, o) {
  return m(), f("svg", SC, DC);
}
var TC = /* @__PURE__ */ v(xC, [["render", HC], ["__file", "picture.vue"]]), RC = {
  name: "PieChart"
}, VC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, AC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), kC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1), IC = [
  AC,
  kC
];
function LC(e, t, n, a, r, o) {
  return m(), f("svg", VC, IC);
}
var PC = /* @__PURE__ */ v(RC, [["render", LC], ["__file", "pie-chart.vue"]]), BC = {
  name: "Place"
}, OC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), FC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), UC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1), WC = [
  NC,
  FC,
  UC
];
function jC(e, t, n, a, r, o) {
  return m(), f("svg", OC, WC);
}
var qC = /* @__PURE__ */ v(BC, [["render", jC], ["__file", "place.vue"]]), GC = {
  name: "Platform"
}, YC = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ZC = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1), XC = [
  ZC
];
function KC(e, t, n, a, r, o) {
  return m(), f("svg", YC, XC);
}
var QC = /* @__PURE__ */ v(GC, [["render", KC], ["__file", "platform.vue"]]), JC = {
  name: "Plus"
}, eb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), nb = [
  tb
];
function ab(e, t, n, a, r, o) {
  return m(), f("svg", eb, nb);
}
var rb = /* @__PURE__ */ v(JC, [["render", ab], ["__file", "plus.vue"]]), ob = {
  name: "Pointer"
}, ib = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1), lb = [
  cb
];
function sb(e, t, n, a, r, o) {
  return m(), f("svg", ib, lb);
}
var db = /* @__PURE__ */ v(ob, [["render", sb], ["__file", "pointer.vue"]]), ub = {
  name: "Position"
}, mb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1), hb = [
  fb
];
function vb(e, t, n, a, r, o) {
  return m(), f("svg", mb, hb);
}
var pb = /* @__PURE__ */ v(ub, [["render", vb], ["__file", "position.vue"]]), _b = {
  name: "Postcard"
}, gb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), yb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Cb = [
  wb,
  yb
];
function bb(e, t, n, a, r, o) {
  return m(), f("svg", gb, Cb);
}
var $b = /* @__PURE__ */ v(_b, [["render", bb], ["__file", "postcard.vue"]]), Eb = {
  name: "Pouring"
}, xb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Sb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1), zb = [
  Sb
];
function Mb(e, t, n, a, r, o) {
  return m(), f("svg", xb, zb);
}
var Db = /* @__PURE__ */ v(Eb, [["render", Mb], ["__file", "pouring.vue"]]), Hb = {
  name: "Present"
}, Tb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Rb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), Vb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), Ab = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), kb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Ib = [
  Rb,
  Vb,
  Ab,
  kb
];
function Lb(e, t, n, a, r, o) {
  return m(), f("svg", Tb, Ib);
}
var Pb = /* @__PURE__ */ v(Hb, [["render", Lb], ["__file", "present.vue"]]), Bb = {
  name: "PriceTag"
}, Ob = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), Fb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Ub = [
  Nb,
  Fb
];
function Wb(e, t, n, a, r, o) {
  return m(), f("svg", Ob, Ub);
}
var jb = /* @__PURE__ */ v(Bb, [["render", Wb], ["__file", "price-tag.vue"]]), qb = {
  name: "Printer"
}, Gb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Yb = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1), Zb = [
  Yb
];
function Xb(e, t, n, a, r, o) {
  return m(), f("svg", Gb, Zb);
}
var Kb = /* @__PURE__ */ v(qb, [["render", Xb], ["__file", "printer.vue"]]), Qb = {
  name: "Promotion"
}, Jb = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, e$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1), t$ = [
  e$
];
function n$(e, t, n, a, r, o) {
  return m(), f("svg", Jb, t$);
}
var a$ = /* @__PURE__ */ v(Qb, [["render", n$], ["__file", "promotion.vue"]]), r$ = {
  name: "QuartzWatch"
}, o$ = {
  version: "1.1",
  id: "a",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, i$ = /* @__PURE__ */ u("path", {
  d: "M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zM390.53 429.51c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zM633.47 429.51c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zM695.01 488.99c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z",
  fill: "currentColor"
}, null, -1), c$ = /* @__PURE__ */ u("path", {
  d: "M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z",
  fill: "currentColor"
}, null, -1), l$ = /* @__PURE__ */ u("path", {
  d: "M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zM624.99 593.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z",
  fill: "currentColor"
}, null, -1), s$ = [
  i$,
  c$,
  l$
];
function d$(e, t, n, a, r, o) {
  return m(), f("svg", o$, s$);
}
var u$ = /* @__PURE__ */ v(r$, [["render", d$], ["__file", "quartz-watch.vue"]]), m$ = {
  name: "QuestionFilled"
}, f$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, h$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1), v$ = [
  h$
];
function p$(e, t, n, a, r, o) {
  return m(), f("svg", f$, v$);
}
var _$ = /* @__PURE__ */ v(m$, [["render", p$], ["__file", "question-filled.vue"]]), g$ = {
  name: "Rank"
}, w$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1), C$ = [
  y$
];
function b$(e, t, n, a, r, o) {
  return m(), f("svg", w$, C$);
}
var $$ = /* @__PURE__ */ v(g$, [["render", b$], ["__file", "rank.vue"]]), E$ = {
  name: "ReadingLamp"
}, x$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, S$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), z$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1), M$ = [
  S$,
  z$
];
function D$(e, t, n, a, r, o) {
  return m(), f("svg", x$, M$);
}
var H$ = /* @__PURE__ */ v(E$, [["render", D$], ["__file", "reading-lamp.vue"]]), T$ = {
  name: "Reading"
}, R$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, V$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), A$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1), k$ = [
  V$,
  A$
];
function I$(e, t, n, a, r, o) {
  return m(), f("svg", R$, k$);
}
var L$ = /* @__PURE__ */ v(T$, [["render", I$], ["__file", "reading.vue"]]), P$ = {
  name: "RefreshLeft"
}, B$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, O$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), N$ = [
  O$
];
function F$(e, t, n, a, r, o) {
  return m(), f("svg", B$, N$);
}
var U$ = /* @__PURE__ */ v(P$, [["render", F$], ["__file", "refresh-left.vue"]]), W$ = {
  name: "RefreshRight"
}, j$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, q$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), G$ = [
  q$
];
function Y$(e, t, n, a, r, o) {
  return m(), f("svg", j$, G$);
}
var Z$ = /* @__PURE__ */ v(W$, [["render", Y$], ["__file", "refresh-right.vue"]]), X$ = {
  name: "Refresh"
}, K$ = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Q$ = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), J$ = [
  Q$
];
function eE(e, t, n, a, r, o) {
  return m(), f("svg", K$, J$);
}
var tE = /* @__PURE__ */ v(X$, [["render", eE], ["__file", "refresh.vue"]]), nE = {
  name: "Refrigerator"
}, aE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1), oE = [
  rE
];
function iE(e, t, n, a, r, o) {
  return m(), f("svg", aE, oE);
}
var cE = /* @__PURE__ */ v(nE, [["render", iE], ["__file", "refrigerator.vue"]]), lE = {
  name: "RemoveFilled"
}, sE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1), uE = [
  dE
];
function mE(e, t, n, a, r, o) {
  return m(), f("svg", sE, uE);
}
var fE = /* @__PURE__ */ v(lE, [["render", mE], ["__file", "remove-filled.vue"]]), hE = {
  name: "Remove"
}, vE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _E = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), gE = [
  pE,
  _E
];
function wE(e, t, n, a, r, o) {
  return m(), f("svg", vE, gE);
}
var yE = /* @__PURE__ */ v(hE, [["render", wE], ["__file", "remove.vue"]]), CE = {
  name: "Right"
}, bE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $E = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1), EE = [
  $E
];
function xE(e, t, n, a, r, o) {
  return m(), f("svg", bE, EE);
}
var SE = /* @__PURE__ */ v(CE, [["render", xE], ["__file", "right.vue"]]), zE = {
  name: "ScaleToOriginal"
}, ME = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, DE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), HE = [
  DE
];
function TE(e, t, n, a, r, o) {
  return m(), f("svg", ME, HE);
}
var RE = /* @__PURE__ */ v(zE, [["render", TE], ["__file", "scale-to-original.vue"]]), VE = {
  name: "School"
}, AE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), IE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), LE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1), PE = [
  kE,
  IE,
  LE
];
function BE(e, t, n, a, r, o) {
  return m(), f("svg", AE, PE);
}
var OE = /* @__PURE__ */ v(VE, [["render", BE], ["__file", "school.vue"]]), NE = {
  name: "Scissor"
}, FE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, UE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1), WE = [
  UE
];
function jE(e, t, n, a, r, o) {
  return m(), f("svg", FE, WE);
}
var qE = /* @__PURE__ */ v(NE, [["render", jE], ["__file", "scissor.vue"]]), GE = {
  name: "Search"
}, YE = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ZE = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), XE = [
  ZE
];
function KE(e, t, n, a, r, o) {
  return m(), f("svg", YE, XE);
}
var QE = /* @__PURE__ */ v(GE, [["render", KE], ["__file", "search.vue"]]), JE = {
  name: "Select"
}, ex = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1), nx = [
  tx
];
function ax(e, t, n, a, r, o) {
  return m(), f("svg", ex, nx);
}
var rx = /* @__PURE__ */ v(JE, [["render", ax], ["__file", "select.vue"]]), ox = {
  name: "Sell"
}, ix = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1), lx = [
  cx
];
function sx(e, t, n, a, r, o) {
  return m(), f("svg", ix, lx);
}
var dx = /* @__PURE__ */ v(ox, [["render", sx], ["__file", "sell.vue"]]), ux = {
  name: "SemiSelect"
}, mx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1), hx = [
  fx
];
function vx(e, t, n, a, r, o) {
  return m(), f("svg", mx, hx);
}
var px = /* @__PURE__ */ v(ux, [["render", vx], ["__file", "semi-select.vue"]]), _x = {
  name: "Service"
}, gx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1), yx = [
  wx
];
function Cx(e, t, n, a, r, o) {
  return m(), f("svg", gx, yx);
}
var bx = /* @__PURE__ */ v(_x, [["render", Cx], ["__file", "service.vue"]]), $x = {
  name: "SetUp"
}, Ex = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), Sx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), zx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), Mx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), Dx = [
  xx,
  Sx,
  zx,
  Mx
];
function Hx(e, t, n, a, r, o) {
  return m(), f("svg", Ex, Dx);
}
var Tx = /* @__PURE__ */ v($x, [["render", Hx], ["__file", "set-up.vue"]]), Rx = {
  name: "Setting"
}, Vx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ax = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), kx = [
  Ax
];
function Ix(e, t, n, a, r, o) {
  return m(), f("svg", Vx, kx);
}
var Lx = /* @__PURE__ */ v(Rx, [["render", Ix], ["__file", "setting.vue"]]), Px = {
  name: "Share"
}, Bx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ox = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1), Nx = [
  Ox
];
function Fx(e, t, n, a, r, o) {
  return m(), f("svg", Bx, Nx);
}
var Ux = /* @__PURE__ */ v(Px, [["render", Fx], ["__file", "share.vue"]]), Wx = {
  name: "Ship"
}, jx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1), Gx = [
  qx
];
function Yx(e, t, n, a, r, o) {
  return m(), f("svg", jx, Gx);
}
var Zx = /* @__PURE__ */ v(Wx, [["render", Yx], ["__file", "ship.vue"]]), Xx = {
  name: "Shop"
}, Kx = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qx = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1), Jx = [
  Qx
];
function eS(e, t, n, a, r, o) {
  return m(), f("svg", Kx, Jx);
}
var tS = /* @__PURE__ */ v(Xx, [["render", eS], ["__file", "shop.vue"]]), nS = {
  name: "ShoppingBag"
}, aS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), oS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1), iS = [
  rS,
  oS
];
function cS(e, t, n, a, r, o) {
  return m(), f("svg", aS, iS);
}
var lS = /* @__PURE__ */ v(nS, [["render", cS], ["__file", "shopping-bag.vue"]]), sS = {
  name: "ShoppingCartFull"
}, dS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), mS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1), fS = [
  uS,
  mS
];
function hS(e, t, n, a, r, o) {
  return m(), f("svg", dS, fS);
}
var vS = /* @__PURE__ */ v(sS, [["render", hS], ["__file", "shopping-cart-full.vue"]]), pS = {
  name: "ShoppingCart"
}, _S = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), wS = [
  gS
];
function yS(e, t, n, a, r, o) {
  return m(), f("svg", _S, wS);
}
var CS = /* @__PURE__ */ v(pS, [["render", yS], ["__file", "shopping-cart.vue"]]), bS = {
  name: "ShoppingTrolley"
}, $S = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, ES = /* @__PURE__ */ u("path", {
  d: "M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zM807 640c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zM688 833c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z",
  fill: "currentColor"
}, null, -1), xS = [
  ES
];
function SS(e, t, n, a, r, o) {
  return m(), f("svg", $S, xS);
}
var zS = /* @__PURE__ */ v(bS, [["render", SS], ["__file", "shopping-trolley.vue"]]), MS = {
  name: "Smoking"
}, DS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, HS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), TS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), RS = [
  HS,
  TS
];
function VS(e, t, n, a, r, o) {
  return m(), f("svg", DS, RS);
}
var AS = /* @__PURE__ */ v(MS, [["render", VS], ["__file", "smoking.vue"]]), kS = {
  name: "Soccer"
}, IS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, LS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1), PS = [
  LS
];
function BS(e, t, n, a, r, o) {
  return m(), f("svg", IS, PS);
}
var OS = /* @__PURE__ */ v(kS, [["render", BS], ["__file", "soccer.vue"]]), NS = {
  name: "SoldOut"
}, FS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, US = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1), WS = [
  US
];
function jS(e, t, n, a, r, o) {
  return m(), f("svg", FS, WS);
}
var qS = /* @__PURE__ */ v(NS, [["render", jS], ["__file", "sold-out.vue"]]), GS = {
  name: "SortDown"
}, YS = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ZS = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1), XS = [
  ZS
];
function KS(e, t, n, a, r, o) {
  return m(), f("svg", YS, XS);
}
var QS = /* @__PURE__ */ v(GS, [["render", KS], ["__file", "sort-down.vue"]]), JS = {
  name: "SortUp"
}, ez = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1), nz = [
  tz
];
function az(e, t, n, a, r, o) {
  return m(), f("svg", ez, nz);
}
var rz = /* @__PURE__ */ v(JS, [["render", az], ["__file", "sort-up.vue"]]), oz = {
  name: "Sort"
}, iz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1), lz = [
  cz
];
function sz(e, t, n, a, r, o) {
  return m(), f("svg", iz, lz);
}
var dz = /* @__PURE__ */ v(oz, [["render", sz], ["__file", "sort.vue"]]), uz = {
  name: "Stamp"
}, mz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, fz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1), hz = [
  fz
];
function vz(e, t, n, a, r, o) {
  return m(), f("svg", mz, hz);
}
var pz = /* @__PURE__ */ v(uz, [["render", vz], ["__file", "stamp.vue"]]), _z = {
  name: "StarFilled"
}, gz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, wz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), yz = [
  wz
];
function Cz(e, t, n, a, r, o) {
  return m(), f("svg", gz, yz);
}
var bz = /* @__PURE__ */ v(_z, [["render", Cz], ["__file", "star-filled.vue"]]), $z = {
  name: "Star"
}, Ez = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), Sz = [
  xz
];
function zz(e, t, n, a, r, o) {
  return m(), f("svg", Ez, Sz);
}
var Mz = /* @__PURE__ */ v($z, [["render", zz], ["__file", "star.vue"]]), Dz = {
  name: "Stopwatch"
}, Hz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Tz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Rz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1), Vz = [
  Tz,
  Rz
];
function Az(e, t, n, a, r, o) {
  return m(), f("svg", Hz, Vz);
}
var kz = /* @__PURE__ */ v(Dz, [["render", Az], ["__file", "stopwatch.vue"]]), Iz = {
  name: "SuccessFilled"
}, Lz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Pz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), Bz = [
  Pz
];
function Oz(e, t, n, a, r, o) {
  return m(), f("svg", Lz, Bz);
}
var pa = /* @__PURE__ */ v(Iz, [["render", Oz], ["__file", "success-filled.vue"]]), Nz = {
  name: "Sugar"
}, Fz = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Uz = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1), Wz = [
  Uz
];
function jz(e, t, n, a, r, o) {
  return m(), f("svg", Fz, Wz);
}
var qz = /* @__PURE__ */ v(Nz, [["render", jz], ["__file", "sugar.vue"]]), Gz = {
  name: "SuitcaseLine"
}, Yz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, Zz = /* @__PURE__ */ u("path", {
  d: "M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z",
  fill: "currentColor"
}, null, -1), Xz = [
  Zz
];
function Kz(e, t, n, a, r, o) {
  return m(), f("svg", Yz, Xz);
}
var Qz = /* @__PURE__ */ v(Gz, [["render", Kz], ["__file", "suitcase-line.vue"]]), Jz = {
  name: "Suitcase"
}, eM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), nM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1), aM = [
  tM,
  nM
];
function rM(e, t, n, a, r, o) {
  return m(), f("svg", eM, aM);
}
var oM = /* @__PURE__ */ v(Jz, [["render", rM], ["__file", "suitcase.vue"]]), iM = {
  name: "Sunny"
}, cM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), sM = [
  lM
];
function dM(e, t, n, a, r, o) {
  return m(), f("svg", cM, sM);
}
var uM = /* @__PURE__ */ v(iM, [["render", dM], ["__file", "sunny.vue"]]), mM = {
  name: "Sunrise"
}, fM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, hM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1), vM = [
  hM
];
function pM(e, t, n, a, r, o) {
  return m(), f("svg", fM, vM);
}
var _M = /* @__PURE__ */ v(mM, [["render", pM], ["__file", "sunrise.vue"]]), gM = {
  name: "Sunset"
}, wM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, yM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), CM = [
  yM
];
function bM(e, t, n, a, r, o) {
  return m(), f("svg", wM, CM);
}
var $M = /* @__PURE__ */ v(gM, [["render", bM], ["__file", "sunset.vue"]]), EM = {
  name: "SwitchButton"
}, xM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, SM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), zM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), MM = [
  SM,
  zM
];
function DM(e, t, n, a, r, o) {
  return m(), f("svg", xM, MM);
}
var HM = /* @__PURE__ */ v(EM, [["render", DM], ["__file", "switch-button.vue"]]), TM = {
  name: "SwitchFilled"
}, RM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, VM = /* @__PURE__ */ u("path", {
  d: "M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z",
  fill: "currentColor"
}, null, -1), AM = /* @__PURE__ */ u("path", {
  d: "M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zM838.39 186.21a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z",
  fill: "currentColor"
}, null, -1), kM = [
  VM,
  AM
];
function IM(e, t, n, a, r, o) {
  return m(), f("svg", RM, kM);
}
var LM = /* @__PURE__ */ v(TM, [["render", IM], ["__file", "switch-filled.vue"]]), PM = {
  name: "Switch"
}, BM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, OM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), NM = [
  OM
];
function FM(e, t, n, a, r, o) {
  return m(), f("svg", BM, NM);
}
var UM = /* @__PURE__ */ v(PM, [["render", FM], ["__file", "switch.vue"]]), WM = {
  name: "TakeawayBox"
}, jM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1), GM = [
  qM
];
function YM(e, t, n, a, r, o) {
  return m(), f("svg", jM, GM);
}
var ZM = /* @__PURE__ */ v(WM, [["render", YM], ["__file", "takeaway-box.vue"]]), XM = {
  name: "Ticket"
}, KM = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, QM = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1), JM = [
  QM
];
function eD(e, t, n, a, r, o) {
  return m(), f("svg", KM, JM);
}
var tD = /* @__PURE__ */ v(XM, [["render", eD], ["__file", "ticket.vue"]]), nD = {
  name: "Tickets"
}, aD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, rD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), oD = [
  rD
];
function iD(e, t, n, a, r, o) {
  return m(), f("svg", aD, oD);
}
var cD = /* @__PURE__ */ v(nD, [["render", iD], ["__file", "tickets.vue"]]), lD = {
  name: "Timer"
}, sD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, dD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), uD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), mD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), fD = [
  dD,
  uD,
  mD
];
function hD(e, t, n, a, r, o) {
  return m(), f("svg", sD, fD);
}
var vD = /* @__PURE__ */ v(lD, [["render", hD], ["__file", "timer.vue"]]), pD = {
  name: "ToiletPaper"
}, _D = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), wD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1), yD = [
  gD,
  wD
];
function CD(e, t, n, a, r, o) {
  return m(), f("svg", _D, yD);
}
var bD = /* @__PURE__ */ v(pD, [["render", CD], ["__file", "toilet-paper.vue"]]), $D = {
  name: "Tools"
}, ED = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, xD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1), SD = [
  xD
];
function zD(e, t, n, a, r, o) {
  return m(), f("svg", ED, SD);
}
var MD = /* @__PURE__ */ v($D, [["render", zD], ["__file", "tools.vue"]]), DD = {
  name: "TopLeft"
}, HD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, TD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), RD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1), VD = [
  TD,
  RD
];
function AD(e, t, n, a, r, o) {
  return m(), f("svg", HD, VD);
}
var kD = /* @__PURE__ */ v(DD, [["render", AD], ["__file", "top-left.vue"]]), ID = {
  name: "TopRight"
}, LD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, PD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), BD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1), OD = [
  PD,
  BD
];
function ND(e, t, n, a, r, o) {
  return m(), f("svg", LD, OD);
}
var FD = /* @__PURE__ */ v(ID, [["render", ND], ["__file", "top-right.vue"]]), UD = {
  name: "Top"
}, WD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, jD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1), qD = [
  jD
];
function GD(e, t, n, a, r, o) {
  return m(), f("svg", WD, qD);
}
var YD = /* @__PURE__ */ v(UD, [["render", GD], ["__file", "top.vue"]]), ZD = {
  name: "TrendCharts"
}, XD = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, KD = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1), QD = [
  KD
];
function JD(e, t, n, a, r, o) {
  return m(), f("svg", XD, QD);
}
var eH = /* @__PURE__ */ v(ZD, [["render", JD], ["__file", "trend-charts.vue"]]), tH = {
  name: "TrophyBase"
}, nH = {
  version: "1.1",
  id: "\u56FE\u5C42_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, aH = /* @__PURE__ */ u("path", {
  d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z",
  fill: "currentColor"
}, null, -1), rH = [
  aH
];
function oH(e, t, n, a, r, o) {
  return m(), f("svg", nH, rH);
}
var iH = /* @__PURE__ */ v(tH, [["render", oH], ["__file", "trophy-base.vue"]]), cH = {
  name: "Trophy"
}, lH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, sH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1), dH = [
  sH
];
function uH(e, t, n, a, r, o) {
  return m(), f("svg", lH, dH);
}
var mH = /* @__PURE__ */ v(cH, [["render", uH], ["__file", "trophy.vue"]]), fH = {
  name: "TurnOff"
}, hH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, vH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), pH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), _H = [
  vH,
  pH
];
function gH(e, t, n, a, r, o) {
  return m(), f("svg", hH, _H);
}
var wH = /* @__PURE__ */ v(fH, [["render", gH], ["__file", "turn-off.vue"]]), yH = {
  name: "Umbrella"
}, CH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1), $H = [
  bH
];
function EH(e, t, n, a, r, o) {
  return m(), f("svg", CH, $H);
}
var xH = /* @__PURE__ */ v(yH, [["render", EH], ["__file", "umbrella.vue"]]), SH = {
  name: "Unlock"
}, zH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, MH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), DH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1), HH = [
  MH,
  DH
];
function TH(e, t, n, a, r, o) {
  return m(), f("svg", zH, HH);
}
var RH = /* @__PURE__ */ v(SH, [["render", TH], ["__file", "unlock.vue"]]), VH = {
  name: "UploadFilled"
}, AH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1), IH = [
  kH
];
function LH(e, t, n, a, r, o) {
  return m(), f("svg", AH, IH);
}
var PH = /* @__PURE__ */ v(VH, [["render", LH], ["__file", "upload-filled.vue"]]), BH = {
  name: "Upload"
}, OH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1), FH = [
  NH
];
function UH(e, t, n, a, r, o) {
  return m(), f("svg", OH, FH);
}
var WH = /* @__PURE__ */ v(BH, [["render", UH], ["__file", "upload.vue"]]), jH = {
  name: "UserFilled"
}, qH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1), YH = [
  GH
];
function ZH(e, t, n, a, r, o) {
  return m(), f("svg", qH, YH);
}
var XH = /* @__PURE__ */ v(jH, [["render", ZH], ["__file", "user-filled.vue"]]), KH = {
  name: "User"
}, QH = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, JH = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), eT = [
  JH
];
function tT(e, t, n, a, r, o) {
  return m(), f("svg", QH, eT);
}
var nT = /* @__PURE__ */ v(KH, [["render", tT], ["__file", "user.vue"]]), aT = {
  name: "Van"
}, rT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, oT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1), iT = [
  oT
];
function cT(e, t, n, a, r, o) {
  return m(), f("svg", rT, iT);
}
var lT = /* @__PURE__ */ v(aT, [["render", cT], ["__file", "van.vue"]]), sT = {
  name: "VideoCameraFilled"
}, dT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, uT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1), mT = [
  uT
];
function fT(e, t, n, a, r, o) {
  return m(), f("svg", dT, mT);
}
var hT = /* @__PURE__ */ v(sT, [["render", fT], ["__file", "video-camera-filled.vue"]]), vT = {
  name: "VideoCamera"
}, pT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _T = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1), gT = [
  _T
];
function wT(e, t, n, a, r, o) {
  return m(), f("svg", pT, gT);
}
var yT = /* @__PURE__ */ v(vT, [["render", wT], ["__file", "video-camera.vue"]]), CT = {
  name: "VideoPause"
}, bT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, $T = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1), ET = [
  $T
];
function xT(e, t, n, a, r, o) {
  return m(), f("svg", bT, ET);
}
var ST = /* @__PURE__ */ v(CT, [["render", xT], ["__file", "video-pause.vue"]]), zT = {
  name: "VideoPlay"
}, MT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, DT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1), HT = [
  DT
];
function TT(e, t, n, a, r, o) {
  return m(), f("svg", MT, HT);
}
var RT = /* @__PURE__ */ v(zT, [["render", TT], ["__file", "video-play.vue"]]), VT = {
  name: "View"
}, AT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, kT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), IT = [
  kT
];
function LT(e, t, n, a, r, o) {
  return m(), f("svg", AT, IT);
}
var PT = /* @__PURE__ */ v(VT, [["render", LT], ["__file", "view.vue"]]), BT = {
  name: "WalletFilled"
}, OT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, NT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1), FT = [
  NT
];
function UT(e, t, n, a, r, o) {
  return m(), f("svg", OT, FT);
}
var WT = /* @__PURE__ */ v(BT, [["render", UT], ["__file", "wallet-filled.vue"]]), jT = {
  name: "Wallet"
}, qT = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, GT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), YT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), ZT = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), XT = [
  GT,
  YT,
  ZT
];
function KT(e, t, n, a, r, o) {
  return m(), f("svg", qT, XT);
}
var QT = /* @__PURE__ */ v(jT, [["render", KT], ["__file", "wallet.vue"]]), JT = {
  name: "WarnTriangleFilled"
}, eR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  style: { "enable-background": "new 0 0 1024 1024" },
  "xml:space": "preserve"
}, tR = /* @__PURE__ */ u("path", {
  d: "M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z",
  fill: "currentColor"
}, null, -1), nR = [
  tR
];
function aR(e, t, n, a, r, o) {
  return m(), f("svg", eR, nR);
}
var rR = /* @__PURE__ */ v(JT, [["render", aR], ["__file", "warn-triangle-filled.vue"]]), oR = {
  name: "WarningFilled"
}, iR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, cR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), lR = [
  cR
];
function sR(e, t, n, a, r, o) {
  return m(), f("svg", iR, lR);
}
var _a = /* @__PURE__ */ v(oR, [["render", sR], ["__file", "warning-filled.vue"]]), dR = {
  name: "Warning"
}, uR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, mR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), fR = [
  mR
];
function hR(e, t, n, a, r, o) {
  return m(), f("svg", uR, fR);
}
var vR = /* @__PURE__ */ v(dR, [["render", hR], ["__file", "warning.vue"]]), pR = {
  name: "Watch"
}, _R = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), wR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), yR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1), CR = [
  gR,
  wR,
  yR
];
function bR(e, t, n, a, r, o) {
  return m(), f("svg", _R, CR);
}
var $R = /* @__PURE__ */ v(pR, [["render", bR], ["__file", "watch.vue"]]), ER = {
  name: "Watermelon"
}, xR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, SR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1), zR = [
  SR
];
function MR(e, t, n, a, r, o) {
  return m(), f("svg", xR, zR);
}
var DR = /* @__PURE__ */ v(ER, [["render", MR], ["__file", "watermelon.vue"]]), HR = {
  name: "WindPower"
}, TR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, RR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), VR = [
  RR
];
function AR(e, t, n, a, r, o) {
  return m(), f("svg", TR, VR);
}
var kR = /* @__PURE__ */ v(HR, [["render", AR], ["__file", "wind-power.vue"]]), IR = {
  name: "ZoomIn"
}, LR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, PR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), BR = [
  PR
];
function OR(e, t, n, a, r, o) {
  return m(), f("svg", LR, BR);
}
var NR = /* @__PURE__ */ v(IR, [["render", OR], ["__file", "zoom-in.vue"]]), FR = {
  name: "ZoomOut"
}, UR = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, WR = /* @__PURE__ */ u("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), jR = [
  WR
];
function qR(e, t, n, a, r, o) {
  return m(), f("svg", UR, jR);
}
var GR = /* @__PURE__ */ v(FR, [["render", qR], ["__file", "zoom-out.vue"]]);
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: x1,
  Aim: R1,
  AlarmClock: B1,
  Apple: j1,
  ArrowDown: ai,
  ArrowDownBold: K1,
  ArrowLeft: vi,
  ArrowLeftBold: si,
  ArrowRight: zi,
  ArrowRightBold: Ci,
  ArrowUp: Bi,
  ArrowUpBold: Vi,
  Avatar: ji,
  Back: Qi,
  Baseball: oc,
  Basketball: uc,
  Bell: xc,
  BellFilled: _c,
  Bicycle: Tc,
  Bottom: Kc,
  BottomLeft: Pc,
  BottomRight: jc,
  Bowl: al,
  Box: ul,
  Briefcase: _l,
  Brush: Dl,
  BrushFilled: $l,
  Burger: kl,
  Calendar: Nl,
  Camera: Jl,
  CameraFilled: Gl,
  CaretBottom: os,
  CaretLeft: us,
  CaretRight: _s,
  CaretTop: $s,
  Cellphone: Ds,
  ChatDotRound: Is,
  ChatDotSquare: Us,
  ChatLineRound: Xs,
  ChatLineSquare: ad,
  ChatRound: sd,
  ChatSquare: vd,
  Check: Cd,
  Checked: zd,
  Cherry: Vd,
  Chicken: Bd,
  ChromeFilled: Gd,
  CircleCheck: i4,
  CircleCheckFilled: Jd,
  CircleClose: g4,
  CircleCloseFilled: ha,
  CirclePlus: R4,
  CirclePlusFilled: E4,
  Clock: O4,
  Close: Zo,
  CloseBold: q4,
  Cloudy: a3,
  Coffee: v3,
  CoffeeCup: s3,
  Coin: $3,
  ColdDrink: D3,
  Collection: F3,
  CollectionTag: k3,
  Comment: Y3,
  Compass: t6,
  Connection: l6,
  Coordinate: v6,
  CopyDocument: b6,
  Cpu: D6,
  CreditCard: I6,
  Crop: U6,
  DArrowLeft: Z6,
  DArrowRight: tu,
  DCaret: cu,
  DataAnalysis: fu,
  DataBoard: Cu,
  DataLine: zu,
  Delete: Gu,
  DeleteFilled: Vu,
  DeleteLocation: Nu,
  Dessert: Ju,
  Discount: i8,
  Dish: g8,
  DishDot: m8,
  Document: em,
  DocumentAdd: E8,
  DocumentChecked: H8,
  DocumentCopy: I8,
  DocumentDelete: F8,
  DocumentRemove: Y8,
  Download: im,
  Drizzling: mm,
  Edit: xm,
  EditPen: gm,
  Eleme: Lm,
  ElemeFilled: Tm,
  ElementPlus: Um,
  Expand: Zm,
  Failed: tf,
  Female: df,
  Files: pf,
  Film: $f,
  Filter: Df,
  Finished: kf,
  FirstAidKit: Ff,
  Flag: Yf,
  Fold: eh,
  Folder: Ih,
  FolderAdd: ih,
  FolderChecked: mh,
  FolderDelete: gh,
  FolderOpened: Eh,
  FolderRemove: Hh,
  Food: Fh,
  Football: Zh,
  ForkSpoon: t5,
  Fries: c5,
  FullScreen: f5,
  Goblet: L5,
  GobletFull: w5,
  GobletSquare: T5,
  GobletSquareFull: x5,
  GoldMedal: W5,
  Goods: nv,
  GoodsFilled: X5,
  Grape: lv,
  Grid: hv,
  Guide: Cv,
  Handbag: zv,
  Headset: Vv,
  Help: jv,
  HelpFilled: Bv,
  Hide: Qv,
  Histogram: rp,
  HomeFilled: dp,
  HotWater: pp,
  House: bp,
  IceCream: Op,
  IceCreamRound: Mp,
  IceCreamSquare: Ap,
  IceDrink: qp,
  IceTea: Qp,
  InfoFilled: va,
  Iphone: s_,
  Key: v_,
  KnifeFork: C_,
  Lightning: M_,
  Link: A_,
  List: O_,
  Loading: q_,
  Location: f9,
  LocationFilled: Q_,
  LocationInformation: i9,
  Lock: y9,
  Lollipop: S9,
  MagicStick: R9,
  Magnet: P9,
  Male: q9,
  Management: Q9,
  MapLocation: o7,
  Medal: m7,
  Memo: y7,
  Menu: S7,
  Message: B7,
  MessageBox: R7,
  Mic: j7,
  Microphone: K7,
  MilkTea: ag,
  Minus: sg,
  Money: _g,
  Monitor: $g,
  Moon: Ig,
  MoonNight: Hg,
  More: Yg,
  MoreFilled: Fg,
  MostlyCloudy: ew,
  Mouse: cw,
  Mug: fw,
  Mute: zw,
  MuteNotification: yw,
  NoSmoking: Vw,
  Notebook: Ow,
  Notification: Gw,
  Odometer: ty,
  OfficeBuilding: sy,
  Open: py,
  Operation: by,
  Opportunity: My,
  Orange: Ay,
  Paperclip: Oy,
  PartlyCloudy: Gy,
  Pear: Jy,
  Phone: uC,
  PhoneFilled: oC,
  Picture: TC,
  PictureFilled: _C,
  PictureRounded: EC,
  PieChart: PC,
  Place: qC,
  Platform: QC,
  Plus: rb,
  Pointer: db,
  Position: pb,
  Postcard: $b,
  Pouring: Db,
  Present: Pb,
  PriceTag: jb,
  Printer: Kb,
  Promotion: a$,
  QuartzWatch: u$,
  QuestionFilled: _$,
  Rank: $$,
  Reading: L$,
  ReadingLamp: H$,
  Refresh: tE,
  RefreshLeft: U$,
  RefreshRight: Z$,
  Refrigerator: cE,
  Remove: yE,
  RemoveFilled: fE,
  Right: SE,
  ScaleToOriginal: RE,
  School: OE,
  Scissor: qE,
  Search: QE,
  Select: rx,
  Sell: dx,
  SemiSelect: px,
  Service: bx,
  SetUp: Tx,
  Setting: Lx,
  Share: Ux,
  Ship: Zx,
  Shop: tS,
  ShoppingBag: lS,
  ShoppingCart: CS,
  ShoppingCartFull: vS,
  ShoppingTrolley: zS,
  Smoking: AS,
  Soccer: OS,
  SoldOut: qS,
  Sort: dz,
  SortDown: QS,
  SortUp: rz,
  Stamp: pz,
  Star: Mz,
  StarFilled: bz,
  Stopwatch: kz,
  SuccessFilled: pa,
  Sugar: qz,
  Suitcase: oM,
  SuitcaseLine: Qz,
  Sunny: uM,
  Sunrise: _M,
  Sunset: $M,
  Switch: UM,
  SwitchButton: HM,
  SwitchFilled: LM,
  TakeawayBox: ZM,
  Ticket: tD,
  Tickets: cD,
  Timer: vD,
  ToiletPaper: bD,
  Tools: MD,
  Top: YD,
  TopLeft: kD,
  TopRight: FD,
  TrendCharts: eH,
  Trophy: mH,
  TrophyBase: iH,
  TurnOff: wH,
  Umbrella: xH,
  Unlock: RH,
  Upload: WH,
  UploadFilled: PH,
  User: nT,
  UserFilled: XH,
  Van: lT,
  VideoCamera: yT,
  VideoCameraFilled: hT,
  VideoPause: ST,
  VideoPlay: RT,
  View: PT,
  Wallet: QT,
  WalletFilled: WT,
  WarnTriangleFilled: rR,
  Warning: vR,
  WarningFilled: _a,
  Watch: $R,
  Watermelon: DR,
  WindPower: kR,
  ZoomIn: NR,
  ZoomOut: GR
}, Symbol.toStringTag, { value: "Module" })), we = (e) => e.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
function YR(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var r = e[t];
    a[r[0]] = r[1];
  }
  return a;
}
var cr;
const bt = typeof window < "u", Ot = (e) => typeof e == "number", ZR = (e) => typeof e == "string", En = () => {
};
bt && ((cr = window == null ? void 0 : window.navigator) == null ? void 0 : cr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ko(e) {
  return typeof e == "function" ? e() : H(e);
}
function XR(e) {
  return e;
}
function ga(e) {
  return c1() ? (l1(e), !0) : !1;
}
function KR(e, t = !0) {
  ua() ? an(e) : t ? e() : s1(e);
}
function QR(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, r = K(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function c() {
    r.value = !1, i();
  }
  function l(...s) {
    i(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, e(...s);
    }, Ko(t));
  }
  return a && (r.value = !0, bt && l()), ga(c), {
    isPending: r,
    start: l,
    stop: c
  };
}
function Qo(e) {
  var t;
  const n = Ko(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Jo = bt ? window : void 0;
function JR(...e) {
  let t, n, a, r;
  if (ZR(e[0]) ? ([n, a, r] = e, t = Jo) : [t, n, a, r] = e, !t)
    return En;
  let o = En;
  const i = he(() => Qo(t), (l) => {
    o(), l && (l.addEventListener(n, a, r), o = () => {
      l.removeEventListener(n, a, r), o = En;
    });
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), o();
  };
  return ga(c), c;
}
function eV(e, t = !1) {
  const n = K(), a = () => n.value = Boolean(e());
  return a(), KR(a, t), n;
}
const Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wn = "__vueuse_ssr_handlers__";
Un[Wn] = Un[Wn] || {};
Un[Wn];
var lr = Object.getOwnPropertySymbols, tV = Object.prototype.hasOwnProperty, nV = Object.prototype.propertyIsEnumerable, aV = (e, t) => {
  var n = {};
  for (var a in e)
    tV.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && lr)
    for (var a of lr(e))
      t.indexOf(a) < 0 && nV.call(e, a) && (n[a] = e[a]);
  return n;
};
function rV(e, t, n = {}) {
  const a = n, { window: r = Jo } = a, o = aV(a, ["window"]);
  let i;
  const c = eV(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, s = he(() => Qo(e), (h) => {
    l(), c.value && r && h && (i = new ResizeObserver(t), i.observe(h, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), s();
  };
  return ga(d), {
    isSupported: c,
    stop: d
  };
}
var sr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(sr || (sr = {}));
var oV = Object.defineProperty, dr = Object.getOwnPropertySymbols, iV = Object.prototype.hasOwnProperty, cV = Object.prototype.propertyIsEnumerable, ur = (e, t, n) => t in e ? oV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lV = (e, t) => {
  for (var n in t || (t = {}))
    iV.call(t, n) && ur(e, n, t[n]);
  if (dr)
    for (var n of dr(t))
      cV.call(t, n) && ur(e, n, t[n]);
  return e;
};
const sV = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
lV({
  linear: XR
}, sV);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const dV = Object.prototype.hasOwnProperty, mr = (e, t) => dV.call(e, t), e2 = (e) => typeof e == "function", Nt = (e) => typeof e == "string", t2 = (e) => e !== null && typeof e == "object", uV = (e) => e === void 0, mV = (e) => typeof Element > "u" ? !1 : e instanceof Element, fr = (e) => Object.keys(e);
class fV extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function wa(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Nt(e) ? new fV(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const hV = "utils/dom/style";
function vV(e, t = "px") {
  if (!e)
    return "";
  if (Nt(e))
    return e;
  if (Ot(e))
    return `${e}${t}`;
  wa(hV, "binding value must be a string or number");
}
const n2 = "__epPropKey", $e = (e) => e, pV = (e) => t2(e) && !!e[n2], a2 = (e, t) => {
  if (!t2(e) || pV(e))
    return e;
  const { values: n, required: a, default: r, type: o, validator: i } = e, l = {
    type: o,
    required: !!a,
    validator: n || i ? (s) => {
      let d = !1, h = [];
      if (n && (h = Array.from(n), mr(e, "default") && h.push(r), d || (d = h.includes(s))), i && (d || (d = i(s))), !d && h.length > 0) {
        const p = [...new Set(h)].map((g) => JSON.stringify(g)).join(", ");
        d1(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(s)}.`);
      }
      return d;
    } : void 0,
    [n2]: !0
  };
  return mr(e, "default") && (l.default = r), l;
}, on = (e) => YR(Object.entries(e).map(([t, n]) => [
  t,
  a2(n, t)
])), _V = $e([
  String,
  Object,
  Function
]), gV = {
  Close: Zo,
  SuccessFilled: pa,
  InfoFilled: va,
  WarningFilled: _a,
  CircleCloseFilled: ha
}, hr = {
  success: pa,
  warning: _a,
  error: ha,
  info: va
}, r2 = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t != null ? t : {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
}, wV = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), yV = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, CV = ["", "default", "small", "large"], bV = (e) => e, o2 = Symbol(), Ft = K();
function ya(e, t = void 0) {
  const n = ua() ? m1(o2, Ft) : Ft;
  return e ? X(() => {
    var a, r;
    return (r = (a = n.value) == null ? void 0 : a[e]) != null ? r : t;
  }) : n;
}
const $V = (e, t, n = !1) => {
  var a;
  const r = !!ua(), o = r ? ya() : void 0, i = (a = t == null ? void 0 : t.provide) != null ? a : r ? u1 : void 0;
  if (!i) {
    wa("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const c = X(() => {
    const l = H(e);
    return o != null && o.value ? EV(o.value, l) : l;
  });
  return i(o2, c), (n || !Ft.value) && (Ft.value = c.value), c;
}, EV = (e, t) => {
  var n;
  const a = [.../* @__PURE__ */ new Set([...fr(e), ...fr(t)])], r = {};
  for (const o of a)
    r[o] = (n = t[o]) != null ? n : e[o];
  return r;
}, xV = a2({
  type: String,
  values: CV,
  required: !1
}), SV = "el", zV = "is-", Re = (e, t, n, a, r) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), a && (o += `__${a}`), r && (o += `--${r}`), o;
}, Ca = (e) => {
  const t = ya("namespace", SV);
  return {
    namespace: t,
    b: (_ = "") => Re(t.value, e, _, "", ""),
    e: (_) => _ ? Re(t.value, e, "", _, "") : "",
    m: (_) => _ ? Re(t.value, e, "", "", _) : "",
    be: (_, b) => _ && b ? Re(t.value, e, _, b, "") : "",
    em: (_, b) => _ && b ? Re(t.value, e, "", _, b) : "",
    bm: (_, b) => _ && b ? Re(t.value, e, _, "", b) : "",
    bem: (_, b, C) => _ && b && C ? Re(t.value, e, _, b, C) : "",
    is: (_, ...b) => {
      const C = b.length >= 1 ? b[0] : !0;
      return _ && C ? `${zV}${_}` : "";
    },
    cssVar: (_) => {
      const b = {};
      for (const C in _)
        _[C] && (b[`--${t.value}-${C}`] = _[C]);
      return b;
    },
    cssVarName: (_) => `--${t.value}-${_}`,
    cssVarBlock: (_) => {
      const b = {};
      for (const C in _)
        _[C] && (b[`--${t.value}-${e}-${C}`] = _[C]);
      return b;
    },
    cssVarBlockName: (_) => `--${t.value}-${e}-${_}`
  };
}, vr = K(0), MV = () => {
  const e = ya("zIndex", 2e3), t = X(() => e.value + vr.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (vr.value++, t.value)
  };
};
var ba = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
const DV = on({
  size: {
    type: $e([Number, String])
  },
  color: {
    type: String
  }
}), HV = {
  name: "ElIcon",
  inheritAttrs: !1
}, TV = /* @__PURE__ */ ce({
  ...HV,
  props: DV,
  setup(e) {
    const t = e, n = Ca("icon"), a = X(() => {
      const { size: r, color: o } = t;
      return !r && !o ? {} : {
        fontSize: uV(r) ? void 0 : vV(r),
        "--color": o
      };
    });
    return (r, o) => (m(), f("i", rn({
      class: H(n).b(),
      style: H(a)
    }, r.$attrs), [
      _e(r.$slots, "default")
    ], 16));
  }
});
var RV = /* @__PURE__ */ ba(TV, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const pr = r2(RV), VV = on({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), AV = ["textContent"], kV = {
  name: "ElBadge"
}, IV = /* @__PURE__ */ ce({
  ...kV,
  props: VV,
  setup(e, { expose: t }) {
    const n = e, a = Ca("badge"), r = X(() => n.isDot ? "" : Ot(n.value) && Ot(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: r
    }), (o, i) => (m(), f("div", {
      class: be(H(a).b())
    }, [
      _e(o.$slots, "default"),
      N(qo, {
        name: `${H(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: W(() => [
          ma(u("sup", {
            class: be([
              H(a).e("content"),
              H(a).em("content", o.type),
              H(a).is("fixed", !!o.$slots.default),
              H(a).is("dot", o.isDot)
            ]),
            textContent: ze(H(r))
          }, null, 10, AV), [
            [Go, !o.hidden && (H(r) || o.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var LV = /* @__PURE__ */ ba(IV, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const PV = r2(LV);
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const jn = {}, BV = on({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: $e(Object)
  },
  size: xV,
  button: {
    type: $e(Object)
  },
  experimentalFeatures: {
    type: $e(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: $e(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
ce({
  name: "ElConfigProvider",
  props: BV,
  setup(e, { slots: t }) {
    he(() => e.message, (a) => {
      Object.assign(jn, a != null ? a : {});
    }, { immediate: !0, deep: !0 });
    const n = $V(e);
    return () => _e(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const i2 = ["success", "info", "warning", "error"], re = bV({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: bt ? document.body : void 0
}), OV = on({
  customClass: {
    type: String,
    default: re.customClass
  },
  center: {
    type: Boolean,
    default: re.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: re.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: re.duration
  },
  icon: {
    type: _V,
    default: re.icon
  },
  id: {
    type: String,
    default: re.id
  },
  message: {
    type: $e([
      String,
      Object,
      Function
    ]),
    default: re.message
  },
  onClose: {
    type: $e(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: re.showClose
  },
  type: {
    type: String,
    values: i2,
    default: re.type
  },
  offset: {
    type: Number,
    default: re.offset
  },
  zIndex: {
    type: Number,
    default: re.zIndex
  },
  grouping: {
    type: Boolean,
    default: re.grouping
  },
  repeatNum: {
    type: Number,
    default: re.repeatNum
  }
}), NV = {
  destroy: () => !0
}, fe = f1([]), FV = (e) => {
  const t = fe.findIndex((r) => r.id === e), n = fe[t];
  let a;
  return t > 0 && (a = fe[t - 1]), { current: n, prev: a };
}, UV = (e) => {
  const { prev: t } = FV(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, WV = ["id"], jV = ["innerHTML"], qV = {
  name: "ElMessage"
}, GV = /* @__PURE__ */ ce({
  ...qV,
  props: OV,
  emits: NV,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = gV, r = Ca("message"), o = K(), i = K(!1), c = K(0);
    let l;
    const s = X(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), d = X(() => {
      const S = n.type;
      return { [r.bm("icon", S)]: S && hr[S] };
    }), h = X(() => n.icon || hr[n.type] || ""), p = X(() => UV(n.id)), g = X(() => n.offset + p.value), _ = X(() => c.value + g.value), b = X(() => ({
      top: `${g.value}px`,
      zIndex: n.zIndex
    }));
    function C() {
      n.duration !== 0 && ({ stop: l } = QR(() => {
        x();
      }, n.duration));
    }
    function y() {
      l == null || l();
    }
    function x() {
      i.value = !1;
    }
    function z({ code: S }) {
      S === yV.esc && x();
    }
    return an(() => {
      C(), i.value = !0;
    }), he(() => n.repeatNum, () => {
      y(), C();
    }), JR(document, "keydown", z), rV(o, () => {
      c.value = o.value.getBoundingClientRect().height;
    }), t({
      visible: i,
      bottom: _,
      close: x
    }), (S, V) => (m(), B(qo, {
      name: H(r).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: V[0] || (V[0] = (T) => S.$emit("destroy")),
      persisted: ""
    }, {
      default: W(() => [
        ma(u("div", {
          id: S.id,
          ref_key: "messageRef",
          ref: o,
          class: be([
            H(r).b(),
            { [H(r).m(S.type)]: S.type && !S.icon },
            H(r).is("center", S.center),
            H(r).is("closable", S.showClose),
            S.customClass
          ]),
          style: ut(H(b)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: C
        }, [
          S.repeatNum > 1 ? (m(), B(H(PV), {
            key: 0,
            value: S.repeatNum,
            type: H(s),
            class: be(H(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : pe("v-if", !0),
          H(h) ? (m(), B(H(pr), {
            key: 1,
            class: be([H(r).e("icon"), H(d)])
          }, {
            default: W(() => [
              (m(), B(ge(H(h))))
            ]),
            _: 1
          }, 8, ["class"])) : pe("v-if", !0),
          _e(S.$slots, "default", {}, () => [
            S.dangerouslyUseHTMLString ? (m(), f(ne, { key: 1 }, [
              pe(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: be(H(r).e("content")),
                innerHTML: S.message
              }, null, 10, jV)
            ], 2112)) : (m(), f("p", {
              key: 0,
              class: be(H(r).e("content"))
            }, ze(S.message), 3))
          ]),
          S.showClose ? (m(), B(H(pr), {
            key: 2,
            class: be(H(r).e("closeBtn")),
            onClick: At(x, ["stop"])
          }, {
            default: W(() => [
              N(H(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : pe("v-if", !0)
        ], 46, WV), [
          [Go, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var YV = /* @__PURE__ */ ba(GV, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let ZV = 1;
const c2 = (e) => {
  const t = !e || Nt(e) || fa(e) || e2(e) ? { message: e } : e, n = {
    ...re,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Nt(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    mV(a) || (wa("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), a = document.body), n.appendTo = a;
  }
  return n;
}, XV = (e) => {
  const t = fe.indexOf(e);
  if (t === -1)
    return;
  fe.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, KV = ({ appendTo: e, ...t }, n) => {
  const { nextZIndex: a } = MV(), r = `message_${ZV++}`, o = t.onClose, i = document.createElement("div"), c = {
    ...t,
    zIndex: a() + t.zIndex,
    id: r,
    onClose: () => {
      o == null || o(), XV(h);
    },
    onDestroy: () => {
      ir(null, i);
    }
  }, l = N(YV, c, e2(c.message) || fa(c.message) ? { default: c.message } : null);
  l.appContext = n || Ze._context, ir(l, i), e.appendChild(i.firstElementChild);
  const s = l.component, h = {
    id: r,
    vnode: l,
    vm: s,
    handler: {
      close: () => {
        s.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return h;
}, Ze = (e = {}, t) => {
  if (!bt)
    return { close: () => {
    } };
  if (Ot(jn.max) && fe.length >= jn.max)
    return { close: () => {
    } };
  const n = c2(e);
  if (n.grouping && fe.length) {
    const r = fe.find(({ vnode: o }) => {
      var i;
      return ((i = o.props) == null ? void 0 : i.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  const a = KV(n, t);
  return fe.push(a), a.handler;
};
i2.forEach((e) => {
  Ze[e] = (t = {}, n) => {
    const a = c2(t);
    return Ze({ ...a, type: e }, n);
  };
});
function QV(e) {
  for (const t of fe)
    (!e || e === t.props.type) && t.handler.close();
}
Ze.closeAll = QV;
Ze._context = null;
const JV = wV(Ze, "$message"), eA = (e) => {
  const t = document.createElement("input");
  t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), JV.success("\u590D\u5236\u6210\u529F");
}, tA = /* @__PURE__ */ h1("\u9009\u62E9\u56FE\u6807"), nA = { class: "m-choose-icon-dialog" }, aA = { class: "container" }, rA = ["onClick"], oA = { class: "icon" }, iA = { class: "text" }, cA = /* @__PURE__ */ ce({
  __name: "index",
  props: {
    title: null,
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: t }) {
    const n = e, a = X({
      get() {
        return n.visible;
      },
      set(i) {
        t("update:visible", i);
      }
    }), r = () => {
      a.value = !a.value;
    }, o = (i) => {
      eA(`<el-icon${we(i)} />`), a.value = !1;
    };
    return (i, c) => {
      const l = G("el-button"), s = G("el-dialog");
      return m(), f(ne, null, [
        N(l, {
          type: "primary",
          onClick: r
        }, {
          default: W(() => [
            tA
          ]),
          _: 1
        }),
        u("div", nA, [
          N(s, {
            title: e.title,
            modelValue: H(a),
            "onUpdate:modelValue": c[0] || (c[0] = (d) => Fn(a) ? a.value = d : null)
          }, {
            default: W(() => [
              u("div", aA, [
                (m(!0), f(ne, null, Ie(Object.keys(Xo), (d, h) => (m(), f("div", {
                  key: h,
                  class: "item",
                  onClick: (p) => o(d)
                }, [
                  u("div", oA, [
                    (m(), B(ge(`el-icon${H(we)(d)}`)))
                  ]),
                  u("div", iA, ze(d), 1)
                ], 8, rA))), 128))
              ])
            ]),
            _: 1
          }, 8, ["title", "modelValue"])
        ])
      ], 64);
    };
  }
});
const cn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, lA = /* @__PURE__ */ cn(cA, [["__scopeId", "data-v-990776fc"]]), sA = {
  install(e) {
    e.component("m-choose-icon", lA);
  }
}, _r = [
  {
    code: "11",
    name: "\u5317\u4EAC\u5E02",
    children: [
      {
        code: "1101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "110101",
            name: "\u4E1C\u57CE\u533A"
          },
          {
            code: "110102",
            name: "\u897F\u57CE\u533A"
          },
          {
            code: "110105",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "110106",
            name: "\u4E30\u53F0\u533A"
          },
          {
            code: "110107",
            name: "\u77F3\u666F\u5C71\u533A"
          },
          {
            code: "110108",
            name: "\u6D77\u6DC0\u533A"
          },
          {
            code: "110109",
            name: "\u95E8\u5934\u6C9F\u533A"
          },
          {
            code: "110111",
            name: "\u623F\u5C71\u533A"
          },
          {
            code: "110112",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "110113",
            name: "\u987A\u4E49\u533A"
          },
          {
            code: "110114",
            name: "\u660C\u5E73\u533A"
          },
          {
            code: "110115",
            name: "\u5927\u5174\u533A"
          },
          {
            code: "110116",
            name: "\u6000\u67D4\u533A"
          },
          {
            code: "110117",
            name: "\u5E73\u8C37\u533A"
          },
          {
            code: "110118",
            name: "\u5BC6\u4E91\u533A"
          },
          {
            code: "110119",
            name: "\u5EF6\u5E86\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "\u5929\u6D25\u5E02",
    children: [
      {
        code: "1201",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "120101",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "120102",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "120103",
            name: "\u6CB3\u897F\u533A"
          },
          {
            code: "120104",
            name: "\u5357\u5F00\u533A"
          },
          {
            code: "120105",
            name: "\u6CB3\u5317\u533A"
          },
          {
            code: "120106",
            name: "\u7EA2\u6865\u533A"
          },
          {
            code: "120110",
            name: "\u4E1C\u4E3D\u533A"
          },
          {
            code: "120111",
            name: "\u897F\u9752\u533A"
          },
          {
            code: "120112",
            name: "\u6D25\u5357\u533A"
          },
          {
            code: "120113",
            name: "\u5317\u8FB0\u533A"
          },
          {
            code: "120114",
            name: "\u6B66\u6E05\u533A"
          },
          {
            code: "120115",
            name: "\u5B9D\u577B\u533A"
          },
          {
            code: "120116",
            name: "\u6EE8\u6D77\u65B0\u533A"
          },
          {
            code: "120117",
            name: "\u5B81\u6CB3\u533A"
          },
          {
            code: "120118",
            name: "\u9759\u6D77\u533A"
          },
          {
            code: "120119",
            name: "\u84DF\u5DDE\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "\u6CB3\u5317\u7701",
    children: [
      {
        code: "1301",
        name: "\u77F3\u5BB6\u5E84\u5E02",
        children: [
          {
            code: "130102",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "130104",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130105",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130107",
            name: "\u4E95\u9649\u77FF\u533A"
          },
          {
            code: "130108",
            name: "\u88D5\u534E\u533A"
          },
          {
            code: "130109",
            name: "\u85C1\u57CE\u533A"
          },
          {
            code: "130110",
            name: "\u9E7F\u6CC9\u533A"
          },
          {
            code: "130111",
            name: "\u683E\u57CE\u533A"
          },
          {
            code: "130121",
            name: "\u4E95\u9649\u53BF"
          },
          {
            code: "130123",
            name: "\u6B63\u5B9A\u53BF"
          },
          {
            code: "130125",
            name: "\u884C\u5510\u53BF"
          },
          {
            code: "130126",
            name: "\u7075\u5BFF\u53BF"
          },
          {
            code: "130127",
            name: "\u9AD8\u9091\u53BF"
          },
          {
            code: "130128",
            name: "\u6DF1\u6CFD\u53BF"
          },
          {
            code: "130129",
            name: "\u8D5E\u7687\u53BF"
          },
          {
            code: "130130",
            name: "\u65E0\u6781\u53BF"
          },
          {
            code: "130131",
            name: "\u5E73\u5C71\u53BF"
          },
          {
            code: "130132",
            name: "\u5143\u6C0F\u53BF"
          },
          {
            code: "130133",
            name: "\u8D75\u53BF"
          },
          {
            code: "130171",
            name: "\u77F3\u5BB6\u5E84\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130172",
            name: "\u77F3\u5BB6\u5E84\u5FAA\u73AF\u5316\u5DE5\u56ED\u533A"
          },
          {
            code: "130181",
            name: "\u8F9B\u96C6\u5E02"
          },
          {
            code: "130183",
            name: "\u664B\u5DDE\u5E02"
          },
          {
            code: "130184",
            name: "\u65B0\u4E50\u5E02"
          }
        ]
      },
      {
        code: "1302",
        name: "\u5510\u5C71\u5E02",
        children: [
          {
            code: "130202",
            name: "\u8DEF\u5357\u533A"
          },
          {
            code: "130203",
            name: "\u8DEF\u5317\u533A"
          },
          {
            code: "130204",
            name: "\u53E4\u51B6\u533A"
          },
          {
            code: "130205",
            name: "\u5F00\u5E73\u533A"
          },
          {
            code: "130207",
            name: "\u4E30\u5357\u533A"
          },
          {
            code: "130208",
            name: "\u4E30\u6DA6\u533A"
          },
          {
            code: "130209",
            name: "\u66F9\u5983\u7538\u533A"
          },
          {
            code: "130224",
            name: "\u6EE6\u5357\u53BF"
          },
          {
            code: "130225",
            name: "\u4E50\u4EAD\u53BF"
          },
          {
            code: "130227",
            name: "\u8FC1\u897F\u53BF"
          },
          {
            code: "130229",
            name: "\u7389\u7530\u53BF"
          },
          {
            code: "130271",
            name: "\u6CB3\u5317\u5510\u5C71\u82A6\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130272",
            name: "\u5510\u5C71\u5E02\u6C49\u6CBD\u7BA1\u7406\u533A"
          },
          {
            code: "130273",
            name: "\u5510\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130274",
            name: "\u6CB3\u5317\u5510\u5C71\u6D77\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130281",
            name: "\u9075\u5316\u5E02"
          },
          {
            code: "130283",
            name: "\u8FC1\u5B89\u5E02"
          },
          {
            code: "130284",
            name: "\u6EE6\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1303",
        name: "\u79E6\u7687\u5C9B\u5E02",
        children: [
          {
            code: "130302",
            name: "\u6D77\u6E2F\u533A"
          },
          {
            code: "130303",
            name: "\u5C71\u6D77\u5173\u533A"
          },
          {
            code: "130304",
            name: "\u5317\u6234\u6CB3\u533A"
          },
          {
            code: "130306",
            name: "\u629A\u5B81\u533A"
          },
          {
            code: "130321",
            name: "\u9752\u9F99\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130322",
            name: "\u660C\u9ECE\u53BF"
          },
          {
            code: "130324",
            name: "\u5362\u9F99\u53BF"
          },
          {
            code: "130371",
            name: "\u79E6\u7687\u5C9B\u5E02\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130372",
            name: "\u5317\u6234\u6CB3\u65B0\u533A"
          }
        ]
      },
      {
        code: "1304",
        name: "\u90AF\u90F8\u5E02",
        children: [
          {
            code: "130402",
            name: "\u90AF\u5C71\u533A"
          },
          {
            code: "130403",
            name: "\u4E1B\u53F0\u533A"
          },
          {
            code: "130404",
            name: "\u590D\u5174\u533A"
          },
          {
            code: "130406",
            name: "\u5CF0\u5CF0\u77FF\u533A"
          },
          {
            code: "130407",
            name: "\u80A5\u4E61\u533A"
          },
          {
            code: "130408",
            name: "\u6C38\u5E74\u533A"
          },
          {
            code: "130423",
            name: "\u4E34\u6F33\u53BF"
          },
          {
            code: "130424",
            name: "\u6210\u5B89\u53BF"
          },
          {
            code: "130425",
            name: "\u5927\u540D\u53BF"
          },
          {
            code: "130426",
            name: "\u6D89\u53BF"
          },
          {
            code: "130427",
            name: "\u78C1\u53BF"
          },
          {
            code: "130430",
            name: "\u90B1\u53BF"
          },
          {
            code: "130431",
            name: "\u9E21\u6CFD\u53BF"
          },
          {
            code: "130432",
            name: "\u5E7F\u5E73\u53BF"
          },
          {
            code: "130433",
            name: "\u9986\u9676\u53BF"
          },
          {
            code: "130434",
            name: "\u9B4F\u53BF"
          },
          {
            code: "130435",
            name: "\u66F2\u5468\u53BF"
          },
          {
            code: "130471",
            name: "\u90AF\u90F8\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "130473",
            name: "\u90AF\u90F8\u5180\u5357\u65B0\u533A"
          },
          {
            code: "130481",
            name: "\u6B66\u5B89\u5E02"
          }
        ]
      },
      {
        code: "1305",
        name: "\u90A2\u53F0\u5E02",
        children: [
          {
            code: "130502",
            name: "\u8944\u90FD\u533A"
          },
          {
            code: "130503",
            name: "\u4FE1\u90FD\u533A"
          },
          {
            code: "130505",
            name: "\u4EFB\u6CFD\u533A"
          },
          {
            code: "130506",
            name: "\u5357\u548C\u533A"
          },
          {
            code: "130522",
            name: "\u4E34\u57CE\u53BF"
          },
          {
            code: "130523",
            name: "\u5185\u4E18\u53BF"
          },
          {
            code: "130524",
            name: "\u67CF\u4E61\u53BF"
          },
          {
            code: "130525",
            name: "\u9686\u5C27\u53BF"
          },
          {
            code: "130528",
            name: "\u5B81\u664B\u53BF"
          },
          {
            code: "130529",
            name: "\u5DE8\u9E7F\u53BF"
          },
          {
            code: "130530",
            name: "\u65B0\u6CB3\u53BF"
          },
          {
            code: "130531",
            name: "\u5E7F\u5B97\u53BF"
          },
          {
            code: "130532",
            name: "\u5E73\u4E61\u53BF"
          },
          {
            code: "130533",
            name: "\u5A01\u53BF"
          },
          {
            code: "130534",
            name: "\u6E05\u6CB3\u53BF"
          },
          {
            code: "130535",
            name: "\u4E34\u897F\u53BF"
          },
          {
            code: "130571",
            name: "\u6CB3\u5317\u90A2\u53F0\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130581",
            name: "\u5357\u5BAB\u5E02"
          },
          {
            code: "130582",
            name: "\u6C99\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1306",
        name: "\u4FDD\u5B9A\u5E02",
        children: [
          {
            code: "130602",
            name: "\u7ADE\u79C0\u533A"
          },
          {
            code: "130606",
            name: "\u83B2\u6C60\u533A"
          },
          {
            code: "130607",
            name: "\u6EE1\u57CE\u533A"
          },
          {
            code: "130608",
            name: "\u6E05\u82D1\u533A"
          },
          {
            code: "130609",
            name: "\u5F90\u6C34\u533A"
          },
          {
            code: "130623",
            name: "\u6D9E\u6C34\u53BF"
          },
          {
            code: "130624",
            name: "\u961C\u5E73\u53BF"
          },
          {
            code: "130626",
            name: "\u5B9A\u5174\u53BF"
          },
          {
            code: "130627",
            name: "\u5510\u53BF"
          },
          {
            code: "130628",
            name: "\u9AD8\u9633\u53BF"
          },
          {
            code: "130629",
            name: "\u5BB9\u57CE\u53BF"
          },
          {
            code: "130630",
            name: "\u6D9E\u6E90\u53BF"
          },
          {
            code: "130631",
            name: "\u671B\u90FD\u53BF"
          },
          {
            code: "130632",
            name: "\u5B89\u65B0\u53BF"
          },
          {
            code: "130633",
            name: "\u6613\u53BF"
          },
          {
            code: "130634",
            name: "\u66F2\u9633\u53BF"
          },
          {
            code: "130635",
            name: "\u8821\u53BF"
          },
          {
            code: "130636",
            name: "\u987A\u5E73\u53BF"
          },
          {
            code: "130637",
            name: "\u535A\u91CE\u53BF"
          },
          {
            code: "130638",
            name: "\u96C4\u53BF"
          },
          {
            code: "130671",
            name: "\u4FDD\u5B9A\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130672",
            name: "\u4FDD\u5B9A\u767D\u6C9F\u65B0\u57CE"
          },
          {
            code: "130681",
            name: "\u6DBF\u5DDE\u5E02"
          },
          {
            code: "130682",
            name: "\u5B9A\u5DDE\u5E02"
          },
          {
            code: "130683",
            name: "\u5B89\u56FD\u5E02"
          },
          {
            code: "130684",
            name: "\u9AD8\u7891\u5E97\u5E02"
          }
        ]
      },
      {
        code: "1307",
        name: "\u5F20\u5BB6\u53E3\u5E02",
        children: [
          {
            code: "130702",
            name: "\u6865\u4E1C\u533A"
          },
          {
            code: "130703",
            name: "\u6865\u897F\u533A"
          },
          {
            code: "130705",
            name: "\u5BA3\u5316\u533A"
          },
          {
            code: "130706",
            name: "\u4E0B\u82B1\u56ED\u533A"
          },
          {
            code: "130708",
            name: "\u4E07\u5168\u533A"
          },
          {
            code: "130709",
            name: "\u5D07\u793C\u533A"
          },
          {
            code: "130722",
            name: "\u5F20\u5317\u53BF"
          },
          {
            code: "130723",
            name: "\u5EB7\u4FDD\u53BF"
          },
          {
            code: "130724",
            name: "\u6CBD\u6E90\u53BF"
          },
          {
            code: "130725",
            name: "\u5C1A\u4E49\u53BF"
          },
          {
            code: "130726",
            name: "\u851A\u53BF"
          },
          {
            code: "130727",
            name: "\u9633\u539F\u53BF"
          },
          {
            code: "130728",
            name: "\u6000\u5B89\u53BF"
          },
          {
            code: "130730",
            name: "\u6000\u6765\u53BF"
          },
          {
            code: "130731",
            name: "\u6DBF\u9E7F\u53BF"
          },
          {
            code: "130732",
            name: "\u8D64\u57CE\u53BF"
          },
          {
            code: "130771",
            name: "\u5F20\u5BB6\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130772",
            name: "\u5F20\u5BB6\u53E3\u5E02\u5BDF\u5317\u7BA1\u7406\u533A"
          },
          {
            code: "130773",
            name: "\u5F20\u5BB6\u53E3\u5E02\u585E\u5317\u7BA1\u7406\u533A"
          }
        ]
      },
      {
        code: "1308",
        name: "\u627F\u5FB7\u5E02",
        children: [
          {
            code: "130802",
            name: "\u53CC\u6865\u533A"
          },
          {
            code: "130803",
            name: "\u53CC\u6EE6\u533A"
          },
          {
            code: "130804",
            name: "\u9E70\u624B\u8425\u5B50\u77FF\u533A"
          },
          {
            code: "130821",
            name: "\u627F\u5FB7\u53BF"
          },
          {
            code: "130822",
            name: "\u5174\u9686\u53BF"
          },
          {
            code: "130824",
            name: "\u6EE6\u5E73\u53BF"
          },
          {
            code: "130825",
            name: "\u9686\u5316\u53BF"
          },
          {
            code: "130826",
            name: "\u4E30\u5B81\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130827",
            name: "\u5BBD\u57CE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130828",
            name: "\u56F4\u573A\u6EE1\u65CF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130871",
            name: "\u627F\u5FB7\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130881",
            name: "\u5E73\u6CC9\u5E02"
          }
        ]
      },
      {
        code: "1309",
        name: "\u6CA7\u5DDE\u5E02",
        children: [
          {
            code: "130902",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "130903",
            name: "\u8FD0\u6CB3\u533A"
          },
          {
            code: "130921",
            name: "\u6CA7\u53BF"
          },
          {
            code: "130922",
            name: "\u9752\u53BF"
          },
          {
            code: "130923",
            name: "\u4E1C\u5149\u53BF"
          },
          {
            code: "130924",
            name: "\u6D77\u5174\u53BF"
          },
          {
            code: "130925",
            name: "\u76D0\u5C71\u53BF"
          },
          {
            code: "130926",
            name: "\u8083\u5B81\u53BF"
          },
          {
            code: "130927",
            name: "\u5357\u76AE\u53BF"
          },
          {
            code: "130928",
            name: "\u5434\u6865\u53BF"
          },
          {
            code: "130929",
            name: "\u732E\u53BF"
          },
          {
            code: "130930",
            name: "\u5B5F\u6751\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "130971",
            name: "\u6CB3\u5317\u6CA7\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "130972",
            name: "\u6CA7\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "130973",
            name: "\u6CA7\u5DDE\u6E24\u6D77\u65B0\u533A"
          },
          {
            code: "130981",
            name: "\u6CCA\u5934\u5E02"
          },
          {
            code: "130982",
            name: "\u4EFB\u4E18\u5E02"
          },
          {
            code: "130983",
            name: "\u9EC4\u9A85\u5E02"
          },
          {
            code: "130984",
            name: "\u6CB3\u95F4\u5E02"
          }
        ]
      },
      {
        code: "1310",
        name: "\u5ECA\u574A\u5E02",
        children: [
          {
            code: "131002",
            name: "\u5B89\u6B21\u533A"
          },
          {
            code: "131003",
            name: "\u5E7F\u9633\u533A"
          },
          {
            code: "131022",
            name: "\u56FA\u5B89\u53BF"
          },
          {
            code: "131023",
            name: "\u6C38\u6E05\u53BF"
          },
          {
            code: "131024",
            name: "\u9999\u6CB3\u53BF"
          },
          {
            code: "131025",
            name: "\u5927\u57CE\u53BF"
          },
          {
            code: "131026",
            name: "\u6587\u5B89\u53BF"
          },
          {
            code: "131028",
            name: "\u5927\u5382\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "131071",
            name: "\u5ECA\u574A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "131081",
            name: "\u9738\u5DDE\u5E02"
          },
          {
            code: "131082",
            name: "\u4E09\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1311",
        name: "\u8861\u6C34\u5E02",
        children: [
          {
            code: "131102",
            name: "\u6843\u57CE\u533A"
          },
          {
            code: "131103",
            name: "\u5180\u5DDE\u533A"
          },
          {
            code: "131121",
            name: "\u67A3\u5F3A\u53BF"
          },
          {
            code: "131122",
            name: "\u6B66\u9091\u53BF"
          },
          {
            code: "131123",
            name: "\u6B66\u5F3A\u53BF"
          },
          {
            code: "131124",
            name: "\u9976\u9633\u53BF"
          },
          {
            code: "131125",
            name: "\u5B89\u5E73\u53BF"
          },
          {
            code: "131126",
            name: "\u6545\u57CE\u53BF"
          },
          {
            code: "131127",
            name: "\u666F\u53BF"
          },
          {
            code: "131128",
            name: "\u961C\u57CE\u53BF"
          },
          {
            code: "131171",
            name: "\u6CB3\u5317\u8861\u6C34\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "131172",
            name: "\u8861\u6C34\u6EE8\u6E56\u65B0\u533A"
          },
          {
            code: "131182",
            name: "\u6DF1\u5DDE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "\u5C71\u897F\u7701",
    children: [
      {
        code: "1401",
        name: "\u592A\u539F\u5E02",
        children: [
          {
            code: "140105",
            name: "\u5C0F\u5E97\u533A"
          },
          {
            code: "140106",
            name: "\u8FCE\u6CFD\u533A"
          },
          {
            code: "140107",
            name: "\u674F\u82B1\u5CAD\u533A"
          },
          {
            code: "140108",
            name: "\u5C16\u8349\u576A\u533A"
          },
          {
            code: "140109",
            name: "\u4E07\u67CF\u6797\u533A"
          },
          {
            code: "140110",
            name: "\u664B\u6E90\u533A"
          },
          {
            code: "140121",
            name: "\u6E05\u5F90\u53BF"
          },
          {
            code: "140122",
            name: "\u9633\u66F2\u53BF"
          },
          {
            code: "140123",
            name: "\u5A04\u70E6\u53BF"
          },
          {
            code: "140171",
            name: "\u5C71\u897F\u8F6C\u578B\u7EFC\u5408\u6539\u9769\u793A\u8303\u533A"
          },
          {
            code: "140181",
            name: "\u53E4\u4EA4\u5E02"
          }
        ]
      },
      {
        code: "1402",
        name: "\u5927\u540C\u5E02",
        children: [
          {
            code: "140212",
            name: "\u65B0\u8363\u533A"
          },
          {
            code: "140213",
            name: "\u5E73\u57CE\u533A"
          },
          {
            code: "140214",
            name: "\u4E91\u5188\u533A"
          },
          {
            code: "140215",
            name: "\u4E91\u5DDE\u533A"
          },
          {
            code: "140221",
            name: "\u9633\u9AD8\u53BF"
          },
          {
            code: "140222",
            name: "\u5929\u9547\u53BF"
          },
          {
            code: "140223",
            name: "\u5E7F\u7075\u53BF"
          },
          {
            code: "140224",
            name: "\u7075\u4E18\u53BF"
          },
          {
            code: "140225",
            name: "\u6D51\u6E90\u53BF"
          },
          {
            code: "140226",
            name: "\u5DE6\u4E91\u53BF"
          },
          {
            code: "140271",
            name: "\u5C71\u897F\u5927\u540C\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1403",
        name: "\u9633\u6CC9\u5E02",
        children: [
          {
            code: "140302",
            name: "\u57CE\u533A"
          },
          {
            code: "140303",
            name: "\u77FF\u533A"
          },
          {
            code: "140311",
            name: "\u90CA\u533A"
          },
          {
            code: "140321",
            name: "\u5E73\u5B9A\u53BF"
          },
          {
            code: "140322",
            name: "\u76C2\u53BF"
          }
        ]
      },
      {
        code: "1404",
        name: "\u957F\u6CBB\u5E02",
        children: [
          {
            code: "140403",
            name: "\u6F5E\u5DDE\u533A"
          },
          {
            code: "140404",
            name: "\u4E0A\u515A\u533A"
          },
          {
            code: "140405",
            name: "\u5C6F\u7559\u533A"
          },
          {
            code: "140406",
            name: "\u6F5E\u57CE\u533A"
          },
          {
            code: "140423",
            name: "\u8944\u57A3\u53BF"
          },
          {
            code: "140425",
            name: "\u5E73\u987A\u53BF"
          },
          {
            code: "140426",
            name: "\u9ECE\u57CE\u53BF"
          },
          {
            code: "140427",
            name: "\u58F6\u5173\u53BF"
          },
          {
            code: "140428",
            name: "\u957F\u5B50\u53BF"
          },
          {
            code: "140429",
            name: "\u6B66\u4E61\u53BF"
          },
          {
            code: "140430",
            name: "\u6C81\u53BF"
          },
          {
            code: "140431",
            name: "\u6C81\u6E90\u53BF"
          },
          {
            code: "140471",
            name: "\u5C71\u897F\u957F\u6CBB\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "1405",
        name: "\u664B\u57CE\u5E02",
        children: [
          {
            code: "140502",
            name: "\u57CE\u533A"
          },
          {
            code: "140521",
            name: "\u6C81\u6C34\u53BF"
          },
          {
            code: "140522",
            name: "\u9633\u57CE\u53BF"
          },
          {
            code: "140524",
            name: "\u9675\u5DDD\u53BF"
          },
          {
            code: "140525",
            name: "\u6CFD\u5DDE\u53BF"
          },
          {
            code: "140581",
            name: "\u9AD8\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1406",
        name: "\u6714\u5DDE\u5E02",
        children: [
          {
            code: "140602",
            name: "\u6714\u57CE\u533A"
          },
          {
            code: "140603",
            name: "\u5E73\u9C81\u533A"
          },
          {
            code: "140621",
            name: "\u5C71\u9634\u53BF"
          },
          {
            code: "140622",
            name: "\u5E94\u53BF"
          },
          {
            code: "140623",
            name: "\u53F3\u7389\u53BF"
          },
          {
            code: "140671",
            name: "\u5C71\u897F\u6714\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "140681",
            name: "\u6000\u4EC1\u5E02"
          }
        ]
      },
      {
        code: "1407",
        name: "\u664B\u4E2D\u5E02",
        children: [
          {
            code: "140702",
            name: "\u6986\u6B21\u533A"
          },
          {
            code: "140703",
            name: "\u592A\u8C37\u533A"
          },
          {
            code: "140721",
            name: "\u6986\u793E\u53BF"
          },
          {
            code: "140722",
            name: "\u5DE6\u6743\u53BF"
          },
          {
            code: "140723",
            name: "\u548C\u987A\u53BF"
          },
          {
            code: "140724",
            name: "\u6614\u9633\u53BF"
          },
          {
            code: "140725",
            name: "\u5BFF\u9633\u53BF"
          },
          {
            code: "140727",
            name: "\u7941\u53BF"
          },
          {
            code: "140728",
            name: "\u5E73\u9065\u53BF"
          },
          {
            code: "140729",
            name: "\u7075\u77F3\u53BF"
          },
          {
            code: "140781",
            name: "\u4ECB\u4F11\u5E02"
          }
        ]
      },
      {
        code: "1408",
        name: "\u8FD0\u57CE\u5E02",
        children: [
          {
            code: "140802",
            name: "\u76D0\u6E56\u533A"
          },
          {
            code: "140821",
            name: "\u4E34\u7317\u53BF"
          },
          {
            code: "140822",
            name: "\u4E07\u8363\u53BF"
          },
          {
            code: "140823",
            name: "\u95FB\u559C\u53BF"
          },
          {
            code: "140824",
            name: "\u7A37\u5C71\u53BF"
          },
          {
            code: "140825",
            name: "\u65B0\u7EDB\u53BF"
          },
          {
            code: "140826",
            name: "\u7EDB\u53BF"
          },
          {
            code: "140827",
            name: "\u57A3\u66F2\u53BF"
          },
          {
            code: "140828",
            name: "\u590F\u53BF"
          },
          {
            code: "140829",
            name: "\u5E73\u9646\u53BF"
          },
          {
            code: "140830",
            name: "\u82AE\u57CE\u53BF"
          },
          {
            code: "140881",
            name: "\u6C38\u6D4E\u5E02"
          },
          {
            code: "140882",
            name: "\u6CB3\u6D25\u5E02"
          }
        ]
      },
      {
        code: "1409",
        name: "\u5FFB\u5DDE\u5E02",
        children: [
          {
            code: "140902",
            name: "\u5FFB\u5E9C\u533A"
          },
          {
            code: "140921",
            name: "\u5B9A\u8944\u53BF"
          },
          {
            code: "140922",
            name: "\u4E94\u53F0\u53BF"
          },
          {
            code: "140923",
            name: "\u4EE3\u53BF"
          },
          {
            code: "140924",
            name: "\u7E41\u5CD9\u53BF"
          },
          {
            code: "140925",
            name: "\u5B81\u6B66\u53BF"
          },
          {
            code: "140926",
            name: "\u9759\u4E50\u53BF"
          },
          {
            code: "140927",
            name: "\u795E\u6C60\u53BF"
          },
          {
            code: "140928",
            name: "\u4E94\u5BE8\u53BF"
          },
          {
            code: "140929",
            name: "\u5CA2\u5C9A\u53BF"
          },
          {
            code: "140930",
            name: "\u6CB3\u66F2\u53BF"
          },
          {
            code: "140931",
            name: "\u4FDD\u5FB7\u53BF"
          },
          {
            code: "140932",
            name: "\u504F\u5173\u53BF"
          },
          {
            code: "140971",
            name: "\u4E94\u53F0\u5C71\u98CE\u666F\u540D\u80DC\u533A"
          },
          {
            code: "140981",
            name: "\u539F\u5E73\u5E02"
          }
        ]
      },
      {
        code: "1410",
        name: "\u4E34\u6C7E\u5E02",
        children: [
          {
            code: "141002",
            name: "\u5C27\u90FD\u533A"
          },
          {
            code: "141021",
            name: "\u66F2\u6C83\u53BF"
          },
          {
            code: "141022",
            name: "\u7FFC\u57CE\u53BF"
          },
          {
            code: "141023",
            name: "\u8944\u6C7E\u53BF"
          },
          {
            code: "141024",
            name: "\u6D2A\u6D1E\u53BF"
          },
          {
            code: "141025",
            name: "\u53E4\u53BF"
          },
          {
            code: "141026",
            name: "\u5B89\u6CFD\u53BF"
          },
          {
            code: "141027",
            name: "\u6D6E\u5C71\u53BF"
          },
          {
            code: "141028",
            name: "\u5409\u53BF"
          },
          {
            code: "141029",
            name: "\u4E61\u5B81\u53BF"
          },
          {
            code: "141030",
            name: "\u5927\u5B81\u53BF"
          },
          {
            code: "141031",
            name: "\u96B0\u53BF"
          },
          {
            code: "141032",
            name: "\u6C38\u548C\u53BF"
          },
          {
            code: "141033",
            name: "\u84B2\u53BF"
          },
          {
            code: "141034",
            name: "\u6C7E\u897F\u53BF"
          },
          {
            code: "141081",
            name: "\u4FAF\u9A6C\u5E02"
          },
          {
            code: "141082",
            name: "\u970D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "1411",
        name: "\u5415\u6881\u5E02",
        children: [
          {
            code: "141102",
            name: "\u79BB\u77F3\u533A"
          },
          {
            code: "141121",
            name: "\u6587\u6C34\u53BF"
          },
          {
            code: "141122",
            name: "\u4EA4\u57CE\u53BF"
          },
          {
            code: "141123",
            name: "\u5174\u53BF"
          },
          {
            code: "141124",
            name: "\u4E34\u53BF"
          },
          {
            code: "141125",
            name: "\u67F3\u6797\u53BF"
          },
          {
            code: "141126",
            name: "\u77F3\u697C\u53BF"
          },
          {
            code: "141127",
            name: "\u5C9A\u53BF"
          },
          {
            code: "141128",
            name: "\u65B9\u5C71\u53BF"
          },
          {
            code: "141129",
            name: "\u4E2D\u9633\u53BF"
          },
          {
            code: "141130",
            name: "\u4EA4\u53E3\u53BF"
          },
          {
            code: "141181",
            name: "\u5B5D\u4E49\u5E02"
          },
          {
            code: "141182",
            name: "\u6C7E\u9633\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
    children: [
      {
        code: "1501",
        name: "\u547C\u548C\u6D69\u7279\u5E02",
        children: [
          {
            code: "150102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "150103",
            name: "\u56DE\u6C11\u533A"
          },
          {
            code: "150104",
            name: "\u7389\u6CC9\u533A"
          },
          {
            code: "150105",
            name: "\u8D5B\u7F55\u533A"
          },
          {
            code: "150121",
            name: "\u571F\u9ED8\u7279\u5DE6\u65D7"
          },
          {
            code: "150122",
            name: "\u6258\u514B\u6258\u53BF"
          },
          {
            code: "150123",
            name: "\u548C\u6797\u683C\u5C14\u53BF"
          },
          {
            code: "150124",
            name: "\u6E05\u6C34\u6CB3\u53BF"
          },
          {
            code: "150125",
            name: "\u6B66\u5DDD\u53BF"
          },
          {
            code: "150172",
            name: "\u547C\u548C\u6D69\u7279\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1502",
        name: "\u5305\u5934\u5E02",
        children: [
          {
            code: "150202",
            name: "\u4E1C\u6CB3\u533A"
          },
          {
            code: "150203",
            name: "\u6606\u90FD\u4ED1\u533A"
          },
          {
            code: "150204",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "150205",
            name: "\u77F3\u62D0\u533A"
          },
          {
            code: "150206",
            name: "\u767D\u4E91\u9102\u535A\u77FF\u533A"
          },
          {
            code: "150207",
            name: "\u4E5D\u539F\u533A"
          },
          {
            code: "150221",
            name: "\u571F\u9ED8\u7279\u53F3\u65D7"
          },
          {
            code: "150222",
            name: "\u56FA\u9633\u53BF"
          },
          {
            code: "150223",
            name: "\u8FBE\u5C14\u7F55\u8302\u660E\u5B89\u8054\u5408\u65D7"
          },
          {
            code: "150271",
            name: "\u5305\u5934\u7A00\u571F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "1503",
        name: "\u4E4C\u6D77\u5E02",
        children: [
          {
            code: "150302",
            name: "\u6D77\u52C3\u6E7E\u533A"
          },
          {
            code: "150303",
            name: "\u6D77\u5357\u533A"
          },
          {
            code: "150304",
            name: "\u4E4C\u8FBE\u533A"
          }
        ]
      },
      {
        code: "1504",
        name: "\u8D64\u5CF0\u5E02",
        children: [
          {
            code: "150402",
            name: "\u7EA2\u5C71\u533A"
          },
          {
            code: "150403",
            name: "\u5143\u5B9D\u5C71\u533A"
          },
          {
            code: "150404",
            name: "\u677E\u5C71\u533A"
          },
          {
            code: "150421",
            name: "\u963F\u9C81\u79D1\u5C14\u6C81\u65D7"
          },
          {
            code: "150422",
            name: "\u5DF4\u6797\u5DE6\u65D7"
          },
          {
            code: "150423",
            name: "\u5DF4\u6797\u53F3\u65D7"
          },
          {
            code: "150424",
            name: "\u6797\u897F\u53BF"
          },
          {
            code: "150425",
            name: "\u514B\u4EC0\u514B\u817E\u65D7"
          },
          {
            code: "150426",
            name: "\u7FC1\u725B\u7279\u65D7"
          },
          {
            code: "150428",
            name: "\u5580\u5587\u6C81\u65D7"
          },
          {
            code: "150429",
            name: "\u5B81\u57CE\u53BF"
          },
          {
            code: "150430",
            name: "\u6556\u6C49\u65D7"
          }
        ]
      },
      {
        code: "1505",
        name: "\u901A\u8FBD\u5E02",
        children: [
          {
            code: "150502",
            name: "\u79D1\u5C14\u6C81\u533A"
          },
          {
            code: "150521",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150522",
            name: "\u79D1\u5C14\u6C81\u5DE6\u7FFC\u540E\u65D7"
          },
          {
            code: "150523",
            name: "\u5F00\u9C81\u53BF"
          },
          {
            code: "150524",
            name: "\u5E93\u4F26\u65D7"
          },
          {
            code: "150525",
            name: "\u5948\u66FC\u65D7"
          },
          {
            code: "150526",
            name: "\u624E\u9C81\u7279\u65D7"
          },
          {
            code: "150571",
            name: "\u901A\u8FBD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "150581",
            name: "\u970D\u6797\u90ED\u52D2\u5E02"
          }
        ]
      },
      {
        code: "1506",
        name: "\u9102\u5C14\u591A\u65AF\u5E02",
        children: [
          {
            code: "150602",
            name: "\u4E1C\u80DC\u533A"
          },
          {
            code: "150603",
            name: "\u5EB7\u5DF4\u4EC0\u533A"
          },
          {
            code: "150621",
            name: "\u8FBE\u62C9\u7279\u65D7"
          },
          {
            code: "150622",
            name: "\u51C6\u683C\u5C14\u65D7"
          },
          {
            code: "150623",
            name: "\u9102\u6258\u514B\u524D\u65D7"
          },
          {
            code: "150624",
            name: "\u9102\u6258\u514B\u65D7"
          },
          {
            code: "150625",
            name: "\u676D\u9526\u65D7"
          },
          {
            code: "150626",
            name: "\u4E4C\u5BA1\u65D7"
          },
          {
            code: "150627",
            name: "\u4F0A\u91D1\u970D\u6D1B\u65D7"
          }
        ]
      },
      {
        code: "1507",
        name: "\u547C\u4F26\u8D1D\u5C14\u5E02",
        children: [
          {
            code: "150702",
            name: "\u6D77\u62C9\u5C14\u533A"
          },
          {
            code: "150703",
            name: "\u624E\u8D49\u8BFA\u5C14\u533A"
          },
          {
            code: "150721",
            name: "\u963F\u8363\u65D7"
          },
          {
            code: "150722",
            name: "\u83AB\u529B\u8FBE\u74E6\u8FBE\u65A1\u5C14\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150723",
            name: "\u9102\u4F26\u6625\u81EA\u6CBB\u65D7"
          },
          {
            code: "150724",
            name: "\u9102\u6E29\u514B\u65CF\u81EA\u6CBB\u65D7"
          },
          {
            code: "150725",
            name: "\u9648\u5DF4\u5C14\u864E\u65D7"
          },
          {
            code: "150726",
            name: "\u65B0\u5DF4\u5C14\u864E\u5DE6\u65D7"
          },
          {
            code: "150727",
            name: "\u65B0\u5DF4\u5C14\u864E\u53F3\u65D7"
          },
          {
            code: "150781",
            name: "\u6EE1\u6D32\u91CC\u5E02"
          },
          {
            code: "150782",
            name: "\u7259\u514B\u77F3\u5E02"
          },
          {
            code: "150783",
            name: "\u624E\u5170\u5C6F\u5E02"
          },
          {
            code: "150784",
            name: "\u989D\u5C14\u53E4\u7EB3\u5E02"
          },
          {
            code: "150785",
            name: "\u6839\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "1508",
        name: "\u5DF4\u5F66\u6DD6\u5C14\u5E02",
        children: [
          {
            code: "150802",
            name: "\u4E34\u6CB3\u533A"
          },
          {
            code: "150821",
            name: "\u4E94\u539F\u53BF"
          },
          {
            code: "150822",
            name: "\u78F4\u53E3\u53BF"
          },
          {
            code: "150823",
            name: "\u4E4C\u62C9\u7279\u524D\u65D7"
          },
          {
            code: "150824",
            name: "\u4E4C\u62C9\u7279\u4E2D\u65D7"
          },
          {
            code: "150825",
            name: "\u4E4C\u62C9\u7279\u540E\u65D7"
          },
          {
            code: "150826",
            name: "\u676D\u9526\u540E\u65D7"
          }
        ]
      },
      {
        code: "1509",
        name: "\u4E4C\u5170\u5BDF\u5E03\u5E02",
        children: [
          {
            code: "150902",
            name: "\u96C6\u5B81\u533A"
          },
          {
            code: "150921",
            name: "\u5353\u8D44\u53BF"
          },
          {
            code: "150922",
            name: "\u5316\u5FB7\u53BF"
          },
          {
            code: "150923",
            name: "\u5546\u90FD\u53BF"
          },
          {
            code: "150924",
            name: "\u5174\u548C\u53BF"
          },
          {
            code: "150925",
            name: "\u51C9\u57CE\u53BF"
          },
          {
            code: "150926",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "150927",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "150928",
            name: "\u5BDF\u54C8\u5C14\u53F3\u7FFC\u540E\u65D7"
          },
          {
            code: "150929",
            name: "\u56DB\u5B50\u738B\u65D7"
          },
          {
            code: "150981",
            name: "\u4E30\u9547\u5E02"
          }
        ]
      },
      {
        code: "1522",
        name: "\u5174\u5B89\u76DF",
        children: [
          {
            code: "152201",
            name: "\u4E4C\u5170\u6D69\u7279\u5E02"
          },
          {
            code: "152202",
            name: "\u963F\u5C14\u5C71\u5E02"
          },
          {
            code: "152221",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u524D\u65D7"
          },
          {
            code: "152222",
            name: "\u79D1\u5C14\u6C81\u53F3\u7FFC\u4E2D\u65D7"
          },
          {
            code: "152223",
            name: "\u624E\u8D49\u7279\u65D7"
          },
          {
            code: "152224",
            name: "\u7A81\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "1525",
        name: "\u9521\u6797\u90ED\u52D2\u76DF",
        children: [
          {
            code: "152501",
            name: "\u4E8C\u8FDE\u6D69\u7279\u5E02"
          },
          {
            code: "152502",
            name: "\u9521\u6797\u6D69\u7279\u5E02"
          },
          {
            code: "152522",
            name: "\u963F\u5DF4\u560E\u65D7"
          },
          {
            code: "152523",
            name: "\u82CF\u5C3C\u7279\u5DE6\u65D7"
          },
          {
            code: "152524",
            name: "\u82CF\u5C3C\u7279\u53F3\u65D7"
          },
          {
            code: "152525",
            name: "\u4E1C\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152526",
            name: "\u897F\u4E4C\u73E0\u7A46\u6C81\u65D7"
          },
          {
            code: "152527",
            name: "\u592A\u4EC6\u5BFA\u65D7"
          },
          {
            code: "152528",
            name: "\u9576\u9EC4\u65D7"
          },
          {
            code: "152529",
            name: "\u6B63\u9576\u767D\u65D7"
          },
          {
            code: "152530",
            name: "\u6B63\u84DD\u65D7"
          },
          {
            code: "152531",
            name: "\u591A\u4F26\u53BF"
          },
          {
            code: "152571",
            name: "\u4E4C\u62C9\u76D6\u7BA1\u59D4\u4F1A"
          }
        ]
      },
      {
        code: "1529",
        name: "\u963F\u62C9\u5584\u76DF",
        children: [
          {
            code: "152921",
            name: "\u963F\u62C9\u5584\u5DE6\u65D7"
          },
          {
            code: "152922",
            name: "\u963F\u62C9\u5584\u53F3\u65D7"
          },
          {
            code: "152923",
            name: "\u989D\u6D4E\u7EB3\u65D7"
          },
          {
            code: "152971",
            name: "\u5185\u8499\u53E4\u963F\u62C9\u5584\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "\u8FBD\u5B81\u7701",
    children: [
      {
        code: "2101",
        name: "\u6C88\u9633\u5E02",
        children: [
          {
            code: "210102",
            name: "\u548C\u5E73\u533A"
          },
          {
            code: "210103",
            name: "\u6C88\u6CB3\u533A"
          },
          {
            code: "210104",
            name: "\u5927\u4E1C\u533A"
          },
          {
            code: "210105",
            name: "\u7687\u59D1\u533A"
          },
          {
            code: "210106",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210111",
            name: "\u82CF\u5BB6\u5C6F\u533A"
          },
          {
            code: "210112",
            name: "\u6D51\u5357\u533A"
          },
          {
            code: "210113",
            name: "\u6C88\u5317\u65B0\u533A"
          },
          {
            code: "210114",
            name: "\u4E8E\u6D2A\u533A"
          },
          {
            code: "210115",
            name: "\u8FBD\u4E2D\u533A"
          },
          {
            code: "210123",
            name: "\u5EB7\u5E73\u53BF"
          },
          {
            code: "210124",
            name: "\u6CD5\u5E93\u53BF"
          },
          {
            code: "210181",
            name: "\u65B0\u6C11\u5E02"
          }
        ]
      },
      {
        code: "2102",
        name: "\u5927\u8FDE\u5E02",
        children: [
          {
            code: "210202",
            name: "\u4E2D\u5C71\u533A"
          },
          {
            code: "210203",
            name: "\u897F\u5C97\u533A"
          },
          {
            code: "210204",
            name: "\u6C99\u6CB3\u53E3\u533A"
          },
          {
            code: "210211",
            name: "\u7518\u4E95\u5B50\u533A"
          },
          {
            code: "210212",
            name: "\u65C5\u987A\u53E3\u533A"
          },
          {
            code: "210213",
            name: "\u91D1\u5DDE\u533A"
          },
          {
            code: "210214",
            name: "\u666E\u5170\u5E97\u533A"
          },
          {
            code: "210224",
            name: "\u957F\u6D77\u53BF"
          },
          {
            code: "210281",
            name: "\u74E6\u623F\u5E97\u5E02"
          },
          {
            code: "210283",
            name: "\u5E84\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2103",
        name: "\u978D\u5C71\u5E02",
        children: [
          {
            code: "210302",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "210303",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "210304",
            name: "\u7ACB\u5C71\u533A"
          },
          {
            code: "210311",
            name: "\u5343\u5C71\u533A"
          },
          {
            code: "210321",
            name: "\u53F0\u5B89\u53BF"
          },
          {
            code: "210323",
            name: "\u5CAB\u5CA9\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210381",
            name: "\u6D77\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2104",
        name: "\u629A\u987A\u5E02",
        children: [
          {
            code: "210402",
            name: "\u65B0\u629A\u533A"
          },
          {
            code: "210403",
            name: "\u4E1C\u6D32\u533A"
          },
          {
            code: "210404",
            name: "\u671B\u82B1\u533A"
          },
          {
            code: "210411",
            name: "\u987A\u57CE\u533A"
          },
          {
            code: "210421",
            name: "\u629A\u987A\u53BF"
          },
          {
            code: "210422",
            name: "\u65B0\u5BBE\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210423",
            name: "\u6E05\u539F\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2105",
        name: "\u672C\u6EAA\u5E02",
        children: [
          {
            code: "210502",
            name: "\u5E73\u5C71\u533A"
          },
          {
            code: "210503",
            name: "\u6EAA\u6E56\u533A"
          },
          {
            code: "210504",
            name: "\u660E\u5C71\u533A"
          },
          {
            code: "210505",
            name: "\u5357\u82AC\u533A"
          },
          {
            code: "210521",
            name: "\u672C\u6EAA\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210522",
            name: "\u6853\u4EC1\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "2106",
        name: "\u4E39\u4E1C\u5E02",
        children: [
          {
            code: "210602",
            name: "\u5143\u5B9D\u533A"
          },
          {
            code: "210603",
            name: "\u632F\u5174\u533A"
          },
          {
            code: "210604",
            name: "\u632F\u5B89\u533A"
          },
          {
            code: "210624",
            name: "\u5BBD\u7538\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210681",
            name: "\u4E1C\u6E2F\u5E02"
          },
          {
            code: "210682",
            name: "\u51E4\u57CE\u5E02"
          }
        ]
      },
      {
        code: "2107",
        name: "\u9526\u5DDE\u5E02",
        children: [
          {
            code: "210702",
            name: "\u53E4\u5854\u533A"
          },
          {
            code: "210703",
            name: "\u51CC\u6CB3\u533A"
          },
          {
            code: "210711",
            name: "\u592A\u548C\u533A"
          },
          {
            code: "210726",
            name: "\u9ED1\u5C71\u53BF"
          },
          {
            code: "210727",
            name: "\u4E49\u53BF"
          },
          {
            code: "210781",
            name: "\u51CC\u6D77\u5E02"
          },
          {
            code: "210782",
            name: "\u5317\u9547\u5E02"
          }
        ]
      },
      {
        code: "2108",
        name: "\u8425\u53E3\u5E02",
        children: [
          {
            code: "210802",
            name: "\u7AD9\u524D\u533A"
          },
          {
            code: "210803",
            name: "\u897F\u5E02\u533A"
          },
          {
            code: "210804",
            name: "\u9C85\u9C7C\u5708\u533A"
          },
          {
            code: "210811",
            name: "\u8001\u8FB9\u533A"
          },
          {
            code: "210881",
            name: "\u76D6\u5DDE\u5E02"
          },
          {
            code: "210882",
            name: "\u5927\u77F3\u6865\u5E02"
          }
        ]
      },
      {
        code: "2109",
        name: "\u961C\u65B0\u5E02",
        children: [
          {
            code: "210902",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "210903",
            name: "\u65B0\u90B1\u533A"
          },
          {
            code: "210904",
            name: "\u592A\u5E73\u533A"
          },
          {
            code: "210905",
            name: "\u6E05\u6CB3\u95E8\u533A"
          },
          {
            code: "210911",
            name: "\u7EC6\u6CB3\u533A"
          },
          {
            code: "210921",
            name: "\u961C\u65B0\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "210922",
            name: "\u5F70\u6B66\u53BF"
          }
        ]
      },
      {
        code: "2110",
        name: "\u8FBD\u9633\u5E02",
        children: [
          {
            code: "211002",
            name: "\u767D\u5854\u533A"
          },
          {
            code: "211003",
            name: "\u6587\u5723\u533A"
          },
          {
            code: "211004",
            name: "\u5B8F\u4F1F\u533A"
          },
          {
            code: "211005",
            name: "\u5F13\u957F\u5CAD\u533A"
          },
          {
            code: "211011",
            name: "\u592A\u5B50\u6CB3\u533A"
          },
          {
            code: "211021",
            name: "\u8FBD\u9633\u53BF"
          },
          {
            code: "211081",
            name: "\u706F\u5854\u5E02"
          }
        ]
      },
      {
        code: "2111",
        name: "\u76D8\u9526\u5E02",
        children: [
          {
            code: "211102",
            name: "\u53CC\u53F0\u5B50\u533A"
          },
          {
            code: "211103",
            name: "\u5174\u9686\u53F0\u533A"
          },
          {
            code: "211104",
            name: "\u5927\u6D3C\u533A"
          },
          {
            code: "211122",
            name: "\u76D8\u5C71\u53BF"
          }
        ]
      },
      {
        code: "2112",
        name: "\u94C1\u5CAD\u5E02",
        children: [
          {
            code: "211202",
            name: "\u94F6\u5DDE\u533A"
          },
          {
            code: "211204",
            name: "\u6E05\u6CB3\u533A"
          },
          {
            code: "211221",
            name: "\u94C1\u5CAD\u53BF"
          },
          {
            code: "211223",
            name: "\u897F\u4E30\u53BF"
          },
          {
            code: "211224",
            name: "\u660C\u56FE\u53BF"
          },
          {
            code: "211281",
            name: "\u8C03\u5175\u5C71\u5E02"
          },
          {
            code: "211282",
            name: "\u5F00\u539F\u5E02"
          }
        ]
      },
      {
        code: "2113",
        name: "\u671D\u9633\u5E02",
        children: [
          {
            code: "211302",
            name: "\u53CC\u5854\u533A"
          },
          {
            code: "211303",
            name: "\u9F99\u57CE\u533A"
          },
          {
            code: "211321",
            name: "\u671D\u9633\u53BF"
          },
          {
            code: "211322",
            name: "\u5EFA\u5E73\u53BF"
          },
          {
            code: "211324",
            name: "\u5580\u5587\u6C81\u5DE6\u7FFC\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "211381",
            name: "\u5317\u7968\u5E02"
          },
          {
            code: "211382",
            name: "\u51CC\u6E90\u5E02"
          }
        ]
      },
      {
        code: "2114",
        name: "\u846B\u82A6\u5C9B\u5E02",
        children: [
          {
            code: "211402",
            name: "\u8FDE\u5C71\u533A"
          },
          {
            code: "211403",
            name: "\u9F99\u6E2F\u533A"
          },
          {
            code: "211404",
            name: "\u5357\u7968\u533A"
          },
          {
            code: "211421",
            name: "\u7EE5\u4E2D\u53BF"
          },
          {
            code: "211422",
            name: "\u5EFA\u660C\u53BF"
          },
          {
            code: "211481",
            name: "\u5174\u57CE\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "\u5409\u6797\u7701",
    children: [
      {
        code: "2201",
        name: "\u957F\u6625\u5E02",
        children: [
          {
            code: "220102",
            name: "\u5357\u5173\u533A"
          },
          {
            code: "220103",
            name: "\u5BBD\u57CE\u533A"
          },
          {
            code: "220104",
            name: "\u671D\u9633\u533A"
          },
          {
            code: "220105",
            name: "\u4E8C\u9053\u533A"
          },
          {
            code: "220106",
            name: "\u7EFF\u56ED\u533A"
          },
          {
            code: "220112",
            name: "\u53CC\u9633\u533A"
          },
          {
            code: "220113",
            name: "\u4E5D\u53F0\u533A"
          },
          {
            code: "220122",
            name: "\u519C\u5B89\u53BF"
          },
          {
            code: "220171",
            name: "\u957F\u6625\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220172",
            name: "\u957F\u6625\u51C0\u6708\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220173",
            name: "\u957F\u6625\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220174",
            name: "\u957F\u6625\u6C7D\u8F66\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "220182",
            name: "\u6986\u6811\u5E02"
          },
          {
            code: "220183",
            name: "\u5FB7\u60E0\u5E02"
          },
          {
            code: "220184",
            name: "\u516C\u4E3B\u5CAD\u5E02"
          }
        ]
      },
      {
        code: "2202",
        name: "\u5409\u6797\u5E02",
        children: [
          {
            code: "220202",
            name: "\u660C\u9091\u533A"
          },
          {
            code: "220203",
            name: "\u9F99\u6F6D\u533A"
          },
          {
            code: "220204",
            name: "\u8239\u8425\u533A"
          },
          {
            code: "220211",
            name: "\u4E30\u6EE1\u533A"
          },
          {
            code: "220221",
            name: "\u6C38\u5409\u53BF"
          },
          {
            code: "220271",
            name: "\u5409\u6797\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220272",
            name: "\u5409\u6797\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "220273",
            name: "\u5409\u6797\u4E2D\u56FD\u65B0\u52A0\u5761\u98DF\u54C1\u533A"
          },
          {
            code: "220281",
            name: "\u86DF\u6CB3\u5E02"
          },
          {
            code: "220282",
            name: "\u6866\u7538\u5E02"
          },
          {
            code: "220283",
            name: "\u8212\u5170\u5E02"
          },
          {
            code: "220284",
            name: "\u78D0\u77F3\u5E02"
          }
        ]
      },
      {
        code: "2203",
        name: "\u56DB\u5E73\u5E02",
        children: [
          {
            code: "220302",
            name: "\u94C1\u897F\u533A"
          },
          {
            code: "220303",
            name: "\u94C1\u4E1C\u533A"
          },
          {
            code: "220322",
            name: "\u68A8\u6811\u53BF"
          },
          {
            code: "220323",
            name: "\u4F0A\u901A\u6EE1\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220382",
            name: "\u53CC\u8FBD\u5E02"
          }
        ]
      },
      {
        code: "2204",
        name: "\u8FBD\u6E90\u5E02",
        children: [
          {
            code: "220402",
            name: "\u9F99\u5C71\u533A"
          },
          {
            code: "220403",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "220421",
            name: "\u4E1C\u4E30\u53BF"
          },
          {
            code: "220422",
            name: "\u4E1C\u8FBD\u53BF"
          }
        ]
      },
      {
        code: "2205",
        name: "\u901A\u5316\u5E02",
        children: [
          {
            code: "220502",
            name: "\u4E1C\u660C\u533A"
          },
          {
            code: "220503",
            name: "\u4E8C\u9053\u6C5F\u533A"
          },
          {
            code: "220521",
            name: "\u901A\u5316\u53BF"
          },
          {
            code: "220523",
            name: "\u8F89\u5357\u53BF"
          },
          {
            code: "220524",
            name: "\u67F3\u6CB3\u53BF"
          },
          {
            code: "220581",
            name: "\u6885\u6CB3\u53E3\u5E02"
          },
          {
            code: "220582",
            name: "\u96C6\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2206",
        name: "\u767D\u5C71\u5E02",
        children: [
          {
            code: "220602",
            name: "\u6D51\u6C5F\u533A"
          },
          {
            code: "220605",
            name: "\u6C5F\u6E90\u533A"
          },
          {
            code: "220621",
            name: "\u629A\u677E\u53BF"
          },
          {
            code: "220622",
            name: "\u9756\u5B87\u53BF"
          },
          {
            code: "220623",
            name: "\u957F\u767D\u671D\u9C9C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220681",
            name: "\u4E34\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2207",
        name: "\u677E\u539F\u5E02",
        children: [
          {
            code: "220702",
            name: "\u5B81\u6C5F\u533A"
          },
          {
            code: "220721",
            name: "\u524D\u90ED\u5C14\u7F57\u65AF\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "220722",
            name: "\u957F\u5CAD\u53BF"
          },
          {
            code: "220723",
            name: "\u4E7E\u5B89\u53BF"
          },
          {
            code: "220771",
            name: "\u5409\u6797\u677E\u539F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220781",
            name: "\u6276\u4F59\u5E02"
          }
        ]
      },
      {
        code: "2208",
        name: "\u767D\u57CE\u5E02",
        children: [
          {
            code: "220802",
            name: "\u6D2E\u5317\u533A"
          },
          {
            code: "220821",
            name: "\u9547\u8D49\u53BF"
          },
          {
            code: "220822",
            name: "\u901A\u6986\u53BF"
          },
          {
            code: "220871",
            name: "\u5409\u6797\u767D\u57CE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "220881",
            name: "\u6D2E\u5357\u5E02"
          },
          {
            code: "220882",
            name: "\u5927\u5B89\u5E02"
          }
        ]
      },
      {
        code: "2224",
        name: "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "222401",
            name: "\u5EF6\u5409\u5E02"
          },
          {
            code: "222402",
            name: "\u56FE\u4EEC\u5E02"
          },
          {
            code: "222403",
            name: "\u6566\u5316\u5E02"
          },
          {
            code: "222404",
            name: "\u73F2\u6625\u5E02"
          },
          {
            code: "222405",
            name: "\u9F99\u4E95\u5E02"
          },
          {
            code: "222406",
            name: "\u548C\u9F99\u5E02"
          },
          {
            code: "222424",
            name: "\u6C6A\u6E05\u53BF"
          },
          {
            code: "222426",
            name: "\u5B89\u56FE\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "\u9ED1\u9F99\u6C5F\u7701",
    children: [
      {
        code: "2301",
        name: "\u54C8\u5C14\u6EE8\u5E02",
        children: [
          {
            code: "230102",
            name: "\u9053\u91CC\u533A"
          },
          {
            code: "230103",
            name: "\u5357\u5C97\u533A"
          },
          {
            code: "230104",
            name: "\u9053\u5916\u533A"
          },
          {
            code: "230108",
            name: "\u5E73\u623F\u533A"
          },
          {
            code: "230109",
            name: "\u677E\u5317\u533A"
          },
          {
            code: "230110",
            name: "\u9999\u574A\u533A"
          },
          {
            code: "230111",
            name: "\u547C\u5170\u533A"
          },
          {
            code: "230112",
            name: "\u963F\u57CE\u533A"
          },
          {
            code: "230113",
            name: "\u53CC\u57CE\u533A"
          },
          {
            code: "230123",
            name: "\u4F9D\u5170\u53BF"
          },
          {
            code: "230124",
            name: "\u65B9\u6B63\u53BF"
          },
          {
            code: "230125",
            name: "\u5BBE\u53BF"
          },
          {
            code: "230126",
            name: "\u5DF4\u5F66\u53BF"
          },
          {
            code: "230127",
            name: "\u6728\u5170\u53BF"
          },
          {
            code: "230128",
            name: "\u901A\u6CB3\u53BF"
          },
          {
            code: "230129",
            name: "\u5EF6\u5BFF\u53BF"
          },
          {
            code: "230183",
            name: "\u5C1A\u5FD7\u5E02"
          },
          {
            code: "230184",
            name: "\u4E94\u5E38\u5E02"
          }
        ]
      },
      {
        code: "2302",
        name: "\u9F50\u9F50\u54C8\u5C14\u5E02",
        children: [
          {
            code: "230202",
            name: "\u9F99\u6C99\u533A"
          },
          {
            code: "230203",
            name: "\u5EFA\u534E\u533A"
          },
          {
            code: "230204",
            name: "\u94C1\u950B\u533A"
          },
          {
            code: "230205",
            name: "\u6602\u6602\u6EAA\u533A"
          },
          {
            code: "230206",
            name: "\u5BCC\u62C9\u5C14\u57FA\u533A"
          },
          {
            code: "230207",
            name: "\u78BE\u5B50\u5C71\u533A"
          },
          {
            code: "230208",
            name: "\u6885\u91CC\u65AF\u8FBE\u65A1\u5C14\u65CF\u533A"
          },
          {
            code: "230221",
            name: "\u9F99\u6C5F\u53BF"
          },
          {
            code: "230223",
            name: "\u4F9D\u5B89\u53BF"
          },
          {
            code: "230224",
            name: "\u6CF0\u6765\u53BF"
          },
          {
            code: "230225",
            name: "\u7518\u5357\u53BF"
          },
          {
            code: "230227",
            name: "\u5BCC\u88D5\u53BF"
          },
          {
            code: "230229",
            name: "\u514B\u5C71\u53BF"
          },
          {
            code: "230230",
            name: "\u514B\u4E1C\u53BF"
          },
          {
            code: "230231",
            name: "\u62DC\u6CC9\u53BF"
          },
          {
            code: "230281",
            name: "\u8BB7\u6CB3\u5E02"
          }
        ]
      },
      {
        code: "2303",
        name: "\u9E21\u897F\u5E02",
        children: [
          {
            code: "230302",
            name: "\u9E21\u51A0\u533A"
          },
          {
            code: "230303",
            name: "\u6052\u5C71\u533A"
          },
          {
            code: "230304",
            name: "\u6EF4\u9053\u533A"
          },
          {
            code: "230305",
            name: "\u68A8\u6811\u533A"
          },
          {
            code: "230306",
            name: "\u57CE\u5B50\u6CB3\u533A"
          },
          {
            code: "230307",
            name: "\u9EBB\u5C71\u533A"
          },
          {
            code: "230321",
            name: "\u9E21\u4E1C\u53BF"
          },
          {
            code: "230381",
            name: "\u864E\u6797\u5E02"
          },
          {
            code: "230382",
            name: "\u5BC6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "2304",
        name: "\u9E64\u5C97\u5E02",
        children: [
          {
            code: "230402",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230403",
            name: "\u5DE5\u519C\u533A"
          },
          {
            code: "230404",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "230405",
            name: "\u5174\u5B89\u533A"
          },
          {
            code: "230406",
            name: "\u4E1C\u5C71\u533A"
          },
          {
            code: "230407",
            name: "\u5174\u5C71\u533A"
          },
          {
            code: "230421",
            name: "\u841D\u5317\u53BF"
          },
          {
            code: "230422",
            name: "\u7EE5\u6EE8\u53BF"
          }
        ]
      },
      {
        code: "2305",
        name: "\u53CC\u9E2D\u5C71\u5E02",
        children: [
          {
            code: "230502",
            name: "\u5C16\u5C71\u533A"
          },
          {
            code: "230503",
            name: "\u5CAD\u4E1C\u533A"
          },
          {
            code: "230505",
            name: "\u56DB\u65B9\u53F0\u533A"
          },
          {
            code: "230506",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "230521",
            name: "\u96C6\u8D24\u53BF"
          },
          {
            code: "230522",
            name: "\u53CB\u8C0A\u53BF"
          },
          {
            code: "230523",
            name: "\u5B9D\u6E05\u53BF"
          },
          {
            code: "230524",
            name: "\u9976\u6CB3\u53BF"
          }
        ]
      },
      {
        code: "2306",
        name: "\u5927\u5E86\u5E02",
        children: [
          {
            code: "230602",
            name: "\u8428\u5C14\u56FE\u533A"
          },
          {
            code: "230603",
            name: "\u9F99\u51E4\u533A"
          },
          {
            code: "230604",
            name: "\u8BA9\u80E1\u8DEF\u533A"
          },
          {
            code: "230605",
            name: "\u7EA2\u5C97\u533A"
          },
          {
            code: "230606",
            name: "\u5927\u540C\u533A"
          },
          {
            code: "230621",
            name: "\u8087\u5DDE\u53BF"
          },
          {
            code: "230622",
            name: "\u8087\u6E90\u53BF"
          },
          {
            code: "230623",
            name: "\u6797\u7538\u53BF"
          },
          {
            code: "230624",
            name: "\u675C\u5C14\u4F2F\u7279\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "230671",
            name: "\u5927\u5E86\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "2307",
        name: "\u4F0A\u6625\u5E02",
        children: [
          {
            code: "230717",
            name: "\u4F0A\u7F8E\u533A"
          },
          {
            code: "230718",
            name: "\u4E4C\u7FE0\u533A"
          },
          {
            code: "230719",
            name: "\u53CB\u597D\u533A"
          },
          {
            code: "230722",
            name: "\u5609\u836B\u53BF"
          },
          {
            code: "230723",
            name: "\u6C64\u65FA\u53BF"
          },
          {
            code: "230724",
            name: "\u4E30\u6797\u53BF"
          },
          {
            code: "230725",
            name: "\u5927\u7B90\u5C71\u53BF"
          },
          {
            code: "230726",
            name: "\u5357\u5C94\u53BF"
          },
          {
            code: "230751",
            name: "\u91D1\u6797\u533A"
          },
          {
            code: "230781",
            name: "\u94C1\u529B\u5E02"
          }
        ]
      },
      {
        code: "2308",
        name: "\u4F73\u6728\u65AF\u5E02",
        children: [
          {
            code: "230803",
            name: "\u5411\u9633\u533A"
          },
          {
            code: "230804",
            name: "\u524D\u8FDB\u533A"
          },
          {
            code: "230805",
            name: "\u4E1C\u98CE\u533A"
          },
          {
            code: "230811",
            name: "\u90CA\u533A"
          },
          {
            code: "230822",
            name: "\u6866\u5357\u53BF"
          },
          {
            code: "230826",
            name: "\u6866\u5DDD\u53BF"
          },
          {
            code: "230828",
            name: "\u6C64\u539F\u53BF"
          },
          {
            code: "230881",
            name: "\u540C\u6C5F\u5E02"
          },
          {
            code: "230882",
            name: "\u5BCC\u9526\u5E02"
          },
          {
            code: "230883",
            name: "\u629A\u8FDC\u5E02"
          }
        ]
      },
      {
        code: "2309",
        name: "\u4E03\u53F0\u6CB3\u5E02",
        children: [
          {
            code: "230902",
            name: "\u65B0\u5174\u533A"
          },
          {
            code: "230903",
            name: "\u6843\u5C71\u533A"
          },
          {
            code: "230904",
            name: "\u8304\u5B50\u6CB3\u533A"
          },
          {
            code: "230921",
            name: "\u52C3\u5229\u53BF"
          }
        ]
      },
      {
        code: "2310",
        name: "\u7261\u4E39\u6C5F\u5E02",
        children: [
          {
            code: "231002",
            name: "\u4E1C\u5B89\u533A"
          },
          {
            code: "231003",
            name: "\u9633\u660E\u533A"
          },
          {
            code: "231004",
            name: "\u7231\u6C11\u533A"
          },
          {
            code: "231005",
            name: "\u897F\u5B89\u533A"
          },
          {
            code: "231025",
            name: "\u6797\u53E3\u53BF"
          },
          {
            code: "231071",
            name: "\u7261\u4E39\u6C5F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "231081",
            name: "\u7EE5\u82AC\u6CB3\u5E02"
          },
          {
            code: "231083",
            name: "\u6D77\u6797\u5E02"
          },
          {
            code: "231084",
            name: "\u5B81\u5B89\u5E02"
          },
          {
            code: "231085",
            name: "\u7A46\u68F1\u5E02"
          },
          {
            code: "231086",
            name: "\u4E1C\u5B81\u5E02"
          }
        ]
      },
      {
        code: "2311",
        name: "\u9ED1\u6CB3\u5E02",
        children: [
          {
            code: "231102",
            name: "\u7231\u8F89\u533A"
          },
          {
            code: "231123",
            name: "\u900A\u514B\u53BF"
          },
          {
            code: "231124",
            name: "\u5B59\u5434\u53BF"
          },
          {
            code: "231181",
            name: "\u5317\u5B89\u5E02"
          },
          {
            code: "231182",
            name: "\u4E94\u5927\u8FDE\u6C60\u5E02"
          },
          {
            code: "231183",
            name: "\u5AE9\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "2312",
        name: "\u7EE5\u5316\u5E02",
        children: [
          {
            code: "231202",
            name: "\u5317\u6797\u533A"
          },
          {
            code: "231221",
            name: "\u671B\u594E\u53BF"
          },
          {
            code: "231222",
            name: "\u5170\u897F\u53BF"
          },
          {
            code: "231223",
            name: "\u9752\u5188\u53BF"
          },
          {
            code: "231224",
            name: "\u5E86\u5B89\u53BF"
          },
          {
            code: "231225",
            name: "\u660E\u6C34\u53BF"
          },
          {
            code: "231226",
            name: "\u7EE5\u68F1\u53BF"
          },
          {
            code: "231281",
            name: "\u5B89\u8FBE\u5E02"
          },
          {
            code: "231282",
            name: "\u8087\u4E1C\u5E02"
          },
          {
            code: "231283",
            name: "\u6D77\u4F26\u5E02"
          }
        ]
      },
      {
        code: "2327",
        name: "\u5927\u5174\u5B89\u5CAD\u5730\u533A",
        children: [
          {
            code: "232701",
            name: "\u6F20\u6CB3\u5E02"
          },
          {
            code: "232721",
            name: "\u547C\u739B\u53BF"
          },
          {
            code: "232722",
            name: "\u5854\u6CB3\u53BF"
          },
          {
            code: "232761",
            name: "\u52A0\u683C\u8FBE\u5947\u533A"
          },
          {
            code: "232762",
            name: "\u677E\u5CAD\u533A"
          },
          {
            code: "232763",
            name: "\u65B0\u6797\u533A"
          },
          {
            code: "232764",
            name: "\u547C\u4E2D\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "\u4E0A\u6D77\u5E02",
    children: [
      {
        code: "3101",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "310101",
            name: "\u9EC4\u6D66\u533A"
          },
          {
            code: "310104",
            name: "\u5F90\u6C47\u533A"
          },
          {
            code: "310105",
            name: "\u957F\u5B81\u533A"
          },
          {
            code: "310106",
            name: "\u9759\u5B89\u533A"
          },
          {
            code: "310107",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "310109",
            name: "\u8679\u53E3\u533A"
          },
          {
            code: "310110",
            name: "\u6768\u6D66\u533A"
          },
          {
            code: "310112",
            name: "\u95F5\u884C\u533A"
          },
          {
            code: "310113",
            name: "\u5B9D\u5C71\u533A"
          },
          {
            code: "310114",
            name: "\u5609\u5B9A\u533A"
          },
          {
            code: "310115",
            name: "\u6D66\u4E1C\u65B0\u533A"
          },
          {
            code: "310116",
            name: "\u91D1\u5C71\u533A"
          },
          {
            code: "310117",
            name: "\u677E\u6C5F\u533A"
          },
          {
            code: "310118",
            name: "\u9752\u6D66\u533A"
          },
          {
            code: "310120",
            name: "\u5949\u8D24\u533A"
          },
          {
            code: "310151",
            name: "\u5D07\u660E\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "\u6C5F\u82CF\u7701",
    children: [
      {
        code: "3201",
        name: "\u5357\u4EAC\u5E02",
        children: [
          {
            code: "320102",
            name: "\u7384\u6B66\u533A"
          },
          {
            code: "320104",
            name: "\u79E6\u6DEE\u533A"
          },
          {
            code: "320105",
            name: "\u5EFA\u90BA\u533A"
          },
          {
            code: "320106",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320111",
            name: "\u6D66\u53E3\u533A"
          },
          {
            code: "320113",
            name: "\u6816\u971E\u533A"
          },
          {
            code: "320114",
            name: "\u96E8\u82B1\u53F0\u533A"
          },
          {
            code: "320115",
            name: "\u6C5F\u5B81\u533A"
          },
          {
            code: "320116",
            name: "\u516D\u5408\u533A"
          },
          {
            code: "320117",
            name: "\u6EA7\u6C34\u533A"
          },
          {
            code: "320118",
            name: "\u9AD8\u6DF3\u533A"
          }
        ]
      },
      {
        code: "3202",
        name: "\u65E0\u9521\u5E02",
        children: [
          {
            code: "320205",
            name: "\u9521\u5C71\u533A"
          },
          {
            code: "320206",
            name: "\u60E0\u5C71\u533A"
          },
          {
            code: "320211",
            name: "\u6EE8\u6E56\u533A"
          },
          {
            code: "320213",
            name: "\u6881\u6EAA\u533A"
          },
          {
            code: "320214",
            name: "\u65B0\u5434\u533A"
          },
          {
            code: "320281",
            name: "\u6C5F\u9634\u5E02"
          },
          {
            code: "320282",
            name: "\u5B9C\u5174\u5E02"
          }
        ]
      },
      {
        code: "3203",
        name: "\u5F90\u5DDE\u5E02",
        children: [
          {
            code: "320302",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "320303",
            name: "\u4E91\u9F99\u533A"
          },
          {
            code: "320305",
            name: "\u8D3E\u6C6A\u533A"
          },
          {
            code: "320311",
            name: "\u6CC9\u5C71\u533A"
          },
          {
            code: "320312",
            name: "\u94DC\u5C71\u533A"
          },
          {
            code: "320321",
            name: "\u4E30\u53BF"
          },
          {
            code: "320322",
            name: "\u6C9B\u53BF"
          },
          {
            code: "320324",
            name: "\u7762\u5B81\u53BF"
          },
          {
            code: "320371",
            name: "\u5F90\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320381",
            name: "\u65B0\u6C82\u5E02"
          },
          {
            code: "320382",
            name: "\u90B3\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3204",
        name: "\u5E38\u5DDE\u5E02",
        children: [
          {
            code: "320402",
            name: "\u5929\u5B81\u533A"
          },
          {
            code: "320404",
            name: "\u949F\u697C\u533A"
          },
          {
            code: "320411",
            name: "\u65B0\u5317\u533A"
          },
          {
            code: "320412",
            name: "\u6B66\u8FDB\u533A"
          },
          {
            code: "320413",
            name: "\u91D1\u575B\u533A"
          },
          {
            code: "320481",
            name: "\u6EA7\u9633\u5E02"
          }
        ]
      },
      {
        code: "3205",
        name: "\u82CF\u5DDE\u5E02",
        children: [
          {
            code: "320505",
            name: "\u864E\u4E18\u533A"
          },
          {
            code: "320506",
            name: "\u5434\u4E2D\u533A"
          },
          {
            code: "320507",
            name: "\u76F8\u57CE\u533A"
          },
          {
            code: "320508",
            name: "\u59D1\u82CF\u533A"
          },
          {
            code: "320509",
            name: "\u5434\u6C5F\u533A"
          },
          {
            code: "320571",
            name: "\u82CF\u5DDE\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "320581",
            name: "\u5E38\u719F\u5E02"
          },
          {
            code: "320582",
            name: "\u5F20\u5BB6\u6E2F\u5E02"
          },
          {
            code: "320583",
            name: "\u6606\u5C71\u5E02"
          },
          {
            code: "320585",
            name: "\u592A\u4ED3\u5E02"
          }
        ]
      },
      {
        code: "3206",
        name: "\u5357\u901A\u5E02",
        children: [
          {
            code: "320612",
            name: "\u901A\u5DDE\u533A"
          },
          {
            code: "320613",
            name: "\u5D07\u5DDD\u533A"
          },
          {
            code: "320614",
            name: "\u6D77\u95E8\u533A"
          },
          {
            code: "320623",
            name: "\u5982\u4E1C\u53BF"
          },
          {
            code: "320671",
            name: "\u5357\u901A\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320681",
            name: "\u542F\u4E1C\u5E02"
          },
          {
            code: "320682",
            name: "\u5982\u768B\u5E02"
          },
          {
            code: "320685",
            name: "\u6D77\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3207",
        name: "\u8FDE\u4E91\u6E2F\u5E02",
        children: [
          {
            code: "320703",
            name: "\u8FDE\u4E91\u533A"
          },
          {
            code: "320706",
            name: "\u6D77\u5DDE\u533A"
          },
          {
            code: "320707",
            name: "\u8D63\u6986\u533A"
          },
          {
            code: "320722",
            name: "\u4E1C\u6D77\u53BF"
          },
          {
            code: "320723",
            name: "\u704C\u4E91\u53BF"
          },
          {
            code: "320724",
            name: "\u704C\u5357\u53BF"
          },
          {
            code: "320771",
            name: "\u8FDE\u4E91\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320772",
            name: "\u8FDE\u4E91\u6E2F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3208",
        name: "\u6DEE\u5B89\u5E02",
        children: [
          {
            code: "320803",
            name: "\u6DEE\u5B89\u533A"
          },
          {
            code: "320804",
            name: "\u6DEE\u9634\u533A"
          },
          {
            code: "320812",
            name: "\u6E05\u6C5F\u6D66\u533A"
          },
          {
            code: "320813",
            name: "\u6D2A\u6CFD\u533A"
          },
          {
            code: "320826",
            name: "\u6D9F\u6C34\u53BF"
          },
          {
            code: "320830",
            name: "\u76F1\u7719\u53BF"
          },
          {
            code: "320831",
            name: "\u91D1\u6E56\u53BF"
          },
          {
            code: "320871",
            name: "\u6DEE\u5B89\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3209",
        name: "\u76D0\u57CE\u5E02",
        children: [
          {
            code: "320902",
            name: "\u4EAD\u6E56\u533A"
          },
          {
            code: "320903",
            name: "\u76D0\u90FD\u533A"
          },
          {
            code: "320904",
            name: "\u5927\u4E30\u533A"
          },
          {
            code: "320921",
            name: "\u54CD\u6C34\u53BF"
          },
          {
            code: "320922",
            name: "\u6EE8\u6D77\u53BF"
          },
          {
            code: "320923",
            name: "\u961C\u5B81\u53BF"
          },
          {
            code: "320924",
            name: "\u5C04\u9633\u53BF"
          },
          {
            code: "320925",
            name: "\u5EFA\u6E56\u53BF"
          },
          {
            code: "320971",
            name: "\u76D0\u57CE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "320981",
            name: "\u4E1C\u53F0\u5E02"
          }
        ]
      },
      {
        code: "3210",
        name: "\u626C\u5DDE\u5E02",
        children: [
          {
            code: "321002",
            name: "\u5E7F\u9675\u533A"
          },
          {
            code: "321003",
            name: "\u9097\u6C5F\u533A"
          },
          {
            code: "321012",
            name: "\u6C5F\u90FD\u533A"
          },
          {
            code: "321023",
            name: "\u5B9D\u5E94\u53BF"
          },
          {
            code: "321071",
            name: "\u626C\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "321081",
            name: "\u4EEA\u5F81\u5E02"
          },
          {
            code: "321084",
            name: "\u9AD8\u90AE\u5E02"
          }
        ]
      },
      {
        code: "3211",
        name: "\u9547\u6C5F\u5E02",
        children: [
          {
            code: "321102",
            name: "\u4EAC\u53E3\u533A"
          },
          {
            code: "321111",
            name: "\u6DA6\u5DDE\u533A"
          },
          {
            code: "321112",
            name: "\u4E39\u5F92\u533A"
          },
          {
            code: "321171",
            name: "\u9547\u6C5F\u65B0\u533A"
          },
          {
            code: "321181",
            name: "\u4E39\u9633\u5E02"
          },
          {
            code: "321182",
            name: "\u626C\u4E2D\u5E02"
          },
          {
            code: "321183",
            name: "\u53E5\u5BB9\u5E02"
          }
        ]
      },
      {
        code: "3212",
        name: "\u6CF0\u5DDE\u5E02",
        children: [
          {
            code: "321202",
            name: "\u6D77\u9675\u533A"
          },
          {
            code: "321203",
            name: "\u9AD8\u6E2F\u533A"
          },
          {
            code: "321204",
            name: "\u59DC\u5830\u533A"
          },
          {
            code: "321271",
            name: "\u6CF0\u5DDE\u533B\u836F\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "321281",
            name: "\u5174\u5316\u5E02"
          },
          {
            code: "321282",
            name: "\u9756\u6C5F\u5E02"
          },
          {
            code: "321283",
            name: "\u6CF0\u5174\u5E02"
          }
        ]
      },
      {
        code: "3213",
        name: "\u5BBF\u8FC1\u5E02",
        children: [
          {
            code: "321302",
            name: "\u5BBF\u57CE\u533A"
          },
          {
            code: "321311",
            name: "\u5BBF\u8C6B\u533A"
          },
          {
            code: "321322",
            name: "\u6CAD\u9633\u53BF"
          },
          {
            code: "321323",
            name: "\u6CD7\u9633\u53BF"
          },
          {
            code: "321324",
            name: "\u6CD7\u6D2A\u53BF"
          },
          {
            code: "321371",
            name: "\u5BBF\u8FC1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "\u6D59\u6C5F\u7701",
    children: [
      {
        code: "3301",
        name: "\u676D\u5DDE\u5E02",
        children: [
          {
            code: "330102",
            name: "\u4E0A\u57CE\u533A"
          },
          {
            code: "330105",
            name: "\u62F1\u5885\u533A"
          },
          {
            code: "330106",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "330108",
            name: "\u6EE8\u6C5F\u533A"
          },
          {
            code: "330109",
            name: "\u8427\u5C71\u533A"
          },
          {
            code: "330110",
            name: "\u4F59\u676D\u533A"
          },
          {
            code: "330111",
            name: "\u5BCC\u9633\u533A"
          },
          {
            code: "330112",
            name: "\u4E34\u5B89\u533A"
          },
          {
            code: "330113",
            name: "\u4E34\u5E73\u533A"
          },
          {
            code: "330114",
            name: "\u94B1\u5858\u533A"
          },
          {
            code: "330122",
            name: "\u6850\u5E90\u53BF"
          },
          {
            code: "330127",
            name: "\u6DF3\u5B89\u53BF"
          },
          {
            code: "330182",
            name: "\u5EFA\u5FB7\u5E02"
          }
        ]
      },
      {
        code: "3302",
        name: "\u5B81\u6CE2\u5E02",
        children: [
          {
            code: "330203",
            name: "\u6D77\u66D9\u533A"
          },
          {
            code: "330205",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "330206",
            name: "\u5317\u4ED1\u533A"
          },
          {
            code: "330211",
            name: "\u9547\u6D77\u533A"
          },
          {
            code: "330212",
            name: "\u911E\u5DDE\u533A"
          },
          {
            code: "330213",
            name: "\u5949\u5316\u533A"
          },
          {
            code: "330225",
            name: "\u8C61\u5C71\u53BF"
          },
          {
            code: "330226",
            name: "\u5B81\u6D77\u53BF"
          },
          {
            code: "330281",
            name: "\u4F59\u59DA\u5E02"
          },
          {
            code: "330282",
            name: "\u6148\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3303",
        name: "\u6E29\u5DDE\u5E02",
        children: [
          {
            code: "330302",
            name: "\u9E7F\u57CE\u533A"
          },
          {
            code: "330303",
            name: "\u9F99\u6E7E\u533A"
          },
          {
            code: "330304",
            name: "\u74EF\u6D77\u533A"
          },
          {
            code: "330305",
            name: "\u6D1E\u5934\u533A"
          },
          {
            code: "330324",
            name: "\u6C38\u5609\u53BF"
          },
          {
            code: "330326",
            name: "\u5E73\u9633\u53BF"
          },
          {
            code: "330327",
            name: "\u82CD\u5357\u53BF"
          },
          {
            code: "330328",
            name: "\u6587\u6210\u53BF"
          },
          {
            code: "330329",
            name: "\u6CF0\u987A\u53BF"
          },
          {
            code: "330371",
            name: "\u6E29\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "330381",
            name: "\u745E\u5B89\u5E02"
          },
          {
            code: "330382",
            name: "\u4E50\u6E05\u5E02"
          },
          {
            code: "330383",
            name: "\u9F99\u6E2F\u5E02"
          }
        ]
      },
      {
        code: "3304",
        name: "\u5609\u5174\u5E02",
        children: [
          {
            code: "330402",
            name: "\u5357\u6E56\u533A"
          },
          {
            code: "330411",
            name: "\u79C0\u6D32\u533A"
          },
          {
            code: "330421",
            name: "\u5609\u5584\u53BF"
          },
          {
            code: "330424",
            name: "\u6D77\u76D0\u53BF"
          },
          {
            code: "330481",
            name: "\u6D77\u5B81\u5E02"
          },
          {
            code: "330482",
            name: "\u5E73\u6E56\u5E02"
          },
          {
            code: "330483",
            name: "\u6850\u4E61\u5E02"
          }
        ]
      },
      {
        code: "3305",
        name: "\u6E56\u5DDE\u5E02",
        children: [
          {
            code: "330502",
            name: "\u5434\u5174\u533A"
          },
          {
            code: "330503",
            name: "\u5357\u6D54\u533A"
          },
          {
            code: "330521",
            name: "\u5FB7\u6E05\u53BF"
          },
          {
            code: "330522",
            name: "\u957F\u5174\u53BF"
          },
          {
            code: "330523",
            name: "\u5B89\u5409\u53BF"
          }
        ]
      },
      {
        code: "3306",
        name: "\u7ECD\u5174\u5E02",
        children: [
          {
            code: "330602",
            name: "\u8D8A\u57CE\u533A"
          },
          {
            code: "330603",
            name: "\u67EF\u6865\u533A"
          },
          {
            code: "330604",
            name: "\u4E0A\u865E\u533A"
          },
          {
            code: "330624",
            name: "\u65B0\u660C\u53BF"
          },
          {
            code: "330681",
            name: "\u8BF8\u66A8\u5E02"
          },
          {
            code: "330683",
            name: "\u5D4A\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3307",
        name: "\u91D1\u534E\u5E02",
        children: [
          {
            code: "330702",
            name: "\u5A7A\u57CE\u533A"
          },
          {
            code: "330703",
            name: "\u91D1\u4E1C\u533A"
          },
          {
            code: "330723",
            name: "\u6B66\u4E49\u53BF"
          },
          {
            code: "330726",
            name: "\u6D66\u6C5F\u53BF"
          },
          {
            code: "330727",
            name: "\u78D0\u5B89\u53BF"
          },
          {
            code: "330781",
            name: "\u5170\u6EAA\u5E02"
          },
          {
            code: "330782",
            name: "\u4E49\u4E4C\u5E02"
          },
          {
            code: "330783",
            name: "\u4E1C\u9633\u5E02"
          },
          {
            code: "330784",
            name: "\u6C38\u5EB7\u5E02"
          }
        ]
      },
      {
        code: "3308",
        name: "\u8862\u5DDE\u5E02",
        children: [
          {
            code: "330802",
            name: "\u67EF\u57CE\u533A"
          },
          {
            code: "330803",
            name: "\u8862\u6C5F\u533A"
          },
          {
            code: "330822",
            name: "\u5E38\u5C71\u53BF"
          },
          {
            code: "330824",
            name: "\u5F00\u5316\u53BF"
          },
          {
            code: "330825",
            name: "\u9F99\u6E38\u53BF"
          },
          {
            code: "330881",
            name: "\u6C5F\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3309",
        name: "\u821F\u5C71\u5E02",
        children: [
          {
            code: "330902",
            name: "\u5B9A\u6D77\u533A"
          },
          {
            code: "330903",
            name: "\u666E\u9640\u533A"
          },
          {
            code: "330921",
            name: "\u5CB1\u5C71\u53BF"
          },
          {
            code: "330922",
            name: "\u5D4A\u6CD7\u53BF"
          }
        ]
      },
      {
        code: "3310",
        name: "\u53F0\u5DDE\u5E02",
        children: [
          {
            code: "331002",
            name: "\u6912\u6C5F\u533A"
          },
          {
            code: "331003",
            name: "\u9EC4\u5CA9\u533A"
          },
          {
            code: "331004",
            name: "\u8DEF\u6865\u533A"
          },
          {
            code: "331022",
            name: "\u4E09\u95E8\u53BF"
          },
          {
            code: "331023",
            name: "\u5929\u53F0\u53BF"
          },
          {
            code: "331024",
            name: "\u4ED9\u5C45\u53BF"
          },
          {
            code: "331081",
            name: "\u6E29\u5CAD\u5E02"
          },
          {
            code: "331082",
            name: "\u4E34\u6D77\u5E02"
          },
          {
            code: "331083",
            name: "\u7389\u73AF\u5E02"
          }
        ]
      },
      {
        code: "3311",
        name: "\u4E3D\u6C34\u5E02",
        children: [
          {
            code: "331102",
            name: "\u83B2\u90FD\u533A"
          },
          {
            code: "331121",
            name: "\u9752\u7530\u53BF"
          },
          {
            code: "331122",
            name: "\u7F19\u4E91\u53BF"
          },
          {
            code: "331123",
            name: "\u9042\u660C\u53BF"
          },
          {
            code: "331124",
            name: "\u677E\u9633\u53BF"
          },
          {
            code: "331125",
            name: "\u4E91\u548C\u53BF"
          },
          {
            code: "331126",
            name: "\u5E86\u5143\u53BF"
          },
          {
            code: "331127",
            name: "\u666F\u5B81\u7572\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "331181",
            name: "\u9F99\u6CC9\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "\u5B89\u5FBD\u7701",
    children: [
      {
        code: "3401",
        name: "\u5408\u80A5\u5E02",
        children: [
          {
            code: "340102",
            name: "\u7476\u6D77\u533A"
          },
          {
            code: "340103",
            name: "\u5E90\u9633\u533A"
          },
          {
            code: "340104",
            name: "\u8700\u5C71\u533A"
          },
          {
            code: "340111",
            name: "\u5305\u6CB3\u533A"
          },
          {
            code: "340121",
            name: "\u957F\u4E30\u53BF"
          },
          {
            code: "340122",
            name: "\u80A5\u4E1C\u53BF"
          },
          {
            code: "340123",
            name: "\u80A5\u897F\u53BF"
          },
          {
            code: "340124",
            name: "\u5E90\u6C5F\u53BF"
          },
          {
            code: "340171",
            name: "\u5408\u80A5\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340172",
            name: "\u5408\u80A5\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340173",
            name: "\u5408\u80A5\u65B0\u7AD9\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "340181",
            name: "\u5DE2\u6E56\u5E02"
          }
        ]
      },
      {
        code: "3402",
        name: "\u829C\u6E56\u5E02",
        children: [
          {
            code: "340202",
            name: "\u955C\u6E56\u533A"
          },
          {
            code: "340207",
            name: "\u9E20\u6C5F\u533A"
          },
          {
            code: "340209",
            name: "\u5F0B\u6C5F\u533A"
          },
          {
            code: "340210",
            name: "\u6E7E\u6C9A\u533A"
          },
          {
            code: "340212",
            name: "\u7E41\u660C\u533A"
          },
          {
            code: "340223",
            name: "\u5357\u9675\u53BF"
          },
          {
            code: "340271",
            name: "\u829C\u6E56\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340272",
            name: "\u5B89\u5FBD\u829C\u6E56\u4E09\u5C71\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340281",
            name: "\u65E0\u4E3A\u5E02"
          }
        ]
      },
      {
        code: "3403",
        name: "\u868C\u57E0\u5E02",
        children: [
          {
            code: "340302",
            name: "\u9F99\u5B50\u6E56\u533A"
          },
          {
            code: "340303",
            name: "\u868C\u5C71\u533A"
          },
          {
            code: "340304",
            name: "\u79B9\u4F1A\u533A"
          },
          {
            code: "340311",
            name: "\u6DEE\u4E0A\u533A"
          },
          {
            code: "340321",
            name: "\u6000\u8FDC\u53BF"
          },
          {
            code: "340322",
            name: "\u4E94\u6CB3\u53BF"
          },
          {
            code: "340323",
            name: "\u56FA\u9547\u53BF"
          },
          {
            code: "340371",
            name: "\u868C\u57E0\u5E02\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "340372",
            name: "\u868C\u57E0\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3404",
        name: "\u6DEE\u5357\u5E02",
        children: [
          {
            code: "340402",
            name: "\u5927\u901A\u533A"
          },
          {
            code: "340403",
            name: "\u7530\u5BB6\u5EB5\u533A"
          },
          {
            code: "340404",
            name: "\u8C22\u5BB6\u96C6\u533A"
          },
          {
            code: "340405",
            name: "\u516B\u516C\u5C71\u533A"
          },
          {
            code: "340406",
            name: "\u6F58\u96C6\u533A"
          },
          {
            code: "340421",
            name: "\u51E4\u53F0\u53BF"
          },
          {
            code: "340422",
            name: "\u5BFF\u53BF"
          }
        ]
      },
      {
        code: "3405",
        name: "\u9A6C\u978D\u5C71\u5E02",
        children: [
          {
            code: "340503",
            name: "\u82B1\u5C71\u533A"
          },
          {
            code: "340504",
            name: "\u96E8\u5C71\u533A"
          },
          {
            code: "340506",
            name: "\u535A\u671B\u533A"
          },
          {
            code: "340521",
            name: "\u5F53\u6D82\u53BF"
          },
          {
            code: "340522",
            name: "\u542B\u5C71\u53BF"
          },
          {
            code: "340523",
            name: "\u548C\u53BF"
          }
        ]
      },
      {
        code: "3406",
        name: "\u6DEE\u5317\u5E02",
        children: [
          {
            code: "340602",
            name: "\u675C\u96C6\u533A"
          },
          {
            code: "340603",
            name: "\u76F8\u5C71\u533A"
          },
          {
            code: "340604",
            name: "\u70C8\u5C71\u533A"
          },
          {
            code: "340621",
            name: "\u6FC9\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3407",
        name: "\u94DC\u9675\u5E02",
        children: [
          {
            code: "340705",
            name: "\u94DC\u5B98\u533A"
          },
          {
            code: "340706",
            name: "\u4E49\u5B89\u533A"
          },
          {
            code: "340711",
            name: "\u90CA\u533A"
          },
          {
            code: "340722",
            name: "\u679E\u9633\u53BF"
          }
        ]
      },
      {
        code: "3408",
        name: "\u5B89\u5E86\u5E02",
        children: [
          {
            code: "340802",
            name: "\u8FCE\u6C5F\u533A"
          },
          {
            code: "340803",
            name: "\u5927\u89C2\u533A"
          },
          {
            code: "340811",
            name: "\u5B9C\u79C0\u533A"
          },
          {
            code: "340822",
            name: "\u6000\u5B81\u53BF"
          },
          {
            code: "340825",
            name: "\u592A\u6E56\u53BF"
          },
          {
            code: "340826",
            name: "\u5BBF\u677E\u53BF"
          },
          {
            code: "340827",
            name: "\u671B\u6C5F\u53BF"
          },
          {
            code: "340828",
            name: "\u5CB3\u897F\u53BF"
          },
          {
            code: "340871",
            name: "\u5B89\u5FBD\u5B89\u5E86\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "340881",
            name: "\u6850\u57CE\u5E02"
          },
          {
            code: "340882",
            name: "\u6F5C\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3410",
        name: "\u9EC4\u5C71\u5E02",
        children: [
          {
            code: "341002",
            name: "\u5C6F\u6EAA\u533A"
          },
          {
            code: "341003",
            name: "\u9EC4\u5C71\u533A"
          },
          {
            code: "341004",
            name: "\u5FBD\u5DDE\u533A"
          },
          {
            code: "341021",
            name: "\u6B59\u53BF"
          },
          {
            code: "341022",
            name: "\u4F11\u5B81\u53BF"
          },
          {
            code: "341023",
            name: "\u9EDF\u53BF"
          },
          {
            code: "341024",
            name: "\u7941\u95E8\u53BF"
          }
        ]
      },
      {
        code: "3411",
        name: "\u6EC1\u5DDE\u5E02",
        children: [
          {
            code: "341102",
            name: "\u7405\u740A\u533A"
          },
          {
            code: "341103",
            name: "\u5357\u8C2F\u533A"
          },
          {
            code: "341122",
            name: "\u6765\u5B89\u53BF"
          },
          {
            code: "341124",
            name: "\u5168\u6912\u53BF"
          },
          {
            code: "341125",
            name: "\u5B9A\u8FDC\u53BF"
          },
          {
            code: "341126",
            name: "\u51E4\u9633\u53BF"
          },
          {
            code: "341171",
            name: "\u4E2D\u65B0\u82CF\u6EC1\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "341172",
            name: "\u6EC1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341181",
            name: "\u5929\u957F\u5E02"
          },
          {
            code: "341182",
            name: "\u660E\u5149\u5E02"
          }
        ]
      },
      {
        code: "3412",
        name: "\u961C\u9633\u5E02",
        children: [
          {
            code: "341202",
            name: "\u988D\u5DDE\u533A"
          },
          {
            code: "341203",
            name: "\u988D\u4E1C\u533A"
          },
          {
            code: "341204",
            name: "\u988D\u6CC9\u533A"
          },
          {
            code: "341221",
            name: "\u4E34\u6CC9\u53BF"
          },
          {
            code: "341222",
            name: "\u592A\u548C\u53BF"
          },
          {
            code: "341225",
            name: "\u961C\u5357\u53BF"
          },
          {
            code: "341226",
            name: "\u988D\u4E0A\u53BF"
          },
          {
            code: "341271",
            name: "\u961C\u9633\u5408\u80A5\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341272",
            name: "\u961C\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "341282",
            name: "\u754C\u9996\u5E02"
          }
        ]
      },
      {
        code: "3413",
        name: "\u5BBF\u5DDE\u5E02",
        children: [
          {
            code: "341302",
            name: "\u57C7\u6865\u533A"
          },
          {
            code: "341321",
            name: "\u7800\u5C71\u53BF"
          },
          {
            code: "341322",
            name: "\u8427\u53BF"
          },
          {
            code: "341323",
            name: "\u7075\u74A7\u53BF"
          },
          {
            code: "341324",
            name: "\u6CD7\u53BF"
          },
          {
            code: "341371",
            name: "\u5BBF\u5DDE\u9A6C\u978D\u5C71\u73B0\u4EE3\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "341372",
            name: "\u5BBF\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3415",
        name: "\u516D\u5B89\u5E02",
        children: [
          {
            code: "341502",
            name: "\u91D1\u5B89\u533A"
          },
          {
            code: "341503",
            name: "\u88D5\u5B89\u533A"
          },
          {
            code: "341504",
            name: "\u53F6\u96C6\u533A"
          },
          {
            code: "341522",
            name: "\u970D\u90B1\u53BF"
          },
          {
            code: "341523",
            name: "\u8212\u57CE\u53BF"
          },
          {
            code: "341524",
            name: "\u91D1\u5BE8\u53BF"
          },
          {
            code: "341525",
            name: "\u970D\u5C71\u53BF"
          }
        ]
      },
      {
        code: "3416",
        name: "\u4EB3\u5DDE\u5E02",
        children: [
          {
            code: "341602",
            name: "\u8C2F\u57CE\u533A"
          },
          {
            code: "341621",
            name: "\u6DA1\u9633\u53BF"
          },
          {
            code: "341622",
            name: "\u8499\u57CE\u53BF"
          },
          {
            code: "341623",
            name: "\u5229\u8F9B\u53BF"
          }
        ]
      },
      {
        code: "3417",
        name: "\u6C60\u5DDE\u5E02",
        children: [
          {
            code: "341702",
            name: "\u8D35\u6C60\u533A"
          },
          {
            code: "341721",
            name: "\u4E1C\u81F3\u53BF"
          },
          {
            code: "341722",
            name: "\u77F3\u53F0\u53BF"
          },
          {
            code: "341723",
            name: "\u9752\u9633\u53BF"
          }
        ]
      },
      {
        code: "3418",
        name: "\u5BA3\u57CE\u5E02",
        children: [
          {
            code: "341802",
            name: "\u5BA3\u5DDE\u533A"
          },
          {
            code: "341821",
            name: "\u90CE\u6EAA\u53BF"
          },
          {
            code: "341823",
            name: "\u6CFE\u53BF"
          },
          {
            code: "341824",
            name: "\u7EE9\u6EAA\u53BF"
          },
          {
            code: "341825",
            name: "\u65CC\u5FB7\u53BF"
          },
          {
            code: "341871",
            name: "\u5BA3\u57CE\u5E02\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "341881",
            name: "\u5B81\u56FD\u5E02"
          },
          {
            code: "341882",
            name: "\u5E7F\u5FB7\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "\u798F\u5EFA\u7701",
    children: [
      {
        code: "3501",
        name: "\u798F\u5DDE\u5E02",
        children: [
          {
            code: "350102",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "350103",
            name: "\u53F0\u6C5F\u533A"
          },
          {
            code: "350104",
            name: "\u4ED3\u5C71\u533A"
          },
          {
            code: "350105",
            name: "\u9A6C\u5C3E\u533A"
          },
          {
            code: "350111",
            name: "\u664B\u5B89\u533A"
          },
          {
            code: "350112",
            name: "\u957F\u4E50\u533A"
          },
          {
            code: "350121",
            name: "\u95FD\u4FAF\u53BF"
          },
          {
            code: "350122",
            name: "\u8FDE\u6C5F\u53BF"
          },
          {
            code: "350123",
            name: "\u7F57\u6E90\u53BF"
          },
          {
            code: "350124",
            name: "\u95FD\u6E05\u53BF"
          },
          {
            code: "350125",
            name: "\u6C38\u6CF0\u53BF"
          },
          {
            code: "350128",
            name: "\u5E73\u6F6D\u53BF"
          },
          {
            code: "350181",
            name: "\u798F\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3502",
        name: "\u53A6\u95E8\u5E02",
        children: [
          {
            code: "350203",
            name: "\u601D\u660E\u533A"
          },
          {
            code: "350205",
            name: "\u6D77\u6CA7\u533A"
          },
          {
            code: "350206",
            name: "\u6E56\u91CC\u533A"
          },
          {
            code: "350211",
            name: "\u96C6\u7F8E\u533A"
          },
          {
            code: "350212",
            name: "\u540C\u5B89\u533A"
          },
          {
            code: "350213",
            name: "\u7FD4\u5B89\u533A"
          }
        ]
      },
      {
        code: "3503",
        name: "\u8386\u7530\u5E02",
        children: [
          {
            code: "350302",
            name: "\u57CE\u53A2\u533A"
          },
          {
            code: "350303",
            name: "\u6DB5\u6C5F\u533A"
          },
          {
            code: "350304",
            name: "\u8354\u57CE\u533A"
          },
          {
            code: "350305",
            name: "\u79C0\u5C7F\u533A"
          },
          {
            code: "350322",
            name: "\u4ED9\u6E38\u53BF"
          }
        ]
      },
      {
        code: "3504",
        name: "\u4E09\u660E\u5E02",
        children: [
          {
            code: "350404",
            name: "\u4E09\u5143\u533A"
          },
          {
            code: "350405",
            name: "\u6C99\u53BF\u533A"
          },
          {
            code: "350421",
            name: "\u660E\u6EAA\u53BF"
          },
          {
            code: "350423",
            name: "\u6E05\u6D41\u53BF"
          },
          {
            code: "350424",
            name: "\u5B81\u5316\u53BF"
          },
          {
            code: "350425",
            name: "\u5927\u7530\u53BF"
          },
          {
            code: "350426",
            name: "\u5C24\u6EAA\u53BF"
          },
          {
            code: "350428",
            name: "\u5C06\u4E50\u53BF"
          },
          {
            code: "350429",
            name: "\u6CF0\u5B81\u53BF"
          },
          {
            code: "350430",
            name: "\u5EFA\u5B81\u53BF"
          },
          {
            code: "350481",
            name: "\u6C38\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3505",
        name: "\u6CC9\u5DDE\u5E02",
        children: [
          {
            code: "350502",
            name: "\u9CA4\u57CE\u533A"
          },
          {
            code: "350503",
            name: "\u4E30\u6CFD\u533A"
          },
          {
            code: "350504",
            name: "\u6D1B\u6C5F\u533A"
          },
          {
            code: "350505",
            name: "\u6CC9\u6E2F\u533A"
          },
          {
            code: "350521",
            name: "\u60E0\u5B89\u53BF"
          },
          {
            code: "350524",
            name: "\u5B89\u6EAA\u53BF"
          },
          {
            code: "350525",
            name: "\u6C38\u6625\u53BF"
          },
          {
            code: "350526",
            name: "\u5FB7\u5316\u53BF"
          },
          {
            code: "350527",
            name: "\u91D1\u95E8\u53BF"
          },
          {
            code: "350581",
            name: "\u77F3\u72EE\u5E02"
          },
          {
            code: "350582",
            name: "\u664B\u6C5F\u5E02"
          },
          {
            code: "350583",
            name: "\u5357\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3506",
        name: "\u6F33\u5DDE\u5E02",
        children: [
          {
            code: "350602",
            name: "\u8297\u57CE\u533A"
          },
          {
            code: "350603",
            name: "\u9F99\u6587\u533A"
          },
          {
            code: "350604",
            name: "\u9F99\u6D77\u533A"
          },
          {
            code: "350605",
            name: "\u957F\u6CF0\u533A"
          },
          {
            code: "350622",
            name: "\u4E91\u9704\u53BF"
          },
          {
            code: "350623",
            name: "\u6F33\u6D66\u53BF"
          },
          {
            code: "350624",
            name: "\u8BCF\u5B89\u53BF"
          },
          {
            code: "350626",
            name: "\u4E1C\u5C71\u53BF"
          },
          {
            code: "350627",
            name: "\u5357\u9756\u53BF"
          },
          {
            code: "350628",
            name: "\u5E73\u548C\u53BF"
          },
          {
            code: "350629",
            name: "\u534E\u5B89\u53BF"
          }
        ]
      },
      {
        code: "3507",
        name: "\u5357\u5E73\u5E02",
        children: [
          {
            code: "350702",
            name: "\u5EF6\u5E73\u533A"
          },
          {
            code: "350703",
            name: "\u5EFA\u9633\u533A"
          },
          {
            code: "350721",
            name: "\u987A\u660C\u53BF"
          },
          {
            code: "350722",
            name: "\u6D66\u57CE\u53BF"
          },
          {
            code: "350723",
            name: "\u5149\u6CFD\u53BF"
          },
          {
            code: "350724",
            name: "\u677E\u6EAA\u53BF"
          },
          {
            code: "350725",
            name: "\u653F\u548C\u53BF"
          },
          {
            code: "350781",
            name: "\u90B5\u6B66\u5E02"
          },
          {
            code: "350782",
            name: "\u6B66\u5937\u5C71\u5E02"
          },
          {
            code: "350783",
            name: "\u5EFA\u74EF\u5E02"
          }
        ]
      },
      {
        code: "3508",
        name: "\u9F99\u5CA9\u5E02",
        children: [
          {
            code: "350802",
            name: "\u65B0\u7F57\u533A"
          },
          {
            code: "350803",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "350821",
            name: "\u957F\u6C40\u53BF"
          },
          {
            code: "350823",
            name: "\u4E0A\u676D\u53BF"
          },
          {
            code: "350824",
            name: "\u6B66\u5E73\u53BF"
          },
          {
            code: "350825",
            name: "\u8FDE\u57CE\u53BF"
          },
          {
            code: "350881",
            name: "\u6F33\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3509",
        name: "\u5B81\u5FB7\u5E02",
        children: [
          {
            code: "350902",
            name: "\u8549\u57CE\u533A"
          },
          {
            code: "350921",
            name: "\u971E\u6D66\u53BF"
          },
          {
            code: "350922",
            name: "\u53E4\u7530\u53BF"
          },
          {
            code: "350923",
            name: "\u5C4F\u5357\u53BF"
          },
          {
            code: "350924",
            name: "\u5BFF\u5B81\u53BF"
          },
          {
            code: "350925",
            name: "\u5468\u5B81\u53BF"
          },
          {
            code: "350926",
            name: "\u67D8\u8363\u53BF"
          },
          {
            code: "350981",
            name: "\u798F\u5B89\u5E02"
          },
          {
            code: "350982",
            name: "\u798F\u9F0E\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "\u6C5F\u897F\u7701",
    children: [
      {
        code: "3601",
        name: "\u5357\u660C\u5E02",
        children: [
          {
            code: "360102",
            name: "\u4E1C\u6E56\u533A"
          },
          {
            code: "360103",
            name: "\u897F\u6E56\u533A"
          },
          {
            code: "360104",
            name: "\u9752\u4E91\u8C31\u533A"
          },
          {
            code: "360111",
            name: "\u9752\u5C71\u6E56\u533A"
          },
          {
            code: "360112",
            name: "\u65B0\u5EFA\u533A"
          },
          {
            code: "360113",
            name: "\u7EA2\u8C37\u6EE9\u533A"
          },
          {
            code: "360121",
            name: "\u5357\u660C\u53BF"
          },
          {
            code: "360123",
            name: "\u5B89\u4E49\u53BF"
          },
          {
            code: "360124",
            name: "\u8FDB\u8D24\u53BF"
          }
        ]
      },
      {
        code: "3602",
        name: "\u666F\u5FB7\u9547\u5E02",
        children: [
          {
            code: "360202",
            name: "\u660C\u6C5F\u533A"
          },
          {
            code: "360203",
            name: "\u73E0\u5C71\u533A"
          },
          {
            code: "360222",
            name: "\u6D6E\u6881\u53BF"
          },
          {
            code: "360281",
            name: "\u4E50\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3603",
        name: "\u840D\u4E61\u5E02",
        children: [
          {
            code: "360302",
            name: "\u5B89\u6E90\u533A"
          },
          {
            code: "360313",
            name: "\u6E58\u4E1C\u533A"
          },
          {
            code: "360321",
            name: "\u83B2\u82B1\u53BF"
          },
          {
            code: "360322",
            name: "\u4E0A\u6817\u53BF"
          },
          {
            code: "360323",
            name: "\u82A6\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "3604",
        name: "\u4E5D\u6C5F\u5E02",
        children: [
          {
            code: "360402",
            name: "\u6FC2\u6EAA\u533A"
          },
          {
            code: "360403",
            name: "\u6D54\u9633\u533A"
          },
          {
            code: "360404",
            name: "\u67F4\u6851\u533A"
          },
          {
            code: "360423",
            name: "\u6B66\u5B81\u53BF"
          },
          {
            code: "360424",
            name: "\u4FEE\u6C34\u53BF"
          },
          {
            code: "360425",
            name: "\u6C38\u4FEE\u53BF"
          },
          {
            code: "360426",
            name: "\u5FB7\u5B89\u53BF"
          },
          {
            code: "360428",
            name: "\u90FD\u660C\u53BF"
          },
          {
            code: "360429",
            name: "\u6E56\u53E3\u53BF"
          },
          {
            code: "360430",
            name: "\u5F6D\u6CFD\u53BF"
          },
          {
            code: "360481",
            name: "\u745E\u660C\u5E02"
          },
          {
            code: "360482",
            name: "\u5171\u9752\u57CE\u5E02"
          },
          {
            code: "360483",
            name: "\u5E90\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3605",
        name: "\u65B0\u4F59\u5E02",
        children: [
          {
            code: "360502",
            name: "\u6E1D\u6C34\u533A"
          },
          {
            code: "360521",
            name: "\u5206\u5B9C\u53BF"
          }
        ]
      },
      {
        code: "3606",
        name: "\u9E70\u6F6D\u5E02",
        children: [
          {
            code: "360602",
            name: "\u6708\u6E56\u533A"
          },
          {
            code: "360603",
            name: "\u4F59\u6C5F\u533A"
          },
          {
            code: "360681",
            name: "\u8D35\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "3607",
        name: "\u8D63\u5DDE\u5E02",
        children: [
          {
            code: "360702",
            name: "\u7AE0\u8D21\u533A"
          },
          {
            code: "360703",
            name: "\u5357\u5EB7\u533A"
          },
          {
            code: "360704",
            name: "\u8D63\u53BF\u533A"
          },
          {
            code: "360722",
            name: "\u4FE1\u4E30\u53BF"
          },
          {
            code: "360723",
            name: "\u5927\u4F59\u53BF"
          },
          {
            code: "360724",
            name: "\u4E0A\u72B9\u53BF"
          },
          {
            code: "360725",
            name: "\u5D07\u4E49\u53BF"
          },
          {
            code: "360726",
            name: "\u5B89\u8FDC\u53BF"
          },
          {
            code: "360728",
            name: "\u5B9A\u5357\u53BF"
          },
          {
            code: "360729",
            name: "\u5168\u5357\u53BF"
          },
          {
            code: "360730",
            name: "\u5B81\u90FD\u53BF"
          },
          {
            code: "360731",
            name: "\u4E8E\u90FD\u53BF"
          },
          {
            code: "360732",
            name: "\u5174\u56FD\u53BF"
          },
          {
            code: "360733",
            name: "\u4F1A\u660C\u53BF"
          },
          {
            code: "360734",
            name: "\u5BFB\u4E4C\u53BF"
          },
          {
            code: "360735",
            name: "\u77F3\u57CE\u53BF"
          },
          {
            code: "360781",
            name: "\u745E\u91D1\u5E02"
          },
          {
            code: "360783",
            name: "\u9F99\u5357\u5E02"
          }
        ]
      },
      {
        code: "3608",
        name: "\u5409\u5B89\u5E02",
        children: [
          {
            code: "360802",
            name: "\u5409\u5DDE\u533A"
          },
          {
            code: "360803",
            name: "\u9752\u539F\u533A"
          },
          {
            code: "360821",
            name: "\u5409\u5B89\u53BF"
          },
          {
            code: "360822",
            name: "\u5409\u6C34\u53BF"
          },
          {
            code: "360823",
            name: "\u5CE1\u6C5F\u53BF"
          },
          {
            code: "360824",
            name: "\u65B0\u5E72\u53BF"
          },
          {
            code: "360825",
            name: "\u6C38\u4E30\u53BF"
          },
          {
            code: "360826",
            name: "\u6CF0\u548C\u53BF"
          },
          {
            code: "360827",
            name: "\u9042\u5DDD\u53BF"
          },
          {
            code: "360828",
            name: "\u4E07\u5B89\u53BF"
          },
          {
            code: "360829",
            name: "\u5B89\u798F\u53BF"
          },
          {
            code: "360830",
            name: "\u6C38\u65B0\u53BF"
          },
          {
            code: "360881",
            name: "\u4E95\u5188\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3609",
        name: "\u5B9C\u6625\u5E02",
        children: [
          {
            code: "360902",
            name: "\u8881\u5DDE\u533A"
          },
          {
            code: "360921",
            name: "\u5949\u65B0\u53BF"
          },
          {
            code: "360922",
            name: "\u4E07\u8F7D\u53BF"
          },
          {
            code: "360923",
            name: "\u4E0A\u9AD8\u53BF"
          },
          {
            code: "360924",
            name: "\u5B9C\u4E30\u53BF"
          },
          {
            code: "360925",
            name: "\u9756\u5B89\u53BF"
          },
          {
            code: "360926",
            name: "\u94DC\u9F13\u53BF"
          },
          {
            code: "360981",
            name: "\u4E30\u57CE\u5E02"
          },
          {
            code: "360982",
            name: "\u6A1F\u6811\u5E02"
          },
          {
            code: "360983",
            name: "\u9AD8\u5B89\u5E02"
          }
        ]
      },
      {
        code: "3610",
        name: "\u629A\u5DDE\u5E02",
        children: [
          {
            code: "361002",
            name: "\u4E34\u5DDD\u533A"
          },
          {
            code: "361003",
            name: "\u4E1C\u4E61\u533A"
          },
          {
            code: "361021",
            name: "\u5357\u57CE\u53BF"
          },
          {
            code: "361022",
            name: "\u9ECE\u5DDD\u53BF"
          },
          {
            code: "361023",
            name: "\u5357\u4E30\u53BF"
          },
          {
            code: "361024",
            name: "\u5D07\u4EC1\u53BF"
          },
          {
            code: "361025",
            name: "\u4E50\u5B89\u53BF"
          },
          {
            code: "361026",
            name: "\u5B9C\u9EC4\u53BF"
          },
          {
            code: "361027",
            name: "\u91D1\u6EAA\u53BF"
          },
          {
            code: "361028",
            name: "\u8D44\u6EAA\u53BF"
          },
          {
            code: "361030",
            name: "\u5E7F\u660C\u53BF"
          }
        ]
      },
      {
        code: "3611",
        name: "\u4E0A\u9976\u5E02",
        children: [
          {
            code: "361102",
            name: "\u4FE1\u5DDE\u533A"
          },
          {
            code: "361103",
            name: "\u5E7F\u4E30\u533A"
          },
          {
            code: "361104",
            name: "\u5E7F\u4FE1\u533A"
          },
          {
            code: "361123",
            name: "\u7389\u5C71\u53BF"
          },
          {
            code: "361124",
            name: "\u94C5\u5C71\u53BF"
          },
          {
            code: "361125",
            name: "\u6A2A\u5CF0\u53BF"
          },
          {
            code: "361126",
            name: "\u5F0B\u9633\u53BF"
          },
          {
            code: "361127",
            name: "\u4F59\u5E72\u53BF"
          },
          {
            code: "361128",
            name: "\u9131\u9633\u53BF"
          },
          {
            code: "361129",
            name: "\u4E07\u5E74\u53BF"
          },
          {
            code: "361130",
            name: "\u5A7A\u6E90\u53BF"
          },
          {
            code: "361181",
            name: "\u5FB7\u5174\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "\u5C71\u4E1C\u7701",
    children: [
      {
        code: "3701",
        name: "\u6D4E\u5357\u5E02",
        children: [
          {
            code: "370102",
            name: "\u5386\u4E0B\u533A"
          },
          {
            code: "370103",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370104",
            name: "\u69D0\u836B\u533A"
          },
          {
            code: "370105",
            name: "\u5929\u6865\u533A"
          },
          {
            code: "370112",
            name: "\u5386\u57CE\u533A"
          },
          {
            code: "370113",
            name: "\u957F\u6E05\u533A"
          },
          {
            code: "370114",
            name: "\u7AE0\u4E18\u533A"
          },
          {
            code: "370115",
            name: "\u6D4E\u9633\u533A"
          },
          {
            code: "370116",
            name: "\u83B1\u829C\u533A"
          },
          {
            code: "370117",
            name: "\u94A2\u57CE\u533A"
          },
          {
            code: "370124",
            name: "\u5E73\u9634\u53BF"
          },
          {
            code: "370126",
            name: "\u5546\u6CB3\u53BF"
          },
          {
            code: "370171",
            name: "\u6D4E\u5357\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3702",
        name: "\u9752\u5C9B\u5E02",
        children: [
          {
            code: "370202",
            name: "\u5E02\u5357\u533A"
          },
          {
            code: "370203",
            name: "\u5E02\u5317\u533A"
          },
          {
            code: "370211",
            name: "\u9EC4\u5C9B\u533A"
          },
          {
            code: "370212",
            name: "\u5D02\u5C71\u533A"
          },
          {
            code: "370213",
            name: "\u674E\u6CA7\u533A"
          },
          {
            code: "370214",
            name: "\u57CE\u9633\u533A"
          },
          {
            code: "370215",
            name: "\u5373\u58A8\u533A"
          },
          {
            code: "370271",
            name: "\u9752\u5C9B\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370281",
            name: "\u80F6\u5DDE\u5E02"
          },
          {
            code: "370283",
            name: "\u5E73\u5EA6\u5E02"
          },
          {
            code: "370285",
            name: "\u83B1\u897F\u5E02"
          }
        ]
      },
      {
        code: "3703",
        name: "\u6DC4\u535A\u5E02",
        children: [
          {
            code: "370302",
            name: "\u6DC4\u5DDD\u533A"
          },
          {
            code: "370303",
            name: "\u5F20\u5E97\u533A"
          },
          {
            code: "370304",
            name: "\u535A\u5C71\u533A"
          },
          {
            code: "370305",
            name: "\u4E34\u6DC4\u533A"
          },
          {
            code: "370306",
            name: "\u5468\u6751\u533A"
          },
          {
            code: "370321",
            name: "\u6853\u53F0\u53BF"
          },
          {
            code: "370322",
            name: "\u9AD8\u9752\u53BF"
          },
          {
            code: "370323",
            name: "\u6C82\u6E90\u53BF"
          }
        ]
      },
      {
        code: "3704",
        name: "\u67A3\u5E84\u5E02",
        children: [
          {
            code: "370402",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "370403",
            name: "\u859B\u57CE\u533A"
          },
          {
            code: "370404",
            name: "\u5CC4\u57CE\u533A"
          },
          {
            code: "370405",
            name: "\u53F0\u513F\u5E84\u533A"
          },
          {
            code: "370406",
            name: "\u5C71\u4EAD\u533A"
          },
          {
            code: "370481",
            name: "\u6ED5\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "3705",
        name: "\u4E1C\u8425\u5E02",
        children: [
          {
            code: "370502",
            name: "\u4E1C\u8425\u533A"
          },
          {
            code: "370503",
            name: "\u6CB3\u53E3\u533A"
          },
          {
            code: "370505",
            name: "\u57A6\u5229\u533A"
          },
          {
            code: "370522",
            name: "\u5229\u6D25\u53BF"
          },
          {
            code: "370523",
            name: "\u5E7F\u9976\u53BF"
          },
          {
            code: "370571",
            name: "\u4E1C\u8425\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370572",
            name: "\u4E1C\u8425\u6E2F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3706",
        name: "\u70DF\u53F0\u5E02",
        children: [
          {
            code: "370602",
            name: "\u829D\u7F58\u533A"
          },
          {
            code: "370611",
            name: "\u798F\u5C71\u533A"
          },
          {
            code: "370612",
            name: "\u725F\u5E73\u533A"
          },
          {
            code: "370613",
            name: "\u83B1\u5C71\u533A"
          },
          {
            code: "370614",
            name: "\u84EC\u83B1\u533A"
          },
          {
            code: "370671",
            name: "\u70DF\u53F0\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370672",
            name: "\u70DF\u53F0\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370681",
            name: "\u9F99\u53E3\u5E02"
          },
          {
            code: "370682",
            name: "\u83B1\u9633\u5E02"
          },
          {
            code: "370683",
            name: "\u83B1\u5DDE\u5E02"
          },
          {
            code: "370685",
            name: "\u62DB\u8FDC\u5E02"
          },
          {
            code: "370686",
            name: "\u6816\u971E\u5E02"
          },
          {
            code: "370687",
            name: "\u6D77\u9633\u5E02"
          }
        ]
      },
      {
        code: "3707",
        name: "\u6F4D\u574A\u5E02",
        children: [
          {
            code: "370702",
            name: "\u6F4D\u57CE\u533A"
          },
          {
            code: "370703",
            name: "\u5BD2\u4EAD\u533A"
          },
          {
            code: "370704",
            name: "\u574A\u5B50\u533A"
          },
          {
            code: "370705",
            name: "\u594E\u6587\u533A"
          },
          {
            code: "370724",
            name: "\u4E34\u6710\u53BF"
          },
          {
            code: "370725",
            name: "\u660C\u4E50\u53BF"
          },
          {
            code: "370772",
            name: "\u6F4D\u574A\u6EE8\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "370781",
            name: "\u9752\u5DDE\u5E02"
          },
          {
            code: "370782",
            name: "\u8BF8\u57CE\u5E02"
          },
          {
            code: "370783",
            name: "\u5BFF\u5149\u5E02"
          },
          {
            code: "370784",
            name: "\u5B89\u4E18\u5E02"
          },
          {
            code: "370785",
            name: "\u9AD8\u5BC6\u5E02"
          },
          {
            code: "370786",
            name: "\u660C\u9091\u5E02"
          }
        ]
      },
      {
        code: "3708",
        name: "\u6D4E\u5B81\u5E02",
        children: [
          {
            code: "370811",
            name: "\u4EFB\u57CE\u533A"
          },
          {
            code: "370812",
            name: "\u5156\u5DDE\u533A"
          },
          {
            code: "370826",
            name: "\u5FAE\u5C71\u53BF"
          },
          {
            code: "370827",
            name: "\u9C7C\u53F0\u53BF"
          },
          {
            code: "370828",
            name: "\u91D1\u4E61\u53BF"
          },
          {
            code: "370829",
            name: "\u5609\u7965\u53BF"
          },
          {
            code: "370830",
            name: "\u6C76\u4E0A\u53BF"
          },
          {
            code: "370831",
            name: "\u6CD7\u6C34\u53BF"
          },
          {
            code: "370832",
            name: "\u6881\u5C71\u53BF"
          },
          {
            code: "370871",
            name: "\u6D4E\u5B81\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "370881",
            name: "\u66F2\u961C\u5E02"
          },
          {
            code: "370883",
            name: "\u90B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3709",
        name: "\u6CF0\u5B89\u5E02",
        children: [
          {
            code: "370902",
            name: "\u6CF0\u5C71\u533A"
          },
          {
            code: "370911",
            name: "\u5CB1\u5CB3\u533A"
          },
          {
            code: "370921",
            name: "\u5B81\u9633\u53BF"
          },
          {
            code: "370923",
            name: "\u4E1C\u5E73\u53BF"
          },
          {
            code: "370982",
            name: "\u65B0\u6CF0\u5E02"
          },
          {
            code: "370983",
            name: "\u80A5\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3710",
        name: "\u5A01\u6D77\u5E02",
        children: [
          {
            code: "371002",
            name: "\u73AF\u7FE0\u533A"
          },
          {
            code: "371003",
            name: "\u6587\u767B\u533A"
          },
          {
            code: "371071",
            name: "\u5A01\u6D77\u706B\u70AC\u9AD8\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "371072",
            name: "\u5A01\u6D77\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371073",
            name: "\u5A01\u6D77\u4E34\u6E2F\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371082",
            name: "\u8363\u6210\u5E02"
          },
          {
            code: "371083",
            name: "\u4E73\u5C71\u5E02"
          }
        ]
      },
      {
        code: "3711",
        name: "\u65E5\u7167\u5E02",
        children: [
          {
            code: "371102",
            name: "\u4E1C\u6E2F\u533A"
          },
          {
            code: "371103",
            name: "\u5C9A\u5C71\u533A"
          },
          {
            code: "371121",
            name: "\u4E94\u83B2\u53BF"
          },
          {
            code: "371122",
            name: "\u8392\u53BF"
          },
          {
            code: "371171",
            name: "\u65E5\u7167\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3713",
        name: "\u4E34\u6C82\u5E02",
        children: [
          {
            code: "371302",
            name: "\u5170\u5C71\u533A"
          },
          {
            code: "371311",
            name: "\u7F57\u5E84\u533A"
          },
          {
            code: "371312",
            name: "\u6CB3\u4E1C\u533A"
          },
          {
            code: "371321",
            name: "\u6C82\u5357\u53BF"
          },
          {
            code: "371322",
            name: "\u90EF\u57CE\u53BF"
          },
          {
            code: "371323",
            name: "\u6C82\u6C34\u53BF"
          },
          {
            code: "371324",
            name: "\u5170\u9675\u53BF"
          },
          {
            code: "371325",
            name: "\u8D39\u53BF"
          },
          {
            code: "371326",
            name: "\u5E73\u9091\u53BF"
          },
          {
            code: "371327",
            name: "\u8392\u5357\u53BF"
          },
          {
            code: "371328",
            name: "\u8499\u9634\u53BF"
          },
          {
            code: "371329",
            name: "\u4E34\u6CAD\u53BF"
          },
          {
            code: "371371",
            name: "\u4E34\u6C82\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "3714",
        name: "\u5FB7\u5DDE\u5E02",
        children: [
          {
            code: "371402",
            name: "\u5FB7\u57CE\u533A"
          },
          {
            code: "371403",
            name: "\u9675\u57CE\u533A"
          },
          {
            code: "371422",
            name: "\u5B81\u6D25\u53BF"
          },
          {
            code: "371423",
            name: "\u5E86\u4E91\u53BF"
          },
          {
            code: "371424",
            name: "\u4E34\u9091\u53BF"
          },
          {
            code: "371425",
            name: "\u9F50\u6CB3\u53BF"
          },
          {
            code: "371426",
            name: "\u5E73\u539F\u53BF"
          },
          {
            code: "371427",
            name: "\u590F\u6D25\u53BF"
          },
          {
            code: "371428",
            name: "\u6B66\u57CE\u53BF"
          },
          {
            code: "371471",
            name: "\u5FB7\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371472",
            name: "\u5FB7\u5DDE\u8FD0\u6CB3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "371481",
            name: "\u4E50\u9675\u5E02"
          },
          {
            code: "371482",
            name: "\u79B9\u57CE\u5E02"
          }
        ]
      },
      {
        code: "3715",
        name: "\u804A\u57CE\u5E02",
        children: [
          {
            code: "371502",
            name: "\u4E1C\u660C\u5E9C\u533A"
          },
          {
            code: "371503",
            name: "\u830C\u5E73\u533A"
          },
          {
            code: "371521",
            name: "\u9633\u8C37\u53BF"
          },
          {
            code: "371522",
            name: "\u8398\u53BF"
          },
          {
            code: "371524",
            name: "\u4E1C\u963F\u53BF"
          },
          {
            code: "371525",
            name: "\u51A0\u53BF"
          },
          {
            code: "371526",
            name: "\u9AD8\u5510\u53BF"
          },
          {
            code: "371581",
            name: "\u4E34\u6E05\u5E02"
          }
        ]
      },
      {
        code: "3716",
        name: "\u6EE8\u5DDE\u5E02",
        children: [
          {
            code: "371602",
            name: "\u6EE8\u57CE\u533A"
          },
          {
            code: "371603",
            name: "\u6CBE\u5316\u533A"
          },
          {
            code: "371621",
            name: "\u60E0\u6C11\u53BF"
          },
          {
            code: "371622",
            name: "\u9633\u4FE1\u53BF"
          },
          {
            code: "371623",
            name: "\u65E0\u68E3\u53BF"
          },
          {
            code: "371625",
            name: "\u535A\u5174\u53BF"
          },
          {
            code: "371681",
            name: "\u90B9\u5E73\u5E02"
          }
        ]
      },
      {
        code: "3717",
        name: "\u83CF\u6CFD\u5E02",
        children: [
          {
            code: "371702",
            name: "\u7261\u4E39\u533A"
          },
          {
            code: "371703",
            name: "\u5B9A\u9676\u533A"
          },
          {
            code: "371721",
            name: "\u66F9\u53BF"
          },
          {
            code: "371722",
            name: "\u5355\u53BF"
          },
          {
            code: "371723",
            name: "\u6210\u6B66\u53BF"
          },
          {
            code: "371724",
            name: "\u5DE8\u91CE\u53BF"
          },
          {
            code: "371725",
            name: "\u90D3\u57CE\u53BF"
          },
          {
            code: "371726",
            name: "\u9104\u57CE\u53BF"
          },
          {
            code: "371728",
            name: "\u4E1C\u660E\u53BF"
          },
          {
            code: "371771",
            name: "\u83CF\u6CFD\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "371772",
            name: "\u83CF\u6CFD\u9AD8\u65B0\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "\u6CB3\u5357\u7701",
    children: [
      {
        code: "4101",
        name: "\u90D1\u5DDE\u5E02",
        children: [
          {
            code: "410102",
            name: "\u4E2D\u539F\u533A"
          },
          {
            code: "410103",
            name: "\u4E8C\u4E03\u533A"
          },
          {
            code: "410104",
            name: "\u7BA1\u57CE\u56DE\u65CF\u533A"
          },
          {
            code: "410105",
            name: "\u91D1\u6C34\u533A"
          },
          {
            code: "410106",
            name: "\u4E0A\u8857\u533A"
          },
          {
            code: "410108",
            name: "\u60E0\u6D4E\u533A"
          },
          {
            code: "410122",
            name: "\u4E2D\u725F\u53BF"
          },
          {
            code: "410171",
            name: "\u90D1\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410172",
            name: "\u90D1\u5DDE\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410173",
            name: "\u90D1\u5DDE\u822A\u7A7A\u6E2F\u7ECF\u6D4E\u7EFC\u5408\u5B9E\u9A8C\u533A"
          },
          {
            code: "410181",
            name: "\u5DE9\u4E49\u5E02"
          },
          {
            code: "410182",
            name: "\u8365\u9633\u5E02"
          },
          {
            code: "410183",
            name: "\u65B0\u5BC6\u5E02"
          },
          {
            code: "410184",
            name: "\u65B0\u90D1\u5E02"
          },
          {
            code: "410185",
            name: "\u767B\u5C01\u5E02"
          }
        ]
      },
      {
        code: "4102",
        name: "\u5F00\u5C01\u5E02",
        children: [
          {
            code: "410202",
            name: "\u9F99\u4EAD\u533A"
          },
          {
            code: "410203",
            name: "\u987A\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410204",
            name: "\u9F13\u697C\u533A"
          },
          {
            code: "410205",
            name: "\u79B9\u738B\u53F0\u533A"
          },
          {
            code: "410212",
            name: "\u7965\u7B26\u533A"
          },
          {
            code: "410221",
            name: "\u675E\u53BF"
          },
          {
            code: "410222",
            name: "\u901A\u8BB8\u53BF"
          },
          {
            code: "410223",
            name: "\u5C09\u6C0F\u53BF"
          },
          {
            code: "410225",
            name: "\u5170\u8003\u53BF"
          }
        ]
      },
      {
        code: "4103",
        name: "\u6D1B\u9633\u5E02",
        children: [
          {
            code: "410302",
            name: "\u8001\u57CE\u533A"
          },
          {
            code: "410303",
            name: "\u897F\u5DE5\u533A"
          },
          {
            code: "410304",
            name: "\u700D\u6CB3\u56DE\u65CF\u533A"
          },
          {
            code: "410305",
            name: "\u6DA7\u897F\u533A"
          },
          {
            code: "410307",
            name: "\u5043\u5E08\u533A"
          },
          {
            code: "410308",
            name: "\u5B5F\u6D25\u533A"
          },
          {
            code: "410311",
            name: "\u6D1B\u9F99\u533A"
          },
          {
            code: "410323",
            name: "\u65B0\u5B89\u53BF"
          },
          {
            code: "410324",
            name: "\u683E\u5DDD\u53BF"
          },
          {
            code: "410325",
            name: "\u5D69\u53BF"
          },
          {
            code: "410326",
            name: "\u6C5D\u9633\u53BF"
          },
          {
            code: "410327",
            name: "\u5B9C\u9633\u53BF"
          },
          {
            code: "410328",
            name: "\u6D1B\u5B81\u53BF"
          },
          {
            code: "410329",
            name: "\u4F0A\u5DDD\u53BF"
          },
          {
            code: "410371",
            name: "\u6D1B\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4104",
        name: "\u5E73\u9876\u5C71\u5E02",
        children: [
          {
            code: "410402",
            name: "\u65B0\u534E\u533A"
          },
          {
            code: "410403",
            name: "\u536B\u4E1C\u533A"
          },
          {
            code: "410404",
            name: "\u77F3\u9F99\u533A"
          },
          {
            code: "410411",
            name: "\u6E5B\u6CB3\u533A"
          },
          {
            code: "410421",
            name: "\u5B9D\u4E30\u53BF"
          },
          {
            code: "410422",
            name: "\u53F6\u53BF"
          },
          {
            code: "410423",
            name: "\u9C81\u5C71\u53BF"
          },
          {
            code: "410425",
            name: "\u90CF\u53BF"
          },
          {
            code: "410471",
            name: "\u5E73\u9876\u5C71\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410472",
            name: "\u5E73\u9876\u5C71\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410481",
            name: "\u821E\u94A2\u5E02"
          },
          {
            code: "410482",
            name: "\u6C5D\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4105",
        name: "\u5B89\u9633\u5E02",
        children: [
          {
            code: "410502",
            name: "\u6587\u5CF0\u533A"
          },
          {
            code: "410503",
            name: "\u5317\u5173\u533A"
          },
          {
            code: "410505",
            name: "\u6BB7\u90FD\u533A"
          },
          {
            code: "410506",
            name: "\u9F99\u5B89\u533A"
          },
          {
            code: "410522",
            name: "\u5B89\u9633\u53BF"
          },
          {
            code: "410523",
            name: "\u6C64\u9634\u53BF"
          },
          {
            code: "410526",
            name: "\u6ED1\u53BF"
          },
          {
            code: "410527",
            name: "\u5185\u9EC4\u53BF"
          },
          {
            code: "410571",
            name: "\u5B89\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410581",
            name: "\u6797\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4106",
        name: "\u9E64\u58C1\u5E02",
        children: [
          {
            code: "410602",
            name: "\u9E64\u5C71\u533A"
          },
          {
            code: "410603",
            name: "\u5C71\u57CE\u533A"
          },
          {
            code: "410611",
            name: "\u6DC7\u6EE8\u533A"
          },
          {
            code: "410621",
            name: "\u6D5A\u53BF"
          },
          {
            code: "410622",
            name: "\u6DC7\u53BF"
          },
          {
            code: "410671",
            name: "\u9E64\u58C1\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4107",
        name: "\u65B0\u4E61\u5E02",
        children: [
          {
            code: "410702",
            name: "\u7EA2\u65D7\u533A"
          },
          {
            code: "410703",
            name: "\u536B\u6EE8\u533A"
          },
          {
            code: "410704",
            name: "\u51E4\u6CC9\u533A"
          },
          {
            code: "410711",
            name: "\u7267\u91CE\u533A"
          },
          {
            code: "410721",
            name: "\u65B0\u4E61\u53BF"
          },
          {
            code: "410724",
            name: "\u83B7\u5609\u53BF"
          },
          {
            code: "410725",
            name: "\u539F\u9633\u53BF"
          },
          {
            code: "410726",
            name: "\u5EF6\u6D25\u53BF"
          },
          {
            code: "410727",
            name: "\u5C01\u4E18\u53BF"
          },
          {
            code: "410771",
            name: "\u65B0\u4E61\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "410772",
            name: "\u65B0\u4E61\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "410773",
            name: "\u65B0\u4E61\u5E02\u5E73\u539F\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410781",
            name: "\u536B\u8F89\u5E02"
          },
          {
            code: "410782",
            name: "\u8F89\u53BF\u5E02"
          },
          {
            code: "410783",
            name: "\u957F\u57A3\u5E02"
          }
        ]
      },
      {
        code: "4108",
        name: "\u7126\u4F5C\u5E02",
        children: [
          {
            code: "410802",
            name: "\u89E3\u653E\u533A"
          },
          {
            code: "410803",
            name: "\u4E2D\u7AD9\u533A"
          },
          {
            code: "410804",
            name: "\u9A6C\u6751\u533A"
          },
          {
            code: "410811",
            name: "\u5C71\u9633\u533A"
          },
          {
            code: "410821",
            name: "\u4FEE\u6B66\u53BF"
          },
          {
            code: "410822",
            name: "\u535A\u7231\u53BF"
          },
          {
            code: "410823",
            name: "\u6B66\u965F\u53BF"
          },
          {
            code: "410825",
            name: "\u6E29\u53BF"
          },
          {
            code: "410871",
            name: "\u7126\u4F5C\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "410882",
            name: "\u6C81\u9633\u5E02"
          },
          {
            code: "410883",
            name: "\u5B5F\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4109",
        name: "\u6FEE\u9633\u5E02",
        children: [
          {
            code: "410902",
            name: "\u534E\u9F99\u533A"
          },
          {
            code: "410922",
            name: "\u6E05\u4E30\u53BF"
          },
          {
            code: "410923",
            name: "\u5357\u4E50\u53BF"
          },
          {
            code: "410926",
            name: "\u8303\u53BF"
          },
          {
            code: "410927",
            name: "\u53F0\u524D\u53BF"
          },
          {
            code: "410928",
            name: "\u6FEE\u9633\u53BF"
          },
          {
            code: "410971",
            name: "\u6CB3\u5357\u6FEE\u9633\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "410972",
            name: "\u6FEE\u9633\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4110",
        name: "\u8BB8\u660C\u5E02",
        children: [
          {
            code: "411002",
            name: "\u9B4F\u90FD\u533A"
          },
          {
            code: "411003",
            name: "\u5EFA\u5B89\u533A"
          },
          {
            code: "411024",
            name: "\u9122\u9675\u53BF"
          },
          {
            code: "411025",
            name: "\u8944\u57CE\u53BF"
          },
          {
            code: "411071",
            name: "\u8BB8\u660C\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "411081",
            name: "\u79B9\u5DDE\u5E02"
          },
          {
            code: "411082",
            name: "\u957F\u845B\u5E02"
          }
        ]
      },
      {
        code: "4111",
        name: "\u6F2F\u6CB3\u5E02",
        children: [
          {
            code: "411102",
            name: "\u6E90\u6C47\u533A"
          },
          {
            code: "411103",
            name: "\u90FE\u57CE\u533A"
          },
          {
            code: "411104",
            name: "\u53EC\u9675\u533A"
          },
          {
            code: "411121",
            name: "\u821E\u9633\u53BF"
          },
          {
            code: "411122",
            name: "\u4E34\u988D\u53BF"
          },
          {
            code: "411171",
            name: "\u6F2F\u6CB3\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4112",
        name: "\u4E09\u95E8\u5CE1\u5E02",
        children: [
          {
            code: "411202",
            name: "\u6E56\u6EE8\u533A"
          },
          {
            code: "411203",
            name: "\u9655\u5DDE\u533A"
          },
          {
            code: "411221",
            name: "\u6E11\u6C60\u53BF"
          },
          {
            code: "411224",
            name: "\u5362\u6C0F\u53BF"
          },
          {
            code: "411271",
            name: "\u6CB3\u5357\u4E09\u95E8\u5CE1\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411281",
            name: "\u4E49\u9A6C\u5E02"
          },
          {
            code: "411282",
            name: "\u7075\u5B9D\u5E02"
          }
        ]
      },
      {
        code: "4113",
        name: "\u5357\u9633\u5E02",
        children: [
          {
            code: "411302",
            name: "\u5B9B\u57CE\u533A"
          },
          {
            code: "411303",
            name: "\u5367\u9F99\u533A"
          },
          {
            code: "411321",
            name: "\u5357\u53EC\u53BF"
          },
          {
            code: "411322",
            name: "\u65B9\u57CE\u53BF"
          },
          {
            code: "411323",
            name: "\u897F\u5CE1\u53BF"
          },
          {
            code: "411324",
            name: "\u9547\u5E73\u53BF"
          },
          {
            code: "411325",
            name: "\u5185\u4E61\u53BF"
          },
          {
            code: "411326",
            name: "\u6DC5\u5DDD\u53BF"
          },
          {
            code: "411327",
            name: "\u793E\u65D7\u53BF"
          },
          {
            code: "411328",
            name: "\u5510\u6CB3\u53BF"
          },
          {
            code: "411329",
            name: "\u65B0\u91CE\u53BF"
          },
          {
            code: "411330",
            name: "\u6850\u67CF\u53BF"
          },
          {
            code: "411371",
            name: "\u5357\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          },
          {
            code: "411372",
            name: "\u5357\u9633\u5E02\u57CE\u4E61\u4E00\u4F53\u5316\u793A\u8303\u533A"
          },
          {
            code: "411381",
            name: "\u9093\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4114",
        name: "\u5546\u4E18\u5E02",
        children: [
          {
            code: "411402",
            name: "\u6881\u56ED\u533A"
          },
          {
            code: "411403",
            name: "\u7762\u9633\u533A"
          },
          {
            code: "411421",
            name: "\u6C11\u6743\u53BF"
          },
          {
            code: "411422",
            name: "\u7762\u53BF"
          },
          {
            code: "411423",
            name: "\u5B81\u9675\u53BF"
          },
          {
            code: "411424",
            name: "\u67D8\u57CE\u53BF"
          },
          {
            code: "411425",
            name: "\u865E\u57CE\u53BF"
          },
          {
            code: "411426",
            name: "\u590F\u9091\u53BF"
          },
          {
            code: "411471",
            name: "\u8C6B\u4E1C\u7EFC\u5408\u7269\u6D41\u4EA7\u4E1A\u805A\u96C6\u533A"
          },
          {
            code: "411472",
            name: "\u6CB3\u5357\u5546\u4E18\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411481",
            name: "\u6C38\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4115",
        name: "\u4FE1\u9633\u5E02",
        children: [
          {
            code: "411502",
            name: "\u6D49\u6CB3\u533A"
          },
          {
            code: "411503",
            name: "\u5E73\u6865\u533A"
          },
          {
            code: "411521",
            name: "\u7F57\u5C71\u53BF"
          },
          {
            code: "411522",
            name: "\u5149\u5C71\u53BF"
          },
          {
            code: "411523",
            name: "\u65B0\u53BF"
          },
          {
            code: "411524",
            name: "\u5546\u57CE\u53BF"
          },
          {
            code: "411525",
            name: "\u56FA\u59CB\u53BF"
          },
          {
            code: "411526",
            name: "\u6F62\u5DDD\u53BF"
          },
          {
            code: "411527",
            name: "\u6DEE\u6EE8\u53BF"
          },
          {
            code: "411528",
            name: "\u606F\u53BF"
          },
          {
            code: "411571",
            name: "\u4FE1\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4116",
        name: "\u5468\u53E3\u5E02",
        children: [
          {
            code: "411602",
            name: "\u5DDD\u6C47\u533A"
          },
          {
            code: "411603",
            name: "\u6DEE\u9633\u533A"
          },
          {
            code: "411621",
            name: "\u6276\u6C9F\u53BF"
          },
          {
            code: "411622",
            name: "\u897F\u534E\u53BF"
          },
          {
            code: "411623",
            name: "\u5546\u6C34\u53BF"
          },
          {
            code: "411624",
            name: "\u6C88\u4E18\u53BF"
          },
          {
            code: "411625",
            name: "\u90F8\u57CE\u53BF"
          },
          {
            code: "411627",
            name: "\u592A\u5EB7\u53BF"
          },
          {
            code: "411628",
            name: "\u9E7F\u9091\u53BF"
          },
          {
            code: "411671",
            name: "\u6CB3\u5357\u5468\u53E3\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "411681",
            name: "\u9879\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4117",
        name: "\u9A7B\u9A6C\u5E97\u5E02",
        children: [
          {
            code: "411702",
            name: "\u9A7F\u57CE\u533A"
          },
          {
            code: "411721",
            name: "\u897F\u5E73\u53BF"
          },
          {
            code: "411722",
            name: "\u4E0A\u8521\u53BF"
          },
          {
            code: "411723",
            name: "\u5E73\u8206\u53BF"
          },
          {
            code: "411724",
            name: "\u6B63\u9633\u53BF"
          },
          {
            code: "411725",
            name: "\u786E\u5C71\u53BF"
          },
          {
            code: "411726",
            name: "\u6CCC\u9633\u53BF"
          },
          {
            code: "411727",
            name: "\u6C5D\u5357\u53BF"
          },
          {
            code: "411728",
            name: "\u9042\u5E73\u53BF"
          },
          {
            code: "411729",
            name: "\u65B0\u8521\u53BF"
          },
          {
            code: "411771",
            name: "\u6CB3\u5357\u9A7B\u9A6C\u5E97\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "4190",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "419001",
            name: "\u6D4E\u6E90\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "\u6E56\u5317\u7701",
    children: [
      {
        code: "4201",
        name: "\u6B66\u6C49\u5E02",
        children: [
          {
            code: "420102",
            name: "\u6C5F\u5CB8\u533A"
          },
          {
            code: "420103",
            name: "\u6C5F\u6C49\u533A"
          },
          {
            code: "420104",
            name: "\u785A\u53E3\u533A"
          },
          {
            code: "420105",
            name: "\u6C49\u9633\u533A"
          },
          {
            code: "420106",
            name: "\u6B66\u660C\u533A"
          },
          {
            code: "420107",
            name: "\u9752\u5C71\u533A"
          },
          {
            code: "420111",
            name: "\u6D2A\u5C71\u533A"
          },
          {
            code: "420112",
            name: "\u4E1C\u897F\u6E56\u533A"
          },
          {
            code: "420113",
            name: "\u6C49\u5357\u533A"
          },
          {
            code: "420114",
            name: "\u8521\u7538\u533A"
          },
          {
            code: "420115",
            name: "\u6C5F\u590F\u533A"
          },
          {
            code: "420116",
            name: "\u9EC4\u9642\u533A"
          },
          {
            code: "420117",
            name: "\u65B0\u6D32\u533A"
          }
        ]
      },
      {
        code: "4202",
        name: "\u9EC4\u77F3\u5E02",
        children: [
          {
            code: "420202",
            name: "\u9EC4\u77F3\u6E2F\u533A"
          },
          {
            code: "420203",
            name: "\u897F\u585E\u5C71\u533A"
          },
          {
            code: "420204",
            name: "\u4E0B\u9646\u533A"
          },
          {
            code: "420205",
            name: "\u94C1\u5C71\u533A"
          },
          {
            code: "420222",
            name: "\u9633\u65B0\u53BF"
          },
          {
            code: "420281",
            name: "\u5927\u51B6\u5E02"
          }
        ]
      },
      {
        code: "4203",
        name: "\u5341\u5830\u5E02",
        children: [
          {
            code: "420302",
            name: "\u8305\u7BAD\u533A"
          },
          {
            code: "420303",
            name: "\u5F20\u6E7E\u533A"
          },
          {
            code: "420304",
            name: "\u90E7\u9633\u533A"
          },
          {
            code: "420322",
            name: "\u90E7\u897F\u53BF"
          },
          {
            code: "420323",
            name: "\u7AF9\u5C71\u53BF"
          },
          {
            code: "420324",
            name: "\u7AF9\u6EAA\u53BF"
          },
          {
            code: "420325",
            name: "\u623F\u53BF"
          },
          {
            code: "420381",
            name: "\u4E39\u6C5F\u53E3\u5E02"
          }
        ]
      },
      {
        code: "4205",
        name: "\u5B9C\u660C\u5E02",
        children: [
          {
            code: "420502",
            name: "\u897F\u9675\u533A"
          },
          {
            code: "420503",
            name: "\u4F0D\u5BB6\u5C97\u533A"
          },
          {
            code: "420504",
            name: "\u70B9\u519B\u533A"
          },
          {
            code: "420505",
            name: "\u7307\u4EAD\u533A"
          },
          {
            code: "420506",
            name: "\u5937\u9675\u533A"
          },
          {
            code: "420525",
            name: "\u8FDC\u5B89\u53BF"
          },
          {
            code: "420526",
            name: "\u5174\u5C71\u53BF"
          },
          {
            code: "420527",
            name: "\u79ED\u5F52\u53BF"
          },
          {
            code: "420528",
            name: "\u957F\u9633\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420529",
            name: "\u4E94\u5CF0\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "420581",
            name: "\u5B9C\u90FD\u5E02"
          },
          {
            code: "420582",
            name: "\u5F53\u9633\u5E02"
          },
          {
            code: "420583",
            name: "\u679D\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4206",
        name: "\u8944\u9633\u5E02",
        children: [
          {
            code: "420602",
            name: "\u8944\u57CE\u533A"
          },
          {
            code: "420606",
            name: "\u6A0A\u57CE\u533A"
          },
          {
            code: "420607",
            name: "\u8944\u5DDE\u533A"
          },
          {
            code: "420624",
            name: "\u5357\u6F33\u53BF"
          },
          {
            code: "420625",
            name: "\u8C37\u57CE\u53BF"
          },
          {
            code: "420626",
            name: "\u4FDD\u5EB7\u53BF"
          },
          {
            code: "420682",
            name: "\u8001\u6CB3\u53E3\u5E02"
          },
          {
            code: "420683",
            name: "\u67A3\u9633\u5E02"
          },
          {
            code: "420684",
            name: "\u5B9C\u57CE\u5E02"
          }
        ]
      },
      {
        code: "4207",
        name: "\u9102\u5DDE\u5E02",
        children: [
          {
            code: "420702",
            name: "\u6881\u5B50\u6E56\u533A"
          },
          {
            code: "420703",
            name: "\u534E\u5BB9\u533A"
          },
          {
            code: "420704",
            name: "\u9102\u57CE\u533A"
          }
        ]
      },
      {
        code: "4208",
        name: "\u8346\u95E8\u5E02",
        children: [
          {
            code: "420802",
            name: "\u4E1C\u5B9D\u533A"
          },
          {
            code: "420804",
            name: "\u6387\u5200\u533A"
          },
          {
            code: "420822",
            name: "\u6C99\u6D0B\u53BF"
          },
          {
            code: "420881",
            name: "\u949F\u7965\u5E02"
          },
          {
            code: "420882",
            name: "\u4EAC\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4209",
        name: "\u5B5D\u611F\u5E02",
        children: [
          {
            code: "420902",
            name: "\u5B5D\u5357\u533A"
          },
          {
            code: "420921",
            name: "\u5B5D\u660C\u53BF"
          },
          {
            code: "420922",
            name: "\u5927\u609F\u53BF"
          },
          {
            code: "420923",
            name: "\u4E91\u68A6\u53BF"
          },
          {
            code: "420981",
            name: "\u5E94\u57CE\u5E02"
          },
          {
            code: "420982",
            name: "\u5B89\u9646\u5E02"
          },
          {
            code: "420984",
            name: "\u6C49\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4210",
        name: "\u8346\u5DDE\u5E02",
        children: [
          {
            code: "421002",
            name: "\u6C99\u5E02\u533A"
          },
          {
            code: "421003",
            name: "\u8346\u5DDE\u533A"
          },
          {
            code: "421022",
            name: "\u516C\u5B89\u53BF"
          },
          {
            code: "421024",
            name: "\u6C5F\u9675\u53BF"
          },
          {
            code: "421071",
            name: "\u8346\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "421081",
            name: "\u77F3\u9996\u5E02"
          },
          {
            code: "421083",
            name: "\u6D2A\u6E56\u5E02"
          },
          {
            code: "421087",
            name: "\u677E\u6ECB\u5E02"
          },
          {
            code: "421088",
            name: "\u76D1\u5229\u5E02"
          }
        ]
      },
      {
        code: "4211",
        name: "\u9EC4\u5188\u5E02",
        children: [
          {
            code: "421102",
            name: "\u9EC4\u5DDE\u533A"
          },
          {
            code: "421121",
            name: "\u56E2\u98CE\u53BF"
          },
          {
            code: "421122",
            name: "\u7EA2\u5B89\u53BF"
          },
          {
            code: "421123",
            name: "\u7F57\u7530\u53BF"
          },
          {
            code: "421124",
            name: "\u82F1\u5C71\u53BF"
          },
          {
            code: "421125",
            name: "\u6D60\u6C34\u53BF"
          },
          {
            code: "421126",
            name: "\u8572\u6625\u53BF"
          },
          {
            code: "421127",
            name: "\u9EC4\u6885\u53BF"
          },
          {
            code: "421171",
            name: "\u9F99\u611F\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "421181",
            name: "\u9EBB\u57CE\u5E02"
          },
          {
            code: "421182",
            name: "\u6B66\u7A74\u5E02"
          }
        ]
      },
      {
        code: "4212",
        name: "\u54B8\u5B81\u5E02",
        children: [
          {
            code: "421202",
            name: "\u54B8\u5B89\u533A"
          },
          {
            code: "421221",
            name: "\u5609\u9C7C\u53BF"
          },
          {
            code: "421222",
            name: "\u901A\u57CE\u53BF"
          },
          {
            code: "421223",
            name: "\u5D07\u9633\u53BF"
          },
          {
            code: "421224",
            name: "\u901A\u5C71\u53BF"
          },
          {
            code: "421281",
            name: "\u8D64\u58C1\u5E02"
          }
        ]
      },
      {
        code: "4213",
        name: "\u968F\u5DDE\u5E02",
        children: [
          {
            code: "421303",
            name: "\u66FE\u90FD\u533A"
          },
          {
            code: "421321",
            name: "\u968F\u53BF"
          },
          {
            code: "421381",
            name: "\u5E7F\u6C34\u5E02"
          }
        ]
      },
      {
        code: "4228",
        name: "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "422801",
            name: "\u6069\u65BD\u5E02"
          },
          {
            code: "422802",
            name: "\u5229\u5DDD\u5E02"
          },
          {
            code: "422822",
            name: "\u5EFA\u59CB\u53BF"
          },
          {
            code: "422823",
            name: "\u5DF4\u4E1C\u53BF"
          },
          {
            code: "422825",
            name: "\u5BA3\u6069\u53BF"
          },
          {
            code: "422826",
            name: "\u54B8\u4E30\u53BF"
          },
          {
            code: "422827",
            name: "\u6765\u51E4\u53BF"
          },
          {
            code: "422828",
            name: "\u9E64\u5CF0\u53BF"
          }
        ]
      },
      {
        code: "4290",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "429004",
            name: "\u4ED9\u6843\u5E02"
          },
          {
            code: "429005",
            name: "\u6F5C\u6C5F\u5E02"
          },
          {
            code: "429006",
            name: "\u5929\u95E8\u5E02"
          },
          {
            code: "429021",
            name: "\u795E\u519C\u67B6\u6797\u533A"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "\u6E56\u5357\u7701",
    children: [
      {
        code: "4301",
        name: "\u957F\u6C99\u5E02",
        children: [
          {
            code: "430102",
            name: "\u8299\u84C9\u533A"
          },
          {
            code: "430103",
            name: "\u5929\u5FC3\u533A"
          },
          {
            code: "430104",
            name: "\u5CB3\u9E93\u533A"
          },
          {
            code: "430105",
            name: "\u5F00\u798F\u533A"
          },
          {
            code: "430111",
            name: "\u96E8\u82B1\u533A"
          },
          {
            code: "430112",
            name: "\u671B\u57CE\u533A"
          },
          {
            code: "430121",
            name: "\u957F\u6C99\u53BF"
          },
          {
            code: "430181",
            name: "\u6D4F\u9633\u5E02"
          },
          {
            code: "430182",
            name: "\u5B81\u4E61\u5E02"
          }
        ]
      },
      {
        code: "4302",
        name: "\u682A\u6D32\u5E02",
        children: [
          {
            code: "430202",
            name: "\u8377\u5858\u533A"
          },
          {
            code: "430203",
            name: "\u82A6\u6DDE\u533A"
          },
          {
            code: "430204",
            name: "\u77F3\u5CF0\u533A"
          },
          {
            code: "430211",
            name: "\u5929\u5143\u533A"
          },
          {
            code: "430212",
            name: "\u6E0C\u53E3\u533A"
          },
          {
            code: "430223",
            name: "\u6538\u53BF"
          },
          {
            code: "430224",
            name: "\u8336\u9675\u53BF"
          },
          {
            code: "430225",
            name: "\u708E\u9675\u53BF"
          },
          {
            code: "430271",
            name: "\u4E91\u9F99\u793A\u8303\u533A"
          },
          {
            code: "430281",
            name: "\u91B4\u9675\u5E02"
          }
        ]
      },
      {
        code: "4303",
        name: "\u6E58\u6F6D\u5E02",
        children: [
          {
            code: "430302",
            name: "\u96E8\u6E56\u533A"
          },
          {
            code: "430304",
            name: "\u5CB3\u5858\u533A"
          },
          {
            code: "430321",
            name: "\u6E58\u6F6D\u53BF"
          },
          {
            code: "430371",
            name: "\u6E56\u5357\u6E58\u6F6D\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430372",
            name: "\u6E58\u6F6D\u662D\u5C71\u793A\u8303\u533A"
          },
          {
            code: "430373",
            name: "\u6E58\u6F6D\u4E5D\u534E\u793A\u8303\u533A"
          },
          {
            code: "430381",
            name: "\u6E58\u4E61\u5E02"
          },
          {
            code: "430382",
            name: "\u97F6\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4304",
        name: "\u8861\u9633\u5E02",
        children: [
          {
            code: "430405",
            name: "\u73E0\u6656\u533A"
          },
          {
            code: "430406",
            name: "\u96C1\u5CF0\u533A"
          },
          {
            code: "430407",
            name: "\u77F3\u9F13\u533A"
          },
          {
            code: "430408",
            name: "\u84B8\u6E58\u533A"
          },
          {
            code: "430412",
            name: "\u5357\u5CB3\u533A"
          },
          {
            code: "430421",
            name: "\u8861\u9633\u53BF"
          },
          {
            code: "430422",
            name: "\u8861\u5357\u53BF"
          },
          {
            code: "430423",
            name: "\u8861\u5C71\u53BF"
          },
          {
            code: "430424",
            name: "\u8861\u4E1C\u53BF"
          },
          {
            code: "430426",
            name: "\u7941\u4E1C\u53BF"
          },
          {
            code: "430471",
            name: "\u8861\u9633\u7EFC\u5408\u4FDD\u7A0E\u533A"
          },
          {
            code: "430472",
            name: "\u6E56\u5357\u8861\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430473",
            name: "\u6E56\u5357\u8861\u9633\u677E\u6728\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "430481",
            name: "\u8012\u9633\u5E02"
          },
          {
            code: "430482",
            name: "\u5E38\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4305",
        name: "\u90B5\u9633\u5E02",
        children: [
          {
            code: "430502",
            name: "\u53CC\u6E05\u533A"
          },
          {
            code: "430503",
            name: "\u5927\u7965\u533A"
          },
          {
            code: "430511",
            name: "\u5317\u5854\u533A"
          },
          {
            code: "430522",
            name: "\u65B0\u90B5\u53BF"
          },
          {
            code: "430523",
            name: "\u90B5\u9633\u53BF"
          },
          {
            code: "430524",
            name: "\u9686\u56DE\u53BF"
          },
          {
            code: "430525",
            name: "\u6D1E\u53E3\u53BF"
          },
          {
            code: "430527",
            name: "\u7EE5\u5B81\u53BF"
          },
          {
            code: "430528",
            name: "\u65B0\u5B81\u53BF"
          },
          {
            code: "430529",
            name: "\u57CE\u6B65\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "430581",
            name: "\u6B66\u5188\u5E02"
          },
          {
            code: "430582",
            name: "\u90B5\u4E1C\u5E02"
          }
        ]
      },
      {
        code: "4306",
        name: "\u5CB3\u9633\u5E02",
        children: [
          {
            code: "430602",
            name: "\u5CB3\u9633\u697C\u533A"
          },
          {
            code: "430603",
            name: "\u4E91\u6EAA\u533A"
          },
          {
            code: "430611",
            name: "\u541B\u5C71\u533A"
          },
          {
            code: "430621",
            name: "\u5CB3\u9633\u53BF"
          },
          {
            code: "430623",
            name: "\u534E\u5BB9\u53BF"
          },
          {
            code: "430624",
            name: "\u6E58\u9634\u53BF"
          },
          {
            code: "430626",
            name: "\u5E73\u6C5F\u53BF"
          },
          {
            code: "430671",
            name: "\u5CB3\u9633\u5E02\u5C48\u539F\u7BA1\u7406\u533A"
          },
          {
            code: "430681",
            name: "\u6C68\u7F57\u5E02"
          },
          {
            code: "430682",
            name: "\u4E34\u6E58\u5E02"
          }
        ]
      },
      {
        code: "4307",
        name: "\u5E38\u5FB7\u5E02",
        children: [
          {
            code: "430702",
            name: "\u6B66\u9675\u533A"
          },
          {
            code: "430703",
            name: "\u9F0E\u57CE\u533A"
          },
          {
            code: "430721",
            name: "\u5B89\u4E61\u53BF"
          },
          {
            code: "430722",
            name: "\u6C49\u5BFF\u53BF"
          },
          {
            code: "430723",
            name: "\u6FA7\u53BF"
          },
          {
            code: "430724",
            name: "\u4E34\u6FA7\u53BF"
          },
          {
            code: "430725",
            name: "\u6843\u6E90\u53BF"
          },
          {
            code: "430726",
            name: "\u77F3\u95E8\u53BF"
          },
          {
            code: "430771",
            name: "\u5E38\u5FB7\u5E02\u897F\u6D1E\u5EAD\u7BA1\u7406\u533A"
          },
          {
            code: "430781",
            name: "\u6D25\u5E02\u5E02"
          }
        ]
      },
      {
        code: "4308",
        name: "\u5F20\u5BB6\u754C\u5E02",
        children: [
          {
            code: "430802",
            name: "\u6C38\u5B9A\u533A"
          },
          {
            code: "430811",
            name: "\u6B66\u9675\u6E90\u533A"
          },
          {
            code: "430821",
            name: "\u6148\u5229\u53BF"
          },
          {
            code: "430822",
            name: "\u6851\u690D\u53BF"
          }
        ]
      },
      {
        code: "4309",
        name: "\u76CA\u9633\u5E02",
        children: [
          {
            code: "430902",
            name: "\u8D44\u9633\u533A"
          },
          {
            code: "430903",
            name: "\u8D6B\u5C71\u533A"
          },
          {
            code: "430921",
            name: "\u5357\u53BF"
          },
          {
            code: "430922",
            name: "\u6843\u6C5F\u53BF"
          },
          {
            code: "430923",
            name: "\u5B89\u5316\u53BF"
          },
          {
            code: "430971",
            name: "\u76CA\u9633\u5E02\u5927\u901A\u6E56\u7BA1\u7406\u533A"
          },
          {
            code: "430972",
            name: "\u6E56\u5357\u76CA\u9633\u9AD8\u65B0\u6280\u672F\u4EA7\u4E1A\u56ED\u533A"
          },
          {
            code: "430981",
            name: "\u6C85\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4310",
        name: "\u90F4\u5DDE\u5E02",
        children: [
          {
            code: "431002",
            name: "\u5317\u6E56\u533A"
          },
          {
            code: "431003",
            name: "\u82CF\u4ED9\u533A"
          },
          {
            code: "431021",
            name: "\u6842\u9633\u53BF"
          },
          {
            code: "431022",
            name: "\u5B9C\u7AE0\u53BF"
          },
          {
            code: "431023",
            name: "\u6C38\u5174\u53BF"
          },
          {
            code: "431024",
            name: "\u5609\u79BE\u53BF"
          },
          {
            code: "431025",
            name: "\u4E34\u6B66\u53BF"
          },
          {
            code: "431026",
            name: "\u6C5D\u57CE\u53BF"
          },
          {
            code: "431027",
            name: "\u6842\u4E1C\u53BF"
          },
          {
            code: "431028",
            name: "\u5B89\u4EC1\u53BF"
          },
          {
            code: "431081",
            name: "\u8D44\u5174\u5E02"
          }
        ]
      },
      {
        code: "4311",
        name: "\u6C38\u5DDE\u5E02",
        children: [
          {
            code: "431102",
            name: "\u96F6\u9675\u533A"
          },
          {
            code: "431103",
            name: "\u51B7\u6C34\u6EE9\u533A"
          },
          {
            code: "431122",
            name: "\u4E1C\u5B89\u53BF"
          },
          {
            code: "431123",
            name: "\u53CC\u724C\u53BF"
          },
          {
            code: "431124",
            name: "\u9053\u53BF"
          },
          {
            code: "431125",
            name: "\u6C5F\u6C38\u53BF"
          },
          {
            code: "431126",
            name: "\u5B81\u8FDC\u53BF"
          },
          {
            code: "431127",
            name: "\u84DD\u5C71\u53BF"
          },
          {
            code: "431128",
            name: "\u65B0\u7530\u53BF"
          },
          {
            code: "431129",
            name: "\u6C5F\u534E\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431171",
            name: "\u6C38\u5DDE\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "431173",
            name: "\u6C38\u5DDE\u5E02\u56DE\u9F99\u5729\u7BA1\u7406\u533A"
          },
          {
            code: "431181",
            name: "\u7941\u9633\u5E02"
          }
        ]
      },
      {
        code: "4312",
        name: "\u6000\u5316\u5E02",
        children: [
          {
            code: "431202",
            name: "\u9E64\u57CE\u533A"
          },
          {
            code: "431221",
            name: "\u4E2D\u65B9\u53BF"
          },
          {
            code: "431222",
            name: "\u6C85\u9675\u53BF"
          },
          {
            code: "431223",
            name: "\u8FB0\u6EAA\u53BF"
          },
          {
            code: "431224",
            name: "\u6E86\u6D66\u53BF"
          },
          {
            code: "431225",
            name: "\u4F1A\u540C\u53BF"
          },
          {
            code: "431226",
            name: "\u9EBB\u9633\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431227",
            name: "\u65B0\u6643\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431228",
            name: "\u82B7\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431229",
            name: "\u9756\u5DDE\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431230",
            name: "\u901A\u9053\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "431271",
            name: "\u6000\u5316\u5E02\u6D2A\u6C5F\u7BA1\u7406\u533A"
          },
          {
            code: "431281",
            name: "\u6D2A\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "4313",
        name: "\u5A04\u5E95\u5E02",
        children: [
          {
            code: "431302",
            name: "\u5A04\u661F\u533A"
          },
          {
            code: "431321",
            name: "\u53CC\u5CF0\u53BF"
          },
          {
            code: "431322",
            name: "\u65B0\u5316\u53BF"
          },
          {
            code: "431381",
            name: "\u51B7\u6C34\u6C5F\u5E02"
          },
          {
            code: "431382",
            name: "\u6D9F\u6E90\u5E02"
          }
        ]
      },
      {
        code: "4331",
        name: "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "433101",
            name: "\u5409\u9996\u5E02"
          },
          {
            code: "433122",
            name: "\u6CF8\u6EAA\u53BF"
          },
          {
            code: "433123",
            name: "\u51E4\u51F0\u53BF"
          },
          {
            code: "433124",
            name: "\u82B1\u57A3\u53BF"
          },
          {
            code: "433125",
            name: "\u4FDD\u9756\u53BF"
          },
          {
            code: "433126",
            name: "\u53E4\u4E08\u53BF"
          },
          {
            code: "433127",
            name: "\u6C38\u987A\u53BF"
          },
          {
            code: "433130",
            name: "\u9F99\u5C71\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "\u5E7F\u4E1C\u7701",
    children: [
      {
        code: "4401",
        name: "\u5E7F\u5DDE\u5E02",
        children: [
          {
            code: "440103",
            name: "\u8354\u6E7E\u533A"
          },
          {
            code: "440104",
            name: "\u8D8A\u79C0\u533A"
          },
          {
            code: "440105",
            name: "\u6D77\u73E0\u533A"
          },
          {
            code: "440106",
            name: "\u5929\u6CB3\u533A"
          },
          {
            code: "440111",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "440112",
            name: "\u9EC4\u57D4\u533A"
          },
          {
            code: "440113",
            name: "\u756A\u79BA\u533A"
          },
          {
            code: "440114",
            name: "\u82B1\u90FD\u533A"
          },
          {
            code: "440115",
            name: "\u5357\u6C99\u533A"
          },
          {
            code: "440117",
            name: "\u4ECE\u5316\u533A"
          },
          {
            code: "440118",
            name: "\u589E\u57CE\u533A"
          }
        ]
      },
      {
        code: "4402",
        name: "\u97F6\u5173\u5E02",
        children: [
          {
            code: "440203",
            name: "\u6B66\u6C5F\u533A"
          },
          {
            code: "440204",
            name: "\u6D48\u6C5F\u533A"
          },
          {
            code: "440205",
            name: "\u66F2\u6C5F\u533A"
          },
          {
            code: "440222",
            name: "\u59CB\u5174\u53BF"
          },
          {
            code: "440224",
            name: "\u4EC1\u5316\u53BF"
          },
          {
            code: "440229",
            name: "\u7FC1\u6E90\u53BF"
          },
          {
            code: "440232",
            name: "\u4E73\u6E90\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "440233",
            name: "\u65B0\u4E30\u53BF"
          },
          {
            code: "440281",
            name: "\u4E50\u660C\u5E02"
          },
          {
            code: "440282",
            name: "\u5357\u96C4\u5E02"
          }
        ]
      },
      {
        code: "4403",
        name: "\u6DF1\u5733\u5E02",
        children: [
          {
            code: "440303",
            name: "\u7F57\u6E56\u533A"
          },
          {
            code: "440304",
            name: "\u798F\u7530\u533A"
          },
          {
            code: "440305",
            name: "\u5357\u5C71\u533A"
          },
          {
            code: "440306",
            name: "\u5B9D\u5B89\u533A"
          },
          {
            code: "440307",
            name: "\u9F99\u5C97\u533A"
          },
          {
            code: "440308",
            name: "\u76D0\u7530\u533A"
          },
          {
            code: "440309",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "440310",
            name: "\u576A\u5C71\u533A"
          },
          {
            code: "440311",
            name: "\u5149\u660E\u533A"
          }
        ]
      },
      {
        code: "4404",
        name: "\u73E0\u6D77\u5E02",
        children: [
          {
            code: "440402",
            name: "\u9999\u6D32\u533A"
          },
          {
            code: "440403",
            name: "\u6597\u95E8\u533A"
          },
          {
            code: "440404",
            name: "\u91D1\u6E7E\u533A"
          }
        ]
      },
      {
        code: "4405",
        name: "\u6C55\u5934\u5E02",
        children: [
          {
            code: "440507",
            name: "\u9F99\u6E56\u533A"
          },
          {
            code: "440511",
            name: "\u91D1\u5E73\u533A"
          },
          {
            code: "440512",
            name: "\u6FE0\u6C5F\u533A"
          },
          {
            code: "440513",
            name: "\u6F6E\u9633\u533A"
          },
          {
            code: "440514",
            name: "\u6F6E\u5357\u533A"
          },
          {
            code: "440515",
            name: "\u6F84\u6D77\u533A"
          },
          {
            code: "440523",
            name: "\u5357\u6FB3\u53BF"
          }
        ]
      },
      {
        code: "4406",
        name: "\u4F5B\u5C71\u5E02",
        children: [
          {
            code: "440604",
            name: "\u7985\u57CE\u533A"
          },
          {
            code: "440605",
            name: "\u5357\u6D77\u533A"
          },
          {
            code: "440606",
            name: "\u987A\u5FB7\u533A"
          },
          {
            code: "440607",
            name: "\u4E09\u6C34\u533A"
          },
          {
            code: "440608",
            name: "\u9AD8\u660E\u533A"
          }
        ]
      },
      {
        code: "4407",
        name: "\u6C5F\u95E8\u5E02",
        children: [
          {
            code: "440703",
            name: "\u84EC\u6C5F\u533A"
          },
          {
            code: "440704",
            name: "\u6C5F\u6D77\u533A"
          },
          {
            code: "440705",
            name: "\u65B0\u4F1A\u533A"
          },
          {
            code: "440781",
            name: "\u53F0\u5C71\u5E02"
          },
          {
            code: "440783",
            name: "\u5F00\u5E73\u5E02"
          },
          {
            code: "440784",
            name: "\u9E64\u5C71\u5E02"
          },
          {
            code: "440785",
            name: "\u6069\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4408",
        name: "\u6E5B\u6C5F\u5E02",
        children: [
          {
            code: "440802",
            name: "\u8D64\u574E\u533A"
          },
          {
            code: "440803",
            name: "\u971E\u5C71\u533A"
          },
          {
            code: "440804",
            name: "\u5761\u5934\u533A"
          },
          {
            code: "440811",
            name: "\u9EBB\u7AE0\u533A"
          },
          {
            code: "440823",
            name: "\u9042\u6EAA\u53BF"
          },
          {
            code: "440825",
            name: "\u5F90\u95FB\u53BF"
          },
          {
            code: "440881",
            name: "\u5EC9\u6C5F\u5E02"
          },
          {
            code: "440882",
            name: "\u96F7\u5DDE\u5E02"
          },
          {
            code: "440883",
            name: "\u5434\u5DDD\u5E02"
          }
        ]
      },
      {
        code: "4409",
        name: "\u8302\u540D\u5E02",
        children: [
          {
            code: "440902",
            name: "\u8302\u5357\u533A"
          },
          {
            code: "440904",
            name: "\u7535\u767D\u533A"
          },
          {
            code: "440981",
            name: "\u9AD8\u5DDE\u5E02"
          },
          {
            code: "440982",
            name: "\u5316\u5DDE\u5E02"
          },
          {
            code: "440983",
            name: "\u4FE1\u5B9C\u5E02"
          }
        ]
      },
      {
        code: "4412",
        name: "\u8087\u5E86\u5E02",
        children: [
          {
            code: "441202",
            name: "\u7AEF\u5DDE\u533A"
          },
          {
            code: "441203",
            name: "\u9F0E\u6E56\u533A"
          },
          {
            code: "441204",
            name: "\u9AD8\u8981\u533A"
          },
          {
            code: "441223",
            name: "\u5E7F\u5B81\u53BF"
          },
          {
            code: "441224",
            name: "\u6000\u96C6\u53BF"
          },
          {
            code: "441225",
            name: "\u5C01\u5F00\u53BF"
          },
          {
            code: "441226",
            name: "\u5FB7\u5E86\u53BF"
          },
          {
            code: "441284",
            name: "\u56DB\u4F1A\u5E02"
          }
        ]
      },
      {
        code: "4413",
        name: "\u60E0\u5DDE\u5E02",
        children: [
          {
            code: "441302",
            name: "\u60E0\u57CE\u533A"
          },
          {
            code: "441303",
            name: "\u60E0\u9633\u533A"
          },
          {
            code: "441322",
            name: "\u535A\u7F57\u53BF"
          },
          {
            code: "441323",
            name: "\u60E0\u4E1C\u53BF"
          },
          {
            code: "441324",
            name: "\u9F99\u95E8\u53BF"
          }
        ]
      },
      {
        code: "4414",
        name: "\u6885\u5DDE\u5E02",
        children: [
          {
            code: "441402",
            name: "\u6885\u6C5F\u533A"
          },
          {
            code: "441403",
            name: "\u6885\u53BF\u533A"
          },
          {
            code: "441422",
            name: "\u5927\u57D4\u53BF"
          },
          {
            code: "441423",
            name: "\u4E30\u987A\u53BF"
          },
          {
            code: "441424",
            name: "\u4E94\u534E\u53BF"
          },
          {
            code: "441426",
            name: "\u5E73\u8FDC\u53BF"
          },
          {
            code: "441427",
            name: "\u8549\u5CAD\u53BF"
          },
          {
            code: "441481",
            name: "\u5174\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4415",
        name: "\u6C55\u5C3E\u5E02",
        children: [
          {
            code: "441502",
            name: "\u57CE\u533A"
          },
          {
            code: "441521",
            name: "\u6D77\u4E30\u53BF"
          },
          {
            code: "441523",
            name: "\u9646\u6CB3\u53BF"
          },
          {
            code: "441581",
            name: "\u9646\u4E30\u5E02"
          }
        ]
      },
      {
        code: "4416",
        name: "\u6CB3\u6E90\u5E02",
        children: [
          {
            code: "441602",
            name: "\u6E90\u57CE\u533A"
          },
          {
            code: "441621",
            name: "\u7D2B\u91D1\u53BF"
          },
          {
            code: "441622",
            name: "\u9F99\u5DDD\u53BF"
          },
          {
            code: "441623",
            name: "\u8FDE\u5E73\u53BF"
          },
          {
            code: "441624",
            name: "\u548C\u5E73\u53BF"
          },
          {
            code: "441625",
            name: "\u4E1C\u6E90\u53BF"
          }
        ]
      },
      {
        code: "4417",
        name: "\u9633\u6C5F\u5E02",
        children: [
          {
            code: "441702",
            name: "\u6C5F\u57CE\u533A"
          },
          {
            code: "441704",
            name: "\u9633\u4E1C\u533A"
          },
          {
            code: "441721",
            name: "\u9633\u897F\u53BF"
          },
          {
            code: "441781",
            name: "\u9633\u6625\u5E02"
          }
        ]
      },
      {
        code: "4418",
        name: "\u6E05\u8FDC\u5E02",
        children: [
          {
            code: "441802",
            name: "\u6E05\u57CE\u533A"
          },
          {
            code: "441803",
            name: "\u6E05\u65B0\u533A"
          },
          {
            code: "441821",
            name: "\u4F5B\u5188\u53BF"
          },
          {
            code: "441823",
            name: "\u9633\u5C71\u53BF"
          },
          {
            code: "441825",
            name: "\u8FDE\u5C71\u58EE\u65CF\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441826",
            name: "\u8FDE\u5357\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "441881",
            name: "\u82F1\u5FB7\u5E02"
          },
          {
            code: "441882",
            name: "\u8FDE\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4419",
        name: "\u4E1C\u839E\u5E02",
        children: [
          {
            code: "441900003",
            name: "\u4E1C\u57CE\u8857\u9053"
          },
          {
            code: "441900004",
            name: "\u5357\u57CE\u8857\u9053"
          },
          {
            code: "441900005",
            name: "\u4E07\u6C5F\u8857\u9053"
          },
          {
            code: "441900006",
            name: "\u839E\u57CE\u8857\u9053"
          },
          {
            code: "441900101",
            name: "\u77F3\u78A3\u9547"
          },
          {
            code: "441900102",
            name: "\u77F3\u9F99\u9547"
          },
          {
            code: "441900103",
            name: "\u8336\u5C71\u9547"
          },
          {
            code: "441900104",
            name: "\u77F3\u6392\u9547"
          },
          {
            code: "441900105",
            name: "\u4F01\u77F3\u9547"
          },
          {
            code: "441900106",
            name: "\u6A2A\u6CA5\u9547"
          },
          {
            code: "441900107",
            name: "\u6865\u5934\u9547"
          },
          {
            code: "441900108",
            name: "\u8C22\u5C97\u9547"
          },
          {
            code: "441900109",
            name: "\u4E1C\u5751\u9547"
          },
          {
            code: "441900110",
            name: "\u5E38\u5E73\u9547"
          },
          {
            code: "441900111",
            name: "\u5BEE\u6B65\u9547"
          },
          {
            code: "441900112",
            name: "\u6A1F\u6728\u5934\u9547"
          },
          {
            code: "441900113",
            name: "\u5927\u6717\u9547"
          },
          {
            code: "441900114",
            name: "\u9EC4\u6C5F\u9547"
          },
          {
            code: "441900115",
            name: "\u6E05\u6EAA\u9547"
          },
          {
            code: "441900116",
            name: "\u5858\u53A6\u9547"
          },
          {
            code: "441900117",
            name: "\u51E4\u5C97\u9547"
          },
          {
            code: "441900118",
            name: "\u5927\u5CAD\u5C71\u9547"
          },
          {
            code: "441900119",
            name: "\u957F\u5B89\u9547"
          },
          {
            code: "441900121",
            name: "\u864E\u95E8\u9547"
          },
          {
            code: "441900122",
            name: "\u539A\u8857\u9547"
          },
          {
            code: "441900123",
            name: "\u6C99\u7530\u9547"
          },
          {
            code: "441900124",
            name: "\u9053\u6ED8\u9547"
          },
          {
            code: "441900125",
            name: "\u6D2A\u6885\u9547"
          },
          {
            code: "441900126",
            name: "\u9EBB\u6D8C\u9547"
          },
          {
            code: "441900127",
            name: "\u671B\u725B\u58A9\u9547"
          },
          {
            code: "441900128",
            name: "\u4E2D\u5802\u9547"
          },
          {
            code: "441900129",
            name: "\u9AD8\u57D7\u9547"
          },
          {
            code: "441900401",
            name: "\u677E\u5C71\u6E56"
          },
          {
            code: "441900402",
            name: "\u4E1C\u839E\u6E2F"
          },
          {
            code: "441900403",
            name: "\u4E1C\u839E\u751F\u6001\u56ED"
          },
          {
            code: "441900404",
            name: "\u4E1C\u839E\u6EE8\u6D77\u6E7E\u65B0\u533A"
          }
        ]
      },
      {
        code: "4420",
        name: "\u4E2D\u5C71\u5E02",
        children: [
          {
            code: "442000001",
            name: "\u77F3\u5C90\u8857\u9053"
          },
          {
            code: "442000002",
            name: "\u4E1C\u533A\u8857\u9053"
          },
          {
            code: "442000003",
            name: "\u4E2D\u5C71\u6E2F\u8857\u9053"
          },
          {
            code: "442000004",
            name: "\u897F\u533A\u8857\u9053"
          },
          {
            code: "442000005",
            name: "\u5357\u533A\u8857\u9053"
          },
          {
            code: "442000006",
            name: "\u4E94\u6842\u5C71\u8857\u9053"
          },
          {
            code: "442000007",
            name: "\u6C11\u4F17\u8857\u9053"
          },
          {
            code: "442000008",
            name: "\u5357\u6717\u8857\u9053"
          },
          {
            code: "442000101",
            name: "\u9EC4\u5703\u9547"
          },
          {
            code: "442000103",
            name: "\u4E1C\u51E4\u9547"
          },
          {
            code: "442000105",
            name: "\u53E4\u9547\u9547"
          },
          {
            code: "442000106",
            name: "\u6C99\u6EAA\u9547"
          },
          {
            code: "442000107",
            name: "\u5766\u6D32\u9547"
          },
          {
            code: "442000108",
            name: "\u6E2F\u53E3\u9547"
          },
          {
            code: "442000109",
            name: "\u4E09\u89D2\u9547"
          },
          {
            code: "442000110",
            name: "\u6A2A\u680F\u9547"
          },
          {
            code: "442000111",
            name: "\u5357\u5934\u9547"
          },
          {
            code: "442000112",
            name: "\u961C\u6C99\u9547"
          },
          {
            code: "442000114",
            name: "\u4E09\u4E61\u9547"
          },
          {
            code: "442000115",
            name: "\u677F\u8299\u9547"
          },
          {
            code: "442000116",
            name: "\u5927\u6D8C\u9547"
          },
          {
            code: "442000117",
            name: "\u795E\u6E7E\u9547"
          },
          {
            code: "442000118",
            name: "\u5C0F\u6984\u9547"
          }
        ]
      },
      {
        code: "4451",
        name: "\u6F6E\u5DDE\u5E02",
        children: [
          {
            code: "445102",
            name: "\u6E58\u6865\u533A"
          },
          {
            code: "445103",
            name: "\u6F6E\u5B89\u533A"
          },
          {
            code: "445122",
            name: "\u9976\u5E73\u53BF"
          }
        ]
      },
      {
        code: "4452",
        name: "\u63ED\u9633\u5E02",
        children: [
          {
            code: "445202",
            name: "\u6995\u57CE\u533A"
          },
          {
            code: "445203",
            name: "\u63ED\u4E1C\u533A"
          },
          {
            code: "445222",
            name: "\u63ED\u897F\u53BF"
          },
          {
            code: "445224",
            name: "\u60E0\u6765\u53BF"
          },
          {
            code: "445281",
            name: "\u666E\u5B81\u5E02"
          }
        ]
      },
      {
        code: "4453",
        name: "\u4E91\u6D6E\u5E02",
        children: [
          {
            code: "445302",
            name: "\u4E91\u57CE\u533A"
          },
          {
            code: "445303",
            name: "\u4E91\u5B89\u533A"
          },
          {
            code: "445321",
            name: "\u65B0\u5174\u53BF"
          },
          {
            code: "445322",
            name: "\u90C1\u5357\u53BF"
          },
          {
            code: "445381",
            name: "\u7F57\u5B9A\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "4501",
        name: "\u5357\u5B81\u5E02",
        children: [
          {
            code: "450102",
            name: "\u5174\u5B81\u533A"
          },
          {
            code: "450103",
            name: "\u9752\u79C0\u533A"
          },
          {
            code: "450105",
            name: "\u6C5F\u5357\u533A"
          },
          {
            code: "450107",
            name: "\u897F\u4E61\u5858\u533A"
          },
          {
            code: "450108",
            name: "\u826F\u5E86\u533A"
          },
          {
            code: "450109",
            name: "\u9095\u5B81\u533A"
          },
          {
            code: "450110",
            name: "\u6B66\u9E23\u533A"
          },
          {
            code: "450123",
            name: "\u9686\u5B89\u53BF"
          },
          {
            code: "450124",
            name: "\u9A6C\u5C71\u53BF"
          },
          {
            code: "450125",
            name: "\u4E0A\u6797\u53BF"
          },
          {
            code: "450126",
            name: "\u5BBE\u9633\u53BF"
          },
          {
            code: "450181",
            name: "\u6A2A\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "4502",
        name: "\u67F3\u5DDE\u5E02",
        children: [
          {
            code: "450202",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "450203",
            name: "\u9C7C\u5CF0\u533A"
          },
          {
            code: "450204",
            name: "\u67F3\u5357\u533A"
          },
          {
            code: "450205",
            name: "\u67F3\u5317\u533A"
          },
          {
            code: "450206",
            name: "\u67F3\u6C5F\u533A"
          },
          {
            code: "450222",
            name: "\u67F3\u57CE\u53BF"
          },
          {
            code: "450223",
            name: "\u9E7F\u5BE8\u53BF"
          },
          {
            code: "450224",
            name: "\u878D\u5B89\u53BF"
          },
          {
            code: "450225",
            name: "\u878D\u6C34\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450226",
            name: "\u4E09\u6C5F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4503",
        name: "\u6842\u6797\u5E02",
        children: [
          {
            code: "450302",
            name: "\u79C0\u5CF0\u533A"
          },
          {
            code: "450303",
            name: "\u53E0\u5F69\u533A"
          },
          {
            code: "450304",
            name: "\u8C61\u5C71\u533A"
          },
          {
            code: "450305",
            name: "\u4E03\u661F\u533A"
          },
          {
            code: "450311",
            name: "\u96C1\u5C71\u533A"
          },
          {
            code: "450312",
            name: "\u4E34\u6842\u533A"
          },
          {
            code: "450321",
            name: "\u9633\u6714\u53BF"
          },
          {
            code: "450323",
            name: "\u7075\u5DDD\u53BF"
          },
          {
            code: "450324",
            name: "\u5168\u5DDE\u53BF"
          },
          {
            code: "450325",
            name: "\u5174\u5B89\u53BF"
          },
          {
            code: "450326",
            name: "\u6C38\u798F\u53BF"
          },
          {
            code: "450327",
            name: "\u704C\u9633\u53BF"
          },
          {
            code: "450328",
            name: "\u9F99\u80DC\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450329",
            name: "\u8D44\u6E90\u53BF"
          },
          {
            code: "450330",
            name: "\u5E73\u4E50\u53BF"
          },
          {
            code: "450332",
            name: "\u606D\u57CE\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "450381",
            name: "\u8354\u6D66\u5E02"
          }
        ]
      },
      {
        code: "4504",
        name: "\u68A7\u5DDE\u5E02",
        children: [
          {
            code: "450403",
            name: "\u4E07\u79C0\u533A"
          },
          {
            code: "450405",
            name: "\u957F\u6D32\u533A"
          },
          {
            code: "450406",
            name: "\u9F99\u5729\u533A"
          },
          {
            code: "450421",
            name: "\u82CD\u68A7\u53BF"
          },
          {
            code: "450422",
            name: "\u85E4\u53BF"
          },
          {
            code: "450423",
            name: "\u8499\u5C71\u53BF"
          },
          {
            code: "450481",
            name: "\u5C91\u6EAA\u5E02"
          }
        ]
      },
      {
        code: "4505",
        name: "\u5317\u6D77\u5E02",
        children: [
          {
            code: "450502",
            name: "\u6D77\u57CE\u533A"
          },
          {
            code: "450503",
            name: "\u94F6\u6D77\u533A"
          },
          {
            code: "450512",
            name: "\u94C1\u5C71\u6E2F\u533A"
          },
          {
            code: "450521",
            name: "\u5408\u6D66\u53BF"
          }
        ]
      },
      {
        code: "4506",
        name: "\u9632\u57CE\u6E2F\u5E02",
        children: [
          {
            code: "450602",
            name: "\u6E2F\u53E3\u533A"
          },
          {
            code: "450603",
            name: "\u9632\u57CE\u533A"
          },
          {
            code: "450621",
            name: "\u4E0A\u601D\u53BF"
          },
          {
            code: "450681",
            name: "\u4E1C\u5174\u5E02"
          }
        ]
      },
      {
        code: "4507",
        name: "\u94A6\u5DDE\u5E02",
        children: [
          {
            code: "450702",
            name: "\u94A6\u5357\u533A"
          },
          {
            code: "450703",
            name: "\u94A6\u5317\u533A"
          },
          {
            code: "450721",
            name: "\u7075\u5C71\u53BF"
          },
          {
            code: "450722",
            name: "\u6D66\u5317\u53BF"
          }
        ]
      },
      {
        code: "4508",
        name: "\u8D35\u6E2F\u5E02",
        children: [
          {
            code: "450802",
            name: "\u6E2F\u5317\u533A"
          },
          {
            code: "450803",
            name: "\u6E2F\u5357\u533A"
          },
          {
            code: "450804",
            name: "\u8983\u5858\u533A"
          },
          {
            code: "450821",
            name: "\u5E73\u5357\u53BF"
          },
          {
            code: "450881",
            name: "\u6842\u5E73\u5E02"
          }
        ]
      },
      {
        code: "4509",
        name: "\u7389\u6797\u5E02",
        children: [
          {
            code: "450902",
            name: "\u7389\u5DDE\u533A"
          },
          {
            code: "450903",
            name: "\u798F\u7EF5\u533A"
          },
          {
            code: "450921",
            name: "\u5BB9\u53BF"
          },
          {
            code: "450922",
            name: "\u9646\u5DDD\u53BF"
          },
          {
            code: "450923",
            name: "\u535A\u767D\u53BF"
          },
          {
            code: "450924",
            name: "\u5174\u4E1A\u53BF"
          },
          {
            code: "450981",
            name: "\u5317\u6D41\u5E02"
          }
        ]
      },
      {
        code: "4510",
        name: "\u767E\u8272\u5E02",
        children: [
          {
            code: "451002",
            name: "\u53F3\u6C5F\u533A"
          },
          {
            code: "451003",
            name: "\u7530\u9633\u533A"
          },
          {
            code: "451022",
            name: "\u7530\u4E1C\u53BF"
          },
          {
            code: "451024",
            name: "\u5FB7\u4FDD\u53BF"
          },
          {
            code: "451026",
            name: "\u90A3\u5761\u53BF"
          },
          {
            code: "451027",
            name: "\u51CC\u4E91\u53BF"
          },
          {
            code: "451028",
            name: "\u4E50\u4E1A\u53BF"
          },
          {
            code: "451029",
            name: "\u7530\u6797\u53BF"
          },
          {
            code: "451030",
            name: "\u897F\u6797\u53BF"
          },
          {
            code: "451031",
            name: "\u9686\u6797\u5404\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451081",
            name: "\u9756\u897F\u5E02"
          },
          {
            code: "451082",
            name: "\u5E73\u679C\u5E02"
          }
        ]
      },
      {
        code: "4511",
        name: "\u8D3A\u5DDE\u5E02",
        children: [
          {
            code: "451102",
            name: "\u516B\u6B65\u533A"
          },
          {
            code: "451103",
            name: "\u5E73\u6842\u533A"
          },
          {
            code: "451121",
            name: "\u662D\u5E73\u53BF"
          },
          {
            code: "451122",
            name: "\u949F\u5C71\u53BF"
          },
          {
            code: "451123",
            name: "\u5BCC\u5DDD\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4512",
        name: "\u6CB3\u6C60\u5E02",
        children: [
          {
            code: "451202",
            name: "\u91D1\u57CE\u6C5F\u533A"
          },
          {
            code: "451203",
            name: "\u5B9C\u5DDE\u533A"
          },
          {
            code: "451221",
            name: "\u5357\u4E39\u53BF"
          },
          {
            code: "451222",
            name: "\u5929\u5CE8\u53BF"
          },
          {
            code: "451223",
            name: "\u51E4\u5C71\u53BF"
          },
          {
            code: "451224",
            name: "\u4E1C\u5170\u53BF"
          },
          {
            code: "451225",
            name: "\u7F57\u57CE\u4EEB\u4F6C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451226",
            name: "\u73AF\u6C5F\u6BDB\u5357\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451227",
            name: "\u5DF4\u9A6C\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451228",
            name: "\u90FD\u5B89\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451229",
            name: "\u5927\u5316\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "4513",
        name: "\u6765\u5BBE\u5E02",
        children: [
          {
            code: "451302",
            name: "\u5174\u5BBE\u533A"
          },
          {
            code: "451321",
            name: "\u5FFB\u57CE\u53BF"
          },
          {
            code: "451322",
            name: "\u8C61\u5DDE\u53BF"
          },
          {
            code: "451323",
            name: "\u6B66\u5BA3\u53BF"
          },
          {
            code: "451324",
            name: "\u91D1\u79C0\u7476\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "451381",
            name: "\u5408\u5C71\u5E02"
          }
        ]
      },
      {
        code: "4514",
        name: "\u5D07\u5DE6\u5E02",
        children: [
          {
            code: "451402",
            name: "\u6C5F\u5DDE\u533A"
          },
          {
            code: "451421",
            name: "\u6276\u7EE5\u53BF"
          },
          {
            code: "451422",
            name: "\u5B81\u660E\u53BF"
          },
          {
            code: "451423",
            name: "\u9F99\u5DDE\u53BF"
          },
          {
            code: "451424",
            name: "\u5927\u65B0\u53BF"
          },
          {
            code: "451425",
            name: "\u5929\u7B49\u53BF"
          },
          {
            code: "451481",
            name: "\u51ED\u7965\u5E02"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "\u6D77\u5357\u7701",
    children: [
      {
        code: "4601",
        name: "\u6D77\u53E3\u5E02",
        children: [
          {
            code: "460105",
            name: "\u79C0\u82F1\u533A"
          },
          {
            code: "460106",
            name: "\u9F99\u534E\u533A"
          },
          {
            code: "460107",
            name: "\u743C\u5C71\u533A"
          },
          {
            code: "460108",
            name: "\u7F8E\u5170\u533A"
          }
        ]
      },
      {
        code: "4602",
        name: "\u4E09\u4E9A\u5E02",
        children: [
          {
            code: "460202",
            name: "\u6D77\u68E0\u533A"
          },
          {
            code: "460203",
            name: "\u5409\u9633\u533A"
          },
          {
            code: "460204",
            name: "\u5929\u6DAF\u533A"
          },
          {
            code: "460205",
            name: "\u5D16\u5DDE\u533A"
          }
        ]
      },
      {
        code: "4603",
        name: "\u4E09\u6C99\u5E02",
        children: [
          {
            code: "460321",
            name: "\u897F\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460322",
            name: "\u5357\u6C99\u7FA4\u5C9B"
          },
          {
            code: "460323",
            name: "\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF"
          }
        ]
      },
      {
        code: "4604",
        name: "\u510B\u5DDE\u5E02",
        children: [
          {
            code: "460400100",
            name: "\u90A3\u5927\u9547"
          },
          {
            code: "460400101",
            name: "\u548C\u5E86\u9547"
          },
          {
            code: "460400102",
            name: "\u5357\u4E30\u9547"
          },
          {
            code: "460400103",
            name: "\u5927\u6210\u9547"
          },
          {
            code: "460400104",
            name: "\u96C5\u661F\u9547"
          },
          {
            code: "460400105",
            name: "\u5170\u6D0B\u9547"
          },
          {
            code: "460400106",
            name: "\u5149\u6751\u9547"
          },
          {
            code: "460400107",
            name: "\u6728\u68E0\u9547"
          },
          {
            code: "460400108",
            name: "\u6D77\u5934\u9547"
          },
          {
            code: "460400109",
            name: "\u5CE8\u8513\u9547"
          },
          {
            code: "460400111",
            name: "\u738B\u4E94\u9547"
          },
          {
            code: "460400112",
            name: "\u767D\u9A6C\u4E95\u9547"
          },
          {
            code: "460400113",
            name: "\u4E2D\u548C\u9547"
          },
          {
            code: "460400114",
            name: "\u6392\u6D66\u9547"
          },
          {
            code: "460400115",
            name: "\u4E1C\u6210\u9547"
          },
          {
            code: "460400116",
            name: "\u65B0\u5DDE\u9547"
          },
          {
            code: "460400499",
            name: "\u6D0B\u6D66\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "460400500",
            name: "\u534E\u5357\u70ED\u4F5C\u5B66\u9662"
          }
        ]
      },
      {
        code: "4690",
        name: "\u7701\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "469001",
            name: "\u4E94\u6307\u5C71\u5E02"
          },
          {
            code: "469002",
            name: "\u743C\u6D77\u5E02"
          },
          {
            code: "469005",
            name: "\u6587\u660C\u5E02"
          },
          {
            code: "469006",
            name: "\u4E07\u5B81\u5E02"
          },
          {
            code: "469007",
            name: "\u4E1C\u65B9\u5E02"
          },
          {
            code: "469021",
            name: "\u5B9A\u5B89\u53BF"
          },
          {
            code: "469022",
            name: "\u5C6F\u660C\u53BF"
          },
          {
            code: "469023",
            name: "\u6F84\u8FC8\u53BF"
          },
          {
            code: "469024",
            name: "\u4E34\u9AD8\u53BF"
          },
          {
            code: "469025",
            name: "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469026",
            name: "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469027",
            name: "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469028",
            name: "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469029",
            name: "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "469030",
            name: "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "\u91CD\u5E86\u5E02",
    children: [
      {
        code: "5001",
        name: "\u5E02\u8F96\u533A",
        children: [
          {
            code: "500101",
            name: "\u4E07\u5DDE\u533A"
          },
          {
            code: "500102",
            name: "\u6DAA\u9675\u533A"
          },
          {
            code: "500103",
            name: "\u6E1D\u4E2D\u533A"
          },
          {
            code: "500104",
            name: "\u5927\u6E21\u53E3\u533A"
          },
          {
            code: "500105",
            name: "\u6C5F\u5317\u533A"
          },
          {
            code: "500106",
            name: "\u6C99\u576A\u575D\u533A"
          },
          {
            code: "500107",
            name: "\u4E5D\u9F99\u5761\u533A"
          },
          {
            code: "500108",
            name: "\u5357\u5CB8\u533A"
          },
          {
            code: "500109",
            name: "\u5317\u789A\u533A"
          },
          {
            code: "500110",
            name: "\u7DA6\u6C5F\u533A"
          },
          {
            code: "500111",
            name: "\u5927\u8DB3\u533A"
          },
          {
            code: "500112",
            name: "\u6E1D\u5317\u533A"
          },
          {
            code: "500113",
            name: "\u5DF4\u5357\u533A"
          },
          {
            code: "500114",
            name: "\u9ED4\u6C5F\u533A"
          },
          {
            code: "500115",
            name: "\u957F\u5BFF\u533A"
          },
          {
            code: "500116",
            name: "\u6C5F\u6D25\u533A"
          },
          {
            code: "500117",
            name: "\u5408\u5DDD\u533A"
          },
          {
            code: "500118",
            name: "\u6C38\u5DDD\u533A"
          },
          {
            code: "500119",
            name: "\u5357\u5DDD\u533A"
          },
          {
            code: "500120",
            name: "\u74A7\u5C71\u533A"
          },
          {
            code: "500151",
            name: "\u94DC\u6881\u533A"
          },
          {
            code: "500152",
            name: "\u6F7C\u5357\u533A"
          },
          {
            code: "500153",
            name: "\u8363\u660C\u533A"
          },
          {
            code: "500154",
            name: "\u5F00\u5DDE\u533A"
          },
          {
            code: "500155",
            name: "\u6881\u5E73\u533A"
          },
          {
            code: "500156",
            name: "\u6B66\u9686\u533A"
          }
        ]
      },
      {
        code: "5002",
        name: "\u53BF",
        children: [
          {
            code: "500229",
            name: "\u57CE\u53E3\u53BF"
          },
          {
            code: "500230",
            name: "\u4E30\u90FD\u53BF"
          },
          {
            code: "500231",
            name: "\u57AB\u6C5F\u53BF"
          },
          {
            code: "500233",
            name: "\u5FE0\u53BF"
          },
          {
            code: "500235",
            name: "\u4E91\u9633\u53BF"
          },
          {
            code: "500236",
            name: "\u5949\u8282\u53BF"
          },
          {
            code: "500237",
            name: "\u5DEB\u5C71\u53BF"
          },
          {
            code: "500238",
            name: "\u5DEB\u6EAA\u53BF"
          },
          {
            code: "500240",
            name: "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500241",
            name: "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500242",
            name: "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "500243",
            name: "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "\u56DB\u5DDD\u7701",
    children: [
      {
        code: "5101",
        name: "\u6210\u90FD\u5E02",
        children: [
          {
            code: "510104",
            name: "\u9526\u6C5F\u533A"
          },
          {
            code: "510105",
            name: "\u9752\u7F8A\u533A"
          },
          {
            code: "510106",
            name: "\u91D1\u725B\u533A"
          },
          {
            code: "510107",
            name: "\u6B66\u4FAF\u533A"
          },
          {
            code: "510108",
            name: "\u6210\u534E\u533A"
          },
          {
            code: "510112",
            name: "\u9F99\u6CC9\u9A7F\u533A"
          },
          {
            code: "510113",
            name: "\u9752\u767D\u6C5F\u533A"
          },
          {
            code: "510114",
            name: "\u65B0\u90FD\u533A"
          },
          {
            code: "510115",
            name: "\u6E29\u6C5F\u533A"
          },
          {
            code: "510116",
            name: "\u53CC\u6D41\u533A"
          },
          {
            code: "510117",
            name: "\u90EB\u90FD\u533A"
          },
          {
            code: "510118",
            name: "\u65B0\u6D25\u533A"
          },
          {
            code: "510121",
            name: "\u91D1\u5802\u53BF"
          },
          {
            code: "510129",
            name: "\u5927\u9091\u53BF"
          },
          {
            code: "510131",
            name: "\u84B2\u6C5F\u53BF"
          },
          {
            code: "510181",
            name: "\u90FD\u6C5F\u5830\u5E02"
          },
          {
            code: "510182",
            name: "\u5F6D\u5DDE\u5E02"
          },
          {
            code: "510183",
            name: "\u909B\u5D03\u5E02"
          },
          {
            code: "510184",
            name: "\u5D07\u5DDE\u5E02"
          },
          {
            code: "510185",
            name: "\u7B80\u9633\u5E02"
          }
        ]
      },
      {
        code: "5103",
        name: "\u81EA\u8D21\u5E02",
        children: [
          {
            code: "510302",
            name: "\u81EA\u6D41\u4E95\u533A"
          },
          {
            code: "510303",
            name: "\u8D21\u4E95\u533A"
          },
          {
            code: "510304",
            name: "\u5927\u5B89\u533A"
          },
          {
            code: "510311",
            name: "\u6CBF\u6EE9\u533A"
          },
          {
            code: "510321",
            name: "\u8363\u53BF"
          },
          {
            code: "510322",
            name: "\u5BCC\u987A\u53BF"
          }
        ]
      },
      {
        code: "5104",
        name: "\u6500\u679D\u82B1\u5E02",
        children: [
          {
            code: "510402",
            name: "\u4E1C\u533A"
          },
          {
            code: "510403",
            name: "\u897F\u533A"
          },
          {
            code: "510411",
            name: "\u4EC1\u548C\u533A"
          },
          {
            code: "510421",
            name: "\u7C73\u6613\u53BF"
          },
          {
            code: "510422",
            name: "\u76D0\u8FB9\u53BF"
          }
        ]
      },
      {
        code: "5105",
        name: "\u6CF8\u5DDE\u5E02",
        children: [
          {
            code: "510502",
            name: "\u6C5F\u9633\u533A"
          },
          {
            code: "510503",
            name: "\u7EB3\u6EAA\u533A"
          },
          {
            code: "510504",
            name: "\u9F99\u9A6C\u6F6D\u533A"
          },
          {
            code: "510521",
            name: "\u6CF8\u53BF"
          },
          {
            code: "510522",
            name: "\u5408\u6C5F\u53BF"
          },
          {
            code: "510524",
            name: "\u53D9\u6C38\u53BF"
          },
          {
            code: "510525",
            name: "\u53E4\u853A\u53BF"
          }
        ]
      },
      {
        code: "5106",
        name: "\u5FB7\u9633\u5E02",
        children: [
          {
            code: "510603",
            name: "\u65CC\u9633\u533A"
          },
          {
            code: "510604",
            name: "\u7F57\u6C5F\u533A"
          },
          {
            code: "510623",
            name: "\u4E2D\u6C5F\u53BF"
          },
          {
            code: "510681",
            name: "\u5E7F\u6C49\u5E02"
          },
          {
            code: "510682",
            name: "\u4EC0\u90A1\u5E02"
          },
          {
            code: "510683",
            name: "\u7EF5\u7AF9\u5E02"
          }
        ]
      },
      {
        code: "5107",
        name: "\u7EF5\u9633\u5E02",
        children: [
          {
            code: "510703",
            name: "\u6DAA\u57CE\u533A"
          },
          {
            code: "510704",
            name: "\u6E38\u4ED9\u533A"
          },
          {
            code: "510705",
            name: "\u5B89\u5DDE\u533A"
          },
          {
            code: "510722",
            name: "\u4E09\u53F0\u53BF"
          },
          {
            code: "510723",
            name: "\u76D0\u4EAD\u53BF"
          },
          {
            code: "510725",
            name: "\u6893\u6F7C\u53BF"
          },
          {
            code: "510726",
            name: "\u5317\u5DDD\u7F8C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "510727",
            name: "\u5E73\u6B66\u53BF"
          },
          {
            code: "510781",
            name: "\u6C5F\u6CB9\u5E02"
          }
        ]
      },
      {
        code: "5108",
        name: "\u5E7F\u5143\u5E02",
        children: [
          {
            code: "510802",
            name: "\u5229\u5DDE\u533A"
          },
          {
            code: "510811",
            name: "\u662D\u5316\u533A"
          },
          {
            code: "510812",
            name: "\u671D\u5929\u533A"
          },
          {
            code: "510821",
            name: "\u65FA\u82CD\u53BF"
          },
          {
            code: "510822",
            name: "\u9752\u5DDD\u53BF"
          },
          {
            code: "510823",
            name: "\u5251\u9601\u53BF"
          },
          {
            code: "510824",
            name: "\u82CD\u6EAA\u53BF"
          }
        ]
      },
      {
        code: "5109",
        name: "\u9042\u5B81\u5E02",
        children: [
          {
            code: "510903",
            name: "\u8239\u5C71\u533A"
          },
          {
            code: "510904",
            name: "\u5B89\u5C45\u533A"
          },
          {
            code: "510921",
            name: "\u84EC\u6EAA\u53BF"
          },
          {
            code: "510923",
            name: "\u5927\u82F1\u53BF"
          },
          {
            code: "510981",
            name: "\u5C04\u6D2A\u5E02"
          }
        ]
      },
      {
        code: "5110",
        name: "\u5185\u6C5F\u5E02",
        children: [
          {
            code: "511002",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511011",
            name: "\u4E1C\u5174\u533A"
          },
          {
            code: "511024",
            name: "\u5A01\u8FDC\u53BF"
          },
          {
            code: "511025",
            name: "\u8D44\u4E2D\u53BF"
          },
          {
            code: "511071",
            name: "\u5185\u6C5F\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511083",
            name: "\u9686\u660C\u5E02"
          }
        ]
      },
      {
        code: "5111",
        name: "\u4E50\u5C71\u5E02",
        children: [
          {
            code: "511102",
            name: "\u5E02\u4E2D\u533A"
          },
          {
            code: "511111",
            name: "\u6C99\u6E7E\u533A"
          },
          {
            code: "511112",
            name: "\u4E94\u901A\u6865\u533A"
          },
          {
            code: "511113",
            name: "\u91D1\u53E3\u6CB3\u533A"
          },
          {
            code: "511123",
            name: "\u728D\u4E3A\u53BF"
          },
          {
            code: "511124",
            name: "\u4E95\u7814\u53BF"
          },
          {
            code: "511126",
            name: "\u5939\u6C5F\u53BF"
          },
          {
            code: "511129",
            name: "\u6C90\u5DDD\u53BF"
          },
          {
            code: "511132",
            name: "\u5CE8\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511133",
            name: "\u9A6C\u8FB9\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "511181",
            name: "\u5CE8\u7709\u5C71\u5E02"
          }
        ]
      },
      {
        code: "5113",
        name: "\u5357\u5145\u5E02",
        children: [
          {
            code: "511302",
            name: "\u987A\u5E86\u533A"
          },
          {
            code: "511303",
            name: "\u9AD8\u576A\u533A"
          },
          {
            code: "511304",
            name: "\u5609\u9675\u533A"
          },
          {
            code: "511321",
            name: "\u5357\u90E8\u53BF"
          },
          {
            code: "511322",
            name: "\u8425\u5C71\u53BF"
          },
          {
            code: "511323",
            name: "\u84EC\u5B89\u53BF"
          },
          {
            code: "511324",
            name: "\u4EEA\u9647\u53BF"
          },
          {
            code: "511325",
            name: "\u897F\u5145\u53BF"
          },
          {
            code: "511381",
            name: "\u9606\u4E2D\u5E02"
          }
        ]
      },
      {
        code: "5114",
        name: "\u7709\u5C71\u5E02",
        children: [
          {
            code: "511402",
            name: "\u4E1C\u5761\u533A"
          },
          {
            code: "511403",
            name: "\u5F6D\u5C71\u533A"
          },
          {
            code: "511421",
            name: "\u4EC1\u5BFF\u53BF"
          },
          {
            code: "511423",
            name: "\u6D2A\u96C5\u53BF"
          },
          {
            code: "511424",
            name: "\u4E39\u68F1\u53BF"
          },
          {
            code: "511425",
            name: "\u9752\u795E\u53BF"
          }
        ]
      },
      {
        code: "5115",
        name: "\u5B9C\u5BBE\u5E02",
        children: [
          {
            code: "511502",
            name: "\u7FE0\u5C4F\u533A"
          },
          {
            code: "511503",
            name: "\u5357\u6EAA\u533A"
          },
          {
            code: "511504",
            name: "\u53D9\u5DDE\u533A"
          },
          {
            code: "511523",
            name: "\u6C5F\u5B89\u53BF"
          },
          {
            code: "511524",
            name: "\u957F\u5B81\u53BF"
          },
          {
            code: "511525",
            name: "\u9AD8\u53BF"
          },
          {
            code: "511526",
            name: "\u73D9\u53BF"
          },
          {
            code: "511527",
            name: "\u7B60\u8FDE\u53BF"
          },
          {
            code: "511528",
            name: "\u5174\u6587\u53BF"
          },
          {
            code: "511529",
            name: "\u5C4F\u5C71\u53BF"
          }
        ]
      },
      {
        code: "5116",
        name: "\u5E7F\u5B89\u5E02",
        children: [
          {
            code: "511602",
            name: "\u5E7F\u5B89\u533A"
          },
          {
            code: "511603",
            name: "\u524D\u950B\u533A"
          },
          {
            code: "511621",
            name: "\u5CB3\u6C60\u53BF"
          },
          {
            code: "511622",
            name: "\u6B66\u80DC\u53BF"
          },
          {
            code: "511623",
            name: "\u90BB\u6C34\u53BF"
          },
          {
            code: "511681",
            name: "\u534E\u84E5\u5E02"
          }
        ]
      },
      {
        code: "5117",
        name: "\u8FBE\u5DDE\u5E02",
        children: [
          {
            code: "511702",
            name: "\u901A\u5DDD\u533A"
          },
          {
            code: "511703",
            name: "\u8FBE\u5DDD\u533A"
          },
          {
            code: "511722",
            name: "\u5BA3\u6C49\u53BF"
          },
          {
            code: "511723",
            name: "\u5F00\u6C5F\u53BF"
          },
          {
            code: "511724",
            name: "\u5927\u7AF9\u53BF"
          },
          {
            code: "511725",
            name: "\u6E20\u53BF"
          },
          {
            code: "511771",
            name: "\u8FBE\u5DDE\u7ECF\u6D4E\u5F00\u53D1\u533A"
          },
          {
            code: "511781",
            name: "\u4E07\u6E90\u5E02"
          }
        ]
      },
      {
        code: "5118",
        name: "\u96C5\u5B89\u5E02",
        children: [
          {
            code: "511802",
            name: "\u96E8\u57CE\u533A"
          },
          {
            code: "511803",
            name: "\u540D\u5C71\u533A"
          },
          {
            code: "511822",
            name: "\u8365\u7ECF\u53BF"
          },
          {
            code: "511823",
            name: "\u6C49\u6E90\u53BF"
          },
          {
            code: "511824",
            name: "\u77F3\u68C9\u53BF"
          },
          {
            code: "511825",
            name: "\u5929\u5168\u53BF"
          },
          {
            code: "511826",
            name: "\u82A6\u5C71\u53BF"
          },
          {
            code: "511827",
            name: "\u5B9D\u5174\u53BF"
          }
        ]
      },
      {
        code: "5119",
        name: "\u5DF4\u4E2D\u5E02",
        children: [
          {
            code: "511902",
            name: "\u5DF4\u5DDE\u533A"
          },
          {
            code: "511903",
            name: "\u6069\u9633\u533A"
          },
          {
            code: "511921",
            name: "\u901A\u6C5F\u53BF"
          },
          {
            code: "511922",
            name: "\u5357\u6C5F\u53BF"
          },
          {
            code: "511923",
            name: "\u5E73\u660C\u53BF"
          },
          {
            code: "511971",
            name: "\u5DF4\u4E2D\u7ECF\u6D4E\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "5120",
        name: "\u8D44\u9633\u5E02",
        children: [
          {
            code: "512002",
            name: "\u96C1\u6C5F\u533A"
          },
          {
            code: "512021",
            name: "\u5B89\u5CB3\u53BF"
          },
          {
            code: "512022",
            name: "\u4E50\u81F3\u53BF"
          }
        ]
      },
      {
        code: "5132",
        name: "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513201",
            name: "\u9A6C\u5C14\u5EB7\u5E02"
          },
          {
            code: "513221",
            name: "\u6C76\u5DDD\u53BF"
          },
          {
            code: "513222",
            name: "\u7406\u53BF"
          },
          {
            code: "513223",
            name: "\u8302\u53BF"
          },
          {
            code: "513224",
            name: "\u677E\u6F58\u53BF"
          },
          {
            code: "513225",
            name: "\u4E5D\u5BE8\u6C9F\u53BF"
          },
          {
            code: "513226",
            name: "\u91D1\u5DDD\u53BF"
          },
          {
            code: "513227",
            name: "\u5C0F\u91D1\u53BF"
          },
          {
            code: "513228",
            name: "\u9ED1\u6C34\u53BF"
          },
          {
            code: "513230",
            name: "\u58E4\u5858\u53BF"
          },
          {
            code: "513231",
            name: "\u963F\u575D\u53BF"
          },
          {
            code: "513232",
            name: "\u82E5\u5C14\u76D6\u53BF"
          },
          {
            code: "513233",
            name: "\u7EA2\u539F\u53BF"
          }
        ]
      },
      {
        code: "5133",
        name: "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513301",
            name: "\u5EB7\u5B9A\u5E02"
          },
          {
            code: "513322",
            name: "\u6CF8\u5B9A\u53BF"
          },
          {
            code: "513323",
            name: "\u4E39\u5DF4\u53BF"
          },
          {
            code: "513324",
            name: "\u4E5D\u9F99\u53BF"
          },
          {
            code: "513325",
            name: "\u96C5\u6C5F\u53BF"
          },
          {
            code: "513326",
            name: "\u9053\u5B5A\u53BF"
          },
          {
            code: "513327",
            name: "\u7089\u970D\u53BF"
          },
          {
            code: "513328",
            name: "\u7518\u5B5C\u53BF"
          },
          {
            code: "513329",
            name: "\u65B0\u9F99\u53BF"
          },
          {
            code: "513330",
            name: "\u5FB7\u683C\u53BF"
          },
          {
            code: "513331",
            name: "\u767D\u7389\u53BF"
          },
          {
            code: "513332",
            name: "\u77F3\u6E20\u53BF"
          },
          {
            code: "513333",
            name: "\u8272\u8FBE\u53BF"
          },
          {
            code: "513334",
            name: "\u7406\u5858\u53BF"
          },
          {
            code: "513335",
            name: "\u5DF4\u5858\u53BF"
          },
          {
            code: "513336",
            name: "\u4E61\u57CE\u53BF"
          },
          {
            code: "513337",
            name: "\u7A3B\u57CE\u53BF"
          },
          {
            code: "513338",
            name: "\u5F97\u8363\u53BF"
          }
        ]
      },
      {
        code: "5134",
        name: "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "513401",
            name: "\u897F\u660C\u5E02"
          },
          {
            code: "513402",
            name: "\u4F1A\u7406\u5E02"
          },
          {
            code: "513422",
            name: "\u6728\u91CC\u85CF\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "513423",
            name: "\u76D0\u6E90\u53BF"
          },
          {
            code: "513424",
            name: "\u5FB7\u660C\u53BF"
          },
          {
            code: "513426",
            name: "\u4F1A\u4E1C\u53BF"
          },
          {
            code: "513427",
            name: "\u5B81\u5357\u53BF"
          },
          {
            code: "513428",
            name: "\u666E\u683C\u53BF"
          },
          {
            code: "513429",
            name: "\u5E03\u62D6\u53BF"
          },
          {
            code: "513430",
            name: "\u91D1\u9633\u53BF"
          },
          {
            code: "513431",
            name: "\u662D\u89C9\u53BF"
          },
          {
            code: "513432",
            name: "\u559C\u5FB7\u53BF"
          },
          {
            code: "513433",
            name: "\u5195\u5B81\u53BF"
          },
          {
            code: "513434",
            name: "\u8D8A\u897F\u53BF"
          },
          {
            code: "513435",
            name: "\u7518\u6D1B\u53BF"
          },
          {
            code: "513436",
            name: "\u7F8E\u59D1\u53BF"
          },
          {
            code: "513437",
            name: "\u96F7\u6CE2\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "\u8D35\u5DDE\u7701",
    children: [
      {
        code: "5201",
        name: "\u8D35\u9633\u5E02",
        children: [
          {
            code: "520102",
            name: "\u5357\u660E\u533A"
          },
          {
            code: "520103",
            name: "\u4E91\u5CA9\u533A"
          },
          {
            code: "520111",
            name: "\u82B1\u6EAA\u533A"
          },
          {
            code: "520112",
            name: "\u4E4C\u5F53\u533A"
          },
          {
            code: "520113",
            name: "\u767D\u4E91\u533A"
          },
          {
            code: "520115",
            name: "\u89C2\u5C71\u6E56\u533A"
          },
          {
            code: "520121",
            name: "\u5F00\u9633\u53BF"
          },
          {
            code: "520122",
            name: "\u606F\u70FD\u53BF"
          },
          {
            code: "520123",
            name: "\u4FEE\u6587\u53BF"
          },
          {
            code: "520181",
            name: "\u6E05\u9547\u5E02"
          }
        ]
      },
      {
        code: "5202",
        name: "\u516D\u76D8\u6C34\u5E02",
        children: [
          {
            code: "520201",
            name: "\u949F\u5C71\u533A"
          },
          {
            code: "520203",
            name: "\u516D\u679D\u7279\u533A"
          },
          {
            code: "520204",
            name: "\u6C34\u57CE\u533A"
          },
          {
            code: "520281",
            name: "\u76D8\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "5203",
        name: "\u9075\u4E49\u5E02",
        children: [
          {
            code: "520302",
            name: "\u7EA2\u82B1\u5C97\u533A"
          },
          {
            code: "520303",
            name: "\u6C47\u5DDD\u533A"
          },
          {
            code: "520304",
            name: "\u64AD\u5DDE\u533A"
          },
          {
            code: "520322",
            name: "\u6850\u6893\u53BF"
          },
          {
            code: "520323",
            name: "\u7EE5\u9633\u53BF"
          },
          {
            code: "520324",
            name: "\u6B63\u5B89\u53BF"
          },
          {
            code: "520325",
            name: "\u9053\u771F\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520326",
            name: "\u52A1\u5DDD\u4EE1\u4F6C\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520327",
            name: "\u51E4\u5188\u53BF"
          },
          {
            code: "520328",
            name: "\u6E44\u6F6D\u53BF"
          },
          {
            code: "520329",
            name: "\u4F59\u5E86\u53BF"
          },
          {
            code: "520330",
            name: "\u4E60\u6C34\u53BF"
          },
          {
            code: "520381",
            name: "\u8D64\u6C34\u5E02"
          },
          {
            code: "520382",
            name: "\u4EC1\u6000\u5E02"
          }
        ]
      },
      {
        code: "5204",
        name: "\u5B89\u987A\u5E02",
        children: [
          {
            code: "520402",
            name: "\u897F\u79C0\u533A"
          },
          {
            code: "520403",
            name: "\u5E73\u575D\u533A"
          },
          {
            code: "520422",
            name: "\u666E\u5B9A\u53BF"
          },
          {
            code: "520423",
            name: "\u9547\u5B81\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520424",
            name: "\u5173\u5CAD\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520425",
            name: "\u7D2B\u4E91\u82D7\u65CF\u5E03\u4F9D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5205",
        name: "\u6BD5\u8282\u5E02",
        children: [
          {
            code: "520502",
            name: "\u4E03\u661F\u5173\u533A"
          },
          {
            code: "520521",
            name: "\u5927\u65B9\u53BF"
          },
          {
            code: "520523",
            name: "\u91D1\u6C99\u53BF"
          },
          {
            code: "520524",
            name: "\u7EC7\u91D1\u53BF"
          },
          {
            code: "520525",
            name: "\u7EB3\u96CD\u53BF"
          },
          {
            code: "520526",
            name: "\u5A01\u5B81\u5F5D\u65CF\u56DE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520527",
            name: "\u8D6B\u7AE0\u53BF"
          },
          {
            code: "520581",
            name: "\u9ED4\u897F\u5E02"
          }
        ]
      },
      {
        code: "5206",
        name: "\u94DC\u4EC1\u5E02",
        children: [
          {
            code: "520602",
            name: "\u78A7\u6C5F\u533A"
          },
          {
            code: "520603",
            name: "\u4E07\u5C71\u533A"
          },
          {
            code: "520621",
            name: "\u6C5F\u53E3\u53BF"
          },
          {
            code: "520622",
            name: "\u7389\u5C4F\u4F97\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520623",
            name: "\u77F3\u9621\u53BF"
          },
          {
            code: "520624",
            name: "\u601D\u5357\u53BF"
          },
          {
            code: "520625",
            name: "\u5370\u6C5F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520626",
            name: "\u5FB7\u6C5F\u53BF"
          },
          {
            code: "520627",
            name: "\u6CBF\u6CB3\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "520628",
            name: "\u677E\u6843\u82D7\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5223",
        name: "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522301",
            name: "\u5174\u4E49\u5E02"
          },
          {
            code: "522302",
            name: "\u5174\u4EC1\u5E02"
          },
          {
            code: "522323",
            name: "\u666E\u5B89\u53BF"
          },
          {
            code: "522324",
            name: "\u6674\u9686\u53BF"
          },
          {
            code: "522325",
            name: "\u8D1E\u4E30\u53BF"
          },
          {
            code: "522326",
            name: "\u671B\u8C1F\u53BF"
          },
          {
            code: "522327",
            name: "\u518C\u4EA8\u53BF"
          },
          {
            code: "522328",
            name: "\u5B89\u9F99\u53BF"
          }
        ]
      },
      {
        code: "5226",
        name: "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522601",
            name: "\u51EF\u91CC\u5E02"
          },
          {
            code: "522622",
            name: "\u9EC4\u5E73\u53BF"
          },
          {
            code: "522623",
            name: "\u65BD\u79C9\u53BF"
          },
          {
            code: "522624",
            name: "\u4E09\u7A57\u53BF"
          },
          {
            code: "522625",
            name: "\u9547\u8FDC\u53BF"
          },
          {
            code: "522626",
            name: "\u5C91\u5DE9\u53BF"
          },
          {
            code: "522627",
            name: "\u5929\u67F1\u53BF"
          },
          {
            code: "522628",
            name: "\u9526\u5C4F\u53BF"
          },
          {
            code: "522629",
            name: "\u5251\u6CB3\u53BF"
          },
          {
            code: "522630",
            name: "\u53F0\u6C5F\u53BF"
          },
          {
            code: "522631",
            name: "\u9ECE\u5E73\u53BF"
          },
          {
            code: "522632",
            name: "\u6995\u6C5F\u53BF"
          },
          {
            code: "522633",
            name: "\u4ECE\u6C5F\u53BF"
          },
          {
            code: "522634",
            name: "\u96F7\u5C71\u53BF"
          },
          {
            code: "522635",
            name: "\u9EBB\u6C5F\u53BF"
          },
          {
            code: "522636",
            name: "\u4E39\u5BE8\u53BF"
          }
        ]
      },
      {
        code: "5227",
        name: "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "522701",
            name: "\u90FD\u5300\u5E02"
          },
          {
            code: "522702",
            name: "\u798F\u6CC9\u5E02"
          },
          {
            code: "522722",
            name: "\u8354\u6CE2\u53BF"
          },
          {
            code: "522723",
            name: "\u8D35\u5B9A\u53BF"
          },
          {
            code: "522725",
            name: "\u74EE\u5B89\u53BF"
          },
          {
            code: "522726",
            name: "\u72EC\u5C71\u53BF"
          },
          {
            code: "522727",
            name: "\u5E73\u5858\u53BF"
          },
          {
            code: "522728",
            name: "\u7F57\u7538\u53BF"
          },
          {
            code: "522729",
            name: "\u957F\u987A\u53BF"
          },
          {
            code: "522730",
            name: "\u9F99\u91CC\u53BF"
          },
          {
            code: "522731",
            name: "\u60E0\u6C34\u53BF"
          },
          {
            code: "522732",
            name: "\u4E09\u90FD\u6C34\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "\u4E91\u5357\u7701",
    children: [
      {
        code: "5301",
        name: "\u6606\u660E\u5E02",
        children: [
          {
            code: "530102",
            name: "\u4E94\u534E\u533A"
          },
          {
            code: "530103",
            name: "\u76D8\u9F99\u533A"
          },
          {
            code: "530111",
            name: "\u5B98\u6E21\u533A"
          },
          {
            code: "530112",
            name: "\u897F\u5C71\u533A"
          },
          {
            code: "530113",
            name: "\u4E1C\u5DDD\u533A"
          },
          {
            code: "530114",
            name: "\u5448\u8D21\u533A"
          },
          {
            code: "530115",
            name: "\u664B\u5B81\u533A"
          },
          {
            code: "530124",
            name: "\u5BCC\u6C11\u53BF"
          },
          {
            code: "530125",
            name: "\u5B9C\u826F\u53BF"
          },
          {
            code: "530126",
            name: "\u77F3\u6797\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530127",
            name: "\u5D69\u660E\u53BF"
          },
          {
            code: "530128",
            name: "\u7984\u529D\u5F5D\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530129",
            name: "\u5BFB\u7538\u56DE\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530181",
            name: "\u5B89\u5B81\u5E02"
          }
        ]
      },
      {
        code: "5303",
        name: "\u66F2\u9756\u5E02",
        children: [
          {
            code: "530302",
            name: "\u9E92\u9E9F\u533A"
          },
          {
            code: "530303",
            name: "\u6CBE\u76CA\u533A"
          },
          {
            code: "530304",
            name: "\u9A6C\u9F99\u533A"
          },
          {
            code: "530322",
            name: "\u9646\u826F\u53BF"
          },
          {
            code: "530323",
            name: "\u5E08\u5B97\u53BF"
          },
          {
            code: "530324",
            name: "\u7F57\u5E73\u53BF"
          },
          {
            code: "530325",
            name: "\u5BCC\u6E90\u53BF"
          },
          {
            code: "530326",
            name: "\u4F1A\u6CFD\u53BF"
          },
          {
            code: "530381",
            name: "\u5BA3\u5A01\u5E02"
          }
        ]
      },
      {
        code: "5304",
        name: "\u7389\u6EAA\u5E02",
        children: [
          {
            code: "530402",
            name: "\u7EA2\u5854\u533A"
          },
          {
            code: "530403",
            name: "\u6C5F\u5DDD\u533A"
          },
          {
            code: "530423",
            name: "\u901A\u6D77\u53BF"
          },
          {
            code: "530424",
            name: "\u534E\u5B81\u53BF"
          },
          {
            code: "530425",
            name: "\u6613\u95E8\u53BF"
          },
          {
            code: "530426",
            name: "\u5CE8\u5C71\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530427",
            name: "\u65B0\u5E73\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530428",
            name: "\u5143\u6C5F\u54C8\u5C3C\u65CF\u5F5D\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530481",
            name: "\u6F84\u6C5F\u5E02"
          }
        ]
      },
      {
        code: "5305",
        name: "\u4FDD\u5C71\u5E02",
        children: [
          {
            code: "530502",
            name: "\u9686\u9633\u533A"
          },
          {
            code: "530521",
            name: "\u65BD\u7538\u53BF"
          },
          {
            code: "530523",
            name: "\u9F99\u9675\u53BF"
          },
          {
            code: "530524",
            name: "\u660C\u5B81\u53BF"
          },
          {
            code: "530581",
            name: "\u817E\u51B2\u5E02"
          }
        ]
      },
      {
        code: "5306",
        name: "\u662D\u901A\u5E02",
        children: [
          {
            code: "530602",
            name: "\u662D\u9633\u533A"
          },
          {
            code: "530621",
            name: "\u9C81\u7538\u53BF"
          },
          {
            code: "530622",
            name: "\u5DE7\u5BB6\u53BF"
          },
          {
            code: "530623",
            name: "\u76D0\u6D25\u53BF"
          },
          {
            code: "530624",
            name: "\u5927\u5173\u53BF"
          },
          {
            code: "530625",
            name: "\u6C38\u5584\u53BF"
          },
          {
            code: "530626",
            name: "\u7EE5\u6C5F\u53BF"
          },
          {
            code: "530627",
            name: "\u9547\u96C4\u53BF"
          },
          {
            code: "530628",
            name: "\u5F5D\u826F\u53BF"
          },
          {
            code: "530629",
            name: "\u5A01\u4FE1\u53BF"
          },
          {
            code: "530681",
            name: "\u6C34\u5BCC\u5E02"
          }
        ]
      },
      {
        code: "5307",
        name: "\u4E3D\u6C5F\u5E02",
        children: [
          {
            code: "530702",
            name: "\u53E4\u57CE\u533A"
          },
          {
            code: "530721",
            name: "\u7389\u9F99\u7EB3\u897F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530722",
            name: "\u6C38\u80DC\u53BF"
          },
          {
            code: "530723",
            name: "\u534E\u576A\u53BF"
          },
          {
            code: "530724",
            name: "\u5B81\u8497\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5308",
        name: "\u666E\u6D31\u5E02",
        children: [
          {
            code: "530802",
            name: "\u601D\u8305\u533A"
          },
          {
            code: "530821",
            name: "\u5B81\u6D31\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530822",
            name: "\u58A8\u6C5F\u54C8\u5C3C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530823",
            name: "\u666F\u4E1C\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530824",
            name: "\u666F\u8C37\u50A3\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530825",
            name: "\u9547\u6C85\u5F5D\u65CF\u54C8\u5C3C\u65CF\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530826",
            name: "\u6C5F\u57CE\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530827",
            name: "\u5B5F\u8FDE\u50A3\u65CF\u62C9\u795C\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530828",
            name: "\u6F9C\u6CA7\u62C9\u795C\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530829",
            name: "\u897F\u76DF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5309",
        name: "\u4E34\u6CA7\u5E02",
        children: [
          {
            code: "530902",
            name: "\u4E34\u7FD4\u533A"
          },
          {
            code: "530921",
            name: "\u51E4\u5E86\u53BF"
          },
          {
            code: "530922",
            name: "\u4E91\u53BF"
          },
          {
            code: "530923",
            name: "\u6C38\u5FB7\u53BF"
          },
          {
            code: "530924",
            name: "\u9547\u5EB7\u53BF"
          },
          {
            code: "530925",
            name: "\u53CC\u6C5F\u62C9\u795C\u65CF\u4F64\u65CF\u5E03\u6717\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530926",
            name: "\u803F\u9A6C\u50A3\u65CF\u4F64\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "530927",
            name: "\u6CA7\u6E90\u4F64\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5323",
        name: "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532301",
            name: "\u695A\u96C4\u5E02"
          },
          {
            code: "532302",
            name: "\u7984\u4E30\u5E02"
          },
          {
            code: "532322",
            name: "\u53CC\u67CF\u53BF"
          },
          {
            code: "532323",
            name: "\u725F\u5B9A\u53BF"
          },
          {
            code: "532324",
            name: "\u5357\u534E\u53BF"
          },
          {
            code: "532325",
            name: "\u59DA\u5B89\u53BF"
          },
          {
            code: "532326",
            name: "\u5927\u59DA\u53BF"
          },
          {
            code: "532327",
            name: "\u6C38\u4EC1\u53BF"
          },
          {
            code: "532328",
            name: "\u5143\u8C0B\u53BF"
          },
          {
            code: "532329",
            name: "\u6B66\u5B9A\u53BF"
          }
        ]
      },
      {
        code: "5325",
        name: "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532501",
            name: "\u4E2A\u65E7\u5E02"
          },
          {
            code: "532502",
            name: "\u5F00\u8FDC\u5E02"
          },
          {
            code: "532503",
            name: "\u8499\u81EA\u5E02"
          },
          {
            code: "532504",
            name: "\u5F25\u52D2\u5E02"
          },
          {
            code: "532523",
            name: "\u5C4F\u8FB9\u82D7\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532524",
            name: "\u5EFA\u6C34\u53BF"
          },
          {
            code: "532525",
            name: "\u77F3\u5C4F\u53BF"
          },
          {
            code: "532527",
            name: "\u6CF8\u897F\u53BF"
          },
          {
            code: "532528",
            name: "\u5143\u9633\u53BF"
          },
          {
            code: "532529",
            name: "\u7EA2\u6CB3\u53BF"
          },
          {
            code: "532530",
            name: "\u91D1\u5E73\u82D7\u65CF\u7476\u65CF\u50A3\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532531",
            name: "\u7EFF\u6625\u53BF"
          },
          {
            code: "532532",
            name: "\u6CB3\u53E3\u7476\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5326",
        name: "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532601",
            name: "\u6587\u5C71\u5E02"
          },
          {
            code: "532622",
            name: "\u781A\u5C71\u53BF"
          },
          {
            code: "532623",
            name: "\u897F\u7574\u53BF"
          },
          {
            code: "532624",
            name: "\u9EBB\u6817\u5761\u53BF"
          },
          {
            code: "532625",
            name: "\u9A6C\u5173\u53BF"
          },
          {
            code: "532626",
            name: "\u4E18\u5317\u53BF"
          },
          {
            code: "532627",
            name: "\u5E7F\u5357\u53BF"
          },
          {
            code: "532628",
            name: "\u5BCC\u5B81\u53BF"
          }
        ]
      },
      {
        code: "5328",
        name: "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532801",
            name: "\u666F\u6D2A\u5E02"
          },
          {
            code: "532822",
            name: "\u52D0\u6D77\u53BF"
          },
          {
            code: "532823",
            name: "\u52D0\u814A\u53BF"
          }
        ]
      },
      {
        code: "5329",
        name: "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "532901",
            name: "\u5927\u7406\u5E02"
          },
          {
            code: "532922",
            name: "\u6F3E\u6FDE\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532923",
            name: "\u7965\u4E91\u53BF"
          },
          {
            code: "532924",
            name: "\u5BBE\u5DDD\u53BF"
          },
          {
            code: "532925",
            name: "\u5F25\u6E21\u53BF"
          },
          {
            code: "532926",
            name: "\u5357\u6DA7\u5F5D\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532927",
            name: "\u5DCD\u5C71\u5F5D\u65CF\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "532928",
            name: "\u6C38\u5E73\u53BF"
          },
          {
            code: "532929",
            name: "\u4E91\u9F99\u53BF"
          },
          {
            code: "532930",
            name: "\u6D31\u6E90\u53BF"
          },
          {
            code: "532931",
            name: "\u5251\u5DDD\u53BF"
          },
          {
            code: "532932",
            name: "\u9E64\u5E86\u53BF"
          }
        ]
      },
      {
        code: "5331",
        name: "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533102",
            name: "\u745E\u4E3D\u5E02"
          },
          {
            code: "533103",
            name: "\u8292\u5E02"
          },
          {
            code: "533122",
            name: "\u6881\u6CB3\u53BF"
          },
          {
            code: "533123",
            name: "\u76C8\u6C5F\u53BF"
          },
          {
            code: "533124",
            name: "\u9647\u5DDD\u53BF"
          }
        ]
      },
      {
        code: "5333",
        name: "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533301",
            name: "\u6CF8\u6C34\u5E02"
          },
          {
            code: "533323",
            name: "\u798F\u8D21\u53BF"
          },
          {
            code: "533324",
            name: "\u8D21\u5C71\u72EC\u9F99\u65CF\u6012\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "533325",
            name: "\u5170\u576A\u767D\u65CF\u666E\u7C73\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "5334",
        name: "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "533401",
            name: "\u9999\u683C\u91CC\u62C9\u5E02"
          },
          {
            code: "533422",
            name: "\u5FB7\u94A6\u53BF"
          },
          {
            code: "533423",
            name: "\u7EF4\u897F\u5088\u50F3\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "\u897F\u85CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "5401",
        name: "\u62C9\u8428\u5E02",
        children: [
          {
            code: "540102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "540103",
            name: "\u5806\u9F99\u5FB7\u5E86\u533A"
          },
          {
            code: "540104",
            name: "\u8FBE\u5B5C\u533A"
          },
          {
            code: "540121",
            name: "\u6797\u5468\u53BF"
          },
          {
            code: "540122",
            name: "\u5F53\u96C4\u53BF"
          },
          {
            code: "540123",
            name: "\u5C3C\u6728\u53BF"
          },
          {
            code: "540124",
            name: "\u66F2\u6C34\u53BF"
          },
          {
            code: "540127",
            name: "\u58A8\u7AF9\u5DE5\u5361\u53BF"
          },
          {
            code: "540171",
            name: "\u683C\u5C14\u6728\u85CF\u9752\u5DE5\u4E1A\u56ED\u533A"
          },
          {
            code: "540172",
            name: "\u62C9\u8428\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          },
          {
            code: "540173",
            name: "\u897F\u85CF\u6587\u5316\u65C5\u6E38\u521B\u610F\u56ED\u533A"
          },
          {
            code: "540174",
            name: "\u8FBE\u5B5C\u5DE5\u4E1A\u56ED\u533A"
          }
        ]
      },
      {
        code: "5402",
        name: "\u65E5\u5580\u5219\u5E02",
        children: [
          {
            code: "540202",
            name: "\u6851\u73E0\u5B5C\u533A"
          },
          {
            code: "540221",
            name: "\u5357\u6728\u6797\u53BF"
          },
          {
            code: "540222",
            name: "\u6C5F\u5B5C\u53BF"
          },
          {
            code: "540223",
            name: "\u5B9A\u65E5\u53BF"
          },
          {
            code: "540224",
            name: "\u8428\u8FE6\u53BF"
          },
          {
            code: "540225",
            name: "\u62C9\u5B5C\u53BF"
          },
          {
            code: "540226",
            name: "\u6602\u4EC1\u53BF"
          },
          {
            code: "540227",
            name: "\u8C22\u901A\u95E8\u53BF"
          },
          {
            code: "540228",
            name: "\u767D\u6717\u53BF"
          },
          {
            code: "540229",
            name: "\u4EC1\u5E03\u53BF"
          },
          {
            code: "540230",
            name: "\u5EB7\u9A6C\u53BF"
          },
          {
            code: "540231",
            name: "\u5B9A\u7ED3\u53BF"
          },
          {
            code: "540232",
            name: "\u4EF2\u5DF4\u53BF"
          },
          {
            code: "540233",
            name: "\u4E9A\u4E1C\u53BF"
          },
          {
            code: "540234",
            name: "\u5409\u9686\u53BF"
          },
          {
            code: "540235",
            name: "\u8042\u62C9\u6728\u53BF"
          },
          {
            code: "540236",
            name: "\u8428\u560E\u53BF"
          },
          {
            code: "540237",
            name: "\u5C97\u5DF4\u53BF"
          }
        ]
      },
      {
        code: "5403",
        name: "\u660C\u90FD\u5E02",
        children: [
          {
            code: "540302",
            name: "\u5361\u82E5\u533A"
          },
          {
            code: "540321",
            name: "\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540322",
            name: "\u8D21\u89C9\u53BF"
          },
          {
            code: "540323",
            name: "\u7C7B\u4E4C\u9F50\u53BF"
          },
          {
            code: "540324",
            name: "\u4E01\u9752\u53BF"
          },
          {
            code: "540325",
            name: "\u5BDF\u96C5\u53BF"
          },
          {
            code: "540326",
            name: "\u516B\u5BBF\u53BF"
          },
          {
            code: "540327",
            name: "\u5DE6\u8D21\u53BF"
          },
          {
            code: "540328",
            name: "\u8292\u5EB7\u53BF"
          },
          {
            code: "540329",
            name: "\u6D1B\u9686\u53BF"
          },
          {
            code: "540330",
            name: "\u8FB9\u575D\u53BF"
          }
        ]
      },
      {
        code: "5404",
        name: "\u6797\u829D\u5E02",
        children: [
          {
            code: "540402",
            name: "\u5DF4\u5B9C\u533A"
          },
          {
            code: "540421",
            name: "\u5DE5\u5E03\u6C5F\u8FBE\u53BF"
          },
          {
            code: "540422",
            name: "\u7C73\u6797\u53BF"
          },
          {
            code: "540423",
            name: "\u58A8\u8131\u53BF"
          },
          {
            code: "540424",
            name: "\u6CE2\u5BC6\u53BF"
          },
          {
            code: "540425",
            name: "\u5BDF\u9685\u53BF"
          },
          {
            code: "540426",
            name: "\u6717\u53BF"
          }
        ]
      },
      {
        code: "5405",
        name: "\u5C71\u5357\u5E02",
        children: [
          {
            code: "540502",
            name: "\u4E43\u4E1C\u533A"
          },
          {
            code: "540521",
            name: "\u624E\u56CA\u53BF"
          },
          {
            code: "540522",
            name: "\u8D21\u560E\u53BF"
          },
          {
            code: "540523",
            name: "\u6851\u65E5\u53BF"
          },
          {
            code: "540524",
            name: "\u743C\u7ED3\u53BF"
          },
          {
            code: "540525",
            name: "\u66F2\u677E\u53BF"
          },
          {
            code: "540526",
            name: "\u63AA\u7F8E\u53BF"
          },
          {
            code: "540527",
            name: "\u6D1B\u624E\u53BF"
          },
          {
            code: "540528",
            name: "\u52A0\u67E5\u53BF"
          },
          {
            code: "540529",
            name: "\u9686\u5B50\u53BF"
          },
          {
            code: "540530",
            name: "\u9519\u90A3\u53BF"
          },
          {
            code: "540531",
            name: "\u6D6A\u5361\u5B50\u53BF"
          }
        ]
      },
      {
        code: "5406",
        name: "\u90A3\u66F2\u5E02",
        children: [
          {
            code: "540602",
            name: "\u8272\u5C3C\u533A"
          },
          {
            code: "540621",
            name: "\u5609\u9ECE\u53BF"
          },
          {
            code: "540622",
            name: "\u6BD4\u5982\u53BF"
          },
          {
            code: "540623",
            name: "\u8042\u8363\u53BF"
          },
          {
            code: "540624",
            name: "\u5B89\u591A\u53BF"
          },
          {
            code: "540625",
            name: "\u7533\u624E\u53BF"
          },
          {
            code: "540626",
            name: "\u7D22\u53BF"
          },
          {
            code: "540627",
            name: "\u73ED\u6208\u53BF"
          },
          {
            code: "540628",
            name: "\u5DF4\u9752\u53BF"
          },
          {
            code: "540629",
            name: "\u5C3C\u739B\u53BF"
          },
          {
            code: "540630",
            name: "\u53CC\u6E56\u53BF"
          }
        ]
      },
      {
        code: "5425",
        name: "\u963F\u91CC\u5730\u533A",
        children: [
          {
            code: "542521",
            name: "\u666E\u5170\u53BF"
          },
          {
            code: "542522",
            name: "\u672D\u8FBE\u53BF"
          },
          {
            code: "542523",
            name: "\u5676\u5C14\u53BF"
          },
          {
            code: "542524",
            name: "\u65E5\u571F\u53BF"
          },
          {
            code: "542525",
            name: "\u9769\u5409\u53BF"
          },
          {
            code: "542526",
            name: "\u6539\u5219\u53BF"
          },
          {
            code: "542527",
            name: "\u63AA\u52E4\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "\u9655\u897F\u7701",
    children: [
      {
        code: "6101",
        name: "\u897F\u5B89\u5E02",
        children: [
          {
            code: "610102",
            name: "\u65B0\u57CE\u533A"
          },
          {
            code: "610103",
            name: "\u7891\u6797\u533A"
          },
          {
            code: "610104",
            name: "\u83B2\u6E56\u533A"
          },
          {
            code: "610111",
            name: "\u705E\u6865\u533A"
          },
          {
            code: "610112",
            name: "\u672A\u592E\u533A"
          },
          {
            code: "610113",
            name: "\u96C1\u5854\u533A"
          },
          {
            code: "610114",
            name: "\u960E\u826F\u533A"
          },
          {
            code: "610115",
            name: "\u4E34\u6F7C\u533A"
          },
          {
            code: "610116",
            name: "\u957F\u5B89\u533A"
          },
          {
            code: "610117",
            name: "\u9AD8\u9675\u533A"
          },
          {
            code: "610118",
            name: "\u9120\u9091\u533A"
          },
          {
            code: "610122",
            name: "\u84DD\u7530\u53BF"
          },
          {
            code: "610124",
            name: "\u5468\u81F3\u53BF"
          }
        ]
      },
      {
        code: "6102",
        name: "\u94DC\u5DDD\u5E02",
        children: [
          {
            code: "610202",
            name: "\u738B\u76CA\u533A"
          },
          {
            code: "610203",
            name: "\u5370\u53F0\u533A"
          },
          {
            code: "610204",
            name: "\u8000\u5DDE\u533A"
          },
          {
            code: "610222",
            name: "\u5B9C\u541B\u53BF"
          }
        ]
      },
      {
        code: "6103",
        name: "\u5B9D\u9E21\u5E02",
        children: [
          {
            code: "610302",
            name: "\u6E2D\u6EE8\u533A"
          },
          {
            code: "610303",
            name: "\u91D1\u53F0\u533A"
          },
          {
            code: "610304",
            name: "\u9648\u4ED3\u533A"
          },
          {
            code: "610305",
            name: "\u51E4\u7FD4\u533A"
          },
          {
            code: "610323",
            name: "\u5C90\u5C71\u53BF"
          },
          {
            code: "610324",
            name: "\u6276\u98CE\u53BF"
          },
          {
            code: "610326",
            name: "\u7709\u53BF"
          },
          {
            code: "610327",
            name: "\u9647\u53BF"
          },
          {
            code: "610328",
            name: "\u5343\u9633\u53BF"
          },
          {
            code: "610329",
            name: "\u9E9F\u6E38\u53BF"
          },
          {
            code: "610330",
            name: "\u51E4\u53BF"
          },
          {
            code: "610331",
            name: "\u592A\u767D\u53BF"
          }
        ]
      },
      {
        code: "6104",
        name: "\u54B8\u9633\u5E02",
        children: [
          {
            code: "610402",
            name: "\u79E6\u90FD\u533A"
          },
          {
            code: "610403",
            name: "\u6768\u9675\u533A"
          },
          {
            code: "610404",
            name: "\u6E2D\u57CE\u533A"
          },
          {
            code: "610422",
            name: "\u4E09\u539F\u53BF"
          },
          {
            code: "610423",
            name: "\u6CFE\u9633\u53BF"
          },
          {
            code: "610424",
            name: "\u4E7E\u53BF"
          },
          {
            code: "610425",
            name: "\u793C\u6CC9\u53BF"
          },
          {
            code: "610426",
            name: "\u6C38\u5BFF\u53BF"
          },
          {
            code: "610428",
            name: "\u957F\u6B66\u53BF"
          },
          {
            code: "610429",
            name: "\u65EC\u9091\u53BF"
          },
          {
            code: "610430",
            name: "\u6DF3\u5316\u53BF"
          },
          {
            code: "610431",
            name: "\u6B66\u529F\u53BF"
          },
          {
            code: "610481",
            name: "\u5174\u5E73\u5E02"
          },
          {
            code: "610482",
            name: "\u5F6C\u5DDE\u5E02"
          }
        ]
      },
      {
        code: "6105",
        name: "\u6E2D\u5357\u5E02",
        children: [
          {
            code: "610502",
            name: "\u4E34\u6E2D\u533A"
          },
          {
            code: "610503",
            name: "\u534E\u5DDE\u533A"
          },
          {
            code: "610522",
            name: "\u6F7C\u5173\u53BF"
          },
          {
            code: "610523",
            name: "\u5927\u8354\u53BF"
          },
          {
            code: "610524",
            name: "\u5408\u9633\u53BF"
          },
          {
            code: "610525",
            name: "\u6F84\u57CE\u53BF"
          },
          {
            code: "610526",
            name: "\u84B2\u57CE\u53BF"
          },
          {
            code: "610527",
            name: "\u767D\u6C34\u53BF"
          },
          {
            code: "610528",
            name: "\u5BCC\u5E73\u53BF"
          },
          {
            code: "610581",
            name: "\u97E9\u57CE\u5E02"
          },
          {
            code: "610582",
            name: "\u534E\u9634\u5E02"
          }
        ]
      },
      {
        code: "6106",
        name: "\u5EF6\u5B89\u5E02",
        children: [
          {
            code: "610602",
            name: "\u5B9D\u5854\u533A"
          },
          {
            code: "610603",
            name: "\u5B89\u585E\u533A"
          },
          {
            code: "610621",
            name: "\u5EF6\u957F\u53BF"
          },
          {
            code: "610622",
            name: "\u5EF6\u5DDD\u53BF"
          },
          {
            code: "610625",
            name: "\u5FD7\u4E39\u53BF"
          },
          {
            code: "610626",
            name: "\u5434\u8D77\u53BF"
          },
          {
            code: "610627",
            name: "\u7518\u6CC9\u53BF"
          },
          {
            code: "610628",
            name: "\u5BCC\u53BF"
          },
          {
            code: "610629",
            name: "\u6D1B\u5DDD\u53BF"
          },
          {
            code: "610630",
            name: "\u5B9C\u5DDD\u53BF"
          },
          {
            code: "610631",
            name: "\u9EC4\u9F99\u53BF"
          },
          {
            code: "610632",
            name: "\u9EC4\u9675\u53BF"
          },
          {
            code: "610681",
            name: "\u5B50\u957F\u5E02"
          }
        ]
      },
      {
        code: "6107",
        name: "\u6C49\u4E2D\u5E02",
        children: [
          {
            code: "610702",
            name: "\u6C49\u53F0\u533A"
          },
          {
            code: "610703",
            name: "\u5357\u90D1\u533A"
          },
          {
            code: "610722",
            name: "\u57CE\u56FA\u53BF"
          },
          {
            code: "610723",
            name: "\u6D0B\u53BF"
          },
          {
            code: "610724",
            name: "\u897F\u4E61\u53BF"
          },
          {
            code: "610725",
            name: "\u52C9\u53BF"
          },
          {
            code: "610726",
            name: "\u5B81\u5F3A\u53BF"
          },
          {
            code: "610727",
            name: "\u7565\u9633\u53BF"
          },
          {
            code: "610728",
            name: "\u9547\u5DF4\u53BF"
          },
          {
            code: "610729",
            name: "\u7559\u575D\u53BF"
          },
          {
            code: "610730",
            name: "\u4F5B\u576A\u53BF"
          }
        ]
      },
      {
        code: "6108",
        name: "\u6986\u6797\u5E02",
        children: [
          {
            code: "610802",
            name: "\u6986\u9633\u533A"
          },
          {
            code: "610803",
            name: "\u6A2A\u5C71\u533A"
          },
          {
            code: "610822",
            name: "\u5E9C\u8C37\u53BF"
          },
          {
            code: "610824",
            name: "\u9756\u8FB9\u53BF"
          },
          {
            code: "610825",
            name: "\u5B9A\u8FB9\u53BF"
          },
          {
            code: "610826",
            name: "\u7EE5\u5FB7\u53BF"
          },
          {
            code: "610827",
            name: "\u7C73\u8102\u53BF"
          },
          {
            code: "610828",
            name: "\u4F73\u53BF"
          },
          {
            code: "610829",
            name: "\u5434\u5821\u53BF"
          },
          {
            code: "610830",
            name: "\u6E05\u6DA7\u53BF"
          },
          {
            code: "610831",
            name: "\u5B50\u6D32\u53BF"
          },
          {
            code: "610881",
            name: "\u795E\u6728\u5E02"
          }
        ]
      },
      {
        code: "6109",
        name: "\u5B89\u5EB7\u5E02",
        children: [
          {
            code: "610902",
            name: "\u6C49\u6EE8\u533A"
          },
          {
            code: "610921",
            name: "\u6C49\u9634\u53BF"
          },
          {
            code: "610922",
            name: "\u77F3\u6CC9\u53BF"
          },
          {
            code: "610923",
            name: "\u5B81\u9655\u53BF"
          },
          {
            code: "610924",
            name: "\u7D2B\u9633\u53BF"
          },
          {
            code: "610925",
            name: "\u5C9A\u768B\u53BF"
          },
          {
            code: "610926",
            name: "\u5E73\u5229\u53BF"
          },
          {
            code: "610927",
            name: "\u9547\u576A\u53BF"
          },
          {
            code: "610929",
            name: "\u767D\u6CB3\u53BF"
          },
          {
            code: "610981",
            name: "\u65EC\u9633\u5E02"
          }
        ]
      },
      {
        code: "6110",
        name: "\u5546\u6D1B\u5E02",
        children: [
          {
            code: "611002",
            name: "\u5546\u5DDE\u533A"
          },
          {
            code: "611021",
            name: "\u6D1B\u5357\u53BF"
          },
          {
            code: "611022",
            name: "\u4E39\u51E4\u53BF"
          },
          {
            code: "611023",
            name: "\u5546\u5357\u53BF"
          },
          {
            code: "611024",
            name: "\u5C71\u9633\u53BF"
          },
          {
            code: "611025",
            name: "\u9547\u5B89\u53BF"
          },
          {
            code: "611026",
            name: "\u67DE\u6C34\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "\u7518\u8083\u7701",
    children: [
      {
        code: "6201",
        name: "\u5170\u5DDE\u5E02",
        children: [
          {
            code: "620102",
            name: "\u57CE\u5173\u533A"
          },
          {
            code: "620103",
            name: "\u4E03\u91CC\u6CB3\u533A"
          },
          {
            code: "620104",
            name: "\u897F\u56FA\u533A"
          },
          {
            code: "620105",
            name: "\u5B89\u5B81\u533A"
          },
          {
            code: "620111",
            name: "\u7EA2\u53E4\u533A"
          },
          {
            code: "620121",
            name: "\u6C38\u767B\u53BF"
          },
          {
            code: "620122",
            name: "\u768B\u5170\u53BF"
          },
          {
            code: "620123",
            name: "\u6986\u4E2D\u53BF"
          },
          {
            code: "620171",
            name: "\u5170\u5DDE\u65B0\u533A"
          }
        ]
      },
      {
        code: "6202",
        name: "\u5609\u5CEA\u5173\u5E02",
        children: [
          {
            code: "620201001",
            name: "\u96C4\u5173\u8857\u9053"
          },
          {
            code: "620201002",
            name: "\u94A2\u57CE\u8857\u9053"
          },
          {
            code: "620201100",
            name: "\u65B0\u57CE\u9547"
          },
          {
            code: "620201101",
            name: "\u5CEA\u6CC9\u9547"
          },
          {
            code: "620201102",
            name: "\u6587\u6B8A\u9547"
          }
        ]
      },
      {
        code: "6203",
        name: "\u91D1\u660C\u5E02",
        children: [
          {
            code: "620302",
            name: "\u91D1\u5DDD\u533A"
          },
          {
            code: "620321",
            name: "\u6C38\u660C\u53BF"
          }
        ]
      },
      {
        code: "6204",
        name: "\u767D\u94F6\u5E02",
        children: [
          {
            code: "620402",
            name: "\u767D\u94F6\u533A"
          },
          {
            code: "620403",
            name: "\u5E73\u5DDD\u533A"
          },
          {
            code: "620421",
            name: "\u9756\u8FDC\u53BF"
          },
          {
            code: "620422",
            name: "\u4F1A\u5B81\u53BF"
          },
          {
            code: "620423",
            name: "\u666F\u6CF0\u53BF"
          }
        ]
      },
      {
        code: "6205",
        name: "\u5929\u6C34\u5E02",
        children: [
          {
            code: "620502",
            name: "\u79E6\u5DDE\u533A"
          },
          {
            code: "620503",
            name: "\u9EA6\u79EF\u533A"
          },
          {
            code: "620521",
            name: "\u6E05\u6C34\u53BF"
          },
          {
            code: "620522",
            name: "\u79E6\u5B89\u53BF"
          },
          {
            code: "620523",
            name: "\u7518\u8C37\u53BF"
          },
          {
            code: "620524",
            name: "\u6B66\u5C71\u53BF"
          },
          {
            code: "620525",
            name: "\u5F20\u5BB6\u5DDD\u56DE\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6206",
        name: "\u6B66\u5A01\u5E02",
        children: [
          {
            code: "620602",
            name: "\u51C9\u5DDE\u533A"
          },
          {
            code: "620621",
            name: "\u6C11\u52E4\u53BF"
          },
          {
            code: "620622",
            name: "\u53E4\u6D6A\u53BF"
          },
          {
            code: "620623",
            name: "\u5929\u795D\u85CF\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6207",
        name: "\u5F20\u6396\u5E02",
        children: [
          {
            code: "620702",
            name: "\u7518\u5DDE\u533A"
          },
          {
            code: "620721",
            name: "\u8083\u5357\u88D5\u56FA\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620722",
            name: "\u6C11\u4E50\u53BF"
          },
          {
            code: "620723",
            name: "\u4E34\u6CFD\u53BF"
          },
          {
            code: "620724",
            name: "\u9AD8\u53F0\u53BF"
          },
          {
            code: "620725",
            name: "\u5C71\u4E39\u53BF"
          }
        ]
      },
      {
        code: "6208",
        name: "\u5E73\u51C9\u5E02",
        children: [
          {
            code: "620802",
            name: "\u5D06\u5CD2\u533A"
          },
          {
            code: "620821",
            name: "\u6CFE\u5DDD\u53BF"
          },
          {
            code: "620822",
            name: "\u7075\u53F0\u53BF"
          },
          {
            code: "620823",
            name: "\u5D07\u4FE1\u53BF"
          },
          {
            code: "620825",
            name: "\u5E84\u6D6A\u53BF"
          },
          {
            code: "620826",
            name: "\u9759\u5B81\u53BF"
          },
          {
            code: "620881",
            name: "\u534E\u4EAD\u5E02"
          }
        ]
      },
      {
        code: "6209",
        name: "\u9152\u6CC9\u5E02",
        children: [
          {
            code: "620902",
            name: "\u8083\u5DDE\u533A"
          },
          {
            code: "620921",
            name: "\u91D1\u5854\u53BF"
          },
          {
            code: "620922",
            name: "\u74DC\u5DDE\u53BF"
          },
          {
            code: "620923",
            name: "\u8083\u5317\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620924",
            name: "\u963F\u514B\u585E\u54C8\u8428\u514B\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "620981",
            name: "\u7389\u95E8\u5E02"
          },
          {
            code: "620982",
            name: "\u6566\u714C\u5E02"
          }
        ]
      },
      {
        code: "6210",
        name: "\u5E86\u9633\u5E02",
        children: [
          {
            code: "621002",
            name: "\u897F\u5CF0\u533A"
          },
          {
            code: "621021",
            name: "\u5E86\u57CE\u53BF"
          },
          {
            code: "621022",
            name: "\u73AF\u53BF"
          },
          {
            code: "621023",
            name: "\u534E\u6C60\u53BF"
          },
          {
            code: "621024",
            name: "\u5408\u6C34\u53BF"
          },
          {
            code: "621025",
            name: "\u6B63\u5B81\u53BF"
          },
          {
            code: "621026",
            name: "\u5B81\u53BF"
          },
          {
            code: "621027",
            name: "\u9547\u539F\u53BF"
          }
        ]
      },
      {
        code: "6211",
        name: "\u5B9A\u897F\u5E02",
        children: [
          {
            code: "621102",
            name: "\u5B89\u5B9A\u533A"
          },
          {
            code: "621121",
            name: "\u901A\u6E2D\u53BF"
          },
          {
            code: "621122",
            name: "\u9647\u897F\u53BF"
          },
          {
            code: "621123",
            name: "\u6E2D\u6E90\u53BF"
          },
          {
            code: "621124",
            name: "\u4E34\u6D2E\u53BF"
          },
          {
            code: "621125",
            name: "\u6F33\u53BF"
          },
          {
            code: "621126",
            name: "\u5CB7\u53BF"
          }
        ]
      },
      {
        code: "6212",
        name: "\u9647\u5357\u5E02",
        children: [
          {
            code: "621202",
            name: "\u6B66\u90FD\u533A"
          },
          {
            code: "621221",
            name: "\u6210\u53BF"
          },
          {
            code: "621222",
            name: "\u6587\u53BF"
          },
          {
            code: "621223",
            name: "\u5B95\u660C\u53BF"
          },
          {
            code: "621224",
            name: "\u5EB7\u53BF"
          },
          {
            code: "621225",
            name: "\u897F\u548C\u53BF"
          },
          {
            code: "621226",
            name: "\u793C\u53BF"
          },
          {
            code: "621227",
            name: "\u5FBD\u53BF"
          },
          {
            code: "621228",
            name: "\u4E24\u5F53\u53BF"
          }
        ]
      },
      {
        code: "6229",
        name: "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "622901",
            name: "\u4E34\u590F\u5E02"
          },
          {
            code: "622921",
            name: "\u4E34\u590F\u53BF"
          },
          {
            code: "622922",
            name: "\u5EB7\u4E50\u53BF"
          },
          {
            code: "622923",
            name: "\u6C38\u9756\u53BF"
          },
          {
            code: "622924",
            name: "\u5E7F\u6CB3\u53BF"
          },
          {
            code: "622925",
            name: "\u548C\u653F\u53BF"
          },
          {
            code: "622926",
            name: "\u4E1C\u4E61\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "622927",
            name: "\u79EF\u77F3\u5C71\u4FDD\u5B89\u65CF\u4E1C\u4E61\u65CF\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6230",
        name: "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "623001",
            name: "\u5408\u4F5C\u5E02"
          },
          {
            code: "623021",
            name: "\u4E34\u6F6D\u53BF"
          },
          {
            code: "623022",
            name: "\u5353\u5C3C\u53BF"
          },
          {
            code: "623023",
            name: "\u821F\u66F2\u53BF"
          },
          {
            code: "623024",
            name: "\u8FED\u90E8\u53BF"
          },
          {
            code: "623025",
            name: "\u739B\u66F2\u53BF"
          },
          {
            code: "623026",
            name: "\u788C\u66F2\u53BF"
          },
          {
            code: "623027",
            name: "\u590F\u6CB3\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "\u9752\u6D77\u7701",
    children: [
      {
        code: "6301",
        name: "\u897F\u5B81\u5E02",
        children: [
          {
            code: "630102",
            name: "\u57CE\u4E1C\u533A"
          },
          {
            code: "630103",
            name: "\u57CE\u4E2D\u533A"
          },
          {
            code: "630104",
            name: "\u57CE\u897F\u533A"
          },
          {
            code: "630105",
            name: "\u57CE\u5317\u533A"
          },
          {
            code: "630106",
            name: "\u6E5F\u4E2D\u533A"
          },
          {
            code: "630121",
            name: "\u5927\u901A\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630123",
            name: "\u6E5F\u6E90\u53BF"
          }
        ]
      },
      {
        code: "6302",
        name: "\u6D77\u4E1C\u5E02",
        children: [
          {
            code: "630202",
            name: "\u4E50\u90FD\u533A"
          },
          {
            code: "630203",
            name: "\u5E73\u5B89\u533A"
          },
          {
            code: "630222",
            name: "\u6C11\u548C\u56DE\u65CF\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630223",
            name: "\u4E92\u52A9\u571F\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630224",
            name: "\u5316\u9686\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "630225",
            name: "\u5FAA\u5316\u6492\u62C9\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6322",
        name: "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632221",
            name: "\u95E8\u6E90\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "632222",
            name: "\u7941\u8FDE\u53BF"
          },
          {
            code: "632223",
            name: "\u6D77\u664F\u53BF"
          },
          {
            code: "632224",
            name: "\u521A\u5BDF\u53BF"
          }
        ]
      },
      {
        code: "6323",
        name: "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632301",
            name: "\u540C\u4EC1\u5E02"
          },
          {
            code: "632322",
            name: "\u5C16\u624E\u53BF"
          },
          {
            code: "632323",
            name: "\u6CFD\u5E93\u53BF"
          },
          {
            code: "632324",
            name: "\u6CB3\u5357\u8499\u53E4\u65CF\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6325",
        name: "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632521",
            name: "\u5171\u548C\u53BF"
          },
          {
            code: "632522",
            name: "\u540C\u5FB7\u53BF"
          },
          {
            code: "632523",
            name: "\u8D35\u5FB7\u53BF"
          },
          {
            code: "632524",
            name: "\u5174\u6D77\u53BF"
          },
          {
            code: "632525",
            name: "\u8D35\u5357\u53BF"
          }
        ]
      },
      {
        code: "6326",
        name: "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632621",
            name: "\u739B\u6C81\u53BF"
          },
          {
            code: "632622",
            name: "\u73ED\u739B\u53BF"
          },
          {
            code: "632623",
            name: "\u7518\u5FB7\u53BF"
          },
          {
            code: "632624",
            name: "\u8FBE\u65E5\u53BF"
          },
          {
            code: "632625",
            name: "\u4E45\u6CBB\u53BF"
          },
          {
            code: "632626",
            name: "\u739B\u591A\u53BF"
          }
        ]
      },
      {
        code: "6327",
        name: "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632701",
            name: "\u7389\u6811\u5E02"
          },
          {
            code: "632722",
            name: "\u6742\u591A\u53BF"
          },
          {
            code: "632723",
            name: "\u79F0\u591A\u53BF"
          },
          {
            code: "632724",
            name: "\u6CBB\u591A\u53BF"
          },
          {
            code: "632725",
            name: "\u56CA\u8C26\u53BF"
          },
          {
            code: "632726",
            name: "\u66F2\u9EBB\u83B1\u53BF"
          }
        ]
      },
      {
        code: "6328",
        name: "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "632801",
            name: "\u683C\u5C14\u6728\u5E02"
          },
          {
            code: "632802",
            name: "\u5FB7\u4EE4\u54C8\u5E02"
          },
          {
            code: "632803",
            name: "\u832B\u5D16\u5E02"
          },
          {
            code: "632821",
            name: "\u4E4C\u5170\u53BF"
          },
          {
            code: "632822",
            name: "\u90FD\u5170\u53BF"
          },
          {
            code: "632823",
            name: "\u5929\u5CFB\u53BF"
          },
          {
            code: "632857",
            name: "\u5927\u67F4\u65E6\u884C\u653F\u59D4\u5458\u4F1A"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6401",
        name: "\u94F6\u5DDD\u5E02",
        children: [
          {
            code: "640104",
            name: "\u5174\u5E86\u533A"
          },
          {
            code: "640105",
            name: "\u897F\u590F\u533A"
          },
          {
            code: "640106",
            name: "\u91D1\u51E4\u533A"
          },
          {
            code: "640121",
            name: "\u6C38\u5B81\u53BF"
          },
          {
            code: "640122",
            name: "\u8D3A\u5170\u53BF"
          },
          {
            code: "640181",
            name: "\u7075\u6B66\u5E02"
          }
        ]
      },
      {
        code: "6402",
        name: "\u77F3\u5634\u5C71\u5E02",
        children: [
          {
            code: "640202",
            name: "\u5927\u6B66\u53E3\u533A"
          },
          {
            code: "640205",
            name: "\u60E0\u519C\u533A"
          },
          {
            code: "640221",
            name: "\u5E73\u7F57\u53BF"
          }
        ]
      },
      {
        code: "6403",
        name: "\u5434\u5FE0\u5E02",
        children: [
          {
            code: "640302",
            name: "\u5229\u901A\u533A"
          },
          {
            code: "640303",
            name: "\u7EA2\u5BFA\u5821\u533A"
          },
          {
            code: "640323",
            name: "\u76D0\u6C60\u53BF"
          },
          {
            code: "640324",
            name: "\u540C\u5FC3\u53BF"
          },
          {
            code: "640381",
            name: "\u9752\u94DC\u5CE1\u5E02"
          }
        ]
      },
      {
        code: "6404",
        name: "\u56FA\u539F\u5E02",
        children: [
          {
            code: "640402",
            name: "\u539F\u5DDE\u533A"
          },
          {
            code: "640422",
            name: "\u897F\u5409\u53BF"
          },
          {
            code: "640423",
            name: "\u9686\u5FB7\u53BF"
          },
          {
            code: "640424",
            name: "\u6CFE\u6E90\u53BF"
          },
          {
            code: "640425",
            name: "\u5F6D\u9633\u53BF"
          }
        ]
      },
      {
        code: "6405",
        name: "\u4E2D\u536B\u5E02",
        children: [
          {
            code: "640502",
            name: "\u6C99\u5761\u5934\u533A"
          },
          {
            code: "640521",
            name: "\u4E2D\u5B81\u53BF"
          },
          {
            code: "640522",
            name: "\u6D77\u539F\u53BF"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",
    children: [
      {
        code: "6501",
        name: "\u4E4C\u9C81\u6728\u9F50\u5E02",
        children: [
          {
            code: "650102",
            name: "\u5929\u5C71\u533A"
          },
          {
            code: "650103",
            name: "\u6C99\u4F9D\u5DF4\u514B\u533A"
          },
          {
            code: "650104",
            name: "\u65B0\u5E02\u533A"
          },
          {
            code: "650105",
            name: "\u6C34\u78E8\u6C9F\u533A"
          },
          {
            code: "650106",
            name: "\u5934\u5C6F\u6CB3\u533A"
          },
          {
            code: "650107",
            name: "\u8FBE\u5742\u57CE\u533A"
          },
          {
            code: "650109",
            name: "\u7C73\u4E1C\u533A"
          },
          {
            code: "650121",
            name: "\u4E4C\u9C81\u6728\u9F50\u53BF"
          }
        ]
      },
      {
        code: "6502",
        name: "\u514B\u62C9\u739B\u4F9D\u5E02",
        children: [
          {
            code: "650202",
            name: "\u72EC\u5C71\u5B50\u533A"
          },
          {
            code: "650203",
            name: "\u514B\u62C9\u739B\u4F9D\u533A"
          },
          {
            code: "650204",
            name: "\u767D\u78B1\u6EE9\u533A"
          },
          {
            code: "650205",
            name: "\u4E4C\u5C14\u79BE\u533A"
          }
        ]
      },
      {
        code: "6504",
        name: "\u5410\u9C81\u756A\u5E02",
        children: [
          {
            code: "650402",
            name: "\u9AD8\u660C\u533A"
          },
          {
            code: "650421",
            name: "\u912F\u5584\u53BF"
          },
          {
            code: "650422",
            name: "\u6258\u514B\u900A\u53BF"
          }
        ]
      },
      {
        code: "6505",
        name: "\u54C8\u5BC6\u5E02",
        children: [
          {
            code: "650502",
            name: "\u4F0A\u5DDE\u533A"
          },
          {
            code: "650521",
            name: "\u5DF4\u91CC\u5764\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          },
          {
            code: "650522",
            name: "\u4F0A\u543E\u53BF"
          }
        ]
      },
      {
        code: "6523",
        name: "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652301",
            name: "\u660C\u5409\u5E02"
          },
          {
            code: "652302",
            name: "\u961C\u5EB7\u5E02"
          },
          {
            code: "652323",
            name: "\u547C\u56FE\u58C1\u53BF"
          },
          {
            code: "652324",
            name: "\u739B\u7EB3\u65AF\u53BF"
          },
          {
            code: "652325",
            name: "\u5947\u53F0\u53BF"
          },
          {
            code: "652327",
            name: "\u5409\u6728\u8428\u5C14\u53BF"
          },
          {
            code: "652328",
            name: "\u6728\u5792\u54C8\u8428\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6527",
        name: "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652701",
            name: "\u535A\u4E50\u5E02"
          },
          {
            code: "652702",
            name: "\u963F\u62C9\u5C71\u53E3\u5E02"
          },
          {
            code: "652722",
            name: "\u7CBE\u6CB3\u53BF"
          },
          {
            code: "652723",
            name: "\u6E29\u6CC9\u53BF"
          }
        ]
      },
      {
        code: "6528",
        name: "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "652801",
            name: "\u5E93\u5C14\u52D2\u5E02"
          },
          {
            code: "652822",
            name: "\u8F6E\u53F0\u53BF"
          },
          {
            code: "652823",
            name: "\u5C09\u7281\u53BF"
          },
          {
            code: "652824",
            name: "\u82E5\u7F8C\u53BF"
          },
          {
            code: "652825",
            name: "\u4E14\u672B\u53BF"
          },
          {
            code: "652826",
            name: "\u7109\u8006\u56DE\u65CF\u81EA\u6CBB\u53BF"
          },
          {
            code: "652827",
            name: "\u548C\u9759\u53BF"
          },
          {
            code: "652828",
            name: "\u548C\u7855\u53BF"
          },
          {
            code: "652829",
            name: "\u535A\u6E56\u53BF"
          },
          {
            code: "652871",
            name: "\u5E93\u5C14\u52D2\u7ECF\u6D4E\u6280\u672F\u5F00\u53D1\u533A"
          }
        ]
      },
      {
        code: "6529",
        name: "\u963F\u514B\u82CF\u5730\u533A",
        children: [
          {
            code: "652901",
            name: "\u963F\u514B\u82CF\u5E02"
          },
          {
            code: "652902",
            name: "\u5E93\u8F66\u5E02"
          },
          {
            code: "652922",
            name: "\u6E29\u5BBF\u53BF"
          },
          {
            code: "652924",
            name: "\u6C99\u96C5\u53BF"
          },
          {
            code: "652925",
            name: "\u65B0\u548C\u53BF"
          },
          {
            code: "652926",
            name: "\u62DC\u57CE\u53BF"
          },
          {
            code: "652927",
            name: "\u4E4C\u4EC0\u53BF"
          },
          {
            code: "652928",
            name: "\u963F\u74E6\u63D0\u53BF"
          },
          {
            code: "652929",
            name: "\u67EF\u576A\u53BF"
          }
        ]
      },
      {
        code: "6530",
        name: "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "653001",
            name: "\u963F\u56FE\u4EC0\u5E02"
          },
          {
            code: "653022",
            name: "\u963F\u514B\u9676\u53BF"
          },
          {
            code: "653023",
            name: "\u963F\u5408\u5947\u53BF"
          },
          {
            code: "653024",
            name: "\u4E4C\u6070\u53BF"
          }
        ]
      },
      {
        code: "6531",
        name: "\u5580\u4EC0\u5730\u533A",
        children: [
          {
            code: "653101",
            name: "\u5580\u4EC0\u5E02"
          },
          {
            code: "653121",
            name: "\u758F\u9644\u53BF"
          },
          {
            code: "653122",
            name: "\u758F\u52D2\u53BF"
          },
          {
            code: "653123",
            name: "\u82F1\u5409\u6C99\u53BF"
          },
          {
            code: "653124",
            name: "\u6CFD\u666E\u53BF"
          },
          {
            code: "653125",
            name: "\u838E\u8F66\u53BF"
          },
          {
            code: "653126",
            name: "\u53F6\u57CE\u53BF"
          },
          {
            code: "653127",
            name: "\u9EA6\u76D6\u63D0\u53BF"
          },
          {
            code: "653128",
            name: "\u5CB3\u666E\u6E56\u53BF"
          },
          {
            code: "653129",
            name: "\u4F3D\u5E08\u53BF"
          },
          {
            code: "653130",
            name: "\u5DF4\u695A\u53BF"
          },
          {
            code: "653131",
            name: "\u5854\u4EC0\u5E93\u5C14\u5E72\u5854\u5409\u514B\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6532",
        name: "\u548C\u7530\u5730\u533A",
        children: [
          {
            code: "653201",
            name: "\u548C\u7530\u5E02"
          },
          {
            code: "653221",
            name: "\u548C\u7530\u53BF"
          },
          {
            code: "653222",
            name: "\u58A8\u7389\u53BF"
          },
          {
            code: "653223",
            name: "\u76AE\u5C71\u53BF"
          },
          {
            code: "653224",
            name: "\u6D1B\u6D66\u53BF"
          },
          {
            code: "653225",
            name: "\u7B56\u52D2\u53BF"
          },
          {
            code: "653226",
            name: "\u4E8E\u7530\u53BF"
          },
          {
            code: "653227",
            name: "\u6C11\u4E30\u53BF"
          }
        ]
      },
      {
        code: "6540",
        name: "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
        children: [
          {
            code: "654002",
            name: "\u4F0A\u5B81\u5E02"
          },
          {
            code: "654003",
            name: "\u594E\u5C6F\u5E02"
          },
          {
            code: "654004",
            name: "\u970D\u5C14\u679C\u65AF\u5E02"
          },
          {
            code: "654021",
            name: "\u4F0A\u5B81\u53BF"
          },
          {
            code: "654022",
            name: "\u5BDF\u5E03\u67E5\u5C14\u9521\u4F2F\u81EA\u6CBB\u53BF"
          },
          {
            code: "654023",
            name: "\u970D\u57CE\u53BF"
          },
          {
            code: "654024",
            name: "\u5DE9\u7559\u53BF"
          },
          {
            code: "654025",
            name: "\u65B0\u6E90\u53BF"
          },
          {
            code: "654026",
            name: "\u662D\u82CF\u53BF"
          },
          {
            code: "654027",
            name: "\u7279\u514B\u65AF\u53BF"
          },
          {
            code: "654028",
            name: "\u5C3C\u52D2\u514B\u53BF"
          }
        ]
      },
      {
        code: "6542",
        name: "\u5854\u57CE\u5730\u533A",
        children: [
          {
            code: "654201",
            name: "\u5854\u57CE\u5E02"
          },
          {
            code: "654202",
            name: "\u4E4C\u82CF\u5E02"
          },
          {
            code: "654203",
            name: "\u6C99\u6E7E\u5E02"
          },
          {
            code: "654221",
            name: "\u989D\u654F\u53BF"
          },
          {
            code: "654224",
            name: "\u6258\u91CC\u53BF"
          },
          {
            code: "654225",
            name: "\u88D5\u6C11\u53BF"
          },
          {
            code: "654226",
            name: "\u548C\u5E03\u514B\u8D5B\u5C14\u8499\u53E4\u81EA\u6CBB\u53BF"
          }
        ]
      },
      {
        code: "6543",
        name: "\u963F\u52D2\u6CF0\u5730\u533A",
        children: [
          {
            code: "654301",
            name: "\u963F\u52D2\u6CF0\u5E02"
          },
          {
            code: "654321",
            name: "\u5E03\u5C14\u6D25\u53BF"
          },
          {
            code: "654322",
            name: "\u5BCC\u8574\u53BF"
          },
          {
            code: "654323",
            name: "\u798F\u6D77\u53BF"
          },
          {
            code: "654324",
            name: "\u54C8\u5DF4\u6CB3\u53BF"
          },
          {
            code: "654325",
            name: "\u9752\u6CB3\u53BF"
          },
          {
            code: "654326",
            name: "\u5409\u6728\u4E43\u53BF"
          }
        ]
      },
      {
        code: "6590",
        name: "\u81EA\u6CBB\u533A\u76F4\u8F96\u53BF\u7EA7\u884C\u653F\u533A\u5212",
        children: [
          {
            code: "659001",
            name: "\u77F3\u6CB3\u5B50\u5E02"
          },
          {
            code: "659002",
            name: "\u963F\u62C9\u5C14\u5E02"
          },
          {
            code: "659003",
            name: "\u56FE\u6728\u8212\u514B\u5E02"
          },
          {
            code: "659004",
            name: "\u4E94\u5BB6\u6E20\u5E02"
          },
          {
            code: "659005",
            name: "\u5317\u5C6F\u5E02"
          },
          {
            code: "659006",
            name: "\u94C1\u95E8\u5173\u5E02"
          },
          {
            code: "659007",
            name: "\u53CC\u6CB3\u5E02"
          },
          {
            code: "659008",
            name: "\u53EF\u514B\u8FBE\u62C9\u5E02"
          },
          {
            code: "659009",
            name: "\u6606\u7389\u5E02"
          },
          {
            code: "659010",
            name: "\u80E1\u6768\u6CB3\u5E02"
          },
          {
            code: "659011",
            name: "\u65B0\u661F\u5E02"
          }
        ]
      }
    ]
  }
], dA = /* @__PURE__ */ ce({
  __name: "index",
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = K(_r), a = K(""), r = K(""), o = K(""), i = K([]), c = K([]);
    return he(
      () => a.value,
      (l) => {
        if (l) {
          const s = n.value.find((d) => d.code === a.value).children;
          i.value = s, r.value = "", o.value = "";
        }
      }
    ), he(
      () => r.value,
      (l) => {
        if (l) {
          const s = i.value.find((d) => d.code === r.value).children;
          c.value = s, o.value = "";
        }
      }
    ), he(
      () => o.value,
      (l) => {
        if (l) {
          let s = {
            name: n.value.find((p) => p.code === a.value).name,
            code: a.value
          }, d = {
            name: i.value.find((p) => p.code === r.value).name,
            code: r.value
          }, h = {
            name: c.value.find((p) => p.code === o.value).name,
            code: r.value
          };
          t("change", {
            province: s,
            city: d,
            area: h
          });
        }
      }
    ), (l, s) => {
      const d = G("el-option"), h = G("el-select");
      return m(), f(ne, null, [
        N(h, {
          placeholder: "\u8BF7\u9009\u62E9\u7701\u4EFD",
          modelValue: a.value,
          "onUpdate:modelValue": s[0] || (s[0] = (p) => a.value = p)
        }, {
          default: W(() => [
            (m(!0), f(ne, null, Ie(H(_r), (p) => (m(), B(d, {
              key: p.code,
              label: p.name,
              value: p.code
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        N(h, {
          style: { "margin-left": "10px" },
          placeholder: "\u8BF7\u9009\u62E9\u7701\u4EFD",
          modelValue: r.value,
          "onUpdate:modelValue": s[1] || (s[1] = (p) => r.value = p),
          disabled: !a.value
        }, {
          default: W(() => [
            (m(!0), f(ne, null, Ie(i.value, (p) => (m(), B(d, {
              key: p.code,
              label: p.name,
              value: p.code
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "disabled"]),
        N(h, {
          style: { "margin-left": "10px" },
          placeholder: "\u8BF7\u9009\u62E9\u533A/\u53BF",
          modelValue: o.value,
          "onUpdate:modelValue": s[2] || (s[2] = (p) => o.value = p),
          disabled: !r.value
        }, {
          default: W(() => [
            (m(!0), f(ne, null, Ie(c.value, (p) => (m(), B(d, {
              key: p.code,
              label: p.name,
              value: p.code
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "disabled"])
      ], 64);
    };
  }
}), uA = {
  install(e) {
    e.component("m-choose-area", dA);
  }
}, mA = { class: "trend" }, fA = { key: 1 }, hA = { class: "icon" }, vA = /* @__PURE__ */ ce({
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
    const t = e, n = v1(), a = X(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (r, o) => (m(), f("div", mA, [
      u("div", {
        class: "text",
        style: ut({ color: H(a) })
      }, [
        H(n).default ? _e(r.$slots, "default", { key: 0 }, void 0, !0) : (m(), f("div", fA, ze(e.text), 1))
      ], 4),
      u("div", hA, [
        e.type === "up" ? (m(), B(ge(`el-icon${H(we)(e.upIcon)}`), {
          key: 0,
          style: ut({ color: e.reverseColor ? "#00ff00" : e.upIconColor })
        }, null, 8, ["style"])) : (m(), B(ge(`el-icon${H(we)(e.downIcon)}`), {
          key: 1,
          style: ut({ color: e.reverseColor ? "#ff0000" : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const pA = /* @__PURE__ */ cn(vA, [["__scopeId", "data-v-b6cb77f1"]]), _A = {
  install(e) {
    e.component("m-trend", pA);
  }
}, gA = /* @__PURE__ */ ce({
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
    return (t, n) => {
      const a = G("el-badge"), r = G("el-popover");
      return m(), B(r, {
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: W(() => [
          _e(t.$slots, "default")
        ]),
        reference: W(() => [
          N(a, {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: W(() => [
              (m(), B(ge(`el-icon${H(we)(e.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
}), wA = {
  install(e) {
    e.component("m-notification", gA);
  }
}, yA = { class: "list" }, CA = /* @__PURE__ */ ce({
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
    return (t, n) => (m(), f("div", yA));
  }
}), bA = {
  install(e) {
    e.component("m-list", CA);
  }
}, $A = /* @__PURE__ */ ce({
  __name: "index",
  props: {
    list: {
      type: Array,
      require: !0
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = Yo();
    return (n, a) => {
      const r = G("el-menu-item"), o = G("el-sub-menu"), i = G("el-menu");
      return m(), B(i, rn({
        router: e.router,
        "default-active": e.defaultActive
      }, { ...H(t) }), {
        default: W(() => [
          (m(!0), f(ne, null, Ie(e.list, (c, l) => (m(), f(ne, { key: l }, [
            !c.children || !c.children.length ? (m(), B(r, {
              key: 0,
              index: c.path
            }, {
              default: W(() => [
                c.icon ? (m(), B(ge(`el-icon${H(we)(c.icon)}`), { key: 0 })) : pe("", !0),
                u("span", null, ze(c.meta.title), 1)
              ]),
              _: 2
            }, 1032, ["index"])) : (m(), B(o, {
              key: 1,
              index: c.path
            }, {
              title: W(() => [
                c.icon ? (m(), B(ge(`el-icon${H(we)(c.icon)}`), { key: 0 })) : pe("", !0),
                u("span", null, ze(c.meta.title), 1)
              ]),
              default: W(() => [
                (m(!0), f(ne, null, Ie(c.children, (s, d) => (m(), B(r, {
                  key: d,
                  index: c.path
                }, {
                  default: W(() => [
                    s.icon ? (m(), B(ge(`el-icon${H(we)(s.icon)}`), { key: 0 })) : pe("", !0),
                    u("span", null, ze(s.meta.title), 1)
                  ]),
                  _: 2
                }, 1032, ["index"]))), 128))
              ]),
              _: 2
            }, 1032, ["index"]))
          ], 64))), 128))
        ]),
        _: 1
      }, 16, ["router", "default-active"]);
    };
  }
});
const EA = /* @__PURE__ */ cn($A, [["__scopeId", "data-v-e2d54a87"]]);
function xA(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !fa(e);
}
const SA = ce({
  props: {
    list: {
      type: Array,
      require: !0,
      default: () => []
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    let n = Yo(), a = (r) => r.map((o) => {
      o.i = Xo[o.icon];
      let i = {
        title: () => N(ne, null, [o.i ? N(o.i, null, null) : "", N("span", null, [o.meta.title])])
      };
      return o.children && o.children.length ? N(G("el-sub-menu"), {
        index: o.path
      }, {
        default: () => [a(o.children)],
        ...i
      }) : N(G("el-menu-item"), rn({
        index: o.path
      }, n), {
        default: () => [o.i ? N(o.i, null, null) : "", N("span", null, [o.meta.title])]
      });
    });
    return () => {
      let r;
      return N(G("el-menu"), {
        "default-active": e.defaultActive,
        router: e.router
      }, xA(r = a(e.list)) ? r : {
        default: () => [r]
      });
    };
  }
}), zA = {
  install(e) {
    e.component("m-menu", EA), e.component("m-infinite-menu", SA);
  }
}, MA = /* @__PURE__ */ ce({
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
  setup(e) {
    const t = e, n = K(0);
    return p1(
      () => {
        if (t.isAnimation) {
          let a = Math.ceil(t.time / t.percentage), r = setInterval(() => {
            n.value += 1, n.value >= t.percentage && (n.value = t.percentage, clearInterval(r));
          }, a);
        } else
          n.value = t.percentage;
      }
    ), (a, r) => {
      const o = G("el-progress");
      return m(), B(o, rn({ percentage: n.value }, a.$attrs), null, 16, ["percentage"]);
    };
  }
}), DA = {
  install(e) {
    e.component("m-progress", MA);
  }
};
function HA() {
  this.__data__ = [], this.size = 0;
}
var TA = HA;
function RA(e, t) {
  return e === t || e !== e && t !== t;
}
var l2 = RA, VA = l2;
function AA(e, t) {
  for (var n = e.length; n--; )
    if (VA(e[n][0], t))
      return n;
  return -1;
}
var ln = AA, kA = ln, IA = Array.prototype, LA = IA.splice;
function PA(e) {
  var t = this.__data__, n = kA(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : LA.call(t, n, 1), --this.size, !0;
}
var BA = PA, OA = ln;
function NA(e) {
  var t = this.__data__, n = OA(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var FA = NA, UA = ln;
function WA(e) {
  return UA(this.__data__, e) > -1;
}
var jA = WA, qA = ln;
function GA(e, t) {
  var n = this.__data__, a = qA(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
var YA = GA, ZA = TA, XA = BA, KA = FA, QA = jA, JA = YA;
function et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
et.prototype.clear = ZA;
et.prototype.delete = XA;
et.prototype.get = KA;
et.prototype.has = QA;
et.prototype.set = JA;
var sn = et, ek = sn;
function tk() {
  this.__data__ = new ek(), this.size = 0;
}
var nk = tk;
function ak(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var rk = ak;
function ok(e) {
  return this.__data__.get(e);
}
var ik = ok;
function ck(e) {
  return this.__data__.has(e);
}
var lk = ck, sk = typeof Mt == "object" && Mt && Mt.Object === Object && Mt, s2 = sk, dk = s2, uk = typeof self == "object" && self && self.Object === Object && self, mk = dk || uk || Function("return this")(), ve = mk, fk = ve, hk = fk.Symbol, $a = hk, gr = $a, d2 = Object.prototype, vk = d2.hasOwnProperty, pk = d2.toString, dt = gr ? gr.toStringTag : void 0;
function _k(e) {
  var t = vk.call(e, dt), n = e[dt];
  try {
    e[dt] = void 0;
    var a = !0;
  } catch {
  }
  var r = pk.call(e);
  return a && (t ? e[dt] = n : delete e[dt]), r;
}
var gk = _k, wk = Object.prototype, yk = wk.toString;
function Ck(e) {
  return yk.call(e);
}
var bk = Ck, wr = $a, $k = gk, Ek = bk, xk = "[object Null]", Sk = "[object Undefined]", yr = wr ? wr.toStringTag : void 0;
function zk(e) {
  return e == null ? e === void 0 ? Sk : xk : yr && yr in Object(e) ? $k(e) : Ek(e);
}
var dn = zk;
function Mk(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $t = Mk, Dk = dn, Hk = $t, Tk = "[object AsyncFunction]", Rk = "[object Function]", Vk = "[object GeneratorFunction]", Ak = "[object Proxy]";
function kk(e) {
  if (!Hk(e))
    return !1;
  var t = Dk(e);
  return t == Rk || t == Vk || t == Tk || t == Ak;
}
var u2 = kk, Ik = ve, Lk = Ik["__core-js_shared__"], Pk = Lk, xn = Pk, Cr = function() {
  var e = /[^.]+$/.exec(xn && xn.keys && xn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bk(e) {
  return !!Cr && Cr in e;
}
var Ok = Bk, Nk = Function.prototype, Fk = Nk.toString;
function Uk(e) {
  if (e != null) {
    try {
      return Fk.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var m2 = Uk, Wk = u2, jk = Ok, qk = $t, Gk = m2, Yk = /[\\^$.*+?()[\]{}|]/g, Zk = /^\[object .+?Constructor\]$/, Xk = Function.prototype, Kk = Object.prototype, Qk = Xk.toString, Jk = Kk.hasOwnProperty, eI = RegExp(
  "^" + Qk.call(Jk).replace(Yk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tI(e) {
  if (!qk(e) || jk(e))
    return !1;
  var t = Wk(e) ? eI : Zk;
  return t.test(Gk(e));
}
var nI = tI;
function aI(e, t) {
  return e == null ? void 0 : e[t];
}
var rI = aI, oI = nI, iI = rI;
function cI(e, t) {
  var n = iI(e, t);
  return oI(n) ? n : void 0;
}
var Ne = cI, lI = Ne, sI = ve, dI = lI(sI, "Map"), Ea = dI, uI = Ne, mI = uI(Object, "create"), un = mI, br = un;
function fI() {
  this.__data__ = br ? br(null) : {}, this.size = 0;
}
var hI = fI;
function vI(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var pI = vI, _I = un, gI = "__lodash_hash_undefined__", wI = Object.prototype, yI = wI.hasOwnProperty;
function CI(e) {
  var t = this.__data__;
  if (_I) {
    var n = t[e];
    return n === gI ? void 0 : n;
  }
  return yI.call(t, e) ? t[e] : void 0;
}
var bI = CI, $I = un, EI = Object.prototype, xI = EI.hasOwnProperty;
function SI(e) {
  var t = this.__data__;
  return $I ? t[e] !== void 0 : xI.call(t, e);
}
var zI = SI, MI = un, DI = "__lodash_hash_undefined__";
function HI(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = MI && t === void 0 ? DI : t, this;
}
var TI = HI, RI = hI, VI = pI, AI = bI, kI = zI, II = TI;
function tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
tt.prototype.clear = RI;
tt.prototype.delete = VI;
tt.prototype.get = AI;
tt.prototype.has = kI;
tt.prototype.set = II;
var LI = tt, $r = LI, PI = sn, BI = Ea;
function OI() {
  this.size = 0, this.__data__ = {
    hash: new $r(),
    map: new (BI || PI)(),
    string: new $r()
  };
}
var NI = OI;
function FI(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var UI = FI, WI = UI;
function jI(e, t) {
  var n = e.__data__;
  return WI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mn = jI, qI = mn;
function GI(e) {
  var t = qI(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var YI = GI, ZI = mn;
function XI(e) {
  return ZI(this, e).get(e);
}
var KI = XI, QI = mn;
function JI(e) {
  return QI(this, e).has(e);
}
var eL = JI, tL = mn;
function nL(e, t) {
  var n = tL(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
var aL = nL, rL = NI, oL = YI, iL = KI, cL = eL, lL = aL;
function nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
nt.prototype.clear = rL;
nt.prototype.delete = oL;
nt.prototype.get = iL;
nt.prototype.has = cL;
nt.prototype.set = lL;
var sL = nt, dL = sn, uL = Ea, mL = sL, fL = 200;
function hL(e, t) {
  var n = this.__data__;
  if (n instanceof dL) {
    var a = n.__data__;
    if (!uL || a.length < fL - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new mL(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
var vL = hL, pL = sn, _L = nk, gL = rk, wL = ik, yL = lk, CL = vL;
function at(e) {
  var t = this.__data__ = new pL(e);
  this.size = t.size;
}
at.prototype.clear = _L;
at.prototype.delete = gL;
at.prototype.get = wL;
at.prototype.has = yL;
at.prototype.set = CL;
var bL = at;
function $L(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var EL = $L, xL = Ne, SL = function() {
  try {
    var e = xL(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), zL = SL, Er = zL;
function ML(e, t, n) {
  t == "__proto__" && Er ? Er(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var f2 = ML, DL = f2, HL = l2, TL = Object.prototype, RL = TL.hasOwnProperty;
function VL(e, t, n) {
  var a = e[t];
  (!(RL.call(e, t) && HL(a, n)) || n === void 0 && !(t in e)) && DL(e, t, n);
}
var h2 = VL, AL = h2, kL = f2;
function IL(e, t, n, a) {
  var r = !n;
  n || (n = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var c = t[o], l = a ? a(n[c], e[c], c, n, e) : void 0;
    l === void 0 && (l = e[c]), r ? kL(n, c, l) : AL(n, c, l);
  }
  return n;
}
var fn = IL;
function LL(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var PL = LL;
function BL(e) {
  return e != null && typeof e == "object";
}
var Et = BL, OL = dn, NL = Et, FL = "[object Arguments]";
function UL(e) {
  return NL(e) && OL(e) == FL;
}
var WL = UL, xr = WL, jL = Et, v2 = Object.prototype, qL = v2.hasOwnProperty, GL = v2.propertyIsEnumerable, YL = xr(function() {
  return arguments;
}()) ? xr : function(e) {
  return jL(e) && qL.call(e, "callee") && !GL.call(e, "callee");
}, ZL = YL, XL = Array.isArray, xa = XL, Ut = { exports: {} };
function KL() {
  return !1;
}
var QL = KL;
(function(e, t) {
  var n = ve, a = QL, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, i = o && o.exports === r, c = i ? n.Buffer : void 0, l = c ? c.isBuffer : void 0, s = l || a;
  e.exports = s;
})(Ut, Ut.exports);
var JL = 9007199254740991, eP = /^(?:0|[1-9]\d*)$/;
function tP(e, t) {
  var n = typeof e;
  return t = t == null ? JL : t, !!t && (n == "number" || n != "symbol" && eP.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var nP = tP, aP = 9007199254740991;
function rP(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aP;
}
var p2 = rP, oP = dn, iP = p2, cP = Et, lP = "[object Arguments]", sP = "[object Array]", dP = "[object Boolean]", uP = "[object Date]", mP = "[object Error]", fP = "[object Function]", hP = "[object Map]", vP = "[object Number]", pP = "[object Object]", _P = "[object RegExp]", gP = "[object Set]", wP = "[object String]", yP = "[object WeakMap]", CP = "[object ArrayBuffer]", bP = "[object DataView]", $P = "[object Float32Array]", EP = "[object Float64Array]", xP = "[object Int8Array]", SP = "[object Int16Array]", zP = "[object Int32Array]", MP = "[object Uint8Array]", DP = "[object Uint8ClampedArray]", HP = "[object Uint16Array]", TP = "[object Uint32Array]", O = {};
O[$P] = O[EP] = O[xP] = O[SP] = O[zP] = O[MP] = O[DP] = O[HP] = O[TP] = !0;
O[lP] = O[sP] = O[CP] = O[dP] = O[bP] = O[uP] = O[mP] = O[fP] = O[hP] = O[vP] = O[pP] = O[_P] = O[gP] = O[wP] = O[yP] = !1;
function RP(e) {
  return cP(e) && iP(e.length) && !!O[oP(e)];
}
var VP = RP;
function AP(e) {
  return function(t) {
    return e(t);
  };
}
var Sa = AP, gt = { exports: {} };
(function(e, t) {
  var n = s2, a = t && !t.nodeType && t, r = a && !0 && e && !e.nodeType && e, o = r && r.exports === a, i = o && n.process, c = function() {
    try {
      var l = r && r.require && r.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(gt, gt.exports);
var kP = VP, IP = Sa, Sr = gt.exports, zr = Sr && Sr.isTypedArray, LP = zr ? IP(zr) : kP, PP = LP, BP = PL, OP = ZL, NP = xa, FP = Ut.exports, UP = nP, WP = PP, jP = Object.prototype, qP = jP.hasOwnProperty;
function GP(e, t) {
  var n = NP(e), a = !n && OP(e), r = !n && !a && FP(e), o = !n && !a && !r && WP(e), i = n || a || r || o, c = i ? BP(e.length, String) : [], l = c.length;
  for (var s in e)
    (t || qP.call(e, s)) && !(i && (s == "length" || r && (s == "offset" || s == "parent") || o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || UP(s, l))) && c.push(s);
  return c;
}
var _2 = GP, YP = Object.prototype;
function ZP(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || YP;
  return e === n;
}
var za = ZP;
function XP(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var g2 = XP, KP = g2, QP = KP(Object.keys, Object), JP = QP, eB = za, tB = JP, nB = Object.prototype, aB = nB.hasOwnProperty;
function rB(e) {
  if (!eB(e))
    return tB(e);
  var t = [];
  for (var n in Object(e))
    aB.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var oB = rB, iB = u2, cB = p2;
function lB(e) {
  return e != null && cB(e.length) && !iB(e);
}
var w2 = lB, sB = _2, dB = oB, uB = w2;
function mB(e) {
  return uB(e) ? sB(e) : dB(e);
}
var Ma = mB, fB = fn, hB = Ma;
function vB(e, t) {
  return e && fB(t, hB(t), e);
}
var pB = vB;
function _B(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var gB = _B, wB = $t, yB = za, CB = gB, bB = Object.prototype, $B = bB.hasOwnProperty;
function EB(e) {
  if (!wB(e))
    return CB(e);
  var t = yB(e), n = [];
  for (var a in e)
    a == "constructor" && (t || !$B.call(e, a)) || n.push(a);
  return n;
}
var xB = EB, SB = _2, zB = xB, MB = w2;
function DB(e) {
  return MB(e) ? SB(e, !0) : zB(e);
}
var Da = DB, HB = fn, TB = Da;
function RB(e, t) {
  return e && HB(t, TB(t), e);
}
var VB = RB, qn = { exports: {} };
(function(e, t) {
  var n = ve, a = t && !t.nodeType && t, r = a && !0 && e && !e.nodeType && e, o = r && r.exports === a, i = o ? n.Buffer : void 0, c = i ? i.allocUnsafe : void 0;
  function l(s, d) {
    if (d)
      return s.slice();
    var h = s.length, p = c ? c(h) : new s.constructor(h);
    return s.copy(p), p;
  }
  e.exports = l;
})(qn, qn.exports);
function AB(e, t) {
  var n = -1, a = e.length;
  for (t || (t = Array(a)); ++n < a; )
    t[n] = e[n];
  return t;
}
var kB = AB;
function IB(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = 0, o = []; ++n < a; ) {
    var i = e[n];
    t(i, n, e) && (o[r++] = i);
  }
  return o;
}
var LB = IB;
function PB() {
  return [];
}
var y2 = PB, BB = LB, OB = y2, NB = Object.prototype, FB = NB.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, UB = Mr ? function(e) {
  return e == null ? [] : (e = Object(e), BB(Mr(e), function(t) {
    return FB.call(e, t);
  }));
} : OB, Ha = UB, WB = fn, jB = Ha;
function qB(e, t) {
  return WB(e, jB(e), t);
}
var GB = qB;
function YB(e, t) {
  for (var n = -1, a = t.length, r = e.length; ++n < a; )
    e[r + n] = t[n];
  return e;
}
var C2 = YB, ZB = g2, XB = ZB(Object.getPrototypeOf, Object), b2 = XB, KB = C2, QB = b2, JB = Ha, eO = y2, tO = Object.getOwnPropertySymbols, nO = tO ? function(e) {
  for (var t = []; e; )
    KB(t, JB(e)), e = QB(e);
  return t;
} : eO, $2 = nO, aO = fn, rO = $2;
function oO(e, t) {
  return aO(e, rO(e), t);
}
var iO = oO, cO = C2, lO = xa;
function sO(e, t, n) {
  var a = t(e);
  return lO(e) ? a : cO(a, n(e));
}
var E2 = sO, dO = E2, uO = Ha, mO = Ma;
function fO(e) {
  return dO(e, mO, uO);
}
var hO = fO, vO = E2, pO = $2, _O = Da;
function gO(e) {
  return vO(e, _O, pO);
}
var wO = gO, yO = Ne, CO = ve, bO = yO(CO, "DataView"), $O = bO, EO = Ne, xO = ve, SO = EO(xO, "Promise"), zO = SO, MO = Ne, DO = ve, HO = MO(DO, "Set"), TO = HO, RO = Ne, VO = ve, AO = RO(VO, "WeakMap"), kO = AO, Gn = $O, Yn = Ea, Zn = zO, Xn = TO, Kn = kO, x2 = dn, rt = m2, Dr = "[object Map]", IO = "[object Object]", Hr = "[object Promise]", Tr = "[object Set]", Rr = "[object WeakMap]", Vr = "[object DataView]", LO = rt(Gn), PO = rt(Yn), BO = rt(Zn), OO = rt(Xn), NO = rt(Kn), Ve = x2;
(Gn && Ve(new Gn(new ArrayBuffer(1))) != Vr || Yn && Ve(new Yn()) != Dr || Zn && Ve(Zn.resolve()) != Hr || Xn && Ve(new Xn()) != Tr || Kn && Ve(new Kn()) != Rr) && (Ve = function(e) {
  var t = x2(e), n = t == IO ? e.constructor : void 0, a = n ? rt(n) : "";
  if (a)
    switch (a) {
      case LO:
        return Vr;
      case PO:
        return Dr;
      case BO:
        return Hr;
      case OO:
        return Tr;
      case NO:
        return Rr;
    }
  return t;
});
var Ta = Ve, FO = Object.prototype, UO = FO.hasOwnProperty;
function WO(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && UO.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var jO = WO, qO = ve, GO = qO.Uint8Array, YO = GO, Ar = YO;
function ZO(e) {
  var t = new e.constructor(e.byteLength);
  return new Ar(t).set(new Ar(e)), t;
}
var Ra = ZO, XO = Ra;
function KO(e, t) {
  var n = t ? XO(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var QO = KO, JO = /\w*$/;
function eN(e) {
  var t = new e.constructor(e.source, JO.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var tN = eN, kr = $a, Ir = kr ? kr.prototype : void 0, Lr = Ir ? Ir.valueOf : void 0;
function nN(e) {
  return Lr ? Object(Lr.call(e)) : {};
}
var aN = nN, rN = Ra;
function oN(e, t) {
  var n = t ? rN(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var iN = oN, cN = Ra, lN = QO, sN = tN, dN = aN, uN = iN, mN = "[object Boolean]", fN = "[object Date]", hN = "[object Map]", vN = "[object Number]", pN = "[object RegExp]", _N = "[object Set]", gN = "[object String]", wN = "[object Symbol]", yN = "[object ArrayBuffer]", CN = "[object DataView]", bN = "[object Float32Array]", $N = "[object Float64Array]", EN = "[object Int8Array]", xN = "[object Int16Array]", SN = "[object Int32Array]", zN = "[object Uint8Array]", MN = "[object Uint8ClampedArray]", DN = "[object Uint16Array]", HN = "[object Uint32Array]";
function TN(e, t, n) {
  var a = e.constructor;
  switch (t) {
    case yN:
      return cN(e);
    case mN:
    case fN:
      return new a(+e);
    case CN:
      return lN(e, n);
    case bN:
    case $N:
    case EN:
    case xN:
    case SN:
    case zN:
    case MN:
    case DN:
    case HN:
      return uN(e, n);
    case hN:
      return new a();
    case vN:
    case gN:
      return new a(e);
    case pN:
      return sN(e);
    case _N:
      return new a();
    case wN:
      return dN(e);
  }
}
var RN = TN, VN = $t, Pr = Object.create, AN = function() {
  function e() {
  }
  return function(t) {
    if (!VN(t))
      return {};
    if (Pr)
      return Pr(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), kN = AN, IN = kN, LN = b2, PN = za;
function BN(e) {
  return typeof e.constructor == "function" && !PN(e) ? IN(LN(e)) : {};
}
var ON = BN, NN = Ta, FN = Et, UN = "[object Map]";
function WN(e) {
  return FN(e) && NN(e) == UN;
}
var jN = WN, qN = jN, GN = Sa, Br = gt.exports, Or = Br && Br.isMap, YN = Or ? GN(Or) : qN, ZN = YN, XN = Ta, KN = Et, QN = "[object Set]";
function JN(e) {
  return KN(e) && XN(e) == QN;
}
var eF = JN, tF = eF, nF = Sa, Nr = gt.exports, Fr = Nr && Nr.isSet, aF = Fr ? nF(Fr) : tF, rF = aF, oF = bL, iF = EL, cF = h2, lF = pB, sF = VB, dF = qn.exports, uF = kB, mF = GB, fF = iO, hF = hO, vF = wO, pF = Ta, _F = jO, gF = RN, wF = ON, yF = xa, CF = Ut.exports, bF = ZN, $F = $t, EF = rF, xF = Ma, SF = Da, zF = 1, MF = 2, DF = 4, S2 = "[object Arguments]", HF = "[object Array]", TF = "[object Boolean]", RF = "[object Date]", VF = "[object Error]", z2 = "[object Function]", AF = "[object GeneratorFunction]", kF = "[object Map]", IF = "[object Number]", M2 = "[object Object]", LF = "[object RegExp]", PF = "[object Set]", BF = "[object String]", OF = "[object Symbol]", NF = "[object WeakMap]", FF = "[object ArrayBuffer]", UF = "[object DataView]", WF = "[object Float32Array]", jF = "[object Float64Array]", qF = "[object Int8Array]", GF = "[object Int16Array]", YF = "[object Int32Array]", ZF = "[object Uint8Array]", XF = "[object Uint8ClampedArray]", KF = "[object Uint16Array]", QF = "[object Uint32Array]", P = {};
P[S2] = P[HF] = P[FF] = P[UF] = P[TF] = P[RF] = P[WF] = P[jF] = P[qF] = P[GF] = P[YF] = P[kF] = P[IF] = P[M2] = P[LF] = P[PF] = P[BF] = P[OF] = P[ZF] = P[XF] = P[KF] = P[QF] = !0;
P[VF] = P[z2] = P[NF] = !1;
function kt(e, t, n, a, r, o) {
  var i, c = t & zF, l = t & MF, s = t & DF;
  if (n && (i = r ? n(e, a, r, o) : n(e)), i !== void 0)
    return i;
  if (!$F(e))
    return e;
  var d = yF(e);
  if (d) {
    if (i = _F(e), !c)
      return uF(e, i);
  } else {
    var h = pF(e), p = h == z2 || h == AF;
    if (CF(e))
      return dF(e, c);
    if (h == M2 || h == S2 || p && !r) {
      if (i = l || p ? {} : wF(e), !c)
        return l ? fF(e, sF(i, e)) : mF(e, lF(i, e));
    } else {
      if (!P[h])
        return r ? e : {};
      i = gF(e, h, c);
    }
  }
  o || (o = new oF());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, i), EF(e) ? e.forEach(function(C) {
    i.add(kt(C, t, n, C, e, o));
  }) : bF(e) && e.forEach(function(C, y) {
    i.set(y, kt(C, t, n, y, e, o));
  });
  var _ = s ? l ? vF : hF : l ? SF : xF, b = d ? void 0 : _(e);
  return iF(b || e, function(C, y) {
    b && (y = C, C = e[y]), cF(i, y, kt(C, t, n, y, e, o));
  }), i;
}
var JF = kt, eU = JF, tU = 1, nU = 4;
function aU(e) {
  return eU(e, tU | nU);
}
var Ur = aU;
const rU = { class: "icons" }, oU = { key: 1 }, iU = /* @__PURE__ */ ce({
  __name: "index",
  props: {
    options: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    elementLoadingText: {
      type: String
    },
    elementLoadingSpinner: {
      type: String
    },
    elementLoadingBackground: {
      type: String
    },
    elementLoadingSvg: {
      type: String
    },
    elementLoadingSvgBox: {
      type: String
    },
    cellEditIcon: {
      type: String,
      default: "Edit"
    },
    isEditRow: {
      type: Boolean,
      default: !1
    },
    editRowIndex: {
      type: String,
      default: ""
    },
    pagination: {
      type: Boolean,
      default: !1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: [10, 20, 50, 100]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    paginationAlign: {
      type: String,
      default: "left"
    }
  },
  emits: [
    "cell-confirm",
    "cell-cancel",
    "update: editRowIndex",
    "sizeChange",
    "currentChange"
  ],
  setup(e, { emit: t }) {
    const n = e;
    let a = X(() => n.options.filter((C) => !C.action)), r = X(() => n.options.find((C) => C.action));
    const o = K(Ur(n.data)), i = K(n.editRowIndex), c = X(() => !n.data || !n.data.length), l = K(""), s = (C) => {
      o.value.map((y) => {
        y.rowEdit = !1;
      }), t("update: editRowIndex", ""), l.value = C.$index + C.column.id;
    }, d = (C) => {
      l.value = "", t("cell-confirm", C);
    }, h = (C) => {
      l.value = "", t("cell-cancel", C);
    }, p = (C, y) => {
      y.label === r.value.label && n.isEditRow && i.value === n.editRowIndex && (l.value = "", C.rowEdit = !C.rowEdit, o.value.map((x) => {
        x !== C && (x.rowEdit = !1);
      }), C.rowEdit || t("update: editRowIndex", ""));
    }, g = (C) => {
      t("sizeChange", C);
    }, _ = (C) => {
      t("currentChange", C);
    }, b = X(() => n.paginationAlign === "left" ? "flex-start" : n.paginationAlign === "center" ? "center" : "flex-end");
    return he(
      () => n.data,
      (C) => {
        o.value = Ur(C), o.value.map((y) => {
          y.rowEdit = !1;
        });
      },
      {
        deep: !0
      }
    ), he(
      () => n.editRowIndex,
      (C) => {
        C && (i.value = C);
      }
    ), an(() => {
      o.value.map((C) => {
        C.rowEdit = !1;
      });
    }), (C, y) => {
      const x = G("el-input"), z = G("el-col"), S = G("el-icon-check"), V = G("el-icon-close"), T = G("el-row"), A = G("el-table-column"), R = G("el-table"), Y = G("el-pagination"), Z = _1("loading");
      return m(), f(ne, null, [
        ma((m(), B(R, {
          data: o.value,
          "element-loading-text": e.elementLoadingText,
          "element-loading-spinner": e.elementLoadingSpinner,
          "element-loading-background": e.elementLoadingBackground,
          "element-loading-svg": e.elementLoadingSvg,
          "element-loading-svg-box": e.elementLoadingSvgBox,
          onRowClick: p
        }, {
          default: W(() => [
            (m(!0), f(ne, null, Ie(H(a), (L, te) => (m(), B(A, {
              key: te,
              label: L.label,
              prop: L.prop,
              align: L.align,
              width: L.width
            }, {
              default: W((Q) => [
                Q.row.rowEdit ? (m(), B(x, {
                  key: 0,
                  size: "small",
                  modelValue: Q.row[L.prop],
                  "onUpdate:modelValue": (se) => Q.row[L.prop] = se
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (m(), f(ne, { key: 1 }, [
                  Q.$index + Q.column.id === l.value ? (m(), B(T, {
                    key: 0,
                    flex: ""
                  }, {
                    default: W(() => [
                      N(z, { span: 18 }, {
                        default: W(() => [
                          N(x, {
                            size: "small",
                            modelValue: Q.row[L.prop],
                            "onUpdate:modelValue": (se) => Q.row[L.prop] = se
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      N(z, { span: 6 }, {
                        default: W(() => [
                          u("div", rU, [
                            N(S, {
                              class: "check",
                              onClick: At((se) => d(Q), ["stop"])
                            }, null, 8, ["onClick"]),
                            N(V, {
                              class: "close",
                              onClick: At((se) => h(Q), ["stop"])
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : (m(), f(ne, { key: 1 }, [
                    L.slot ? _e(C.$slots, L.slot, {
                      key: 0,
                      scope: Q
                    }, void 0, !0) : (m(), f("span", oU, ze(Q.row[L.prop]), 1)),
                    L.editable ? (m(), B(ge(`el-icon${H(we)(e.cellEditIcon)}`), {
                      key: 2,
                      "el-icon-edit": "",
                      onClick: At((se) => s(Q), ["stop"])
                    }, null, 8, ["onClick"])) : pe("", !0)
                  ], 64))
                ], 64))
              ]),
              _: 2
            }, 1032, ["label", "prop", "align", "width"]))), 128)),
            N(A, {
              label: H(r).label,
              align: H(r).align,
              width: H(r).width
            }, {
              default: W((L) => [
                L.row.isEditRow ? _e(C.$slots, "editRow", {
                  key: 0,
                  scope: L
                }, void 0, !0) : _e(C.$slots, "action", {
                  key: 1,
                  scope: L
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["label", "align", "width"])
          ]),
          _: 3
        }, 8, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-box"])), [
          [Z, H(c)]
        ]),
        e.pagination ? (m(), f("div", {
          key: 0,
          class: "pagination",
          style: ut({ justifyContent: H(b) })
        }, [
          N(Y, {
            currentPage: e.currentPage,
            "onUpdate:currentPage": y[0] || (y[0] = (L) => Fn(currentPage) ? currentPage.value = L : null),
            "page-size": e.pageSize,
            "onUpdate:page-size": y[1] || (y[1] = (L) => Fn(pageSize) ? pageSize.value = L : null),
            "page-sizes": e.pageSizes,
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: g,
            onCurrentChange: _
          }, null, 8, ["currentPage", "page-size", "page-sizes", "total"])
        ], 4)) : pe("", !0)
      ], 64);
    };
  }
});
const cU = /* @__PURE__ */ cn(iU, [["__scopeId", "data-v-d09a870e"]]), lU = {
  install(e) {
    e.component("m-table", cU);
  }
};
var Qn = function(e, t) {
  return Qn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
    n.__proto__ = a;
  } || function(n, a) {
    for (var r in a)
      Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  }, Qn(e, t);
};
function M(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Qn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var w = function() {
  return w = Object.assign || function(t) {
    for (var n, a = 1, r = arguments.length; a < r; a++) {
      n = arguments[a];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, w.apply(this, arguments);
};
function j(e, t, n) {
  if (n || arguments.length === 2)
    for (var a = 0, r = t.length, o; a < r; a++)
      (o || !(a in t)) && (o || (o = Array.prototype.slice.call(t, 0, a)), o[a] = t[a]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var hn, D, D2, mt, Wr, H2, Wt = {}, T2 = [], sU = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ee(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function R2(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Me(e, t, n) {
  var a, r, o, i = {};
  for (o in t)
    o == "key" ? a = t[o] : o == "ref" ? r = t[o] : i[o] = t[o];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? hn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      i[o] === void 0 && (i[o] = e.defaultProps[o]);
  return It(e, i, a, r, null);
}
function It(e, t, n, a, r) {
  var o = { type: e, props: t, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++D2 : r };
  return r == null && D.vnode != null && D.vnode(o), o;
}
function dU() {
  return { current: null };
}
function De(e) {
  return e.children;
}
function de(e, t) {
  this.props = e, this.context = t;
}
function Xe(e, t) {
  if (t == null)
    return e.__ ? Xe(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Xe(e) : null;
}
function V2(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return V2(e);
  }
}
function Jn(e) {
  (!e.__d && (e.__d = !0) && mt.push(e) && !jt.__r++ || Wr !== D.debounceRendering) && ((Wr = D.debounceRendering) || setTimeout)(jt);
}
function jt() {
  for (var e; jt.__r = mt.length; )
    e = mt.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), mt = [], e.some(function(t) {
      var n, a, r, o, i, c;
      t.__d && (i = (o = (n = t).__v).__e, (c = n.__P) && (a = [], (r = Ee({}, o)).__v = o.__v + 1, Va(c, o, r, n.__n, c.ownerSVGElement !== void 0, o.__h != null ? [i] : null, a, i == null ? Xe(o) : i, o.__h), L2(a, o), o.__e != i && V2(o)));
    });
}
function A2(e, t, n, a, r, o, i, c, l, s) {
  var d, h, p, g, _, b, C, y = a && a.__k || T2, x = y.length;
  for (n.__k = [], d = 0; d < t.length; d++)
    if ((g = n.__k[d] = (g = t[d]) == null || typeof g == "boolean" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? It(null, g, null, null, g) : Array.isArray(g) ? It(De, { children: g }, null, null, null) : g.__b > 0 ? It(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null) {
      if (g.__ = n, g.__b = n.__b + 1, (p = y[d]) === null || p && g.key == p.key && g.type === p.type)
        y[d] = void 0;
      else
        for (h = 0; h < x; h++) {
          if ((p = y[h]) && g.key == p.key && g.type === p.type) {
            y[h] = void 0;
            break;
          }
          p = null;
        }
      Va(e, g, p = p || Wt, r, o, i, c, l, s), _ = g.__e, (h = g.ref) && p.ref != h && (C || (C = []), p.ref && C.push(p.ref, null, g), C.push(h, g.__c || _, g)), _ != null ? (b == null && (b = _), typeof g.type == "function" && g.__k === p.__k ? g.__d = l = k2(g, l, e) : l = I2(e, g, p, y, _, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != e && (l = Xe(p));
    }
  for (n.__e = b, d = x; d--; )
    y[d] != null && (typeof n.type == "function" && y[d].__e != null && y[d].__e == n.__d && (n.__d = Xe(a, d + 1)), B2(y[d], y[d]));
  if (C)
    for (d = 0; d < C.length; d++)
      P2(C[d], C[++d], C[++d]);
}
function k2(e, t, n) {
  for (var a, r = e.__k, o = 0; r && o < r.length; o++)
    (a = r[o]) && (a.__ = e, t = typeof a.type == "function" ? k2(a, t, n) : I2(n, a, a, r, a.__e, t));
  return t;
}
function qt(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    qt(n, t);
  }) : t.push(e)), t;
}
function I2(e, t, n, a, r, o) {
  var i, c, l;
  if (t.__d !== void 0)
    i = t.__d, t.__d = void 0;
  else if (n == null || r != o || r.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(r), i = null;
      else {
        for (c = o, l = 0; (c = c.nextSibling) && l < a.length; l += 2)
          if (c == r)
            break e;
        e.insertBefore(r, o), i = o;
      }
  return i !== void 0 ? i : r.nextSibling;
}
function uU(e, t, n, a, r) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Gt(e, o, null, n[o], a);
  for (o in t)
    r && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Gt(e, o, t[o], n[o], a);
}
function jr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || sU.test(t) ? n : n + "px";
}
function Gt(e, t, n, a, r) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof a == "string" && (e.style.cssText = a = ""), a)
          for (t in a)
            n && t in n || jr(e.style, t, "");
        if (n)
          for (t in n)
            a && n[t] === a[t] || jr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? a || e.addEventListener(t, o ? Gr : qr, o) : e.removeEventListener(t, o ? Gr : qr, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function qr(e) {
  this.l[e.type + !1](D.event ? D.event(e) : e);
}
function Gr(e) {
  this.l[e.type + !0](D.event ? D.event(e) : e);
}
function Va(e, t, n, a, r, o, i, c, l) {
  var s, d, h, p, g, _, b, C, y, x, z, S, V, T = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, c = t.__e = n.__e, t.__h = null, o = [c]), (s = D.__b) && s(t);
  try {
    e:
      if (typeof T == "function") {
        if (C = t.props, y = (s = T.contextType) && a[s.__c], x = s ? y ? y.props.value : s.__ : a, n.__c ? b = (d = t.__c = n.__c).__ = d.__E : ("prototype" in T && T.prototype.render ? t.__c = d = new T(C, x) : (t.__c = d = new de(C, x), d.constructor = T, d.render = fU), y && y.sub(d), d.props = C, d.state || (d.state = {}), d.context = x, d.__n = a, h = d.__d = !0, d.__h = []), d.__s == null && (d.__s = d.state), T.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = Ee({}, d.__s)), Ee(d.__s, T.getDerivedStateFromProps(C, d.__s))), p = d.props, g = d.state, h)
          T.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && C !== p && d.componentWillReceiveProps != null && d.componentWillReceiveProps(C, x), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(C, d.__s, x) === !1 || t.__v === n.__v) {
            d.props = C, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), d.__h.length && i.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(C, d.__s, x), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(p, g, _);
          });
        }
        if (d.context = x, d.props = C, d.__v = t, d.__P = e, z = D.__r, S = 0, "prototype" in T && T.prototype.render)
          d.state = d.__s, d.__d = !1, z && z(t), s = d.render(d.props, d.state, d.context);
        else
          do
            d.__d = !1, z && z(t), s = d.render(d.props, d.state, d.context), d.state = d.__s;
          while (d.__d && ++S < 25);
        d.state = d.__s, d.getChildContext != null && (a = Ee(Ee({}, a), d.getChildContext())), h || d.getSnapshotBeforeUpdate == null || (_ = d.getSnapshotBeforeUpdate(p, g)), V = s != null && s.type === De && s.key == null ? s.props.children : s, A2(e, Array.isArray(V) ? V : [V], t, n, a, r, o, i, c, l), d.base = t.__e, t.__h = null, d.__h.length && i.push(d), b && (d.__E = d.__ = null), d.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = mU(n.__e, t, n, a, r, o, i, l);
    (s = D.diffed) && s(t);
  } catch (A) {
    t.__v = null, (l || o != null) && (t.__e = c, t.__h = !!l, o[o.indexOf(c)] = null), D.__e(A, t, n);
  }
}
function L2(e, t) {
  D.__c && D.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      D.__e(a, n.__v);
    }
  });
}
function mU(e, t, n, a, r, o, i, c) {
  var l, s, d, h = n.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (r = !0), o != null) {
    for (; _ < o.length; _++)
      if ((l = o[_]) && "setAttribute" in l == !!g && (g ? l.localName === g : l.nodeType === 3)) {
        e = l, o[_] = null;
        break;
      }
  }
  if (e == null) {
    if (g === null)
      return document.createTextNode(p);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, c = !1;
  }
  if (g === null)
    h === p || c && e.data === p || (e.data = p);
  else {
    if (o = o && hn.call(e.childNodes), s = (h = n.props || Wt).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, !c) {
      if (o != null)
        for (h = {}, _ = 0; _ < e.attributes.length; _++)
          h[e.attributes[_].name] = e.attributes[_].value;
      (d || s) && (d && (s && d.__html == s.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""));
    }
    if (uU(e, p, h, r, c), d)
      t.__k = [];
    else if (_ = t.props.children, A2(e, Array.isArray(_) ? _ : [_], t, n, a, r && g !== "foreignObject", o, i, o ? o[0] : n.__k && Xe(n, 0), c), o != null)
      for (_ = o.length; _--; )
        o[_] != null && R2(o[_]);
    c || ("value" in p && (_ = p.value) !== void 0 && (_ !== e.value || g === "progress" && !_ || g === "option" && _ !== h.value) && Gt(e, "value", _, h.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== e.checked && Gt(e, "checked", _, h.checked, !1));
  }
  return e;
}
function P2(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (a) {
    D.__e(a, n);
  }
}
function B2(e, t, n) {
  var a, r;
  if (D.unmount && D.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || P2(a, null, t)), (a = e.__c) != null) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (o) {
        D.__e(o, t);
      }
    a.base = a.__P = null, e.__c = void 0;
  }
  if (a = e.__k)
    for (r = 0; r < a.length; r++)
      a[r] && B2(a[r], t, typeof e.type != "function");
  n || e.__e == null || R2(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fU(e, t, n) {
  return this.constructor(e, n);
}
function wt(e, t, n) {
  var a, r, o;
  D.__ && D.__(e, t), r = (a = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Va(t, e = (!a && n || t).__k = Me(De, null, [e]), r || Wt, Wt, t.ownerSVGElement !== void 0, !a && n ? [n] : r ? null : t.firstChild ? hn.call(t.childNodes) : null, o, !a && n ? n : r ? r.__e : t.firstChild, a), L2(o, e);
}
function hU(e, t) {
  var n = { __c: t = "__cC" + H2++, __: e, Consumer: function(a, r) {
    return a.children(r);
  }, Provider: function(a) {
    var r, o;
    return this.getChildContext || (r = [], (o = {})[t] = this, this.getChildContext = function() {
      return o;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && r.some(Jn);
    }, this.sub = function(i) {
      r.push(i);
      var c = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        r.splice(r.indexOf(i), 1), c && c.call(i);
      };
    }), a.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
hn = T2.slice, D = { __e: function(e, t, n, a) {
  for (var r, o, i; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((o = r.constructor) && o.getDerivedStateFromError != null && (r.setState(o.getDerivedStateFromError(e)), i = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, a || {}), i = r.__d), i)
          return r.__E = r;
      } catch (c) {
        e = c;
      }
  throw e;
} }, D2 = 0, de.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof e == "function" && (e = e(Ee({}, n), this.props)), e && Ee(n, e), e != null && this.__v && (t && this.__h.push(t), Jn(this));
}, de.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Jn(this));
}, de.prototype.render = De, mt = [], jt.__r = 0, H2 = 0;
var me, Sn, Yr, O2 = [], zn = [], Zr = D.__b, Xr = D.__r, Kr = D.diffed, Qr = D.__c, Jr = D.unmount;
function vU() {
  for (var e; e = O2.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Lt), e.__H.__h.forEach(ea), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], D.__e(t, e.__v);
      }
}
D.__b = function(e) {
  typeof e.type != "function" || e.o || e.type === De ? e.o || (e.o = e.__ && e.__.o ? e.__.o : "") : e.o = (e.__ && e.__.o ? e.__.o : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0), me = null, Zr && Zr(e);
}, D.__r = function(e) {
  Xr && Xr(e);
  var t = (me = e.__c).__H;
  t && (Sn === me ? (t.__h = [], me.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = zn, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Lt), t.__h.forEach(ea), t.__h = [])), Sn = me;
}, D.diffed = function(e) {
  Kr && Kr(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (O2.push(t) !== 1 && Yr === D.requestAnimationFrame || ((Yr = D.requestAnimationFrame) || pU)(vU)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== zn && (n.__ = n.__V), n.i = void 0, n.__V = zn;
  })), Sn = me = null;
}, D.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Lt), n.__h = n.__h.filter(function(a) {
        return !a.__ || ea(a);
      });
    } catch (a) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], D.__e(a, n.__v);
    }
  }), Qr && Qr(e, t);
}, D.unmount = function(e) {
  Jr && Jr(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      Lt(a);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && D.__e(t, n.__v));
};
var eo = typeof requestAnimationFrame == "function";
function pU(e) {
  var t, n = function() {
    clearTimeout(a), eo && cancelAnimationFrame(t), setTimeout(e);
  }, a = setTimeout(n, 100);
  eo && (t = requestAnimationFrame(n));
}
function Lt(e) {
  var t = me, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), me = t;
}
function ea(e) {
  var t = me;
  e.__c = e.__(), me = t;
}
function _U(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function to(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var a in t)
    if (a !== "__source" && e[a] !== t[a])
      return !0;
  return !1;
}
function no(e) {
  this.props = e;
}
(no.prototype = new de()).isPureReactComponent = !0, no.prototype.shouldComponentUpdate = function(e, t) {
  return to(this.props, e) || to(this.state, t);
};
var ao = D.__b;
D.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ao && ao(e);
};
var gU = D.__e;
D.__e = function(e, t, n, a) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  gU(e, t, n, a);
};
var ro = D.unmount;
function N2(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), e.__c.__H = null), (e = _U({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(a) {
    return N2(a, t, n);
  })), e;
}
function F2(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(a) {
    return F2(a, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Mn() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U2(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Dt() {
  this.u = null, this.o = null;
}
D.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), ro && ro(e);
}, (Mn.prototype = new de()).__c = function(e, t) {
  var n = t.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var r = U2(a.__v), o = !1, i = function() {
    o || (o = !0, n.__R = null, r ? r(c) : c());
  };
  n.__R = i;
  var c = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var s = a.state.__a;
        a.__v.__k[0] = F2(s, s.__c.__P, s.__c.__O);
      }
      var d;
      for (a.setState({ __a: a.__b = null }); d = a.t.pop(); )
        d.forceUpdate();
    }
  }, l = t.__h === !0;
  a.__u++ || l || a.setState({ __a: a.__b = a.__v.__k[0] }), e.then(i, i);
}, Mn.prototype.componentWillUnmount = function() {
  this.t = [];
}, Mn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = N2(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var r = t.__a && Me(De, null, e.fallback);
  return r && (r.__h = null), [Me(De, null, t.__a ? null : e.children), r];
};
var oo = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function wU(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function yU(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    wt(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), t.i.appendChild(a);
  }, insertBefore: function(a, r) {
    this.childNodes.push(a), t.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), t.i.removeChild(a);
  } }), wt(Me(wU, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function CU(e, t) {
  var n = Me(yU, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(Dt.prototype = new de()).__a = function(e) {
  var t = this, n = U2(t.__v), a = t.o.get(e);
  return a[0]++, function(r) {
    var o = function() {
      t.props.revealOrder ? (a.push(r), oo(t, e, a)) : r();
    };
    n ? n(o) : o();
  };
}, Dt.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = qt(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, Dt.prototype.componentDidUpdate = Dt.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    oo(e, n, t);
  });
};
var bU = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, $U = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, EU = typeof document < "u", xU = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
de.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(de.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var io = D.event;
function SU() {
}
function zU() {
  return this.cancelBubble;
}
function MU() {
  return this.defaultPrevented;
}
D.event = function(e) {
  return io && (e = io(e)), e.persist = SU, e.isPropagationStopped = zU, e.isDefaultPrevented = MU, e.nativeEvent = e;
};
var co = { configurable: !0, get: function() {
  return this.class;
} }, lo = D.vnode;
D.vnode = function(e) {
  var t = e.type, n = e.props, a = n;
  if (typeof t == "string") {
    var r = t.indexOf("-") === -1;
    for (var o in a = {}, n) {
      var i = n[o];
      EU && o === "children" && t === "noscript" || o === "value" && "defaultValue" in n && i == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !xU(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : r && $U.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : i === null && (i = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), a[o] && (o = "oninputCapture")), a[o] = i);
    }
    t == "select" && a.multiple && Array.isArray(a.value) && (a.value = qt(n.children).forEach(function(c) {
      c.props.selected = a.value.indexOf(c.props.value) != -1;
    })), t == "select" && a.defaultValue != null && (a.value = qt(n.children).forEach(function(c) {
      c.props.selected = a.multiple ? a.defaultValue.indexOf(c.props.value) != -1 : a.defaultValue == c.props.value;
    })), e.props = a, n.class != n.className && (co.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", co));
  }
  e.$$typeof = bU, lo && lo(e);
};
var so = D.__r;
D.__r = function(e) {
  so && so(e), e.__c;
};
var uo = typeof globalThis < "u" ? globalThis : window;
uo.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : uo.FullCalendarVDom = {
  Component: de,
  createElement: Me,
  render: wt,
  createRef: dU,
  Fragment: De,
  createContext: TU,
  createPortal: CU,
  flushSync: DU,
  unmountComponentAtNode: RU
};
function DU(e) {
  e();
  var t = D.debounceRendering, n = [];
  function a(r) {
    n.push(r);
  }
  for (D.debounceRendering = a, wt(Me(HU, {}), document.createElement("div")); n.length; )
    n.shift()();
  D.debounceRendering = t;
}
var HU = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    return Me("div", {});
  }, t.prototype.componentDidMount = function() {
    this.setState({});
  }, t;
}(de);
function TU(e) {
  var t = hU(e), n = t.Provider;
  return t.Provider = function() {
    var a = this, r = !this.getChildContext, o = n.apply(this, arguments);
    if (r) {
      var i = [];
      this.shouldComponentUpdate = function(c) {
        a.props.value !== c.value && i.forEach(function(l) {
          l.context = c.value, l.forceUpdate();
        });
      }, this.sub = function(c) {
        i.push(c);
        var l = c.componentWillUnmount;
        c.componentWillUnmount = function() {
          i.splice(i.indexOf(c), 1), l && l.call(c);
        };
      };
    }
    return o;
  }, t;
}
function RU(e) {
  wt(null, e);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var Aa = FullCalendarVDom.Component, $ = FullCalendarVDom.createElement, VU = FullCalendarVDom.render, le = FullCalendarVDom.createRef, oe = FullCalendarVDom.Fragment, W2 = FullCalendarVDom.createContext, AU = FullCalendarVDom.createPortal, mo = FullCalendarVDom.flushSync, kU = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var je = function() {
  function e(t, n) {
    this.context = t, this.internalEventSource = n;
  }
  return e.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }, e.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }, Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}();
function ka(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ee(e, t) {
  if (e.closest)
    return e.closest(t);
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (IU(e, t))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
}
function IU(e, t) {
  var n = e.matches || e.matchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
function LU(e, t) {
  for (var n = e instanceof HTMLElement ? [e] : e, a = [], r = 0; r < n.length; r += 1)
    for (var o = n[r].querySelectorAll(t), i = 0; i < o.length; i += 1)
      a.push(o[i]);
  return a;
}
var PU = /(top|left|right|bottom|width|height)$/i;
function ft(e, t) {
  for (var n in t)
    j2(e, n, t[n]);
}
function j2(e, t, n) {
  n == null ? e.style[t] = "" : typeof n == "number" && PU.test(t) ? e.style[t] = n + "px" : e.style[t] = n;
}
function q2(e) {
  var t, n;
  return (n = (t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)[0]) !== null && n !== void 0 ? n : e.target;
}
function G2(e) {
  return e.getRootNode ? e.getRootNode() : document;
}
var fo = 0;
function vn() {
  return fo += 1, "fc-dom-" + fo;
}
function pn(e) {
  e.preventDefault();
}
function BU(e, t) {
  return function(n) {
    var a = ee(n.target, e);
    a && t.call(a, n, a);
  };
}
function Y2(e, t, n, a) {
  var r = BU(n, a);
  return e.addEventListener(t, r), function() {
    e.removeEventListener(t, r);
  };
}
function OU(e, t, n, a) {
  var r;
  return Y2(e, "mouseover", t, function(o, i) {
    if (i !== r) {
      r = i, n(o, i);
      var c = function(l) {
        r = null, a(l, i), i.removeEventListener("mouseleave", c);
      };
      i.addEventListener("mouseleave", c);
    }
  });
}
var ho = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function NU(e, t) {
  var n = function(a) {
    t(a), ho.forEach(function(r) {
      e.removeEventListener(r, n);
    });
  };
  ho.forEach(function(a) {
    e.addEventListener(a, n);
  });
}
function Z2(e) {
  return w({ onClick: e }, X2(e));
}
function X2(e) {
  return {
    tabIndex: 0,
    onKeyDown: function(t) {
      (t.key === "Enter" || t.key === " ") && (e(t), t.preventDefault());
    }
  };
}
var vo = 0;
function ot() {
  return vo += 1, String(vo);
}
function Ia() {
  document.body.classList.add("fc-not-allowed");
}
function La() {
  document.body.classList.remove("fc-not-allowed");
}
function FU(e) {
  e.classList.add("fc-unselectable"), e.addEventListener("selectstart", pn);
}
function UU(e) {
  e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", pn);
}
function WU(e) {
  e.addEventListener("contextmenu", pn);
}
function jU(e) {
  e.removeEventListener("contextmenu", pn);
}
function qU(e) {
  var t = [], n = [], a, r;
  for (typeof e == "string" ? n = e.split(/\s*,\s*/) : typeof e == "function" ? n = [e] : Array.isArray(e) && (n = e), a = 0; a < n.length; a += 1)
    r = n[a], typeof r == "string" ? t.push(r.charAt(0) === "-" ? { field: r.substring(1), order: -1 } : { field: r, order: 1 }) : typeof r == "function" && t.push({ func: r });
  return t;
}
function GU(e, t, n) {
  var a, r;
  for (a = 0; a < n.length; a += 1)
    if (r = YU(e, t, n[a]), r)
      return r;
  return 0;
}
function YU(e, t, n) {
  return n.func ? n.func(e, t) : ZU(e[n.field], t[n.field]) * (n.order || 1);
}
function ZU(e, t) {
  return !e && !t ? 0 : t == null ? -1 : e == null ? 1 : typeof e == "string" || typeof t == "string" ? String(e).localeCompare(String(t)) : e - t;
}
function Dn(e, t) {
  var n = String(e);
  return "000".substr(0, t - n.length) + n;
}
function ht(e, t, n) {
  return typeof e == "function" ? e.apply(void 0, t) : typeof e == "string" ? t.reduce(function(a, r, o) {
    return a.replace("$" + o, r || "");
  }, e) : n;
}
function XU(e, t) {
  return e - t;
}
function Hn(e) {
  return e % 1 === 0;
}
function KU(e) {
  var t = e.querySelector(".fc-scrollgrid-shrink-frame"), n = e.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!t)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
var QU = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function po(e, t) {
  var n = xe(e);
  return n[2] += t * 7, ie(n);
}
function ae(e, t) {
  var n = xe(e);
  return n[2] += t, ie(n);
}
function Be(e, t) {
  var n = xe(e);
  return n[6] += t, ie(n);
}
function JU(e, t) {
  return it(e, t) / 7;
}
function it(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60 * 24);
}
function eW(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60);
}
function tW(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60);
}
function nW(e, t) {
  return (t.valueOf() - e.valueOf()) / 1e3;
}
function aW(e, t) {
  var n = F(e), a = F(t);
  return {
    years: 0,
    months: 0,
    days: Math.round(it(n, a)),
    milliseconds: t.valueOf() - a.valueOf() - (e.valueOf() - n.valueOf())
  };
}
function rW(e, t) {
  var n = Yt(e, t);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function Yt(e, t) {
  return Se(e) === Se(t) ? Math.round(it(e, t)) : null;
}
function F(e) {
  return ie([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate()
  ]);
}
function oW(e) {
  return ie([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours()
  ]);
}
function iW(e) {
  return ie([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes()
  ]);
}
function cW(e) {
  return ie([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  ]);
}
function lW(e, t, n) {
  var a = e.getUTCFullYear(), r = Tn(e, a, t, n);
  if (r < 1)
    return Tn(e, a - 1, t, n);
  var o = Tn(e, a + 1, t, n);
  return o >= 1 ? Math.min(r, o) : r;
}
function Tn(e, t, n, a) {
  var r = ie([t, 0, 1 + sW(t, n, a)]), o = F(e), i = Math.round(it(r, o));
  return Math.floor(i / 7) + 1;
}
function sW(e, t, n) {
  var a = 7 + t - n, r = (7 + ie([e, 0, a]).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function _o(e) {
  return [
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ];
}
function go(e) {
  return new Date(
    e[0],
    e[1] || 0,
    e[2] == null ? 1 : e[2],
    e[3] || 0,
    e[4] || 0,
    e[5] || 0
  );
}
function xe(e) {
  return [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds(),
    e.getUTCMilliseconds()
  ];
}
function ie(e) {
  return e.length === 1 && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e));
}
function K2(e) {
  return !isNaN(e.valueOf());
}
function Se(e) {
  return e.getUTCHours() * 1e3 * 60 * 60 + e.getUTCMinutes() * 1e3 * 60 + e.getUTCSeconds() * 1e3 + e.getUTCMilliseconds();
}
function Pa(e, t, n, a) {
  return {
    instanceId: ot(),
    defId: e,
    range: t,
    forcedStartTzo: n == null ? null : n,
    forcedEndTzo: a == null ? null : a
  };
}
var Zt = Object.prototype.hasOwnProperty;
function Ba(e, t) {
  var n = {};
  if (t)
    for (var a in t) {
      for (var r = [], o = e.length - 1; o >= 0; o -= 1) {
        var i = e[o][a];
        if (typeof i == "object" && i)
          r.unshift(i);
        else if (i !== void 0) {
          n[a] = i;
          break;
        }
      }
      r.length && (n[a] = Ba(r));
    }
  for (var o = e.length - 1; o >= 0; o -= 1) {
    var c = e[o];
    for (var l in c)
      l in n || (n[l] = c[l]);
  }
  return n;
}
function Oe(e, t) {
  var n = {};
  for (var a in e)
    t(e[a], a) && (n[a] = e[a]);
  return n;
}
function Fe(e, t) {
  var n = {};
  for (var a in e)
    n[a] = t(e[a], a);
  return n;
}
function Q2(e) {
  for (var t = {}, n = 0, a = e; n < a.length; n++) {
    var r = a[n];
    t[r] = !0;
  }
  return t;
}
function Oa(e) {
  var t = [];
  for (var n in e)
    t.push(e[n]);
  return t;
}
function ye(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (Zt.call(e, n) && !(n in t))
      return !1;
  for (var n in t)
    if (Zt.call(t, n) && e[n] !== t[n])
      return !1;
  return !0;
}
function wo(e, t) {
  var n = [];
  for (var a in e)
    Zt.call(e, a) && (a in t || n.push(a));
  for (var a in t)
    Zt.call(t, a) && e[a] !== t[a] && n.push(a);
  return n;
}
function Rn(e, t, n) {
  if (n === void 0 && (n = {}), e === t)
    return !0;
  for (var a in t)
    if (!(a in e && dW(e[a], t[a], n[a])))
      return !1;
  for (var a in e)
    if (!(a in t))
      return !1;
  return !0;
}
function dW(e, t, n) {
  return e === t || n === !0 ? !0 : n ? n(e, t) : !1;
}
function uW(e, t, n, a) {
  t === void 0 && (t = 0), a === void 0 && (a = 1);
  var r = [];
  n == null && (n = Object.keys(e).length);
  for (var o = t; o < n; o += a) {
    var i = e[o];
    i !== void 0 && r.push(i);
  }
  return r;
}
function mW(e, t, n, a) {
  for (var r = 0; r < a.length; r += 1) {
    var o = a[r].parse(e, n);
    if (o) {
      var i = e.allDay;
      return i == null && (i = t, i == null && (i = o.allDayGuess, i == null && (i = !1))), {
        allDay: i,
        duration: o.duration,
        typeData: o.typeData,
        typeId: r
      };
    }
  }
  return null;
}
function Ke(e, t, n) {
  var a = n.dateEnv, r = n.pluginHooks, o = n.options, i = e.defs, c = e.instances;
  c = Oe(c, function(C) {
    return !i[C.defId].recurringDef;
  });
  for (var l in i) {
    var s = i[l];
    if (s.recurringDef) {
      var d = s.recurringDef.duration;
      d || (d = s.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration);
      for (var h = fW(s, d, t, a, r.recurringTypes), p = 0, g = h; p < g.length; p++) {
        var _ = g[p], b = Pa(l, {
          start: _,
          end: a.add(_, d)
        });
        c[b.instanceId] = b;
      }
    }
  }
  return { defs: i, instances: c };
}
function fW(e, t, n, a, r) {
  var o = r[e.recurringDef.typeId], i = o.expand(e.recurringDef.typeData, {
    start: a.subtract(n.start, t),
    end: n.end
  }, a);
  return e.allDay && (i = i.map(F)), i;
}
var hW = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function I(e, t) {
  var n;
  return typeof e == "string" ? vW(e) : typeof e == "object" && e ? yo(e) : typeof e == "number" ? yo((n = {}, n[t || "milliseconds"] = e, n)) : null;
}
function vW(e) {
  var t = hW.exec(e);
  if (t) {
    var n = t[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (t[2] ? parseInt(t[2], 10) : 0),
      milliseconds: n * ((t[3] ? parseInt(t[3], 10) : 0) * 60 * 60 * 1e3 + (t[4] ? parseInt(t[4], 10) : 0) * 60 * 1e3 + (t[5] ? parseInt(t[5], 10) : 0) * 1e3 + (t[6] ? parseInt(t[6], 10) : 0))
    };
  }
  return null;
}
function yo(e) {
  var t = {
    years: e.years || e.year || 0,
    months: e.months || e.month || 0,
    days: e.days || e.day || 0,
    milliseconds: (e.hours || e.hour || 0) * 60 * 60 * 1e3 + (e.minutes || e.minute || 0) * 60 * 1e3 + (e.seconds || e.second || 0) * 1e3 + (e.milliseconds || e.millisecond || e.ms || 0)
  }, n = e.weeks || e.week;
  return n && (t.days += n * 7, t.specifiedWeeks = !0), t;
}
function pW(e, t) {
  return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds;
}
function _W(e, t) {
  return {
    years: e.years - t.years,
    months: e.months - t.months,
    days: e.days - t.days,
    milliseconds: e.milliseconds - t.milliseconds
  };
}
function gW(e) {
  return Ge(e) / 365;
}
function wW(e) {
  return Ge(e) / 30;
}
function Ge(e) {
  return yt(e) / 864e5;
}
function yt(e) {
  return e.years * (365 * 864e5) + e.months * (30 * 864e5) + e.days * 864e5 + e.milliseconds;
}
function ta(e) {
  var t = e.milliseconds;
  if (t) {
    if (t % 1e3 !== 0)
      return { unit: "millisecond", value: t };
    if (t % (1e3 * 60) !== 0)
      return { unit: "second", value: t / 1e3 };
    if (t % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: t / (1e3 * 60) };
    if (t)
      return { unit: "hour", value: t / (1e3 * 60 * 60) };
  }
  return e.days ? e.specifiedWeeks && e.days % 7 === 0 ? { unit: "week", value: e.days / 7 } : { unit: "day", value: e.days } : e.months ? { unit: "month", value: e.months } : e.years ? { unit: "year", value: e.years } : { unit: "millisecond", value: 0 };
}
function yW(e, t, n) {
  n === void 0 && (n = !1);
  var a = e.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (t == null ? a = a.replace("Z", "") : t !== 0 && (a = a.replace("Z", Na(t, !0)))), a;
}
function J2(e) {
  return e.toISOString().replace(/T.*$/, "");
}
function Na(e, t) {
  t === void 0 && (t = !1);
  var n = e < 0 ? "-" : "+", a = Math.abs(e), r = Math.floor(a / 60), o = Math.round(a % 60);
  return t ? n + Dn(r, 2) + ":" + Dn(o, 2) : "GMT" + n + r + (o ? ":" + Dn(o, 2) : "");
}
function Qe(e, t, n) {
  if (e === t)
    return !0;
  var a = e.length, r;
  if (a !== t.length)
    return !1;
  for (r = 0; r < a; r += 1)
    if (!(n ? n(e[r], t[r]) : e[r] === t[r]))
      return !1;
  return !0;
}
function k(e, t, n) {
  var a, r;
  return function() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (!a)
      r = e.apply(this, o);
    else if (!Qe(a, o)) {
      n && n(r);
      var c = e.apply(this, o);
      (!t || !t(c, r)) && (r = c);
    }
    return a = o, r;
  };
}
function Pt(e, t, n) {
  var a = this, r, o;
  return function(i) {
    if (!r)
      o = e.call(a, i);
    else if (!ye(r, i)) {
      n && n(o);
      var c = e.call(a, i);
      (!t || !t(c, o)) && (o = c);
    }
    return r = i, o;
  };
}
var Co = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, Xt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Ht = /\s*([ap])\.?m\.?/i, CW = /,/g, bW = /\s+/g, $W = /\u200e/g, EW = /UTC|GMT/, xW = function() {
  function e(t) {
    var n = {}, a = {}, r = 0;
    for (var o in t)
      o in Co ? (a[o] = t[o], r = Math.max(Co[o], r)) : (n[o] = t[o], o in Xt && (r = Math.max(Xt[o], r)));
    this.standardDateProps = n, this.extendedSettings = a, this.severity = r, this.buildFormattingFunc = k(bo);
  }
  return e.prototype.format = function(t, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(t);
  }, e.prototype.formatRange = function(t, n, a, r) {
    var o = this, i = o.standardDateProps, c = o.extendedSettings, l = TW(t.marker, n.marker, a.calendarSystem);
    if (!l)
      return this.format(t, a);
    var s = l;
    s > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (s = 1);
    var d = this.format(t, a), h = this.format(n, a);
    if (d === h)
      return d;
    var p = RW(i, s), g = bo(p, c, a), _ = g(t), b = g(n), C = VW(d, _, h, b), y = c.separator || r || a.defaultSeparator || "";
    return C ? C.before + _ + y + b + C.after : d + y + h;
  }, e.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }, e;
}();
function bo(e, t, n) {
  var a = Object.keys(e).length;
  return a === 1 && e.timeZoneName === "short" ? function(r) {
    return Na(r.timeZoneOffset);
  } : a === 0 && t.week ? function(r) {
    return HW(n.computeWeekNumber(r.marker), n.weekText, n.weekTextLong, n.locale, t.week);
  } : SW(e, t, n);
}
function SW(e, t, n) {
  e = w({}, e), t = w({}, t), zW(e, t), e.timeZone = "UTC";
  var a = new Intl.DateTimeFormat(n.locale.codes, e), r;
  if (t.omitZeroMinute) {
    var o = w({}, e);
    delete o.minute, r = new Intl.DateTimeFormat(n.locale.codes, o);
  }
  return function(i) {
    var c = i.marker, l;
    r && !c.getUTCMinutes() ? l = r : l = a;
    var s = l.format(c);
    return MW(s, i, e, t, n);
  };
}
function zW(e, t) {
  e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")), e.timeZoneName === "long" && (e.timeZoneName = "short"), t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
}
function MW(e, t, n, a, r) {
  return e = e.replace($W, ""), n.timeZoneName === "short" && (e = DW(e, r.timeZone === "UTC" || t.timeZoneOffset == null ? "UTC" : Na(t.timeZoneOffset))), a.omitCommas && (e = e.replace(CW, "").trim()), a.omitZeroMinute && (e = e.replace(":00", "")), a.meridiem === !1 ? e = e.replace(Ht, "").trim() : a.meridiem === "narrow" ? e = e.replace(Ht, function(o, i) {
    return i.toLocaleLowerCase();
  }) : a.meridiem === "short" ? e = e.replace(Ht, function(o, i) {
    return i.toLocaleLowerCase() + "m";
  }) : a.meridiem === "lowercase" && (e = e.replace(Ht, function(o) {
    return o.toLocaleLowerCase();
  })), e = e.replace(bW, " "), e = e.trim(), e;
}
function DW(e, t) {
  var n = !1;
  return e = e.replace(EW, function() {
    return n = !0, t;
  }), n || (e += " " + t), e;
}
function HW(e, t, n, a, r) {
  var o = [];
  return r === "long" ? o.push(n) : (r === "short" || r === "narrow") && o.push(t), (r === "long" || r === "short") && o.push(" "), o.push(a.simpleNumberFormat.format(e)), a.options.direction === "rtl" && o.reverse(), o.join("");
}
function TW(e, t, n) {
  return n.getMarkerYear(e) !== n.getMarkerYear(t) ? 5 : n.getMarkerMonth(e) !== n.getMarkerMonth(t) ? 4 : n.getMarkerDay(e) !== n.getMarkerDay(t) ? 2 : Se(e) !== Se(t) ? 1 : 0;
}
function RW(e, t) {
  var n = {};
  for (var a in e)
    (!(a in Xt) || Xt[a] <= t) && (n[a] = e[a]);
  return n;
}
function VW(e, t, n, a) {
  for (var r = 0; r < e.length; ) {
    var o = e.indexOf(t, r);
    if (o === -1)
      break;
    var i = e.substr(0, o);
    r = o + t.length;
    for (var c = e.substr(r), l = 0; l < n.length; ) {
      var s = n.indexOf(a, l);
      if (s === -1)
        break;
      var d = n.substr(0, s);
      l = s + a.length;
      var h = n.substr(l);
      if (i === d && c === h)
        return {
          before: i,
          after: c
        };
    }
  }
  return null;
}
function $o(e, t) {
  var n = t.markerToArray(e.marker);
  return {
    marker: e.marker,
    timeZoneOffset: e.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Kt(e, t, n, a) {
  var r = $o(e, n.calendarSystem), o = t ? $o(t, n.calendarSystem) : null;
  return {
    date: r,
    start: r,
    end: o,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
var AW = function() {
  function e(t) {
    this.cmdStr = t;
  }
  return e.prototype.format = function(t, n, a) {
    return n.cmdFormatter(this.cmdStr, Kt(t, null, n, a));
  }, e.prototype.formatRange = function(t, n, a, r) {
    return a.cmdFormatter(this.cmdStr, Kt(t, n, a, r));
  }, e;
}(), kW = function() {
  function e(t) {
    this.func = t;
  }
  return e.prototype.format = function(t, n, a) {
    return this.func(Kt(t, null, n, a));
  }, e.prototype.formatRange = function(t, n, a, r) {
    return this.func(Kt(t, n, a, r));
  }, e;
}();
function J(e) {
  return typeof e == "object" && e ? new xW(e) : typeof e == "string" ? new AW(e) : typeof e == "function" ? new kW(e) : null;
}
var Eo = {
  navLinkDayClick: E,
  navLinkWeekClick: E,
  duration: I,
  bootstrapFontAwesome: E,
  buttonIcons: E,
  customButtons: E,
  defaultAllDayEventDuration: I,
  defaultTimedEventDuration: I,
  nextDayThreshold: I,
  scrollTime: I,
  scrollTimeReset: Boolean,
  slotMinTime: I,
  slotMaxTime: I,
  dayPopoverFormat: J,
  slotDuration: I,
  snapDuration: I,
  headerToolbar: E,
  footerToolbar: E,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: J,
  dayHeaderClassNames: E,
  dayHeaderContent: E,
  dayHeaderDidMount: E,
  dayHeaderWillUnmount: E,
  dayCellClassNames: E,
  dayCellContent: E,
  dayCellDidMount: E,
  dayCellWillUnmount: E,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: E,
  weekNumbers: Boolean,
  weekNumberClassNames: E,
  weekNumberContent: E,
  weekNumberDidMount: E,
  weekNumberWillUnmount: E,
  editable: Boolean,
  viewClassNames: E,
  viewDidMount: E,
  viewWillUnmount: E,
  nowIndicator: Boolean,
  nowIndicatorClassNames: E,
  nowIndicatorContent: E,
  nowIndicatorDidMount: E,
  nowIndicatorWillUnmount: E,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: E,
  locale: E,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: E,
  eventOrder: qU,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: E,
  contentHeight: E,
  direction: String,
  weekNumberFormat: J,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: E,
  initialDate: E,
  now: E,
  eventDataTransform: E,
  stickyHeaderDates: E,
  stickyFooterScrollbar: E,
  viewHeight: E,
  defaultAllDay: Boolean,
  eventSourceFailure: E,
  eventSourceSuccess: E,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: E,
  eventConstraint: E,
  eventAllow: E,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: E,
  eventContent: E,
  eventDidMount: E,
  eventWillUnmount: E,
  selectConstraint: E,
  selectOverlap: E,
  selectAllow: E,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: E,
  slotLaneClassNames: E,
  slotLaneContent: E,
  slotLaneDidMount: E,
  slotLaneWillUnmount: E,
  slotLabelClassNames: E,
  slotLabelContent: E,
  slotLabelDidMount: E,
  slotLabelWillUnmount: E,
  dayMaxEvents: E,
  dayMaxEventRows: E,
  dayMinWidth: Number,
  slotLabelInterval: I,
  allDayText: String,
  allDayClassNames: E,
  allDayContent: E,
  allDayDidMount: E,
  allDayWillUnmount: E,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: J,
  rerenderDelay: Number,
  moreLinkText: E,
  moreLinkHint: E,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: E,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: I,
  hiddenDays: E,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: E,
  visibleRange: E,
  titleFormat: E,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: E,
  navLinkHint: E,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: E,
  moreLinkClassNames: E,
  moreLinkContent: E,
  moreLinkDidMount: E,
  moreLinkWillUnmount: E
}, vt = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, xo = {
  datesSet: E,
  eventsSet: E,
  eventAdd: E,
  eventChange: E,
  eventRemove: E,
  windowResize: E,
  eventClick: E,
  eventMouseEnter: E,
  eventMouseLeave: E,
  select: E,
  unselect: E,
  loading: E,
  _unmount: E,
  _beforeprint: E,
  _afterprint: E,
  _noEventDrop: E,
  _noEventResize: E,
  _resize: E,
  _scrollRequest: E
}, So = {
  buttonText: E,
  buttonHints: E,
  views: E,
  plugins: E,
  initialEvents: E,
  events: E,
  eventSources: E
}, Ae = {
  headerToolbar: We,
  footerToolbar: We,
  buttonText: We,
  buttonHints: We,
  buttonIcons: We,
  dateIncrement: We
};
function We(e, t) {
  return typeof e == "object" && typeof t == "object" && e && t ? ye(e, t) : e === t;
}
var IW = {
  type: String,
  component: E,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: E,
  usesMinMaxTime: Boolean,
  classNames: E,
  content: E,
  didMount: E,
  willUnmount: E
};
function Vn(e) {
  return Ba(e, Ae);
}
function Fa(e, t) {
  var n = {}, a = {};
  for (var r in t)
    r in e && (n[r] = t[r](e[r]));
  for (var r in e)
    r in t || (a[r] = e[r]);
  return { refined: n, extra: a };
}
function E(e) {
  return e;
}
function Qt(e, t, n, a) {
  for (var r = ue(), o = ja(n), i = 0, c = e; i < c.length; i++) {
    var l = c[i], s = t0(l, t, n, a, o);
    s && na(s, r);
  }
  return r;
}
function na(e, t) {
  return t === void 0 && (t = ue()), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
}
function Ua(e, t) {
  var n = e.instances[t];
  if (n) {
    var a = e.defs[n.defId], r = _n(e, function(o) {
      return LW(a, o);
    });
    return r.defs[a.defId] = a, r.instances[n.instanceId] = n, r;
  }
  return ue();
}
function LW(e, t) {
  return Boolean(e.groupId && e.groupId === t.groupId);
}
function ue() {
  return { defs: {}, instances: {} };
}
function Wa(e, t) {
  return {
    defs: w(w({}, e.defs), t.defs),
    instances: w(w({}, e.instances), t.instances)
  };
}
function _n(e, t) {
  var n = Oe(e.defs, t), a = Oe(e.instances, function(r) {
    return n[r.defId];
  });
  return { defs: n, instances: a };
}
function PW(e, t) {
  var n = e.defs, a = e.instances, r = {}, o = {};
  for (var i in n)
    t.defs[i] || (r[i] = n[i]);
  for (var c in a)
    !t.instances[c] && r[a[c].defId] && (o[c] = a[c]);
  return {
    defs: r,
    instances: o
  };
}
function BW(e, t) {
  return Array.isArray(e) ? Qt(e, null, t, !0) : typeof e == "object" && e ? Qt([e], null, t, !0) : e != null ? String(e) : null;
}
function aa(e) {
  return Array.isArray(e) ? e : typeof e == "string" ? e.split(/\s+/) : [];
}
var Jt = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: E,
  overlap: E,
  allow: E,
  className: aa,
  classNames: aa,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, OW = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function en(e, t) {
  var n = BW(e.constraint, t);
  return {
    display: e.display || null,
    startEditable: e.startEditable != null ? e.startEditable : e.editable,
    durationEditable: e.durationEditable != null ? e.durationEditable : e.editable,
    constraints: n != null ? [n] : [],
    overlap: e.overlap != null ? e.overlap : null,
    allows: e.allow != null ? [e.allow] : [],
    backgroundColor: e.backgroundColor || e.color || "",
    borderColor: e.borderColor || e.color || "",
    textColor: e.textColor || "",
    classNames: (e.className || []).concat(e.classNames || [])
  };
}
function NW(e) {
  return e.reduce(FW, OW);
}
function FW(e, t) {
  return {
    display: t.display != null ? t.display : e.display,
    startEditable: t.startEditable != null ? t.startEditable : e.startEditable,
    durationEditable: t.durationEditable != null ? t.durationEditable : e.durationEditable,
    constraints: e.constraints.concat(t.constraints),
    overlap: typeof t.overlap == "boolean" ? t.overlap : e.overlap,
    allows: e.allows.concat(t.allows),
    backgroundColor: t.backgroundColor || e.backgroundColor,
    borderColor: t.borderColor || e.borderColor,
    textColor: t.textColor || e.textColor,
    classNames: e.classNames.concat(t.classNames)
  };
}
var Bt = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, e0 = {
  start: E,
  end: E,
  date: E,
  allDay: Boolean
}, UW = w(w(w({}, Bt), e0), { extendedProps: E });
function t0(e, t, n, a, r) {
  r === void 0 && (r = ja(n));
  var o = n0(e, n, r), i = o.refined, c = o.extra, l = jW(t, n), s = mW(i, l, n.dateEnv, n.pluginHooks.recurringTypes);
  if (s) {
    var d = ra(i, c, t ? t.sourceId : "", s.allDay, Boolean(s.duration), n);
    return d.recurringDef = {
      typeId: s.typeId,
      typeData: s.typeData,
      duration: s.duration
    }, { def: d, instance: null };
  }
  var h = WW(i, l, n, a);
  if (h) {
    var d = ra(i, c, t ? t.sourceId : "", h.allDay, h.hasEnd, n), p = Pa(d.defId, h.range, h.forcedStartTzo, h.forcedEndTzo);
    return { def: d, instance: p };
  }
  return null;
}
function n0(e, t, n) {
  return n === void 0 && (n = ja(t)), Fa(e, n);
}
function ja(e) {
  return w(w(w({}, Jt), UW), e.pluginHooks.eventRefiners);
}
function ra(e, t, n, a, r, o) {
  for (var i = {
    title: e.title || "",
    groupId: e.groupId || "",
    publicId: e.id || "",
    url: e.url || "",
    recurringDef: null,
    defId: ot(),
    sourceId: n,
    allDay: a,
    hasEnd: r,
    interactive: e.interactive,
    ui: en(e, o),
    extendedProps: w(w({}, e.extendedProps || {}), t)
  }, c = 0, l = o.pluginHooks.eventDefMemberAdders; c < l.length; c++) {
    var s = l[c];
    w(i, s(e));
  }
  return Object.freeze(i.ui.classNames), Object.freeze(i.extendedProps), i;
}
function WW(e, t, n, a) {
  var r = e.allDay, o, i = null, c = !1, l, s = null, d = e.start != null ? e.start : e.date;
  if (o = n.dateEnv.createMarkerMeta(d), o)
    i = o.marker;
  else if (!a)
    return null;
  return e.end != null && (l = n.dateEnv.createMarkerMeta(e.end)), r == null && (t != null ? r = t : r = (!o || o.isTimeUnspecified) && (!l || l.isTimeUnspecified)), r && i && (i = F(i)), l && (s = l.marker, r && (s = F(s)), i && s <= i && (s = null)), s ? c = !0 : a || (c = n.options.forceEventDuration || !1, s = n.dateEnv.add(i, r ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: r,
    hasEnd: c,
    range: { start: i, end: s },
    forcedStartTzo: o ? o.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function jW(e, t) {
  var n = null;
  return e && (n = e.defaultAllDay), n == null && (n = t.options.defaultAllDay), n;
}
function a0(e) {
  var t = Math.floor(it(e.start, e.end)) || 1, n = F(e.start), a = ae(n, t);
  return { start: n, end: a };
}
function r0(e, t) {
  t === void 0 && (t = I(0));
  var n = null, a = null;
  if (e.end) {
    a = F(e.end);
    var r = e.end.valueOf() - a.valueOf();
    r && r >= yt(t) && (a = ae(a, 1));
  }
  return e.start && (n = F(e.start), a && a <= n && (a = ae(n, 1))), { start: n, end: a };
}
function qe(e, t, n, a) {
  return a === "year" ? I(n.diffWholeYears(e, t), "year") : a === "month" ? I(n.diffWholeMonths(e, t), "month") : aW(e, t);
}
function qW(e, t) {
  var n = null, a = null;
  return e.start && (n = t.createMarker(e.start)), e.end && (a = t.createMarker(e.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function zo(e, t) {
  var n = [], a = t.start, r, o;
  for (e.sort(GW), r = 0; r < e.length; r += 1)
    o = e[r], o.start > a && n.push({ start: a, end: o.start }), o.end > a && (a = o.end);
  return a < t.end && n.push({ start: a, end: t.end }), n;
}
function GW(e, t) {
  return e.start.valueOf() - t.start.valueOf();
}
function Ct(e, t) {
  var n = e.start, a = e.end, r = null;
  return t.start !== null && (n === null ? n = t.start : n = new Date(Math.max(n.valueOf(), t.start.valueOf()))), t.end != null && (a === null ? a = t.end : a = new Date(Math.min(a.valueOf(), t.end.valueOf()))), (n === null || a === null || n < a) && (r = { start: n, end: a }), r;
}
function YW(e, t) {
  return (e.start === null ? null : e.start.valueOf()) === (t.start === null ? null : t.start.valueOf()) && (e.end === null ? null : e.end.valueOf()) === (t.end === null ? null : t.end.valueOf());
}
function qa(e, t) {
  return (e.end === null || t.start === null || e.end > t.start) && (e.start === null || t.end === null || e.start < t.end);
}
function gn(e, t) {
  return (e.start === null || t.start !== null && t.start >= e.start) && (e.end === null || t.end !== null && t.end <= e.end);
}
function Le(e, t) {
  return (e.start === null || t >= e.start) && (e.end === null || t < e.end);
}
function ZW(e, t) {
  return t.start != null && e < t.start ? t.start : t.end != null && e >= t.end ? new Date(t.end.valueOf() - 1) : e;
}
function Mo(e, t, n, a) {
  var r = {}, o = {}, i = {}, c = [], l = [], s = tn(e.defs, t);
  for (var d in e.defs) {
    var h = e.defs[d], p = s[h.defId];
    p.display === "inverse-background" && (h.groupId ? (r[h.groupId] = [], i[h.groupId] || (i[h.groupId] = h)) : o[d] = []);
  }
  for (var g in e.instances) {
    var _ = e.instances[g], h = e.defs[_.defId], p = s[h.defId], b = _.range, C = !h.allDay && a ? r0(b, a) : b, y = Ct(C, n);
    y && (p.display === "inverse-background" ? h.groupId ? r[h.groupId].push(y) : o[_.defId].push(y) : p.display !== "none" && (p.display === "background" ? c : l).push({
      def: h,
      ui: p,
      instance: _,
      range: y,
      isStart: C.start && C.start.valueOf() === y.start.valueOf(),
      isEnd: C.end && C.end.valueOf() === y.end.valueOf()
    }));
  }
  for (var x in r)
    for (var z = r[x], S = zo(z, n), V = 0, T = S; V < T.length; V++) {
      var A = T[V], h = i[x], p = s[h.defId];
      c.push({
        def: h,
        ui: p,
        instance: null,
        range: A,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var d in o)
    for (var z = o[d], S = zo(z, n), R = 0, Y = S; R < Y.length; R++) {
      var A = Y[R];
      c.push({
        def: e.defs[d],
        ui: s[d],
        instance: null,
        range: A,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: c, fg: l };
}
function Do(e, t) {
  e.fcSeg = t;
}
function Je(e) {
  return e.fcSeg || e.parentNode.fcSeg || null;
}
function tn(e, t) {
  return Fe(e, function(n) {
    return o0(n, t);
  });
}
function o0(e, t) {
  var n = [];
  return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), NW(n);
}
function XW(e, t) {
  var n = e.map(KW);
  return n.sort(function(a, r) {
    return GU(a, r, t);
  }), n.map(function(a) {
    return a._seg;
  });
}
function KW(e) {
  var t = e.eventRange, n = t.def, a = t.instance ? t.instance.range : t.range, r = a.start ? a.start.valueOf() : 0, o = a.end ? a.end.valueOf() : 0;
  return w(w(w({}, n.extendedProps), n), {
    id: n.publicId,
    start: r,
    end: o,
    duration: o - r,
    allDay: Number(n.allDay),
    _seg: e
  });
}
function QW(e, t) {
  for (var n = t.pluginHooks, a = n.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, c = i.startEditable, l = 0, s = a; l < s.length; l++) {
    var d = s[l];
    c = d(c, o, i, t);
  }
  return c;
}
function JW(e, t) {
  return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
}
function ej(e, t) {
  return e.isEnd && e.eventRange.ui.durationEditable;
}
function i0(e, t, n, a, r, o, i) {
  var c = n.dateEnv, l = n.options, s = l.displayEventTime, d = l.displayEventEnd, h = e.eventRange.def, p = e.eventRange.instance;
  s == null && (s = a !== !1), d == null && (d = r !== !1);
  var g = p.range.start, _ = p.range.end, b = o || e.start || e.eventRange.range.start, C = i || e.end || e.eventRange.range.end, y = F(g).valueOf() === F(b).valueOf(), x = F(Be(_, -1)).valueOf() === F(Be(C, -1)).valueOf();
  return s && !h.allDay && (y || x) ? (b = y ? g : b, C = x ? _ : C, d && h.hasEnd ? c.formatRange(b, C, t, {
    forcedStartTzo: o ? null : p.forcedStartTzo,
    forcedEndTzo: i ? null : p.forcedEndTzo
  }) : c.format(b, t, {
    forcedTzo: o ? null : p.forcedStartTzo
  })) : "";
}
function pt(e, t, n) {
  var a = e.eventRange.range;
  return {
    isPast: a.end < (n || t.start),
    isFuture: a.start >= (n || t.end),
    isToday: t && Le(t, a.start)
  };
}
function tj(e) {
  var t = ["fc-event"];
  return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
}
function nj(e) {
  return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString();
}
function c0(e, t) {
  var n = e.eventRange, a = n.def, r = n.instance, o = a.url;
  if (o)
    return { href: o };
  var i = t.emitter, c = t.options, l = c.eventInteractive;
  return l == null && (l = a.interactive, l == null && (l = Boolean(i.hasHandlers("eventClick")))), l ? X2(function(s) {
    i.trigger("eventClick", {
      el: s.target,
      event: new q(t, a, r),
      jsEvent: s,
      view: t.viewApi
    });
  }) : {};
}
var aj = {
  start: E,
  end: E,
  allDay: Boolean
};
function rj(e, t, n) {
  var a = oj(e, t), r = a.range;
  if (!r.start)
    return null;
  if (!r.end) {
    if (n == null)
      return null;
    r.end = t.add(r.start, n);
  }
  return a;
}
function oj(e, t) {
  var n = Fa(e, aj), a = n.refined, r = n.extra, o = a.start ? t.createMarkerMeta(a.start) : null, i = a.end ? t.createMarkerMeta(a.end) : null, c = a.allDay;
  return c == null && (c = o && o.isTimeUnspecified && (!i || i.isTimeUnspecified)), w({ range: {
    start: o ? o.marker : null,
    end: i ? i.marker : null
  }, allDay: c }, r);
}
function ij(e, t) {
  return YW(e.range, t.range) && e.allDay === t.allDay && cj(e, t);
}
function cj(e, t) {
  for (var n in t)
    if (n !== "range" && n !== "allDay" && e[n] !== t[n])
      return !1;
  for (var n in e)
    if (!(n in t))
      return !1;
  return !0;
}
function lj(e, t) {
  return w(w({}, s0(e.range, t, e.allDay)), { allDay: e.allDay });
}
function l0(e, t, n) {
  return w(w({}, s0(e, t, n)), { timeZone: t.timeZone });
}
function s0(e, t, n) {
  return {
    start: t.toDate(e.start),
    end: t.toDate(e.end),
    startStr: t.formatIso(e.start, { omitTime: n }),
    endStr: t.formatIso(e.end, { omitTime: n })
  };
}
function sj(e, t, n) {
  var a = n0({ editable: !1 }, n), r = ra(
    a.refined,
    a.extra,
    "",
    e.allDay,
    !0,
    n
  );
  return {
    def: r,
    ui: o0(r, t),
    instance: Pa(r.defId, e.range),
    range: e.range,
    isStart: !0,
    isEnd: !0
  };
}
function d0(e, t, n) {
  n.emitter.trigger("select", w(w({}, Ga(e, n)), { jsEvent: t ? t.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function dj(e, t) {
  t.emitter.trigger("unselect", {
    jsEvent: e ? e.origEvent : null,
    view: t.viewApi || t.calendarApi.view
  });
}
function Ga(e, t) {
  for (var n = {}, a = 0, r = t.pluginHooks.dateSpanTransforms; a < r.length; a++) {
    var o = r[a];
    w(n, o(e, t));
  }
  return w(n, lj(e, t.dateEnv)), n;
}
function Ho(e, t, n) {
  var a = n.dateEnv, r = n.options, o = t;
  return e ? (o = F(o), o = a.add(o, r.defaultAllDayEventDuration)) : o = a.add(o, r.defaultTimedEventDuration), o;
}
function Ya(e, t, n, a) {
  var r = tn(e.defs, t), o = ue();
  for (var i in e.defs) {
    var c = e.defs[i];
    o.defs[i] = uj(c, r[i], n, a);
  }
  for (var l in e.instances) {
    var s = e.instances[l], c = o.defs[s.defId];
    o.instances[l] = mj(s, c, r[s.defId], n, a);
  }
  return o;
}
function uj(e, t, n, a) {
  var r = n.standardProps || {};
  r.hasEnd == null && t.durationEditable && (n.startDelta || n.endDelta) && (r.hasEnd = !0);
  var o = w(w(w({}, e), r), { ui: w(w({}, e.ui), r.ui) });
  n.extendedProps && (o.extendedProps = w(w({}, o.extendedProps), n.extendedProps));
  for (var i = 0, c = a.pluginHooks.eventDefMutationAppliers; i < c.length; i++) {
    var l = c[i];
    l(o, n, a);
  }
  return !o.hasEnd && a.options.forceEventDuration && (o.hasEnd = !0), o;
}
function mj(e, t, n, a, r) {
  var o = r.dateEnv, i = a.standardProps && a.standardProps.allDay === !0, c = a.standardProps && a.standardProps.hasEnd === !1, l = w({}, e);
  return i && (l.range = a0(l.range)), a.datesDelta && n.startEditable && (l.range = {
    start: o.add(l.range.start, a.datesDelta),
    end: o.add(l.range.end, a.datesDelta)
  }), a.startDelta && n.durationEditable && (l.range = {
    start: o.add(l.range.start, a.startDelta),
    end: l.range.end
  }), a.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: o.add(l.range.end, a.endDelta)
  }), c && (l.range = {
    start: l.range.start,
    end: Ho(t.allDay, l.range.start, r)
  }), t.allDay && (l.range = {
    start: F(l.range.start),
    end: F(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = Ho(t.allDay, l.range.start, r)), l;
}
var fj = function() {
  function e(t, n, a) {
    this.type = t, this.getCurrentData = n, this.dateEnv = a;
  }
  return Object.defineProperty(e.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.getOption = function(t) {
    return this.getCurrentData().options[t];
  }, e;
}(), hj = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: E,
  eventDataTransform: E,
  success: E,
  failure: E
};
function u0(e, t, n) {
  n === void 0 && (n = m0(t));
  var a;
  if (typeof e == "string" ? a = { url: e } : typeof e == "function" || Array.isArray(e) ? a = { events: e } : typeof e == "object" && e && (a = e), a) {
    var r = Fa(a, n), o = r.refined, i = r.extra, c = vj(o, t);
    if (c)
      return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: o.defaultAllDay,
        eventDataTransform: o.eventDataTransform,
        success: o.success,
        failure: o.failure,
        publicId: o.id || "",
        sourceId: ot(),
        sourceDefId: c.sourceDefId,
        meta: c.meta,
        ui: en(o, t),
        extendedProps: i
      };
  }
  return null;
}
function m0(e) {
  return w(w(w({}, Jt), hj), e.pluginHooks.eventSourceRefiners);
}
function vj(e, t) {
  for (var n = t.pluginHooks.eventSourceDefs, a = n.length - 1; a >= 0; a -= 1) {
    var r = n[a], o = r.parseMeta(e);
    if (o)
      return { sourceDefId: a, meta: o };
  }
  return null;
}
function pj(e, t) {
  switch (t.type) {
    case "CHANGE_DATE":
      return t.dateMarker;
    default:
      return e;
  }
}
function _j(e, t) {
  var n = e.initialDate;
  return n != null ? t.createMarker(n) : xt(e.now, t);
}
function xt(e, t) {
  return typeof e == "function" && (e = e()), e == null ? t.createNowMarker() : t.createMarker(e);
}
var gj = function() {
  function e() {
  }
  return e.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  }, e.prototype.dispatch = function(t) {
    return this.currentDataManager.dispatch(t);
  }, Object.defineProperty(e.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.batchRendering = function(t) {
    t();
  }, e.prototype.updateSize = function() {
    this.trigger("_resize", !0);
  }, e.prototype.setOption = function(t, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: t,
      rawOptionValue: n
    });
  }, e.prototype.getOption = function(t) {
    return this.currentDataManager.currentCalendarOptionsInput[t];
  }, e.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }, e.prototype.on = function(t, n) {
    var a = this.currentDataManager;
    a.currentCalendarOptionsRefiners[t] ? a.emitter.on(t, n) : console.warn("Unknown listener name '" + t + "'");
  }, e.prototype.off = function(t, n) {
    this.currentDataManager.emitter.off(t, n);
  }, e.prototype.trigger = function(t) {
    for (var n, a = [], r = 1; r < arguments.length; r++)
      a[r - 1] = arguments[r];
    (n = this.currentDataManager.emitter).trigger.apply(n, j([t], a));
  }, e.prototype.changeView = function(t, n) {
    var a = this;
    this.batchRendering(function() {
      if (a.unselect(), n)
        if (n.start && n.end)
          a.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t
          }), a.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          var r = a.getCurrentData().dateEnv;
          a.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t,
            dateMarker: r.createMarker(n)
          });
        }
      else
        a.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: t
        });
    });
  }, e.prototype.zoomTo = function(t, n) {
    var a = this.getCurrentData(), r;
    n = n || "day", r = a.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), r ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: r.type,
      dateMarker: t
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t
    });
  }, e.prototype.getUnitViewSpec = function(t) {
    var n = this.getCurrentData(), a = n.viewSpecs, r = n.toolbarConfig, o = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), i, c;
    for (var l in a)
      o.push(l);
    for (i = 0; i < o.length; i += 1)
      if (c = a[o[i]], c && c.singleUnit === t)
        return c;
    return null;
  }, e.prototype.prev = function() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }, e.prototype.next = function() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }, e.prototype.prevYear = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t.dateEnv.addYears(t.currentDate, -1)
    });
  }, e.prototype.nextYear = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t.dateEnv.addYears(t.currentDate, 1)
    });
  }, e.prototype.today = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: xt(t.calendarOptions.now, t.dateEnv)
    });
  }, e.prototype.gotoDate = function(t) {
    var n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(t)
    });
  }, e.prototype.incrementDate = function(t) {
    var n = this.getCurrentData(), a = I(t);
    a && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, a)
    }));
  }, e.prototype.getDate = function() {
    var t = this.getCurrentData();
    return t.dateEnv.toDate(t.currentDate);
  }, e.prototype.formatDate = function(t, n) {
    var a = this.getCurrentData().dateEnv;
    return a.format(a.createMarker(t), J(n));
  }, e.prototype.formatRange = function(t, n, a) {
    var r = this.getCurrentData().dateEnv;
    return r.formatRange(r.createMarker(t), r.createMarker(n), J(a), a);
  }, e.prototype.formatIso = function(t, n) {
    var a = this.getCurrentData().dateEnv;
    return a.formatIso(a.createMarker(t), { omitTime: n });
  }, e.prototype.select = function(t, n) {
    var a;
    n == null ? t.start != null ? a = t : a = {
      start: t,
      end: null
    } : a = {
      start: t,
      end: n
    };
    var r = this.getCurrentData(), o = rj(a, r.dateEnv, I({ days: 1 }));
    o && (this.dispatch({ type: "SELECT_DATES", selection: o }), d0(o, null, r));
  }, e.prototype.unselect = function(t) {
    var n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), dj(t, n));
  }, e.prototype.addEvent = function(t, n) {
    if (t instanceof q) {
      var a = t._def, r = t._instance, o = this.getCurrentData();
      return o.eventStore.defs[a.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: na({ def: a, instance: r })
      }), this.triggerEventAdd(t)), t;
    }
    var i = this.getCurrentData(), c;
    if (n instanceof je)
      c = n.internalEventSource;
    else if (typeof n == "boolean")
      n && (c = Oa(i.eventSources)[0]);
    else if (n != null) {
      var l = this.getEventSourceById(n);
      if (!l)
        return console.warn('Could not find an event source with ID "' + n + '"'), null;
      c = l.internalEventSource;
    }
    var s = t0(t, c, i, !1);
    if (s) {
      var d = new q(i, s.def, s.def.recurringDef ? null : s.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: na(s)
      }), this.triggerEventAdd(d), d;
    }
    return null;
  }, e.prototype.triggerEventAdd = function(t) {
    var n = this, a = this.getCurrentData().emitter;
    a.trigger("eventAdd", {
      event: t,
      relatedEvents: [],
      revert: function() {
        n.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: f0(t)
        });
      }
    });
  }, e.prototype.getEventById = function(t) {
    var n = this.getCurrentData(), a = n.eventStore, r = a.defs, o = a.instances;
    t = String(t);
    for (var i in r) {
      var c = r[i];
      if (c.publicId === t) {
        if (c.recurringDef)
          return new q(n, c, null);
        for (var l in o) {
          var s = o[l];
          if (s.defId === c.defId)
            return new q(n, c, s);
        }
      }
    }
    return null;
  }, e.prototype.getEvents = function() {
    var t = this.getCurrentData();
    return Pe(t.eventStore, t);
  }, e.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, e.prototype.getEventSources = function() {
    var t = this.getCurrentData(), n = t.eventSources, a = [];
    for (var r in n)
      a.push(new je(t, n[r]));
    return a;
  }, e.prototype.getEventSourceById = function(t) {
    var n = this.getCurrentData(), a = n.eventSources;
    t = String(t);
    for (var r in a)
      if (a[r].publicId === t)
        return new je(n, a[r]);
    return null;
  }, e.prototype.addEventSource = function(t) {
    var n = this.getCurrentData();
    if (t instanceof je)
      return n.eventSources[t.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [t.internalEventSource]
      }), t;
    var a = u0(t, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new je(n, a)) : null;
  }, e.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, e.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, e.prototype.scrollToTime = function(t) {
    var n = I(t);
    n && this.trigger("_scrollRequest", { time: n });
  }, e;
}(), q = function() {
  function e(t, n, a) {
    this._context = t, this._def = n, this._instance = a || null;
  }
  return e.prototype.setProp = function(t, n) {
    var a, r;
    if (t in e0)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (t === "id")
      n = Bt[t](n), this.mutate({
        standardProps: { publicId: n }
      });
    else if (t in Bt)
      n = Bt[t](n), this.mutate({
        standardProps: (a = {}, a[t] = n, a)
      });
    else if (t in Jt) {
      var o = Jt[t](n);
      t === "color" ? o = { backgroundColor: n, borderColor: n } : t === "editable" ? o = { startEditable: n, durationEditable: n } : o = (r = {}, r[t] = n, r), this.mutate({
        standardProps: { ui: o }
      });
    } else
      console.warn("Could not set prop '" + t + "'. Use setExtendedProp instead.");
  }, e.prototype.setExtendedProp = function(t, n) {
    var a;
    this.mutate({
      extendedProps: (a = {}, a[t] = n, a)
    });
  }, e.prototype.setStart = function(t, n) {
    n === void 0 && (n = {});
    var a = this._context.dateEnv, r = a.createMarker(t);
    if (r && this._instance) {
      var o = this._instance.range, i = qe(o.start, r, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: i }) : this.mutate({ startDelta: i });
    }
  }, e.prototype.setEnd = function(t, n) {
    n === void 0 && (n = {});
    var a = this._context.dateEnv, r;
    if (!(t != null && (r = a.createMarker(t), !r)) && this._instance)
      if (r) {
        var o = qe(this._instance.range.end, r, a, n.granularity);
        this.mutate({ endDelta: o });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, e.prototype.setDates = function(t, n, a) {
    a === void 0 && (a = {});
    var r = this._context.dateEnv, o = { allDay: a.allDay }, i = r.createMarker(t), c;
    if (!!i && !(n != null && (c = r.createMarker(n), !c)) && this._instance) {
      var l = this._instance.range;
      a.allDay === !0 && (l = a0(l));
      var s = qe(l.start, i, r, a.granularity);
      if (c) {
        var d = qe(l.end, c, r, a.granularity);
        pW(s, d) ? this.mutate({ datesDelta: s, standardProps: o }) : this.mutate({ startDelta: s, endDelta: d, standardProps: o });
      } else
        o.hasEnd = !1, this.mutate({ datesDelta: s, standardProps: o });
    }
  }, e.prototype.moveStart = function(t) {
    var n = I(t);
    n && this.mutate({ startDelta: n });
  }, e.prototype.moveEnd = function(t) {
    var n = I(t);
    n && this.mutate({ endDelta: n });
  }, e.prototype.moveDates = function(t) {
    var n = I(t);
    n && this.mutate({ datesDelta: n });
  }, e.prototype.setAllDay = function(t, n) {
    n === void 0 && (n = {});
    var a = { allDay: t }, r = n.maintainDuration;
    r == null && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== t && (a.hasEnd = r), this.mutate({ standardProps: a });
  }, e.prototype.formatRange = function(t) {
    var n = this._context.dateEnv, a = this._instance, r = J(t);
    return this._def.hasEnd ? n.formatRange(a.range.start, a.range.end, r, {
      forcedStartTzo: a.forcedStartTzo,
      forcedEndTzo: a.forcedEndTzo
    }) : n.format(a.range.start, r, {
      forcedTzo: a.forcedStartTzo
    });
  }, e.prototype.mutate = function(t) {
    var n = this._instance;
    if (n) {
      var a = this._def, r = this._context, o = r.getCurrentData().eventStore, i = Ua(o, n.instanceId), c = {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      i = Ya(i, c, t, r);
      var l = new e(r, a, n);
      this._def = i.defs[a.defId], this._instance = i.instances[n.instanceId], r.dispatch({
        type: "MERGE_EVENTS",
        eventStore: i
      }), r.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: Pe(i, r, n),
        revert: function() {
          r.dispatch({
            type: "RESET_EVENTS",
            eventStore: o
          });
        }
      });
    }
  }, e.prototype.remove = function() {
    var t = this._context, n = f0(this);
    t.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), t.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        t.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }, Object.defineProperty(e.prototype, "source", {
    get: function() {
      var t = this._def.sourceId;
      return t ? new je(this._context, this._context.getCurrentData().eventSources[t]) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "startStr", {
    get: function() {
      var t = this._instance;
      return t ? this._context.dateEnv.formatIso(t.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: t.forcedStartTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "endStr", {
    get: function() {
      var t = this._instance;
      return t && this._def.hasEnd ? this._context.dateEnv.formatIso(t.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: t.forcedEndTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.toPlainObject = function(t) {
    t === void 0 && (t = {});
    var n = this._def, a = n.ui, r = this, o = r.startStr, i = r.endStr, c = {};
    return n.title && (c.title = n.title), o && (c.start = o), i && (c.end = i), n.publicId && (c.id = n.publicId), n.groupId && (c.groupId = n.groupId), n.url && (c.url = n.url), a.display && a.display !== "auto" && (c.display = a.display), t.collapseColor && a.backgroundColor && a.backgroundColor === a.borderColor ? c.color = a.backgroundColor : (a.backgroundColor && (c.backgroundColor = a.backgroundColor), a.borderColor && (c.borderColor = a.borderColor)), a.textColor && (c.textColor = a.textColor), a.classNames.length && (c.classNames = a.classNames), Object.keys(n.extendedProps).length && (t.collapseExtendedProps ? w(c, n.extendedProps) : c.extendedProps = n.extendedProps), c;
  }, e.prototype.toJSON = function() {
    return this.toPlainObject();
  }, e;
}();
function f0(e) {
  var t, n, a = e._def, r = e._instance;
  return {
    defs: (t = {}, t[a.defId] = a, t),
    instances: r ? (n = {}, n[r.instanceId] = r, n) : {}
  };
}
function Pe(e, t, n) {
  var a = e.defs, r = e.instances, o = [], i = n ? n.instanceId : "";
  for (var c in r) {
    var l = r[c], s = a[l.defId];
    l.instanceId !== i && o.push(new q(t, s, l));
  }
  return o;
}
var h0 = {};
function wj(e, t) {
  h0[e] = t;
}
function yj(e) {
  return new h0[e]();
}
var Cj = function() {
  function e() {
  }
  return e.prototype.getMarkerYear = function(t) {
    return t.getUTCFullYear();
  }, e.prototype.getMarkerMonth = function(t) {
    return t.getUTCMonth();
  }, e.prototype.getMarkerDay = function(t) {
    return t.getUTCDate();
  }, e.prototype.arrayToMarker = function(t) {
    return ie(t);
  }, e.prototype.markerToArray = function(t) {
    return xe(t);
  }, e;
}();
wj("gregory", Cj);
var bj = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function $j(e) {
  var t = bj.exec(e);
  if (t) {
    var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? Number("0." + t[12]) * 1e3 : 0));
    if (K2(n)) {
      var a = null;
      return t[13] && (a = (t[15] === "-" ? -1 : 1) * (Number(t[16] || 0) * 60 + Number(t[18] || 0))), {
        marker: n,
        isTimeUnspecified: !t[6],
        timeZoneOffset: a
      };
    }
  }
  return null;
}
var Ej = function() {
  function e(t) {
    var n = this.timeZone = t.timeZone, a = n !== "local" && n !== "UTC";
    t.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new t.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!a || this.namedTimeZoneImpl), this.calendarSystem = yj(t.calendarSystem), this.locale = t.locale, this.weekDow = t.locale.week.dow, this.weekDoy = t.locale.week.doy, t.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof t.firstDay == "number" && (this.weekDow = t.firstDay), typeof t.weekNumberCalculation == "function" && (this.weekNumberFunc = t.weekNumberCalculation), this.weekText = t.weekText != null ? t.weekText : t.locale.options.weekText, this.weekTextLong = (t.weekTextLong != null ? t.weekTextLong : t.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = t.cmdFormatter, this.defaultSeparator = t.defaultSeparator;
  }
  return e.prototype.createMarker = function(t) {
    var n = this.createMarkerMeta(t);
    return n === null ? null : n.marker;
  }, e.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : ie(_o(new Date()));
  }, e.prototype.createMarkerMeta = function(t) {
    if (typeof t == "string")
      return this.parse(t);
    var n = null;
    return typeof t == "number" ? n = this.timestampToMarker(t) : t instanceof Date ? (t = t.valueOf(), isNaN(t) || (n = this.timestampToMarker(t))) : Array.isArray(t) && (n = ie(t)), n === null || !K2(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }, e.prototype.parse = function(t) {
    var n = $j(t);
    if (n === null)
      return null;
    var a = n.marker, r = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? a = this.timestampToMarker(a.valueOf() - n.timeZoneOffset * 60 * 1e3) : r = n.timeZoneOffset), { marker: a, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: r };
  }, e.prototype.getYear = function(t) {
    return this.calendarSystem.getMarkerYear(t);
  }, e.prototype.getMonth = function(t) {
    return this.calendarSystem.getMarkerMonth(t);
  }, e.prototype.add = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] += n.years, a[1] += n.months, a[2] += n.days, a[6] += n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.subtract = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] -= n.years, a[1] -= n.months, a[2] -= n.days, a[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.addYears = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] += n, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.addMonths = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[1] += n, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.diffWholeYears = function(t, n) {
    var a = this.calendarSystem;
    return Se(t) === Se(n) && a.getMarkerDay(t) === a.getMarkerDay(n) && a.getMarkerMonth(t) === a.getMarkerMonth(n) ? a.getMarkerYear(n) - a.getMarkerYear(t) : null;
  }, e.prototype.diffWholeMonths = function(t, n) {
    var a = this.calendarSystem;
    return Se(t) === Se(n) && a.getMarkerDay(t) === a.getMarkerDay(n) ? a.getMarkerMonth(n) - a.getMarkerMonth(t) + (a.getMarkerYear(n) - a.getMarkerYear(t)) * 12 : null;
  }, e.prototype.greatestWholeUnit = function(t, n) {
    var a = this.diffWholeYears(t, n);
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(t, n), a !== null ? { unit: "month", value: a } : (a = rW(t, n), a !== null ? { unit: "week", value: a } : (a = Yt(t, n), a !== null ? { unit: "day", value: a } : (a = eW(t, n), Hn(a) ? { unit: "hour", value: a } : (a = tW(t, n), Hn(a) ? { unit: "minute", value: a } : (a = nW(t, n), Hn(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - t.valueOf() }))))));
  }, e.prototype.countDurationsBetween = function(t, n, a) {
    var r;
    return a.years && (r = this.diffWholeYears(t, n), r !== null) ? r / gW(a) : a.months && (r = this.diffWholeMonths(t, n), r !== null) ? r / wW(a) : a.days && (r = Yt(t, n), r !== null) ? r / Ge(a) : (n.valueOf() - t.valueOf()) / yt(a);
  }, e.prototype.startOf = function(t, n) {
    return n === "year" ? this.startOfYear(t) : n === "month" ? this.startOfMonth(t) : n === "week" ? this.startOfWeek(t) : n === "day" ? F(t) : n === "hour" ? oW(t) : n === "minute" ? iW(t) : n === "second" ? cW(t) : null;
  }, e.prototype.startOfYear = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t)
    ]);
  }, e.prototype.startOfMonth = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t)
    ]);
  }, e.prototype.startOfWeek = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t),
      t.getUTCDate() - (t.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }, e.prototype.computeWeekNumber = function(t) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(t)) : lW(t, this.weekDow, this.weekDoy);
  }, e.prototype.format = function(t, n, a) {
    return a === void 0 && (a = {}), n.format({
      marker: t,
      timeZoneOffset: a.forcedTzo != null ? a.forcedTzo : this.offsetForMarker(t)
    }, this);
  }, e.prototype.formatRange = function(t, n, a, r) {
    return r === void 0 && (r = {}), r.isEndExclusive && (n = Be(n, -1)), a.formatRange({
      marker: t,
      timeZoneOffset: r.forcedStartTzo != null ? r.forcedStartTzo : this.offsetForMarker(t)
    }, {
      marker: n,
      timeZoneOffset: r.forcedEndTzo != null ? r.forcedEndTzo : this.offsetForMarker(n)
    }, this, r.defaultSeparator);
  }, e.prototype.formatIso = function(t, n) {
    n === void 0 && (n = {});
    var a = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(t)), yW(t, a, n.omitTime);
  }, e.prototype.timestampToMarker = function(t) {
    return this.timeZone === "local" ? ie(_o(new Date(t))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(t) : ie(this.namedTimeZoneImpl.timestampToArray(t));
  }, e.prototype.offsetForMarker = function(t) {
    return this.timeZone === "local" ? -go(xe(t)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(xe(t)) : null;
  }, e.prototype.toDate = function(t, n) {
    return this.timeZone === "local" ? go(xe(t)) : this.timeZone === "UTC" ? new Date(t.valueOf()) : this.namedTimeZoneImpl ? new Date(t.valueOf() - this.namedTimeZoneImpl.offsetForArray(xe(t)) * 1e3 * 60) : new Date(t.valueOf() - (n || 0));
  }, e;
}(), xj = [], v0 = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, p0 = w(w({}, v0), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(e, t) {
      return t === "day" ? "Today" : "This " + e;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(e) {
    return "Show " + e + " more event" + (e === 1 ? "" : "s");
  }
});
function Sj(e) {
  for (var t = e.length > 0 ? e[0].code : "en", n = xj.concat(e), a = {
    en: p0
  }, r = 0, o = n; r < o.length; r++) {
    var i = o[r];
    a[i.code] = i;
  }
  return {
    map: a,
    defaultCode: t
  };
}
function _0(e, t) {
  return typeof e == "object" && !Array.isArray(e) ? g0(e.code, [e.code], e) : zj(e, t);
}
function zj(e, t) {
  var n = [].concat(e || []), a = Mj(n, t) || p0;
  return g0(e, n, a);
}
function Mj(e, t) {
  for (var n = 0; n < e.length; n += 1)
    for (var a = e[n].toLocaleLowerCase().split("-"), r = a.length; r > 0; r -= 1) {
      var o = a.slice(0, r).join("-");
      if (t[o])
        return t[o];
    }
  return null;
}
function g0(e, t, n) {
  var a = Ba([v0, n], ["buttonText"]);
  delete a.code;
  var r = a.week;
  return delete a.week, {
    codeArg: e,
    codes: t,
    week: r,
    simpleNumberFormat: new Intl.NumberFormat(e),
    options: a
  };
}
var Dj = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function Hj(e, t) {
  return Qt(Tj(e), null, t);
}
function Tj(e) {
  var t;
  return e === !0 ? t = [{}] : Array.isArray(e) ? t = e.filter(function(n) {
    return n.daysOfWeek;
  }) : typeof e == "object" && e ? t = [e] : t = [], t = t.map(function(n) {
    return w(w({}, Dj), n);
  }), t;
}
function Rj(e, t) {
  return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
}
function w0(e, t) {
  var n = {
    left: Math.max(e.left, t.left),
    right: Math.min(e.right, t.right),
    top: Math.max(e.top, t.top),
    bottom: Math.min(e.bottom, t.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
function Vj(e, t) {
  return {
    left: Math.min(Math.max(e.left, t.left), t.right),
    top: Math.min(Math.max(e.top, t.top), t.bottom)
  };
}
function Aj(e) {
  return {
    left: (e.left + e.right) / 2,
    top: (e.top + e.bottom) / 2
  };
}
function kj(e, t) {
  return {
    left: e.left - t.left,
    top: e.top - t.top
  };
}
var An;
function y0() {
  return An == null && (An = Ij()), An;
}
function Ij() {
  if (typeof document > "u")
    return !0;
  var e = document.createElement("div");
  e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
  var t = e.querySelector("div"), n = t.offsetHeight > 0;
  return document.body.removeChild(e), n;
}
function C0(e, t, n, a) {
  return {
    dow: e.getUTCDay(),
    isDisabled: Boolean(a && !Le(a.activeRange, e)),
    isOther: Boolean(a && !Le(a.currentRange, e)),
    isToday: Boolean(t && Le(t, e)),
    isPast: Boolean(n ? e < n : t ? e < t.start : !1),
    isFuture: Boolean(n ? e > n : t ? e >= t.end : !1)
  };
}
function Za(e, t) {
  var n = [
    "fc-day",
    "fc-day-" + QU[e.dow]
  ];
  return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
}
var Lj = J({ year: "numeric", month: "long", day: "numeric" }), Pj = J({ week: "long" });
function Xa(e, t, n, a) {
  n === void 0 && (n = "day"), a === void 0 && (a = !0);
  var r = e.dateEnv, o = e.options, i = e.calendarApi, c = r.format(t, n === "week" ? Pj : Lj);
  if (o.navLinks) {
    var l = r.toDate(t), s = function(d) {
      var h = n === "day" ? o.navLinkDayClick : n === "week" ? o.navLinkWeekClick : null;
      typeof h == "function" ? h.call(i, r.toDate(t), d) : (typeof h == "string" && (n = h), i.zoomTo(t, n));
    };
    return w({ title: ht(o.navLinkHint, [c, l], c), "data-navlink": "" }, a ? Z2(s) : { onClick: s });
  }
  return { "aria-label": c };
}
var kn = null;
function Bj() {
  return kn === null && (kn = Oj()), kn;
}
function Oj() {
  var e = document.createElement("div");
  ft(e, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), e.innerHTML = "<div></div>", document.body.appendChild(e);
  var t = e.firstChild, n = t.getBoundingClientRect().left > e.getBoundingClientRect().left;
  return ka(e), n;
}
var In;
function Nj() {
  return In || (In = Fj()), In;
}
function Fj() {
  var e = document.createElement("div");
  e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
  var t = b0(e);
  return document.body.removeChild(e), t;
}
function b0(e) {
  return {
    x: e.offsetHeight - e.clientHeight,
    y: e.offsetWidth - e.clientWidth
  };
}
function Uj(e, t) {
  t === void 0 && (t = !1);
  var n = window.getComputedStyle(e), a = parseInt(n.borderLeftWidth, 10) || 0, r = parseInt(n.borderRightWidth, 10) || 0, o = parseInt(n.borderTopWidth, 10) || 0, i = parseInt(n.borderBottomWidth, 10) || 0, c = b0(e), l = c.y - a - r, s = c.x - o - i, d = {
    borderLeft: a,
    borderRight: r,
    borderTop: o,
    borderBottom: i,
    scrollbarBottom: s,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return Bj() && n.direction === "rtl" ? d.scrollbarLeft = l : d.scrollbarRight = l, t && (d.paddingLeft = parseInt(n.paddingLeft, 10) || 0, d.paddingRight = parseInt(n.paddingRight, 10) || 0, d.paddingTop = parseInt(n.paddingTop, 10) || 0, d.paddingBottom = parseInt(n.paddingBottom, 10) || 0), d;
}
function Wj(e, t, n) {
  t === void 0 && (t = !1);
  var a = n ? e.getBoundingClientRect() : Ka(e), r = Uj(e, t), o = {
    left: a.left + r.borderLeft + r.scrollbarLeft,
    right: a.right - r.borderRight - r.scrollbarRight,
    top: a.top + r.borderTop,
    bottom: a.bottom - r.borderBottom - r.scrollbarBottom
  };
  return t && (o.left += r.paddingLeft, o.right -= r.paddingRight, o.top += r.paddingTop, o.bottom -= r.paddingBottom), o;
}
function Ka(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + window.pageXOffset,
    top: t.top + window.pageYOffset,
    right: t.right + window.pageXOffset,
    bottom: t.bottom + window.pageYOffset
  };
}
function jj(e) {
  for (var t = $0(e), n = e.getBoundingClientRect(), a = 0, r = t; a < r.length; a++) {
    var o = r[a], i = w0(n, o.getBoundingClientRect());
    if (i)
      n = i;
    else
      return null;
  }
  return n;
}
function $0(e) {
  for (var t = []; e instanceof HTMLElement; ) {
    var n = window.getComputedStyle(e);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode;
  }
  return t;
}
function qj(e, t, n) {
  var a = !1, r = function() {
    a || (a = !0, t.apply(this, arguments));
  }, o = function() {
    a || (a = !0, n && n.apply(this, arguments));
  }, i = e(r, o);
  i && typeof i.then == "function" && i.then(r, o);
}
var wn = function() {
  function e() {
    this.handlers = {}, this.thisContext = null;
  }
  return e.prototype.setThisContext = function(t) {
    this.thisContext = t;
  }, e.prototype.setOptions = function(t) {
    this.options = t;
  }, e.prototype.on = function(t, n) {
    Gj(this.handlers, t, n);
  }, e.prototype.off = function(t, n) {
    Yj(this.handlers, t, n);
  }, e.prototype.trigger = function(t) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    for (var r = this.handlers[t] || [], o = this.options && this.options[t], i = [].concat(o || [], r), c = 0, l = i; c < l.length; c++) {
      var s = l[c];
      s.apply(this.thisContext, n);
    }
  }, e.prototype.hasHandlers = function(t) {
    return Boolean(this.handlers[t] && this.handlers[t].length || this.options && this.options[t]);
  }, e;
}();
function Gj(e, t, n) {
  (e[t] || (e[t] = [])).push(n);
}
function Yj(e, t, n) {
  n ? e[t] && (e[t] = e[t].filter(function(a) {
    return a !== n;
  })) : delete e[t];
}
var oa = function() {
  function e(t, n, a, r) {
    this.els = n;
    var o = this.originClientRect = t.getBoundingClientRect();
    a && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top);
  }
  return e.prototype.buildElHorizontals = function(t) {
    for (var n = [], a = [], r = 0, o = this.els; r < o.length; r++) {
      var i = o[r], c = i.getBoundingClientRect();
      n.push(c.left - t), a.push(c.right - t);
    }
    this.lefts = n, this.rights = a;
  }, e.prototype.buildElVerticals = function(t) {
    for (var n = [], a = [], r = 0, o = this.els; r < o.length; r++) {
      var i = o[r], c = i.getBoundingClientRect();
      n.push(c.top - t), a.push(c.bottom - t);
    }
    this.tops = n, this.bottoms = a;
  }, e.prototype.leftToIndex = function(t) {
    var n = this, a = n.lefts, r = n.rights, o = a.length, i;
    for (i = 0; i < o; i += 1)
      if (t >= a[i] && t < r[i])
        return i;
  }, e.prototype.topToIndex = function(t) {
    var n = this, a = n.tops, r = n.bottoms, o = a.length, i;
    for (i = 0; i < o; i += 1)
      if (t >= a[i] && t < r[i])
        return i;
  }, e.prototype.getWidth = function(t) {
    return this.rights[t] - this.lefts[t];
  }, e.prototype.getHeight = function(t) {
    return this.bottoms[t] - this.tops[t];
  }, e;
}(), Qa = function() {
  function e() {
  }
  return e.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  }, e.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  }, e.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  }, e.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  }, e.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  }, e.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }, e.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  }, e.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }, e;
}(), Zj = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this) || this;
    return a.el = n, a;
  }
  return t.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  }, t.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  }, t.prototype.setScrollTop = function(n) {
    this.el.scrollTop = n;
  }, t.prototype.setScrollLeft = function(n) {
    this.el.scrollLeft = n;
  }, t.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  }, t.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  }, t.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  }, t.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  }, t;
}(Qa), Xj = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.getScrollTop = function() {
    return window.pageYOffset;
  }, t.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  }, t.prototype.setScrollTop = function(n) {
    window.scroll(window.pageXOffset, n);
  }, t.prototype.setScrollLeft = function(n) {
    window.scroll(n, window.pageYOffset);
  }, t.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  }, t.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  }, t.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  }, t.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  }, t;
}(Qa), St = function() {
  function e(t) {
    this.iconOverrideOption && this.setIconOverride(t[this.iconOverrideOption]);
  }
  return e.prototype.setIconOverride = function(t) {
    var n, a;
    if (typeof t == "object" && t) {
      n = w({}, this.iconClasses);
      for (a in t)
        n[a] = this.applyIconOverridePrefix(t[a]);
      this.iconClasses = n;
    } else
      t === !1 && (this.iconClasses = {});
  }, e.prototype.applyIconOverridePrefix = function(t) {
    var n = this.iconOverridePrefix;
    return n && t.indexOf(n) !== 0 && (t = n + t), t;
  }, e.prototype.getClass = function(t) {
    return this.classes[t] || "";
  }, e.prototype.getIconClass = function(t, n) {
    var a;
    return n && this.rtlIconClasses ? a = this.rtlIconClasses[t] || this.iconClasses[t] : a = this.iconClasses[t], a ? this.baseIconClass + " " + a : "";
  }, e.prototype.getCustomButtonIconClass = function(t) {
    var n;
    return this.iconOverrideCustomButtonOption && (n = t[this.iconOverrideCustomButtonOption], n) ? this.baseIconClass + " " + this.applyIconOverridePrefix(n) : "";
  }, e;
}();
St.prototype.classes = {};
St.prototype.iconClasses = {};
St.prototype.baseIconClass = "";
St.prototype.iconOverridePrefix = "";
var Kj = function() {
  function e(t, n, a, r) {
    var o = this;
    this.execFunc = t, this.emitter = n, this.scrollTime = a, this.scrollTimeReset = r, this.handleScrollRequest = function(i) {
      o.queuedRequest = w({}, o.queuedRequest || {}, i), o.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  return e.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }, e.prototype.update = function(t) {
    t && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }, e.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }, e.prototype.drain = function() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }, e;
}(), Ue = W2({});
function Qj(e, t, n, a, r, o, i, c, l, s, d, h, p) {
  return {
    dateEnv: r,
    options: n,
    pluginHooks: i,
    emitter: s,
    dispatch: c,
    getCurrentData: l,
    calendarApi: d,
    viewSpec: e,
    viewApi: t,
    dateProfileGenerator: a,
    theme: o,
    isRtl: n.direction === "rtl",
    addResizeHandler: function(g) {
      s.on("_resize", g);
    },
    removeResizeHandler: function(g) {
      s.off("_resize", g);
    },
    createScrollResponder: function(g) {
      return new Kj(g, s, I(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: h,
    unregisterInteractiveComponent: p
  };
}
var yn = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.shouldComponentUpdate = function(n, a) {
    return this.debug && console.log(wo(n, this.props), wo(a, this.state)), !Rn(this.props, n, this.propEquality) || !Rn(this.state, a, this.stateEquality);
  }, t.prototype.safeSetState = function(n) {
    Rn(this.state, w(w({}, this.state), n), this.stateEquality) || this.setState(n);
  }, t.addPropsEquality = Jj, t.addStateEquality = eq, t.contextType = Ue, t;
}(Aa);
yn.prototype.propEquality = {};
yn.prototype.stateEquality = {};
var U = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.contextType = Ue, t;
}(yn);
function Jj(e) {
  var t = Object.create(this.prototype.propEquality);
  w(t, e), this.prototype.propEquality = t;
}
function eq(e) {
  var t = Object.create(this.prototype.stateEquality);
  w(t, e), this.prototype.stateEquality = t;
}
function Ce(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
var ct = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.uid = ot(), n;
  }
  return t.prototype.prepareHits = function() {
  }, t.prototype.queryHit = function(n, a, r, o) {
    return null;
  }, t.prototype.isValidSegDownEl = function(n) {
    return !this.props.eventDrag && !this.props.eventResize && !ee(n, ".fc-event-mirror");
  }, t.prototype.isValidDateDownEl = function(n) {
    return !ee(n, ".fc-event:not(.fc-bg-event)") && !ee(n, ".fc-more-link") && !ee(n, "a[data-navlink]") && !ee(n, ".fc-popover");
  }, t;
}(U);
function He(e) {
  return {
    id: ot(),
    deps: e.deps || [],
    reducers: e.reducers || [],
    isLoadingFuncs: e.isLoadingFuncs || [],
    contextInit: [].concat(e.contextInit || []),
    eventRefiners: e.eventRefiners || {},
    eventDefMemberAdders: e.eventDefMemberAdders || [],
    eventSourceRefiners: e.eventSourceRefiners || {},
    isDraggableTransformers: e.isDraggableTransformers || [],
    eventDragMutationMassagers: e.eventDragMutationMassagers || [],
    eventDefMutationAppliers: e.eventDefMutationAppliers || [],
    dateSelectionTransformers: e.dateSelectionTransformers || [],
    datePointTransforms: e.datePointTransforms || [],
    dateSpanTransforms: e.dateSpanTransforms || [],
    views: e.views || {},
    viewPropsTransformers: e.viewPropsTransformers || [],
    isPropsValid: e.isPropsValid || null,
    externalDefTransforms: e.externalDefTransforms || [],
    viewContainerAppends: e.viewContainerAppends || [],
    eventDropTransformers: e.eventDropTransformers || [],
    componentInteractions: e.componentInteractions || [],
    calendarInteractions: e.calendarInteractions || [],
    themeClasses: e.themeClasses || {},
    eventSourceDefs: e.eventSourceDefs || [],
    cmdFormatter: e.cmdFormatter,
    recurringTypes: e.recurringTypes || [],
    namedTimeZonedImpl: e.namedTimeZonedImpl,
    initialView: e.initialView || "",
    elementDraggingImpl: e.elementDraggingImpl,
    optionChangeHandlers: e.optionChangeHandlers || {},
    scrollGridImpl: e.scrollGridImpl || null,
    contentTypeHandlers: e.contentTypeHandlers || {},
    listenerRefiners: e.listenerRefiners || {},
    optionRefiners: e.optionRefiners || {},
    propSetHandlers: e.propSetHandlers || {}
  };
}
function tq(e, t) {
  var n = {}, a = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function r(o) {
    for (var i = 0, c = o; i < c.length; i++) {
      var l = c[i];
      n[l.id] || (n[l.id] = !0, r(l.deps), a = aq(a, l));
    }
  }
  return e && r(e), r(t), a;
}
function nq() {
  var e = [], t = [], n;
  return function(a, r) {
    return (!n || !Qe(a, e) || !Qe(r, t)) && (n = tq(a, r)), e = a, t = r, n;
  };
}
function aq(e, t) {
  return {
    reducers: e.reducers.concat(t.reducers),
    isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
    contextInit: e.contextInit.concat(t.contextInit),
    eventRefiners: w(w({}, e.eventRefiners), t.eventRefiners),
    eventDefMemberAdders: e.eventDefMemberAdders.concat(t.eventDefMemberAdders),
    eventSourceRefiners: w(w({}, e.eventSourceRefiners), t.eventSourceRefiners),
    isDraggableTransformers: e.isDraggableTransformers.concat(t.isDraggableTransformers),
    eventDragMutationMassagers: e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),
    eventDefMutationAppliers: e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),
    dateSelectionTransformers: e.dateSelectionTransformers.concat(t.dateSelectionTransformers),
    datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms),
    dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
    views: w(w({}, e.views), t.views),
    viewPropsTransformers: e.viewPropsTransformers.concat(t.viewPropsTransformers),
    isPropsValid: t.isPropsValid || e.isPropsValid,
    externalDefTransforms: e.externalDefTransforms.concat(t.externalDefTransforms),
    viewContainerAppends: e.viewContainerAppends.concat(t.viewContainerAppends),
    eventDropTransformers: e.eventDropTransformers.concat(t.eventDropTransformers),
    calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions),
    componentInteractions: e.componentInteractions.concat(t.componentInteractions),
    themeClasses: w(w({}, e.themeClasses), t.themeClasses),
    eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
    cmdFormatter: t.cmdFormatter || e.cmdFormatter,
    recurringTypes: e.recurringTypes.concat(t.recurringTypes),
    namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl,
    initialView: e.initialView || t.initialView,
    elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
    optionChangeHandlers: w(w({}, e.optionChangeHandlers), t.optionChangeHandlers),
    scrollGridImpl: t.scrollGridImpl || e.scrollGridImpl,
    contentTypeHandlers: w(w({}, e.contentTypeHandlers), t.contentTypeHandlers),
    listenerRefiners: w(w({}, e.listenerRefiners), t.listenerRefiners),
    optionRefiners: w(w({}, e.optionRefiners), t.optionRefiners),
    propSetHandlers: w(w({}, e.propSetHandlers), t.propSetHandlers)
  };
}
var Te = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(St);
Te.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Te.prototype.baseIconClass = "fc-icon";
Te.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Te.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Te.prototype.iconOverrideOption = "buttonIcons";
Te.prototype.iconOverrideCustomButtonOption = "icon";
Te.prototype.iconOverridePrefix = "fc-icon-";
function rq(e, t) {
  var n = {}, a;
  for (a in e)
    ia(a, n, e, t);
  for (a in t)
    ia(a, n, e, t);
  return n;
}
function ia(e, t, n, a) {
  if (t[e])
    return t[e];
  var r = oq(e, t, n, a);
  return r && (t[e] = r), r;
}
function oq(e, t, n, a) {
  var r = n[e], o = a[e], i = function(d) {
    return r && r[d] !== null ? r[d] : o && o[d] !== null ? o[d] : null;
  }, c = i("component"), l = i("superType"), s = null;
  if (l) {
    if (l === e)
      throw new Error("Can't have a custom view type that references itself");
    s = ia(l, t, n, a);
  }
  return !c && s && (c = s.component), c ? {
    type: e,
    component: c,
    defaults: w(w({}, s ? s.defaults : {}), r ? r.rawOptions : {}),
    overrides: w(w({}, s ? s.overrides : {}), o ? o.rawOptions : {})
  } : null;
}
var lt = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.rootElRef = le(), n.handleRootEl = function(a) {
      Ce(n.rootElRef, a), n.props.elRef && Ce(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props, r = a.hookProps;
    return $(Ja, { hookProps: r, didMount: a.didMount, willUnmount: a.willUnmount, elRef: this.handleRootEl }, function(o) {
      return $(x0, { hookProps: r, content: a.content, defaultContent: a.defaultContent, backupElRef: n.rootElRef }, function(i, c) {
        return a.children(o, z0(a.classNames, r), i, c);
      });
    });
  }, t;
}(U), E0 = W2(0);
function x0(e) {
  return $(E0.Consumer, null, function(t) {
    return $(iq, w({ renderId: t }, e));
  });
}
var iq = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.innerElRef = le(), n;
  }
  return t.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }, t.prototype.componentDidMount = function() {
    this.updateCustomContent();
  }, t.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  }, t.prototype.componentWillUnmount = function() {
    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
  }, t.prototype.renderInnerContent = function() {
    var n = this.customContentInfo, a = this.getInnerContent(), r = this.getContentMeta(a);
    return !n || n.contentKey !== r.contentKey ? (n && (n.destroy && n.destroy(), n = this.customContentInfo = null), r.contentKey && (n = this.customContentInfo = w({ contentKey: r.contentKey, contentVal: a[r.contentKey] }, r.buildLifecycleFuncs()))) : n && (n.contentVal = a[r.contentKey]), n ? [] : a;
  }, t.prototype.getInnerContent = function() {
    var n = this.props, a = To(n.content, n.hookProps);
    return a === void 0 && (a = To(n.defaultContent, n.hookProps)), a == null ? null : a;
  }, t.prototype.getContentMeta = function(n) {
    var a = this.context.pluginHooks.contentTypeHandlers, r = "", o = null;
    if (n) {
      for (var i in a)
        if (n[i] !== void 0) {
          r = i, o = a[i];
          break;
        }
    }
    return { contentKey: r, buildLifecycleFuncs: o };
  }, t.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, t;
}(U), Ja = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleRootEl = function(a) {
      n.rootEl = a, n.props.elRef && Ce(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, t.prototype.componentDidMount = function() {
    var n = this.props.didMount;
    n && n(w(w({}, this.props.hookProps), { el: this.rootEl }));
  }, t.prototype.componentWillUnmount = function() {
    var n = this.props.willUnmount;
    n && n(w(w({}, this.props.hookProps), { el: this.rootEl }));
  }, t;
}(U);
function S0() {
  var e, t, n = [];
  return function(a, r) {
    return (!t || !ye(t, r) || a !== e) && (e = a, t = r, n = z0(a, r)), n;
  };
}
function z0(e, t) {
  return typeof e == "function" && (e = e(t)), aa(e);
}
function To(e, t) {
  return typeof e == "function" ? e(t, $) : e;
}
var ca = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.normalizeClassNames = S0(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = r.options, i = { view: r.viewApi }, c = this.normalizeClassNames(o.viewClassNames, i);
    return $(Ja, { hookProps: i, didMount: o.viewDidMount, willUnmount: o.viewWillUnmount, elRef: a.elRef }, function(l) {
      return a.children(l, ["fc-" + a.viewSpec.type + "-view", "fc-view"].concat(c));
    });
  }, t;
}(U);
function Ro(e) {
  return Fe(e, cq);
}
function cq(e) {
  var t = typeof e == "function" ? { component: e } : e, n = t.component;
  return t.content && (n = lq(t)), {
    superType: t.type,
    component: n,
    rawOptions: t
  };
}
function lq(e) {
  return function(t) {
    return $(Ue.Consumer, null, function(n) {
      return $(ca, { viewSpec: n.viewSpec }, function(a, r) {
        var o = w(w({}, t), { nextDayThreshold: n.options.nextDayThreshold });
        return $(lt, { hookProps: o, classNames: e.classNames, content: e.content, didMount: e.didMount, willUnmount: e.willUnmount, elRef: a }, function(i, c, l, s) {
          return $("div", { className: r.concat(c).join(" "), ref: i }, s);
        });
      });
    });
  };
}
function sq(e, t, n, a) {
  var r = Ro(e), o = Ro(t.views), i = rq(r, o);
  return Fe(i, function(c) {
    return dq(c, o, t, n, a);
  });
}
function dq(e, t, n, a, r) {
  var o = e.overrides.duration || e.defaults.duration || a.duration || n.duration, i = null, c = "", l = "", s = {};
  if (o && (i = uq(o), i)) {
    var d = ta(i);
    c = d.unit, d.value === 1 && (l = c, s = t[c] ? t[c].rawOptions : {});
  }
  var h = function(g) {
    var _ = g.buttonText || {}, b = e.defaults.buttonTextKey;
    return b != null && _[b] != null ? _[b] : _[e.type] != null ? _[e.type] : _[l] != null ? _[l] : null;
  }, p = function(g) {
    var _ = g.buttonHints || {}, b = e.defaults.buttonTextKey;
    return b != null && _[b] != null ? _[b] : _[e.type] != null ? _[e.type] : _[l] != null ? _[l] : null;
  };
  return {
    type: e.type,
    component: e.component,
    duration: i,
    durationUnit: c,
    singleUnit: l,
    optionDefaults: e.defaults,
    optionOverrides: w(w({}, s), e.overrides),
    buttonTextOverride: h(a) || h(n) || e.overrides.buttonText,
    buttonTextDefault: h(r) || e.defaults.buttonText || h(vt) || e.type,
    buttonTitleOverride: p(a) || p(n) || e.overrides.buttonHint,
    buttonTitleDefault: p(r) || e.defaults.buttonHint || p(vt)
  };
}
var Vo = {};
function uq(e) {
  var t = JSON.stringify(e), n = Vo[t];
  return n === void 0 && (n = I(e), Vo[t] = n), n;
}
var M0 = function() {
  function e(t) {
    this.props = t, this.nowDate = xt(t.nowInput, t.dateEnv), this.initHiddenDays();
  }
  return e.prototype.buildPrev = function(t, n, a) {
    var r = this.props.dateEnv, o = r.subtract(
      r.startOf(n, t.currentRangeUnit),
      t.dateIncrement
    );
    return this.build(o, -1, a);
  }, e.prototype.buildNext = function(t, n, a) {
    var r = this.props.dateEnv, o = r.add(
      r.startOf(n, t.currentRangeUnit),
      t.dateIncrement
    );
    return this.build(o, 1, a);
  }, e.prototype.build = function(t, n, a) {
    a === void 0 && (a = !0);
    var r = this.props, o, i, c, l, s, d;
    return o = this.buildValidRange(), o = this.trimHiddenDays(o), a && (t = ZW(t, o)), i = this.buildCurrentRangeInfo(t, n), c = /^(year|month|week|day)$/.test(i.unit), l = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, c), l = this.trimHiddenDays(l), s = l, r.showNonCurrentDates || (s = Ct(s, i.range)), s = this.adjustActiveRange(s), s = Ct(s, o), d = qa(i.range, o), {
      validRange: o,
      currentRange: i.range,
      currentRangeUnit: i.unit,
      isRangeAllDay: c,
      activeRange: s,
      renderRange: l,
      slotMinTime: r.slotMinTime,
      slotMaxTime: r.slotMaxTime,
      isValid: d,
      dateIncrement: this.buildDateIncrement(i.duration)
    };
  }, e.prototype.buildValidRange = function() {
    var t = this.props.validRangeInput, n = typeof t == "function" ? t.call(this.props.calendarApi, this.nowDate) : t;
    return this.refineRange(n) || { start: null, end: null };
  }, e.prototype.buildCurrentRangeInfo = function(t, n) {
    var a = this.props, r = null, o = null, i = null, c;
    return a.duration ? (r = a.duration, o = a.durationUnit, i = this.buildRangeFromDuration(t, n, r, o)) : (c = this.props.dayCount) ? (o = "day", i = this.buildRangeFromDayCount(t, n, c)) : (i = this.buildCustomVisibleRange(t)) ? o = a.dateEnv.greatestWholeUnit(i.start, i.end).unit : (r = this.getFallbackDuration(), o = ta(r).unit, i = this.buildRangeFromDuration(t, n, r, o)), { duration: r, unit: o, range: i };
  }, e.prototype.getFallbackDuration = function() {
    return I({ day: 1 });
  }, e.prototype.adjustActiveRange = function(t) {
    var n = this.props, a = n.dateEnv, r = n.usesMinMaxTime, o = n.slotMinTime, i = n.slotMaxTime, c = t.start, l = t.end;
    return r && (Ge(o) < 0 && (c = F(c), c = a.add(c, o)), Ge(i) > 1 && (l = F(l), l = ae(l, -1), l = a.add(l, i))), { start: c, end: l };
  }, e.prototype.buildRangeFromDuration = function(t, n, a, r) {
    var o = this.props, i = o.dateEnv, c = o.dateAlignment, l, s, d;
    if (!c) {
      var h = this.props.dateIncrement;
      h && yt(h) < yt(a) ? c = ta(h).unit : c = r;
    }
    Ge(a) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n), l = F(l));
    function p() {
      l = i.startOf(t, c), s = i.add(l, a), d = { start: l, end: s };
    }
    return p(), this.trimHiddenDays(d) || (t = this.skipHiddenDays(t, n), p()), d;
  }, e.prototype.buildRangeFromDayCount = function(t, n, a) {
    var r = this.props, o = r.dateEnv, i = r.dateAlignment, c = 0, l = t, s;
    i && (l = o.startOf(l, i)), l = F(l), l = this.skipHiddenDays(l, n), s = l;
    do
      s = ae(s, 1), this.isHiddenDay(s) || (c += 1);
    while (c < a);
    return { start: l, end: s };
  }, e.prototype.buildCustomVisibleRange = function(t) {
    var n = this.props, a = n.visibleRangeInput, r = typeof a == "function" ? a.call(n.calendarApi, n.dateEnv.toDate(t)) : a, o = this.refineRange(r);
    return o && (o.start == null || o.end == null) ? null : o;
  }, e.prototype.buildRenderRange = function(t, n, a) {
    return t;
  }, e.prototype.buildDateIncrement = function(t) {
    var n = this.props.dateIncrement, a;
    return n || ((a = this.props.dateAlignment) ? I(1, a) : t || I({ days: 1 }));
  }, e.prototype.refineRange = function(t) {
    if (t) {
      var n = qW(t, this.props.dateEnv);
      return n && (n = r0(n)), n;
    }
    return null;
  }, e.prototype.initHiddenDays = function() {
    var t = this.props.hiddenDays || [], n = [], a = 0, r;
    for (this.props.weekends === !1 && t.push(0, 6), r = 0; r < 7; r += 1)
      (n[r] = t.indexOf(r) !== -1) || (a += 1);
    if (!a)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }, e.prototype.trimHiddenDays = function(t) {
    var n = t.start, a = t.end;
    return n && (n = this.skipHiddenDays(n)), a && (a = this.skipHiddenDays(a, -1, !0)), n == null || a == null || n < a ? { start: n, end: a } : null;
  }, e.prototype.isHiddenDay = function(t) {
    return t instanceof Date && (t = t.getUTCDay()), this.isHiddenDayHash[t];
  }, e.prototype.skipHiddenDays = function(t, n, a) {
    for (n === void 0 && (n = 1), a === void 0 && (a = !1); this.isHiddenDayHash[(t.getUTCDay() + (a ? n : 0) + 7) % 7]; )
      t = ae(t, n);
    return t;
  }, e;
}();
function mq(e, t) {
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      e = t.viewType;
  }
  return e;
}
function fq(e, t) {
  var n;
  switch (t.type) {
    case "SET_OPTION":
      return w(w({}, e), (n = {}, n[t.optionName] = t.rawOptionValue, n));
    default:
      return e;
  }
}
function hq(e, t, n, a) {
  var r;
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      return a.build(t.dateMarker || n);
    case "CHANGE_DATE":
      return a.build(t.dateMarker);
    case "PREV":
      if (r = a.buildPrev(e, n), r.isValid)
        return r;
      break;
    case "NEXT":
      if (r = a.buildNext(e, n), r.isValid)
        return r;
      break;
  }
  return e;
}
function vq(e, t, n) {
  var a = t ? t.activeRange : null;
  return H0({}, bq(e, n), a, n);
}
function pq(e, t, n, a) {
  var r = n ? n.activeRange : null;
  switch (t.type) {
    case "ADD_EVENT_SOURCES":
      return H0(e, t.sources, r, a);
    case "REMOVE_EVENT_SOURCE":
      return gq(e, t.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? T0(e, r, a) : e;
    case "FETCH_EVENT_SOURCES":
      return er(e, t.sourceIds ? Q2(t.sourceIds) : R0(e, a), r, t.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return Cq(e, t.sourceId, t.fetchId, t.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return e;
  }
}
function _q(e, t, n) {
  var a = t ? t.activeRange : null;
  return er(e, R0(e, n), a, !0, n);
}
function D0(e) {
  for (var t in e)
    if (e[t].isFetching)
      return !0;
  return !1;
}
function H0(e, t, n, a) {
  for (var r = {}, o = 0, i = t; o < i.length; o++) {
    var c = i[o];
    r[c.sourceId] = c;
  }
  return n && (r = T0(r, n, a)), w(w({}, e), r);
}
function gq(e, t) {
  return Oe(e, function(n) {
    return n.sourceId !== t;
  });
}
function T0(e, t, n) {
  return er(e, Oe(e, function(a) {
    return wq(a, t, n);
  }), t, !1, n);
}
function wq(e, t, n) {
  return V0(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
}
function er(e, t, n, a, r) {
  var o = {};
  for (var i in e) {
    var c = e[i];
    t[i] ? o[i] = yq(c, n, a, r) : o[i] = c;
  }
  return o;
}
function yq(e, t, n, a) {
  var r = a.options, o = a.calendarApi, i = a.pluginHooks.eventSourceDefs[e.sourceDefId], c = ot();
  return i.fetch({
    eventSource: e,
    range: t,
    isRefetch: n,
    context: a
  }, function(l) {
    var s = l.rawEvents;
    r.eventSourceSuccess && (s = r.eventSourceSuccess.call(o, s, l.xhr) || s), e.success && (s = e.success.call(o, s, l.xhr) || s), a.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: e.sourceId,
      fetchId: c,
      fetchRange: t,
      rawEvents: s
    });
  }, function(l) {
    console.warn(l.message, l), r.eventSourceFailure && r.eventSourceFailure.call(o, l), e.failure && e.failure(l), a.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: e.sourceId,
      fetchId: c,
      fetchRange: t,
      error: l
    });
  }), w(w({}, e), { isFetching: !0, latestFetchId: c });
}
function Cq(e, t, n, a) {
  var r, o = e[t];
  return o && n === o.latestFetchId ? w(w({}, e), (r = {}, r[t] = w(w({}, o), { isFetching: !1, fetchRange: a }), r)) : e;
}
function R0(e, t) {
  return Oe(e, function(n) {
    return V0(n, t);
  });
}
function bq(e, t) {
  var n = m0(t), a = [].concat(e.eventSources || []), r = [];
  e.initialEvents && a.unshift(e.initialEvents), e.events && a.unshift(e.events);
  for (var o = 0, i = a; o < i.length; o++) {
    var c = i[o], l = u0(c, t, n);
    l && r.push(l);
  }
  return r;
}
function V0(e, t) {
  var n = t.pluginHooks.eventSourceDefs;
  return !n[e.sourceDefId].ignoreRange;
}
function $q(e, t, n, a, r) {
  switch (t.type) {
    case "RECEIVE_EVENTS":
      return Eq(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, r);
    case "ADD_EVENTS":
      return Sq(
        e,
        t.eventStore,
        a ? a.activeRange : null,
        r
      );
    case "RESET_EVENTS":
      return t.eventStore;
    case "MERGE_EVENTS":
      return Wa(e, t.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? Ke(e, a.activeRange, r) : e;
    case "REMOVE_EVENTS":
      return PW(e, t.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return A0(e, t.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return _n(e, function(o) {
        return !o.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return ue();
    default:
      return e;
  }
}
function Eq(e, t, n, a, r, o) {
  if (t && n === t.latestFetchId) {
    var i = Qt(xq(r, t, o), t, o);
    return a && (i = Ke(i, a, o)), Wa(A0(e, t.sourceId), i);
  }
  return e;
}
function xq(e, t, n) {
  var a = n.options.eventDataTransform, r = t ? t.eventDataTransform : null;
  return r && (e = Ao(e, r)), a && (e = Ao(e, a)), e;
}
function Ao(e, t) {
  var n;
  if (!t)
    n = e;
  else {
    n = [];
    for (var a = 0, r = e; a < r.length; a++) {
      var o = r[a], i = t(o);
      i ? n.push(i) : i == null && n.push(o);
    }
  }
  return n;
}
function Sq(e, t, n, a) {
  return n && (t = Ke(t, n, a)), Wa(e, t);
}
function zq(e, t, n) {
  var a = e.defs, r = Fe(e.instances, function(o) {
    var i = a[o.defId];
    return i.allDay || i.recurringDef ? o : w(w({}, o), { range: {
      start: n.createMarker(t.toDate(o.range.start, o.forcedStartTzo)),
      end: n.createMarker(t.toDate(o.range.end, o.forcedEndTzo))
    }, forcedStartTzo: n.canComputeOffset ? null : o.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : o.forcedEndTzo });
  });
  return { defs: a, instances: r };
}
function A0(e, t) {
  return _n(e, function(n) {
    return n.sourceId !== t;
  });
}
function Mq(e, t) {
  return {
    defs: e.defs,
    instances: Oe(e.instances, function(n) {
      return !t[n.instanceId];
    })
  };
}
function Dq(e, t) {
  switch (t.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return t.selection;
    default:
      return e;
  }
}
function Hq(e, t) {
  switch (t.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return t.eventInstanceId;
    default:
      return e;
  }
}
function Tq(e, t) {
  var n;
  switch (t.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = t.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return e;
  }
}
function Rq(e, t) {
  var n;
  switch (t.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = t.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return e;
  }
}
function Vq(e, t, n, a, r) {
  var o = e.headerToolbar ? ko(e.headerToolbar, e, t, n, a, r) : null, i = e.footerToolbar ? ko(e.footerToolbar, e, t, n, a, r) : null;
  return { header: o, footer: i };
}
function ko(e, t, n, a, r, o) {
  var i = {}, c = [], l = !1;
  for (var s in e) {
    var d = e[s], h = Aq(d, t, n, a, r, o);
    i[s] = h.widgets, c.push.apply(c, h.viewsWithButtons), l = l || h.hasTitle;
  }
  return { sectionWidgets: i, viewsWithButtons: c, hasTitle: l };
}
function Aq(e, t, n, a, r, o) {
  var i = t.direction === "rtl", c = t.customButtons || {}, l = n.buttonText || {}, s = t.buttonText || {}, d = n.buttonHints || {}, h = t.buttonHints || {}, p = e ? e.split(" ") : [], g = [], _ = !1, b = p.map(function(C) {
    return C.split(",").map(function(y) {
      if (y === "title")
        return _ = !0, { buttonName: y };
      var x, z, S, V, T, A;
      if (x = c[y])
        S = function(Z) {
          x.click && x.click.call(Z.target, Z, Z.target);
        }, (V = a.getCustomButtonIconClass(x)) || (V = a.getIconClass(y, i)) || (T = x.text), A = x.hint || x.text;
      else if (z = r[y]) {
        g.push(y), S = function() {
          o.changeView(y);
        }, (T = z.buttonTextOverride) || (V = a.getIconClass(y, i)) || (T = z.buttonTextDefault);
        var R = z.buttonTextOverride || z.buttonTextDefault;
        A = ht(
          z.buttonTitleOverride || z.buttonTitleDefault || t.viewHint,
          [R, y],
          R
        );
      } else if (o[y])
        if (S = function() {
          o[y]();
        }, (T = l[y]) || (V = a.getIconClass(y, i)) || (T = s[y]), y === "prevYear" || y === "nextYear") {
          var Y = y === "prevYear" ? "prev" : "next";
          A = ht(d[Y] || h[Y], [
            s.year || "year",
            "year"
          ], s[y]);
        } else
          A = function(Z) {
            return ht(d[y] || h[y], [
              s[Z] || Z,
              Z
            ], s[y]);
          };
      return { buttonName: y, buttonClick: S, buttonIcon: V, buttonText: T, buttonHint: A };
    });
  });
  return { widgets: b, viewsWithButtons: g, hasTitle: _ };
}
var kq = {
  ignoreRange: !0,
  parseMeta: function(e) {
    return Array.isArray(e.events) ? e.events : null;
  },
  fetch: function(e, t) {
    t({
      rawEvents: e.eventSource.meta
    });
  }
}, Iq = He({
  eventSourceDefs: [kq]
}), Lq = {
  parseMeta: function(e) {
    return typeof e.events == "function" ? e.events : null;
  },
  fetch: function(e, t, n) {
    var a = e.context.dateEnv, r = e.eventSource.meta;
    qj(r.bind(null, l0(e.range, a)), function(o) {
      t({ rawEvents: o });
    }, n);
  }
}, Pq = He({
  eventSourceDefs: [Lq]
});
function Bq(e, t, n, a, r) {
  e = e.toUpperCase();
  var o = null;
  e === "GET" ? t = Oq(t, n) : o = k0(n);
  var i = new XMLHttpRequest();
  i.open(e, t, !0), e !== "GET" && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.onload = function() {
    if (i.status >= 200 && i.status < 400) {
      var c = !1, l = void 0;
      try {
        l = JSON.parse(i.responseText), c = !0;
      } catch {
      }
      c ? a(l, i) : r("Failure parsing JSON", i);
    } else
      r("Request failed", i);
  }, i.onerror = function() {
    r("Request failed", i);
  }, i.send(o);
}
function Oq(e, t) {
  return e + (e.indexOf("?") === -1 ? "?" : "&") + k0(t);
}
function k0(e) {
  var t = [];
  for (var n in e)
    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t.join("&");
}
var Nq = {
  method: String,
  extraParams: E,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, Fq = {
  parseMeta: function(e) {
    return e.url && (e.format === "json" || !e.format) ? {
      url: e.url,
      format: "json",
      method: (e.method || "GET").toUpperCase(),
      extraParams: e.extraParams,
      startParam: e.startParam,
      endParam: e.endParam,
      timeZoneParam: e.timeZoneParam
    } : null;
  },
  fetch: function(e, t, n) {
    var a = e.eventSource.meta, r = Wq(a, e.range, e.context);
    Bq(a.method, a.url, r, function(o, i) {
      t({ rawEvents: o, xhr: i });
    }, function(o, i) {
      n({ message: o, xhr: i });
    });
  }
}, Uq = He({
  eventSourceRefiners: Nq,
  eventSourceDefs: [Fq]
});
function Wq(e, t, n) {
  var a = n.dateEnv, r = n.options, o, i, c, l, s = {};
  return o = e.startParam, o == null && (o = r.startParam), i = e.endParam, i == null && (i = r.endParam), c = e.timeZoneParam, c == null && (c = r.timeZoneParam), typeof e.extraParams == "function" ? l = e.extraParams() : l = e.extraParams || {}, w(s, l), s[o] = a.formatIso(t.start), s[i] = a.formatIso(t.end), a.timeZone !== "local" && (s[c] = a.timeZone), s;
}
var jq = {
  daysOfWeek: E,
  startTime: I,
  endTime: I,
  duration: I,
  startRecur: E,
  endRecur: E
}, qq = {
  parse: function(e, t) {
    if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
      var n = {
        daysOfWeek: e.daysOfWeek || null,
        startTime: e.startTime || null,
        endTime: e.endTime || null,
        startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
        endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
      }, a = void 0;
      return e.duration && (a = e.duration), !a && e.startTime && e.endTime && (a = _W(e.endTime, e.startTime)), {
        allDayGuess: Boolean(!e.startTime && !e.endTime),
        duration: a,
        typeData: n
      };
    }
    return null;
  },
  expand: function(e, t, n) {
    var a = Ct(t, { start: e.startRecur, end: e.endRecur });
    return a ? Yq(e.daysOfWeek, e.startTime, a, n) : [];
  }
}, Gq = He({
  recurringTypes: [qq],
  eventRefiners: jq
});
function Yq(e, t, n, a) {
  for (var r = e ? Q2(e) : null, o = F(n.start), i = n.end, c = []; o < i; ) {
    var l = void 0;
    (!r || r[o.getUTCDay()]) && (t ? l = a.add(o, t) : l = o, c.push(l)), o = ae(o, 1);
  }
  return c;
}
var Zq = He({
  optionChangeHandlers: {
    events: function(e, t) {
      Io([e], t);
    },
    eventSources: Io
  }
});
function Io(e, t) {
  for (var n = Oa(t.getCurrentData().eventSources), a = [], r = 0, o = e; r < o.length; r++) {
    for (var i = o[r], c = !1, l = 0; l < n.length; l += 1)
      if (n[l]._raw === i) {
        n.splice(l, 1), c = !0;
        break;
      }
    c || a.push(i);
  }
  for (var s = 0, d = n; s < d.length; s++) {
    var h = d[s];
    t.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: h.sourceId
    });
  }
  for (var p = 0, g = a; p < g.length; p++) {
    var _ = g[p];
    t.calendarApi.addEventSource(_);
  }
}
function Xq(e, t) {
  t.emitter.trigger("datesSet", w(w({}, l0(e.activeRange, t.dateEnv)), { view: t.viewApi }));
}
function Kq(e, t) {
  var n = t.emitter;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Pe(e, t));
}
var Qq = [
  Iq,
  Pq,
  Uq,
  Gq,
  Zq,
  He({
    isLoadingFuncs: [
      function(e) {
        return D0(e.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: Jq,
      domNodes: eG
    },
    propSetHandlers: {
      dateProfile: Xq,
      eventStore: Kq
    }
  })
];
function Jq() {
  var e = null, t = "";
  function n(r, o) {
    (r !== e || o !== t) && (r.innerHTML = o), e = r, t = o;
  }
  function a() {
    e.innerHTML = "", e = null, t = "";
  }
  return { render: n, destroy: a };
}
function eG() {
  var e = null, t = [];
  function n(r, o) {
    var i = Array.prototype.slice.call(o);
    if (r !== e || !Qe(t, i)) {
      for (var c = 0, l = i; c < l.length; c++) {
        var s = l[c];
        r.appendChild(s);
      }
      a();
    }
    e = r, t = i;
  }
  function a() {
    t.forEach(ka), t = [], e = null;
  }
  return { render: n, destroy: a };
}
var tr = function() {
  function e(t) {
    this.drainedOption = t, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  return e.prototype.request = function(t) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), t == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      t
    ));
  }, e.prototype.pause = function(t) {
    t === void 0 && (t = "");
    var n = this.pauseDepths;
    n[t] = (n[t] || 0) + 1, this.clearTimeout();
  }, e.prototype.resume = function(t, n) {
    t === void 0 && (t = "");
    var a = this.pauseDepths;
    if (t in a) {
      if (n)
        delete a[t];
      else {
        a[t] -= 1;
        var r = a[t];
        r <= 0 && delete a[t];
      }
      this.tryDrain();
    }
  }, e.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  }, e.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }, e.prototype.clear = function() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }, e.prototype.clearTimeout = function() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }, e.prototype.drained = function() {
    this.drainedOption && this.drainedOption();
  }, e;
}(), tG = function() {
  function e(t, n) {
    this.runTaskOption = t, this.drainedOption = n, this.queue = [], this.delayedRunner = new tr(this.drain.bind(this));
  }
  return e.prototype.request = function(t, n) {
    this.queue.push(t), this.delayedRunner.request(n);
  }, e.prototype.pause = function(t) {
    this.delayedRunner.pause(t);
  }, e.prototype.resume = function(t, n) {
    this.delayedRunner.resume(t, n);
  }, e.prototype.drain = function() {
    for (var t = this.queue; t.length; ) {
      for (var n = [], a = void 0; a = t.shift(); )
        this.runTask(a), n.push(a);
      this.drained(n);
    }
  }, e.prototype.runTask = function(t) {
    this.runTaskOption && this.runTaskOption(t);
  }, e.prototype.drained = function(t) {
    this.drainedOption && this.drainedOption(t);
  }, e;
}();
function nG(e, t, n) {
  var a;
  return /^(year|month)$/.test(e.currentRangeUnit) ? a = e.currentRange : a = e.activeRange, n.formatRange(a.start, a.end, J(t.titleFormat || aG(e)), {
    isEndExclusive: e.isRangeAllDay,
    defaultSeparator: t.titleRangeSeparator
  });
}
function aG(e) {
  var t = e.currentRangeUnit;
  if (t === "year")
    return { year: "numeric" };
  if (t === "month")
    return { year: "numeric", month: "long" };
  var n = Yt(e.currentRange.start, e.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var I0 = function() {
  function e(t) {
    var n = this;
    this.computeOptionsData = k(this._computeOptionsData), this.computeCurrentViewData = k(this._computeCurrentViewData), this.organizeRawLocales = k(Sj), this.buildLocale = k(_0), this.buildPluginHooks = nq(), this.buildDateEnv = k(rG), this.buildTheme = k(oG), this.parseToolbars = k(Vq), this.buildViewSpecs = k(sq), this.buildDateProfileGenerator = Pt(iG), this.buildViewApi = k(cG), this.buildViewUiProps = Pt(dG), this.buildEventUiBySource = k(lG, ye), this.buildEventUiBases = k(sG), this.parseContextBusinessHours = Pt(uG), this.buildTitle = k(nG), this.emitter = new wn(), this.actionRunner = new tG(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return n.data;
    }, this.dispatch = function(z) {
      n.actionRunner.request(z);
    }, this.props = t, this.actionRunner.pause();
    var a = {}, r = this.computeOptionsData(t.optionOverrides, a, t.calendarApi), o = r.calendarOptions.initialView || r.pluginHooks.initialView, i = this.computeCurrentViewData(o, r, t.optionOverrides, a);
    t.calendarApi.currentDataManager = this, this.emitter.setThisContext(t.calendarApi), this.emitter.setOptions(i.options);
    var c = _j(r.calendarOptions, r.dateEnv), l = i.dateProfileGenerator.build(c);
    Le(l.activeRange, c) || (c = l.currentRange.start);
    for (var s = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: t.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, d = 0, h = r.pluginHooks.contextInit; d < h.length; d++) {
      var p = h[d];
      p(s);
    }
    for (var g = vq(r.calendarOptions, l, s), _ = {
      dynamicOptionOverrides: a,
      currentViewType: o,
      currentDate: c,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(s),
      eventSources: g,
      eventUiBases: {},
      eventStore: ue(),
      renderableEventStore: ue(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(s).selectionConfig
    }, b = w(w({}, s), _), C = 0, y = r.pluginHooks.reducers; C < y.length; C++) {
      var x = y[C];
      w(_, x(null, null, b));
    }
    Ln(_, s) && this.emitter.trigger("loading", !0), this.state = _, this.updateData(), this.actionRunner.resume();
  }
  return e.prototype.resetOptions = function(t, n) {
    var a = this.props;
    a.optionOverrides = n ? w(w({}, a.optionOverrides), t) : t, this.actionRunner.request({
      type: "NOTHING"
    });
  }, e.prototype._handleAction = function(t) {
    var n = this, a = n.props, r = n.state, o = n.emitter, i = fq(r.dynamicOptionOverrides, t), c = this.computeOptionsData(a.optionOverrides, i, a.calendarApi), l = mq(r.currentViewType, t), s = this.computeCurrentViewData(l, c, a.optionOverrides, i);
    a.calendarApi.currentDataManager = this, o.setThisContext(a.calendarApi), o.setOptions(s.options);
    var d = {
      dateEnv: c.dateEnv,
      options: c.calendarOptions,
      pluginHooks: c.pluginHooks,
      calendarApi: a.calendarApi,
      dispatch: this.dispatch,
      emitter: o,
      getCurrentData: this.getCurrentData
    }, h = r.currentDate, p = r.dateProfile;
    this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator && (p = s.dateProfileGenerator.build(h)), h = pj(h, t), p = hq(p, t, h, s.dateProfileGenerator), (t.type === "PREV" || t.type === "NEXT" || !Le(p.currentRange, h)) && (h = p.currentRange.start);
    for (var g = pq(r.eventSources, t, p, d), _ = $q(r.eventStore, t, g, p, d), b = D0(g), C = b && !s.options.progressiveEventRendering && r.renderableEventStore || _, y = this.buildViewUiProps(d), x = y.eventUiSingleBase, z = y.selectionConfig, S = this.buildEventUiBySource(g), V = this.buildEventUiBases(C.defs, x, S), T = {
      dynamicOptionOverrides: i,
      currentViewType: l,
      currentDate: h,
      dateProfile: p,
      eventSources: g,
      eventStore: _,
      renderableEventStore: C,
      selectionConfig: z,
      eventUiBases: V,
      businessHours: this.parseContextBusinessHours(d),
      dateSelection: Dq(r.dateSelection, t),
      eventSelection: Hq(r.eventSelection, t),
      eventDrag: Tq(r.eventDrag, t),
      eventResize: Rq(r.eventResize, t)
    }, A = w(w({}, d), T), R = 0, Y = c.pluginHooks.reducers; R < Y.length; R++) {
      var Z = Y[R];
      w(T, Z(r, t, A));
    }
    var L = Ln(r, d), te = Ln(T, d);
    !L && te ? o.trigger("loading", !0) : L && !te && o.trigger("loading", !1), this.state = T, a.onAction && a.onAction(t);
  }, e.prototype.updateData = function() {
    var t = this, n = t.props, a = t.state, r = this.data, o = this.computeOptionsData(n.optionOverrides, a.dynamicOptionOverrides, n.calendarApi), i = this.computeCurrentViewData(a.currentViewType, o, n.optionOverrides, a.dynamicOptionOverrides), c = this.data = w(w(w({ viewTitle: this.buildTitle(a.dateProfile, i.options, o.dateEnv), calendarApi: n.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, o), i), a), l = o.pluginHooks.optionChangeHandlers, s = r && r.calendarOptions, d = o.calendarOptions;
    if (s && s !== d) {
      s.timeZone !== d.timeZone && (a.eventSources = c.eventSources = _q(c.eventSources, a.dateProfile, c), a.eventStore = c.eventStore = zq(c.eventStore, r.dateEnv, c.dateEnv));
      for (var h in l)
        s[h] !== d[h] && l[h](d[h], c);
    }
    n.onData && n.onData(c);
  }, e.prototype._computeOptionsData = function(t, n, a) {
    var r = this.processRawCalendarOptions(t, n), o = r.refinedOptions, i = r.pluginHooks, c = r.localeDefaults, l = r.availableLocaleData, s = r.extra;
    Lo(s);
    var d = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, l, o.defaultRangeSeparator), h = this.buildViewSpecs(i.views, t, n, c), p = this.buildTheme(o, i), g = this.parseToolbars(o, t, p, h, a);
    return {
      calendarOptions: o,
      pluginHooks: i,
      dateEnv: d,
      viewSpecs: h,
      theme: p,
      toolbarConfig: g,
      localeDefaults: c,
      availableRawLocales: l.map
    };
  }, e.prototype.processRawCalendarOptions = function(t, n) {
    var a = Vn([
      vt,
      t,
      n
    ]), r = a.locales, o = a.locale, i = this.organizeRawLocales(r), c = i.map, l = this.buildLocale(o || i.defaultCode, c).options, s = this.buildPluginHooks(t.plugins || [], Qq), d = this.currentCalendarOptionsRefiners = w(w(w(w(w({}, Eo), xo), So), s.listenerRefiners), s.optionRefiners), h = {}, p = Vn([
      vt,
      l,
      t,
      n
    ]), g = {}, _ = this.currentCalendarOptionsInput, b = this.currentCalendarOptionsRefined, C = !1;
    for (var y in p)
      y !== "plugins" && (p[y] === _[y] || Ae[y] && y in _ && Ae[y](_[y], p[y]) ? g[y] = b[y] : d[y] ? (g[y] = d[y](p[y]), C = !0) : h[y] = _[y]);
    return C && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = g), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: s,
      availableLocaleData: i,
      localeDefaults: l,
      extra: h
    };
  }, e.prototype._computeCurrentViewData = function(t, n, a, r) {
    var o = n.viewSpecs[t];
    if (!o)
      throw new Error('viewType "' + t + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var i = this.processRawViewOptions(o, n.pluginHooks, n.localeDefaults, a, r), c = i.refinedOptions, l = i.extra;
    Lo(l);
    var s = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
      duration: o.duration,
      durationUnit: o.durationUnit,
      usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: c.slotMinTime,
      slotMaxTime: c.slotMaxTime,
      showNonCurrentDates: c.showNonCurrentDates,
      dayCount: c.dayCount,
      dateAlignment: c.dateAlignment,
      dateIncrement: c.dateIncrement,
      hiddenDays: c.hiddenDays,
      weekends: c.weekends,
      nowInput: c.now,
      validRangeInput: c.validRange,
      visibleRangeInput: c.visibleRange,
      monthMode: c.monthMode,
      fixedWeekCount: c.fixedWeekCount
    }), d = this.buildViewApi(t, this.getCurrentData, n.dateEnv);
    return { viewSpec: o, options: c, dateProfileGenerator: s, viewApi: d };
  }, e.prototype.processRawViewOptions = function(t, n, a, r, o) {
    var i = Vn([
      vt,
      t.optionDefaults,
      a,
      r,
      t.optionOverrides,
      o
    ]), c = w(w(w(w(w(w({}, Eo), xo), So), IW), n.listenerRefiners), n.optionRefiners), l = {}, s = this.currentViewOptionsInput, d = this.currentViewOptionsRefined, h = !1, p = {};
    for (var g in i)
      i[g] === s[g] || Ae[g] && Ae[g](i[g], s[g]) ? l[g] = d[g] : (i[g] === this.currentCalendarOptionsInput[g] || Ae[g] && Ae[g](i[g], this.currentCalendarOptionsInput[g]) ? g in this.currentCalendarOptionsRefined && (l[g] = this.currentCalendarOptionsRefined[g]) : c[g] ? l[g] = c[g](i[g]) : p[g] = i[g], h = !0);
    return h && (this.currentViewOptionsInput = i, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: p
    };
  }, e;
}();
function rG(e, t, n, a, r, o, i, c) {
  var l = _0(t || i.defaultCode, i.map);
  return new Ej({
    calendarSystem: "gregory",
    timeZone: e,
    namedTimeZoneImpl: o.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: n,
    firstDay: a,
    weekText: r,
    cmdFormatter: o.cmdFormatter,
    defaultSeparator: c
  });
}
function oG(e, t) {
  var n = t.themeClasses[e.themeSystem] || Te;
  return new n(e);
}
function iG(e) {
  var t = e.dateProfileGeneratorClass || M0;
  return new t(e);
}
function cG(e, t, n) {
  return new fj(e, t, n);
}
function lG(e) {
  return Fe(e, function(t) {
    return t.ui;
  });
}
function sG(e, t, n) {
  var a = { "": t };
  for (var r in e) {
    var o = e[r];
    o.sourceId && n[o.sourceId] && (a[r] = n[o.sourceId]);
  }
  return a;
}
function dG(e) {
  var t = e.options;
  return {
    eventUiSingleBase: en({
      display: t.eventDisplay,
      editable: t.editable,
      startEditable: t.eventStartEditable,
      durationEditable: t.eventDurationEditable,
      constraint: t.eventConstraint,
      overlap: typeof t.eventOverlap == "boolean" ? t.eventOverlap : void 0,
      allow: t.eventAllow,
      backgroundColor: t.eventBackgroundColor,
      borderColor: t.eventBorderColor,
      textColor: t.eventTextColor,
      color: t.eventColor
    }, e),
    selectionConfig: en({
      constraint: t.selectConstraint,
      overlap: typeof t.selectOverlap == "boolean" ? t.selectOverlap : void 0,
      allow: t.selectAllow
    }, e)
  };
}
function Ln(e, t) {
  for (var n = 0, a = t.pluginHooks.isLoadingFuncs; n < a.length; n++) {
    var r = a[n];
    if (r(e))
      return !0;
  }
  return !1;
}
function uG(e) {
  return Hj(e.options.businessHours, e);
}
function Lo(e, t) {
  for (var n in e)
    console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""));
}
(function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleData = function(r) {
      a.dataManager ? a.setState(r) : a.state = r;
    }, a.dataManager = new I0({
      optionOverrides: n.optionOverrides,
      calendarApi: n.calendarApi,
      onData: a.handleData
    }), a;
  }
  return t.prototype.render = function() {
    return this.props.children(this.state);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props.optionOverrides;
    a !== n.optionOverrides && this.dataManager.resetOptions(a);
  }, t;
})(Aa);
var mG = function() {
  function e() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return e.prototype.addSegs = function(t) {
    for (var n = [], a = 0, r = t; a < r.length; a++) {
      var o = r[a];
      this.insertEntry(o, n);
    }
    return n;
  }, e.prototype.insertEntry = function(t, n) {
    var a = this.findInsertion(t);
    return this.isInsertionValid(a, t) ? (this.insertEntryAt(t, a), 1) : this.handleInvalidInsertion(a, t, n);
  }, e.prototype.isInsertionValid = function(t, n) {
    return (this.maxCoord === -1 || t.levelCoord + n.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || t.stackCnt < this.maxStackCnt);
  }, e.prototype.handleInvalidInsertion = function(t, n, a) {
    return this.allowReslicing && t.touchingEntry ? this.splitEntry(n, t.touchingEntry, a) : (a.push(n), 0);
  }, e.prototype.splitEntry = function(t, n, a) {
    var r = 0, o = [], i = t.span, c = n.span;
    return i.start < c.start && (r += this.insertEntry({
      index: t.index,
      thickness: t.thickness,
      span: { start: i.start, end: c.start }
    }, o)), i.end > c.end && (r += this.insertEntry({
      index: t.index,
      thickness: t.thickness,
      span: { start: c.end, end: i.end }
    }, o)), r ? (a.push.apply(a, j([{
      index: t.index,
      thickness: t.thickness,
      span: L0(c, i)
    }], o)), r) : (a.push(t), 0);
  }, e.prototype.insertEntryAt = function(t, n) {
    var a = this, r = a.entriesByLevel, o = a.levelCoords;
    n.lateral === -1 ? (Pn(o, n.level, n.levelCoord), Pn(r, n.level, [t])) : Pn(r[n.level], n.lateral, t), this.stackCnts[_t(t)] = n.stackCnt;
  }, e.prototype.findInsertion = function(t) {
    for (var n = this, a = n.levelCoords, r = n.entriesByLevel, o = n.strictOrder, i = n.stackCnts, c = a.length, l = 0, s = -1, d = -1, h = null, p = 0, g = 0; g < c; g += 1) {
      var _ = a[g];
      if (!o && _ >= l + t.thickness)
        break;
      for (var b = r[g], C = void 0, y = Bo(b, t.span.start, Po), x = y[0] + y[1]; (C = b[x]) && C.span.start < t.span.end; ) {
        var z = _ + C.thickness;
        z > l && (l = z, h = C, s = g, d = x), z === l && (p = Math.max(p, i[_t(C)] + 1)), x += 1;
      }
    }
    var S = 0;
    if (h)
      for (S = s + 1; S < c && a[S] < l; )
        S += 1;
    var V = -1;
    return S < c && a[S] === l && (V = Bo(r[S], t.span.end, Po)[0]), {
      touchingLevel: s,
      touchingLateral: d,
      touchingEntry: h,
      stackCnt: p,
      levelCoord: l,
      level: S,
      lateral: V
    };
  }, e.prototype.toRects = function() {
    for (var t = this, n = t.entriesByLevel, a = t.levelCoords, r = n.length, o = [], i = 0; i < r; i += 1)
      for (var c = n[i], l = a[i], s = 0, d = c; s < d.length; s++) {
        var h = d[s];
        o.push(w(w({}, h), { levelCoord: l }));
      }
    return o;
  }, e;
}();
function Po(e) {
  return e.span.end;
}
function _t(e) {
  return e.index + ":" + e.span.start;
}
function L0(e, t) {
  var n = Math.max(e.start, t.start), a = Math.min(e.end, t.end);
  return n < a ? { start: n, end: a } : null;
}
function Pn(e, t, n) {
  e.splice(t, 0, n);
}
function Bo(e, t, n) {
  var a = 0, r = e.length;
  if (!r || t < n(e[a]))
    return [0, 0];
  if (t > n(e[r - 1]))
    return [r, 0];
  for (; a < r; ) {
    var o = Math.floor(a + (r - a) / 2), i = n(e[o]);
    if (t < i)
      r = o;
    else if (t > i)
      a = o + 1;
    else
      return [o, 1];
  }
  return [a, 0];
}
var st = function() {
  function e(t) {
    this.component = t.component, this.isHitComboAllowed = t.isHitComboAllowed || null;
  }
  return e.prototype.destroy = function() {
  }, e;
}();
function fG(e, t) {
  return {
    component: e,
    el: t.el,
    useEventCenter: t.useEventCenter != null ? t.useEventCenter : !0,
    isHitComboAllowed: t.isHitComboAllowed || null
  };
}
function nr(e) {
  var t;
  return t = {}, t[e.component.uid] = e, t;
}
var la = {}, P0 = function() {
  function e(t, n) {
    this.emitter = new wn();
  }
  return e.prototype.destroy = function() {
  }, e.prototype.setMirrorIsVisible = function(t) {
  }, e.prototype.setMirrorNeedsRevert = function(t) {
  }, e.prototype.setAutoScrollEnabled = function(t) {
  }, e;
}(), ar = {}, hG = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props.widgetGroups.map(function(r) {
      return n.renderWidgetGroup(r);
    });
    return $.apply(void 0, j(["div", { className: "fc-toolbar-chunk" }], a));
  }, t.prototype.renderWidgetGroup = function(n) {
    for (var a = this.props, r = this.context.theme, o = [], i = !0, c = 0, l = n; c < l.length; c++) {
      var s = l[c], d = s.buttonName, h = s.buttonClick, p = s.buttonText, g = s.buttonIcon, _ = s.buttonHint;
      if (d === "title")
        i = !1, o.push($("h2", { className: "fc-toolbar-title", id: a.titleId }, a.title));
      else {
        var b = d === a.activeButton, C = !a.isTodayEnabled && d === "today" || !a.isPrevEnabled && d === "prev" || !a.isNextEnabled && d === "next", y = ["fc-" + d + "-button", r.getClass("button")];
        b && y.push(r.getClass("buttonActive")), o.push($("button", { type: "button", title: typeof _ == "function" ? _(a.navUnit) : _, disabled: C, "aria-pressed": b, className: y.join(" "), onClick: h }, p || (g ? $("span", { className: g }) : "")));
      }
    }
    if (o.length > 1) {
      var x = i && r.getClass("buttonGroup") || "";
      return $.apply(void 0, j(["div", { className: x }], o));
    }
    return o[0];
  }, t;
}(U), Oo = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.model, r = n.extraClassName, o = !1, i, c, l = a.sectionWidgets, s = l.center;
    l.left ? (o = !0, i = l.left) : i = l.start, l.right ? (o = !0, c = l.right) : c = l.end;
    var d = [
      r || "",
      "fc-toolbar",
      o ? "fc-toolbar-ltr" : ""
    ];
    return $(
      "div",
      { className: d.join(" ") },
      this.renderSection("start", i || []),
      this.renderSection("center", s || []),
      this.renderSection("end", c || [])
    );
  }, t.prototype.renderSection = function(n, a) {
    var r = this.props;
    return $(hG, { key: n, widgetGroups: a, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }, t;
}(U), vG = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      availableWidth: null
    }, n.handleEl = function(a) {
      n.el = a, Ce(n.props.elRef, a), n.updateAvailableWidth();
    }, n.handleResize = function() {
      n.updateAvailableWidth();
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state, o = a.aspectRatio, i = [
      "fc-view-harness",
      o || a.liquid || a.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], c = "", l = "";
    return o ? r.availableWidth !== null ? c = r.availableWidth / o : l = 1 / o * 100 + "%" : c = a.height || "", $("div", { "aria-labelledby": a.labeledById, ref: this.handleEl, className: i.join(" "), style: { height: c, paddingBottom: l } }, a.children);
  }, t.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, t.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, t.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, t;
}(U), pG = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleSegClick = function(r, o) {
      var i = a.component, c = i.context, l = Je(o);
      if (l && i.isValidSegDownEl(r.target)) {
        var s = ee(r.target, ".fc-event-forced-url"), d = s ? s.querySelector("a[href]").href : "";
        c.emitter.trigger("eventClick", {
          el: o,
          event: new q(i.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: r,
          view: c.viewApi
        }), d && !r.defaultPrevented && (window.location.href = d);
      }
    }, a.destroy = Y2(
      n.el,
      "click",
      ".fc-event",
      a.handleSegClick
    ), a;
  }
  return t;
}(st), _G = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleEventElRemove = function(r) {
      r === a.currentSegEl && a.handleSegLeave(null, a.currentSegEl);
    }, a.handleSegEnter = function(r, o) {
      Je(o) && (a.currentSegEl = o, a.triggerEvent("eventMouseEnter", r, o));
    }, a.handleSegLeave = function(r, o) {
      a.currentSegEl && (a.currentSegEl = null, a.triggerEvent("eventMouseLeave", r, o));
    }, a.removeHoverListeners = OU(
      n.el,
      ".fc-event",
      a.handleSegEnter,
      a.handleSegLeave
    ), a;
  }
  return t.prototype.destroy = function() {
    this.removeHoverListeners();
  }, t.prototype.triggerEvent = function(n, a, r) {
    var o = this.component, i = o.context, c = Je(r);
    (!a || o.isValidSegDownEl(a.target)) && i.emitter.trigger(n, {
      el: r,
      event: new q(i, c.eventRange.def, c.eventRange.instance),
      jsEvent: a,
      view: i.viewApi
    });
  }, t;
}(st), gG = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.buildViewContext = k(Qj), n.buildViewPropTransformers = k(yG), n.buildToolbarProps = k(wG), n.headerRef = le(), n.footerRef = le(), n.interactionsStore = {}, n.state = {
      viewLabelId: vn()
    }, n.registerInteractiveComponent = function(a, r) {
      var o = fG(a, r), i = [
        pG,
        _G
      ], c = i.concat(n.props.pluginHooks.componentInteractions), l = c.map(function(s) {
        return new s(o);
      });
      n.interactionsStore[a.uid] = l, la[a.uid] = o;
    }, n.unregisterInteractiveComponent = function(a) {
      var r = n.interactionsStore[a.uid];
      if (r) {
        for (var o = 0, i = r; o < i.length; o++) {
          var c = i[o];
          c.destroy();
        }
        delete n.interactionsStore[a.uid];
      }
      delete la[a.uid];
    }, n.resizeRunner = new tr(function() {
      n.props.emitter.trigger("_resize", !0), n.props.emitter.trigger("windowResize", { view: n.props.viewApi });
    }), n.handleWindowResize = function(a) {
      var r = n.props.options;
      r.handleWindowResize && a.target === window && n.resizeRunner.request(r.windowResizeDelay);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.toolbarConfig, r = n.options, o = this.buildToolbarProps(
      n.viewSpec,
      n.dateProfile,
      n.dateProfileGenerator,
      n.currentDate,
      xt(n.options.now, n.dateEnv),
      n.viewTitle
    ), i = !1, c = "", l;
    n.isHeightAuto || n.forPrint ? c = "" : r.height != null ? i = !0 : r.contentHeight != null ? c = r.contentHeight : l = Math.max(r.aspectRatio, 0.5);
    var s = this.buildViewContext(n.viewSpec, n.viewApi, n.options, n.dateProfileGenerator, n.dateEnv, n.theme, n.pluginHooks, n.dispatch, n.getCurrentData, n.emitter, n.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), d = a.header && a.header.hasTitle ? this.state.viewLabelId : "";
    return $(
      Ue.Provider,
      { value: s },
      a.header && $(Oo, w({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: a.header, titleId: d }, o)),
      $(
        vG,
        { liquid: i, height: c, aspectRatio: l, labeledById: d },
        this.renderView(n),
        this.buildAppendContent()
      ),
      a.footer && $(Oo, w({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: a.footer, titleId: "" }, o))
    );
  }, t.prototype.componentDidMount = function() {
    var n = this.props;
    this.calendarInteractions = n.pluginHooks.calendarInteractions.map(function(o) {
      return new o(n);
    }), window.addEventListener("resize", this.handleWindowResize);
    var a = n.pluginHooks.propSetHandlers;
    for (var r in a)
      a[r](n[r], n);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props, r = a.pluginHooks.propSetHandlers;
    for (var o in r)
      a[o] !== n[o] && r[o](a[o], a);
  }, t.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (var n = 0, a = this.calendarInteractions; n < a.length; n++) {
      var r = a[n];
      r.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }, t.prototype.buildAppendContent = function() {
    var n = this.props, a = n.pluginHooks.viewContainerAppends.map(function(r) {
      return r(n);
    });
    return $.apply(void 0, j([oe, {}], a));
  }, t.prototype.renderView = function(n) {
    for (var a = n.pluginHooks, r = n.viewSpec, o = {
      dateProfile: n.dateProfile,
      businessHours: n.businessHours,
      eventStore: n.renderableEventStore,
      eventUiBases: n.eventUiBases,
      dateSelection: n.dateSelection,
      eventSelection: n.eventSelection,
      eventDrag: n.eventDrag,
      eventResize: n.eventResize,
      isHeightAuto: n.isHeightAuto,
      forPrint: n.forPrint
    }, i = this.buildViewPropTransformers(a.viewPropsTransformers), c = 0, l = i; c < l.length; c++) {
      var s = l[c];
      w(o, s.transform(o, n));
    }
    var d = r.component;
    return $(d, w({}, o));
  }, t;
}(yn);
function wG(e, t, n, a, r, o) {
  var i = n.build(r, void 0, !1), c = n.buildPrev(t, a, !1), l = n.buildNext(t, a, !1);
  return {
    title: o,
    activeButton: e.type,
    navUnit: e.singleUnit,
    isTodayEnabled: i.isValid && !Le(t.currentRange, r),
    isPrevEnabled: c.isValid,
    isNextEnabled: l.isValid
  };
}
function yG(e) {
  return e.map(function(t) {
    return new t();
  });
}
var CG = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      forPrint: !1
    }, n.handleBeforePrint = function() {
      n.setState({ forPrint: !0 });
    }, n.handleAfterPrint = function() {
      n.setState({ forPrint: !1 });
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.options, r = this.state.forPrint, o = r || a.height === "auto" || a.contentHeight === "auto", i = !o && a.height != null ? a.height : "", c = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + a.direction,
      n.theme.getClass("root")
    ];
    return y0() || c.push("fc-liquid-hack"), n.children(c, i, o, r);
  }, t.prototype.componentDidMount = function() {
    var n = this.props.emitter;
    n.on("_beforeprint", this.handleBeforePrint), n.on("_afterprint", this.handleAfterPrint);
  }, t.prototype.componentWillUnmount = function() {
    var n = this.props.emitter;
    n.off("_beforeprint", this.handleBeforePrint), n.off("_afterprint", this.handleAfterPrint);
  }, t;
}(U);
function bG(e, t) {
  return !e || t > 10 ? J({ weekday: "short" }) : t > 1 ? J({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : J({ weekday: "long" });
}
var B0 = "fc-col-header-cell";
function O0(e) {
  return e.text;
}
var $G = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.dateEnv, r = n.options, o = n.theme, i = n.viewApi, c = this.props, l = c.date, s = c.dateProfile, d = C0(l, c.todayRange, null, s), h = [B0].concat(Za(d, o)), p = a.format(l, c.dayHeaderFormat), g = !d.isDisabled && c.colCnt > 1 ? Xa(this.context, l) : {}, _ = w(w(w({ date: a.toDate(l), view: i }, c.extraHookProps), { text: p }), d);
    return $(lt, { hookProps: _, classNames: r.dayHeaderClassNames, content: r.dayHeaderContent, defaultContent: O0, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, function(b, C, y, x) {
      return $(
        "th",
        w({ ref: b, role: "columnheader", className: h.concat(C).join(" "), "data-date": d.isDisabled ? void 0 : J2(l), colSpan: c.colSpan }, c.extraDataAttrs),
        $("div", { className: "fc-scrollgrid-sync-inner" }, !d.isDisabled && $("a", w({ ref: y, className: [
          "fc-col-header-cell-cushion",
          c.isSticky ? "fc-sticky" : ""
        ].join(" ") }, g), x))
      );
    });
  }, t;
}(U), EG = J({ weekday: "long" }), xG = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = this.context, r = a.dateEnv, o = a.theme, i = a.viewApi, c = a.options, l = ae(new Date(2592e5), n.dow), s = {
      dow: n.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, d = [B0].concat(Za(s, o), n.extraClassNames || []), h = r.format(l, n.dayHeaderFormat), p = w(w(w(w({
      date: l
    }, s), { view: i }), n.extraHookProps), { text: h });
    return $(lt, { hookProps: p, classNames: c.dayHeaderClassNames, content: c.dayHeaderContent, defaultContent: O0, didMount: c.dayHeaderDidMount, willUnmount: c.dayHeaderWillUnmount }, function(g, _, b, C) {
      return $(
        "th",
        w({ ref: g, role: "columnheader", className: d.concat(_).join(" "), colSpan: n.colSpan }, n.extraDataAttrs),
        $(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          $("a", { "aria-label": r.format(l, EG), className: [
            "fc-col-header-cell-cushion",
            n.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: b }, C)
        )
      );
    });
  }, t;
}(U), N0 = function(e) {
  M(t, e);
  function t(n, a) {
    var r = e.call(this, n, a) || this;
    return r.initialNowDate = xt(a.options.now, a.dateEnv), r.initialNowQueriedMs = new Date().valueOf(), r.state = r.computeTiming().currentState, r;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state;
    return a.children(r.nowDate, r.todayRange);
  }, t.prototype.componentDidMount = function() {
    this.setTimeout();
  }, t.prototype.componentDidUpdate = function(n) {
    n.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }, t.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  }, t.prototype.computeTiming = function() {
    var n = this, a = n.props, r = n.context, o = Be(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), i = r.dateEnv.startOf(o, a.unit), c = r.dateEnv.add(i, I(1, a.unit)), l = c.valueOf() - o.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: i, todayRange: No(i) },
      nextState: { nowDate: c, todayRange: No(c) },
      waitMs: l
    };
  }, t.prototype.setTimeout = function() {
    var n = this, a = this.computeTiming(), r = a.nextState, o = a.waitMs;
    this.timeoutId = setTimeout(function() {
      n.setState(r, function() {
        n.setTimeout();
      });
    }, o);
  }, t.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, t.contextType = Ue, t;
}(Aa);
function No(e) {
  var t = F(e), n = ae(t, 1);
  return { start: t, end: n };
}
var SG = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.createDayHeaderFormatter = k(zG), n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = this.props, r = a.dates, o = a.dateProfile, i = a.datesRepDistinctDays, c = a.renderIntro, l = this.createDayHeaderFormatter(n.options.dayHeaderFormat, i, r.length);
    return $(N0, { unit: "day" }, function(s, d) {
      return $(
        "tr",
        { role: "row" },
        c && c("day"),
        r.map(function(h) {
          return i ? $($G, { key: h.toISOString(), date: h, dateProfile: o, todayRange: d, colCnt: r.length, dayHeaderFormat: l }) : $(xG, { key: h.getUTCDay(), dow: h.getUTCDay(), dayHeaderFormat: l });
        })
      );
    });
  }, t;
}(U);
function zG(e, t, n) {
  return e || bG(t, n);
}
var MG = function() {
  function e(t, n) {
    for (var a = t.start, r = t.end, o = [], i = [], c = -1; a < r; )
      n.isHiddenDay(a) ? o.push(c + 0.5) : (c += 1, o.push(c), i.push(a)), a = ae(a, 1);
    this.dates = i, this.indices = o, this.cnt = i.length;
  }
  return e.prototype.sliceRange = function(t) {
    var n = this.getDateDayIndex(t.start), a = this.getDateDayIndex(ae(t.end, -1)), r = Math.max(0, n), o = Math.min(this.cnt - 1, a);
    return r = Math.ceil(r), o = Math.floor(o), r <= o ? {
      firstIndex: r,
      lastIndex: o,
      isStart: n === r,
      isEnd: a === o
    } : null;
  }, e.prototype.getDateDayIndex = function(t) {
    var n = this.indices, a = Math.floor(it(this.dates[0], t));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }, e;
}(), DG = function() {
  function e(t, n) {
    var a = t.dates, r, o, i;
    if (n) {
      for (o = a[0].getUTCDay(), r = 1; r < a.length && a[r].getUTCDay() !== o; r += 1)
        ;
      i = Math.ceil(a.length / r);
    } else
      i = 1, r = a.length;
    this.rowCnt = i, this.colCnt = r, this.daySeries = t, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  return e.prototype.buildCells = function() {
    for (var t = [], n = 0; n < this.rowCnt; n += 1) {
      for (var a = [], r = 0; r < this.colCnt; r += 1)
        a.push(this.buildCell(n, r));
      t.push(a);
    }
    return t;
  }, e.prototype.buildCell = function(t, n) {
    var a = this.daySeries.dates[t * this.colCnt + n];
    return {
      key: a.toISOString(),
      date: a
    };
  }, e.prototype.buildHeaderDates = function() {
    for (var t = [], n = 0; n < this.colCnt; n += 1)
      t.push(this.cells[0][n].date);
    return t;
  }, e.prototype.sliceRange = function(t) {
    var n = this.colCnt, a = this.daySeries.sliceRange(t), r = [];
    if (a)
      for (var o = a.firstIndex, i = a.lastIndex, c = o; c <= i; ) {
        var l = Math.floor(c / n), s = Math.min((l + 1) * n, i + 1);
        r.push({
          row: l,
          firstCol: c % n,
          lastCol: (s - 1) % n,
          isStart: a.isStart && c === o,
          isEnd: a.isEnd && s - 1 === i
        }), c = s;
      }
    return r;
  }, e;
}(), HG = function() {
  function e() {
    this.sliceBusinessHours = k(this._sliceBusinessHours), this.sliceDateSelection = k(this._sliceDateSpan), this.sliceEventStore = k(this._sliceEventStore), this.sliceEventDrag = k(this._sliceInteraction), this.sliceEventResize = k(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return e.prototype.sliceProps = function(t, n, a, r) {
    for (var o = [], i = 4; i < arguments.length; i++)
      o[i - 4] = arguments[i];
    var c = t.eventUiBases, l = this.sliceEventStore.apply(this, j([t.eventStore, c, n, a], o));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, j([t.dateSelection, c, r], o)),
      businessHourSegs: this.sliceBusinessHours.apply(this, j([t.businessHours, n, a, r], o)),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag.apply(this, j([t.eventDrag, c, n, a], o)),
      eventResize: this.sliceEventResize.apply(this, j([t.eventResize, c, n, a], o)),
      eventSelection: t.eventSelection
    };
  }, e.prototype.sliceNowDate = function(t, n) {
    for (var a = [], r = 2; r < arguments.length; r++)
      a[r - 2] = arguments[r];
    return this._sliceDateSpan.apply(this, j([
      { range: { start: t, end: Be(t, 1) }, allDay: !1 },
      {},
      n
    ], a));
  }, e.prototype._sliceBusinessHours = function(t, n, a, r) {
    for (var o = [], i = 4; i < arguments.length; i++)
      o[i - 4] = arguments[i];
    return t ? this._sliceEventStore.apply(this, j([
      Ke(t, Bn(n, Boolean(a)), r),
      {},
      n,
      a
    ], o)).bg : [];
  }, e.prototype._sliceEventStore = function(t, n, a, r) {
    for (var o = [], i = 4; i < arguments.length; i++)
      o[i - 4] = arguments[i];
    if (t) {
      var c = Mo(t, n, Bn(a, Boolean(r)), r);
      return {
        bg: this.sliceEventRanges(c.bg, o),
        fg: this.sliceEventRanges(c.fg, o)
      };
    }
    return { bg: [], fg: [] };
  }, e.prototype._sliceInteraction = function(t, n, a, r) {
    for (var o = [], i = 4; i < arguments.length; i++)
      o[i - 4] = arguments[i];
    if (!t)
      return null;
    var c = Mo(t.mutatedEvents, n, Bn(a, Boolean(r)), r);
    return {
      segs: this.sliceEventRanges(c.fg, o),
      affectedInstances: t.affectedEvents.instances,
      isEvent: t.isEvent
    };
  }, e.prototype._sliceDateSpan = function(t, n, a) {
    for (var r = [], o = 3; o < arguments.length; o++)
      r[o - 3] = arguments[o];
    if (!t)
      return [];
    for (var i = sj(t, n, a), c = this.sliceRange.apply(this, j([t.range], r)), l = 0, s = c; l < s.length; l++) {
      var d = s[l];
      d.eventRange = i;
    }
    return c;
  }, e.prototype.sliceEventRanges = function(t, n) {
    for (var a = [], r = 0, o = t; r < o.length; r++) {
      var i = o[r];
      a.push.apply(a, this.sliceEventRange(i, n));
    }
    return a;
  }, e.prototype.sliceEventRange = function(t, n) {
    var a = t.range;
    this.forceDayIfListItem && t.ui.display === "list-item" && (a = {
      start: a.start,
      end: ae(a.start, 1)
    });
    for (var r = this.sliceRange.apply(this, j([a], n)), o = 0, i = r; o < i.length; o++) {
      var c = i[o];
      c.eventRange = t, c.isStart = t.isStart && c.isStart, c.isEnd = t.isEnd && c.isEnd;
    }
    return r;
  }, e;
}();
function Bn(e, t) {
  var n = e.activeRange;
  return t ? n : {
    start: Be(n.start, e.slotMinTime.milliseconds),
    end: Be(n.end, e.slotMaxTime.milliseconds - 864e5)
  };
}
function F0(e, t, n) {
  var a = e.mutatedEvents.instances;
  for (var r in a)
    if (!gn(t.validRange, a[r].range))
      return !1;
  return U0({ eventDrag: e }, n);
}
function TG(e, t, n) {
  return gn(t.validRange, e.range) ? U0({ dateSelection: e }, n) : !1;
}
function U0(e, t) {
  var n = t.getCurrentData(), a = w({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, e);
  return (t.pluginHooks.isPropsValid || RG)(a, t);
}
function RG(e, t, n, a) {
  return n === void 0 && (n = {}), !(e.eventDrag && !VG(e, t, n, a) || e.dateSelection && !AG(e, t, n, a));
}
function VG(e, t, n, a) {
  var r = t.getCurrentData(), o = e.eventDrag, i = o.mutatedEvents, c = i.defs, l = i.instances, s = tn(c, o.isEvent ? e.eventUiBases : { "": r.selectionConfig });
  a && (s = Fe(s, a));
  var d = Mq(e.eventStore, o.affectedEvents.instances), h = d.defs, p = d.instances, g = tn(h, e.eventUiBases);
  for (var _ in l) {
    var b = l[_], C = b.range, y = s[b.defId], x = c[b.defId];
    if (!W0(y.constraints, C, d, e.businessHours, t))
      return !1;
    var z = t.options.eventOverlap, S = typeof z == "function" ? z : null;
    for (var V in p) {
      var T = p[V];
      if (qa(C, T.range)) {
        var A = g[T.defId].overlap;
        if (A === !1 && o.isEvent || y.overlap === !1 || S && !S(
          new q(t, h[T.defId], T),
          new q(t, x, b)
        ))
          return !1;
      }
    }
    for (var R = r.eventStore, Y = 0, Z = y.allows; Y < Z.length; Y++) {
      var L = Z[Y], te = w(w({}, n), { range: b.range, allDay: x.allDay }), Q = R.defs[x.defId], se = R.instances[_], $n = void 0;
      if (Q ? $n = new q(t, Q, se) : $n = new q(t, x), !L(Ga(te, t), $n))
        return !1;
    }
  }
  return !0;
}
function AG(e, t, n, a) {
  var r = e.eventStore, o = r.defs, i = r.instances, c = e.dateSelection, l = c.range, s = t.getCurrentData().selectionConfig;
  if (a && (s = a(s)), !W0(s.constraints, l, r, e.businessHours, t))
    return !1;
  var d = t.options.selectOverlap, h = typeof d == "function" ? d : null;
  for (var p in i) {
    var g = i[p];
    if (qa(l, g.range) && (s.overlap === !1 || h && !h(new q(t, o[g.defId], g), null)))
      return !1;
  }
  for (var _ = 0, b = s.allows; _ < b.length; _++) {
    var C = b[_], y = w(w({}, n), c);
    if (!C(Ga(y, t), null))
      return !1;
  }
  return !0;
}
function W0(e, t, n, a, r) {
  for (var o = 0, i = e; o < i.length; o++) {
    var c = i[o];
    if (!IG(kG(c, t, n, a, r), t))
      return !1;
  }
  return !0;
}
function kG(e, t, n, a, r) {
  return e === "businessHours" ? On(Ke(a, t, r)) : typeof e == "string" ? On(_n(n, function(o) {
    return o.groupId === e;
  })) : typeof e == "object" && e ? On(Ke(e, t, r)) : [];
}
function On(e) {
  var t = e.instances, n = [];
  for (var a in t)
    n.push(t[a].range);
  return n;
}
function IG(e, t) {
  for (var n = 0, a = e; n < a.length; n++) {
    var r = a[n];
    if (gn(r, t))
      return !0;
  }
  return !1;
}
var Tt = /^(visible|hidden)$/, LG = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleEl = function(a) {
      n.el = a, Ce(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.liquid, r = n.liquidIsAbsolute, o = a && r, i = ["fc-scroller"];
    return a && (r ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), $("div", { ref: this.handleEl, className: i.join(" "), style: {
      overflowX: n.overflowX,
      overflowY: n.overflowY,
      left: o && -(n.overcomeLeft || 0) || "",
      right: o && -(n.overcomeRight || 0) || "",
      bottom: o && -(n.overcomeBottom || 0) || "",
      marginLeft: !o && -(n.overcomeLeft || 0) || "",
      marginRight: !o && -(n.overcomeRight || 0) || "",
      marginBottom: !o && -(n.overcomeBottom || 0) || "",
      maxHeight: n.maxHeight || ""
    } }, n.children);
  }, t.prototype.needsXScrolling = function() {
    if (Tt.test(this.props.overflowX))
      return !1;
    for (var n = this.el, a = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), r = n.children, o = 0; o < r.length; o += 1) {
      var i = r[o];
      if (i.getBoundingClientRect().width > a)
        return !0;
    }
    return !1;
  }, t.prototype.needsYScrolling = function() {
    if (Tt.test(this.props.overflowY))
      return !1;
    for (var n = this.el, a = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), r = n.children, o = 0; o < r.length; o += 1) {
      var i = r[o];
      if (i.getBoundingClientRect().height > a)
        return !0;
    }
    return !1;
  }, t.prototype.getXScrollbarWidth = function() {
    return Tt.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, t.prototype.getYScrollbarWidth = function() {
    return Tt.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, t;
}(U), ke = function() {
  function e(t) {
    var n = this;
    this.masterCallback = t, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(a, r) {
      var o = n, i = o.depths, c = o.currentMap, l = !1, s = !1;
      a !== null ? (l = r in c, c[r] = a, i[r] = (i[r] || 0) + 1, s = !0) : (i[r] -= 1, i[r] || (delete c[r], delete n.callbackMap[r], l = !0)), n.masterCallback && (l && n.masterCallback(null, String(r)), s && n.masterCallback(a, String(r)));
    };
  }
  return e.prototype.createRef = function(t) {
    var n = this, a = this.callbackMap[t];
    return a || (a = this.callbackMap[t] = function(r) {
      n.handleValue(r, String(t));
    }), a;
  }, e.prototype.collect = function(t, n, a) {
    return uW(this.currentMap, t, n, a);
  }, e.prototype.getAll = function() {
    return Oa(this.currentMap);
  }, e;
}();
function PG(e) {
  for (var t = LU(e, ".fc-scrollgrid-shrink"), n = 0, a = 0, r = t; a < r.length; a++) {
    var o = r[a];
    n = Math.max(n, KU(o));
  }
  return Math.ceil(n);
}
function j0(e, t) {
  return e.liquid && t.liquid;
}
function BG(e, t) {
  return t.maxHeight != null || j0(e, t);
}
function OG(e, t, n, a) {
  var r = n.expandRows, o = typeof t.content == "function" ? t.content(n) : $("table", {
    role: "presentation",
    className: [
      t.tableClassName,
      e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: r ? n.clientHeight : ""
    }
  }, n.tableColGroupNode, $(a ? "thead" : "tbody", {
    role: "presentation"
  }, typeof t.rowContent == "function" ? t.rowContent(n) : t.rowContent));
  return o;
}
function NG(e, t) {
  return Qe(e, t, ye);
}
function FG(e, t) {
  for (var n = [], a = 0, r = e; a < r.length; a++)
    for (var o = r[a], i = o.span || 1, c = 0; c < i; c += 1)
      n.push($("col", { style: {
        width: o.width === "shrink" ? UG(t) : o.width || "",
        minWidth: o.minWidth || ""
      } }));
  return $.apply(void 0, j(["colgroup", {}], n));
}
function UG(e) {
  return e == null ? 4 : e;
}
function WG(e) {
  for (var t = 0, n = e; t < n.length; t++) {
    var a = n[t];
    if (a.width === "shrink")
      return !0;
  }
  return !1;
}
function jG(e, t) {
  var n = [
    "fc-scrollgrid",
    t.theme.getClass("table")
  ];
  return e && n.push("fc-scrollgrid-liquid"), n;
}
function qG(e, t) {
  var n = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + e.type,
    e.className
  ];
  return t && e.liquid && e.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function GG(e) {
  return $("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: e.clientWidth,
    minWidth: e.tableMinWidth
  } });
}
function Fo(e) {
  var t = e.stickyHeaderDates;
  return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
function YG(e) {
  var t = e.stickyFooterScrollbar;
  return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
var q0 = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.processCols = k(function(a) {
      return a;
    }, NG), n.renderMicroColGroup = k(FG), n.scrollerRefs = new ke(), n.scrollerElRefs = new ke(n._handleScrollerEl.bind(n)), n.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, n.handleSizing = function() {
      n.safeSetState(w({ shrinkWidth: n.computeShrinkWidth() }, n.computeScrollerDims()));
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state, o = n.context, i = a.sections || [], c = this.processCols(a.cols), l = this.renderMicroColGroup(c, r.shrinkWidth), s = jG(a.liquid, o);
    a.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
    for (var d = i.length, h = 0, p, g = [], _ = [], b = []; h < d && (p = i[h]).type === "header"; )
      g.push(this.renderSection(p, l, !0)), h += 1;
    for (; h < d && (p = i[h]).type === "body"; )
      _.push(this.renderSection(p, l, !1)), h += 1;
    for (; h < d && (p = i[h]).type === "footer"; )
      b.push(this.renderSection(p, l, !0)), h += 1;
    var C = !y0(), y = { role: "rowgroup" };
    return $("table", {
      role: "grid",
      className: s.join(" "),
      style: { height: a.height }
    }, Boolean(!C && g.length) && $.apply(void 0, j(["thead", y], g)), Boolean(!C && _.length) && $.apply(void 0, j(["tbody", y], _)), Boolean(!C && b.length) && $.apply(void 0, j(["tfoot", y], b)), C && $.apply(void 0, j(j(j(["tbody", y], g), _), b)));
  }, t.prototype.renderSection = function(n, a, r) {
    return "outerContent" in n ? $(oe, { key: n.key }, n.outerContent) : $("tr", { key: n.key, role: "presentation", className: qG(n, this.props.liquid).join(" ") }, this.renderChunkTd(n, a, n.chunk, r));
  }, t.prototype.renderChunkTd = function(n, a, r, o) {
    if ("outerContent" in r)
      return r.outerContent;
    var i = this.props, c = this.state, l = c.forceYScrollbars, s = c.scrollerClientWidths, d = c.scrollerClientHeights, h = BG(i, n), p = j0(i, n), g = i.liquid ? l ? "scroll" : h ? "auto" : "hidden" : "visible", _ = n.key, b = OG(n, r, {
      tableColGroupNode: a,
      tableMinWidth: "",
      clientWidth: !i.collapsibleWidth && s[_] !== void 0 ? s[_] : null,
      clientHeight: d[_] !== void 0 ? d[_] : null,
      expandRows: n.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, o);
    return $(o ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, $(
      "div",
      { className: "fc-scroller-harness" + (p ? " fc-scroller-harness-liquid" : "") },
      $(LG, { ref: this.scrollerRefs.createRef(_), elRef: this.scrollerElRefs.createRef(_), overflowY: g, overflowX: i.liquid ? "hidden" : "visible", maxHeight: n.maxHeight, liquid: p, liquidIsAbsolute: !0 }, b)
    ));
  }, t.prototype._handleScrollerEl = function(n, a) {
    var r = ZG(this.props.sections, a);
    r && Ce(r.chunk.scrollerElRef, n);
  }, t.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, t.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, t.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, t.prototype.computeShrinkWidth = function() {
    return WG(this.props.cols) ? PG(this.scrollerElRefs.getAll()) : 0;
  }, t.prototype.computeScrollerDims = function() {
    var n = Nj(), a = this, r = a.scrollerRefs, o = a.scrollerElRefs, i = !1, c = {}, l = {};
    for (var s in r.currentMap) {
      var d = r.currentMap[s];
      if (d && d.needsYScrolling()) {
        i = !0;
        break;
      }
    }
    for (var h = 0, p = this.props.sections; h < p.length; h++) {
      var g = p[h], s = g.key, _ = o.currentMap[s];
      if (_) {
        var b = _.parentNode;
        c[s] = Math.floor(b.getBoundingClientRect().width - (i ? n.y : 0)), l[s] = Math.floor(b.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: i, scrollerClientWidths: c, scrollerClientHeights: l };
  }, t;
}(U);
q0.addStateEquality({
  scrollerClientWidths: ye,
  scrollerClientHeights: ye
});
function ZG(e, t) {
  for (var n = 0, a = e; n < a.length; n++) {
    var r = a[n];
    if (r.key === t)
      return r;
  }
  return null;
}
var rr = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.elRef = le(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = r.options, i = a.seg, c = i.eventRange, l = c.ui, s = {
      event: new q(r, c.def, c.instance),
      view: r.viewApi,
      timeText: a.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !a.disableDragging && QW(i, r),
      isStartResizable: !a.disableResizing && JW(i, r),
      isEndResizable: !a.disableResizing && ej(i),
      isMirror: Boolean(a.isDragging || a.isResizing || a.isDateSelecting),
      isStart: Boolean(i.isStart),
      isEnd: Boolean(i.isEnd),
      isPast: Boolean(a.isPast),
      isFuture: Boolean(a.isFuture),
      isToday: Boolean(a.isToday),
      isSelected: Boolean(a.isSelected),
      isDragging: Boolean(a.isDragging),
      isResizing: Boolean(a.isResizing)
    }, d = tj(s).concat(l.classNames);
    return $(lt, { hookProps: s, classNames: o.eventClassNames, content: o.eventContent, defaultContent: a.defaultContent, didMount: o.eventDidMount, willUnmount: o.eventWillUnmount, elRef: this.elRef }, function(h, p, g, _) {
      return a.children(h, d.concat(p), g, _, s);
    });
  }, t.prototype.componentDidMount = function() {
    Do(this.elRef.current, this.props.seg);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props.seg;
    a !== n.seg && Do(this.elRef.current, a);
  }, t;
}(U), XG = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = a.seg, i = r.options.eventTimeFormat || a.defaultTimeFormat, c = i0(o, i, r, a.defaultDisplayEventTime, a.defaultDisplayEventEnd);
    return $(rr, { seg: o, timeText: c, disableDragging: a.disableDragging, disableResizing: a.disableResizing, defaultContent: a.defaultContent || KG, isDragging: a.isDragging, isResizing: a.isResizing, isDateSelecting: a.isDateSelecting, isSelected: a.isSelected, isPast: a.isPast, isFuture: a.isFuture, isToday: a.isToday }, function(l, s, d, h, p) {
      return $(
        "a",
        w({ className: a.extraClassNames.concat(s).join(" "), style: {
          borderColor: p.borderColor,
          backgroundColor: p.backgroundColor
        }, ref: l }, c0(o, r)),
        $("div", { className: "fc-event-main", ref: d, style: { color: p.textColor } }, h),
        p.isStartResizable && $("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        p.isEndResizable && $("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, t;
}(U);
function KG(e) {
  return $(
    "div",
    { className: "fc-event-main-frame" },
    e.timeText && $("div", { className: "fc-event-time" }, e.timeText),
    $(
      "div",
      { className: "fc-event-title-container" },
      $("div", { className: "fc-event-title fc-sticky" }, e.event.title || $(oe, null, "\xA0"))
    )
  );
}
var QG = J({ day: "numeric" }), G0 = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = r.options, i = Y0({
      date: a.date,
      dateProfile: a.dateProfile,
      todayRange: a.todayRange,
      showDayNumber: a.showDayNumber,
      extraProps: a.extraHookProps,
      viewApi: r.viewApi,
      dateEnv: r.dateEnv
    });
    return $(x0, { hookProps: i, content: o.dayCellContent, defaultContent: a.defaultContent }, a.children);
  }, t;
}(U);
function Y0(e) {
  var t = e.date, n = e.dateEnv, a = C0(t, e.todayRange, null, e.dateProfile);
  return w(w(w({ date: n.toDate(t), view: e.viewApi }, a), { dayNumberText: e.showDayNumber ? n.format(t, QG) : "" }), e.extraProps);
}
var Z0 = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.refineHookProps = Pt(Y0), n.normalizeClassNames = S0(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = r.options, i = this.refineHookProps({
      date: a.date,
      dateProfile: a.dateProfile,
      todayRange: a.todayRange,
      showDayNumber: a.showDayNumber,
      extraProps: a.extraHookProps,
      viewApi: r.viewApi,
      dateEnv: r.dateEnv
    }), c = Za(i, r.theme).concat(i.isDisabled ? [] : this.normalizeClassNames(o.dayCellClassNames, i)), l = i.isDisabled ? {} : {
      "data-date": J2(a.date)
    };
    return $(Ja, { hookProps: i, didMount: o.dayCellDidMount, willUnmount: o.dayCellWillUnmount, elRef: a.elRef }, function(s) {
      return a.children(s, c, l, i.isDisabled);
    });
  }, t;
}(U);
function JG(e) {
  return $("div", { className: "fc-" + e });
}
var eY = function(e) {
  return $(rr, { defaultContent: tY, seg: e.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday }, function(t, n, a, r, o) {
    return $("div", { ref: t, className: ["fc-bg-event"].concat(n).join(" "), style: {
      backgroundColor: o.backgroundColor
    } }, r);
  });
};
function tY(e) {
  var t = e.event.title;
  return t && $("div", { className: "fc-event-title" }, e.event.title);
}
var nY = function(e) {
  return $(Ue.Consumer, null, function(t) {
    var n = t.dateEnv, a = t.options, r = e.date, o = a.weekNumberFormat || e.defaultFormat, i = n.computeWeekNumber(r), c = n.format(r, o), l = { num: i, text: c, date: r };
    return $(lt, { hookProps: l, classNames: a.weekNumberClassNames, content: a.weekNumberContent, defaultContent: aY, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount }, e.children);
  });
};
function aY(e) {
  return e.text;
}
var Nn = 10, rY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      titleId: vn()
    }, n.handleRootEl = function(a) {
      n.rootEl = a, n.props.elRef && Ce(n.props.elRef, a);
    }, n.handleDocumentMouseDown = function(a) {
      var r = q2(a);
      n.rootEl.contains(r) || n.handleCloseClick();
    }, n.handleDocumentKeyDown = function(a) {
      a.key === "Escape" && n.handleCloseClick();
    }, n.handleCloseClick = function() {
      var a = n.props.onClose;
      a && a();
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.theme, r = n.options, o = this, i = o.props, c = o.state, l = [
      "fc-popover",
      a.getClass("popover")
    ].concat(i.extraClassNames || []);
    return AU($(
      "div",
      w({ id: i.id, className: l.join(" "), "aria-labelledby": c.titleId }, i.extraAttrs, { ref: this.handleRootEl }),
      $(
        "div",
        { className: "fc-popover-header " + a.getClass("popoverHeader") },
        $("span", { className: "fc-popover-title", id: c.titleId }, i.title),
        $("span", { className: "fc-popover-close " + a.getIconClass("close"), title: r.closeHint, onClick: this.handleCloseClick })
      ),
      $("div", { className: "fc-popover-body " + a.getClass("popoverContent") }, i.children)
    ), i.parentEl);
  }, t.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, t.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, t.prototype.updateSize = function() {
    var n = this.context.isRtl, a = this.props, r = a.alignmentEl, o = a.alignGridTop, i = this.rootEl, c = jj(r);
    if (c) {
      var l = i.getBoundingClientRect(), s = o ? ee(r, ".fc-scrollgrid").getBoundingClientRect().top : c.top, d = n ? c.right - l.width : c.left;
      s = Math.max(s, Nn), d = Math.min(d, document.documentElement.clientWidth - Nn - l.width), d = Math.max(d, Nn);
      var h = i.offsetParent.getBoundingClientRect();
      ft(i, {
        top: s - h.top,
        left: d - h.left
      });
    }
  }, t;
}(U), oY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleRootEl = function(a) {
      n.rootEl = a, a ? n.context.registerInteractiveComponent(n, {
        el: a,
        useEventCenter: !1
      }) : n.context.unregisterInteractiveComponent(n);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.options, r = n.dateEnv, o = this.props, i = o.startDate, c = o.todayRange, l = o.dateProfile, s = r.format(i, a.dayPopoverFormat);
    return $(Z0, { date: i, dateProfile: l, todayRange: c, elRef: this.handleRootEl }, function(d, h, p) {
      return $(
        rY,
        { elRef: d, id: o.id, title: s, extraClassNames: ["fc-more-popover"].concat(h), extraAttrs: p, parentEl: o.parentEl, alignmentEl: o.alignmentEl, alignGridTop: o.alignGridTop, onClose: o.onClose },
        $(G0, { date: i, dateProfile: l, todayRange: c }, function(g, _) {
          return _ && $("div", { className: "fc-more-popover-misc", ref: g }, _);
        }),
        o.children
      );
    });
  }, t.prototype.queryHit = function(n, a, r, o) {
    var i = this, c = i.rootEl, l = i.props;
    return n >= 0 && n < r && a >= 0 && a < o ? {
      dateProfile: l.dateProfile,
      dateSpan: w({ allDay: !0, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: c,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: o
      },
      layer: 1
    } : null;
  }, t;
}(ct), iY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.linkElRef = le(), n.state = {
      isPopoverOpen: !1,
      popoverId: vn()
    }, n.handleClick = function(a) {
      var r = n, o = r.props, i = r.context, c = i.options.moreLinkClick, l = Uo(o).start;
      function s(d) {
        var h = d.eventRange, p = h.def, g = h.instance, _ = h.range;
        return {
          event: new q(i, p, g),
          start: i.dateEnv.toDate(_.start),
          end: i.dateEnv.toDate(_.end),
          isStart: d.isStart,
          isEnd: d.isEnd
        };
      }
      typeof c == "function" && (c = c({
        date: l,
        allDay: Boolean(o.allDayDate),
        allSegs: o.allSegs.map(s),
        hiddenSegs: o.hiddenSegs.map(s),
        jsEvent: a,
        view: i.viewApi
      })), !c || c === "popover" ? n.setState({ isPopoverOpen: !0 }) : typeof c == "string" && i.calendarApi.zoomTo(l, c);
    }, n.handlePopoverClose = function() {
      n.setState({ isPopoverOpen: !1 });
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this, r = a.props, o = a.state;
    return $(Ue.Consumer, null, function(i) {
      var c = i.viewApi, l = i.options, s = i.calendarApi, d = l.moreLinkText, h = r.moreCnt, p = Uo(r), g = typeof d == "function" ? d.call(s, h) : "+" + h + " " + d, _ = ht(l.moreLinkHint, [h], g), b = {
        num: h,
        shortText: "+" + h,
        text: g,
        view: c
      };
      return $(
        oe,
        null,
        Boolean(r.moreCnt) && $(lt, { elRef: n.linkElRef, hookProps: b, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: r.defaultContent || cY, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(C, y, x, z) {
          return r.children(C, ["fc-more-link"].concat(y), x, z, n.handleClick, _, o.isPopoverOpen, o.isPopoverOpen ? o.popoverId : "");
        }),
        o.isPopoverOpen && $(oY, { id: o.popoverId, startDate: p.start, endDate: p.end, dateProfile: r.dateProfile, todayRange: r.todayRange, extraDateSpan: r.extraDateSpan, parentEl: n.parentEl, alignmentEl: r.alignmentElRef.current, alignGridTop: r.alignGridTop, onClose: n.handlePopoverClose }, r.popoverContent())
      );
    });
  }, t.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, t.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, t.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = ee(this.linkElRef.current, ".fc-view-harness"));
  }, t;
}(U);
function cY(e) {
  return e.text;
}
function Uo(e) {
  if (e.allDayDate)
    return {
      start: e.allDayDate,
      end: ae(e.allDayDate, 1)
    };
  var t = e.hiddenSegs;
  return {
    start: lY(t),
    end: dY(t)
  };
}
function lY(e) {
  return e.reduce(sY).eventRange.range.start;
}
function sY(e, t) {
  return e.eventRange.range.start < t.eventRange.range.start ? e : t;
}
function dY(e) {
  return e.reduce(uY).eventRange.range.end;
}
function uY(e, t) {
  return e.eventRange.range.end > t.eventRange.range.end ? e : t;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var mY = function(e) {
  M(t, e);
  function t(n, a) {
    a === void 0 && (a = {});
    var r = e.call(this) || this;
    return r.isRendering = !1, r.isRendered = !1, r.currentClassNames = [], r.customContentRenderId = 0, r.handleAction = function(o) {
      switch (o.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          r.renderRunner.tryDrain();
      }
    }, r.handleData = function(o) {
      r.currentData = o, r.renderRunner.request(o.calendarOptions.rerenderDelay);
    }, r.handleRenderRequest = function() {
      if (r.isRendering) {
        r.isRendered = !0;
        var o = r.currentData;
        mo(function() {
          VU($(CG, { options: o.calendarOptions, theme: o.theme, emitter: o.emitter }, function(i, c, l, s) {
            return r.setClassNames(i), r.setHeight(c), $(
              E0.Provider,
              { value: r.customContentRenderId },
              $(gG, w({ isHeightAuto: l, forPrint: s }, o))
            );
          }), r.el);
        });
      } else
        r.isRendered && (r.isRendered = !1, kU(r.el), r.setClassNames([]), r.setHeight(""));
    }, r.el = n, r.renderRunner = new tr(r.handleRenderRequest), new I0({
      optionOverrides: a,
      calendarApi: r,
      onAction: r.handleAction,
      onData: r.handleData
    }), r;
  }
  return Object.defineProperty(t.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.render = function() {
    var n = this.isRendering;
    n ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), n && this.updateSize();
  }, t.prototype.destroy = function() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }, t.prototype.updateSize = function() {
    var n = this;
    mo(function() {
      e.prototype.updateSize.call(n);
    });
  }, t.prototype.batchRendering = function(n) {
    this.renderRunner.pause("batchRendering"), n(), this.renderRunner.resume("batchRendering");
  }, t.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  }, t.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", !0);
  }, t.prototype.resetOptions = function(n, a) {
    this.currentDataManager.resetOptions(n, a);
  }, t.prototype.setClassNames = function(n) {
    if (!Qe(n, this.currentClassNames)) {
      for (var a = this.el.classList, r = 0, o = this.currentClassNames; r < o.length; r++) {
        var i = o[r];
        a.remove(i);
      }
      for (var c = 0, l = n; c < l.length; c++) {
        var i = l[c];
        a.add(i);
      }
      this.currentClassNames = n;
    }
  }, t.prototype.setHeight = function(n) {
    j2(this.el, "height", n);
  }, t;
}(gj);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var fY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.headerElRef = le(), n;
  }
  return t.prototype.renderSimpleLayout = function(n, a) {
    var r = this, o = r.props, i = r.context, c = [], l = Fo(i.options);
    return n && c.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: n
      }
    }), c.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: a }
    }), $(ca, { viewSpec: i.viewSpec }, function(s, d) {
      return $(
        "div",
        { ref: s, className: ["fc-daygrid"].concat(d).join(" ") },
        $(q0, { liquid: !o.isHeightAuto && !o.forPrint, collapsibleWidth: o.forPrint, cols: [], sections: c })
      );
    });
  }, t.prototype.renderHScrollLayout = function(n, a, r, o) {
    var i = this.context.pluginHooks.scrollGridImpl;
    if (!i)
      throw new Error("No ScrollGrid implementation");
    var c = this, l = c.props, s = c.context, d = !l.forPrint && Fo(s.options), h = !l.forPrint && YG(s.options), p = [];
    return n && p.push({
      type: "header",
      key: "header",
      isSticky: d,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: n
      }]
    }), p.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: a
      }]
    }), h && p.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: GG
      }]
    }), $(ca, { viewSpec: s.viewSpec }, function(g, _) {
      return $(
        "div",
        { ref: g, className: ["fc-daygrid"].concat(_).join(" ") },
        $(i, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: r, minWidth: o }] }], sections: p })
      );
    });
  }, t;
}(ct);
function Rt(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n[a] = [];
  for (var r = 0, o = e; r < o.length; r++) {
    var i = o[r];
    n[i.row].push(i);
  }
  return n;
}
function Vt(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n[a] = [];
  for (var r = 0, o = e; r < o.length; r++) {
    var i = o[r];
    n[i.firstCol].push(i);
  }
  return n;
}
function Wo(e, t) {
  var n = [];
  if (e) {
    for (var a = 0; a < t; a += 1)
      n[a] = {
        affectedInstances: e.affectedInstances,
        isEvent: e.isEvent,
        segs: []
      };
    for (var r = 0, o = e.segs; r < o.length; r++) {
      var i = o[r];
      n[i.row].segs.push(i);
    }
  } else
    for (var a = 0; a < t; a += 1)
      n[a] = null;
  return n;
}
var hY = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = Xa(this.context, n.date);
    return $(G0, { date: n.date, dateProfile: n.dateProfile, todayRange: n.todayRange, showDayNumber: n.showDayNumber, extraHookProps: n.extraHookProps, defaultContent: vY }, function(r, o) {
      return (o || n.forceDayTop) && $(
        "div",
        { className: "fc-daygrid-day-top", ref: r },
        $("a", w({ id: n.dayNumberId, className: "fc-daygrid-day-number" }, a), o || $(oe, null, "\xA0"))
      );
    });
  }, t;
}(U);
function vY(e) {
  return e.dayNumberText;
}
var X0 = J({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function K0(e) {
  var t = e.eventRange.ui.display;
  return t === "list-item" || t === "auto" && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
}
var Q0 = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props;
    return $(XG, w({}, n, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: X0, defaultDisplayEventEnd: n.defaultDisplayEventEnd, disableResizing: !n.seg.eventRange.def.allDay }));
  }, t;
}(U), J0 = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, o = r.options.eventTimeFormat || X0, i = i0(a.seg, o, r, !0, a.defaultDisplayEventEnd);
    return $(rr, { seg: a.seg, timeText: i, defaultContent: pY, isDragging: a.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: a.isSelected, isPast: a.isPast, isFuture: a.isFuture, isToday: a.isToday }, function(c, l, s, d) {
      return $("a", w({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: c }, c0(a.seg, r)), d);
    });
  }, t;
}(U);
function pY(e) {
  return $(
    oe,
    null,
    $("div", { className: "fc-daygrid-event-dot", style: { borderColor: e.borderColor || e.backgroundColor } }),
    e.timeText && $("div", { className: "fc-event-time" }, e.timeText),
    $("div", { className: "fc-event-title" }, e.event.title || $(oe, null, "\xA0"))
  );
}
var _Y = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.compileSegs = k(gY), n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = this.compileSegs(n.singlePlacements), r = a.allSegs, o = a.invisibleSegs;
    return $(iY, { dateProfile: n.dateProfile, todayRange: n.todayRange, allDayDate: n.allDayDate, moreCnt: n.moreCnt, allSegs: r, hiddenSegs: o, alignmentElRef: n.alignmentElRef, alignGridTop: n.alignGridTop, extraDateSpan: n.extraDateSpan, popoverContent: function() {
      var i = (n.eventDrag ? n.eventDrag.affectedInstances : null) || (n.eventResize ? n.eventResize.affectedInstances : null) || {};
      return $(oe, null, r.map(function(c) {
        var l = c.eventRange.instance.instanceId;
        return $("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: i[l] ? "hidden" : ""
        } }, K0(c) ? $(J0, w({ seg: c, isDragging: !1, isSelected: l === n.eventSelection, defaultDisplayEventEnd: !1 }, pt(c, n.todayRange))) : $(Q0, w({ seg: c, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === n.eventSelection, defaultDisplayEventEnd: !1 }, pt(c, n.todayRange))));
      }));
    } }, function(i, c, l, s, d, h, p, g) {
      return $("a", w({ ref: i, className: ["fc-daygrid-more-link"].concat(c).join(" "), title: h, "aria-expanded": p, "aria-controls": g }, Z2(d)), s);
    });
  }, t;
}(U);
function gY(e) {
  for (var t = [], n = [], a = 0, r = e; a < r.length; a++) {
    var o = r[a];
    t.push(o.seg), o.isVisible || n.push(o.seg);
  }
  return { allSegs: t, invisibleSegs: n };
}
var wY = J({ week: "narrow" }), yY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.rootElRef = le(), n.state = {
      dayNumberId: vn()
    }, n.handleRootEl = function(a) {
      Ce(n.rootElRef, a), Ce(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.context, r = n.props, o = n.state, i = n.rootElRef, c = r.date, l = r.dateProfile, s = Xa(a, c, "week");
    return $(Z0, { date: c, dateProfile: l, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, elRef: this.handleRootEl }, function(d, h, p, g) {
      return $(
        "td",
        w({ ref: d, role: "gridcell", className: ["fc-daygrid-day"].concat(h, r.extraClassNames || []).join(" ") }, p, r.extraDataAttrs, r.showDayNumber ? { "aria-labelledby": o.dayNumberId } : {}),
        $(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: r.innerElRef },
          r.showWeekNumber && $(nY, { date: c, defaultFormat: wY }, function(_, b, C, y) {
            return $("a", w({ ref: _, className: ["fc-daygrid-week-number"].concat(b).join(" ") }, s), y);
          }),
          !g && $(hY, { date: c, dateProfile: l, showDayNumber: r.showDayNumber, dayNumberId: o.dayNumberId, forceDayTop: r.forceDayTop, todayRange: r.todayRange, extraHookProps: r.extraHookProps }),
          $(
            "div",
            { className: "fc-daygrid-day-events", ref: r.fgContentElRef },
            r.fgContent,
            $(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: r.moreMarginTop } },
              $(_Y, { allDayDate: c, singlePlacements: r.singlePlacements, moreCnt: r.moreCnt, alignmentElRef: i, alignGridTop: !r.showDayNumber, extraDateSpan: r.extraDateSpan, dateProfile: r.dateProfile, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, todayRange: r.todayRange })
            )
          ),
          $("div", { className: "fc-daygrid-day-bg" }, r.bgContent)
        )
      );
    });
  }, t;
}(ct);
function CY(e, t, n, a, r, o, i) {
  var c = new EY();
  c.allowReslicing = !0, c.strictOrder = a, t === !0 || n === !0 ? (c.maxCoord = o, c.hiddenConsumes = !0) : typeof t == "number" ? c.maxStackCnt = t : typeof n == "number" && (c.maxStackCnt = n, c.hiddenConsumes = !0);
  for (var l = [], s = [], d = 0; d < e.length; d += 1) {
    var h = e[d], p = h.eventRange.instance.instanceId, g = r[p];
    g != null ? l.push({
      index: d,
      thickness: g,
      span: {
        start: h.firstCol,
        end: h.lastCol + 1
      }
    }) : s.push(h);
  }
  for (var _ = c.addSegs(l), b = c.toRects(), C = bY(b, e, i), y = C.singleColPlacements, x = C.multiColPlacements, z = C.leftoverMargins, S = [], V = [], T = 0, A = s; T < A.length; T++) {
    var h = A[T];
    x[h.firstCol].push({
      seg: h,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var R = h.firstCol; R <= h.lastCol; R += 1)
      y[R].push({
        seg: Ye(h, R, R + 1, i),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var R = 0; R < i.length; R += 1)
    S.push(0);
  for (var Y = 0, Z = _; Y < Z.length; Y++) {
    var L = Z[Y], h = e[L.index], te = L.span;
    x[te.start].push({
      seg: Ye(h, te.start, te.end, i),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var R = te.start; R < te.end; R += 1)
      S[R] += 1, y[R].push({
        seg: Ye(h, R, R + 1, i),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var R = 0; R < i.length; R += 1)
    V.push(z[R]);
  return { singleColPlacements: y, multiColPlacements: x, moreCnts: S, moreMarginTops: V };
}
function bY(e, t, n) {
  for (var a = $Y(e, n.length), r = [], o = [], i = [], c = 0; c < n.length; c += 1) {
    for (var l = a[c], s = [], d = 0, h = 0, p = 0, g = l; p < g.length; p++) {
      var _ = g[p], b = t[_.index];
      s.push({
        seg: Ye(b, c, c + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: _.levelCoord,
        marginTop: _.levelCoord - d
      }), d = _.levelCoord + _.thickness;
    }
    var C = [];
    d = 0, h = 0;
    for (var y = 0, x = l; y < x.length; y++) {
      var _ = x[y], b = t[_.index], z = _.span.end - _.span.start > 1, S = _.span.start === c;
      h += _.levelCoord - d, d = _.levelCoord + _.thickness, z ? (h += _.thickness, S && C.push({
        seg: Ye(b, _.span.start, _.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: _.levelCoord,
        marginTop: 0
      })) : S && (C.push({
        seg: Ye(b, _.span.start, _.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: _.levelCoord,
        marginTop: h
      }), h = 0);
    }
    r.push(s), o.push(C), i.push(h);
  }
  return { singleColPlacements: r, multiColPlacements: o, leftoverMargins: i };
}
function $Y(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n.push([]);
  for (var r = 0, o = e; r < o.length; r++)
    for (var i = o[r], a = i.span.start; a < i.span.end; a += 1)
      n[a].push(i);
  return n;
}
function Ye(e, t, n, a) {
  if (e.firstCol === t && e.lastCol === n - 1)
    return e;
  var r = e.eventRange, o = r.range, i = Ct(o, {
    start: a[t].date,
    end: ae(a[n - 1].date, 1)
  });
  return w(w({}, e), { firstCol: t, lastCol: n - 1, eventRange: {
    def: r.def,
    ui: w(w({}, r.ui), { durationEditable: !1 }),
    instance: r.instance,
    range: i
  }, isStart: e.isStart && i.start.valueOf() === o.start.valueOf(), isEnd: e.isEnd && i.end.valueOf() === o.end.valueOf() });
}
var EY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.hiddenConsumes = !1, n.forceHidden = {}, n;
  }
  return t.prototype.addSegs = function(n) {
    for (var a = this, r = e.prototype.addSegs.call(this, n), o = this.entriesByLevel, i = function(l) {
      return !a.forceHidden[_t(l)];
    }, c = 0; c < o.length; c += 1)
      o[c] = o[c].filter(i);
    return r;
  }, t.prototype.handleInvalidInsertion = function(n, a, r) {
    var o = this, i = o.entriesByLevel, c = o.forceHidden, l = n.touchingEntry, s = n.touchingLevel, d = n.touchingLateral;
    if (this.hiddenConsumes && l) {
      var h = _t(l);
      if (!c[h])
        if (this.allowReslicing) {
          var p = w(w({}, l), { span: L0(l.span, a.span) }), g = _t(p);
          c[g] = !0, i[s][d] = p, this.splitEntry(l, a, r);
        } else
          c[h] = !0, r.push(l);
    }
    return e.prototype.handleInvalidInsertion.call(this, n, a, r);
  }, t;
}(mG), e1 = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.cellElRefs = new ke(), n.frameElRefs = new ke(), n.fgElRefs = new ke(), n.segHarnessRefs = new ke(), n.rootElRef = le(), n.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this, r = a.props, o = a.state, i = a.context, c = i.options, l = r.cells.length, s = Vt(r.businessHourSegs, l), d = Vt(r.bgEventSegs, l), h = Vt(this.getHighlightSegs(), l), p = Vt(this.getMirrorSegs(), l), g = CY(XW(r.fgEventSegs, c.eventOrder), r.dayMaxEvents, r.dayMaxEventRows, c.eventOrderStrict, o.eventInstanceHeights, o.maxContentHeight, r.cells), _ = g.singleColPlacements, b = g.multiColPlacements, C = g.moreCnts, y = g.moreMarginTops, x = r.eventDrag && r.eventDrag.affectedInstances || r.eventResize && r.eventResize.affectedInstances || {};
    return $(
      "tr",
      { ref: this.rootElRef, role: "row" },
      r.renderIntro && r.renderIntro(),
      r.cells.map(function(z, S) {
        var V = n.renderFgSegs(S, r.forPrint ? _[S] : b[S], r.todayRange, x), T = n.renderFgSegs(S, xY(p[S], b), r.todayRange, {}, Boolean(r.eventDrag), Boolean(r.eventResize), !1);
        return $(yY, { key: z.key, elRef: n.cellElRefs.createRef(z.key), innerElRef: n.frameElRefs.createRef(z.key), dateProfile: r.dateProfile, date: z.date, showDayNumber: r.showDayNumbers, showWeekNumber: r.showWeekNumbers && S === 0, forceDayTop: r.showWeekNumbers, todayRange: r.todayRange, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, extraHookProps: z.extraHookProps, extraDataAttrs: z.extraDataAttrs, extraClassNames: z.extraClassNames, extraDateSpan: z.extraDateSpan, moreCnt: C[S], moreMarginTop: y[S], singlePlacements: _[S], fgContentElRef: n.fgElRefs.createRef(z.key), fgContent: $(
          oe,
          null,
          $(oe, null, V),
          $(oe, null, T)
        ), bgContent: $(
          oe,
          null,
          n.renderFillSegs(h[S], "highlight"),
          n.renderFillSegs(s[S], "non-business"),
          n.renderFillSegs(d[S], "bg-event")
        ) });
      })
    );
  }, t.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, t.prototype.componentDidUpdate = function(n, a) {
    var r = this.props;
    this.updateSizing(!ye(n, r));
  }, t.prototype.getHighlightSegs = function() {
    var n = this.props;
    return n.eventDrag && n.eventDrag.segs.length ? n.eventDrag.segs : n.eventResize && n.eventResize.segs.length ? n.eventResize.segs : n.dateSelectionSegs;
  }, t.prototype.getMirrorSegs = function() {
    var n = this.props;
    return n.eventResize && n.eventResize.segs.length ? n.eventResize.segs : [];
  }, t.prototype.renderFgSegs = function(n, a, r, o, i, c, l) {
    var s = this.context, d = this.props.eventSelection, h = this.state.framePositions, p = this.props.cells.length === 1, g = i || c || l, _ = [];
    if (h)
      for (var b = 0, C = a; b < C.length; b++) {
        var y = C[b], x = y.seg, z = x.eventRange.instance.instanceId, S = z + ":" + n, V = y.isVisible && !o[z], T = y.isAbsolute, A = "", R = "";
        T && (s.isRtl ? (R = 0, A = h.lefts[x.lastCol] - h.lefts[x.firstCol]) : (A = 0, R = h.rights[x.firstCol] - h.rights[x.lastCol])), _.push($("div", { className: "fc-daygrid-event-harness" + (T ? " fc-daygrid-event-harness-abs" : ""), key: S, ref: g ? null : this.segHarnessRefs.createRef(S), style: {
          visibility: V ? "" : "hidden",
          marginTop: T ? "" : y.marginTop,
          top: T ? y.absoluteTop : "",
          left: A,
          right: R
        } }, K0(x) ? $(J0, w({ seg: x, isDragging: i, isSelected: z === d, defaultDisplayEventEnd: p }, pt(x, r))) : $(Q0, w({ seg: x, isDragging: i, isResizing: c, isDateSelecting: l, isSelected: z === d, defaultDisplayEventEnd: p }, pt(x, r)))));
      }
    return _;
  }, t.prototype.renderFillSegs = function(n, a) {
    var r = this.context.isRtl, o = this.props.todayRange, i = this.state.framePositions, c = [];
    if (i)
      for (var l = 0, s = n; l < s.length; l++) {
        var d = s[l], h = r ? {
          right: 0,
          left: i.lefts[d.lastCol] - i.lefts[d.firstCol]
        } : {
          left: 0,
          right: i.rights[d.firstCol] - i.rights[d.lastCol]
        };
        c.push($("div", { key: nj(d.eventRange), className: "fc-daygrid-bg-harness", style: h }, a === "bg-event" ? $(eY, w({ seg: d }, pt(d, o))) : JG(a)));
      }
    return $.apply(void 0, j([oe, {}], c));
  }, t.prototype.updateSizing = function(n) {
    var a = this, r = a.props, o = a.frameElRefs;
    if (!r.forPrint && r.clientWidth !== null) {
      if (n) {
        var i = r.cells.map(function(h) {
          return o.currentMap[h.key];
        });
        if (i.length) {
          var c = this.rootElRef.current;
          this.setState({
            framePositions: new oa(
              c,
              i,
              !0,
              !1
            )
          });
        }
      }
      var l = this.state.eventInstanceHeights, s = this.queryEventInstanceHeights(), d = r.dayMaxEvents === !0 || r.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: w(w({}, l), s),
        maxContentHeight: d ? this.computeMaxContentHeight() : null
      });
    }
  }, t.prototype.queryEventInstanceHeights = function() {
    var n = this.segHarnessRefs.currentMap, a = {};
    for (var r in n) {
      var o = Math.round(n[r].getBoundingClientRect().height), i = r.split(":")[0];
      a[i] = Math.max(a[i] || 0, o);
    }
    return a;
  }, t.prototype.computeMaxContentHeight = function() {
    var n = this.props.cells[0].key, a = this.cellElRefs.currentMap[n], r = this.fgElRefs.currentMap[n];
    return a.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }, t.prototype.getCellEls = function() {
    var n = this.cellElRefs.currentMap;
    return this.props.cells.map(function(a) {
      return n[a.key];
    });
  }, t;
}(ct);
e1.addStateEquality({
  eventInstanceHeights: ye
});
function xY(e, t) {
  if (!e.length)
    return [];
  var n = SY(t);
  return e.map(function(a) {
    return {
      seg: a,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: n[a.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function SY(e) {
  for (var t = {}, n = 0, a = e; n < a.length; n++)
    for (var r = a[n], o = 0, i = r; o < i.length; o++) {
      var c = i[o];
      t[c.seg.eventRange.instance.instanceId] = c.absoluteTop;
    }
  return t;
}
var zY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.splitBusinessHourSegs = k(Rt), n.splitBgEventSegs = k(Rt), n.splitFgEventSegs = k(Rt), n.splitDateSelectionSegs = k(Rt), n.splitEventDrag = k(Wo), n.splitEventResize = k(Wo), n.rowRefs = new ke(), n.handleRootEl = function(a) {
      n.rootEl = a, a ? n.context.registerInteractiveComponent(n, {
        el: a,
        isHitComboAllowed: n.props.isHitComboAllowed
      }) : n.context.unregisterInteractiveComponent(n);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props, r = a.dateProfile, o = a.dayMaxEventRows, i = a.dayMaxEvents, c = a.expandRows, l = a.cells.length, s = this.splitBusinessHourSegs(a.businessHourSegs, l), d = this.splitBgEventSegs(a.bgEventSegs, l), h = this.splitFgEventSegs(a.fgEventSegs, l), p = this.splitDateSelectionSegs(a.dateSelectionSegs, l), g = this.splitEventDrag(a.eventDrag, l), _ = this.splitEventResize(a.eventResize, l), b = i === !0 || o === !0;
    b && !c && (b = !1, o = null, i = null);
    var C = [
      "fc-daygrid-body",
      b ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      c ? "" : "fc-daygrid-body-natural"
    ];
    return $(
      "div",
      { className: C.join(" "), ref: this.handleRootEl, style: {
        width: a.clientWidth,
        minWidth: a.tableMinWidth
      } },
      $(N0, { unit: "day" }, function(y, x) {
        return $(
          oe,
          null,
          $(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: a.clientWidth,
              minWidth: a.tableMinWidth,
              height: c ? a.clientHeight : ""
            } },
            a.colGroupNode,
            $("tbody", { role: "presentation" }, a.cells.map(function(z, S) {
              return $(e1, {
                ref: n.rowRefs.createRef(S),
                key: z.length ? z[0].date.toISOString() : S,
                showDayNumbers: l > 1,
                showWeekNumbers: a.showWeekNumbers,
                todayRange: x,
                dateProfile: r,
                cells: z,
                renderIntro: a.renderRowIntro,
                businessHourSegs: s[S],
                eventSelection: a.eventSelection,
                bgEventSegs: d[S].filter(MY),
                fgEventSegs: h[S],
                dateSelectionSegs: p[S],
                eventDrag: g[S],
                eventResize: _[S],
                dayMaxEvents: i,
                dayMaxEventRows: o,
                clientWidth: a.clientWidth,
                clientHeight: a.clientHeight,
                forPrint: a.forPrint
              });
            }))
          )
        );
      })
    );
  }, t.prototype.prepareHits = function() {
    this.rowPositions = new oa(
      this.rootEl,
      this.rowRefs.collect().map(function(n) {
        return n.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new oa(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, t.prototype.queryHit = function(n, a) {
    var r = this, o = r.colPositions, i = r.rowPositions, c = o.leftToIndex(n), l = i.topToIndex(a);
    if (l != null && c != null) {
      var s = this.props.cells[l][c];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: w({ range: this.getCellRange(l, c), allDay: !0 }, s.extraDateSpan),
        dayEl: this.getCellEl(l, c),
        rect: {
          left: o.lefts[c],
          right: o.rights[c],
          top: i.tops[l],
          bottom: i.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }, t.prototype.getCellEl = function(n, a) {
    return this.rowRefs.currentMap[n].getCellEls()[a];
  }, t.prototype.getCellRange = function(n, a) {
    var r = this.props.cells[n][a].date, o = ae(r, 1);
    return { start: r, end: o };
  }, t;
}(ct);
function MY(e) {
  return e.eventRange.def.allDay;
}
var DY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.forceDayIfListItem = !0, n;
  }
  return t.prototype.sliceRange = function(n, a) {
    return a.sliceRange(n);
  }, t;
}(HG), HY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.slicer = new DY(), n.tableRef = le(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context;
    return $(zY, w({ ref: this.tableRef }, this.slicer.sliceProps(a, a.dateProfile, a.nextDayThreshold, r, a.dayTableModel), { dateProfile: a.dateProfile, cells: a.dayTableModel.cells, colGroupNode: a.colGroupNode, tableMinWidth: a.tableMinWidth, renderRowIntro: a.renderRowIntro, dayMaxEvents: a.dayMaxEvents, dayMaxEventRows: a.dayMaxEventRows, showWeekNumbers: a.showWeekNumbers, expandRows: a.expandRows, headerAlignElRef: a.headerAlignElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: a.forPrint }));
  }, t;
}(ct), TY = function(e) {
  M(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.buildDayTableModel = k(RY), n.headerRef = le(), n.tableRef = le(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.context, r = a.options, o = a.dateProfileGenerator, i = this.props, c = this.buildDayTableModel(i.dateProfile, o), l = r.dayHeaders && $(SG, { ref: this.headerRef, dateProfile: i.dateProfile, dates: c.headerDates, datesRepDistinctDays: c.rowCnt === 1 }), s = function(d) {
      return $(HY, { ref: n.tableRef, dateProfile: i.dateProfile, dayTableModel: c, businessHours: i.businessHours, dateSelection: i.dateSelection, eventStore: i.eventStore, eventUiBases: i.eventUiBases, eventSelection: i.eventSelection, eventDrag: i.eventDrag, eventResize: i.eventResize, nextDayThreshold: r.nextDayThreshold, colGroupNode: d.tableColGroupNode, tableMinWidth: d.tableMinWidth, dayMaxEvents: r.dayMaxEvents, dayMaxEventRows: r.dayMaxEventRows, showWeekNumbers: r.weekNumbers, expandRows: !i.isHeightAuto, headerAlignElRef: n.headerElRef, clientWidth: d.clientWidth, clientHeight: d.clientHeight, forPrint: i.forPrint });
    };
    return r.dayMinWidth ? this.renderHScrollLayout(l, s, c.colCnt, r.dayMinWidth) : this.renderSimpleLayout(l, s);
  }, t;
}(fY);
function RY(e, t) {
  var n = new MG(e.renderRange, t);
  return new DG(n, /year|month|week/.test(e.currentRangeUnit));
}
var VY = function(e) {
  M(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.buildRenderRange = function(n, a, r) {
    var o = this.props.dateEnv, i = e.prototype.buildRenderRange.call(this, n, a, r), c = i.start, l = i.end, s;
    if (/^(year|month)$/.test(a) && (c = o.startOfWeek(c), s = o.startOfWeek(l), s.valueOf() !== l.valueOf() && (l = po(s, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var d = Math.ceil(
        JU(c, l)
      );
      l = po(l, 6 - d);
    }
    return { start: c, end: l };
  }, t;
}(M0), AY = He({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: TY,
      dateProfileGeneratorClass: VY
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
ar.touchMouseIgnoreWait = 500;
var sa = 0, nn = 0, da = !1, or = function() {
  function e(t) {
    var n = this;
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(a) {
      if (!n.shouldIgnoreMouse() && kY(a) && n.tryStart(a)) {
        var r = n.createEventFromMouse(a, !0);
        n.emitter.trigger("pointerdown", r), n.initScrollWatch(r), n.shouldIgnoreMove || document.addEventListener("mousemove", n.handleMouseMove), document.addEventListener("mouseup", n.handleMouseUp);
      }
    }, this.handleMouseMove = function(a) {
      var r = n.createEventFromMouse(a);
      n.recordCoords(r), n.emitter.trigger("pointermove", r);
    }, this.handleMouseUp = function(a) {
      document.removeEventListener("mousemove", n.handleMouseMove), document.removeEventListener("mouseup", n.handleMouseUp), n.emitter.trigger("pointerup", n.createEventFromMouse(a)), n.cleanup();
    }, this.handleTouchStart = function(a) {
      if (n.tryStart(a)) {
        n.isTouchDragging = !0;
        var r = n.createEventFromTouch(a, !0);
        n.emitter.trigger("pointerdown", r), n.initScrollWatch(r);
        var o = a.target;
        n.shouldIgnoreMove || o.addEventListener("touchmove", n.handleTouchMove), o.addEventListener("touchend", n.handleTouchEnd), o.addEventListener("touchcancel", n.handleTouchEnd), window.addEventListener("scroll", n.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = function(a) {
      var r = n.createEventFromTouch(a);
      n.recordCoords(r), n.emitter.trigger("pointermove", r);
    }, this.handleTouchEnd = function(a) {
      if (n.isDragging) {
        var r = a.target;
        r.removeEventListener("touchmove", n.handleTouchMove), r.removeEventListener("touchend", n.handleTouchEnd), r.removeEventListener("touchcancel", n.handleTouchEnd), window.removeEventListener("scroll", n.handleTouchScroll, !0), n.emitter.trigger("pointerup", n.createEventFromTouch(a)), n.cleanup(), n.isTouchDragging = !1, IY();
      }
    }, this.handleTouchScroll = function() {
      n.wasTouchScroll = !0;
    }, this.handleScroll = function(a) {
      if (!n.shouldIgnoreMove) {
        var r = window.pageXOffset - n.prevScrollX + n.prevPageX, o = window.pageYOffset - n.prevScrollY + n.prevPageY;
        n.emitter.trigger("pointermove", {
          origEvent: a,
          isTouch: n.isTouchDragging,
          subjectEl: n.subjectEl,
          pageX: r,
          pageY: o,
          deltaX: r - n.origPageX,
          deltaY: o - n.origPageY
        });
      }
    }, this.containerEl = t, this.emitter = new wn(), t.addEventListener("mousedown", this.handleMouseDown), t.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), LY();
  }
  return e.prototype.destroy = function() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), PY();
  }, e.prototype.tryStart = function(t) {
    var n = this.querySubjectEl(t), a = t.target;
    return n && (!this.handleSelector || ee(a, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }, e.prototype.cleanup = function() {
    da = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }, e.prototype.querySubjectEl = function(t) {
    return this.selector ? ee(t.target, this.selector) : this.containerEl;
  }, e.prototype.shouldIgnoreMouse = function() {
    return sa || this.isTouchDragging;
  }, e.prototype.cancelTouchScroll = function() {
    this.isDragging && (da = !0);
  }, e.prototype.initScrollWatch = function(t) {
    this.shouldWatchScroll && (this.recordCoords(t), window.addEventListener("scroll", this.handleScroll, !0));
  }, e.prototype.recordCoords = function(t) {
    this.shouldWatchScroll && (this.prevPageX = t.pageX, this.prevPageY = t.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }, e.prototype.destroyScrollWatch = function() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }, e.prototype.createEventFromMouse = function(t, n) {
    var a = 0, r = 0;
    return n ? (this.origPageX = t.pageX, this.origPageY = t.pageY) : (a = t.pageX - this.origPageX, r = t.pageY - this.origPageY), {
      origEvent: t,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: t.pageX,
      pageY: t.pageY,
      deltaX: a,
      deltaY: r
    };
  }, e.prototype.createEventFromTouch = function(t, n) {
    var a = t.touches, r, o, i = 0, c = 0;
    return a && a.length ? (r = a[0].pageX, o = a[0].pageY) : (r = t.pageX, o = t.pageY), n ? (this.origPageX = r, this.origPageY = o) : (i = r - this.origPageX, c = o - this.origPageY), {
      origEvent: t,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: r,
      pageY: o,
      deltaX: i,
      deltaY: c
    };
  }, e;
}();
function kY(e) {
  return e.button === 0 && !e.ctrlKey;
}
function IY() {
  sa += 1, setTimeout(function() {
    sa -= 1;
  }, ar.touchMouseIgnoreWait);
}
function LY() {
  nn += 1, nn === 1 && window.addEventListener("touchmove", t1, { passive: !1 });
}
function PY() {
  nn -= 1, nn || window.removeEventListener("touchmove", t1, { passive: !1 });
}
function t1(e) {
  da && e.preventDefault();
}
var BY = function() {
  function e() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  return e.prototype.start = function(t, n, a) {
    this.sourceEl = t, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.pageXOffset, this.origScreenY = a - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }, e.prototype.handleMove = function(t, n) {
    this.deltaX = t - window.pageXOffset - this.origScreenX, this.deltaY = n - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }, e.prototype.setIsVisible = function(t) {
    t ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = t, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = t);
  }, e.prototype.stop = function(t, n) {
    var a = this, r = function() {
      a.cleanup(), n();
    };
    t && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
  }, e.prototype.doRevertAnimation = function(t, n) {
    var a = this.mirrorEl, r = this.sourceEl.getBoundingClientRect();
    a.style.transition = "top " + n + "ms,left " + n + "ms", ft(a, {
      left: r.left,
      top: r.top
    }), NU(a, function() {
      a.style.transition = "", t();
    });
  }, e.prototype.cleanup = function() {
    this.mirrorEl && (ka(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }, e.prototype.updateElPosition = function() {
    this.sourceEl && this.isVisible && ft(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }, e.prototype.getMirrorEl = function() {
    var t = this.sourceElRect, n = this.mirrorEl;
    return n || (n = this.mirrorEl = this.sourceEl.cloneNode(!0), n.classList.add("fc-unselectable"), n.classList.add("fc-event-dragging"), ft(n, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: t.right - t.left,
      height: t.bottom - t.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(n)), n;
  }, e;
}(), n1 = function(e) {
  M(t, e);
  function t(n, a) {
    var r = e.call(this) || this;
    return r.handleScroll = function() {
      r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange();
    }, r.scrollController = n, r.doesListening = a, r.scrollTop = r.origScrollTop = n.getScrollTop(), r.scrollLeft = r.origScrollLeft = n.getScrollLeft(), r.scrollWidth = n.getScrollWidth(), r.scrollHeight = n.getScrollHeight(), r.clientWidth = n.getClientWidth(), r.clientHeight = n.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r;
  }
  return t.prototype.destroy = function() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }, t.prototype.getScrollTop = function() {
    return this.scrollTop;
  }, t.prototype.getScrollLeft = function() {
    return this.scrollLeft;
  }, t.prototype.setScrollTop = function(n) {
    this.scrollController.setScrollTop(n), this.doesListening || (this.scrollTop = Math.max(Math.min(n, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }, t.prototype.setScrollLeft = function(n) {
    this.scrollController.setScrollLeft(n), this.doesListening || (this.scrollLeft = Math.max(Math.min(n, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }, t.prototype.getClientWidth = function() {
    return this.clientWidth;
  }, t.prototype.getClientHeight = function() {
    return this.clientHeight;
  }, t.prototype.getScrollWidth = function() {
    return this.scrollWidth;
  }, t.prototype.getScrollHeight = function() {
    return this.scrollHeight;
  }, t.prototype.handleScrollChange = function() {
  }, t;
}(Qa), a1 = function(e) {
  M(t, e);
  function t(n, a) {
    return e.call(this, new Zj(n), a) || this;
  }
  return t.prototype.getEventTarget = function() {
    return this.scrollController.el;
  }, t.prototype.computeClientRect = function() {
    return Wj(this.scrollController.el);
  }, t;
}(n1), OY = function(e) {
  M(t, e);
  function t(n) {
    return e.call(this, new Xj(), n) || this;
  }
  return t.prototype.getEventTarget = function() {
    return window;
  }, t.prototype.computeClientRect = function() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }, t.prototype.handleScrollChange = function() {
    this.clientRect = this.computeClientRect();
  }, t;
}(n1), jo = typeof performance == "function" ? performance.now : Date.now, NY = function() {
  function e() {
    var t = this;
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
      if (t.isAnimating) {
        var n = t.computeBestEdge(t.pointerScreenX + window.pageXOffset, t.pointerScreenY + window.pageYOffset);
        if (n) {
          var a = jo();
          t.handleSide(n, (a - t.msSinceRequest) / 1e3), t.requestAnimation(a);
        } else
          t.isAnimating = !1;
      }
    };
  }
  return e.prototype.start = function(t, n, a) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(a), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(t, n));
  }, e.prototype.handleMove = function(t, n) {
    if (this.isEnabled) {
      var a = t - window.pageXOffset, r = n - window.pageYOffset, o = this.pointerScreenY === null ? 0 : r - this.pointerScreenY, i = this.pointerScreenX === null ? 0 : a - this.pointerScreenX;
      o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = a, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(jo()));
    }
  }, e.prototype.stop = function() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (var t = 0, n = this.scrollCaches; t < n.length; t++) {
        var a = n[t];
        a.destroy();
      }
      this.scrollCaches = null;
    }
  }, e.prototype.requestAnimation = function(t) {
    this.msSinceRequest = t, requestAnimationFrame(this.animate);
  }, e.prototype.handleSide = function(t, n) {
    var a = t.scrollCache, r = this.edgeThreshold, o = r - t.distance, i = o * o / (r * r) * this.maxVelocity * n, c = 1;
    switch (t.name) {
      case "left":
        c = -1;
      case "right":
        a.setScrollLeft(a.getScrollLeft() + i * c);
        break;
      case "top":
        c = -1;
      case "bottom":
        a.setScrollTop(a.getScrollTop() + i * c);
        break;
    }
  }, e.prototype.computeBestEdge = function(t, n) {
    for (var a = this.edgeThreshold, r = null, o = this.scrollCaches || [], i = 0, c = o; i < c.length; i++) {
      var l = c[i], s = l.clientRect, d = t - s.left, h = s.right - t, p = n - s.top, g = s.bottom - n;
      d >= 0 && h >= 0 && p >= 0 && g >= 0 && (p <= a && this.everMovedUp && l.canScrollUp() && (!r || r.distance > p) && (r = { scrollCache: l, name: "top", distance: p }), g <= a && this.everMovedDown && l.canScrollDown() && (!r || r.distance > g) && (r = { scrollCache: l, name: "bottom", distance: g }), d <= a && this.everMovedLeft && l.canScrollLeft() && (!r || r.distance > d) && (r = { scrollCache: l, name: "left", distance: d }), h <= a && this.everMovedRight && l.canScrollRight() && (!r || r.distance > h) && (r = { scrollCache: l, name: "right", distance: h }));
    }
    return r;
  }, e.prototype.buildCaches = function(t) {
    return this.queryScrollEls(t).map(function(n) {
      return n === window ? new OY(!1) : new a1(n, !1);
    });
  }, e.prototype.queryScrollEls = function(t) {
    for (var n = [], a = 0, r = this.scrollQuery; a < r.length; a++) {
      var o = r[a];
      typeof o == "object" ? n.push(o) : n.push.apply(n, Array.prototype.slice.call(G2(t).querySelectorAll(o)));
    }
    return n;
  }, e;
}(), zt = function(e) {
  M(t, e);
  function t(n, a) {
    var r = e.call(this, n) || this;
    r.containerEl = n, r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function(i) {
      r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, FU(document.body), WU(document.body), i.isTouch || i.origEvent.preventDefault(), r.emitter.trigger("pointerdown", i), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(i.subjectEl, i.pageX, i.pageY), r.startDelay(i), r.minDistance || r.handleDistanceSurpassed(i)));
    }, r.onPointerMove = function(i) {
      if (r.isInteracting) {
        if (r.emitter.trigger("pointermove", i), !r.isDistanceSurpassed) {
          var c = r.minDistance, l = void 0, s = i.deltaX, d = i.deltaY;
          l = s * s + d * d, l >= c * c && r.handleDistanceSurpassed(i);
        }
        r.isDragging && (i.origEvent.type !== "scroll" && (r.mirror.handleMove(i.pageX, i.pageY), r.autoScroller.handleMove(i.pageX, i.pageY)), r.emitter.trigger("dragmove", i));
      }
    }, r.onPointerUp = function(i) {
      r.isInteracting && (r.isInteracting = !1, UU(document.body), jU(document.body), r.emitter.trigger("pointerup", i), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(i)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null));
    };
    var o = r.pointer = new or(n);
    return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), a && (o.selector = a), r.mirror = new BY(), r.autoScroller = new NY(), r;
  }
  return t.prototype.destroy = function() {
    this.pointer.destroy(), this.onPointerUp({});
  }, t.prototype.startDelay = function(n) {
    var a = this;
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(function() {
      a.delayTimeoutId = null, a.handleDelayEnd(n);
    }, this.delay) : this.handleDelayEnd(n);
  }, t.prototype.handleDelayEnd = function(n) {
    this.isDelayEnded = !0, this.tryStartDrag(n);
  }, t.prototype.handleDistanceSurpassed = function(n) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(n);
  }, t.prototype.tryStartDrag = function(n) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(n.pageX, n.pageY, this.containerEl), this.emitter.trigger("dragstart", n), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }, t.prototype.tryStopDrag = function(n) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, n));
  }, t.prototype.stopDrag = function(n) {
    this.isDragging = !1, this.emitter.trigger("dragend", n);
  }, t.prototype.setIgnoreMove = function(n) {
    this.pointer.shouldIgnoreMove = n;
  }, t.prototype.setMirrorIsVisible = function(n) {
    this.mirror.setIsVisible(n);
  }, t.prototype.setMirrorNeedsRevert = function(n) {
    this.mirrorNeedsRevert = n;
  }, t.prototype.setAutoScrollEnabled = function(n) {
    this.autoScroller.isEnabled = n;
  }, t;
}(P0), FY = function() {
  function e(t) {
    this.origRect = Ka(t), this.scrollCaches = $0(t).map(function(n) {
      return new a1(n, !0);
    });
  }
  return e.prototype.destroy = function() {
    for (var t = 0, n = this.scrollCaches; t < n.length; t++) {
      var a = n[t];
      a.destroy();
    }
  }, e.prototype.computeLeft = function() {
    for (var t = this.origRect.left, n = 0, a = this.scrollCaches; n < a.length; n++) {
      var r = a[n];
      t += r.origScrollLeft - r.getScrollLeft();
    }
    return t;
  }, e.prototype.computeTop = function() {
    for (var t = this.origRect.top, n = 0, a = this.scrollCaches; n < a.length; n++) {
      var r = a[n];
      t += r.origScrollTop - r.getScrollTop();
    }
    return t;
  }, e.prototype.isWithinClipping = function(t, n) {
    for (var a = { left: t, top: n }, r = 0, o = this.scrollCaches; r < o.length; r++) {
      var i = o[r];
      if (!UY(i.getEventTarget()) && !Rj(a, i.clientRect))
        return !1;
    }
    return !0;
  }, e;
}();
function UY(e) {
  var t = e.tagName;
  return t === "HTML" || t === "BODY";
}
var Cn = function() {
  function e(t, n) {
    var a = this;
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(r) {
      var o = a.dragging;
      a.initialHit = null, a.movingHit = null, a.finalHit = null, a.prepareHits(), a.processFirstCoord(r), a.initialHit || !a.requireInitial ? (o.setIgnoreMove(!1), a.emitter.trigger("pointerdown", r)) : o.setIgnoreMove(!0);
    }, this.handleDragStart = function(r) {
      a.emitter.trigger("dragstart", r), a.handleMove(r, !0);
    }, this.handleDragMove = function(r) {
      a.emitter.trigger("dragmove", r), a.handleMove(r);
    }, this.handlePointerUp = function(r) {
      a.releaseHits(), a.emitter.trigger("pointerup", r);
    }, this.handleDragEnd = function(r) {
      a.movingHit && a.emitter.trigger("hitupdate", null, !0, r), a.finalHit = a.movingHit, a.movingHit = null, a.emitter.trigger("dragend", r);
    }, this.droppableStore = n, t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragstart", this.handleDragStart), t.emitter.on("dragmove", this.handleDragMove), t.emitter.on("pointerup", this.handlePointerUp), t.emitter.on("dragend", this.handleDragEnd), this.dragging = t, this.emitter = new wn();
  }
  return e.prototype.processFirstCoord = function(t) {
    var n = { left: t.pageX, top: t.pageY }, a = n, r = t.subjectEl, o;
    r instanceof HTMLElement && (o = Ka(r), a = Vj(a, o));
    var i = this.initialHit = this.queryHitForOffset(a.left, a.top);
    if (i) {
      if (this.useSubjectCenter && o) {
        var c = w0(o, i.rect);
        c && (a = Aj(c));
      }
      this.coordAdjust = kj(a, n);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }, e.prototype.handleMove = function(t, n) {
    var a = this.queryHitForOffset(t.pageX + this.coordAdjust.left, t.pageY + this.coordAdjust.top);
    (n || !bn(this.movingHit, a)) && (this.movingHit = a, this.emitter.trigger("hitupdate", a, !1, t));
  }, e.prototype.prepareHits = function() {
    this.offsetTrackers = Fe(this.droppableStore, function(t) {
      return t.component.prepareHits(), new FY(t.el);
    });
  }, e.prototype.releaseHits = function() {
    var t = this.offsetTrackers;
    for (var n in t)
      t[n].destroy();
    this.offsetTrackers = {};
  }, e.prototype.queryHitForOffset = function(t, n) {
    var a = this, r = a.droppableStore, o = a.offsetTrackers, i = null;
    for (var c in r) {
      var l = r[c].component, s = o[c];
      if (s && s.isWithinClipping(t, n)) {
        var d = s.computeLeft(), h = s.computeTop(), p = t - d, g = n - h, _ = s.origRect, b = _.right - _.left, C = _.bottom - _.top;
        if (p >= 0 && p < b && g >= 0 && g < C) {
          var y = l.queryHit(p, g, b, C);
          y && gn(y.dateProfile.activeRange, y.dateSpan.range) && (!i || y.layer > i.layer) && (y.componentId = c, y.context = l.context, y.rect.left += d, y.rect.right += d, y.rect.top += h, y.rect.bottom += h, i = y);
        }
      }
    }
    return i;
  }, e;
}();
function bn(e, t) {
  return !e && !t ? !0 : Boolean(e) !== Boolean(t) ? !1 : ij(e.dateSpan, t.dateSpan);
}
function r1(e, t) {
  for (var n = {}, a = 0, r = t.pluginHooks.datePointTransforms; a < r.length; a++) {
    var o = r[a];
    w(n, o(e, t));
  }
  return w(n, WY(e, t.dateEnv)), n;
}
function WY(e, t) {
  return {
    date: t.toDate(e.range.start),
    dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
    allDay: e.allDay
  };
}
var jY = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    a.handlePointerDown = function(o) {
      var i = a.dragging, c = o.origEvent.target;
      i.setIgnoreMove(!a.component.isValidDateDownEl(c));
    }, a.handleDragEnd = function(o) {
      var i = a.component, c = a.dragging.pointer;
      if (!c.wasTouchScroll) {
        var l = a.hitDragging, s = l.initialHit, d = l.finalHit;
        if (s && d && bn(s, d)) {
          var h = i.context, p = w(w({}, r1(s.dateSpan, h)), { dayEl: s.dayEl, jsEvent: o.origEvent, view: h.viewApi || h.calendarApi.view });
          h.emitter.trigger("dateClick", p);
        }
      }
    }, a.dragging = new zt(n.el), a.dragging.autoScroller.isEnabled = !1;
    var r = a.hitDragging = new Cn(a.dragging, nr(n));
    return r.emitter.on("pointerdown", a.handlePointerDown), r.emitter.on("dragend", a.handleDragEnd), a;
  }
  return t.prototype.destroy = function() {
    this.dragging.destroy();
  }, t;
}(st), qY = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    a.dragSelection = null, a.handlePointerDown = function(l) {
      var s = a, d = s.component, h = s.dragging, p = d.context.options, g = p.selectable && d.isValidDateDownEl(l.origEvent.target);
      h.setIgnoreMove(!g), h.delay = l.isTouch ? GY(d) : null;
    }, a.handleDragStart = function(l) {
      a.component.context.calendarApi.unselect(l);
    }, a.handleHitUpdate = function(l, s) {
      var d = a.component.context, h = null, p = !1;
      if (l) {
        var g = a.hitDragging.initialHit, _ = l.componentId === g.componentId && a.isHitComboAllowed && !a.isHitComboAllowed(g, l);
        _ || (h = YY(g, l, d.pluginHooks.dateSelectionTransformers)), (!h || !TG(h, l.dateProfile, d)) && (p = !0, h = null);
      }
      h ? d.dispatch({ type: "SELECT_DATES", selection: h }) : s || d.dispatch({ type: "UNSELECT_DATES" }), p ? Ia() : La(), s || (a.dragSelection = h);
    }, a.handlePointerUp = function(l) {
      a.dragSelection && (d0(a.dragSelection, l, a.component.context), a.dragSelection = null);
    };
    var r = n.component, o = r.context.options, i = a.dragging = new zt(n.el);
    i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
    var c = a.hitDragging = new Cn(a.dragging, nr(n));
    return c.emitter.on("pointerdown", a.handlePointerDown), c.emitter.on("dragstart", a.handleDragStart), c.emitter.on("hitupdate", a.handleHitUpdate), c.emitter.on("pointerup", a.handlePointerUp), a;
  }
  return t.prototype.destroy = function() {
    this.dragging.destroy();
  }, t;
}(st);
function GY(e) {
  var t = e.context.options, n = t.selectLongPressDelay;
  return n == null && (n = t.longPressDelay), n;
}
function YY(e, t, n) {
  var a = e.dateSpan, r = t.dateSpan, o = [
    a.range.start,
    a.range.end,
    r.range.start,
    r.range.end
  ];
  o.sort(XU);
  for (var i = {}, c = 0, l = n; c < l.length; c++) {
    var s = l[c], d = s(e, t);
    if (d === !1)
      return null;
    d && w(i, d);
  }
  return i.range = { start: o[0], end: o[3] }, i.allDay = a.allDay, i;
}
var o1 = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    a.subjectEl = null, a.subjectSeg = null, a.isDragging = !1, a.eventRange = null, a.relevantEvents = null, a.receivingContext = null, a.validMutation = null, a.mutatedRelevantEvents = null, a.handlePointerDown = function(l) {
      var s = l.origEvent.target, d = a, h = d.component, p = d.dragging, g = p.mirror, _ = h.context.options, b = h.context;
      a.subjectEl = l.subjectEl;
      var C = a.subjectSeg = Je(l.subjectEl), y = a.eventRange = C.eventRange, x = y.instance.instanceId;
      a.relevantEvents = Ua(b.getCurrentData().eventStore, x), p.minDistance = l.isTouch ? 0 : _.eventDragMinDistance, p.delay = l.isTouch && x !== h.props.eventSelection ? XY(h) : null, _.fixedMirrorParent ? g.parentNode = _.fixedMirrorParent : g.parentNode = ee(s, ".fc"), g.revertDuration = _.dragRevertDuration;
      var z = h.isValidSegDownEl(s) && !ee(s, ".fc-event-resizer");
      p.setIgnoreMove(!z), a.isDragging = z && l.subjectEl.classList.contains("fc-event-draggable");
    }, a.handleDragStart = function(l) {
      var s = a.component.context, d = a.eventRange, h = d.instance.instanceId;
      l.isTouch ? h !== a.component.props.eventSelection && s.dispatch({ type: "SELECT_EVENT", eventInstanceId: h }) : s.dispatch({ type: "UNSELECT_EVENT" }), a.isDragging && (s.calendarApi.unselect(l), s.emitter.trigger("eventDragStart", {
        el: a.subjectEl,
        event: new q(s, d.def, d.instance),
        jsEvent: l.origEvent,
        view: s.viewApi
      }));
    }, a.handleHitUpdate = function(l, s) {
      if (!!a.isDragging) {
        var d = a.relevantEvents, h = a.hitDragging.initialHit, p = a.component.context, g = null, _ = null, b = null, C = !1, y = {
          affectedEvents: d,
          mutatedEvents: ue(),
          isEvent: !0
        };
        if (l) {
          g = l.context;
          var x = g.options;
          p === g || x.editable && x.droppable ? (_ = ZY(h, l, g.getCurrentData().pluginHooks.eventDragMutationMassagers), _ && (b = Ya(d, g.getCurrentData().eventUiBases, _, g), y.mutatedEvents = b, F0(y, l.dateProfile, g) || (C = !0, _ = null, b = null, y.mutatedEvents = ue()))) : g = null;
        }
        a.displayDrag(g, y), C ? Ia() : La(), s || (p === g && bn(h, l) && (_ = null), a.dragging.setMirrorNeedsRevert(!_), a.dragging.setMirrorIsVisible(!l || !G2(a.subjectEl).querySelector(".fc-event-mirror")), a.receivingContext = g, a.validMutation = _, a.mutatedRelevantEvents = b);
      }
    }, a.handlePointerUp = function() {
      a.isDragging || a.cleanup();
    }, a.handleDragEnd = function(l) {
      if (a.isDragging) {
        var s = a.component.context, d = s.viewApi, h = a, p = h.receivingContext, g = h.validMutation, _ = a.eventRange.def, b = a.eventRange.instance, C = new q(s, _, b), y = a.relevantEvents, x = a.mutatedRelevantEvents, z = a.hitDragging.finalHit;
        if (a.clearDrag(), s.emitter.trigger("eventDragStop", {
          el: a.subjectEl,
          event: C,
          jsEvent: l.origEvent,
          view: d
        }), g) {
          if (p === s) {
            var S = new q(s, x.defs[_.defId], b ? x.instances[b.instanceId] : null);
            s.dispatch({
              type: "MERGE_EVENTS",
              eventStore: x
            });
            for (var V = {
              oldEvent: C,
              event: S,
              relatedEvents: Pe(x, s, b),
              revert: function() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                });
              }
            }, T = {}, A = 0, R = s.getCurrentData().pluginHooks.eventDropTransformers; A < R.length; A++) {
              var Y = R[A];
              w(T, Y(g, s));
            }
            s.emitter.trigger("eventDrop", w(w(w({}, V), T), { el: l.subjectEl, delta: g.datesDelta, jsEvent: l.origEvent, view: d })), s.emitter.trigger("eventChange", V);
          } else if (p) {
            var Z = {
              event: C,
              relatedEvents: Pe(y, s, b),
              revert: function() {
                s.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: y
                });
              }
            };
            s.emitter.trigger("eventLeave", w(w({}, Z), { draggedEl: l.subjectEl, view: d })), s.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: y
            }), s.emitter.trigger("eventRemove", Z);
            var L = x.defs[_.defId], te = x.instances[b.instanceId], Q = new q(p, L, te);
            p.dispatch({
              type: "MERGE_EVENTS",
              eventStore: x
            });
            var se = {
              event: Q,
              relatedEvents: Pe(x, p, te),
              revert: function() {
                p.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: x
                });
              }
            };
            p.emitter.trigger("eventAdd", se), l.isTouch && p.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: b.instanceId
            }), p.emitter.trigger("drop", w(w({}, r1(z.dateSpan, p)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: z.context.viewApi })), p.emitter.trigger("eventReceive", w(w({}, se), { draggedEl: l.subjectEl, view: z.context.viewApi }));
          }
        } else
          s.emitter.trigger("_noEventDrop");
      }
      a.cleanup();
    };
    var r = a.component, o = r.context.options, i = a.dragging = new zt(n.el);
    i.pointer.selector = t.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.dragScroll;
    var c = a.hitDragging = new Cn(a.dragging, la);
    return c.useSubjectCenter = n.useEventCenter, c.emitter.on("pointerdown", a.handlePointerDown), c.emitter.on("dragstart", a.handleDragStart), c.emitter.on("hitupdate", a.handleHitUpdate), c.emitter.on("pointerup", a.handlePointerUp), c.emitter.on("dragend", a.handleDragEnd), a;
  }
  return t.prototype.destroy = function() {
    this.dragging.destroy();
  }, t.prototype.displayDrag = function(n, a) {
    var r = this.component.context, o = this.receivingContext;
    o && o !== n && (o === r ? o.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: a.affectedEvents,
        mutatedEvents: ue(),
        isEvent: !0
      }
    }) : o.dispatch({ type: "UNSET_EVENT_DRAG" })), n && n.dispatch({ type: "SET_EVENT_DRAG", state: a });
  }, t.prototype.clearDrag = function() {
    var n = this.component.context, a = this.receivingContext;
    a && a.dispatch({ type: "UNSET_EVENT_DRAG" }), n !== a && n.dispatch({ type: "UNSET_EVENT_DRAG" });
  }, t.prototype.cleanup = function() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t;
}(st);
function ZY(e, t, n) {
  var a = e.dateSpan, r = t.dateSpan, o = a.range.start, i = r.range.start, c = {};
  a.allDay !== r.allDay && (c.allDay = r.allDay, c.hasEnd = t.context.options.allDayMaintainDuration, r.allDay && (o = F(o)));
  var l = qe(o, i, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
  l.milliseconds && (c.allDay = !1);
  for (var s = {
    datesDelta: l,
    standardProps: c
  }, d = 0, h = n; d < h.length; d++) {
    var p = h[d];
    p(s, e, t);
  }
  return s;
}
function XY(e) {
  var t = e.context.options, n = t.eventLongPressDelay;
  return n == null && (n = t.longPressDelay), n;
}
var KY = function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    a.draggingSegEl = null, a.draggingSeg = null, a.eventRange = null, a.relevantEvents = null, a.validMutation = null, a.mutatedRelevantEvents = null, a.handlePointerDown = function(c) {
      var l = a.component, s = a.querySegEl(c), d = Je(s), h = a.eventRange = d.eventRange;
      a.dragging.minDistance = l.context.options.eventDragMinDistance, a.dragging.setIgnoreMove(!a.component.isValidSegDownEl(c.origEvent.target) || c.isTouch && a.component.props.eventSelection !== h.instance.instanceId);
    }, a.handleDragStart = function(c) {
      var l = a.component.context, s = a.eventRange;
      a.relevantEvents = Ua(l.getCurrentData().eventStore, a.eventRange.instance.instanceId);
      var d = a.querySegEl(c);
      a.draggingSegEl = d, a.draggingSeg = Je(d), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
        el: d,
        event: new q(l, s.def, s.instance),
        jsEvent: c.origEvent,
        view: l.viewApi
      });
    }, a.handleHitUpdate = function(c, l, s) {
      var d = a.component.context, h = a.relevantEvents, p = a.hitDragging.initialHit, g = a.eventRange.instance, _ = null, b = null, C = !1, y = {
        affectedEvents: h,
        mutatedEvents: ue(),
        isEvent: !0
      };
      if (c) {
        var x = c.componentId === p.componentId && a.isHitComboAllowed && !a.isHitComboAllowed(p, c);
        x || (_ = QY(p, c, s.subjectEl.classList.contains("fc-event-resizer-start"), g.range));
      }
      _ && (b = Ya(h, d.getCurrentData().eventUiBases, _, d), y.mutatedEvents = b, F0(y, c.dateProfile, d) || (C = !0, _ = null, b = null, y.mutatedEvents = null)), b ? d.dispatch({
        type: "SET_EVENT_RESIZE",
        state: y
      }) : d.dispatch({ type: "UNSET_EVENT_RESIZE" }), C ? Ia() : La(), l || (_ && bn(p, c) && (_ = null), a.validMutation = _, a.mutatedRelevantEvents = b);
    }, a.handleDragEnd = function(c) {
      var l = a.component.context, s = a.eventRange.def, d = a.eventRange.instance, h = new q(l, s, d), p = a.relevantEvents, g = a.mutatedRelevantEvents;
      if (l.emitter.trigger("eventResizeStop", {
        el: a.draggingSegEl,
        event: h,
        jsEvent: c.origEvent,
        view: l.viewApi
      }), a.validMutation) {
        var _ = new q(l, g.defs[s.defId], d ? g.instances[d.instanceId] : null);
        l.dispatch({
          type: "MERGE_EVENTS",
          eventStore: g
        });
        var b = {
          oldEvent: h,
          event: _,
          relatedEvents: Pe(g, l, d),
          revert: function() {
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: p
            });
          }
        };
        l.emitter.trigger("eventResize", w(w({}, b), { el: a.draggingSegEl, startDelta: a.validMutation.startDelta || I(0), endDelta: a.validMutation.endDelta || I(0), jsEvent: c.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", b);
      } else
        l.emitter.trigger("_noEventResize");
      a.draggingSeg = null, a.relevantEvents = null, a.validMutation = null;
    };
    var r = n.component, o = a.dragging = new zt(n.el);
    o.pointer.selector = ".fc-event-resizer", o.touchScrollAllowed = !1, o.autoScroller.isEnabled = r.context.options.dragScroll;
    var i = a.hitDragging = new Cn(a.dragging, nr(n));
    return i.emitter.on("pointerdown", a.handlePointerDown), i.emitter.on("dragstart", a.handleDragStart), i.emitter.on("hitupdate", a.handleHitUpdate), i.emitter.on("dragend", a.handleDragEnd), a;
  }
  return t.prototype.destroy = function() {
    this.dragging.destroy();
  }, t.prototype.querySegEl = function(n) {
    return ee(n.subjectEl, ".fc-event");
  }, t;
}(st);
function QY(e, t, n, a) {
  var r = e.context.dateEnv, o = e.dateSpan.range.start, i = t.dateSpan.range.start, c = qe(o, i, r, e.largeUnit);
  if (n) {
    if (r.add(a.start, c) < a.end)
      return { startDelta: c };
  } else if (r.add(a.end, c) > a.start)
    return { endDelta: c };
  return null;
}
var JY = function() {
  function e(t) {
    var n = this;
    this.context = t, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(r) {
      r.jsEvent && (n.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = function(r) {
      var o = n.context.options.unselectCancel, i = q2(r.origEvent);
      n.matchesCancel = !!ee(i, o), n.matchesEvent = !!ee(i, o1.SELECTOR);
    }, this.onDocumentPointerUp = function(r) {
      var o = n.context, i = n.documentPointer, c = o.getCurrentData();
      if (!i.wasTouchScroll) {
        if (c.dateSelection && !n.isRecentPointerDateSelect) {
          var l = o.options.unselectAuto;
          l && (!l || !n.matchesCancel) && o.calendarApi.unselect(r);
        }
        c.eventSelection && !n.matchesEvent && o.dispatch({ type: "UNSELECT_EVENT" });
      }
      n.isRecentPointerDateSelect = !1;
    };
    var a = this.documentPointer = new or(document);
    a.shouldIgnoreMove = !0, a.shouldWatchScroll = !1, a.emitter.on("pointerdown", this.onDocumentPointerDown), a.emitter.on("pointerup", this.onDocumentPointerUp), t.emitter.on("select", this.onSelect);
  }
  return e.prototype.destroy = function() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }, e;
}(), eZ = {
  fixedMirrorParent: E
}, tZ = {
  dateClick: E,
  eventDragStart: E,
  eventDragStop: E,
  eventDrop: E,
  eventResizeStart: E,
  eventResizeStop: E,
  eventResize: E,
  drop: E,
  eventReceive: E,
  eventLeave: E
};
ar.dataAttrPrefix = "";
(function(e) {
  M(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    a.shouldIgnoreMove = !1, a.mirrorSelector = "", a.currentMirrorEl = null, a.handlePointerDown = function(o) {
      a.emitter.trigger("pointerdown", o), a.shouldIgnoreMove || a.emitter.trigger("dragstart", o);
    }, a.handlePointerMove = function(o) {
      a.shouldIgnoreMove || a.emitter.trigger("dragmove", o);
    }, a.handlePointerUp = function(o) {
      a.emitter.trigger("pointerup", o), a.shouldIgnoreMove || a.emitter.trigger("dragend", o);
    };
    var r = a.pointer = new or(n);
    return r.emitter.on("pointerdown", a.handlePointerDown), r.emitter.on("pointermove", a.handlePointerMove), r.emitter.on("pointerup", a.handlePointerUp), a;
  }
  return t.prototype.destroy = function() {
    this.pointer.destroy();
  }, t.prototype.setIgnoreMove = function(n) {
    this.shouldIgnoreMove = n;
  }, t.prototype.setMirrorIsVisible = function(n) {
    if (n)
      this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
    else {
      var a = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      a && (this.currentMirrorEl = a, a.style.visibility = "hidden");
    }
  }, t;
})(P0);
var nZ = He({
  componentInteractions: [jY, qY, o1, KY],
  calendarInteractions: [JY],
  elementDraggingImpl: zt,
  optionRefiners: eZ,
  listenerRefiners: tZ
});
const aZ = { id: "calendar" }, rZ = /* @__PURE__ */ ce({
  __name: "index",
  props: {
    locale: {
      type: String,
      default: "zh-cn"
    },
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    buttonText: {
      type: Object,
      default: () => ({
        today: "\u4ECA\u5929",
        month: "\u6708",
        week: "\u5468",
        day: "\u65E5",
        prevYear: "\u4E0A\u4E00\u5E74",
        nextYear: "\u4E0B\u4E00\u5E74",
        prev: "\u4E0A\u4E00\u6708",
        next: "\u4E0B\u4E00\u6708"
      })
    },
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    footerToolbar: {
      type: Object,
      default: () => ({})
    },
    events: {
      type: Array,
      default: () => []
    },
    displayEventEnd: {
      type: Boolean,
      default: !1
    },
    eventContent: {
      type: Function
    }
  },
  emits: ["dateClick", "eventClick"],
  setup(e, { emit: t }) {
    const n = e, a = K(), r = () => {
      const o = document.getElementById("calendar");
      o && (a.value = new mY(o, {
        plugins: [AY, nZ],
        locale: n.locale,
        initialView: n.initialView,
        buttonText: n.buttonText,
        headerToolbar: n.headerToolbar,
        footerToolbar: n.footerToolbar,
        eventSources: [
          {
            events(i, c) {
              c(n.events);
            }
          }
        ],
        dateClick(i) {
          t("dateClick", i);
        },
        eventClick(i) {
          t("eventClick", i);
        },
        displayEventEnd: n.displayEventEnd,
        eventContent: n.eventContent
      }), a.value.render());
    };
    return he(
      () => n.events,
      () => {
        r();
      },
      { deep: !0 }
    ), an(() => {
      r();
    }), (o, i) => (m(), f("div", aZ));
  }
}), oZ = {
  install(e) {
    e.component("m-calendar", rZ);
  }
};
const iZ = [
  sA,
  uA,
  _A,
  wA,
  bA,
  zA,
  DA,
  lU,
  oZ
], lZ = {
  install(e) {
    iZ.map((t) => e.use(t));
  }
};
export {
  lZ as default
};
