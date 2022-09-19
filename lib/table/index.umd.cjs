(function(a,x){typeof exports=="object"&&typeof module<"u"?module.exports=x(require("vue")):typeof define=="function"&&define.amd?define(["vue"],x):(a=typeof globalThis<"u"?globalThis:a||self,a.index=x(a.Vue))})(this,function(a){"use strict";const x=e=>e.replace(/([A-Z])/g,"-$1").toLocaleLowerCase();var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(){this.__data__=[],this.size=0}var it=ot;function st(e,t){return e===t||e!==e&&t!==t}var fe=st,ct=fe;function lt(e,t){for(var r=e.length;r--;)if(ct(e[r][0],t))return r;return-1}var M=lt,ft=M,pt=Array.prototype,ut=pt.splice;function gt(e){var t=this.__data__,r=ft(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():ut.call(t,r,1),--this.size,!0}var dt=gt,yt=M;function vt(e){var t=this.__data__,r=yt(t,e);return r<0?void 0:t[r][1]}var bt=vt,$t=M;function ht(e){return $t(this.__data__,e)>-1}var _t=ht,mt=M;function Tt(e,t){var r=this.__data__,n=mt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var jt=Tt,At=it,Ct=dt,wt=bt,St=_t,Ot=jt;function T(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}T.prototype.clear=At,T.prototype.delete=Ct,T.prototype.get=wt,T.prototype.has=St,T.prototype.set=Ot;var D=T,xt=D;function It(){this.__data__=new xt,this.size=0}var Pt=It;function Et(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var kt=Et;function Bt(e){return this.__data__.get(e)}var Lt=Bt;function Mt(e){return this.__data__.has(e)}var Dt=Mt,Ft=typeof L=="object"&&L&&L.Object===Object&&L,pe=Ft,Nt=pe,Gt=typeof self=="object"&&self&&self.Object===Object&&self,Ut=Nt||Gt||Function("return this")(),$=Ut,Vt=$,zt=Vt.Symbol,H=zt,ue=H,ge=Object.prototype,Rt=ge.hasOwnProperty,Kt=ge.toString,I=ue?ue.toStringTag:void 0;function Ht(e){var t=Rt.call(e,I),r=e[I];try{e[I]=void 0;var n=!0}catch{}var i=Kt.call(e);return n&&(t?e[I]=r:delete e[I]),i}var qt=Ht,Wt=Object.prototype,Jt=Wt.toString;function Yt(e){return Jt.call(e)}var Xt=Yt,de=H,Zt=qt,Qt=Xt,er="[object Null]",tr="[object Undefined]",ye=de?de.toStringTag:void 0;function rr(e){return e==null?e===void 0?tr:er:ye&&ye in Object(e)?Zt(e):Qt(e)}var F=rr;function ar(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var P=ar,nr=F,or=P,ir="[object AsyncFunction]",sr="[object Function]",cr="[object GeneratorFunction]",lr="[object Proxy]";function fr(e){if(!or(e))return!1;var t=nr(e);return t==sr||t==cr||t==ir||t==lr}var ve=fr,pr=$,ur=pr["__core-js_shared__"],gr=ur,q=gr,be=function(){var e=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function dr(e){return!!be&&be in e}var yr=dr,vr=Function.prototype,br=vr.toString;function $r(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}var $e=$r,hr=ve,_r=yr,mr=P,Tr=$e,jr=/[\\^$.*+?()[\]{}|]/g,Ar=/^\[object .+?Constructor\]$/,Cr=Function.prototype,wr=Object.prototype,Sr=Cr.toString,Or=wr.hasOwnProperty,xr=RegExp("^"+Sr.call(Or).replace(jr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ir(e){if(!mr(e)||_r(e))return!1;var t=hr(e)?xr:Ar;return t.test(Tr(e))}var Pr=Ir;function Er(e,t){return e==null?void 0:e[t]}var kr=Er,Br=Pr,Lr=kr;function Mr(e,t){var r=Lr(e,t);return Br(r)?r:void 0}var h=Mr,Dr=h,Fr=$,Nr=Dr(Fr,"Map"),W=Nr,Gr=h,Ur=Gr(Object,"create"),N=Ur,he=N;function Vr(){this.__data__=he?he(null):{},this.size=0}var zr=Vr;function Rr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Kr=Rr,Hr=N,qr="__lodash_hash_undefined__",Wr=Object.prototype,Jr=Wr.hasOwnProperty;function Yr(e){var t=this.__data__;if(Hr){var r=t[e];return r===qr?void 0:r}return Jr.call(t,e)?t[e]:void 0}var Xr=Yr,Zr=N,Qr=Object.prototype,ea=Qr.hasOwnProperty;function ta(e){var t=this.__data__;return Zr?t[e]!==void 0:ea.call(t,e)}var ra=ta,aa=N,na="__lodash_hash_undefined__";function oa(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=aa&&t===void 0?na:t,this}var ia=oa,sa=zr,ca=Kr,la=Xr,fa=ra,pa=ia;function j(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}j.prototype.clear=sa,j.prototype.delete=ca,j.prototype.get=la,j.prototype.has=fa,j.prototype.set=pa;var ua=j,_e=ua,ga=D,da=W;function ya(){this.size=0,this.__data__={hash:new _e,map:new(da||ga),string:new _e}}var va=ya;function ba(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var $a=ba,ha=$a;function _a(e,t){var r=e.__data__;return ha(t)?r[typeof t=="string"?"string":"hash"]:r.map}var G=_a,ma=G;function Ta(e){var t=ma(this,e).delete(e);return this.size-=t?1:0,t}var ja=Ta,Aa=G;function Ca(e){return Aa(this,e).get(e)}var wa=Ca,Sa=G;function Oa(e){return Sa(this,e).has(e)}var xa=Oa,Ia=G;function Pa(e,t){var r=Ia(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var Ea=Pa,ka=va,Ba=ja,La=wa,Ma=xa,Da=Ea;function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}A.prototype.clear=ka,A.prototype.delete=Ba,A.prototype.get=La,A.prototype.has=Ma,A.prototype.set=Da;var Fa=A,Na=D,Ga=W,Ua=Fa,Va=200;function za(e,t){var r=this.__data__;if(r instanceof Na){var n=r.__data__;if(!Ga||n.length<Va-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ua(n)}return r.set(e,t),this.size=r.size,this}var Ra=za,Ka=D,Ha=Pt,qa=kt,Wa=Lt,Ja=Dt,Ya=Ra;function C(e){var t=this.__data__=new Ka(e);this.size=t.size}C.prototype.clear=Ha,C.prototype.delete=qa,C.prototype.get=Wa,C.prototype.has=Ja,C.prototype.set=Ya;var Xa=C;function Za(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var Qa=Za,en=h,tn=function(){try{var e=en(Object,"defineProperty");return e({},"",{}),e}catch{}}(),rn=tn,me=rn;function an(e,t,r){t=="__proto__"&&me?me(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Te=an,nn=Te,on=fe,sn=Object.prototype,cn=sn.hasOwnProperty;function ln(e,t,r){var n=e[t];(!(cn.call(e,t)&&on(n,r))||r===void 0&&!(t in e))&&nn(e,t,r)}var je=ln,fn=je,pn=Te;function un(e,t,r,n){var i=!r;r||(r={});for(var c=-1,s=t.length;++c<s;){var p=t[c],u=n?n(r[p],e[p],p,r,e):void 0;u===void 0&&(u=e[p]),i?pn(r,p,u):fn(r,p,u)}return r}var U=un;function gn(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var dn=gn;function yn(e){return e!=null&&typeof e=="object"}var E=yn,vn=F,bn=E,$n="[object Arguments]";function hn(e){return bn(e)&&vn(e)==$n}var _n=hn,Ae=_n,mn=E,Ce=Object.prototype,Tn=Ce.hasOwnProperty,jn=Ce.propertyIsEnumerable,An=Ae(function(){return arguments}())?Ae:function(e){return mn(e)&&Tn.call(e,"callee")&&!jn.call(e,"callee")},Cn=An,wn=Array.isArray,J=wn,V={exports:{}};function Sn(){return!1}var On=Sn;(function(e,t){var r=$,n=On,i=t&&!t.nodeType&&t,c=i&&!0&&e&&!e.nodeType&&e,s=c&&c.exports===i,p=s?r.Buffer:void 0,u=p?p.isBuffer:void 0,g=u||n;e.exports=g})(V,V.exports);var xn=9007199254740991,In=/^(?:0|[1-9]\d*)$/;function Pn(e,t){var r=typeof e;return t=t==null?xn:t,!!t&&(r=="number"||r!="symbol"&&In.test(e))&&e>-1&&e%1==0&&e<t}var En=Pn,kn=9007199254740991;function Bn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=kn}var we=Bn,Ln=F,Mn=we,Dn=E,Fn="[object Arguments]",Nn="[object Array]",Gn="[object Boolean]",Un="[object Date]",Vn="[object Error]",zn="[object Function]",Rn="[object Map]",Kn="[object Number]",Hn="[object Object]",qn="[object RegExp]",Wn="[object Set]",Jn="[object String]",Yn="[object WeakMap]",Xn="[object ArrayBuffer]",Zn="[object DataView]",Qn="[object Float32Array]",eo="[object Float64Array]",to="[object Int8Array]",ro="[object Int16Array]",ao="[object Int32Array]",no="[object Uint8Array]",oo="[object Uint8ClampedArray]",io="[object Uint16Array]",so="[object Uint32Array]",f={};f[Qn]=f[eo]=f[to]=f[ro]=f[ao]=f[no]=f[oo]=f[io]=f[so]=!0,f[Fn]=f[Nn]=f[Xn]=f[Gn]=f[Zn]=f[Un]=f[Vn]=f[zn]=f[Rn]=f[Kn]=f[Hn]=f[qn]=f[Wn]=f[Jn]=f[Yn]=!1;function co(e){return Dn(e)&&Mn(e.length)&&!!f[Ln(e)]}var lo=co;function fo(e){return function(t){return e(t)}}var Y=fo,k={exports:{}};(function(e,t){var r=pe,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,c=i&&i.exports===n,s=c&&r.process,p=function(){try{var u=i&&i.require&&i.require("util").types;return u||s&&s.binding&&s.binding("util")}catch{}}();e.exports=p})(k,k.exports);var po=lo,uo=Y,Se=k.exports,Oe=Se&&Se.isTypedArray,go=Oe?uo(Oe):po,yo=go,vo=dn,bo=Cn,$o=J,ho=V.exports,_o=En,mo=yo,To=Object.prototype,jo=To.hasOwnProperty;function Ao(e,t){var r=$o(e),n=!r&&bo(e),i=!r&&!n&&ho(e),c=!r&&!n&&!i&&mo(e),s=r||n||i||c,p=s?vo(e.length,String):[],u=p.length;for(var g in e)(t||jo.call(e,g))&&!(s&&(g=="length"||i&&(g=="offset"||g=="parent")||c&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||_o(g,u)))&&p.push(g);return p}var xe=Ao,Co=Object.prototype;function wo(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Co;return e===r}var X=wo;function So(e,t){return function(r){return e(t(r))}}var Ie=So,Oo=Ie,xo=Oo(Object.keys,Object),Io=xo,Po=X,Eo=Io,ko=Object.prototype,Bo=ko.hasOwnProperty;function Lo(e){if(!Po(e))return Eo(e);var t=[];for(var r in Object(e))Bo.call(e,r)&&r!="constructor"&&t.push(r);return t}var Mo=Lo,Do=ve,Fo=we;function No(e){return e!=null&&Fo(e.length)&&!Do(e)}var Pe=No,Go=xe,Uo=Mo,Vo=Pe;function zo(e){return Vo(e)?Go(e):Uo(e)}var Z=zo,Ro=U,Ko=Z;function Ho(e,t){return e&&Ro(t,Ko(t),e)}var qo=Ho;function Wo(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Jo=Wo,Yo=P,Xo=X,Zo=Jo,Qo=Object.prototype,ei=Qo.hasOwnProperty;function ti(e){if(!Yo(e))return Zo(e);var t=Xo(e),r=[];for(var n in e)n=="constructor"&&(t||!ei.call(e,n))||r.push(n);return r}var ri=ti,ai=xe,ni=ri,oi=Pe;function ii(e){return oi(e)?ai(e,!0):ni(e)}var Q=ii,si=U,ci=Q;function li(e,t){return e&&si(t,ci(t),e)}var fi=li,ee={exports:{}};(function(e,t){var r=$,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,c=i&&i.exports===n,s=c?r.Buffer:void 0,p=s?s.allocUnsafe:void 0;function u(g,S){if(S)return g.slice();var b=g.length,m=p?p(b):new g.constructor(b);return g.copy(m),m}e.exports=u})(ee,ee.exports);function pi(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var ui=pi;function gi(e,t){for(var r=-1,n=e==null?0:e.length,i=0,c=[];++r<n;){var s=e[r];t(s,r,e)&&(c[i++]=s)}return c}var di=gi;function yi(){return[]}var Ee=yi,vi=di,bi=Ee,$i=Object.prototype,hi=$i.propertyIsEnumerable,ke=Object.getOwnPropertySymbols,_i=ke?function(e){return e==null?[]:(e=Object(e),vi(ke(e),function(t){return hi.call(e,t)}))}:bi,te=_i,mi=U,Ti=te;function ji(e,t){return mi(e,Ti(e),t)}var Ai=ji;function Ci(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var Be=Ci,wi=Ie,Si=wi(Object.getPrototypeOf,Object),Le=Si,Oi=Be,xi=Le,Ii=te,Pi=Ee,Ei=Object.getOwnPropertySymbols,ki=Ei?function(e){for(var t=[];e;)Oi(t,Ii(e)),e=xi(e);return t}:Pi,Me=ki,Bi=U,Li=Me;function Mi(e,t){return Bi(e,Li(e),t)}var Di=Mi,Fi=Be,Ni=J;function Gi(e,t,r){var n=t(e);return Ni(e)?n:Fi(n,r(e))}var De=Gi,Ui=De,Vi=te,zi=Z;function Ri(e){return Ui(e,zi,Vi)}var Ki=Ri,Hi=De,qi=Me,Wi=Q;function Ji(e){return Hi(e,Wi,qi)}var Yi=Ji,Xi=h,Zi=$,Qi=Xi(Zi,"DataView"),es=Qi,ts=h,rs=$,as=ts(rs,"Promise"),ns=as,os=h,is=$,ss=os(is,"Set"),cs=ss,ls=h,fs=$,ps=ls(fs,"WeakMap"),us=ps,re=es,ae=W,ne=ns,oe=cs,ie=us,Fe=F,w=$e,Ne="[object Map]",gs="[object Object]",Ge="[object Promise]",Ue="[object Set]",Ve="[object WeakMap]",ze="[object DataView]",ds=w(re),ys=w(ae),vs=w(ne),bs=w(oe),$s=w(ie),_=Fe;(re&&_(new re(new ArrayBuffer(1)))!=ze||ae&&_(new ae)!=Ne||ne&&_(ne.resolve())!=Ge||oe&&_(new oe)!=Ue||ie&&_(new ie)!=Ve)&&(_=function(e){var t=Fe(e),r=t==gs?e.constructor:void 0,n=r?w(r):"";if(n)switch(n){case ds:return ze;case ys:return Ne;case vs:return Ge;case bs:return Ue;case $s:return Ve}return t});var se=_,hs=Object.prototype,_s=hs.hasOwnProperty;function ms(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&_s.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Ts=ms,js=$,As=js.Uint8Array,Cs=As,Re=Cs;function ws(e){var t=new e.constructor(e.byteLength);return new Re(t).set(new Re(e)),t}var ce=ws,Ss=ce;function Os(e,t){var r=t?Ss(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var xs=Os,Is=/\w*$/;function Ps(e){var t=new e.constructor(e.source,Is.exec(e));return t.lastIndex=e.lastIndex,t}var Es=Ps,Ke=H,He=Ke?Ke.prototype:void 0,qe=He?He.valueOf:void 0;function ks(e){return qe?Object(qe.call(e)):{}}var Bs=ks,Ls=ce;function Ms(e,t){var r=t?Ls(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Ds=Ms,Fs=ce,Ns=xs,Gs=Es,Us=Bs,Vs=Ds,zs="[object Boolean]",Rs="[object Date]",Ks="[object Map]",Hs="[object Number]",qs="[object RegExp]",Ws="[object Set]",Js="[object String]",Ys="[object Symbol]",Xs="[object ArrayBuffer]",Zs="[object DataView]",Qs="[object Float32Array]",ec="[object Float64Array]",tc="[object Int8Array]",rc="[object Int16Array]",ac="[object Int32Array]",nc="[object Uint8Array]",oc="[object Uint8ClampedArray]",ic="[object Uint16Array]",sc="[object Uint32Array]";function cc(e,t,r){var n=e.constructor;switch(t){case Xs:return Fs(e);case zs:case Rs:return new n(+e);case Zs:return Ns(e,r);case Qs:case ec:case tc:case rc:case ac:case nc:case oc:case ic:case sc:return Vs(e,r);case Ks:return new n;case Hs:case Js:return new n(e);case qs:return Gs(e);case Ws:return new n;case Ys:return Us(e)}}var lc=cc,fc=P,We=Object.create,pc=function(){function e(){}return function(t){if(!fc(t))return{};if(We)return We(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),uc=pc,gc=uc,dc=Le,yc=X;function vc(e){return typeof e.constructor=="function"&&!yc(e)?gc(dc(e)):{}}var bc=vc,$c=se,hc=E,_c="[object Map]";function mc(e){return hc(e)&&$c(e)==_c}var Tc=mc,jc=Tc,Ac=Y,Je=k.exports,Ye=Je&&Je.isMap,Cc=Ye?Ac(Ye):jc,wc=Cc,Sc=se,Oc=E,xc="[object Set]";function Ic(e){return Oc(e)&&Sc(e)==xc}var Pc=Ic,Ec=Pc,kc=Y,Xe=k.exports,Ze=Xe&&Xe.isSet,Bc=Ze?kc(Ze):Ec,Lc=Bc,Mc=Xa,Dc=Qa,Fc=je,Nc=qo,Gc=fi,Uc=ee.exports,Vc=ui,zc=Ai,Rc=Di,Kc=Ki,Hc=Yi,qc=se,Wc=Ts,Jc=lc,Yc=bc,Xc=J,Zc=V.exports,Qc=wc,el=P,tl=Lc,rl=Z,al=Q,nl=1,ol=2,il=4,Qe="[object Arguments]",sl="[object Array]",cl="[object Boolean]",ll="[object Date]",fl="[object Error]",et="[object Function]",pl="[object GeneratorFunction]",ul="[object Map]",gl="[object Number]",tt="[object Object]",dl="[object RegExp]",yl="[object Set]",vl="[object String]",bl="[object Symbol]",$l="[object WeakMap]",hl="[object ArrayBuffer]",_l="[object DataView]",ml="[object Float32Array]",Tl="[object Float64Array]",jl="[object Int8Array]",Al="[object Int16Array]",Cl="[object Int32Array]",wl="[object Uint8Array]",Sl="[object Uint8ClampedArray]",Ol="[object Uint16Array]",xl="[object Uint32Array]",l={};l[Qe]=l[sl]=l[hl]=l[_l]=l[cl]=l[ll]=l[ml]=l[Tl]=l[jl]=l[Al]=l[Cl]=l[ul]=l[gl]=l[tt]=l[dl]=l[yl]=l[vl]=l[bl]=l[wl]=l[Sl]=l[Ol]=l[xl]=!0,l[fl]=l[et]=l[$l]=!1;function z(e,t,r,n,i,c){var s,p=t&nl,u=t&ol,g=t&il;if(r&&(s=i?r(e,n,i,c):r(e)),s!==void 0)return s;if(!el(e))return e;var S=Xc(e);if(S){if(s=Wc(e),!p)return Vc(e,s)}else{var b=qc(e),m=b==et||b==pl;if(Zc(e))return Uc(e,p);if(b==tt||b==Qe||m&&!i){if(s=u||m?{}:Yc(e),!p)return u?Rc(e,Gc(s,e)):zc(e,Nc(s,e))}else{if(!l[b])return i?e:{};s=Jc(e,b,p)}}c||(c=new Mc);var R=c.get(e);if(R)return R;c.set(e,s),tl(e)?e.forEach(function(o){s.add(z(o,t,r,o,e,c))}):Qc(e)&&e.forEach(function(o,y){s.set(y,z(o,t,r,y,e,c))});var le=g?u?Hc:Kc:u?al:rl,K=S?void 0:le(e);return Dc(K||e,function(o,y){K&&(y=o,o=e[y]),Fc(s,y,z(o,t,r,y,e,c))}),s}var Il=z,Pl=Il,El=1,kl=4;function Bl(e){return Pl(e,El|kl)}var rt=Bl;const Ll={class:"icons"},Ml={key:1},Dl=a.defineComponent({__name:"index",props:{options:{type:Array,required:!0},data:{type:Array,required:!0},elementLoadingText:{type:String},elementLoadingSpinner:{type:String},elementLoadingBackground:{type:String},elementLoadingSvg:{type:String},elementLoadingSvgBox:{type:String},cellEditIcon:{type:String,default:"Edit"},isEditRow:{type:Boolean,default:!1},editRowIndex:{type:String,default:""},pagination:{type:Boolean,default:!1},currentPage:{type:Number,default:1},pageSizes:{type:Array,default:[10,20,50,100]},pageSize:{type:Number,default:10},total:{type:Number,default:0},paginationAlign:{type:String,default:"left"}},emits:["cell-confirm","cell-cancel","update: editRowIndex","sizeChange","currentChange"],setup(e,{emit:t}){const r=e;let n=a.computed(()=>r.options.filter(o=>!o.action)),i=a.computed(()=>r.options.find(o=>o.action));const c=a.ref(rt(r.data)),s=a.ref(r.editRowIndex),p=a.computed(()=>!r.data||!r.data.length),u=a.ref(""),g=o=>{c.value.map(y=>{y.rowEdit=!1}),t("update: editRowIndex",""),u.value=o.$index+o.column.id},S=o=>{u.value="",t("cell-confirm",o)},b=o=>{u.value="",t("cell-cancel",o)},m=(o,y)=>{y.label===i.value.label&&r.isEditRow&&s.value===r.editRowIndex&&(u.value="",o.rowEdit=!o.rowEdit,c.value.map(B=>{B!==o&&(B.rowEdit=!1)}),o.rowEdit||t("update: editRowIndex",""))},R=o=>{t("sizeChange",o)},le=o=>{t("currentChange",o)},K=a.computed(()=>r.paginationAlign==="left"?"flex-start":r.paginationAlign==="center"?"center":"flex-end");return a.watch(()=>r.data,o=>{c.value=rt(o),c.value.map(y=>{y.rowEdit=!1})},{deep:!0}),a.watch(()=>r.editRowIndex,o=>{o&&(s.value=o)}),a.onMounted(()=>{c.value.map(o=>{o.rowEdit=!1})}),(o,y)=>{const B=a.resolveComponent("el-input"),at=a.resolveComponent("el-col"),Nl=a.resolveComponent("el-icon-check"),Gl=a.resolveComponent("el-icon-close"),Ul=a.resolveComponent("el-row"),nt=a.resolveComponent("el-table-column"),Vl=a.resolveComponent("el-table"),zl=a.resolveComponent("el-pagination"),Rl=a.resolveDirective("loading");return a.openBlock(),a.createElementBlock(a.Fragment,null,[a.withDirectives((a.openBlock(),a.createBlock(Vl,{data:c.value,"element-loading-text":e.elementLoadingText,"element-loading-spinner":e.elementLoadingSpinner,"element-loading-background":e.elementLoadingBackground,"element-loading-svg":e.elementLoadingSvg,"element-loading-svg-box":e.elementLoadingSvgBox,onRowClick:m},{default:a.withCtx(()=>[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(n),(d,Kl)=>(a.openBlock(),a.createBlock(nt,{key:Kl,label:d.label,prop:d.prop,align:d.align,width:d.width},{default:a.withCtx(v=>[v.row.rowEdit?(a.openBlock(),a.createBlock(B,{key:0,size:"small",modelValue:v.row[d.prop],"onUpdate:modelValue":O=>v.row[d.prop]=O},null,8,["modelValue","onUpdate:modelValue"])):(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[v.$index+v.column.id===u.value?(a.openBlock(),a.createBlock(Ul,{key:0,flex:""},{default:a.withCtx(()=>[a.createVNode(at,{span:18},{default:a.withCtx(()=>[a.createVNode(B,{size:"small",modelValue:v.row[d.prop],"onUpdate:modelValue":O=>v.row[d.prop]=O},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a.createVNode(at,{span:6},{default:a.withCtx(()=>[a.createElementVNode("div",Ll,[a.createVNode(Nl,{class:"check",onClick:a.withModifiers(O=>S(v),["stop"])},null,8,["onClick"]),a.createVNode(Gl,{class:"close",onClick:a.withModifiers(O=>b(v),["stop"])},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)):(a.openBlock(),a.createElementBlock(a.Fragment,{key:1},[d.slot?a.renderSlot(o.$slots,d.slot,{key:0,scope:v},void 0,!0):(a.openBlock(),a.createElementBlock("span",Ml,a.toDisplayString(v.row[d.prop]),1)),d.editable?(a.openBlock(),a.createBlock(a.resolveDynamicComponent(`el-icon${a.unref(x)(e.cellEditIcon)}`),{key:2,"el-icon-edit":"",onClick:a.withModifiers(O=>g(v),["stop"])},null,8,["onClick"])):a.createCommentVNode("",!0)],64))],64))]),_:2},1032,["label","prop","align","width"]))),128)),a.createVNode(nt,{label:a.unref(i).label,align:a.unref(i).align,width:a.unref(i).width},{default:a.withCtx(d=>[d.row.isEditRow?a.renderSlot(o.$slots,"editRow",{key:0,scope:d},void 0,!0):a.renderSlot(o.$slots,"action",{key:1,scope:d},void 0,!0)]),_:3},8,["label","align","width"])]),_:3},8,["data","element-loading-text","element-loading-spinner","element-loading-background","element-loading-svg","element-loading-svg-box"])),[[Rl,a.unref(p)]]),e.pagination?(a.openBlock(),a.createElementBlock("div",{key:0,class:"pagination",style:a.normalizeStyle({justifyContent:a.unref(K)})},[a.createVNode(zl,{currentPage:e.currentPage,"onUpdate:currentPage":y[0]||(y[0]=d=>a.isRef(currentPage)?currentPage.value=d:null),"page-size":e.pageSize,"onUpdate:page-size":y[1]||(y[1]=d=>a.isRef(pageSize)?pageSize.value=d:null),"page-sizes":e.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:R,onCurrentChange:le},null,8,["currentPage","page-size","page-sizes","total"])],4)):a.createCommentVNode("",!0)],64)}}}),Hl="",Fl=((e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r})(Dl,[["__scopeId","data-v-d09a870e"]]);return{install(e){e.component("m-table",Fl)}}});