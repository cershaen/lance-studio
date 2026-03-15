(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var yd={exports:{}},Ia={},Sd={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function iT(){if(lv)return gt;lv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(U,q,Re){this.props=U,this.context=q,this.refs=T,this.updater=Re||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(U,q,Re){this.props=U,this.context=q,this.refs=T,this.updater=Re||S}var b=C.prototype=new _;b.constructor=C,M(b,y.prototype),b.isPureReactComponent=!0;var P=Array.isArray,L=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(U,q,Re){var Xe,Qe={},se=null,ge=null;if(q!=null)for(Xe in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(se=""+q.key),q)L.call(q,Xe)&&!O.hasOwnProperty(Xe)&&(Qe[Xe]=q[Xe]);var me=arguments.length-2;if(me===1)Qe.children=Re;else if(1<me){for(var Oe=Array(me),Ge=0;Ge<me;Ge++)Oe[Ge]=arguments[Ge+2];Qe.children=Oe}if(U&&U.defaultProps)for(Xe in me=U.defaultProps,me)Qe[Xe]===void 0&&(Qe[Xe]=me[Xe]);return{$$typeof:n,type:U,key:se,ref:ge,props:Qe,_owner:N.current}}function D(U,q){return{$$typeof:n,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function ce(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function B(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Re){return q[Re]})}var ee=/\/+/g;function Q(U,q){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):q.toString(36)}function fe(U,q,Re,Xe,Qe){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(se){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case n:case e:ge=!0}}if(ge)return ge=U,Qe=Qe(ge),U=Xe===""?"."+Q(ge,0):Xe,P(Qe)?(Re="",U!=null&&(Re=U.replace(ee,"$&/")+"/"),fe(Qe,q,Re,"",function(Ge){return Ge})):Qe!=null&&(ce(Qe)&&(Qe=D(Qe,Re+(!Qe.key||ge&&ge.key===Qe.key?"":(""+Qe.key).replace(ee,"$&/")+"/")+U)),q.push(Qe)),1;if(ge=0,Xe=Xe===""?".":Xe+":",P(U))for(var me=0;me<U.length;me++){se=U[me];var Oe=Xe+Q(se,me);ge+=fe(se,q,Re,Oe,Qe)}else if(Oe=g(U),typeof Oe=="function")for(U=Oe.call(U),me=0;!(se=U.next()).done;)se=se.value,Oe=Xe+Q(se,me++),ge+=fe(se,q,Re,Oe,Qe);else if(se==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function K(U,q,Re){if(U==null)return U;var Xe=[],Qe=0;return fe(U,Xe,"","",function(se){return q.call(Re,se,Qe++)}),Xe}function ie(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(Re){(U._status===0||U._status===-1)&&(U._status=1,U._result=Re)},function(Re){(U._status===0||U._status===-1)&&(U._status=2,U._result=Re)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var H={current:null},$={transition:null},re={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:$,ReactCurrentOwner:N};function ue(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:K,forEach:function(U,q,Re){K(U,function(){q.apply(this,arguments)},Re)},count:function(U){var q=0;return K(U,function(){q++}),q},toArray:function(U){return K(U,function(q){return q})||[]},only:function(U){if(!ce(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=C,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,gt.act=ue,gt.cloneElement=function(U,q,Re){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Xe=M({},U.props),Qe=U.key,se=U.ref,ge=U._owner;if(q!=null){if(q.ref!==void 0&&(se=q.ref,ge=N.current),q.key!==void 0&&(Qe=""+q.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(Oe in q)L.call(q,Oe)&&!O.hasOwnProperty(Oe)&&(Xe[Oe]=q[Oe]===void 0&&me!==void 0?me[Oe]:q[Oe])}var Oe=arguments.length-2;if(Oe===1)Xe.children=Re;else if(1<Oe){me=Array(Oe);for(var Ge=0;Ge<Oe;Ge++)me[Ge]=arguments[Ge+2];Xe.children=me}return{$$typeof:n,type:U.type,key:Qe,ref:se,props:Xe,_owner:ge}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},gt.createElement=w,gt.createFactory=function(U){var q=w.bind(null,U);return q.type=U,q},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:c,render:U}},gt.isValidElement=ce,gt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:ie}},gt.memo=function(U,q){return{$$typeof:h,type:U,compare:q===void 0?null:q}},gt.startTransition=function(U){var q=$.transition;$.transition={};try{U()}finally{$.transition=q}},gt.unstable_act=ue,gt.useCallback=function(U,q){return H.current.useCallback(U,q)},gt.useContext=function(U){return H.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return H.current.useDeferredValue(U)},gt.useEffect=function(U,q){return H.current.useEffect(U,q)},gt.useId=function(){return H.current.useId()},gt.useImperativeHandle=function(U,q,Re){return H.current.useImperativeHandle(U,q,Re)},gt.useInsertionEffect=function(U,q){return H.current.useInsertionEffect(U,q)},gt.useLayoutEffect=function(U,q){return H.current.useLayoutEffect(U,q)},gt.useMemo=function(U,q){return H.current.useMemo(U,q)},gt.useReducer=function(U,q,Re){return H.current.useReducer(U,q,Re)},gt.useRef=function(U){return H.current.useRef(U)},gt.useState=function(U){return H.current.useState(U)},gt.useSyncExternalStore=function(U,q,Re){return H.current.useSyncExternalStore(U,q,Re)},gt.useTransition=function(){return H.current.useTransition()},gt.version="18.3.1",gt}var uv;function Xp(){return uv||(uv=1,Sd.exports=iT()),Sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function rT(){if(cv)return Ia;cv=1;var n=Xp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:c,key:g,ref:S,props:v,_owner:o.current}}return Ia.Fragment=t,Ia.jsx=u,Ia.jsxs=u,Ia}var fv;function sT(){return fv||(fv=1,yd.exports=rT()),yd.exports}var k=sT(),Cu={},Md={exports:{}},Wn={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function oT(){return dv||(dv=1,(function(n){function e($,re){var ue=$.length;$.push(re);e:for(;0<ue;){var U=ue-1>>>1,q=$[U];if(0<o(q,re))$[U]=re,$[ue]=q,ue=U;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var re=$[0],ue=$.pop();if(ue!==re){$[0]=ue;e:for(var U=0,q=$.length,Re=q>>>1;U<Re;){var Xe=2*(U+1)-1,Qe=$[Xe],se=Xe+1,ge=$[se];if(0>o(Qe,ue))se<q&&0>o(ge,Qe)?($[U]=ge,$[se]=ue,U=se):($[U]=Qe,$[Xe]=ue,U=Xe);else if(se<q&&0>o(ge,ue))$[U]=ge,$[se]=ue,U=se;else break e}}return re}function o($,re){var ue=$.sortIndex-re.sortIndex;return ue!==0?ue:$.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,v=null,g=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var re=t(h);re!==null;){if(re.callback===null)r(h);else if(re.startTime<=$)r(h),re.sortIndex=re.expirationTime,e(d,re);else break;re=t(h)}}function P($){if(T=!1,b($),!M)if(t(d)!==null)M=!0,ie(L);else{var re=t(h);re!==null&&H(P,re.startTime-$)}}function L($,re){M=!1,T&&(T=!1,_(w),w=-1),S=!0;var ue=g;try{for(b(re),v=t(d);v!==null&&(!(v.expirationTime>re)||$&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var q=U(v.expirationTime<=re);re=n.unstable_now(),typeof q=="function"?v.callback=q:v===t(d)&&r(d),b(re)}else r(d);v=t(d)}if(v!==null)var Re=!0;else{var Xe=t(h);Xe!==null&&H(P,Xe.startTime-re),Re=!1}return Re}finally{v=null,g=ue,S=!1}}var N=!1,O=null,w=-1,D=5,ce=-1;function B(){return!(n.unstable_now()-ce<D)}function ee(){if(O!==null){var $=n.unstable_now();ce=$;var re=!0;try{re=O(!0,$)}finally{re?Q():(N=!1,O=null)}}else N=!1}var Q;if(typeof C=="function")Q=function(){C(ee)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,K=fe.port2;fe.port1.onmessage=ee,Q=function(){K.postMessage(null)}}else Q=function(){y(ee,0)};function ie($){O=$,N||(N=!0,Q())}function H($,re){w=y(function(){$(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,ie(L))},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function($){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var ue=g;g=re;try{return $()}finally{g=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function($,re){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ue=g;g=$;try{return re()}finally{g=ue}},n.unstable_scheduleCallback=function($,re,ue){var U=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,$){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ue+q,$={id:p++,callback:re,priorityLevel:$,startTime:ue,expirationTime:q,sortIndex:-1},ue>U?($.sortIndex=ue,e(h,$),t(d)===null&&$===t(h)&&(T?(_(w),w=-1):T=!0,H(P,ue-U))):($.sortIndex=q,e(d,$),M||S||(M=!0,ie(L))),$},n.unstable_shouldYield=B,n.unstable_wrapCallback=function($){var re=g;return function(){var ue=g;g=re;try{return $.apply(this,arguments)}finally{g=ue}}}})(Td)),Td}var hv;function aT(){return hv||(hv=1,Ed.exports=oT()),Ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function lT(){if(pv)return Wn;pv=1;var n=Xp(),e=aT();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function S(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||S(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,l,f,m,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(_,C);y[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(_,C);y[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(_,C);y[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,f){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),B=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),$=Symbol.iterator;function re(i){return i===null||typeof i!="object"?null:(i=$&&i[$]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,U;function q(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Re=!1;function Xe(i,s){if(!i||Re)return"";Re=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var f=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){f=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),x=f.stack.split(`
`),A=m.length-1,F=x.length-1;1<=A&&0<=F&&m[A]!==x[F];)F--;for(;1<=A&&0<=F;A--,F--)if(m[A]!==x[F]){if(A!==1||F!==1)do if(A--,F--,0>F||m[A]!==x[F]){var V=`
`+m[A].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=A&&0<=F);break}}}finally{Re=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function Qe(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Xe(i.type,!1),i;case 11:return i=Xe(i.type.render,!1),i;case 1:return i=Xe(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case N:return"Portal";case D:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case ce:return(i._context.displayName||"Context")+".Provider";case ee:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case K:return s=i.displayName||null,s!==null?s:se(i.type)||"Memo";case ie:s=i._payload,i=i._init;try{return se(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function it(i){i._valueTracker||(i._valueTracker=Ge(i))}function Zt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Oe(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function mt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function St(i,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function bt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function Bt(i,s){ft(i,s);var l=me(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ht(i,s.type,l):s.hasOwnProperty("defaultValue")&&Ht(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function z(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ht(i,s,l){(s!=="number"||mt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var vt=Array.isArray;function Mt(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function We(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function I(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:me(l)}}function E(i,s){var l=me(s.value),f=me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function j(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Be=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(i){rt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),qe[s]=qe[i]})});function Se(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||qe.hasOwnProperty(i)&&qe[i]?(""+s).trim():s+"px"}function we(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Se(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var je=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(i,s){if(s){if(je[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,Ee=null,Ie=null;function Me(i){if(i=xa(i)){if(typeof Ce!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Hl(s),Ce(i.stateNode,i.type,s))}}function he(i){Ee?Ie?Ie.push(i):Ie=[i]:Ee=i}function ze(){if(Ee){var i=Ee,s=Ie;if(Ie=Ee=null,Me(i),s)for(i=0;i<s.length;i++)Me(s[i])}}function ot(i,s){return i(s)}function Lt(){}var Et=!1;function ii(i,s,l){if(Et)return i(s,l);Et=!0;try{return ot(i,s,l)}finally{Et=!1,(Ee!==null||Ie!==null)&&(Lt(),ze())}}function Pn(i,s){var l=i.stateNode;if(l===null)return null;var f=Hl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var js=!1;if(c)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){js=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{js=!1}function zc(i,s,l,f,m,x,A,F,V){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(_e){this.onError(_e)}}var Pr=!1,fs=null,ri=!1,ds=null,yl={onError:function(i){Pr=!0,fs=i}};function Sl(i,s,l,f,m,x,A,F,V){Pr=!1,fs=null,zc.apply(yl,arguments)}function Xs(i,s,l,f,m,x,A,F,V){if(Sl.apply(this,arguments),Pr){if(Pr){var ae=fs;Pr=!1,fs=null}else throw Error(t(198));ri||(ri=!0,ds=ae)}}function Ui(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function hs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ea(i){if(Ui(i)!==i)throw Error(t(188))}function Ml(i){var s=i.alternate;if(!s){if(s=Ui(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return ea(m),i;if(x===f)return ea(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var A=!1,F=m.child;F;){if(F===l){A=!0,l=m,f=x;break}if(F===f){A=!0,f=m,l=x;break}F=F.sibling}if(!A){for(F=x.child;F;){if(F===l){A=!0,l=x,f=m;break}if(F===f){A=!0,f=x,l=m;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function El(i){return i=Ml(i),i!==null?Tl(i):null}function Tl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Tl(i);if(s!==null)return s;i=i.sibling}return null}var wl=e.unstable_scheduleCallback,Al=e.unstable_cancelCallback,Hc=e.unstable_shouldYield,Gc=e.unstable_requestPaint,R=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,Pe=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,be=null,Ne=null;function Ze(i){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(be,i,void 0,(i.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Pt,dt=Math.log,Je=Math.LN2;function Pt(i){return i>>>=0,i===0?32:31-(dt(i)/Je|0)|0}var Ot=64,Ut=4194304;function yt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Qt(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,x=i.pingedLanes,A=l&268435455;if(A!==0){var F=A&~m;F!==0?f=yt(F):(x&=A,x!==0&&(f=yt(x)))}else A=l&~m,A!==0?f=yt(A):x!==0&&(f=yt(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-et(s),m=1<<l,f|=i[l],s&=~m;return f}function $e(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var A=31-et(x),F=1<<A,V=m[A];V===-1?((F&l)===0||(F&f)!==0)&&(m[A]=$e(F,s)):V<=s&&(i.expiredLanes|=F),x&=~F}}function xt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function On(){var i=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),i}function kn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function qn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-et(s),i[s]=l}function Dr(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-et(l),x=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~x}}function Rt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-et(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var at=0;function xi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Jt,si,ir,ta,Wm,Wc=!1,Cl=[],Lr=null,Ir=null,Nr=null,na=new Map,ia=new Map,Fr=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(i,s){switch(i){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":na.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(s.pointerId)}}function ra(i,s,l,f,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=xa(s),s!==null&&si(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function AM(i,s,l,f,m){switch(s){case"focusin":return Lr=ra(Lr,i,s,l,f,m),!0;case"dragenter":return Ir=ra(Ir,i,s,l,f,m),!0;case"mouseover":return Nr=ra(Nr,i,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return na.set(x,ra(na.get(x)||null,i,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,ia.set(x,ra(ia.get(x)||null,i,s,l,f,m)),!0}return!1}function Xm(i){var s=ps(i.target);if(s!==null){var l=Ui(s);if(l!==null){if(s=l.tag,s===13){if(s=hs(l),s!==null){i.blockedOn=s,Wm(i.priority,function(){ir(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Rl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Xc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);ct=f,l.target.dispatchEvent(f),ct=null}else return s=xa(l),s!==null&&si(s),i.blockedOn=l,!1;s.shift()}return!0}function Ym(i,s,l){Rl(i)&&l.delete(s)}function CM(){Wc=!1,Lr!==null&&Rl(Lr)&&(Lr=null),Ir!==null&&Rl(Ir)&&(Ir=null),Nr!==null&&Rl(Nr)&&(Nr=null),na.forEach(Ym),ia.forEach(Ym)}function sa(i,s){i.blockedOn===s&&(i.blockedOn=null,Wc||(Wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,CM)))}function oa(i){function s(m){return sa(m,i)}if(0<Cl.length){sa(Cl[0],i);for(var l=1;l<Cl.length;l++){var f=Cl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Lr!==null&&sa(Lr,i),Ir!==null&&sa(Ir,i),Nr!==null&&sa(Nr,i),na.forEach(s),ia.forEach(s),l=0;l<Fr.length;l++)f=Fr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Fr.length&&(l=Fr[0],l.blockedOn===null);)Xm(l),l.blockedOn===null&&Fr.shift()}var Ys=P.ReactCurrentBatchConfig,bl=!0;function RM(i,s,l,f){var m=at,x=Ys.transition;Ys.transition=null;try{at=1,jc(i,s,l,f)}finally{at=m,Ys.transition=x}}function bM(i,s,l,f){var m=at,x=Ys.transition;Ys.transition=null;try{at=4,jc(i,s,l,f)}finally{at=m,Ys.transition=x}}function jc(i,s,l,f){if(bl){var m=Xc(i,s,l,f);if(m===null)cf(i,s,f,Pl,l),jm(i,f);else if(AM(m,i,s,l,f))f.stopPropagation();else if(jm(i,f),s&4&&-1<wM.indexOf(i)){for(;m!==null;){var x=xa(m);if(x!==null&&Jt(x),x=Xc(i,s,l,f),x===null&&cf(i,s,f,Pl,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else cf(i,s,f,null,l)}}var Pl=null;function Xc(i,s,l,f){if(Pl=null,i=G(f),i=ps(i),i!==null)if(s=Ui(i),s===null)i=null;else if(l=s.tag,l===13){if(i=hs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Pl=i,null}function $m(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case le:return 1;case ne:return 4;case J:case Pe:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var Ur=null,Yc=null,Dl=null;function qm(){if(Dl)return Dl;var i,s=Yc,l=s.length,f,m="value"in Ur?Ur.value:Ur.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var A=l-i;for(f=1;f<=A&&s[l-f]===m[x-f];f++);return Dl=m.slice(i,1<f?1-f:void 0)}function Ll(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Il(){return!0}function Km(){return!1}function Kn(i){function s(l,f,m,x,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Il:Km,this.isPropagationStopped=Km,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),s}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=Kn($s),aa=ue({},$s,{view:0,detail:0}),PM=Kn(aa),qc,Kc,la,Nl=ue({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==la&&(la&&i.type==="mousemove"?(qc=i.screenX-la.screenX,Kc=i.screenY-la.screenY):Kc=qc=0,la=i),qc)},movementY:function(i){return"movementY"in i?i.movementY:Kc}}),Zm=Kn(Nl),DM=ue({},Nl,{dataTransfer:0}),LM=Kn(DM),IM=ue({},aa,{relatedTarget:0}),Zc=Kn(IM),NM=ue({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),FM=Kn(NM),UM=ue({},$s,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),OM=Kn(UM),kM=ue({},$s,{data:0}),Qm=Kn(kM),BM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=zM[i])?!!s[i]:!1}function Qc(){return HM}var GM=ue({},aa,{key:function(i){if(i.key){var s=BM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ll(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?VM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(i){return i.type==="keypress"?Ll(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ll(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),WM=Kn(GM),jM=ue({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Kn(jM),XM=ue({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),YM=Kn(XM),$M=ue({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=Kn($M),KM=ue({},Nl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=Kn(KM),QM=[9,13,27,32],Jc=c&&"CompositionEvent"in window,ua=null;c&&"documentMode"in document&&(ua=document.documentMode);var JM=c&&"TextEvent"in window&&!ua,eg=c&&(!Jc||ua&&8<ua&&11>=ua),tg=" ",ng=!1;function ig(i,s){switch(i){case"keyup":return QM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qs=!1;function eE(i,s){switch(i){case"compositionend":return rg(s);case"keypress":return s.which!==32?null:(ng=!0,tg);case"textInput":return i=s.data,i===tg&&ng?null:i;default:return null}}function tE(i,s){if(qs)return i==="compositionend"||!Jc&&ig(i,s)?(i=qm(),Dl=Yc=Ur=null,qs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return eg&&s.locale!=="ko"?null:s.data;default:return null}}var nE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!nE[i.type]:s==="textarea"}function og(i,s,l,f){he(f),s=Bl(s,"onChange"),0<s.length&&(l=new $c("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var ca=null,fa=null;function iE(i){Tg(i,0)}function Fl(i){var s=eo(i);if(Zt(s))return i}function rE(i,s){if(i==="change")return s}var ag=!1;if(c){var ef;if(c){var tf="oninput"in document;if(!tf){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),tf=typeof lg.oninput=="function"}ef=tf}else ef=!1;ag=ef&&(!document.documentMode||9<document.documentMode)}function ug(){ca&&(ca.detachEvent("onpropertychange",cg),fa=ca=null)}function cg(i){if(i.propertyName==="value"&&Fl(fa)){var s=[];og(s,fa,i,G(i)),ii(iE,s)}}function sE(i,s,l){i==="focusin"?(ug(),ca=s,fa=l,ca.attachEvent("onpropertychange",cg)):i==="focusout"&&ug()}function oE(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Fl(fa)}function aE(i,s){if(i==="click")return Fl(s)}function lE(i,s){if(i==="input"||i==="change")return Fl(s)}function uE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:uE;function da(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!_i(i[m],s[m]))return!1}return!0}function fg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function dg(i,s){var l=fg(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fg(l)}}function hg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?hg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function pg(){for(var i=window,s=mt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=mt(i.document)}return s}function nf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function cE(i){var s=pg(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&hg(l.ownerDocument.documentElement,l)){if(f!==null&&nf(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!i.extend&&x>f&&(m=f,f=x,x=m),m=dg(l,x);var A=dg(l,f);m&&A&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>f?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var fE=c&&"documentMode"in document&&11>=document.documentMode,Ks=null,rf=null,ha=null,sf=!1;function mg(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;sf||Ks==null||Ks!==mt(f)||(f=Ks,"selectionStart"in f&&nf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ha&&da(ha,f)||(ha=f,f=Bl(rf,"onSelect"),0<f.length&&(s=new $c("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ks)))}function Ul(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Zs={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},of={},gg={};c&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Ol(i){if(of[i])return of[i];if(!Zs[i])return i;var s=Zs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in gg)return of[i]=s[l];return i}var vg=Ol("animationend"),xg=Ol("animationiteration"),_g=Ol("animationstart"),yg=Ol("transitionend"),Sg=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(i,s){Sg.set(i,s),a(s,[i])}for(var af=0;af<Mg.length;af++){var lf=Mg[af],dE=lf.toLowerCase(),hE=lf[0].toUpperCase()+lf.slice(1);Or(dE,"on"+hE)}Or(vg,"onAnimationEnd"),Or(xg,"onAnimationIteration"),Or(_g,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(yg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pE=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Eg(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Xs(f,s,void 0,i),i.currentTarget=null}function Tg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var A=f.length-1;0<=A;A--){var F=f[A],V=F.instance,ae=F.currentTarget;if(F=F.listener,V!==x&&m.isPropagationStopped())break e;Eg(m,F,ae),x=V}else for(A=0;A<f.length;A++){if(F=f[A],V=F.instance,ae=F.currentTarget,F=F.listener,V!==x&&m.isPropagationStopped())break e;Eg(m,F,ae),x=V}}}if(ri)throw i=ds,ri=!1,ds=null,i}function Vt(i,s){var l=s[gf];l===void 0&&(l=s[gf]=new Set);var f=i+"__bubble";l.has(f)||(wg(s,i,2,!1),l.add(f))}function uf(i,s,l){var f=0;s&&(f|=4),wg(l,i,f,s)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ma(i){if(!i[kl]){i[kl]=!0,r.forEach(function(l){l!=="selectionchange"&&(pE.has(l)||uf(l,!1,i),uf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[kl]||(s[kl]=!0,uf("selectionchange",!1,s))}}function wg(i,s,l,f){switch($m(s)){case 1:var m=RM;break;case 4:m=bM;break;default:m=jc}l=m.bind(null,s,l,i),m=void 0,!js||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function cf(i,s,l,f,m){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;A=A.return}for(;F!==null;){if(A=ps(F),A===null)return;if(V=A.tag,V===5||V===6){f=x=A;continue e}F=F.parentNode}}f=f.return}ii(function(){var ae=x,_e=G(l),ye=[];e:{var xe=Sg.get(i);if(xe!==void 0){var Fe=$c,He=i;switch(i){case"keypress":if(Ll(l)===0)break e;case"keydown":case"keyup":Fe=WM;break;case"focusin":He="focus",Fe=Zc;break;case"focusout":He="blur",Fe=Zc;break;case"beforeblur":case"afterblur":Fe=Zc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=YM;break;case vg:case xg:case _g:Fe=FM;break;case yg:Fe=qM;break;case"scroll":Fe=PM;break;case"wheel":Fe=ZM;break;case"copy":case"cut":case"paste":Fe=OM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Jm}var Ye=(s&4)!==0,en=!Ye&&i==="scroll",Z=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var W=ae,te;W!==null;){te=W;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,Z!==null&&(Te=Pn(W,Z),Te!=null&&Ye.push(ga(W,Te,te)))),en)break;W=W.return}0<Ye.length&&(xe=new Fe(xe,He,null,l,_e),ye.push({event:xe,listeners:Ye}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",xe&&l!==ct&&(He=l.relatedTarget||l.fromElement)&&(ps(He)||He[rr]))break e;if((Fe||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(He=l.relatedTarget||l.toElement,Fe=ae,He=He?ps(He):null,He!==null&&(en=Ui(He),He!==en||He.tag!==5&&He.tag!==6)&&(He=null)):(Fe=null,He=ae),Fe!==He)){if(Ye=Zm,Te="onMouseLeave",Z="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Ye=Jm,Te="onPointerLeave",Z="onPointerEnter",W="pointer"),en=Fe==null?xe:eo(Fe),te=He==null?xe:eo(He),xe=new Ye(Te,W+"leave",Fe,l,_e),xe.target=en,xe.relatedTarget=te,Te=null,ps(_e)===ae&&(Ye=new Ye(Z,W+"enter",He,l,_e),Ye.target=te,Ye.relatedTarget=en,Te=Ye),en=Te,Fe&&He)t:{for(Ye=Fe,Z=He,W=0,te=Ye;te;te=Qs(te))W++;for(te=0,Te=Z;Te;Te=Qs(Te))te++;for(;0<W-te;)Ye=Qs(Ye),W--;for(;0<te-W;)Z=Qs(Z),te--;for(;W--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=Qs(Ye),Z=Qs(Z)}Ye=null}else Ye=null;Fe!==null&&Ag(ye,xe,Fe,Ye,!1),He!==null&&en!==null&&Ag(ye,en,He,Ye,!0)}}e:{if(xe=ae?eo(ae):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var Ke=rE;else if(sg(xe))if(ag)Ke=lE;else{Ke=oE;var tt=sE}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=aE);if(Ke&&(Ke=Ke(i,ae))){og(ye,Ke,l,_e);break e}tt&&tt(i,xe,ae),i==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&Ht(xe,"number",xe.value)}switch(tt=ae?eo(ae):window,i){case"focusin":(sg(tt)||tt.contentEditable==="true")&&(Ks=tt,rf=ae,ha=null);break;case"focusout":ha=rf=Ks=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,mg(ye,l,_e);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":mg(ye,l,_e)}var nt;if(Jc)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else qs?ig(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(eg&&l.locale!=="ko"&&(qs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&qs&&(nt=qm()):(Ur=_e,Yc="value"in Ur?Ur.value:Ur.textContent,qs=!0)),tt=Bl(ae,lt),0<tt.length&&(lt=new Qm(lt,i,null,l,_e),ye.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=rg(l),nt!==null&&(lt.data=nt)))),(nt=JM?eE(i,l):tE(i,l))&&(ae=Bl(ae,"onBeforeInput"),0<ae.length&&(_e=new Qm("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:ae}),_e.data=nt))}Tg(ye,s)})}function ga(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Bl(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Pn(i,l),x!=null&&f.unshift(ga(i,x,m)),x=Pn(i,s),x!=null&&f.push(ga(i,x,m))),i=i.return}return f}function Qs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Ag(i,s,l,f,m){for(var x=s._reactName,A=[];l!==null&&l!==f;){var F=l,V=F.alternate,ae=F.stateNode;if(V!==null&&V===f)break;F.tag===5&&ae!==null&&(F=ae,m?(V=Pn(l,x),V!=null&&A.unshift(ga(l,V,F))):m||(V=Pn(l,x),V!=null&&A.push(ga(l,V,F)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var mE=/\r\n?/g,gE=/\u0000|\uFFFD/g;function Cg(i){return(typeof i=="string"?i:""+i).replace(mE,`
`).replace(gE,"")}function Vl(i,s,l){if(s=Cg(s),Cg(i)!==s&&l)throw Error(t(425))}function zl(){}var ff=null,df=null;function hf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(i){return Rg.resolve(null).then(i).catch(_E)}:pf;function _E(i){setTimeout(function(){throw i})}function mf(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),oa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);oa(s)}function kr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function bg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Js,va="__reactProps$"+Js,rr="__reactContainer$"+Js,gf="__reactEvents$"+Js,yE="__reactListeners$"+Js,SE="__reactHandles$"+Js;function ps(i){var s=i[Oi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[rr]||l[Oi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=bg(i);i!==null;){if(l=i[Oi])return l;i=bg(i)}return s}i=l,l=i.parentNode}return null}function xa(i){return i=i[Oi]||i[rr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function eo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Hl(i){return i[va]||null}var vf=[],to=-1;function Br(i){return{current:i}}function zt(i){0>to||(i.current=vf[to],vf[to]=null,to--)}function kt(i,s){to++,vf[to]=i.current,i.current=s}var Vr={},En=Br(Vr),Bn=Br(!1),ms=Vr;function no(i,s){var l=i.type.contextTypes;if(!l)return Vr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Vn(i){return i=i.childContextTypes,i!=null}function Gl(){zt(Bn),zt(En)}function Pg(i,s,l){if(En.current!==Vr)throw Error(t(168));kt(En,s),kt(Bn,l)}function Dg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ge(i)||"Unknown",m));return ue({},l,f)}function Wl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Vr,ms=En.current,kt(En,i),kt(Bn,Bn.current),!0}function Lg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Dg(i,s,ms),f.__reactInternalMemoizedMergedChildContext=i,zt(Bn),zt(En),kt(En,i)):zt(Bn),kt(Bn,l)}var sr=null,jl=!1,xf=!1;function Ig(i){sr===null?sr=[i]:sr.push(i)}function ME(i){jl=!0,Ig(i)}function zr(){if(!xf&&sr!==null){xf=!0;var i=0,s=at;try{var l=sr;for(at=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}sr=null,jl=!1}catch(m){throw sr!==null&&(sr=sr.slice(i+1)),wl(le,zr),m}finally{at=s,xf=!1}}return null}var io=[],ro=0,Xl=null,Yl=0,oi=[],ai=0,gs=null,or=1,ar="";function vs(i,s){io[ro++]=Yl,io[ro++]=Xl,Xl=i,Yl=s}function Ng(i,s,l){oi[ai++]=or,oi[ai++]=ar,oi[ai++]=gs,gs=i;var f=or;i=ar;var m=32-et(f)-1;f&=~(1<<m),l+=1;var x=32-et(s)+m;if(30<x){var A=m-m%5;x=(f&(1<<A)-1).toString(32),f>>=A,m-=A,or=1<<32-et(s)+m|l<<m|f,ar=x+i}else or=1<<x|l<<m|f,ar=i}function _f(i){i.return!==null&&(vs(i,1),Ng(i,1,0))}function yf(i){for(;i===Xl;)Xl=io[--ro],io[ro]=null,Yl=io[--ro],io[ro]=null;for(;i===gs;)gs=oi[--ai],oi[ai]=null,ar=oi[--ai],oi[ai]=null,or=oi[--ai],oi[ai]=null}var Zn=null,Qn=null,Gt=!1,yi=null;function Fg(i,s){var l=fi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Ug(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=kr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=gs!==null?{id:or,overflow:ar}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=fi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Zn=i,Qn=null,!0):!1;default:return!1}}function Sf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Mf(i){if(Gt){var s=Qn;if(s){var l=s;if(!Ug(i,s)){if(Sf(i))throw Error(t(418));s=kr(l.nextSibling);var f=Zn;s&&Ug(i,s)?Fg(f,l):(i.flags=i.flags&-4097|2,Gt=!1,Zn=i)}}else{if(Sf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Gt=!1,Zn=i}}}function Og(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Zn=i}function $l(i){if(i!==Zn)return!1;if(!Gt)return Og(i),Gt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!hf(i.type,i.memoizedProps)),s&&(s=Qn)){if(Sf(i))throw kg(),Error(t(418));for(;s;)Fg(i,s),s=kr(s.nextSibling)}if(Og(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Qn=kr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Qn=null}}else Qn=Zn?kr(i.stateNode.nextSibling):null;return!0}function kg(){for(var i=Qn;i;)i=kr(i.nextSibling)}function so(){Qn=Zn=null,Gt=!1}function Ef(i){yi===null?yi=[i]:yi.push(i)}var EE=P.ReactCurrentBatchConfig;function _a(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var F=m.refs;A===null?delete F[x]:F[x]=A},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function ql(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Bg(i){var s=i._init;return s(i._payload)}function Vg(i){function s(Z,W){if(i){var te=Z.deletions;te===null?(Z.deletions=[W],Z.flags|=16):te.push(W)}}function l(Z,W){if(!i)return null;for(;W!==null;)s(Z,W),W=W.sibling;return null}function f(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function m(Z,W){return Z=qr(Z,W),Z.index=0,Z.sibling=null,Z}function x(Z,W,te){return Z.index=te,i?(te=Z.alternate,te!==null?(te=te.index,te<W?(Z.flags|=2,W):te):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function A(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,W,te,Te){return W===null||W.tag!==6?(W=pd(te,Z.mode,Te),W.return=Z,W):(W=m(W,te),W.return=Z,W)}function V(Z,W,te,Te){var Ke=te.type;return Ke===O?_e(Z,W,te.props.children,Te,te.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Bg(Ke)===W.type)?(Te=m(W,te.props),Te.ref=_a(Z,W,te),Te.return=Z,Te):(Te=_u(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=_a(Z,W,te),Te.return=Z,Te)}function ae(Z,W,te,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=md(te,Z.mode,Te),W.return=Z,W):(W=m(W,te.children||[]),W.return=Z,W)}function _e(Z,W,te,Te,Ke){return W===null||W.tag!==7?(W=ws(te,Z.mode,Te,Ke),W.return=Z,W):(W=m(W,te),W.return=Z,W)}function ye(Z,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=pd(""+W,Z.mode,te),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case L:return te=_u(W.type,W.key,W.props,null,Z.mode,te),te.ref=_a(Z,null,W),te.return=Z,te;case N:return W=md(W,Z.mode,te),W.return=Z,W;case ie:var Te=W._init;return ye(Z,Te(W._payload),te)}if(vt(W)||re(W))return W=ws(W,Z.mode,te,null),W.return=Z,W;ql(Z,W)}return null}function xe(Z,W,te,Te){var Ke=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ke!==null?null:F(Z,W,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case L:return te.key===Ke?V(Z,W,te,Te):null;case N:return te.key===Ke?ae(Z,W,te,Te):null;case ie:return Ke=te._init,xe(Z,W,Ke(te._payload),Te)}if(vt(te)||re(te))return Ke!==null?null:_e(Z,W,te,Te,null);ql(Z,te)}return null}function Fe(Z,W,te,Te,Ke){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(te)||null,F(W,Z,""+Te,Ke);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return Z=Z.get(Te.key===null?te:Te.key)||null,V(W,Z,Te,Ke);case N:return Z=Z.get(Te.key===null?te:Te.key)||null,ae(W,Z,Te,Ke);case ie:var tt=Te._init;return Fe(Z,W,te,tt(Te._payload),Ke)}if(vt(Te)||re(Te))return Z=Z.get(te)||null,_e(W,Z,Te,Ke,null);ql(W,Te)}return null}function He(Z,W,te,Te){for(var Ke=null,tt=null,nt=W,lt=W=0,mn=null;nt!==null&&lt<te.length;lt++){nt.index>lt?(mn=nt,nt=null):mn=nt.sibling;var At=xe(Z,nt,te[lt],Te);if(At===null){nt===null&&(nt=mn);break}i&&nt&&At.alternate===null&&s(Z,nt),W=x(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At,nt=mn}if(lt===te.length)return l(Z,nt),Gt&&vs(Z,lt),Ke;if(nt===null){for(;lt<te.length;lt++)nt=ye(Z,te[lt],Te),nt!==null&&(W=x(nt,W,lt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Gt&&vs(Z,lt),Ke}for(nt=f(Z,nt);lt<te.length;lt++)mn=Fe(nt,Z,lt,te[lt],Te),mn!==null&&(i&&mn.alternate!==null&&nt.delete(mn.key===null?lt:mn.key),W=x(mn,W,lt),tt===null?Ke=mn:tt.sibling=mn,tt=mn);return i&&nt.forEach(function(Kr){return s(Z,Kr)}),Gt&&vs(Z,lt),Ke}function Ye(Z,W,te,Te){var Ke=re(te);if(typeof Ke!="function")throw Error(t(150));if(te=Ke.call(te),te==null)throw Error(t(151));for(var tt=Ke=null,nt=W,lt=W=0,mn=null,At=te.next();nt!==null&&!At.done;lt++,At=te.next()){nt.index>lt?(mn=nt,nt=null):mn=nt.sibling;var Kr=xe(Z,nt,At.value,Te);if(Kr===null){nt===null&&(nt=mn);break}i&&nt&&Kr.alternate===null&&s(Z,nt),W=x(Kr,W,lt),tt===null?Ke=Kr:tt.sibling=Kr,tt=Kr,nt=mn}if(At.done)return l(Z,nt),Gt&&vs(Z,lt),Ke;if(nt===null){for(;!At.done;lt++,At=te.next())At=ye(Z,At.value,Te),At!==null&&(W=x(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return Gt&&vs(Z,lt),Ke}for(nt=f(Z,nt);!At.done;lt++,At=te.next())At=Fe(nt,Z,lt,At.value,Te),At!==null&&(i&&At.alternate!==null&&nt.delete(At.key===null?lt:At.key),W=x(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return i&&nt.forEach(function(nT){return s(Z,nT)}),Gt&&vs(Z,lt),Ke}function en(Z,W,te,Te){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case L:e:{for(var Ke=te.key,tt=W;tt!==null;){if(tt.key===Ke){if(Ke=te.type,Ke===O){if(tt.tag===7){l(Z,tt.sibling),W=m(tt,te.props.children),W.return=Z,Z=W;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ie&&Bg(Ke)===tt.type){l(Z,tt.sibling),W=m(tt,te.props),W.ref=_a(Z,tt,te),W.return=Z,Z=W;break e}l(Z,tt);break}else s(Z,tt);tt=tt.sibling}te.type===O?(W=ws(te.props.children,Z.mode,Te,te.key),W.return=Z,Z=W):(Te=_u(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=_a(Z,W,te),Te.return=Z,Z=Te)}return A(Z);case N:e:{for(tt=te.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){l(Z,W.sibling),W=m(W,te.children||[]),W.return=Z,Z=W;break e}else{l(Z,W);break}else s(Z,W);W=W.sibling}W=md(te,Z.mode,Te),W.return=Z,Z=W}return A(Z);case ie:return tt=te._init,en(Z,W,tt(te._payload),Te)}if(vt(te))return He(Z,W,te,Te);if(re(te))return Ye(Z,W,te,Te);ql(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(l(Z,W.sibling),W=m(W,te),W.return=Z,Z=W):(l(Z,W),W=pd(te,Z.mode,Te),W.return=Z,Z=W),A(Z)):l(Z,W)}return en}var oo=Vg(!0),zg=Vg(!1),Kl=Br(null),Zl=null,ao=null,Tf=null;function wf(){Tf=ao=Zl=null}function Af(i){var s=Kl.current;zt(Kl),i._currentValue=s}function Cf(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function lo(i,s){Zl=i,Tf=ao=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(zn=!0),i.firstContext=null)}function li(i){var s=i._currentValue;if(Tf!==i)if(i={context:i,memoizedValue:s,next:null},ao===null){if(Zl===null)throw Error(t(308));ao=i,Zl.dependencies={lanes:0,firstContext:i}}else ao=ao.next=i;return s}var xs=null;function Rf(i){xs===null?xs=[i]:xs.push(i)}function Hg(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,Rf(s)):(l.next=m.next,m.next=l),s.interleaved=l,lr(i,f)}function lr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Hr=!1;function bf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ur(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Gr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Tt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,lr(i,l)}return m=f.interleaved,m===null?(s.next=s,Rf(f)):(s.next=m.next,m.next=s),f.interleaved=s,lr(i,l)}function Ql(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Rt(i,l)}}function Wg(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Jl(i,s,l,f){var m=i.updateQueue;Hr=!1;var x=m.firstBaseUpdate,A=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var V=F,ae=V.next;V.next=null,A===null?x=ae:A.next=ae,A=V;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,F=_e.lastBaseUpdate,F!==A&&(F===null?_e.firstBaseUpdate=ae:F.next=ae,_e.lastBaseUpdate=V))}if(x!==null){var ye=m.baseState;A=0,_e=ae=V=null,F=x;do{var xe=F.lane,Fe=F.eventTime;if((f&xe)===xe){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var He=i,Ye=F;switch(xe=s,Fe=l,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){ye=He.call(Fe,ye,xe);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,xe=typeof He=="function"?He.call(Fe,ye,xe):He,xe==null)break e;ye=ue({},ye,xe);break e;case 2:Hr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,xe=m.effects,xe===null?m.effects=[F]:xe.push(F))}else Fe={eventTime:Fe,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},_e===null?(ae=_e=Fe,V=ye):_e=_e.next=Fe,A|=xe;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(_e===null&&(V=ye),m.baseState=V,m.firstBaseUpdate=ae,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do A|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);Ss|=A,i.lanes=A,i.memoizedState=ye}}function jg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ya={},ki=Br(ya),Sa=Br(ya),Ma=Br(ya);function _s(i){if(i===ya)throw Error(t(174));return i}function Pf(i,s){switch(kt(Ma,s),kt(Sa,i),kt(ki,ya),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ve(s,i)}zt(ki),kt(ki,s)}function uo(){zt(ki),zt(Sa),zt(Ma)}function Xg(i){_s(Ma.current);var s=_s(ki.current),l=ve(s,i.type);s!==l&&(kt(Sa,i),kt(ki,l))}function Df(i){Sa.current===i&&(zt(ki),zt(Sa))}var Wt=Br(0);function eu(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lf=[];function If(){for(var i=0;i<Lf.length;i++)Lf[i]._workInProgressVersionPrimary=null;Lf.length=0}var tu=P.ReactCurrentDispatcher,Nf=P.ReactCurrentBatchConfig,ys=0,jt=null,ln=null,hn=null,nu=!1,Ea=!1,Ta=0,TE=0;function Tn(){throw Error(t(321))}function Ff(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!_i(i[l],s[l]))return!1;return!0}function Uf(i,s,l,f,m,x){if(ys=x,jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,tu.current=i===null||i.memoizedState===null?RE:bE,i=l(f,m),Ea){x=0;do{if(Ea=!1,Ta=0,25<=x)throw Error(t(301));x+=1,hn=ln=null,s.updateQueue=null,tu.current=PE,i=l(f,m)}while(Ea)}if(tu.current=su,s=ln!==null&&ln.next!==null,ys=0,hn=ln=jt=null,nu=!1,s)throw Error(t(300));return i}function Of(){var i=Ta!==0;return Ta=0,i}function Bi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?jt.memoizedState=hn=i:hn=hn.next=i,hn}function ui(){if(ln===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var s=hn===null?jt.memoizedState:hn.next;if(s!==null)hn=s,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?jt.memoizedState=hn=i:hn=hn.next=i}return hn}function wa(i,s){return typeof s=="function"?s(i):s}function kf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=ln,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var A=m.next;m.next=x.next,x.next=A}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var F=A=null,V=null,ae=x;do{var _e=ae.lane;if((ys&_e)===_e)V!==null&&(V=V.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var ye={lane:_e,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};V===null?(F=V=ye,A=f):V=V.next=ye,jt.lanes|=_e,Ss|=_e}ae=ae.next}while(ae!==null&&ae!==x);V===null?A=f:V.next=F,_i(f,s.memoizedState)||(zn=!0),s.memoizedState=f,s.baseState=A,s.baseQueue=V,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do x=m.lane,jt.lanes|=x,Ss|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Bf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do x=i(x,A.action),A=A.next;while(A!==m);_i(x,s.memoizedState)||(zn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function Yg(){}function $g(i,s){var l=jt,f=ui(),m=s(),x=!_i(f.memoizedState,m);if(x&&(f.memoizedState=m,zn=!0),f=f.queue,Vf(Zg.bind(null,l,f,i),[i]),f.getSnapshot!==s||x||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Aa(9,Kg.bind(null,l,f,m,s),void 0,null),pn===null)throw Error(t(349));(ys&30)!==0||qg(l,s,m)}return m}function qg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Kg(i,s,l,f){s.value=l,s.getSnapshot=f,Qg(s)&&Jg(i)}function Zg(i,s,l){return l(function(){Qg(s)&&Jg(i)})}function Qg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!_i(i,l)}catch{return!0}}function Jg(i){var s=lr(i,1);s!==null&&Ti(s,i,1,-1)}function e0(i){var s=Bi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:i},s.queue=i,i=i.dispatch=CE.bind(null,jt,i),[s.memoizedState,i]}function Aa(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function t0(){return ui().memoizedState}function iu(i,s,l,f){var m=Bi();jt.flags|=i,m.memoizedState=Aa(1|s,l,void 0,f===void 0?null:f)}function ru(i,s,l,f){var m=ui();f=f===void 0?null:f;var x=void 0;if(ln!==null){var A=ln.memoizedState;if(x=A.destroy,f!==null&&Ff(f,A.deps)){m.memoizedState=Aa(s,l,x,f);return}}jt.flags|=i,m.memoizedState=Aa(1|s,l,x,f)}function n0(i,s){return iu(8390656,8,i,s)}function Vf(i,s){return ru(2048,8,i,s)}function i0(i,s){return ru(4,2,i,s)}function r0(i,s){return ru(4,4,i,s)}function s0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function o0(i,s,l){return l=l!=null?l.concat([i]):null,ru(4,4,s0.bind(null,s,i),l)}function zf(){}function a0(i,s){var l=ui();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ff(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function l0(i,s){var l=ui();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Ff(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function u0(i,s,l){return(ys&21)===0?(i.baseState&&(i.baseState=!1,zn=!0),i.memoizedState=l):(_i(l,s)||(l=On(),jt.lanes|=l,Ss|=l,i.baseState=!0),s)}function wE(i,s){var l=at;at=l!==0&&4>l?l:4,i(!0);var f=Nf.transition;Nf.transition={};try{i(!1),s()}finally{at=l,Nf.transition=f}}function c0(){return ui().memoizedState}function AE(i,s,l){var f=Yr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},f0(i))d0(s,l);else if(l=Hg(i,s,l,f),l!==null){var m=In();Ti(l,i,f,m),h0(l,s,f)}}function CE(i,s,l){var f=Yr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(f0(i))d0(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,F=x(A,l);if(m.hasEagerState=!0,m.eagerState=F,_i(F,A)){var V=s.interleaved;V===null?(m.next=m,Rf(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}l=Hg(i,s,m,f),l!==null&&(m=In(),Ti(l,i,f,m),h0(l,s,f))}}function f0(i){var s=i.alternate;return i===jt||s!==null&&s===jt}function d0(i,s){Ea=nu=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function h0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Rt(i,l)}}var su={readContext:li,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},RE={readContext:li,useCallback:function(i,s){return Bi().memoizedState=[i,s===void 0?null:s],i},useContext:li,useEffect:n0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,iu(4194308,4,s0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return iu(4194308,4,i,s)},useInsertionEffect:function(i,s){return iu(4,2,i,s)},useMemo:function(i,s){var l=Bi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Bi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=AE.bind(null,jt,i),[f.memoizedState,i]},useRef:function(i){var s=Bi();return i={current:i},s.memoizedState=i},useState:e0,useDebugValue:zf,useDeferredValue:function(i){return Bi().memoizedState=i},useTransition:function(){var i=e0(!1),s=i[0];return i=wE.bind(null,i[1]),Bi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=jt,m=Bi();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),pn===null)throw Error(t(349));(ys&30)!==0||qg(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,n0(Zg.bind(null,f,x,i),[i]),f.flags|=2048,Aa(9,Kg.bind(null,f,x,l,s),void 0,null),l},useId:function(){var i=Bi(),s=pn.identifierPrefix;if(Gt){var l=ar,f=or;l=(f&~(1<<32-et(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ta++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=TE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},bE={readContext:li,useCallback:a0,useContext:li,useEffect:Vf,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:kf,useRef:t0,useState:function(){return kf(wa)},useDebugValue:zf,useDeferredValue:function(i){var s=ui();return u0(s,ln.memoizedState,i)},useTransition:function(){var i=kf(wa)[0],s=ui().memoizedState;return[i,s]},useMutableSource:Yg,useSyncExternalStore:$g,useId:c0,unstable_isNewReconciler:!1},PE={readContext:li,useCallback:a0,useContext:li,useEffect:Vf,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Bf,useRef:t0,useState:function(){return Bf(wa)},useDebugValue:zf,useDeferredValue:function(i){var s=ui();return ln===null?s.memoizedState=i:u0(s,ln.memoizedState,i)},useTransition:function(){var i=Bf(wa)[0],s=ui().memoizedState;return[i,s]},useMutableSource:Yg,useSyncExternalStore:$g,useId:c0,unstable_isNewReconciler:!1};function Si(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Hf(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:ue({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var ou={isMounted:function(i){return(i=i._reactInternals)?Ui(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=In(),m=Yr(i),x=ur(f,m);x.payload=s,l!=null&&(x.callback=l),s=Gr(i,x,m),s!==null&&(Ti(s,i,m,f),Ql(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=In(),m=Yr(i),x=ur(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Gr(i,x,m),s!==null&&(Ti(s,i,m,f),Ql(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=In(),f=Yr(i),m=ur(l,f);m.tag=2,s!=null&&(m.callback=s),s=Gr(i,m,f),s!==null&&(Ti(s,i,f,l),Ql(s,i,f))}};function p0(i,s,l,f,m,x,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,A):s.prototype&&s.prototype.isPureReactComponent?!da(l,f)||!da(m,x):!0}function m0(i,s,l){var f=!1,m=Vr,x=s.contextType;return typeof x=="object"&&x!==null?x=li(x):(m=Vn(s)?ms:En.current,f=s.contextTypes,x=(f=f!=null)?no(i,m):Vr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ou,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function g0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&ou.enqueueReplaceState(s,s.state,null)}function Gf(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},bf(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=li(x):(x=Vn(s)?ms:En.current,m.context=no(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Hf(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&ou.enqueueReplaceState(m,m.state,null),Jl(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function co(i,s){try{var l="",f=s;do l+=Qe(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function Wf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function jf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var DE=typeof WeakMap=="function"?WeakMap:Map;function v0(i,s,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){hu||(hu=!0,od=f),jf(i,s)},l}function x0(i,s,l){l=ur(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){jf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){jf(i,s),typeof f!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function _0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new DE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=jE.bind(null,i,s,l),s.then(i,i))}function y0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function S0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ur(-1,1),s.tag=2,Gr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var LE=P.ReactCurrentOwner,zn=!1;function Ln(i,s,l,f){s.child=i===null?zg(s,null,l,f):oo(s,i.child,l,f)}function M0(i,s,l,f,m){l=l.render;var x=s.ref;return lo(s,m),f=Uf(i,s,l,f,x,m),l=Of(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,cr(i,s,m)):(Gt&&l&&_f(s),s.flags|=1,Ln(i,s,f,m),s.child)}function E0(i,s,l,f,m){if(i===null){var x=l.type;return typeof x=="function"&&!hd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,T0(i,s,x,f,m)):(i=_u(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:da,l(A,f)&&i.ref===s.ref)return cr(i,s,m)}return s.flags|=1,i=qr(x,f),i.ref=s.ref,i.return=s,s.child=i}function T0(i,s,l,f,m){if(i!==null){var x=i.memoizedProps;if(da(x,f)&&i.ref===s.ref)if(zn=!1,s.pendingProps=f=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(zn=!0);else return s.lanes=i.lanes,cr(i,s,m)}return Xf(i,s,l,f,m)}function w0(i,s,l){var f=s.pendingProps,m=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(ho,Jn),Jn|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,kt(ho,Jn),Jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,kt(ho,Jn),Jn|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,kt(ho,Jn),Jn|=f;return Ln(i,s,m,l),s.child}function A0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Xf(i,s,l,f,m){var x=Vn(l)?ms:En.current;return x=no(s,x),lo(s,m),l=Uf(i,s,l,f,x,m),f=Of(),i!==null&&!zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,cr(i,s,m)):(Gt&&f&&_f(s),s.flags|=1,Ln(i,s,l,m),s.child)}function C0(i,s,l,f,m){if(Vn(l)){var x=!0;Wl(s)}else x=!1;if(lo(s,m),s.stateNode===null)lu(i,s),m0(s,l,f),Gf(s,l,f,m),f=!0;else if(i===null){var A=s.stateNode,F=s.memoizedProps;A.props=F;var V=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=li(ae):(ae=Vn(l)?ms:En.current,ae=no(s,ae));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof A.getSnapshotBeforeUpdate=="function";ye||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==f||V!==ae)&&g0(s,A,f,ae),Hr=!1;var xe=s.memoizedState;A.state=xe,Jl(s,f,A,m),V=s.memoizedState,F!==f||xe!==V||Bn.current||Hr?(typeof _e=="function"&&(Hf(s,l,_e,f),V=s.memoizedState),(F=Hr||p0(s,l,F,f,xe,V,ae))?(ye||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=V),A.props=f,A.state=V,A.context=ae,f=F):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{A=s.stateNode,Gg(i,s),F=s.memoizedProps,ae=s.type===s.elementType?F:Si(s.type,F),A.props=ae,ye=s.pendingProps,xe=A.context,V=l.contextType,typeof V=="object"&&V!==null?V=li(V):(V=Vn(l)?ms:En.current,V=no(s,V));var Fe=l.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==ye||xe!==V)&&g0(s,A,f,V),Hr=!1,xe=s.memoizedState,A.state=xe,Jl(s,f,A,m);var He=s.memoizedState;F!==ye||xe!==He||Bn.current||Hr?(typeof Fe=="function"&&(Hf(s,l,Fe,f),He=s.memoizedState),(ae=Hr||p0(s,l,ae,f,xe,He,V)||!1)?(_e||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,He,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,He,V)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),A.props=f,A.state=He,A.context=V,f=ae):(typeof A.componentDidUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),f=!1)}return Yf(i,s,l,f,x,m)}function Yf(i,s,l,f,m,x){A0(i,s);var A=(s.flags&128)!==0;if(!f&&!A)return m&&Lg(s,l,!1),cr(i,s,x);f=s.stateNode,LE.current=s;var F=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&A?(s.child=oo(s,i.child,null,x),s.child=oo(s,null,F,x)):Ln(i,s,F,x),s.memoizedState=f.state,m&&Lg(s,l,!0),s.child}function R0(i){var s=i.stateNode;s.pendingContext?Pg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Pg(i,s.context,!1),Pf(i,s.containerInfo)}function b0(i,s,l,f,m){return so(),Ef(m),s.flags|=256,Ln(i,s,l,f),s.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function qf(i){return{baseLanes:i,cachePool:null,transitions:null}}function P0(i,s,l){var f=s.pendingProps,m=Wt.current,x=!1,A=(s.flags&128)!==0,F;if((F=A)||(F=i!==null&&i.memoizedState===null?!1:(m&2)!==0),F?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),kt(Wt,m&1),i===null)return Mf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=f.children,i=f.fallback,x?(f=s.mode,x=s.child,A={mode:"hidden",children:A},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=yu(A,f,0,null),i=ws(i,f,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=qf(l),s.memoizedState=$f,i):Kf(s,A));if(m=i.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return IE(i,s,A,f,F,m,l);if(x){x=f.fallback,A=s.mode,m=i.child,F=m.sibling;var V={mode:"hidden",children:f.children};return(A&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=V,s.deletions=null):(f=qr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?x=qr(F,x):(x=ws(x,A,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,A=i.child.memoizedState,A=A===null?qf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=i.childLanes&~l,s.memoizedState=$f,f}return x=i.child,i=x.sibling,f=qr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Kf(i,s){return s=yu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function au(i,s,l,f){return f!==null&&Ef(f),oo(s,i.child,null,l),i=Kf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function IE(i,s,l,f,m,x,A){if(l)return s.flags&256?(s.flags&=-257,f=Wf(Error(t(422))),au(i,s,A,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=yu({mode:"visible",children:f.children},m,0,null),x=ws(x,m,A,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&oo(s,i.child,null,A),s.child.memoizedState=qf(A),s.memoizedState=$f,x);if((s.mode&1)===0)return au(i,s,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=Wf(x,f,void 0),au(i,s,A,f)}if(F=(A&i.childLanes)!==0,zn||F){if(f=pn,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,lr(i,m),Ti(f,i,m,-1))}return dd(),f=Wf(Error(t(421))),au(i,s,A,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=XE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,Qn=kr(m.nextSibling),Zn=s,Gt=!0,yi=null,i!==null&&(oi[ai++]=or,oi[ai++]=ar,oi[ai++]=gs,or=i.id,ar=i.overflow,gs=s),s=Kf(s,f.children),s.flags|=4096,s)}function D0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Cf(i.return,s,l)}function Zf(i,s,l,f,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function L0(i,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(Ln(i,s,f.children,l),f=Wt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&D0(i,l,s);else if(i.tag===19)D0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(kt(Wt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&eu(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Zf(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&eu(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Zf(s,!0,l,null,x);break;case"together":Zf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function lu(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function cr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ss|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=qr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=qr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function NE(i,s,l){switch(s.tag){case 3:R0(s),so();break;case 5:Xg(s);break;case 1:Vn(s.type)&&Wl(s);break;case 4:Pf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;kt(Kl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(kt(Wt,Wt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?P0(i,s,l):(kt(Wt,Wt.current&1),i=cr(i,s,l),i!==null?i.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return L0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),kt(Wt,Wt.current),f)break;return null;case 22:case 23:return s.lanes=0,w0(i,s,l)}return cr(i,s,l)}var I0,Qf,N0,F0;I0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Qf=function(){},N0=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,_s(ki.current);var x=null;switch(l){case"input":m=St(i,m),f=St(i,f),x=[];break;case"select":m=ue({},m,{value:void 0}),f=ue({},f,{value:void 0}),x=[];break;case"textarea":m=We(i,m),f=We(i,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=zl)}Ve(l,f);var A;l=null;for(ae in m)if(!f.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var F=m[ae];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var V=f[ae];if(F=m!=null?m[ae]:void 0,f.hasOwnProperty(ae)&&V!==F&&(V!=null||F!=null))if(ae==="style")if(F){for(A in F)!F.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in V)V.hasOwnProperty(A)&&F[A]!==V[A]&&(l||(l={}),l[A]=V[A])}else l||(x||(x=[]),x.push(ae,l)),l=V;else ae==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(x=x||[]).push(ae,V)):ae==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(ae,""+V):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(V!=null&&ae==="onScroll"&&Vt("scroll",i),x||F===V||(x=[])):(x=x||[]).push(ae,V))}l&&(x=x||[]).push("style",l);var ae=x;(s.updateQueue=ae)&&(s.flags|=4)}},F0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Ca(i,s){if(!Gt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function wn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function FE(i,s,l){var f=s.pendingProps;switch(yf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(s),null;case 1:return Vn(s.type)&&Gl(),wn(s),null;case 3:return f=s.stateNode,uo(),zt(Bn),zt(En),If(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&($l(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(ud(yi),yi=null))),Qf(i,s),wn(s),null;case 5:Df(s);var m=_s(Ma.current);if(l=s.type,i!==null&&s.stateNode!=null)N0(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return wn(s),null}if(i=_s(ki.current),$l(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[Oi]=s,f[va]=x,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",f),Vt("close",f);break;case"iframe":case"object":case"embed":Vt("load",f);break;case"video":case"audio":for(m=0;m<pa.length;m++)Vt(pa[m],f);break;case"source":Vt("error",f);break;case"img":case"image":case"link":Vt("error",f),Vt("load",f);break;case"details":Vt("toggle",f);break;case"input":bt(f,x),Vt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Vt("invalid",f);break;case"textarea":I(f,x),Vt("invalid",f)}Ve(l,x),m=null;for(var A in x)if(x.hasOwnProperty(A)){var F=x[A];A==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Vl(f.textContent,F,i),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Vl(f.textContent,F,i),m=["children",""+F]):o.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Vt("scroll",f)}switch(l){case"input":it(f),z(f,x,!0);break;case"textarea":it(f),j(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=zl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=A.createElement(l,{is:f.is}):(i=A.createElement(l),l==="select"&&(A=i,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):i=A.createElementNS(i,l),i[Oi]=s,i[va]=f,I0(i,s,!1,!1),s.stateNode=i;e:{switch(A=Le(l,f),l){case"dialog":Vt("cancel",i),Vt("close",i),m=f;break;case"iframe":case"object":case"embed":Vt("load",i),m=f;break;case"video":case"audio":for(m=0;m<pa.length;m++)Vt(pa[m],i);m=f;break;case"source":Vt("error",i),m=f;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),m=f;break;case"details":Vt("toggle",i),m=f;break;case"input":bt(i,f),m=St(i,f),Vt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=ue({},f,{value:void 0}),Vt("invalid",i);break;case"textarea":I(i,f),m=We(i,f),Vt("invalid",i);break;default:m=f}Ve(l,m),F=m;for(x in F)if(F.hasOwnProperty(x)){var V=F[x];x==="style"?we(i,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Be(i,V)):x==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&Ae(i,V):typeof V=="number"&&Ae(i,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Vt("scroll",i):V!=null&&b(i,x,V,A))}switch(l){case"input":it(i),z(i,f,!1);break;case"textarea":it(i),j(i);break;case"option":f.value!=null&&i.setAttribute("value",""+me(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?Mt(i,!!f.multiple,x,!1):f.defaultValue!=null&&Mt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=zl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return wn(s),null;case 6:if(i&&s.stateNode!=null)F0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=_s(Ma.current),_s(ki.current),$l(s)){if(f=s.stateNode,l=s.memoizedProps,f[Oi]=s,(x=f.nodeValue!==l)&&(i=Zn,i!==null))switch(i.tag){case 3:Vl(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Vl(f.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Oi]=s,s.stateNode=f}return wn(s),null;case 13:if(zt(Wt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Gt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)kg(),so(),s.flags|=98560,x=!1;else if(x=$l(s),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Oi]=s}else so(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wn(s),x=!1}else yi!==null&&(ud(yi),yi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Wt.current&1)!==0?un===0&&(un=3):dd())),s.updateQueue!==null&&(s.flags|=4),wn(s),null);case 4:return uo(),Qf(i,s),i===null&&ma(s.stateNode.containerInfo),wn(s),null;case 10:return Af(s.type._context),wn(s),null;case 17:return Vn(s.type)&&Gl(),wn(s),null;case 19:if(zt(Wt),x=s.memoizedState,x===null)return wn(s),null;if(f=(s.flags&128)!==0,A=x.rendering,A===null)if(f)Ca(x,!1);else{if(un!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=eu(i),A!==null){for(s.flags|=128,Ca(x,!1),f=A.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,i=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,i=A.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return kt(Wt,Wt.current&1|2),s.child}i=i.sibling}x.tail!==null&&R()>po&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304)}else{if(!f)if(i=eu(A),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ca(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Gt)return wn(s),null}else 2*R()-x.renderingStartTime>po&&l!==1073741824&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=R(),s.sibling=null,l=Wt.current,kt(Wt,f?l&1|2:l&1),s):(wn(s),null);case 22:case 23:return fd(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Jn&1073741824)!==0&&(wn(s),s.subtreeFlags&6&&(s.flags|=8192)):wn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UE(i,s){switch(yf(s),s.tag){case 1:return Vn(s.type)&&Gl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return uo(),zt(Bn),zt(En),If(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Df(s),null;case 13:if(zt(Wt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));so()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return zt(Wt),null;case 4:return uo(),null;case 10:return Af(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var uu=!1,An=!1,OE=typeof WeakSet=="function"?WeakSet:Set,ke=null;function fo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){$t(i,s,f)}else l.current=null}function Jf(i,s,l){try{l()}catch(f){$t(i,s,f)}}var U0=!1;function kE(i,s){if(ff=bl,i=pg(),nf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,F=-1,V=-1,ae=0,_e=0,ye=i,xe=null;t:for(;;){for(var Fe;ye!==l||m!==0&&ye.nodeType!==3||(F=A+m),ye!==x||f!==0&&ye.nodeType!==3||(V=A+f),ye.nodeType===3&&(A+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)xe=ye,ye=Fe;for(;;){if(ye===i)break t;if(xe===l&&++ae===m&&(F=A),xe===x&&++_e===f&&(V=A),(Fe=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Fe}l=F===-1||V===-1?null:{start:F,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(df={focusedElem:i,selectionRange:l},bl=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,en=He.memoizedState,Z=s.stateNode,W=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ye:Si(s.type,Ye),en);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=s.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){$t(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return He=U0,U0=!1,He}function Ra(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&Jf(s,l,x)}m=m.next}while(m!==f)}}function cu(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function ed(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function O0(i){var s=i.alternate;s!==null&&(i.alternate=null,O0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Oi],delete s[va],delete s[gf],delete s[yE],delete s[SE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function k0(i){return i.tag===5||i.tag===3||i.tag===4}function B0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||k0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function td(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=zl));else if(f!==4&&(i=i.child,i!==null))for(td(i,s,l),i=i.sibling;i!==null;)td(i,s,l),i=i.sibling}function nd(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(nd(i,s,l),i=i.sibling;i!==null;)nd(i,s,l),i=i.sibling}var yn=null,Mi=!1;function Wr(i,s,l){for(l=l.child;l!==null;)V0(i,s,l),l=l.sibling}function V0(i,s,l){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(be,l)}catch{}switch(l.tag){case 5:An||fo(l,s);case 6:var f=yn,m=Mi;yn=null,Wr(i,s,l),yn=f,Mi=m,yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):yn.removeChild(l.stateNode));break;case 18:yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?mf(i.parentNode,l):i.nodeType===1&&mf(i,l),oa(i)):mf(yn,l.stateNode));break;case 4:f=yn,m=Mi,yn=l.stateNode.containerInfo,Mi=!0,Wr(i,s,l),yn=f,Mi=m;break;case 0:case 11:case 14:case 15:if(!An&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Jf(l,s,A),m=m.next}while(m!==f)}Wr(i,s,l);break;case 1:if(!An&&(fo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){$t(l,s,F)}Wr(i,s,l);break;case 21:Wr(i,s,l);break;case 22:l.mode&1?(An=(f=An)||l.memoizedState!==null,Wr(i,s,l),An=f):Wr(i,s,l);break;default:Wr(i,s,l)}}function z0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new OE),s.forEach(function(f){var m=YE.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ei(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=i,A=s,F=A;e:for(;F!==null;){switch(F.tag){case 5:yn=F.stateNode,Mi=!1;break e;case 3:yn=F.stateNode.containerInfo,Mi=!0;break e;case 4:yn=F.stateNode.containerInfo,Mi=!0;break e}F=F.return}if(yn===null)throw Error(t(160));V0(x,A,m),yn=null,Mi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(ae){$t(m,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)H0(s,i),s=s.sibling}function H0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),Vi(i),f&4){try{Ra(3,i,i.return),cu(3,i)}catch(Ye){$t(i,i.return,Ye)}try{Ra(5,i,i.return)}catch(Ye){$t(i,i.return,Ye)}}break;case 1:Ei(s,i),Vi(i),f&512&&l!==null&&fo(l,l.return);break;case 5:if(Ei(s,i),Vi(i),f&512&&l!==null&&fo(l,l.return),i.flags&32){var m=i.stateNode;try{Ae(m,"")}catch(Ye){$t(i,i.return,Ye)}}if(f&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,A=l!==null?l.memoizedProps:x,F=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&ft(m,x),Le(F,A);var ae=Le(F,x);for(A=0;A<V.length;A+=2){var _e=V[A],ye=V[A+1];_e==="style"?we(m,ye):_e==="dangerouslySetInnerHTML"?Be(m,ye):_e==="children"?Ae(m,ye):b(m,_e,ye,ae)}switch(F){case"input":Bt(m,x);break;case"textarea":E(m,x);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Fe=x.value;Fe!=null?Mt(m,!!x.multiple,Fe,!1):xe!==!!x.multiple&&(x.defaultValue!=null?Mt(m,!!x.multiple,x.defaultValue,!0):Mt(m,!!x.multiple,x.multiple?[]:"",!1))}m[va]=x}catch(Ye){$t(i,i.return,Ye)}}break;case 6:if(Ei(s,i),Vi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ye){$t(i,i.return,Ye)}}break;case 3:if(Ei(s,i),Vi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{oa(s.containerInfo)}catch(Ye){$t(i,i.return,Ye)}break;case 4:Ei(s,i),Vi(i);break;case 13:Ei(s,i),Vi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(sd=R())),f&4&&z0(i);break;case 22:if(_e=l!==null&&l.memoizedState!==null,i.mode&1?(An=(ae=An)||_e,Ei(s,i),An=ae):Ei(s,i),Vi(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!_e&&(i.mode&1)!==0)for(ke=i,_e=i.child;_e!==null;){for(ye=ke=_e;ke!==null;){switch(xe=ke,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ra(4,xe,xe.return);break;case 1:fo(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){f=xe,l=xe.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(Ye){$t(f,l,Ye)}}break;case 5:fo(xe,xe.return);break;case 22:if(xe.memoizedState!==null){j0(ye);continue}}Fe!==null?(Fe.return=xe,ke=Fe):j0(ye)}_e=_e.sibling}e:for(_e=null,ye=i;;){if(ye.tag===5){if(_e===null){_e=ye;try{m=ye.stateNode,ae?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=Se("display",A))}catch(Ye){$t(i,i.return,Ye)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(Ye){$t(i,i.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Ei(s,i),Vi(i),f&4&&z0(i);break;case 21:break;default:Ei(s,i),Vi(i)}}function Vi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(k0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ae(m,""),f.flags&=-33);var x=B0(i);nd(i,x,m);break;case 3:case 4:var A=f.stateNode.containerInfo,F=B0(i);td(i,F,A);break;default:throw Error(t(161))}}catch(V){$t(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function BE(i,s,l){ke=i,G0(i)}function G0(i,s,l){for(var f=(i.mode&1)!==0;ke!==null;){var m=ke,x=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||uu;if(!A){var F=m.alternate,V=F!==null&&F.memoizedState!==null||An;F=uu;var ae=An;if(uu=A,(An=V)&&!ae)for(ke=m;ke!==null;)A=ke,V=A.child,A.tag===22&&A.memoizedState!==null?X0(m):V!==null?(V.return=A,ke=V):X0(m);for(;x!==null;)ke=x,G0(x),x=x.sibling;ke=m,uu=F,An=ae}W0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ke=x):W0(i)}}function W0(i){for(;ke!==null;){var s=ke;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||cu(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!An)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Si(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&jg(s,x,f);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}jg(s,A,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var _e=ae.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&oa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&ed(s)}catch(xe){$t(s,s.return,xe)}}if(s===i){ke=null;break}if(l=s.sibling,l!==null){l.return=s.return,ke=l;break}ke=s.return}}function j0(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ke=l;break}ke=s.return}}function X0(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{cu(4,s)}catch(V){$t(s,l,V)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(V){$t(s,m,V)}}var x=s.return;try{ed(s)}catch(V){$t(s,x,V)}break;case 5:var A=s.return;try{ed(s)}catch(V){$t(s,A,V)}}}catch(V){$t(s,s.return,V)}if(s===i){ke=null;break}var F=s.sibling;if(F!==null){F.return=s.return,ke=F;break}ke=s.return}}var VE=Math.ceil,fu=P.ReactCurrentDispatcher,id=P.ReactCurrentOwner,ci=P.ReactCurrentBatchConfig,Tt=0,pn=null,rn=null,Sn=0,Jn=0,ho=Br(0),un=0,ba=null,Ss=0,du=0,rd=0,Pa=null,Hn=null,sd=0,po=1/0,fr=null,hu=!1,od=null,jr=null,pu=!1,Xr=null,mu=0,Da=0,ad=null,gu=-1,vu=0;function In(){return(Tt&6)!==0?R():gu!==-1?gu:gu=R()}function Yr(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Sn!==0?Sn&-Sn:EE.transition!==null?(vu===0&&(vu=On()),vu):(i=at,i!==0||(i=window.event,i=i===void 0?16:$m(i.type)),i)}function Ti(i,s,l,f){if(50<Da)throw Da=0,ad=null,Error(t(185));qn(i,l,f),((Tt&2)===0||i!==pn)&&(i===pn&&((Tt&2)===0&&(du|=l),un===4&&$r(i,Sn)),Gn(i,f),l===1&&Tt===0&&(s.mode&1)===0&&(po=R()+500,jl&&zr()))}function Gn(i,s){var l=i.callbackNode;Dn(i,s);var f=Qt(i,i===pn?Sn:0);if(f===0)l!==null&&Al(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Al(l),s===1)i.tag===0?ME($0.bind(null,i)):Ig($0.bind(null,i)),xE(function(){(Tt&6)===0&&zr()}),l=null;else{switch(xi(f)){case 1:l=le;break;case 4:l=ne;break;case 16:l=J;break;case 536870912:l=Ue;break;default:l=J}l=nv(l,Y0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Y0(i,s){if(gu=-1,vu=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(mo()&&i.callbackNode!==l)return null;var f=Qt(i,i===pn?Sn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=xu(i,f);else{s=f;var m=Tt;Tt|=2;var x=K0();(pn!==i||Sn!==s)&&(fr=null,po=R()+500,Es(i,s));do try{GE();break}catch(F){q0(i,F)}while(!0);wf(),fu.current=x,Tt=m,rn!==null?s=0:(pn=null,Sn=0,s=un)}if(s!==0){if(s===2&&(m=xt(i),m!==0&&(f=m,s=ld(i,m))),s===1)throw l=ba,Es(i,0),$r(i,f),Gn(i,R()),l;if(s===6)$r(i,f);else{if(m=i.current.alternate,(f&30)===0&&!zE(m)&&(s=xu(i,f),s===2&&(x=xt(i),x!==0&&(f=x,s=ld(i,x))),s===1))throw l=ba,Es(i,0),$r(i,f),Gn(i,R()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ts(i,Hn,fr);break;case 3:if($r(i,f),(f&130023424)===f&&(s=sd+500-R(),10<s)){if(Qt(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){In(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=pf(Ts.bind(null,i,Hn,fr),s);break}Ts(i,Hn,fr);break;case 4:if($r(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var A=31-et(f);x=1<<A,A=s[A],A>m&&(m=A),f&=~x}if(f=m,f=R()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*VE(f/1960))-f,10<f){i.timeoutHandle=pf(Ts.bind(null,i,Hn,fr),f);break}Ts(i,Hn,fr);break;case 5:Ts(i,Hn,fr);break;default:throw Error(t(329))}}}return Gn(i,R()),i.callbackNode===l?Y0.bind(null,i):null}function ld(i,s){var l=Pa;return i.current.memoizedState.isDehydrated&&(Es(i,s).flags|=256),i=xu(i,s),i!==2&&(s=Hn,Hn=l,s!==null&&ud(s)),i}function ud(i){Hn===null?Hn=i:Hn.push.apply(Hn,i)}function zE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!_i(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $r(i,s){for(s&=~rd,s&=~du,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-et(s),f=1<<l;i[l]=-1,s&=~f}}function $0(i){if((Tt&6)!==0)throw Error(t(327));mo();var s=Qt(i,0);if((s&1)===0)return Gn(i,R()),null;var l=xu(i,s);if(i.tag!==0&&l===2){var f=xt(i);f!==0&&(s=f,l=ld(i,f))}if(l===1)throw l=ba,Es(i,0),$r(i,s),Gn(i,R()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ts(i,Hn,fr),Gn(i,R()),null}function cd(i,s){var l=Tt;Tt|=1;try{return i(s)}finally{Tt=l,Tt===0&&(po=R()+500,jl&&zr())}}function Ms(i){Xr!==null&&Xr.tag===0&&(Tt&6)===0&&mo();var s=Tt;Tt|=1;var l=ci.transition,f=at;try{if(ci.transition=null,at=1,i)return i()}finally{at=f,ci.transition=l,Tt=s,(Tt&6)===0&&zr()}}function fd(){Jn=ho.current,zt(ho)}function Es(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,vE(l)),rn!==null)for(l=rn.return;l!==null;){var f=l;switch(yf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Gl();break;case 3:uo(),zt(Bn),zt(En),If();break;case 5:Df(f);break;case 4:uo();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:Af(f.type._context);break;case 22:case 23:fd()}l=l.return}if(pn=i,rn=i=qr(i.current,null),Sn=Jn=s,un=0,ba=null,rd=du=Ss=0,Hn=Pa=null,xs!==null){for(s=0;s<xs.length;s++)if(l=xs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=m,f.next=A}l.pending=f}xs=null}return i}function q0(i,s){do{var l=rn;try{if(wf(),tu.current=su,nu){for(var f=jt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}nu=!1}if(ys=0,hn=ln=jt=null,Ea=!1,Ta=0,id.current=null,l===null||l.return===null){un=1,ba=s,rn=null;break}e:{var x=i,A=l.return,F=l,V=s;if(s=Sn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ae=V,_e=F,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=y0(A);if(Fe!==null){Fe.flags&=-257,S0(Fe,A,F,x,s),Fe.mode&1&&_0(x,ae,s),s=Fe,V=ae;var He=s.updateQueue;if(He===null){var Ye=new Set;Ye.add(V),s.updateQueue=Ye}else He.add(V);break e}else{if((s&1)===0){_0(x,ae,s),dd();break e}V=Error(t(426))}}else if(Gt&&F.mode&1){var en=y0(A);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),S0(en,A,F,x,s),Ef(co(V,F));break e}}x=V=co(V,F),un!==4&&(un=2),Pa===null?Pa=[x]:Pa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var Z=v0(x,V,s);Wg(x,Z);break e;case 1:F=V;var W=x.type,te=x.stateNode;if((x.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(jr===null||!jr.has(te)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=x0(x,F,s);Wg(x,Te);break e}}x=x.return}while(x!==null)}Q0(l)}catch(Ke){s=Ke,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function K0(){var i=fu.current;return fu.current=su,i===null?su:i}function dd(){(un===0||un===3||un===2)&&(un=4),pn===null||(Ss&268435455)===0&&(du&268435455)===0||$r(pn,Sn)}function xu(i,s){var l=Tt;Tt|=2;var f=K0();(pn!==i||Sn!==s)&&(fr=null,Es(i,s));do try{HE();break}catch(m){q0(i,m)}while(!0);if(wf(),Tt=l,fu.current=f,rn!==null)throw Error(t(261));return pn=null,Sn=0,un}function HE(){for(;rn!==null;)Z0(rn)}function GE(){for(;rn!==null&&!Hc();)Z0(rn)}function Z0(i){var s=tv(i.alternate,i,Jn);i.memoizedProps=i.pendingProps,s===null?Q0(i):rn=s,id.current=null}function Q0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=FE(l,s,Jn),l!==null){rn=l;return}}else{if(l=UE(l,s),l!==null){l.flags&=32767,rn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{un=6,rn=null;return}}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);un===0&&(un=5)}function Ts(i,s,l){var f=at,m=ci.transition;try{ci.transition=null,at=1,WE(i,s,l,f)}finally{ci.transition=m,at=f}return null}function WE(i,s,l,f){do mo();while(Xr!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Dr(i,x),i===pn&&(rn=pn=null,Sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||pu||(pu=!0,nv(J,function(){return mo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=ci.transition,ci.transition=null;var A=at;at=1;var F=Tt;Tt|=4,id.current=null,kE(i,l),H0(l,i),cE(df),bl=!!ff,df=ff=null,i.current=l,BE(l),Gc(),Tt=F,at=A,ci.transition=x}else i.current=l;if(pu&&(pu=!1,Xr=i,mu=m),x=i.pendingLanes,x===0&&(jr=null),Ze(l.stateNode),Gn(i,R()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(hu)throw hu=!1,i=od,od=null,i;return(mu&1)!==0&&i.tag!==0&&mo(),x=i.pendingLanes,(x&1)!==0?i===ad?Da++:(Da=0,ad=i):Da=0,zr(),null}function mo(){if(Xr!==null){var i=xi(mu),s=ci.transition,l=at;try{if(ci.transition=null,at=16>i?16:i,Xr===null)var f=!1;else{if(i=Xr,Xr=null,mu=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,ke=i.current;ke!==null;){var x=ke,A=x.child;if((ke.flags&16)!==0){var F=x.deletions;if(F!==null){for(var V=0;V<F.length;V++){var ae=F[V];for(ke=ae;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:Ra(8,_e,x)}var ye=_e.child;if(ye!==null)ye.return=_e,ke=ye;else for(;ke!==null;){_e=ke;var xe=_e.sibling,Fe=_e.return;if(O0(_e),_e===ae){ke=null;break}if(xe!==null){xe.return=Fe,ke=xe;break}ke=Fe}}}var He=x.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var en=Ye.sibling;Ye.sibling=null,Ye=en}while(Ye!==null)}}ke=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,ke=A;else e:for(;ke!==null;){if(x=ke,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ra(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,ke=Z;break e}ke=x.return}}var W=i.current;for(ke=W;ke!==null;){A=ke;var te=A.child;if((A.subtreeFlags&2064)!==0&&te!==null)te.return=A,ke=te;else e:for(A=W;ke!==null;){if(F=ke,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:cu(9,F)}}catch(Ke){$t(F,F.return,Ke)}if(F===A){ke=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,ke=Te;break e}ke=F.return}}if(Tt=m,zr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(be,i)}catch{}f=!0}return f}finally{at=l,ci.transition=s}}return!1}function J0(i,s,l){s=co(l,s),s=v0(i,s,1),i=Gr(i,s,1),s=In(),i!==null&&(qn(i,1,s),Gn(i,s))}function $t(i,s,l){if(i.tag===3)J0(i,i,l);else for(;s!==null;){if(s.tag===3){J0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(jr===null||!jr.has(f))){i=co(l,i),i=x0(s,i,1),s=Gr(s,i,1),i=In(),s!==null&&(qn(s,1,i),Gn(s,i));break}}s=s.return}}function jE(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=In(),i.pingedLanes|=i.suspendedLanes&l,pn===i&&(Sn&l)===l&&(un===4||un===3&&(Sn&130023424)===Sn&&500>R()-sd?Es(i,0):rd|=l),Gn(i,s)}function ev(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var l=In();i=lr(i,s),i!==null&&(qn(i,s,l),Gn(i,l))}function XE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),ev(i,l)}function YE(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),ev(i,l)}var tv;tv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Bn.current)zn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return zn=!1,NE(i,s,l);zn=(i.flags&131072)!==0}else zn=!1,Gt&&(s.flags&1048576)!==0&&Ng(s,Yl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;lu(i,s),i=s.pendingProps;var m=no(s,En.current);lo(s,l),m=Uf(null,s,f,i,m,l);var x=Of();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Vn(f)?(x=!0,Wl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,bf(s),m.updater=ou,s.stateNode=m,m._reactInternals=s,Gf(s,f,i,l),s=Yf(null,s,f,!0,x,l)):(s.tag=0,Gt&&x&&_f(s),Ln(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(lu(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=qE(f),i=Si(f,i),m){case 0:s=Xf(null,s,f,i,l);break e;case 1:s=C0(null,s,f,i,l);break e;case 11:s=M0(null,s,f,i,l);break e;case 14:s=E0(null,s,f,Si(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),Xf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),C0(i,s,f,m,l);case 3:e:{if(R0(s),i===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,Gg(i,s),Jl(s,f,null,l);var A=s.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=co(Error(t(423)),s),s=b0(i,s,f,l,m);break e}else if(f!==m){m=co(Error(t(424)),s),s=b0(i,s,f,l,m);break e}else for(Qn=kr(s.stateNode.containerInfo.firstChild),Zn=s,Gt=!0,yi=null,l=zg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(so(),f===m){s=cr(i,s,l);break e}Ln(i,s,f,l)}s=s.child}return s;case 5:return Xg(s),i===null&&Mf(s),f=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,A=m.children,hf(f,m)?A=null:x!==null&&hf(f,x)&&(s.flags|=32),A0(i,s),Ln(i,s,A,l),s.child;case 6:return i===null&&Mf(s),null;case 13:return P0(i,s,l);case 4:return Pf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=oo(s,null,f,l):Ln(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),M0(i,s,f,m,l);case 7:return Ln(i,s,s.pendingProps,l),s.child;case 8:return Ln(i,s,s.pendingProps.children,l),s.child;case 12:return Ln(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,A=m.value,kt(Kl,f._currentValue),f._currentValue=A,x!==null)if(_i(x.value,A)){if(x.children===m.children&&!Bn.current){s=cr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var F=x.dependencies;if(F!==null){A=x.child;for(var V=F.firstContext;V!==null;){if(V.context===f){if(x.tag===1){V=ur(-1,l&-l),V.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var _e=ae.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ae.pending=V}}x.lanes|=l,V=x.alternate,V!==null&&(V.lanes|=l),Cf(x.return,l,s),F.lanes|=l;break}V=V.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),Cf(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Ln(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,lo(s,l),m=li(m),f=f(m),s.flags|=1,Ln(i,s,f,l),s.child;case 14:return f=s.type,m=Si(f,s.pendingProps),m=Si(f.type,m),E0(i,s,f,m,l);case 15:return T0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),lu(i,s),s.tag=1,Vn(f)?(i=!0,Wl(s)):i=!1,lo(s,l),m0(s,f,m),Gf(s,f,m,l),Yf(null,s,f,!0,i,l);case 19:return L0(i,s,l);case 22:return w0(i,s,l)}throw Error(t(156,s.tag))};function nv(i,s){return wl(i,s)}function $E(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(i,s,l,f){return new $E(i,s,l,f)}function hd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function qE(i){if(typeof i=="function")return hd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ee)return 11;if(i===K)return 14}return 2}function qr(i,s){var l=i.alternate;return l===null?(l=fi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function _u(i,s,l,f,m,x){var A=2;if(f=i,typeof i=="function")hd(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case O:return ws(l.children,m,x,s);case w:A=8,m|=8;break;case D:return i=fi(12,l,s,m|2),i.elementType=D,i.lanes=x,i;case Q:return i=fi(13,l,s,m),i.elementType=Q,i.lanes=x,i;case fe:return i=fi(19,l,s,m),i.elementType=fe,i.lanes=x,i;case H:return yu(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ce:A=10;break e;case B:A=9;break e;case ee:A=11;break e;case K:A=14;break e;case ie:A=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=fi(A,l,s,m),s.elementType=i,s.type=f,s.lanes=x,s}function ws(i,s,l,f){return i=fi(7,i,f,s),i.lanes=l,i}function yu(i,s,l,f){return i=fi(22,i,f,s),i.elementType=H,i.lanes=l,i.stateNode={isHidden:!1},i}function pd(i,s,l){return i=fi(6,i,null,s),i.lanes=l,i}function md(i,s,l){return s=fi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function KE(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function gd(i,s,l,f,m,x,A,F,V){return i=new KE(i,s,l,F,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=fi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(x),i}function ZE(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function iv(i){if(!i)return Vr;i=i._reactInternals;e:{if(Ui(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Vn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Vn(l))return Dg(i,l,s)}return s}function rv(i,s,l,f,m,x,A,F,V){return i=gd(l,f,!0,i,m,x,A,F,V),i.context=iv(null),l=i.current,f=In(),m=Yr(l),x=ur(f,m),x.callback=s??null,Gr(l,x,m),i.current.lanes=m,qn(i,m,f),Gn(i,f),i}function Su(i,s,l,f){var m=s.current,x=In(),A=Yr(m);return l=iv(l),s.context===null?s.context=l:s.pendingContext=l,s=ur(x,A),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Gr(m,s,A),i!==null&&(Ti(i,m,A,x),Ql(i,m,A)),A}function Mu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function sv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function vd(i,s){sv(i,s),(i=i.alternate)&&sv(i,s)}function QE(){return null}var ov=typeof reportError=="function"?reportError:function(i){console.error(i)};function xd(i){this._internalRoot=i}Eu.prototype.render=xd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Su(i,s,null,null)},Eu.prototype.unmount=xd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ms(function(){Su(null,i,null,null)}),s[rr]=null}};function Eu(i){this._internalRoot=i}Eu.prototype.unstable_scheduleHydration=function(i){if(i){var s=ta();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fr.length&&s!==0&&s<Fr[l].priority;l++);Fr.splice(l,0,i),l===0&&Xm(i)}};function _d(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Tu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function av(){}function JE(i,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var ae=Mu(A);x.call(ae)}}var A=rv(s,f,i,0,null,!1,!1,"",av);return i._reactRootContainer=A,i[rr]=A.current,ma(i.nodeType===8?i.parentNode:i),Ms(),A}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var ae=Mu(V);F.call(ae)}}var V=gd(i,0,!1,null,null,!1,!1,"",av);return i._reactRootContainer=V,i[rr]=V.current,ma(i.nodeType===8?i.parentNode:i),Ms(function(){Su(s,V,l,f)}),V}function wu(i,s,l,f,m){var x=l._reactRootContainer;if(x){var A=x;if(typeof m=="function"){var F=m;m=function(){var V=Mu(A);F.call(V)}}Su(s,A,i,m)}else A=JE(l,s,i,m,f);return Mu(A)}Jt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(Rt(s,l|1),Gn(s,R()),(Tt&6)===0&&(po=R()+500,zr()))}break;case 13:Ms(function(){var f=lr(i,1);if(f!==null){var m=In();Ti(f,i,1,m)}}),vd(i,1)}},si=function(i){if(i.tag===13){var s=lr(i,134217728);if(s!==null){var l=In();Ti(s,i,134217728,l)}vd(i,134217728)}},ir=function(i){if(i.tag===13){var s=Yr(i),l=lr(i,s);if(l!==null){var f=In();Ti(l,i,s,f)}vd(i,s)}},ta=function(){return at},Wm=function(i,s){var l=at;try{return at=i,s()}finally{at=l}},Ce=function(i,s,l){switch(s){case"input":if(Bt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Hl(f);if(!m)throw Error(t(90));Zt(f),Bt(f,m)}}}break;case"textarea":E(i,l);break;case"select":s=l.value,s!=null&&Mt(i,!!l.multiple,s,!1)}},ot=cd,Lt=Ms;var eT={usingClientEntryPoint:!1,Events:[xa,eo,Hl,he,ze,cd]},La={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tT={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=El(i),i===null?null:i.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||QE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{be=Au.inject(tT),Ne=Au}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eT,Wn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(s))throw Error(t(200));return ZE(i,s,null,l)},Wn.createRoot=function(i,s){if(!_d(i))throw Error(t(299));var l=!1,f="",m=ov;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=gd(i,1,!1,null,null,l,!1,f,m),i[rr]=s.current,ma(i.nodeType===8?i.parentNode:i),new xd(s)},Wn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=El(s),i=i===null?null:i.stateNode,i},Wn.flushSync=function(i){return Ms(i)},Wn.hydrate=function(i,s,l){if(!Tu(s))throw Error(t(200));return wu(null,i,s,!0,l)},Wn.hydrateRoot=function(i,s,l){if(!_d(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",A=ov;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=rv(s,null,i,1,l??null,m,!1,x,A),i[rr]=s.current,ma(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new Eu(s)},Wn.render=function(i,s,l){if(!Tu(s))throw Error(t(200));return wu(null,i,s,!1,l)},Wn.unmountComponentAtNode=function(i){if(!Tu(i))throw Error(t(40));return i._reactRootContainer?(Ms(function(){wu(null,null,i,!1,function(){i._reactRootContainer=null,i[rr]=null})}),!0):!1},Wn.unstable_batchedUpdates=cd,Wn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!Tu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return wu(i,s,l,!1,f)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var mv;function uT(){if(mv)return Md.exports;mv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Md.exports=lT(),Md.exports}var gv;function cT(){if(gv)return Cu;gv=1;var n=uT();return Cu.createRoot=n.createRoot,Cu.hydrateRoot=n.hydrateRoot,Cu}var fT=cT(),Y=Xp();/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vv="popstate";function xv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function dT(n={}){function e(r,o){var h;let a=(h=o.state)==null?void 0:h.masked,{pathname:u,search:c,hash:d}=a||r.location;return Rh("",{pathname:u,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default",a?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function t(r,o){return typeof o=="string"?o:Ja(o)}return pT(e,t,null,n)}function Yt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hT(){return Math.random().toString(36).substring(2,10)}function _v(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Rh(n,e,t=null,r,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||r||hT(),unstable_mask:o}}function Ja({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function pT(n,e,t,r={}){let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,c="POP",d=null,h=p();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function p(){return(u.state||{idx:null}).idx}function v(){c="POP";let y=p(),_=y==null?null:y-h;h=y,d&&d({action:c,location:T.location,delta:_})}function g(y,_){c="PUSH";let C=xv(y)?y:Rh(T.location,y,_);h=p()+1;let b=_v(C,h),P=T.createHref(C.unstable_mask||C);try{u.pushState(b,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(P)}a&&d&&d({action:c,location:T.location,delta:1})}function S(y,_){c="REPLACE";let C=xv(y)?y:Rh(T.location,y,_);h=p();let b=_v(C,h),P=T.createHref(C.unstable_mask||C);u.replaceState(b,"",P),a&&d&&d({action:c,location:T.location,delta:0})}function M(y){return mT(y)}let T={get action(){return c},get location(){return n(o,u)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(vv,v),d=y,()=>{o.removeEventListener(vv,v),d=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:S,go(y){return u.go(y)}};return T}function mT(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Ja(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function H_(n,e,t="/"){return gT(n,e,t,!1)}function gT(n,e,t,r){let o=typeof e=="string"?Xo(e):e,a=Er(o.pathname||"/",t);if(a==null)return null;let u=G_(n);vT(u);let c=null;for(let d=0;c==null&&d<u.length;++d){let h=RT(a);c=AT(u[d],h,r)}return c}function G_(n,e=[],t=[],r="",o=!1){let a=(u,c,d=o,h)=>{let p={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&d)return;Yt(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let v=Xi([r,p.relativePath]),g=t.concat(p);u.children&&u.children.length>0&&(Yt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),G_(u.children,e,g,v,d)),!(u.path==null&&!u.index)&&e.push({path:v,score:TT(v,u.index),routesMeta:g})};return n.forEach((u,c)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))a(u,c);else for(let h of W_(u.path))a(u,c,!0,h)}),e}function W_(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=W_(r.join("/")),c=[];return c.push(...u.map(d=>d===""?a:[a,d].join("/"))),o&&c.push(...u),c.map(d=>n.startsWith("/")&&d===""?"/":d)}function vT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:wT(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var xT=/^:[\w-]+$/,_T=3,yT=2,ST=1,MT=10,ET=-2,yv=n=>n==="*";function TT(n,e){let t=n.split("/"),r=t.length;return t.some(yv)&&(r+=ET),e&&(r+=yT),t.filter(o=>!yv(o)).reduce((o,a)=>o+(xT.test(a)?_T:a===""?ST:MT),r)}function wT(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function AT(n,e,t=!1){let{routesMeta:r}=n,o={},a="/",u=[];for(let c=0;c<r.length;++c){let d=r[c],h=c===r.length-1,p=a==="/"?e:e.slice(a.length)||"/",v=xc({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),g=d.route;if(!v&&h&&t&&!r[r.length-1].route.index&&(v=xc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Xi([a,v.pathname]),pathnameBase:LT(Xi([a,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(a=Xi([a,v.pathnameBase]))}return u}function xc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=CT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((h,{paramName:p,isOptional:v},g)=>{if(p==="*"){let M=c[g]||"";u=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const S=c[g];return v&&!S?h[p]=void 0:h[p]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:u,pattern:n}}function CT(n,e=!1,t=!0){Qi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,d,h,p)=>{if(r.push({paramName:c,isOptional:d!=null}),d){let v=p.charAt(h+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function RT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Er(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}var bT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function PT(n,e="/"){let{pathname:t,search:r="",hash:o=""}=typeof n=="string"?Xo(n):n,a;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?a=Sv(t.substring(1),"/"):a=Sv(t,e)):a=e,{pathname:a,search:IT(r),hash:NT(o)}}function Sv(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function wd(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function DT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function j_(n){let e=DT(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Yp(n,e,t,r=!1){let o;typeof n=="string"?o=Xo(n):(o={...n},Yt(!o.pathname||!o.pathname.includes("?"),wd("?","pathname","search",o)),Yt(!o.pathname||!o.pathname.includes("#"),wd("#","pathname","hash",o)),Yt(!o.search||!o.search.includes("#"),wd("#","search","hash",o)));let a=n===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),v-=1;o.pathname=g.join("/")}c=v>=0?e[v]:"/"}let d=PT(o,c),h=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}var Xi=n=>n.join("/").replace(/\/\/+/g,"/"),LT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),IT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,NT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,FT=class{constructor(n,e,t,r=!1){this.status=n,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function UT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function OT(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var X_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Y_(n,e){let t=n;if(typeof t!="string"||!bT.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,o=!1;if(X_)try{let a=new URL(window.location.href),u=t.startsWith("//")?new URL(a.protocol+t):new URL(t),c=Er(u.pathname,e);u.origin===a.origin&&c!=null?t=c+u.search+u.hash:o=!0}catch{Qi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $_=["POST","PUT","PATCH","DELETE"];new Set($_);var kT=["GET",...$_];new Set(kT);var Yo=Y.createContext(null);Yo.displayName="DataRouter";var bc=Y.createContext(null);bc.displayName="DataRouterState";var BT=Y.createContext(!1),q_=Y.createContext({isTransitioning:!1});q_.displayName="ViewTransition";var VT=Y.createContext(new Map);VT.displayName="Fetchers";var zT=Y.createContext(null);zT.displayName="Await";var vi=Y.createContext(null);vi.displayName="Navigation";var ul=Y.createContext(null);ul.displayName="Location";var Rr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Rr.displayName="Route";var $p=Y.createContext(null);$p.displayName="RouteError";var K_="REACT_ROUTER_ERROR",HT="REDIRECT",GT="ROUTE_ERROR_RESPONSE";function WT(n){if(n.startsWith(`${K_}:${HT}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function jT(n){if(n.startsWith(`${K_}:${GT}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new FT(e.status,e.statusText,e.data)}catch{}}function XT(n,{relative:e}={}){Yt(cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=Y.useContext(vi),{hash:o,pathname:a,search:u}=fl(n,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:Xi([t,a])),r.createHref({pathname:c,search:u,hash:o})}function cl(){return Y.useContext(ul)!=null}function us(){return Yt(cl(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(ul).location}var Z_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q_(n){Y.useContext(vi).static||Y.useLayoutEffect(n)}function YT(){let{isDataRoute:n}=Y.useContext(Rr);return n?o1():$T()}function $T(){Yt(cl(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(Yo),{basename:e,navigator:t}=Y.useContext(vi),{matches:r}=Y.useContext(Rr),{pathname:o}=us(),a=JSON.stringify(j_(r)),u=Y.useRef(!1);return Q_(()=>{u.current=!0}),Y.useCallback((d,h={})=>{if(Qi(u.current,Z_),!u.current)return;if(typeof d=="number"){t.go(d);return}let p=Yp(d,JSON.parse(a),o,h.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Xi([e,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[e,t,a,o,n])}Y.createContext(null);function fl(n,{relative:e}={}){let{matches:t}=Y.useContext(Rr),{pathname:r}=us(),o=JSON.stringify(j_(t));return Y.useMemo(()=>Yp(n,JSON.parse(o),r,e==="path"),[n,o,r,e])}function qT(n,e){return J_(n,e)}function J_(n,e,t){var y;Yt(cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=Y.useContext(vi),{matches:o}=Y.useContext(Rr),a=o[o.length-1],u=a?a.params:{},c=a?a.pathname:"/",d=a?a.pathnameBase:"/",h=a&&a.route;{let _=h&&h.path||"";ty(c,!h||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let p=us(),v;if(e){let _=typeof e=="string"?Xo(e):e;Yt(d==="/"||((y=_.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=p;let g=v.pathname||"/",S=g;if(d!=="/"){let _=d.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let M=H_(n,{pathname:S});Qi(h||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Qi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=e1(M&&M.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Xi([d,r.encodeLocation?r.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:Xi([d,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,t);return e&&T?Y.createElement(ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},T):T}function KT(){let n=s1(),e=UT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:a},"ErrorBoundary")," or"," ",Y.createElement("code",{style:a},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,u)}var ZT=Y.createElement(KT,null),ey=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=jT(n.digest);t&&(n=t)}let e=n!==void 0?Y.createElement(Rr.Provider,{value:this.props.routeContext},Y.createElement($p.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?Y.createElement(QT,{error:n},e):e}};ey.contextType=BT;var Ad=new WeakMap;function QT({children:n,error:e}){let{basename:t}=Y.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=WT(e.digest);if(r){let o=Ad.get(e);if(o)throw o;let a=Y_(r.location,t);if(X_&&!Ad.get(e))if(a.isExternal||r.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:r.replace}));throw Ad.set(e,u),u}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return n}function JT({routeContext:n,match:e,children:t}){let r=Y.useContext(Yo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Rr.Provider,{value:n},t)}function e1(n,e=[],t){let r=t==null?void 0:t.state;if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let o=n,a=r==null?void 0:r.errors;if(a!=null){let p=o.findIndex(v=>v.route.id&&(a==null?void 0:a[v.route.id])!==void 0);Yt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(t&&r){u=r.renderFallback;for(let p=0;p<o.length;p++){let v=o[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(c=p),v.route.id){let{loaderData:g,errors:S}=r,M=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||M){t.isStatic&&(u=!0),c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}}let d=t==null?void 0:t.onError,h=r&&d?(p,v)=>{var g,S;d(p,{location:r.location,params:((S=(g=r.matches)==null?void 0:g[0])==null?void 0:S.params)??{},unstable_pattern:OT(r.matches),errorInfo:v})}:void 0;return o.reduceRight((p,v,g)=>{let S,M=!1,T=null,y=null;r&&(S=a&&v.route.id?a[v.route.id]:void 0,T=v.route.errorElement||ZT,u&&(c<0&&g===0?(ty("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):c===g&&(M=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,g+1)),C=()=>{let b;return S?b=T:M?b=y:v.route.Component?b=Y.createElement(v.route.Component,null):v.route.element?b=v.route.element:b=p,Y.createElement(JT,{match:v,routeContext:{outlet:p,matches:_,isDataRoute:r!=null},children:b})};return r&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?Y.createElement(ey,{location:r.location,revalidation:r.revalidation,component:T,error:S,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):C()},null)}function qp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t1(n){let e=Y.useContext(Yo);return Yt(e,qp(n)),e}function n1(n){let e=Y.useContext(bc);return Yt(e,qp(n)),e}function i1(n){let e=Y.useContext(Rr);return Yt(e,qp(n)),e}function Kp(n){let e=i1(n),t=e.matches[e.matches.length-1];return Yt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function r1(){return Kp("useRouteId")}function s1(){var r;let n=Y.useContext($p),e=n1("useRouteError"),t=Kp("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function o1(){let{router:n}=t1("useNavigate"),e=Kp("useNavigate"),t=Y.useRef(!1);return Q_(()=>{t.current=!0}),Y.useCallback(async(o,a={})=>{Qi(t.current,Z_),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Mv={};function ty(n,e,t){!e&&!Mv[n]&&(Mv[n]=!0,Qi(!1,t))}Y.memo(a1);function a1({routes:n,future:e,state:t,isStatic:r,onError:o}){return J_(n,void 0,{state:t,isStatic:r,onError:o})}function bh(n){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l1({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:o,static:a=!1,unstable_useTransitions:u}){Yt(!cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=Y.useMemo(()=>({basename:c,navigator:o,static:a,unstable_useTransitions:u,future:{}}),[c,o,a,u]);typeof t=="string"&&(t=Xo(t));let{pathname:h="/",search:p="",hash:v="",state:g=null,key:S="default",unstable_mask:M}=t,T=Y.useMemo(()=>{let y=Er(h,c);return y==null?null:{location:{pathname:y,search:p,hash:v,state:g,key:S,unstable_mask:M},navigationType:r}},[c,h,p,v,g,S,r,M]);return Qi(T!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:Y.createElement(vi.Provider,{value:d},Y.createElement(ul.Provider,{children:e,value:T}))}function u1({children:n,location:e}){return qT(Ph(n),e)}function Ph(n,e=[]){let t=[];return Y.Children.forEach(n,(r,o)=>{if(!Y.isValidElement(r))return;let a=[...e,o];if(r.type===Y.Fragment){t.push.apply(t,Ph(r.props.children,a));return}Yt(r.type===bh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Ph(r.props.children,a)),t.push(u)}),t}var ic="get",rc="application/x-www-form-urlencoded";function Pc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function c1(n){return Pc(n)&&n.tagName.toLowerCase()==="button"}function f1(n){return Pc(n)&&n.tagName.toLowerCase()==="form"}function d1(n){return Pc(n)&&n.tagName.toLowerCase()==="input"}function h1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function p1(n,e){return n.button===0&&(!e||e==="_self")&&!h1(n)}var Ru=null;function m1(){if(Ru===null)try{new FormData(document.createElement("form"),0),Ru=!1}catch{Ru=!0}return Ru}var g1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(n){return n!=null&&!g1.has(n)?(Qi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rc}"`),null):n}function v1(n,e){let t,r,o,a,u;if(f1(n)){let c=n.getAttribute("action");r=c?Er(c,e):null,t=n.getAttribute("method")||ic,o=Cd(n.getAttribute("enctype"))||rc,a=new FormData(n)}else if(c1(n)||d1(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=n.getAttribute("formaction")||c.getAttribute("action");if(r=d?Er(d,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||ic,o=Cd(n.getAttribute("formenctype"))||Cd(c.getAttribute("enctype"))||rc,a=new FormData(c,n),!m1()){let{name:h,type:p,value:v}=n;if(p==="image"){let g=h?`${h}.`:"";a.append(`${g}x`,"0"),a.append(`${g}y`,"0")}else h&&a.append(h,v)}}else{if(Pc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ic,r=null,o=rc,u=n}return a&&o==="text/plain"&&(u=a,a=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:a,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function x1(n,e,t,r){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Er(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function _1(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function S1(n,e,t){let r=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let u=await _1(a,t);return u.links?u.links():[]}return[]}));return w1(r.flat(1).filter(y1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ev(n,e,t,r,o,a){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,c=(d,h)=>{var p;return t[h].pathname!==d.pathname||((p=t[h].route.path)==null?void 0:p.endsWith("*"))&&t[h].params["*"]!==d.params["*"]};return a==="assets"?e.filter((d,h)=>u(d,h)||c(d,h)):a==="data"?e.filter((d,h)=>{var v;let p=r.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(u(d,h)||c(d,h))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function M1(n,e,{includeHydrateFallback:t}={}){return E1(n.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function E1(n){return[...new Set(n)]}function T1(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function w1(n,e){let t=new Set;return new Set(e),n.reduce((r,o)=>{let a=JSON.stringify(T1(o));return t.has(a)||(t.add(a),r.push({key:a,link:o})),r},[])}function ny(){let n=Y.useContext(Yo);return Zp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function A1(){let n=Y.useContext(bc);return Zp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qp=Y.createContext(void 0);Qp.displayName="FrameworkContext";function iy(){let n=Y.useContext(Qp);return Zp(n,"You must render this element inside a <HydratedRouter> element"),n}function C1(n,e){let t=Y.useContext(Qp),[r,o]=Y.useState(!1),[a,u]=Y.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:h,onMouseLeave:p,onTouchStart:v}=e,g=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let T=_=>{_.forEach(C=>{u(C.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{o(!0)},M=()=>{o(!1),u(!1)};return t?n!=="intent"?[a,g,{}]:[a,g,{onFocus:Na(c,S),onBlur:Na(d,M),onMouseEnter:Na(h,S),onMouseLeave:Na(p,M),onTouchStart:Na(v,S)}]:[!1,g,{}]}function Na(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function R1({page:n,...e}){let{router:t}=ny(),r=Y.useMemo(()=>H_(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?Y.createElement(P1,{page:n,matches:r,...e}):null}function b1(n){let{manifest:e,routeModules:t}=iy(),[r,o]=Y.useState([]);return Y.useEffect(()=>{let a=!1;return S1(n,e,t).then(u=>{a||o(u)}),()=>{a=!0}},[n,e,t]),r}function P1({page:n,matches:e,...t}){let r=us(),{future:o,manifest:a,routeModules:u}=iy(),{basename:c}=ny(),{loaderData:d,matches:h}=A1(),p=Y.useMemo(()=>Ev(n,e,h,a,r,"data"),[n,e,h,a,r]),v=Y.useMemo(()=>Ev(n,e,h,a,r,"assets"),[n,e,h,a,r]),g=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let T=new Set,y=!1;if(e.forEach(C=>{var P;let b=a.routes[C.route.id];!b||!b.hasLoader||(!p.some(L=>L.route.id===C.route.id)&&C.route.id in d&&((P=u[C.route.id])!=null&&P.shouldRevalidate)||b.hasClientLoader?y=!0:T.add(C.route.id))}),T.size===0)return[];let _=x1(n,c,o.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&_.searchParams.set("_routes",e.filter(C=>T.has(C.route.id)).map(C=>C.route.id).join(",")),[_.pathname+_.search]},[c,o.unstable_trailingSlashAwareDataRequests,d,r,a,p,e,n,u]),S=Y.useMemo(()=>M1(v,a),[v,a]),M=b1(v);return Y.createElement(Y.Fragment,null,g.map(T=>Y.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),S.map(T=>Y.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),M.map(({key:T,link:y})=>Y.createElement("link",{key:T,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function D1(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var L1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{L1&&(window.__reactRouterVersion="7.13.1")}catch{}function I1({basename:n,children:e,unstable_useTransitions:t,window:r}){let o=Y.useRef();o.current==null&&(o.current=dT({window:r,v5Compat:!0}));let a=o.current,[u,c]=Y.useState({action:a.action,location:a.location}),d=Y.useCallback(h=>{t===!1?c(h):Y.startTransition(()=>c(h))},[t]);return Y.useLayoutEffect(()=>a.listen(d),[a,d]),Y.createElement(l1,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:a,unstable_useTransitions:t})}var ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,el=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:o,reloadDocument:a,replace:u,unstable_mask:c,state:d,target:h,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:S,...M},T){let{basename:y,navigator:_,unstable_useTransitions:C}=Y.useContext(vi),b=typeof p=="string"&&ry.test(p),P=Y_(p,y);p=P.to;let L=XT(p,{relative:o}),N=us(),O=null;if(c){let K=Yp(c,[],N.unstable_mask?N.unstable_mask.pathname:"/",!0);y!=="/"&&(K.pathname=K.pathname==="/"?y:Xi([y,K.pathname])),O=_.createHref(K)}let[w,D,ce]=C1(r,M),B=O1(p,{replace:u,unstable_mask:c,state:d,target:h,preventScrollReset:v,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:S,unstable_useTransitions:C});function ee(K){e&&e(K),K.defaultPrevented||B(K)}let Q=!(P.isExternal||a),fe=Y.createElement("a",{...M,...ce,href:(Q?O:void 0)||P.absoluteURL||L,onClick:Q?ee:e,ref:D1(T,D),target:h,"data-discover":!b&&t==="render"?"true":void 0});return w&&!b?Y.createElement(Y.Fragment,null,fe,Y.createElement(R1,{page:L})):fe});el.displayName="Link";var N1=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:o=!1,style:a,to:u,viewTransition:c,children:d,...h},p){let v=fl(u,{relative:h.relative}),g=us(),S=Y.useContext(bc),{navigator:M,basename:T}=Y.useContext(vi),y=S!=null&&H1(v)&&c===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,C=g.pathname,b=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(C=C.toLowerCase(),b=b?b.toLowerCase():null,_=_.toLowerCase()),b&&T&&(b=Er(b,T)||b);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let L=C===_||!o&&C.startsWith(_)&&C.charAt(P)==="/",N=b!=null&&(b===_||!o&&b.startsWith(_)&&b.charAt(_.length)==="/"),O={isActive:L,isPending:N,isTransitioning:y},w=L?e:void 0,D;typeof r=="function"?D=r(O):D=[r,L?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let ce=typeof a=="function"?a(O):a;return Y.createElement(el,{...h,"aria-current":w,className:D,ref:p,style:ce,to:u,viewTransition:c},typeof d=="function"?d(O):d)});N1.displayName="NavLink";var F1=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:o,state:a,method:u=ic,action:c,onSubmit:d,relative:h,preventScrollReset:p,viewTransition:v,unstable_defaultShouldRevalidate:g,...S},M)=>{let{unstable_useTransitions:T}=Y.useContext(vi),y=V1(),_=z1(c,{relative:h}),C=u.toLowerCase()==="get"?"get":"post",b=typeof c=="string"&&ry.test(c),P=L=>{if(d&&d(L),L.defaultPrevented)return;L.preventDefault();let N=L.nativeEvent.submitter,O=(N==null?void 0:N.getAttribute("formmethod"))||u,w=()=>y(N||L.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:o,state:a,relative:h,preventScrollReset:p,viewTransition:v,unstable_defaultShouldRevalidate:g});T&&t!==!1?Y.startTransition(()=>w()):w()};return Y.createElement("form",{ref:M,method:C,action:_,onSubmit:r?d:P,...S,"data-discover":!b&&n==="render"?"true":void 0})});F1.displayName="Form";function U1(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sy(n){let e=Y.useContext(Yo);return Yt(e,U1(n)),e}function O1(n,{target:e,replace:t,unstable_mask:r,state:o,preventScrollReset:a,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let p=YT(),v=us(),g=fl(n,{relative:u});return Y.useCallback(S=>{if(p1(S,e)){S.preventDefault();let M=t!==void 0?t:Ja(v)===Ja(g),T=()=>p(n,{replace:M,unstable_mask:r,state:o,preventScrollReset:a,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d});h?Y.startTransition(()=>T()):T()}},[v,p,g,t,r,o,e,n,a,u,c,d,h])}var k1=0,B1=()=>`__${String(++k1)}__`;function V1(){let{router:n}=sy("useSubmit"),{basename:e}=Y.useContext(vi),t=r1(),r=n.fetch,o=n.navigate;return Y.useCallback(async(a,u={})=>{let{action:c,method:d,encType:h,formData:p,body:v}=v1(a,e);if(u.navigate===!1){let g=u.fetcherKey||B1();await r(g,t,u.action||c,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:p,body:v,formMethod:u.method||d,formEncType:u.encType||h,flushSync:u.flushSync})}else await o(u.action||c,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:p,body:v,formMethod:u.method||d,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,t])}function z1(n,{relative:e}={}){let{basename:t}=Y.useContext(vi),r=Y.useContext(Rr);Yt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),a={...fl(n||".",{relative:e})},u=us();if(n==null){a.search=u.search;let c=new URLSearchParams(a.search),d=c.getAll("index");if(d.some(p=>p==="")){c.delete("index"),d.filter(v=>v).forEach(v=>c.append("index",v));let p=c.toString();a.search=p?`?${p}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Xi([t,a.pathname])),Ja(a)}function H1(n,{relative:e}={}){let t=Y.useContext(q_);Yt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=sy("useViewTransitionState"),o=fl(n,{relative:e});if(!t.isTransitioning)return!1;let a=Er(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Er(t.nextLocation.pathname,r)||t.nextLocation.pathname;return xc(o.pathname,u)!=null||xc(o.pathname,a)!=null}function G1(){const[n,e]=Y.useState({x:0,y:0});return Y.useEffect(()=>{let t,r=0;const o=a=>{const u=Date.now();u-r<50||(r=u,t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e({x:a.clientX,y:a.clientY})}))};return window.addEventListener("mousemove",o,{passive:!0}),()=>{window.removeEventListener("mousemove",o),t&&cancelAnimationFrame(t)}},[]),k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#0a0a0a]"}),k.jsx("div",{className:"fixed w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 blur-[150px] opacity-40 animate-float",style:{top:"10%",left:"-5%",willChange:"transform",transform:"translateZ(0)"}}),k.jsx("div",{className:"fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-[120px] opacity-30 animate-float-delayed",style:{bottom:"10%",right:"-5%",willChange:"transform",transform:"translateZ(0)"}}),k.jsx("div",{className:"fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/8 to-violet-500/8 blur-[100px] opacity-25 animate-float",style:{top:"50%",left:"30%",willChange:"transform",transform:"translateZ(0)"}}),k.jsx("div",{className:"hidden md:block fixed w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none transition-all duration-500 ease-out",style:{left:n.x-250,top:n.y-250,willChange:"transform",transform:"translateZ(0)"}}),k.jsx("div",{className:"fixed inset-0 opacity-[0.015]",style:{backgroundImage:`
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),k.jsx("div",{className:"fixed inset-0 opacity-[0.025] mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`}})]})}function W1(){return Y.useEffect(()=>{document.title="Lance Studio";const n=document.querySelector('meta[name="description"]');n&&n.setAttribute("content","Lance Studio creates innovative digital tools and tabletop gaming accessories.")},[]),k.jsxs("div",{className:"relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]",children:[k.jsx(G1,{}),k.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col",children:[k.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/[0.06]",children:k.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",children:[k.jsx("span",{className:"text-white text-sm tracking-[0.25em] uppercase font-medium",children:"Lance Studio"}),k.jsxs("div",{className:"flex items-center gap-6",children:[k.jsx(el,{to:"/spool",className:"text-sm text-slate-400 hover:text-white transition-colors duration-300",children:"Spool Tracker"}),k.jsx("a",{href:"mailto:hello@lance-studio.com",className:"text-sm text-slate-400 hover:text-white transition-colors duration-300",children:"Contact"})]})]})}),k.jsx("section",{className:"flex-1 flex items-center justify-center px-6 pt-32 pb-20 min-h-screen",children:k.jsxs("div",{className:"max-w-5xl w-full text-center",children:[k.jsx("div",{className:"animate-fade-in mb-8",children:k.jsxs("div",{className:"inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-12",children:[k.jsxs("span",{className:"relative flex h-2 w-2",children:[k.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),k.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),k.jsx("span",{className:"text-slate-400 text-xs tracking-widest uppercase",children:"Now Live on the App Store"})]})}),k.jsx("h1",{className:"text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white mb-8 animate-fade-in tracking-tight leading-[0.95]",style:{textShadow:"0 0 80px rgba(16, 185, 129, 0.15)"},children:"Spool Tracker"}),k.jsx("p",{className:"text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 animate-fade-in-up leading-relaxed font-light",children:"The most beautiful way to manage your 3D printing filament inventory. Track every spool, every gram, every print."}),k.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed-2",children:[k.jsxs("a",{href:"https://apps.apple.com/gb/app/spool/id6756892049",target:"_blank",rel:"noopener noreferrer",className:"group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]",children:[k.jsx("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",fill:"currentColor",children:k.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),k.jsxs("div",{className:"text-left",children:[k.jsx("div",{className:"text-[10px] opacity-60 leading-tight",children:"Download on the"}),k.jsx("div",{className:"text-base font-semibold leading-tight -mt-0.5",children:"App Store"})]})]}),k.jsxs(el,{to:"/spool",className:"group relative inline-flex items-center gap-3 px-8 py-4 bg-white/[0.06] text-white border border-white/[0.12] rounded-2xl font-medium text-base transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] backdrop-blur-md",children:[k.jsx("span",{children:"Learn More"}),k.jsx("svg",{className:"w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]}),k.jsx("div",{className:"mt-20 animate-fade-in-delayed-3",children:k.jsxs("div",{className:"relative inline-block",children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur-[60px]"}),k.jsx("div",{className:"relative w-28 h-28 md:w-36 md:h-36 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10",children:k.jsx("img",{src:"/spool-tracker-logo.png",alt:"Spool Tracker",className:"w-full h-full object-cover"})})]})})]})}),k.jsx("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"}),k.jsx("section",{className:"py-32 px-6",children:k.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[k.jsx("span",{className:"text-xs tracking-[0.3em] uppercase text-slate-500 mb-6 block",children:"Also from Lance Studio"}),k.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",style:{textShadow:"0 0 40px rgba(16, 185, 129, 0.1)"},children:"Tabletop Gaming Studio"}),k.jsx("p",{className:"text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed",children:"Custom 3D printed terrain tiles, dungeon pieces, and accessories for board gamers and RPG enthusiasts."}),k.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-10",children:["Custom Terrain","Game Pieces","Made to Order"].map(n=>k.jsx("span",{className:"px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm",children:n},n))}),k.jsxs("a",{href:"https://www.etsy.com/shop/your-shop-name",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm",children:[k.jsx("span",{children:"Visit our Etsy Store"}),k.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})}),k.jsx("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"}),k.jsx("footer",{className:"py-20 px-6",children:k.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[k.jsxs("a",{href:"mailto:hello@lance-studio.com",className:"text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm inline-flex items-center gap-2 mb-8",children:[k.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.5,children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"hello@lance-studio.com"]}),k.jsx("div",{className:"mb-3",children:k.jsx("span",{className:"text-xs tracking-[0.3em] uppercase text-slate-600",children:"Lance Studio"})}),k.jsx("p",{className:"text-slate-600 text-xs",children:"© 2026 Lance Studio. All rights reserved."})]})})]})]})}const oy=Y.createContext({});function Dc(n){const e=Y.useRef(null);return e.current===null&&(e.current=n()),e.current}const Jp=typeof window<"u",em=Jp?Y.useLayoutEffect:Y.useEffect,tm=Y.createContext(null);function nm(n,e){n.indexOf(e)===-1&&n.push(e)}function im(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Ji=(n,e,t)=>t>e?e:t<n?n:t;let tl=()=>{};const Tr={},ay=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function ly(n){return typeof n=="object"&&n!==null}const uy=n=>/^0[^.\s]+$/u.test(n);function rm(n){let e;return()=>(e===void 0&&(e=n()),e)}const Yn=n=>n,j1=(n,e)=>t=>e(n(t)),dl=(...n)=>n.reduce(j1),Bo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class sm{constructor(){this.subscriptions=[]}add(e){return nm(this.subscriptions,e),()=>im(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yi=n=>n*1e3,gi=n=>n/1e3;function om(n,e){return e?n*(1e3/e):0}const cy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,X1=1e-7,Y1=12;function $1(n,e,t,r,o){let a,u,c=0;do u=e+(t-e)/2,a=cy(u,r,o)-n,a>0?t=u:e=u;while(Math.abs(a)>X1&&++c<Y1);return u}function hl(n,e,t,r){if(n===e&&t===r)return Yn;const o=a=>$1(a,0,1,n,t);return a=>a===0||a===1?a:cy(o(a),e,r)}const fy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,dy=n=>e=>1-n(1-e),hy=hl(.33,1.53,.69,.99),am=dy(hy),py=fy(am),my=n=>(n*=2)<1?.5*am(n):.5*(2-Math.pow(2,-10*(n-1))),lm=n=>1-Math.sin(Math.acos(n)),gy=dy(lm),vy=fy(lm),q1=hl(.42,0,1,1),K1=hl(0,0,.58,1),xy=hl(.42,0,.58,1),Z1=n=>Array.isArray(n)&&typeof n[0]!="number",_y=n=>Array.isArray(n)&&typeof n[0]=="number",Q1={linear:Yn,easeIn:q1,easeInOut:xy,easeOut:K1,circIn:lm,circInOut:vy,circOut:gy,backIn:am,backInOut:py,backOut:hy,anticipate:my},J1=n=>typeof n=="string",Tv=n=>{if(_y(n)){tl(n.length===4);const[e,t,r,o]=n;return hl(e,t,r,o)}else if(J1(n))return Q1[n];return n},bu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ew(n,e){let t=new Set,r=new Set,o=!1,a=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(p){u.has(p)&&(h.schedule(p),n()),p(c)}const h={schedule:(p,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&u.add(p),M.has(p)||M.add(p),p},cancel:p=>{r.delete(p),u.delete(p)},process:p=>{if(c=p,o){a=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const tw=40;function yy(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=bu.reduce((b,P)=>(b[P]=ew(a),b),{}),{setup:c,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:S,postRender:M}=u,T=()=>{const b=Tr.useManualTiming?o.timestamp:performance.now();t=!1,Tr.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(b-o.timestamp,tw),1)),o.timestamp=b,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),S.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},y=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:bu.reduce((b,P)=>{const L=u[P];return b[P]=(N,O=!1,w=!1)=>(t||y(),L.schedule(N,O,w)),b},{}),cancel:b=>{for(let P=0;P<bu.length;P++)u[bu[P]].cancel(b)},state:o,steps:u}}const{schedule:Dt,cancel:Ni,state:xn,steps:Rd}=yy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yn,!0);let sc;function nw(){sc=void 0}const Xn={now:()=>(sc===void 0&&Xn.set(xn.isProcessing||Tr.useManualTiming?xn.timestamp:performance.now()),sc),set:n=>{sc=n,queueMicrotask(nw)}},Sy=n=>e=>typeof e=="string"&&e.startsWith(n),My=Sy("--"),iw=Sy("var(--"),um=n=>iw(n)?rw.test(n.split("/*")[0].trim()):!1,rw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$o={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},nl={...$o,transform:n=>Ji(0,1,n)},Pu={...$o,default:1},$a=n=>Math.round(n*1e5)/1e5,cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sw(n){return n==null}const ow=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,fm=(n,e)=>t=>!!(typeof t=="string"&&ow.test(t)&&t.startsWith(n)||e&&!sw(t)&&Object.prototype.hasOwnProperty.call(t,e)),Ey=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,u,c]=r.match(cm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},aw=n=>Ji(0,255,n),bd={...$o,transform:n=>Math.round(aw(n))},ks={test:fm("rgb","red"),parse:Ey("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+bd.transform(n)+", "+bd.transform(e)+", "+bd.transform(t)+", "+$a(nl.transform(r))+")"};function lw(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Dh={test:fm("#"),parse:lw,transform:ks.transform},pl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),is=pl("deg"),$i=pl("%"),st=pl("px"),uw=pl("vh"),cw=pl("vw"),wv={...$i,parse:n=>$i.parse(n)/100,transform:n=>$i.transform(n*100)},Po={test:fm("hsl","hue"),parse:Ey("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+$i.transform($a(e))+", "+$i.transform($a(t))+", "+$a(nl.transform(r))+")"},on={test:n=>ks.test(n)||Dh.test(n)||Po.test(n),parse:n=>ks.test(n)?ks.parse(n):Po.test(n)?Po.parse(n):Dh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ks.transform(n):Po.transform(n),getAnimatableNone:n=>{const e=on.parse(n);return e.alpha=0,on.transform(e)}},fw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(cm))==null?void 0:e.length)||0)+(((t=n.match(fw))==null?void 0:t.length)||0)>0}const Ty="number",wy="color",hw="var",pw="var(",Av="${}",mw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function il(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const c=e.replace(mw,d=>(on.test(d)?(r.color.push(a),o.push(wy),t.push(on.parse(d))):d.startsWith(pw)?(r.var.push(a),o.push(hw),t.push(d)):(r.number.push(a),o.push(Ty),t.push(parseFloat(d))),++a,Av)).split(Av);return{values:t,split:c,indexes:r,types:o}}function Ay(n){return il(n).values}function Cy(n){const{split:e,types:t}=il(n),r=e.length;return o=>{let a="";for(let u=0;u<r;u++)if(a+=e[u],o[u]!==void 0){const c=t[u];c===Ty?a+=$a(o[u]):c===wy?a+=on.transform(o[u]):a+=o[u]}return a}}const gw=n=>typeof n=="number"?0:on.test(n)?on.getAnimatableNone(n):n;function vw(n){const e=Ay(n);return Cy(n)(e.map(gw))}const as={test:dw,parse:Ay,createTransformer:Cy,getAnimatableNone:vw};function Pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function xw({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,u=0;if(!e)o=a=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Pd(d,c,n+1/3),a=Pd(d,c,n),u=Pd(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:r}}function _c(n,e){return t=>t>0?e:n}const Xt=(n,e,t)=>n+(e-n)*t,Dd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},_w=[Dh,ks,Po],yw=n=>_w.find(e=>e.test(n));function Cv(n){const e=yw(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=xw(t)),t}const Rv=(n,e)=>{const t=Cv(n),r=Cv(e);if(!t||!r)return _c(n,e);const o={...t};return a=>(o.red=Dd(t.red,r.red,a),o.green=Dd(t.green,r.green,a),o.blue=Dd(t.blue,r.blue,a),o.alpha=Xt(t.alpha,r.alpha,a),ks.transform(o))},Lh=new Set(["none","hidden"]);function Sw(n,e){return Lh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Mw(n,e){return t=>Xt(n,e,t)}function dm(n){return typeof n=="number"?Mw:typeof n=="string"?um(n)?_c:on.test(n)?Rv:ww:Array.isArray(n)?Ry:typeof n=="object"?on.test(n)?Rv:Ew:_c}function Ry(n,e){const t=[...n],r=t.length,o=n.map((a,u)=>dm(a)(a,e[u]));return a=>{for(let u=0;u<r;u++)t[u]=o[u](a);return t}}function Ew(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=dm(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function Tw(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],u=n.indexes[a][r[a]],c=n.values[u]??0;t[o]=c,r[a]++}return t}const ww=(n,e)=>{const t=as.createTransformer(e),r=il(n),o=il(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Lh.has(n)&&!o.values.length||Lh.has(e)&&!r.values.length?Sw(n,e):dl(Ry(Tw(r,o),o.values),t):_c(n,e)};function by(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Xt(n,e,t):dm(n)(n,e)}const Aw=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Dt.update(e,t),stop:()=>Ni(e),now:()=>xn.isProcessing?xn.timestamp:Xn.now()}},Py=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},yc=2e4;function hm(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<yc;)e+=t,r=n.next(e);return e>=yc?1/0:e}function Cw(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(hm(r),yc);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:gi(o)}}const Rw=5;function Dy(n,e,t){const r=Math.max(e-Rw,0);return om(t-n(r),e-r)}const Kt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ld=.001;function bw({duration:n=Kt.duration,bounce:e=Kt.bounce,velocity:t=Kt.velocity,mass:r=Kt.mass}){let o,a,u=1-e;u=Ji(Kt.minDamping,Kt.maxDamping,u),n=Ji(Kt.minDuration,Kt.maxDuration,gi(n)),u<1?(o=h=>{const p=h*u,v=p*n,g=p-t,S=Ih(h,u),M=Math.exp(-v);return Ld-g/S*M},a=h=>{const v=h*u*n,g=v*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=Ih(Math.pow(h,2),u);return(-o(h)+Ld>0?-1:1)*((g-S)*M)/T}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Ld+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const c=5/n,d=Dw(o,a,c);if(n=Yi(n),isNaN(d))return{stiffness:Kt.stiffness,damping:Kt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const Pw=12;function Dw(n,e,t){let r=t;for(let o=1;o<Pw;o++)r=r-n(r)/e(r);return r}function Ih(n,e){return n*Math.sqrt(1-e*e)}const Lw=["duration","bounce"],Iw=["stiffness","damping","mass"];function bv(n,e){return e.some(t=>n[t]!==void 0)}function Nw(n){let e={velocity:Kt.velocity,stiffness:Kt.stiffness,damping:Kt.damping,mass:Kt.mass,isResolvedFromDuration:!1,...n};if(!bv(n,Iw)&&bv(n,Lw))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Ji(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Kt.mass,stiffness:o,damping:a}}else{const t=bw(n);e={...e,...t,mass:Kt.mass},e.isResolvedFromDuration=!0}return e}function Sc(n=Kt.visualDuration,e=Kt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:S}=Nw({...t,velocity:-gi(t.velocity||0)}),M=g||0,T=h/(2*Math.sqrt(d*p)),y=u-a,_=gi(Math.sqrt(d/p)),C=Math.abs(y)<5;r||(r=C?Kt.restSpeed.granular:Kt.restSpeed.default),o||(o=C?Kt.restDelta.granular:Kt.restDelta.default);let b;if(T<1){const L=Ih(_,T);b=N=>{const O=Math.exp(-T*_*N);return u-O*((M+T*_*y)/L*Math.sin(L*N)+y*Math.cos(L*N))}}else if(T===1)b=L=>u-Math.exp(-_*L)*(y+(M+_*y)*L);else{const L=_*Math.sqrt(T*T-1);b=N=>{const O=Math.exp(-T*_*N),w=Math.min(L*N,300);return u-O*((M+T*_*y)*Math.sinh(w)+L*y*Math.cosh(w))/L}}const P={calculatedDuration:S&&v||null,next:L=>{const N=b(L);if(S)c.done=L>=v;else{let O=L===0?M:0;T<1&&(O=L===0?Yi(M):Dy(b,L,N));const w=Math.abs(O)<=r,D=Math.abs(u-N)<=o;c.done=w&&D}return c.value=c.done?u:N,c},toString:()=>{const L=Math.min(hm(P),yc),N=Py(O=>P.next(L*O).value,L,30);return L+"ms "+N},toTransition:()=>{}};return P}Sc.applyToOptions=n=>{const e=Cw(n,100,Sc);return n.ease=e.ease,n.duration=Yi(e.duration),n.type="keyframes",n};function Nh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},S=w=>c!==void 0&&w<c||d!==void 0&&w>d,M=w=>c===void 0?d:d===void 0||Math.abs(c-w)<Math.abs(d-w)?c:d;let T=t*e;const y=v+T,_=u===void 0?y:u(y);_!==y&&(T=_-v);const C=w=>-T*Math.exp(-w/r),b=w=>_+C(w),P=w=>{const D=C(w),ce=b(w);g.done=Math.abs(D)<=h,g.value=g.done?_:ce};let L,N;const O=w=>{S(g.value)&&(L=w,N=Sc({keyframes:[g.value,M(g.value)],velocity:Dy(b,w,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return O(0),{calculatedDuration:null,next:w=>{let D=!1;return!N&&L===void 0&&(D=!0,P(w),O(w)),L!==void 0&&w>=L?N.next(w-L):(!D&&P(w),g)}}}function Fw(n,e,t){const r=[],o=t||Tr.mix||by,a=n.length-1;for(let u=0;u<a;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Yn:e;c=dl(d,c)}r.push(c)}return r}function pm(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(tl(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=Fw(e,r,o),d=c.length,h=p=>{if(u&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Bo(n[v],n[v+1],p);return c[v](g)};return t?p=>h(Ji(n[0],n[a-1],p)):h}function Uw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Bo(0,e,r);n.push(Xt(t,1,o))}}function Ly(n){const e=[0];return Uw(e,n.length-1),e}function Ow(n,e){return n.map(t=>t*e)}function kw(n,e){return n.map(()=>e||xy).splice(0,n.length-1)}function qa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=Z1(r)?r.map(Tv):Tv(r),a={done:!1,value:e[0]},u=Ow(t&&t.length===e.length?t:Ly(e),n),c=pm(u,e,{ease:Array.isArray(o)?o:kw(e,o)});return{calculatedDuration:n,next:d=>(a.value=c(d),a.done=d>=n,a)}}const Bw=n=>n!==null;function mm(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(Bw),c=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!c||r===void 0?a[c]:r}const Vw={decay:Nh,inertia:Nh,tween:qa,keyframes:qa,spring:Sc};function Iy(n){typeof n.type=="string"&&(n.type=Vw[n.type])}class gm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const zw=n=>n/100;class Lc extends gm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Xn.now()&&this.tick(Xn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Iy(e);const{type:t=qa,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=e;let{keyframes:c}=e;const d=t||qa;d!==qa&&typeof c[0]!="number"&&(this.mixKeyframes=dl(zw,by(c[0],c[1])),c=[0,100]);const h=d({...e,keyframes:c});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...c].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=hm(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:u,resolvedDuration:c,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:S,type:M,onUpdate:T,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const _=this.currentTime-h*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,P=r;if(v){const w=Math.min(this.currentTime,o)/c;let D=Math.floor(w),ce=w%1;!ce&&w>=1&&(ce=1),ce===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(g==="reverse"?(ce=1-ce,S&&(ce-=S/c)):g==="mirror"&&(P=u)),b=Ji(0,1,ce)*c}const L=C?{done:!1,value:p[0]}:P.next(b);a&&(L.value=a(L.value));let{done:N}=L;!C&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return O&&M!==Nh&&(L.value=mm(p,this.options,y,this.speed)),T&&T(L.value),O&&this.finish(),L}then(e,t){return this.finished.then(e,t)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(this.currentTime)}set time(e){var t;e=Yi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Xn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=gi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=Aw,startTime:t}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Hw(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Bs=n=>n*180/Math.PI,Fh=n=>{const e=Bs(Math.atan2(n[1],n[0]));return Uh(e)},Gw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Fh,rotateZ:Fh,skewX:n=>Bs(Math.atan(n[1])),skewY:n=>Bs(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Uh=n=>(n=n%360,n<0&&(n+=360),n),Pv=Fh,Dv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Lv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Ww={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dv,scaleY:Lv,scale:n=>(Dv(n)+Lv(n))/2,rotateX:n=>Uh(Bs(Math.atan2(n[6],n[5]))),rotateY:n=>Uh(Bs(Math.atan2(-n[2],n[0]))),rotateZ:Pv,rotate:Pv,skewX:n=>Bs(Math.atan(n[4])),skewY:n=>Bs(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Oh(n){return n.includes("scale")?1:0}function kh(n,e){if(!n||n==="none")return Oh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=Ww,o=t;else{const c=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Gw,o=c}if(!o)return Oh(e);const a=r[e],u=o[1].split(",").map(Xw);return typeof a=="function"?a(u):u[a]}const jw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return kh(t,e)};function Xw(n){return parseFloat(n.trim())}const qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ko=new Set(qo),Iv=n=>n===$o||n===st,Yw=new Set(["x","y","z"]),$w=qo.filter(n=>!Yw.has(n));function qw(n){const e=[];return $w.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Hs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>kh(e,"x"),y:(n,{transform:e})=>kh(e,"y")};Hs.translateX=Hs.x;Hs.translateY=Hs.y;const Gs=new Set;let Bh=!1,Vh=!1,zh=!1;function Ny(){if(Vh){const n=Array.from(Gs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=qw(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,u])=>{var c;(c=r.getValue(a))==null||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Vh=!1,Bh=!1,Gs.forEach(n=>n.complete(zh)),Gs.clear()}function Fy(){Gs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Vh=!0)})}function Kw(){zh=!0,Fy(),Ny(),zh=!1}class vm{constructor(e,t,r,o,a,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Gs.add(this),Bh||(Bh=!0,Dt.read(Fy),Dt.resolveKeyframes(Ny))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),u=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const c=r.readValue(t,u);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=u),o&&a===void 0&&o.set(e[0])}Hw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Gs.delete(this)}cancel(){this.state==="scheduled"&&(Gs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Zw=n=>n.startsWith("--");function Qw(n,e,t){Zw(e)?n.style.setProperty(e,t):n.style[e]=t}const Uy=rm(()=>window.ScrollTimeline!==void 0),Jw={};function eA(n,e){const t=rm(n);return()=>Jw[e]??t()}const Oy=eA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ja=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Nv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ja([0,.65,.55,1]),circOut:ja([.55,0,1,.45]),backIn:ja([.31,.01,.66,-.59]),backOut:ja([.33,1.53,.69,.99])};function ky(n,e){if(n)return typeof n=="function"?Oy()?Py(n,e):"ease-out":_y(n)?ja(n):Array.isArray(n)?n.map(t=>ky(t,e)||Nv.easeOut):Nv[n]}function tA(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:c="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=ky(c,o);Array.isArray(v)&&(p.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function By(n){return typeof n=="function"&&"applyToOptions"in n}function nA({type:n,...e}){return By(n)&&Oy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class iA extends gm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:u=!1,finalKeyframe:c,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=u,this.options=e,tl(typeof e.type!="string");const h=nA(e);this.animation=tA(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=mm(o,this.options,c,this.speed);this.updateMotionValue?this.updateMotionValue(p):Qw(t,r,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t;this.isPseudoElement||(t=(e=this.animation).commitStyles)==null||t.call(e)}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return gi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Yi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Uy()?(this.animation.timeline=e,Yn):t(this)}}const Vy={anticipate:my,backInOut:py,circInOut:vy};function rA(n){return n in Vy}function sA(n){typeof n.ease=="string"&&rA(n.ease)&&(n.ease=Vy[n.ease])}const Fv=10;class oA extends iA{constructor(e){sA(e),Iy(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const c=new Lc({...u,autoplay:!1}),d=Yi(this.finishedTime??this.time);t.setWithVelocity(c.sample(d-Fv).value,c.sample(d).value,Fv),c.stop()}}const Uv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(as.test(n)||n==="0")&&!n.startsWith("url("));function aA(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function lA(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=Uv(o,e),c=Uv(a,e);return!u||!c?!1:aA(n)||(t==="spring"||By(t))&&r}function Hh(n){n.duration=0,n.type="keyframes"}const uA=new Set(["opacity","clipPath","filter","transform"]),cA=rm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function fA(n){var p;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:u}=n;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return cA()&&t&&uA.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&a!==0&&u!=="inertia"}const dA=40;class hA extends gm{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",keyframes:c,name:d,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var T,y;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Xn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:u,name:d,motionValue:h,element:p,...v},S=(p==null?void 0:p.KeyframeResolver)||vm;this.keyframeResolver=new S(c,(T,y,_)=>this.onKeyframesResolved(T,y,g,!_),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:a,type:u,velocity:c,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=Xn.now(),lA(e,a,u,c)||((Tr.instantAnimations||!d)&&(p==null||p(mm(e,r,t))),e[0]=e[e.length-1],Hh(r),r.repeat=0);const g={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>dA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},S=!h&&fA(g)?new oA({...g,element:g.motionValue.owner.current}):new Lc(g);S.finished.then(()=>this.notifyFinished()).catch(Yn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),Kw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const pA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mA(n){const e=pA.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function zy(n,e,t=1){const[r,o]=mA(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const u=a.trim();return ay(u)?parseFloat(u):u}return um(o)?zy(o,e,t+1):o}function xm(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const Hy=new Set(["width","height","top","left","right","bottom",...qo]),gA={test:n=>n==="auto",parse:n=>n},Gy=n=>e=>e.test(n),Wy=[$o,st,$i,is,cw,uw,gA],Ov=n=>Wy.find(Gy(n));function vA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||uy(n):!0}const xA=new Set(["brightness","contrast","saturate","opacity"]);function _A(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(cm)||[];if(!r)return n;const o=t.replace(r,"");let a=xA.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const yA=/\b([a-z-]*)\(.*?\)/gu,Gh={...as,getAnimatableNone:n=>{const e=n.match(yA);return e?e.map(_A).join(" "):n}},kv={...$o,transform:Math.round},SA={rotate:is,rotateX:is,rotateY:is,rotateZ:is,scale:Pu,scaleX:Pu,scaleY:Pu,scaleZ:Pu,skew:is,skewX:is,skewY:is,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:nl,originX:wv,originY:wv,originZ:st},_m={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st,...SA,zIndex:kv,fillOpacity:nl,strokeOpacity:nl,numOctaves:kv},MA={..._m,color:on,backgroundColor:on,outlineColor:on,fill:on,stroke:on,borderColor:on,borderTopColor:on,borderRightColor:on,borderBottomColor:on,borderLeftColor:on,filter:Gh,WebkitFilter:Gh},jy=n=>MA[n];function Xy(n,e){let t=jy(n);return t!==Gh&&(t=as),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const EA=new Set(["auto","none","0"]);function TA(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!EA.has(a)&&il(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Xy(t,o)}class wA extends vm{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),um(h))){const p=zy(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Hy.has(r)||e.length!==2)return;const[o,a]=e,u=Ov(o),c=Ov(a);if(u!==c)if(Iv(u)&&Iv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else Hs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||vA(e[o]))&&r.push(o);r.length&&TA(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var c;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,u=r[a];r[a]=Hs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function Yy(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const $y=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function qy(n){return ly(n)&&"offsetHeight"in n}const Bv=30,AA=n=>!isNaN(parseFloat(n)),Ka={current:void 0};class CA{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Xn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Xn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=AA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new sm);const r=this.events[e].add(t);return e==="change"?()=>{r(),Dt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ka.current&&Ka.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Xn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Bv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Bv);return om(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Li(n,e){return new CA(n,e)}const{schedule:ym}=yy(queueMicrotask,!1),bi={x:!1,y:!1};function Ky(){return bi.x||bi.y}function RA(n){return n==="x"||n==="y"?bi[n]?null:(bi[n]=!0,()=>{bi[n]=!1}):bi.x||bi.y?null:(bi.x=bi.y=!0,()=>{bi.x=bi.y=!1})}function Zy(n,e){const t=Yy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Vv(n){return!(n.pointerType==="touch"||Ky())}function bA(n,e,t={}){const[r,o,a]=Zy(n,t),u=c=>{if(!Vv(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const p=v=>{Vv(v)&&(h(v),d.removeEventListener("pointerleave",p))};d.addEventListener("pointerleave",p,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),a}const Qy=(n,e)=>e?n===e?!0:Qy(n,e.parentElement):!1,Sm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,PA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function DA(n){return PA.has(n.tagName)||n.tabIndex!==-1}const oc=new WeakSet;function zv(n){return e=>{e.key==="Enter"&&n(e)}}function Id(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const LA=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=zv(()=>{if(oc.has(t))return;Id(t,"down");const o=zv(()=>{Id(t,"up")}),a=()=>Id(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Hv(n){return Sm(n)&&!Ky()}function IA(n,e,t={}){const[r,o,a]=Zy(n,t),u=c=>{const d=c.currentTarget;if(!Hv(c))return;oc.add(d);const h=e(d,c),p=(S,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),oc.has(d)&&oc.delete(d),Hv(S)&&typeof h=="function"&&h(S,{success:M})},v=S=>{p(S,d===window||d===document||t.useGlobalTarget||Qy(d,S.target))},g=S=>{p(S,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(c=>{(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),qy(c)&&(c.addEventListener("focus",h=>LA(h,o)),!DA(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),a}function Mm(n){return ly(n)&&"ownerSVGElement"in n}const ac=new WeakMap;let rs;const Jy=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:Mm(r)&&"getBBox"in r?r.getBBox()[e]:r[t],NA=Jy("inline","width","offsetWidth"),FA=Jy("block","height","offsetHeight");function UA({target:n,borderBoxSize:e}){var t;(t=ac.get(n))==null||t.forEach(r=>{r(n,{get width(){return NA(n,e)},get height(){return FA(n,e)}})})}function OA(n){n.forEach(UA)}function kA(){typeof ResizeObserver>"u"||(rs=new ResizeObserver(OA))}function BA(n,e){rs||kA();const t=Yy(n);return t.forEach(r=>{let o=ac.get(r);o||(o=new Set,ac.set(r,o)),o.add(e),rs==null||rs.observe(r)}),()=>{t.forEach(r=>{const o=ac.get(r);o==null||o.delete(e),o!=null&&o.size||rs==null||rs.unobserve(r)})}}const lc=new Set;let Do;function VA(){Do=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};lc.forEach(e=>e(n))},window.addEventListener("resize",Do)}function zA(n){return lc.add(n),Do||VA(),()=>{lc.delete(n),!lc.size&&typeof Do=="function"&&(window.removeEventListener("resize",Do),Do=void 0)}}function HA(n,e){return typeof n=="function"?zA(n):BA(n,e)}function eS(n,e){let t;const r=()=>{const{currentTime:o}=e,u=(o===null?0:o.value)/100;t!==u&&n(u),t=u};return Dt.preUpdate(r,!0),()=>Ni(r)}function GA(n){return Mm(n)&&n.tagName==="svg"}function WA(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],u=n[3+t],c=pm(o,a,u);return e?c(r):c}const _n=n=>!!(n&&n.getVelocity);function jA(n,e,t){const r=n.get();let o=null,a=r,u;const c=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,d=()=>{o&&(o.stop(),o=null)},h=()=>{d(),o=new Lc({keyframes:[Wv(n.get()),Wv(a)],velocity:n.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:u})};if(n.attach((p,v)=>{a=p,u=g=>v(Gv(g,c)),Dt.postRender(h)},d),_n(e)){const p=e.on("change",g=>n.set(Gv(g,c))),v=n.on("destroy",p);return()=>{p(),v()}}return d}function Gv(n,e){return e?n+e:n}function Wv(n){return typeof n=="number"?n:parseFloat(n)}const XA=[...Wy,on,as],YA=n=>XA.find(Gy(n)),Ic=Y.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function $A(n=!0){const e=Y.useContext(tm);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Y.useId();Y.useEffect(()=>{if(n)return o(a)},[n]);const u=Y.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,u]:[!0]}const tS=Y.createContext({strict:!1}),jv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vo={};for(const n in jv)Vo[n]={isEnabled:e=>jv[n].some(t=>!!e[t])};function qA(n){for(const e in n)Vo[e]={...Vo[e],...n[e]}}const KA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Mc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||KA.has(n)}let nS=n=>!Mc(n);function ZA(n){typeof n=="function"&&(nS=e=>e.startsWith("on")?!Mc(e):n(e))}try{ZA(require("@emotion/is-prop-valid").default)}catch{}function QA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(nS(o)||t===!0&&Mc(o)||!e&&!Mc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Nc=Y.createContext({});function Fc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function rl(n){return typeof n=="string"||Array.isArray(n)}const Em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tm=["initial",...Em];function Uc(n){return Fc(n.animate)||Tm.some(e=>rl(n[e]))}function iS(n){return!!(Uc(n)||n.variants)}function JA(n,e){if(Uc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||rl(t)?t:void 0,animate:rl(r)?r:void 0}}return n.inherit!==!1?e:{}}function eC(n){const{initial:e,animate:t}=JA(n,Y.useContext(Nc));return Y.useMemo(()=>({initial:e,animate:t}),[Xv(e),Xv(t)])}function Xv(n){return Array.isArray(n)?n.join(" "):n}function Yv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Fa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=Yv(n,e.target.x),r=Yv(n,e.target.y);return`${t}% ${r}%`}},tC={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=as.parse(n);if(o.length>5)return r;const a=as.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Xt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),a(o)}},Wh={borderRadius:{...Fa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Fa,borderTopRightRadius:Fa,borderBottomLeftRadius:Fa,borderBottomRightRadius:Fa,boxShadow:tC};function rS(n,{layout:e,layoutId:t}){return Ko.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Wh[n]||n==="opacity")}const nC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iC=qo.length;function rC(n,e,t){let r="",o=!0;for(let a=0;a<iC;a++){const u=qo[a],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=$y(c,_m[u]);if(!d){o=!1;const p=nC[u]||u;r+=`${p}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function wm(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Ko.has(d)){u=!0;continue}else if(My(d)){o[d]=h;continue}else{const p=$y(h,_m[d]);d.startsWith("origin")?(c=!0,a[d]=p):r[d]=p}}if(e.transform||(u||t?r.transform=rC(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}const Am=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sS(n,e,t){for(const r in e)!_n(e[r])&&!rS(r,t)&&(n[r]=e[r])}function sC({transformTemplate:n},e){return Y.useMemo(()=>{const t=Am();return wm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function oC(n,e){const t=n.style||{},r={};return sS(r,t,n),Object.assign(r,sC(n,e)),r}function aC(n,e){const t={},r=oC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const lC={offset:"stroke-dashoffset",array:"stroke-dasharray"},uC={offset:"strokeDashoffset",array:"strokeDasharray"};function cC(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?lC:uC;n[a.offset]=st.transform(-r);const u=st.transform(e),c=st.transform(t);n[a.array]=`${u} ${c}`}function oS(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:u=0,...c},d,h,p){if(wm(n,c,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&cC(v,o,a,u,!1)}const aS=()=>({...Am(),attrs:{}}),lS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function fC(n,e,t,r){const o=Y.useMemo(()=>{const a=aS();return oS(a,e,lS(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};sS(a,n.style,n),o.style={...a,...o.style}}return o}const dC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cm(n){return typeof n!="string"||n.includes("-")?!1:!!(dC.indexOf(n)>-1||/[A-Z]/u.test(n))}function hC(n,e,t,{latestValues:r},o,a=!1){const c=(Cm(n)?fC:aC)(e,r,o,n),d=QA(e,typeof n=="string",a),h=n!==Y.Fragment?{...d,...c,ref:t}:{},{children:p}=e,v=Y.useMemo(()=>_n(p)?p.get():p,[p]);return Y.createElement(n,{...h,children:v})}function $v(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Rm(n,e,t,r){if(typeof e=="function"){const[o,a]=$v(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=$v(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function uc(n){return _n(n)?n.get():n}function pC({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:mC(t,r,o,n),renderState:e()}}function mC(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=uc(a[g]);let{initial:u,animate:c}=n;const d=Uc(n),h=iS(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const v=p?c:u;if(v&&typeof v!="boolean"&&!Fc(v)){const g=Array.isArray(v)?v:[v];for(let S=0;S<g.length;S++){const M=Rm(n,g[S]);if(M){const{transitionEnd:T,transition:y,..._}=M;for(const C in _){let b=_[C];if(Array.isArray(b)){const P=p?b.length-1:0;b=b[P]}b!==null&&(o[C]=b)}for(const C in T)o[C]=T[C]}}}return o}const uS=n=>(e,t)=>{const r=Y.useContext(Nc),o=Y.useContext(tm),a=()=>pC(n,e,r,o);return t?a():Dc(a)};function bm(n,e,t){var a;const{style:r}=n,o={};for(const u in r)(_n(r[u])||e.style&&_n(e.style[u])||rS(u,n)||((a=t==null?void 0:t.getValue(u))==null?void 0:a.liveStyle)!==void 0)&&(o[u]=r[u]);return o}const gC=uS({scrapeMotionValuesFromProps:bm,createRenderState:Am});function cS(n,e,t){const r=bm(n,e,t);for(const o in n)if(_n(n[o])||_n(e[o])){const a=qo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}const vC=uS({scrapeMotionValuesFromProps:cS,createRenderState:aS}),xC=Symbol.for("motionComponentSymbol");function Lo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _C(n,e,t){return Y.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Lo(t)&&(t.current=r))},[e])}const Pm=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yC="framerAppearId",fS="data-"+Pm(yC),dS=Y.createContext({});function SC(n,e,t,r,o){var T,y;const{visualElement:a}=Y.useContext(Nc),u=Y.useContext(tS),c=Y.useContext(tm),d=Y.useContext(Ic).reducedMotion,h=Y.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(n,{visualState:e,parent:a,props:t,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const p=h.current,v=Y.useContext(dS);p&&!p.projection&&o&&(p.type==="html"||p.type==="svg")&&MC(h.current,t,o,v);const g=Y.useRef(!1);Y.useInsertionEffect(()=>{p&&g.current&&p.update(t,c)});const S=t[fS],M=Y.useRef(!!S&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,S))&&((y=window.MotionHasOptimisedAnimation)==null?void 0:y.call(window,S)));return em(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),M.current&&p.animationState&&p.animationState.animateChanges())}),Y.useEffect(()=>{p&&(!M.current&&p.animationState&&p.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)==null||_.call(window,S)}),M.current=!1),p.enteringChildren=void 0)}),p}function MC(n,e,t,r){const{layoutId:o,layout:a,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:hS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||c&&Lo(c),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:d,layoutRoot:h})}function hS(n){if(n)return n.options.allowProjection!==!1?n.projection:hS(n.parent)}function Nd(n,{forwardMotionProps:e=!1}={},t,r){t&&qA(t);const o=Cm(n)?vC:gC;function a(c,d){let h;const p={...Y.useContext(Ic),...c,layoutId:EC(c)},{isStatic:v}=p,g=eC(c),S=o(c,v);if(!v&&Jp){TC();const M=wC(p);h=M.MeasureLayout,g.visualElement=SC(n,S,p,r,M.ProjectionNode)}return k.jsxs(Nc.Provider,{value:g,children:[h&&g.visualElement?k.jsx(h,{visualElement:g.visualElement,...p}):null,hC(n,c,_C(S,g.visualElement,d),S,v,e)]})}a.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=Y.forwardRef(a);return u[xC]=n,u}function EC({layoutId:n}){const e=Y.useContext(oy).id;return e&&n!==void 0?e+"-"+n:n}function TC(n,e){Y.useContext(tS).strict}function wC(n){const{drag:e,layout:t}=Vo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function AC(n,e){if(typeof Proxy>"u")return Nd;const t=new Map,r=(a,u)=>Nd(a,u,n,e),o=(a,u)=>r(a,u);return new Proxy(o,{get:(a,u)=>u==="create"?r:(t.has(u)||t.set(u,Nd(u,void 0,n,e)),t.get(u))})}function pS({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function CC({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function RC(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Fd(n){return n===void 0||n===1}function jh({scale:n,scaleX:e,scaleY:t}){return!Fd(n)||!Fd(e)||!Fd(t)}function Is(n){return jh(n)||mS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function mS(n){return qv(n.x)||qv(n.y)}function qv(n){return n&&n!=="0%"}function Ec(n,e,t){const r=n-t,o=e*r;return t+o}function Kv(n,e,t,r,o){return o!==void 0&&(n=Ec(n,o,r)),Ec(n,t,r)+e}function Xh(n,e=0,t=1,r,o){n.min=Kv(n.min,e,t,r,o),n.max=Kv(n.max,e,t,r,o)}function gS(n,{x:e,y:t}){Xh(n.x,e.translate,e.scale,e.originPoint),Xh(n.y,t.translate,t.scale,t.originPoint)}const Zv=.999999999999,Qv=1.0000000000001;function bC(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,u;for(let c=0;c<o;c++){a=t[c],u=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,gS(n,u)),r&&Is(a.latestValues)&&No(n,a.latestValues))}e.x<Qv&&e.x>Zv&&(e.x=1),e.y<Qv&&e.y>Zv&&(e.y=1)}function Io(n,e){n.min=n.min+e,n.max=n.max+e}function Jv(n,e,t,r,o=.5){const a=Xt(n.min,n.max,o);Xh(n,e,t,a,r)}function No(n,e){Jv(n.x,e.x,e.scaleX,e.scale,e.originX),Jv(n.y,e.y,e.scaleY,e.scale,e.originY)}function vS(n,e){return pS(RC(n.getBoundingClientRect(),e))}function PC(n,e,t){const r=vS(n,t),{scroll:o}=e;return o&&(Io(r.x,o.offset.x),Io(r.y,o.offset.y)),r}const ex=()=>({translate:0,scale:1,origin:0,originPoint:0}),Fo=()=>({x:ex(),y:ex()}),tx=()=>({min:0,max:0}),cn=()=>({x:tx(),y:tx()}),Yh={current:null},xS={current:!1};function DC(){if(xS.current=!0,!!Jp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Yh.current=n.matches;n.addEventListener("change",e),e()}else Yh.current=!1}const LC=new WeakMap;function IC(n,e,t){for(const r in e){const o=e[r],a=t[r];if(_n(o))n.addValue(r,o);else if(_n(a))n.addValue(r,Li(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Li(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const nx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class NC{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Xn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,Dt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=Uc(t),this.isVariantNode=iS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const g in v){const S=v[g];d[g]!==void 0&&_n(S)&&S.set(d[g])}}mount(e){var t;this.current=e,LC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),xS.current||DC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yh.current,(t=this.parent)==null||t.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ni(this.notifyUpdate),Ni(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ko.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Dt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Vo){const t=Vo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):cn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<nx.length;r++){const o=nx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=e[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=IC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Li(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(ay(r)||uy(r))?r=parseFloat(r):!YA(r)&&as.test(t)&&(r=Xy(e,t)),this.setBaseTarget(e,_n(r)?r.get():r)),_n(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const u=Rm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);u&&(r=u[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!_n(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new sm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ym.render(this.render)}}class _S extends NC{constructor(){super(...arguments),this.KeyframeResolver=wA}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_n(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function yS(n,{style:e,vars:t},r,o){const a=n.style;let u;for(u in e)a[u]=e[u];o==null||o.applyProjectionStyles(a,r);for(u in t)a.setProperty(u,t[u])}function FC(n){return window.getComputedStyle(n)}class UC extends _S{constructor(){super(...arguments),this.type="html",this.renderInstance=yS}readValueFromInstance(e,t){var r;if(Ko.has(t))return(r=this.projection)!=null&&r.isProjecting?Oh(t):jw(e,t);{const o=FC(e),a=(My(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return vS(e,t)}build(e,t,r){wm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return bm(e,t,r)}}const SS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function OC(n,e,t,r){yS(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(SS.has(o)?o:Pm(o),e.attrs[o])}class kC extends _S{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=cn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ko.has(t)){const r=jy(t);return r&&r.default||0}return t=SS.has(t)?t:Pm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return cS(e,t,r)}build(e,t,r){oS(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){OC(e,t,r,o)}mount(e){this.isSVGTag=lS(e.tagName),super.mount(e)}}const BC=(n,e)=>Cm(n)?new kC(e):new UC(e,{allowProjection:n!==Y.Fragment});function Uo(n,e,t){const r=n.getProps();return Rm(r,e,t!==void 0?t:r.custom,n)}const $h=n=>Array.isArray(n);function VC(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Li(t))}function zC(n){return $h(n)?n[n.length-1]||0:n}function HC(n,e){const t=Uo(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const u in a){const c=zC(a[u]);VC(n,u,c)}}function GC(n){return!!(_n(n)&&n.add)}function qh(n,e){const t=n.getValue("willChange");if(GC(t))return t.add(e);if(!t&&Tr.WillChange){const r=new Tr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function MS(n){return n.props[fS]}const WC=n=>n!==null;function jC(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(WC),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[a]}const XC={type:"spring",stiffness:500,damping:25,restSpeed:10},YC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$C={type:"keyframes",duration:.8},qC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},KC=(n,{keyframes:e})=>e.length>2?$C:Ko.has(n)?n.startsWith("scale")?YC(e[1]):XC:qC;function ZC({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Dm=(n,e,t,r={},o,a)=>u=>{const c=xm(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Yi(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:g=>{e.set(g),c.onUpdate&&c.onUpdate(g)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:a?void 0:o};ZC(c)||Object.assign(p,KC(n,p)),p.duration&&(p.duration=Yi(p.duration)),p.repeatDelay&&(p.repeatDelay=Yi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Hh(p),p.delay===0&&(v=!0)),(Tr.instantAnimations||Tr.skipAnimations)&&(v=!0,Hh(p),p.delay=0),p.allowFlatten=!c.type&&!c.ease,v&&!a&&e.get()!==void 0){const g=jC(p.keyframes,c);if(g!==void 0){Dt.update(()=>{p.onUpdate(g),p.onComplete()});return}}return c.isSync?new Lc(p):new hA(p)};function QC({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ES(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a=n.getDefaultTransition(),transitionEnd:u,...c}=e;r&&(a=r);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const p in c){const v=n.getValue(p,n.latestValues[p]??null),g=c[p];if(g===void 0||h&&QC(h,p))continue;const S={delay:t,...xm(a||{},p)},M=v.get();if(M!==void 0&&!v.isAnimating&&!Array.isArray(g)&&g===M&&!S.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const _=MS(n);if(_){const C=window.MotionHandoffAnimation(_,p,Dt);C!==null&&(S.startTime=C,T=!0)}}qh(n,p),v.start(Dm(p,v,g,n.shouldReduceMotion&&Hy.has(p)?{type:!1}:S,n,T));const y=v.animation;y&&d.push(y)}return u&&Promise.all(d).then(()=>{Dt.update(()=>{u&&HC(n,u)})}),d}function TS(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),u=n.size,c=(u-1)*r;return typeof t=="function"?t(a,u):o===1?a*r:c-a*r}function Kh(n,e,t={}){var d;const r=Uo(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(ES(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=o;return JC(n,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:c}=o;if(c){const[h,p]=c==="beforeChildren"?[a,u]:[u,a];return h().then(()=>p())}else return Promise.all([a(),u(t.delay)])}function JC(n,e,t=0,r=0,o=0,a=1,u){const c=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),c.push(Kh(d,e,{...u,delay:t+(typeof r=="function"?0:r)+TS(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(c)}function eR(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Kh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Kh(n,e,t);else{const o=typeof e=="function"?Uo(n,e,t.custom):e;r=Promise.all(ES(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function wS(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const tR=Tm.length;function AS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?AS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<tR;t++){const r=Tm[t],o=n.props[r];(rl(o)||o===!1)&&(e[r]=o)}return e}const nR=[...Em].reverse(),iR=Em.length;function rR(n){return e=>Promise.all(e.map(({animation:t,options:r})=>eR(n,t,r)))}function sR(n){let e=rR(n),t=ix(),r=!0;const o=d=>(h,p)=>{var g;const v=Uo(n,p,d==="exit"?(g=n.presenceContext)==null?void 0:g.custom:void 0);if(v){const{transition:S,transitionEnd:M,...T}=v;h={...h,...T,...M}}return h};function a(d){e=d(n)}function u(d){const{props:h}=n,p=AS(n.parent)||{},v=[],g=new Set;let S={},M=1/0;for(let y=0;y<iR;y++){const _=nR[y],C=t[_],b=h[_]!==void 0?h[_]:p[_],P=rl(b),L=_===d?C.isActive:null;L===!1&&(M=y);let N=b===p[_]&&b!==h[_]&&P;if(N&&r&&n.manuallyAnimateOnMount&&(N=!1),C.protectedKeys={...S},!C.isActive&&L===null||!b&&!C.prevProp||Fc(b)||typeof b=="boolean")continue;const O=oR(C.prevProp,b);let w=O||_===d&&C.isActive&&!N&&P||y>M&&P,D=!1;const ce=Array.isArray(b)?b:[b];let B=ce.reduce(o(_),{});L===!1&&(B={});const{prevResolvedValues:ee={}}=C,Q={...ee,...B},fe=H=>{w=!0,g.has(H)&&(D=!0,g.delete(H)),C.needsAnimating[H]=!0;const $=n.getValue(H);$&&($.liveStyle=!1)};for(const H in Q){const $=B[H],re=ee[H];if(S.hasOwnProperty(H))continue;let ue=!1;$h($)&&$h(re)?ue=!wS($,re):ue=$!==re,ue?$!=null?fe(H):g.add(H):$!==void 0&&g.has(H)?fe(H):C.protectedKeys[H]=!0}C.prevProp=b,C.prevResolvedValues=B,C.isActive&&(S={...S,...B}),r&&n.blockInitialAnimation&&(w=!1);const K=N&&O;w&&(!K||D)&&v.push(...ce.map(H=>{const $={type:_};if(typeof H=="string"&&r&&!K&&n.manuallyAnimateOnMount&&n.parent){const{parent:re}=n,ue=Uo(re,H);if(re.enteringChildren&&ue){const{delayChildren:U}=ue.transition||{};$.delay=TS(re.enteringChildren,n,U)}}return{animation:H,options:$}}))}if(g.size){const y={};if(typeof h.initial!="boolean"){const _=Uo(n,Array.isArray(h.initial)?h.initial[0]:h.initial);_&&_.transition&&(y.transition=_.transition)}g.forEach(_=>{const C=n.getBaseTarget(_),b=n.getValue(_);b&&(b.liveStyle=!0),y[_]=C??null}),v.push({animation:y})}let T=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(v):Promise.resolve()}function c(d,h){var v;if(t[d].isActive===h)return Promise.resolve();(v=n.variantChildren)==null||v.forEach(g=>{var S;return(S=g.animationState)==null?void 0:S.setActive(d,h)}),t[d].isActive=h;const p=u(d);for(const g in t)t[g].protectedKeys={};return p}return{animateChanges:u,setActive:c,setAnimateFunction:a,getState:()=>t,reset:()=>{t=ix()}}}function oR(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!wS(e,n):!1}function As(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ix(){return{animate:As(!0),whileInView:As(),whileHover:As(),whileTap:As(),whileDrag:As(),whileFocus:As(),exit:As()}}class cs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class aR extends cs{constructor(e){super(e),e.animationState||(e.animationState=sR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Fc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let lR=0;class uR extends cs{constructor(){super(...arguments),this.id=lR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const cR={animation:{Feature:aR},exit:{Feature:uR}};function sl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function ml(n){return{point:{x:n.pageX,y:n.pageY}}}const fR=n=>e=>Sm(e)&&n(e,ml(e));function Za(n,e,t,r){return sl(n,e,fR(t),r)}const CS=1e-4,dR=1-CS,hR=1+CS,RS=.01,pR=0-RS,mR=0+RS;function Fn(n){return n.max-n.min}function gR(n,e,t){return Math.abs(n-e)<=t}function rx(n,e,t,r=.5){n.origin=r,n.originPoint=Xt(e.min,e.max,n.origin),n.scale=Fn(t)/Fn(e),n.translate=Xt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=dR&&n.scale<=hR||isNaN(n.scale))&&(n.scale=1),(n.translate>=pR&&n.translate<=mR||isNaN(n.translate))&&(n.translate=0)}function Qa(n,e,t,r){rx(n.x,e.x,t.x,r?r.originX:void 0),rx(n.y,e.y,t.y,r?r.originY:void 0)}function sx(n,e,t){n.min=t.min+e.min,n.max=n.min+Fn(e)}function vR(n,e,t){sx(n.x,e.x,t.x),sx(n.y,e.y,t.y)}function ox(n,e,t){n.min=e.min-t.min,n.max=n.min+Fn(e)}function Tc(n,e,t){ox(n.x,e.x,t.x),ox(n.y,e.y,t.y)}function hi(n){return[n("x"),n("y")]}const bS=({current:n})=>n?n.ownerDocument.defaultView:null,ax=(n,e)=>Math.abs(n-e);function xR(n,e){const t=ax(n.x,e.x),r=ax(n.y,e.y);return Math.sqrt(t**2+r**2)}class PS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Od(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,M=xR(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!M)return;const{point:T}=g,{timestamp:y}=xn;this.history.push({...T,timestamp:y});const{onStart:_,onMove:C}=this.handlers;S||(_&&_(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,g)},this.handlePointerMove=(g,S)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Ud(S,this.transformPagePoint),Dt.update(this.updatePoint,!0)},this.handlePointerUp=(g,S)=>{this.end();const{onEnd:M,onSessionEnd:T,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Od(g.type==="pointercancel"?this.lastMoveEventInfo:Ud(S,this.transformPagePoint),this.history);this.startEvent&&M&&M(g,_),T&&T(g,_)},!Sm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const c=ml(e),d=Ud(c,this.transformPagePoint),{point:h}=d,{timestamp:p}=xn;this.history=[{...h,timestamp:p}];const{onSessionStart:v}=t;v&&v(e,Od(d,this.history)),this.removeListeners=dl(Za(this.contextWindow,"pointermove",this.handlePointerMove),Za(this.contextWindow,"pointerup",this.handlePointerUp),Za(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ni(this.updatePoint)}}function Ud(n,e){return e?{point:e(n.point)}:n}function lx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Od({point:n},e){return{point:n,delta:lx(n,DS(e)),offset:lx(n,_R(e)),velocity:yR(e,.1)}}function _R(n){return n[0]}function DS(n){return n[n.length-1]}function yR(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=DS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Yi(e)));)t--;if(!r)return{x:0,y:0};const a=gi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function SR(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Xt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Xt(t,n,r.max):Math.min(n,t)),n}function ux(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function MR(n,{top:e,left:t,bottom:r,right:o}){return{x:ux(n.x,t,o),y:ux(n.y,e,r)}}function cx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function ER(n,e){return{x:cx(n.x,e.x),y:cx(n.y,e.y)}}function TR(n,e){let t=.5;const r=Fn(n),o=Fn(e);return o>r?t=Bo(e.min,e.max-r,n.min):r>o&&(t=Bo(n.min,n.max-o,e.min)),Ji(0,1,t)}function wR(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Zh=.35;function AR(n=Zh){return n===!1?n=0:n===!0&&(n=Zh),{x:fx(n,"left","right"),y:fx(n,"top","bottom")}}function fx(n,e,t){return{min:dx(n,e),max:dx(n,t)}}function dx(n,e){return typeof n=="number"?n:n[e]||0}const CR=new WeakMap;class RR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=cn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ml(v).point)},u=(v,g)=>{const{drag:S,dragPropagation:M,onDragStart:T}=this.getProps();if(S&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=RA(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hi(_=>{let C=this.getAxisMotionValue(_).get()||0;if($i.test(C)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[_];P&&(C=Fn(P)*(parseFloat(C)/100))}}this.originPoint[_]=C}),T&&Dt.postRender(()=>T(v,g)),qh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},c=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:S,dragDirectionLock:M,onDirectionLock:T,onDrag:y}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:_}=g;if(M&&this.currentDirection===null){this.currentDirection=bR(_),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",g.point,_),this.updateAxis("y",g.point,_),this.visualElement.render(),y&&y(v,g)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>hi(v=>{var g;return this.getAnimationState(v)==="paused"&&((g=this.getAxisMotionValue(v).animation)==null?void 0:g.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new PS(e,{onSessionStart:a,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:bS(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&Dt.postRender(()=>c(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Du(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=SR(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Lo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=MR(r.layoutBox,e):this.constraints=!1,this.elastic=AR(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&hi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=wR(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Lo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=PC(r,o.root,this.visualElement.getTransformPagePoint());let u=ER(o.layout.layoutBox,a);if(t){const c=t(CC(u));this.hasMutatedConstraints=!!c,c&&(u=pS(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=hi(p=>{if(!Du(p,t,this.currentDirection))return;let v=d&&d[p]||{};u&&(v={min:0,max:0});const g=o?200:1e6,S=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return qh(this.visualElement,e),r.start(Dm(e,r,0,t,this.visualElement,!1))}stopAnimation(){hi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){hi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){hi(t=>{const{drag:r}=this.getProps();if(!Du(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];a.set(e[t]-Xt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Lo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};hi(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=TR({min:d,max:d},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),hi(u=>{if(!Du(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Xt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;CR.set(this.visualElement,this);const e=this.visualElement.current,t=Za(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Lo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Dt.read(r);const u=sl(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(hi(p=>{const v=this.getAxisMotionValue(p);v&&(this.originPoint[p]+=d[p].translate,v.set(v.get()+d[p].translate))}),this.visualElement.render())}));return()=>{u(),t(),a(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=Zh,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:c}}}function Du(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function bR(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class PR extends cs{constructor(e){super(e),this.removeGroupControls=Yn,this.removeListeners=Yn,this.controls=new RR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yn}unmount(){this.removeGroupControls(),this.removeListeners()}}const hx=n=>(e,t)=>{n&&Dt.postRender(()=>n(e,t))};class DR extends cs{constructor(){super(...arguments),this.removePointerDownListener=Yn}onPointerDown(e){this.session=new PS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:hx(e),onStart:hx(t),onMove:r,onEnd:(a,u)=>{delete this.session,o&&Dt.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=Za(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const cc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let kd=!1;class LR extends Y.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),kd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),cc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:u}=r;return u&&(u.isPresent=a,kd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||Dt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ym.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;kd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function LS(n){const[e,t]=$A(),r=Y.useContext(oy);return k.jsx(LR,{...n,layoutGroup:r,switchLayoutGroup:Y.useContext(dS),isPresent:e,safeToRemove:t})}function IR(n,e,t){const r=_n(n)?n:Li(n);return r.start(Dm("",r,e,t)),r.animation}const NR=(n,e)=>n.depth-e.depth;class FR{constructor(){this.children=[],this.isDirty=!1}add(e){nm(this.children,e),this.isDirty=!0}remove(e){im(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(NR),this.isDirty=!1,this.children.forEach(e)}}function UR(n,e){const t=Xn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Ni(r),n(a-e))};return Dt.setup(r,!0),()=>Ni(r)}const IS=["TopLeft","TopRight","BottomLeft","BottomRight"],OR=IS.length,px=n=>typeof n=="string"?parseFloat(n):n,mx=n=>typeof n=="number"||st.test(n);function kR(n,e,t,r,o,a){o?(n.opacity=Xt(0,t.opacity??1,BR(r)),n.opacityExit=Xt(e.opacity??1,0,VR(r))):a&&(n.opacity=Xt(e.opacity??1,t.opacity??1,r));for(let u=0;u<OR;u++){const c=`border${IS[u]}Radius`;let d=gx(e,c),h=gx(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||mx(d)===mx(h)?(n[c]=Math.max(Xt(px(d),px(h),r),0),($i.test(h)||$i.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Xt(e.rotate||0,t.rotate||0,r))}function gx(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const BR=NS(0,.5,gy),VR=NS(.5,.95,Yn);function NS(n,e,t){return r=>r<n?0:r>e?1:t(Bo(n,e,r))}function vx(n,e){n.min=e.min,n.max=e.max}function wi(n,e){vx(n.x,e.x),vx(n.y,e.y)}function xx(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function _x(n,e,t,r,o){return n-=e,n=Ec(n,1/t,r),o!==void 0&&(n=Ec(n,1/o,r)),n}function zR(n,e=0,t=1,r=.5,o,a=n,u=n){if($i.test(e)&&(e=parseFloat(e),e=Xt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Xt(a.min,a.max,r);n===a&&(c-=e),n.min=_x(n.min,e,t,c,o),n.max=_x(n.max,e,t,c,o)}function yx(n,e,[t,r,o],a,u){zR(n,e[t],e[r],e[o],e.scale,a,u)}const HR=["x","scaleX","originX"],GR=["y","scaleY","originY"];function Sx(n,e,t,r){yx(n.x,e,HR,t?t.x:void 0,r?r.x:void 0),yx(n.y,e,GR,t?t.y:void 0,r?r.y:void 0)}function Mx(n){return n.translate===0&&n.scale===1}function FS(n){return Mx(n.x)&&Mx(n.y)}function Ex(n,e){return n.min===e.min&&n.max===e.max}function WR(n,e){return Ex(n.x,e.x)&&Ex(n.y,e.y)}function Tx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function US(n,e){return Tx(n.x,e.x)&&Tx(n.y,e.y)}function wx(n){return Fn(n.x)/Fn(n.y)}function Ax(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class jR{constructor(){this.members=[]}add(e){nm(this.members,e),e.scheduleRender()}remove(e){if(im(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function XR(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||a||u)&&(r=`translate3d(${o}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:g,skewX:S,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),S&&(r+=`skewX(${S}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const Bd=["","X","Y","Z"],YR=1e3;let $R=0;function Vd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function OS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=MS(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Dt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&OS(r)}function kS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=$R++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ZR),this.nodes.forEach(tb),this.nodes.forEach(nb),this.nodes.forEach(QR)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new FR)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new sm),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Mm(u)&&!GA(u),this.instance=u;const{layoutId:c,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||c)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;Dt.read(()=>{v=window.innerWidth}),n(u,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,p&&p(),p=UR(g,250),cc.hasAnimatedSinceResize&&(cc.hasAnimatedSinceResize=!1,this.nodes.forEach(bx)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&h&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||ab,{onLayoutAnimationStart:T,onLayoutAnimationComplete:y}=h.getProps(),_=!this.targetLayout||!US(this.targetLayout,S),C=!v&&g;if(this.options.layoutRoot||this.resumeFrom||C||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...xm(M,"layout"),onPlay:T,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(p,C)}else v||bx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ni(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ib),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&OS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Rx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(eb),this.nodes.forEach(qR),this.nodes.forEach(KR)):this.nodes.forEach(Rx),this.clearAllSnapshots();const c=Xn.now();xn.delta=Ji(0,1e3/60,c-xn.timestamp),xn.timestamp=c,xn.isProcessing=!0,Rd.update.process(xn),Rd.preRender.process(xn),Rd.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ym.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(JR),this.sharedNodes.forEach(rb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fn(this.snapshot.measuredBox.x)&&!Fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=cn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!FS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&this.instance&&(c||Is(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),lb(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return cn();const c=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(ub))){const{scroll:p}=this.root;p&&(Io(c.x,p.offset.x),Io(c.y,p.offset.y))}return c}removeElementScroll(u){var d;const c=cn();if(wi(c,u),(d=this.scroll)!=null&&d.wasRoot)return c;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&wi(c,u),Io(c.x,v.offset.x),Io(c.y,v.offset.y))}return c}applyTransform(u,c=!1){const d=cn();wi(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&No(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Is(p.latestValues)&&No(d,p.latestValues)}return Is(this.latestValues)&&No(d,this.latestValues),d}removeTransform(u){const c=cn();wi(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Is(h.latestValues))continue;jh(h.latestValues)&&h.updateSnapshot();const p=cn(),v=h.measurePageBox();wi(p,v),Sx(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Is(this.latestValues)&&Sx(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var S;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=xn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=cn(),this.targetWithTransforms=cn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wi(this.target,this.layout.layoutBox),gS(this.target,this.targetDelta)):wi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||jh(this.parent.latestValues)||mS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,c,d){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=cn(),this.relativeTargetOrigin=cn(),Tc(this.relativeTargetOrigin,c,d),wi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const u=this.getLead(),c=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;wi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;bC(this.layoutCorrected,this.treeScale,this.path,c),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=cn());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(xx(this.prevProjectionDelta.x,this.projectionDelta.x),xx(this.prevProjectionDelta.y,this.projectionDelta.y)),Qa(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Ax(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ax(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Fo(),this.projectionDelta=Fo(),this.projectionDeltaWithTransform=Fo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=Fo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const g=cn(),S=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=S!==M,y=this.getStack(),_=!y||y.members.length<=1,C=!!(T&&!_&&this.options.crossfade===!0&&!this.path.some(ob));this.animationProgress=0;let b;this.mixTargetDelta=P=>{const L=P/1e3;Px(v.x,u.x,L),Px(v.y,u.y,L),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tc(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sb(this.relativeTarget,this.relativeTargetOrigin,g,L),b&&WR(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=cn()),wi(b,this.relativeTarget)),T&&(this.animationValues=p,kR(p,h,this.latestValues,L,C,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var c,d,h;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Ni(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Dt.update(()=>{cc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Li(0)),this.currentAnimation=IR(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),u.onUpdate&&u.onUpdate(p)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(YR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&BS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||cn();const v=Fn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const g=Fn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}wi(c,d),No(c,p),Qa(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new jR),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Vd("z",u,h,this.animationValues);for(let p=0;p<Bd.length;p++)Vd(`rotate${Bd[p]}`,u,h,this.animationValues),Vd(`skew${Bd[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}applyProjectionStyles(u,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=uc(c==null?void 0:c.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=uc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Is(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=XR(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),u.transform=v;const{x:g,y:S}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${S.origin*100}% 0`,h.animationValues?u.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in Wh){if(p[M]===void 0)continue;const{correct:T,applyTo:y,isCSSVariable:_}=Wh[M],C=v==="none"?p[M]:T(p[M],h);if(y){const b=y.length;for(let P=0;P<b;P++)u[y[P]]=C}else _?this.options.visualElement.renderState.vars[M]=C:u[M]=C}this.options.layoutId&&(u.pointerEvents=h===this?uc(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(Cx),this.root.sharedNodes.clear()}}}function qR(n){n.updateLayout()}function KR(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,u=e.source!==n.layout.source;a==="size"?hi(v=>{const g=u?e.measuredBox[v]:e.layoutBox[v],S=Fn(g);g.min=r[v].min,g.max=g.min+S}):BS(a,e.layoutBox,r)&&hi(v=>{const g=u?e.measuredBox[v]:e.layoutBox[v],S=Fn(r[v]);g.max=g.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+S)});const c=Fo();Qa(c,r,e.layoutBox);const d=Fo();u?Qa(d,n.applyTransform(o,!0),e.measuredBox):Qa(d,r,e.layoutBox);const h=!FS(c);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:S}=v;if(g&&S){const M=cn();Tc(M,e.layoutBox,g.layoutBox);const T=cn();Tc(T,r,S.layoutBox),US(M,T)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function ZR(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function QR(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function JR(n){n.clearSnapshot()}function Cx(n){n.clearMeasurements()}function Rx(n){n.isLayoutDirty=!1}function eb(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function bx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function tb(n){n.resolveTargetDelta()}function nb(n){n.calcProjection()}function ib(n){n.resetSkewAndRotation()}function rb(n){n.removeLeadSnapshot()}function Px(n,e,t){n.translate=Xt(e.translate,0,t),n.scale=Xt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Dx(n,e,t,r){n.min=Xt(e.min,t.min,r),n.max=Xt(e.max,t.max,r)}function sb(n,e,t,r){Dx(n.x,e.x,t.x,r),Dx(n.y,e.y,t.y,r)}function ob(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ab={duration:.45,ease:[.4,0,.1,1]},Lx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ix=Lx("applewebkit/")&&!Lx("chrome/")?Math.round:Yn;function Nx(n){n.min=Ix(n.min),n.max=Ix(n.max)}function lb(n){Nx(n.x),Nx(n.y)}function BS(n,e,t){return n==="position"||n==="preserve-aspect"&&!gR(wx(e),wx(t),.2)}function ub(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const cb=kS({attachResizeListener:(n,e)=>sl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zd={current:void 0},VS=kS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!zd.current){const n=new cb({});n.mount(window),n.setOptions({layoutScroll:!0}),zd.current=n}return zd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),fb={pan:{Feature:DR},drag:{Feature:PR,ProjectionNode:VS,MeasureLayout:LS}};function Fx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Dt.postRender(()=>a(e,ml(e)))}class db extends cs{mount(){const{current:e}=this.node;e&&(this.unmount=bA(e,(t,r)=>(Fx(this.node,r,"Start"),o=>Fx(this.node,o,"End"))))}unmount(){}}class hb extends cs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=dl(sl(this.node.current,"focus",()=>this.onFocus()),sl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ux(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Dt.postRender(()=>a(e,ml(e)))}class pb extends cs{mount(){const{current:e}=this.node;e&&(this.unmount=IA(e,(t,r)=>(Ux(this.node,r,"Start"),(o,{success:a})=>Ux(this.node,o,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qh=new WeakMap,Hd=new WeakMap,mb=n=>{const e=Qh.get(n.target);e&&e(n)},gb=n=>{n.forEach(mb)};function vb({root:n,...e}){const t=n||document;Hd.has(t)||Hd.set(t,{});const r=Hd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(gb,{root:n,...e})),r[o]}function xb(n,e,t){const r=vb(e);return Qh.set(n,t),r.observe(n),()=>{Qh.delete(n),r.unobserve(n)}}const _b={some:0,all:1};class yb extends cs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:_b[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),g=h?p:v;g&&g(d)};return xb(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Sb(e,t))&&this.startObserver()}unmount(){}}function Sb({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Mb={inView:{Feature:yb},tap:{Feature:pb},focus:{Feature:hb},hover:{Feature:db}},Eb={layout:{ProjectionNode:VS,MeasureLayout:LS}},Tb={...cR,...Mb,...fb,...Eb},Ns=AC(Tb,BC),wb=50,Ox=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Ab=()=>({time:0,x:Ox(),y:Ox()}),Cb={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function kx(n,e,t,r){const o=t[e],{length:a,position:u}=Cb[e],c=o.current,d=t.time;o.current=n[`scroll${u}`],o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Bo(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>wb?0:om(o.current-c,h)}function Rb(n,e,t){kx(n,"x",e,t),kx(n,"y",e,t),e.time=t}function bb(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(qy(r))t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let u=null,c=r.parentNode;for(;!u;)c.tagName==="svg"&&(u=c),c=r.parentNode;r=u}else break;return t}const Jh={start:0,center:.5,end:1};function Bx(n,e,t=0){let r=0;if(n in Jh&&(n=Jh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const Pb=[0,0];function Db(n,e,t,r){let o=Array.isArray(n)?n:Pb,a=0,u=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,Jh[n]?n:"0"]),a=Bx(o[0],t,r),u=Bx(o[1],e),a-u}const Lb={All:[[0,0],[1,1]]},Ib={x:0,y:0};function Nb(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function Fb(n,e,t){const{offset:r=Lb.All}=t,{target:o=n,axis:a="y"}=t,u=a==="y"?"height":"width",c=o!==n?bb(o,n):Ib,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:Nb(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let p=!e[a].interpolate;const v=r.length;for(let g=0;g<v;g++){const S=Db(r[g],h[u],d[u],c[a]);!p&&S!==e[a].interpolatorOffsets[g]&&(p=!0),e[a].offset[g]=S}p&&(e[a].interpolate=pm(e[a].offset,Ly(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Ji(0,1,e[a].interpolate(e[a].current))}function Ub(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function Ob(n,e,t,r={}){return{measure:o=>{Ub(n,r.target,t),Rb(n,t,o),(r.offset||r.target)&&Fb(n,t,r)},notify:()=>e(t)}}const Ua=new WeakMap,Vx=new WeakMap,Gd=new WeakMap,zx=n=>n===document.scrollingElement?window:n;function zS(n,{container:e=document.scrollingElement,...t}={}){if(!e)return Yn;let r=Gd.get(e);r||(r=new Set,Gd.set(e,r));const o=Ab(),a=Ob(e,n,o,t);if(r.add(a),!Ua.has(e)){const c=()=>{for(const v of r)v.measure(xn.timestamp);Dt.preUpdate(d)},d=()=>{for(const v of r)v.notify()},h=()=>Dt.read(c);Ua.set(e,h);const p=zx(e);window.addEventListener("resize",h,{passive:!0}),e!==document.documentElement&&Vx.set(e,HA(e,h)),p.addEventListener("scroll",h,{passive:!0}),h()}const u=Ua.get(e);return Dt.read(u,!1,!0),()=>{var h;Ni(u);const c=Gd.get(e);if(!c||(c.delete(a),c.size))return;const d=Ua.get(e);Ua.delete(e),d&&(zx(e).removeEventListener("scroll",d),(h=Vx.get(e))==null||h(),window.removeEventListener("resize",d))}}const Hx=new Map;function kb(n){const e={value:0},t=zS(r=>{e.value=r[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function HS({source:n,container:e,...t}){const{axis:r}=t;n&&(e=n);const o=Hx.get(e)??new Map;Hx.set(e,o);const a=t.target??"self",u=o.get(a)??{},c=r+(t.offset??[]).join(",");return u[c]||(u[c]=!t.target&&Uy()?new ScrollTimeline({source:e,axis:r}):kb({container:e,...t})),u[c]}function Bb(n,e){const t=HS(e);return n.attachTimeline({timeline:e.target?void 0:t,observe:r=>(r.pause(),eS(o=>{r.time=r.iterationDuration*o},t))})}function Vb(n){return n.length===2}function zb(n,e){return Vb(n)?zS(t=>{n(t[e.axis].progress,t)},e):eS(n,HS(e))}function Hb(n,{axis:e="y",container:t=document.scrollingElement,...r}={}){if(!t)return Yn;const o={axis:e,container:t,...r};return typeof n=="function"?zb(n,o):Bb(n,o)}const Gb=()=>({scrollX:Li(0),scrollY:Li(0),scrollXProgress:Li(0),scrollYProgress:Li(0)}),Lu=n=>n?!n.current:!1;function Gx({container:n,target:e,...t}={}){const r=Dc(Gb),o=Y.useRef(null),a=Y.useRef(!1),u=Y.useCallback(()=>(o.current=Hb((c,{x:d,y:h})=>{r.scrollX.set(d.current),r.scrollXProgress.set(d.progress),r.scrollY.set(h.current),r.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var c;(c=o.current)==null||c.call(o)}),[n,e,JSON.stringify(t.offset)]);return em(()=>{if(a.current=!1,Lu(n)||Lu(e)){a.current=!0;return}else return u()},[u]),Y.useEffect(()=>{if(a.current)return tl(!Lu(n)),tl(!Lu(e)),u()},[u]),r}function GS(n){const e=Dc(()=>Li(n)),{isStatic:t}=Y.useContext(Ic);if(t){const[,r]=Y.useState(n);Y.useEffect(()=>e.on("change",r),[])}return e}function WS(n,e){const t=GS(e()),r=()=>t.set(e());return r(),em(()=>{const o=()=>Dt.preRender(r,!1,!0),a=n.map(u=>u.on("change",o));return()=>{a.forEach(u=>u()),Ni(r)}}),t}function Wb(n){Ka.current=[],n();const e=WS(Ka.current,n);return Ka.current=void 0,e}function fc(n,e,t,r){if(typeof n=="function")return Wb(n);const o=typeof e=="function"?e:WA(e,t,r);return Array.isArray(n)?Wx(n,o):Wx([n],([a])=>o(a))}function Wx(n,e){const t=Dc(()=>[]);return WS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function jb(n,e={}){const{isStatic:t}=Y.useContext(Ic),r=()=>_n(n)?n.get():n;if(t)return fc(r);const o=GS(r());return Y.useInsertionEffect(()=>jA(o,n,e),[o,JSON.stringify(e)]),o}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lm="183",Xb=0,jx=1,Yb=2,dc=1,$b=2,Xa=3,ls=0,$n=1,xr=2,yr=0,Oo=1,Xx=2,Yx=3,$x=4,qb=5,Us=100,Kb=101,Zb=102,Qb=103,Jb=104,eP=200,tP=201,nP=202,iP=203,ep=204,tp=205,rP=206,sP=207,oP=208,aP=209,lP=210,uP=211,cP=212,fP=213,dP=214,np=0,ip=1,rp=2,zo=3,sp=4,op=5,ap=6,lp=7,jS=0,hP=1,pP=2,qi=0,XS=1,YS=2,$S=3,qS=4,KS=5,ZS=6,QS=7,JS=300,Ws=301,Ho=302,Wd=303,jd=304,Oc=306,up=1e3,_r=1001,cp=1002,Mn=1003,mP=1004,Iu=1005,bn=1006,Xd=1007,Vs=1008,mi=1009,eM=1010,tM=1011,ol=1012,Im=1013,er=1014,Wi=1015,wr=1016,Nm=1017,Fm=1018,al=1020,nM=35902,iM=35899,rM=1021,sM=1022,Ii=1023,Ar=1026,zs=1027,oM=1028,Um=1029,Go=1030,Om=1031,km=1033,hc=33776,pc=33777,mc=33778,gc=33779,fp=35840,dp=35841,hp=35842,pp=35843,mp=36196,gp=37492,vp=37496,xp=37488,_p=37489,yp=37490,Sp=37491,Mp=37808,Ep=37809,Tp=37810,wp=37811,Ap=37812,Cp=37813,Rp=37814,bp=37815,Pp=37816,Dp=37817,Lp=37818,Ip=37819,Np=37820,Fp=37821,Up=36492,Op=36494,kp=36495,Bp=36283,Vp=36284,zp=36285,Hp=36286,gP=3200,vP=0,xP=1,ss="",pi="srgb",Wo="srgb-linear",wc="linear",It="srgb",go=7680,qx=519,_P=512,yP=513,SP=514,Bm=515,MP=516,EP=517,Vm=518,TP=519,Kx=35044,Zx="300 es",ji=2e3,Ac=2001;function wP(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AP(){const n=Cc("canvas");return n.style.display="block",n}const Qx={};function Jx(...n){const e="THREE."+n.shift();console.log(e,...n)}function aM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=aM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=aM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rc(...n){const e=n.join(" ");e in Qx||(Qx[e]=!0,ut(...n))}function CP(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const RP={[np]:ip,[rp]:ap,[sp]:lp,[zo]:op,[ip]:np,[ap]:rp,[lp]:sp,[op]:zo};class Zo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,Gp=180/Math.PI;function gl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function bP(n,e){return(n%e+e)%e}function $d(n,e,t){return(1-t)*n+t*e}function Oa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(e=0,t=0){Ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,u,c){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[u+0],S=a[u+1],M=a[u+2],T=a[u+3];if(v!==T||d!==g||h!==S||p!==M){let y=d*g+h*S+p*M+v*T;y<0&&(g=-g,S=-S,M=-M,T=-T,y=-y);let _=1-c;if(y<.9995){const C=Math.acos(y),b=Math.sin(C);_=Math.sin(_*C)/b,c=Math.sin(c*C)/b,d=d*_+g*c,h=h*_+S*c,p=p*_+M*c,v=v*_+T*c}else{d=d*_+g*c,h=h*_+S*c,p=p*_+M*c,v=v*_+T*c;const C=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=C,h*=C,p*=C,v*=C}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,u){const c=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[u],g=a[u+1],S=a[u+2],M=a[u+3];return e[t]=c*M+p*v+d*S-h*g,e[t+1]=d*M+p*g+h*v-c*S,e[t+2]=h*M+p*S+c*g-d*v,e[t+3]=p*M-c*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),p=c(o/2),v=c(a/2),g=d(r/2),S=d(o/2),M=d(a/2);switch(u){case"XYZ":this._x=g*p*v+h*S*M,this._y=h*S*v-g*p*M,this._z=h*p*M+g*S*v,this._w=h*p*v-g*S*M;break;case"YXZ":this._x=g*p*v+h*S*M,this._y=h*S*v-g*p*M,this._z=h*p*M-g*S*v,this._w=h*p*v+g*S*M;break;case"ZXY":this._x=g*p*v-h*S*M,this._y=h*S*v+g*p*M,this._z=h*p*M+g*S*v,this._w=h*p*v-g*S*M;break;case"ZYX":this._x=g*p*v-h*S*M,this._y=h*S*v+g*p*M,this._z=h*p*M-g*S*v,this._w=h*p*v+g*S*M;break;case"YZX":this._x=g*p*v+h*S*M,this._y=h*S*v+g*p*M,this._z=h*p*M-g*S*v,this._w=h*p*v-g*S*M;break;case"XZY":this._x=g*p*v-h*S*M,this._y=h*S*v-g*p*M,this._z=h*p*M+g*S*v,this._w=h*p*v+g*S*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+c+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(u-o)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(p-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(a+h)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(a-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(u-o)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+u*c+o*h-a*d,this._y=o*p+u*d+a*c-r*h,this._z=a*p+u*h+r*d-o*c,this._w=u*p-r*c-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,u=e._w,c=this.dot(e);c<0&&(r=-r,o=-o,a=-a,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),p=2*(c*t-a*o),v=2*(a*r-u*t);return this.x=t+d*h+u*v-c*p,this.y=r+d*p+c*h-a*v,this.z=o+d*v+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-a*c,this.y=a*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qd.copy(this).projectOnVector(e),this.sub(qd)}reflect(e){return this.sub(qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new oe,e_=new Qo;class ht{constructor(e,t,r,o,a,u,c,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,d,h)}set(e,t,r,o,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],S=r[5],M=r[8],T=o[0],y=o[3],_=o[6],C=o[1],b=o[4],P=o[7],L=o[2],N=o[5],O=o[8];return a[0]=u*T+c*C+d*L,a[3]=u*y+c*b+d*N,a[6]=u*_+c*P+d*O,a[1]=h*T+p*C+v*L,a[4]=h*y+p*b+v*N,a[7]=h*_+p*P+v*O,a[2]=g*T+S*C+M*L,a[5]=g*y+S*b+M*N,a[8]=g*_+S*P+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-r*a*p+r*c*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=p*u-c*h,g=c*d-p*a,S=h*a-u*d,M=t*v+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-p*r)*T,e[2]=(c*r-o*u)*T,e[3]=g*T,e[4]=(p*t-o*d)*T,e[5]=(o*a-c*t)*T,e[6]=S*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Kd.makeScale(e,t)),this}rotate(e){return this.premultiply(Kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kd=new ht,t_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PP(){const n={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===It&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=ko(o.r),o.g=ko(o.g),o.b=ko(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ss?wc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Wo]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:t_,fromXYZ:n_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const wt=PP();function Sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class DP{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vo===void 0&&(vo=Cc("canvas")),vo.width=e.width,vo.height=e.height;const o=vo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=vo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Sr(a[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Sr(t[r]/255)*255):t[r]=Sr(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LP=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LP++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Zd(o[u].image)):a.push(Zd(o[u]))}else a=Zd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Zd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?DP.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let IP=0;const Qd=new oe;class Un extends Zo{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=_r,o=_r,a=bn,u=Vs,c=Ii,d=mi,h=Un.DEFAULT_ANISOTROPY,p=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IP++}),this.uuid=gl(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==JS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case up:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case up:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=JS;Un.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],S=d[5],M=d[9],T=d[2],y=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(S+1)/2,L=(_+1)/2,N=(p+g)/4,O=(v+T)/4,w=(M+y)/4;return b>P&&b>L?b<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(b),o=N/r,a=O/r):P>L?P<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),r=N/o,a=w/o):L<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),r=O/a,o=w/a),this.set(r,o,a,t),this}let C=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(v-T)/C,this.z=(g-p)/C,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NP extends Zo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Un(o),u=r.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends NP{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class lM extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FP extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(e,t,r,o,a,u,c,d,h,p,v,g,S,M,T,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,c,d,h,p,v,g,S,M,T,y)}set(e,t,r,o,a,u,c,d,h,p,v,g,S,M,T,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=a,_[5]=u,_[9]=c,_[13]=d,_[2]=h,_[6]=p,_[10]=v,_[14]=g,_[3]=S,_[7]=M,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/xo.setFromMatrixColumn(e,0).length(),a=1/xo.setFromMatrixColumn(e,1).length(),u=1/xo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=u*p,S=u*v,M=c*p,T=c*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=S+M*h,t[5]=g-T*h,t[9]=-c*d,t[2]=T-g*h,t[6]=M+S*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*p,S=d*v,M=h*p,T=h*v;t[0]=g+T*c,t[4]=M*c-S,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=S*c-M,t[6]=T+g*c,t[10]=u*d}else if(e.order==="ZXY"){const g=d*p,S=d*v,M=h*p,T=h*v;t[0]=g-T*c,t[4]=-u*v,t[8]=M+S*c,t[1]=S+M*c,t[5]=u*p,t[9]=T-g*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const g=u*p,S=u*v,M=c*p,T=c*v;t[0]=d*p,t[4]=M*h-S,t[8]=g*h+T,t[1]=d*v,t[5]=T*h+g,t[9]=S*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=T-g*v,t[8]=M*v+S,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*v+M,t[10]=g-T*v}else if(e.order==="XZY"){const g=u*d,S=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+T,t[5]=u*p,t[9]=S*v-M,t[2]=M*v-S,t[6]=c*p,t[10]=T*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UP,e,OP)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Zr.crossVectors(r,ei),Zr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Zr.crossVectors(r,ei)),Zr.normalize(),Nu.crossVectors(ei,Zr),o[0]=Zr.x,o[4]=Nu.x,o[8]=ei.x,o[1]=Zr.y,o[5]=Nu.y,o[9]=ei.y,o[2]=Zr.z,o[6]=Nu.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],S=r[13],M=r[2],T=r[6],y=r[10],_=r[14],C=r[3],b=r[7],P=r[11],L=r[15],N=o[0],O=o[4],w=o[8],D=o[12],ce=o[1],B=o[5],ee=o[9],Q=o[13],fe=o[2],K=o[6],ie=o[10],H=o[14],$=o[3],re=o[7],ue=o[11],U=o[15];return a[0]=u*N+c*ce+d*fe+h*$,a[4]=u*O+c*B+d*K+h*re,a[8]=u*w+c*ee+d*ie+h*ue,a[12]=u*D+c*Q+d*H+h*U,a[1]=p*N+v*ce+g*fe+S*$,a[5]=p*O+v*B+g*K+S*re,a[9]=p*w+v*ee+g*ie+S*ue,a[13]=p*D+v*Q+g*H+S*U,a[2]=M*N+T*ce+y*fe+_*$,a[6]=M*O+T*B+y*K+_*re,a[10]=M*w+T*ee+y*ie+_*ue,a[14]=M*D+T*Q+y*H+_*U,a[3]=C*N+b*ce+P*fe+L*$,a[7]=C*O+b*B+P*K+L*re,a[11]=C*w+b*ee+P*ie+L*ue,a[15]=C*D+b*Q+P*H+L*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],S=e[14],M=e[3],T=e[7],y=e[11],_=e[15],C=d*S-h*g,b=c*S-h*v,P=c*g-d*v,L=u*S-h*p,N=u*g-d*p,O=u*v-c*p;return t*(T*C-y*b+_*P)-r*(M*C-y*L+_*N)+o*(M*b-T*L+_*O)-a*(M*P-T*N+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],S=e[11],M=e[12],T=e[13],y=e[14],_=e[15],C=t*c-r*u,b=t*d-o*u,P=t*h-a*u,L=r*d-o*c,N=r*h-a*c,O=o*h-a*d,w=p*T-v*M,D=p*y-g*M,ce=p*_-S*M,B=v*y-g*T,ee=v*_-S*T,Q=g*_-S*y,fe=C*Q-b*ee+P*B+L*ce-N*D+O*w;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/fe;return e[0]=(c*Q-d*ee+h*B)*K,e[1]=(o*ee-r*Q-a*B)*K,e[2]=(T*O-y*N+_*L)*K,e[3]=(g*N-v*O-S*L)*K,e[4]=(d*ce-u*Q-h*D)*K,e[5]=(t*Q-o*ce+a*D)*K,e[6]=(y*P-M*O-_*b)*K,e[7]=(p*O-g*P+S*b)*K,e[8]=(u*ee-c*ce+h*w)*K,e[9]=(r*ce-t*ee-a*w)*K,e[10]=(M*N-T*P+_*C)*K,e[11]=(v*P-p*N-S*C)*K,e[12]=(c*D-u*B-d*w)*K,e[13]=(t*B-r*D+o*w)*K,e[14]=(T*b-M*L-y*C)*K,e[15]=(p*L-v*b+g*C)*K,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+r,p*d-o*u,0,h*d-o*c,p*d+o*u,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,v=c+c,g=a*h,S=a*p,M=a*v,T=u*p,y=u*v,_=c*v,C=d*h,b=d*p,P=d*v,L=r.x,N=r.y,O=r.z;return o[0]=(1-(T+_))*L,o[1]=(S+P)*L,o[2]=(M-b)*L,o[3]=0,o[4]=(S-P)*N,o[5]=(1-(g+_))*N,o[6]=(y+C)*N,o[7]=0,o[8]=(M+b)*O,o[9]=(y-C)*O,o[10]=(1-(g+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let u=xo.set(o[0],o[1],o[2]).length();const c=xo.set(o[4],o[5],o[6]).length(),d=xo.set(o[8],o[9],o[10]).length();a<0&&(u=-u),Ai.copy(this);const h=1/u,p=1/c,v=1/d;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=p,Ai.elements[5]*=p,Ai.elements[6]*=p,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,t.setFromRotationMatrix(Ai),r.x=u,r.y=c,r.z=d,this}makePerspective(e,t,r,o,a,u,c=ji,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,T;if(d)M=a/(u-a),T=u*a/(u-a);else if(c===ji)M=-(u+a)/(u-a),T=-2*u*a/(u-a);else if(c===Ac)M=-u/(u-a),T=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,u,c=ji,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,T;if(d)M=1/(u-a),T=u/(u-a);else if(c===ji)M=-2/(u-a),T=-(u+a)/(u-a);else if(c===Ac)M=-1/(u-a),T=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const xo=new oe,Ai=new an,UP=new oe(0,0,0),OP=new oe(1,1,1),Zr=new oe,Nu=new oe,ei=new oe,i_=new an,r_=new Qo;class Cr{constructor(e=0,t=0,r=0,o=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class uM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kP=0;const s_=new oe,_o=new Qo,dr=new an,Fu=new oe,ka=new oe,BP=new oe,VP=new Qo,o_=new oe(1,0,0),a_=new oe(0,1,0),l_=new oe(0,0,1),u_={type:"added"},zP={type:"removed"},yo={type:"childadded",child:null},Jd={type:"childremoved",child:null};class ni extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new oe,t=new Cr,r=new Qo,o=new oe(1,1,1);function a(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new ht}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(o_,e)}rotateY(e){return this.rotateOnAxis(a_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,t){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(o_,e)}translateY(e){return this.translateOnAxis(a_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fu.copy(e):Fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ka,Fu,this.up):dr.lookAt(Fu,ka,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),_o.setFromRotationMatrix(dr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u_),yo.child=e,this.dispatchEvent(yo),yo.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zP),Jd.child=e,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,BP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,VP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(c=>({...c})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ni.DEFAULT_UP=new oe(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uu extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HP={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),_=this._getHandJoint(h,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(HP)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const cM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},Ou={h:0,s:0,l:0};function th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=bP(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,u=2*r-a;this.r=th(u,a,e+1/3),this.g=th(u,a,e),this.b=th(u,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function r(a){a!==void 0&&parseFloat(a)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=cM[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return wt.workingToColorSpace(Rn.copy(this),e),Math.round(_t(Rn.r*255,0,255))*65536+Math.round(_t(Rn.g*255,0,255))*256+Math.round(_t(Rn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,a=Rn.b,u=Math.max(r,o,a),c=Math.min(r,o,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=pi){wt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(Ou);const r=$d(Qr.h,Ou.h,t),o=$d(Qr.s,Ou.s,t),a=$d(Qr.l,Ou.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Nt;Nt.NAMES=cM;class GP extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ci=new oe,hr=new oe,nh=new oe,pr=new oe,So=new oe,Mo=new oe,c_=new oe,ih=new oe,rh=new oe,sh=new oe,oh=new nn,ah=new nn,lh=new nn;class Di{constructor(e=new oe,t=new oe,r=new oe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ci.subVectors(o,t),hr.subVectors(r,t),nh.subVectors(e,t);const u=Ci.dot(Ci),c=Ci.dot(hr),d=Ci.dot(nh),h=hr.dot(hr),p=hr.dot(nh),v=u*h-c*c;if(v===0)return a.set(0,0,0),null;const g=1/v,S=(h*d-c*p)*g,M=(u*p-c*d)*g;return a.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,r,o,a,u,c,d){return this.getBarycoord(e,t,r,o,pr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,pr.x),d.addScaledVector(u,pr.y),d.addScaledVector(c,pr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,u){return oh.setScalar(0),ah.setScalar(0),lh.setScalar(0),oh.fromBufferAttribute(e,t),ah.fromBufferAttribute(e,r),lh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(oh,a.x),u.addScaledVector(ah,a.y),u.addScaledVector(lh,a.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),hr.subVectors(e,t),Ci.cross(hr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ci.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let u,c;So.subVectors(o,r),Mo.subVectors(a,r),ih.subVectors(e,r);const d=So.dot(ih),h=Mo.dot(ih);if(d<=0&&h<=0)return t.copy(r);rh.subVectors(e,o);const p=So.dot(rh),v=Mo.dot(rh);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(r).addScaledVector(So,u);sh.subVectors(e,a);const S=So.dot(sh),M=Mo.dot(sh);if(M>=0&&S<=M)return t.copy(a);const T=S*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(Mo,c);const y=p*M-S*v;if(y<=0&&v-p>=0&&S-M>=0)return c_.subVectors(a,o),c=(v-p)/(v-p+(S-M)),t.copy(o).addScaledVector(c_,c);const _=1/(y+T+g);return u=T*_,c=g*_,t.copy(r).addScaledVector(So,u).addScaledVector(Mo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vl{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(a,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ku.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ku.copy(r.boundingBox)),ku.applyMatrix4(e.matrixWorld),this.union(ku)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Bu.subVectors(this.max,Ba),Eo.subVectors(e.a,Ba),To.subVectors(e.b,Ba),wo.subVectors(e.c,Ba),Jr.subVectors(To,Eo),es.subVectors(wo,To),Cs.subVectors(Eo,wo);let t=[0,-Jr.z,Jr.y,0,-es.z,es.y,0,-Cs.z,Cs.y,Jr.z,0,-Jr.x,es.z,0,-es.x,Cs.z,0,-Cs.x,-Jr.y,Jr.x,0,-es.y,es.x,0,-Cs.y,Cs.x,0];return!uh(t,Eo,To,wo,Bu)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,Eo,To,wo,Bu))?!1:(Vu.crossVectors(Jr,es),t=[Vu.x,Vu.y,Vu.z],uh(t,Eo,To,wo,Bu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ri=new oe,ku=new vl,Eo=new oe,To=new oe,wo=new oe,Jr=new oe,es=new oe,Cs=new oe,Ba=new oe,Bu=new oe,Vu=new oe,Rs=new oe;function uh(n,e,t,r,o){for(let a=0,u=n.length-3;a<=u;a+=3){Rs.fromArray(n,a);const c=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),d=e.dot(Rs),h=t.dot(Rs),p=r.dot(Rs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const sn=new oe,zu=new Ft;let WP=0;class Zi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Kx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)zu.fromBufferAttribute(this,t),zu.applyMatrix3(e),this.setXY(t,zu.x,zu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),r=jn(r,this.array),o=jn(o,this.array),a=jn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kx&&(e.usage=this.usage),e}}class fM extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class dM extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mr extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const jP=new vl,Va=new oe,ch=new oe;class Hm{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):jP.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Va,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(ch)),this.expandByPoint(Va.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XP=0;const di=new an,fh=new ni,Ao=new oe,ti=new vl,za=new vl,gn=new oe;class br extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XP++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wP(e)?dM:fM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ht().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,r){return di.makeTranslation(e,t,r),this.applyMatrix4(di),this}scale(e,t,r){return di.makeScale(e,t,r),this.applyMatrix4(di),this}lookAt(e){return fh.lookAt(e),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Mr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];za.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(ti.min,za.min),ti.expandByPoint(gn),gn.addVectors(ti.max,za.max),ti.expandByPoint(gn)):(ti.expandByPoint(za.min),ti.expandByPoint(za.max))}ti.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)gn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(gn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)gn.fromBufferAttribute(c,h),d&&(Ao.fromBufferAttribute(e,h),gn.add(Ao)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let w=0;w<r.count;w++)c[w]=new oe,d[w]=new oe;const h=new oe,p=new oe,v=new oe,g=new Ft,S=new Ft,M=new Ft,T=new oe,y=new oe;function _(w,D,ce){h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,ce),g.fromBufferAttribute(a,w),S.fromBufferAttribute(a,D),M.fromBufferAttribute(a,ce),p.sub(h),v.sub(h),S.sub(g),M.sub(g);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(p,-M.x).multiplyScalar(B),c[w].add(T),c[D].add(T),c[ce].add(T),d[w].add(y),d[D].add(y),d[ce].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,D=C.length;w<D;++w){const ce=C[w],B=ce.start,ee=ce.count;for(let Q=B,fe=B+ee;Q<fe;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new oe,P=new oe,L=new oe,N=new oe;function O(w){L.fromBufferAttribute(o,w),N.copy(L);const D=c[w];b.copy(D),b.sub(L.multiplyScalar(L.dot(D))).normalize(),P.crossVectors(N,D);const B=P.dot(d[w])<0?-1:1;u.setXYZW(w,b.x,b.y,b.z,B)}for(let w=0,D=C.length;w<D;++w){const ce=C[w],B=ce.start,ee=ce.count;for(let Q=B,fe=B+ee;Q<fe;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new oe,a=new oe,u=new oe,c=new oe,d=new oe,h=new oe,p=new oe,v=new oe;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),p.subVectors(u,a),v.subVectors(o,a),p.cross(v),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),c.add(p),d.add(p),h.add(p),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),p.subVectors(u,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,v=c.normalized,g=new h.constructor(d.length*p);let S=0,M=0;for(let T=0,y=d.length;T<y;T++){c.isInterleavedBufferAttribute?S=d[T]*c.data.stride+c.offset:S=d[T]*p;for(let _=0;_<p;_++)g[M++]=h[S++]}return new Zi(g,p,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new br,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,v=h.length;p<v;p++){const g=h[p],S=e(g,r);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];p.push(S.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,S=v.length;g<S;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YP=0;class kc extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YP++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Oo,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ep,this.blendDst=tp,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(r.blending=this.blending),this.side!==ls&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ep&&(r.blendSrc=this.blendSrc),this.blendDst!==tp&&(r.blendDst=this.blendDst),this.blendEquation!==Us&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new oe,dh=new oe,Hu=new oe,ts=new oe,hh=new oe,Gu=new oe,ph=new oe;class $P{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dh.copy(e).add(t).multiplyScalar(.5),Hu.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(dh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Hu),c=ts.dot(this.direction),d=-ts.dot(Hu),h=ts.lengthSq(),p=Math.abs(1-u*u);let v,g,S,M;if(p>0)if(v=u*d-c,g=u*c-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const T=1/p;v*=T,g*=T,S=v*(v+u*g+2*c)+g*(u*v+g+2*d)+h}else g=a,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-u*a+c)),g=v>0?-a:Math.min(Math.max(-a,-d),a),S=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),S=g*(g+2*d)+h):(v=Math.max(0,-(u*a+c)),g=v>0?a:Math.min(Math.max(-a,-d),a),S=-v*v+g*(g+2*d)+h);else g=u>0?-a:a,v=Math.max(0,-(u*g+c)),S=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(dh).addScaledVector(Hu,g),S}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const r=gr.dot(this.direction),o=gr.dot(gr)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,u=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,u=(e.min.y-g.y)*p),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),v>=0?(c=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(c=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,r,o,a){hh.subVectors(t,e),Gu.subVectors(r,e),ph.crossVectors(hh,Gu);let u=this.direction.dot(ph),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ts.subVectors(this.origin,e);const d=c*this.direction.dot(Gu.crossVectors(ts,Gu));if(d<0)return null;const h=c*this.direction.dot(hh.cross(ts));if(h<0||d+h>u)return null;const p=-c*ts.dot(ph);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hM extends kc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=jS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const f_=new an,bs=new $P,Wu=new Hm,d_=new oe,ju=new oe,Xu=new oe,Yu=new oe,mh=new oe,$u=new oe,h_=new oe,qu=new oe;class tr extends ni{constructor(e=new br,t=new hM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){$u.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],v=a[d];p!==0&&(mh.fromBufferAttribute(v,e),u?$u.addScaledVector(mh,p):$u.addScaledVector(mh.sub(t),p))}t.add($u)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wu.copy(r.boundingSphere),Wu.applyMatrix4(a),bs.copy(e.ray).recast(e.near),!(Wu.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Wu,d_)===null||bs.origin.distanceToSquared(d_)>(e.far-e.near)**2))&&(f_.copy(a).invert(),bs.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const y=g[M],_=u[y.materialIndex],C=Math.max(y.start,S.start),b=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let P=C,L=b;P<L;P+=3){const N=c.getX(P),O=c.getX(P+1),w=c.getX(P+2);o=Ku(this,_,e,r,h,p,v,N,O,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(c.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const C=c.getX(y),b=c.getX(y+1),P=c.getX(y+2);o=Ku(this,u,e,r,h,p,v,C,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const y=g[M],_=u[y.materialIndex],C=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=C,L=b;P<L;P+=3){const N=P,O=P+1,w=P+2;o=Ku(this,_,e,r,h,p,v,N,O,w),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const C=y,b=y+1,P=y+2;o=Ku(this,u,e,r,h,p,v,C,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function qP(n,e,t,r,o,a,u,c){let d;if(e.side===$n?d=r.intersectTriangle(u,a,o,!0,c):d=r.intersectTriangle(o,a,u,e.side===ls,c),d===null)return null;qu.copy(c),qu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(qu);return h<t.near||h>t.far?null:{distance:h,point:qu.clone(),object:n}}function Ku(n,e,t,r,o,a,u,c,d,h){n.getVertexPosition(c,ju),n.getVertexPosition(d,Xu),n.getVertexPosition(h,Yu);const p=qP(n,e,t,r,ju,Xu,Yu,h_);if(p){const v=new oe;Di.getBarycoord(h_,ju,Xu,Yu,v),o&&(p.uv=Di.getInterpolatedAttribute(o,c,d,h,v,new Ft)),a&&(p.uv1=Di.getInterpolatedAttribute(a,c,d,h,v,new Ft)),u&&(p.normal=Di.getInterpolatedAttribute(u,c,d,h,v,new oe),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:d,c:h,normal:new oe,materialIndex:0};Di.getNormal(ju,Xu,Yu,g.normal),p.face=g,p.barycoord=v}return p}class KP extends Un{constructor(e=null,t=1,r=1,o,a,u,c,d,h=Mn,p=Mn,v,g){super(null,u,c,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new oe,ZP=new oe,QP=new ht;class Fs{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gh.subVectors(r,t).cross(ZP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||QP.getNormalMatrix(e),o=this.coplanarPoint(gh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Hm,JP=new Ft(.5,.5),Zu=new oe;class pM{constructor(e=new Fs,t=new Fs,r=new Fs,o=new Fs,a=new Fs,u=new Fs){this.planes=[e,t,r,o,a,u]}set(e,t,r,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji,r=!1){const o=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],S=a[7],M=a[8],T=a[9],y=a[10],_=a[11],C=a[12],b=a[13],P=a[14],L=a[15];if(o[0].setComponents(h-u,S-p,_-M,L-C).normalize(),o[1].setComponents(h+u,S+p,_+M,L+C).normalize(),o[2].setComponents(h+c,S+v,_+T,L+b).normalize(),o[3].setComponents(h-c,S-v,_-T,L-b).normalize(),r)o[4].setComponents(d,g,y,P).normalize(),o[5].setComponents(h-d,S-g,_-y,L-P).normalize();else if(o[4].setComponents(h-d,S-g,_-y,L-P).normalize(),t===ji)o[5].setComponents(h+d,S+g,_+y,L+P).normalize();else if(t===Ac)o[5].setComponents(d,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=JP.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Zu.x=o.normal.x>0?e.max.x:e.min.x,Zu.y=o.normal.y>0?e.max.y:e.min.y,Zu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mM extends Un{constructor(e=[],t=Ws,r,o,a,u,c,d,h,p){super(e,t,r,o,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ll extends Un{constructor(e,t,r=er,o,a,u,c=Mn,d=Mn,h,p=Ar,v=1){if(p!==Ar&&p!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,u,c,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class e2 extends ll{constructor(e,t=er,r=Ws,o,a,u=Mn,c=Mn,d,h=Ar){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,u,c,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gM extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends br{constructor(e=1,t=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],v=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,u,a,0),M("z","y","x",1,-1,r,t,-e,u,a,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Mr(h,3)),this.setAttribute("normal",new Mr(p,3)),this.setAttribute("uv",new Mr(v,2));function M(T,y,_,C,b,P,L,N,O,w,D){const ce=P/O,B=L/w,ee=P/2,Q=L/2,fe=N/2,K=O+1,ie=w+1;let H=0,$=0;const re=new oe;for(let ue=0;ue<ie;ue++){const U=ue*B-Q;for(let q=0;q<K;q++){const Re=q*ce-ee;re[T]=Re*C,re[y]=U*b,re[_]=fe,h.push(re.x,re.y,re.z),re[T]=0,re[y]=0,re[_]=N>0?1:-1,p.push(re.x,re.y,re.z),v.push(q/O),v.push(1-ue/w),H+=1}}for(let ue=0;ue<w;ue++)for(let U=0;U<O;U++){const q=g+U+K*ue,Re=g+U+K*(ue+1),Xe=g+(U+1)+K*(ue+1),Qe=g+(U+1)+K*ue;d.push(q,Re,Qe),d.push(Re,Xe,Qe),$+=6}c.addGroup(S,$,D),S+=$,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _l extends br{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,p=d+1,v=e/c,g=t/d,S=[],M=[],T=[],y=[];for(let _=0;_<p;_++){const C=_*g-u;for(let b=0;b<h;b++){const P=b*v-a;M.push(P,-C,0),T.push(0,0,1),y.push(b/c),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let C=0;C<c;C++){const b=C+h*_,P=C+h*(_+1),L=C+1+h*(_+1),N=C+1+h*_;S.push(b,P,N),S.push(P,L,N)}this.setIndex(S),this.setAttribute("position",new Mr(M,3)),this.setAttribute("normal",new Mr(T,3)),this.setAttribute("uv",new Mr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}function jo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const r=jo(n[t]);for(const o in r)e[o]=r[o]}return e}function t2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const n2={clone:jo,merge:Nn};var i2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends kc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i2,this.fragmentShader=r2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=t2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class s2 extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o2 extends kc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends kc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qu=new oe,Ju=new Qo,zi=new oe;class xM extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qu,Ju,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,Ju,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qu,Ju,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,Ju,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new oe,p_=new Ft,m_=new Ft;class Pi extends xM{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,p_,m_),t.subVectors(m_,p_)}setViewOffset(e,t,r,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gm extends xM{constructor(e=-1,t=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=-90,Ro=1;class l2 extends ni{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Co,Ro,e,t);o.layers=this.layers,this.add(o);const a=new Pi(Co,Ro,e,t);a.layers=this.layers,this.add(a);const u=new Pi(Co,Ro,e,t);u.layers=this.layers,this.add(u);const c=new Pi(Co,Ro,e,t);c.layers=this.layers,this.add(c);const d=new Pi(Co,Ro,e,t);d.layers=this.layers,this.add(d);const h=new Pi(Co,Ro,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class u2 extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function g_(n,e,t,r){const o=c2(r);switch(t){case rM:return n*e;case oM:return n*e/o.components*o.byteLength;case Um:return n*e/o.components*o.byteLength;case Go:return n*e*2/o.components*o.byteLength;case Om:return n*e*2/o.components*o.byteLength;case sM:return n*e*3/o.components*o.byteLength;case Ii:return n*e*4/o.components*o.byteLength;case km:return n*e*4/o.components*o.byteLength;case hc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dp:case pp:return Math.max(n,16)*Math.max(e,8)/4;case fp:case hp:return Math.max(n,8)*Math.max(e,8)/2;case mp:case gp:case xp:case _p:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vp:case yp:case Sp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Up:case Op:case kp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bp:case Vp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zp:case Hp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c2(n){switch(n){case mi:case eM:return{byteLength:1,components:1};case ol:case tM:case wr:return{byteLength:2,components:1};case Nm:case Fm:return{byteLength:2,components:4};case er:case Im:case Wi:return{byteLength:4,components:1};case nM:case iM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _M(){let n=null,e=!1,t=null,r=null;function o(a,u){t(a,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function f2(n){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function r(c,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,c),v.length===0)n.bufferSubData(h,0,p);else{v.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<v.length;S++){const M=v[g],T=v[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let S=0,M=v.length;S<M;S++){const T=v[S];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:u}}var d2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,S2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,F2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H2="gl_FragColor = linearToOutputTexel( gl_FragColor );",G2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_D=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ED=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ID=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ND=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:d2,alphahash_pars_fragment:h2,alphamap_fragment:p2,alphamap_pars_fragment:m2,alphatest_fragment:g2,alphatest_pars_fragment:v2,aomap_fragment:x2,aomap_pars_fragment:_2,batching_pars_vertex:y2,batching_vertex:S2,begin_vertex:M2,beginnormal_vertex:E2,bsdfs:T2,iridescence_fragment:w2,bumpmap_pars_fragment:A2,clipping_planes_fragment:C2,clipping_planes_pars_fragment:R2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:P2,color_fragment:D2,color_pars_fragment:L2,color_pars_vertex:I2,color_vertex:N2,common:F2,cube_uv_reflection_fragment:U2,defaultnormal_vertex:O2,displacementmap_pars_vertex:k2,displacementmap_vertex:B2,emissivemap_fragment:V2,emissivemap_pars_fragment:z2,colorspace_fragment:H2,colorspace_pars_fragment:G2,envmap_fragment:W2,envmap_common_pars_fragment:j2,envmap_pars_fragment:X2,envmap_pars_vertex:Y2,envmap_physical_pars_fragment:r3,envmap_vertex:$2,fog_vertex:q2,fog_pars_vertex:K2,fog_fragment:Z2,fog_pars_fragment:Q2,gradientmap_pars_fragment:J2,lightmap_pars_fragment:e3,lights_lambert_fragment:t3,lights_lambert_pars_fragment:n3,lights_pars_begin:i3,lights_toon_fragment:s3,lights_toon_pars_fragment:o3,lights_phong_fragment:a3,lights_phong_pars_fragment:l3,lights_physical_fragment:u3,lights_physical_pars_fragment:c3,lights_fragment_begin:f3,lights_fragment_maps:d3,lights_fragment_end:h3,logdepthbuf_fragment:p3,logdepthbuf_pars_fragment:m3,logdepthbuf_pars_vertex:g3,logdepthbuf_vertex:v3,map_fragment:x3,map_pars_fragment:_3,map_particle_fragment:y3,map_particle_pars_fragment:S3,metalnessmap_fragment:M3,metalnessmap_pars_fragment:E3,morphinstance_vertex:T3,morphcolor_vertex:w3,morphnormal_vertex:A3,morphtarget_pars_vertex:C3,morphtarget_vertex:R3,normal_fragment_begin:b3,normal_fragment_maps:P3,normal_pars_fragment:D3,normal_pars_vertex:L3,normal_vertex:I3,normalmap_pars_fragment:N3,clearcoat_normal_fragment_begin:F3,clearcoat_normal_fragment_maps:U3,clearcoat_pars_fragment:O3,iridescence_pars_fragment:k3,opaque_fragment:B3,packing:V3,premultiplied_alpha_fragment:z3,project_vertex:H3,dithering_fragment:G3,dithering_pars_fragment:W3,roughnessmap_fragment:j3,roughnessmap_pars_fragment:X3,shadowmap_pars_fragment:Y3,shadowmap_pars_vertex:$3,shadowmap_vertex:q3,shadowmask_pars_fragment:K3,skinbase_vertex:Z3,skinning_pars_vertex:Q3,skinning_vertex:J3,skinnormal_vertex:eD,specularmap_fragment:tD,specularmap_pars_fragment:nD,tonemapping_fragment:iD,tonemapping_pars_fragment:rD,transmission_fragment:sD,transmission_pars_fragment:oD,uv_pars_fragment:aD,uv_pars_vertex:lD,uv_vertex:uD,worldpos_vertex:cD,background_vert:fD,background_frag:dD,backgroundCube_vert:hD,backgroundCube_frag:pD,cube_vert:mD,cube_frag:gD,depth_vert:vD,depth_frag:xD,distance_vert:_D,distance_frag:yD,equirect_vert:SD,equirect_frag:MD,linedashed_vert:ED,linedashed_frag:TD,meshbasic_vert:wD,meshbasic_frag:AD,meshlambert_vert:CD,meshlambert_frag:RD,meshmatcap_vert:bD,meshmatcap_frag:PD,meshnormal_vert:DD,meshnormal_frag:LD,meshphong_vert:ID,meshphong_frag:ND,meshphysical_vert:FD,meshphysical_frag:UD,meshtoon_vert:OD,meshtoon_frag:kD,points_vert:BD,points_frag:VD,shadow_vert:zD,shadow_frag:HD,sprite_vert:GD,sprite_frag:WD},De={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Gi={basic:{uniforms:Nn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Nt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Nn([De.common,De.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Nn([De.lights,De.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Gi.physical={uniforms:Nn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ec={r:0,b:0,g:0},Ds=new Cr,jD=new an;function XD(n,e,t,r,o,a){const u=new Nt(0);let c=o===!0?0:1,d,h,p=null,v=0,g=null;function S(C){let b=C.isScene===!0?C.background:null;if(b&&b.isTexture){const P=C.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(C){let b=!1;const P=S(C);P===null?y(u,c):P&&P.isColor&&(y(P,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(C,b){const P=S(b);P&&(P.isCubeTexture||P.mapping===Oc)?(h===void 0&&(h=new tr(new xl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:jo(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ds.copy(b.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jD.makeRotationFromEuler(Ds)),h.material.toneMapped=wt.getTransfer(P.colorSpace)!==It,(p!==P||v!==P.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=P,v=P.version,g=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new tr(new _l(2,2),new Fi({name:"BackgroundMaterial",uniforms:jo(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=wt.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||v!==P.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=P,v=P.version,g=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,b){C.getRGB(ec,vM(n)),t.buffers.color.setClear(ec.r,ec.g,ec.b,b,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,b=1){u.set(C),c=b,y(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,y(u,c)},render:M,addToRenderList:T,dispose:_}}function YD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,u=!1;function c(B,ee,Q,fe,K){let ie=!1;const H=v(B,fe,Q,ee);a!==H&&(a=H,h(a.object)),ie=S(B,fe,Q,K),ie&&M(B,fe,Q,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,P(B,ee,Q,fe),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.createVertexArray()}function h(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function v(B,ee,Q,fe){const K=fe.wireframe===!0;let ie=r[ee.id];ie===void 0&&(ie={},r[ee.id]=ie);const H=B.isInstancedMesh===!0?B.id:0;let $=ie[H];$===void 0&&($={},ie[H]=$);let re=$[Q.id];re===void 0&&(re={},$[Q.id]=re);let ue=re[K];return ue===void 0&&(ue=g(d()),re[K]=ue),ue}function g(B){const ee=[],Q=[],fe=[];for(let K=0;K<t;K++)ee[K]=0,Q[K]=0,fe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Q,attributeDivisors:fe,object:B,attributes:{},index:null}}function S(B,ee,Q,fe){const K=a.attributes,ie=ee.attributes;let H=0;const $=Q.getAttributes();for(const re in $)if($[re].location>=0){const U=K[re];let q=ie[re];if(q===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(q=B.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;H++}return a.attributesNum!==H||a.index!==fe}function M(B,ee,Q,fe){const K={},ie=ee.attributes;let H=0;const $=Q.getAttributes();for(const re in $)if($[re].location>=0){let U=ie[re];U===void 0&&(re==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),re==="instanceColor"&&B.instanceColor&&(U=B.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),K[re]=q,H++}a.attributes=K,a.attributesNum=H,a.index=fe}function T(){const B=a.newAttributes;for(let ee=0,Q=B.length;ee<Q;ee++)B[ee]=0}function y(B){_(B,0)}function _(B,ee){const Q=a.newAttributes,fe=a.enabledAttributes,K=a.attributeDivisors;Q[B]=1,fe[B]===0&&(n.enableVertexAttribArray(B),fe[B]=1),K[B]!==ee&&(n.vertexAttribDivisor(B,ee),K[B]=ee)}function C(){const B=a.newAttributes,ee=a.enabledAttributes;for(let Q=0,fe=ee.length;Q<fe;Q++)ee[Q]!==B[Q]&&(n.disableVertexAttribArray(Q),ee[Q]=0)}function b(B,ee,Q,fe,K,ie,H){H===!0?n.vertexAttribIPointer(B,ee,Q,K,ie):n.vertexAttribPointer(B,ee,Q,fe,K,ie)}function P(B,ee,Q,fe){T();const K=fe.attributes,ie=Q.getAttributes(),H=ee.defaultAttributeValues;for(const $ in ie){const re=ie[$];if(re.location>=0){let ue=K[$];if(ue===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),ue!==void 0){const U=ue.normalized,q=ue.itemSize,Re=e.get(ue);if(Re===void 0)continue;const Xe=Re.buffer,Qe=Re.type,se=Re.bytesPerElement,ge=Qe===n.INT||Qe===n.UNSIGNED_INT||ue.gpuType===Im;if(ue.isInterleavedBufferAttribute){const me=ue.data,Oe=me.stride,Ge=ue.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<re.locationSize;it++)_(re.location+it,me.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<re.locationSize;it++)y(re.location+it);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let it=0;it<re.locationSize;it++)b(re.location+it,q/re.locationSize,Qe,U,Oe*se,(Ge+q/re.locationSize*it)*se,ge)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)_(re.location+me,ue.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<re.locationSize;me++)y(re.location+me);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let me=0;me<re.locationSize;me++)b(re.location+me,q/re.locationSize,Qe,U,q*se,q/re.locationSize*me*se,ge)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(re.location,U);break;case 3:n.vertexAttrib3fv(re.location,U);break;case 4:n.vertexAttrib4fv(re.location,U);break;default:n.vertexAttrib1fv(re.location,U)}}}}C()}function L(){D();for(const B in r){const ee=r[B];for(const Q in ee){const fe=ee[Q];for(const K in fe){const ie=fe[K];for(const H in ie)p(ie[H].object),delete ie[H];delete fe[K]}}delete r[B]}}function N(B){if(r[B.id]===void 0)return;const ee=r[B.id];for(const Q in ee){const fe=ee[Q];for(const K in fe){const ie=fe[K];for(const H in ie)p(ie[H].object),delete ie[H];delete fe[K]}}delete r[B.id]}function O(B){for(const ee in r){const Q=r[ee];for(const fe in Q){const K=Q[fe];if(K[B.id]===void 0)continue;const ie=K[B.id];for(const H in ie)p(ie[H].object),delete ie[H];delete K[B.id]}}}function w(B){for(const ee in r){const Q=r[ee],fe=B.isInstancedMesh===!0?B.id:0,K=Q[fe];if(K!==void 0){for(const ie in K){const H=K[ie];for(const $ in H)p(H[$].object),delete H[$];delete K[ie]}delete Q[fe],Object.keys(Q).length===0&&delete r[ee]}}}function D(){ce(),u=!0,a!==o&&(a=o,h(a.object))}function ce(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:D,resetDefaultState:ce,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:C}}function $D(n,e,t){let r;function o(h){r=h}function a(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(n.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function c(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let S=0;for(let M=0;M<v;M++)S+=p[M];t.update(S,r,1)}function d(h,p,v,g){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],p[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=p[T]*g[T];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function qD(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ii&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const w=O===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==mi&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!w)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ut("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:P,maxSamples:L,samples:N}}function KD(n){const e=this;let t=null,r=0,o=!1,a=!1;const u=new Fs,c=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,S){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,_=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?p(null):h();else{const C=a?0:r,b=C*4;let P=_.clippingState||null;d.value=P,P=p(M,g,b,S);for(let L=0;L!==b;++L)P[L]=t[L];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,S,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,M!==!0||y===null){const _=S+T*4,C=g.matrixWorldInverse;c.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let b=0,P=S;b!==T;++b,P+=4)u.copy(v[b]).applyMatrix4(C,c),u.normal.toArray(y,P),y[P+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const os=4,v_=[.125,.215,.35,.446,.526,.582],Os=20,ZD=256,Ha=new Gm,x_=new Nt;let vh=null,xh=0,_h=0,yh=!1;const QD=new oe;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:u=256,position:c=QD}=a;vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,xh,_h),this._renderer.xr.enabled=yh,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:wr,format:Ii,colorSpace:Wo,depthBuffer:!1},o=y_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JD(a)),this._blurMaterial=tL(a,e,t),this._ggxMaterial=eL(a,e,t)}return o}_compileMaterial(e){const t=new tr(new br,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,r,o,a){const d=new Pi(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(x_),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tr(new xl,new hM({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(x_),_=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[b],a.y,a.z)):P===1?(d.up.set(0,0,h[b]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[b],a.z)):(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[b]));const L=this._cubeSize;bo(o,P*L,b>2?L:0,L,L),v.setRenderTarget(o),_&&v.render(T,d),v.render(e,d)}v.toneMapping=S,v.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ws||e.mapping===Ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const a=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;bo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ha)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[r];c.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,S=v*g,{_lodMax:M}=this,T=this._sizeLods[r],y=3*T*(r>M-os?r-M+os:0),_=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=M-t,bo(a,y,_,3*T,2*T),o.setRenderTarget(a),o.render(c,Ha),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,bo(e,y,_,3*T,2*T),o.setRenderTarget(e),o.render(c,Ha)}_blur(e,t,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Os-1),T=a/M,y=isFinite(a)?1+Math.floor(p*T):Os;y>Os&&ut(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Os}`);const _=[];let C=0;for(let O=0;O<Os;++O){const w=O/T,D=Math.exp(-w*w/2);_.push(D),O===0?C+=D:O<y&&(C+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=_,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[o],L=3*P*(o>b-os?o-b+os:0),N=4*(this._cubeSize-P);bo(t,L,N,3*P,2*P),d.setRenderTarget(t),d.render(v,Ha)}}function JD(n){const e=[],t=[],r=[];let o=n;const a=n-os+1+v_.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);e.push(c);let d=1/c;u>n-os?d=v_[u-n+os-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],S=6,M=6,T=3,y=2,_=1,C=new Float32Array(T*M*S),b=new Float32Array(y*M*S),P=new Float32Array(_*M*S);for(let N=0;N<S;N++){const O=N%3*2/3-1,w=N>2?0:-1,D=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];C.set(D,T*M*N),b.set(g,y*M*N);const ce=[N,N,N,N,N,N];P.set(ce,_*M*N)}const L=new br;L.setAttribute("position",new Zi(C,T)),L.setAttribute("uv",new Zi(b,y)),L.setAttribute("faceIndex",new Zi(P,_)),r.push(new tr(L,null)),o>os&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function y_(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=Oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function eL(n,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function tL(n,e,t){const r=new Float32Array(Os),o=new oe(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function S_(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function M_(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yM extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mM(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new xl(5,5,5),a=new Fi({name:"CubemapFromEquirect",uniforms:jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:yr});a.uniforms.tEquirect.value=t;const u=new tr(o,a),c=t.minFilter;return t.minFilter===Vs&&(t.minFilter=bn),new l2(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(a)}}function nL(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):a(g)}function a(g){if(g&&g.isTexture){const S=g.mapping;if(S===Wd||S===jd)if(e.has(g)){const M=e.get(g).texture;return c(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new yM(M.height);return T.fromEquirectangularTexture(n,g),e.set(g,T),g.addEventListener("dispose",h),c(T.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,M=S===Wd||S===jd,T=S===Ws||S===Ho;if(M||T){let y=t.get(g);const _=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new __(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return M&&C&&C.height>0||T&&C&&d(C)?(r===null&&(r=new __(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",p),y.texture):null}}}return g}function c(g,S){return S===Wd?g.mapping=Ws:S===jd&&(g.mapping=Ho),g}function d(g){let S=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function p(g){const S=g.target;S.removeEventListener("dispose",p);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function iL(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Rc("WebGLRenderer: "+r+" extension not supported."),o}}}function rL(n,e,t,r){const o={},a=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=a.get(g);S&&(e.remove(S),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const S in g)e.update(g[S],n.ARRAY_BUFFER)}function h(v){const g=[],S=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(S!==null){const C=S.array;T=S.version;for(let b=0,P=C.length;b<P;b+=3){const L=C[b+0],N=C[b+1],O=C[b+2];g.push(L,N,N,O,O,L)}}else{const C=M.array;T=M.version;for(let b=0,P=C.length/3-1;b<P;b+=3){const L=b+0,N=b+1,O=b+2;g.push(L,N,N,O,O,L)}}const y=new(M.count>=65535?dM:fM)(g,1);y.version=T;const _=a.get(v);_&&e.remove(_),a.set(v,y)}function p(v){const g=a.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return a.get(v)}return{get:c,update:d,getWireframeAttribute:p}}function sL(n,e,t){let r;function o(g){r=g}let a,u;function c(g){a=g.type,u=g.bytesPerElement}function d(g,S){n.drawElements(r,S,a,g*u),t.update(S,r,1)}function h(g,S,M){M!==0&&(n.drawElementsInstanced(r,S,a,g*u,M),t.update(S,r,M))}function p(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,a,g,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,r,1)}function v(g,S,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<g.length;_++)h(g[_]/u,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,a,g,0,T,0,M);let _=0;for(let C=0;C<M;C++)_+=S[C]*T[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function oL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(a/3);break;case n.LINES:t.lines+=c*(a/2);break;case n.LINE_STRIP:t.lines+=c*(a-1);break;case n.LINE_LOOP:t.lines+=c*a;break;case n.POINTS:t.points+=c*a;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aL(n,e,t){const r=new WeakMap,o=new nn;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(c);if(g===void 0||g.count!==v){let ce=function(){w.dispose(),r.delete(c),c.removeEventListener("dispose",ce)};var S=ce;g!==void 0&&g.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let P=0;M===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let L=c.attributes.position.count*P,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*N*4*v),w=new lM(O,L,N,v);w.type=Wi,w.needsUpdate=!0;const D=P*4;for(let B=0;B<v;B++){const ee=_[B],Q=C[B],fe=b[B],K=L*N*4*B;for(let ie=0;ie<ee.count;ie++){const H=ie*D;M===!0&&(o.fromBufferAttribute(ee,ie),O[K+H+0]=o.x,O[K+H+1]=o.y,O[K+H+2]=o.z,O[K+H+3]=0),T===!0&&(o.fromBufferAttribute(Q,ie),O[K+H+4]=o.x,O[K+H+5]=o.y,O[K+H+6]=o.z,O[K+H+7]=0),y===!0&&(o.fromBufferAttribute(fe,ie),O[K+H+8]=o.x,O[K+H+9]=o.y,O[K+H+10]=o.z,O[K+H+11]=fe.itemSize===4?o.w:1)}}g={count:v,texture:w,size:new Ft(L,N)},r.set(c,g),c.addEventListener("dispose",ce)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function lL(n,e,t,r,o){let a=new WeakMap;function u(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==p&&(S.update(),a.set(S,p))}return g}function c(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const uL={[XS]:"LINEAR_TONE_MAPPING",[YS]:"REINHARD_TONE_MAPPING",[$S]:"CINEON_TONE_MAPPING",[qS]:"ACES_FILMIC_TONE_MAPPING",[ZS]:"AGX_TONE_MAPPING",[QS]:"NEUTRAL_TONE_MAPPING",[KS]:"CUSTOM_TONE_MAPPING"};function cL(n,e,t,r,o){const a=new Ki(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),u=new Ki(e,t,{type:wr,depthBuffer:!1,stencilBuffer:!1}),c=new br;c.setAttribute("position",new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mr([0,2,0,0,2,0],2));const d=new s2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new tr(c,d),p=new Gm(-1,1,1,-1,0,1);let v=null,g=null,S=!1,M,T=null,y=[],_=!1;this.setSize=function(C,b){a.setSize(C,b),u.setSize(C,b);for(let P=0;P<y.length;P++){const L=y[P];L.setSize&&L.setSize(C,b)}},this.setEffects=function(C){y=C,_=y.length>0&&y[0].isRenderPass===!0;const b=a.width,P=a.height;for(let L=0;L<y.length;L++){const N=y[L];N.setSize&&N.setSize(b,P)}},this.begin=function(C,b){if(S||C.toneMapping===qi&&y.length===0)return!1;if(T=b,b!==null){const P=b.width,L=b.height;(a.width!==P||a.height!==L)&&this.setSize(P,L)}return _===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=qi,!0},this.hasRenderPass=function(){return _},this.end=function(C,b){C.toneMapping=M,S=!0;let P=a,L=u;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(C,L,P,b),O.needsSwap!==!1)){const w=P;P=L,L=w}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,d.defines={},wt.getTransfer(v)===It&&(d.defines.SRGB_TRANSFER="");const N=uL[g];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(T),C.render(h,p),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),u.dispose(),c.dispose(),d.dispose()}}const SM=new Un,Wp=new ll(1,1),MM=new lM,EM=new FP,TM=new mM,E_=[],T_=[],w_=new Float32Array(16),A_=new Float32Array(9),C_=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=E_[o];if(a===void 0&&(a=new Float32Array(o),E_[o]=a),e!==0){r.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(a,c)}return a}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Vc(n,e){let t=T_[e];t===void 0&&(t=new Int32Array(e),T_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function fL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function hL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function pL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function mL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;C_.set(r),n.uniformMatrix2fv(this.addr,!1,C_),dn(t,r)}}function gL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;A_.set(r),n.uniformMatrix3fv(this.addr,!1,A_),dn(t,r)}}function vL(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;w_.set(r),n.uniformMatrix4fv(this.addr,!1,w_),dn(t,r)}}function xL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function yL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function SL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function ML(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function TL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function wL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function AL(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Wp.compareFunction=t.isReversedDepthBuffer()?Vm:Bm,a=Wp):a=SM,t.setTexture2D(e||a,o)}function CL(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||EM,o)}function RL(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||TM,o)}function bL(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||MM,o)}function PL(n){switch(n){case 5126:return fL;case 35664:return dL;case 35665:return hL;case 35666:return pL;case 35674:return mL;case 35675:return gL;case 35676:return vL;case 5124:case 35670:return xL;case 35667:case 35671:return _L;case 35668:case 35672:return yL;case 35669:case 35673:return SL;case 5125:return ML;case 36294:return EL;case 36295:return TL;case 36296:return wL;case 35678:case 36198:case 36298:case 36306:case 35682:return AL;case 35679:case 36299:case 36307:return CL;case 35680:case 36300:case 36308:case 36293:return RL;case 36289:case 36303:case 36311:case 36292:return bL}}function DL(n,e){n.uniform1fv(this.addr,e)}function LL(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function IL(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function NL(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function FL(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UL(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OL(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kL(n,e){n.uniform1iv(this.addr,e)}function BL(n,e){n.uniform2iv(this.addr,e)}function VL(n,e){n.uniform3iv(this.addr,e)}function zL(n,e){n.uniform4iv(this.addr,e)}function HL(n,e){n.uniform1uiv(this.addr,e)}function GL(n,e){n.uniform2uiv(this.addr,e)}function WL(n,e){n.uniform3uiv(this.addr,e)}function jL(n,e){n.uniform4uiv(this.addr,e)}function XL(n,e,t){const r=this.cache,o=e.length,a=Vc(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),dn(r,a));let u;this.type===n.SAMPLER_2D_SHADOW?u=Wp:u=SM;for(let c=0;c!==o;++c)t.setTexture2D(e[c]||u,a[c])}function YL(n,e,t){const r=this.cache,o=e.length,a=Vc(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),dn(r,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||EM,a[u])}function $L(n,e,t){const r=this.cache,o=e.length,a=Vc(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),dn(r,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||TM,a[u])}function qL(n,e,t){const r=this.cache,o=e.length,a=Vc(t,o);fn(r,a)||(n.uniform1iv(this.addr,a),dn(r,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||MM,a[u])}function KL(n){switch(n){case 5126:return DL;case 35664:return LL;case 35665:return IL;case 35666:return NL;case 35674:return FL;case 35675:return UL;case 35676:return OL;case 5124:case 35670:return kL;case 35667:case 35671:return BL;case 35668:case 35672:return VL;case 35669:case 35673:return zL;case 5125:return HL;case 36294:return GL;case 36295:return WL;case 36296:return jL;case 35678:case 36198:case 36298:case 36306:case 35682:return XL;case 35679:case 36299:case 36307:return YL;case 35680:case 36300:case 36308:case 36293:return $L;case 36289:case 36303:case 36311:case 36292:return qL}}class ZL{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=PL(t.type)}}class QL{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KL(t.type)}}class JL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function R_(n,e){n.seq.push(e),n.map[e.id]=e}function eI(n,e,t){const r=n.name,o=r.length;for(Sh.lastIndex=0;;){const a=Sh.exec(r),u=Sh.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){R_(t,h===void 0?new ZL(c,n,e):new QL(c,n,e));break}else{let v=t.map[c];v===void 0&&(v=new JL(c),R_(t,v)),t=v}}}class vc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);eI(c,d,this)}const o=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):a.push(u);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function b_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const tI=37297;let nI=0;function iI(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const P_=new ht;function rI(n){wt._getMatrix(P_,wt.workingColorSpace,n);const e=`mat3( ${P_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case wc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function D_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+iI(n.getShaderSource(e),c)}else return a}function sI(n,e){const t=rI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oI={[XS]:"Linear",[YS]:"Reinhard",[$S]:"Cineon",[qS]:"ACESFilmic",[ZS]:"AgX",[QS]:"Neutral",[KS]:"Custom"};function aI(n,e){const t=oI[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new oe;function lI(){wt.getLuminanceCoefficients(tc);const n=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function cI(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fI(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),u=a.name;let c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ya(n){return n!==""}function L_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dI=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(n){return n.replace(dI,pI)}const hI=new Map;function pI(n,e){let t=pt[e];if(t===void 0){const r=hI.get(e);if(r!==void 0)t=pt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jp(t)}const mI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(n){return n.replace(mI,gI)}function gI(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function F_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vI={[dc]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function xI(n){return vI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _I={[Ws]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function yI(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_I[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const SI={[Ho]:"ENVMAP_MODE_REFRACTION"};function MI(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":SI[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EI={[jS]:"ENVMAP_BLENDING_MULTIPLY",[hP]:"ENVMAP_BLENDING_MIX",[pP]:"ENVMAP_BLENDING_ADD"};function TI(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":EI[n.combine]||"ENVMAP_BLENDING_NONE"}function wI(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function AI(n,e,t,r){const o=n.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=xI(t),h=yI(t),p=MI(t),v=TI(t),g=wI(t),S=uI(t),M=cI(a),T=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),_.length>0&&(_+=`
`)):(y=[F_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),_=[F_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?pt.tonemapping_pars_fragment:"",t.toneMapping!==qi?aI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,sI("linearToOutputTexel",t.outputColorSpace),lI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),u=jp(u),u=L_(u,t),u=I_(u,t),c=jp(c),c=L_(c,t),c=I_(c,t),u=N_(u),c=N_(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Zx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=C+y+u,P=C+_+c,L=b_(o,o.VERTEX_SHADER,b),N=b_(o,o.FRAGMENT_SHADER,P);o.attachShader(T,L),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(B){if(n.debug.checkShaderErrors){const ee=o.getProgramInfoLog(T)||"",Q=o.getShaderInfoLog(L)||"",fe=o.getShaderInfoLog(N)||"",K=ee.trim(),ie=Q.trim(),H=fe.trim();let $=!0,re=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,L,N);else{const ue=D_(o,L,"vertex"),U=D_(o,N,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+ue+`
`+U)}else K!==""?ut("WebGLProgram: Program Info Log:",K):(ie===""||H==="")&&(re=!1);re&&(B.diagnostics={runnable:$,programLog:K,vertexShader:{log:ie,prefix:y},fragmentShader:{log:H,prefix:_}})}o.deleteShader(L),o.deleteShader(N),w=new vc(o,T),D=fI(o,T)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let ce=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=o.getProgramParameter(T,tI)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nI++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=N,this}let CI=0;class RI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new bI(e),t.set(e,r)),r}}class bI{constructor(e){this.id=CI++,this.code=e,this.usedTimes=0}}function PI(n,e,t,r,o,a){const u=new uM,c=new RI,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function T(w,D,ce,B,ee){const Q=B.fog,fe=ee.geometry,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,H=e.get(w.envMap||K,ie),$=H&&H.mapping===Oc?H.image.height:null,re=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ue!==void 0?ue.length:0;let q=0;fe.morphAttributes.position!==void 0&&(q=1),fe.morphAttributes.normal!==void 0&&(q=2),fe.morphAttributes.color!==void 0&&(q=3);let Re,Xe,Qe,se;if(re){const Et=Gi[re];Re=Et.vertexShader,Xe=Et.fragmentShader}else Re=w.vertexShader,Xe=w.fragmentShader,c.update(w),Qe=c.getVertexShaderID(w),se=c.getFragmentShaderID(w);const ge=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Oe=ee.isInstancedMesh===!0,Ge=ee.isBatchedMesh===!0,it=!!w.map,Zt=!!w.matcap,mt=!!H,St=!!w.aoMap,bt=!!w.lightMap,ft=!!w.bumpMap,Bt=!!w.normalMap,z=!!w.displacementMap,Ht=!!w.emissiveMap,vt=!!w.metalnessMap,Mt=!!w.roughnessMap,We=w.anisotropy>0,I=w.clearcoat>0,E=w.dispersion>0,j=w.iridescence>0,pe=w.sheen>0,ve=w.transmission>0,de=We&&!!w.anisotropyMap,Be=I&&!!w.clearcoatMap,Ae=I&&!!w.clearcoatNormalMap,qe=I&&!!w.clearcoatRoughnessMap,rt=j&&!!w.iridescenceMap,Se=j&&!!w.iridescenceThicknessMap,we=pe&&!!w.sheenColorMap,je=pe&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Le=!!w.specularColorMap,ct=!!w.specularIntensityMap,G=ve&&!!w.transmissionMap,Ce=ve&&!!w.thicknessMap,Ee=!!w.gradientMap,Ie=!!w.alphaMap,Me=w.alphaTest>0,he=!!w.alphaHash,ze=!!w.extensions;let ot=qi;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ot=n.toneMapping);const Lt={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:Xe,defines:w.defines,customVertexShaderID:Qe,customFragmentShaderID:se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&ee._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ee.instanceColor!==null,instancingMorph:Oe&&ee.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Wo,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Zt,envMap:mt,envMapMode:mt&&H.mapping,envMapCubeUVHeight:$,aoMap:St,lightMap:bt,bumpMap:ft,normalMap:Bt,displacementMap:z,emissiveMap:Ht,normalMapObjectSpace:Bt&&w.normalMapType===xP,normalMapTangentSpace:Bt&&w.normalMapType===vP,metalnessMap:vt,roughnessMap:Mt,anisotropy:We,anisotropyMap:de,clearcoat:I,clearcoatMap:Be,clearcoatNormalMap:Ae,clearcoatRoughnessMap:qe,dispersion:E,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:we,sheenRoughnessMap:je,specularMap:Ve,specularColorMap:Le,specularIntensityMap:ct,transmission:ve,transmissionMap:G,thicknessMap:Ce,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===Oo&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:he,combine:w.combine,mapUv:it&&M(w.map.channel),aoMapUv:St&&M(w.aoMap.channel),lightMapUv:bt&&M(w.lightMap.channel),bumpMapUv:ft&&M(w.bumpMap.channel),normalMapUv:Bt&&M(w.normalMap.channel),displacementMapUv:z&&M(w.displacementMap.channel),emissiveMapUv:Ht&&M(w.emissiveMap.channel),metalnessMapUv:vt&&M(w.metalnessMap.channel),roughnessMapUv:Mt&&M(w.roughnessMap.channel),anisotropyMapUv:de&&M(w.anisotropyMap.channel),clearcoatMapUv:Be&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&M(w.sheenRoughnessMap.channel),specularMapUv:Ve&&M(w.specularMap.channel),specularColorMapUv:Le&&M(w.specularColorMap.channel),specularIntensityMapUv:ct&&M(w.specularIntensityMap.channel),transmissionMapUv:G&&M(w.transmissionMap.channel),thicknessMapUv:Ce&&M(w.thicknessMap.channel),alphaMapUv:Ie&&M(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Bt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!fe.attributes.uv&&(it||Ie),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||fe.attributes.normal===void 0&&Bt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:me,skinning:ee.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&ce.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xr,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=d.has(1),Lt.vertexUv2s=d.has(2),Lt.vertexUv3s=d.has(3),d.clear(),Lt}function y(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ce in w.defines)D.push(ce),D.push(w.defines[ce]);return w.isRawShaderMaterial===!1&&(_(D,w),C(D,w),D.push(n.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function _(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function C(w,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),w.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),w.push(u.mask)}function b(w){const D=S[w.type];let ce;if(D){const B=Gi[D];ce=n2.clone(B.uniforms)}else ce=w.uniforms;return ce}function P(w,D){let ce=p.get(D);return ce!==void 0?++ce.usedTimes:(ce=new AI(n,D,w,o),h.push(ce),p.set(D,ce)),ce}function L(w){if(--w.usedTimes===0){const D=h.indexOf(w);h[D]=h[h.length-1],h.pop(),p.delete(w.cacheKey),w.destroy()}}function N(w){c.remove(w)}function O(){c.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:b,acquireProgram:P,releaseProgram:L,releaseShaderCache:N,programs:h,dispose:O}}function DI(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function LI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function c(g,S,M,T,y,_){let C=n[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:M,materialVariant:u(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:_},n[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=M,C.materialVariant=u(g),C.groupOrder=T,C.renderOrder=g.renderOrder,C.z=y,C.group=_),e++,C}function d(g,S,M,T,y,_){const C=c(g,S,M,T,y,_);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function h(g,S,M,T,y,_){const C=c(g,S,M,T,y,_);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function p(g,S){t.length>1&&t.sort(g||LI),r.length>1&&r.sort(S||U_),o.length>1&&o.sort(S||U_)}function v(){for(let g=e,S=n.length;g<S;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function II(){let n=new WeakMap;function e(r,o){const a=n.get(r);let u;return a===void 0?(u=new O_,n.set(r,[u])):o>=a.length?(u=new O_,a.push(u)):u=a[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function NI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Nt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return n[e.id]=t,t}}}function FI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UI=0;function OI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kI(n){const e=new NI,t=FI(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const o=new oe,a=new an,u=new an;function c(h){let p=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,M=0,T=0,y=0,_=0,C=0,b=0,P=0,L=0,N=0,O=0;h.sort(OI);for(let D=0,ce=h.length;D<ce;D++){const B=h[D],ee=B.color,Q=B.intensity,fe=B.distance;let K=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Go?K=B.shadow.map.texture:K=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=ee.r*Q,v+=ee.g*Q,g+=ee.b*Q;else if(B.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(B.sh.coefficients[ie],Q);O++}else if(B.isDirectionalLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,$=t.get(B);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[S]=$,r.directionalShadowMap[S]=K,r.directionalShadowMatrix[S]=B.shadow.matrix,C++}r.directional[S]=ie,S++}else if(B.isSpotLight){const ie=e.get(B);ie.position.setFromMatrixPosition(B.matrixWorld),ie.color.copy(ee).multiplyScalar(Q),ie.distance=fe,ie.coneCos=Math.cos(B.angle),ie.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ie.decay=B.decay,r.spot[T]=ie;const H=B.shadow;if(B.map&&(r.spotLightMap[L]=B.map,L++,H.updateMatrices(B),B.castShadow&&N++),r.spotLightMatrix[T]=H.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[T]=$,r.spotShadowMap[T]=K,P++}T++}else if(B.isRectAreaLight){const ie=e.get(B);ie.color.copy(ee).multiplyScalar(Q),ie.halfWidth.set(B.width*.5,0,0),ie.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ie,y++}else if(B.isPointLight){const ie=e.get(B);if(ie.color.copy(B.color).multiplyScalar(B.intensity),ie.distance=B.distance,ie.decay=B.decay,B.castShadow){const H=B.shadow,$=t.get(B);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[M]=$,r.pointShadowMap[M]=K,r.pointShadowMatrix[M]=B.shadow.matrix,b++}r.point[M]=ie,M++}else if(B.isHemisphereLight){const ie=e.get(B);ie.skyColor.copy(B.color).multiplyScalar(Q),ie.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[_]=ie,_++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==T||w.rectAreaLength!==y||w.hemiLength!==_||w.numDirectionalShadows!==C||w.numPointShadows!==b||w.numSpotShadows!==P||w.numSpotMaps!==L||w.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,w.directionalLength=S,w.pointLength=M,w.spotLength=T,w.rectAreaLength=y,w.hemiLength=_,w.numDirectionalShadows=C,w.numPointShadows=b,w.numSpotShadows=P,w.numSpotMaps=L,w.numLightProbes=O,r.version=UI++)}function d(h,p){let v=0,g=0,S=0,M=0,T=0;const y=p.matrixWorldInverse;for(let _=0,C=h.length;_<C;_++){const b=h[_];if(b.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(b.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),u.identity(),a.copy(b.matrixWorld),a.premultiply(y),u.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:c,setupView:d,state:r}}function k_(n){const e=new kI(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:u}}function BI(n){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let c;return u===void 0?(c=new k_(n),e.set(o,[c])):a>=u.length?(c=new k_(n),u.push(c)):c=u[a],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const VI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HI=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],GI=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],B_=new an,Ga=new oe,Mh=new oe;function WI(n,e,t){let r=new pM;const o=new Ft,a=new Ft,u=new nn,c=new o2,d=new a2,h={},p=t.maxTextureSize,v={[ls]:$n,[$n]:ls,[xr]:xr},g=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:VI,fragmentShader:zI}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new br;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new tr(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let _=this.type;this.render=function(N,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===$b&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dc);const D=n.getRenderTarget(),ce=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(yr),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Q=_!==this.type;Q&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(K=>K.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,K=N.length;fe<K;fe++){const ie=N[fe],H=ie.shadow;if(H===void 0){ut("WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),a.copy(H.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/$.x),o.x=a.x*$.x,H.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/$.y),o.y=a.y*$.y,H.mapSize.y=a.y));const re=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=re,H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xa){if(ie.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ki(o.x,o.y,{format:Go,type:wr,minFilter:bn,magFilter:bn,generateMipmaps:!1}),H.map.texture.name=ie.name+".shadowMap",H.map.depthTexture=new ll(o.x,o.y,Wi),H.map.depthTexture.name=ie.name+".shadowMapDepth",H.map.depthTexture.format=Ar,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mn,H.map.depthTexture.magFilter=Mn}else ie.isPointLight?(H.map=new yM(o.x),H.map.depthTexture=new e2(o.x,er)):(H.map=new Ki(o.x,o.y),H.map.depthTexture=new ll(o.x,o.y,er)),H.map.depthTexture.name=ie.name+".shadowMap",H.map.depthTexture.format=Ar,this.type===dc?(H.map.depthTexture.compareFunction=re?Vm:Bm,H.map.depthTexture.minFilter=bn,H.map.depthTexture.magFilter=bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mn,H.map.depthTexture.magFilter=Mn);H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ue;U++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,U),n.clear();else{U===0&&(n.setRenderTarget(H.map),n.clear());const q=H.getViewport(U);u.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),ee.viewport(u)}if(ie.isPointLight){const q=H.camera,Re=H.matrix,Xe=ie.distance||q.far;Xe!==q.far&&(q.far=Xe,q.updateProjectionMatrix()),Ga.setFromMatrixPosition(ie.matrixWorld),q.position.copy(Ga),Mh.copy(q.position),Mh.add(HI[U]),q.up.copy(GI[U]),q.lookAt(Mh),q.updateMatrixWorld(),Re.makeTranslation(-Ga.x,-Ga.y,-Ga.z),B_.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(B_,q.coordinateSystem,q.reversedDepth)}else H.updateMatrices(ie);r=H.getFrustum(),P(O,w,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Xa&&C(H,w),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,n.setRenderTarget(D,ce,B)};function C(N,O){const w=e.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ki(o.x,o.y,{format:Go,type:wr})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,w,g,T,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,w,S,T,null)}function b(N,O,w,D){let ce=null;const B=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)ce=B;else if(ce=w.isPointLight===!0?d:c,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=ce.uuid,Q=O.uuid;let fe=h[ee];fe===void 0&&(fe={},h[ee]=fe);let K=fe[Q];K===void 0&&(K=ce.clone(),fe[Q]=K,O.addEventListener("dispose",L)),ce=K}if(ce.visible=O.visible,ce.wireframe=O.wireframe,D===Xa?ce.side=O.shadowSide!==null?O.shadowSide:O.side:ce.side=O.shadowSide!==null?O.shadowSide:v[O.side],ce.alphaMap=O.alphaMap,ce.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ce.map=O.map,ce.clipShadows=O.clipShadows,ce.clippingPlanes=O.clippingPlanes,ce.clipIntersection=O.clipIntersection,ce.displacementMap=O.displacementMap,ce.displacementScale=O.displacementScale,ce.displacementBias=O.displacementBias,ce.wireframeLinewidth=O.wireframeLinewidth,ce.linewidth=O.linewidth,w.isPointLight===!0&&ce.isMeshDistanceMaterial===!0){const ee=n.properties.get(ce);ee.light=w}return ce}function P(N,O,w,D,ce){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&ce===Xa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),fe=N.material;if(Array.isArray(fe)){const K=Q.groups;for(let ie=0,H=K.length;ie<H;ie++){const $=K[ie],re=fe[$.materialIndex];if(re&&re.visible){const ue=b(N,re,D,ce);N.onBeforeShadow(n,N,O,w,Q,ue,$),n.renderBufferDirect(w,null,Q,ue,N,$),N.onAfterShadow(n,N,O,w,Q,ue,$)}}}else if(fe.visible){const K=b(N,fe,D,ce);N.onBeforeShadow(n,N,O,w,Q,K,null),n.renderBufferDirect(w,null,Q,K,N,null),N.onAfterShadow(n,N,O,w,Q,K,null)}}const ee=N.children;for(let Q=0,fe=ee.length;Q<fe;Q++)P(ee[Q],O,w,D,ce)}function L(N){N.target.removeEventListener("dispose",L);for(const w in h){const D=h[w],ce=N.target.uuid;ce in D&&(D[ce].dispose(),delete D[ce])}}}function jI(n,e){function t(){let G=!1;const Ce=new nn;let Ee=null;const Ie=new nn(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!G&&(n.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){G=Me},setClear:function(Me,he,ze,ot,Lt){Lt===!0&&(Me*=ot,he*=ot,ze*=ot),Ce.set(Me,he,ze,ot),Ie.equals(Ce)===!1&&(n.clearColor(Me,he,ze,ot),Ie.copy(Ce))},reset:function(){G=!1,Ee=null,Ie.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,Ee=null,Ie=null,Me=null;return{setReversed:function(he){if(Ce!==he){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ce=he;const ot=Me;Me=null,this.setClear(ot)}},getReversed:function(){return Ce},setTest:function(he){he?ge(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(he){Ee!==he&&!G&&(n.depthMask(he),Ee=he)},setFunc:function(he){if(Ce&&(he=RP[he]),Ie!==he){switch(he){case np:n.depthFunc(n.NEVER);break;case ip:n.depthFunc(n.ALWAYS);break;case rp:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case sp:n.depthFunc(n.EQUAL);break;case op:n.depthFunc(n.GEQUAL);break;case ap:n.depthFunc(n.GREATER);break;case lp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=he}},setLocked:function(he){G=he},setClear:function(he){Me!==he&&(Me=he,Ce&&(he=1-he),n.clearDepth(he))},reset:function(){G=!1,Ee=null,Ie=null,Me=null,Ce=!1}}}function o(){let G=!1,Ce=null,Ee=null,Ie=null,Me=null,he=null,ze=null,ot=null,Lt=null;return{setTest:function(Et){G||(Et?ge(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Et){Ce!==Et&&!G&&(n.stencilMask(Et),Ce=Et)},setFunc:function(Et,ii,Pn){(Ee!==Et||Ie!==ii||Me!==Pn)&&(n.stencilFunc(Et,ii,Pn),Ee=Et,Ie=ii,Me=Pn)},setOp:function(Et,ii,Pn){(he!==Et||ze!==ii||ot!==Pn)&&(n.stencilOp(Et,ii,Pn),he=Et,ze=ii,ot=Pn)},setLocked:function(Et){G=Et},setClear:function(Et){Lt!==Et&&(n.clearStencil(Et),Lt=Et)},reset:function(){G=!1,Ce=null,Ee=null,Ie=null,Me=null,he=null,ze=null,ot=null,Lt=null}}}const a=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g=new WeakMap,S=[],M=null,T=!1,y=null,_=null,C=null,b=null,P=null,L=null,N=null,O=new Nt(0,0,0),w=0,D=!1,ce=null,B=null,ee=null,Q=null,fe=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,H=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),ie=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ie=H>=2);let re=null,ue={};const U=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Re=new nn().fromArray(U),Xe=new nn().fromArray(q);function Qe(G,Ce,Ee,Ie){const Me=new Uint8Array(4),he=n.createTexture();n.bindTexture(G,he),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<Ee;ze++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Ce+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return he}const se={};se[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ge(n.DEPTH_TEST),u.setFunc(zo),ft(!1),Bt(jx),ge(n.CULL_FACE),St(yr);function ge(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function me(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Oe(G,Ce){return v[G]!==Ce?(n.bindFramebuffer(G,Ce),v[G]=Ce,G===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ce),G===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(G,Ce){let Ee=S,Ie=!1;if(G){Ee=g.get(Ce),Ee===void 0&&(Ee=[],g.set(Ce,Ee));const Me=G.textures;if(Ee.length!==Me.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ze=Me.length;he<ze;he++)Ee[he]=n.COLOR_ATTACHMENT0+he;Ee.length=Me.length,Ie=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Ee)}function it(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const Zt={[Us]:n.FUNC_ADD,[Kb]:n.FUNC_SUBTRACT,[Zb]:n.FUNC_REVERSE_SUBTRACT};Zt[Qb]=n.MIN,Zt[Jb]=n.MAX;const mt={[eP]:n.ZERO,[tP]:n.ONE,[nP]:n.SRC_COLOR,[ep]:n.SRC_ALPHA,[lP]:n.SRC_ALPHA_SATURATE,[oP]:n.DST_COLOR,[rP]:n.DST_ALPHA,[iP]:n.ONE_MINUS_SRC_COLOR,[tp]:n.ONE_MINUS_SRC_ALPHA,[aP]:n.ONE_MINUS_DST_COLOR,[sP]:n.ONE_MINUS_DST_ALPHA,[uP]:n.CONSTANT_COLOR,[cP]:n.ONE_MINUS_CONSTANT_COLOR,[fP]:n.CONSTANT_ALPHA,[dP]:n.ONE_MINUS_CONSTANT_ALPHA};function St(G,Ce,Ee,Ie,Me,he,ze,ot,Lt,Et){if(G===yr){T===!0&&(me(n.BLEND),T=!1);return}if(T===!1&&(ge(n.BLEND),T=!0),G!==qb){if(G!==y||Et!==D){if((_!==Us||P!==Us)&&(n.blendEquation(n.FUNC_ADD),_=Us,P=Us),Et)switch(G){case Oo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xx:n.blendFunc(n.ONE,n.ONE);break;case Yx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $x:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yx:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $x:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",G);break}C=null,b=null,L=null,N=null,O.set(0,0,0),w=0,y=G,D=Et}return}Me=Me||Ce,he=he||Ee,ze=ze||Ie,(Ce!==_||Me!==P)&&(n.blendEquationSeparate(Zt[Ce],Zt[Me]),_=Ce,P=Me),(Ee!==C||Ie!==b||he!==L||ze!==N)&&(n.blendFuncSeparate(mt[Ee],mt[Ie],mt[he],mt[ze]),C=Ee,b=Ie,L=he,N=ze),(ot.equals(O)===!1||Lt!==w)&&(n.blendColor(ot.r,ot.g,ot.b,Lt),O.copy(ot),w=Lt),y=G,D=!1}function bt(G,Ce){G.side===xr?me(n.CULL_FACE):ge(n.CULL_FACE);let Ee=G.side===$n;Ce&&(Ee=!Ee),ft(Ee),G.blending===Oo&&G.transparent===!1?St(yr):St(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ie=G.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ht(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){ce!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),ce=G)}function Bt(G){G!==Xb?(ge(n.CULL_FACE),G!==B&&(G===jx?n.cullFace(n.BACK):G===Yb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),B=G}function z(G){G!==ee&&(ie&&n.lineWidth(G),ee=G)}function Ht(G,Ce,Ee){G?(ge(n.POLYGON_OFFSET_FILL),(Q!==Ce||fe!==Ee)&&(Q=Ce,fe=Ee,u.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,Ee))):me(n.POLYGON_OFFSET_FILL)}function vt(G){G?ge(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Mt(G){G===void 0&&(G=n.TEXTURE0+K-1),re!==G&&(n.activeTexture(G),re=G)}function We(G,Ce,Ee){Ee===void 0&&(re===null?Ee=n.TEXTURE0+K-1:Ee=re);let Ie=ue[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},ue[Ee]=Ie),(Ie.type!==G||Ie.texture!==Ce)&&(re!==Ee&&(n.activeTexture(Ee),re=Ee),n.bindTexture(G,Ce||se[G]),Ie.type=G,Ie.texture=Ce)}function I(){const G=ue[re];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function pe(){try{n.texSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function ve(){try{n.texSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Ae(){try{n.texStorage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function qe(){try{n.texStorage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function rt(){try{n.texImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Se(){try{n.texImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function we(G){Re.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function je(G){Xe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Xe.copy(G))}function Ve(G,Ce){let Ee=h.get(Ce);Ee===void 0&&(Ee=new WeakMap,h.set(Ce,Ee));let Ie=Ee.get(G);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ce,G.name),Ee.set(G,Ie))}function Le(G,Ce){const Ie=h.get(Ce).get(G);d.get(Ce)!==Ie&&(n.uniformBlockBinding(Ce,Ie,G.__bindingPointIndex),d.set(Ce,Ie))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},re=null,ue={},v={},g=new WeakMap,S=[],M=null,T=!1,y=null,_=null,C=null,b=null,P=null,L=null,N=null,O=new Nt(0,0,0),w=0,D=!1,ce=null,B=null,ee=null,Q=null,fe=null,Re.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:ge,disable:me,bindFramebuffer:Oe,drawBuffers:Ge,useProgram:it,setBlending:St,setMaterial:bt,setFlipSided:ft,setCullFace:Bt,setLineWidth:z,setPolygonOffset:Ht,setScissorTest:vt,activeTexture:Mt,bindTexture:We,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:rt,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:qe,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:Be,scissor:we,viewport:je,reset:ct}}function XI(n,e,t,r,o,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,p=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,E){return S?new OffscreenCanvas(I,E):Cc("canvas")}function T(I,E,j){let pe=1;const ve=We(I);if((ve.width>j||ve.height>j)&&(pe=j/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(pe*ve.width),Be=Math.floor(pe*ve.height);v===void 0&&(v=M(de,Be));const Ae=E?M(de,Be):v;return Ae.width=de,Ae.height=Be,Ae.getContext("2d").drawImage(I,0,0,de,Be),ut("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Be+")."),Ae}else return"data"in I&&ut("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function y(I){return I.generateMipmaps}function _(I){n.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(I,E,j,pe,ve=!1){if(I!==null){if(n[I]!==void 0)return n[I];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=E;if(E===n.RED&&(j===n.FLOAT&&(de=n.R32F),j===n.HALF_FLOAT&&(de=n.R16F),j===n.UNSIGNED_BYTE&&(de=n.R8)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(de=n.R8UI),j===n.UNSIGNED_SHORT&&(de=n.R16UI),j===n.UNSIGNED_INT&&(de=n.R32UI),j===n.BYTE&&(de=n.R8I),j===n.SHORT&&(de=n.R16I),j===n.INT&&(de=n.R32I)),E===n.RG&&(j===n.FLOAT&&(de=n.RG32F),j===n.HALF_FLOAT&&(de=n.RG16F),j===n.UNSIGNED_BYTE&&(de=n.RG8)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(de=n.RG8UI),j===n.UNSIGNED_SHORT&&(de=n.RG16UI),j===n.UNSIGNED_INT&&(de=n.RG32UI),j===n.BYTE&&(de=n.RG8I),j===n.SHORT&&(de=n.RG16I),j===n.INT&&(de=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(de=n.RGB8UI),j===n.UNSIGNED_SHORT&&(de=n.RGB16UI),j===n.UNSIGNED_INT&&(de=n.RGB32UI),j===n.BYTE&&(de=n.RGB8I),j===n.SHORT&&(de=n.RGB16I),j===n.INT&&(de=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),j===n.UNSIGNED_INT&&(de=n.RGBA32UI),j===n.BYTE&&(de=n.RGBA8I),j===n.SHORT&&(de=n.RGBA16I),j===n.INT&&(de=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),E===n.RGBA){const Be=ve?wc:wt.getTransfer(pe);j===n.FLOAT&&(de=n.RGBA32F),j===n.HALF_FLOAT&&(de=n.RGBA16F),j===n.UNSIGNED_BYTE&&(de=Be===It?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(I,E){let j;return I?E===null||E===er||E===al?j=n.DEPTH24_STENCIL8:E===Wi?j=n.DEPTH32F_STENCIL8:E===ol&&(j=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===er||E===al?j=n.DEPTH_COMPONENT24:E===Wi?j=n.DEPTH_COMPONENT32F:E===ol&&(j=n.DEPTH_COMPONENT16),j}function L(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function N(I){const E=I.target;E.removeEventListener("dispose",N),w(E),E.isVideoTexture&&p.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),ce(E)}function w(I){const E=r.get(I);if(E.__webglInit===void 0)return;const j=I.source,pe=g.get(j);if(pe){const ve=pe[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(I),Object.keys(pe).length===0&&g.delete(j)}r.remove(I)}function D(I){const E=r.get(I);n.deleteTexture(E.__webglTexture);const j=I.source,pe=g.get(j);delete pe[E.__cacheKey],u.memory.textures--}function ce(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ve=0;ve<E.__webglFramebuffer[pe].length;ve++)n.deleteFramebuffer(E.__webglFramebuffer[pe][ve]);else n.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[pe]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=I.textures;for(let pe=0,ve=j.length;pe<ve;pe++){const de=r.get(j[pe]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(j[pe])}r.remove(I)}let B=0;function ee(){B=0}function Q(){const I=B;return I>=o.maxTextures&&ut("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),B+=1,I}function fe(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function K(I,E){const j=r.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const pe=I.image;if(pe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,I,E);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function ie(I,E){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){se(j,I,E);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function H(I,E){const j=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){se(j,I,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function $(I,E){const j=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){ge(j,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const re={[up]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[cp]:n.MIRRORED_REPEAT},ue={[Mn]:n.NEAREST,[mP]:n.NEAREST_MIPMAP_NEAREST,[Iu]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Xd]:n.LINEAR_MIPMAP_NEAREST,[Vs]:n.LINEAR_MIPMAP_LINEAR},U={[_P]:n.NEVER,[TP]:n.ALWAYS,[yP]:n.LESS,[Bm]:n.LEQUAL,[SP]:n.EQUAL,[Vm]:n.GEQUAL,[MP]:n.GREATER,[EP]:n.NOTEQUAL};function q(I,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bn||E.magFilter===Xd||E.magFilter===Iu||E.magFilter===Vs||E.minFilter===bn||E.minFilter===Xd||E.minFilter===Iu||E.minFilter===Vs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,re[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,re[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,re[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ue[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==Iu&&E.minFilter!==Vs||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Re(I,E){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",N));const pe=E.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const de=fe(E);if(de!==I.__cacheKey){ve[de]===void 0&&(ve[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ve[de].usedTimes++;const Be=ve[I.__cacheKey];Be!==void 0&&(ve[I.__cacheKey].usedTimes--,Be.usedTimes===0&&D(E)),I.__cacheKey=de,I.__webglTexture=ve[de].texture}return j}function Xe(I,E,j){return Math.floor(Math.floor(I/j)/E)}function Qe(I,E,j,pe){const de=I.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,pe,E.data);else{de.sort((Se,we)=>Se.start-we.start);let Be=0;for(let Se=1;Se<de.length;Se++){const we=de[Be],je=de[Se],Ve=we.start+we.count,Le=Xe(je.start,E.width,4),ct=Xe(we.start,E.width,4);je.start<=Ve+1&&Le===ct&&Xe(je.start+je.count-1,E.width,4)===Le?we.count=Math.max(we.count,je.start+je.count-we.start):(++Be,de[Be]=je)}de.length=Be+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),qe=n.getParameter(n.UNPACK_SKIP_PIXELS),rt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Se=0,we=de.length;Se<we;Se++){const je=de[Se],Ve=Math.floor(je.start/4),Le=Math.ceil(je.count/4),ct=Ve%E.width,G=Math.floor(Ve/E.width),Ce=Le,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ct,G,Ce,Ee,j,pe,E.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,rt)}}function se(I,E,j){let pe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=n.TEXTURE_3D);const ve=Re(I,E),de=E.source;t.bindTexture(pe,I.__webglTexture,n.TEXTURE0+j);const Be=r.get(de);if(de.version!==Be.__version||ve===!0){t.activeTexture(n.TEXTURE0+j);const Ae=wt.getPrimaries(wt.workingColorSpace),qe=E.colorSpace===ss?null:wt.getPrimaries(E.colorSpace),rt=E.colorSpace===ss||Ae===qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Se=T(E.image,!1,o.maxTextureSize);Se=Mt(E,Se);const we=a.convert(E.format,E.colorSpace),je=a.convert(E.type);let Ve=b(E.internalFormat,we,je,E.colorSpace,E.isVideoTexture);q(pe,E);let Le;const ct=E.mipmaps,G=E.isVideoTexture!==!0,Ce=Be.__version===void 0||ve===!0,Ee=de.dataReady,Ie=L(E,Se);if(E.isDepthTexture)Ve=P(E.format===zs,E.type),Ce&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ve,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Ve,Se.width,Se.height,0,we,je,null));else if(E.isDataTexture)if(ct.length>0){G&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Ve,ct[0].width,ct[0].height);for(let Me=0,he=ct.length;Me<he;Me++)Le=ct[Me],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,je,Le.data):t.texImage2D(n.TEXTURE_2D,Me,Ve,Le.width,Le.height,0,we,je,Le.data);E.generateMipmaps=!1}else G?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Ve,Se.width,Se.height),Ee&&Qe(E,Se,we,je)):t.texImage2D(n.TEXTURE_2D,0,Ve,Se.width,Se.height,0,we,je,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ve,ct[0].width,ct[0].height,Se.depth);for(let Me=0,he=ct.length;Me<he;Me++)if(Le=ct[Me],E.format!==Ii)if(we!==null)if(G){if(Ee)if(E.layerUpdates.size>0){const ze=g_(Le.width,Le.height,E.format,E.type);for(const ot of E.layerUpdates){const Lt=Le.data.subarray(ot*ze/Le.data.BYTES_PER_ELEMENT,(ot+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,ot,Le.width,Le.height,1,we,Lt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Se.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,Ve,Le.width,Le.height,Se.depth,0,Le.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Se.depth,we,je,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,Ve,Le.width,Le.height,Se.depth,0,we,je,Le.data)}else{G&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Ve,ct[0].width,ct[0].height);for(let Me=0,he=ct.length;Me<he;Me++)Le=ct[Me],E.format!==Ii?we!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,Ve,Le.width,Le.height,0,Le.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Le.width,Le.height,we,je,Le.data):t.texImage2D(n.TEXTURE_2D,Me,Ve,Le.width,Le.height,0,we,je,Le.data)}else if(E.isDataArrayTexture)if(G){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Ve,Se.width,Se.height,Se.depth),Ee)if(E.layerUpdates.size>0){const Me=g_(Se.width,Se.height,E.format,E.type);for(const he of E.layerUpdates){const ze=Se.data.subarray(he*Me/Se.data.BYTES_PER_ELEMENT,(he+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,we,je,ze)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,we,je,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,we,je,Se.data);else if(E.isData3DTexture)G?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ie,Ve,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,we,je,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,we,je,Se.data);else if(E.isFramebufferTexture){if(Ce)if(G)t.texStorage2D(n.TEXTURE_2D,Ie,Ve,Se.width,Se.height);else{let Me=Se.width,he=Se.height;for(let ze=0;ze<Ie;ze++)t.texImage2D(n.TEXTURE_2D,ze,Ve,Me,he,0,we,je,null),Me>>=1,he>>=1}}else if(ct.length>0){if(G&&Ce){const Me=We(ct[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Ve,Me.width,Me.height)}for(let Me=0,he=ct.length;Me<he;Me++)Le=ct[Me],G?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,we,je,Le):t.texImage2D(n.TEXTURE_2D,Me,Ve,we,je,Le);E.generateMipmaps=!1}else if(G){if(Ce){const Me=We(Se);t.texStorage2D(n.TEXTURE_2D,Ie,Ve,Me.width,Me.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,je,Se)}else t.texImage2D(n.TEXTURE_2D,0,Ve,we,je,Se);y(E)&&_(pe),Be.__version=de.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ge(I,E,j){if(E.image.length!==6)return;const pe=Re(I,E),ve=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+j);const de=r.get(ve);if(ve.version!==de.__version||pe===!0){t.activeTexture(n.TEXTURE0+j);const Be=wt.getPrimaries(wt.workingColorSpace),Ae=E.colorSpace===ss?null:wt.getPrimaries(E.colorSpace),qe=E.colorSpace===ss||Be===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!rt&&!Se?we[he]=T(E.image[he],!0,o.maxCubemapSize):we[he]=Se?E.image[he].image:E.image[he],we[he]=Mt(E,we[he]);const je=we[0],Ve=a.convert(E.format,E.colorSpace),Le=a.convert(E.type),ct=b(E.internalFormat,Ve,Le,E.colorSpace),G=E.isVideoTexture!==!0,Ce=de.__version===void 0||pe===!0,Ee=ve.dataReady;let Ie=L(E,je);q(n.TEXTURE_CUBE_MAP,E);let Me;if(rt){G&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ct,je.width,je.height);for(let he=0;he<6;he++){Me=we[he].mipmaps;for(let ze=0;ze<Me.length;ze++){const ot=Me[ze];E.format!==Ii?Ve!==null?G?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,ot.width,ot.height,Ve,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,ct,ot.width,ot.height,0,ot.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,ot.width,ot.height,Ve,Le,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,ct,ot.width,ot.height,0,Ve,Le,ot.data)}}}else{if(Me=E.mipmaps,G&&Ce){Me.length>0&&Ie++;const he=We(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ct,he.width,he.height)}for(let he=0;he<6;he++)if(Se){G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,Ve,Le,we[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,we[he].width,we[he].height,0,Ve,Le,we[he].data);for(let ze=0;ze<Me.length;ze++){const Lt=Me[ze].image[he].image;G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Lt.width,Lt.height,Ve,Le,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,ct,Lt.width,Lt.height,0,Ve,Le,Lt.data)}}else{G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ve,Le,we[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ve,Le,we[he]);for(let ze=0;ze<Me.length;ze++){const ot=Me[ze];G?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Ve,Le,ot.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,ct,Ve,Le,ot.image[he])}}}y(E)&&_(n.TEXTURE_CUBE_MAP),de.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function me(I,E,j,pe,ve,de){const Be=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),qe=b(j.internalFormat,Be,Ae,j.colorSpace),rt=r.get(E),Se=r.get(j);if(Se.__renderTarget=E,!rt.__hasExternalTextures){const we=Math.max(1,E.width>>de),je=Math.max(1,E.height>>de);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,qe,we,je,E.depth,0,Be,Ae,null):t.texImage2D(ve,de,qe,we,je,0,Be,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ht(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ve,Se.__webglTexture,0,z(E)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ve,Se.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(I,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const pe=E.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,de=P(E.stencilBuffer,ve),Be=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ht(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(E),de,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(E),de,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,de,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,I)}else{const pe=E.textures;for(let ve=0;ve<pe.length;ve++){const de=pe[ve],Be=a.convert(de.format,de.colorSpace),Ae=a.convert(de.type),qe=b(de.internalFormat,Be,Ae,de.colorSpace);Ht(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(E),qe,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(E),qe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,qe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(I,E,j){const pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(E.depthTexture);if(ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),ve.__webglTexture===void 0){ve.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),q(n.TEXTURE_CUBE_MAP,E.depthTexture);const rt=a.convert(E.depthTexture.format),Se=a.convert(E.depthTexture.type);let we;E.depthTexture.format===Ar?we=n.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(we=n.DEPTH24_STENCIL8);for(let je=0;je<6;je++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,we,E.width,E.height,0,rt,Se,null)}}else K(E.depthTexture,0);const de=ve.__webglTexture,Be=z(E),Ae=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,qe=E.depthTexture.format===zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ar)Ht(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,qe,Ae,de,0,Be):n.framebufferTexture2D(n.FRAMEBUFFER,qe,Ae,de,0);else if(E.depthTexture.format===zs)Ht(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,qe,Ae,de,0,Be):n.framebufferTexture2D(n.FRAMEBUFFER,qe,Ae,de,0);else throw new Error("Unknown depthTexture format")}function it(I){const E=r.get(I),j=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=pe}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)Ge(E.__webglFramebuffer[pe],I,pe);else{const pe=I.texture.mipmaps;pe&&pe.length>0?Ge(E.__webglFramebuffer[0],I,0):Ge(E.__webglFramebuffer,I,0)}else if(j){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=n.createRenderbuffer(),Oe(E.__webglDepthbuffer[pe],I,!1);else{const ve=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,de)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Oe(E.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(I,E,j){const pe=r.get(I);E!==void 0&&me(pe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&it(I)}function mt(I){const E=I.texture,j=r.get(I),pe=r.get(E);I.addEventListener("dispose",O);const ve=I.textures,de=I.isWebGLCubeRenderTarget===!0,Be=ve.length>1;if(Be||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=E.version,u.memory.textures++),de){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let qe=0;qe<E.mipmaps.length;qe++)j.__webglFramebuffer[Ae][qe]=n.createFramebuffer()}else j.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Ae=0,qe=ve.length;Ae<qe;Ae++){const rt=r.get(ve[Ae]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),u.memory.textures++)}if(I.samples>0&&Ht(I)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const qe=ve[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const rt=a.convert(qe.format,qe.colorSpace),Se=a.convert(qe.type),we=b(qe.internalFormat,rt,Se,qe.colorSpace,I.isXRRenderTarget===!0),je=z(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,we,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),q(n.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)me(j.__webglFramebuffer[Ae][qe],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe);else me(j.__webglFramebuffer[Ae],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ae=0,qe=ve.length;Ae<qe;Ae++){const rt=ve[Ae],Se=r.get(rt);let we=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,Se.__webglTexture),q(we,rt),me(j.__webglFramebuffer,I,rt,n.COLOR_ATTACHMENT0+Ae,we,0),y(rt)&&_(we)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),q(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)me(j.__webglFramebuffer[qe],I,E,n.COLOR_ATTACHMENT0,Ae,qe);else me(j.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Ae,0);y(E)&&_(Ae),t.unbindTexture()}I.depthBuffer&&it(I)}function St(I){const E=I.textures;for(let j=0,pe=E.length;j<pe;j++){const ve=E[j];if(y(ve)){const de=C(I),Be=r.get(ve).__webglTexture;t.bindTexture(de,Be),_(de),t.unbindTexture()}}}const bt=[],ft=[];function Bt(I){if(I.samples>0){if(Ht(I)===!1){const E=I.textures,j=I.width,pe=I.height;let ve=n.COLOR_BUFFER_BIT;const de=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=r.get(I),Ae=E.length>1;if(Ae)for(let rt=0;rt<E.length;rt++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const qe=I.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let rt=0;rt<E.length;rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[rt]);const Se=r.get(E[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,j,pe,0,0,j,pe,ve,n.NEAREST),d===!0&&(bt.length=0,ft.length=0,bt.push(n.COLOR_ATTACHMENT0+rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(bt.push(de),ft.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let rt=0;rt<E.length;rt++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,Be.__webglColorRenderbuffer[rt]);const Se=r.get(E[rt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function z(I){return Math.min(o.maxSamples,I.samples)}function Ht(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(I){const E=u.render.frame;p.get(I)!==E&&(p.set(I,E),I.update())}function Mt(I,E){const j=I.colorSpace,pe=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Wo&&j!==ss&&(wt.getTransfer(j)===It?(pe!==Ii||ve!==mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",j)),E}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=ee,this.setTexture2D=K,this.setTexture2DArray=ie,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Zt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YI(n,e){function t(r,o=ss){let a;const u=wt.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===Nm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===nM)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===iM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===eM)return n.BYTE;if(r===tM)return n.SHORT;if(r===ol)return n.UNSIGNED_SHORT;if(r===Im)return n.INT;if(r===er)return n.UNSIGNED_INT;if(r===Wi)return n.FLOAT;if(r===wr)return n.HALF_FLOAT;if(r===rM)return n.ALPHA;if(r===sM)return n.RGB;if(r===Ii)return n.RGBA;if(r===Ar)return n.DEPTH_COMPONENT;if(r===zs)return n.DEPTH_STENCIL;if(r===oM)return n.RED;if(r===Um)return n.RED_INTEGER;if(r===Go)return n.RG;if(r===Om)return n.RG_INTEGER;if(r===km)return n.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(u===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fp||r===dp||r===hp||r===pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mp||r===gp||r===vp||r===xp||r===_p||r===yp||r===Sp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===mp||r===gp)return u===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===xp)return a.COMPRESSED_R11_EAC;if(r===_p)return a.COMPRESSED_SIGNED_R11_EAC;if(r===yp)return a.COMPRESSED_RG11_EAC;if(r===Sp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Mp||r===Ep||r===Tp||r===wp||r===Ap||r===Cp||r===Rp||r===bp||r===Pp||r===Dp||r===Lp||r===Ip||r===Np||r===Fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Mp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ep)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ap)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ip)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Np)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fp)return u===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Up||r===Op||r===kp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Up)return u===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Op)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bp||r===Vp||r===zp||r===Hp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const $I=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new gM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:$I,fragmentShader:qI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tr(new _l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZI extends Zo{constructor(e,t){super();const r=this;let o=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,v=null,g=null,S=null,M=null;const T=typeof XRWebGLBinding<"u",y=new KI,_={},C=t.getContextAttributes();let b=null,P=null;const L=[],N=[],O=new Ft;let w=null;const D=new Pi;D.viewport=new nn;const ce=new Pi;ce.viewport=new nn;const B=[D,ce],ee=new u2;let Q=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=L[se];return ge===void 0&&(ge=new eh,L[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=L[se];return ge===void 0&&(ge=new eh,L[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=L[se];return ge===void 0&&(ge=new eh,L[se]=ge),ge.getHandSpace()};function K(se){const ge=N.indexOf(se.inputSource);if(ge===-1)return;const me=L[ge];me!==void 0&&(me.update(se.inputSource,se.frame,h||u),me.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",H);for(let se=0;se<L.length;se++){const ge=N[se];ge!==null&&(N[se]=null,L[se].disconnect(ge))}Q=null,fe=null,y.reset();for(const se in _)delete _[se];e.setRenderTarget(b),S=null,g=null,v=null,o=null,P=null,Qe.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,Ge=null;C.depth&&(Ge=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?zs:Ar,Oe=C.stencil?al:er);const it={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ki(g.textureWidth,g.textureHeight,{format:Ii,type:mi,depthTexture:new ll(g.textureWidth,g.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ki(S.framebufferWidth,S.framebufferHeight,{format:Ii,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Qe.setContext(o),Qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(se){for(let ge=0;ge<se.removed.length;ge++){const me=se.removed[ge],Oe=N.indexOf(me);Oe>=0&&(N[Oe]=null,L[Oe].disconnect(me))}for(let ge=0;ge<se.added.length;ge++){const me=se.added[ge];let Oe=N.indexOf(me);if(Oe===-1){for(let it=0;it<L.length;it++)if(it>=N.length){N.push(me),Oe=it;break}else if(N[it]===null){N[it]=me,Oe=it;break}if(Oe===-1)break}const Ge=L[Oe];Ge&&Ge.connect(me)}}const $=new oe,re=new oe;function ue(se,ge,me){$.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Oe=$.distanceTo(re),Ge=ge.projectionMatrix.elements,it=me.projectionMatrix.elements,Zt=Ge[14]/(Ge[10]-1),mt=Ge[14]/(Ge[10]+1),St=(Ge[9]+1)/Ge[5],bt=(Ge[9]-1)/Ge[5],ft=(Ge[8]-1)/Ge[0],Bt=(it[8]+1)/it[0],z=Zt*ft,Ht=Zt*Bt,vt=Oe/(-ft+Bt),Mt=vt*-ft;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Mt),se.translateZ(vt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ge[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const We=Zt+vt,I=mt+vt,E=z-Mt,j=Ht+(Oe-Mt),pe=St*mt/I*We,ve=bt*mt/I*We;se.projectionMatrix.makePerspective(E,j,pe,ve,We,I),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ge=se.near,me=se.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(me=y.depthFar)),ee.near=ce.near=D.near=ge,ee.far=ce.far=D.far=me,(Q!==ee.near||fe!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),Q=ee.near,fe=ee.far),ee.layers.mask=se.layers.mask|6,D.layers.mask=ee.layers.mask&-5,ce.layers.mask=ee.layers.mask&-3;const Oe=se.parent,Ge=ee.cameras;U(ee,Oe);for(let it=0;it<Ge.length;it++)U(Ge[it],Oe);Ge.length===2?ue(ee,D,ce):ee.projectionMatrix.copy(D.projectionMatrix),q(se,ee,Oe)};function q(se,ge,me){me===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(me.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Gp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(se){d=se,g!==null&&(g.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(se){return _[se]};let Re=null;function Xe(se,ge){if(p=ge.getViewerPose(h||u),M=ge,p!==null){const me=p.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Oe=!1;me.length!==ee.cameras.length&&(ee.cameras.length=0,Oe=!0);for(let mt=0;mt<me.length;mt++){const St=me[mt];let bt=null;if(S!==null)bt=S.getViewport(St);else{const Bt=v.getViewSubImage(g,St);bt=Bt.viewport,mt===0&&(e.setRenderTargetTextures(P,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(P))}let ft=B[mt];ft===void 0&&(ft=new Pi,ft.layers.enable(mt),ft.viewport=new nn,B[mt]=ft),ft.matrix.fromArray(St.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(St.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(bt.x,bt.y,bt.width,bt.height),mt===0&&(ee.matrix.copy(ft.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Oe===!0&&ee.cameras.push(ft)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const mt=v.getDepthInformation(me[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,o.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let mt=0;mt<me.length;mt++){const St=me[mt].camera;if(St){let bt=_[St];bt||(bt=new gM,_[St]=bt);const ft=v.getCameraImage(St);bt.sourceTexture=ft}}}}for(let me=0;me<L.length;me++){const Oe=N[me],Ge=L[me];Oe!==null&&Ge!==void 0&&Ge.update(Oe,ge,h||u)}Re&&Re(se,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),M=null}const Qe=new _M;Qe.setAnimationLoop(Xe),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Ls=new Cr,QI=new an;function JI(n,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,vM(n)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,b,P){_.isMeshBasicMaterial?a(y,_):_.isMeshLambertMaterial?(a(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(y,_),v(y,_)):_.isMeshPhongMaterial?(a(y,_),p(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(y,_),g(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(a(y,_),M(y,_)):_.isMeshDepthMaterial?a(y,_):_.isMeshDistanceMaterial?(a(y,_),T(y,_)):_.isMeshNormalMaterial?a(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&c(y,_)):_.isPointsMaterial?d(y,_,C,b):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===$n&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===$n&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),b=C.envMap,P=C.envMapRotation;b&&(y.envMap.value=b,Ls.copy(P),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),y.envMapRotation.value.setFromMatrix4(QI.makeRotationFromEuler(Ls)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function c(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,C,b){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=b*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function g(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eN(n,e,t,r){let o={},a={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,b){const P=b.program;r.uniformBlockBinding(C,P)}function h(C,b){let P=o[C.id];P===void 0&&(M(C),P=p(C),o[C.id]=P,C.addEventListener("dispose",y));const L=b.program;r.updateUBOMapping(C,L);const N=e.render.frame;a[C.id]!==N&&(g(C),a[C.id]=N)}function p(C){const b=v();C.__bindingPointIndex=b;const P=n.createBuffer(),L=C.__size,N=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,L,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function v(){for(let C=0;C<c;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const b=o[C.id],P=C.uniforms,L=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,O=P.length;N<O;N++){const w=Array.isArray(P[N])?P[N]:[P[N]];for(let D=0,ce=w.length;D<ce;D++){const B=w[D];if(S(B,N,D,L)===!0){const ee=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let K=0;K<Q.length;K++){const ie=Q[K],H=T(ie);typeof ie=="number"||typeof ie=="boolean"?(B.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,ee+fe,B.__data)):ie.isMatrix3?(B.__data[0]=ie.elements[0],B.__data[1]=ie.elements[1],B.__data[2]=ie.elements[2],B.__data[3]=0,B.__data[4]=ie.elements[3],B.__data[5]=ie.elements[4],B.__data[6]=ie.elements[5],B.__data[7]=0,B.__data[8]=ie.elements[6],B.__data[9]=ie.elements[7],B.__data[10]=ie.elements[8],B.__data[11]=0):(ie.toArray(B.__data,fe),fe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(C,b,P,L){const N=C.value,O=b+"_"+P;if(L[O]===void 0)return typeof N=="number"||typeof N=="boolean"?L[O]=N:L[O]=N.clone(),!0;{const w=L[O];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return L[O]=N,!0}else if(w.equals(N)===!1)return w.copy(N),!0}return!1}function M(C){const b=C.uniforms;let P=0;const L=16;for(let O=0,w=b.length;O<w;O++){const D=Array.isArray(b[O])?b[O]:[b[O]];for(let ce=0,B=D.length;ce<B;ce++){const ee=D[ce],Q=Array.isArray(ee.value)?ee.value:[ee.value];for(let fe=0,K=Q.length;fe<K;fe++){const ie=Q[fe],H=T(ie),$=P%L,re=$%H.boundary,ue=$+re;P+=re,ue!==0&&L-ue<H.storage&&(P+=L-ue),ee.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=P,P+=H.storage}}}const N=P%L;return N>0&&(P+=L-N),C.__size=P,C.__cache={},this}function T(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",C),b}function y(C){const b=C.target;b.removeEventListener("dispose",y);const P=u.indexOf(b.__bindingPointIndex);u.splice(P,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function _(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},a={}}return{bind:d,update:h,dispose:_}}const tN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function nN(){return Hi===null&&(Hi=new KP(tN,16,16,Go,wr),Hi.name="DFG_LUT",Hi.minFilter=bn,Hi.magFilter=bn,Hi.wrapS=_r,Hi.wrapT=_r,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class iN{constructor(e={}){const{canvas:t=AP(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const T=S,y=new Set([km,Om,Um]),_=new Set([mi,er,ol,al,Nm,Fm]),C=new Uint32Array(4),b=new Int32Array(4);let P=null,L=null;const N=[],O=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ce=!1;this._outputColorSpace=pi;let B=0,ee=0,Q=null,fe=-1,K=null;const ie=new nn,H=new nn;let $=null;const re=new Nt(0);let ue=0,U=t.width,q=t.height,Re=1,Xe=null,Qe=null;const se=new nn(0,0,U,q),ge=new nn(0,0,U,q);let me=!1;const Oe=new pM;let Ge=!1,it=!1;const Zt=new an,mt=new oe,St=new nn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Bt(){return Q===null?Re:1}let z=r;function Ht(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lm}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),z===null){const X="webgl2";if(z=Ht(X,R),z===null)throw Ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ct("WebGLRenderer: "+R.message),R}let vt,Mt,We,I,E,j,pe,ve,de,Be,Ae,qe,rt,Se,we,je,Ve,Le,ct,G,Ce,Ee,Ie;function Me(){vt=new iL(z),vt.init(),Ce=new YI(z,vt),Mt=new qD(z,vt,e,Ce),We=new jI(z,vt),Mt.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),I=new oL(z),E=new DI,j=new XI(z,vt,We,E,Mt,Ce,I),pe=new nL(D),ve=new f2(z),Ee=new YD(z,ve),de=new rL(z,ve,I,Ee),Be=new lL(z,de,ve,Ee,I),Le=new aL(z,Mt,j),we=new KD(E),Ae=new PI(D,pe,vt,Mt,Ee,we),qe=new JI(D,E),rt=new II,Se=new BI(vt),Ve=new XD(D,pe,We,Be,M,d),je=new WI(D,Be,Mt),Ie=new eN(z,I,Mt,We),ct=new $D(z,vt,I),G=new sL(z,vt,I),I.programs=Ae.programs,D.capabilities=Mt,D.extensions=vt,D.properties=E,D.renderLists=rt,D.shadowMap=je,D.state=We,D.info=I}Me(),T!==mi&&(w=new cL(T,t.width,t.height,o,a));const he=new ZI(D,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(R){R!==void 0&&(Re=R,this.setSize(U,q,!1))},this.getSize=function(R){return R.set(U,q)},this.setSize=function(R,X,le=!0){if(he.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,q=X,t.width=Math.floor(R*Re),t.height=Math.floor(X*Re),le===!0&&(t.style.width=R+"px",t.style.height=X+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(U*Re,q*Re).floor()},this.setDrawingBufferSize=function(R,X,le){U=R,q=X,Re=le,t.width=Math.floor(R*le),t.height=Math.floor(X*le),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ie)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,X,le,ne){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,X,le,ne),We.viewport(ie.copy(se).multiplyScalar(Re).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,X,le,ne){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,X,le,ne),We.scissor(H.copy(ge).multiplyScalar(Re).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){We.setScissorTest(me=R)},this.setOpaqueSort=function(R){Xe=R},this.setTransparentSort=function(R){Qe=R},this.getClearColor=function(R){return R.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,le=!0){let ne=0;if(R){let J=!1;if(Q!==null){const Pe=Q.texture.format;J=y.has(Pe)}if(J){const Pe=Q.texture.type,Ue=_.has(Pe),be=Ve.getClearColor(),Ne=Ve.getClearAlpha(),Ze=be.r,et=be.g,dt=be.b;Ue?(C[0]=Ze,C[1]=et,C[2]=dt,C[3]=Ne,z.clearBufferuiv(z.COLOR,0,C)):(b[0]=Ze,b[1]=et,b[2]=dt,b[3]=Ne,z.clearBufferiv(z.COLOR,0,b))}else ne|=z.COLOR_BUFFER_BIT}X&&(ne|=z.DEPTH_BUFFER_BIT),le&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ve.dispose(),rt.dispose(),Se.dispose(),E.dispose(),pe.dispose(),Be.dispose(),Ee.dispose(),Ie.dispose(),Ae.dispose(),he.dispose(),he.removeEventListener("sessionstart",Pr),he.removeEventListener("sessionend",fs),ri.stop()};function ze(R){R.preventDefault(),Jx("WebGLRenderer: Context Lost."),ce=!0}function ot(){Jx("WebGLRenderer: Context Restored."),ce=!1;const R=I.autoReset,X=je.enabled,le=je.autoUpdate,ne=je.needsUpdate,J=je.type;Me(),I.autoReset=R,je.enabled=X,je.autoUpdate=le,je.needsUpdate=ne,je.type=J}function Lt(R){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){const X=R.target;X.removeEventListener("dispose",Et),ii(X)}function ii(R){Pn(R),E.remove(R)}function Pn(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(le){Ae.releaseProgram(le)}),R.isShaderMaterial&&Ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,le,ne,J,Pe){X===null&&(X=bt);const Ue=J.isMesh&&J.matrixWorld.determinant()<0,be=El(R,X,le,ne,J);We.setMaterial(ne,Ue);let Ne=le.index,Ze=1;if(ne.wireframe===!0){if(Ne=de.getWireframeAttribute(le),Ne===void 0)return;Ze=2}const et=le.drawRange,dt=le.attributes.position;let Je=et.start*Ze,Pt=(et.start+et.count)*Ze;Pe!==null&&(Je=Math.max(Je,Pe.start*Ze),Pt=Math.min(Pt,(Pe.start+Pe.count)*Ze)),Ne!==null?(Je=Math.max(Je,0),Pt=Math.min(Pt,Ne.count)):dt!=null&&(Je=Math.max(Je,0),Pt=Math.min(Pt,dt.count));const Ot=Pt-Je;if(Ot<0||Ot===1/0)return;Ee.setup(J,ne,be,le,Ne);let Ut,yt=ct;if(Ne!==null&&(Ut=ve.get(Ne),yt=G,yt.setIndex(Ut)),J.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*Bt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(J.isLine){let Qt=ne.linewidth;Qt===void 0&&(Qt=1),We.setLineWidth(Qt*Bt()),J.isLineSegments?yt.setMode(z.LINES):J.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else J.isPoints?yt.setMode(z.POINTS):J.isSprite&&yt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))yt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qt=J._multiDrawStarts,$e=J._multiDrawCounts,Dn=J._multiDrawCount,xt=Ne?ve.get(Ne).bytesPerElement:1,On=E.get(ne).currentProgram.getUniforms();for(let kn=0;kn<Dn;kn++)On.setValue(z,"_gl_DrawID",kn),yt.render(Qt[kn]/xt,$e[kn])}else if(J.isInstancedMesh)yt.renderInstances(Je,Ot,J.count);else if(le.isInstancedBufferGeometry){const Qt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,$e=Math.min(le.instanceCount,Qt);yt.renderInstances(Je,Ot,$e)}else yt.render(Je,Ot)};function js(R,X,le){R.transparent===!0&&R.side===xr&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,hs(R,X,le),R.side=ls,R.needsUpdate=!0,hs(R,X,le),R.side=xr):hs(R,X,le)}this.compile=function(R,X,le=null){le===null&&(le=R),L=Se.get(le),L.init(X),O.push(L),le.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),R!==le&&R.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ne=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const be=Pe[Ue];js(be,le,J),ne.add(be)}else js(Pe,le,J),ne.add(Pe)}),L=O.pop(),ne},this.compileAsync=function(R,X,le=null){const ne=this.compile(R,X,le);return new Promise(J=>{function Pe(){if(ne.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){J(R);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let nr=null;function zc(R){nr&&nr(R)}function Pr(){ri.stop()}function fs(){ri.start()}const ri=new _M;ri.setAnimationLoop(zc),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(R){nr=R,he.setAnimationLoop(R),R===null?ri.stop():ri.start()},he.addEventListener("sessionstart",Pr),he.addEventListener("sessionend",fs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ce===!0)return;const le=he.enabled===!0&&he.isPresenting===!0,ne=w!==null&&(Q===null||le)&&w.begin(D,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(X),X=he.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,Q),L=Se.get(R,O.length),L.init(X),O.push(L),Zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Oe.setFromProjectionMatrix(Zt,ji,X.reversedDepth),it=this.localClippingEnabled,Ge=we.init(this.clippingPlanes,it),P=rt.get(R,N.length),P.init(),N.push(P),he.enabled===!0&&he.isPresenting===!0){const Ue=D.xr.getDepthSensingMesh();Ue!==null&&ds(Ue,X,-1/0,D.sortObjects)}ds(R,X,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(Xe,Qe),ft=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ft&&Ve.addToRenderList(P,R),this.info.render.frame++,Ge===!0&&we.beginShadows();const J=L.state.shadowsArray;if(je.render(J,R,X),Ge===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&w.hasRenderPass())===!1){const Ue=P.opaque,be=P.transmissive;if(L.setupLights(),X.isArrayCamera){const Ne=X.cameras;if(be.length>0)for(let Ze=0,et=Ne.length;Ze<et;Ze++){const dt=Ne[Ze];Sl(Ue,be,R,dt)}ft&&Ve.render(R);for(let Ze=0,et=Ne.length;Ze<et;Ze++){const dt=Ne[Ze];yl(P,R,dt,dt.viewport)}}else be.length>0&&Sl(Ue,be,R,X),ft&&Ve.render(R),yl(P,R,X)}Q!==null&&ee===0&&(j.updateMultisampleRenderTarget(Q),j.updateRenderTargetMipmap(Q)),ne&&w.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),Ee.resetDefaultState(),fe=-1,K=null,O.pop(),O.length>0?(L=O[O.length-1],Ge===!0&&we.setGlobalState(D.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?P=N[N.length-1]:P=null};function ds(R,X,le,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Oe.intersectsSprite(R)){ne&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Zt);const Ue=Be.update(R),be=R.material;be.visible&&P.push(R,Ue,be,le,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Oe.intersectsObject(R))){const Ue=Be.update(R),be=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),St.copy(Ue.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(Zt)),Array.isArray(be)){const Ne=Ue.groups;for(let Ze=0,et=Ne.length;Ze<et;Ze++){const dt=Ne[Ze],Je=be[dt.materialIndex];Je&&Je.visible&&P.push(R,Ue,Je,le,St.z,dt)}}else be.visible&&P.push(R,Ue,be,le,St.z,null)}}const Pe=R.children;for(let Ue=0,be=Pe.length;Ue<be;Ue++)ds(Pe[Ue],X,le,ne)}function yl(R,X,le,ne){const{opaque:J,transmissive:Pe,transparent:Ue}=R;L.setupLightsView(le),Ge===!0&&we.setGlobalState(D.clippingPlanes,le),ne&&We.viewport(ie.copy(ne)),J.length>0&&Xs(J,X,le),Pe.length>0&&Xs(Pe,X,le),Ue.length>0&&Xs(Ue,X,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Sl(R,X,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new Ki(1,1,{generateMipmaps:!0,type:Je?wr:mi,minFilter:Vs,samples:Math.max(4,Mt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||ie;Pe.setSize(Ue.z*D.transmissionResolutionScale,Ue.w*D.transmissionResolutionScale);const be=D.getRenderTarget(),Ne=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(re),ue=D.getClearAlpha(),ue<1&&D.setClearColor(16777215,.5),D.clear(),ft&&Ve.render(le);const et=D.toneMapping;D.toneMapping=qi;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),Ge===!0&&we.setGlobalState(D.clippingPlanes,ne),Xs(R,le,ne),j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pt=0,Ot=X.length;Pt<Ot;Pt++){const Ut=X[Pt],{object:yt,geometry:Qt,material:$e,group:Dn}=Ut;if($e.side===xr&&yt.layers.test(ne.layers)){const xt=$e.side;$e.side=$n,$e.needsUpdate=!0,Ui(yt,le,ne,Qt,$e,Dn),$e.side=xt,$e.needsUpdate=!0,Je=!0}}Je===!0&&(j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe))}D.setRenderTarget(be,Ne,Ze),D.setClearColor(re,ue),dt!==void 0&&(ne.viewport=dt),D.toneMapping=et}function Xs(R,X,le){const ne=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Pe=R.length;J<Pe;J++){const Ue=R[J],{object:be,geometry:Ne,group:Ze}=Ue;let et=Ue.material;et.allowOverride===!0&&ne!==null&&(et=ne),be.layers.test(le.layers)&&Ui(be,X,le,Ne,et,Ze)}}function Ui(R,X,le,ne,J,Pe){R.onBeforeRender(D,X,le,ne,J,Pe),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(D,X,le,ne,R,Pe),J.transparent===!0&&J.side===xr&&J.forceSinglePass===!1?(J.side=$n,J.needsUpdate=!0,D.renderBufferDirect(le,X,ne,J,R,Pe),J.side=ls,J.needsUpdate=!0,D.renderBufferDirect(le,X,ne,J,R,Pe),J.side=xr):D.renderBufferDirect(le,X,ne,J,R,Pe),R.onAfterRender(D,X,le,ne,J,Pe)}function hs(R,X,le){X.isScene!==!0&&(X=bt);const ne=E.get(R),J=L.state.lights,Pe=L.state.shadowsArray,Ue=J.state.version,be=Ae.getParameters(R,J.state,Pe,X,le),Ne=Ae.getProgramCacheKey(be);let Ze=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const et=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=pe.get(R.envMap||ne.environment,et),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",Et),Ze=new Map,ne.programs=Ze);let dt=Ze.get(Ne);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ue)return Ml(R,be),dt}else be.uniforms=Ae.getUniforms(R),R.onBeforeCompile(be,D),dt=Ae.acquireProgram(be,Ne),Ze.set(Ne,dt),ne.uniforms=be.uniforms;const Je=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=we.uniform),Ml(R,be),ne.needsLights=wl(R),ne.lightsStateVersion=Ue,ne.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=dt,ne.uniformsList=null,dt}function ea(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=vc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ml(R,X){const le=E.get(R);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function El(R,X,le,ne,J){X.isScene!==!0&&(X=bt),j.resetTextureUnits();const Pe=X.fog,Ue=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,be=Q===null?D.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wo,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=pe.get(ne.envMap||Ue,Ne),et=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!le.morphAttributes.position,Pt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ut=qi;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=D.toneMapping);const yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Qt=yt!==void 0?yt.length:0,$e=E.get(ne),Dn=L.state.lights;if(Ge===!0&&(it===!0||R!==K)){const Jt=R===K&&ne.id===fe;we.setState(ne,R,Jt)}let xt=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Dn.state.version||$e.outputColorSpace!==be||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Ze||ne.fog===!0&&$e.fog!==Pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==we.numPlanes||$e.numIntersection!==we.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==dt||$e.morphTargets!==Je||$e.morphNormals!==Pt||$e.morphColors!==Ot||$e.toneMapping!==Ut||$e.morphTargetsCount!==Qt)&&(xt=!0):(xt=!0,$e.__version=ne.version);let On=$e.currentProgram;xt===!0&&(On=hs(ne,X,J));let kn=!1,qn=!1,Dr=!1;const Rt=On.getUniforms(),at=$e.uniforms;if(We.useProgram(On.program)&&(kn=!0,qn=!0,Dr=!0),ne.id!==fe&&(fe=ne.id,qn=!0),kn||K!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(z,"projectionMatrix",R.projectionMatrix),Rt.setValue(z,"viewMatrix",R.matrixWorldInverse);const si=Rt.map.cameraPosition;si!==void 0&&si.setValue(z,mt.setFromMatrixPosition(R.matrixWorld)),Mt.logarithmicDepthBuffer&&Rt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Rt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,qn=!0,Dr=!0)}if($e.needsLights&&(Dn.state.directionalShadowMap.length>0&&Rt.setValue(z,"directionalShadowMap",Dn.state.directionalShadowMap,j),Dn.state.spotShadowMap.length>0&&Rt.setValue(z,"spotShadowMap",Dn.state.spotShadowMap,j),Dn.state.pointShadowMap.length>0&&Rt.setValue(z,"pointShadowMap",Dn.state.pointShadowMap,j)),J.isSkinnedMesh){Rt.setOptional(z,J,"bindMatrix"),Rt.setOptional(z,J,"bindMatrixInverse");const Jt=J.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Rt.setValue(z,"boneTexture",Jt.boneTexture,j))}J.isBatchedMesh&&(Rt.setOptional(z,J,"batchingTexture"),Rt.setValue(z,"batchingTexture",J._matricesTexture,j),Rt.setOptional(z,J,"batchingIdTexture"),Rt.setValue(z,"batchingIdTexture",J._indirectTexture,j),Rt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Rt.setValue(z,"batchingColorTexture",J._colorsTexture,j));const xi=le.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Le.update(J,le,On),(qn||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,Rt.setValue(z,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=nN()),qn&&(Rt.setValue(z,"toneMappingExposure",D.toneMappingExposure),$e.needsLights&&Tl(at,Dr),Pe&&ne.fog===!0&&qe.refreshFogUniforms(at,Pe),qe.refreshMaterialUniforms(at,ne,Re,q,L.state.transmissionRenderTarget[R.id]),vc.upload(z,ea($e),at,j)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(vc.upload(z,ea($e),at,j),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Rt.setValue(z,"center",J.center),Rt.setValue(z,"modelViewMatrix",J.modelViewMatrix),Rt.setValue(z,"normalMatrix",J.normalMatrix),Rt.setValue(z,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Jt=ne.uniformsGroups;for(let si=0,ir=Jt.length;si<ir;si++){const ta=Jt[si];Ie.update(ta,On),Ie.bind(ta,On)}}return On}function Tl(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function wl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,X,le){const ne=E.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const le=E.get(R);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const Al=z.createFramebuffer();this.setRenderTarget=function(R,X=0,le=0){Q=R,B=X,ee=le;let ne=null,J=!1,Pe=!1;if(R){const be=E.get(R);if(be.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),ie.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest,We.viewport(ie),We.scissor(H),We.setScissorTest($),fe=-1;return}else if(be.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(be.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(be.__boundDepthTexture!==et){if(et!==null&&E.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Pe=!0);const Ze=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ne=Ze[X][le]:ne=Ze[X],J=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?ne=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[le]:ne=Ze,ie.copy(R.viewport),H.copy(R.scissor),$=R.scissorTest}else ie.copy(se).multiplyScalar(Re).floor(),H.copy(ge).multiplyScalar(Re).floor(),$=me;if(le!==0&&(ne=Al),We.bindFramebuffer(z.FRAMEBUFFER,ne)&&We.drawBuffers(R,ne),We.viewport(ie),We.scissor(H),We.setScissorTest($),J){const be=E.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,be.__webglTexture,le)}else if(Pe){const be=X;for(let Ne=0;Ne<R.textures.length;Ne++){const Ze=E.get(R.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Ze.__webglTexture,le,be)}}else if(R!==null&&le!==0){const be=E.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,le)}fe=-1},this.readRenderTargetPixels=function(R,X,le,ne,J,Pe,Ue,be=0){if(!(R&&R.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){We.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Ze=R.textures[be],et=Ze.format,dt=Ze.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!Mt.textureFormatReadable(et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&le>=0&&le<=R.height-J&&z.readPixels(X,le,ne,J,Ce.convert(et),Ce.convert(dt),Pe)}finally{const Ze=Q!==null?E.get(Q).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,X,le,ne,J,Pe,Ue,be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(X>=0&&X<=R.width-ne&&le>=0&&le<=R.height-J){We.bindFramebuffer(z.FRAMEBUFFER,Ne);const Ze=R.textures[be],et=Ze.format,dt=Ze.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(X,le,ne,J,Ce.convert(et),Ce.convert(dt),0);const Pt=Q!==null?E.get(Q).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,Pt);const Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await CP(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.deleteBuffer(Je),z.deleteSync(Ot),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,le=0){const ne=Math.pow(2,-le),J=Math.floor(R.image.width*ne),Pe=Math.floor(R.image.height*ne),Ue=X!==null?X.x:0,be=X!==null?X.y:0;j.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,le,0,0,Ue,be,J,Pe),We.unbindTexture()};const Hc=z.createFramebuffer(),Gc=z.createFramebuffer();this.copyTextureToTexture=function(R,X,le=null,ne=null,J=0,Pe=0){let Ue,be,Ne,Ze,et,dt,Je,Pt,Ot;const Ut=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(le!==null)Ue=le.max.x-le.min.x,be=le.max.y-le.min.y,Ne=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,et=le.min.y,dt=le.isBox3?le.min.z:0;else{const at=Math.pow(2,-J);Ue=Math.floor(Ut.width*at),be=Math.floor(Ut.height*at),R.isDataArrayTexture?Ne=Ut.depth:R.isData3DTexture?Ne=Math.floor(Ut.depth*at):Ne=1,Ze=0,et=0,dt=0}ne!==null?(Je=ne.x,Pt=ne.y,Ot=ne.z):(Je=0,Pt=0,Ot=0);const yt=Ce.convert(X.format),Qt=Ce.convert(X.type);let $e;X.isData3DTexture?(j.setTexture3D(X,0),$e=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),$e=z.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),$e=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),On=z.getParameter(z.UNPACK_SKIP_PIXELS),kn=z.getParameter(z.UNPACK_SKIP_ROWS),qn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ze),z.pixelStorei(z.UNPACK_SKIP_ROWS,et),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const Dr=R.isDataArrayTexture||R.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const at=E.get(R),xi=E.get(X),Jt=E.get(at.__renderTarget),si=E.get(xi.__renderTarget);We.bindFramebuffer(z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ir=0;ir<Ne;ir++)Dr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,dt+ir),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Pe,Ot+ir)),z.blitFramebuffer(Ze,et,Ue,be,Je,Pt,Ue,be,z.DEPTH_BUFFER_BIT,z.NEAREST);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const at=E.get(R),xi=E.get(X);We.bindFramebuffer(z.READ_FRAMEBUFFER,Hc),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,Gc);for(let Jt=0;Jt<Ne;Jt++)Dr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,J,dt+Jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,at.__webglTexture,J),Rt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xi.__webglTexture,Pe,Ot+Jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xi.__webglTexture,Pe),J!==0?z.blitFramebuffer(Ze,et,Ue,be,Je,Pt,Ue,be,z.COLOR_BUFFER_BIT,z.NEAREST):Rt?z.copyTexSubImage3D($e,Pe,Je,Pt,Ot+Jt,Ze,et,Ue,be):z.copyTexSubImage2D($e,Pe,Je,Pt,Ze,et,Ue,be);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?z.texSubImage3D($e,Pe,Je,Pt,Ot,Ue,be,Ne,yt,Qt,Ut.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D($e,Pe,Je,Pt,Ot,Ue,be,Ne,yt,Ut.data):z.texSubImage3D($e,Pe,Je,Pt,Ot,Ue,be,Ne,yt,Qt,Ut):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,Je,Pt,Ue,be,yt,Qt,Ut.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,Je,Pt,Ut.width,Ut.height,yt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,Pe,Je,Pt,Ue,be,yt,Qt,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,On),z.pixelStorei(z.UNPACK_SKIP_ROWS,kn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qn),Pe===0&&X.generateMipmaps&&z.generateMipmap($e),We.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){B=0,ee=0,Q=null,We.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const rN=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sN=`
  precision highp float;

  uniform float u_size;
  uniform float u_textureId;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform float u_time;

  varying vec2 vUv;

  /* ---- Utility functions ---- */

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  float strandHighlight(vec2 uv, float angle, float roughness) {
    vec2 strandDir = vec2(-sin(angle), cos(angle));
    vec2 H = normalize(vec2(-0.8, 0.8));
    float dotTH = dot(strandDir, H);
    float sinTH = sqrt(1.0 - dotTH * dotTH);
    float exponent = 20.0 / (roughness * roughness);
    return pow(max(0.0, sinTH), exponent);
  }

  /* ---- Texture generators ---- */

  vec3 applyCarbonFiber(vec3 base, vec2 uv, vec3 p3d) {
    float weave = (sin(uv.x * 80.0) * 0.5 + 0.5) * (sin(uv.y * 80.0) * 0.5 + 0.5);
    float detail = fbm(p3d.xy * 100.0) * 0.3;
    return mix(base * 0.5, base * 0.8, weave + detail);
  }

  vec3 applyGlassFiber(vec3 base, vec3 p3d) {
    float grain = fbm(p3d.xy * 200.0);
    return mix(base, base * 0.8, grain * 0.5);
  }

  vec3 applyWood(vec3 base, vec3 p3d) {
    float grain = fbm(p3d.xy * 20.0);
    float rings = abs(sin(length(p3d.xy) * 10.0 + grain * 2.0));
    return mix(base * 0.7, base * 1.1, rings);
  }

  vec3 applyMarble(vec3 base, vec3 p3d) {
    float noiseVal = fbm(p3d.xy * 14.0);
    float veins = smoothstep(0.4, 0.65, noiseVal);
    return mix(base, base * 0.5, veins);
  }

  vec3 applyRainbow(vec3 base, float angle, float dist, float time) {
    float hue = fract((angle / 6.28318) + dist + time * 0.3);
    vec3 rgb = abs(fract(hue + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0) - 1.0;
    return mix(base, clamp(rgb, 0.0, 1.0), 0.7);
  }

  vec3 applyGradient(vec3 c1, vec3 c2, vec2 uv) {
    float t = smoothstep(-1.0, 1.0, uv.y * 2.0);
    return mix(c2, c1, t);
  }

  /* ---- Main shader ---- */

  void main() {
    // Map UV (0..1) to centered coordinates (-1..1)
    vec2 uv = (vUv - 0.5) * 2.0;
    float dist = length(uv);
    float angle = atan(uv.y, uv.x);
    vec3 pos3D = vec3(uv * 2.0, dist);

    // Outside circle — transparent
    if (dist > 1.0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Geometry constants
    float rRimOuter = 0.98;
    float rRimInner = 0.92;
    float rHub = 0.30;
    float rHole = 0.12;
    float fillPercentage = 1.0; // always full on website
    float currentFillRadius = rHub + (rRimInner - rHub) * fillPercentage;

    vec3 c1 = u_color1;
    vec3 c2 = u_color2;

    // Lighting
    vec3 L = normalize(vec3(-0.5, 0.5, 1.5));
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 H = normalize(L + V);

    int id = int(u_textureId);

    // Default PLA material properties
    float roughness = 0.4;
    float metallic = 0.0;
    float specularIntensity = 1.0;
    float anisotropy = 1.0;
    float strandStrength = 1.0;

    vec3 albedo = mix(c2, c1, smoothstep(rHub, rRimInner, dist));

    /* ---- Material overrides ---- */
    if (id == 1) { // GALAXY
      float sparkleNoise = fbm(pos3D.xy * 15.0);
      float staticSparkle = step(0.75, sparkleNoise) * 0.8;
      float animatedNoise = fbm(pos3D.xy * 12.0 + vec2(u_time * 0.2));
      float animatedSparkle = step(0.8, animatedNoise) * 0.5;
      albedo = albedo + vec3(staticSparkle + animatedSparkle);
      roughness = 0.45;
      specularIntensity = 0.8;
    }
    else if (id == 2) { // CARBON FIBER
      albedo = applyCarbonFiber(albedo, uv, pos3D);
      roughness = 0.6; metallic = 0.3; anisotropy = 0.2; strandStrength = 0.3;
    }
    else if (id == 3) { // SILK
      roughness = 0.15; metallic = 0.1; specularIntensity = 1.1; anisotropy = 2.0;
    }
    else if (id == 4) { // METALLIC
      float brush = fbm(vec2(uv.x * 20.0, uv.y * 20.0));
      albedo = mix(albedo, albedo * 0.8, brush * 0.2);
      metallic = 0.9; roughness = 0.3;
    }
    else if (id == 5) { // PETG
      roughness = 0.1; specularIntensity = 0.8;
    }
    else if (id == 6) { // GLOW
      albedo = albedo * 1.1;
      float glowCore = smoothstep(0.5, 0.0, dist) * 0.6;
      albedo += vec3(glowCore);
      float pulse = 0.5 + 0.5 * sin(u_time * 2.0);
      albedo += vec3(pulse * 0.2);
      roughness = 0.8; specularIntensity = 0.3;
    }
    else if (id == 7) { // RAINBOW
      albedo = applyRainbow(albedo, angle, dist, u_time);
    }
    else if (id == 8) { // TRANSLUCENT
      albedo = albedo * 0.8 + vec3(0.2);
      roughness = 0.03; specularIntensity = 2.2; metallic = 0.15;
    }
    else if (id == 9) { // HIGH GLOSS
      float shimmer = fbm(vec2(uv.x * 30.0 + angle, uv.y * 30.0)) * 0.1;
      albedo = albedo + vec3(shimmer);
      roughness = 0.15; specularIntensity = 0.8; anisotropy = 0.5;
    }
    else if (id == 10) { // WOOD
      albedo = applyWood(albedo, pos3D);
      roughness = 0.9; specularIntensity = 0.1; anisotropy = 0.1; strandStrength = 0.5;
    }
    else if (id == 11) { // TPU/FLEXIBLE
      roughness = 0.95; specularIntensity = 0.1; anisotropy = 0.0; strandStrength = 0.2;
      albedo = albedo * 0.85;
    }
    else if (id == 12) { // MARBLE
      albedo = applyMarble(albedo, pos3D);
      roughness = 0.8; specularIntensity = 0.2; anisotropy = 0.0; strandStrength = 0.4;
    }
    else if (id == 13) { // NYLON
      albedo = albedo * 0.95 + vec3(0.05);
      roughness = 0.25; specularIntensity = 1.0; anisotropy = 0.5;
    }
    else if (id == 14) { // GLASS FIBER
      albedo = applyGlassFiber(albedo, pos3D);
      roughness = 0.7;
    }
    else if (id == 15) { // COLOR CHANGE
      float shift = sin(u_time * 0.5) * 0.5 + 0.5;
      albedo = mix(c1, c2, shift);
      roughness = 0.3; specularIntensity = 1.0;
    }
    else if (id == 16) { // GRADIENT
      albedo = applyGradient(c1, c2, uv);
    }
    else if (id == 17) { // PASTEL
      vec3 desaturated = vec3(dot(albedo, vec3(0.299, 0.587, 0.114)));
      albedo = mix(desaturated, albedo, 0.5);
      albedo = albedo * 0.9 + vec3(0.15);
      roughness = 0.85; specularIntensity = 0.2;
    }
    else if (id == 18) { // ABS
      roughness = 0.6; specularIntensity = 0.5; strandStrength = 0.6;
    }
    else if (id == 19) { // ASA
      roughness = 0.5; specularIntensity = 0.7; strandStrength = 0.6;
    }
    else if (id == 20) { // MATTE
      roughness = 1.0; specularIntensity = 0.0; anisotropy = 0.0; metallic = 0.0;
    }

    /* ---- Rendering ---- */
    vec3 finalColor = vec3(0.0);
    float alpha = 1.0;

    if (dist < rHole) {
      // Center hole — transparent
      gl_FragColor = vec4(0.0);
      return;
    }
    else if (dist < rHub) {
      // Spool hub
      vec3 hubColor = vec3(0.25);
      float grain = fbm(uv * 20.0);
      hubColor += grain * 0.02;
      vec3 N = normalize(vec3(uv.x, uv.y, 0.5));
      float diff = max(dot(N, L), 0.0);
      finalColor = hubColor * (0.5 + 0.5 * diff);
      float shadowDist = dist - rHub;
      if (shadowDist > -0.05) {
        finalColor *= smoothstep(-0.05, -0.1, shadowDist);
      }
    }
    else if (dist <= rRimInner) {
      if (dist > currentFillRadius) {
        // Empty area
        float rib = sin(angle * 20.0);
        finalColor = vec3(0.2) + rib * 0.02;
        finalColor *= smoothstep(rRimInner, rRimInner - 0.1, dist);
      } else {
        // Filament strands
        float strandCount = 20.0;
        float strandPos = (dist - rHub) * strandCount;
        float strandHeight = sin(strandPos * 6.28318);
        float torusCurve = sin((dist - rHub) / (rRimInner - rHub) * 3.14159);

        vec3 N_base = normalize(vec3(uv.x, uv.y, torusCurve * 2.0));
        vec3 N_strand = normalize(vec3(0.0, strandHeight * strandStrength * 0.5, 1.0));

        float c = cos(angle);
        float s = sin(angle);
        vec3 N_final = vec3(
          N_strand.x * c - N_strand.y * s,
          N_strand.x * s + N_strand.y * c,
          N_strand.z
        );

        vec3 N = normalize(mix(N_base, N_final, 0.6));
        float diff = max(dot(N, L), 0.0);

        float spec = 0.0;
        if (anisotropy > 0.5) {
          spec = strandHighlight(uv, angle, roughness) * specularIntensity;
        } else {
          float NdotH = max(dot(N, H), 0.0);
          spec = pow(NdotH, 1.0 / (roughness * roughness + 0.01)) * specularIntensity;
        }

        float ao = 0.5 + 0.5 * smoothstep(-1.0, 0.5, strandHeight);
        finalColor = albedo * (0.4 + 0.6 * diff) * ao;
        finalColor += vec3(spec) * (1.0 - roughness) * 0.5;
      }
    }
    else {
      // Outer rim
      vec3 rimColor = vec3(0.22);
      float bevel = smoothstep(rRimInner, rRimInner + 0.01, dist) *
                    smoothstep(rRimOuter, rRimOuter - 0.01, dist);
      vec3 N = normalize(vec3(uv.x, uv.y, 0.2));
      vec3 L_rim = normalize(vec3(-0.5, 0.5, 1.0));
      float diff_rim = max(dot(N, L_rim), 0.0);
      float spec_rim = pow(max(dot(reflect(-L_rim, N), vec3(0.0, 0.0, 1.0)), 0.0), 10.0);
      finalColor = rimColor * (0.6 + 0.4 * diff_rim) + vec3(spec_rim * 0.3) + vec3(bevel * 0.1);
      alpha = smoothstep(1.0, 0.98, dist);
    }

    gl_FragColor = vec4(finalColor, alpha);
  }
`;function Eh(n){const e=n.replace("#","");return[parseInt(e.substring(0,2),16)/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255]}function oN({colors:n,materialType:e,size:t,animated:r=!1,className:o=""}){const a=Y.useRef(null),u=Y.useRef(null),c=Y.useRef(0),d=Y.useRef(null);return Y.useEffect(()=>{const h=a.current;if(!h)return;const p=Eh(n[0]||"#ffffff"),v=Eh(n[1]||n[0]||"#ffffff"),g=Eh(n[2]||n[1]||n[0]||"#ffffff"),S=Math.min(window.devicePixelRatio,2),M={u_size:{value:t},u_textureId:{value:e},u_color1:{value:new oe(p[0],p[1],p[2])},u_color2:{value:new oe(v[0],v[1],v[2])},u_color3:{value:new oe(g[0],g[1],g[2])},u_time:{value:0}};d.current=M;const T=new GP,y=new Gm(-1,1,1,-1,0,1),_=new _l(2,2),C=new Fi({vertexShader:rN,fragmentShader:sN,uniforms:M,transparent:!0});T.add(new tr(_,C));const b=new iN({canvas:h,alpha:!0,antialias:!0});if(b.setSize(t,t),b.setPixelRatio(S),u.current=b,r){const P=performance.now(),L=()=>{M.u_time.value=(performance.now()-P)/1e3,b.render(T,y),c.current=requestAnimationFrame(L)};c.current=requestAnimationFrame(L)}else b.render(T,y);return()=>{c.current&&cancelAnimationFrame(c.current),b.dispose(),_.dispose(),C.dispose(),u.current=null}},[n,e,t,r]),k.jsx("canvas",{ref:a,className:o,width:t,height:t,style:{width:t,height:t,borderRadius:"50%",display:"block"}})}const aN=Y.memo(oN),lN="rgb(13, 13, 13)",Wa="rgb(38, 38, 43)",qt="#007AFF",Th="#ffffff",vr="rgba(235, 235, 245, 0.6)",vn="rgba(235, 235, 245, 0.3)",nc={PLA:"#34C759",PETG:"#FF9500",ABS:"#007AFF",TPU:"#AF52DE","PLA+":"#34C759",Nylon:"#8E8E93",ASA:"#FF3B30"},V_=16,z_=20,wh=24,Ah="https://apps.apple.com/gb/app/spool/id6756892049";function Ch({size:n=20}){return k.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor",children:k.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})})}function tn({children:n,delay:e=0,className:t=""}){const r=Y.useRef(null);return k.jsx(Ns.div,{ref:r,className:t,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.7,delay:e,ease:[.22,1,.36,1]},children:n})}const uN=[{colour:"#34C759",name:"Matte PLA",brand:"Bambu Lab",material:"PLA",weight:"1000g"},{colour:"#FF3B30",name:"Galaxy Red",brand:"Prusament",material:"PETG",weight:"750g"},{colour:"#007AFF",name:"Ocean Blue",brand:"Polymaker",material:"PLA+",weight:"1000g"},{colour:"#FF9500",name:"Solar Yellow",brand:"eSUN",material:"ABS",weight:"500g"},{colour:"#AF52DE",name:"Cosmic Purple",brand:"Hatchbox",material:"TPU",weight:"800g"}],cN=[{title:"Printer Management",desc:"Track all your 3D printers. Log maintenance, monitor print hours, set service reminders."},{title:"SpoolTag",desc:"Print QR labels or write NFC tags. Scan with your phone to see every detail instantly."},{title:"iCloud Sync",desc:"Seamless sync across iPhone and iPad. No accounts, no sign-ups. Apple-native privacy."},{title:"Smart Inventory",desc:"Low stock alerts, colour search, material filtering, storage tracking. Find any spool in seconds."},{title:"Cost & Energy",desc:"True printing costs. Electricity calculated from wattage and duration. Price-per-gram breakdowns."},{title:"Print History",desc:"Full logging — spool, weight, duration, notes. Automatic for Bambu. Quick entry for everyone else."}],fN=["X1 Carbon","P1S","A1","A1 Mini"],dN=[{quote:"The most feature-complete filament management app on any platform.",attribution:"Independent review",featured:!0},{quote:"I thought it would just measure filament, but it does so much more — cost per print, Bambu Cloud integration, adding prints with a single tap. It honestly feels like it was designed by Apple themselves. Keep making apps like this!",attribution:"Spool user",featured:!1},{quote:"Wow, this is amazing so far.",attribution:"Spool user",featured:!1}],hN=[{colors:["#FF6B35"],materialType:0,label:"PLA"},{colors:["#1E3A5F"],materialType:3,label:"Silk"},{colors:["#2D1B69"],materialType:1,label:"Galaxy",animated:!0},{colors:["#CC3333"],materialType:2,label:"Carbon Fiber"},{colors:["#FF8C00"],materialType:5,label:"PETG"},{colors:["#4CAF50","#2196F3"],materialType:7,label:"Rainbow",animated:!0}];function pN(){const n=Y.useRef(null),{scrollYProgress:e}=Gx({target:n,offset:["start start","end start"]}),t=fc(e,[0,.6],[1,0]),r=fc(e,[0,.6],[0,-80]),{scrollYProgress:o}=Gx(),a=jb(o,{stiffness:40,damping:20}),u=fc(a,[0,1],["0%","100%"]);return Y.useEffect(()=>{document.title="Spool — Track Every Gram"},[]),k.jsxs("div",{style:{background:lN,color:Th,minHeight:"100vh"},children:[k.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,background:"rgba(13, 13, 13, 0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 24px",height:52,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[k.jsx("img",{src:"/spool-tracker-logo.png",alt:"Spool",style:{width:28,height:28,borderRadius:8}}),k.jsx("span",{style:{fontSize:15,fontWeight:600,fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',letterSpacing:"-0.01em"},children:"Spool"})]}),k.jsxs("a",{href:Ah,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"8px 18px",borderRadius:999,background:qt,color:"#fff",fontSize:13,fontWeight:600,textDecoration:"none",transition:"opacity 0.2s"},children:[k.jsx(Ch,{size:14}),"Download"]})]}),k.jsx(Ns.div,{style:{height:2,background:qt,width:u}})]}),k.jsx(Ns.section,{ref:n,style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"80px 24px 40px",opacity:t,y:r},children:k.jsxs("div",{style:{maxWidth:680,textAlign:"center"},children:[k.jsx(Ns.div,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:.8,ease:[.22,1,.36,1]},style:{marginBottom:40},children:k.jsx("img",{src:"/spool-tracker-logo.png",alt:"Spool",style:{width:120,height:120,borderRadius:28,boxShadow:`0 0 80px ${qt}25, 0 20px 60px rgba(0,0,0,0.5)`,margin:"0 auto",display:"block"}})}),k.jsx(Ns.h1,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.22,1,.36,1],delay:.15},style:{fontSize:"clamp(40px, 8vw, 72px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.03em",margin:"0 0 20px",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Track every gram."}),k.jsx(Ns.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.22,1,.36,1],delay:.3},style:{fontSize:"clamp(17px, 2.5vw, 21px)",color:vr,lineHeight:1.5,maxWidth:480,margin:"0 auto 48px",fontWeight:400},children:"The complete filament management system for 3D printing. Built for precision. Designed for makers."}),k.jsxs(Ns.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.22,1,.36,1],delay:.45},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[k.jsxs("a",{href:Ah,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:12,padding:"16px 32px",borderRadius:V_,background:qt,color:"#fff",fontSize:16,fontWeight:600,textDecoration:"none",boxShadow:`0 4px 24px ${qt}40`,transition:"transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"},children:[k.jsx(Ch,{size:22}),k.jsx("span",{children:"Download on the App Store"})]}),k.jsxs("p",{style:{fontSize:14,color:vr,margin:0},children:["Free to download · ",k.jsx("span",{style:{color:vn},children:"Pro tier for power users"})]}),k.jsx("button",{onClick:()=>{var c;return(c=document.getElementById("statement"))==null?void 0:c.scrollIntoView({behavior:"smooth"})},style:{background:"none",border:"none",color:vn,fontSize:14,cursor:"pointer",padding:"8px 16px",fontFamily:"inherit"},children:"Scroll to explore ↓"})]})]})}),k.jsx("section",{id:"statement",style:{padding:"120px 24px 140px"},children:k.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[k.jsx(tn,{children:k.jsxs("h2",{style:{fontSize:"clamp(32px, 6vw, 60px)",fontWeight:700,lineHeight:1.1,letterSpacing:"-0.02em",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:["2,800+ filaments."," ",k.jsx("span",{style:{color:qt},children:"One tap to add."})," ",k.jsx("span",{style:{color:vn},children:"Zero data entry."})]})}),k.jsx(tn,{delay:.1,children:k.jsx("p",{style:{marginTop:28,fontSize:18,lineHeight:1.65,color:vr,maxWidth:600},children:"The largest built-in filament database on iOS — Bambu Lab, Prusament, Polymaker, eSUN, Hatchbox, Overture, and dozens more. Brand, material, colour, diameter, and print temperatures included."})})]})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 440px), 1fr))",gap:64,alignItems:"center"},children:[k.jsxs("div",{children:[k.jsxs(tn,{children:[k.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:qt,marginBottom:16},children:"The Database"}),k.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:700,lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20,fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Browse. Tap. Done."})]}),k.jsx(tn,{delay:.08,children:k.jsx("p",{style:{fontSize:17,lineHeight:1.6,color:vr,marginBottom:28},children:"Search by name, brand, material, or colour. Each entry includes hex colour preview, temperatures, diameter, and brand. Tap to add to your collection."})}),k.jsx(tn,{delay:.14,children:k.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["PLA","PETG","ABS","TPU","ASA","Nylon"].map(c=>k.jsx("span",{style:{padding:"5px 12px",borderRadius:999,fontSize:11,fontWeight:700,fontFamily:'ui-monospace, "SF Mono", monospace',letterSpacing:"0.05em",background:`${nc[c]||qt}18`,color:nc[c]||qt},children:c},c))})})]}),k.jsx(tn,{delay:.1,children:k.jsxs("div",{style:{background:Wa,borderRadius:wh,padding:20,boxShadow:"0 8px 32px rgba(0,0,0,0.3)"},children:[k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,background:"rgba(255,255,255,0.06)",marginBottom:12,fontSize:14,color:vn},children:[k.jsx("span",{style:{opacity:.5},children:"⌕"}),"Search 2,800+ filaments…"]}),k.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:uN.map((c,d)=>k.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:14,background:"rgba(255,255,255,0.03)",transition:"background 0.2s"},children:[k.jsx("div",{style:{width:32,height:32,borderRadius:16,background:c.colour,flexShrink:0,boxShadow:`0 0 12px ${c.colour}40`}}),k.jsxs("div",{style:{flex:1,minWidth:0},children:[k.jsx("div",{style:{fontSize:14,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:c.name}),k.jsxs("div",{style:{fontSize:12,color:vn},children:[c.brand," · ",c.weight]})]}),k.jsx("span",{style:{padding:"3px 8px",borderRadius:999,fontSize:9,fontWeight:700,fontFamily:'ui-monospace, "SF Mono", monospace',background:`${nc[c.material]||qt}20`,color:nc[c.material]||qt,letterSpacing:"0.06em"},children:c.material})]},d))}),k.jsx("p",{style:{textAlign:"center",marginTop:14,fontSize:12,color:vn},children:"+ 2,795 more"})]})})]})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 440px), 1fr))",gap:64,alignItems:"center"},children:[k.jsx(tn,{delay:.1,children:k.jsxs("div",{style:{background:Wa,borderRadius:wh,padding:20,boxShadow:"0 8px 32px rgba(0,0,0,0.3)"},children:[k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,marginBottom:20},children:[{val:"£142.50",lbl:"Inventory",clr:"#34C759"},{val:"£0.82",lbl:"Per Print",clr:"#FF9500"},{val:"2.4kg",lbl:"This Month",clr:qt}].map(c=>k.jsxs("div",{style:{textAlign:"center",padding:12,borderRadius:14,background:"rgba(255,255,255,0.04)"},children:[k.jsx("div",{style:{fontSize:18,fontWeight:700,fontFamily:'ui-monospace, "SF Mono", monospace'},children:c.val}),k.jsx("div",{style:{fontSize:10,color:vn,marginTop:4},children:c.lbl})]},c.lbl))}),k.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:4,height:100,padding:"0 4px"},children:[35,55,45,72,60,85,40,68,52,78,42,90].map((c,d)=>k.jsx("div",{style:{flex:1,height:`${c}%`,borderRadius:"3px 3px 0 0",background:`linear-gradient(to top, ${qt}, ${qt}60)`,opacity:.7+c/100*.3}},d))}),k.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px 4px 0",fontSize:10,color:vn},children:[k.jsx("span",{children:"Jan"}),k.jsx("span",{children:"Dec"})]})]})}),k.jsxs("div",{children:[k.jsxs(tn,{children:[k.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:qt,marginBottom:16},children:"Analytics"}),k.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:700,lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20,fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Know the true cost of every print."})]}),k.jsx(tn,{delay:.08,children:k.jsx("p",{style:{fontSize:17,lineHeight:1.6,color:vr},children:"Track inventory value, cost per print, and weight usage with decimal precision. Monitor energy costs, material breakdowns, usage trends, and spending patterns — all computed automatically."})})]})]})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsx("div",{style:{maxWidth:720,margin:"0 auto"},children:k.jsx(tn,{children:k.jsxs("div",{style:{background:Wa,borderRadius:wh,padding:"clamp(32px, 6vw, 64px)",textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.3)",position:"relative",overflow:"hidden"},children:[k.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg, transparent, ${qt}, transparent)`}}),k.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:qt,marginBottom:24},children:"Bambu Lab Integration"}),k.jsxs("h2",{style:{fontSize:"clamp(28px, 5vw, 44px)",fontWeight:700,lineHeight:1.15,letterSpacing:"-0.02em",marginBottom:20,fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:["Your Bambu printer."," ",k.jsx("span",{style:{color:qt},children:"Automatically synced."})]}),k.jsx("p",{style:{fontSize:17,lineHeight:1.6,color:vr,maxWidth:480,margin:"0 auto 32px"},children:"Connect to the Bambu Lab Cloud API. Auto-import your complete print history — name, duration, material, and weight consumed."}),k.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10},children:fN.map(c=>k.jsx("span",{style:{padding:"8px 18px",borderRadius:999,fontSize:13,fontWeight:500,background:"rgba(255,255,255,0.06)",color:Th},children:c},c))})]})})})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsx(tn,{children:k.jsxs("div",{style:{textAlign:"center",marginBottom:64},children:[k.jsx("h2",{style:{fontSize:"clamp(28px, 5vw, 48px)",fontWeight:700,letterSpacing:"-0.02em",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Everything you need."}),k.jsx("p",{style:{fontSize:17,color:vn,marginTop:8},children:"Nothing you don't."})]})}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 1fr))",gap:16},children:cN.map((c,d)=>k.jsx(tn,{delay:d*.04,children:k.jsxs("div",{style:{background:Wa,borderRadius:z_,padding:24,height:"100%",boxShadow:"0 4px 16px rgba(0,0,0,0.2)"},children:[k.jsx("h3",{style:{fontSize:17,fontWeight:600,marginBottom:8},children:c.title}),k.jsx("p",{style:{fontSize:14,lineHeight:1.55,color:vr,margin:0},children:c.desc})]})},c.title))})]})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsx("div",{style:{maxWidth:700,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:[{value:"2,800+",label:"Filaments"},{value:"0.1g",label:"Precision"},{value:"∞",label:"iCloud Sync"}].map((c,d)=>k.jsx(tn,{delay:d*.06,children:k.jsxs("div",{style:{textAlign:"center"},children:[k.jsx("div",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:700,fontFamily:'ui-monospace, "SF Mono", monospace',marginBottom:6},children:c.value}),k.jsx("div",{style:{fontSize:11,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:vn},children:c.label})]})},c.label))})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsx(tn,{children:k.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[k.jsx("p",{style:{fontSize:12,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:qt,marginBottom:16},children:"Premium Visuals"}),k.jsx("h2",{style:{fontSize:"clamp(28px, 5vw, 48px)",fontWeight:700,letterSpacing:"-0.02em",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Every material, rendered."}),k.jsx("p",{style:{fontSize:17,color:vn,marginTop:8},children:"Procedural shaders bring your filaments to life."})]})}),k.jsx(tn,{delay:.1,children:k.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:32},children:hN.map(c=>k.jsxs("div",{style:{textAlign:"center"},children:[k.jsx(aN,{colors:c.colors,materialType:c.materialType,size:120,animated:c.animated}),k.jsx("p",{style:{fontSize:12,fontWeight:500,color:vn,marginTop:10,letterSpacing:"0.04em"},children:c.label})]},c.label))})})]})}),k.jsx("section",{style:{padding:"0 24px 140px"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[k.jsx(tn,{children:k.jsx("div",{style:{textAlign:"center",marginBottom:48},children:k.jsx("h2",{style:{fontSize:"clamp(28px, 5vw, 48px)",fontWeight:700,letterSpacing:"-0.02em",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Loved by makers."})})}),k.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 1fr))",gap:16},children:dN.map((c,d)=>k.jsx(tn,{delay:d*.06,children:k.jsxs("div",{style:{background:Wa,borderRadius:z_,padding:28,height:"100%",boxShadow:"0 4px 16px rgba(0,0,0,0.2)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[k.jsxs("div",{children:[k.jsx("span",{style:{fontSize:32,color:qt,lineHeight:1,display:"block",marginBottom:12},children:'"'}),k.jsx("p",{style:{fontSize:c.featured?18:15,fontWeight:c.featured?600:400,lineHeight:1.55,color:c.featured?Th:vr,margin:0,fontStyle:(c.featured,"normal")},children:c.quote})]}),k.jsxs("p",{style:{fontSize:12,color:vn,marginTop:20,marginBottom:0,fontWeight:500,letterSpacing:"0.04em"},children:["— ",c.attribution]})]})},d))})]})}),k.jsxs("section",{style:{padding:"80px 24px 140px",textAlign:"center"},children:[k.jsx(tn,{children:k.jsx("h2",{style:{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:700,letterSpacing:"-0.03em",marginBottom:16,fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif'},children:"Start tracking."})}),k.jsx(tn,{delay:.08,children:k.jsx("p",{style:{fontSize:18,color:vr,marginBottom:12},children:"Free on the App Store."})}),k.jsx(tn,{delay:.1,children:k.jsx("p",{style:{fontSize:14,color:vn,marginBottom:40},children:"Pro tier available for power users."})}),k.jsx(tn,{delay:.15,children:k.jsxs("a",{href:Ah,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:12,padding:"18px 36px",borderRadius:V_,background:qt,color:"#fff",fontSize:17,fontWeight:600,textDecoration:"none",boxShadow:`0 4px 30px ${qt}40`,transition:"transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"},children:[k.jsx(Ch,{size:24}),k.jsx("span",{children:"Download on the App Store"})]})})]}),k.jsx("footer",{style:{padding:"32px 24px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:k.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16,fontSize:12,color:vn},children:[k.jsx(el,{to:"/",style:{color:vn,textDecoration:"none"},children:"A Lance Studio product"}),k.jsxs("div",{style:{display:"flex",gap:20},children:[k.jsx("a",{href:"/privacy.html",style:{color:vn,textDecoration:"none"},children:"Privacy"}),k.jsx("a",{href:"mailto:hello@lance-studio.com",style:{color:vn,textDecoration:"none"},children:"Contact"})]}),k.jsx("span",{style:{color:"rgba(255,255,255,0.12)"},children:"© 2026 Lance Studio"})]})})]})}fT.createRoot(document.getElementById("root")).render(k.jsx(I1,{children:k.jsxs(u1,{children:[k.jsx(bh,{path:"/",element:k.jsx(W1,{})}),k.jsx(bh,{path:"/spool",element:k.jsx(pN,{})})]})}));
