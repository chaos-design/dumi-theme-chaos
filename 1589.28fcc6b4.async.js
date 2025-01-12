!(function(){"use strict";var an=Object.defineProperty,cn=Object.defineProperties;var ln=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var un=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable;var Be=(q,V,g)=>V in q?an(q,V,{enumerable:!0,configurable:!0,writable:!0,value:g}):q[V]=g,pe=(q,V)=>{for(var g in V||(V={}))un.call(V,g)&&Be(q,g,V[g]);if(ke)for(var g of ke(V))fn.call(V,g)&&Be(q,g,V[g]);return q},Ze=(q,V)=>cn(q,ln(V));var be=(q,V,g)=>new Promise((c,Bt)=>{var yt=M=>{try{Z(g.next(M))}catch(L){Bt(L)}},Pt=M=>{try{Z(g.throw(M))}catch(L){Bt(L)}},Z=M=>M.done?c(M.value):Promise.resolve(M.value).then(yt,Pt);Z((g=g.apply(q,V)).next())});(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1589],{85367:function(q,V,g){g.d(V,{Z:function(){return nn}});var c=g(75271),Bt=g(96118),yt=Object.prototype.hasOwnProperty;function Pt(t,e){var n,o;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((o=t.length)===e.length)for(;o--&&Pt(t[o],e[o]););return o===-1}if(!n||typeof t=="object"){o=0;for(n in t)if(yt.call(t,n)&&++o&&!yt.call(e,n)||!(n in e)||!Pt(t[n],e[n]))return!1;return Object.keys(e).length===o}}return t!==t&&e!==e}const Z=new WeakMap,M=()=>{},L=M(),_t=Object,y=t=>t===L,et=t=>typeof t=="function",dt=(t,e)=>pe(pe({},t),e),P=t=>et(t.then),U={},st={},Vt="undefined",nt=typeof window!=Vt,zt=typeof document!=Vt,we=()=>nt&&typeof window.requestAnimationFrame!=Vt,ve=(t,e)=>{const n=Z.get(t);return[()=>!y(e)&&t.get(e)||U,o=>{if(!y(e)){const u=t.get(e);e in st||(st[e]=u),n[5](e,dt(u,o),u||U)}},n[6],()=>!y(e)&&e in st?st[e]:!y(e)&&t.get(e)||U]};let ne=!0;const Oe=()=>ne,[le,ge]=nt&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[M,M],me=()=>{const t=zt&&document.visibilityState;return y(t)||t!=="hidden"},xe=t=>(zt&&document.addEventListener("visibilitychange",t),le("focus",t),()=>{zt&&document.removeEventListener("visibilitychange",t),ge("focus",t)}),Re=t=>{const e=()=>{ne=!0,t()},n=()=>{ne=!1};return le("online",e),le("offline",n),()=>{ge("online",e),ge("offline",n)}},Ce={isOnline:Oe,isVisible:me},ye={initFocus:xe,initReconnect:Re},Te=!c.useId,Yt=!nt||"Deno"in globalThis,Ee=t=>we()?window.requestAnimationFrame(t):setTimeout(t,1),re=Yt?c.useEffect:c.useLayoutEffect,E=typeof navigator!="undefined"&&navigator.connection,T=!Yt&&E&&(["slow-2g","2g"].includes(E.effectiveType)||E.saveData),w=new WeakMap,S=(t,e)=>_t.prototype.toString.call(t)===`[object ${e}]`;let W=0;const Et=t=>{const e=typeof t,n=S(t,"Date"),o=S(t,"RegExp"),u=S(t,"Object");let s,l;if(_t(t)===t&&!n&&!o){if(s=w.get(t),s)return s;if(s=++W+"~",w.set(t,s),Array.isArray(t)){for(s="@",l=0;l<t.length;l++)s+=Et(t[l])+",";w.set(t,s)}if(u){s="#";const m=_t.keys(t).sort();for(;!y(l=m.pop());)y(t[l])||(s+=l+":"+Et(t[l])+",");w.set(t,s)}}else s=n?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},ht=t=>{if(et(t))try{t=t()}catch(n){t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Et(t):"",[t,e]};let Tt=0;const ct=()=>++Tt,lt=0,St=1,Zt=2;var J={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:lt,MUTATE_EVENT:Zt,RECONNECT_EVENT:St};function Lt(...t){return be(this,null,function*(){const[e,n,o,u]=t,s=dt({populateCache:!0,throwOnError:!0},typeof u=="boolean"?{revalidate:u}:u||{});let l=s.populateCache;const m=s.rollbackOnError;let p=s.optimisticData;const C=_=>typeof m=="function"?m(_):m!==!1,b=s.throwOnError;if(et(n)){const _=n,D=[],K=e.keys();for(const N of K)!/^\$(inf|sub)\$/.test(N)&&_(e.get(N)._k)&&D.push(N);return Promise.all(D.map(O))}return O(n);function O(_){return be(this,null,function*(){const[D]=ht(_);if(!D)return;const[K,N]=ve(e,D),[X,h,$t,ut]=Z.get(e),pt=()=>{const ot=X[D];return(et(s.revalidate)?s.revalidate(K().data,_):s.revalidate!==!1)&&(delete $t[D],delete ut[D],ot&&ot[0])?ot[0](Zt).then(()=>K().data):K().data};if(t.length<3)return pt();let $=o,B;const ft=ct();h[D]=[ft,0];const I=!y(p),Rt=K(),vt=Rt.data,Gt=Rt._c,Ut=y(Gt)?vt:Gt;if(I&&(p=et(p)?p(Ut,vt):p,N({data:p,_c:Ut})),et($))try{$=$(Ut)}catch(ot){B=ot}if($&&P($))if($=yield $.catch(ot=>{B=ot}),ft!==h[D][0]){if(B)throw B;return $}else B&&I&&C(B)&&(l=!0,N({data:Ut,_c:L}));if(l&&!B)if(et(l)){const ot=l($,Ut);N({data:ot,error:L,_c:L})}else N({data:$,error:L,_c:L});if(h[D][1]=ct(),Promise.resolve(pt()).then(()=>{N({_c:L})}),B){if(b)throw B;return}return $})}})}const Jt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},Kt=(t,e)=>{if(!Z.has(t)){const n=dt(ye,e),o={},u=Lt.bind(L,t);let s=M;const l={},m=(b,O)=>{const _=l[b]||[];return l[b]=_,_.push(O),()=>_.splice(_.indexOf(O),1)},p=(b,O,_)=>{t.set(b,O);const D=l[b];if(D)for(const K of D)K(O,_)},C=()=>{if(!Z.has(t)&&(Z.set(t,[o,{},{},{},u,p,m]),!Yt)){const b=n.initFocus(setTimeout.bind(L,Jt.bind(L,o,lt))),O=n.initReconnect(setTimeout.bind(L,Jt.bind(L,o,St)));s=()=>{b&&b(),O&&O(),Z.delete(t)}}};return C(),[t,u,C,s]}return[t,Z.get(t)[4]]},Ft=(t,e,n,o,u)=>{const s=n.errorRetryCount,l=u.retryCount,m=~~((Math.random()+.5)*(1<<(l<8?l:8)))*n.errorRetryInterval;!y(s)&&l>s||setTimeout(o,m,u)},R=Pt,[rt,Mt]=Kt(new Map),wt=dt({onLoadingSlow:M,onSuccess:M,onError:M,onErrorRetry:Ft,onDiscarded:M,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:T?5e3:3e3,compare:R,isPaused:()=>!1,cache:rt,mutate:Mt,fallback:{}},Ce),Qt=(t,e)=>{const n=dt(t,e);if(e){const{use:o,fallback:u}=t,{use:s,fallback:l}=e;o&&s&&(n.use=o.concat(s)),u&&l&&(n.fallback=dt(u,l))}return n},qt=(0,c.createContext)({}),ue=t=>{const{value:e}=t,n=(0,c.useContext)(qt),o=et(e),u=(0,c.useMemo)(()=>o?e(n):e,[o,n,e]),s=(0,c.useMemo)(()=>o?u:Qt(n,u),[o,n,u]),l=u&&u.provider,m=(0,c.useRef)(L);l&&!m.current&&(m.current=Kt(l(s.cache||rt),u));const p=m.current;return p&&(s.cache=p[0],s.mutate=p[1]),re(()=>{if(p)return p[2]&&p[2](),p[3]},[]),(0,c.createElement)(qt.Provider,dt(t,{value:s}))},oe="$inf$",Ot=nt&&window.__SWR_DEVTOOLS_USE__,Wt=Ot?window.__SWR_DEVTOOLS_USE__:[],Nt=()=>{Ot&&(window.__SWR_DEVTOOLS_REACT__=c)},H=t=>et(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],te=()=>dt(wt,(0,c.useContext)(qt)),fe=(t,e)=>{const[n,o]=serialize(t),[,,,u]=SWRGlobalState.get(cache);if(u[n])return u[n];const s=e(o);return u[n]=s,s},de=t=>(e,n,o)=>t(e,n&&((...s)=>{const[l]=ht(e),[,,,m]=Z.get(rt);if(l.startsWith(oe))return n(...s);const p=m[l];return y(p)?n(...s):(delete m[l],p)}),o),at=Wt.concat(de),ie=t=>function(...n){const o=te(),[u,s,l]=H(n),m=Qt(o,l);let p=t;const{use:C}=m,b=(C||[]).concat(at);for(let O=b.length;O--;)p=b[O](p);return p(u,s||m.fetcher||null,m)},Le=(t,e,n)=>{const o=e[t]||(e[t]=[]);return o.push(n),()=>{const u=o.indexOf(n);u>=0&&(o[u]=o[o.length-1],o.pop())}},Ve=(t,e)=>(...n)=>{const[o,u,s]=H(n),l=(s.use||[]).concat(e);return t(o,u,Ze(pe({},s),{use:l}))};Nt();const Ne=void 0,se=null,Se=t=>t===Ne,Ae=t=>typeof t=="function",ae=new WeakMap,At=(t,e)=>se.prototype.toString.call(t)===`[object ${e}]`;let k=0;const z=t=>{const e=typeof t,n=At(t,"Date"),o=At(t,"RegExp"),u=At(t,"Object");let s,l;if(se(t)===t&&!n&&!o){if(s=ae.get(t),s)return s;if(s=++k+"~",ae.set(t,s),Array.isArray(t)){for(s="@",l=0;l<t.length;l++)s+=z(t[l])+",";ae.set(t,s)}if(u){s="#";const m=se.keys(t).sort();for(;!Se(l=m.pop());)Se(t[l])||(s+=l+":"+z(t[l])+",");ae.set(t,s)}}else s=n?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},xt=t=>{if(Ae(t))try{t=t()}catch(n){t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?z(t):"",[t,e]},dn=t=>xt(t)[0],je=c.use||(t=>{switch(t.status){case"pending":throw t;case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t}}),De={dedupe:!0},Je=(t,e,n)=>{const{cache:o,compare:u,suspense:s,fallbackData:l,revalidateOnMount:m,revalidateIfStale:p,refreshInterval:C,refreshWhenHidden:b,refreshWhenOffline:O,keepPreviousData:_}=n,[D,K,N,X]=Z.get(o),[h,$t]=ht(t),ut=(0,c.useRef)(!1),pt=(0,c.useRef)(!1),$=(0,c.useRef)(h),B=(0,c.useRef)(e),ft=(0,c.useRef)(n),I=()=>ft.current,Rt=()=>I().isVisible()&&I().isOnline(),[vt,Gt,Ut,ot]=ve(o,h),jt=(0,c.useRef)({}).current,Xt=y(l)?y(n.fallback)?L:n.fallback[h]:l,a=(A,j)=>{for(const tt in jt){const F=tt;if(F==="data"){if(!u(A[F],j[F])&&(!y(A[F])||!u(gt,j[F])))return!1}else if(j[F]!==A[F])return!1}return!0},r=(0,c.useMemo)(()=>{const A=!h||!e?!1:y(m)?I().isPaused()||s?!1:p!==!1:m,j=it=>{const Ht=dt(it);return delete Ht._k,A?pe({isValidating:!0,isLoading:!0},Ht):Ht},tt=vt(),F=ot(),It=j(tt),ce=tt===F?It:j(F);let Q=It;return[()=>{const it=j(vt());return a(it,Q)?(Q.data=it.data,Q.isLoading=it.isLoading,Q.isValidating=it.isValidating,Q.error=it.error,Q):(Q=it,it)},()=>ce]},[o,h]),i=(0,Bt.useSyncExternalStore)((0,c.useCallback)(A=>Ut(h,(j,tt)=>{a(tt,j)||A()}),[o,h]),r[0],r[1]),d=!ut.current,v=D[h]&&D[h].length>0,f=i.data,x=y(f)?Xt&&P(Xt)?je(Xt):Xt:f,G=i.error,Y=(0,c.useRef)(x),gt=_?y(f)?Y.current:f:x,Ct=v&&!y(G)?!1:d&&!y(m)?m:I().isPaused()?!1:s?y(x)?!1:p:y(x)||p,Dt=!!(h&&e&&d&&Ct),rn=y(i.isValidating)?Dt:i.isValidating,on=y(i.isLoading)?Dt:i.isLoading,he=(0,c.useCallback)(A=>be(this,null,function*(){const j=B.current;if(!h||!j||pt.current||I().isPaused())return!1;let tt,F,It=!0;const ce=A||{},Q=!N[h]||!ce.dedupe,it=()=>Te?!pt.current&&h===$.current&&ut.current:h===$.current,Ht={isValidating:!1,isLoading:!1},Ge=()=>{Gt(Ht)},Ue=()=>{const mt=N[h];mt&&mt[1]===F&&delete N[h]},He={isValidating:!0};y(vt().data)&&(He.isLoading=!0);try{if(Q&&(Gt(He),n.loadingTimeout&&y(vt().data)&&setTimeout(()=>{It&&it()&&I().onLoadingSlow(h,n)},n.loadingTimeout),N[h]=[j($t),ct()]),[tt,F]=N[h],tt=yield tt,Q&&setTimeout(Ue,n.dedupingInterval),!N[h]||N[h][1]!==F)return Q&&it()&&I().onDiscarded(h),!1;Ht.error=L;const mt=K[h];if(!y(mt)&&(F<=mt[0]||F<=mt[1]||mt[1]===0))return Ge(),Q&&it()&&I().onDiscarded(h),!1;const kt=vt().data;Ht.data=u(kt,tt)?kt:tt,Q&&it()&&I().onSuccess(tt,h,n)}catch(mt){Ue();const kt=I(),{shouldRetryOnError:Pe}=kt;kt.isPaused()||(Ht.error=mt,Q&&it()&&(kt.onError(mt,h,kt),(Pe===!0||et(Pe)&&Pe(mt))&&(!I().revalidateOnFocus||!I().revalidateOnReconnect||Rt())&&kt.onErrorRetry(mt,h,kt,sn=>{const _e=D[h];_e&&_e[0]&&_e[0](J.ERROR_REVALIDATE_EVENT,sn)},{retryCount:(ce.retryCount||0)+1,dedupe:!0})))}return It=!1,Ge(),!0}),[h,o]),$e=(0,c.useCallback)((...A)=>Lt(o,$.current,...A),[]);if(re(()=>{B.current=e,ft.current=n,y(f)||(Y.current=f)}),re(()=>{if(!h)return;const A=he.bind(L,De);let j=0;const F=Le(h,D,(It,ce={})=>{if(It==J.FOCUS_EVENT){const Q=Date.now();I().revalidateOnFocus&&Q>j&&Rt()&&(j=Q+I().focusThrottleInterval,A())}else if(It==J.RECONNECT_EVENT)I().revalidateOnReconnect&&Rt()&&A();else{if(It==J.MUTATE_EVENT)return he();if(It==J.ERROR_REVALIDATE_EVENT)return he(ce)}});return pt.current=!1,$.current=h,ut.current=!0,Gt({_k:$t}),Ct&&(y(x)||Yt?A():Ee(A)),()=>{pt.current=!0,F()}},[h]),re(()=>{let A;function j(){const F=et(C)?C(vt().data):C;F&&A!==-1&&(A=setTimeout(tt,F))}function tt(){!vt().error&&(b||I().isVisible())&&(O||I().isOnline())?he(De).then(j):j()}return j(),()=>{A&&(clearTimeout(A),A=-1)}},[C,b,O,h]),(0,c.useDebugValue)(gt),s&&y(x)&&h){if(!Te&&Yt)throw new Error("Fallback data is required when using Suspense in SSR.");B.current=e,ft.current=n,pt.current=!1;const A=X[h];if(!y(A)){const j=$e(A);je(j)}if(y(G)){const j=he(De);y(gt)||(j.status="fulfilled",j.value=!0),je(j)}else throw G}return{mutate:$e,get data(){return jt.data=!0,gt},get error(){return jt.error=!0,G},get isValidating(){return jt.isValidating=!0,rn},get isLoading(){return jt.isLoading=!0,on}}},hn=_t.defineProperty(ue,"defaultValue",{value:wt}),Ke=ie(Je);function ee(t){"@babel/helpers - typeof";return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(t)}function Fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),n.push.apply(n,o)}return n}function Me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fe(Object(n),!0).forEach(function(o){Xe(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Xe(t,e,n){return e=Ye(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t){var e=Qe(t,"string");return ee(e)=="symbol"?e:String(e)}function Qe(t,e){if(ee(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(ee(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ie(){"use strict";Ie=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,u=Object.defineProperty||function(a,r,i){a[r]=i.value},s=typeof Symbol=="function"?Symbol:{},l=s.iterator||"@@iterator",m=s.asyncIterator||"@@asyncIterator",p=s.toStringTag||"@@toStringTag";function C(a,r,i){return Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}),a[r]}try{C({},"")}catch(a){C=function(i,d,v){return i[d]=v}}function b(a,r,i,d){var v=r&&r.prototype instanceof h?r:h,f=Object.create(v.prototype),x=new jt(d||[]);return u(f,"_invoke",{value:vt(a,i,x)}),f}function O(a,r,i){try{return{type:"normal",arg:a.call(r,i)}}catch(d){return{type:"throw",arg:d}}}e.wrap=b;var _="suspendedStart",D="suspendedYield",K="executing",N="completed",X={};function h(){}function $t(){}function ut(){}var pt={};C(pt,l,function(){return this});var $=Object.getPrototypeOf,B=$&&$($(Xt([])));B&&B!==n&&o.call(B,l)&&(pt=B);var ft=ut.prototype=h.prototype=Object.create(pt);function I(a){["next","throw","return"].forEach(function(r){C(a,r,function(i){return this._invoke(r,i)})})}function Rt(a,r){function i(v,f,x,G){var Y=O(a[v],a,f);if(Y.type!=="throw"){var gt=Y.arg,Ct=gt.value;return Ct&&ee(Ct)=="object"&&o.call(Ct,"__await")?r.resolve(Ct.__await).then(function(Dt){i("next",Dt,x,G)},function(Dt){i("throw",Dt,x,G)}):r.resolve(Ct).then(function(Dt){gt.value=Dt,x(gt)},function(Dt){return i("throw",Dt,x,G)})}G(Y.arg)}var d;u(this,"_invoke",{value:function(f,x){function G(){return new r(function(Y,gt){i(f,x,Y,gt)})}return d=d?d.then(G,G):G()}})}function vt(a,r,i){var d=_;return function(v,f){if(d===K)throw new Error("Generator is already running");if(d===N){if(v==="throw")throw f;return{value:t,done:!0}}for(i.method=v,i.arg=f;;){var x=i.delegate;if(x){var G=Gt(x,i);if(G){if(G===X)continue;return G}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(d===_)throw d=N,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);d=K;var Y=O(a,r,i);if(Y.type==="normal"){if(d=i.done?N:D,Y.arg===X)continue;return{value:Y.arg,done:i.done}}Y.type==="throw"&&(d=N,i.method="throw",i.arg=Y.arg)}}}function Gt(a,r){var i=r.method,d=a.iterator[i];if(d===t)return r.delegate=null,i==="throw"&&a.iterator.return&&(r.method="return",r.arg=t,Gt(a,r),r.method==="throw")||i!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+i+"' method")),X;var v=O(d,a.iterator,r.arg);if(v.type==="throw")return r.method="throw",r.arg=v.arg,r.delegate=null,X;var f=v.arg;return f?f.done?(r[a.resultName]=f.value,r.next=a.nextLoc,r.method!=="return"&&(r.method="next",r.arg=t),r.delegate=null,X):f:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,X)}function Ut(a){var r={tryLoc:a[0]};1 in a&&(r.catchLoc=a[1]),2 in a&&(r.finallyLoc=a[2],r.afterLoc=a[3]),this.tryEntries.push(r)}function ot(a){var r=a.completion||{};r.type="normal",delete r.arg,a.completion=r}function jt(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(Ut,this),this.reset(!0)}function Xt(a){if(a||a===""){var r=a[l];if(r)return r.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var i=-1,d=function v(){for(;++i<a.length;)if(o.call(a,i))return v.value=a[i],v.done=!1,v;return v.value=t,v.done=!0,v};return d.next=d}}throw new TypeError(ee(a)+" is not iterable")}return $t.prototype=ut,u(ft,"constructor",{value:ut,configurable:!0}),u(ut,"constructor",{value:$t,configurable:!0}),$t.displayName=C(ut,p,"GeneratorFunction"),e.isGeneratorFunction=function(a){var r=typeof a=="function"&&a.constructor;return!!r&&(r===$t||(r.displayName||r.name)==="GeneratorFunction")},e.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,ut):(a.__proto__=ut,C(a,p,"GeneratorFunction")),a.prototype=Object.create(ft),a},e.awrap=function(a){return{__await:a}},I(Rt.prototype),C(Rt.prototype,m,function(){return this}),e.AsyncIterator=Rt,e.async=function(a,r,i,d,v){v===void 0&&(v=Promise);var f=new Rt(b(a,r,i,d),v);return e.isGeneratorFunction(r)?f:f.next().then(function(x){return x.done?x.value:f.next()})},I(ft),C(ft,p,"Generator"),C(ft,l,function(){return this}),C(ft,"toString",function(){return"[object Generator]"}),e.keys=function(a){var r=Object(a),i=[];for(var d in r)i.push(d);return i.reverse(),function v(){for(;i.length;){var f=i.pop();if(f in r)return v.value=f,v.done=!1,v}return v.done=!0,v}},e.values=Xt,jt.prototype={constructor:jt,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(ot),!r)for(var i in this)i.charAt(0)==="t"&&o.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=t)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var i=this;function d(gt,Ct){return x.type="throw",x.arg=r,i.next=gt,Ct&&(i.method="next",i.arg=t),!!Ct}for(var v=this.tryEntries.length-1;v>=0;--v){var f=this.tryEntries[v],x=f.completion;if(f.tryLoc==="root")return d("end");if(f.tryLoc<=this.prev){var G=o.call(f,"catchLoc"),Y=o.call(f,"finallyLoc");if(G&&Y){if(this.prev<f.catchLoc)return d(f.catchLoc,!0);if(this.prev<f.finallyLoc)return d(f.finallyLoc)}else if(G){if(this.prev<f.catchLoc)return d(f.catchLoc,!0)}else{if(!Y)throw new Error("try statement without catch or finally");if(this.prev<f.finallyLoc)return d(f.finallyLoc)}}}},abrupt:function(r,i){for(var d=this.tryEntries.length-1;d>=0;--d){var v=this.tryEntries[d];if(v.tryLoc<=this.prev&&o.call(v,"finallyLoc")&&this.prev<v.finallyLoc){var f=v;break}}f&&(r==="break"||r==="continue")&&f.tryLoc<=i&&i<=f.finallyLoc&&(f=null);var x=f?f.completion:{};return x.type=r,x.arg=i,f?(this.method="next",this.next=f.finallyLoc,X):this.complete(x)},complete:function(r,i){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&i&&(this.next=i),X},finish:function(r){for(var i=this.tryEntries.length-1;i>=0;--i){var d=this.tryEntries[i];if(d.finallyLoc===r)return this.complete(d.completion,d.afterLoc),ot(d),X}},catch:function(r){for(var i=this.tryEntries.length-1;i>=0;--i){var d=this.tryEntries[i];if(d.tryLoc===r){var v=d.completion;if(v.type==="throw"){var f=v.arg;ot(d)}return f}}throw new Error("illegal catch attempt")},delegateYield:function(r,i,d){return this.delegate={iterator:Xt(r),resultName:i,nextLoc:d},this.method==="next"&&(this.arg=t),X}},e}function We(t,e,n,o,u,s,l){try{var m=t[s](l),p=m.value}catch(C){n(C);return}m.done?e(p):Promise.resolve(p).then(o,u)}function qe(t){return function(){var e=this,n=arguments;return new Promise(function(o,u){var s=t.apply(e,n);function l(p){We(s,o,u,l,m,"next",p)}function m(p){We(s,o,u,l,m,"throw",p)}l(void 0)})}}var tn=function(){var t=qe(Ie().mark(function e(n){var o,u,s,l,m,p;return Ie().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return o=n.fileName,u=n.repo,s=n.owner,l=n.branch,m="https://proapi.azurewebsites.net/doc/getAvatarList?filename=".concat(o,"&owner=").concat(s,"&repo=").concat(u,"&branch=").concat(l),b.next=4,fetch(m,{mode:"cors"}).then(function(O){return O.json()}).catch(function(O){return console.log(O)});case 4:if(p=b.sent,p){b.next=7;break}return b.abrupt("return",[]);case 7:return b.abrupt("return",p);case 8:case"end":return b.stop()}},e)}));return function(n){return t.apply(this,arguments)}}(),en=function(e){var n=e.className,o=e.renderItem,u=e.repo,s=e.owner,l=e.style,m=e.fileName,p=e.filter,C=p===void 0?function(){return!0}:p,b=e.emptyRender,O=e.branch,_=O===void 0?"master":O,D=Ke("/doc/getAvatarList?filename=".concat(m,"&owner=").concat(s,"&repo=").concat(u,"&branch=").concat(_),function(){return tn({owner:s,repo:u,fileName:m,branch:_})}),K=D.data,N=D.isLoading;if(N)return c.createElement("div",{className:n,style:Me({display:"flex",listStyle:"none",margin:0,padding:0},l)},o&&o({},!0)||c.createElement("span",null,"loading"));var X=(K==null?void 0:K.filter(C))||[];return c.createElement(c.Fragment,null,c.createElement("ul",{className:n,style:Me({display:"flex",boxSizing:"border-box",listStyle:"none",margin:0,padding:0,flexFlow:"wrap"},l)},X.map(function(h){return o?o(h,N):c.createElement("li",{key:h.username,style:{marginRight:8,borderRadius:20,boxSizing:"border-box",overflow:"hidden",border:"1px solid #ddd",display:"flex"}},c.createElement("a",{href:"https://github.com/".concat(h.username),style:{display:"flex"}},c.createElement("img",{width:40,src:h.url,alt:h.username})))}),X.length===0&&b&&b(m,s,u,_)))},nn=en},46847:function(q,V,g){g.d(V,{C:function(){return re}});var c=g(75271),Bt=g(82187),yt=g.n(Bt),Pt=g(40493),Z=g(72405),M=g(1495),L=g(5462),_t=g(74577),y=g(64915),et=g(63988),P=c.createContext({}),U=g(14342),st=g(8298),Vt=g(15441),nt=g(83509);const zt=E=>{const{antCls:T,componentCls:w,iconCls:S,avatarBg:W,avatarColor:Et,containerSize:ht,containerSizeLG:Tt,containerSizeSM:ct,textFontSize:lt,textFontSizeLG:St,textFontSizeSM:Zt,borderRadius:bt,borderRadiusLG:J,borderRadiusSM:Lt,lineWidth:Jt,lineType:Kt}=E,Ft=(R,rt,Mt)=>({width:R,height:R,borderRadius:"50%",[`&${w}-square`]:{borderRadius:Mt},[`&${w}-icon`]:{fontSize:rt,[`> ${S}`]:{margin:0}}});return{[w]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,st.Wf)(E)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:Et,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:W,border:`${(0,U.unit)(Jt)} ${Kt} transparent`,"&-image":{background:"transparent"},[`${T}-image-img`]:{display:"block"}}),Ft(ht,lt,bt)),{"&-lg":Object.assign({},Ft(Tt,St,J)),"&-sm":Object.assign({},Ft(ct,Zt,Lt)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},we=E=>{const{componentCls:T,groupBorderColor:w,groupOverlapping:S,groupSpace:W}=E;return{[`${T}-group`]:{display:"inline-flex",[T]:{borderColor:w},"> *:not(:first-child)":{marginInlineStart:S}},[`${T}-group-popover`]:{[`${T} + ${T}`]:{marginInlineStart:W}}}},ve=E=>{const{controlHeight:T,controlHeightLG:w,controlHeightSM:S,fontSize:W,fontSizeLG:Et,fontSizeXL:ht,fontSizeHeading3:Tt,marginXS:ct,marginXXS:lt,colorBorderBg:St}=E;return{containerSize:T,containerSizeLG:w,containerSizeSM:S,textFontSize:Math.round((Et+ht)/2),textFontSizeLG:Tt,textFontSizeSM:W,groupSpace:lt,groupOverlapping:-ct,groupBorderColor:St}};var ne=(0,Vt.I$)("Avatar",E=>{const{colorTextLightSolid:T,colorTextPlaceholder:w}=E,S=(0,nt.mergeToken)(E,{avatarBg:w,avatarColor:T});return[zt(S),we(S)]},ve),Oe=function(E,T){var w={};for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&T.indexOf(S)<0&&(w[S]=E[S]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,S=Object.getOwnPropertySymbols(E);W<S.length;W++)T.indexOf(S[W])<0&&Object.prototype.propertyIsEnumerable.call(E,S[W])&&(w[S[W]]=E[S[W]]);return w};const le=(E,T)=>{const[w,S]=c.useState(1),[W,Et]=c.useState(!1),[ht,Tt]=c.useState(!0),ct=c.useRef(null),lt=c.useRef(null),St=(0,Z.sQ)(T,ct),{getPrefixCls:Zt,avatar:bt}=c.useContext(L.E_),J=c.useContext(P),Lt=()=>{if(!lt.current||!ct.current)return;const k=lt.current.offsetWidth,z=ct.current.offsetWidth;if(k!==0&&z!==0){const{gap:xt=4}=E;xt*2<z&&S(z-xt*2<k?(z-xt*2)/k:1)}};c.useEffect(()=>{Et(!0)},[]),c.useEffect(()=>{Tt(!0),S(1)},[E.src]),c.useEffect(Lt,[E.gap]);const Jt=()=>{const{onError:k}=E;(k==null?void 0:k())!==!1&&Tt(!1)},{prefixCls:Kt,shape:Ft,size:R,src:rt,srcSet:Mt,icon:wt,className:Qt,rootClassName:qt,alt:ue,draggable:oe,children:Ot,crossOrigin:Wt}=E,Nt=Oe(E,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),H=(0,y.Z)(k=>{var z,xt;return(xt=(z=R!=null?R:J==null?void 0:J.size)!==null&&z!==void 0?z:k)!==null&&xt!==void 0?xt:"default"}),te=Object.keys(typeof H=="object"?H||{}:{}).some(k=>["xs","sm","md","lg","xl","xxl"].includes(k)),fe=(0,et.Z)(te),de=c.useMemo(()=>{if(typeof H!="object")return{};const k=M.c4.find(xt=>fe[xt]),z=H[k];return z?{width:z,height:z,fontSize:z&&(wt||Ot)?z/2:18}:{}},[fe,H]),at=Zt("avatar",Kt),ie=(0,_t.Z)(at),[Le,Ve,ze]=ne(at,ie),Ne=yt()({[`${at}-lg`]:H==="large",[`${at}-sm`]:H==="small"}),se=c.isValidElement(rt),Se=Ft||(J==null?void 0:J.shape)||"circle",Ae=yt()(at,Ne,bt==null?void 0:bt.className,`${at}-${Se}`,{[`${at}-image`]:se||rt&&ht,[`${at}-icon`]:!!wt},ze,ie,Qt,qt,Ve),ae=typeof H=="number"?{width:H,height:H,fontSize:wt?H/2:18}:{};let At;if(typeof rt=="string"&&ht)At=c.createElement("img",{src:rt,draggable:oe,srcSet:Mt,onError:Jt,alt:ue,crossOrigin:Wt});else if(se)At=rt;else if(wt)At=wt;else if(W||w!==1){const k=`scale(${w})`,z={msTransform:k,WebkitTransform:k,transform:k};At=c.createElement(Pt.Z,{onResize:Lt},c.createElement("span",{className:`${at}-string`,ref:lt,style:Object.assign({},z)},Ot))}else At=c.createElement("span",{className:`${at}-string`,style:{opacity:0},ref:lt},Ot);return delete Nt.onError,delete Nt.gap,Le(c.createElement("span",Object.assign({},Nt,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ae),de),bt==null?void 0:bt.style),Nt.style),className:Ae,ref:St}),At))};var me=c.forwardRef(le),xe=g(11986),Re=g(81437),Ce=g(31997);const ye=E=>{const{size:T,shape:w}=c.useContext(P),S=c.useMemo(()=>({size:E.size||T,shape:E.shape||w}),[E.size,E.shape,T,w]);return c.createElement(P.Provider,{value:S},E.children)};var Yt=E=>{var T,w,S,W;const{getPrefixCls:Et,direction:ht}=c.useContext(L.E_),{prefixCls:Tt,className:ct,rootClassName:lt,style:St,maxCount:Zt,maxStyle:bt,size:J,shape:Lt,maxPopoverPlacement:Jt,maxPopoverTrigger:Kt,children:Ft,max:R}=E,rt=Et("avatar",Tt),Mt=`${rt}-group`,wt=(0,_t.Z)(rt),[Qt,qt,ue]=ne(rt,wt),oe=yt()(Mt,{[`${Mt}-rtl`]:ht==="rtl"},ue,wt,ct,lt,qt),Ot=(0,xe.Z)(Ft).map((H,te)=>(0,Re.Tm)(H,{key:`avatar-key-${te}`})),Wt=(R==null?void 0:R.count)||Zt,Nt=Ot.length;if(Wt&&Wt<Nt){const H=Ot.slice(0,Wt),te=Ot.slice(Wt,Nt),fe=(R==null?void 0:R.style)||bt,de=((T=R==null?void 0:R.popover)===null||T===void 0?void 0:T.trigger)||Kt||"hover",at=((w=R==null?void 0:R.popover)===null||w===void 0?void 0:w.placement)||Jt||"top",ie=Object.assign(Object.assign({content:te},R==null?void 0:R.popover),{classNames:{root:yt()(`${Mt}-popover`,(W=(S=R==null?void 0:R.popover)===null||S===void 0?void 0:S.classNames)===null||W===void 0?void 0:W.root)},placement:at,trigger:de});return H.push(c.createElement(Ce.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},ie),c.createElement(me,{style:fe},`+${Nt-Wt}`))),Qt(c.createElement(ye,{shape:Lt,size:J},c.createElement("div",{className:oe,style:St},H)))}return Qt(c.createElement(ye,{shape:Lt,size:J},c.createElement("div",{className:oe,style:St},Ot)))};const Ee=me;Ee.Group=Yt;var re=Ee},46127:function(q,V,g){var c=g(75271);function Bt(P,U){return P===U&&(P!==0||1/P===1/U)||P!==P&&U!==U}var yt=typeof Object.is=="function"?Object.is:Bt,Pt=c.useState,Z=c.useEffect,M=c.useLayoutEffect,L=c.useDebugValue;function _t(P,U){var st=U(),Vt=Pt({inst:{value:st,getSnapshot:U}}),nt=Vt[0].inst,zt=Vt[1];return M(function(){nt.value=st,nt.getSnapshot=U,y(nt)&&zt({inst:nt})},[P,st,U]),Z(function(){return y(nt)&&zt({inst:nt}),P(function(){y(nt)&&zt({inst:nt})})},[P]),L(st),st}function y(P){var U=P.getSnapshot;P=P.value;try{var st=U();return!yt(P,st)}catch(Vt){return!0}}function et(P,U){return U()}var dt=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?et:_t;V.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:dt},96118:function(q,V,g){q.exports=g(46127)}}]);
}());