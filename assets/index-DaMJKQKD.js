(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function s(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(f){if(f.ep)return;f.ep=!0;const h=s(f);fetch(f.href,h)}})();function kx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var ls={exports:{}},wi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function Yx(){if(Zh)return wi;Zh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,f,h){var v=null;if(h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),"key"in f){h={};for(var w in f)w!=="key"&&(h[w]=f[w])}else h=f;return f=h.ref,{$$typeof:l,type:c,key:v,ref:f!==void 0?f:null,props:h}}return wi.Fragment=u,wi.jsx=s,wi.jsxs=s,wi}var Kh;function qx(){return Kh||(Kh=1,ls.exports=Yx()),ls.exports}var r=qx(),is={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Gx(){if(Jh)return re;Jh=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),M=Symbol.iterator;function C(y){return y===null||typeof y!="object"?null:(y=M&&y[M]||y["@@iterator"],typeof y=="function"?y:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,G={};function L(y,Y,Z){this.props=y,this.context=Y,this.refs=G,this.updater=Z||_}L.prototype.isReactComponent={},L.prototype.setState=function(y,Y){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,Y,"setState")},L.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function B(){}B.prototype=L.prototype;function q(y,Y,Z){this.props=y,this.context=Y,this.refs=G,this.updater=Z||_}var X=q.prototype=new B;X.constructor=q,N(X,L.prototype),X.isPureReactComponent=!0;var J=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},ae=Object.prototype.hasOwnProperty;function $(y,Y,Z,K,F,ue){return Z=ue.ref,{$$typeof:l,type:y,key:Y,ref:Z!==void 0?Z:null,props:ue}}function ge(y,Y){return $(y.type,Y,void 0,void 0,void 0,y.props)}function he(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function De(y){var Y={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Z){return Y[Z]})}var Ye=/\/+/g;function Be(y,Y){return typeof y=="object"&&y!==null&&y.key!=null?De(""+y.key):Y.toString(36)}function st(){}function dt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(st,st):(y.status="pending",y.then(function(Y){y.status==="pending"&&(y.status="fulfilled",y.value=Y)},function(Y){y.status==="pending"&&(y.status="rejected",y.reason=Y)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Oe(y,Y,Z,K,F){var ue=typeof y;(ue==="undefined"||ue==="boolean")&&(y=null);var I=!1;if(y===null)I=!0;else switch(ue){case"bigint":case"string":case"number":I=!0;break;case"object":switch(y.$$typeof){case l:case u:I=!0;break;case E:return I=y._init,Oe(I(y._payload),Y,Z,K,F)}}if(I)return F=F(y),I=K===""?"."+Be(y,0):K,J(F)?(Z="",I!=null&&(Z=I.replace(Ye,"$&/")+"/"),Oe(F,Y,Z,"",function(Qe){return Qe})):F!=null&&(he(F)&&(F=ge(F,Z+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(Ye,"$&/")+"/")+I)),Y.push(F)),1;I=0;var Ne=K===""?".":K+":";if(J(y))for(var xe=0;xe<y.length;xe++)K=y[xe],ue=Ne+Be(K,xe),I+=Oe(K,Y,Z,ue,F);else if(xe=C(y),typeof xe=="function")for(y=xe.call(y),xe=0;!(K=y.next()).done;)K=K.value,ue=Ne+Be(K,xe++),I+=Oe(K,Y,Z,ue,F);else if(ue==="object"){if(typeof y.then=="function")return Oe(dt(y),Y,Z,K,F);throw Y=String(y),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return I}function O(y,Y,Z){if(y==null)return y;var K=[],F=0;return Oe(y,K,"","",function(ue){return Y.call(Z,ue,F++)}),K}function V(y){if(y._status===-1){var Y=y._result;Y=Y(),Y.then(function(Z){(y._status===0||y._status===-1)&&(y._status=1,y._result=Z)},function(Z){(y._status===0||y._status===-1)&&(y._status=2,y._result=Z)}),y._status===-1&&(y._status=0,y._result=Y)}if(y._status===1)return y._result.default;throw y._result}var te=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function oe(){}return re.Children={map:O,forEach:function(y,Y,Z){O(y,function(){Y.apply(this,arguments)},Z)},count:function(y){var Y=0;return O(y,function(){Y++}),Y},toArray:function(y){return O(y,function(Y){return Y})||[]},only:function(y){if(!he(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},re.Component=L,re.Fragment=s,re.Profiler=f,re.PureComponent=q,re.StrictMode=c,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,re.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Q.H.useMemoCache(y)}},re.cache=function(y){return function(){return y.apply(null,arguments)}},re.cloneElement=function(y,Y,Z){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var K=N({},y.props),F=y.key,ue=void 0;if(Y!=null)for(I in Y.ref!==void 0&&(ue=void 0),Y.key!==void 0&&(F=""+Y.key),Y)!ae.call(Y,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&Y.ref===void 0||(K[I]=Y[I]);var I=arguments.length-2;if(I===1)K.children=Z;else if(1<I){for(var Ne=Array(I),xe=0;xe<I;xe++)Ne[xe]=arguments[xe+2];K.children=Ne}return $(y.type,F,void 0,void 0,ue,K)},re.createContext=function(y){return y={$$typeof:v,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},re.createElement=function(y,Y,Z){var K,F={},ue=null;if(Y!=null)for(K in Y.key!==void 0&&(ue=""+Y.key),Y)ae.call(Y,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(F[K]=Y[K]);var I=arguments.length-2;if(I===1)F.children=Z;else if(1<I){for(var Ne=Array(I),xe=0;xe<I;xe++)Ne[xe]=arguments[xe+2];F.children=Ne}if(y&&y.defaultProps)for(K in I=y.defaultProps,I)F[K]===void 0&&(F[K]=I[K]);return $(y,ue,void 0,void 0,null,F)},re.createRef=function(){return{current:null}},re.forwardRef=function(y){return{$$typeof:w,render:y}},re.isValidElement=he,re.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:V}},re.memo=function(y,Y){return{$$typeof:p,type:y,compare:Y===void 0?null:Y}},re.startTransition=function(y){var Y=Q.T,Z={};Q.T=Z;try{var K=y(),F=Q.S;F!==null&&F(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(oe,te)}catch(ue){te(ue)}finally{Q.T=Y}},re.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},re.use=function(y){return Q.H.use(y)},re.useActionState=function(y,Y,Z){return Q.H.useActionState(y,Y,Z)},re.useCallback=function(y,Y){return Q.H.useCallback(y,Y)},re.useContext=function(y){return Q.H.useContext(y)},re.useDebugValue=function(){},re.useDeferredValue=function(y,Y){return Q.H.useDeferredValue(y,Y)},re.useEffect=function(y,Y,Z){var K=Q.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(y,Y)},re.useId=function(){return Q.H.useId()},re.useImperativeHandle=function(y,Y,Z){return Q.H.useImperativeHandle(y,Y,Z)},re.useInsertionEffect=function(y,Y){return Q.H.useInsertionEffect(y,Y)},re.useLayoutEffect=function(y,Y){return Q.H.useLayoutEffect(y,Y)},re.useMemo=function(y,Y){return Q.H.useMemo(y,Y)},re.useOptimistic=function(y,Y){return Q.H.useOptimistic(y,Y)},re.useReducer=function(y,Y,Z){return Q.H.useReducer(y,Y,Z)},re.useRef=function(y){return Q.H.useRef(y)},re.useState=function(y){return Q.H.useState(y)},re.useSyncExternalStore=function(y,Y,Z){return Q.H.useSyncExternalStore(y,Y,Z)},re.useTransition=function(){return Q.H.useTransition()},re.version="19.1.0",re}var $h;function Xs(){return $h||($h=1,is.exports=Gx()),is.exports}var j=Xs();const Yt=kx(j);var rs={exports:{}},zi={},os={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Xx(){return Wh||(Wh=1,function(l){function u(O,V){var te=O.length;O.push(V);e:for(;0<te;){var oe=te-1>>>1,y=O[oe];if(0<f(y,V))O[oe]=V,O[te]=y,te=oe;else break e}}function s(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var V=O[0],te=O.pop();if(te!==V){O[0]=te;e:for(var oe=0,y=O.length,Y=y>>>1;oe<Y;){var Z=2*(oe+1)-1,K=O[Z],F=Z+1,ue=O[F];if(0>f(K,te))F<y&&0>f(ue,K)?(O[oe]=ue,O[F]=te,oe=F):(O[oe]=K,O[Z]=te,oe=Z);else if(F<y&&0>f(ue,te))O[oe]=ue,O[F]=te,oe=F;else break e}}return V}function f(O,V){var te=O.sortIndex-V.sortIndex;return te!==0?te:O.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var v=Date,w=v.now();l.unstable_now=function(){return v.now()-w}}var g=[],p=[],E=1,M=null,C=3,_=!1,N=!1,G=!1,L=!1,B=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function J(O){for(var V=s(p);V!==null;){if(V.callback===null)c(p);else if(V.startTime<=O)c(p),V.sortIndex=V.expirationTime,u(g,V);else break;V=s(p)}}function Q(O){if(G=!1,J(O),!N)if(s(g)!==null)N=!0,ae||(ae=!0,Be());else{var V=s(p);V!==null&&Oe(Q,V.startTime-O)}}var ae=!1,$=-1,ge=5,he=-1;function De(){return L?!0:!(l.unstable_now()-he<ge)}function Ye(){if(L=!1,ae){var O=l.unstable_now();he=O;var V=!0;try{e:{N=!1,G&&(G=!1,q($),$=-1),_=!0;var te=C;try{t:{for(J(O),M=s(g);M!==null&&!(M.expirationTime>O&&De());){var oe=M.callback;if(typeof oe=="function"){M.callback=null,C=M.priorityLevel;var y=oe(M.expirationTime<=O);if(O=l.unstable_now(),typeof y=="function"){M.callback=y,J(O),V=!0;break t}M===s(g)&&c(g),J(O)}else c(g);M=s(g)}if(M!==null)V=!0;else{var Y=s(p);Y!==null&&Oe(Q,Y.startTime-O),V=!1}}break e}finally{M=null,C=te,_=!1}V=void 0}}finally{V?Be():ae=!1}}}var Be;if(typeof X=="function")Be=function(){X(Ye)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,dt=st.port2;st.port1.onmessage=Ye,Be=function(){dt.postMessage(null)}}else Be=function(){B(Ye,0)};function Oe(O,V){$=B(function(){O(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return C},l.unstable_next=function(O){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var te=C;C=V;try{return O()}finally{C=te}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=C;C=O;try{return V()}finally{C=te}},l.unstable_scheduleCallback=function(O,V,te){var oe=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?oe+te:oe):te=oe,O){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=te+y,O={id:E++,callback:V,priorityLevel:O,startTime:te,expirationTime:y,sortIndex:-1},te>oe?(O.sortIndex=te,u(p,O),s(g)===null&&O===s(p)&&(G?(q($),$=-1):G=!0,Oe(Q,te-oe))):(O.sortIndex=y,u(g,O),N||_||(N=!0,ae||(ae=!0,Be()))),O},l.unstable_shouldYield=De,l.unstable_wrapCallback=function(O){var V=C;return function(){var te=C;C=V;try{return O.apply(this,arguments)}finally{C=te}}}}(us)),us}var Fh;function Qx(){return Fh||(Fh=1,os.exports=Xx()),os.exports}var cs={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function Vx(){if(Ih)return it;Ih=1;var l=Xs();function u(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,p,E){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:M==null?null:""+M,children:g,containerInfo:p,implementation:E}}var v=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,it.createPortal=function(g,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(u(299));return h(g,p,null,E)},it.flushSync=function(g){var p=v.T,E=c.p;try{if(v.T=null,c.p=2,g)return g()}finally{v.T=p,c.p=E,c.d.f()}},it.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(g,p))},it.prefetchDNS=function(g){typeof g=="string"&&c.d.D(g)},it.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var E=p.as,M=w(E,p.crossOrigin),C=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?c.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:C,fetchPriority:_}):E==="script"&&c.d.X(g,{crossOrigin:M,integrity:C,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},it.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=w(p.as,p.crossOrigin);c.d.M(g,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(g)},it.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,M=w(E,p.crossOrigin);c.d.L(g,E,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},it.preloadModule=function(g,p){if(typeof g=="string")if(p){var E=w(p.as,p.crossOrigin);c.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(g)},it.requestFormReset=function(g){c.d.r(g)},it.unstable_batchedUpdates=function(g,p){return g(p)},it.useFormState=function(g,p,E){return v.H.useFormState(g,p,E)},it.useFormStatus=function(){return v.H.useHostTransitionStatus()},it.version="19.1.0",it}var Ph;function Zx(){if(Ph)return cs.exports;Ph=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),cs.exports=Vx(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Kx(){if(ep)return zi;ep=1;var l=Qx(),u=Xs(),s=Zx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(h(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===a)return w(i),e;if(o===n)return w(i),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=o;else{for(var d=!1,m=i.child;m;){if(m===a){d=!0,a=i,n=o;break}if(m===n){d=!0,n=i,a=o;break}m=m.sibling}if(!d){for(m=o.child;m;){if(m===a){d=!0,a=o,n=i;break}if(m===n){d=!0,n=o,a=i;break}m=m.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case L:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case ae:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case X:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:dt(e.type)||"Memo";case ge:t=e._payload,e=e._init;try{return dt(e(t))}catch{}}return null}var Oe=Array.isArray,O=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},oe=[],y=-1;function Y(e){return{current:e}}function Z(e){0>y||(e.current=oe[y],oe[y]=null,y--)}function K(e,t){y++,oe[y]=e.current,e.current=t}var F=Y(null),ue=Y(null),I=Y(null),Ne=Y(null);function xe(e,t){switch(K(I,t),K(ue,e),K(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bh(t),e=Sh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(F),K(F,e)}function Qe(){Z(F),Z(ue),Z(I)}function Zt(e){e.memoizedState!==null&&K(Ne,e);var t=F.current,a=Sh(t,e.type);t!==a&&(K(ue,e),K(F,a))}function Ct(e){ue.current===e&&(Z(F),Z(ue)),Ne.current===e&&(Z(Ne),vi._currentValue=te)}var at=Object.prototype.hasOwnProperty,Sn=l.unstable_scheduleCallback,jn=l.unstable_cancelCallback,Hi=l.unstable_shouldYield,Li=l.unstable_requestPaint,vt=l.unstable_now,ki=l.unstable_getCurrentPriorityLevel,Al=l.unstable_ImmediatePriority,Tl=l.unstable_UserBlockingPriority,wn=l.unstable_NormalPriority,Yi=l.unstable_LowPriority,qi=l.unstable_IdlePriority,Gi=l.log,Xo=l.unstable_setDisableYieldValue,Ea=null,ot=null;function Kt(e){if(typeof Gi=="function"&&Xo(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Ea,e)}catch{}}var ut=Math.clz32?Math.clz32:Zo,Qo=Math.log,Vo=Math.LN2;function Zo(e){return e>>>=0,e===0?32:31-(Qo(e)/Vo|0)|0}var zn=256,En=4194304;function la(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function An(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~o,n!==0?i=la(n):(d&=m,d!==0?i=la(d):a||(a=m&~e,a!==0&&(i=la(a))))):(m=n&~o,m!==0?i=la(m):d!==0?i=la(d):a||(a=n&~e,a!==0&&(i=la(a)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:i}function P(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(){var e=zn;return zn<<=1,(zn&4194048)===0&&(zn=256),e}function nd(){var e=En;return En<<=1,(En&62914560)===0&&(En=4194304),e}function Ko(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Cl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tg(e,t,a,n,i,o){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,x=e.expirationTimes,T=e.hiddenUpdates;for(a=d&~a;0<a;){var U=31-ut(a),k=1<<U;m[U]=0,x[U]=-1;var R=T[U];if(R!==null)for(T[U]=null,U=0;U<R.length;U++){var D=R[U];D!==null&&(D.lane&=-536870913)}a&=~k}n!==0&&ld(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~t))}function ld(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ut(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function id(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ut(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Jo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rd(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Yh(e.type))}function Cg(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var Aa=Math.random().toString(36).slice(2),nt="__reactFiber$"+Aa,ft="__reactProps$"+Aa,Cn="__reactContainer$"+Aa,Wo="__reactEvents$"+Aa,Rg="__reactListeners$"+Aa,Dg="__reactHandles$"+Aa,od="__reactResources$"+Aa,Rl="__reactMarker$"+Aa;function Fo(e){delete e[nt],delete e[ft],delete e[Wo],delete e[Rg],delete e[Dg]}function Rn(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Cn]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Eh(e);e!==null;){if(a=e[nt])return a;e=Eh(e)}return t}e=a,a=e.parentNode}return null}function Dn(e){if(e=e[nt]||e[Cn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function On(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Rl]=!0}var ud=new Set,cd={};function Ia(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(cd[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var Og=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sd={},dd={};function Ng(e){return at.call(dd,e)?!0:at.call(sd,e)?!1:Og.test(e)?dd[e]=!0:(sd[e]=!0,!1)}function Xi(e,t,a){if(Ng(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ia(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Io,fd;function Mn(e){if(Io===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||"",fd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Io+e+fd}var Po=!1;function eu(e,t){if(!e||Po)return"";Po=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(D){var R=D}Reflect.construct(e,[],k)}else{try{k.call()}catch(D){R=D}e.call(k.prototype)}}else{try{throw Error()}catch(D){R=D}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(D){if(D&&R&&typeof D.stack=="string")return[D.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),d=o[0],m=o[1];if(d&&m){var x=d.split(`
`),T=m.split(`
`);for(i=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;if(n===x.length||i===T.length)for(n=x.length-1,i=T.length-1;1<=n&&0<=i&&x[n]!==T[i];)i--;for(;1<=n&&0<=i;n--,i--)if(x[n]!==T[i]){if(n!==1||i!==1)do if(n--,i--,0>i||x[n]!==T[i]){var U=`
`+x[n].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=n&&0<=i);break}}}finally{Po=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Mn(a):""}function Mg(e){switch(e.tag){case 26:case 27:case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return eu(e.type,!1);case 11:return eu(e.type.render,!1);case 1:return eu(e.type,!0);case 31:return Mn("Activity");default:return""}}function md(e){try{var t="";do t+=Mg(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _g(e){var t=hd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){e._valueTracker||(e._valueTracker=_g(e))}function pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=hd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bg=/[\n"\\]/g;function Ot(e){return e.replace(Bg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tu(e,t,a,n,i,o,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?au(e,d,Dt(t)):a!=null?au(e,d,Dt(a)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Dt(m):e.removeAttribute("name")}function gd(e,t,a,n,i,o,d,m){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+Dt(a):"",t=t!=null?""+Dt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function au(e,t,a){t==="number"&&Zi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Dt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xd(e,t,a){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Dt(a):""}function vd(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(Oe(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Bn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ug=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Ug.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function bd(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&yd(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&yd(e,o,t[o])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return Lg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var lu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Un=null,Hn=null;function Sd(e){var t=Dn(e);if(t&&(e=t.stateNode)){var a=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(tu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ft]||null;if(!i)throw Error(c(90));tu(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&pd(n)}break e;case"textarea":xd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&_n(e,!!a.multiple,t,!1)}}}var ru=!1;function jd(e,t,a){if(ru)return e(t,a);ru=!0;try{var n=e(t);return n}finally{if(ru=!1,(Un!==null||Hn!==null)&&(Nr(),Un&&(t=Un,e=Hn,Hn=Un=null,Sd(t),e)))for(t=0;t<e.length;t++)Sd(e[t])}}function Ol(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ft]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(ra)try{var Nl={};Object.defineProperty(Nl,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Nl,Nl),window.removeEventListener("test",Nl,Nl)}catch{ou=!1}var Ta=null,uu=null,Ji=null;function wd(){if(Ji)return Ji;var e,t=uu,a=t.length,n,i="value"in Ta?Ta.value:Ta.textContent,o=i.length;for(e=0;e<a&&t[e]===i[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===i[o-n];n++);return Ji=i.slice(e,1<n?1-n:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function zd(){return!1}function mt(e){function t(a,n,i,o,d){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(o):o[m]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wi:zd,this.isPropagationStopped=zd,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=mt(Pa),Ml=E({},Pa,{view:0,detail:0}),kg=mt(Ml),cu,su,_l,Ii=E({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(cu=e.screenX-_l.screenX,su=e.screenY-_l.screenY):su=cu=0,_l=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Ed=mt(Ii),Yg=E({},Ii,{dataTransfer:0}),qg=mt(Yg),Gg=E({},Ml,{relatedTarget:0}),du=mt(Gg),Xg=E({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=mt(Xg),Vg=E({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zg=mt(Vg),Kg=E({},Pa,{data:0}),Ad=mt(Kg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function fu(){return Fg}var Ig=E({},Ml,{key:function(e){if(e.key){var t=Jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=mt(Ig),e0=E({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=mt(e0),t0=E({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),a0=mt(t0),n0=E({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=mt(n0),i0=E({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=mt(i0),o0=E({},Pa,{newState:0,oldState:0}),u0=mt(o0),c0=[9,13,27,32],mu=ra&&"CompositionEvent"in window,Bl=null;ra&&"documentMode"in document&&(Bl=document.documentMode);var s0=ra&&"TextEvent"in window&&!Bl,Cd=ra&&(!mu||Bl&&8<Bl&&11>=Bl),Rd=" ",Dd=!1;function Od(e,t){switch(e){case"keyup":return c0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function d0(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Dd=!0,Rd);case"textInput":return e=t.data,e===Rd&&Dd?null:e;default:return null}}function f0(e,t){if(Ln)return e==="compositionend"||!mu&&Od(e,t)?(e=wd(),Ji=uu=Ta=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cd&&t.locale!=="ko"?null:t.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m0[e.type]:t==="textarea"}function _d(e,t,a,n){Un?Hn?Hn.push(n):Hn=[n]:Un=n,t=Lr(t,"onChange"),0<t.length&&(a=new Fi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ul=null,Hl=null;function h0(e){ph(e,0)}function Pi(e){var t=Dl(e);if(pd(t))return e}function Bd(e,t){if(e==="change")return t}var Ud=!1;if(ra){var hu;if(ra){var pu="oninput"in document;if(!pu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),pu=typeof Hd.oninput=="function"}hu=pu}else hu=!1;Ud=hu&&(!document.documentMode||9<document.documentMode)}function Ld(){Ul&&(Ul.detachEvent("onpropertychange",kd),Hl=Ul=null)}function kd(e){if(e.propertyName==="value"&&Pi(Hl)){var t=[];_d(t,Hl,e,iu(e)),jd(h0,t)}}function p0(e,t,a){e==="focusin"?(Ld(),Ul=t,Hl=a,Ul.attachEvent("onpropertychange",kd)):e==="focusout"&&Ld()}function g0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Hl)}function x0(e,t){if(e==="click")return Pi(t)}function v0(e,t){if(e==="input"||e==="change")return Pi(t)}function y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:y0;function Ll(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!at.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qd(e,t){var a=Yd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yd(a)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zi(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var b0=ra&&"documentMode"in document&&11>=document.documentMode,kn=null,xu=null,kl=null,vu=!1;function Qd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||kn==null||kn!==Zi(n)||(n=kn,"selectionStart"in n&&gu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kl&&Ll(kl,n)||(kl=n,n=Lr(xu,"onSelect"),0<n.length&&(t=new Fi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=kn)))}function en(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yn={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},yu={},Vd={};ra&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function tn(e){if(yu[e])return yu[e];if(!Yn[e])return e;var t=Yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vd)return yu[e]=t[a];return e}var Zd=tn("animationend"),Kd=tn("animationiteration"),Jd=tn("animationstart"),S0=tn("transitionrun"),j0=tn("transitionstart"),w0=tn("transitioncancel"),$d=tn("transitionend"),Wd=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Gt(e,t){Wd.set(e,t),Ia(t,[e])}var Fd=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=Fd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:md(t)},Fd.set(e,t),t)}return{value:e,source:t,stack:md(t)}}var Mt=[],qn=0,Su=0;function er(){for(var e=qn,t=Su=qn=0;t<e;){var a=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var i=Mt[t];Mt[t++]=null;var o=Mt[t];if(Mt[t++]=null,n!==null&&i!==null){var d=n.pending;d===null?i.next=i:(i.next=d.next,d.next=i),n.pending=i}o!==0&&Id(a,i,o)}}function tr(e,t,a,n){Mt[qn++]=e,Mt[qn++]=t,Mt[qn++]=a,Mt[qn++]=n,Su|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ju(e,t,a,n){return tr(e,t,a,n),ar(e)}function Gn(e,t){return tr(e,null,null,t),ar(e)}function Id(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-ut(a),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),o):null}function ar(e){if(50<si)throw si=0,Cc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xn={};function z0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,n){return new z0(e,t,a,n)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nr(e,t,a,n,i,o){var d=0;if(n=e,typeof e=="function")wu(e)&&(d=1);else if(typeof e=="string")d=Ax(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=bt(31,a,t,i),e.elementType=he,e.lanes=o,e;case N:return an(a.children,i,o,t);case G:d=8,i|=24;break;case L:return e=bt(12,a,t,i|2),e.elementType=L,e.lanes=o,e;case Q:return e=bt(13,a,t,i),e.elementType=Q,e.lanes=o,e;case ae:return e=bt(19,a,t,i),e.elementType=ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case X:d=10;break e;case q:d=9;break e;case J:d=11;break e;case $:d=14;break e;case ge:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=bt(d,a,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function an(e,t,a,n){return e=bt(7,e,n,t),e.lanes=a,e}function zu(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function Eu(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qn=[],Vn=0,lr=null,ir=0,_t=[],Bt=0,nn=null,ua=1,ca="";function ln(e,t){Qn[Vn++]=ir,Qn[Vn++]=lr,lr=e,ir=t}function ef(e,t,a){_t[Bt++]=ua,_t[Bt++]=ca,_t[Bt++]=nn,nn=e;var n=ua;e=ca;var i=32-ut(n)-1;n&=~(1<<i),a+=1;var o=32-ut(t)+i;if(30<o){var d=i-i%5;o=(n&(1<<d)-1).toString(32),n>>=d,i-=d,ua=1<<32-ut(t)+i|a<<i|n,ca=o+e}else ua=1<<o|a<<i|n,ca=e}function Au(e){e.return!==null&&(ln(e,1),ef(e,1,0))}function Tu(e){for(;e===lr;)lr=Qn[--Vn],Qn[Vn]=null,ir=Qn[--Vn],Qn[Vn]=null;for(;e===nn;)nn=_t[--Bt],_t[Bt]=null,ca=_t[--Bt],_t[Bt]=null,ua=_t[--Bt],_t[Bt]=null}var ct=null,Ue=null,ye=!1,rn=null,Jt=!1,Cu=Error(c(519));function on(e){var t=Error(c(418,""));throw Gl(Nt(t,e)),Cu}function tf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[nt]=e,t[ft]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<fi.length;a++)me(fi[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),gd(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Vi(t);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),vd(t,n.value,n.defaultValue,n.children),Vi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||yh(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=kr),t=!0):t=!1,t||on(e)}function af(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:ct=ct.return}}function Yl(e){if(e!==ct)return!1;if(!ye)return af(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qc(e.type,e.memoizedProps)),a=!a),a&&Ue&&on(e),af(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ue=Qt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ue=null}}else t===27?(t=Ue,Xa(e.type)?(e=Jc,Jc=null,Ue=e):Ue=t):Ue=ct?Qt(e.stateNode.nextSibling):null;return!0}function ql(){Ue=ct=null,ye=!1}function nf(){var e=rn;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),rn=null),e}function Gl(e){rn===null?rn=[e]:rn.push(e)}var Ru=Y(null),un=null,sa=null;function Ca(e,t,a){K(Ru,t._currentValue),t._currentValue=a}function da(e){e._currentValue=Ru.current,Z(Ru)}function Du(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ou(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var d=i.child;o=o.firstContext;e:for(;o!==null;){var m=o;o=i;for(var x=0;x<t.length;x++)if(m.context===t[x]){o.lanes|=a,m=o.alternate,m!==null&&(m.lanes|=a),Du(o.return,a,e),n||(d=null);break e}o=m.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(c(341));d.lanes|=a,o=d.alternate,o!==null&&(o.lanes|=a),Du(d,a,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Xl(e,t,a,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var m=i.type;yt(i.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(i===Ne.current){if(d=i.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(vi):e=[vi])}i=i.return}e!==null&&Ou(t,e,a,n),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cn(e){un=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return lf(un,e)}function or(e,t){return un===null&&cn(e),lf(e,t)}function lf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(c(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return a}var E0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},A0=l.unstable_scheduleCallback,T0=l.unstable_NormalPriority,Ve={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new E0,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&A0(T0,function(){e.controller.abort()})}var Vl=null,Mu=0,Zn=0,Kn=null;function C0(e,t){if(Vl===null){var a=Vl=[];Mu=0,Zn=Bc(),Kn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Mu++,t.then(rf,rf),t}function rf(){if(--Mu===0&&Vl!==null){Kn!==null&&(Kn.status="fulfilled");var e=Vl;Vl=null,Zn=0,Kn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function R0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var of=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&C0(e,t),of!==null&&of(e,t)};var sn=Y(null);function _u(){var e=sn.current;return e!==null?e:Te.pooledCache}function ur(e,t){t===null?K(sn,sn.current):K(sn,t.pool)}function uf(){var e=_u();return e===null?null:{parent:Ve._currentValue,pool:e}}var Zl=Error(c(460)),cf=Error(c(474)),cr=Error(c(542)),Bu={then:function(){}};function sf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(){}function df(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sr,sr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mf(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mf(e),e}throw Kl=t,Zl}}var Kl=null;function ff(){if(Kl===null)throw Error(c(459));var e=Kl;return Kl=null,e}function mf(e){if(e===Zl||e===cr)throw Error(c(483))}var Ra=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Se&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=ar(e),Id(e,null,a),t}return tr(e,n,t,a),ar(e)}function Jl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,id(e,a)}}function Lu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?i=o=d:o=o.next=d,a=a.next}while(a!==null);o===null?i=o=t:o=o.next=t}else i=o=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ku=!1;function $l(){if(ku){var e=Kn;if(e!==null)throw e}}function Wl(e,t,a,n){ku=!1;var i=e.updateQueue;Ra=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var x=m,T=x.next;x.next=null,d===null?o=T:d.next=T,d=x;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==d&&(m===null?U.firstBaseUpdate=T:m.next=T,U.lastBaseUpdate=x))}if(o!==null){var k=i.baseState;d=0,U=T=x=null,m=o;do{var R=m.lane&-536870913,D=R!==m.lane;if(D?(pe&R)===R:(n&R)===R){R!==0&&R===Zn&&(ku=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ie=e,ne=m;R=t;var Ee=a;switch(ne.tag){case 1:if(ie=ne.payload,typeof ie=="function"){k=ie.call(Ee,k,R);break e}k=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ne.payload,R=typeof ie=="function"?ie.call(Ee,k,R):ie,R==null)break e;k=E({},k,R);break e;case 2:Ra=!0}}R=m.callback,R!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[R]:D.push(R))}else D={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(T=U=D,x=k):U=U.next=D,d|=R;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;D=m,m=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);U===null&&(x=k),i.baseState=x,i.firstBaseUpdate=T,i.lastBaseUpdate=U,o===null&&(i.shared.lanes=0),ka|=d,e.lanes=d,e.memoizedState=k}}function hf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function pf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hf(a[e],t)}var Jn=Y(null),dr=Y(0);function gf(e,t){e=va,K(dr,e),K(Jn,t),va=e|t.baseLanes}function Yu(){K(dr,va),K(Jn,Jn.current)}function qu(){va=dr.current,Z(Jn),Z(dr)}var Na=0,se=null,we=null,qe=null,fr=!1,$n=!1,dn=!1,mr=0,Fl=0,Wn=null,D0=0;function Le(){throw Error(c(321))}function Gu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Xu(e,t,a,n,i,o){return Na=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Pf:em,dn=!1,o=a(n,i),dn=!1,$n&&(o=vf(t,a,n,i)),xf(e),o}function xf(e){O.H=yr;var t=we!==null&&we.next!==null;if(Na=0,qe=we=se=null,fr=!1,Fl=0,Wn=null,t)throw Error(c(300));e===null||$e||(e=e.dependencies,e!==null&&rr(e)&&($e=!0))}function vf(e,t,a,n){se=e;var i=0;do{if($n&&(Wn=null),Fl=0,$n=!1,25<=i)throw Error(c(301));if(i+=1,qe=we=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=H0,o=t(a,n)}while($n);return o}function O0(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Il(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(se.flags|=1024),t}function Qu(){var e=mr!==0;return mr=0,e}function Vu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zu(e){if(fr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fr=!1}Na=0,qe=we=se=null,$n=!1,Fl=mr=0,Wn=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?se.memoizedState=qe=e:qe=qe.next=e,qe}function Ge(){if(we===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=qe===null?se.memoizedState:qe.next;if(t!==null)qe=t,we=e;else{if(e===null)throw se.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},qe===null?se.memoizedState=qe=e:qe=qe.next=e}return qe}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(e){var t=Fl;return Fl+=1,Wn===null&&(Wn=[]),e=df(Wn,e,t),t=se,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Pf:em),e}function hr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===X)return lt(e)}throw Error(c(438,String(e)))}function Ju(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ku(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=De;return t.index++,a}function fa(e,t){return typeof t=="function"?t(e):t}function pr(e){var t=Ge();return $u(t,we,e)}function $u(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var m=d=null,x=null,T=t,U=!1;do{var k=T.lane&-536870913;if(k!==T.lane?(pe&k)===k:(Na&k)===k){var R=T.revertLane;if(R===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),k===Zn&&(U=!0);else if((Na&R)===R){T=T.next,R===Zn&&(U=!0);continue}else k={lane:0,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(m=x=k,d=o):x=x.next=k,se.lanes|=R,ka|=R;k=T.action,dn&&a(o,k),o=T.hasEagerState?T.eagerState:a(o,k)}else R={lane:k,revertLane:T.revertLane,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},x===null?(m=x=R,d=o):x=x.next=R,se.lanes|=k,ka|=k;T=T.next}while(T!==null&&T!==t);if(x===null?d=o:x.next=m,!yt(o,e.memoizedState)&&($e=!0,U&&(a=Kn,a!==null)))throw a;e.memoizedState=o,e.baseState=d,e.baseQueue=x,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Wu(e){var t=Ge(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,o=t.memoizedState;if(i!==null){a.pending=null;var d=i=i.next;do o=e(o,d.action),d=d.next;while(d!==i);yt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function yf(e,t,a){var n=se,i=Ge(),o=ye;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!yt((we||i).memoizedState,a);d&&(i.memoizedState=a,$e=!0),i=i.queue;var m=jf.bind(null,n,i,e);if(Pl(2048,8,m,[e]),i.getSnapshot!==t||d||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Fn(9,gr(),Sf.bind(null,n,i,a,t),null),Te===null)throw Error(c(349));o||(Na&124)!==0||bf(n,t,a)}return a}function bf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=Ku(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sf(e,t,a,n){t.value=a,t.getSnapshot=n,wf(t)&&zf(e)}function jf(e,t,a){return a(function(){wf(t)&&zf(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function zf(e){var t=Gn(e,2);t!==null&&Et(t,e,2)}function Fu(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),dn){Kt(!0);try{a()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Ef(e,t,a,n){return e.baseState=a,$u(e,we,typeof n=="function"?n:fa)}function N0(e,t,a,n,i){if(vr(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};O.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Af(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Af(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=O.T,d={};O.T=d;try{var m=a(i,n),x=O.S;x!==null&&x(d,m),Tf(e,t,m)}catch(T){Iu(e,t,T)}finally{O.T=o}}else try{o=a(i,n),Tf(e,t,o)}catch(T){Iu(e,t,T)}}function Tf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Cf(e,t,n)},function(n){return Iu(e,t,n)}):Cf(e,t,a)}function Cf(e,t,a){t.status="fulfilled",t.value=a,Rf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Af(e,a)))}function Iu(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Rf(t),t=t.next;while(t!==n)}e.action=null}function Rf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Df(e,t){return t}function Of(e,t){if(ye){var a=Te.formState;if(a!==null){e:{var n=se;if(ye){if(Ue){t:{for(var i=Ue,o=Jt;i.nodeType!==8;){if(!o){i=null;break t}if(i=Qt(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){Ue=Qt(i.nextSibling),n=i.data==="F!";break e}}on(n)}n=!1}n&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:t},a.queue=n,a=Wf.bind(null,se,n),n.dispatch=a,n=Fu(!1),o=nc.bind(null,se,!1,n.queue),n=ht(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=N0.bind(null,se,i,o,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Nf(e){var t=Ge();return Mf(t,we,e)}function Mf(e,t,a){if(t=$u(e,t,Df)[0],e=pr(fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Il(t)}catch(d){throw d===Zl?cr:d}else n=t;t=Ge();var i=t.queue,o=i.dispatch;return a!==t.memoizedState&&(se.flags|=2048,Fn(9,gr(),M0.bind(null,i,a),null)),[n,o,e]}function M0(e,t){e.action=t}function _f(e){var t=Ge(),a=we;if(a!==null)return Mf(t,a,e);Ge(),t=t.memoizedState,a=Ge();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Fn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=se.updateQueue,t===null&&(t=Ku(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function gr(){return{destroy:void 0,resource:void 0}}function Bf(){return Ge().memoizedState}function xr(e,t,a,n){var i=ht();n=n===void 0?null:n,se.flags|=e,i.memoizedState=Fn(1|t,gr(),a,n)}function Pl(e,t,a,n){var i=Ge();n=n===void 0?null:n;var o=i.memoizedState.inst;we!==null&&n!==null&&Gu(n,we.memoizedState.deps)?i.memoizedState=Fn(t,o,a,n):(se.flags|=e,i.memoizedState=Fn(1|t,o,a,n))}function Uf(e,t){xr(8390656,8,e,t)}function Hf(e,t){Pl(2048,8,e,t)}function Lf(e,t){return Pl(4,2,e,t)}function kf(e,t){return Pl(4,4,e,t)}function Yf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qf(e,t,a){a=a!=null?a.concat([e]):null,Pl(4,4,Yf.bind(null,t,e),a)}function Pu(){}function Gf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Xf(e,t){var a=Ge();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gu(t,n[1]))return n[0];if(n=e(),dn){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[n,t],n}function ec(e,t,a){return a===void 0||(Na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Zm(),se.lanes|=e,ka|=e,a)}function Qf(e,t,a,n){return yt(a,t)?a:Jn.current!==null?(e=ec(e,a,n),yt(e,t)||($e=!0),e):(Na&42)===0?($e=!0,e.memoizedState=a):(e=Zm(),se.lanes|=e,ka|=e,t)}function Vf(e,t,a,n,i){var o=V.p;V.p=o!==0&&8>o?o:8;var d=O.T,m={};O.T=m,nc(e,!1,t,a);try{var x=i(),T=O.S;if(T!==null&&T(m,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var U=R0(x,n);ei(e,t,U,zt(e))}else ei(e,t,n,zt(e))}catch(k){ei(e,t,{then:function(){},status:"rejected",reason:k},zt())}finally{V.p=o,O.T=d}}function _0(){}function tc(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Zf(e).queue;Vf(e,i,t,te,a===null?_0:function(){return Kf(e),a(n)})}function Zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kf(e){var t=Zf(e).next.queue;ei(e,t,{},zt())}function ac(){return lt(vi)}function Jf(){return Ge().memoizedState}function $f(){return Ge().memoizedState}function B0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=Da(a);var n=Oa(t,e,a);n!==null&&(Et(n,t,a),Jl(n,t,a)),t={cache:Nu()},e.payload=t;return}t=t.return}}function U0(e,t,a){var n=zt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vr(e)?Ff(t,a):(a=ju(e,t,a,n),a!==null&&(Et(a,e,n),If(a,t,n)))}function Wf(e,t,a){var n=zt();ei(e,t,a,n)}function ei(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vr(e))Ff(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,m=o(d,a);if(i.hasEagerState=!0,i.eagerState=m,yt(m,d))return tr(e,t,i,0),Te===null&&er(),!1}catch{}finally{}if(a=ju(e,t,i,n),a!==null)return Et(a,e,n),If(a,t,n),!0}return!1}function nc(e,t,a,n){if(n={lane:2,revertLane:Bc(),action:n,hasEagerState:!1,eagerState:null,next:null},vr(e)){if(t)throw Error(c(479))}else t=ju(e,a,n,2),t!==null&&Et(t,e,2)}function vr(e){var t=e.alternate;return e===se||t!==null&&t===se}function Ff(e,t){$n=fr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function If(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,id(e,a)}}var yr={readContext:lt,use:hr,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le},Pf={readContext:lt,use:hr,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Uf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,xr(4194308,4,Yf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return xr(4194308,4,e,t)},useInsertionEffect:function(e,t){xr(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var n=e();if(dn){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ht();if(a!==void 0){var i=a(t);if(dn){Kt(!0);try{a(t)}finally{Kt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=U0.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,a=Wf.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,t){var a=ht();return ec(a,e,t)},useTransition:function(){var e=Fu(!1);return e=Vf.bind(null,se,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,i=ht();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Te===null)throw Error(c(349));(pe&124)!==0||bf(n,t,a)}i.memoizedState=a;var o={value:a,getSnapshot:t};return i.queue=o,Uf(jf.bind(null,n,o,e),[e]),n.flags|=2048,Fn(9,gr(),Sf.bind(null,n,o,a,t),null),a},useId:function(){var e=ht(),t=Te.identifierPrefix;if(ye){var a=ca,n=ua;a=(n&~(1<<32-ut(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=mr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=D0++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:Of,useActionState:Of,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=nc.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ju,useCacheRefresh:function(){return ht().memoizedState=B0.bind(null,se)}},em={readContext:lt,use:hr,useCallback:Gf,useContext:lt,useEffect:Hf,useImperativeHandle:qf,useInsertionEffect:Lf,useLayoutEffect:kf,useMemo:Xf,useReducer:pr,useRef:Bf,useState:function(){return pr(fa)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return Qf(a,we.memoizedState,e,t)},useTransition:function(){var e=pr(fa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:ac,useFormState:Nf,useActionState:Nf,useOptimistic:function(e,t){var a=Ge();return Ef(a,we,e,t)},useMemoCache:Ju,useCacheRefresh:$f},H0={readContext:lt,use:hr,useCallback:Gf,useContext:lt,useEffect:Hf,useImperativeHandle:qf,useInsertionEffect:Lf,useLayoutEffect:kf,useMemo:Xf,useReducer:Wu,useRef:Bf,useState:function(){return Wu(fa)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return we===null?ec(a,e,t):Qf(a,we.memoizedState,e,t)},useTransition:function(){var e=Wu(fa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:yf,useId:Jf,useHostTransitionStatus:ac,useFormState:_f,useActionState:_f,useOptimistic:function(e,t){var a=Ge();return we!==null?Ef(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:$f},In=null,ti=0;function br(e){var t=ti;return ti+=1,In===null&&(In=[]),df(In,e,t)}function ai(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tm(e){var t=e._init;return t(e._payload)}function am(e){function t(z,S){if(e){var A=z.deletions;A===null?(z.deletions=[S],z.flags|=16):A.push(S)}}function a(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function n(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function i(z,S){return z=oa(z,S),z.index=0,z.sibling=null,z}function o(z,S,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<S?(z.flags|=67108866,S):A):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,S,A,H){return S===null||S.tag!==6?(S=zu(A,z.mode,H),S.return=z,S):(S=i(S,A),S.return=z,S)}function x(z,S,A,H){var W=A.type;return W===N?U(z,S,A.props.children,H,A.key):S!==null&&(S.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ge&&tm(W)===S.type)?(S=i(S,A.props),ai(S,A),S.return=z,S):(S=nr(A.type,A.key,A.props,null,z.mode,H),ai(S,A),S.return=z,S)}function T(z,S,A,H){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=Eu(A,z.mode,H),S.return=z,S):(S=i(S,A.children||[]),S.return=z,S)}function U(z,S,A,H,W){return S===null||S.tag!==7?(S=an(A,z.mode,H,W),S.return=z,S):(S=i(S,A),S.return=z,S)}function k(z,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=zu(""+S,z.mode,A),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return A=nr(S.type,S.key,S.props,null,z.mode,A),ai(A,S),A.return=z,A;case _:return S=Eu(S,z.mode,A),S.return=z,S;case ge:var H=S._init;return S=H(S._payload),k(z,S,A)}if(Oe(S)||Be(S))return S=an(S,z.mode,A,null),S.return=z,S;if(typeof S.then=="function")return k(z,br(S),A);if(S.$$typeof===X)return k(z,or(z,S),A);Sr(z,S)}return null}function R(z,S,A,H){var W=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return W!==null?null:m(z,S,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return A.key===W?x(z,S,A,H):null;case _:return A.key===W?T(z,S,A,H):null;case ge:return W=A._init,A=W(A._payload),R(z,S,A,H)}if(Oe(A)||Be(A))return W!==null?null:U(z,S,A,H,null);if(typeof A.then=="function")return R(z,S,br(A),H);if(A.$$typeof===X)return R(z,S,or(z,A),H);Sr(z,A)}return null}function D(z,S,A,H,W){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return z=z.get(A)||null,m(S,z,""+H,W);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case C:return z=z.get(H.key===null?A:H.key)||null,x(S,z,H,W);case _:return z=z.get(H.key===null?A:H.key)||null,T(S,z,H,W);case ge:var de=H._init;return H=de(H._payload),D(z,S,A,H,W)}if(Oe(H)||Be(H))return z=z.get(A)||null,U(S,z,H,W,null);if(typeof H.then=="function")return D(z,S,A,br(H),W);if(H.$$typeof===X)return D(z,S,A,or(S,H),W);Sr(S,H)}return null}function ie(z,S,A,H){for(var W=null,de=null,ee=S,le=S=0,Fe=null;ee!==null&&le<A.length;le++){ee.index>le?(Fe=ee,ee=null):Fe=ee.sibling;var ve=R(z,ee,A[le],H);if(ve===null){ee===null&&(ee=Fe);break}e&&ee&&ve.alternate===null&&t(z,ee),S=o(ve,S,le),de===null?W=ve:de.sibling=ve,de=ve,ee=Fe}if(le===A.length)return a(z,ee),ye&&ln(z,le),W;if(ee===null){for(;le<A.length;le++)ee=k(z,A[le],H),ee!==null&&(S=o(ee,S,le),de===null?W=ee:de.sibling=ee,de=ee);return ye&&ln(z,le),W}for(ee=n(ee);le<A.length;le++)Fe=D(ee,z,le,A[le],H),Fe!==null&&(e&&Fe.alternate!==null&&ee.delete(Fe.key===null?le:Fe.key),S=o(Fe,S,le),de===null?W=Fe:de.sibling=Fe,de=Fe);return e&&ee.forEach(function(Ja){return t(z,Ja)}),ye&&ln(z,le),W}function ne(z,S,A,H){if(A==null)throw Error(c(151));for(var W=null,de=null,ee=S,le=S=0,Fe=null,ve=A.next();ee!==null&&!ve.done;le++,ve=A.next()){ee.index>le?(Fe=ee,ee=null):Fe=ee.sibling;var Ja=R(z,ee,ve.value,H);if(Ja===null){ee===null&&(ee=Fe);break}e&&ee&&Ja.alternate===null&&t(z,ee),S=o(Ja,S,le),de===null?W=Ja:de.sibling=Ja,de=Ja,ee=Fe}if(ve.done)return a(z,ee),ye&&ln(z,le),W;if(ee===null){for(;!ve.done;le++,ve=A.next())ve=k(z,ve.value,H),ve!==null&&(S=o(ve,S,le),de===null?W=ve:de.sibling=ve,de=ve);return ye&&ln(z,le),W}for(ee=n(ee);!ve.done;le++,ve=A.next())ve=D(ee,z,le,ve.value,H),ve!==null&&(e&&ve.alternate!==null&&ee.delete(ve.key===null?le:ve.key),S=o(ve,S,le),de===null?W=ve:de.sibling=ve,de=ve);return e&&ee.forEach(function(Lx){return t(z,Lx)}),ye&&ln(z,le),W}function Ee(z,S,A,H){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case C:e:{for(var W=A.key;S!==null;){if(S.key===W){if(W=A.type,W===N){if(S.tag===7){a(z,S.sibling),H=i(S,A.props.children),H.return=z,z=H;break e}}else if(S.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===ge&&tm(W)===S.type){a(z,S.sibling),H=i(S,A.props),ai(H,A),H.return=z,z=H;break e}a(z,S);break}else t(z,S);S=S.sibling}A.type===N?(H=an(A.props.children,z.mode,H,A.key),H.return=z,z=H):(H=nr(A.type,A.key,A.props,null,z.mode,H),ai(H,A),H.return=z,z=H)}return d(z);case _:e:{for(W=A.key;S!==null;){if(S.key===W)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){a(z,S.sibling),H=i(S,A.children||[]),H.return=z,z=H;break e}else{a(z,S);break}else t(z,S);S=S.sibling}H=Eu(A,z.mode,H),H.return=z,z=H}return d(z);case ge:return W=A._init,A=W(A._payload),Ee(z,S,A,H)}if(Oe(A))return ie(z,S,A,H);if(Be(A)){if(W=Be(A),typeof W!="function")throw Error(c(150));return A=W.call(A),ne(z,S,A,H)}if(typeof A.then=="function")return Ee(z,S,br(A),H);if(A.$$typeof===X)return Ee(z,S,or(z,A),H);Sr(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(a(z,S.sibling),H=i(S,A),H.return=z,z=H):(a(z,S),H=zu(A,z.mode,H),H.return=z,z=H),d(z)):a(z,S)}return function(z,S,A,H){try{ti=0;var W=Ee(z,S,A,H);return In=null,W}catch(ee){if(ee===Zl||ee===cr)throw ee;var de=bt(29,ee,null,z.mode);return de.lanes=H,de.return=z,de}finally{}}}var Pn=am(!0),nm=am(!1),Ut=Y(null),$t=null;function Ma(e){var t=e.alternate;K(Ze,Ze.current&1),K(Ut,e),$t===null&&(t===null||Jn.current!==null||t.memoizedState!==null)&&($t=e)}function lm(e){if(e.tag===22){if(K(Ze,Ze.current),K(Ut,e),$t===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&($t=e)}}else _a()}function _a(){K(Ze,Ze.current),K(Ut,Ut.current)}function ma(e){Z(Ut),$t===e&&($t=null),Z(Ze)}var Ze=Y(0);function jr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Kc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function lc(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ic={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=zt(),i=Da(n);i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(Et(t,e,n),Jl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=zt(),i=Da(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(Et(t,e,n),Jl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),n=Da(a);n.tag=2,t!=null&&(n.callback=t),t=Oa(e,n,a),t!==null&&(Et(t,e,a),Jl(t,e,a))}};function im(e,t,a,n,i,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,d):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,n)||!Ll(i,o):!0}function rm(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ic.enqueueReplaceState(t,t.state,null)}function fn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var wr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function om(e){wr(e)}function um(e){console.error(e)}function cm(e){wr(e)}function zr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function sm(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function rc(e,t,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){zr(e,t)},a}function dm(e){return e=Da(e),e.tag=3,e}function fm(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){sm(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){sm(t,a,n),typeof i!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function L0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Xl(t,a,i,!0),a=Ut.current,a!==null){switch(a.tag){case 13:return $t===null?Dc():a.alternate===null&&He===0&&(He=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Bu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Nc(e,n,i)),!1;case 22:return a.flags|=65536,n===Bu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Nc(e,n,i)),!1}throw Error(c(435,a.tag))}return Nc(e,n,i),Dc(),!1}if(ye)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Cu&&(e=Error(c(422),{cause:n}),Gl(Nt(e,a)))):(n!==Cu&&(t=Error(c(423),{cause:n}),Gl(Nt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Nt(n,a),i=rc(e.stateNode,n,i),Lu(e,i),He!==4&&(He=2)),!1;var o=Error(c(520),{cause:n});if(o=Nt(o,a),ci===null?ci=[o]:ci.push(o),He!==4&&(He=2),t===null)return!0;n=Nt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=rc(a.stateNode,n,e),Lu(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))))return a.flags|=65536,i&=-i,a.lanes|=i,i=dm(i),fm(i,e,a,n),Lu(a,i),!1}a=a.return}while(a!==null);return!1}var mm=Error(c(461)),$e=!1;function Pe(e,t,a,n){t.child=e===null?nm(t,null,a,n):Pn(t,e.child,a,n)}function hm(e,t,a,n,i){a=a.render;var o=t.ref;if("ref"in n){var d={};for(var m in n)m!=="ref"&&(d[m]=n[m])}else d=n;return cn(t),n=Xu(e,t,a,d,o,i),m=Qu(),e!==null&&!$e?(Vu(e,t,i),ha(e,t,i)):(ye&&m&&Au(t),t.flags|=1,Pe(e,t,n,i),t.child)}function pm(e,t,a,n,i){if(e===null){var o=a.type;return typeof o=="function"&&!wu(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,gm(e,t,o,n,i)):(e=nr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!hc(e,i)){var d=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(d,n)&&e.ref===t.ref)return ha(e,t,i)}return t.flags|=1,e=oa(o,n),e.ref=t.ref,e.return=t,t.child=e}function gm(e,t,a,n,i){if(e!==null){var o=e.memoizedProps;if(Ll(o,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=o,hc(e,i))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,ha(e,t,i)}return oc(e,t,a,n,i)}function xm(e,t,a){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return vm(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ur(t,o!==null?o.cachePool:null),o!==null?gf(t,o):Yu(),lm(t);else return t.lanes=t.childLanes=536870912,vm(e,t,o!==null?o.baseLanes|a:a,a)}else o!==null?(ur(t,o.cachePool),gf(t,o),_a(),t.memoizedState=null):(e!==null&&ur(t,null),Yu(),_a());return Pe(e,t,i,a),t.child}function vm(e,t,a,n){var i=_u();return i=i===null?null:{parent:Ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ur(t,null),Yu(),lm(t),e!==null&&Xl(e,t,n,!0),null}function Er(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oc(e,t,a,n,i){return cn(t),a=Xu(e,t,a,n,void 0,i),n=Qu(),e!==null&&!$e?(Vu(e,t,i),ha(e,t,i)):(ye&&n&&Au(t),t.flags|=1,Pe(e,t,a,i),t.child)}function ym(e,t,a,n,i,o){return cn(t),t.updateQueue=null,a=vf(t,n,a,i),xf(e),n=Qu(),e!==null&&!$e?(Vu(e,t,o),ha(e,t,o)):(ye&&n&&Au(t),t.flags|=1,Pe(e,t,a,o),t.child)}function bm(e,t,a,n,i){if(cn(t),t.stateNode===null){var o=Xn,d=a.contextType;typeof d=="object"&&d!==null&&(o=lt(d)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ic,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},Uu(t),d=a.contextType,o.context=typeof d=="object"&&d!==null?lt(d):Xn,o.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(lc(t,a,d,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&ic.enqueueReplaceState(o,o.state,null),Wl(t,n,o,i),$l(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var m=t.memoizedProps,x=fn(a,m);o.props=x;var T=o.context,U=a.contextType;d=Xn,typeof U=="object"&&U!==null&&(d=lt(U));var k=a.getDerivedStateFromProps;U=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m||T!==d)&&rm(t,o,n,d),Ra=!1;var R=t.memoizedState;o.state=R,Wl(t,n,o,i),$l(),T=t.memoizedState,m||R!==T||Ra?(typeof k=="function"&&(lc(t,a,k,n),T=t.memoizedState),(x=Ra||im(t,a,x,n,R,T,d))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=T),o.props=n,o.state=T,o.context=d,n=x):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Hu(e,t),d=t.memoizedProps,U=fn(a,d),o.props=U,k=t.pendingProps,R=o.context,T=a.contextType,x=Xn,typeof T=="object"&&T!==null&&(x=lt(T)),m=a.getDerivedStateFromProps,(T=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==k||R!==x)&&rm(t,o,n,x),Ra=!1,R=t.memoizedState,o.state=R,Wl(t,n,o,i),$l();var D=t.memoizedState;d!==k||R!==D||Ra||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof m=="function"&&(lc(t,a,m,n),D=t.memoizedState),(U=Ra||im(t,a,U,n,R,D,x)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(T||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,D,x),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,D,x)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),o.props=n,o.state=D,o.context=x,n=U):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Er(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,a,i)):Pe(e,t,a,i),t.memoizedState=o.state,e=t.child):e=ha(e,t,i),e}function Sm(e,t,a,n){return ql(),t.flags|=256,Pe(e,t,a,n),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:uf()}}function sc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ht),e}function jm(e,t,a){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?Ma(t):_a(),ye){var m=Ue,x;if(x=m){e:{for(x=m,m=Jt;x.nodeType!==8;){if(!m){m=null;break e}if(x=Qt(x.nextSibling),x===null){m=null;break e}}m=x}m!==null?(t.memoizedState={dehydrated:m,treeContext:nn!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},x=bt(18,null,null,0),x.stateNode=m,x.return=t,t.child=x,ct=t,Ue=null,x=!0):x=!1}x||on(t)}if(m=t.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return Kc(m)?t.lanes=32:t.lanes=536870912,null;ma(t)}return m=n.children,n=n.fallback,i?(_a(),i=t.mode,m=Ar({mode:"hidden",children:m},i),n=an(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,i=t.child,i.memoizedState=cc(a),i.childLanes=sc(e,d,a),t.memoizedState=uc,n):(Ma(t),dc(t,m))}if(x=e.memoizedState,x!==null&&(m=x.dehydrated,m!==null)){if(o)t.flags&256?(Ma(t),t.flags&=-257,t=fc(e,t,a)):t.memoizedState!==null?(_a(),t.child=e.child,t.flags|=128,t=null):(_a(),i=n.fallback,m=t.mode,n=Ar({mode:"visible",children:n.children},m),i=an(i,m,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Pn(t,e.child,null,a),n=t.child,n.memoizedState=cc(a),n.childLanes=sc(e,d,a),t.memoizedState=uc,t=i);else if(Ma(t),Kc(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var T=d.dgst;d=T,n=Error(c(419)),n.stack="",n.digest=d,Gl({value:n,source:null,stack:null}),t=fc(e,t,a)}else if($e||Xl(e,t,a,!1),d=(a&e.childLanes)!==0,$e||d){if(d=Te,d!==null&&(n=a&-a,n=(n&42)!==0?1:Jo(n),n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==x.retryLane))throw x.retryLane=n,Gn(e,n),Et(d,e,n),mm;m.data==="$?"||Dc(),t=fc(e,t,a)}else m.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ue=Qt(m.nextSibling),ct=t,ye=!0,rn=null,Jt=!1,e!==null&&(_t[Bt++]=ua,_t[Bt++]=ca,_t[Bt++]=nn,ua=e.id,ca=e.overflow,nn=t),t=dc(t,n.children),t.flags|=4096);return t}return i?(_a(),i=n.fallback,m=t.mode,x=e.child,T=x.sibling,n=oa(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,T!==null?i=oa(T,i):(i=an(i,m,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,m=e.child.memoizedState,m===null?m=cc(a):(x=m.cachePool,x!==null?(T=Ve._currentValue,x=x.parent!==T?{parent:T,pool:T}:x):x=uf(),m={baseLanes:m.baseLanes|a,cachePool:x}),i.memoizedState=m,i.childLanes=sc(e,d,a),t.memoizedState=uc,n):(Ma(t),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function dc(e,t){return t=Ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ar(e,t){return e=bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,t,a){return Pn(t,e.child,null,a),e=dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Du(e.return,t,a)}function mc(e,t,a,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i)}function zm(e,t,a){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Pe(e,t,n.children,a),n=Ze.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,a,t);else if(e.tag===19)wm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(K(Ze,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&jr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),mc(t,!1,i,a,o);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}mc(t,!0,a,null,o);break;case"together":mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=oa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function k0(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Ca(t,Ve,e.memoizedState.cache),ql();break;case 27:case 5:Zt(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?jm(e,t,a):(Ma(t),e=ha(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Xl(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return zm(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(Ze,Ze.current),n)break;return null;case 22:case 23:return t.lanes=0,xm(e,t,a);case 24:Ca(t,Ve,e.memoizedState.cache)}return ha(e,t,a)}function Em(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!hc(e,a)&&(t.flags&128)===0)return $e=!1,k0(e,t,a);$e=(e.flags&131072)!==0}else $e=!1,ye&&(t.flags&1048576)!==0&&ef(t,ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")wu(n)?(e=fn(n,e),t.tag=1,t=bm(null,t,n,e,a)):(t.tag=0,t=oc(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===J){t.tag=11,t=hm(null,t,n,e,a);break e}else if(i===$){t.tag=14,t=pm(null,t,n,e,a);break e}}throw t=dt(n)||n,Error(c(306,t,""))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=fn(n,t.pendingProps),bm(e,t,n,i,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,Hu(e,t),Wl(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ca(t,Ve,n),n!==o.cache&&Ou(t,[Ve],a,!0),$l(),n=d.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sm(e,t,n,a);break e}else if(n!==i){i=Nt(Error(c(424)),t),Gl(i),t=Sm(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Qt(e.firstChild),ct=t,ye=!0,rn=null,Jt=!0,a=nm(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ql(),n===i){t=ha(e,t,a);break e}Pe(e,t,n,a)}t=t.child}return t;case 26:return Er(e,t),e===null?(a=Rh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,n=Yr(I.current).createElement(a),n[nt]=t,n[ft]=e,tt(n,a,e),Je(n),t.stateNode=n):t.memoizedState=Rh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zt(t),e===null&&ye&&(n=t.stateNode=Ah(t.type,t.pendingProps,I.current),ct=t,Jt=!0,i=Ue,Xa(t.type)?(Jc=i,Ue=Qt(n.firstChild)):Ue=i),Pe(e,t,t.pendingProps.children,a),Er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=n=Ue)&&(n=mx(n,t.type,t.pendingProps,Jt),n!==null?(t.stateNode=n,ct=t,Ue=Qt(n.firstChild),Jt=!1,i=!0):i=!1),i||on(t)),Zt(t),i=t.type,o=t.pendingProps,d=e!==null?e.memoizedProps:null,n=o.children,Qc(i,o)?n=null:d!==null&&Qc(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Xu(e,t,O0,null,null,a),vi._currentValue=i),Er(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&ye&&((e=a=Ue)&&(a=hx(a,t.pendingProps,Jt),a!==null?(t.stateNode=a,ct=t,Ue=null,e=!0):e=!1),e||on(t)),null;case 13:return jm(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Pn(t,null,n,a):Pe(e,t,n,a),t.child;case 11:return hm(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ca(t,t.type,n.value),Pe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,cn(t),i=lt(i),n=n(i),t.flags|=1,Pe(e,t,n,a),t.child;case 14:return pm(e,t,t.type,t.pendingProps,a);case 15:return gm(e,t,t.type,t.pendingProps,a);case 19:return zm(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Ar(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=oa(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return xm(e,t,a);case 24:return cn(t),n=lt(Ve),e===null?(i=_u(),i===null&&(i=Te,o=Nu(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=a),i=o),t.memoizedState={parent:n,cache:i},Uu(t),Ca(t,Ve,i)):((e.lanes&a)!==0&&(Hu(e,t),Wl(t,null,null,a),$l()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ca(t,Ve,n)):(n=o.cache,Ca(t,Ve,n),n!==i.cache&&Ou(t,[Ve],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function pa(e){e.flags|=4}function Am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_h(t)){if(t=Ut.current,t!==null&&((pe&4194048)===pe?$t!==null:(pe&62914560)!==pe&&(pe&536870912)===0||t!==$t))throw Kl=Bu,cf;e.flags|=8192}}function Tr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nd():536870912,e.lanes|=t,nl|=t)}function ni(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Y0(e,t,a){var n=t.pendingProps;switch(Tu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),da(Ve),Qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yl(t)?pa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nf())),Me(t),null;case 26:return a=t.memoizedState,e===null?(pa(t),a!==null?(Me(t),Am(t,a)):(Me(t),t.flags&=-16777217)):a?a!==e.memoizedState?(pa(t),Me(t),Am(t,a)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==n&&pa(t),Me(t),t.flags&=-16777217),null;case 27:Ct(t),a=I.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&pa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=F.current,Yl(t)?tf(t):(e=Ah(i,n,a),t.stateNode=e,pa(t))}return Me(t),null;case 5:if(Ct(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&pa(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=F.current,Yl(t))tf(t);else{switch(i=Yr(I.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[nt]=t,e[ft]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(tt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&pa(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&pa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=I.current,Yl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ct,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[nt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||yh(e.nodeValue,a)),e||on(t)}else e=Yr(e).createTextNode(n),e[nt]=t,t.stateNode=e}return Me(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[nt]=t}else ql(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else i=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ma(t),t):(ma(t),null)}if(ma(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Tr(t,t.updateQueue),Me(t),null;case 4:return Qe(),e===null&&kc(t.stateNode.containerInfo),Me(t),null;case 10:return da(t.type),Me(t),null;case 19:if(Z(Ze),i=t.memoizedState,i===null)return Me(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)ni(i,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=jr(e),o!==null){for(t.flags|=128,ni(i,!1),e=o.updateQueue,t.updateQueue=e,Tr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Pd(a,e),a=a.sibling;return K(Ze,Ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&vt()>Dr&&(t.flags|=128,n=!0,ni(i,!1),t.lanes=4194304)}else{if(!n)if(e=jr(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Tr(t,e),ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return Me(t),null}else 2*vt()-i.renderingStartTime>Dr&&a!==536870912&&(t.flags|=128,n=!0,ni(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=vt(),t.sibling=null,e=Ze.current,K(Ze,n?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return ma(t),qu(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Tr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Z(sn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),da(Ve),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function q0(e,t){switch(Tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(Ve),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ct(t),null;case 13:if(ma(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ql()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Ze),null;case 4:return Qe(),null;case 10:return da(t.type),null;case 22:case 23:return ma(t),qu(),e!==null&&Z(sn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(Ve),null;case 25:return null;default:return null}}function Tm(e,t){switch(Tu(t),t.tag){case 3:da(Ve),Qe();break;case 26:case 27:case 5:Ct(t);break;case 4:Qe();break;case 13:ma(t);break;case 19:Z(Ze);break;case 10:da(t.type);break;case 22:case 23:ma(t),qu(),e!==null&&Z(sn);break;case 24:da(Ve)}}function li(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var o=a.create,d=a.inst;n=o(),d.destroy=n}a=a.next}while(a!==i)}}catch(m){Ae(t,t.return,m)}}function Ba(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var d=n.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,i=t;var x=a,T=m;try{T()}catch(U){Ae(i,x,U)}}}n=n.next}while(n!==o)}}catch(U){Ae(t,t.return,U)}}function Cm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pf(t,a)}catch(n){Ae(e,e.return,n)}}}function Rm(e,t,a){a.props=fn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ae(e,t,n)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ae(e,t,i)}}function Wt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ae(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ae(e,t,i)}else a.current=null}function Dm(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ae(e,e.return,i)}}function pc(e,t,a){try{var n=e.stateNode;ux(n,e.type,a,t),n[ft]=t}catch(i){Ae(e,e.return,i)}}function Om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kr));else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(xc(e,t,a),e=e.sibling;e!==null;)xc(e,t,a),e=e.sibling}function Cr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cr(e,t,a),e=e.sibling;e!==null;)Cr(e,t,a),e=e.sibling}function Nm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);tt(t,n,a),t[nt]=e,t[ft]=a}catch(o){Ae(e,e.return,o)}}var ga=!1,ke=!1,vc=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,We=null;function G0(e,t){if(e=e.containerInfo,Gc=Zr,e=Xd(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var d=0,m=-1,x=-1,T=0,U=0,k=e,R=null;t:for(;;){for(var D;k!==a||i!==0&&k.nodeType!==3||(m=d+i),k!==o||n!==0&&k.nodeType!==3||(x=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(D=k.firstChild)!==null;)R=k,k=D;for(;;){if(k===e)break t;if(R===a&&++T===i&&(m=d),R===o&&++U===n&&(x=d),(D=k.nextSibling)!==null)break;k=R,R=k.parentNode}k=D}a=m===-1||x===-1?null:{start:m,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:e,selectionRange:a},Zr=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,i=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var ie=fn(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ie,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ae(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function _m(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(e,a),n&4&&li(5,a);break;case 1:if(Ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Ae(a,a.return,d)}else{var i=fn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ae(a,a.return,d)}}n&64&&Cm(a),n&512&&ii(a,a.return);break;case 3:if(Ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pf(e,t)}catch(d){Ae(a,a.return,d)}}break;case 27:t===null&&n&4&&Nm(a);case 26:case 5:Ua(e,a),t===null&&n&4&&Dm(a),n&512&&ii(a,a.return);break;case 12:Ua(e,a);break;case 13:Ua(e,a),n&4&&Hm(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=F0.bind(null,a),px(e,a))));break;case 22:if(n=a.memoizedState!==null||ga,!n){t=t!==null&&t.memoizedState!==null||ke,i=ga;var o=ke;ga=n,(ke=t)&&!o?Ha(e,a,(a.subtreeFlags&8772)!==0):Ua(e,a),ga=i,ke=o}break;case 30:break;default:Ua(e,a)}}function Bm(e){var t=e.alternate;t!==null&&(e.alternate=null,Bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,pt=!1;function xa(e,t,a){for(a=a.child;a!==null;)Um(e,t,a),a=a.sibling}function Um(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ea,a)}catch{}switch(a.tag){case 26:ke||Wt(a,t),xa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Wt(a,t);var n=Re,i=pt;Xa(a.type)&&(Re=a.stateNode,pt=!1),xa(e,t,a),hi(a.stateNode),Re=n,pt=i;break;case 5:ke||Wt(a,t);case 6:if(n=Re,i=pt,Re=null,xa(e,t,a),Re=n,pt=i,Re!==null)if(pt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(o){Ae(a,t,o)}else try{Re.removeChild(a.stateNode)}catch(o){Ae(a,t,o)}break;case 18:Re!==null&&(pt?(e=Re,zh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ji(e)):zh(Re,a.stateNode));break;case 4:n=Re,i=pt,Re=a.stateNode.containerInfo,pt=!0,xa(e,t,a),Re=n,pt=i;break;case 0:case 11:case 14:case 15:ke||Ba(2,a,t),ke||Ba(4,a,t),xa(e,t,a);break;case 1:ke||(Wt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Rm(a,t,n)),xa(e,t,a);break;case 21:xa(e,t,a);break;case 22:ke=(n=ke)||a.memoizedState!==null,xa(e,t,a),ke=n;break;default:xa(e,t,a)}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ji(e)}catch(a){Ae(t,t.return,a)}}function X0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mm),t;default:throw Error(c(435,e.tag))}}function yc(e,t){var a=X0(e);t.forEach(function(n){var i=I0.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function St(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],o=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(Xa(m.type)){Re=m.stateNode,pt=!1;break e}break;case 5:Re=m.stateNode,pt=!1;break e;case 3:case 4:Re=m.stateNode.containerInfo,pt=!0;break e}m=m.return}if(Re===null)throw Error(c(160));Um(o,d,i),Re=null,pt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Lm(t,e),t=t.sibling}var Xt=null;function Lm(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),jt(e),n&4&&(Ba(3,e,e.return),li(3,e),Ba(5,e,e.return));break;case 1:St(t,e),jt(e),n&512&&(ke||a===null||Wt(a,a.return)),n&64&&ga&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Xt;if(St(t,e),jt(e),n&512&&(ke||a===null||Wt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Rl]||o[nt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),tt(o,n,a),o[nt]=e,Je(o),n=o;break e;case"link":var d=Nh("link","href",i).get(n+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(o=d[m],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}o=i.createElement(n),tt(o,n,a),i.head.appendChild(o);break;case"meta":if(d=Nh("meta","content",i).get(n+(a.content||""))){for(m=0;m<d.length;m++)if(o=d[m],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}o=i.createElement(n),tt(o,n,a),i.head.appendChild(o);break;default:throw Error(c(468,n))}o[nt]=e,Je(o),n=o}e.stateNode=n}else Mh(i,e.type,e.stateNode);else e.stateNode=Oh(i,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?Mh(i,e.type,e.stateNode):Oh(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pc(e,e.memoizedProps,a.memoizedProps)}break;case 27:St(t,e),jt(e),n&512&&(ke||a===null||Wt(a,a.return)),a!==null&&n&4&&pc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(St(t,e),jt(e),n&512&&(ke||a===null||Wt(a,a.return)),e.flags&32){i=e.stateNode;try{Bn(i,"")}catch(D){Ae(e,e.return,D)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,pc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(vc=!0);break;case 6:if(St(t,e),jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(D){Ae(e,e.return,D)}}break;case 3:if(Xr=null,i=Xt,Xt=qr(t.containerInfo),St(t,e),Xt=i,jt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ji(t.containerInfo)}catch(D){Ae(e,e.return,D)}vc&&(vc=!1,km(e));break;case 4:n=Xt,Xt=qr(e.stateNode.containerInfo),St(t,e),jt(e),Xt=n;break;case 12:St(t,e),jt(e);break;case 13:St(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ec=vt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 22:i=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,T=ga,U=ke;if(ga=T||i,ke=U||x,St(t,e),ke=U,ga=T,jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||x||ga||ke||mn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(o=x.stateNode,i)d=o.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=x.stateNode;var k=x.memoizedProps.style,R=k!=null&&k.hasOwnProperty("display")?k.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(D){Ae(x,x.return,D)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(D){Ae(x,x.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,yc(e,a))));break;case 19:St(t,e),jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,yc(e,n)));break;case 30:break;case 21:break;default:St(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Om(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,o=gc(e);Cr(e,o,i);break;case 5:var d=a.stateNode;a.flags&32&&(Bn(d,""),a.flags&=-33);var m=gc(e);Cr(e,m,d);break;case 3:case 4:var x=a.stateNode.containerInfo,T=gc(e);xc(e,T,x);break;default:throw Error(c(161))}}catch(U){Ae(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;km(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_m(e,t.alternate,t),t=t.sibling}function mn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ba(4,t,t.return),mn(t);break;case 1:Wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Rm(t,t.return,a),mn(t);break;case 27:hi(t.stateNode);case 26:case 5:Wt(t,t.return),mn(t);break;case 22:t.memoizedState===null&&mn(t);break;case 30:mn(t);break;default:mn(t)}e=e.sibling}}function Ha(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,d=o.flags;switch(o.tag){case 0:case 11:case 15:Ha(i,o,a),li(4,o);break;case 1:if(Ha(i,o,a),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(T){Ae(n,n.return,T)}if(n=o,i=n.updateQueue,i!==null){var m=n.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)hf(x[i],m)}catch(T){Ae(n,n.return,T)}}a&&d&64&&Cm(o),ii(o,o.return);break;case 27:Nm(o);case 26:case 5:Ha(i,o,a),a&&n===null&&d&4&&Dm(o),ii(o,o.return);break;case 12:Ha(i,o,a);break;case 13:Ha(i,o,a),a&&d&4&&Hm(i,o);break;case 22:o.memoizedState===null&&Ha(i,o,a),ii(o,o.return);break;case 30:break;default:Ha(i,o,a)}t=t.sibling}}function bc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function Sc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ym(e,t,a,n),t=t.sibling}function Ym(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),i&2048&&li(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(i&2048){Ft(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,d=o.id,m=o.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ae(t,t.return,x)}}else Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,d=t.alternate,t.memoizedState!==null?o._visibility&2?Ft(e,t,a,n):ri(e,t):o._visibility&2?Ft(e,t,a,n):(o._visibility|=2,el(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&bc(d,t);break;case 24:Ft(e,t,a,n),i&2048&&Sc(t.alternate,t);break;default:Ft(e,t,a,n)}}function el(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,d=t,m=a,x=n,T=d.flags;switch(d.tag){case 0:case 11:case 15:el(o,d,m,x,i),li(8,d);break;case 23:break;case 22:var U=d.stateNode;d.memoizedState!==null?U._visibility&2?el(o,d,m,x,i):ri(o,d):(U._visibility|=2,el(o,d,m,x,i)),i&&T&2048&&bc(d.alternate,d);break;case 24:el(o,d,m,x,i),i&&T&2048&&Sc(d.alternate,d);break;default:el(o,d,m,x,i)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ri(a,n),i&2048&&bc(n.alternate,n);break;case 24:ri(a,n),i&2048&&Sc(n.alternate,n);break;default:ri(a,n)}t=t.sibling}}var oi=8192;function tl(e){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 26:tl(e),e.flags&oi&&e.memoizedState!==null&&Cx(Xt,e.memoizedState,e.memoizedProps);break;case 5:tl(e);break;case 3:case 4:var t=Xt;Xt=qr(e.stateNode.containerInfo),tl(e),Xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=oi,oi=16777216,tl(e),oi=t):tl(e));break;default:tl(e)}}function Gm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,Qm(n,e)}Gm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rr(e)):ui(e);break;default:ui(e)}}function Rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,Qm(n,e)}Gm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ba(8,t,t.return),Rr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Rr(t));break;default:Rr(t)}e=e.sibling}}function Qm(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,We=n;else e:for(a=e;We!==null;){n=We;var i=n.sibling,o=n.return;if(Bm(n),n===a){We=null;break e}if(i!==null){i.return=o,We=i;break e}We=o}}}var Q0={getCacheForType:function(e){var t=lt(Ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},V0=typeof WeakMap=="function"?WeakMap:Map,Se=0,Te=null,fe=null,pe=0,je=0,wt=null,La=!1,al=!1,jc=!1,va=0,He=0,ka=0,hn=0,wc=0,Ht=0,nl=0,ci=null,gt=null,zc=!1,Ec=0,Dr=1/0,Or=null,Ya=null,et=0,qa=null,ll=null,il=0,Ac=0,Tc=null,Vm=null,si=0,Cc=null;function zt(){if((Se&2)!==0&&pe!==0)return pe&-pe;if(O.T!==null){var e=Zn;return e!==0?e:Bc()}return rd()}function Zm(){Ht===0&&(Ht=(pe&536870912)===0||ye?Tn():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Ht}function Et(e,t,a){(e===Te&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(rl(e,0),Ga(e,pe,Ht,!1)),Cl(e,a),((Se&2)===0||e!==Te)&&(e===Te&&((Se&2)===0&&(hn|=a),He===4&&Ga(e,pe,Ht,!1)),It(e))}function Km(e,t,a){if((Se&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||P(e,t),i=n?J0(e,t):Oc(e,t,!0),o=n;do{if(i===0){al&&!n&&Ga(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Z0(a)){i=Oc(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;i=ci;var x=m.current.memoizedState.isDehydrated;if(x&&(rl(m,d).flags|=256),d=Oc(m,d,!1),d!==2){if(jc&&!x){m.errorRecoveryDisabledLanes|=o,hn|=o,i=4;break e}o=gt,gt=i,o!==null&&(gt===null?gt=o:gt.push.apply(gt,o))}i=d}if(o=!1,i!==2)continue}}if(i===1){rl(e,0),Ga(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ga(n,t,Ht,!La);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Ec+300-vt(),10<i)){if(Ga(n,t,Ht,!La),An(n,0,!0)!==0)break e;n.timeoutHandle=jh(Jm.bind(null,n,a,gt,Or,zc,t,Ht,hn,nl,La,o,2,-0,0),i);break e}Jm(n,a,gt,Or,zc,t,Ht,hn,nl,La,o,0,-0,0)}}break}while(!0);It(e)}function Jm(e,t,a,n,i,o,d,m,x,T,U,k,R,D){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(xi={stylesheets:null,count:0,unsuspend:Tx},qm(t),k=Rx(),k!==null)){e.cancelPendingCommit=k(th.bind(null,e,t,o,a,n,i,d,m,x,U,1,R,D)),Ga(e,o,d,!T);return}th(e,t,o,a,n,i,d,m,x)}function Z0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ga(e,t,a,n){t&=~wc,t&=~hn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-ut(i),d=1<<o;n[o]=-1,i&=~d}a!==0&&ld(e,a,t)}function Nr(){return(Se&6)===0?(di(0),!1):!0}function Rc(){if(fe!==null){if(je===0)var e=fe.return;else e=fe,sa=un=null,Zu(e),In=null,ti=0,e=fe;for(;e!==null;)Tm(e.alternate,e),e=e.return;fe=null}}function rl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rc(),Te=e,fe=a=oa(e.current,null),pe=t,je=0,wt=null,La=!1,al=P(e,t),jc=!1,nl=Ht=wc=hn=ka=He=0,gt=ci=null,zc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ut(n),o=1<<i;t|=e[i],n&=~o}return va=t,er(),a}function $m(e,t){se=null,O.H=yr,t===Zl||t===cr?(t=ff(),je=3):t===cf?(t=ff(),je=4):je=t===mm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,fe===null&&(He=1,zr(e,Nt(t,e.current)))}function Wm(){var e=O.H;return O.H=yr,e===null?yr:e}function Fm(){var e=O.A;return O.A=Q0,e}function Dc(){He=4,La||(pe&4194048)!==pe&&Ut.current!==null||(al=!0),(ka&134217727)===0&&(hn&134217727)===0||Te===null||Ga(Te,pe,Ht,!1)}function Oc(e,t,a){var n=Se;Se|=2;var i=Wm(),o=Fm();(Te!==e||pe!==t)&&(Or=null,rl(e,t)),t=!1;var d=He;e:do try{if(je!==0&&fe!==null){var m=fe,x=wt;switch(je){case 8:Rc(),d=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var T=je;if(je=0,wt=null,ol(e,m,x,T),a&&al){d=0;break e}break;default:T=je,je=0,wt=null,ol(e,m,x,T)}}K0(),d=He;break}catch(U){$m(e,U)}while(!0);return t&&e.shellSuspendCounter++,sa=un=null,Se=n,O.H=i,O.A=o,fe===null&&(Te=null,pe=0,er()),d}function K0(){for(;fe!==null;)Im(fe)}function J0(e,t){var a=Se;Se|=2;var n=Wm(),i=Fm();Te!==e||pe!==t?(Or=null,Dr=vt()+500,rl(e,t)):al=P(e,t);e:do try{if(je!==0&&fe!==null){t=fe;var o=wt;t:switch(je){case 1:je=0,wt=null,ol(e,t,o,1);break;case 2:case 9:if(sf(o)){je=0,wt=null,Pm(t);break}t=function(){je!==2&&je!==9||Te!==e||(je=7),It(e)},o.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:sf(o)?(je=0,wt=null,Pm(t)):(je=0,wt=null,ol(e,t,o,7));break;case 5:var d=null;switch(fe.tag){case 26:d=fe.memoizedState;case 5:case 27:var m=fe;if(!d||_h(d)){je=0,wt=null;var x=m.sibling;if(x!==null)fe=x;else{var T=m.return;T!==null?(fe=T,Mr(T)):fe=null}break t}}je=0,wt=null,ol(e,t,o,5);break;case 6:je=0,wt=null,ol(e,t,o,6);break;case 8:Rc(),He=6;break e;default:throw Error(c(462))}}$0();break}catch(U){$m(e,U)}while(!0);return sa=un=null,O.H=n,O.A=i,Se=a,fe!==null?0:(Te=null,pe=0,er(),He)}function $0(){for(;fe!==null&&!Hi();)Im(fe)}function Im(e){var t=Em(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?Mr(e):fe=t}function Pm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ym(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=ym(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:Zu(t);default:Tm(a,t),t=fe=Pd(t,va),t=Em(a,t,va)}e.memoizedProps=e.pendingProps,t===null?Mr(e):fe=t}function ol(e,t,a,n){sa=un=null,Zu(t),In=null,ti=0;var i=t.return;try{if(L0(e,i,t,a,pe)){He=1,zr(e,Nt(a,e.current)),fe=null;return}}catch(o){if(i!==null)throw fe=i,o;He=1,zr(e,Nt(a,e.current)),fe=null;return}t.flags&32768?(ye||n===1?e=!0:al||(pe&536870912)!==0?e=!1:(La=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ut.current,n!==null&&n.tag===13&&(n.flags|=16384))),eh(t,e)):Mr(t)}function Mr(e){var t=e;do{if((t.flags&32768)!==0){eh(t,La);return}e=t.return;var a=Y0(t.alternate,t,va);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);He===0&&(He=5)}function eh(e,t){do{var a=q0(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);He=6,fe=null}function th(e,t,a,n,i,o,d,m,x){e.cancelPendingCommit=null;do _r();while(et!==0);if((Se&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Su,Tg(e,a,o,d,m,x),e===Te&&(fe=Te=null,pe=0),ll=t,qa=e,il=a,Ac=o,Tc=i,Vm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,P0(wn,function(){return rh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,i=V.p,V.p=2,d=Se,Se|=4;try{G0(e,t,a)}finally{Se=d,V.p=i,O.T=n}}et=1,ah(),nh(),lh()}}function ah(){if(et===1){et=0;var e=qa,t=ll,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=V.p;V.p=2;var i=Se;Se|=4;try{Lm(t,e);var o=Xc,d=Xd(e.containerInfo),m=o.focusedElem,x=o.selectionRange;if(d!==m&&m&&m.ownerDocument&&Gd(m.ownerDocument.documentElement,m)){if(x!==null&&gu(m)){var T=x.start,U=x.end;if(U===void 0&&(U=T),"selectionStart"in m)m.selectionStart=T,m.selectionEnd=Math.min(U,m.value.length);else{var k=m.ownerDocument||document,R=k&&k.defaultView||window;if(R.getSelection){var D=R.getSelection(),ie=m.textContent.length,ne=Math.min(x.start,ie),Ee=x.end===void 0?ne:Math.min(x.end,ie);!D.extend&&ne>Ee&&(d=Ee,Ee=ne,ne=d);var z=qd(m,ne),S=qd(m,Ee);if(z&&S&&(D.rangeCount!==1||D.anchorNode!==z.node||D.anchorOffset!==z.offset||D.focusNode!==S.node||D.focusOffset!==S.offset)){var A=k.createRange();A.setStart(z.node,z.offset),D.removeAllRanges(),ne>Ee?(D.addRange(A),D.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),D.addRange(A))}}}}for(k=[],D=m;D=D.parentNode;)D.nodeType===1&&k.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<k.length;m++){var H=k[m];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Zr=!!Gc,Xc=Gc=null}finally{Se=i,V.p=n,O.T=a}}e.current=t,et=2}}function nh(){if(et===2){et=0;var e=qa,t=ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=V.p;V.p=2;var i=Se;Se|=4;try{_m(e,t.alternate,t)}finally{Se=i,V.p=n,O.T=a}}et=3}}function lh(){if(et===4||et===3){et=0,Li();var e=qa,t=ll,a=il,n=Vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,ll=qa=null,ih(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ya=null),$o(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ea,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,i=V.p,V.p=2,O.T=null;try{for(var o=e.onRecoverableError,d=0;d<n.length;d++){var m=n[d];o(m.value,{componentStack:m.stack})}}finally{O.T=t,V.p=i}}(il&3)!==0&&_r(),It(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===Cc?si++:(si=0,Cc=e):si=0,di(0)}}function ih(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function _r(e){return ah(),nh(),lh(),rh()}function rh(){if(et!==5)return!1;var e=qa,t=Ac;Ac=0;var a=$o(il),n=O.T,i=V.p;try{V.p=32>a?32:a,O.T=null,a=Tc,Tc=null;var o=qa,d=il;if(et=0,ll=qa=null,il=0,(Se&6)!==0)throw Error(c(331));var m=Se;if(Se|=4,Xm(o.current),Ym(o,o.current,d,a),Se=m,di(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ea,o)}catch{}return!0}finally{V.p=i,O.T=n,ih(e,t)}}function oh(e,t,a){t=Nt(a,t),t=rc(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(Cl(e,2),It(e))}function Ae(e,t,a){if(e.tag===3)oh(e,e,a);else for(;t!==null;){if(t.tag===3){oh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ya===null||!Ya.has(n))){e=Nt(a,e),a=dm(2),n=Oa(t,a,2),n!==null&&(fm(a,n,t,e),Cl(n,2),It(n));break}}t=t.return}}function Nc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new V0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(jc=!0,i.add(a),e=W0.bind(null,e,t,a),t.then(e,e))}function W0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(pe&a)===a&&(He===4||He===3&&(pe&62914560)===pe&&300>vt()-Ec?(Se&2)===0&&rl(e,0):wc|=a,nl===pe&&(nl=0)),It(e)}function uh(e,t){t===0&&(t=nd()),e=Gn(e,t),e!==null&&(Cl(e,t),It(e))}function F0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),uh(e,a)}function I0(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),uh(e,a)}function P0(e,t){return Sn(e,t)}var Br=null,ul=null,Mc=!1,Ur=!1,_c=!1,pn=0;function It(e){e!==ul&&e.next===null&&(ul===null?Br=ul=e:ul=ul.next=e),Ur=!0,Mc||(Mc=!0,tx())}function di(e,t){if(!_c&&Ur){_c=!0;do for(var a=!1,n=Br;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var d=n.suspendedLanes,m=n.pingedLanes;o=(1<<31-ut(42|e)+1)-1,o&=i&~(d&~m),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,fh(n,o))}else o=pe,o=An(n,n===Te?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||P(n,o)||(a=!0,fh(n,o));n=n.next}while(a);_c=!1}}function ex(){ch()}function ch(){Ur=Mc=!1;var e=0;pn!==0&&(cx()&&(e=pn),pn=0);for(var t=vt(),a=null,n=Br;n!==null;){var i=n.next,o=sh(n,t);o===0?(n.next=null,a===null?Br=i:a.next=i,i===null&&(ul=a)):(a=n,(e!==0||(o&3)!==0)&&(Ur=!0)),n=i}di(e)}function sh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-ut(o),m=1<<d,x=i[d];x===-1?((m&a)===0||(m&n)!==0)&&(i[d]=Rt(m,t)):x<=t&&(e.expiredLanes|=m),o&=~m}if(t=Te,a=pe,a=An(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&jn(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||P(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&jn(n),$o(a)){case 2:case 8:a=Tl;break;case 32:a=wn;break;case 268435456:a=qi;break;default:a=wn}return n=dh.bind(null,e),a=Sn(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&jn(n),e.callbackPriority=2,e.callbackNode=null,2}function dh(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_r()&&e.callbackNode!==a)return null;var n=pe;return n=An(e,e===Te?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Km(e,n,t),sh(e,vt()),e.callbackNode!=null&&e.callbackNode===a?dh.bind(null,e):null)}function fh(e,t){if(_r())return null;Km(e,t,!0)}function tx(){dx(function(){(Se&6)!==0?Sn(Al,ex):ch()})}function Bc(){return pn===0&&(pn=Tn()),pn}function mh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function hh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ax(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var o=mh((i[ft]||null).action),d=n.submitter;d&&(t=(t=d[ft]||null)?mh(t.formAction):d.getAttribute("formAction"),t!==null&&(o=t,d=null));var m=new Fi("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(pn!==0){var x=d?hh(i,d):new FormData(i);tc(a,{pending:!0,data:x,method:i.method,action:o},null,x)}}else typeof o=="function"&&(m.preventDefault(),x=d?hh(i,d):new FormData(i),tc(a,{pending:!0,data:x,method:i.method,action:o},o,x))},currentTarget:i}]})}}for(var Uc=0;Uc<bu.length;Uc++){var Hc=bu[Uc],nx=Hc.toLowerCase(),lx=Hc[0].toUpperCase()+Hc.slice(1);Gt(nx,"on"+lx)}Gt(Zd,"onAnimationEnd"),Gt(Kd,"onAnimationIteration"),Gt(Jd,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(S0,"onTransitionRun"),Gt(j0,"onTransitionStart"),Gt(w0,"onTransitionCancel"),Gt($d,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fi));function ph(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var d=n.length-1;0<=d;d--){var m=n[d],x=m.instance,T=m.currentTarget;if(m=m.listener,x!==o&&i.isPropagationStopped())break e;o=m,i.currentTarget=T;try{o(i)}catch(U){wr(U)}i.currentTarget=null,o=x}else for(d=0;d<n.length;d++){if(m=n[d],x=m.instance,T=m.currentTarget,m=m.listener,x!==o&&i.isPropagationStopped())break e;o=m,i.currentTarget=T;try{o(i)}catch(U){wr(U)}i.currentTarget=null,o=x}}}}function me(e,t){var a=t[Wo];a===void 0&&(a=t[Wo]=new Set);var n=e+"__bubble";a.has(n)||(gh(t,e,2,!1),a.add(n))}function Lc(e,t,a){var n=0;t&&(n|=4),gh(a,e,n,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[Hr]){e[Hr]=!0,ud.forEach(function(a){a!=="selectionchange"&&(ix.has(a)||Lc(a,!1,e),Lc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Lc("selectionchange",!1,t))}}function gh(e,t,a,n){switch(Yh(t)){case 2:var i=Nx;break;case 8:i=Mx;break;default:i=Pc}a=i.bind(null,t,a,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Yc(e,t,a,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===i)break;if(d===4)for(d=n.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;m!==null;){if(d=Rn(m),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){n=o=d;continue e}m=m.parentNode}}n=n.return}jd(function(){var T=o,U=iu(a),k=[];e:{var R=Wd.get(e);if(R!==void 0){var D=Fi,ie=e;switch(e){case"keypress":if($i(a)===0)break e;case"keydown":case"keyup":D=Pg;break;case"focusin":ie="focus",D=du;break;case"focusout":ie="blur",D=du;break;case"beforeblur":case"afterblur":D=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=a0;break;case Zd:case Kd:case Jd:D=Qg;break;case $d:D=l0;break;case"scroll":case"scrollend":D=kg;break;case"wheel":D=r0;break;case"copy":case"cut":case"paste":D=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Td;break;case"toggle":case"beforetoggle":D=u0}var ne=(t&4)!==0,Ee=!ne&&(e==="scroll"||e==="scrollend"),z=ne?R!==null?R+"Capture":null:R;ne=[];for(var S=T,A;S!==null;){var H=S;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||z===null||(H=Ol(S,z),H!=null&&ne.push(mi(S,H,A))),Ee)break;S=S.return}0<ne.length&&(R=new D(R,ie,null,a,U),k.push({event:R,listeners:ne}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",R&&a!==lu&&(ie=a.relatedTarget||a.fromElement)&&(Rn(ie)||ie[Cn]))break e;if((D||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,D?(ie=a.relatedTarget||a.toElement,D=T,ie=ie?Rn(ie):null,ie!==null&&(Ee=h(ie),ne=ie.tag,ie!==Ee||ne!==5&&ne!==27&&ne!==6)&&(ie=null)):(D=null,ie=T),D!==ie)){if(ne=Ed,H="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Td,H="onPointerLeave",z="onPointerEnter",S="pointer"),Ee=D==null?R:Dl(D),A=ie==null?R:Dl(ie),R=new ne(H,S+"leave",D,a,U),R.target=Ee,R.relatedTarget=A,H=null,Rn(U)===T&&(ne=new ne(z,S+"enter",ie,a,U),ne.target=A,ne.relatedTarget=Ee,H=ne),Ee=H,D&&ie)t:{for(ne=D,z=ie,S=0,A=ne;A;A=cl(A))S++;for(A=0,H=z;H;H=cl(H))A++;for(;0<S-A;)ne=cl(ne),S--;for(;0<A-S;)z=cl(z),A--;for(;S--;){if(ne===z||z!==null&&ne===z.alternate)break t;ne=cl(ne),z=cl(z)}ne=null}else ne=null;D!==null&&xh(k,R,D,ne,!1),ie!==null&&Ee!==null&&xh(k,Ee,ie,ne,!0)}}e:{if(R=T?Dl(T):window,D=R.nodeName&&R.nodeName.toLowerCase(),D==="select"||D==="input"&&R.type==="file")var W=Bd;else if(Md(R))if(Ud)W=v0;else{W=g0;var de=p0}else D=R.nodeName,!D||D.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&nu(T.elementType)&&(W=Bd):W=x0;if(W&&(W=W(e,T))){_d(k,W,a,U);break e}de&&de(e,R,T),e==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&au(R,"number",R.value)}switch(de=T?Dl(T):window,e){case"focusin":(Md(de)||de.contentEditable==="true")&&(kn=de,xu=T,kl=null);break;case"focusout":kl=xu=kn=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Qd(k,a,U);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Qd(k,a,U)}var ee;if(mu)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ln?Od(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Cd&&a.locale!=="ko"&&(Ln||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ln&&(ee=wd()):(Ta=U,uu="value"in Ta?Ta.value:Ta.textContent,Ln=!0)),de=Lr(T,le),0<de.length&&(le=new Ad(le,e,null,a,U),k.push({event:le,listeners:de}),ee?le.data=ee:(ee=Nd(a),ee!==null&&(le.data=ee)))),(ee=s0?d0(e,a):f0(e,a))&&(le=Lr(T,"onBeforeInput"),0<le.length&&(de=new Ad("onBeforeInput","beforeinput",null,a,U),k.push({event:de,listeners:le}),de.data=ee)),ax(k,e,T,a,U)}ph(k,t)})}function mi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Lr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Ol(e,a),i!=null&&n.unshift(mi(e,i,o)),i=Ol(e,t),i!=null&&n.push(mi(e,i,o))),e.tag===3)return n;e=e.return}return[]}function cl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xh(e,t,a,n,i){for(var o=t._reactName,d=[];a!==null&&a!==n;){var m=a,x=m.alternate,T=m.stateNode;if(m=m.tag,x!==null&&x===n)break;m!==5&&m!==26&&m!==27||T===null||(x=T,i?(T=Ol(a,o),T!=null&&d.unshift(mi(a,T,x))):i||(T=Ol(a,o),T!=null&&d.push(mi(a,T,x)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var rx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(rx,`
`).replace(ox,"")}function yh(e,t){return t=vh(t),vh(e)===t}function kr(){}function ze(e,t,a,n,i,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Bn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Bn(e,""+n);break;case"className":Qi(e,"class",n);break;case"tabIndex":Qi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(e,a,n);break;case"style":bd(e,n,o);break;case"data":if(t!=="object"){Qi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ki(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",i.name,i,null),ze(e,t,"formEncType",i.formEncType,i,null),ze(e,t,"formMethod",i.formMethod,i,null),ze(e,t,"formTarget",i.formTarget,i,null)):(ze(e,t,"encType",i.encType,i,null),ze(e,t,"method",i.method,i,null),ze(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ki(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=kr);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ki(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),Xi(e,"popover",n);break;case"xlinkActuate":ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ia(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ia(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ia(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ia(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Xi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hg.get(a)||a,Xi(e,a,n))}}function qc(e,t,a,n,i,o){switch(a){case"style":bd(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Bn(e,n):(typeof n=="number"||typeof n=="bigint")&&Bn(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=kr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),o=e[ft]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Xi(e,a,n)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,i=!1,o;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,o,d,a,null)}}i&&ze(e,t,"srcSet",a.srcSet,a,null),n&&ze(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=o=d=i=null,x=null,T=null;for(n in a)if(a.hasOwnProperty(n)){var U=a[n];if(U!=null)switch(n){case"name":i=U;break;case"type":d=U;break;case"checked":x=U;break;case"defaultChecked":T=U;break;case"value":o=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:ze(e,t,n,U,a,null)}}gd(e,o,m,x,T,d,i,!1),Vi(e);return;case"select":me("invalid",e),n=d=o=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":o=m;break;case"defaultValue":d=m;break;case"multiple":n=m;default:ze(e,t,i,m,a,null)}t=o,a=d,e.multiple=!!n,t!=null?_n(e,!!n,t,!1):a!=null&&_n(e,!!n,a,!0);return;case"textarea":me("invalid",e),o=i=n=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":n=m;break;case"defaultValue":i=m;break;case"children":o=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:ze(e,t,d,m,a,null)}vd(e,n,i,o),Vi(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ze(e,t,x,n,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<fi.length;n++)me(fi[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(n=a[T],n!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,T,n,a,null)}return;default:if(nu(t)){for(U in a)a.hasOwnProperty(U)&&(n=a[U],n!==void 0&&qc(e,t,U,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&ze(e,t,m,n,a,null))}function ux(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,d=null,m=null,x=null,T=null,U=null;for(D in a){var k=a[D];if(a.hasOwnProperty(D)&&k!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":x=k;default:n.hasOwnProperty(D)||ze(e,t,D,null,n,k)}}for(var R in n){var D=n[R];if(k=a[R],n.hasOwnProperty(R)&&(D!=null||k!=null))switch(R){case"type":o=D;break;case"name":i=D;break;case"checked":T=D;break;case"defaultChecked":U=D;break;case"value":d=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:D!==k&&ze(e,t,R,D,n,k)}}tu(e,d,m,x,T,U,o,i);return;case"select":D=d=m=R=null;for(o in a)if(x=a[o],a.hasOwnProperty(o)&&x!=null)switch(o){case"value":break;case"multiple":D=x;default:n.hasOwnProperty(o)||ze(e,t,o,null,n,x)}for(i in n)if(o=n[i],x=a[i],n.hasOwnProperty(i)&&(o!=null||x!=null))switch(i){case"value":R=o;break;case"defaultValue":m=o;break;case"multiple":d=o;default:o!==x&&ze(e,t,i,o,n,x)}t=m,a=d,n=D,R!=null?_n(e,!!a,R,!1):!!n!=!!a&&(t!=null?_n(e,!!a,t,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":D=R=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:ze(e,t,m,null,n,i)}for(d in n)if(i=n[d],o=a[d],n.hasOwnProperty(d)&&(i!=null||o!=null))switch(d){case"value":R=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==o&&ze(e,t,d,i,n,o)}xd(e,R,D);return;case"option":for(var ie in a)if(R=a[ie],a.hasOwnProperty(ie)&&R!=null&&!n.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:ze(e,t,ie,null,n,R)}for(x in n)if(R=n[x],D=a[x],n.hasOwnProperty(x)&&R!==D&&(R!=null||D!=null))switch(x){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ze(e,t,x,R,n,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)R=a[ne],a.hasOwnProperty(ne)&&R!=null&&!n.hasOwnProperty(ne)&&ze(e,t,ne,null,n,R);for(T in n)if(R=n[T],D=a[T],n.hasOwnProperty(T)&&R!==D&&(R!=null||D!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:ze(e,t,T,R,n,D)}return;default:if(nu(t)){for(var Ee in a)R=a[Ee],a.hasOwnProperty(Ee)&&R!==void 0&&!n.hasOwnProperty(Ee)&&qc(e,t,Ee,void 0,n,R);for(U in n)R=n[U],D=a[U],!n.hasOwnProperty(U)||R===D||R===void 0&&D===void 0||qc(e,t,U,R,n,D);return}}for(var z in a)R=a[z],a.hasOwnProperty(z)&&R!=null&&!n.hasOwnProperty(z)&&ze(e,t,z,null,n,R);for(k in n)R=n[k],D=a[k],!n.hasOwnProperty(k)||R===D||R==null&&D==null||ze(e,t,k,R,n,D)}var Gc=null,Xc=null;function Yr(e){return e.nodeType===9?e:e.ownerDocument}function bh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function cx(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(fx)}:jh;function fx(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function zh(e,t){var a=t,n=0,i=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var d=e.ownerDocument;if(a&1&&hi(d.documentElement),a&2&&hi(d.body),a&4)for(a=d.head,hi(a),d=a.firstChild;d;){var m=d.nextSibling,x=d.nodeName;d[Rl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=m}}if(i===0){e.removeChild(o),ji(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);ji(t)}function Zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zc(a),Fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mx(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function hx(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qt(e.nextSibling),e===null))return null;return e}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function px(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Jc=null;function Eh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Ah(e,t,a){switch(t=Yr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fo(e)}var Lt=new Map,Th=new Set;function qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=V.d;V.d={f:gx,r:xx,D:vx,C:yx,L:bx,m:Sx,X:wx,S:jx,M:zx};function gx(){var e=ya.f(),t=Nr();return e||t}function xx(e){var t=Dn(e);t!==null&&t.tag===5&&t.type==="form"?Kf(t):ya.r(e)}var sl=typeof document>"u"?null:document;function Ch(e,t,a){var n=sl;if(n&&typeof t=="string"&&t){var i=Ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Th.has(i)||(Th.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function vx(e){ya.D(e),Ch("dns-prefetch",e,null)}function yx(e,t){ya.C(e,t),Ch("preconnect",e,t)}function bx(e,t,a){ya.L(e,t,a);var n=sl;if(n&&e&&t){var i='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ot(a.imageSizes)+'"]')):i+='[href="'+Ot(e)+'"]';var o=i;switch(t){case"style":o=dl(e);break;case"script":o=fl(e)}Lt.has(o)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Lt.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(pi(o))||t==="script"&&n.querySelector(gi(o))||(t=n.createElement("link"),tt(t,"link",e),Je(t),n.head.appendChild(t)))}}function Sx(e,t){ya.m(e,t);var a=sl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ot(n)+'"][href="'+Ot(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=fl(e)}if(!Lt.has(o)&&(e=E({rel:"modulepreload",href:e},t),Lt.set(o,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gi(o)))return}n=a.createElement("link"),tt(n,"link",e),Je(n),a.head.appendChild(n)}}}function jx(e,t,a){ya.S(e,t,a);var n=sl;if(n&&e){var i=On(n).hoistableStyles,o=dl(e);t=t||"default";var d=i.get(o);if(!d){var m={loading:0,preload:null};if(d=n.querySelector(pi(o)))m.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Lt.get(o))&&$c(e,a);var x=d=n.createElement("link");Je(x),tt(x,"link",e),x._p=new Promise(function(T,U){x.onload=T,x.onerror=U}),x.addEventListener("load",function(){m.loading|=1}),x.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Gr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:m},i.set(o,d)}}}function wx(e,t){ya.X(e,t);var a=sl;if(a&&e){var n=On(a).hoistableScripts,i=fl(e),o=n.get(i);o||(o=a.querySelector(gi(i)),o||(e=E({src:e,async:!0},t),(t=Lt.get(i))&&Wc(e,t),o=a.createElement("script"),Je(o),tt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function zx(e,t){ya.M(e,t);var a=sl;if(a&&e){var n=On(a).hoistableScripts,i=fl(e),o=n.get(i);o||(o=a.querySelector(gi(i)),o||(e=E({src:e,async:!0,type:"module"},t),(t=Lt.get(i))&&Wc(e,t),o=a.createElement("script"),Je(o),tt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Rh(e,t,a,n){var i=(i=I.current)?qr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=dl(a.href),a=On(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var o=On(i).hoistableStyles,d=o.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=i.querySelector(pi(e)))&&!o._p&&(d.instance=o,d.state.loading=5),Lt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Lt.set(e,a),o||Ex(i,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fl(a),a=On(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function dl(e){return'href="'+Ot(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function Dh(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Ex(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),tt(t,"link",a),Je(t),e.head.appendChild(t))}function fl(e){return'[src="'+Ot(e)+'"]'}function gi(e){return"script[async]"+e}function Oh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),tt(n,"style",i),Gr(n,a.precedence,e),t.instance=n;case"stylesheet":i=dl(a.href);var o=e.querySelector(pi(i));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;n=Dh(a),(i=Lt.get(i))&&$c(n,i),o=(e.ownerDocument||e).createElement("link"),Je(o);var d=o;return d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),tt(o,"link",n),t.state.loading|=4,Gr(o,a.precedence,e),t.instance=o;case"script":return o=fl(a.src),(i=e.querySelector(gi(o)))?(t.instance=i,Je(i),i):(n=a,(i=Lt.get(o))&&(n=E({},a),Wc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),tt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Gr(n,a.precedence,e));return t.instance}function Gr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,d=0;d<n.length;d++){var m=n[d];if(m.dataset.precedence===t)o=m;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xr=null;function Nh(e,t,a){if(Xr===null){var n=new Map,i=Xr=new Map;i.set(a,n)}else i=Xr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var o=a[i];if(!(o[Rl]||o[nt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(t)||"";d=e+d;var m=n.get(d);m?m.push(o):n.set(d,[o])}}return n}function Mh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ax(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _h(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xi=null;function Tx(){}function Cx(e,t,a){if(xi===null)throw Error(c(475));var n=xi;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=dl(a.href),o=e.querySelector(pi(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Qr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,a=Dh(a),(i=Lt.get(i))&&$c(a,i),o=o.createElement("link"),Je(o);var d=o;d._p=new Promise(function(m,x){d.onload=m,d.onerror=x}),tt(o,"link",a),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Qr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Rx(){if(xi===null)throw Error(c(475));var e=xi;return e.stylesheets&&e.count===0&&Fc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Fc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Qr(){if(this.count--,this.count===0){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Fc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,t.forEach(Dx,e),Vr=null,Qr.call(e))}function Dx(e,t){if(!(t.state.loading&4)){var a=Vr.get(e);if(a)var n=a.get(null);else{a=new Map,Vr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var d=i[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}i=t.instance,d=i.getAttribute("data-precedence"),o=a.get(d)||n,o===n&&a.set(null,i),a.set(d,i),this.count++,n=Qr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var vi={$$typeof:X,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Ox(e,t,a,n,i,o,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.hiddenUpdates=Ko(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Bh(e,t,a,n,i,o,d,m,x,T,U,k){return e=new Ox(e,t,a,d,m,x,T,k),t=1,o===!0&&(t|=24),o=bt(3,null,null,t),e.current=o,o.stateNode=e,t=Nu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},Uu(o),e}function Uh(e){return e?(e=Xn,e):Xn}function Hh(e,t,a,n,i,o){i=Uh(i),n.context===null?n.context=i:n.pendingContext=i,n=Da(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Oa(e,n,t),a!==null&&(Et(a,e,t),Jl(a,e,t))}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ic(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function kh(e){if(e.tag===13){var t=Gn(e,67108864);t!==null&&Et(t,e,67108864),Ic(e,67108864)}}var Zr=!0;function Nx(e,t,a,n){var i=O.T;O.T=null;var o=V.p;try{V.p=2,Pc(e,t,a,n)}finally{V.p=o,O.T=i}}function Mx(e,t,a,n){var i=O.T;O.T=null;var o=V.p;try{V.p=8,Pc(e,t,a,n)}finally{V.p=o,O.T=i}}function Pc(e,t,a,n){if(Zr){var i=es(n);if(i===null)Yc(e,t,n,Kr,a),qh(e,n);else if(Bx(i,e,t,a,n))n.stopPropagation();else if(qh(e,n),t&4&&-1<_x.indexOf(e)){for(;i!==null;){var o=Dn(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=la(o.pendingLanes);if(d!==0){var m=o;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var x=1<<31-ut(d);m.entanglements[1]|=x,d&=~x}It(o),(Se&6)===0&&(Dr=vt()+500,di(0))}}break;case 13:m=Gn(o,2),m!==null&&Et(m,o,2),Nr(),Ic(o,2)}if(o=es(n),o===null&&Yc(e,t,n,Kr,a),o===i)break;i=o}i!==null&&n.stopPropagation()}else Yc(e,t,n,null,a)}}function es(e){return e=iu(e),ts(e)}var Kr=null;function ts(e){if(Kr=null,e=Rn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kr=e,null}function Yh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ki()){case Al:return 2;case Tl:return 8;case wn:case Yi:return 32;case qi:return 268435456;default:return 32}default:return 32}}var as=!1,Qa=null,Va=null,Za=null,yi=new Map,bi=new Map,Ka=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Si(e,t,a,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Dn(t),t!==null&&kh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bx(e,t,a,n,i){switch(t){case"focusin":return Qa=Si(Qa,e,t,a,n,i),!0;case"dragenter":return Va=Si(Va,e,t,a,n,i),!0;case"mouseover":return Za=Si(Za,e,t,a,n,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Si(yi.get(o)||null,e,t,a,n,i)),!0;case"gotpointercapture":return o=i.pointerId,bi.set(o,Si(bi.get(o)||null,e,t,a,n,i)),!0}return!1}function Gh(e){var t=Rn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,Cg(e.priority,function(){if(a.tag===13){var n=zt();n=Jo(n);var i=Gn(a,n);i!==null&&Et(i,a,n),Ic(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=es(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);lu=n,a.target.dispatchEvent(n),lu=null}else return t=Dn(a),t!==null&&kh(t),e.blockedOn=a,!1;t.shift()}return!0}function Xh(e,t,a){Jr(e)&&a.delete(t)}function Ux(){as=!1,Qa!==null&&Jr(Qa)&&(Qa=null),Va!==null&&Jr(Va)&&(Va=null),Za!==null&&Jr(Za)&&(Za=null),yi.forEach(Xh),bi.forEach(Xh)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,as||(as=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ux)))}var Wr=null;function Qh(e){Wr!==e&&(Wr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Wr===e&&(Wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(ts(n||a)===null)continue;break}var o=Dn(a);o!==null&&(e.splice(t,3),t-=3,tc(o,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function ji(e){function t(x){return $r(x,e)}Qa!==null&&$r(Qa,e),Va!==null&&$r(Va,e),Za!==null&&$r(Za,e),yi.forEach(t),bi.forEach(t);for(var a=0;a<Ka.length;a++){var n=Ka[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Gh(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],o=a[n+1],d=i[ft]||null;if(typeof o=="function")d||Qh(a);else if(d){var m=null;if(o&&o.hasAttribute("formAction")){if(i=o,d=o[ft]||null)m=d.formAction;else if(ts(i)!==null)continue}else m=d.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Qh(a)}}}function ns(e){this._internalRoot=e}Fr.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=zt();Hh(a,n,e,t,null,null)},Fr.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hh(e.current,2,null,e,null,null),Nr(),t[Cn]=null}};function Fr(e){this._internalRoot=e}Fr.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ka.length&&t!==0&&t<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Gh(e)}};var Vh=u.version;if(Vh!=="19.1.0")throw Error(c(527,Vh,"19.1.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Hx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{Ea=Ir.inject(Hx),ot=Ir}catch{}}return zi.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",i=om,o=um,d=cm,m=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(m=t.unstable_transitionCallbacks)),t=Bh(e,1,!1,null,null,a,n,i,o,d,m,null),e[Cn]=t.current,kc(e),new ns(t)},zi.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,i="",o=om,d=um,m=cm,x=null,T=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(T=a.formState)),t=Bh(e,1,!0,t,a??null,n,i,o,d,m,x,T),t.context=Uh(null),a=t.current,n=zt(),n=Jo(n),i=Da(n),i.callback=null,Oa(a,i,n),a=n,t.current.lanes=a,Cl(t,a),It(t),e[Cn]=t.current,kc(e),new Fr(t)},zi.version="19.1.0",zi}var tp;function Jx(){if(tp)return rs.exports;tp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),rs.exports=Kx(),rs.exports}var $x=Jx(),Ei={},ap;function Wx(){if(ap)return Ei;ap=1,Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.parse=v,Ei.serialize=p;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,u=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,h=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function v(C,_){const N=new h,G=C.length;if(G<2)return N;const L=(_==null?void 0:_.decode)||E;let B=0;do{const q=C.indexOf("=",B);if(q===-1)break;const X=C.indexOf(";",B),J=X===-1?G:X;if(q>J){B=C.lastIndexOf(";",q-1)+1;continue}const Q=w(C,B,q),ae=g(C,q,Q),$=C.slice(Q,ae);if(N[$]===void 0){let ge=w(C,q+1,J),he=g(C,J,ge);const De=L(C.slice(ge,he));N[$]=De}B=J+1}while(B<G);return N}function w(C,_,N){do{const G=C.charCodeAt(_);if(G!==32&&G!==9)return _}while(++_<N);return N}function g(C,_,N){for(;_>N;){const G=C.charCodeAt(--_);if(G!==32&&G!==9)return _+1}return N}function p(C,_,N){const G=(N==null?void 0:N.encode)||encodeURIComponent;if(!l.test(C))throw new TypeError(`argument name is invalid: ${C}`);const L=G(_);if(!u.test(L))throw new TypeError(`argument val is invalid: ${_}`);let B=C+"="+L;if(!N)return B;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);B+="; Max-Age="+N.maxAge}if(N.domain){if(!s.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);B+="; Domain="+N.domain}if(N.path){if(!c.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);B+="; Path="+N.path}if(N.expires){if(!M(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);B+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(B+="; HttpOnly"),N.secure&&(B+="; Secure"),N.partitioned&&(B+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return B}function E(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function M(C){return f.call(C)==="[object Date]"}return Ei}Wx();var np="popstate";function Fx(l={}){function u(c,f){let{pathname:h,search:v,hash:w}=c.location;return _s("",{pathname:h,search:v,hash:w},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:Oi(f)}return Px(u,s,null,l)}function _e(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function ea(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Ix(){return Math.random().toString(36).substring(2,10)}function lp(l,u){return{usr:l.state,key:l.key,idx:u}}function _s(l,u,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?wl(u):u,state:s,key:u&&u.key||c||Ix()}}function Oi({pathname:l="/",search:u="",hash:s=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function wl(l){let u={};if(l){let s=l.indexOf("#");s>=0&&(u.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(u.search=l.substring(c),l=l.substring(0,c)),l&&(u.pathname=l)}return u}function Px(l,u,s,c={}){let{window:f=document.defaultView,v5Compat:h=!1}=c,v=f.history,w="POP",g=null,p=E();p==null&&(p=0,v.replaceState({...v.state,idx:p},""));function E(){return(v.state||{idx:null}).idx}function M(){w="POP";let L=E(),B=L==null?null:L-p;p=L,g&&g({action:w,location:G.location,delta:B})}function C(L,B){w="PUSH";let q=_s(G.location,L,B);p=E()+1;let X=lp(q,p),J=G.createHref(q);try{v.pushState(X,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(J)}h&&g&&g({action:w,location:G.location,delta:1})}function _(L,B){w="REPLACE";let q=_s(G.location,L,B);p=E();let X=lp(q,p),J=G.createHref(q);v.replaceState(X,"",J),h&&g&&g({action:w,location:G.location,delta:0})}function N(L){return e1(L)}let G={get action(){return w},get location(){return l(f,v)},listen(L){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(np,M),g=L,()=>{f.removeEventListener(np,M),g=null}},createHref(L){return u(f,L)},createURL:N,encodeLocation(L){let B=N(L);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:C,replace:_,go(L){return v.go(L)}};return G}function e1(l,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),_e(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Oi(l);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Hp(l,u,s="/"){return t1(l,u,s,!1)}function t1(l,u,s,c){let f=typeof u=="string"?wl(u):u,h=wa(f.pathname||"/",s);if(h==null)return null;let v=Lp(l);a1(v);let w=null;for(let g=0;w==null&&g<v.length;++g){let p=m1(h);w=d1(v[g],p,c)}return w}function Lp(l,u=[],s=[],c=""){let f=(h,v,w)=>{let g={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};g.relativePath.startsWith("/")&&(_e(g.relativePath.startsWith(c),`Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(c.length));let p=ja([c,g.relativePath]),E=s.concat(g);h.children&&h.children.length>0&&(_e(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Lp(h.children,u,E,p)),!(h.path==null&&!h.index)&&u.push({path:p,score:c1(p,h.index),routesMeta:E})};return l.forEach((h,v)=>{var w;if(h.path===""||!((w=h.path)!=null&&w.includes("?")))f(h,v);else for(let g of kp(h.path))f(h,v,g)}),u}function kp(l){let u=l.split("/");if(u.length===0)return[];let[s,...c]=u,f=s.endsWith("?"),h=s.replace(/\?$/,"");if(c.length===0)return f?[h,""]:[h];let v=kp(c.join("/")),w=[];return w.push(...v.map(g=>g===""?h:[h,g].join("/"))),f&&w.push(...v),w.map(g=>l.startsWith("/")&&g===""?"/":g)}function a1(l){l.sort((u,s)=>u.score!==s.score?s.score-u.score:s1(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var n1=/^:[\w-]+$/,l1=3,i1=2,r1=1,o1=10,u1=-2,ip=l=>l==="*";function c1(l,u){let s=l.split("/"),c=s.length;return s.some(ip)&&(c+=u1),u&&(c+=i1),s.filter(f=>!ip(f)).reduce((f,h)=>f+(n1.test(h)?l1:h===""?r1:o1),c)}function s1(l,u){return l.length===u.length&&l.slice(0,-1).every((c,f)=>c===u[f])?l[l.length-1]-u[u.length-1]:0}function d1(l,u,s=!1){let{routesMeta:c}=l,f={},h="/",v=[];for(let w=0;w<c.length;++w){let g=c[w],p=w===c.length-1,E=h==="/"?u:u.slice(h.length)||"/",M=To({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},E),C=g.route;if(!M&&p&&s&&!c[c.length-1].route.index&&(M=To({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!M)return null;Object.assign(f,M.params),v.push({params:f,pathname:ja([h,M.pathname]),pathnameBase:x1(ja([h,M.pathnameBase])),route:C}),M.pathnameBase!=="/"&&(h=ja([h,M.pathnameBase]))}return v}function To(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=f1(l.path,l.caseSensitive,l.end),f=u.match(s);if(!f)return null;let h=f[0],v=h.replace(/(.)\/+$/,"$1"),w=f.slice(1);return{params:c.reduce((p,{paramName:E,isOptional:M},C)=>{if(E==="*"){let N=w[C]||"";v=h.slice(0,h.length-N.length).replace(/(.)\/+$/,"$1")}const _=w[C];return M&&!_?p[E]=void 0:p[E]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:v,pattern:l}}function f1(l,u=!1,s=!0){ea(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,w,g)=>(c.push({paramName:w,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),c]}function m1(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return ea(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function wa(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}function h1(l,u="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?wl(l):l;return{pathname:s?s.startsWith("/")?s:p1(s,u):u,search:v1(c),hash:y1(f)}}function p1(l,u){let s=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function ss(l,u,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function g1(l){return l.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Yp(l){let u=g1(l);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function qp(l,u,s,c=!1){let f;typeof l=="string"?f=wl(l):(f={...l},_e(!f.pathname||!f.pathname.includes("?"),ss("?","pathname","search",f)),_e(!f.pathname||!f.pathname.includes("#"),ss("#","pathname","hash",f)),_e(!f.search||!f.search.includes("#"),ss("#","search","hash",f)));let h=l===""||f.pathname==="",v=h?"/":f.pathname,w;if(v==null)w=s;else{let M=u.length-1;if(!c&&v.startsWith("..")){let C=v.split("/");for(;C[0]==="..";)C.shift(),M-=1;f.pathname=C.join("/")}w=M>=0?u[M]:"/"}let g=h1(f,w),p=v&&v!=="/"&&v.endsWith("/"),E=(h||v===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(p||E)&&(g.pathname+="/"),g}var ja=l=>l.join("/").replace(/\/\/+/g,"/"),x1=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),v1=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,y1=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function b1(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Gp=["POST","PUT","PATCH","DELETE"];new Set(Gp);var S1=["GET",...Gp];new Set(S1);var zl=j.createContext(null);zl.displayName="DataRouter";var _o=j.createContext(null);_o.displayName="DataRouterState";var Xp=j.createContext({isTransitioning:!1});Xp.displayName="ViewTransition";var j1=j.createContext(new Map);j1.displayName="Fetchers";var w1=j.createContext(null);w1.displayName="Await";var ta=j.createContext(null);ta.displayName="Navigation";var Mi=j.createContext(null);Mi.displayName="Location";var za=j.createContext({outlet:null,matches:[],isDataRoute:!1});za.displayName="Route";var Qs=j.createContext(null);Qs.displayName="RouteError";function z1(l,{relative:u}={}){_e(_i(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=j.useContext(ta),{hash:f,pathname:h,search:v}=Bi(l,{relative:u}),w=h;return s!=="/"&&(w=h==="/"?s:ja([s,h])),c.createHref({pathname:w,search:v,hash:f})}function _i(){return j.useContext(Mi)!=null}function aa(){return _e(_i(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Mi).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vp(l){j.useContext(ta).static||j.useLayoutEffect(l)}function bn(){let{isDataRoute:l}=j.useContext(za);return l?H1():E1()}function E1(){_e(_i(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(zl),{basename:u,navigator:s}=j.useContext(ta),{matches:c}=j.useContext(za),{pathname:f}=aa(),h=JSON.stringify(Yp(c)),v=j.useRef(!1);return Vp(()=>{v.current=!0}),j.useCallback((g,p={})=>{if(ea(v.current,Qp),!v.current)return;if(typeof g=="number"){s.go(g);return}let E=qp(g,JSON.parse(h),f,p.relative==="path");l==null&&u!=="/"&&(E.pathname=E.pathname==="/"?u:ja([u,E.pathname])),(p.replace?s.replace:s.push)(E,p.state,p)},[u,s,h,f,l])}j.createContext(null);function Bi(l,{relative:u}={}){let{matches:s}=j.useContext(za),{pathname:c}=aa(),f=JSON.stringify(Yp(s));return j.useMemo(()=>qp(l,JSON.parse(f),c,u==="path"),[l,f,c,u])}function A1(l,u){return Zp(l,u)}function Zp(l,u,s,c){var B;_e(_i(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(ta),{matches:h}=j.useContext(za),v=h[h.length-1],w=v?v.params:{},g=v?v.pathname:"/",p=v?v.pathnameBase:"/",E=v&&v.route;{let q=E&&E.path||"";Kp(g,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let M=aa(),C;if(u){let q=typeof u=="string"?wl(u):u;_e(p==="/"||((B=q.pathname)==null?void 0:B.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${q.pathname}" was given in the \`location\` prop.`),C=q}else C=M;let _=C.pathname||"/",N=_;if(p!=="/"){let q=p.replace(/^\//,"").split("/");N="/"+_.replace(/^\//,"").split("/").slice(q.length).join("/")}let G=Hp(l,{pathname:N});ea(E||G!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),ea(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=O1(G&&G.map(q=>Object.assign({},q,{params:Object.assign({},w,q.params),pathname:ja([p,f.encodeLocation?f.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?p:ja([p,f.encodeLocation?f.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),h,s,c);return u&&L?j.createElement(Mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},L):L}function T1(){let l=U1(),u=b1(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},h={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",l),v=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:h},"ErrorBoundary")," or"," ",j.createElement("code",{style:h},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},u),s?j.createElement("pre",{style:f},s):null,v)}var C1=j.createElement(T1,null),R1=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?j.createElement(za.Provider,{value:this.props.routeContext},j.createElement(Qs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D1({routeContext:l,match:u,children:s}){let c=j.useContext(zl);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),j.createElement(za.Provider,{value:l},s)}function O1(l,u=[],s=null,c=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(u.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let f=l,h=s==null?void 0:s.errors;if(h!=null){let g=f.findIndex(p=>p.route.id&&(h==null?void 0:h[p.route.id])!==void 0);_e(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,g+1))}let v=!1,w=-1;if(s)for(let g=0;g<f.length;g++){let p=f[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(w=g),p.route.id){let{loaderData:E,errors:M}=s,C=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!M||M[p.route.id]===void 0);if(p.route.lazy||C){v=!0,w>=0?f=f.slice(0,w+1):f=[f[0]];break}}}return f.reduceRight((g,p,E)=>{let M,C=!1,_=null,N=null;s&&(M=h&&p.route.id?h[p.route.id]:void 0,_=p.route.errorElement||C1,v&&(w<0&&E===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,N=null):w===E&&(C=!0,N=p.route.hydrateFallbackElement||null)));let G=u.concat(f.slice(0,E+1)),L=()=>{let B;return M?B=_:C?B=N:p.route.Component?B=j.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=g,j.createElement(D1,{match:p,routeContext:{outlet:g,matches:G,isDataRoute:s!=null},children:B})};return s&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?j.createElement(R1,{location:s.location,revalidation:s.revalidation,component:_,error:M,children:L(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):L()},null)}function Vs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N1(l){let u=j.useContext(zl);return _e(u,Vs(l)),u}function M1(l){let u=j.useContext(_o);return _e(u,Vs(l)),u}function _1(l){let u=j.useContext(za);return _e(u,Vs(l)),u}function Zs(l){let u=_1(l),s=u.matches[u.matches.length-1];return _e(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function B1(){return Zs("useRouteId")}function U1(){var c;let l=j.useContext(Qs),u=M1("useRouteError"),s=Zs("useRouteError");return l!==void 0?l:(c=u.errors)==null?void 0:c[s]}function H1(){let{router:l}=N1("useNavigate"),u=Zs("useNavigate"),s=j.useRef(!1);return Vp(()=>{s.current=!0}),j.useCallback(async(f,h={})=>{ea(s.current,Qp),s.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:u,...h}))},[l,u])}var rp={};function Kp(l,u,s){!u&&!rp[l]&&(rp[l]=!0,ea(!1,s))}j.memo(L1);function L1({routes:l,future:u,state:s}){return Zp(l,void 0,s,u)}function kt(l){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k1({basename:l="/",children:u=null,location:s,navigationType:c="POP",navigator:f,static:h=!1}){_e(!_i(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),w=j.useMemo(()=>({basename:v,navigator:f,static:h,future:{}}),[v,f,h]);typeof s=="string"&&(s=wl(s));let{pathname:g="/",search:p="",hash:E="",state:M=null,key:C="default"}=s,_=j.useMemo(()=>{let N=wa(g,v);return N==null?null:{location:{pathname:N,search:p,hash:E,state:M,key:C},navigationType:c}},[v,g,p,E,M,C,c]);return ea(_!=null,`<Router basename="${v}"> is not able to match the URL "${g}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:j.createElement(ta.Provider,{value:w},j.createElement(Mi.Provider,{children:u,value:_}))}function Y1({children:l,location:u}){return A1(Bs(l),u)}function Bs(l,u=[]){let s=[];return j.Children.forEach(l,(c,f)=>{if(!j.isValidElement(c))return;let h=[...u,f];if(c.type===j.Fragment){s.push.apply(s,Bs(c.props.children,h));return}_e(c.type===kt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=Bs(c.props.children,h)),s.push(v)}),s}var bo="get",So="application/x-www-form-urlencoded";function Bo(l){return l!=null&&typeof l.tagName=="string"}function q1(l){return Bo(l)&&l.tagName.toLowerCase()==="button"}function G1(l){return Bo(l)&&l.tagName.toLowerCase()==="form"}function X1(l){return Bo(l)&&l.tagName.toLowerCase()==="input"}function Q1(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function V1(l,u){return l.button===0&&(!u||u==="_self")&&!Q1(l)}var Pr=null;function Z1(){if(Pr===null)try{new FormData(document.createElement("form"),0),Pr=!1}catch{Pr=!0}return Pr}var K1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ds(l){return l!=null&&!K1.has(l)?(ea(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${So}"`),null):l}function J1(l,u){let s,c,f,h,v;if(G1(l)){let w=l.getAttribute("action");c=w?wa(w,u):null,s=l.getAttribute("method")||bo,f=ds(l.getAttribute("enctype"))||So,h=new FormData(l)}else if(q1(l)||X1(l)&&(l.type==="submit"||l.type==="image")){let w=l.form;if(w==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||w.getAttribute("action");if(c=g?wa(g,u):null,s=l.getAttribute("formmethod")||w.getAttribute("method")||bo,f=ds(l.getAttribute("formenctype"))||ds(w.getAttribute("enctype"))||So,h=new FormData(w,l),!Z1()){let{name:p,type:E,value:M}=l;if(E==="image"){let C=p?`${p}.`:"";h.append(`${C}x`,"0"),h.append(`${C}y`,"0")}else p&&h.append(p,M)}}else{if(Bo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=bo,c=null,f=So,v=l}return h&&f==="text/plain"&&(v=h,h=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:h,body:v}}function Ks(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}async function $1(l,u){if(l.id in u)return u[l.id];try{let s=await import(l.module);return u[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function W1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function F1(l,u,s){let c=await Promise.all(l.map(async f=>{let h=u.routes[f.route.id];if(h){let v=await $1(h,s);return v.links?v.links():[]}return[]}));return tv(c.flat(1).filter(W1).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function op(l,u,s,c,f,h){let v=(g,p)=>s[p]?g.route.id!==s[p].route.id:!0,w=(g,p)=>{var E;return s[p].pathname!==g.pathname||((E=s[p].route.path)==null?void 0:E.endsWith("*"))&&s[p].params["*"]!==g.params["*"]};return h==="assets"?u.filter((g,p)=>v(g,p)||w(g,p)):h==="data"?u.filter((g,p)=>{var M;let E=c.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(v(g,p)||w(g,p))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((M=s[0])==null?void 0:M.params)||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function I1(l,u,{includeHydrateFallback:s}={}){return P1(l.map(c=>{let f=u.routes[c.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function P1(l){return[...new Set(l)]}function ev(l){let u={},s=Object.keys(l).sort();for(let c of s)u[c]=l[c];return u}function tv(l,u){let s=new Set;return new Set(u),l.reduce((c,f)=>{let h=JSON.stringify(ev(f));return s.has(h)||(s.add(h),c.push({key:h,link:f})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var av=new Set([100,101,204,205]);function nv(l,u){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname="_root.data":u&&wa(s.pathname,u)==="/"?s.pathname=`${u.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function Jp(){let l=j.useContext(zl);return Ks(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function lv(){let l=j.useContext(_o);return Ks(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Js=j.createContext(void 0);Js.displayName="FrameworkContext";function $p(){let l=j.useContext(Js);return Ks(l,"You must render this element inside a <HydratedRouter> element"),l}function iv(l,u){let s=j.useContext(Js),[c,f]=j.useState(!1),[h,v]=j.useState(!1),{onFocus:w,onBlur:g,onMouseEnter:p,onMouseLeave:E,onTouchStart:M}=u,C=j.useRef(null);j.useEffect(()=>{if(l==="render"&&v(!0),l==="viewport"){let G=B=>{B.forEach(q=>{v(q.isIntersecting)})},L=new IntersectionObserver(G,{threshold:.5});return C.current&&L.observe(C.current),()=>{L.disconnect()}}},[l]),j.useEffect(()=>{if(c){let G=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(G)}}},[c]);let _=()=>{f(!0)},N=()=>{f(!1),v(!1)};return s?l!=="intent"?[h,C,{}]:[h,C,{onFocus:Ai(w,_),onBlur:Ai(g,N),onMouseEnter:Ai(p,_),onMouseLeave:Ai(E,N),onTouchStart:Ai(M,_)}]:[!1,C,{}]}function Ai(l,u){return s=>{l&&l(s),s.defaultPrevented||u(s)}}function rv({page:l,...u}){let{router:s}=Jp(),c=j.useMemo(()=>Hp(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?j.createElement(uv,{page:l,matches:c,...u}):null}function ov(l){let{manifest:u,routeModules:s}=$p(),[c,f]=j.useState([]);return j.useEffect(()=>{let h=!1;return F1(l,u,s).then(v=>{h||f(v)}),()=>{h=!0}},[l,u,s]),c}function uv({page:l,matches:u,...s}){let c=aa(),{manifest:f,routeModules:h}=$p(),{basename:v}=Jp(),{loaderData:w,matches:g}=lv(),p=j.useMemo(()=>op(l,u,g,f,c,"data"),[l,u,g,f,c]),E=j.useMemo(()=>op(l,u,g,f,c,"assets"),[l,u,g,f,c]),M=j.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let N=new Set,G=!1;if(u.forEach(B=>{var X;let q=f.routes[B.route.id];!q||!q.hasLoader||(!p.some(J=>J.route.id===B.route.id)&&B.route.id in w&&((X=h[B.route.id])!=null&&X.shouldRevalidate)||q.hasClientLoader?G=!0:N.add(B.route.id))}),N.size===0)return[];let L=nv(l,v);return G&&N.size>0&&L.searchParams.set("_routes",u.filter(B=>N.has(B.route.id)).map(B=>B.route.id).join(",")),[L.pathname+L.search]},[v,w,c,f,p,u,l,h]),C=j.useMemo(()=>I1(E,f),[E,f]),_=ov(E);return j.createElement(j.Fragment,null,M.map(N=>j.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...s})),C.map(N=>j.createElement("link",{key:N,rel:"modulepreload",href:N,...s})),_.map(({key:N,link:G})=>j.createElement("link",{key:N,...G})))}function cv(...l){return u=>{l.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wp&&(window.__reactRouterVersion="7.6.2")}catch{}function sv({basename:l,children:u,window:s}){let c=j.useRef();c.current==null&&(c.current=Fx({window:s,v5Compat:!0}));let f=c.current,[h,v]=j.useState({action:f.action,location:f.location}),w=j.useCallback(g=>{j.startTransition(()=>v(g))},[v]);return j.useLayoutEffect(()=>f.listen(w),[f,w]),j.createElement(k1,{basename:l,children:u,location:h.location,navigationType:h.action,navigator:f})}var Fp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=j.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:f,reloadDocument:h,replace:v,state:w,target:g,to:p,preventScrollReset:E,viewTransition:M,...C},_){let{basename:N}=j.useContext(ta),G=typeof p=="string"&&Fp.test(p),L,B=!1;if(typeof p=="string"&&G&&(L=p,Wp))try{let he=new URL(window.location.href),De=p.startsWith("//")?new URL(he.protocol+p):new URL(p),Ye=wa(De.pathname,N);De.origin===he.origin&&Ye!=null?p=Ye+De.search+De.hash:B=!0}catch{ea(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=z1(p,{relative:f}),[X,J,Q]=iv(c,C),ae=hv(p,{replace:v,state:w,target:g,preventScrollReset:E,relative:f,viewTransition:M});function $(he){u&&u(he),he.defaultPrevented||ae(he)}let ge=j.createElement("a",{...C,...Q,href:L||q,onClick:B||h?u:$,ref:cv(_,J),target:g,"data-discover":!G&&s==="render"?"true":void 0});return X&&!G?j.createElement(j.Fragment,null,ge,j.createElement(rv,{page:q})):ge});Ke.displayName="Link";var dv=j.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:f=!1,style:h,to:v,viewTransition:w,children:g,...p},E){let M=Bi(v,{relative:p.relative}),C=aa(),_=j.useContext(_o),{navigator:N,basename:G}=j.useContext(ta),L=_!=null&&yv(M)&&w===!0,B=N.encodeLocation?N.encodeLocation(M).pathname:M.pathname,q=C.pathname,X=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(q=q.toLowerCase(),X=X?X.toLowerCase():null,B=B.toLowerCase()),X&&G&&(X=wa(X,G)||X);const J=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Q=q===B||!f&&q.startsWith(B)&&q.charAt(J)==="/",ae=X!=null&&(X===B||!f&&X.startsWith(B)&&X.charAt(B.length)==="/"),$={isActive:Q,isPending:ae,isTransitioning:L},ge=Q?u:void 0,he;typeof c=="function"?he=c($):he=[c,Q?"active":null,ae?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let De=typeof h=="function"?h($):h;return j.createElement(Ke,{...p,"aria-current":ge,className:he,ref:E,style:De,to:v,viewTransition:w},typeof g=="function"?g($):g)});dv.displayName="NavLink";var fv=j.forwardRef(({discover:l="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:f,state:h,method:v=bo,action:w,onSubmit:g,relative:p,preventScrollReset:E,viewTransition:M,...C},_)=>{let N=xv(),G=vv(w,{relative:p}),L=v.toLowerCase()==="get"?"get":"post",B=typeof w=="string"&&Fp.test(w),q=X=>{if(g&&g(X),X.defaultPrevented)return;X.preventDefault();let J=X.nativeEvent.submitter,Q=(J==null?void 0:J.getAttribute("formmethod"))||v;N(J||X.currentTarget,{fetcherKey:u,method:Q,navigate:s,replace:f,state:h,relative:p,preventScrollReset:E,viewTransition:M})};return j.createElement("form",{ref:_,method:L,action:G,onSubmit:c?g:q,...C,"data-discover":!B&&l==="render"?"true":void 0})});fv.displayName="Form";function mv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ip(l){let u=j.useContext(zl);return _e(u,mv(l)),u}function hv(l,{target:u,replace:s,state:c,preventScrollReset:f,relative:h,viewTransition:v}={}){let w=bn(),g=aa(),p=Bi(l,{relative:h});return j.useCallback(E=>{if(V1(E,u)){E.preventDefault();let M=s!==void 0?s:Oi(g)===Oi(p);w(l,{replace:M,state:c,preventScrollReset:f,relative:h,viewTransition:v})}},[g,w,p,s,c,u,l,f,h,v])}var pv=0,gv=()=>`__${String(++pv)}__`;function xv(){let{router:l}=Ip("useSubmit"),{basename:u}=j.useContext(ta),s=B1();return j.useCallback(async(c,f={})=>{let{action:h,method:v,encType:w,formData:g,body:p}=J1(c,u);if(f.navigate===!1){let E=f.fetcherKey||gv();await l.fetch(E,s,f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||v,formEncType:f.encType||w,flushSync:f.flushSync})}else await l.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:g,body:p,formMethod:f.method||v,formEncType:f.encType||w,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,u,s])}function vv(l,{relative:u}={}){let{basename:s}=j.useContext(ta),c=j.useContext(za);_e(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),h={...Bi(l||".",{relative:u})},v=aa();if(l==null){h.search=v.search;let w=new URLSearchParams(h.search),g=w.getAll("index");if(g.some(E=>E==="")){w.delete("index"),g.filter(M=>M).forEach(M=>w.append("index",M));let E=w.toString();h.search=E?`?${E}`:""}}return(!l||l===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:ja([s,h.pathname])),Oi(h)}function yv(l,u={}){let s=j.useContext(Xp);_e(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ip("useViewTransitionState"),f=Bi(l,{relative:u.relative});if(!s.isTransitioning)return!1;let h=wa(s.currentLocation.pathname,c)||s.currentLocation.pathname,v=wa(s.nextLocation.pathname,c)||s.nextLocation.pathname;return To(f.pathname,v)!=null||To(f.pathname,h)!=null}[...av];const Pp=j.createContext(),bv=({children:l})=>{const[u,s]=j.useState("ar"),c=()=>{s(f=>f==="ar"?"en":"ar")};return r.jsx(Pp.Provider,{value:{language:u,toggleLanguage:c},children:l})},Tt=()=>{const l=j.useContext(Pp);if(!l)throw new Error("useLanguage must be used within a LanguageProvider");return l};var xt=function(){return xt=Object.assign||function(u){for(var s,c=1,f=arguments.length;c<f;c++){s=arguments[c];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(u[h]=s[h])}return u},xt.apply(this,arguments)};function Co(l,u,s){if(s||arguments.length===2)for(var c=0,f=u.length,h;c<f;c++)(h||!(c in u))&&(h||(h=Array.prototype.slice.call(u,0,c)),h[c]=u[c]);return l.concat(h||Array.prototype.slice.call(u))}var Ce="-ms-",Di="-moz-",be="-webkit-",eg="comm",Uo="rule",$s="decl",Sv="@import",tg="@keyframes",jv="@layer",ag=Math.abs,Ws=String.fromCharCode,Us=Object.assign;function wv(l,u){return Ie(l,0)^45?(((u<<2^Ie(l,0))<<2^Ie(l,1))<<2^Ie(l,2))<<2^Ie(l,3):0}function ng(l){return l.trim()}function ba(l,u){return(l=u.exec(l))?l[0]:l}function ce(l,u,s){return l.replace(u,s)}function jo(l,u,s){return l.indexOf(u,s)}function Ie(l,u){return l.charCodeAt(u)|0}function vl(l,u,s){return l.slice(u,s)}function Pt(l){return l.length}function lg(l){return l.length}function Ri(l,u){return u.push(l),l}function zv(l,u){return l.map(u).join("")}function up(l,u){return l.filter(function(s){return!ba(s,u)})}var Ho=1,yl=1,ig=0,qt=0,Xe=0,El="";function Lo(l,u,s,c,f,h,v,w){return{value:l,root:u,parent:s,type:c,props:f,children:h,line:Ho,column:yl,length:v,return:"",siblings:w}}function Fa(l,u){return Us(Lo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function ml(l){for(;l.root;)l=Fa(l.root,{children:[l]});Ri(l,l.siblings)}function Ev(){return Xe}function Av(){return Xe=qt>0?Ie(El,--qt):0,yl--,Xe===10&&(yl=1,Ho--),Xe}function Vt(){return Xe=qt<ig?Ie(El,qt++):0,yl++,Xe===10&&(yl=1,Ho++),Xe}function vn(){return Ie(El,qt)}function wo(){return qt}function ko(l,u){return vl(El,l,u)}function Hs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tv(l){return Ho=yl=1,ig=Pt(El=l),qt=0,[]}function Cv(l){return El="",l}function fs(l){return ng(ko(qt-1,Ls(l===91?l+2:l===40?l+1:l)))}function Rv(l){for(;(Xe=vn())&&Xe<33;)Vt();return Hs(l)>2||Hs(Xe)>3?"":" "}function Dv(l,u){for(;--u&&Vt()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return ko(l,wo()+(u<6&&vn()==32&&Vt()==32))}function Ls(l){for(;Vt();)switch(Xe){case l:return qt;case 34:case 39:l!==34&&l!==39&&Ls(Xe);break;case 40:l===41&&Ls(l);break;case 92:Vt();break}return qt}function Ov(l,u){for(;Vt()&&l+Xe!==57;)if(l+Xe===84&&vn()===47)break;return"/*"+ko(u,qt-1)+"*"+Ws(l===47?l:Vt())}function Nv(l){for(;!Hs(vn());)Vt();return ko(l,qt)}function Mv(l){return Cv(zo("",null,null,null,[""],l=Tv(l),0,[0],l))}function zo(l,u,s,c,f,h,v,w,g){for(var p=0,E=0,M=v,C=0,_=0,N=0,G=1,L=1,B=1,q=0,X="",J=f,Q=h,ae=c,$=X;L;)switch(N=q,q=Vt()){case 40:if(N!=108&&Ie($,M-1)==58){jo($+=ce(fs(q),"&","&\f"),"&\f",ag(p?w[p-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:$+=fs(q);break;case 9:case 10:case 13:case 32:$+=Rv(N);break;case 92:$+=Dv(wo()-1,7);continue;case 47:switch(vn()){case 42:case 47:Ri(_v(Ov(Vt(),wo()),u,s,g),g);break;default:$+="/"}break;case 123*G:w[p++]=Pt($)*B;case 125*G:case 59:case 0:switch(q){case 0:case 125:L=0;case 59+E:B==-1&&($=ce($,/\f/g,"")),_>0&&Pt($)-M&&Ri(_>32?sp($+";",c,s,M-1,g):sp(ce($," ","")+";",c,s,M-2,g),g);break;case 59:$+=";";default:if(Ri(ae=cp($,u,s,p,E,f,w,X,J=[],Q=[],M,h),h),q===123)if(E===0)zo($,u,ae,ae,J,h,M,w,Q);else switch(C===99&&Ie($,3)===110?100:C){case 100:case 108:case 109:case 115:zo(l,ae,ae,c&&Ri(cp(l,ae,ae,0,0,f,w,X,f,J=[],M,Q),Q),f,Q,M,w,c?J:Q);break;default:zo($,ae,ae,ae,[""],Q,0,w,Q)}}p=E=_=0,G=B=1,X=$="",M=v;break;case 58:M=1+Pt($),_=N;default:if(G<1){if(q==123)--G;else if(q==125&&G++==0&&Av()==125)continue}switch($+=Ws(q),q*G){case 38:B=E>0?1:($+="\f",-1);break;case 44:w[p++]=(Pt($)-1)*B,B=1;break;case 64:vn()===45&&($+=fs(Vt())),C=vn(),E=M=Pt(X=$+=Nv(wo())),q++;break;case 45:N===45&&Pt($)==2&&(G=0)}}return h}function cp(l,u,s,c,f,h,v,w,g,p,E,M){for(var C=f-1,_=f===0?h:[""],N=lg(_),G=0,L=0,B=0;G<c;++G)for(var q=0,X=vl(l,C+1,C=ag(L=v[G])),J=l;q<N;++q)(J=ng(L>0?_[q]+" "+X:ce(X,/&\f/g,_[q])))&&(g[B++]=J);return Lo(l,u,s,f===0?Uo:w,g,p,E,M)}function _v(l,u,s,c){return Lo(l,u,s,eg,Ws(Ev()),vl(l,2,-2),0,c)}function sp(l,u,s,c,f){return Lo(l,u,s,$s,vl(l,0,c),vl(l,c+1,-1),c,f)}function rg(l,u,s){switch(wv(l,u)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return Di+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+Di+l+Ce+l+l;case 5936:switch(Ie(l,u+11)){case 114:return be+l+Ce+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Ce+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Ce+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Ce+l+l;case 6165:return be+l+Ce+"flex-"+l+l;case 5187:return be+l+ce(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Ce+"flex-$1$2")+l;case 5443:return be+l+Ce+"flex-item-"+ce(l,/flex-|-self/g,"")+(ba(l,/flex-|baseline/)?"":Ce+"grid-row-"+ce(l,/flex-|-self/g,""))+l;case 4675:return be+l+Ce+"flex-line-pack"+ce(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Ce+ce(l,"shrink","negative")+l;case 5292:return be+l+Ce+ce(l,"basis","preferred-size")+l;case 6060:return be+"box-"+ce(l,"-grow","")+be+l+Ce+ce(l,"grow","positive")+l;case 4554:return be+ce(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!ba(l,/flex-|baseline/))return Ce+"grid-column-align"+vl(l,u)+l;break;case 2592:case 3360:return Ce+ce(l,"template-","")+l;case 4384:case 3616:return s&&s.some(function(c,f){return u=f,ba(c.props,/grid-\w+-end/)})?~jo(l+(s=s[u].value),"span",0)?l:Ce+ce(l,"-start","")+l+Ce+"grid-row-span:"+(~jo(s,"span",0)?ba(s,/\d+/):+ba(s,/\d+/)-+ba(l,/\d+/))+";":Ce+ce(l,"-start","")+l;case 4896:case 4128:return s&&s.some(function(c){return ba(c.props,/grid-\w+-start/)})?l:Ce+ce(ce(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(l)-1-u>6)switch(Ie(l,u+1)){case 109:if(Ie(l,u+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Di+(Ie(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~jo(l,"stretch",0)?rg(ce(l,"stretch","fill-available"),u,s)+l:l}break;case 5152:case 5920:return ce(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,h,v,w,g,p){return Ce+f+":"+h+p+(v?Ce+f+"-span:"+(w?g:+g-+h)+p:"")+l});case 4949:if(Ie(l,u+6)===121)return ce(l,":",":"+be)+l;break;case 6444:switch(Ie(l,Ie(l,14)===45?18:11)){case 120:return ce(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Ie(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Ce+"$2box$3")+l;case 100:return ce(l,":",":"+Ce)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(l,"scroll-","scroll-snap-")+l}return l}function Ro(l,u){for(var s="",c=0;c<l.length;c++)s+=u(l[c],c,l,u)||"";return s}function Bv(l,u,s,c){switch(l.type){case jv:if(l.children.length)break;case Sv:case $s:return l.return=l.return||l.value;case eg:return"";case tg:return l.return=l.value+"{"+Ro(l.children,c)+"}";case Uo:if(!Pt(l.value=l.props.join(",")))return""}return Pt(s=Ro(l.children,c))?l.return=l.value+"{"+s+"}":""}function Uv(l){var u=lg(l);return function(s,c,f,h){for(var v="",w=0;w<u;w++)v+=l[w](s,c,f,h)||"";return v}}function Hv(l){return function(u){u.root||(u=u.return)&&l(u)}}function Lv(l,u,s,c){if(l.length>-1&&!l.return)switch(l.type){case $s:l.return=rg(l.value,l.length,s);return;case tg:return Ro([Fa(l,{value:ce(l.value,"@","@"+be)})],c);case Uo:if(l.length)return zv(s=l.props,function(f){switch(ba(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ml(Fa(l,{props:[ce(f,/:(read-\w+)/,":"+Di+"$1")]})),ml(Fa(l,{props:[f]})),Us(l,{props:up(s,c)});break;case"::placeholder":ml(Fa(l,{props:[ce(f,/:(plac\w+)/,":"+be+"input-$1")]})),ml(Fa(l,{props:[ce(f,/:(plac\w+)/,":"+Di+"$1")]})),ml(Fa(l,{props:[ce(f,/:(plac\w+)/,Ce+"input-$1")]})),ml(Fa(l,{props:[f]})),Us(l,{props:up(s,c)});break}return""})}}var kv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},bl=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",og="active",ug="data-styled-version",Yo="6.1.18",Fs=`/*!sc*/
`,Do=typeof window<"u"&&typeof document<"u",Yv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),qo=Object.freeze([]),Sl=Object.freeze({});function qv(l,u,s){return s===void 0&&(s=Sl),l.theme!==s.theme&&l.theme||u||s.theme}var cg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xv=/(^-|-$)/g;function dp(l){return l.replace(Gv,"-").replace(Xv,"")}var Qv=/(a)(d)/gi,eo=52,fp=function(l){return String.fromCharCode(l+(l>25?39:97))};function ks(l){var u,s="";for(u=Math.abs(l);u>eo;u=u/eo|0)s=fp(u%eo)+s;return(fp(u%eo)+s).replace(Qv,"$1-$2")}var ms,sg=5381,xl=function(l,u){for(var s=u.length;s;)l=33*l^u.charCodeAt(--s);return l},dg=function(l){return xl(sg,l)};function Vv(l){return ks(dg(l)>>>0)}function Zv(l){return l.displayName||l.name||"Component"}function hs(l){return typeof l=="string"&&!0}var fg=typeof Symbol=="function"&&Symbol.for,mg=fg?Symbol.for("react.memo"):60115,Kv=fg?Symbol.for("react.forward_ref"):60112,Jv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wv=((ms={})[Kv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ms[mg]=hg,ms);function mp(l){return("type"in(u=l)&&u.type.$$typeof)===mg?hg:"$$typeof"in l?Wv[l.$$typeof]:Jv;var u}var Fv=Object.defineProperty,Iv=Object.getOwnPropertyNames,hp=Object.getOwnPropertySymbols,Pv=Object.getOwnPropertyDescriptor,ey=Object.getPrototypeOf,pp=Object.prototype;function pg(l,u,s){if(typeof u!="string"){if(pp){var c=ey(u);c&&c!==pp&&pg(l,c,s)}var f=Iv(u);hp&&(f=f.concat(hp(u)));for(var h=mp(l),v=mp(u),w=0;w<f.length;++w){var g=f[w];if(!(g in $v||s&&s[g]||v&&g in v||h&&g in h)){var p=Pv(u,g);try{Fv(l,g,p)}catch{}}}}return l}function jl(l){return typeof l=="function"}function Is(l){return typeof l=="object"&&"styledComponentId"in l}function xn(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function gp(l,u){if(l.length===0)return"";for(var s=l[0],c=1;c<l.length;c++)s+=l[c];return s}function Ni(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ys(l,u,s){if(s===void 0&&(s=!1),!s&&!Ni(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)l[c]=Ys(l[c],u[c]);else if(Ni(u))for(var c in u)l[c]=Ys(l[c],u[c]);return l}function Ps(l,u){Object.defineProperty(l,"toString",{value:u})}function Ui(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var ty=function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var s=0,c=0;c<u;c++)s+=this.groupSizes[c];return s},l.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,h=f;u>=h;)if((h<<=1)<0)throw Ui(16,"".concat(u));this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(var v=f;v<h;v++)this.groupSizes[v]=0}for(var w=this.indexOfGroup(u+1),g=(v=0,s.length);v<g;v++)this.tag.insertRule(w,s[v])&&(this.groupSizes[u]++,w++)},l.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],c=this.indexOfGroup(u),f=c+s;this.groupSizes[u]=0;for(var h=c;h<f;h++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var c=this.groupSizes[u],f=this.indexOfGroup(u),h=f+c,v=f;v<h;v++)s+="".concat(this.tag.getRule(v)).concat(Fs);return s},l}(),Eo=new Map,Oo=new Map,Ao=1,to=function(l){if(Eo.has(l))return Eo.get(l);for(;Oo.has(Ao);)Ao++;var u=Ao++;return Eo.set(l,u),Oo.set(u,l),u},ay=function(l,u){Ao=u+1,Eo.set(l,u),Oo.set(u,l)},ny="style[".concat(bl,"][").concat(ug,'="').concat(Yo,'"]'),ly=new RegExp("^".concat(bl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iy=function(l,u,s){for(var c,f=s.split(","),h=0,v=f.length;h<v;h++)(c=f[h])&&l.registerName(u,c)},ry=function(l,u){for(var s,c=((s=u.textContent)!==null&&s!==void 0?s:"").split(Fs),f=[],h=0,v=c.length;h<v;h++){var w=c[h].trim();if(w){var g=w.match(ly);if(g){var p=0|parseInt(g[1],10),E=g[2];p!==0&&(ay(E,p),iy(l,E,g[3]),l.getTag().insertRules(p,f)),f.length=0}else f.push(w)}}},xp=function(l){for(var u=document.querySelectorAll(ny),s=0,c=u.length;s<c;s++){var f=u[s];f&&f.getAttribute(bl)!==og&&(ry(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gg=function(l){var u=document.head,s=l||u,c=document.createElement("style"),f=function(w){var g=Array.from(w.querySelectorAll("style[".concat(bl,"]")));return g[g.length-1]}(s),h=f!==void 0?f.nextSibling:null;c.setAttribute(bl,og),c.setAttribute(ug,Yo);var v=oy();return v&&c.setAttribute("nonce",v),s.insertBefore(c,h),c},uy=function(){function l(u){this.element=gg(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var c=document.styleSheets,f=0,h=c.length;f<h;f++){var v=c[f];if(v.ownerNode===s)return v}throw Ui(17)}(this.element),this.length=0}return l.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},l}(),cy=function(){function l(u){this.element=gg(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var c=document.createTextNode(s);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l}(),sy=function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,s){return u<=this.length&&(this.rules.splice(u,0,s),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l}(),vp=Do,dy={isServer:!Do,useCSSOMInjection:!Yv},xg=function(){function l(u,s,c){u===void 0&&(u=Sl),s===void 0&&(s={});var f=this;this.options=xt(xt({},dy),u),this.gs=s,this.names=new Map(c),this.server=!!u.isServer,!this.server&&Do&&vp&&(vp=!1,xp(this)),Ps(this,function(){return function(h){for(var v=h.getTag(),w=v.length,g="",p=function(M){var C=function(B){return Oo.get(B)}(M);if(C===void 0)return"continue";var _=h.names.get(C),N=v.getGroup(M);if(_===void 0||!_.size||N.length===0)return"continue";var G="".concat(bl,".g").concat(M,'[id="').concat(C,'"]'),L="";_!==void 0&&_.forEach(function(B){B.length>0&&(L+="".concat(B,","))}),g+="".concat(N).concat(G,'{content:"').concat(L,'"}').concat(Fs)},E=0;E<w;E++)p(E);return g}(f)})}return l.registerId=function(u){return to(u)},l.prototype.rehydrate=function(){!this.server&&Do&&xp(this)},l.prototype.reconstructWithOptions=function(u,s){return s===void 0&&(s=!0),new l(xt(xt({},this.options),u),this.gs,s&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=function(s){var c=s.useCSSOMInjection,f=s.target;return s.isServer?new sy(f):c?new uy(f):new cy(f)}(this.options),new ty(u)));var u},l.prototype.hasNameForId=function(u,s){return this.names.has(u)&&this.names.get(u).has(s)},l.prototype.registerName=function(u,s){if(to(u),this.names.has(u))this.names.get(u).add(s);else{var c=new Set;c.add(s),this.names.set(u,c)}},l.prototype.insertRules=function(u,s,c){this.registerName(u,s),this.getTag().insertRules(to(u),c)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(to(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l}(),fy=/&/g,my=/^\s*\/\/.*$/gm;function vg(l,u){return l.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=vg(s.children,u)),s})}function hy(l){var u,s,c,f=Sl,h=f.options,v=h===void 0?Sl:h,w=f.plugins,g=w===void 0?qo:w,p=function(C,_,N){return N.startsWith(s)&&N.endsWith(s)&&N.replaceAll(s,"").length>0?".".concat(u):C},E=g.slice();E.push(function(C){C.type===Uo&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(fy,s).replace(c,p))}),v.prefix&&E.push(Lv),E.push(Bv);var M=function(C,_,N,G){_===void 0&&(_=""),N===void 0&&(N=""),G===void 0&&(G="&"),u=G,s=_,c=new RegExp("\\".concat(s,"\\b"),"g");var L=C.replace(my,""),B=Mv(N||_?"".concat(N," ").concat(_," { ").concat(L," }"):L);v.namespace&&(B=vg(B,v.namespace));var q=[];return Ro(B,Uv(E.concat(Hv(function(X){return q.push(X)})))),q};return M.hash=g.length?g.reduce(function(C,_){return _.name||Ui(15),xl(C,_.name)},sg).toString():"",M}var py=new xg,qs=hy(),yg=Yt.createContext({shouldForwardProp:void 0,styleSheet:py,stylis:qs});yg.Consumer;Yt.createContext(void 0);function yp(){return j.useContext(yg)}var gy=function(){function l(u,s){var c=this;this.inject=function(f,h){h===void 0&&(h=qs);var v=c.name+h.hash;f.hasNameForId(c.id,v)||f.insertRules(c.id,v,h(c.rules,v,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,Ps(this,function(){throw Ui(12,String(c.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=qs),this.name+u.hash},l}(),xy=function(l){return l>="A"&&l<="Z"};function bp(l){for(var u="",s=0;s<l.length;s++){var c=l[s];if(s===1&&c==="-"&&l[0]==="-")return l;xy(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var bg=function(l){return l==null||l===!1||l===""},Sg=function(l){var u,s,c=[];for(var f in l){var h=l[f];l.hasOwnProperty(f)&&!bg(h)&&(Array.isArray(h)&&h.isCss||jl(h)?c.push("".concat(bp(f),":"),h,";"):Ni(h)?c.push.apply(c,Co(Co(["".concat(f," {")],Sg(h),!1),["}"],!1)):c.push("".concat(bp(f),": ").concat((u=f,(s=h)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||u in kv||u.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return c};function yn(l,u,s,c){if(bg(l))return[];if(Is(l))return[".".concat(l.styledComponentId)];if(jl(l)){if(!jl(h=l)||h.prototype&&h.prototype.isReactComponent||!u)return[l];var f=l(u);return yn(f,u,s,c)}var h;return l instanceof gy?s?(l.inject(s,c),[l.getName(c)]):[l]:Ni(l)?Sg(l):Array.isArray(l)?Array.prototype.concat.apply(qo,l.map(function(v){return yn(v,u,s,c)})):[l.toString()]}function vy(l){for(var u=0;u<l.length;u+=1){var s=l[u];if(jl(s)&&!Is(s))return!1}return!0}var yy=dg(Yo),by=function(){function l(u,s,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&vy(u),this.componentId=s,this.baseHash=xl(yy,s),this.baseStyle=c,xg.registerId(s)}return l.prototype.generateAndInjectStyles=function(u,s,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))f=xn(f,this.staticRulesId);else{var h=gp(yn(this.rules,u,s,c)),v=ks(xl(this.baseHash,h)>>>0);if(!s.hasNameForId(this.componentId,v)){var w=c(h,".".concat(v),void 0,this.componentId);s.insertRules(this.componentId,v,w)}f=xn(f,v),this.staticRulesId=v}else{for(var g=xl(this.baseHash,c.hash),p="",E=0;E<this.rules.length;E++){var M=this.rules[E];if(typeof M=="string")p+=M;else if(M){var C=gp(yn(M,u,s,c));g=xl(g,C+E),p+=C}}if(p){var _=ks(g>>>0);s.hasNameForId(this.componentId,_)||s.insertRules(this.componentId,_,c(p,".".concat(_),void 0,this.componentId)),f=xn(f,_)}}return f},l}(),jg=Yt.createContext(void 0);jg.Consumer;var ps={};function Sy(l,u,s){var c=Is(l),f=l,h=!hs(l),v=u.attrs,w=v===void 0?qo:v,g=u.componentId,p=g===void 0?function(J,Q){var ae=typeof J!="string"?"sc":dp(J);ps[ae]=(ps[ae]||0)+1;var $="".concat(ae,"-").concat(Vv(Yo+ae+ps[ae]));return Q?"".concat(Q,"-").concat($):$}(u.displayName,u.parentComponentId):g,E=u.displayName,M=E===void 0?function(J){return hs(J)?"styled.".concat(J):"Styled(".concat(Zv(J),")")}(l):E,C=u.displayName&&u.componentId?"".concat(dp(u.displayName),"-").concat(u.componentId):u.componentId||p,_=c&&f.attrs?f.attrs.concat(w).filter(Boolean):w,N=u.shouldForwardProp;if(c&&f.shouldForwardProp){var G=f.shouldForwardProp;if(u.shouldForwardProp){var L=u.shouldForwardProp;N=function(J,Q){return G(J,Q)&&L(J,Q)}}else N=G}var B=new by(s,C,c?f.componentStyle:void 0);function q(J,Q){return function(ae,$,ge){var he=ae.attrs,De=ae.componentStyle,Ye=ae.defaultProps,Be=ae.foldedComponentIds,st=ae.styledComponentId,dt=ae.target,Oe=Yt.useContext(jg),O=yp(),V=ae.shouldForwardProp||O.shouldForwardProp,te=qv($,Oe,Ye)||Sl,oe=function(ue,I,Ne){for(var xe,Qe=xt(xt({},I),{className:void 0,theme:Ne}),Zt=0;Zt<ue.length;Zt+=1){var Ct=jl(xe=ue[Zt])?xe(Qe):xe;for(var at in Ct)Qe[at]=at==="className"?xn(Qe[at],Ct[at]):at==="style"?xt(xt({},Qe[at]),Ct[at]):Ct[at]}return I.className&&(Qe.className=xn(Qe.className,I.className)),Qe}(he,$,te),y=oe.as||dt,Y={};for(var Z in oe)oe[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&oe.theme===te||(Z==="forwardedAs"?Y.as=oe.forwardedAs:V&&!V(Z,y)||(Y[Z]=oe[Z]));var K=function(ue,I){var Ne=yp(),xe=ue.generateAndInjectStyles(I,Ne.styleSheet,Ne.stylis);return xe}(De,oe),F=xn(Be,st);return K&&(F+=" "+K),oe.className&&(F+=" "+oe.className),Y[hs(y)&&!cg.has(y)?"class":"className"]=F,ge&&(Y.ref=ge),j.createElement(y,Y)}(X,J,Q)}q.displayName=M;var X=Yt.forwardRef(q);return X.attrs=_,X.componentStyle=B,X.displayName=M,X.shouldForwardProp=N,X.foldedComponentIds=c?xn(f.foldedComponentIds,f.styledComponentId):"",X.styledComponentId=C,X.target=c?f.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?function(Q){for(var ae=[],$=1;$<arguments.length;$++)ae[$-1]=arguments[$];for(var ge=0,he=ae;ge<he.length;ge++)Ys(Q,he[ge],!0);return Q}({},f.defaultProps,J):J}}),Ps(X,function(){return".".concat(X.styledComponentId)}),h&&pg(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function Sp(l,u){for(var s=[l[0]],c=0,f=u.length;c<f;c+=1)s.push(u[c],l[c+1]);return s}var jp=function(l){return Object.assign(l,{isCss:!0})};function jy(l){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(jl(l)||Ni(l))return jp(yn(Sp(qo,Co([l],u,!0))));var c=l;return u.length===0&&c.length===1&&typeof c[0]=="string"?yn(c):jp(yn(Sp(c,u)))}function Gs(l,u,s){if(s===void 0&&(s=Sl),!u)throw Ui(1,u);var c=function(f){for(var h=[],v=1;v<arguments.length;v++)h[v-1]=arguments[v];return l(u,s,jy.apply(void 0,Co([f],h,!1)))};return c.attrs=function(f){return Gs(l,u,xt(xt({},s),{attrs:Array.prototype.concat(s.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return Gs(l,u,xt(xt({},s),f))},c}var wg=function(l){return Gs(Sy,l)},b=wg;cg.forEach(function(l){b[l]=wg(l)});const zg=j.createContext(),wy=({children:l})=>{const[u,s]=j.useState(!1);return r.jsx(zg.Provider,{value:{isSidebarOpen:u,setIsSidebarOpen:s},children:l})},Go=()=>j.useContext(zg),zy=b.nav`
  background: #00233d;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,Ey=b.div`
  max-width: 1200px;
 margin: 0 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`,Ay=b(Ke)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0;
  
  i {
    margin-left: 0.5rem;
    font-size: normal;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    i {
      font-size: 1.7rem;
    }
  }
`,Ty=b.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
  position: fixed;
 
  left: 1rem;
  z-index: 1002;

  @media (max-width: 768px) {
    top: 0.8rem;
    left: 0.8rem;
    gap: 1rem;
  }
`,Cy=b.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(360deg);
  }
`,Ry=b.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-right: 8px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(10,39,64,0.08);
  transition: color 0.2s;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.7em;
    margin-right: 4px;
  }
  
  &:hover, &focus {
 background: none;
  color: #ffb300;
  outline: none;
  }
`,Dy=b.div`
  position: fixed;
  top: 66px;
  left: ${l=>l.isOpen?"0":"-300px"};
  width: 280px;
  height: 100vh;
  background: #ffff;
  box-shadow: -2px 0 8px rgba(0,0,0,0.1);
  transition: width 0.3s ease;
  z-index: 1500;
  // padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    top: 70px;
    width: 250px;
  }
`,Oy=b.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    top: 0.8rem;
    right: 0.8rem;
    font-size: 1.1rem;
  }
  
  &:hover {
    color: #1976d2;
  }
`,Ny=b.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
  }
`,gn=b.li`
  margin-bottom: 0.5rem;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #00233d;
    padding: 0.75rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    // font-size: 1rem;
    flex-direction: row-reverse;
    gap: 1.5rem;
    
    @media (max-width: 768px) {
      padding: 0.6rem;
      gap: 1rem;
    }
    
    &:hover {
      background: #f5f5f5;
      color: #1976d2;
    }
    
    i {
      margin-left: 0.5rem;
      margin-right: 0;
      // width: 20px;
      text-align: center;
      font-size: 1.2rem;
      color: rgb(25, 118, 210);
    }
    span {
    flex-grow: 0.4;
    text-align: left;
    // opacity: 0;
    // transition: opacity 0.3s ease;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`,My=b.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`,_y=()=>{const{isSidebarOpen:l,setIsSidebarOpen:u}=Go(),[s,c]=j.useState(()=>localStorage.getItem("isLoggedIn")==="true"),[f,h]=j.useState(localStorage.getItem("avatar")||""),v=bn(),w=()=>{u(!l)},g=()=>{u(!1)},{language:p,toggleLanguage:E}=Tt(),M=C=>{C.preventDefault(),localStorage.removeItem("isLoggedIn"),c(!1),u(!1),v("/")};return r.jsxs(r.Fragment,{children:[r.jsx(zy,{children:r.jsxs(Ey,{children:[r.jsxs(Ay,{to:"/",children:[r.jsx("i",{className:"fas fa-plane-departure"}),"Tickify"]}),r.jsxs(Ty,{children:[r.jsx(Cy,{onClick:E,children:r.jsx("i",{className:"fas fa-globe"})}),s&&r.jsx(Ke,{to:"/profile",style:{color:"#fff",marginRight:"8px",fontSize:"1.6rem",display:"flex",alignItems:"center",textDecoration:"none"},children:f?r.jsx("img",{src:f,alt:"avatar",style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",border:"2px solid #fff",background:"#eee"}}):r.jsx("i",{className:"fas fa-user-circle"})}),r.jsx(Ry,{onClick:w,children:r.jsx("i",{className:"fas fa-bars"})})]})]})}),r.jsxs(Dy,{isOpen:l,children:[r.jsx(Oy,{onClick:g,children:r.jsx("i",{className:"fas fa-times"})}),r.jsxs(Ny,{children:[r.jsx(gn,{children:r.jsxs(Ke,{to:"/flights",children:[r.jsx("i",{className:"fas fa-plane"}),r.jsx("span",{children:"رحلات طيران"})]})}),r.jsx(gn,{children:r.jsxs(Ke,{to:"/hotels",children:[r.jsx("i",{className:"fas fa-hotel"}),r.jsx("span",{children:"الفنادق"})]})}),r.jsx(gn,{children:r.jsxs(Ke,{to:"/cars",children:[r.jsx("i",{className:"fas fa-car"}),r.jsx("span",{children:"السيارات"})]})}),r.jsx(My,{}),s?r.jsx(gn,{children:r.jsxs("a",{href:"/",onClick:M,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"#00233d",padding:"0.75rem",borderRadius:"8px",transition:"all 0.3s ease",flexDirection:"row-reverse",gap:"1.5rem"},children:[r.jsx("i",{className:"fas fa-sign-out-alt"}),r.jsx("span",{children:"تسجيل الخروج"})]})}):r.jsx(gn,{children:r.jsxs(Ke,{to:"/login",children:[r.jsx("i",{className:"fas fa-sign-in-alt"}),r.jsx("span",{children:"تسجيل الدخول"})]})}),r.jsx(gn,{children:r.jsxs(Ke,{to:"/app",children:[r.jsx("i",{className:"fas fa-mobile-alt"}),r.jsx("span",{children:"التطبيق"})]})}),r.jsx(gn,{children:r.jsxs(Ke,{to:"/help",children:[r.jsx("i",{className:"fas fa-question-circle"}),r.jsx("span",{children:"مساعدة"})]})})]})]})]})};var Eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wp=Yt.createContext&&Yt.createContext(Eg),By=["attr","size","title"];function Uy(l,u){if(l==null)return{};var s=Hy(l,u),c,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(f=0;f<h.length;f++)c=h[f],!(u.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(l,c)&&(s[c]=l[c])}return s}function Hy(l,u){if(l==null)return{};var s={};for(var c in l)if(Object.prototype.hasOwnProperty.call(l,c)){if(u.indexOf(c)>=0)continue;s[c]=l[c]}return s}function No(){return No=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(l[c]=s[c])}return l},No.apply(this,arguments)}function zp(l,u){var s=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);u&&(c=c.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),s.push.apply(s,c)}return s}function Mo(l){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?arguments[u]:{};u%2?zp(Object(s),!0).forEach(function(c){Ly(l,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(s)):zp(Object(s)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(s,c))})}return l}function Ly(l,u,s){return u=ky(u),u in l?Object.defineProperty(l,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[u]=s,l}function ky(l){var u=Yy(l,"string");return typeof u=="symbol"?u:u+""}function Yy(l,u){if(typeof l!="object"||!l)return l;var s=l[Symbol.toPrimitive];if(s!==void 0){var c=s.call(l,u);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(l)}function Ag(l){return l&&l.map((u,s)=>Yt.createElement(u.tag,Mo({key:s},u.attr),Ag(u.child)))}function na(l){return u=>Yt.createElement(qy,No({attr:Mo({},l.attr)},u),Ag(l.child))}function qy(l){var u=s=>{var{attr:c,size:f,title:h}=l,v=Uy(l,By),w=f||s.size||"1em",g;return s.className&&(g=s.className),l.className&&(g=(g?g+" ":"")+l.className),Yt.createElement("svg",No({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,c,v,{className:g,style:Mo(Mo({color:l.color||s.color},s.style),l.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),h&&Yt.createElement("title",null,h),l.children)};return wp!==void 0?Yt.createElement(wp.Consumer,null,s=>u(s)):u(Eg)}function Gy(l){return na({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(l)}function Xy(l){return na({attr:{viewBox:"0 0 480 512"},child:[{tag:"path",attr:{d:"M438.66 212.33l-11.24-28.1-19.93-49.83C390.38 91.63 349.57 64 303.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4l-19.93 49.83-11.24 28.1C17.22 221.5 0 244.66 0 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-27.34-17.22-50.5-41.34-59.67zm-306.73-54.16c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L368 208H112l19.93-49.83zM80 319.8c-19.2 0-32-12.76-32-31.9S60.8 256 80 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S380.8 256 400 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"},child:[]}]})(l)}function Ep(l){return na({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"},child:[]}]})(l)}function Qy(l){return na({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"},child:[]}]})(l)}function Vy(l){return na({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(l)}function Zy(l){return na({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(l)}function Ap(l){return na({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(l)}function Ky(l){return na({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"},child:[]}]})(l)}function Jy(l){return na({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(l)}const $y=b.div`
    max-width: 1400px;
    margin-top:-49px;
    margin-right: 20px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,Wy=b.section`
  background: url('/src/images/home.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 9rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  // margin-top: -8rem;
  // margin-right: -10rem;
  // margin-left: -10rem;
   width: 80rem;

  @media (max-width: 768px) {
  padding: 8rem 0rem;
  margin: -4rem -1rem 2rem -11rem;
  width: auto;
  border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 8rem 0.8rem;
    margin: -3rem -0.5rem 1.5rem -9.5rem;
    border-radius: 8px;
  }
`,Fy=b.h1`
    font-size: 3rem;
    margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
`,Iy=b.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,Py=b.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`,eb=b.button`
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid transparent;
    border-radius: 8px;
    color: var(--white);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 6px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
}

    &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }

  svg {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`,tb=b.div`
  // background: white;
  // max-width: 800px;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
    margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
  }
`,ab=b.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    align-items: end;
    padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,ao=b.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
  }
  
  input, select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.85rem;
      border-radius: 6px;
    }
    
    &:focus {
      outline: none;
    }

    &.error {
    border: 2px solid red !important;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.3) !important;
    }
  }
`,nb=b.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    grid-column: 1;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,lb=b.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0 10px;
  align-self: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    padding: 0 6px;
  }

  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-right: 22rem;

    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-right: 12rem;
    }
  }
`,ib=b.button`
  background: #1976d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    grid-column: 1;
  }
  
  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
`,rb=b.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 0;
  }
`,no=b.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }
  
  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`,ob=b.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,ub=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,lo=b.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,io=b.div`
  height: 200px;
  background-image: url(${l=>l.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160px;
  }
`,ro=b.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  p {
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,cb=()=>{const{language:l}=Tt(),[u,s]=j.useState("flights"),[c,f]=j.useState(!0),[h,v]=j.useState(""),[w,g]=j.useState(""),[p,E]=j.useState(""),[M,C]=j.useState("economy"),[_,N]=j.useState({}),G=bn(),L=()=>{const X=h;v(w),g(X)},B=()=>{const X={};return h.trim()||(X.origin=!0),w.trim()||(X.destination=!0),p||(X.departureDate=!0),N(X),Object.keys(X).length===0},q=X=>{X.preventDefault(),B()&&G("/flights/results",{state:{origin:h,destination:w,departureDate:p,cabinClass:M}})};return j.useEffect(()=>{setTimeout(()=>{f(!1)},2e3)},[]),c?r.jsx("div",{className:"loader-container",children:r.jsxs("div",{className:"loader",children:[r.jsx("div",{className:"loader-circle"}),r.jsx("div",{className:"loader-icon",children:r.jsx("i",{className:"fas fa-plane-departure"})})]})}):r.jsxs($y,{children:[r.jsxs(Wy,{children:[r.jsx(Fy,{children:l==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),r.jsx(Iy,{children:l==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),r.jsx(Py,{children:r.jsxs(eb,{className:u==="flights"?"active":"",onClick:()=>s("flights"),children:[r.jsx(Ky,{}),l==="ar"?"رحلات طيران":"Flights"]})}),r.jsx(tb,{children:r.jsxs(ab,{onSubmit:q,children:[r.jsxs(nb,{children:[r.jsxs(ao,{children:[r.jsx("label",{htmlFor:"origin",children:l==="ar"?"من":"From"}),r.jsx("input",{type:"text",id:"origin",placeholder:l==="ar"?"مدينة المغادرة":"Departure city",value:h,onChange:X=>v(X.target.value),className:_.origin?"error":""})]}),r.jsx(lb,{type:"button",onClick:L,children:r.jsx("i",{className:"fas fa-exchange-alt"})}),r.jsxs(ao,{children:[r.jsx("label",{htmlFor:"destination",children:l==="ar"?"إلى":"To"}),r.jsx("input",{type:"text",id:"destination",placeholder:l==="ar"?"مدينة الوصول":"Arrival city",value:w,onChange:X=>g(X.target.value),className:_.destination?"error":""})]})]}),r.jsxs(ao,{children:[r.jsx("label",{htmlFor:"departure-date",children:l==="ar"?"تاريخ المغادرة":"Departure Date"}),r.jsx("input",{type:"date",id:"departure-date",value:p,onChange:X=>E(X.target.value),className:_.departureDate?"error":""})]}),r.jsxs(ao,{children:[r.jsx("label",{htmlFor:"cabin-class",children:l==="ar"?"":"Cabin Class"}),r.jsxs("select",{id:"cabin-class",value:M,onChange:X=>C(X.target.value),children:[r.jsx("option",{value:"economy",children:"Economy"}),r.jsx("option",{value:"business",children:l==="ar"?" Business":"Business"}),r.jsx("option",{value:"firstclass",children:l==="ar"?" FirstClass":"FirstClass"}),r.jsx("option",{value:"vip",children:l==="ar"?" VIP":"VIP"})]})]}),r.jsx(ib,{type:"submit",children:l==="ar"?"ابحث":"Search"})]})})]}),r.jsxs(rb,{children:[r.jsxs(no,{children:[r.jsx("i",{className:"fas fa-globe"}),r.jsx("h3",{children:l==="ar"?"وجهات متعددة":"Multiple parties"}),r.jsx("p",{children:l==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),r.jsxs(no,{children:[r.jsx("i",{className:"fas fa-tag"}),r.jsx("h3",{children:l==="ar"?"أفضل الأسعار":"Best Prices"}),r.jsx("p",{children:l==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),r.jsxs(no,{children:[r.jsx("i",{className:"fas fa-headset"}),r.jsx("h3",{children:l==="ar"?"دعم 24/7":"24/7 support"}),r.jsx("p",{children:l==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),r.jsxs(no,{children:[r.jsx("i",{className:"fas fa-lock"}),r.jsx("h3",{children:l==="ar"?"دفع آمن":"Secure payment"}),r.jsx("p",{children:l==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),r.jsxs(ob,{children:[r.jsx("h2",{children:l==="ar"?"أفضل العروض":"Best offers"}),r.jsxs(ub,{children:[r.jsxs(lo,{children:[r.jsx(io,{image:"/src/images/dubai.jpg"}),r.jsxs(ro,{children:[r.jsx("h3",{children:l==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),r.jsx("p",{children:l==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),r.jsxs(lo,{children:[r.jsx(io,{image:"/src/images/istanbul.jpg"}),r.jsxs(ro,{children:[r.jsx("h3",{children:l==="ar"?"رحلة إسطنبول":"Istanbul trip"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),r.jsx("p",{children:l==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),r.jsxs(lo,{children:[r.jsx(io,{image:"/src/images/maldives.jpg"}),r.jsxs(ro,{children:[r.jsx("h3",{children:l==="ar"?"جزر المالديف":"Maldives"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),r.jsx("p",{children:l==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),r.jsxs(lo,{children:[r.jsx(io,{image:"/src/images/paris.jpg"}),r.jsxs(ro,{children:[r.jsx("h3",{children:l==="ar"?"باريس _ فرنسا":"Paris, France"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),r.jsx("p",{children:l==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})},sb=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,db=b.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/images/hotel.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  margin-top: -8rem;
  margin-right: -10rem;
  margin-left: -10rem;
  width: 65rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin: -4rem -1rem 2rem -1rem;
    width: auto;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.8rem;
    margin: -3rem -0.5rem 1.5rem -0.5rem;
    border-radius: 8px;
  }
`,fb=b.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`,mb=b.p`
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,hb=b.button`
  display: block;
  margin: 0 auto 1.5rem auto;
  padding: 1rem 1rem;
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--accent-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }

  &:hover {
    transform: scale(1.03);
  }

  i {
    margin-left: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  html[dir="rtl"] & i {
    margin-right: 0.5rem;
    margin-left: 4px;
  }
`,pb=b.section`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`,gb=b.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0);
  margin: 0 auto;
  max-width: 1100px;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 8px;
  }
`,xb=b.form`
  display: flex;
  align-items: stretch;
  gap: 0;
  flex-wrap: wrap;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--white);
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Sa=b.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 15px;
  border: none;
  background: none;
  position: relative;

  label {
    color: #888;
    font-size: 0.8rem;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
  }

  input,
  select {
    padding: 0;
    border: none;
    font-size: 1rem;
    outline: none;
    background: none;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }

    &.error {
      border: 1px solid red;
      border-radius: 8px;
      padding: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 6px;
  }
`,vb=b(Sa)`
  background-color: var(--white); 
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
  }

  input[type="text"] {
    border: none;
    padding: 0;
    font-size: 1rem;
    color: var(--primary-color);
    background: none;
    outline: none;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    border-right: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 6px;
  }
`,yb=b.div`
  display: flex;
  gap: 0;
  background: var(--white);
  padding: 10px 15px;
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  align-items: center;
  flex-grow: 1;

  ${Sa} {
    flex: 1;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    border-right: none;
    flex-direction: column;
    gap: 0;
    padding: 0;

    ${Sa}:first-child {
      border-left: none;
      padding-left: 0;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    ${Sa}:second-child {
      border: none;
      padding: 0;
    }
  }
`,bb=b(Sa)`
  background-color: var(--white);
  border: none;
  border-right: 1px solid #eee;
  border-radius: 0;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  flex-grow: 1;

  label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    border-right: none;
  }
`,Sb=b.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  i {
    margin-right: 0.5rem;
    color: var(--secondary-color);
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  html[dir="rtl"] & i {
    margin-right: 0;
    margin-left: 0.5rem;
  }
`,jb=b.button`
  background: var(--secondary-color);
  color: var(--white);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  text-transform: none;
  letter-spacing: normal;
  width: auto;
  min-width: 120px;
  flex-shrink: 0;
  align-self: center;
  margin-left: 10px;

  &:hover {
    background: #0085d8;
    transform: none;
  }

  i {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    border-radius: 8px;
    margin-top: 0;
    margin-left: 0;
    align-self: stretch;
  }
`,wb=()=>{const{language:l}=Tt(),[u,s]=j.useState(""),[c,f]=j.useState(""),[h,v]=j.useState(""),[w,g]=j.useState(""),[p,E]=j.useState({}),M=()=>{const _={};return u.trim()||(_.destination=!0),c||(_.checkIn=!0),h||(_.checkOut=!0),(!w||w<1)&&(_.guests=!0),E(_),Object.keys(_).length===0},C=_=>{_.preventDefault(),M()&&console.log("Form is valid, proceeding with search")};return r.jsxs(sb,{children:[r.jsxs(db,{children:[r.jsx(fb,{children:l==="ar"?"ابحث عن أفضل الفنادق":"Find the Best Hotels"}),r.jsx(mb,{children:l==="ar"?"اكتشف مجموعة واسعة من الفنادق الفاخرة والاقتصادية":"Discover a wide range of luxury and budget hotels"})]}),r.jsxs(hb,{children:[r.jsx("i",{className:"fas fa-hotel"}),l==="ar"?"الفنادق":"Hotels"]}),r.jsx(pb,{children:r.jsx(gb,{children:r.jsxs(xb,{onSubmit:C,children:[r.jsxs(Sa,{children:[r.jsx("label",{children:l==="ar"?"الوجهة":"Destination"}),r.jsxs(vb,{children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),r.jsx("input",{type:"text",placeholder:l==="ar"?"أين تريد أن تذهب؟":"Where do you want to go?",value:u,onChange:_=>s(_.target.value),className:p.destination?"error":""})]})]}),r.jsxs(yb,{children:[r.jsxs(Sa,{children:[r.jsx("label",{children:l==="ar"?"تاريخ الوصول":"Check-in"}),r.jsx("input",{type:"date",value:c,onChange:_=>f(_.target.value),className:p.checkIn?"error":""})]}),r.jsxs(Sa,{children:[r.jsx("label",{children:l==="ar"?"تاريخ المغادرة":"Check-out"}),r.jsx("input",{type:"date",value:h,onChange:_=>v(_.target.value),className:p.checkOut?"error":""})]})]}),r.jsxs(Sa,{children:[r.jsx("label",{children:l==="ar"?"الضيوف":"Guests"}),r.jsx(bb,{children:r.jsxs(Sb,{children:[r.jsx("i",{className:"fas fa-user"}),r.jsx("input",{type:"number",min:"1",placeholder:l==="ar"?"عدد الضيوف":"Number of guests",value:w,onChange:_=>g(_.target.value),className:p.guests?"error":""})]})})]}),r.jsx(jb,{type:"submit",children:l==="ar"?"بحث":"Search"})]})})})]})},ed="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=",td="/Tickify/assets/facebook-BcNyBvTH.png",ad="/Tickify/assets/X-DTBoECSh.png",zb=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,Eb=b.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin-top: -15rem;
  margin-right: 7rem;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`,Ab=b.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: end;
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`,Tb=b.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  text-align: end;
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`,Tp=b.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
    text-align: end;
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    margin-right: 20px;
    padding-right: 5rem;

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;
  }
`,Cb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,Rb=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;
  }
`,Db=b.a`
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`,Ob=b.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #001a33;
  }
`,Nb=b.div`
  margin-top: 2rem;
  text-align: center;
`,Mb=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`,Cp=b.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,_b=b.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;
`,Bb=b.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,gs=b.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.facebook {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}
    .facebook img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
        facebook:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
    .google {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}
    .google img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    .google:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
 .twitter {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
}   
    .twitter img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    .twitter:hover {
    background: #f8f8f8;
    border-color: #dadce0;
}
`,Ub=b.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`,Hb=b.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Lb=b.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px 24px 24px;
  min-width: 320px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  text-align: center;
`,kb=()=>{const{language:l}=Tt(),u=bn(),{setIsSidebarOpen:s}=Go(),[c,f]=j.useState(""),[h,v]=j.useState(""),[w,g]=j.useState(""),[p,E]=j.useState(""),[M,C]=j.useState(!1),[_,N]=j.useState(""),[G,L]=j.useState(""),[B,q]=j.useState(""),X=J=>{J.preventDefault();let Q=!1;c?g(""):(g(l==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),Q=!0),h?E(""):(E(l==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),Q=!0),!Q&&(localStorage.setItem("isLoggedIn","true"),s(!1),u("/"))};return r.jsx(zb,{children:r.jsxs(Eb,{children:[r.jsx(Ab,{children:l==="ar"?"تسجيل الدخول":"Login"}),r.jsx(Tb,{children:l==="ar"?"مرحباً بعودتك! قم بتسجيل الدخول للوصول إلى حسابك":"Welcome back! Sign in to access your account"}),r.jsxs("form",{onSubmit:X,children:[w||p&&r.jsx("div",{style:{color:"red",marginBottom:"10px",textAlign:"center"},children:w||p}),r.jsxs(Tp,{children:[r.jsx("label",{children:l==="ar"?"البريد الإلكتروني":"Email"}),r.jsx("input",{type:"email",value:c,onChange:J=>f(J.target.value),placeholder:l==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:w?{borderColor:"red"}:{}}),w&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:w})]}),r.jsxs(Tp,{children:[r.jsx("label",{children:l==="ar"?"كلمة المرور":"Password"}),r.jsx("input",{type:"password",value:h,onChange:J=>v(J.target.value),placeholder:l==="ar"?"أدخل كلمة المرور":"Enter your password",style:p?{borderColor:"red"}:{}}),p&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:p})]}),r.jsxs(Cb,{children:[r.jsxs(Rb,{children:[r.jsx("input",{type:"checkbox",id:"remember"}),r.jsx("label",{htmlFor:"remember",children:l==="ar"?"تذكرني":"Remember me"})]}),r.jsx(Db,{href:"#",onClick:J=>{J.preventDefault(),C(!0)},children:l==="ar"?"نسيت كلمة المرور؟":"Forgot password?"})]}),r.jsx(Ob,{type:"submit",children:l==="ar"?"تسجيل الدخول":"Login"})]}),r.jsxs(Nb,{children:[r.jsxs(Mb,{children:[r.jsx(Cp,{}),r.jsx(_b,{children:l==="ar"?"أو سجل الدخول باستخدام":"Or login with"}),r.jsx(Cp,{})]}),r.jsxs(Bb,{children:[r.jsx(gs,{className:"google",children:r.jsx("img",{src:ed,alt:"Google"})}),r.jsx(gs,{className:"facebook",children:r.jsx("img",{src:td,alt:"Facebook"})}),r.jsx(gs,{className:"twitter",children:r.jsx("img",{src:ad,alt:"X"})})]})]}),r.jsxs(Ub,{children:[l==="ar"?"ليس لديك حساب؟":"Don't have an account?",r.jsx("a",{href:"/signup",children:l==="ar"?"إنشاء حساب":"Sign up"})]}),M&&r.jsx(Hb,{children:r.jsxs(Lb,{children:[r.jsx("h3",{style:{marginBottom:16},children:l==="ar"?"استعادة كلمة المرور":"Password Recovery"}),r.jsxs("form",{onSubmit:J=>{if(J.preventDefault(),!_){L(l==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),q("");return}L(""),q(l==="ar"?"تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني":"A password reset link has been sent to your email"),N("")},children:[r.jsx("input",{type:"email",placeholder:l==="ar"?"البريد الإلكتروني":"Email",value:_,onChange:J=>N(J.target.value),style:{width:"100%",padding:10,borderRadius:6,border:G?"1px solid red":"1px solid #ccc",marginBottom:8}}),G&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginBottom:"8px",textAlign:"end"},children:G}),B&&r.jsx("div",{style:{color:"green",fontSize:"13px",marginBottom:"8px",textAlign:"end"},children:B}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:8},children:[r.jsx("button",{type:"submit",style:{background:"#00233d",color:"#fff",border:"none",borderRadius:6,padding:"8px 20px",fontSize:"1rem",cursor:"pointer"},children:l==="ar"?"إرسال":"Send"}),r.jsx("button",{type:"button",style:{background:"#eee",color:"#222",border:"none",borderRadius:6,padding:"8px 20px",fontSize:"1rem",cursor:"pointer"},onClick:()=>{C(!1),L(""),q(""),N("")},children:l==="ar"?"إلغاء":"Cancel"})]})]})]})})]})})},Yb=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,qb=b.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin-top: -12rem;
  margin-right: 7rem;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`,Gb=b.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: end;
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`,Xb=b.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  text-align: end;
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`,hl=b.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
    text-align: end;
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    margin-right: 20px;
    
    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
      font-size: 14px;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`,Qb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,Vb=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 6rem;

  @media (max-width: 768px) {
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    margin-right: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  a {
    color: #0066ff;
    text-decoration: none;
  }
`,Zb=b.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  &:hover {
    background: #001a33;
  }
`,Kb=b.div`
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`,Jb=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`,Rp=b.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,$b=b.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,Wb=b.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1rem 0;
  }
`,xs=b.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`,Fb=b.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`,Ib=b.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,Pb=()=>{const{language:l}=Tt(),u=bn(),{setIsSidebarOpen:s}=Go(),[c,f]=j.useState(""),[h,v]=j.useState(""),[w,g]=j.useState(""),[p,E]=j.useState(""),[M,C]=j.useState(""),[_,N]=j.useState(""),[G,L]=j.useState(""),[B,q]=j.useState(""),[X,J]=j.useState(""),[Q,ae]=j.useState(""),[$,ge]=j.useState(""),[he,De]=j.useState(""),[Ye,Be]=j.useState(!1),[st,dt]=j.useState(!1),Oe=O=>{O.preventDefault();let V=!1;c?L(""):(L(l==="ar"?"يرجى إدخال الاسم الأول":"Please enter your first name"),V=!0),h?q(""):(q(l==="ar"?"يرجى إدخال الاسم الثاني":"Please enter your last name"),V=!0),w?J(""):(J(l==="ar"?"يرجى إدخال رقم الهاتف":"Please enter your phone number"),V=!0),p?ae(""):(ae(l==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),V=!0),M?ge(""):(ge(l==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),V=!0),_?M!==_?(De(l==="ar"?"كلمة المرور غير متطابقة":"Passwords do not match"),V=!0):De(""):(De(l==="ar"?"يرجى تأكيد كلمة المرور":"Please confirm your password"),V=!0),Ye?dt(!1):(dt(!0),V=!0),!V&&(s(!1),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("firstName",c),localStorage.setItem("lastName",h),localStorage.setItem("fullName",c+" "+h),localStorage.setItem("phone",w),localStorage.setItem("email",p),u("/profile"))};return r.jsx(Yb,{children:r.jsxs(qb,{children:[r.jsx(Gb,{children:l==="ar"?"إنشاء حساب":"Sign Up"}),r.jsx(Xb,{children:l==="ar"?"انضم إلينا اليوم وابدأ رحلتك":"Join us today and start your journey"}),r.jsxs("form",{onSubmit:Oe,children:[r.jsxs(Ib,{children:[r.jsxs(hl,{style:{flex:1},children:[r.jsx("label",{children:l==="ar"?"الاسم الأول":"First Name"}),r.jsx("input",{type:"text",value:c,onChange:O=>f(O.target.value),placeholder:l==="ar"?"أدخل اسمك الأول":"Enter your first name",style:G?{borderColor:"red"}:{}}),G&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:G})]}),r.jsxs(hl,{style:{flex:1},children:[r.jsx("label",{children:l==="ar"?"الاسم الثاني":"Last Name"}),r.jsx("input",{type:"text",value:h,onChange:O=>v(O.target.value),placeholder:l==="ar"?"أدخل اسمك الثاني":"Enter your last name",style:B?{borderColor:"red"}:{}}),B&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:B})]})]}),r.jsxs(hl,{children:[r.jsx("label",{children:l==="ar"?"رقم الهاتف":"Phone Number"}),r.jsx("input",{type:"tel",value:w,onChange:O=>g(O.target.value),placeholder:l==="ar"?"أدخل رقم هاتفك":"Enter your phone number",style:X?{borderColor:"red"}:{}}),X&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:X})]}),r.jsxs(hl,{children:[r.jsx("label",{children:l==="ar"?"البريد الإلكتروني":"Email"}),r.jsx("input",{type:"email",value:p,onChange:O=>E(O.target.value),placeholder:l==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:Q?{borderColor:"red"}:{}}),Q&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:Q})]}),r.jsxs(hl,{children:[r.jsx("label",{children:l==="ar"?"كلمة المرور":"Password"}),r.jsx("input",{type:"password",value:M,onChange:O=>C(O.target.value),placeholder:l==="ar"?"أدخل كلمة المرور":"Enter your password",style:$?{borderColor:"red"}:{}}),$&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:$})]}),r.jsxs(hl,{children:[r.jsx("label",{children:l==="ar"?"تأكيد كلمة المرور":"Confirm Password"}),r.jsx("input",{type:"password",value:_,onChange:O=>N(O.target.value),placeholder:l==="ar"?"أعد إدخال كلمة المرور":"Re-enter your password",style:he?{borderColor:"red"}:{}}),he&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:he})]}),r.jsx(Qb,{children:r.jsxs(Vb,{children:[r.jsx("input",{type:"checkbox",id:"terms",checked:Ye,onChange:O=>Be(O.target.checked),style:st?{outline:"2px solid red",boxShadow:"0 0 0 2px red"}:{}}),r.jsx("label",{htmlFor:"terms",style:{cursor:"pointer"},children:l==="ar"?"أوافق على الشروط والأحكام":"I agree to the Terms and Conditions"})]})}),r.jsx(Zb,{type:"submit",children:l==="ar"?"إنشاء حساب":"Sign Up"})]}),r.jsxs(Kb,{children:[r.jsxs(Jb,{children:[r.jsx(Rp,{}),r.jsx($b,{children:l==="ar"?"أو سجل باستخدام":"Or sign up with"}),r.jsx(Rp,{})]}),r.jsxs(Wb,{children:[r.jsx(xs,{className:"google",children:r.jsx("img",{src:ed,alt:"Google"})}),r.jsx(xs,{className:"facebook",children:r.jsx("img",{src:td,alt:"Facebook"})}),r.jsx(xs,{className:"twitter",children:r.jsx("img",{src:ad,alt:"X"})})]})]}),r.jsxs(Fb,{children:[l==="ar"?"لديك حساب بالفعل؟":"Already have an account?",r.jsx("a",{href:"/login",children:l==="ar"?"تسجيل الدخول":"Login"})]})]})})},e2=b.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
    // margin-top: 2rem;
    // margin-right: -11rem;
  }
`,t2=b.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 10rem;
  }
`,vs=b.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      @media (max-width: 768px) {
        margin-bottom: 0.6rem;
      }
      
      a {
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s ease;
        // font-size: 0.95rem;
        
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
        
        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
`,a2=b.div`
  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    // font-size: 0.95rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    i {
      color: var(--secondary-color);
      width: 20px;
      text-align: center;
    }
    
    a {
      color: var(--white);
      text-decoration: none;
      
      &:hover {
        color: #1976d2;
      }
    }
  }
`,n2=b.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
`,l2=()=>{const{language:l}=Tt();return r.jsxs(e2,{children:[r.jsxs(t2,{children:[r.jsxs(vs,{children:[r.jsx("h3",{children:l==="ar"?"عن تيكيفاي":"About Tickify"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Ke,{to:"/about",children:l==="ar"?"من نحن":"About Us"})}),r.jsx("li",{children:r.jsx(Ke,{to:"/terms",children:l==="ar"?"الشروط والأحكام":"Terms and Conditions"})})]})]}),r.jsxs(vs,{children:[r.jsx("h3",{children:l==="ar"?"المساعدة":"Help"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Ke,{to:"/cancellation",children:l==="ar"?"سياسة الإلغاء":"Cancellation Policy"})}),r.jsx("li",{children:r.jsx(Ke,{to:"/contactus",children:l==="ar"?"اتصل بنا":"Contact Us"})})]})]}),r.jsxs(vs,{children:[r.jsx("h3",{children:l==="ar"?"معلومات التواصل":"Contact information"}),r.jsxs(a2,{children:[r.jsxs("p",{children:[r.jsx("i",{className:"fas fa-phone"}),r.jsx("span",{children:" 123456789 + "})]}),r.jsxs("p",{children:[r.jsx("i",{className:"fas fa-envelope"}),r.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})]}),r.jsxs("p",{children:[r.jsx("i",{className:"fas fa-map-marker-alt"}),l==="ar"?"المنصورة , مصر":"Mansoura, Egypt"]})]})]})]}),r.jsx(n2,{children:r.jsxs("p",{children:[" ",l==="ar"?"جميع الحقوق محفوظة":"All rights reserved."," © 2025 Tickify "]})})]})},i2=b.div`
  position: fixed;
  left: ${l=>l.isSidebarOpen?"300px":"1rem"};
  top: 40%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1002;
  transition: all 0.3s ease;
  opacity: ${l=>l.isSidebarOpen?0:1};
  visibility: ${l=>l.isSidebarOpen?"hidden":"visible"};
  pointer-events: ${l=>l.isSidebarOpen?"none":"auto"};
`,Dp=b(Ke)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #1976d2;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  i {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: #1976d2;
    color: white;
    transform: scale(1.1);
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }
`,r2=b.span`
  position: absolute;
  right: 60px;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #333;
  font-size: 0.9rem;
  opacity: ${l=>l.isSidebarOpen?1:0};
  visibility: ${l=>l.isSidebarOpen?"visible":"hidden"};
  transition: all 0.3s ease;
  white-space: nowrap;
`,o2=b.div`
  position: relative;
  display: flex;
  align-items: center;
`,u2=()=>{const{isSidebarOpen:l}=Go(),u=aa(),s=localStorage.getItem("isLoggedIn")==="true",c=h=>{h.preventDefault(),localStorage.removeItem("isLoggedIn"),window.location.href="/"},f=[{to:"/",icon:"plane",text:"رحلات طيران"},{to:"/hotels",icon:"hotel",text:"الفنادق"},{to:"/cars",icon:"car",text:"السيارات"},s?{to:"/logout",icon:"sign-out-alt",text:"تسجيل الخروج",logout:!0}:{to:"/login",icon:"sign-in-alt",text:"تسجيل الدخول"},{to:"/app",icon:"mobile-alt",text:"التطبيق"},{to:"/help",icon:"question-circle",text:"مساعدة"}];return r.jsx(i2,{isSidebarOpen:l,children:f.map((h,v)=>r.jsxs(o2,{children:[h.logout?r.jsx(Dp,{as:"a",href:"/",onClick:c,children:r.jsx("i",{className:`fas fa-${h.icon}`})}):r.jsx(Dp,{to:h.to,className:u.pathname===h.to?"active":"",children:r.jsx("i",{className:`fas fa-${h.icon}`})}),r.jsx(r2,{isSidebarOpen:l,children:h.text})]},v))})};function c2(l){return na({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},child:[]},{tag:"path",attr:{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},child:[]}]})(l)}const s2=b.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`,d2=()=>{const[l,u]=j.useState(!1),s=()=>{window.pageYOffset>300?u(!0):u(!1)},c=()=>{window.scrollTo({top:0,behavior:"smooth"})};return j.useEffect(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]),r.jsx(s2,{onClick:c,className:l?"visible":"","aria-label":"العودة إلى أعلى الصفحة",children:r.jsx(c2,{})})},f2=b.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`,m2=b.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/images/about.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 4rem;
  margin-top: -120px;
  margin-left: -110px;
  margin-right: -15px;

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem;
    margin: -80px -1rem 2rem -1rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }
      @media screen and (max-width: 480px) {
      font-size: 2rem;
    } 
  }

  p {
    font-size: 1.5rem;
    opacity: 0.9;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  }
`,h2=b.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`,Op=b.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,p2=b.section`
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`,g2=b.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,oo=b.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,x2=b.section`
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`,v2=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,pl=b.div`
    background: var(--white);
    border-radius: 15px;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.49);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    margin: 0;
    text-align: right;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      margin: 0.8rem 0 0.4rem;
    }
  }

  p {
    color: var(--text-color);
    color: var(--text-color);
    text-align: right;
    margin: 0;
    font-size: 0.9rem;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
  }
`,gl=b.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 16px;
    position: relative;

  @media screen and (max-width: 768px) {
    height: 250px;
  }

//     &::before {
//     display: none;
// }

//     &::after {
//     display: none;
// }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,y2=()=>{const{language:l}=Tt();return r.jsx(r.Fragment,{children:r.jsxs(f2,{children:[r.jsxs(m2,{children:[r.jsx("h1",{children:l==="ar"?"من نحن":"About Us"}),r.jsx("p",{children:l==="ar"?"نحن نؤمن بأن السفر يجب أن يكون تجربة سهلة وممتعة للجميع":"We believe that travel should be an easy and enjoyable experience for everyone."})]}),r.jsxs(h2,{children:[r.jsxs(Op,{children:[r.jsx(Zy,{}),r.jsx("h2",{children:l==="ar"?"رؤيتنا":"Our Vision"}),r.jsx("p",{children:l==="ar"?"نسعى لأن نكون المنصة الأولى في الشرق الأوسط لتقديم خدمات السفر المتميزة":"We strive to be the premier platform in the Middle East for providing premium travel services."})]}),r.jsxs(Op,{children:[r.jsx(Gy,{}),r.jsx("h2",{children:l==="ar"?"مهمتنا":"Our Mission"}),r.jsx("p",{children:l==="ar"?"تقديم  حلول سفر مبتكرة وخدمات متميزة تلبي احتياجات عملائنا بأفضل الأسعار":"Providing innovative travel solutions and distinguished services that meet our customers needs at the best prices."})]})]}),r.jsxs(p2,{children:[r.jsx("h2",{children:l==="ar"?"قيمنا":"Our Values"}),r.jsxs(g2,{children:[r.jsxs(oo,{children:[r.jsx(Jy,{}),r.jsx("h3",{children:l==="ar"?"الجودة":"Quality"}),r.jsx("p",{children:l==="ar"?"نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا":"We are committed to providing high-quality services that meet our customers expectations."})]}),r.jsxs(oo,{children:[r.jsx("i",{className:"fas fa-handshake"}),r.jsx("h3",{children:l==="ar"?"الموثوقية":"Reliability"}),r.jsx("p",{children:l==="ar"?"نحرص على بناء علاقات قوية مع عملائنا وشركائنا":"We are keen to build strong relationships with our clients and partners."})]}),r.jsxs(oo,{children:[r.jsx("i",{className:"fas fa-lightbulb"}),r.jsx("h3",{children:l==="ar"?"الابتكار":"Innovation"}),r.jsx("p",{children:l==="ar"?"نواكب أحدث التقنيات لتقديم تجربة سفر فريدة":"We keep pace with the latest technologies to provide a unique travel experience."})]}),r.jsxs(oo,{children:[r.jsx("i",{className:"fas fa-users"}),r.jsx("h3",{children:l==="ar"?"العمل الجماعي":"Teamwork"}),r.jsx("p",{children:l==="ar"?"نؤمن بقوة العمل الجماعي في تحقيق أهدافنا":"We believe in the power of teamwork to achieve our goals."})]})]})]}),r.jsxs(x2,{children:[r.jsx("h2",{children:l==="ar"?"فريقنا":"Our Team"}),r.jsxs(v2,{children:[r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team1.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"هدير السيد":"Hadeer El-Sayeed"," "]}),r.jsx("p",{children:"UI/UX Designer"})]})]}),r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team2.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"هاجر عبدالمجيد":"Hagar Abd-Elmejeed"," "]}),r.jsx("p",{children:"Frontend Developer"})]})]}),r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"فاطمة رضوان":"Fatma Radwan"," "]}),r.jsx("p",{children:"Frontend Developer"})]})]}),r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"كريم فتحي":"Kareem Fathy"," "]}),r.jsx("p",{children:"Backend Developer"})]})]}),r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"الاء ياسر":"Hadeer El-Sayeed"," "]}),r.jsx("p",{children:"Backend Developer"})]})]}),r.jsxs(pl,{children:[r.jsx(gl,{children:r.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),r.jsxs("div",{class:"member-info",children:[r.jsxs("h3",{children:[" ",l==="ar"?"يوسف علاء":"Hadeer El-Sayeed"," "]}),r.jsx("p",{children:"Flutter Developer"})]})]})]})]})]})})},b2=b.div`
    max-width: 1200px;
    margin: 0 auto;
    // padding: 2rem;
    // background-color: #fff;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    h1 {
        text-align: center;
        color: #00233D;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        margin-top: -5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
            margin-top: -3rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
            margin-top: -2rem;
            margin-bottom: 1rem;
        }
    }
`,uo=b.section`
    background-color:rgba(248, 249, 250, 0);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: -25rem;
    margin-left: -30rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin-right: -1rem;
        margin-left: -1rem;
    }
    @media (max-width: 480px) {
        padding: 1rem;
        margin-right: -0.5rem;
        margin-left: -0.5rem;
    }

h2 {
    color: #00233D;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
        padding-bottom: 0.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        padding-bottom: 0.3rem;
    }
}
    @media (max-width: 768px) {
    font-size: 1.5rem;
  }
    @media (max-width: 480px) {
    font-size: 1.3rem;
;  }
`,co=b.div`
    padding: 1rem;

    h3 {
    color: #333;
    margin: 1.5rem 0 1rem;
    font-size: 1.4rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin: 1.2rem 0 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
        margin: 1rem 0 0.6rem;
    }
}
    @media (max-width: 768px) {
    font-size: 1.2rem;
  }
    @media (max-width: 480px) {
    font-size: 1.1rem;
  }

    ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
}

    li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #555;
    line-height: 1.6;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        padding: 0.4rem 0 0.4rem 1.2rem;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.3rem 0 0.3rem 1rem;
        line-height: 1.4;
    }
}
    &:before {
    content: "•";
    color: #1976d2;
    position: absolute;
    right: -10px;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        right: -8px;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        right: -6px;
    }
}
    p {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.5;
        margin: 0.8rem 0;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        line-height: 1.4;
        margin: 0.6rem 0;
    }
}
`,S2=()=>{const{language:l}=Tt();return r.jsx(r.Fragment,{children:r.jsxs(b2,{children:[r.jsx("h1",{children:"سياسة الإلغاء"}),r.jsxs(uo,{children:[r.jsx("h2",{children:"1. رحلات الطيران"}),r.jsxs(co,{children:[r.jsx("h3",{children:l==="ar"?" تذاكر الطيران القابلة للإلغاء":"Cancellable airline tickets"}),r.jsxs("ul",{children:[r.jsx("li",{children:l==="ar"?"يمكن إلغاء الحجز قبل 24 ساعة من موعد الرحلة":"Reservations can be cancelled 24 hours before the flight time."}),r.jsx("li",{children:l==="ar"?"يتم خصم رسوم إدارية بنسبة 10% من قيمة التذكرة":"An administrative fee of 10% will be deducted from the ticket value."}),r.jsx("li",{children:l==="ar"?"يتم استرداد المبلغ المتبقي خلال 5-7 أيام عمل":"The remaining amount will be refunded within 5-7 business days."})]})]})]}),r.jsxs(uo,{children:[r.jsx("h2",{children:"2. حجوزات الفنادق"}),r.jsxs(co,{children:[r.jsx("h3",{children:"حجوزات الفنادق القابلة للإلغاء"}),r.jsxs("ul",{children:[r.jsx("li",{children:"يمكن إلغاء الحجز قبل 48 ساعة من موعد الوصول"}),r.jsx("li",{children:"لا يتم خصم أي رسوم إضافية"}),r.jsx("li",{children:"يتم استرداد المبلغ كاملاً خلال 3-5 أيام عمل"})]})]})]}),r.jsxs(uo,{children:[r.jsx("h2",{children:"3. حجوزات السيارات"}),r.jsxs(co,{children:[r.jsx("h3",{children:"الحجوزات القابلة للإلغاء"}),r.jsxs("ul",{children:[r.jsx("li",{children:"يمكن إلغاء الحجز قبل 24 ساعة من موعد الاستلام"}),r.jsx("li",{children:"يتم خصم رسوم إدارية بنسبة 5% من قيمة الحجز"}),r.jsx("li",{children:"يتم استرداد المبلغ المتبقي خلال 3-5 أيام عمل"})]})]})]}),r.jsxs(uo,{children:[r.jsx("h2",{children:"4. حالات خاصة"}),r.jsxs(co,{children:[r.jsx("h3",{children:"الإلغاء بسبب ظروف قاهرة"}),r.jsxs("ul",{children:[r.jsx("li",{children:"في حالة الكوارث الطبيعية أو الأوبئة"}),r.jsx("li",{children:"في حالة إغلاق المطارات أو الفنادق"}),r.jsx("li",{children:"في حالة القيود الحكومية المفروضة على السفر"})]}),r.jsx("p",{children:"في هذه الحالات، يتم استرداد المبلغ كاملاً أو إعادة جدولة الحجز دون أي رسوم إضافية."})]})]})]})})};b.div`
    max-width: 1000px;
    margin: -6rem auto;
    padding: 2rem;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        margin: 0.5rem;
        padding: 1rem;
    }

    h1 {
        color: var(--primary-color);
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }
`;b.section`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
        }
    }

    p {
        color: var(--text-color);
        line-height: 1.6;
        margin-bottom: 1rem;
        font-size: 1rem;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            line-height: 1.4;
            margin-bottom: 0.6rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        padding-right: 1.5rem;
        position: relative;
        font-size: 1rem;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            margin-bottom: 0.4rem;
            padding-right: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            margin-bottom: 0.3rem;
            padding-right: 1rem;
        }

        &:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            right: 0;
        }
    }
`;const j2=()=>{const{language:l}=Tt();return r.jsxs("div",{children:[r.jsx("h1",{style:{textAlign:"center"},children:l==="ar"?"الشروط والأحكام":"Terms and Conditions"}),r.jsxs("div",{style:{maxWidth:800,margin:"2rem auto",background:"#fff",borderRadius:15,padding:24},children:[r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"1. مقدمة":"1. Introduction"}),r.jsx("p",{children:l==="ar"?"مرحباً بك في تيكيفاي. باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.":"Welcome to Tickify. By using our website, you agree to comply with these terms and conditions."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"2. استخدام الموقع":"2. Use of Website"}),r.jsx("p",{children:l==="ar"?"يجب استخدام موقعنا بشكل قانوني وأخلاقي. يحظر أي استخدام غير مصرح به أو ضار.":"Our website must be used legally and ethically. Any unauthorized or harmful use is prohibited."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"3. الحجوزات والمدفوعات":"3. Bookings and Payments"}),r.jsx("p",{children:l==="ar"?"جميع الحجوزات تخضع لسياسة الإلغاء الخاصة بنا. يجب إتمام المدفوعات بالكامل قبل تأكيد الحجز.":"All bookings are subject to our cancellation policy. Payments must be completed in full before booking confirmation."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"4. الخصوصية":"4. Privacy"}),r.jsx("p",{children:l==="ar"?"نحن نحمي خصوصية مستخدمينا. يرجى مراجعة سياسة الخصوصية الخاصة بنا لمزيد من المعلومات.":"We protect our users' privacy. Please review our privacy policy for more information."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"5. المسؤولية القانونية":"5. Legal Liability"}),r.jsx("p",{children:l==="ar"?"لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام موقعنا.":"We are not liable for any losses or damages resulting from the use of our website."})]}),r.jsxs("section",{children:[r.jsx("h2",{children:l==="ar"?"6. التغييرات":"6. Changes"}),r.jsx("p",{children:l==="ar"?"نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.":"We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes."})]})]})]})},w2=b.main`
  max-width: 1400px;
  // margin-right: 20px;
  margin-right: -20px
  padding: 0 32px;
  // margin-top: 0;
  margin-top: -95px;
  width: 110%;
  // padding-right: 10rem;

  @media (max-width: 768px) {
    margin-top: 2px;
    padding: 0 20px;
  }
`;b.div`
  border-color: #dc3545 !important;
`;b.img`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;
`;const z2=b.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/images/cars.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  margin-bottom: 40px;
  border-radius: 15px;


  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    h1 {
      font-size: 2rem;
    }
  }
`,E2=b.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
`,A2=b.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,T2=b.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  align-items: end;
  justify-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`,ys=b.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;

  label {
    margin-bottom: 5px;
    color: #333;
    font-weight: 500;
  }

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    width: 100%;

    &.error {
      border-color: #dc3545 !important;
    }
  }

  .error-message {
    color: #dc3545;
    font-size: 0.875rem;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    pointer-events: none;
    background: white;
    padding: 0 5px;

    &.show {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,C2=b.button`
  background: #0071bd;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: auto;
  width: 120px;
  align-self: center;
  grid-column: 1 / -1;

  &:hover {
    background: #0071bd;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin: 10px auto;
    width: 120px;
  }
`,R2=b.section`
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-color);
}
`,D2=b.div`
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    }
`,so=b.div`
    background: var(--white);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: #0071bd;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`,O2=b.section`
    padding: 3rem 2rem;

    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }
`,N2=b.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,bs=b.div`
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,Ss=b.div`
    padding: 1rem;
    // flex-grow: 1;

    h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p.car-type {
    color: #666;
    margin-bottom: 0.5rem;
  }

  p.car-price {
    color: var(--secondary-color);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
    
`,js=b.button`
    background: #0071bd;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    display: block;
    // margin: 0 auto;
    margin: 15px 100px;
    width: 120px;

  &:hover {
    background: #005a9e;
  }
`,M2=()=>{const{language:l}=Tt();return r.jsxs(w2,{children:[r.jsxs(z2,{children:[r.jsx("h1",{children:l==="ar"?"ابحث عن سيارتك":"Find your car"}),r.jsx("p",{children:l==="ar"?"اختر من مجموعتنا الواسعة من السيارات لرحلتك":"Choose from our wide range of cars for your trip."}),r.jsx(E2,{children:r.jsx(A2,{children:r.jsxs(T2,{id:"carSearchForm",children:[r.jsxs(ys,{children:[r.jsx("label",{htmlFor:"location",children:l==="ar"?"موقع الاستلام":"Pickup location"}),r.jsx("input",{type:"text",id:"location",placeholder:l==="ar"?"أين تريد استلام السيارة؟":"Where do you want to pick up the car?"}),r.jsx("div",{className:"error-message",children:"يرجى إدخال موقع الاستلام"})]}),r.jsxs(ys,{children:[r.jsx("label",{htmlFor:"pickup-date",children:l==="ar"?"تاريخ الاستلام":"Pickup date"}),r.jsx("input",{type:"date",id:"pickup-date"})]}),r.jsxs(ys,{children:[r.jsx("label",{htmlFor:"return-date",children:l==="ar"?"تاريخ الإرجاع":"Return date"}),r.jsx("input",{type:"date",id:"return-date"})]}),r.jsxs(C2,{type:"submit",children:[r.jsx("i",{className:"fas fa-search"}),l==="ar"?"ابحث":"Search"]})]})})})]}),r.jsxs(R2,{children:[r.jsx("h2",{children:l==="ar"?" الفئات الشائعة":"Popular Categories"}),r.jsxs(D2,{children:[r.jsxs(so,{children:[r.jsx(Qy,{}),r.jsx("h3",{children:l==="ar"?"اقتصادية":"Economic"}),r.jsx("p",{children:l==="ar"?"موفرة للوقود وبأسعار معقولة":"Fuel-efficient and affordable"})]}),r.jsxs(so,{children:[r.jsx(Ep,{}),r.jsx("h3",{children:l==="ar"?"صغيرة":"small"}),r.jsx("p",{children:l==="ar"?"مثالية للقيادة في المدينة":"Ideal for city driving"})]}),r.jsxs(so,{children:[r.jsx(Xy,{}),r.jsx("h3",{children:l==="ar"?"دفع رباعي":"4WD"}),r.jsx("p",{children:l==="ar"?"واسعة ومتعددة الاستخدامات":"Spacious and versatile"})]}),r.jsxs(so,{children:[r.jsx(Ep,{}),r.jsx("h3",{children:l==="ar"?"فاخرة":"luxurious"}),r.jsx("p",{children:l==="ar"?"راحة وأناقة فائقة":"Ultimate comfort and elegance"})]})]})]}),r.jsxs(O2,{children:[r.jsx("h2",{children:l==="ar"?"سيارات مميزة":"distinctive cars"}),r.jsxs(N2,{children:[r.jsxs(bs,{children:[r.jsxs(Ss,{children:[r.jsx("h3",{children:l==="ar"?"تويوتا كورولا":"Toyota Corolla"}),r.jsx("p",{className:"car-type",children:l==="ar"?"اقتصادية":"Economic"}),r.jsx("p",{className:"car-price",children:l==="ar"?"45$ / يوم":"45$ / day"})]}),r.jsx(js,{children:l==="ar"?"احجز الآن":"Book now"})]}),r.jsxs(bs,{children:[r.jsxs(Ss,{children:[r.jsx("h3",{children:l==="ar"?"هوندا CR-V":"Honda CR-V"}),r.jsx("p",{className:"car-type",children:l==="ar"?"دفع رباعي":"4WD"}),r.jsx("p",{className:"car-price",children:l==="ar"?"65$ / يوم":"65$ / day"})]}),r.jsx(js,{children:l==="ar"?"احجز الآن":"Book now"})]}),r.jsxs(bs,{children:[r.jsxs(Ss,{children:[r.jsx("h3",{children:l==="ar"?"بي إم دبليو الفئة الخامسة":"BMW 5 Series"}),r.jsx("p",{className:"car-type",children:l==="ar"?"فاخرة":"luxurious"}),r.jsx("p",{className:"car-price",children:l==="ar"?"95$ / يوم":"95$ / day"})]}),r.jsx(js,{children:l==="ar"?"احجز الآن":"Book now"})]})]})]})]})},_2=b.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,B2=b.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/images/اخةث.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 100px 20px;
  border-radius: 15px;
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
    margin-bottom: 1.5rem;
  }
`,U2=b.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
`,H2=b.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,L2=b.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`,ws=b.button`
  padding: 1rem 2rem;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 6px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }
`,k2=b.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
  }
`,Y2=b.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Ti=b.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
  }
  
  input, select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.85rem;
      border-radius: 6px;
    }
    
    &:focus {
      outline: none;
    }

    &.error {
      border-color: red;
    }
  }
`,q2=b.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    grid-column: 1;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,G2=b.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0 10px;
  align-self: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    padding: 0 6px;
  }

  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-right: 22rem;

    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-right: 12rem;
    }
  }
`,X2=b.button`
  background: #1976d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    grid-column: 1;
  }
  
  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
`,Q2=b.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 0;
  }
`,fo=b.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }
  
  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`,V2=b.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,Z2=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,mo=b.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,ho=b.div`
  height: 200px;
  background-image: url(${l=>l.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160px;
  }
`,po=b.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  p {
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,K2=()=>{const{language:l}=Tt(),u=bn(),[s,c]=j.useState("flights"),[f,h]=j.useState(!0),[v,w]=j.useState(""),[g,p]=j.useState(""),[E,M]=j.useState(""),[C,_]=j.useState(""),[N,G]=j.useState("economy"),[L,B]=j.useState({}),q=()=>{const Q=v;w(g),p(Q)},X=()=>{const Q={};return v.trim()||(Q.origin=!0),g.trim()||(Q.destination=!0),E||(Q.departureDate=!0),C||(Q.returnDate=!0),B(Q),Object.keys(Q).length===0},J=Q=>{Q.preventDefault(),console.log("تم الضغط على ابحث",{origin:v,destination:g,departureDate:E,returnDate:C,cabinClass:N}),X()&&u("/flights/results",{state:{origin:v,destination:g,departureDate:E,returnDate:C,cabinClass:N}})};return j.useEffect(()=>{setTimeout(()=>{h(!1)},2e3)},[]),f?r.jsx("div",{className:"loader-container",children:r.jsxs("div",{className:"loader",children:[r.jsx("div",{className:"loader-circle"}),r.jsx("div",{className:"loader-icon",children:r.jsx("i",{className:"fas fa-plane-departure"})})]})}):r.jsx(r.Fragment,{children:r.jsxs(_2,{children:[r.jsxs(B2,{children:[r.jsx(U2,{children:l==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),r.jsx(H2,{children:l==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),r.jsxs(L2,{children:[r.jsxs(ws,{className:s==="flights"?"active":"",onClick:()=>c("flights"),children:[r.jsx("i",{className:"fas fa-plane"}),l==="ar"?"رحلات طيران":"Flights"]}),r.jsxs(ws,{className:s==="hotels"?"active":"",onClick:()=>c("hotels"),children:[r.jsx("i",{className:"fas fa-hotel"}),l==="ar"?"الفنادق":"Hotels"]}),r.jsxs(ws,{className:s==="cars"?"active":"",onClick:()=>c("cars"),children:[r.jsx("i",{className:"fas fa-car"}),l==="ar"?"السيارات":"Cars"]})]}),r.jsx(k2,{children:r.jsxs(Y2,{onSubmit:J,children:[r.jsxs(q2,{children:[r.jsxs(Ti,{children:[r.jsx("label",{htmlFor:"origin",children:l==="ar"?"من":"From"}),r.jsx("input",{type:"text",id:"origin",placeholder:l==="ar"?"مدينة المغادرة":"Departure city",value:v,onChange:Q=>w(Q.target.value),className:L.origin?"error":""})]}),r.jsx(G2,{type:"button",onClick:q,children:r.jsx("i",{className:"fas fa-exchange-alt"})}),r.jsxs(Ti,{children:[r.jsx("label",{htmlFor:"destination",children:l==="ar"?"إلى":"To"}),r.jsx("input",{type:"text",id:"destination",placeholder:l==="ar"?"مدينة الوصول":"Arrival city",value:g,onChange:Q=>p(Q.target.value),className:L.destination?"error":""})]})]}),r.jsxs(Ti,{children:[r.jsx("label",{htmlFor:"departure-date",children:l==="ar"?"تاريخ المغادرة":"Departure Date"}),r.jsx("input",{type:"date",id:"departure-date",value:E,onChange:Q=>M(Q.target.value),className:L.departureDate?"error":""})]}),r.jsxs(Ti,{children:[r.jsx("label",{htmlFor:"return-date",children:l==="ar"?"تاريخ العودة":"Return Date"}),r.jsx("input",{type:"date",id:"return-date",value:C,onChange:Q=>_(Q.target.value),className:L.returnDate?"error":""})]}),r.jsxs(Ti,{children:[r.jsx("label",{htmlFor:"cabin-class",children:l==="ar"?"":"Cabin Class"}),r.jsxs("select",{id:"cabin-class",value:N,onChange:Q=>G(Q.target.value),children:[r.jsx("option",{value:"economy",children:"Economy"}),r.jsx("option",{value:"business",children:"Business"}),r.jsx("option",{value:"economy",children:"FirstClass"}),r.jsx("option",{value:"vip",children:"VIP"})]})]}),r.jsx(X2,{type:"submit",children:l==="ar"?"ابحث":"Search"})]})})]}),r.jsxs(Q2,{children:[r.jsxs(fo,{children:[r.jsx("i",{className:"fas fa-globe"}),r.jsx("h3",{children:l==="ar"?"وجهات متعددة":"Multiple parties"}),r.jsx("p",{children:l==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),r.jsxs(fo,{children:[r.jsx("i",{className:"fas fa-tag"}),r.jsx("h3",{children:l==="ar"?"أفضل الأسعار":"Best Prices"}),r.jsx("p",{children:l==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),r.jsxs(fo,{children:[r.jsx("i",{className:"fas fa-headset"}),r.jsx("h3",{children:l==="ar"?"دعم 24/7":"24/7 support"}),r.jsx("p",{children:l==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),r.jsxs(fo,{children:[r.jsx("i",{className:"fas fa-lock"}),r.jsx("h3",{children:l==="ar"?"دفع آمن":"Secure payment"}),r.jsx("p",{children:l==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),r.jsxs(V2,{children:[r.jsx("h2",{children:l==="ar"?"أفضل العروض":"Best offers"}),r.jsxs(Z2,{children:[r.jsxs(mo,{children:[r.jsx(ho,{image:"/src/images/dubai.jpg"}),r.jsxs(po,{children:[r.jsx("h3",{children:l==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),r.jsx("p",{children:l==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),r.jsxs(mo,{children:[r.jsx(ho,{image:"/src/images/istanbul.jpg"}),r.jsxs(po,{children:[r.jsx("h3",{children:l==="ar"?"رحلة إسطنبول":"Istanbul trip"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),r.jsx("p",{children:l==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),r.jsxs(mo,{children:[r.jsx(ho,{image:"/src/images/maldives.jpg"}),r.jsxs(po,{children:[r.jsx("h3",{children:l==="ar"?"جزر المالديف":"Maldives"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),r.jsx("p",{children:l==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),r.jsxs(mo,{children:[r.jsx(ho,{image:"/src/images/paris.jpg"}),r.jsxs(po,{children:[r.jsx("h3",{children:l==="ar"?"باريس _ فرنسا":"Paris, France"}),r.jsx("p",{className:"offer-price",children:l==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),r.jsx("p",{children:l==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})})},J2=b.div`
    max-width: 1200px;
    margin: -110px auto;
    padding: 2rem;

    h1 {
    text-align: center;
    color: #00233D;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}
`,zs=b.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
}

    ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem 0;
}

    ul li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #555;
    line-height: 1.6;
}

   &:before {
    content: "•";
    color: #1976d2;
    position: absolute;
    right: -10px;
    font-size: 1.2rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

   &:hover {
    text-decoration: underline;
}
`,$2=b.section`
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
    color: #00233D;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;
}
`,W2=b.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`,Np=b.div`
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    svg{
    font-size: 2.5rem;
    color: #1976d2;
    margin-bottom: 1rem;
}

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

    &:hover {
    text-decoration: underline;
}
`,F2=()=>{const{language:l}=Tt();return r.jsxs(J2,{children:[r.jsx("h1",{children:l==="ar"?"كيف يمكننا مساعدتك؟":"How can we help you?"}),r.jsxs(zs,{children:[r.jsx("h3",{children:"كيف يمكنني حجز رحلة طيران؟"}),r.jsx("p",{children:"يمكنك حجز رحلة طيران بسهولة من خلال اتباع الخطوات التالية:"}),r.jsxs("ul",{children:[r.jsx("li",{children:"اختر وجهة سفرك وتاريخ الرحلة"}),r.jsx("li",{children:"حدد عدد المسافرين"}),r.jsx("li",{children:"اختر الرحلة المناسبة من النتائج"}),r.jsx("li",{children:"أدخل بيانات المسافرين"}),r.jsx("li",{children:"اختر طريقة الدفع المناسبة"})]})]}),r.jsxs(zs,{children:[r.jsx("h3",{children:"كيف يمكنني إلغاء حجز؟"}),r.jsx("p",{children:"يمكنك إلغاء حجزك من خلال:"}),r.jsxs("p",{children:["يرجى مراجعة ",r.jsx("a",{href:"cancellation.html",children:"سياسة الإلغاء"})," للاطلاع على الشروط والأحكام."]})]}),r.jsxs(zs,{children:[r.jsx("h3",{children:"كيف يمكنني تعديل حجز؟"}),r.jsx("p",{children:"يمكنك تعديل حجزك من خلال:"}),r.jsx("p",{children:"يمكنك تعديل تفاصيل حجزك مثل التاريخ أو الوجهة أو عدد المسافرين من خلال حسابك الشخصي. يرجى مراعاة أن بعض التعديلات قد تكون خاضعة لرسوم إضافية حسب سياسة التعديل الخاصة بالخدمة المقدمة."})]}),r.jsxs($2,{children:[r.jsx("h2",{children:"طرق التواصل معنا"}),r.jsxs(W2,{children:[r.jsxs(Np,{children:[r.jsx(Ap,{}),r.jsx("h3",{children:"اتصل بنا"}),r.jsx("p",{children:"123456789"}),r.jsx("p",{children:"متاح على مدار الساعة"})]}),r.jsxs(Np,{children:[r.jsx(Ap,{}),r.jsx(Vy,{}),r.jsx("h3",{children:"راسلنا عبر البريد الإلكتروني"}),r.jsx("p",{children:r.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})}),r.jsx("p",{children:"الرد خلال 24 ساعة"}),"s"]})]})]})]})},I2=b.div`
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
  min-height: 100vh;
`,P2=b.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
`,e3=b.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #666;
`,t3=b.div`
  flex: 1;
`,a3=b.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`,n3=b.div`
  color: #666;
  margin-bottom: 5px;
`,l3=b.div`
  color: #666;
`,i3=b.button`
  background: #00233d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #003d6b;
  }
`,r3=b.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
`,Mp=b.div`
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`,_p=b.div`
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 5px;
`,Bp=b.div`
  color: #666;
  font-size: 0.9em;
`,o3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`,Es=b.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,As=b.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  & i {
    color: #1976d2;
  }
`,$a=b.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`,go=b.div`
  font-weight: bold;
  margin-bottom: 5px;
`,xo=b.div`
  color: #666;
  font-size: 0.9em;
`,vo=b.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-top: 5px;
  background: ${({status:l})=>l==="active"?"#e3f2fd":l==="completed"?"#e8f5e9":l==="cancelled"?"#ffebee":"#eee"};
  color: ${({status:l})=>l==="active"?"#1976d2":l==="completed"?"#2e7d32":l==="cancelled"?"#c62828":"#666"};
`,u3=b.div`
  width: 100vw;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,c3=b.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
`,Ts=b.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`,s3=b.div`
  display: flex;
  gap: 8px;
`,d3=b.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover { background: #003d6b; }
`,f3=b.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`,m3=b.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,h3=b.div`
  font-weight: bold;
  margin-bottom: 8px;
`,yo=b.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`,p3=b.div`
  display: flex;
  gap: 8px;
`,g3=b.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover { background: #003d6b; }
`,x3=b.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`,v3=b.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,y3=b.div`
  font-weight: bold;
  margin-bottom: 8px;
`,Cs=b.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`,Rs=b.input`
  accent-color: #1976d2;
`,b3=b.div`
  display: flex;
  gap: 8px;
`,S3=b.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover { background: #003d6b; }
`,j3=b.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`,Ds=b.div`
  color: #fff;
  background: #43a047;
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 12px;
  display: inline-block;
`,w3=b.div`
  background: #f7f9fb;
  border-radius: 12px;
  padding: 24px 18px;
  margin-top: 32px;
`,z3=b.div`
  font-weight: bold;
  font-size: 1.15em;
  color: #222;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`,E3=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin-bottom: 0;
`,Os=b.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  padding: 18px 24px 14px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 140px;
`;b.span`
  font-size: 1.08em;
  font-weight: 500;
  color: #222;
`;const Ns=b.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 28px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #1251a3; }
`,Ms=b.button`
  background: none;
  color: #1976d2;
  border: none;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0 8px;
`,A3=()=>{const[l,u]=j.useState(!1),[s,c]=j.useState(""),[f,h]=j.useState(""),[v,w]=j.useState(""),[g,p]=j.useState(!1),[E,M]=j.useState(""),[C,_]=j.useState(""),[N,G]=j.useState(""),[L,B]=j.useState(""),[q,X]=j.useState(!1),[J,Q]=j.useState(!0),[ae,$]=j.useState(!1),[ge,he]=j.useState(!0),[De,Ye]=j.useState(!1),[Be,st]=j.useState(!1),[dt,Oe]=j.useState(!1),[O,V]=j.useState(!1),[te,oe]=j.useState(""),[y,Y]=j.useState(""),[Z,K]=j.useState(""),[F,ue]=j.useState(localStorage.getItem("avatar")||""),[I,Ne]=j.useState(null),xe=localStorage.getItem("fullName")||"اسم المستخدم",Qe=localStorage.getItem("email")||"",Zt=localStorage.getItem("phone")||"",[Ct,at]=j.useState(!1),[Sn,jn]=j.useState(xe),[Hi,Li]=j.useState(Qe),[vt,ki]=j.useState(Zt),[Al,Tl]=j.useState(""),[wn,Yi]=j.useState(!1),[qi,Gi]=j.useState(!1),[Xo,Ea]=j.useState(!1),ot=P=>{P.preventDefault(),u(Rt=>!Rt)},Kt=P=>{P.preventDefault(),st(!0),u(!1),c(""),h(""),w(""),setTimeout(()=>st(!1),2e3)},ut=P=>{P.preventDefault(),u(!1),c(""),h(""),w("")},Qo=P=>{P.preventDefault(),p(Rt=>!Rt)},Vo=P=>{P.preventDefault(),Oe(!0),p(!1),M(""),_(""),G(""),B(""),setTimeout(()=>Oe(!1),2e3)},Zo=P=>{P.preventDefault(),p(!1),M(""),_(""),G(""),B("")},zn=P=>{P.preventDefault(),X(Rt=>!Rt)},En=P=>{P.preventDefault(),Ye(!0),X(!1),setTimeout(()=>Ye(!1),2e3)},la=P=>{P.preventDefault(),X(!1)},An=P=>{const Rt=P.target.files[0];if(Rt){const Tn=new FileReader;Tn.onloadend=()=>{Ne(Tn.result)},Tn.readAsDataURL(Rt)}};return r.jsx(u3,{children:r.jsxs(I2,{children:[r.jsxs(P2,{children:[r.jsxs(e3,{style:{position:"relative",overflow:"hidden"},children:[I?r.jsx("img",{src:I,alt:"pending-avatar",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%",opacity:.8,border:"2px dashed #1976d2"}}):F?r.jsx("img",{src:F,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):r.jsx("i",{className:"fas fa-user"}),Ct&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{htmlFor:"avatar-upload",style:{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",background:"#fff",borderRadius:"50%",boxShadow:"0 2px 6px rgba(0,0,0,0.1)",padding:6,cursor:"pointer",border:"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,zIndex:2},title:"تغيير الصورة",children:[r.jsx("i",{className:"fas fa-camera",style:{color:"#1976d2",fontSize:18}}),r.jsx("input",{id:"avatar-upload",type:"file",accept:"image/*",onChange:An,style:{display:"none"}})]}),(F||I)&&r.jsx("button",{onClick:()=>{Ne(null),ue(""),localStorage.removeItem("avatar")},style:{position:"absolute",top:8,left:"50%",transform:"translateX(-50%)",background:"#fff",borderRadius:"50%",boxShadow:"0 2px 6px rgba(0,0,0,0.1)",border:"1px solid #ccc",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},title:"حذف الصورة",children:r.jsx("i",{className:"fas fa-trash",style:{color:"#c62828",fontSize:16}})})]})]}),r.jsx(t3,{children:Ct?r.jsxs(r.Fragment,{children:[r.jsx("input",{type:"text",value:Sn,onChange:P=>jn(P.target.value),style:{fontSize:20,marginBottom:8,padding:8,borderRadius:6,border:"1px solid #ccc",width:"100%"},placeholder:"الاسم الكامل"}),r.jsxs("div",{style:{display:"flex",gap:10},children:[r.jsx("input",{type:"email",value:Hi,onChange:P=>Li(P.target.value),style:{fontSize:16,marginBottom:8,padding:8,borderRadius:6,border:"1px solid #ccc",flex:1},placeholder:"البريد الإلكتروني"}),r.jsx("input",{type:"tel",value:vt,onChange:P=>ki(P.target.value),style:{fontSize:16,marginBottom:8,padding:8,borderRadius:6,border:"1px solid #ccc",flex:1},placeholder:"رقم الهاتف"})]}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[r.jsx("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:5,padding:"6px 16px",cursor:"pointer"},onClick:()=>{localStorage.setItem("fullName",Sn),localStorage.setItem("email",Hi),localStorage.setItem("phone",vt),I&&(ue(I),localStorage.setItem("avatar",I),Ne(null)),Tl("تم الحفظ بنجاح"),setTimeout(()=>Tl(""),2e3),at(!1)},children:"حفظ"}),r.jsx("button",{style:{background:"#eee",color:"#333",border:"none",borderRadius:5,padding:"6px 16px",cursor:"pointer"},onClick:()=>{at(!1),jn(xe),Li(Qe),ki(Zt),Ne(null)},children:"إلغاء"})]}),Al&&r.jsx("div",{style:{color:"green",marginTop:8},children:Al})]}):r.jsxs(r.Fragment,{children:[r.jsx(a3,{children:localStorage.getItem("fullName")||"اسم المستخدم"}),r.jsxs(n3,{children:[r.jsx("i",{className:"fas fa-envelope"})," ",localStorage.getItem("email")||""]}),r.jsxs(l3,{children:[r.jsx("i",{className:"fas fa-phone"})," ",localStorage.getItem("phone")||""]})]})}),r.jsxs(i3,{onClick:()=>at(!0),children:[r.jsx("i",{className:"fas fa-edit"}),"تعديل الملف الشخصي"]})]}),r.jsxs(r3,{children:[r.jsxs(Mp,{children:[r.jsx(_p,{children:"2"}),r.jsx(Bp,{children:"حجوزات نشطة"})]}),r.jsxs(Mp,{children:[r.jsx(_p,{children:"3"}),r.jsx(Bp,{children:"حجوزات مكتملة"})]})]}),r.jsxs(o3,{children:[r.jsxs(Es,{children:[r.jsxs(As,{children:[r.jsx("i",{className:"fas fa-plane"})," الحجوزات النشطة"]}),r.jsxs($a,{children:[r.jsx(go,{children:"القاهرة - جدة"}),r.jsxs(xo,{children:[r.jsx("i",{className:"fas fa-calendar"})," من: 2024-03-20 إلى: 2024-03-25"]}),r.jsx(vo,{status:"active",children:"نشط"})]}),r.jsxs($a,{children:[r.jsx(go,{children:"القاهرة - دبي"}),r.jsxs(xo,{children:[r.jsx("i",{className:"fas fa-calendar"})," من: 2024-04-01 إلى: 2024-04-05"]}),r.jsx(vo,{status:"active",children:"نشط"})]})]}),r.jsxs(Es,{children:[r.jsxs(As,{children:[r.jsx("i",{className:"fas fa-history"})," الحجوزات المكتملة"]}),r.jsxs($a,{children:[r.jsx(go,{children:"القاهرة - اسطنبول"}),r.jsxs(xo,{children:[r.jsx("i",{className:"fas fa-calendar"})," من: 2024-02-15 إلى: 2024-02-20"]}),r.jsx(vo,{status:"completed",children:"مكتمل"})]}),r.jsxs($a,{children:[r.jsx(go,{children:"القاهرة - باريس"}),r.jsxs(xo,{children:[r.jsx("i",{className:"fas fa-calendar"})," من: 2024-01-10 إلى: 2024-01-15"]}),r.jsx(vo,{status:"cancelled",children:"ملغي"})]})]}),r.jsxs(Es,{children:[r.jsxs(As,{children:[r.jsx("i",{className:"fas fa-cog"})," الإعدادات"]}),r.jsxs($a,{style:{display:"flex",alignItems:"center",position:"relative"},children:[r.jsxs(Ke,{to:"#",style:{textDecoration:"none",color:"#333",display:"flex",alignItems:"center",gap:8},onClick:zn,children:[r.jsx("i",{className:"fas fa-bell"})," إعدادات الإشعارات"]}),De&&r.jsx(Ds,{children:"تم الحفظ"}),q&&r.jsxs(v3,{children:[r.jsx(y3,{children:"إعدادات الإشعارات"}),r.jsxs(Cs,{children:[r.jsx(Rs,{type:"checkbox",checked:J,onChange:P=>Q(P.target.checked)}),"البريد الإلكتروني"]}),r.jsxs(Cs,{children:[r.jsx(Rs,{type:"checkbox",checked:ae,onChange:P=>$(P.target.checked)}),"رسائل SMS"]}),r.jsxs(Cs,{children:[r.jsx(Rs,{type:"checkbox",checked:ge,onChange:P=>he(P.target.checked)}),"إشعارات التطبيق"]}),r.jsxs(b3,{children:[r.jsx(S3,{type:"button",onClick:En,children:"حفظ"}),r.jsx(j3,{type:"button",onClick:la,children:"إلغاء"})]})]})]}),r.jsxs($a,{style:{display:"flex",alignItems:"center",position:"relative"},children:[r.jsxs(Ke,{to:"#",style:{textDecoration:"none",color:"#333",display:"flex",alignItems:"center",gap:8},onClick:ot,children:[r.jsx("i",{className:"fas fa-lock"})," تغيير كلمة المرور"]}),Be&&r.jsx(Ds,{children:"تم الحفظ"}),l&&r.jsxs(c3,{onSubmit:Kt,children:[r.jsx(Ts,{type:"password",placeholder:"كلمة المرور القديمة",value:s,onChange:P=>c(P.target.value),required:!0}),r.jsx(Ts,{type:"password",placeholder:"كلمة المرور الجديدة",value:f,onChange:P=>h(P.target.value),required:!0}),r.jsx(Ts,{type:"password",placeholder:"تأكيد كلمة المرور الجديدة",value:v,onChange:P=>w(P.target.value),required:!0}),r.jsxs(s3,{children:[r.jsx(d3,{type:"submit",children:"حفظ"}),r.jsx(f3,{type:"button",onClick:ut,children:"إلغاء"})]})]})]}),r.jsxs($a,{style:{display:"flex",alignItems:"center",position:"relative"},children:[r.jsxs(Ke,{to:"#",style:{textDecoration:"none",color:"#333",display:"flex",alignItems:"center",gap:8},onClick:P=>{P.preventDefault(),V(Rt=>!Rt)},children:[r.jsx("i",{className:"fas fa-unlock-alt"})," نسيت كلمة المرور"]}),O&&r.jsx("div",{style:{background:"#f8f9fa",borderRadius:8,padding:16,marginRight:16,minWidth:220},children:r.jsxs("form",{onSubmit:P=>{if(P.preventDefault(),!te){Y("يرجى إدخال البريد الإلكتروني"),K("");return}Y(""),K("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني "),oe("")},children:[r.jsx("input",{type:"email",placeholder:"البريد الإلكتروني",value:te,onChange:P=>oe(P.target.value),style:{width:"100%",padding:8,borderRadius:5,border:y?"1px solid red":"1px solid #ccc",marginBottom:8}}),y&&r.jsx("div",{style:{color:"red",fontSize:"13px",marginBottom:"8px",textAlign:"end"},children:y}),Z&&r.jsx("div",{style:{color:"green",fontSize:"13px",marginBottom:"8px",textAlign:"end"},children:Z}),r.jsx("button",{type:"submit",style:{background:"#00233d",color:"#fff",border:"none",borderRadius:6,padding:"8px 20px",fontSize:"1rem",cursor:"pointer"},children:"إرسال"})]})})]}),r.jsxs($a,{style:{display:"flex",alignItems:"center",position:"relative"},children:[r.jsxs(Ke,{to:"#",style:{textDecoration:"none",color:"#333",display:"flex",alignItems:"center",gap:8},onClick:Qo,children:[r.jsx("i",{className:"fas fa-credit-card"})," طرق الدفع"]}),dt&&r.jsx(Ds,{children:"تم الحفظ"}),g&&r.jsxs(m3,{children:[r.jsx(h3,{children:"إضافة بطاقة جديدة"}),r.jsx(yo,{type:"text",placeholder:"رقم البطاقة",value:E,onChange:P=>M(P.target.value),required:!0}),r.jsx(yo,{type:"text",placeholder:"اسم حامل البطاقة",value:C,onChange:P=>_(P.target.value),required:!0}),r.jsx(yo,{type:"text",placeholder:"تاريخ الانتهاء (MM/YY)",value:N,onChange:P=>G(P.target.value),required:!0}),r.jsx(yo,{type:"text",placeholder:"CVV",value:L,onChange:P=>B(P.target.value),required:!0}),r.jsxs(p3,{children:[r.jsx(g3,{type:"button",onClick:Vo,children:"حفظ"}),r.jsx(x3,{type:"button",onClick:Zo,children:"إلغاء"})]})]})]})]})]}),r.jsxs(w3,{children:[r.jsx(z3,{children:"الحسابات المرتبطة"}),r.jsxs(E3,{children:[r.jsxs(Os,{children:[r.jsx("img",{src:ed,alt:"Google",style:{width:32,height:32,marginLeft:10}}),wn?r.jsx(Ms,{onClick:()=>Yi(!1),style:{marginTop:10},children:"إلغاء الربط"}):r.jsx(Ns,{onClick:()=>Yi(!0),style:{marginTop:10},children:"ربط"})]}),r.jsxs(Os,{children:[r.jsx("img",{src:td,alt:"Facebook",style:{width:32,height:32,marginLeft:10}}),qi?r.jsx(Ms,{onClick:()=>Gi(!1),style:{marginTop:10},children:"إلغاء الربط"}):r.jsx(Ns,{onClick:()=>Gi(!0),style:{marginTop:10},children:"ربط"})]}),r.jsxs(Os,{children:[r.jsx("img",{src:ad,alt:"X",style:{width:32,height:32,marginLeft:10}}),Xo?r.jsx(Ms,{onClick:()=>Ea(!1),style:{marginTop:10},children:"إلغاء الربط"}):r.jsx(Ns,{onClick:()=>Ea(!0),style:{marginTop:10},children:"ربط"})]})]})]})]})})},Ci="/Tickify/assets/logo-C2IeeBp1.jpg",T3=b.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -5rem !important;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 32px 24px;
`,C3=b.h2`
  color: #00233d;
  margin-bottom: 18px;
  text-align: center;
`,R3=b.div`
  background: #f5f7fa;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 32px;
  font-size: 1.1rem;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:789px;
`;b.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;b.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;const D3=b.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #001a33; }
  margin-right: 10px;
`;b.div`
  display: flex;
  align-items: center;
  height: 12px;
  width: 100%;
`;const rt=b.div`
  width: 12px;
  height: 12px;
  background: #1976d2;
  border-radius: 50%;
  margin: 0;
`,Wa=b.div`
  height: 2px;
  background: #e0e0e0;
  flex: 1;
`,Up=[{value:"all",labelAr:"جميع النتائج",labelEn:"All Results"},{value:"cheapest",labelAr:"الأقل سعراً",labelEn:"Lowest Price"},{value:"expensive",labelAr:"الأكثر سعراً",labelEn:"Highest Price"},{value:"early_departure",labelAr:"رحلة الذهاب: (مبكر)",labelEn:"Departure (Early)"},{value:"late_departure",labelAr:"رحلة الذهاب: (متأخر)",labelEn:"Departure (Late)"}],O3=()=>{const{language:l}=Tt(),u=aa(),s=bn(),c=u.state||{},{origin:f,destination:h,departureDate:v,returnDate:w,cabinClass:g}=c,p=[{id:1,airline:"EgyptAir",price:919,duration:120,dep:"06:00",ret:"10:00",seats:5,airport:"مطار شرم الشيخ الدولي"},{id:2,airline:"Qatar Airways",price:1900,duration:180,dep:"09:30",ret:"13:00",seats:5,airport:"مطار اسكندرية الدولي"},{id:3,airline:"Turkish Airlines",price:981,duration:150,dep:"12:00",ret:"16:00",seats:5,airport:"مطار الأقصر الدولي"},{id:4,airline:"EgyptAir",price:700,duration:200,dep:"18:00",ret:"22:00",seats:3,airport:"مطار الأقصر الدولي"}],[E,M]=j.useState(!1),[C,_]=j.useState("all"),G=(()=>{let L=[...p];switch(C){case"cheapest":L.sort((B,q)=>B.price-q.price);break;case"expensive":L.sort((B,q)=>q.price-B.price);break;case"early_departure":L.sort((B,q)=>B.dep.localeCompare(q.dep));break;case"late_departure":L.sort((B,q)=>q.dep.localeCompare(B.dep));break;case"all":default:return p}return L})();return r.jsxs(T3,{children:[r.jsx(C3,{children:l==="ar"?"نتائج البحث عن الرحلات":"Flight Search Results"}),r.jsx("div",{style:{width:"auto",display:"flex",justifyContent:"flex-end",marginBottom:"8px"},children:r.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:8},children:[r.jsxs("button",{onClick:()=>M(L=>!L),style:{background:"#fff",border:"1px solid #ccc",borderRadius:8,padding:"7px 18px",fontWeight:"bold",cursor:"pointer",minWidth:120,display:"flex",alignItems:"center",gap:8},children:[Up.find(L=>L.value===C)[l==="ar"?"labelAr":"labelEn"],r.jsx("span",{style:{fontSize:"1.2em"},children:E?"▲":"▼"})]}),E&&r.jsx("div",{style:{position:"absolute",top:"110%",left:0,right:0,background:"#fff",border:"1px solid #ccc",borderRadius:8,zIndex:10,boxShadow:"0 2px 8px #eee",minWidth:150},children:Up.map(L=>r.jsx("div",{onClick:()=>{_(L.value),M(!1)},style:{padding:"10px 16px",cursor:"pointer",fontWeight:C===L.value?"bold":"normal",background:C===L.value?"#f5f7fa":"#fff",textAlign:l==="ar"?"right":"left"},children:l==="ar"?L.labelAr:L.labelEn},L.value))})]})}),r.jsxs(R3,{children:[r.jsx("span",{style:{marginRight:16},children:l==="ar"?`من ${f||"-"} إلى ${h||"-"} | مغادرة: ${v||"-"} | درجة المقعد: ${g||"-"}`:`From ${f||"-"} to ${h||"-"} | Departure: ${v||"-"} | Cabin: ${g||"-"}`}),r.jsx(D3,{onClick:()=>s("/"),children:l==="ar"?"تعديل البحث":"Edit Search"})]}),r.jsxs("div",{style:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px #eee",padding:"18px 0",marginBottom:32,display:"flex",alignItems:"center",direction:"rtl",gap:0,position:"relative",overflow:"hidden",flexDirection:"row-reverse",textAlign:"right"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:120},children:[r.jsxs("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:8,fontSize:"1.1rem",padding:"8px 24px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:"1.2rem",marginLeft:6},children:"<"}),"حجز"]}),r.jsx("div",{style:{fontWeight:"bold",fontSize:"1.3rem",color:"#222"},children:"919 ج.م"}),r.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"1rem",margin:"0 16px"},children:"عدد المقاعد المتاحة: 5"})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[0].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[0].ret})})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[0].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[0].ret})})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",minWidth:120,marginLeft:24},children:[r.jsx("img",{src:Ci,alt:"شعار مطار شرم الشيخ الدولي",style:{width:48,height:48,objectFit:"contain",marginBottom:6,borderRadius:8}}),r.jsx("div",{style:{fontWeight:"bold",color:"#222",fontSize:"1rem"},children:" مطار شرم الشيخ الدولي "})]})]}),r.jsxs("div",{style:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px #eee",padding:"18px 0",marginBottom:32,display:"flex",alignItems:"center",direction:"rtl",gap:0,position:"relative",overflow:"hidden",flexDirection:"row-reverse",textAlign:"right"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:120},children:[r.jsxs("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:8,fontSize:"1.1rem",padding:"8px 24px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:"1.2rem",marginLeft:6},children:"<"}),"حجز"]}),r.jsx("div",{style:{fontWeight:"bold",fontSize:"1.3rem",color:"#222"},children:"190.91 ج.م"}),r.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"1rem",margin:"0 16px"},children:"عدد المقاعد المتاحة: 5"})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:12,justifyContent:"center"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[1].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[1].ret})})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[1].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[1].ret})})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",minWidth:120,marginLeft:24},children:[r.jsx("img",{src:Ci,alt:"شعار مطار شرم الشيخ الدولي",style:{width:48,height:48,objectFit:"contain",marginBottom:6,borderRadius:8}}),r.jsx("div",{style:{fontWeight:"bold",color:"#222",fontSize:"1rem"},children:" مطار اسكندرية الدولي"})]})]}),r.jsxs("div",{style:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px #eee",padding:"18px 0",marginBottom:32,display:"flex",alignItems:"center",direction:"rtl",gap:0,position:"relative",overflow:"hidden",flexDirection:"row-reverse",textAlign:"right"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:120},children:[r.jsxs("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:8,fontSize:"1.1rem",padding:"8px 24px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:"1.2rem",marginLeft:6},children:"<"}),"حجز"]}),r.jsx("div",{style:{fontWeight:"bold",fontSize:"1.3rem",color:"#222"},children:"981 ج.م"}),r.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"1rem",margin:"0 16px"},children:"عدد المقاعد المتاحة: 5"})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[2].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[2].ret})})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[2].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[2].ret})})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",minWidth:120,marginLeft:24},children:[r.jsx("img",{src:Ci,alt:"شعار مطار شرم الشيخ الدولي",style:{width:48,height:48,objectFit:"contain",marginBottom:6,borderRadius:8}}),r.jsx("div",{style:{fontWeight:"bold",color:"#222",fontSize:"1rem"},children:" مطار الأقصر الدولي"})]})]}),r.jsxs("div",{style:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px #eee",padding:"18px 0",marginBottom:32,display:"flex",alignItems:"center",direction:"rtl",gap:0,position:"relative",overflow:"hidden",flexDirection:"row-reverse",textAlign:"right"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:120},children:[r.jsxs("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:8,fontSize:"1.1rem",padding:"8px 24px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:"1.2rem",marginLeft:6},children:"<"}),"حجز"]}),r.jsx("div",{style:{fontWeight:"bold",fontSize:"1.3rem",color:"#222"},children:"700 ج.م"}),r.jsx("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"1rem",margin:"0 16px"},children:"عدد المقاعد المتاحة: 3"})]}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[3].dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:p[3].ret})})]})}),r.jsxs("div",{style:{display:"flex",alignItems:"center",minWidth:120,marginLeft:24},children:[r.jsx("img",{src:Ci,alt:"شعار مطار شرم الشيخ الدولي",style:{width:48,height:48,objectFit:"contain",marginBottom:6,borderRadius:8}}),r.jsx("div",{style:{fontWeight:"bold",color:"#222",fontSize:"1rem"},children:" مطار الأقصر الدولي"})]})]}),G.map((L,B)=>r.jsxs("div",{style:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px #eee",padding:"18px 0",marginBottom:32,display:"flex",alignItems:"center",direction:"rtl",gap:0,position:"relative",overflow:"hidden",flexDirection:"row-reverse",textAlign:"right"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:120},children:[r.jsxs("button",{style:{background:"#00233d",color:"#fff",border:"none",borderRadius:8,fontSize:"1.1rem",padding:"8px 24px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:"1.2rem",marginLeft:6},children:"<"}),"حجز"]}),r.jsxs("div",{style:{fontWeight:"bold",fontSize:"1.3rem",color:"#222"},children:[L.price," ج.م"]}),r.jsxs("div",{style:{color:"#1976d2",fontWeight:"bold",fontSize:"1rem",margin:"0 16px"},children:["عدد المقاعد المتاحة: ",L.seats]})]}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",width:"50%"},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",marginLeft:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:L.dep})}),r.jsx(rt,{className:"start"}),r.jsx(Wa,{}),r.jsx(rt,{className:"end"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:20},children:r.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:L.ret})})]})}),r.jsxs("div",{style:{display:"flex",alignItems:"center",minWidth:120,marginLeft:24},children:[r.jsx("img",{src:Ci,alt:"شعار مطار شرم الشيخ الدولي",style:{width:48,height:48,objectFit:"contain",marginBottom:6,borderRadius:8}}),r.jsxs("div",{style:{fontWeight:"bold",color:"#222",fontSize:"1rem"},children:[" ",L.airport," "]})]})]},L.id))]})};function N3(){const l=aa(),u=l.pathname==="/login"||l.pathname==="/signup";return r.jsx(bv,{children:r.jsxs(wy,{children:[r.jsx(d2,{}),r.jsxs("div",{className:"app",children:[!u&&r.jsx(_y,{}),!u&&r.jsx(u2,{}),l.pathname==="/profile"?r.jsx(A3,{}):r.jsx("main",{className:"main-content",children:r.jsxs(Y1,{children:[r.jsx(kt,{path:"/",element:r.jsx(cb,{})}),r.jsx(kt,{path:"/flights",element:r.jsx(K2,{})}),r.jsx(kt,{path:"/hotels",element:r.jsx(wb,{})}),r.jsx(kt,{path:"/cars",element:r.jsx(M2,{})}),r.jsx(kt,{path:"/login",element:r.jsx(kb,{})}),r.jsx(kt,{path:"/signup",element:r.jsx(Pb,{})}),r.jsx(kt,{path:"/about",element:r.jsx(y2,{})}),r.jsx(kt,{path:"/cancellation",element:r.jsx(S2,{})}),r.jsx(kt,{path:"/terms",element:r.jsx(j2,{})}),r.jsx(kt,{path:"/help",element:r.jsx(F2,{})}),r.jsx(kt,{path:"/flights/results",element:r.jsx(O3,{})})]})}),!u&&r.jsx(l2,{})]})]})})}function M3(){return r.jsx(sv,{children:r.jsx(N3,{})})}$x.createRoot(document.getElementById("root")).render(r.jsx(j.StrictMode,{children:r.jsx(M3,{})}));
