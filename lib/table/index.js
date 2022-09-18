import { defineComponent as St, computed as z, ref as ee, watch as me, onMounted as wt, resolveComponent as _, resolveDirective as Ct, openBlock as b, createElementBlock as C, Fragment as R, withDirectives as Ot, createBlock as D, withCtx as O, renderList as It, unref as T, createVNode as m, createElementVNode as xt, withModifiers as te, renderSlot as re, toDisplayString as Pt, resolveDynamicComponent as Et, createCommentVNode as Ae, normalizeStyle as Lt, isRef as je } from "vue";
const Mt = (e) => e.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dt() {
  this.__data__ = [], this.size = 0;
}
var kt = Dt;
function Bt(e, t) {
  return e === t || e !== e && t !== t;
}
var Xe = Bt, Ft = Xe;
function Gt(e, t) {
  for (var r = e.length; r--; )
    if (Ft(e[r][0], t))
      return r;
  return -1;
}
var q = Gt, Ut = q, Nt = Array.prototype, zt = Nt.splice;
function Rt(e) {
  var t = this.__data__, r = Ut(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : zt.call(t, r, 1), --this.size, !0;
}
var Kt = Rt, Vt = q;
function Ht(e) {
  var t = this.__data__, r = Vt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var qt = Ht, Wt = q;
function Jt(e) {
  return Wt(this.__data__, e) > -1;
}
var Yt = Jt, Xt = q;
function Zt(e, t) {
  var r = this.__data__, a = Xt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Qt = Zt, er = kt, tr = Kt, rr = qt, ar = Yt, nr = Qt;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = er;
I.prototype.delete = tr;
I.prototype.get = rr;
I.prototype.has = ar;
I.prototype.set = nr;
var W = I, or = W;
function ir() {
  this.__data__ = new or(), this.size = 0;
}
var sr = ir;
function cr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var lr = cr;
function ur(e) {
  return this.__data__.get(e);
}
var fr = ur;
function gr(e) {
  return this.__data__.has(e);
}
var vr = gr, pr = typeof K == "object" && K && K.Object === Object && K, Ze = pr, dr = Ze, yr = typeof self == "object" && self && self.Object === Object && self, br = dr || yr || Function("return this")(), $ = br, $r = $, _r = $r.Symbol, ue = _r, Se = ue, Qe = Object.prototype, hr = Qe.hasOwnProperty, Tr = Qe.toString, k = Se ? Se.toStringTag : void 0;
function mr(e) {
  var t = hr.call(e, k), r = e[k];
  try {
    e[k] = void 0;
    var a = !0;
  } catch {
  }
  var o = Tr.call(e);
  return a && (t ? e[k] = r : delete e[k]), o;
}
var Ar = mr, jr = Object.prototype, Sr = jr.toString;
function wr(e) {
  return Sr.call(e);
}
var Cr = wr, we = ue, Or = Ar, Ir = Cr, xr = "[object Null]", Pr = "[object Undefined]", Ce = we ? we.toStringTag : void 0;
function Er(e) {
  return e == null ? e === void 0 ? Pr : xr : Ce && Ce in Object(e) ? Or(e) : Ir(e);
}
var J = Er;
function Lr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var F = Lr, Mr = J, Dr = F, kr = "[object AsyncFunction]", Br = "[object Function]", Fr = "[object GeneratorFunction]", Gr = "[object Proxy]";
function Ur(e) {
  if (!Dr(e))
    return !1;
  var t = Mr(e);
  return t == Br || t == Fr || t == kr || t == Gr;
}
var et = Ur, Nr = $, zr = Nr["__core-js_shared__"], Rr = zr, ae = Rr, Oe = function() {
  var e = /[^.]+$/.exec(ae && ae.keys && ae.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kr(e) {
  return !!Oe && Oe in e;
}
var Vr = Kr, Hr = Function.prototype, qr = Hr.toString;
function Wr(e) {
  if (e != null) {
    try {
      return qr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tt = Wr, Jr = et, Yr = Vr, Xr = F, Zr = tt, Qr = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ta = Function.prototype, ra = Object.prototype, aa = ta.toString, na = ra.hasOwnProperty, oa = RegExp(
  "^" + aa.call(na).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ia(e) {
  if (!Xr(e) || Yr(e))
    return !1;
  var t = Jr(e) ? oa : ea;
  return t.test(Zr(e));
}
var sa = ia;
function ca(e, t) {
  return e == null ? void 0 : e[t];
}
var la = ca, ua = sa, fa = la;
function ga(e, t) {
  var r = fa(e, t);
  return ua(r) ? r : void 0;
}
var j = ga, va = j, pa = $, da = va(pa, "Map"), fe = da, ya = j, ba = ya(Object, "create"), Y = ba, Ie = Y;
function $a() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
var _a = $a;
function ha(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ta = ha, ma = Y, Aa = "__lodash_hash_undefined__", ja = Object.prototype, Sa = ja.hasOwnProperty;
function wa(e) {
  var t = this.__data__;
  if (ma) {
    var r = t[e];
    return r === Aa ? void 0 : r;
  }
  return Sa.call(t, e) ? t[e] : void 0;
}
var Ca = wa, Oa = Y, Ia = Object.prototype, xa = Ia.hasOwnProperty;
function Pa(e) {
  var t = this.__data__;
  return Oa ? t[e] !== void 0 : xa.call(t, e);
}
var Ea = Pa, La = Y, Ma = "__lodash_hash_undefined__";
function Da(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = La && t === void 0 ? Ma : t, this;
}
var ka = Da, Ba = _a, Fa = Ta, Ga = Ca, Ua = Ea, Na = ka;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = Ba;
x.prototype.delete = Fa;
x.prototype.get = Ga;
x.prototype.has = Ua;
x.prototype.set = Na;
var za = x, xe = za, Ra = W, Ka = fe;
function Va() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ka || Ra)(),
    string: new xe()
  };
}
var Ha = Va;
function qa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Wa = qa, Ja = Wa;
function Ya(e, t) {
  var r = e.__data__;
  return Ja(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var X = Ya, Xa = X;
function Za(e) {
  var t = Xa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Qa = Za, en = X;
function tn(e) {
  return en(this, e).get(e);
}
var rn = tn, an = X;
function nn(e) {
  return an(this, e).has(e);
}
var on = nn, sn = X;
function cn(e, t) {
  var r = sn(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var ln = cn, un = Ha, fn = Qa, gn = rn, vn = on, pn = ln;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = un;
P.prototype.delete = fn;
P.prototype.get = gn;
P.prototype.has = vn;
P.prototype.set = pn;
var dn = P, yn = W, bn = fe, $n = dn, _n = 200;
function hn(e, t) {
  var r = this.__data__;
  if (r instanceof yn) {
    var a = r.__data__;
    if (!bn || a.length < _n - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $n(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Tn = hn, mn = W, An = sr, jn = lr, Sn = fr, wn = vr, Cn = Tn;
function E(e) {
  var t = this.__data__ = new mn(e);
  this.size = t.size;
}
E.prototype.clear = An;
E.prototype.delete = jn;
E.prototype.get = Sn;
E.prototype.has = wn;
E.prototype.set = Cn;
var On = E;
function In(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var xn = In, Pn = j, En = function() {
  try {
    var e = Pn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ln = En, Pe = Ln;
function Mn(e, t, r) {
  t == "__proto__" && Pe ? Pe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var rt = Mn, Dn = rt, kn = Xe, Bn = Object.prototype, Fn = Bn.hasOwnProperty;
function Gn(e, t, r) {
  var a = e[t];
  (!(Fn.call(e, t) && kn(a, r)) || r === void 0 && !(t in e)) && Dn(e, t, r);
}
var at = Gn, Un = at, Nn = rt;
function zn(e, t, r, a) {
  var o = !r;
  r || (r = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var l = t[s], f = a ? a(r[l], e[l], l, r, e) : void 0;
    f === void 0 && (f = e[l]), o ? Nn(r, l, f) : Un(r, l, f);
  }
  return r;
}
var Z = zn;
function Rn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Kn = Rn;
function Vn(e) {
  return e != null && typeof e == "object";
}
var G = Vn, Hn = J, qn = G, Wn = "[object Arguments]";
function Jn(e) {
  return qn(e) && Hn(e) == Wn;
}
var Yn = Jn, Ee = Yn, Xn = G, nt = Object.prototype, Zn = nt.hasOwnProperty, Qn = nt.propertyIsEnumerable, eo = Ee(function() {
  return arguments;
}()) ? Ee : function(e) {
  return Xn(e) && Zn.call(e, "callee") && !Qn.call(e, "callee");
}, to = eo, ro = Array.isArray, ge = ro, H = { exports: {} };
function ao() {
  return !1;
}
var no = ao;
(function(e, t) {
  var r = $, a = no, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, i = s && s.exports === o, l = i ? r.Buffer : void 0, f = l ? l.isBuffer : void 0, g = f || a;
  e.exports = g;
})(H, H.exports);
var oo = 9007199254740991, io = /^(?:0|[1-9]\d*)$/;
function so(e, t) {
  var r = typeof e;
  return t = t == null ? oo : t, !!t && (r == "number" || r != "symbol" && io.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var co = so, lo = 9007199254740991;
function uo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lo;
}
var ot = uo, fo = J, go = ot, vo = G, po = "[object Arguments]", yo = "[object Array]", bo = "[object Boolean]", $o = "[object Date]", _o = "[object Error]", ho = "[object Function]", To = "[object Map]", mo = "[object Number]", Ao = "[object Object]", jo = "[object RegExp]", So = "[object Set]", wo = "[object String]", Co = "[object WeakMap]", Oo = "[object ArrayBuffer]", Io = "[object DataView]", xo = "[object Float32Array]", Po = "[object Float64Array]", Eo = "[object Int8Array]", Lo = "[object Int16Array]", Mo = "[object Int32Array]", Do = "[object Uint8Array]", ko = "[object Uint8ClampedArray]", Bo = "[object Uint16Array]", Fo = "[object Uint32Array]", u = {};
u[xo] = u[Po] = u[Eo] = u[Lo] = u[Mo] = u[Do] = u[ko] = u[Bo] = u[Fo] = !0;
u[po] = u[yo] = u[Oo] = u[bo] = u[Io] = u[$o] = u[_o] = u[ho] = u[To] = u[mo] = u[Ao] = u[jo] = u[So] = u[wo] = u[Co] = !1;
function Go(e) {
  return vo(e) && go(e.length) && !!u[fo(e)];
}
var Uo = Go;
function No(e) {
  return function(t) {
    return e(t);
  };
}
var ve = No, B = { exports: {} };
(function(e, t) {
  var r = Ze, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, i = s && r.process, l = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(B, B.exports);
var zo = Uo, Ro = ve, Le = B.exports, Me = Le && Le.isTypedArray, Ko = Me ? Ro(Me) : zo, Vo = Ko, Ho = Kn, qo = to, Wo = ge, Jo = H.exports, Yo = co, Xo = Vo, Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function ei(e, t) {
  var r = Wo(e), a = !r && qo(e), o = !r && !a && Jo(e), s = !r && !a && !o && Xo(e), i = r || a || o || s, l = i ? Ho(e.length, String) : [], f = l.length;
  for (var g in e)
    (t || Qo.call(e, g)) && !(i && (g == "length" || o && (g == "offset" || g == "parent") || s && (g == "buffer" || g == "byteLength" || g == "byteOffset") || Yo(g, f))) && l.push(g);
  return l;
}
var it = ei, ti = Object.prototype;
function ri(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ti;
  return e === r;
}
var pe = ri;
function ai(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var st = ai, ni = st, oi = ni(Object.keys, Object), ii = oi, si = pe, ci = ii, li = Object.prototype, ui = li.hasOwnProperty;
function fi(e) {
  if (!si(e))
    return ci(e);
  var t = [];
  for (var r in Object(e))
    ui.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var gi = fi, vi = et, pi = ot;
function di(e) {
  return e != null && pi(e.length) && !vi(e);
}
var ct = di, yi = it, bi = gi, $i = ct;
function _i(e) {
  return $i(e) ? yi(e) : bi(e);
}
var de = _i, hi = Z, Ti = de;
function mi(e, t) {
  return e && hi(t, Ti(t), e);
}
var Ai = mi;
function ji(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Si = ji, wi = F, Ci = pe, Oi = Si, Ii = Object.prototype, xi = Ii.hasOwnProperty;
function Pi(e) {
  if (!wi(e))
    return Oi(e);
  var t = Ci(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !xi.call(e, a)) || r.push(a);
  return r;
}
var Ei = Pi, Li = it, Mi = Ei, Di = ct;
function ki(e) {
  return Di(e) ? Li(e, !0) : Mi(e);
}
var ye = ki, Bi = Z, Fi = ye;
function Gi(e, t) {
  return e && Bi(t, Fi(t), e);
}
var Ui = Gi, ne = { exports: {} };
(function(e, t) {
  var r = $, a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, i = s ? r.Buffer : void 0, l = i ? i.allocUnsafe : void 0;
  function f(g, S) {
    if (S)
      return g.slice();
    var y = g.length, h = l ? l(y) : new g.constructor(y);
    return g.copy(h), h;
  }
  e.exports = f;
})(ne, ne.exports);
function Ni(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var zi = Ni;
function Ri(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, o = 0, s = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (s[o++] = i);
  }
  return s;
}
var Ki = Ri;
function Vi() {
  return [];
}
var lt = Vi, Hi = Ki, qi = lt, Wi = Object.prototype, Ji = Wi.propertyIsEnumerable, De = Object.getOwnPropertySymbols, Yi = De ? function(e) {
  return e == null ? [] : (e = Object(e), Hi(De(e), function(t) {
    return Ji.call(e, t);
  }));
} : qi, be = Yi, Xi = Z, Zi = be;
function Qi(e, t) {
  return Xi(e, Zi(e), t);
}
var es = Qi;
function ts(e, t) {
  for (var r = -1, a = t.length, o = e.length; ++r < a; )
    e[o + r] = t[r];
  return e;
}
var ut = ts, rs = st, as = rs(Object.getPrototypeOf, Object), ft = as, ns = ut, os = ft, is = be, ss = lt, cs = Object.getOwnPropertySymbols, ls = cs ? function(e) {
  for (var t = []; e; )
    ns(t, is(e)), e = os(e);
  return t;
} : ss, gt = ls, us = Z, fs = gt;
function gs(e, t) {
  return us(e, fs(e), t);
}
var vs = gs, ps = ut, ds = ge;
function ys(e, t, r) {
  var a = t(e);
  return ds(e) ? a : ps(a, r(e));
}
var vt = ys, bs = vt, $s = be, _s = de;
function hs(e) {
  return bs(e, _s, $s);
}
var Ts = hs, ms = vt, As = gt, js = ye;
function Ss(e) {
  return ms(e, js, As);
}
var ws = Ss, Cs = j, Os = $, Is = Cs(Os, "DataView"), xs = Is, Ps = j, Es = $, Ls = Ps(Es, "Promise"), Ms = Ls, Ds = j, ks = $, Bs = Ds(ks, "Set"), Fs = Bs, Gs = j, Us = $, Ns = Gs(Us, "WeakMap"), zs = Ns, oe = xs, ie = fe, se = Ms, ce = Fs, le = zs, pt = J, L = tt, ke = "[object Map]", Rs = "[object Object]", Be = "[object Promise]", Fe = "[object Set]", Ge = "[object WeakMap]", Ue = "[object DataView]", Ks = L(oe), Vs = L(ie), Hs = L(se), qs = L(ce), Ws = L(le), A = pt;
(oe && A(new oe(new ArrayBuffer(1))) != Ue || ie && A(new ie()) != ke || se && A(se.resolve()) != Be || ce && A(new ce()) != Fe || le && A(new le()) != Ge) && (A = function(e) {
  var t = pt(e), r = t == Rs ? e.constructor : void 0, a = r ? L(r) : "";
  if (a)
    switch (a) {
      case Ks:
        return Ue;
      case Vs:
        return ke;
      case Hs:
        return Be;
      case qs:
        return Fe;
      case Ws:
        return Ge;
    }
  return t;
});
var $e = A, Js = Object.prototype, Ys = Js.hasOwnProperty;
function Xs(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ys.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Zs = Xs, Qs = $, ec = Qs.Uint8Array, tc = ec, Ne = tc;
function rc(e) {
  var t = new e.constructor(e.byteLength);
  return new Ne(t).set(new Ne(e)), t;
}
var _e = rc, ac = _e;
function nc(e, t) {
  var r = t ? ac(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var oc = nc, ic = /\w*$/;
function sc(e) {
  var t = new e.constructor(e.source, ic.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var cc = sc, ze = ue, Re = ze ? ze.prototype : void 0, Ke = Re ? Re.valueOf : void 0;
function lc(e) {
  return Ke ? Object(Ke.call(e)) : {};
}
var uc = lc, fc = _e;
function gc(e, t) {
  var r = t ? fc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var vc = gc, pc = _e, dc = oc, yc = cc, bc = uc, $c = vc, _c = "[object Boolean]", hc = "[object Date]", Tc = "[object Map]", mc = "[object Number]", Ac = "[object RegExp]", jc = "[object Set]", Sc = "[object String]", wc = "[object Symbol]", Cc = "[object ArrayBuffer]", Oc = "[object DataView]", Ic = "[object Float32Array]", xc = "[object Float64Array]", Pc = "[object Int8Array]", Ec = "[object Int16Array]", Lc = "[object Int32Array]", Mc = "[object Uint8Array]", Dc = "[object Uint8ClampedArray]", kc = "[object Uint16Array]", Bc = "[object Uint32Array]";
function Fc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Cc:
      return pc(e);
    case _c:
    case hc:
      return new a(+e);
    case Oc:
      return dc(e, r);
    case Ic:
    case xc:
    case Pc:
    case Ec:
    case Lc:
    case Mc:
    case Dc:
    case kc:
    case Bc:
      return $c(e, r);
    case Tc:
      return new a();
    case mc:
    case Sc:
      return new a(e);
    case Ac:
      return yc(e);
    case jc:
      return new a();
    case wc:
      return bc(e);
  }
}
var Gc = Fc, Uc = F, Ve = Object.create, Nc = function() {
  function e() {
  }
  return function(t) {
    if (!Uc(t))
      return {};
    if (Ve)
      return Ve(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), zc = Nc, Rc = zc, Kc = ft, Vc = pe;
function Hc(e) {
  return typeof e.constructor == "function" && !Vc(e) ? Rc(Kc(e)) : {};
}
var qc = Hc, Wc = $e, Jc = G, Yc = "[object Map]";
function Xc(e) {
  return Jc(e) && Wc(e) == Yc;
}
var Zc = Xc, Qc = Zc, el = ve, He = B.exports, qe = He && He.isMap, tl = qe ? el(qe) : Qc, rl = tl, al = $e, nl = G, ol = "[object Set]";
function il(e) {
  return nl(e) && al(e) == ol;
}
var sl = il, cl = sl, ll = ve, We = B.exports, Je = We && We.isSet, ul = Je ? ll(Je) : cl, fl = ul, gl = On, vl = xn, pl = at, dl = Ai, yl = Ui, bl = ne.exports, $l = zi, _l = es, hl = vs, Tl = Ts, ml = ws, Al = $e, jl = Zs, Sl = Gc, wl = qc, Cl = ge, Ol = H.exports, Il = rl, xl = F, Pl = fl, El = de, Ll = ye, Ml = 1, Dl = 2, kl = 4, dt = "[object Arguments]", Bl = "[object Array]", Fl = "[object Boolean]", Gl = "[object Date]", Ul = "[object Error]", yt = "[object Function]", Nl = "[object GeneratorFunction]", zl = "[object Map]", Rl = "[object Number]", bt = "[object Object]", Kl = "[object RegExp]", Vl = "[object Set]", Hl = "[object String]", ql = "[object Symbol]", Wl = "[object WeakMap]", Jl = "[object ArrayBuffer]", Yl = "[object DataView]", Xl = "[object Float32Array]", Zl = "[object Float64Array]", Ql = "[object Int8Array]", eu = "[object Int16Array]", tu = "[object Int32Array]", ru = "[object Uint8Array]", au = "[object Uint8ClampedArray]", nu = "[object Uint16Array]", ou = "[object Uint32Array]", c = {};
c[dt] = c[Bl] = c[Jl] = c[Yl] = c[Fl] = c[Gl] = c[Xl] = c[Zl] = c[Ql] = c[eu] = c[tu] = c[zl] = c[Rl] = c[bt] = c[Kl] = c[Vl] = c[Hl] = c[ql] = c[ru] = c[au] = c[nu] = c[ou] = !0;
c[Ul] = c[yt] = c[Wl] = !1;
function V(e, t, r, a, o, s) {
  var i, l = t & Ml, f = t & Dl, g = t & kl;
  if (r && (i = o ? r(e, a, o, s) : r(e)), i !== void 0)
    return i;
  if (!xl(e))
    return e;
  var S = Cl(e);
  if (S) {
    if (i = jl(e), !l)
      return $l(e, i);
  } else {
    var y = Al(e), h = y == yt || y == Nl;
    if (Ol(e))
      return bl(e, l);
    if (y == bt || y == dt || h && !o) {
      if (i = f || h ? {} : wl(e), !l)
        return f ? hl(e, yl(i, e)) : _l(e, dl(i, e));
    } else {
      if (!c[y])
        return o ? e : {};
      i = Sl(e, y, l);
    }
  }
  s || (s = new gl());
  var U = s.get(e);
  if (U)
    return U;
  s.set(e, i), Pl(e) ? e.forEach(function(n) {
    i.add(V(n, t, r, n, e, s));
  }) : Il(e) && e.forEach(function(n, p) {
    i.set(p, V(n, t, r, p, e, s));
  });
  var Q = g ? f ? ml : Tl : f ? Ll : El, N = S ? void 0 : Q(e);
  return vl(N || e, function(n, p) {
    N && (p = n, n = e[p]), pl(i, p, V(n, t, r, p, e, s));
  }), i;
}
var iu = V, su = iu, cu = 1, lu = 4;
function uu(e) {
  return su(e, cu | lu);
}
var Ye = uu;
const fu = { class: "icons" }, gu = { key: 1 }, vu = /* @__PURE__ */ St({
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
    const r = e;
    let a = z(() => r.options.filter((n) => !n.action)), o = z(() => r.options.find((n) => n.action));
    const s = ee(Ye(r.data)), i = ee(r.editRowIndex), l = z(() => !r.data || !r.data.length), f = ee(""), g = (n) => {
      s.value.map((p) => {
        p.rowEdit = !1;
      }), t("update: editRowIndex", ""), f.value = n.$index + n.column.id;
    }, S = (n) => {
      f.value = "", t("cell-confirm", n);
    }, y = (n) => {
      f.value = "", t("cell-cancel", n);
    }, h = (n, p) => {
      p.label === o.value.label && r.isEditRow && i.value === r.editRowIndex && (f.value = "", n.rowEdit = !n.rowEdit, s.value.map((M) => {
        M !== n && (M.rowEdit = !1);
      }), n.rowEdit || t("update: editRowIndex", ""));
    }, U = (n) => {
      t("sizeChange", n);
    }, Q = (n) => {
      t("currentChange", n);
    }, N = z(() => r.paginationAlign === "left" ? "flex-start" : r.paginationAlign === "center" ? "center" : "flex-end");
    return me(
      () => r.data,
      (n) => {
        s.value = Ye(n), s.value.map((p) => {
          p.rowEdit = !1;
        });
      },
      {
        deep: !0
      }
    ), me(
      () => r.editRowIndex,
      (n) => {
        n && (i.value = n);
      }
    ), wt(() => {
      s.value.map((n) => {
        n.rowEdit = !1;
      });
    }), (n, p) => {
      const M = _("el-input"), he = _("el-col"), $t = _("el-icon-check"), _t = _("el-icon-close"), ht = _("el-row"), Te = _("el-table-column"), Tt = _("el-table"), mt = _("el-pagination"), At = Ct("loading");
      return b(), C(R, null, [
        Ot((b(), D(Tt, {
          data: s.value,
          "element-loading-text": e.elementLoadingText,
          "element-loading-spinner": e.elementLoadingSpinner,
          "element-loading-background": e.elementLoadingBackground,
          "element-loading-svg": e.elementLoadingSvg,
          "element-loading-svg-box": e.elementLoadingSvgBox,
          onRowClick: h
        }, {
          default: O(() => [
            (b(!0), C(R, null, It(T(a), (v, jt) => (b(), D(Te, {
              key: jt,
              label: v.label,
              prop: v.prop,
              align: v.align,
              width: v.width
            }, {
              default: O((d) => [
                d.row.rowEdit ? (b(), D(M, {
                  key: 0,
                  size: "small",
                  modelValue: d.row[v.prop],
                  "onUpdate:modelValue": (w) => d.row[v.prop] = w
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (b(), C(R, { key: 1 }, [
                  d.$index + d.column.id === f.value ? (b(), D(ht, {
                    key: 0,
                    flex: ""
                  }, {
                    default: O(() => [
                      m(he, { span: 18 }, {
                        default: O(() => [
                          m(M, {
                            size: "small",
                            modelValue: d.row[v.prop],
                            "onUpdate:modelValue": (w) => d.row[v.prop] = w
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      m(he, { span: 6 }, {
                        default: O(() => [
                          xt("div", fu, [
                            m($t, {
                              class: "check",
                              onClick: te((w) => S(d), ["stop"])
                            }, null, 8, ["onClick"]),
                            m(_t, {
                              class: "close",
                              onClick: te((w) => y(d), ["stop"])
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : (b(), C(R, { key: 1 }, [
                    v.slot ? re(n.$slots, v.slot, {
                      key: 0,
                      scope: d
                    }, void 0, !0) : (b(), C("span", gu, Pt(d.row[v.prop]), 1)),
                    v.editable ? (b(), D(Et(`el-icon${T(Mt)(e.cellEditIcon)}`), {
                      key: 2,
                      "el-icon-edit": "",
                      onClick: te((w) => g(d), ["stop"])
                    }, null, 8, ["onClick"])) : Ae("", !0)
                  ], 64))
                ], 64))
              ]),
              _: 2
            }, 1032, ["label", "prop", "align", "width"]))), 128)),
            m(Te, {
              label: T(o).label,
              align: T(o).align,
              width: T(o).width
            }, {
              default: O((v) => [
                v.row.isEditRow ? re(n.$slots, "editRow", {
                  key: 0,
                  scope: v
                }, void 0, !0) : re(n.$slots, "action", {
                  key: 1,
                  scope: v
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["label", "align", "width"])
          ]),
          _: 3
        }, 8, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-box"])), [
          [At, T(l)]
        ]),
        e.pagination ? (b(), C("div", {
          key: 0,
          class: "pagination",
          style: Lt({ justifyContent: T(N) })
        }, [
          m(mt, {
            currentPage: e.currentPage,
            "onUpdate:currentPage": p[0] || (p[0] = (v) => je(currentPage) ? currentPage.value = v : null),
            "page-size": e.pageSize,
            "onUpdate:page-size": p[1] || (p[1] = (v) => je(pageSize) ? pageSize.value = v : null),
            "page-sizes": e.pageSizes,
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: U,
            onCurrentChange: Q
          }, null, 8, ["currentPage", "page-size", "page-sizes", "total"])
        ], 4)) : Ae("", !0)
      ], 64);
    };
  }
});
const pu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, o] of t)
    r[a] = o;
  return r;
}, du = /* @__PURE__ */ pu(vu, [["__scopeId", "data-v-d09a870e"]]), bu = {
  install(e) {
    e.component("m-table", du);
  }
};
export {
  bu as default
};
