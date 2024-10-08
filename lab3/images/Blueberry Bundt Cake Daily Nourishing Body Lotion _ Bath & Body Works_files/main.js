(function(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["offers"] = factory();
	else
		root["og"] = root["og"] || {}, root["og"]["offers"] = factory();
})(window, function() {
  var module={}, exports={};(factory => {
if(typeof exports === 'object' && typeof module === 'object')
  module.exports = factory();
else if(typeof define === 'function' && define.amd)
  define([], factory);
else {
  window.og = window.og || {};
  window.og['offers'] = factory();
}      
})(()=>{ 
var lib=(()=>{var ba=Object.create;var ut=Object.defineProperty;var _a=Object.getOwnPropertyDescriptor;var Sa=Object.getOwnPropertyNames;var Ea=Object.getPrototypeOf,xa=Object.prototype.hasOwnProperty;var n=(t,e)=>ut(t,"name",{value:e,configurable:!0});var Se=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),En=(t,e)=>{for(var r in e)ut(t,r,{get:e[r],enumerable:!0})},xn=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Sa(e))!xa.call(t,i)&&i!==r&&ut(t,i,{get:()=>e[i],enumerable:!(o=_a(e,i))||o.enumerable});return t};var ce=(t,e,r)=>(r=t!=null?ba(Ea(t)):{},xn(e||!t||!t.__esModule?ut(r,"default",{value:t,enumerable:!0}):r,t)),va=t=>xn(ut({},"__esModule",{value:!0}),t);var Vt=Se(($t,An)=>{(function(t,e){typeof $t=="object"&&typeof An<"u"?e($t):typeof define=="function"&&define.amd?define(["exports"],e):(t=t||self,e(t.throttleDebounce={}))})($t,function(t){"use strict";function e(o,i,s,a){var c,l=!1,p=0;function f(){c&&clearTimeout(c)}n(f,"clearExistingTimeout");function u(){f(),l=!0}n(u,"cancel"),typeof i!="boolean"&&(a=s,s=i,i=void 0);function h(){for(var b=arguments.length,S=new Array(b),m=0;m<b;m++)S[m]=arguments[m];var E=this,T=Date.now()-p;if(l)return;function _(){p=Date.now(),s.apply(E,S)}n(_,"exec");function w(){c=void 0}n(w,"clear"),a&&!c&&_(),f(),a===void 0&&T>o?_():i!==!0&&(c=setTimeout(a?w:_,a===void 0?o-T:o))}return n(h,"wrapper"),h.cancel=u,h}n(e,"throttle");function r(o,i,s){return s===void 0?e(o,i,!1):e(o,s,i!==!1)}n(r,"debounce"),t.debounce=r,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})})});var bt=Se((Su,Jn)=>{var qa="Expected a function",Hn="__lodash_hash_undefined__",Da="[object Function]",Fa="[object GeneratorFunction]",Ua=/[\\^$.*+?()[\]{}|]/g,La=/^\[object .+?Constructor\]$/,Ma=typeof window=="object"&&window&&window.Object===Object&&window,$a=typeof self=="object"&&self&&self.Object===Object&&self,Gn=Ma||$a||Function("return this")();function Va(t,e){return t?.[e]}n(Va,"getValue");function ja(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}n(ja,"isHostObject");var Ha=Array.prototype,Ga=Function.prototype,Bn=Object.prototype,ro=Gn["__core-js_shared__"],jn=function(){var t=/[^.]+$/.exec(ro&&ro.keys&&ro.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),zn=Ga.toString,oo=Bn.hasOwnProperty,Ba=Bn.toString,za=RegExp("^"+zn.call(oo).replace(Ua,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ya=Ha.splice,Wa=Yn(Gn,"Map"),yt=Yn(Object,"create");function Te(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Te,"Hash");function Ja(){this.__data__=yt?yt(null):{}}n(Ja,"hashClear");function Ka(t){return this.has(t)&&delete this.__data__[t]}n(Ka,"hashDelete");function Qa(t){var e=this.__data__;if(yt){var r=e[t];return r===Hn?void 0:r}return oo.call(e,t)?e[t]:void 0}n(Qa,"hashGet");function Za(t){var e=this.__data__;return yt?e[t]!==void 0:oo.call(e,t)}n(Za,"hashHas");function Xa(t,e){var r=this.__data__;return r[t]=yt&&e===void 0?Hn:e,this}n(Xa,"hashSet");Te.prototype.clear=Ja;Te.prototype.delete=Ka;Te.prototype.get=Qa;Te.prototype.has=Za;Te.prototype.set=Xa;function Be(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Be,"ListCache");function ec(){this.__data__=[]}n(ec,"listCacheClear");function tc(t){var e=this.__data__,r=or(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():Ya.call(e,r,1),!0}n(tc,"listCacheDelete");function rc(t){var e=this.__data__,r=or(e,t);return r<0?void 0:e[r][1]}n(rc,"listCacheGet");function oc(t){return or(this.__data__,t)>-1}n(oc,"listCacheHas");function nc(t,e){var r=this.__data__,o=or(r,t);return o<0?r.push([t,e]):r[o][1]=e,this}n(nc,"listCacheSet");Be.prototype.clear=ec;Be.prototype.delete=tc;Be.prototype.get=rc;Be.prototype.has=oc;Be.prototype.set=nc;function we(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(we,"MapCache");function ic(){this.__data__={hash:new Te,map:new(Wa||Be),string:new Te}}n(ic,"mapCacheClear");function sc(t){return nr(this,t).delete(t)}n(sc,"mapCacheDelete");function ac(t){return nr(this,t).get(t)}n(ac,"mapCacheGet");function cc(t){return nr(this,t).has(t)}n(cc,"mapCacheHas");function lc(t,e){return nr(this,t).set(t,e),this}n(lc,"mapCacheSet");we.prototype.clear=ic;we.prototype.delete=sc;we.prototype.get=ac;we.prototype.has=cc;we.prototype.set=lc;function or(t,e){for(var r=t.length;r--;)if(hc(t[r][0],e))return r;return-1}n(or,"assocIndexOf");function pc(t){if(!Wn(t)||dc(t))return!1;var e=mc(t)||ja(t)?za:La;return e.test(fc(t))}n(pc,"baseIsNative");function nr(t,e){var r=t.__data__;return uc(e)?r[typeof e=="string"?"string":"hash"]:r.map}n(nr,"getMapData");function Yn(t,e){var r=Va(t,e);return pc(r)?r:void 0}n(Yn,"getNative");function uc(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}n(uc,"isKeyable");function dc(t){return!!jn&&jn in t}n(dc,"isMasked");function fc(t){if(t!=null){try{return zn.call(t)}catch{}try{return t+""}catch{}}return""}n(fc,"toSource");function no(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(qa);var r=n(function(){var o=arguments,i=e?e.apply(this,o):o[0],s=r.cache;if(s.has(i))return s.get(i);var a=t.apply(this,o);return r.cache=s.set(i,a),a},"memoized");return r.cache=new(no.Cache||we),r}n(no,"memoize");no.Cache=we;function hc(t,e){return t===e||t!==t&&e!==e}n(hc,"eq");function mc(t){var e=Wn(t)?Ba.call(t):"";return e==Da||e==Fa}n(mc,"isFunction");function Wn(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}n(Wn,"isObject");Jn.exports=no});var xr=Se((uf,Xi)=>{var al={PAR_OPEN:"(".charCodeAt(0),PAR_CLOSE:")".charCodeAt(0),OP_NOT:"!".charCodeAt(0),BINARY_AND:"&".charCodeAt(0),BINARY_OR:"|".charCodeAt(0),LITERAL:"LITERAL",END:"END",LEAF:"LEAF",ATOMIC:"ATOMIC"};Xi.exports=al});var ts=Se((df,es)=>{var ke=xr(),cl=n(t=>{let e="",r=[];for(let o of t){let i=o.charCodeAt(0);switch(i){case ke.PAR_OPEN:case ke.PAR_CLOSE:case ke.OP_NOT:case ke.BINARY_AND:case ke.BINARY_OR:e&&(r.push({type:ke.LITERAL,value:e}),e=""),r.push({type:i,value:o});break;default:e+=o}}return e&&r.push({type:ke.LITERAL,value:e}),r},"Tokenizer");es.exports=cl});var os=Se((ff,rs)=>{var be=xr(),ll=n(t=>{let e=[],r=[];return t.forEach(i=>{switch(i.type){case be.LITERAL:e.unshift(i);break;case be.BINARY_AND:case be.BINARY_OR:case be.OP_NOT:case be.PAR_OPEN:r.push(i);break;case be.PAR_CLOSE:for(;r.length&&r[r.length-1].type!==be.PAR_OPEN;)e.unshift(r.pop());r.pop(),r.length&&r[r.length-1].type===be.OP_NOT&&e.unshift(r.pop());break;default:break}}),r.length&&[...r.reverse(),...e]||e},"PolishNotation"),pl=n(function*(t){for(let e=0;e<t.length-1;e++)yield t[e];return t[t.length-1]},"PolishGenerator");rs.exports={PolishNotation:ll,PolishGenerator:pl}});var is=Se((hf,ns)=>{var F=xr(),V=class{constructor(e,r,o,i){this.op=e,this.left=r,this.right=o,this.literal=i}isLeaf(){return this.op===F.LEAF}isAtomic(){return this.isLeaf()||this.op===F.OP_NOT&&this.left.isLeaf()}getLiteralValue(){return this.literal}static CreateAnd(e,r){return new V(F.BINARY_AND,e,r)}static CreateNot(e){return new V(F.OP_NOT,e)}static CreateOr(e,r){return new V(F.BINARY_OR,e,r)}static CreateLiteral(e){return new V(F.LEAF,null,null,e)}};n(V,"ExpNode");var it=n(t=>{let e=t.next().value;switch(e.type){case F.LITERAL:return V.CreateLiteral(e.value);case F.OP_NOT:return V.CreateNot(it(t));case F.BINARY_AND:{let r=it(t),o=it(t);return V.CreateAnd(r,o)}case F.BINARY_OR:{let r=it(t),o=it(t);return V.CreateOr(r,o)}}return null},"make"),st=n((t,e)=>{if(t.isLeaf())return e(t.getLiteralValue());if(t.op===F.OP_NOT)return!st(t.left,e);if(t.op===F.BINARY_OR)return st(t.left,e)||st(t.right,e);if(t.op===F.BINARY_AND)return st(t.left,e)&&st(t.right,e)},"nodeEvaluator");ns.exports={make:it,nodeEvaluator:st}});var ls=Se((mf,cs)=>{var ul=ts(),ss=os(),as=is(),dl=n((t,e)=>{let r=ul(t),o=ss.PolishNotation(r),i=ss.PolishGenerator(o),s=as.make(i);return as.nodeEvaluator(s,e)},"parse");cs.exports={parse:dl}});var uu={};En(uu,{addOptinChangedCallback:()=>Hp,addTemplate:()=>Gp,autoInit:()=>lu,clear:()=>Bp,config:()=>zp,default:()=>pu,disableOptinChangedCallbacks:()=>Yp,getOptins:()=>Wp,getProductsForPurchasePost:()=>Jp,initialize:()=>Kp,isReady:()=>jp,offers:()=>O,platform:()=>q,previewMode:()=>Qp,register:()=>Zp,resolveSettings:()=>Xp,setAuthUrl:()=>eu,setEnvironment:()=>tu,setLocale:()=>ru,setMerchantId:()=>ou,setPublicPath:()=>nu,setTemplates:()=>iu,setupCart:()=>su,setupProduct:()=>au,setupProducts:()=>cu,store:()=>ga});function Kr(t){var e,r=t.Symbol;return typeof r=="function"?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}n(Kr,"symbolObservablePonyfill");var Fe;typeof self<"u"?Fe=self:typeof window<"u"||typeof window<"u"?Fe=window:typeof module<"u"?Fe=module:Fe=Function("return this")();var Oa=Kr(Fe),Qr=Oa;var Zr=n(function(){return Math.random().toString(36).substring(7).split("").join(".")},"randomString"),dt={INIT:"@@redux/INIT"+Zr(),REPLACE:"@@redux/REPLACE"+Zr(),PROBE_UNKNOWN_ACTION:n(function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Zr()},"PROBE_UNKNOWN_ACTION")};function Pa(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}n(Pa,"isPlainObject");function Xr(t,e,r){var o;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(Xr)(t,e)}if(typeof t!="function")throw new Error("Expected the reducer to be a function.");var i=t,s=e,a=[],c=a,l=!1;function p(){c===a&&(c=a.slice())}n(p,"ensureCanMutateNextListeners");function f(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}n(f,"getState");function u(m){if(typeof m!="function")throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var E=!0;return p(),c.push(m),n(function(){if(!!E){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");E=!1,p();var _=c.indexOf(m);c.splice(_,1),a=null}},"unsubscribe")}n(u,"subscribe");function h(m){if(!Pa(m))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof m.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=i(s,m)}finally{l=!1}for(var E=a=c,T=0;T<E.length;T++){var _=E[T];_()}return m}n(h,"dispatch");function b(m){if(typeof m!="function")throw new Error("Expected the nextReducer to be a function.");i=m,h({type:dt.REPLACE})}n(b,"replaceReducer");function S(){var m,E=u;return m={subscribe:n(function(_){if(typeof _!="object"||_===null)throw new TypeError("Expected the observer to be an object.");function w(){_.next&&_.next(f())}n(w,"observeState"),w();var C=E(w);return{unsubscribe:C}},"subscribe")},m[Qr]=function(){return this},m}return n(S,"observable"),h({type:dt.INIT}),o={dispatch:h,subscribe:u,getState:f,replaceReducer:b},o[Qr]=S,o}n(Xr,"createStore");function Ta(t,e){var r=e&&e.type,o=r&&'action "'+String(r)+'"'||"an action";return"Given "+o+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}n(Ta,"getUndefinedStateErrorMessage");function wa(t){Object.keys(t).forEach(function(e){var r=t[e],o=r(void 0,{type:dt.INIT});if(typeof o>"u")throw new Error('Reducer "'+e+`" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(typeof r(void 0,{type:dt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+dt.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")})}n(wa,"assertReducerShape");function Mt(t){for(var e=Object.keys(t),r={},o=0;o<e.length;o++){var i=e[o];typeof t[i]=="function"&&(r[i]=t[i])}var s=Object.keys(r),a,c;try{wa(r)}catch(l){c=l}return n(function(p,f){if(p===void 0&&(p={}),c)throw c;if(!1)var u;for(var h=!1,b={},S=0;S<s.length;S++){var m=s[S],E=r[m],T=p[m],_=E(T,f);if(typeof _>"u"){var w=Ta(m,f);throw new Error(w)}b[m]=_,h=h||_!==T}return h=h||s.length!==Object.keys(p).length,h?b:p},"combination")}n(Mt,"combineReducers");function vn(t,e){return function(){return e(t.apply(this,arguments))}}n(vn,"bindActionCreator");function Pn(t,e){if(typeof t=="function")return vn(t,e);if(typeof t!="object"||t===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(t===null?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in t){var i=t[o];typeof i=="function"&&(r[o]=vn(i,e))}return r}n(Pn,"bindActionCreators");function Ca(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n(Ca,"_defineProperty");function On(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r}n(On,"ownKeys");function Ra(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?On(r,!0).forEach(function(o){Ca(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):On(r).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}n(Ra,"_objectSpread2");function eo(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,i){return function(){return o(i.apply(void 0,arguments))}})}n(eo,"compose");function Tn(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(o){return function(){var i=o.apply(void 0,arguments),s=n(function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},"dispatch"),a={getState:i.getState,dispatch:n(function(){return s.apply(void 0,arguments)},"dispatch")},c=e.map(function(l){return l(a)});return s=eo.apply(void 0,c)(i.dispatch),Ra({},i,{dispatch:s})}}}n(Tn,"applyMiddleware");function wn(t){var e=n(function(o){var i=o.dispatch,s=o.getState;return function(a){return function(c){return typeof c=="function"?c(i,s,t):a(c)}}},"middleware");return e}n(wn,"createThunkMiddleware");var Cn=wn();Cn.withExtraArgument=wn;var Rn=Cn;var vi=ce(Vt());var Nn=/^og_auth=/,Aa=n((t=Nn)=>(document.cookie.split(/;\s*/).find(e=>e.match(t))||"").replace(Nn,""),"c"),jt=n(t=>{if(typeof t=="object")return t;let e=String(t||"").split("|");return e.length===3?{sig_field:e[0],ts:parseInt(e[1],10),sig:e[2]}:null},"r"),Na=n(t=>new Promise((e,r)=>{let o=document.createElement("iframe");o.style.setProperty("display","none","important"),document.body.appendChild(o),o.onload=e,o.onerror=r,o.src=t}),"p"),Ia=n(t=>(t.headers.get("content-type")||"").indexOf("application/json")!==-1,"d");function In(){return typeof window.og_auth<"u"?jt(window.og_auth):null}n(In,"a");async function ka(t=100){return new Promise(e=>{setTimeout(()=>e(In()),t)})}n(ka,"f");async function kn(t,e=Aa,r=Na){let o;if(o=jt(In())||jt(e()),o)return o;if(t&&typeof t=="string"){let i=await fetch(t);i.status>=200&&i.status<300&&(o=e()||await(Ia(i)?i.json():Promise.resolve(r(t)).then(e)))}else o||(o=await ka());if(o=jt(o),o)return o;throw new Error("Unauthorized")}n(kn,"u");var R="OPTIN_PRODUCT",I="OPTOUT_PRODUCT",k="PRODUCT_CHANGE_FREQUENCY",ie="PRODUCT_CHANGE_PREPAID_SHIPMENTS",Ue="SET_MERCHANT_ID",J="REQUEST_OFFER",P="RECEIVE_OFFER",ft="PRODUCT_HAS_CHANGED",Le="CREATED_SESSION_ID",Ht="SET_AUTH_URL",qn="REQUEST_AUTH",Gt="AUTHORIZE",Ee="UNAUTHORIZED",Dn="REQUEST_ORDERS",Bt="RECEIVE_ORDERS",ht="CART_PRODUCT_KEY_HAS_CHANGED",zt="RECEIVE_ORDER_ITEMS",Fn="FETCH_RESPONSE_ERROR",Me="SET_ENVIRONMENT_STAGING",$e="SET_ENVIRONMENT_DEV",Ve="SET_ENVIRONMENT_PROD",Un="CONCLUDE_UPSELL",Ln="REQUEST_CREATE_IU_ORDER",Yt="CREATE_ONE_TIME",Mn="REQUEST_CONVERT_ONE_TIME",Wt="CONVERT_ONE_TIME";var je="CHECKOUT",$n="RECEIVE_FETCH",Jt="SET_LOCALE",He="SET_CONFIG",le="SET_PREVIEW_STANDARD_OFFER",mt="SET_PREVIEW_UPSELL_OFFER",to="SET_PREVIEW_PREPAID_OFFER",Kt="ADD_TEMPLATE",Qt="SET_TEMPLATES",xe="LOCAL_STORAGE_CHANGE",pe="LOCAL_STORAGE_CLEAR",Zt="SET_FIRST_ORDER_PLACE_DATE",Xt="SET_PRODUCT_TO_SUBSCRIBE",B="RECEIVE_PRODUCT_PLANS",K="SETUP_PRODUCT",ue="SETUP_CART",Ge="RECEIVE_MERCHANT_SETTINGS",ve="pdp",er="dev",Oe="staging",Pe="prod",tr="static.ordergroove.com",rr="staging.static.ordergroove.com",Vn="og-cart-updated";var ir=ce(bt());var io=n((...t)=>JSON.stringify(t),"memoizeKey"),_t=n(t=>(...e)=>fetch(...t(...e)).then(r=>r.json()),"withFetchJson"),St=n(t=>(e,...r)=>{if(!e)throw Error("host required");let[o,i={}]=t(...r);return[`${e.replace(/\/+$/,"")}${o}`,i]},"withHost"),sr=n(t=>(e,...r)=>{if(!e)throw Error("auth required");let[o,i={}]=t(...r);return[o,{...i,headers:{Authorization:JSON.stringify(e),...i.headers}}]},"withAuth"),Kn=n(t=>(...e)=>{let[r,o={}]=t(...e);return[r,{method:"POST",...o,body:JSON.stringify(o.body),headers:{"Content-type":"application/json",...o.headers}}]},"withJsonBody"),Qn=n((t=[])=>(Array.isArray(t)?t:Object.entries(t)).map(([e,r])=>[e,encodeURIComponent(r)].join("=")).join("&"),"toQuery"),gc=n(t=>JSON.stringify([].concat(t).map(e=>typeof e=="object"?e.id:e).filter(e=>e)),"toProductId"),yc=(0,ir.default)(_t(St((t,e,r,o="pdp")=>{if(!t)throw Error("merchantId required");if(!e)throw Error("sessionId required");if(!r)throw Error("product required");let i=Qn([["session_id",e],["page_type",1],["p",gc(r)],["module_view",JSON.stringify(["regular"])]]);return[`/offer/${t}/${o}?${i}`]})),io),bc=(0,ir.default)(_t(St(sr((t=1,e="place")=>[`/orders/?${Qn([["status",t],["ordering",e],["exclude_prepaid_orders","true"]])}`]))),io),_c=(0,ir.default)(_t(St(sr(t=>{if(!t)throw Error("orderId required");return[`/items/?order=${t}`]}))),io),Sc=_t(St(sr(Kn((t,e,r,o)=>{if(!t)throw Error("product required");if(!e)throw Error("order required");if(!r)throw Error("quantity required");if(r<=0)throw Error("quantity must be greater or equal than one");if(!o)throw Error("offer required");return["/items/iu/",{body:{product:t,order:e,quantity:r,offer:o}}]})))),Et=n(t=>{if(typeof t=="object")return{...t};let[e,r]=(t||"").split(/_/).map(o=>parseInt(o,10));return e&&r&&{every:e,every_period:r}},"parseFrequency"),so=n(t=>t.match(/^\d+_\d$/),"isFrequencyValid"),Ec=n((t,e)=>String.prototype.localeCompare.call(t&&t.split("_").reverse().join("_"),e&&e.split("_").reverse().join("_")),"compareFrequencies"),Zn=n(t=>[...new Set(t&&t.split(/\s+/))].filter(so).sort(Ec),"parseFrequenciesList");var xt=n(t=>{if(typeof t=="object"){let{every:e,period:r,every_period:o}=t;return`${e}_${r||o}`}return typeof t=="string"?t:""},"stringifyFrequency"),xc=_t(St(sr(Kn((t,e,r)=>{if(!t)throw Error("item required");if(!e)throw Error("frequency required");let o=Et(e);if(!o)throw Error("invalid frequency");return["/subscriptions/create_from_item/",{body:{item:t.public_id,offer:r,...o}}]})))),de={fetchOffer:yc,fetchOrders:bc,fetchItems:_c,createOneTime:Sc,convertOneTimeToSubscription:xc};var ao=vt(),q={shopify:typeof window.Shopify!="undefined",shopify_selling_plans:typeof(ao==null?void 0:ao.dataset.shopifySellingPlans)!="undefined"};function vc(t,e){return t===e}n(vc,"defaultEqualityCheck");function Oc(t,e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,i=0;i<o;i++)if(!t(e[i],r[i]))return!1;return!0}n(Oc,"areArgumentsShallowlyEqual");function Pc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc,r=null,o=null;return function(){return Oc(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}n(Pc,"defaultMemoize");function Tc(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(o){return typeof o=="function"})){var r=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return e}n(Tc,"getDependencies");function wc(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];var c=0,l=s.pop(),p=Tc(s),f=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(r)),u=t(function(){for(var h=[],b=p.length,S=0;S<b;S++)h.push(p[S].apply(null,arguments));return f.apply(null,h)});return u.resultFunc=l,u.dependencies=p,u.recomputations=function(){return c},u.resetRecomputations=function(){return c=0},u}}n(wc,"createSelectorCreator");var Q=wc(Pc);var z=ce(bt());z.default.Cache=Map;function Cc(t,e){if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}n(Cc,"arraysEqual");function Rc(t,e,r){let o=xt(r);return q.shopify_selling_plans?te(t,e,o):o}n(Rc,"resolveFrequency");var A=n((t,e)=>!!(t===e||typeof t=="object"&&typeof e=="object"&&t&&e&&t.id===e.id&&(!(Array.isArray(t.components)&&Array.isArray(e.components))||Cc((t.components||[]).sort(),(e.components||[]).sort()))),"isSameProduct"),Ot=n(t=>t.optedin||[],"optedinSelector"),Xn=n(t=>t.optedout||[],"optedoutSelector"),co=n(t=>t.autoshipByDefault||{},"autoshipSelector"),Ac=n(t=>t.defaultFrequencies||{},"defaultFrequenciesSelector"),Nc=n(t=>{var e;return((e=t==null?void 0:t.config)==null?void 0:e.frequencies)||[]},"sellingPlansSelector"),Ic=n(t=>{var e;return((e=t==null?void 0:t.config)==null?void 0:e.frequenciesEveryPeriod)||[]},"frequenciesEveryPeriodSelector"),kc=n(t=>{var e;return((e=t==null?void 0:t.config)==null?void 0:e.prepaidSellingPlans)||[]},"prepaidSellingPlansSelector"),qc=n(t=>(t==null?void 0:t.prepaidShipmentsSelected)||{},"prepaidShipmentsSelectedSelector"),Z=(0,z.default)(t=>Q(Ot,Xn,co,(e,r,o)=>{let i=e.find(s=>A(t,s));return i||(r.find(s=>A(t,s))?!1:t&&o[t.id]?{id:t.id}:!1)}),t=>JSON.stringify(t)),ar=(0,z.default)(t=>Q(Ot,e=>{let r=e.find(o=>A(t,o));return r||!1}),t=>JSON.stringify(t)),ei=(0,z.default)(t=>Q(Ot,e=>e.some(r=>A(t,r)&&r.prepaidShipments)),t=>JSON.stringify(t)),X=(0,z.default)(t=>Q(qc,e=>e[t.id]||null),t=>JSON.stringify(t)),cr=(0,z.default)(t=>Q(Xn,e=>e.find(r=>A(t,r))));var ee=(0,z.default)(t=>Q(Z(t),e=>e&&e.frequency||null)),U=(0,z.default)(t=>Q(Z(t),e=>e&&e.prepaidShipments||null)),L=(0,z.default)(t=>Q(kc,e=>{var o;return(((o=e[x(t)])==null?void 0:o.map(({numberShipments:i})=>i))||[]).sort((i,s)=>i-s)})),ze=(0,z.default)(t=>Q(Ac,Nc,Ic,(e,r,o)=>e[x(t)]&&Rc(r,o,e[x(t)])||null)),lo=n(t=>t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"kebabCase"),M=n((t,e,r,o)=>({[r]:t.config&&t.config[r]||e&&e.hasAttribute&&e.hasAttribute(lo(r))&&e[r]||e.offer&&typeof(e.offer[r]!=="undefined")&&e.offer[r]||o}),"configSelector"),Ye=n(t=>({templates:t.templates||[]}),"templatesSelector");function lr(t){document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t()}n(lr,"onReady");function vt(){return document.querySelector([`script[src^="https://${tr}"]`,`script[src^="https://${rr}"]`,`script[src^="http://${tr}"]`,`script[src^="http://${rr}"]`].join(","))}n(vt,"getMainJs");function po(){let t=vt();if(!t)return[];let e=new URL(t.src),r=e.host.startsWith(Oe)?Oe:Pe,o=e.pathname.split("/")[1];return!r&&!o?[]:[o,r,t]}n(po,"resolveEnvAndMerchant");var x=n(t=>{var r;if(!t)return"";let e=`${t.id||t}`;return(r=q)!=null&&r.shopify_selling_plans&&(e=e.split(":")[0]),e},"safeProductId"),ti=n((t,e)=>{var r;if(q.shopify_selling_plans){let o=(r=e.frequencies)==null?void 0:r.indexOf(t);if(o>=0&&e.frequenciesEveryPeriod[o])return e.frequenciesEveryPeriod[o]}return t},"safeOgFrequency"),Pt=n((t,e)=>{var o,i,s;if(!`${t}`.includes("_"))return t;let r=(o=e.frequenciesEveryPeriod)==null?void 0:o.indexOf(t);return r>=0&&e.frequenciesEveryPeriod[r]?e.frequencies[r]:((i=e.frequencies)==null?void 0:i.length)>0&&((s=e.frequenciesEveryPeriod)==null?void 0:s.length)>0?(console.warn(`Unable to find selling plan match for frequency ${t}; falling back to first selling plan`),e.frequencies[0]):t},"frequencyToSellingPlan");function ri(t){if(t.isReady())return;console.info("OG offers are auto initializing");let[e,r]=po();if(!r&&!e)return;let o=document.createElement("script");o.onload=()=>console.info("OG pull initialization chunk for merchant",e,r),o.onerror=()=>t.initialize(e,r),o.src=`${window.location.protocol}//${r===Pe?tr:rr}/${e}/main.js?initOnly=true`,document.head.appendChild(o)}n(ri,"autoInitializeOffers");var oi=n(t=>{document.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`},"clearCookie");function ni(t){let e=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return e?e[2]:null}n(ni,"getCookieValue");var We=n(t=>!!(t&&(t==null?void 0:t.includes("_"))),"isOgFrequency"),fe=n((t=[])=>(t==null?void 0:t[0])||null,"getFirstSellingPlan"),pr=n((t=[],e=[])=>{var r;return!!(((r=q)==null?void 0:r.shopify_selling_plans)&&t.length&&e.length)},"hasShopifySellingPlans"),te=n((t,e,r)=>{if(t.length!==e.length)return null;let o=e.findIndex(i=>i===r);return o>=0?t[o]:null},"mapFrequencyToSellingPlan");function ii(t,e,r){let o=t.querySelector(`[name="${e}"]`);if(o&&!r){o.remove();return}!o&&r&&(o=document.createElement("input"),o.type="hidden",o.name=e,t.appendChild(o)),o&&(o.value=r)}n(ii,"getOrCreateHidden");function Je(t,e){let[[r],o]=t.reduce((i,s)=>i[A(e,s)?0:1].push(s)&&i,[[],[]]);return[r||{},o||[]]}n(Je,"getMatchingProductIfExists");var Y=n((t,e,r)=>({type:R,payload:{product:t,frequency:e,offer:r}}),"optinProduct"),Ke=n((t,e)=>({type:I,payload:{product:t,offer:e}}),"optoutProduct"),si=n((t,e)=>({type:ft,payload:{newProduct:t,product:e}}),"productHasChangedComponents"),ur=n((t,e,r)=>({type:k,payload:{product:t,frequency:e,offer:r}}),"productChangeFrequency"),me=n((t,e,r)=>({type:ie,payload:{product:t,prepaidShipments:e,offer:r}}),"productChangePrepaidShipments");var ai=n(t=>({type:Un,payload:{product:t}}),"concludeUpsell"),ci=n(t=>({type:Ue,payload:t}),"setMerchantId"),fo=n(t=>({type:Le,payload:`${t}.${Math.floor(Math.random()*999999)}.${Math.round(new Date().getTime()/1e3)}`}),"createSessionId"),Dc=n(t=>({type:qn,payload:t}),"requestAuth"),Tt=n((t,e,r,o)=>({type:Gt,payload:{public_id:t,sig_field:e,ts:r,sig:o}}),"authorize"),he=n(t=>({type:Ee,payload:t}),"unauthorized"),li=n(t=>({type:Ht,payload:t}),"setAuthUrl"),dr=n(t=>({type:$n,payload:t}),"fetchDone"),pi=n((t=kn)=>n(function(r,o){if(window.og&&window.og.previewMode)return r(he({message:"Offers are running in preview mode"}));let{merchantId:i,authUrl:s}=o(),a=Dc(s);return r(a),t(s).then(({sig_field:c,ts:l,sig:p})=>r(Tt(i,c,l,p)),c=>r(he(c))).finally(()=>r(dr(a)))},"fetchAuthThunk"),"fetchAuth"),Fc=n((t,e)=>({type:Dn,payload:{status:t,ordering:e}}),"requestOrders"),ho=n(t=>({type:Bt,payload:t}),"receiveOrders"),mo=n(t=>({type:zt,payload:t}),"receiveItems"),fr=n((t=1,e="place")=>n(function(o,i){let{environment:{legoUrl:s},auth:a}=i();if(!a)return o(he("No auth set."));let c=Fc(t,e);return o(c),de.fetchOrders(s,a,t,e).then(l=>{if(l.results){o(ho(l));let p=(l.results[0]||{}).public_id;if(p)return de.fetchItems(s,a,p).then(f=>o(mo(f)))}return o(he(l.detail)),null},l=>o(he(l))).finally(()=>o(dr(c)))},"fetchOrdersThunk"),"fetchOrders"),go=n(t=>{switch(t){case er:return{type:$e,payload:t};case Oe:return{type:Me,payload:t};case Pe:return{type:Ve,payload:t};default:throw new Error(`${t} is not a supported environment`)}},"setEnvironment"),ui=n(()=>(t,e)=>{let{merchantId:r,sessionId:o}=e();return(!o||r&&!o.startsWith(r))&&t(fo(r)),o},"requestSessionId"),Ce=n((t,e)=>({type:P,payload:{...t,offer:e}}),"receiveOffer"),uo=n(t=>({type:Fn,payload:t}),"fetchResponseError"),Uc=n((t,e=ve,r)=>({type:J,payload:{product:t,module:e,offer:r}}),"requestOffer"),di=n((t,e=ve,r)=>n(function(i,s){let{merchantId:a,sessionId:c,environment:{apiUrl:l}}=s(),p=Uc(t,e,r);i(p);let f=x(t);return f?de.fetchOffer(l,a,c,f,e).then(u=>i(Ce(u,r)),u=>i(uo(u))).finally(()=>i(dr(p))):null},"fetchOfferThunk"),"fetchOffer"),fi=n(()=>({type:je}),"checkout"),Lc=n((t,e,r,o)=>({type:Ln,payload:{product:t,order:e,quantity:r,offerId:o}}),"requestCreateOneTime"),Mc=n(t=>({type:Yt,payload:t}),"receiveCreateOneTime"),$c=n((t,e)=>({type:Mn,payload:{item:t,frequency:e}}),"requestConvertOneTimeToSubscription"),Vc=n((t,e)=>({type:Wt,payload:{response:t,product:e}}),"receiveConvertOneTime"),hi=n((t,e,r,o=!1,i=null)=>n(function(a,c){let{auth:l,config:p,environment:{legoUrl:f},previewUpsellOffer:u,offerId:h}=c();if(!l)return a(he("No auth set."));let b=ti(i,p),S=Lc(t,e,r,h);return a(S),(u?Promise.resolve({legoUrl:f,product:t,order:e,quantity:r,offer:h}):de.createOneTime(f,l,t.id,e,r,h)).then(m=>(a(Mc(m)),o?(a($c(m,b)),(u?Promise.resolve({item:m,frequency:b}):de.convertOneTimeToSubscription(f,l,m,b,h)).then(E=>a(Vc(E,t)),E=>a(uo(E)))):m),m=>a(uo(m))).finally(()=>a(dr(S)))},"createIuThunk"),"createIu"),mi=n(t=>({type:Jt,payload:t}),"setLocale"),gi=n(t=>({type:He,payload:t}),"setConfig"),yi=n((t,e,r)=>({type:Kt,payload:{selector:t,markup:e,config:r}}),"addTemplate"),bi=n(t=>({type:Qt,payload:t}),"setTemplates"),_i=n((t,e)=>({type:Zt,payload:{product:t,firstOrderPlaceDate:e}}),"setFirstOrderPlaceDate"),Si=n((t,e)=>({type:Xt,payload:{product:t,productToSubscribe:e}}),"setProductToSubscribe"),Ei=n(t=>({type:Ge,payload:t}),"receiveMerchantSettings");var wt="OG_STATE",Oi=n(t=>{try{return t===null?void 0:JSON.parse(t)}catch{return}},"safeParseState"),yo=n(()=>window.og&&window.og.previewMode,"isPreviewMode"),Pi=n(()=>yo()?{}:Oi(localStorage.getItem(wt)),"loadState"),jc=n(t=>!t||!t.sessionId?!1:JSON.stringify({sessionId:t.sessionId,optedin:t.optedin,optedout:t.optedout,productOffer:t.productOffer,firstOrderPlaceDate:t.firstOrderPlaceDate,productToSubscribe:t.productToSubscribe}),"serializeState"),Ti=n(t=>{if(yo())return;let e=jc(t);e&&localStorage.getItem(wt)!==e&&localStorage.setItem(wt,e)},"saveState"),wi=n(t=>(0,vi.throttle)(500,e=>{if(yo())return;let{key:r,newValue:o}=e;r===wt&&o===null?(t.dispatch({type:pe}),setTimeout(()=>t.dispatch(ui()),0)):r===wt&&t.dispatch({type:xe,newValue:Oi(o)})}),"listenLocalStorageChanges");var Ri=ce(Vt());var Hc=n((t,e,r=document)=>r.dispatchEvent(new CustomEvent(t,{detail:e})),"dispatchEvent"),Ci=n(t=>({payload:{product:{id:e,components:r}={}}={}}={})=>setTimeout(()=>Hc("optin-changed",{productId:e,components:r,optedIn:t}),0),"dispatchOptinChangedEvent"),Gc=[{expressions:[({type:t}={})=>t===R,({type:t}={})=>t===k],fn:Ci(!0)},{expressions:[({type:t}={})=>t===I],fn:Ci(!1)}],Ai=n(t=>e=>r=>{let o=t.getState();Gc.forEach(i=>{i.expressions.some(s=>s(r,o))&&i.fn(r)}),e(r)},"dispatchMiddleware"),Ni=n(t=>e=>r=>{var i;let o;switch(r.type){case P:case I:case R:case k:o=new CustomEvent(`og-${r.type.toLowerCase().replace(/_/g,"-")}`,{bubbles:!0,cancelable:!0,detail:r.payload}),(((i=r.payload)==null?void 0:i.offer)||document).dispatchEvent(o);break;default:}o!=null&&o.defaultPrevented||e(r)},"offerEvents"),Ii=n(t=>e=>r=>{e(r);let o=(0,Ri.throttle)(500,()=>{Ti({...t.getState()})});r.type!==xe&&o()},"localStorageMiddleware");var bo=n(()=>{let t,e;return[new Promise((r,o)=>{t=r,e=o}),t,e]},"waitFor");function ki(t){let[e,r]=bo(),[o,i]=bo(),[s,a]=bo();o.then(l=>{let{sessionId:p}=t.getState();!p||l&&!p.startsWith(l)?t.dispatch(fo(l)):a(p)});let c=Promise.all([o,e,s]);return c.then(()=>{var l;window.addEventListener("storage",wi(t)),(l=t.getState().auth)!=null&&l.ts||t.dispatch(pi())}),l=>async p=>{$e===p.type||Me===p.type||Ve===p.type?r(p.payload):Ue===p.type?i(p.payload):Le===p.type?a(p.payload):await c,l(p)}}n(ki,"waitUntilOffersReady");function qi(t,...e){if(window.og&&window.og.store)return window.og.store;let r=window.og&&window.og.previewMode,o=typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"Ordergroove Offers"}):eo,i=[ki,Rn,Ai,Ni],s={};if(!r)try{s=Pi(),i.push(Ii)}catch{}let a=o(Tn(...i,...e.filter(l=>l))),c=Xr(t,s,a);return window.og=window.og||{},window.og.store=c,c}n(qi,"makeStore");var Bc=Object.defineProperty,hr=n((t,e)=>Bc(t,"name",{value:e,configurable:!0}),"i"),zc=hr(t=>e=>t.indexOf(e.origin)>=0,"createIsMessageAllowed"),Fi=["https://rc3.ordergroove.com","https://rc3.stg.ordergroove.com","https://rc3-beta.stg.ordergroove.com","http://localhost:3000","http://localhost:3010","http://0.0.0.0:3010",window.location.origin],Di=hr(t=>(e,r)=>{Fi.forEach(o=>t.postMessage({ogType:e,...r},o))},"createBroadcastMessage");function _o(t=window.opener,e=window.og){let r=hr(o=>{let i=zc(Fi),s=Di(o.source),a=o.data.options||{};if(i(o)&&o.data.ogType==="READY"){let c="//static.ordergroove.com/@ordergroove/offers-live-editor/0.6.7/dist/";c.startsWith("//")&&(c=window.location.protocol+c),c.endsWith("/")||(c+="/"),import(`${c}client.js`).then(({initializeClient:l})=>{l({isMessageAllowed:i,broadcastMessage:s,options:a,og:e}),window.removeEventListener("message",r)})}},"handleReady");t&&t!==window&&(window.addEventListener("message",r),Di(t)("READY"))}n(_o,"h");hr(_o,"offersLiveEditor");var mr=null,Yc=n(t=>({dispatch:t}),"defaultMapDispatchToProps"),Ui=n(t=>{if(!mr)throw new Error("Missing redux store.");return mr},"resolveStore"),Wc=n((t,e)=>r=>{let{getState:o,dispatch:i}=Ui(r),s=t?t(o(),r):{},a=e(i,r);Object.assign(r,s,a)},"createRecalcProps"),g=n((t,e=Yc)=>r=>{let i=Wc(t,typeof e=="function"?e:s=>Pn(e,s));return class extends r{get store(){return mr}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=Ui(this).subscribe(()=>i(this)),i(this)}attributeChangedCallback(s,a,c){super.attributeChangedCallback&&super.attributeChangedCallback(s,a,c),this._storeUnsubscribe&&a!==c&&i(this)}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}}},"connect"),Li=n(t=>{mr=t},"setStore");var So=n((t={},e=[])=>(t.optedin||[]).map(r=>{let o={product:r.id,subscription_info:{components:r.components||[]},tracking_override:{offer:((t.productOffer||{})[r.id]||[])[0],...Et(r.frequency)}};return t.firstOrderPlaceDate&&t.firstOrderPlaceDate[r.id]&&(o.subscription_info.first_order_place_date=t.firstOrderPlaceDate[r.id]),t.productToSubscribe&&t.productToSubscribe[r.id]&&(o.tracking_override.product=t.productToSubscribe[r.id]),o}).filter(r=>r.tracking_override.offer).filter(r=>e.length?e.includes(r.product):r),"getProductsForPurchasePost"),Qe=n((t={})=>{let e={};return Object.entries(t).forEach(([r,o])=>{Object.entries(o).forEach(([i,s])=>{let a={};s&&!Array.isArray(s)?a=s:a={frequency:i,prepaidShipments:null,regularPrice:s[0],subscriptionPrice:s[2],discountRate:s[1]},e[r]?e[r].push(a):e[r]=[a]})}),e},"getObjectStructuredProductPlans");var Eo=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var Re=n((t,e,r=null)=>{for(;e!==r;){let o=e.nextSibling;t.removeChild(e),e=o}},"removeNodes");var $=`{{lit-${String(Math.random()).slice(2)}}}`,xo=`<!--${$}-->`,Mi=new RegExp(`${$}|${xo}`),Ze="$lit$",ge=class{constructor(e,r){this.parts=[],this.element=r;let o=[],i=[],s=document.createTreeWalker(r.content,133,null,!1),a=0,c=-1,l=0,{strings:p,values:{length:f}}=e;for(;l<f;){let u=s.nextNode();if(u===null){s.currentNode=i.pop();continue}if(c++,u.nodeType===1){if(u.hasAttributes()){let h=u.attributes,{length:b}=h,S=0;for(let m=0;m<b;m++)$i(h[m].name,Ze)&&S++;for(;S-- >0;){let m=p[l],E=gr.exec(m)[2],T=E.toLowerCase()+Ze,_=u.getAttribute(T);u.removeAttribute(T);let w=_.split(Mi);this.parts.push({type:"attribute",index:c,name:E,strings:w}),l+=w.length-1}}u.tagName==="TEMPLATE"&&(i.push(u),s.currentNode=u.content)}else if(u.nodeType===3){let h=u.data;if(h.indexOf($)>=0){let b=u.parentNode,S=h.split(Mi),m=S.length-1;for(let E=0;E<m;E++){let T,_=S[E];if(_==="")T=re();else{let w=gr.exec(_);w!==null&&$i(w[2],Ze)&&(_=_.slice(0,w.index)+w[1]+w[2].slice(0,-Ze.length)+w[3]),T=document.createTextNode(_)}b.insertBefore(T,u),this.parts.push({type:"node",index:++c})}S[m]===""?(b.insertBefore(re(),u),o.push(u)):u.data=S[m],l+=m}}else if(u.nodeType===8)if(u.data===$){let h=u.parentNode;(u.previousSibling===null||c===a)&&(c++,h.insertBefore(re(),u)),a=c,this.parts.push({type:"node",index:c}),u.nextSibling===null?u.data="":(o.push(u),c--),l++}else{let h=-1;for(;(h=u.data.indexOf($,h+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(let u of o)u.parentNode.removeChild(u)}};n(ge,"Template");var $i=n((t,e)=>{let r=t.length-e.length;return r>=0&&t.slice(r)===e},"endsWith"),Ct=n(t=>t.index!==-1,"isTemplatePartActive"),re=n(()=>document.createComment(""),"createMarker"),gr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var vo=133;function Oo(t,e){let{element:{content:r},parts:o}=t,i=document.createTreeWalker(r,vo,null,!1),s=Rt(o),a=o[s],c=-1,l=0,p=[],f=null;for(;i.nextNode();){c++;let u=i.currentNode;for(u.previousSibling===f&&(f=null),e.has(u)&&(p.push(u),f===null&&(f=u)),f!==null&&l++;a!==void 0&&a.index===c;)a.index=f!==null?-1:a.index-l,s=Rt(o,s),a=o[s]}p.forEach(u=>u.parentNode.removeChild(u))}n(Oo,"removeNodesFromTemplate");var Kc=n(t=>{let e=t.nodeType===11?0:1,r=document.createTreeWalker(t,vo,null,!1);for(;r.nextNode();)e++;return e},"countNodes"),Rt=n((t,e=-1)=>{for(let r=e+1;r<t.length;r++){let o=t[r];if(Ct(o))return r}return-1},"nextActiveIndexInTemplateParts");function Vi(t,e,r=null){let{element:{content:o},parts:i}=t;if(r==null){o.appendChild(e);return}let s=document.createTreeWalker(o,vo,null,!1),a=Rt(i),c=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===r&&(c=Kc(e),r.parentNode.insertBefore(e,r));a!==-1&&i[a].index===l;){if(c>0){for(;a!==-1;)i[a].index+=c,a=Rt(i,a);return}a=Rt(i,a)}}n(Vi,"insertNodeIntoTemplate");var Qc=new WeakMap;var Ae=n(t=>typeof t=="function"&&Qc.has(t),"isDirective");var D={},yr={};var se=class{constructor(e,r,o){this.__parts=[],this.template=e,this.processor=r,this.options=o}update(e){let r=0;for(let o of this.__parts)o!==void 0&&o.setValue(e[r]),r++;for(let o of this.__parts)o!==void 0&&o.commit()}_clone(){let e=Eo?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1),s=0,a=0,c,l=i.nextNode();for(;s<o.length;){if(c=o[s],!Ct(c)){this.__parts.push(void 0),s++;continue}for(;a<c.index;)a++,l.nodeName==="TEMPLATE"&&(r.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=r.pop(),l=i.nextNode());if(c.type==="node"){let p=this.processor.handleTextExpression(this.options);p.insertAfterNode(l.previousSibling),this.__parts.push(p)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,c.name,c.strings,this.options));s++}return Eo&&(document.adoptNode(e),customElements.upgrade(e)),e}};n(se,"TemplateInstance");var ji=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Xc=` ${$} `,oe=class{constructor(e,r,o,i){this.strings=e,this.values=r,this.type=o,this.processor=i}getHTML(){let e=this.strings.length-1,r="",o=!1;for(let i=0;i<e;i++){let s=this.strings[i],a=s.lastIndexOf("<!--");o=(a>-1||o)&&s.indexOf("-->",a+1)===-1;let c=gr.exec(s);c===null?r+=s+(o?Xc:xo):r+=s.substr(0,c.index)+c[1]+c[2]+Ze+c[3]+$}return r+=this.strings[e],r}getTemplateElement(){let e=document.createElement("template"),r=this.getHTML();return ji!==void 0&&(r=ji.createHTML(r)),e.innerHTML=r,e}};n(oe,"TemplateResult");var _r=n(t=>t===null||!(typeof t=="object"||typeof t=="function"),"isPrimitive"),br=n(t=>Array.isArray(t)||!!(t&&t[Symbol.iterator]),"isIterable"),Ne=class{constructor(e,r,o){this.dirty=!0,this.element=e,this.name=r,this.strings=o,this.parts=[];for(let i=0;i<o.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new Xe(this)}_getValue(){let e=this.strings,r=e.length-1,o=this.parts;if(r===1&&e[0]===""&&e[1]===""){let s=o[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!br(s))return s}let i="";for(let s=0;s<r;s++){i+=e[s];let a=o[s];if(a!==void 0){let c=a.value;if(_r(c)||!br(c))i+=typeof c=="string"?c:String(c);else for(let l of c)i+=typeof l=="string"?l:String(l)}}return i+=e[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}};n(Ne,"AttributeCommitter");var Xe=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==D&&(!_r(e)||e!==this.value)&&(this.value=e,Ae(e)||(this.committer.dirty=!0))}commit(){for(;Ae(this.value);){let e=this.value;this.value=D,e(this)}this.value!==D&&this.committer.commit()}};n(Xe,"AttributePart");var ne=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(re()),this.endNode=e.appendChild(re())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=re()),e.__insert(this.endNode=re())}insertAfterPart(e){e.__insert(this.startNode=re()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Ae(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=D,r(this)}let e=this.__pendingValue;e!==D&&(_r(e)?e!==this.value&&this.__commitText(e):e instanceof oe?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):br(e)?this.__commitIterable(e):e===yr?(this.value=yr,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let r=this.startNode.nextSibling;e=e??"";let o=typeof e=="string"?e:String(e);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){let r=this.options.templateFactory(e);if(this.value instanceof se&&this.value.template===r)this.value.update(e.values);else{let o=new se(r,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let r=this.value,o=0,i;for(let s of e)i=r[o],i===void 0&&(i=new ne(this.options),r.push(i),o===0?i.appendIntoPart(this):i.insertAfterPart(r[o-1])),i.setValue(s),i.commit(),o++;o<r.length&&(r.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){Re(this.startNode.parentNode,e.nextSibling,this.endNode)}};n(ne,"NodePart");var et=class{constructor(e,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;Ae(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=D,r(this)}if(this.__pendingValue===D)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=D}};n(et,"BooleanAttributePart");var tt=class extends Ne{constructor(e,r,o){super(e,r,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new At(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}};n(tt,"PropertyCommitter");var At=class extends Xe{};n(At,"PropertyPart");var Hi=!1;(()=>{try{let t={get capture(){return Hi=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{}})();var rt=class{constructor(e,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;Ae(this.__pendingValue);){let s=this.__pendingValue;this.__pendingValue=D,s(this)}if(this.__pendingValue===D)return;let e=this.__pendingValue,r=this.value,o=e==null||r!=null&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),i=e!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=el(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=D}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}};n(rt,"EventPart");var el=n(t=>t&&(Hi?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),"getOptions");function Po(t){let e=Ie.get(t.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},Ie.set(t.type,e));let r=e.stringsArray.get(t.strings);if(r!==void 0)return r;let o=t.strings.join($);return r=e.keyString.get(o),r===void 0&&(r=new ge(t,t.getTemplateElement()),e.keyString.set(o,r)),e.stringsArray.set(t.strings,r),r}n(Po,"templateFactory");var Ie=new Map;var ye=new WeakMap,To=n((t,e,r)=>{let o=ye.get(e);o===void 0&&(Re(e,e.firstChild),ye.set(e,o=new ne(Object.assign({templateFactory:Po},r))),o.appendInto(e)),o.setValue(t),o.commit()},"render");var Nt=class{handleAttributeExpressions(e,r,o,i){let s=r[0];return s==="."?new tt(e,r.slice(1),o).parts:s==="@"?[new rt(e,r.slice(1),i.eventContext)]:s==="?"?[new et(e,r.slice(1),o)]:new Ne(e,r,o).parts}handleTextExpression(e){return new ne(e)}};n(Nt,"DefaultTemplateProcessor");var wo=new Nt;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var d=n((t,...e)=>new oe(t,e,"html",wo),"html");var Bi=n((t,e)=>`${t}--${e}`,"getTemplateCacheKey"),Sr=!0;typeof window.ShadyCSS>"u"?Sr=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Sr=!1);var rl=n(t=>e=>{let r=Bi(e.type,t),o=Ie.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},Ie.set(r,o));let i=o.stringsArray.get(e.strings);if(i!==void 0)return i;let s=e.strings.join($);if(i=o.keyString.get(s),i===void 0){let a=e.getTemplateElement();Sr&&window.ShadyCSS.prepareTemplateDom(a,t),i=new ge(e,a),o.keyString.set(s,i)}return o.stringsArray.set(e.strings,i),i},"shadyTemplateFactory"),ol=["html","svg"],nl=n(t=>{ol.forEach(e=>{let r=Ie.get(Bi(e,t));r!==void 0&&r.keyString.forEach(o=>{let{element:{content:i}}=o,s=new Set;Array.from(i.querySelectorAll("style")).forEach(a=>{s.add(a)}),Oo(o,s)})})},"removeStylesFromLitTemplates"),zi=new Set,il=n((t,e,r)=>{zi.add(t);let o=r?r.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(s===0){window.ShadyCSS.prepareTemplateStyles(o,t);return}let a=document.createElement("style");for(let p=0;p<s;p++){let f=i[p];f.parentNode.removeChild(f),a.textContent+=f.textContent}nl(t);let c=o.content;r?Vi(r,a,c.firstChild):c.insertBefore(a,c.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);let l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){c.insertBefore(a,c.firstChild);let p=new Set;p.add(a),Oo(r,p)}},"prepareTemplateStyles"),Yi=n((t,e,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");let o=r.scopeName,i=ye.has(e),s=Sr&&e.nodeType===11&&!!e.host,a=s&&!zi.has(o),c=a?document.createDocumentFragment():e;if(To(t,c,Object.assign({templateFactory:rl(o)},r)),a){let l=ye.get(c);ye.delete(c);let p=l.value instanceof se?l.value.template:void 0;il(o,c,p),Re(e,e.firstChild),e.appendChild(c),ye.set(e,l)}!i&&s&&window.ShadyCSS.styleElement(e.host)},"render");var Wi;window.JSCompiler_renameProperty=(t,e)=>t;var ko={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Ji=n((t,e)=>e!==t&&(e===e||t===t),"notEqual"),Co={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Ji},Ro=1,Ao=1<<2,No=1<<3,Io=1<<4,qo="finalized",ot=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((r,o)=>{let i=this._attributeNameForProperty(o,r);i!==void 0&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(e,r=Co){if(this._ensureClassProperties(),this._classProperties.set(e,r),r.noAccessor||this.prototype.hasOwnProperty(e))return;let o=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(i){let s=this[e];this[r]=i,this.requestUpdateInternal(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Co}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(qo)||e.finalize(),this[qo]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(let i of o)this.createProperty(i,r[i])}}static _attributeNameForProperty(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,r,o=Ji){return o(e,r)}static _propertyValueFromAttribute(e,r){let o=r.type,i=r.converter||ko,s=typeof i=="function"?i:i.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,r){if(r.reflect===void 0)return;let o=r.type,i=r.converter;return(i&&i.toAttribute||ko.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,r)=>{if(this.hasOwnProperty(r)){let o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,r)=>this[r]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,r,o){r!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,r,o=Co){let i=this.constructor,s=i._attributeNameForProperty(e,o);if(s!==void 0){let a=i._propertyValueToAttribute(r,o);if(a===void 0)return;this._updateState=this._updateState|No,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._updateState=this._updateState&~No}}_attributeToProperty(e,r){if(this._updateState&No)return;let o=this.constructor,i=o._attributeToPropertyMap.get(e);if(i!==void 0){let s=o.getPropertyOptions(i);this._updateState=this._updateState|Io,this[i]=o._propertyValueFromAttribute(r,s),this._updateState=this._updateState&~Io}}requestUpdateInternal(e,r,o){let i=!0;if(e!==void 0){let s=this.constructor;o=o||s.getPropertyOptions(e),s._valueHasChanged(this[e],r,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,r),o.reflect===!0&&!(this._updateState&Io)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,r){return this.requestUpdateInternal(e,r),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Ao;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Ao}get hasUpdated(){return this._updateState&Ro}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,r=this._changedProperties;try{e=this.shouldUpdate(r),e?this.update(r):this._markUpdated()}catch(o){throw e=!1,this._markUpdated(),o}e&&(this._updateState&Ro||(this._updateState=this._updateState|Ro,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ao}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};n(ot,"UpdatingElement");Wi=qo;ot[Wi]=!0;var Ki=Element.prototype,Xd=Ki.msMatchesSelector||Ki.webkitMatchesSelector;var Er=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),nt=class{constructor(e,r){if(r!==Do)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Er?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}};n(nt,"CSSResult");var Qi=n(t=>new nt(String(t),Do),"unsafeCSS"),sl=n(t=>{if(t instanceof nt)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},"textFromCSSResult"),y=n((t,...e)=>{let r=e.reduce((o,i,s)=>o+sl(i)+t[s+1],t[0]);return new nt(r,Do)},"css");(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var Zi={},v=class extends ot{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let r=n((s,a)=>s.reduceRight((c,l)=>Array.isArray(l)?r(l,c):(c.add(l),c),a),"addStyles"),o=r(e,new Set),i=[];o.forEach(s=>i.unshift(s)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(r=>{if(r instanceof CSSStyleSheet&&!Er){let o=Array.prototype.slice.call(r.cssRules).reduce((i,s)=>i+s.cssText,"");return Qi(o)}return r})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(r=>r.cssText),this.localName):Er?this.renderRoot.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let r=this.render();super.update(e),r!==Zi&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{let i=document.createElement("style");i.textContent=o.cssText,this.renderRoot.appendChild(i)}))}render(){return Zi}};n(v,"LitElement");v.finalized=!0;v.render=Yi;var gs=ce(ls());var fl=n(t=>{let e=String(t||"").trim().match(/(\d+)\s*([dwm])/);return e?`${e[1]}_${{d:1,w:2,m:3}[e[2]]}`:t},"sanitizeFrequencyString"),ps=n(t=>t.hasAttribute("product")&&{id:t.getAttribute("product"),...t.hasAttribute("product-components")&&{components:JSON.parse(t.getAttribute("product-components"))}},"buildProduct");var It=n(t=>{let e=ps(t);if(!e){let r=t.offer;r&&(e=ps(r))}return e},"resolveProduct"),hl=n(t=>{let e=t;for(;e;){if(e.tagName==="OG-OFFER")return e;e=e.nodeType===11?e.host:e.parentNode}},"resolveOffer"),Fo=n(t=>class extends t{get offer(){return hl(this)}connectedCallback(){super.connectedCallback(),this.offersChangeTemplate=this.offersChangeTemplate.bind(this),this.offer&&this.offer.addEventListener("template-changed",this.offersChangeTemplate)}disconnectedCallback(){super.disconnectedCallback(),this.offer&&this.offer.removeEventListener("template-changed",this.offersChangeTemplate)}offersChangeTemplate(){this._enqueueUpdate()}},"withOfferTemplate"),N=n(t=>class extends Fo(t){get product(){return It(this)}},"withProduct"),vr=n(t=>class extends t{get childOptions(){let e=[],r=null;return this.querySelectorAll("option").forEach(o=>{let i=fl(o.value),s=o.innerText.trim();e.push({value:i,text:s}),!r&&o.selected&&(r=i)}),{options:e,isSelected:r}}},"withChildOptions");var Or={};En(Or,{autoshipByDefault:()=>ml,eligibilityGroups:()=>Lo,eligible:()=>us,hasPrepaidOptions:()=>Sl,hasUpcomingOrder:()=>hs,hasUpsellGroup:()=>fs,inStock:()=>Uo,optedout:()=>bl,prepaidEligible:()=>gl,prepaidSubscribed:()=>_l,regularEligible:()=>xl,subscribed:()=>yl,subscriptionEligible:()=>ds,upcomingOrderContainsProduct:()=>El,upsellEligible:()=>ms});var Uo=n((t,e)=>(t.inStock||{})[(e.product||{}).id],"inStock"),us=n((t,e)=>(t.autoshipEligible||{})[(e.product||{}).id]||!1,"eligible"),ml=n((t,e)=>(t.autoshipByDefault||{})[(e.product||{}).id]||!1,"autoshipByDefault"),ds=n((t,e)=>(t.offerId&&t.offerId!=="0"||!1)&&us(t,e)&&Uo(t,e),"subscriptionEligible"),Lo=n((t,e)=>{let r=x((e.product||{}).id);return(t.eligibilityGroups||{})[r]||null},"eligibilityGroups"),fs=n((t,e)=>{let r=Lo(t,e);return r===null||!!r.find(o=>o==="upsell"||o==="impulse_upsell")},"hasUpsellGroup"),gl=n((t,e)=>{let r=Lo(t,e);return(r==null?void 0:r.some(o=>o==="prepaid"))||!1},"prepaidEligible"),yl=n((t,e)=>ar(e.product)(t),"subscribed"),bl=n((t,e)=>cr(e.product)(t),"optedout"),_l=n((t,e)=>ei(e.product)(t),"prepaidSubscribed"),Sl=n((t,e)=>L(e.product.id)(t).length>0,"hasPrepaidOptions"),hs=n(t=>!!(t.nextUpcomingOrder&&t.nextUpcomingOrder.public_id),"hasUpcomingOrder"),El=n((t,e)=>(t.nextUpcomingOrder&&t.nextUpcomingOrder.products||[]).includes((e.product||{}).id),"upcomingOrderContainsProduct"),ms=n((t,e)=>{var r;return!((r=e.offer)!=null&&r.isCart)&&t.offerId&&t.offerId!=="0"&&t.auth&&Uo(t,e)&&hs(t)&&fs(t,e)},"upsellEligible"),xl=n((t,e)=>ds(t,e)&&!ms(t,e),"regularEligible");var vl=n(t=>t.replace(/(\r\n|\n|\r|\s)+/gm,""),"removeWhitespace"),Pr=class extends N(v){static get properties(){return{...super.properties,state:{type:Object,attribute:!1},test:{type:String}}}render(){if(!this.test)return d``;let e=vl(this.test);return e=e.replace(/(![a-zA-Z]+)/g,"($1)"),gs.default.parse(e,o=>Or[o]&&Or[o](this.state,this))?d`
        <slot></slot>
      `:d``}shouldUpdate(e){return e.size&&(this.product&&this.product.id in this.state.autoshipEligible&&this.product.id in this.state.inStock||!this.product.id)}};n(Pr,"When");var Ol=n(t=>({state:t}),"mapStateToProps"),ys=g(Ol)(Pr);var bs={type:Object,converter:{toAttribute(t){return t==null?t:JSON.stringify(t)},fromAttribute(t){return t&&t.match(/[{[]/)?JSON.parse(t):{id:t}}}},_e={type:String,attribute:"default-frequency",converter:{fromAttribute(t){return t&&so(t)?t:null}}},Tr={type:Boolean,attribute:!0,reflect:!0},at={type:Object,attribute:!1};var Pl=n(t=>class extends t{getOption(e,r=e){let o=lo(e);if(this.hasAttribute(o)){let i=this.getAttribute(o);return i.toString().toLowerCase()==="true"?!0:i.toString().toLowerCase()==="false"?!1:i}if(this.template&&this.template.config&&typeof this.template.config[r]!="undefined")return this.template.config[r];if(this.config&&typeof this.config[r]!="undefined")return this.config[r]}applyTemplate(e){this.template=e;let r=typeof e.markup=="undefined"?this.constructor.initialTemplate:e.markup;r&&this._templateMarkup!==r&&(this._templateMarkup=r,this.innerHTML=r)}refreshTemplate(){if(this._templates&&this._templates.length){let e=this._templates.find(({selector:r})=>{try{return this.matches(r)}catch{return!1}});this.applyTemplate(e||{})}}set templates(e){this._templates=e,this.refreshTemplate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.constructor.initialTemplate&&!this.innerHTML.trim()&&(this.innerHTML=this.constructor.initialTemplate)}},"withTemplate"),j=Pl(v);var H=class extends N(j){static get properties(){return{subscribed:Tr,frequencyMatch:{type:Boolean,reflect:!0,attribute:"frequency-match"},productDefaultFrequency:{type:String},defaultFrequency:{type:String},frequencies:{type:Array}}}static get styles(){return y`
      :host {
        cursor: default;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .checkbox {
        border-radius: 3px;
      }

      .radio,
      .checkbox {
        border-color: var(--og-checkbox-border-color, black);
      }

      .checkbox.active::after,
      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }

      .checkbox.active::after {
        border: none;
        border-radius: 0;
        background: #fff;
        content: '\\2714';
        line-height: 1;
        text-align: center;
        overflow: visible;
      }
    `}constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("subscribed")&&(this.frequencyMatch=this.frequency===this.defaultFrequency)}handleClick(){}render(){return this.subscribed&&!this.defaultFrequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:this.subscribed&&this.defaultFrequency===this.frequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-match"></slot>
      `:this.subscribed&&this.defaultFrequency!==this.frequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:d`
      <slot name="not-subscribed"></slot>
    `}};n(H,"OptinStatus");var W=n((t,e={})=>({subscribed:Z(e.product)(t),frequency:ee(e.product)(t),productDefaultFrequency:ze((e.product||{}).id)(t),prepaidShipmentsOptedIn:U(e.product)(t),...M(t,e,"defaultFrequency"),...M(t,e,"frequencies"),...Ye(t,e)}),"mapStateToProps"),_s=g(W)(H);var ct=class extends H{static get properties(){return{...super.properties,frequency:{type:String,reflect:!0},defaultFrequency:_e,optinButtonLabel:{type:String}}}updated(e){if(e.has("subscribed")||e.has("frequencies")){if(q.shopify_selling_plans&&this.store){let r=this.getAttribute("default-frequency");r=Pt(r,this.store.getState().config),this.sellingPlanFreq=r}this.frequencyMatch=this.frequency===this.optinFrequency}}get optinFrequency(){let e;return this.sellingPlanFreq?e=this.sellingPlanFreq:this.hasAttribute("default-frequency")?e=this.getAttribute("default-frequency"):e=this.offer?this.offer.defaultFrequency:this.defaultFrequency,q.shopify_selling_plans&&this.store&&(e=Pt(e,this.store.getState().config)),e}handleClick(e){this.optinProduct(It(this),this.optinFrequency,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptInLabel"
          role="radio"
          aria-checked="${!!this.subscribed}"
          class="btn radio ${this.subscribed?"active":""}"
        ></button>
        <label id="ogOfferOptInLabel">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(ct,"OptinButton");var Ss=g(W,{optinProduct:Y})(ct);var wr=class extends H{static get properties(){return{...super.properties,label:{type:String}}}handleClick(e){this.optoutProduct(this.product,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptOutLabel"
          role="radio"
          aria-checked="${!this.subscribed}"
          class="btn radio ${this.subscribed?"":"active"}"
        ></button>
        <label id="ogOfferOptOutLabel">
          <slot>
            <og-text key="offerOptOutLabel"></og-text>
          </slot>
        </label>
      </slot>
    `}};n(wr,"OptoutButton");var Es=g(W,{optoutProduct:Ke})(wr);var qe=n((t,e)=>{let{every:r,every_period:o}=Et(t);return r&&o?d`
        ${r}
        <og-text key="frequencyPeriods" variant="${o}" pluralize="${r}"></og-text>
        ${e&&e===t?d`
              <og-text key="defaultFrequencyCopy"></og-text>
            `:""}
      `:t},"frequencyText"),lt=class extends N(j){static get properties(){return{...super.properties,disabled:{type:Boolean},subscribed:Tr,frequency:{type:String},defaultFrequency:_e,productDefaultFrequency:{type:String},config:{type:Object},frequencies:{converter:{fromAttribute:Zn}}}}static get styles(){return y`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}constructor(){super(),this.frequencies=[]}render(){let e=this.frequency||this.defaultFrequency;return d`
      <span>
        ${this.subscribed&&d`
            <slot name="subscribed">${qe(e)}</slot>
          `||""}
        ${!this.subscribed&&d`
            <slot name="not-subscribed"></slot>
          `||""}
        ${this.subscribed&&this.defaultFrequency&&this.defaultFrequency!==this.frequency&&d`
            <slot name="frequency-mismatch"></slot>
          `||""}
      </span>
    `}};n(lt,"FrequencyStatus");var kt=n((t,e)=>{var r,o;return{subscribed:Z(e.product)(t),frequency:ee(e.product)(t),productDefaultFrequency:ze((e.product||{}).id)(t),configDefaultFrequency:(r=t.config)==null?void 0:r.defaultFrequency,frequenciesText:(o=t.config)==null?void 0:o.frequenciesText,config:t.config,...M(t,e,"frequencies"),...M(t,e,"defaultFrequency"),...Ye(t,e)}},"mapStateToProps"),xs=g(kt)(lt);var Cr=class extends vr(H){static get properties(){return{...super.properties,frequencies:{type:Array,attribute:!1},frequency:{type:String},defaultFrequency:_e}}static get styles(){return y`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      }
    `}get currentFrequency(){return this.subscribed?this.frequency||this.productDefaultFrequency||this.defaultFrequency:"optedOut"}onOptinChange(e){e==="optedOut"?this.optoutProduct(this.product,this.offer):this.productChangeFrequency(this.product,e,this.offer)}render(){var o;let{options:e}=this.childOptions,r;return(o=this.frequencies)!=null&&o.length?r=[e.find(i=>i.value==="optedOut"),...this.frequencies.map((i,s)=>({value:i,text:this.frequenciesText&&s in this.frequenciesText?this.frequenciesText[s]:qe(i,this.defaultFrequency)}))]:r=e,d`
      <og-select
        .options="${r}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>this.onOptinChange(i)}"
      ></og-select>
    `}};n(Cr,"OptinSelect");var vs=g((t,e)=>({...W(t,e),...kt(t,e),...M(t,e,"frequencies")}),{productChangeFrequency:ur,optoutProduct:Ke})(Cr);var Rr=class extends N(j){static get styles(){return y`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}static get properties(){return{...super.properties,upcomingOrderDate:{type:String,attribute:!1},auth:at,isPreview:{type:Boolean,attribute:!1},target:{type:String}}}constructor(){super(),this.fetchOrders=()=>0,this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("auth")&&this.auth&&!this.upcomingOrderDate&&!this.isPreview&&this.fetchOrders()}handleClick(){let e;if(!this.target&&this.offer)e=this.offer.querySelector("og-upsell-modal"),e||(e=this.offer.shadowRoot.querySelector("og-upsell-modal"));else if(this.target)e=document.querySelector(this.target);else throw Error("You must specify a target attribute or place this element as child of og-offer");e&&e.setAttribute("show",!0)}render(){return d`
      <slot>
        <og-next-upcoming-order></og-next-upcoming-order>
      </slot>
    `}};n(Rr,"UpsellButton");var Tl=n(t=>({isPreview:t.previewUpsellOffer}),"mapStateToProps"),Os=g(Tl,{fetchOrders:fr})(Rr);var Ar=class extends N(j){static get properties(){return{...super.properties,defaultFrequency:_e,auth:at,subscribed:{type:Boolean,attribute:!1},frequency:{type:String,attribute:!1},nextUpcomingOrder:{type:Object,attribute:!1},show:{type:Boolean,attribute:"show"},offerId:{type:String}}}constructor(){super(),this.createIu=()=>0,this.concludeUpsell=()=>0}render(){return d`
      <og-modal ?show=${this.show} @close=${()=>this.close()} @confirm=${()=>this.confirm()}>
        <div slot="content">
          <slot>
            <slot name="content">
              <og-text key="upsellModalContent"></og-text>
            </slot>
            <slot name="offer">
              <br />

              <og-optout-button>
                <slot name="opt-out-label">
                  <og-text key="upsellModalOptOutLabel" slot="label"></og-text>
                </slot>
              </og-optout-button>
              <br />
              <og-optin-button default-frequency=${this.defaultFrequency}>
                <slot name="opt-in-label">
                  <og-text key="upsellModalOptInLabel" slot="label"></og-text>
                </slot>
              </og-optin-button>
              <br />
              <slot name="every-label">
                <og-text key="offerEveryLabel"></og-text>
              </slot>
              <og-select-frequency default-frequency=${this.defaultFrequency}></og-select-frequency>
            </slot>
          </slot>
        </div>
        <span slot="confirm">
          <slot name="confirm"><og-text key="upsellModalConfirmLabel"></og-text></slot>
        </span>
        <span slot="cancel">
          <slot name="cancel">
            <og-text key="upsellModalCancelLabel"></og-text>
          </slot>
        </span>
      </og-modal>
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){let e=this.querySelector("og-select-frequency");return e?e.defaultFrequency:this._defaultFrequency}confirm(){this.createIu(this.product,this.nextUpcomingOrder.public_id,1,this.subscribed,this.frequency||this.defaultFrequency),this.close()}close(){this.concludeUpsell(),this.removeAttribute("show")}};n(Ar,"UpsellModal");var wl=n((t,e)=>({auth:t.auth,offerId:t.offerId,subscribed:Z(e.product)(t),frequency:ee(e.product)(t),...M(t,e,"defaultFrequency"),nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder,isPreview:t.previewUpsellOffer}),"mapStateToProps"),Ps=g(wl,{concludeUpsell:ai,createIu:hi})(Ar);var Nr=class extends H{static get properties(){return{...super.properties,frequency:{type:String}}}static get styles(){return y`
      :host {
        cursor: default;
        display: inline-block;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-checkbox-border-color, black);
        background: #fff;
        vertical-align: middle;
        color: var(--og-primary-color, black);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
      }

      .btn.active {
        background: var(--og-checkbox-border-color, black);
      }

      .btn.active:after {
        content: '✓';
        color: #fff;
        transform: scale(1.6);
        margin-left: 2px;
      }
    `}handleClick(e){this.subscribed?this.optoutProduct(this.product,this.offer):this.optinProduct(this.product,this.frequency||this.productDefaultFrequency||this.defaultFrequency,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn checkbox ${this.subscribed?"active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(Nr,"OptinToggle");var Ts=g(W,{optoutProduct:Ke,optinProduct:Y})(Nr);var Cl=n((t,e)=>`${t}${parseInt(e,10)>1?"s":""}`,"pluralize"),Ir=class extends Fo(v){static get properties(){return{pluralize:{type:Number},variant:{type:Number},i18n:{type:Object,attribute:!1},locale:{type:Object,attribute:!1},key:{type:String}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._textOverride=this.innerText.trim()}getText(){return this._textOverride?this._textOverride:this.getPluralizedText(this.getVariantText(this.key))}getVariantText(e){let r={...this.i18n,...this.offer&&this.offer.locale},o=typeof r[e]!="undefined"?r[e]:"";return typeof this.variant=="undefined"?o:o[this.variant]}getPluralizedText(e){return typeof this.pluralize=="undefined"?e:e&&Cl(e,this.pluralize)}render(){return d`
      ${this.getText()}
    `}};n(Ir,"Text");var Rl=n(t=>({i18n:t.locale||{}}),"mapStateToProps"),ws=g(Rl)(Ir);var De=class{constructor(e){this.value=e,this.className="DiscountAmount"}toString(){return`${this.value}`}};n(De,"DiscountAmount");var pt=class extends De{constructor(e){super(e),this.className="DiscountPercent"}toString(){return`${super.toString()}%`}};n(pt,"DiscountPercent");var kr=class extends pt{constructor(e){super(e),this.className="ShippingDiscountPercent"}toString(){return this.value===100?"free shipping":super.toString()}};n(kr,"ShippingDiscountPercent");var Mo="Discount Percent",$o="Discount Amount",Cs="total_price",Rs="shipping_total",As="sub_total",Vo=n(({field:t,object:e,type:r,value:o})=>{let s=[[new pt(o),{field:Cs,object:"item",type:Mo}],[new De(o),{field:Cs,object:"item",type:$o}],[new kr(o),{field:Rs,object:"order",type:Mo}],[new De(o),{field:Rs,object:"order",type:$o}],[new pt(o),{field:As,object:"order",type:Mo}],[new De(o),{field:As,object:"order",type:$o}]].find(([,a])=>a.field===t&&a.object===e&&a.type===r);return s&&s[0]},"discountBuilder");function Al(t){return!(Vo(t).className!==this.incentiveClass||this.incentiveValue&&this.incentiveValue.toString()!==t.value.toString())}n(Al,"filterIncentives");var qr=class extends N(v){static get properties(){return{...super.properties,incentives:{type:Object,attribute:!1},from:{type:String},label:{type:String},initial:{type:Boolean,default:!1},value:{type:Number}}}createRenderRoot(){return this}render(){let e=this.from,r=this.value,o=this.initial?"initial":"ongoing",i=(this.incentives[o]||[]).find(Al.bind({incentiveClass:e,incentiveValue:r}));return d`
      ${this.label} ${i?Vo(i):this.renderFallback()}
    `}renderFallback(){return d`
      ${Vo({field:"sub_total",object:"order",type:"Discount Percent",value:this.value})}
    `}};n(qr,"IncentiveText");var Nl=n((t,e)=>{var r;return{incentives:(t.incentives||{})[e&&(e==null?void 0:e.product)&&x((r=e==null?void 0:e.product)==null?void 0:r.id)]||{}}},"mapStateToProps"),Ns=g(Nl)(qr);var Dr=class extends vr(lt){static get properties(){return{...super.properties,defaultText:{type:String,attribute:"default-text"}}}static get styles(){return y`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){var i,s,a,c;let{options:e,isSelected:r}=this.childOptions,o;return this.productDefaultFrequency?o=this.productDefaultFrequency:r?o=r:e.length?o=e[0].value:o=this._defaultFrequency,((s=(i=this.config)==null?void 0:i.frequencies)==null?void 0:s.length)&&o&&((c=(a=this.config)==null?void 0:a.frequenciesEveryPeriod)==null?void 0:c.length)?Pt(o,this.config):o}get currentFrequency(){return this.frequency?this.frequency:this.defaultFrequency}productChangeFrequency(e,r){this.frequency=r}render(){var o;let e,r=this.defaultFrequency;return(o=this.frequencies)!=null&&o.length?e=this.frequencies.map((i,s)=>{let a;return this.config.frequenciesEveryPeriod&&s in this.config.frequenciesEveryPeriod?a=qe(this.config.frequenciesEveryPeriod[s],r):this.frequenciesText&&s in this.frequenciesText?a=this.frequenciesText[s]:a=qe(i,this.defaultFrequency),{value:i,text:a}}):{options:e}=this.childOptions,e.length||(e=(this.frequencies||[]).map(i=>({value:i,text:qe(i,r)}))),e=e.map(({text:i,value:s})=>({text:s===r?d`
              ${i} ${this.defaultText||""}
            `:i,value:s})),d`
      <og-select
        ariaLabel="Delivery frequency"
        .options="${e}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>{this.productChangeFrequency(this.product,i,this.offer)}}"
      ></og-select>
    `}};n(Dr,"SelectFrequency");var Is=g(kt,{productChangeFrequency:ur})(Dr);var Il={day:{day:"2-digit"},"day-numeric":{day:"numeric"},"day-short":{weekday:"short"},"day-long":{weekday:"long"},month:{month:"2-digit"},"month-numeric":{month:"numeric"},"month-short":{month:"short"},"month-long":{month:"long"},year:{year:"2-digit"},"year-numeric":{year:"numeric"}};var ks=n((t,e)=>t instanceof Date?(e||"").toString().replace(/\{\{([-\w]+)\}\}/g,r=>{let o=r.replace(/[{}]/g,""),i=Il[o];if(typeof i=="undefined")return o;let a=new Intl.DateTimeFormat("en-us",i).formatToParts(t),[{value:c}]=a;return c}):t,"formatDate");var Fr=class extends v{static get properties(){return{value:{type:String,reflect:!0},format:{type:String}}}createRenderRoot(){return this}render(){return d`
      ${ks(this.value,this.format||"{{month-long}} {{day}}, {{year-numeric}}")}
    `}};n(Fr,"FormattedDate");var kl=n(t=>({value:t.previewUpsellOffer?new Date:t.nextUpcomingOrder.place}),"mapStateToProps"),qs=g(kl)(Fr);var Us=ce(bt());var Ds=n((t,e,r)=>n(async function(i){await i({type:le,payload:{isPreview:t,productId:e}}),await i({type:Ee}),await i(Ce({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r))},"setPreviewStandardOfferThunk"),"setPreviewStandardOffer"),ql=n((t,e)=>(Object.entries(e).forEach(([r,o])=>{if(Object.prototype.hasOwnProperty.call(t,r)){let i=t[r].concat(o),s=[...new Set(i.map(a=>JSON.stringify(a)))];t[r]=s.map(a=>JSON.parse(a))}else t[r]=o}),t),"mergeProductPlansToState"),Dl=n((t,e,r)=>n(async function(i,s){await i({type:mt,payload:{isPreview:t,productId:e}});let{merchantId:a}=s();t?(await i(Ce({in_stock:{[e]:!0},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},default_frequencies:{[e]:{every:1,every_period:3}},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{}},r)),await i(ho({count:1,next:null,previous:null,results:[{merchant:"0e5de2bedc5e11e3a2e4bc764e106cf4",customer:"TestCust",payment:"e98e789aba0111e9b90fbc764e107990",shipping_address:"b3a5816ae59611e78937bc764e1043b0",public_id:"23322d4a83eb11ea9a1ebc764e101db1",sub_total:"206.98",tax_total:"0.00",shipping_total:"10.00",discount_total:"0.00",total:"216.98",created:"2020-04-21 11:14:11",place:"2020-06-24 00:00:00",cancelled:null,tries:0,generic_error_count:0,status:1,type:1,order_merchant_id:null,rejected_message:null,extra_data:null,locked:!1,oos_free_shipping:!1}]})),await i(Tt(a,"sig_field","ts","sig"))):await i(he())},"setPreviewUpsellOfferThunk"),"setPreviewUpsellOffer"),Fl=n((t,e,r)=>n(async function(i,s){let a=s().productPlans;await i({type:to,payload:{isPreview:t,productId:e}}),await i({type:Ee}),await i(Ce({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell","prepaid"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r)),await i({type:B,payload:ql(a,Qe({[e]:[{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"25%",prepaidShipments:3,regularPrepaidPrice:"$36.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$9.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:6,regularPrepaidPrice:"$72.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$18.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:12,regularPrepaidPrice:"$144.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$36.00",prepaidExtraSavingsPercentage:"10%"}]}))}),await i({type:He,payload:{prepaidSellingPlans:{[e]:[{numberShipments:3,sellingPlan:"1_3"},{numberShipments:6,sellingPlan:"1_3"},{numberShipments:12,sellingPlan:"1_3"}]}}})},"setPreviewPrepaidThunk"),"setPreviewPrepaid"),Fs=n((t,e,r)=>async function(o,i){switch(await o({type:pe}),await o({type:le,payload:{isPreview:!1,productId:r.product.id}}),await o({type:mt,payload:{isPreview:!1,productId:r.product.id}}),t){case"regular":o(Ds(!0,r.product.id,r));break;case"upsell":o(Dl(!0,r.product.id,r));break;case"subscribed":o(Ds(!0,r.product.id,r)),o(Y(r.product,"2_2"));break;case"prepaid":o(Fl(!0,r.product.id,r)),o(Y(r.product,"1_3"));break;default:}},"setPreview");var Ul=n((...t)=>JSON.stringify(t),"memoizeKey"),Ls=n(t=>{let e=!1;return(...r)=>{e||(console.warn(t(...r)),e=!0)}},"logOnce"),Ll=Ls((t,e)=>`Hiding Ordergroove offer since the store currency ${t} does not match your configured currency ${e} and you are not set up for multicurrency. Contact your Ordergroove representative for next steps.`),Ml=Ls(()=>"Hiding Ordergroove offer since cart offers does not currently support product-specific frequency lists."),$l=(0,Us.default)((t,e)=>Object.assign({components:e},t),Ul),Ur=class extends j{static get properties(){return{...super.properties,config:{type:Object,attribute:!1},product:bs,productComponents:{type:Array,attribute:"product-components"},offerId:{type:String,attribute:!1},auth:at,preview:{type:String,attribute:"preview",reflect:"true"},location:{type:String},autoshipByDefault:{type:Boolean,attribute:"autoship-by-default"},productDefaultFrequency:{type:String,attribute:!1},locale:{type:Object,attribute:!0},firstOrderPlaceDate:{type:String,attribute:"first-order-place-date"},productToSubscribe:{type:String,attribute:"product-to-subscribe"},subscribed:{type:Boolean,reflect:!0},frequency:{type:String,reflect:!0},productFrequency:{type:String},isCart:{type:Boolean,attribute:"cart"},optedin:{type:Object},variationId:{type:String}}}firstUpdated(){let e=Array.from(this.getAttributeNames()).find(r=>r.startsWith("preview-"));e==="preview-standard-offer"?this.preview="regular":e==="preview-upsell-offer"?this.preview="upsell":e==="preview-subscribed-offer"?this.preview="subscribed":e==="preview-prepaid-offer"&&(this.preview="prepaid")}static get styles(){return y`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      :host {
        color: var(--og-global-color, #000);
        font-family: var(--og-global-family, inherit);
        font-size: var(--og-global-size, inherit);
        padding: var(--og-wrapper-padding, 10px 0);
        min-width: var(--og-wrapper-min-width, 0);
      }

      p {
        margin: 0 0 0.3em;
      }

      :host og-upsell-button button {
        font-family: var(--og-upsell-family, inherit);
        font-size: var(--og-upsell-size, inherit);
        background-color: var(--og-upsell-background, inherit);
        color: var(--og-upsell-color, inherit);
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
    `}static get initialTemplate(){return`
    <og-when test="regularEligible">
      <div>

        <og-optout-button>
          <og-text key="offerOptOutLabel"></og-text>
        </og-optout-button>
      </div>
      <div>
        <og-optin-button>
          <og-price discount>
            <span slot="prepend">Subscribe and get</span>
            <span slot="append">off</span>
            <og-text key="offerOptInLabel" slot="fallback"></og-text> 
          </og-price>
          <og-price regular></og-price>
          <og-price subscription></og-price>
    
        </og-optin-button>
        <og-tooltip placement="bottom">
          <div slot="trigger">
            <og-text key="offerTooltipTrigger"></og-text>
          </div>
          <div slot="content">
            <og-text key="offerTooltipContent"></og-text>
          </div>
        </og-tooltip>
      </div>
      <div style="margin-left: 2.2em">
        <og-text key="offerEveryLabel"></og-text>
        <og-select-frequency>
          <option value="3_1" selected>3 Days</option>
          <option value="1_2">1 Week</option>
          <option value="1_3">1 Month</option>
        </og-select-frequency>
      </div>
    </og-when>

    <og-when test="upsellEligible">
      <og-when test="!upcomingOrderContainsProduct">
      <div class="og-iu-offer">
        <og-text key="upsellButtonLabel"></og-text>
        <og-upsell-button>
          <button type="button">
            <og-text key="upsellButtonContent"></og-text>
            <og-next-upcoming-order></og-next-upcoming-order>
          </button>
        </og-upsell-button>
        <og-upsell-modal>
          <og-text key="upsellModalContent"></og-text>
          <br />

          <og-optout-button>
            <og-text key="upsellModalOptOutLabel"></og-text>
          </og-optout-button>

          <br />

          <og-optin-button>
            <og-text key="upsellModalOptInLabel"></og-text>
          </og-optin-button>
          <br />

          <og-text key="offerEveryLabel"></og-text>
          <og-select-frequency>
            <option value="3_1" selected>3 Days</option>
            <option value="1_2">1 Week</option>
            <option value="1_3">1 Month</option>
          </og-select-frequency>

          <button slot="confirm" class="og-modal__btn og-modal__btn-primary">
            <og-text key="upsellModalConfirmLabel"></og-text>
          </button>
          <button slot="cancel" class="og-modal__btn"><og-text key="upsellModalCancelLabel"></og-text></button>
        </og-upsell-modal>
      </div>
      </og-when>
      <og-when test="upcomingOrderContainsProduct">
        The product is in your next upcomming order
      </og-when>
    </og-when>
    
    `}constructor(){super(),this.module="pdp",this.product={},this.productComponents=[],this.fetchOffer=()=>0,this.fetchOrders=()=>0,this.productHasChangedComponents=()=>0,this.setFirstOrderPlaceDate=()=>0,this.setProductToSubscribe=()=>0,this.productChangeFrequency=()=>0}applyTemplate(e){super.applyTemplate(e);let{id:r,locale:o}=e;this.variationId=r,this.locale=o;let i=new CustomEvent("template-changed");this.dispatchEvent(i)}updated(e){if(e.has("preview")&&this.setPreview(this.preview,e.get("preview"),this),this.frequency=this.defaultFrequency,e.has("product")&&!this.isPreview&&lr(()=>this.fetchOffer(this.product.id,ve,this)),e.has("firstOrderPlaceDate")&&this.product.id&&!this.isPreview&&this.setFirstOrderPlaceDate(this.product.id,this.firstOrderPlaceDate),e.has("productToSubscribe")&&this.product.id&&!this.isPreview&&this.setProductToSubscribe(this.product.id,this.productToSubscribe),e.has("auth")&&this.auth&&!this.isPreview&&this.fetchOrders(),e.has("productComponents")){let r=$l(this.product,this.productComponents),o=Object.assign({},this.product,{components:e.get("productComponents")});A(r,o)||this.productHasChangedComponents(r,o)}(e.has("offerId")||e.has("autoshipByDefault")||e.has("location")||e.has("product"))&&this.offerId&&this.autoshipByDefault&&(this.location==="cart"||this.isCart)&&this.product.id&&this.optinProduct&&!(this.optedin||[]).find(r=>A(r,this.product))&&this.optinProduct({...this.product,...this.productComponents.length&&{components:this.productComponents}},this.defaultFrequency,this)}get isPreview(){return this.preview||window.og.previewMode}get shouldEnableOffer(){var e;return this.config&&this.config.storeCurrency&&this.config.merchantSettings&&!(this.config.merchantSettings.multicurrency_enabled||this.config.storeCurrency===this.config.merchantSettings.currency_code)?(Ll(this.config.storeCurrency,this.config.merchantSettings.currency_code),!1):this.isCart&&((e=this.config)==null?void 0:e.hasProductSpecificFrequencies)?(Ml(),!1):!0}render(){return this.shouldEnableOffer?d`
          <slot></slot>
        `:null}get defaultFrequency(){let e=this.productFrequency||this.productDefaultFrequency;if(e)return e;let r=this.querySelector("og-select-frequency");return r&&r.currentFrequency?r.currentFrequency:this.getOption("defaultFrequency")}};n(Ur,"Offer");var Vl=n((t,e)=>({config:t.config,auth:t.auth,offerId:((t.productOffer||{})[(e.product||{}).id]||[])[0],productFrequency:ee(e.product)(t),productDefaultFrequency:ze((e.product||{}).id)(t),...M(t,e,"autoshipByDefault",co(t)[(e.product||{}).id]),...cr(e.product)(t)&&{autoshipByDefault:!1},optedin:Ot(t),subscribed:Z(e.product)(t),...Ye(t)}),"mapStateToProps"),Ms=g(Vl,{fetchOffer:di,fetchOrders:fr,productHasChangedComponents:si,optinProduct:Y,setFirstOrderPlaceDate:_i,setProductToSubscribe:Si,setPreview:Fs})(Ur);var qt=class extends v{constructor(){super(),this.showCancelButton=!0,this.showConfirmButton=!0}static get properties(){return{title:{type:String,attribute:!1},content:{type:String,attribute:!1},confirmText:{type:String,attribute:!1},cancelText:{type:String,attribute:!1},showCancelButton:{type:Boolean},showConfirmButton:{type:Boolean},show:{type:Boolean,attribute:"show"}}}static get styles(){return y`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      .og-modal {
        display: none;
      }

      .og-modal.is-open {
        display: block;
      }

      .og-modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .og-modal__container {
        background-color: var(--og-modal-background-color, #fff);
        padding: var(--og-modal-padding, 30px);
        max-width: 500px;
        max-height: 100vh;
        border-radius: var(--og-modal-border-radius, 4px);
        box-sizing: border-box;
      }

      .og-modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .og-modal__title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25;
        color: #00449e;
        box-sizing: border-box;
      }

      .og-modal__close {
        background: transparent;
        border: 0;
      }

      .og-modal__close:before {
        content: '✕';
      }

      .og-modal__content {
        margin-top: 2rem;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
      .btn {
        cursor: pointer;
      }
    `}close(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("close"))}confirm(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("confirm"))}get confirmButton(){return this.showConfirmButton?d`
          <span @click="${()=>this.confirm()}">
            <slot name="confirm" class="btn">
              <button class="og-modal__btn og-modal__btn-primary og-modal__confirm" @click="${()=>this.confirm()}">
                ${this.confirmText}
              </button>
            </slot>
          </span>
        `:d``}get cancelButton(){return this.showCancelButton?d`
          <span @click="${()=>this.close()}" class="btn">
            <slot name="cancel">
              <button class="og-modal__btn og-modal__cancel" @click="${()=>this.close()}">${this.cancelText}</button>
            </slot>
          </span>
        `:d``}render(){return this.show?d`
      <div class="og-modal is-open" aria-hidden="true">
        <div class="og-modal__overlay" tabindex="-1">
          <div class="og-modal__container" role="dialog" aria-modal="true">
            <header class="og-modal__header">
              <h2 class="og-modal__title">
                <slot name="title">${this.title}</slot>
              </h2>
              <button class="og-modal__close" aria-label="Close" @click="${()=>this.close()}"></button>
            </header>
            <main class="og-modal__content">
              <slot name="content">${this.content}</slot>
            </main>
            <footer class="og-modal__footer">${this.confirmButton} ${this.cancelButton}</footer>
          </div>
        </div>
      </div>
    `:d``}};n(qt,"Modal");var Dt=class extends v{static get styles(){return y`
      :host {
        display: inline-block;
        color: inherit;
        position: relative;
        height: 100%;
        cursor: inherit;
        font-family: inherit;
        font-weight: inherit;
      }
      select {
        font-weight: inherit;
        display: block;
        height: 100%;
        cursor: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 1em;
        line-height: 1.3;
        padding: var(--og-select-padding, 0.4em 1.8em 0.3em 0.5em);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
      }
      select::-ms-expand {
        display: none;
      }
      select:focus {
        outline: none;
      }
      select option {
        font-weight: inherit;
      }
      span {
        position: absolute;
        // background: white;
        color: inherit;
        fill: white;
        pointer-events: none;
        right: 0.3em;
        top: 50%;
        z-index: 1;
        font-size: 1em;
        line-height: 0.2em;
        transform: scaleY(0.5);
      }
    `}static get properties(){return{options:{type:Array},selected:{type:String},ariaLabel:{type:String}}}render(){return d`
      <select @change="${n(r=>this.onChange(r),"handleOnChange")}" aria-label="${this.ariaLabel}">
        ${this.options.map(r=>d`
            <option
              value="${r.value}"
              ?selected=${r.value===this.selected}
              .selected=${r.value===this.selected}
            >
              ${r.text}
            </option>
          `)}
      </select>
      <span>&#9660;</span>
    `}};n(Dt,"Select");var Ft=class extends v{static get properties(){return{placement:{type:String,default:"bottom"}}}static get styles(){return y`
      :host[hidden] {
        display: none;
      }

      :host {
        display: inline-block;
        position: relative;
        z-index: 9;
      }

      .trigger {
        display: block;
        cursor: pointer;
      }

      .content {
        box-sizing: border-box;
        font-family: var(--og-tooltip-family, inherit);
        font-size: var(--og-tooltip-size, inherit);
        color: var(--og-tooltip-color, inherit);
        background-color: var(--og-tooltip-background, #ececec);
        box-shadow: var(--og-tooltip-box-shadow, 2px 2px 6px rgba(0, 0, 0, 0.28));
        display: block;
        opacity: 0;
        padding: var(--og-tooltip-padding, 0.5em);
        text-align: var(--og-tooltip-text-align, left);
        pointer-events: none;
        position: absolute;
        transform: translateY(10px);
        transition: transform 0.25s ease-out;
        z-index: 99999;
        border-radius: var(--og-tooltip-border-radius, 0);
      }

      .content:after {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
      }

      .top {
        bottom: 100%;
        margin-bottom: 10px;
      }

      .bottom {
        top: 100%;
        margin-top: 10px;
      }

      .left {
        right: 100%;
        margin-right: 10px;
      }

      .right {
        left: 100%;
        margin-left: 10px;
      }

      .top-left {
        bottom: 100%;
        margin-bottom: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .top-right {
        bottom: 100%;
        margin-bottom: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left {
        top: 100%;
        margin-top: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .bottom-right {
        top: 100%;
        margin-top: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left:after,
      .bottom-right:after,
      .top-left:after,
      .top-right:after,
      .top:after,
      .bottom:after {
        margin-left: -10px;
        left: 50%;
        border-left: solid transparent 10px;
        border-right: solid transparent 10px;
      }

      .top-left:after,
      .top-right:after,
      .top:after {
        bottom: -10px;
        border-top: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .bottom-left:after,
      .top-left:after {
        left: auto;
        right: 0;
      }

      .bottom-right:after,
      .top-right:after {
        left: 0;
        right: auto;
        margin-left: 0;
      }

      .bottom-left:after,
      .bottom-right:after,
      .bottom:after {
        top: -10px;
        border-bottom: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .left:after,
      .right:after {
        margin-top: -10px;
        top: 50%;
        border-top: solid transparent 10px;
        border-bottom: solid transparent 10px;
      }
      .right:after {
        left: -10px;
        border-right: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .left:after {
        right: -10px;
        border-left: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .tooltip:hover .content {
        opacity: 1;
        width: 200px;
        pointer-events: auto;
        transform: translateY(0px);
      }
    `}connectedCallback(){super.connectedCallback(),this.showTooltip=this.showTooltip.bind(this),this.addEventListener("mouseenter",this.showTooltip)}showTooltip(){let r=this.shadowRoot.querySelector(".trigger").getBoundingClientRect(),o=this.shadowRoot.querySelector(".content"),i=o.getBoundingClientRect();!this.placement||this.placement==="top"||this.placement==="bottom"?o.style.left=`${(-1*i.width+r.width)/2}px`:(this.placement==="left"||this.placement==="right")&&(o.style.top=`${(-1*i.height+r.height)/2}px`)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseout",this.hideTooltip)}render(){return d`
      <span class="tooltip">
        <span class="trigger">
          <slot name="trigger">${this.trigger}</slot>
        </span>
        <div class="content ${this.placement||"bottom"}">
          <slot name="content">${this.content}</slot>
        </div>
      </span>
    `}};n(Ft,"Tooltip");var G=class extends N(v){static get properties(){return{options:{type:Array},shipmentsOptedIn:{type:Number},prepaidShipmentsSelected:{type:Number},defaultPrepaidShipments:{type:Number,attribute:"default-prepaid-shipments"}}}get prepaidOptedIn(){return this.shipmentsOptedIn>1}get selectedNumberOfShipments(){return this.prepaidShipmentsSelected||this.shipmentsOptedIn||this.getDefaultPrepaidShipments()}getDefaultPrepaidShipments(){return this.options.includes(this.defaultPrepaidShipments)?this.defaultPrepaidShipments:this.options[1]||this.options[0]}handleSelect({target:{value:e}}){let r=+e;this.productChangePrepaidShipments(this.product,r,this.offer)}render(){return d``}};n(G,"PrepaidStatus");var jl=n((t,e)=>({options:L(e.product.id)(t),shipmentsOptedIn:U(e.product)(t),prepaidShipmentsSelected:X(e.product)(t)}),"mapStateToProps"),Cm=g(jl,{productChangePrepaidShipments:me})(G);var Lr=class extends G{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return y`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }

      input {
        width: 1.2em;
        height: 1.2em;
        accent-color: var(--og-prepaid-checkbox-color, black);
        border-radius: 4px;
      }
    `}handleChange(e){e.target.checked?this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer):this.productChangePrepaidShipments(this.product,null,this.offer)}render(){if(this.options.length===0)return d``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return d`
      <div>
        <input id="cbx" type="checkbox" .checked=${this.prepaidOptedIn} @change=${this.handleChange} />
        <label for="cbx">
          <slot name="label">Prepay for</slot>
          ${this.options.length>1?d`
                <og-select
                  .options=${e}
                  .selected=${this.selectedNumberOfShipments}
                  .onChange="${r=>this.handleSelect(r)}"
                ></og-select>
              `:d`
                <span>${e[0].text}</span>
              `}
          <slot name="append"></slot>
        </label>
      </div>
    `}};n(Lr,"PrepaidToggle");var Hl=n((t,e)=>({options:L(e.product.id)(t),shipmentsOptedIn:U(e.product)(t),prepaidShipmentsSelected:X(e.product)(t)}),"mapStateToProps"),$s=g(Hl,{productChangePrepaidShipments:me})(Lr);var Mr=class extends G{static get properties(){return{...super.properties,productPlans:{type:Object},prepaidShipmentsSelected:{type:Number},totalPrice:{type:Boolean,reflect:!0,attribute:"total-price"},perDeliveryPrice:{type:Boolean,reflect:!0,attribute:"per-delivery-price"},totalSavings:{type:Boolean,reflect:!0,attribute:"total-savings"},perDeliverySavings:{type:Boolean,reflect:!0,attribute:"per-delivery-savings"},percentageSavings:{type:Boolean,reflect:!0,attribute:"percentage-savings"},extraPercentageSavings:{type:Boolean,reflect:!0,attribute:"extra-percentage-savings"},numberOfShipments:{type:Boolean,reflect:!0,attribute:"number-of-shipments"}}}static get styles(){return y`
      :host {
        display: inline-block;
        text-indent: initial;
      }
    `}get value(){let e=x(this.product),r=this.productPlans[e]||[],o=this.selectedNumberOfShipments,i=r.find(h=>h.prepaidShipments>1&&h.prepaidShipments===o);if(!i&&(i=r.find(h=>h.prepaidShipments>1),!i))return"";let{discountRate:s,subscriptionPrice:a,prepaidShipments:c,regularPrepaidPrice:l,prepaidSavingsPerShipment:p,prepaidSavingsTotal:f,prepaidExtraSavingsPercentage:u}=i;return this.totalPrice?l:this.perDeliveryPrice?a:this.totalSavings?f:this.perDeliverySavings?p:this.percentageSavings?s:this.extraPercentageSavings?u:this.numberOfShipments?c:""}render(){let e=this.value;return e?d`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:d`
      <slot name="fallback"></slot>
    `}};n(Mr,"PrepaidData");var Gl=n((t,e)=>({options:L(e.product.id)(t),shipmentsOptedIn:U(e.product)(t),prepaidShipmentsSelected:X(e.product)(t),productPlans:t.productPlans}),"mapStateToProps"),Vs=g(Gl)(Mr);var $r=class extends G{constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}static get styles(){return y`
      :host {
        cursor: pointer;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .radio {
        border-color: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }
    `}handleClick(e){this.prepaidOptedIn||this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.prepaidOptedIn?"active":""}"></button>
        <label for="action-trigger">
          <slot name="label"><og-text key="prepaidOptInLabel"></og-text></slot>
        </label>
      </slot>
    `}};n($r,"PrepaidButton");var Bl=n((t,e)=>({options:L(e.product.id)(t),shipmentsOptedIn:U(e.product)(t),prepaidShipmentsSelected:X(e.product)(t)}),"mapStateToProps"),js=g(Bl,{productChangePrepaidShipments:me})($r);var Vr=class extends G{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return y`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}render(){if(this.options.length===0)return d``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return d`
      ${this.options.length>1?d`
            <og-select
              .options=${e}
              .selected=${this.selectedNumberOfShipments}
              .onChange="${r=>this.handleSelect(r)}"
            ></og-select>
          `:d`
            <span>${e[0].text}</span>
          `}
      <slot name="append"></slot>
    `}};n(Vr,"PrepaidSelect");var zl=n((t,e)=>({options:L(e.product.id)(t),shipmentsOptedIn:U(e.product)(t),prepaidShipmentsSelected:X(e.product)(t)}),"mapStateToProps"),Hs=g(zl,{productChangePrepaidShipments:me})(Vr);var jr=class extends ct{static get properties(){return{...super.properties,prepaidShipmentsOptedIn:{type:Number}}}get isActive(){return this.prepaidShipmentsOptedIn>0?!1:this.subscribed}handleClick(e){if(!this.isActive){let r=this.frequencies&&this.frequencies.length>0?this.frequencies[0]:this.optinFrequency;this.optinProduct(It(this),r,this.offer)}e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.isActive?" active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(jr,"SubscriptionButton");var Gs=g(W,{optinProduct:Y})(jr);var Ut=class extends v{static get styles(){return y`
      :host {
        position: fixed;
        top: 5em;
        righit: 5em;
        background-color: rgba(255, 255, 255, 0.7);
        width: 400px;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 0 0 #000;
      }

      button {
        margin: 0 0.5em 0.5em;
        background-color: gray;
        color: white;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.5em;
      }

      button.primary {
        background-color: blue;
        padding: 1em;
        color: white;
        border: 0;
        border-radius: 3px;
      }

      button[disabled] {
        background-color: #777;
      }

      div {
        margin-bottom: 0.5em;
      }

      .message {
        margin-left: 0.5em;
        margin: 1em;
      }

      .success {
        color: green;
      }

      .error {
        color: red;
      }

      .warning {
        color: orange;
      }
      a {
        color: white;
      }
    `}runTests(){this.results=[],this.disabled=!0,this.requestUpdate(),document.querySelectorAll("og-offer").forEach(r=>{let o=r.store.getState(),i=r.getAttribute("product"),s=r.getAttribute("location"),a={messages:this.getOfferAttributeMessages(i,s).concat(this.getOfferRequestMessages(i,o)),product:i};this.results.push(a)}),this.testsRan=!0,this.disabled=!1,this.requestUpdate()}getOfferAttributeMessages(e,r){let o=[];return e||o.push({name:"Offer element found but missing product attribute",type:"error"}),r||o.push({name:"Offer element found but missing location attribute",type:"warning"}),e&&r&&o.push({name:"Offer element found and properly tagged",type:"success"}),o}getOfferRequestMessages(e,r){let o=r.inStock[e],i=r.autoshipEligible[e],s=[];return e&&o===!1&&s.push({name:"This product is marked as out of stock in the OG database",type:"warning"}),e&&i===!1&&s.push({name:"This product is not eligible for autoship",type:"warning"}),e&&o===null&&i===null&&s.push({name:"This product does not exist in our database",type:"error"}),s}resultsCodeBlock(){return this.results.length===0?d`
          <div class="message error">No offer element found on the page</div>
        `:this.results.map((e,r)=>d`
            <div>For offer tag with product = "${e.product}"</div>
            ${e.messages.map(o=>d`
                <div class="message ${o.type}">${o.name}</div>
              `)}
            <button @click=${this.toggleProductFlags(r,{})}>Set inStock and eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{inStock:!1})}>Set to not inStock</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1})}>Set to not eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1,inStock:!1})}>
              Set to not eligible and not in stock
            </button>
            <br />
            <button @click=${this.toggleUpsellPreview(r)}>Toggle upsell/regular in this offer</button>
            <br />
            <button @click=${this.toggleUpsellNextOrder(r)}>upsell product is in next order</button>
            <br />
          `)}toggleUpsellPreview(e){return r=>{r.preventDefault();let o=document.querySelectorAll("og-offer")[e];o.getAttribute("preview-upsell-offer")?o.removeAttribute("preview-upsell-offer"):o.setAttribute("preview-upsell-offer",!0),this.runTests()}}toggleProductFlags(e,{inStock:r=!0,autoship:o=!0,groups:i=["subscription","upsell"]}){return s=>{s.preventDefault();let a=document.querySelectorAll("og-offer")[e],c=a.product.id;a.store.dispatch(Ce({in_stock:{[c]:r},eligibility_groups:{[c]:i},result:"success",autoship:{[c]:o},module_view:{regular:"58a01e9aacbe40389b5c7325d79091bb"},modifiers:{},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:5},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[c]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}})),this.runTests()}}toggleUpsellNextOrder(e){return r=>{let o=document.querySelectorAll("og-offer")[e],i=o.product.id;r.preventDefault(),o.store.dispatch(mo({count:1,next:null,previous:null,results:[{order:"24d50352579511ea806cbc764e100cfd",offer:null,subscription:"8a076b7a0ea011e7a5bcbc764e105eda",product:i,components:[],quantity:1,public_id:"24d6901e579511ea806cbc764e100cfd",product_attribute:null,price:"14.99",extra_cost:"0.00",total_price:"13.49",one_time:!1,frozen:!1,first_placed:null}]})),this.runTests()}}render(){return d`
      <div>
        ${this.testsRan?this.resultsCodeBlock():d`
              <div>Click the button to run tests</div>
            `}
        <button ?disabled=${this.disabled} @click="${this.runTests.bind(this)}" class="primary">Run Test</button>
      </div>
    `}};n(Ut,"TestWizard");function jo(){let t="og-test-wizard";customElements.get(t)||customElements.define(t,Ut);let e=document.createElement(t);document.body.appendChild(e)}n(jo,"default");var Ho=[79,71,68,69,86],Bs=n(()=>{if(window.OG_OFFERS_TEST_MODE_ENABLE)return;window.OG_OFFERS_TEST_MODE_ENABLE=!0;let t=0;document.addEventListener("keyup",async function(e){if(e.which===Ho[t]){let o=Ho[t];setTimeout(function(){t<=o&&(t=0)},5e3),t+=1,t>=Ho.length&&jo()}else t=0},!1)},"enable");var Hr=n((t=[],e)=>{switch(e.type){case pe:return[];case xe:return e.newValue?e.newValue.optedin:t;case R:case k:{let[{prepaidShipments:r,...o},i]=Je(t,e.payload.product);return i.concat({...o,...e.payload.product,frequency:e.payload.frequency})}case ie:{let{payload:r}=e,[{prepaidShipments:o,...i},s]=Je(t,r.product),a={...i,...r.product};return r.prepaidShipments&&(a.prepaidShipments=r.prepaidShipments),s.concat(a)}case I:return t.filter(r=>!A(e.payload.product,r));case ft:return t.map(r=>A(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case Wt:return t.filter(r=>!A(e.payload.product,r));case je:return[];default:return t}},"optedin"),Go=n((t=[],e)=>{switch(e.type){case pe:return[];case xe:return e.newValue?e.newValue.optedout:t;case R:case k:return t.filter(r=>!A(e.payload.product,r));case I:{let[r,o]=Je(t,e.payload.product);return o.concat({...r,...e.payload.product,frequency:e.payload.frequency})}case ft:return t.map(r=>A(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case je:return[];default:return t}},"optedout"),Bo=n((t={},{type:e,payload:r})=>{switch(e){case Bt:return r&&r.count>0?{...t,...r.results[0]&&{...r.results[0],place:new Date(Date.parse(r.results[0].place.replace(/-/gi,"/")))}}:t;case zt:return{...t,products:(r.results||[]).map(o=>o.product)};case Yt:return{...t,...r,public_id:r.order,...r.product&&{products:(t.products||[]).concat(r.product)}};default:return t}},"nextUpcomingOrder"),Wl=n((t={},e)=>{switch(e.type){case P:return{...t,...e.payload.autoship};default:return t}},"autoshipEligible"),Jl=n((t={},e)=>{switch(e.type){case J:return{...t};case P:return{...t,...e.payload.in_stock};default:return t}},"inStock"),zo=n((t={},e)=>{switch(e.type){case P:return{...t,...e.payload.eligibility_groups};default:return t}},"eligibilityGroups"),zs=n((t,e)=>t.map(r=>({...e[r],id:[r][0]})),"mapIncentive"),Yo=n((t={},e)=>{switch(e.type){case P:return{...t,...[...new Set(Object.keys(e.payload.incentives||{}))].reduce((r,o)=>({...r,[o]:Object.entries(e.payload.incentives).filter(([i])=>i===o).reduce((i,[,{initial:s,ongoing:a}])=>({...i,initial:[...i.initial||[],...zs(s,e.payload.incentives_display)],ongoing:[...i.ongoing||[],...zs(a,e.payload.incentives_display)]}),{})}),{})};default:return t}},"incentives"),Kl=n((t={},e)=>{switch(e.type){case R:case k:return{...t,[x(e.payload.product)]:e.payload.frequency};case I:return{...t,[x(e.payload.product)]:void 0};default:return t}},"frequency"),Wo=n((t=!1,e)=>{switch(e.type){case Gt:return{...e.payload};case Ee:return!1;default:return t}},"auth"),Jo=n((t="",e)=>{switch(e.type){case Ue:return e.payload;default:return t}},"merchantId"),Ko=n((t=null,e)=>{switch(e.type){case Ht:return e.payload;default:return t}},"authUrl"),Ql=n((t={},e)=>{switch(e.type){case P:return{...t,offerId:(e.payload.module_view||{}).regular,...e.payload.modifiers};default:return t}},"offer"),Qo=n((t="",e)=>{switch(e.type){case P:return(e.payload.module_view||{}).regular||"";default:return t}},"offerId"),Zo=n((t=null,e)=>{switch(e.type){case pe:return null;case Le:return e.payload;default:return t}},"sessionId"),Zl=n((t={},e)=>{switch(e.type){case P:return{...t,...Object.entries(e.payload.autoship).map(([r])=>({[r]:Object.keys(e.payload.modifiers)})).reduce((r,o)=>({...r,...o}))};case je:return{};default:return t}},"productOffer"),Xo=n((t={},e)=>{switch(e.type){case Zt:return{...t,[x(e.payload.product)]:e.payload.firstOrderPlaceDate};default:return t}},"firstOrderPlaceDate"),en=n((t={},e)=>{switch(e.type){case Xt:return{...t,[x(e.payload.product)]:e.payload.productToSubscribe};default:return t}},"productToSubscribe"),Lt=n((t={},e)=>{switch(e.type){case Me:return{...t,name:Oe,apiUrl:"https://staging.offers.ordergroove.com",legoUrl:"https://staging.restapi.ordergroove.com"};case $e:return{...t,name:er,apiUrl:"https://dev.offers.ordergroove.com",legoUrl:"https://dev.restapi.ordergroove.com"};case Ve:return{...t,name:Pe,apiUrl:"https://offers.ordergroove.com",legoUrl:"https://restapi.ordergroove.com"};default:return t}},"environment"),tn=n((t={offerOptInLabel:"Subscribe to save",offerIncentiveText:"Save {{ogIncentive DiscountPercent}} when you subscribe",offerOptOutLabel:"Deliver one-time only",offerEveryLabel:"Delivery Every",offerTooltipTrigger:"[?]",offerTooltipContent:"Seems this is a great subscription offering. Many fun details about this program exist.",optinButtonLabel:"\u2022",optoutButtonLabel:"\u2022",optinStatusOptedInLabel:"You're opted in!",optinStatusOptedOutLabel:"You're not opted in.",optinToggleLabel:"\u2022",upsellButtonLabel:"Add item to order on ",upsellButtonPrefix:"",upsellModalContent:"Some upsell modal content",upsellModalOptInLabel:"Subscribe",upsellModalOptOutLabel:"Purchase one time",upsellModalTitle:"Impulse Upsell",upsellModalConfirmLabel:"Ok",upsellModalCancelLabel:"Cancel",defaultFrequencyCopy:"(Most Popular)",frequencyPeriods:{1:"day",2:"week",3:"month"},prepaidOptInLabel:"Prepaid Subscription",prepaidShipmentsLabel:"Number of prepaid shipments"},e)=>{switch(e.type){case Jt:return{...t,...e.payload};default:return t}},"locale"),Xl=n((t={offerType:"radio"},e)=>{switch(e.type){case He:return{...t,...e.payload,defaultFrequency:e.payload.defaultFrequency?xt(e.payload.defaultFrequency):t.defaultFrequency,frequenciesEveryPeriod:[],frequencies:e.payload.frequencies?e.payload.frequencies.map(xt):t.frequencies};case Ge:return{...t,merchantSettings:{...e.payload}};default:return t}},"config"),rn=n((t=!1,e)=>{switch(e.type){case le:return e.payload.isPreview;default:return t}},"previewStandardOffer"),on=n((t=!1,e)=>{switch(e.type){case mt:return e.payload.isPreview;default:return t}},"previewUpsellOffer");var nn=n((t=[],e)=>{switch(e.type){case P:return{...t,...e.payload.autoship_by_default};default:return t}},"autoshipByDefault"),sn=n((t=[],e)=>{switch(e.type){case P:return{...t,...e.payload.default_frequencies};default:return t}},"defaultFrequencies"),an=n((t=[],e)=>{switch(e.type){case Qt:return[...e.payload||[]];case Kt:return[e.payload,...t];default:return t}},"templates"),ep=n((t={},e)=>{switch(e.type){case B:return Qe(e.payload);default:return t}},"productPlans"),cn=n((t={},e)=>{switch(e.type){case ht:{let{[e.payload.oldCartProductKey]:r,...o}=t;return{...o,[e.payload.newCartProductKey]:r}}case ie:return e.payload.prepaidShipments?{...t,[e.payload.product.id]:e.payload.prepaidShipments}:t;default:return t}},"prepaidShipmentsSelected"),Gr=Mt({optedin:Hr,optedout:Go,nextUpcomingOrder:Bo,autoshipEligible:Wl,inStock:Jl,eligibilityGroups:zo,incentives:Yo,frequency:Kl,auth:Wo,merchantId:Jo,authUrl:Ko,offer:Ql,offerId:Qo,sessionId:Zo,productOffer:Zl,firstOrderPlaceDate:Xo,productToSubscribe:en,environment:Lt,locale:tn,config:Xl,previewStandardOffer:rn,previewUpsellOffer:on,autoshipByDefault:nn,defaultFrequencies:sn,templates:an,productPlans:ep,prepaidShipmentsSelected:cn});var Br=class extends N(j){static get properties(){return{...super.properties,regular:{type:Boolean,reflect:!0},subscription:{type:Boolean,reflect:!0},discount:{type:Boolean,reflect:!0},payAsYouGo:{type:Boolean,reflect:!0,attribute:"pay-as-you-go"},frequency:{type:Object},productPlans:{type:Object}}}static get styles(){return y`
      :host::before {
        clip-path: inset(100%);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      :host([subscription])::before {
        content: 'Discounted subscription price';
      }

      :host([regular])::before {
        content: 'Regular price';
      }
    `}get value(){var l;let e=x(this.product),r=this.frequency||this.configDefaultFrequency||((l=this.offer)==null?void 0:l.defaultFrequency),o=this.productPlans[e]||[];if(this.payAsYouGo){let p=o.find(f=>f.prepaidShipments===null||f.prepaidShipments===void 0);return p?p.subscriptionPrice:""}let i=o.find(p=>p.frequency===r);if(!i)return"";let{regularPrice:s,discountRate:a,subscriptionPrice:c}=i;return c===s?"":this.regular?s:this.discount?a:c}render(){let e=this.value;return e?d`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:d`
      <slot name="fallback"></slot>
    `}};n(Br,"Price");var tp=n((t,e)=>{var r;return{productPlans:t.productPlans,configDefaultFrequency:(r=t.config)==null?void 0:r.defaultFrequency,frequency:ee(e.product)(t)}},"mapStateToProps"),Ys=g(tp)(Br);function ln(t){Bs(),Li(t);try{customElements.define("og-when",ys),customElements.define("og-text",ws),customElements.define("og-incentive-text",Ns),customElements.define("og-offer",Ms),customElements.define("og-select-frequency",Is),customElements.define("og-optout-button",Es),customElements.define("og-optin-toggle",Ts),customElements.define("og-optin-status",_s),customElements.define("og-optin-button",Ss),customElements.define("og-optin-select",vs),customElements.define("og-upsell-button",Os),customElements.define("og-frequency-status",xs),customElements.define("og-modal",qt),customElements.define("og-select",Dt),customElements.define("og-tooltip",Ft),customElements.define("og-upsell-modal",Ps),customElements.define("og-next-upcoming-order",qs),customElements.define("og-price",Ys),customElements.define("og-prepaid-toggle",$s),customElements.define("og-prepaid-data",Vs),customElements.define("og-prepaid-button",js),customElements.define("og-prepaid-select",Hs),customElements.define("og-subscription-button",Gs)}catch{console.info("OG WebComponents already registered, skipping.")}let e=!1,r={store:t,isReady:()=>e,setEnvironment(o){return t.dispatch(go(o)),this},setMerchantId(o){return t.dispatch(ci(o)),this},setAuthUrl(o){return t.dispatch(li(o)),this},receiveMerchantSettings(o){return t.dispatch(Ei(o)),this},getProductsForPurchasePost(o=[]){return So(t.getState(),o)},getOptins(o=[]){return So(t.getState(),o)},clear(){t.dispatch(fi())},addOptinChangedCallback(o){typeof o=="function"&&document.addEventListener("optin-changed",i=>o(i.detail))},disableOptinChangedCallbacks(){document.addEventListener("optin-changed",o=>o.stopPropagation(),!0)},register(){},previewMode(o){return window.og=window.og||{},o===!1?delete window.og:window.og.previewMode=!0,this},config(o){return t.dispatch(gi(o)),this},setLocale(o){return t.dispatch(mi(o)),this},addTemplate(o,i,s){return t.dispatch(yi(o,i,s)),this},setTemplates(o){return t.dispatch(bi(o)),this},setPublicPath(o){return this},resolveSettings(o,i,s,a=t){if(o&&i&&s){let c=[];s.product?c.push(s.product):s.cart&&Array.isArray(s.cart.products)&&(c=c.concat(s.cart.products));let{apiUrl:l}=Lt({},go(i)),{sessionId:p}=a.getState();p&&c.forEach(f=>{let u=x(f);de.fetchOffer(l,o,p,`${u}`,ve)}),s.product_discounts&&typeof s.product_discounts=="object"&&a.dispatch({type:B,payload:s.product_discounts})}},initialize(o,i,s,a){var l;e?console.warn("og.offers has been initialized already. Skipping."):r.resolveSettings(o,i,window.og_settings,t);let c=t.getState();return o&&o!==c.merchantId&&r.setMerchantId(o),i&&i!==((l=c.environment)==null?void 0:l.name)&&r.setEnvironment(i),a&&r.receiveMerchantSettings(a),s&&r.setAuthUrl(s),e=!0,this}};return window.OG=window.OG||{},Object.assign(window.OG,r),Object.assign(r.initialize,r),_o(window.opener,r),r}n(ln,"makeApi");var ae=n((t,e)=>t===null?"":new Intl.NumberFormat(navigator.language,{style:"currency",currency:e}).format(t/100),"money"),zr=n(t=>`${t}%`,"percentage");var Yr=n(t=>{var e,r;return Array.isArray((e=t.selling_plan)==null?void 0:e.options)&&((r=t.selling_plan)==null?void 0:r.options.some(o=>(o==null?void 0:o.name)==="Shipment amount"))},"isPrepaidAllocation"),Wr=n(t=>{if(t&&t.length>1){let e=t.find(r=>(r==null?void 0:r.name)==="Shipment amount").value.split(" ");return e.length>0?+e[0]:null}return null},"getPrepaidShipmentsNumberFromOptions"),rp=n(t=>{var e,r;return(t.selling_plan_id||((r=(e=t.selling_plan)==null?void 0:e.id)!=null?r:"")).toString()},"getAllocationFrequency"),op=n((t,e)=>ae(t.compare_at_price,e),"getAllocationRegularPrice"),np=n((t,e)=>{var r;if(Yr(t)){let o=Wr((r=t.selling_plan)==null?void 0:r.options),i=Math.round(t.price/o);return ae(i,e)}return ae(t.price,e)},"getAllocationSubscriptionPrice"),Ws=n((t,e)=>Math.round((t.compare_at_price-e)*100/t.compare_at_price),"getPrepaidPercentage"),ip=n((t,e)=>{var o,i,s;if(Yr(t)){let a=Wr((o=t.selling_plan)==null?void 0:o.options),c=t.price/a,l=Ws(t,c);return zr(l)}let r="";return((i=t.price_adjustments[0])==null?void 0:i.value_type)==="percentage"?r=zr(t.price_adjustments[0].value):(s=t.price_adjustments[0])!=null&&s.value?r=ae(t.price_adjustments[0].value,e):t.compare_at_price&&(r=ae(t.compare_at_price-t.price,e)),r},"getAllocationDiscountRate"),sp=n(t=>{var e;return Yr(t)?Wr((e=t.selling_plan)==null?void 0:e.options):null},"getAllocationNumberOfShipments"),ap=n((t,e,r,o)=>{var f,u;let i=Wr((f=t.selling_plan)==null?void 0:f.options),s=t.price/i,a=t.compare_at_price-s,c=Ws(t,s),l=(u=r==null?void 0:r.price_adjustments)==null?void 0:u[0],p=l&&l.value_type==="percentage"?l.value:null;return e.regularPrepaidPrice=ae(t.price,o),e.prepaidSavingsPerShipment=ae(Math.round(a),o),e.prepaidSavingsTotal=ae(Math.round(a*i),o),p&&c&&(e.prepaidExtraSavingsPercentage=zr(c-p)),e},"addPrepaidPriceAndSavings"),pn="Subscribe and Save",cp=n((t,e,r)=>{t.selling_plan||(t.selling_plan=e.find(i=>i.id===t.selling_plan_id));let o={frequency:rp(t),regularPrice:op(t,r),subscriptionPrice:np(t,r),discountRate:ip(t,r),prepaidShipments:sp(t)};if(Yr(t)){let i=e.find(s=>s.group_name===pn&&s.options.length===1);return ap(t,o,i,r)}return o},"mapSellingPlanToDiscount"),un=n((t,e,r=[],o)=>[...t,cp(e,r,o)],"sellingPlanAllocationsReducer"),Js=n(t=>t.selling_plan_groups.reduce((e,r)=>[...e,...r.selling_plans.map(o=>({...o,group_name:r.name}))],[]),"getSellingPlans");var Qs=n((t,e,r)=>{let o=Object.keys(t).filter(i=>i.startsWith(e.toString()));return o.length?{...t,...o.reduce((i,s)=>({...i,[s]:r}),{})}:t},"overrideLineKey"),Ks=n((t,e,r)=>{if(!r)return null;if(!We(r))return r;if(pr(t,e)){let o=te(t,e,r);return o||fe(t)}return r},"getDefaultSellingPlan"),lp=n((t,e)=>t.map(r=>{var o,i,s,a,c,l,p;return We(r==null?void 0:r.frequency)?{...r,frequency:pr((o=e==null?void 0:e.config)==null?void 0:o.frequencies,(i=e==null?void 0:e.config)==null?void 0:i.frequenciesEveryPeriod)?te((s=e==null?void 0:e.config)==null?void 0:s.frequencies,(a=e==null?void 0:e.config)==null?void 0:a.frequenciesEveryPeriod,r.frequency)||te((c=e==null?void 0:e.config)==null?void 0:c.frequencies,(l=e==null?void 0:e.config)==null?void 0:l.frequenciesEveryPeriod,e.defaultFrequency)||fe((p=e==null?void 0:e.config)==null?void 0:p.frequencies):r.frequency}:r}),"mapExistingOptinsFromOfferResponse"),pp=n(({autoship:t={},autoship_by_default:e={},default_frequencies:r={},in_stock:o={}},i,s)=>Object.keys(t).reduce((a,c)=>{if(!i.some(l=>l.id===c)){if(!(t[c]&&e[c]&&o[c]))return a;let{config:{frequencies:l,frequenciesEveryPeriod:p}={},defaultFrequency:f}=s,u=r[c],h;return r[c]&&pr(l,p)?h=te(l,p,`${u.every}_${u.every_period}`)||Ks(l,p,f)||fe(l):r[c]?h=`${u.every}_${u.every_period}`:h=Ks(l,p,f)||"_",a.concat({id:c,frequency:h})}return a},[]),"reduceNewOptinsFromOfferResponse"),Zs=n(t=>(t==null?void 0:t.selling_plan_groups.find(ea))||Xs(t),"getOGSellingPlanGroup"),Xs=n(t=>t==null?void 0:t.selling_plan_groups.find(e=>e.name===pn),"getDefaultSubscriptionSellingPlanGroup"),ea=n(t=>t.name.startsWith("og_psfl"),"isProductSpecificFrequencySellingPlanGroup"),up=n((t,e)=>({...Qs(t,e.id,e.available),[e.id]:e.available}),"productOrVariantInStockReducer"),ta=n((t,[e])=>({...t,[e]:!0}),"productTrue"),ra=n((t,e)=>{let r=x(e.key);return{...t,[e.key]:t[r]||null}},"reduceProductCartLine"),dp=n((t={},e)=>{var r;if(B===e.type)return Object.entries(e.payload).reduce(ta,t);if(ue===e.type){let{payload:o}=e;return o.items.reduce(ra,t)}if(K===e.type){let{payload:{product:o}}=e,i=Xs(o),s=new Set((r=i==null?void 0:i.selling_plans.map(a=>a.id))!=null?r:[]);return[o,...(o==null?void 0:o.variants)||[]].reduce((a,c)=>{var f,u;let p=((u=(f=c==null?void 0:c.selling_plan_allocations)==null?void 0:f.filter(h=>s.has(h.selling_plan_id)))!=null?u:[]).length>0;return{...Qs(a,c.id,p),[c.id]:p}},t)}return le===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"autoshipEligible");function fp(t){let e=["day","week","month"].findIndex(o=>t.toLowerCase().includes(o))+1,r=(t.match(/(\d+)/)||["",1])[1];return r&&e?`${r}_${e}`:null}n(fp,"textToFreq");function oa(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({options:r})=>r||[]).flat().map(({value:r})=>fp(r))}n(oa,"sellingPlansToEveryPeriod");function na(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({id:r})=>`${r}`)}n(na,"sellingPlansToFrequencies");function ia(t){var r;let e=(r=t==null?void 0:t.options.find(({name:o})=>o==="Shipment amount"))==null?void 0:r.value.split(" ")[0];return e?Number(e):void 0}n(ia,"getPrepaidShipments");function hp(t){return t.reduce((e,r)=>{let o=r.name.split("-")[1],i=r.selling_plans.map(s=>({numberShipments:ia(s),sellingPlan:String(s.id)}));return{...e,[o]:i}},{})}n(hp,"getPrepaidSellingPlans");var mp=n((t={frequencies:[],offerType:"radio",frequenciesEveryPeriod:[]},e)=>{var r,o,i;if(B===e.type){let s=[...new Set(Object.values(e.payload).map(Object.keys).flat())];return{...t,frequencies:s}}if(K===e.type){let{payload:{product:s,currency:a}}=e,c={},l=Zs(s),p=na(l);if(p!=null&&p.length){let u=oa(l),h=((o=(r=l.options)==null?void 0:r[0])==null?void 0:o.values)||p,b=t.defaultFrequency;b&&We(b)&&(b=te(p,u,b)||fe(p)||b),c={frequencies:p,frequenciesEveryPeriod:u,frequenciesText:h,...b?{defaultFrequency:b}:{},hasProductSpecificFrequencies:t.hasProductSpecificFrequencies||ea(l)}}let f=s==null?void 0:s.selling_plan_groups.filter(u=>/^Prepaid-.*/.test(u.name));return f.length&&(c={...c,prepaidSellingPlans:{...t.prepaidSellingPlans,...hp(f)}}),{...t,...c,storeCurrency:a}}if(P===e.type){let{payload:{offer:s}}=e,{defaultFrequency:a,config:{frequencies:c,frequenciesEveryPeriod:l,prepaidSellingPlans:p={}}={},product:f}=s;return(i=p[f==null?void 0:f.id])!=null&&i.some(({sellingPlan:u})=>u===a)?{...t,defaultFrequency:fe(c)||a}:We(a)?{...t,defaultFrequency:te(c,l,a)||fe(c)||a}:{...t,defaultFrequency:a}}return Ge===e.type?{...t,merchantSettings:{...e.payload}}:t},"config"),gp=n((t={},e)=>{var r;if(B===e.type)return Object.entries(e.payload).reduce(ta,t);if(ue===e.type)return e.payload.items.reduce(ra,t);if(K===e.type){let{payload:{product:o}}=e;return[o,...(r=o==null?void 0:o.variants)!=null?r:[]].reduce(up,t)||t}return J===e.type&&e.payload.product===null?{...t}:le===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"inStock"),yp=n((t={},e)=>t,"offer");function bp({prepaidShipments:t,offer:e,product:r}){var o;if(t){let i=x(r.id),s=(o=e.config.prepaidSellingPlans[i])==null?void 0:o.find(a=>a.numberShipments===t);return s?s.sellingPlan:null}return e.config.frequencies[0]}n(bp,"getFrequencyForPrepaidShipments");function _p(t){let e=ia(t.selling_plan_allocation.selling_plan),r={id:t.key,frequency:`${t.selling_plan_allocation.selling_plan.id}`};return e&&(r.prepaidShipments=e),r}n(_p,"getOptedInItem");var Sp=n((t=[],e)=>{if(ue===e.type){let r=e.payload;return t.filter(o=>!o.id.includes(":")).concat(r.items.reduce((o,i)=>i.selling_plan_allocation?[...o,_p(i)]:o,[]))}if(P===e.type){let{offer:r={},...o}=e.payload,i=lp(t,r),s=pp(o,i,r);return[...i,...s]}if(K===e.type){let{product:r}=e.payload,o=Zs(r);if(!o)return t;let i=na(o),s=oa(o);return t.map(a=>We(a.frequency)?{...a,frequency:te(i,s,a.frequency)||fe(i)}:a)}if(ie===e.type){let{payload:r}=e,o=Hr(t,e),[i,s]=Je(o,r.product);return s.concat({...i,...r.product,frequency:bp(r)})}return Hr(t,e)},"optedin"),Ep=n((t={},e)=>t,"productOffer"),xp=n((t={},e)=>{var r;if(K===e.type){let{payload:{product:o,currency:i}}=e,s=Js(o);return[o,...(r=o==null?void 0:o.variants)!=null?r:[]].reduce((a,c)=>{var l;return{...a,[c.id]:(l=c.selling_plan_allocations)==null?void 0:l.reduce((p,f)=>un(p,f,s,i),[])}},t)||t}if(ue===e.type){let o=e.payload;return o.items.reduce((i,s)=>s.selling_plan_allocation?{...i,[s.key]:un([],s.selling_plan_allocation,[],o.currency)}:i,t)||t}return B===e.type?Qe(e.payload):t},"productPlans"),vp=Mt({auth:Wo,authUrl:Ko,autoshipByDefault:nn,autoshipEligible:dp,config:mp,defaultFrequencies:sn,eligibilityGroups:zo,environment:Lt,firstOrderPlaceDate:Xo,incentives:Yo,inStock:gp,locale:tn,merchantId:Jo,nextUpcomingOrder:Bo,offer:yp,offerId:Qo,optedin:Sp,optedout:Go,previewStandardOffer:rn,previewUpsellOffer:on,productOffer:Ep,productPlans:xp,productToSubscribe:en,sessionId:Zo,templates:an,prepaidShipmentsSelected:cn});function dn(t,e){return window.og&&window.og.previewMode?Gr(t,e):vp(t,e)}n(dn,"shopifyReducer");var la=ce(bt()),pa=ce(Vt());function sa(t,e,r){let o=`[name="id"][value="${t}"]`,i=`form[action="/cart/add"] option[value="${t}"]`;if(!e)return;let s=document.querySelectorAll(o);s.length||(s=document.querySelectorAll(i)),[...s].forEach(a=>{let c=a.form,l=c==null?void 0:c.querySelector(`[name="${e}"]`);l||(l=document.createElement("input"),l.type="hidden",l.name=`attributes[${e}]`,c==null||c.appendChild(l)),l.value=r})}n(sa,"updateTrackingInputs");function fn(){return`og__${Math.ceil(new Date().getTime()/1e3)}`}n(fn,"getTrackingKey");function Op(t,e){var f,u,h,b;if(!((f=t.payload.offer)==null?void 0:f.autoshipByDefault))return;let o=(u=t.payload.offer)==null?void 0:u.product.id,i=fn(),s=((h=t.payload.offer)==null?void 0:h.location)||"",a=((b=t.payload.offer)==null?void 0:b.variationId)||"",c=Jr(o,e),p=[o,R.toLowerCase(),s,c,a].join(",");sa(o,i,p)}n(Op,"addDefaultToSubTracking");function hn(t){return e=>r=>{switch(e(r),r.type){case R:case I:case k:{let o=r.payload.offer,i=mn(r);o&&!o.isCart&&sa(o.product.id,i[0],i[1]);break}case P:Op(r,t);break;default:}}}n(hn,"shopifyTrackingMiddleware");var aa,ca,gn=((ca=(aa=window.Shopify)==null?void 0:aa.routes)==null?void 0:ca.root)||"/",Pp="/cart",Tp=`${gn}cart.js`,wp=`${gn}cart/change.js`,Cp=`${gn}products/`,Rp='[id^="shopify-section-"][id$=__cart-items], [id^="shopify-section-"][id$="__cart-footer"],#cart-live-region-text,#cart-icon-bubble',Ap=n(t=>(0,pa.debounce)(100,!1,function(e){let{id:r}=Object.fromEntries([...new FormData(e).entries()]);r?t.setAttribute("product",r):t.removeAttribute("product")}),"makeSyncProductId");async function Np(){var r,o;let t=(o=(r=window.Shopify)==null?void 0:r.currency)==null?void 0:o.active;return t||(await yn()).currency}n(Np,"getCurrency");async function Ip(t,e){let r=kp(e);if(r)try{let[i,s]=await Promise.all([ua(r),Np()]),a={product:i,offer:e,currency:s};t.dispatch({type:K,payload:a})}catch(i){console.warn("OG: Unable to fetch product details for PDP",i)}let o=e.closest("form");if(!o){let i=e.parentElement;for(;i&&(o=i.querySelector('form[action$="/cart/add"]'),!(o||i.tagName.toLowerCase()==="body"));)i=i.parentElement}if(o){let i=Ap(e);o.addEventListener("change",()=>i(o)),new MutationObserver(()=>i(o)).observe(o,{subtree:!0,childList:!0})}else console.info("no /cart/add form found for og-offer",e)}n(Ip,"setupPdp");async function yn(){return(await fetch(Tp)).json()}n(yn,"getCart");function kp(t){return[()=>t==null?void 0:t.dataset.shopifyProductHandle,()=>{var e,r;return(((r=(e=document.querySelector('[href$=".oembed"]'))==null?void 0:e.getAttribute("href"))==null?void 0:r.match(/\/([^/]+)\.oembed$/))||[])[1]},()=>{var e,r;return(document.querySelector('meta[property="og:type"][content="product"]')&&((r=(e=document.querySelector('meta[property="og:url"][content]'))==null?void 0:e.getAttribute("content"))==null?void 0:r.match(/\/([^/]+)$/))||[])[1]},()=>{var e;return(e=[...document.querySelectorAll("[type$=json]")].map(r=>JSON.parse(r.textContent||"{}")).find(r=>r.handle&&r.price))==null?void 0:e.handle}].reduce((e,r)=>e||r(),"")}n(kp,"guessProductHandle");var ua=(0,la.default)(async function(t){return(await fetch(`${Cp}${t}.js`)).json()});async function qp(t,e){let r=await yn(),{items:o}=r,i=r;t.dispatch({type:ue,payload:i});let s=Number(e.product.id);s<=o.length&&e.setAttribute("product",o[s-1].key),(await Promise.all(Array.from(new Set(o.map(({handle:c})=>c))).map(ua))).forEach(c=>{let l={product:c,offer:e,currency:r.currency};t.dispatch({type:K,payload:l})})}n(qp,"setupCart");async function Dp(t,e){var s,a;let r=t.payload.offer,o=t.payload.frequency||Jr(t.payload.product.id,e),i=mn(t);if(!!(r!=null&&r.isCart))try{r.style.pointerEvents="none",r.style.opacity=".7";let c=Array.from(document.querySelectorAll(Rp)),l=t.payload.product.id,p=await yn(),f=(s=p==null?void 0:p.items)==null?void 0:s.findIndex(C=>C.key===l),u=p.items[f],h=u.quantity,b=x(l),S=await fetch(wp,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l,quantity:h,attributes:Object.fromEntries([i]),properties:u.properties,selling_plan:o||null,sections:c.map(C=>C.id.replace(/^shopify-section-/,""))})});if(S.status!==200)throw new Error("Cart not updated");let m=await S.json(),E=p.items.length===m.items.length?m.items[f].key:(a=m.items.find(C=>C.quantity===h&&C.product_id===b&&(!o&&!C.selling_plan_allocation||(C==null?void 0:C.selling_plan_allocation.selling_plan.id)===o)))==null?void 0:a.key;E&&(e.dispatch({type:ht,payload:{oldCartProductKey:l,newCartProductKey:E}}),r.setAttribute("product",E));let T=m;e.dispatch({type:ue,payload:T});let _=new CustomEvent(Vn,{bubbles:!0,cancelable:!0});if(r.dispatchEvent(_),_.defaultPrevented)return;let w=m.sections;Object.values(w).length?c.forEach(C=>{let _n=C.id.replace(/^shopify-section-/,"");if(!(_n in w))return;let ya=w[_n],Sn=new DOMParser().parseFromString(ya.toString()||"","text/html").getElementById(C.id);Sn&&(C.innerHTML=Sn.innerHTML)}):window.location.pathname.startsWith(Pp)&&window.location.reload()}catch(c){console.log("OG Error updating cart",c)}finally{r.style.pointerEvents="auto",r.style.opacity="1"}}n(Dp,"synchronizeCartOptin");function mn(t){var a,c;let e=t.payload.product.id;if(!e)return[];let r=fn(),o=((a=t.payload.offer)==null?void 0:a.location)||"",i=((c=t.payload.offer)==null?void 0:c.variationId)||"",s=[e,t.type.toLowerCase(),o];switch(t.type){case J:case I:s.push(""),s.push(i);break;case R:case k:s.push(t.payload.frequency),s.push(i);break;default:return[]}return[r,s.join(",")]}n(mn,"getTrackingEvent");function Jr(t,e){var i;return(i=ar({id:t})(e.getState()))==null?void 0:i.frequency}n(Jr,"getSubscribedFrequency");function Fp(t,e){e.isCart||!e.shouldEnableOffer||[...document.querySelectorAll('form[action$="/cart/add"] [name=id]')].forEach(r=>{let o=r.value,i=Jr(o,t);ii(r.form,"selling_plan",i)})}n(Fp,"synchronizeSellingPlan");function bn(t){return e=>r=>{var o;switch(r.type){case R:case I:case k:break;case J:(o=r.payload.offer)!=null&&o.isCart?qp(t,r.payload.offer):Ip(t,r.payload.offer);break;default:}switch(e(r),r.type){case R:case I:case k:case ie:Dp(r,t);case J:case P:case K:Fp(t,r.payload.offer);break;default:}}}n(bn,"shopifyMiddleware");var Up="/apps/subscriptions/auth/",da="og_auth_begin",Lp="og_auth_end",Mp=n(t=>{let[e,r,o,i]=atob(t).split("|");return{id:e,signature:o,timestamp:r,email:i}},"parseIntegrationTempAuth");async function fa({store:t}){var i;let[e]=po(),r=vt(),o=r!=null&&r.dataset.customer?Mp(r.dataset.customer):(i=window.ogShopifyConfig)==null?void 0:i.customer;if(o){let s=await Vp(o);if(s){let[a,c,l]=s.split("|");t.dispatch(Tt(e,a,Number(c),l))}}else oi("og_auth")}n(fa,"authorizeShopifyCustomer");async function $p(t){try{let r=await(await fetch(`${Up}?customer=${t.id}&customer_signature=${t.signature}&customer_timestamp=${t.timestamp}`)).text(),o=r.lastIndexOf(da);if(o<0)throw"Invalid response from OG auth endpoint";return JSON.parse(r.substring(o+da.length,r.lastIndexOf(Lp)))}catch(e){console.error(e)}}n($p,"fetchOGSignature");async function Vp(t){let e=ni("og_auth");if(e)return e;let{customerId:r,timestamp:o,signature:i}=await $p(t);if(!r)return"";let s=new Date,a=btoa(i);s.setTime(s.getTime()+2*60*60*1e3);let c=`${r}|${o}|${a};expires=${s.toUTCString()}`;return document.cookie=`og_auth=${c};secure;path=/`,c}n(Vp,"getOrCreateAuthCookie");var ha,ga=qi(...(ha=q)!=null&&ha.shopify_selling_plans?[dn,bn]:[Gr],q.shopify&&hn),O=ln(ga),jp=O.isReady,Hp=O.addOptinChangedCallback,Gp=O.addTemplate,Bp=O.clear,zp=O.config,Yp=O.disableOptinChangedCallbacks,Wp=O.getOptins,Jp=O.getProductsForPurchasePost,Kp=O.initialize,Qp=O.previewMode,Zp=O.register,Xp=O.resolveSettings,eu=O.setAuthUrl,tu=O.setEnvironment,ru=O.setLocale,ou=O.setMerchantId,nu=O.setPublicPath,iu=O.setTemplates,su=O.setupCart,au=O.setupProduct,cu=O.setupProducts,lu=n(()=>ri(O),"autoInit");var pu=O.initialize,ma;(ma=q)!=null&&ma.shopify_selling_plans&&lr(()=>fa(O));return va(uu);})();
; return lib; });
//# sourceMappingURL=offers.js.map

var og=window.og||{};og.offers=og.offers||"undefined"!=typeof module&&module.exports,og.offers.initialize("986dccf46be411ebaadb26088a73eb74","prod","/s/BathAndBodyWorks/authiframe",{currency_code:"USD",multicurrency_enabled:!1}).setTemplates([{id:"21427611",markup:'<og-when class="subscription-details" test="regularEligible">\r\n  <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase">New</span> Auto Refresh\r\n \r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="trigger"><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n      \t\t\t<li>Got 25% off regular price and free shipping with $20 of Auto Refresh products</li>\r\n      \t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n      \t\t\t<li>Receive email reminders before each shipment</li>\r\n      \t\t\t<li>Cancel any time</li>\r\n      \t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n      \t\t\tBy clicking “Submit Order,” you authorize Bath & Body Works to automatically renew the Auto Refresh item(s) designated in your cart at the frequency selected and in an amount that is 25% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $20 after discount), to the payment method provided, until you cancel. Your subscription begins when you click ‘Submit Order’ and you will be automatically charged each time when your item(s) ships. You understand that you can cancel your order any time by visiting <a href="https://www.bathandbodyworks.com/my-account/my-auto-refresh">My Auto Refresh</a> and that you must cancel my order at least one day before the next scheduled shipment in order to cancel that shipment.  You understand that Bath & Body Works can increase the price of the Auto Refresh items at any time and will notify you of price increases via email. See <a href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html#auto-refresh">Auto Refresh Subscription Terms</a> for full details.\r\n      \t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  \r\n  <p class="offer-text">\r\n   Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $20 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n  \r\n    <og-select-frequency class="dropdown" id="myselect">\r\n     \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n      \r\n    </og-select-frequency>\r\n</p>\r\n</og-when>\r\n<og-when test="upsellEligible">\r\n   <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase"></span> Auto Refresh\r\n\r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="trigger"><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n      \t\t\t<li>Got 25% off regular price and free shipping with $20 of Auto Refresh products</li>\r\n      \t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n      \t\t\t<li>Receive email reminders before each shipment</li>\r\n      \t\t\t<li>Cancel any time</li>\r\n      \t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n      \t\t\tBy clicking “Submit Order,” you authorize Bath & Body Works to automatically renew the Auto Refresh item(s) designated in your cart at the frequency selected and in an amount that is 25% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $20 after discount), to the payment method provided, until you cancel. Your subscription begins when you click ‘Submit Order’ and you will be automatically charged each time when your item(s) ships. You understand that you can cancel your order any time by visiting <a href="https://www.bathandbodyworks.com/my-account/my-auto-refresh">My Auto Refresh</a> and that you must cancel my order at least one day before the next scheduled shipment in order to cancel that shipment.  You understand that Bath & Body Works can increase the price of the Auto Refresh items at any time and will notify you of price increases via email. See <a href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html#auto-refresh">Auto Refresh Subscription Terms</a> for full details.\r\n      \t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  \r\n  <p class="offer-text">\r\n   Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $20 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n  \r\n    <og-select-frequency class="dropdown" id="myselect">\r\n    \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n      \r\n    </og-select-frequency>\r\n</p>\r\n\r\n</og-when>',selector:'[location="cart"]'},{id:"21bfa0ce",markup:'<og-when class="subscription-details" test="regularEligible">\r\n  <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle non-upsell">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase">New</span> Auto Refresh\r\n\r\n  \r\n  <og-tooltip placement="left" class="og-tooltip" title="tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n\t\t\t<li>Get 25% off regular price and free shipping with $20 of Auto Refresh products</li>\r\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n\t\t\t<li>Receive email reminders before each shipment</li>\r\n\t\t\t<li>Cancel any time</li>\r\n\t\t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n      \t\t\tBy clicking “Submit Order,” you authorize Bath & Body Works to automatically renew the Auto Refresh item(s) designated in your cart at the frequency selected and in an amount that is 25% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $20 after discount), to the payment method provided, until you cancel. Your subscription begins when you click ‘Submit Order’ and you will be automatically charged each time when your item(s) ships. You understand that you can cancel your order any time by visiting <a href="https://www.bathandbodyworks.com/my-account/my-auto-refresh">My Auto Refresh</a> and that you must cancel my order at least one day before the next scheduled shipment in order to cancel that shipment.  You understand that Bath & Body Works can increase the price of the Auto Refresh items at any time and will notify you of price increases via email. See <a href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html#auto-refresh">Auto Refresh Subscription Terms</a> for full details.\r\n      \t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  \r\n  <p class="offer-text">Get 25% off regular price and free shipping with $20 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n   \r\n    <og-select-frequency class="dropdown" id="myselect">\r\n   \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n      \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>\r\n\r\n<og-when test="upsellEligible">\r\n     <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase"></span> Auto Refresh\r\n \r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.</span>\r\n  </og-tooltip>\r\n  <p class="offer-text"><og-incentive-text from="DiscountPercent"></og-incentive-text>Get 25% off regular price and free shipping with $20 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n    <og-select-frequency class="dropdown">\r\n    \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n     \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>',selector:'[location="pdp"]'},{id:"07ab9709",markup:'<og-when test="subscribed">\n    <span class = "frequency_indicator"><span>Sending</span>  <span style="font-weight:bold; color:#000000"> every</span>\n    <og-frequency-status></og-frequency-status>\n</og-when>',selector:'[location="mini-cart"]'},{id:"ca9bc0dd",markup:'<og-when class="subscription-details" test="regularEligible">\r\n  <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase">New</span> Auto Refresh\r\n \r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="trigger"><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n\t\t\t<li>Get 25% off regular price and free shipping with $20 of Auto Refresh products</li>\r\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n\t\t\t<li>Receive email reminders before each shipment</li>\r\n\t\t\t<li>Cancel any time</li>\r\n\t\t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n      \t\t\tBy clicking “Submit Order,” you authorize Bath & Body Works to automatically renew the Auto Refresh item(s) designated in your cart at the frequency selected and in an amount that is 25% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $20 after discount), to the payment method provided, until you cancel. Your subscription begins when you click ‘Submit Order’ and you will be automatically charged each time when your item(s) ships. You understand that you can cancel your order any time by visiting <a href="https://www.bathandbodyworks.com/my-account/my-auto-refresh">My Auto Refresh</a> and that you must cancel my order at least one day before the next scheduled shipment in order to cancel that shipment.  You understand that Bath & Body Works can increase the price of the Auto Refresh items at any time and will notify you of price increases via email. See <a href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html#auto-refresh">Auto Refresh Subscription Terms</a> for full details.\r\n      \t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  <p class="offer-text">Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $20 of Auto Refresh products</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every\r\n   \r\n    <og-select-frequency class="dropdown">\r\n   \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n     \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>\r\n<og-when test="upsellEligible">\r\n    <og-when test="u0021upcomingOrderContainsProduct">\r\n        Add to upcoming subscription order and receive 25% off\r\n        <og-upsell-button>\r\n            <button type="button">\r\n                Add to Next Order on \r\n                <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n                    </og-nextupcoming-order>\r\n            </button>\r\n        </og-upsell-button>\r\n\r\n        <og-upsell-modal>\r\n            Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.\r\n            <br />\r\n            <og-when test="subscriptionEligible">\r\n              <og-optout-button>\r\n                  Get one-time\r\n              </og-optout-button>\r\n              <br />\r\n              <og-optin-button>\r\n                  Subscribe and get 25% off on every order\r\n              </og-optin-button>\r\n              Ships Every: \r\n              <og-select-frequency default-text="Recommended">\r\n       \r\n          <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n          <option value="6_3">6 Months</option>\r\n\r\n          \r\n              </og-select-frequency>\r\n            </og-when>\r\n            <og-when test="u0021subscriptionEligible">\r\n              You will receive this item in your next order on <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \r\n            </og-when>\r\n            <br />\r\n            <span slot="confirm">\r\n                <button type="button">Add</button>\r\n            </span>\r\n            <span slot="cancel">\r\n                <button type="button">Cancel</button>\r\n            </span>\r\n        </og-upsell-modal>\r\n    </og-when>\r\n\r\n    <og-when test="upcomingOrderContainsProduct">\r\n       You will receive this item in your next order on <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n        </og-nextupcoming-order>\r\n    </og-when>\r\n</og-when>',selector:'[location="quicklook"]'},{id:"7fab7330",markup:'<og-when test="regularEligible">\r\n    <p><og-optout-button>\r\n    Deliver one-time only\r\n</og-optout-button></p>\r\n    <p>\r\n        <og-optin-button>\r\n            Subscribe and Save <og-incentive-text from="DiscountPercent"></og-incentive-text> + FREE Shipping\r\n        </og-optin-button>        <og-tooltip placement="top" >\r\n            <span slot="trigger">info</span>\r\n            <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.</span>\r\n        </og-tooltip>\r\n    </p>\r\n    <p style="margin-left: 1.5em">\r\n        Ships Every: \r\n        <og-select-frequency default-text="recommended">\r\n          <option value="1_3" selected="selected"\r\n            >\r\n            1 month\r\n          </option>\r\n          <option value="2_3" >\r\n            2 months\r\n          </option>\r\n          <option value="3_3" >\r\n            3 months\r\n          </option>\r\n          <option value="4_3" >\r\n            4 months\r\n          </option>\r\n          <option value="5_3" >\r\n            5 months\r\n          </option>\r\n          <option value="6_3" >\r\n            6 months\r\n          </option>\r\n        </og-select-frequency>\r\n    </p>\r\n</og-when>\r\n<og-when test="upsellEligible">\r\n    <og-when test="!upcomingOrderContainsProduct">\r\n        Add to upcoming subscription order and receive 25% off\r\n        <og-upsell-button>\r\n            <button type="button">\r\n                Add to Next Order on \r\n                <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n                    </og-nextupcoming-order>\r\n            </button>\r\n        </og-upsell-button>\r\n\r\n        <og-upsell-modal>\r\n            Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.\r\n            <br />\r\n            <og-when test="subscriptionEligible">\r\n              <og-optout-button>\r\n                  Get one-time\r\n              </og-optout-button>\r\n              <br />\r\n              <og-optin-button>\r\n                  Subscribe and get 10% off on every order\r\n              </og-optin-button>\r\n              Ships Every: \r\n              <og-select-frequency default-text="recommended">\r\n                <option value="1_3" selected="selected"\r\n                  >\r\n                  1 month\r\n                </option>\r\n                <option value="2_3" >\r\n                  2 months\r\n                </option>\r\n                <option value="3_3" >\r\n                  3 months\r\n                </option>\r\n                <option value="4_3" >\r\n                  4 months\r\n                </option>\r\n                <option value="5_3" >\r\n                  5 months\r\n                </option>\r\n                <option value="6_3" >\r\n                  6 months\r\n                </option>\r\n              </og-select-frequency>\r\n            </og-when>\r\n            <og-when test="!subscriptionEligible">\r\n              <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \r\n            </og-when>\r\n            <br />\r\n            <span slot="confirm">\r\n                <button type="button">Add</button>\r\n            </span>\r\n            <span slot="cancel">\r\n                <button type="button"></button>\r\n            </span>\r\n        </og-upsell-modal>\r\n    </og-when>\r\n\r\n    <og-when test="upcomingOrderContainsProduct">\r\n       <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n        </og-nextupcoming-order>\r\n    </og-when>\r\n</og-when>',selector:"og-offer"}]).setPublicPath("//static.ordergroove.com/@ordergroove/offers/2.37.1/dist/"),function(n){const o=n.createElement("style");o.type="text/css",o.appendChild(n.createTextNode('[location="cart"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 7.2em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n[location="cart"] .og-tooltip-content {\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 268px;\n  height: 347px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -137px;\n  top: -168px;\n  position: absolute;\n}\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="cart"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="cart"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="cart"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="cart"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="cart"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="cart"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="cart"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="cart"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="cart"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="cart"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="cart"] .dropdown {\n  width: 163px;\n  border-radius:0px;\n  margin-left: 10px;\n}\n[location="pdp"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n/*--og-tooltip-background: none;*/\n/*--og-tooltip-box-shadow: none;*/\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 6.1em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n[location="pdp"] .scrollbar-hidden::-webkit-scrollbar {\n  display: none;\n}\n\n[location="pdp"] .og-tooltip-content {\n  /*pointer-events:none;*/\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  min-width: 285px;\n  width:100%;\n  width: 415px;\n  height: 490px;\n  background: #fff;\n  box-shadow: 5px 5px 5px #dedede;\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -283px;\n  top: -275px;\n  position: absolute;\n  display: none;\n}\n\n[location="pdp"] .og-tooltip:hover .og-tooltip-content {\n    display: block;\n}\n\n@media (max-width: 767px) {\n[location="pdp"] .og-tooltip-content {\n  /*pointer-events:none;*/\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 273px u0021important;\n  height: 685px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  /*overflow: scroll;*/\n  left: -92px u0021important;\n  top: -275px;\n  position: absolute;\n}  \n  \n}\n\n\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="pdp"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="pdp"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="pdp"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="pdp"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="pdp"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="pdp"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="pdp"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="pdp"] .dropdown {\n  width: 163px;\n  border-radius:0px;\n  margin-left: 10px;\n}\n\n[location="pdp"] [location="pdp"] .og-tooltip-content {\n    /*left: -40%;*/\n    /*top: auto;*/\n    /*position: absolute;*/\n    /*width: 250px;*/\n    left: -135px u0021important;\n}\n@media only screen and (min-width: 320px) and (max-width: 479px) {\n  [location="pdp"] {\n    --og-tooltip-background: none;\n    --og-tooltip-box-shadow: none;\n  }  \n}    \n\n[location="mini-cart"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-wrapper-padding: 0;\n}\n\n[location="mini-cart"] og-frequency-status {\n  font-weight: bold;\n}\n\n[location="quicklook"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 7.2em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n\n[location="quicklook"] .og-tooltip-content {\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 268px;\n  height: 347px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -137px;\n  top: -168px;\n  position: absolute;\n}\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="quicklook"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="quicklook"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="quicklook"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="quicklook"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="quicklook"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="quicklook"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="quicklook"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="quicklook"] .dropdown {\n  width: 173px;\n  border-radius:0px;\n  margin-left: 10px;\n}\nog-offer {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: top;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-wrapper-padding: 0;\n}')),n.head.appendChild(o)}(document),(window.location.hash.includes("og_quick_action=")||window.location.search.includes("og_quick_action="))&&function(n){const o=n.createElement("script");o.type="text/javascript",o.src="//static.ordergroove.com/986dccf46be411ebaadb26088a73eb74/oca.js?",n.head.appendChild(o)}(document);return module.exports;});
//# sourceMappingURL=offers.js.map?v=2.37.1