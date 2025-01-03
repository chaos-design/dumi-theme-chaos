"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1032],{8844:function(it,O,t){t.r(O),t.d(O,{default:function(){return _}});var w=t(26068),S=t.n(w),J=t(48305),Z=t.n(J),d=t(14342),T=t(19201),N=t(58293),v=t(26889),s=t(75271),V=t(5641),H=t(15558),E=t.n(H),p=t(58589),x=t(44963),$=t(68585),z=t.n($),b=t(25108),e=t(79125),B=function(n){var r=s.useCallback(function(){return(0,e.tZ)("svg",z()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},n),(0,e.tZ)("g",{fillRule:"evenodd"},(0,e.tZ)("g",{fillRule:"nonzero"},(0,e.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[n]);return(0,e.tZ)(b.Z,z()({component:r},n))},D=B,F=function(n){var r=n.value,o=r===void 0?["light"]:r,i=n.onChange;return(0,e.tZ)(p.Z.Group,{trigger:"click",icon:(0,e.tZ)(D,null)},(0,e.tZ)(p.Z,{icon:(0,e.tZ)(x.Cs,null),type:o.includes("dark")?"primary":"default",onClick:function(){var u=o.includes("dark")?"light":"dark";i([u].concat(E()(o.filter(function(l){return["dark","light"].indexOf(l)<0}))))},tooltip:(0,e.tZ)(v.FormattedMessage,{id:"app.theme.switch.dark"})}),(0,e.tZ)(p.Z,{icon:(0,e.tZ)(x.dR,null),type:o.includes("compact")?"primary":"default",onClick:function(){o.includes("compact")?i(o.filter(function(u){return u!=="compact"})):i([].concat(E()(o),["compact"]))},tooltip:(0,e.tZ)(v.FormattedMessage,{id:"app.theme.switch.compact"})}))},X=F,K=t(94268),W=768,L="dumi-theme-chaos-site-state",P={theme:["light"],isMobile:!1,direction:"ltr"},Y=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(function(r){return r==="dark"?T.Z.darkAlgorithm:r==="compact"?T.Z.compactAlgorithm:T.Z.defaultAlgorithm})},Q=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches},U=function(n){var r=n,o=Q(),i=(r==null?void 0:r.theme)||[],f=i.filter(function(l){return l==="auto"}).length>0;if(f){var u=i.filter(function(l){return l!=="auto"});u.push(o?"dark":"light"),r.theme=u}return Object.assign(P,r)},q=function(){var n=(0,v.usePrefersColor)(),r=Z()(n,3),o=r[2],i=(0,V.Z)(),f=i.theme,u=i.ssr,l=i.prefersColor,tt=(0,s.useState)(P),G=Z()(tt,2),M=G[0],c=M.theme,R=M.isMobile,k=M.direction,et=G[1],h=(0,s.useCallback)(function(a){try{var g=JSON.parse(window.localStorage.getItem(L)||"{}"),A=Object.assign(g,a);window.localStorage.setItem(L,JSON.stringify(A)),et(function(I){return S()(S()({},I),a)})}catch(I){console.error(I)}},[]),y=(0,s.useCallback)(function(){h({isMobile:window.innerWidth<W})},[h]);(0,s.useEffect)(function(){try{var a=JSON.parse(window.localStorage.getItem(L)||"{}");a!=null&&a.theme||(a.theme=[l.default]);var g=U(a);h(g)}catch(A){console.error(A)}},[l,h]),(0,s.useEffect)(function(){return y(),o((c!=null?c:[]).indexOf("dark")>-1?"dark":"light"),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}},[c,y,o]);var rt=(0,s.useMemo)(function(){return{direction:k,isMobile:R,theme:c,updateSiteConfig:h}},[R,c,k,h]),at=s.useState(function(){return(0,d.createCache)()}),nt=Z()(at,1),C=nt[0];(0,v.useServerInsertedHTML)(function(){var a=(0,d.extractStyle)(C,{plain:!0,types:"style"});return(0,e.tZ)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:a}})}),(0,v.useServerInsertedHTML)(function(){var a=(0,d.extractStyle)(C,{plain:!0,types:["cssVar","token"]});return(0,e.tZ)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:a}})});var j=(0,e.tZ)(K.Z.Provider,{value:rt},(0,e.tZ)(N.ZP,{theme:S()(S()({},f),{},{algorithm:Y(c)})},(0,e.tZ)(v.Outlet,null),l.switch&&(0,e.tZ)(X,{value:c,onChange:function(g){return h({theme:g})}}))),ot=(0,e.tZ)(d.StyleProvider,{cache:C,linters:[d.logicalPropertiesLinter,d.legacyNotSelectorLinter,d.parentSelectorLinter]},j);return u?(t.g.styleCache=C,ot):j},_=q}}]);
