"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1032],{73594:function(Vt,X,t){t.d(X,{Z:function(){return k},f:function(){return E}});var v=t(75271),E=v.createContext(!1);function k(){return v.useContext(E)}},11079:function(Vt,X,t){t.r(X),t.d(X,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return Me},default:function(){return Te}});var v=t(26068),E=t.n(v),k=t(48305),j=t.n(k),o=t(75271),f=t(88525),Q=t(16010),pt=t(88367),x=t(35763),it=t(39342),St=t(18790),T=t(14797),yt=t(30967),Ct=t.t(yt,2),N=(0,T.Z)({},Ct),Mt=N.version,w=N.render,U=N.unmountComponentAtNode,R;try{var q=Number((Mt||"").split(".")[0]);q>=18&&(R=N.createRoot)}catch(n){}function B(n){var e=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&(0,St.Z)(e)==="object"&&(e.usingClientEntryPoint=n)}var Z="__rc_react_root__";function st(n,e){B(!0);var r=e[Z]||R(e);B(!1),r.render(n),e[Z]=r}function Et(n,e){w(n,e)}function _(n,e){}function xt(n,e){if(R){st(n,e);return}Et(n,e)}function Tt(n){return z.apply(this,arguments)}function z(){return z=(0,it.Z)((0,x.Z)().mark(function n(e){return(0,x.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Promise.resolve().then(function(){var l;(l=e[Z])===null||l===void 0||l.unmount(),delete e[Z]}));case 1:case"end":return a.stop()}},n)})),z.apply(this,arguments)}function Zt(n){U(n)}function Xt(n){}function lt(n){return tt.apply(this,arguments)}function tt(){return tt=(0,it.Z)((0,x.Z)().mark(function n(e){return(0,x.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(R===void 0){a.next=2;break}return a.abrupt("return",Tt(e));case 2:Zt(e);case 3:case"end":return a.stop()}},n)})),tt.apply(this,arguments)}var m=t(87807),W=t(17079),et=t(91574),Pt=t(82187),nt=t.n(Pt),At=t(76591),at=t(41818),Nt=(0,f.jG)(function(n){return n}),rt="data-happy-wave-target",Rt=new f.E4("antWaveTargetEffect",{"0%":{transform:"scale(1)"},"10%":{transform:"scale(1.1)"},"35%":{transform:"scale(0.94)"},"60%":{transform:"scale(1.05)"},"85%":{transform:"scale(0.97)"},"100%":{transform:"scale(1)"}}),Ot=new f.E4("antWaveDotEffect",{"0%":{opacity:0,left:"var(--start-x)",top:"var(--start-y)",width:"var(--start-size)",height:"var(--start-size)",background:"var(--background)",border:"var(--border)"},"25%":{opacity:1},"50%":{opacity:.8},"100%":{opacity:0,left:"var(--end-x)",top:"var(--end-y)",width:"var(--end-size)",height:"var(--end-size)",background:"var(--background)",border:"var(--border)"}});function _t(n,e,r){var a={theme:Nt,token:r};(0,f.xy)((0,T.Z)((0,T.Z)({},a),{},{path:["HappyWorkTheme","target"]}),function(){return(0,m.Z)({},"[".concat(rt,"-").concat(e,"], & [").concat(rt,"-").concat(e,"]"),{animationName:Rt,animationDuration:"0.45s",animationTimingFunction:"ease-in-out",animationFillMode:"backwards"})}),(0,f.xy)((0,T.Z)((0,T.Z)({},a),{},{hashId:e,path:["HappyWorkTheme","effect"]}),function(){var l=".".concat(n);return[(0,m.Z)({},l,(0,m.Z)({position:"fixed",pointerEvents:"none",zIndex:999},"".concat(l,"-dot"),{boxSizing:"border-box",position:"absolute",borderRadius:"100%",opacity:0,transform:"translate(-50%, -50%)",zIndex:999,"&.happy-in-out":{animationName:Ot,animationDuration:r.motionDurationSlow,animationTimingFunction:"linear",animationFillMode:"backwards"}}))]})}var te=7,ee=10;function jt(n,e,r,a,l,p){return n>=r&&n<=l&&e>=a&&e<=p}function ne(n){var e=n.hashId,r=n.target,a=n.token,l=n.onFinish,p="happy-wave",h="".concat(p,"-dot"),O=o.useState(null),L=(0,W.Z)(O,2),c=L[0],g=L[1],M=o.useState(0),S=(0,W.Z)(M,2),ct=S[0],ut=S[1],dt=o.useState(0),ot=(0,W.Z)(dt,2),vt=ot[0],ft=ot[1];_t(p,e,a);var F="".concat(rt,"-").concat(e);return o.useEffect(function(){var i=(0,at.Z)(function(){if(!["-dangerous","-error"].some(function(It){return r.className.includes(It)})){var d=r.getBoundingClientRect(),H=d.width,P=d.height;ut(d.left+H/2),ft(d.top+P/2),g([]);var Y=Math.min(H,P),D=Math.max(H,P),K=Y/2,J=D/2,s=H/2,u=P/2,C=15,I=30,b=s+C,$=u+C,V=s+I,A=u+I,mt=Y>=20?ee:te;setTimeout(function(){var It=Math.random()*360,Yt=a.colorPrimary,Kt=new et.C(Yt).toHsv();Kt.h-=30;var Ze=new et.C(Kt).toHexString();g(new Array(mt).fill(null).map(function(Ae,Jt){for(var Pe=360/mt,ht=It+Pe*Jt,bt=0,zt=0,gt=K-1;gt<=J;gt+=1){var kt=Math.cos(ht*Math.PI/180)*gt,Qt=Math.sin(ht*Math.PI/180)*gt;if(!jt(kt,Qt,-s,-u,s,u))break;bt=kt,zt=Qt}var Wt=bt,Ft=zt,Dt=K,wt=Math.random()*(V-b)+b,qt=Math.random()*(A-$)+$;do Wt=Math.cos(ht*Math.PI/180)*Dt,Ft=Math.sin(ht*Math.PI/180)*Dt,Dt+=1;while(jt(Wt,Ft,-wt,-qt,wt,qt));var $t=Math.random()*3+3;return P>=20&&($t=Math.random()*4+6),{key:Jt+1,startX:"".concat(bt,"px"),startY:"".concat(zt,"px"),endX:"".concat(Wt,"px"),endY:"".concat(Ft,"px"),startSize:"".concat($t,"px"),endSize:"".concat(Math.random()>.75?$t:0,"px"),type:Math.random()>.6?"outlined":"fill",color:Math.random()>.5?Yt:Ze}}))},50),r.setAttribute(F,"true")}});return function(){at.Z.cancel(i)}},[]),o.useEffect(function(){var i=setTimeout(function(){r.removeAttribute(F),l()},600);return function(){clearTimeout(i)}},[]),c?o.createElement("div",{className:nt()(p,e),style:{left:ct,top:vt}},o.createElement(At.CSSMotionList,{component:!1,keys:c,motionAppear:!0,motionName:"happy-in-out"},function(i){var d,H=i.className,P=i.style,Y=i.key,D=i.startX,K=i.startY,J=i.endX,s=i.endY,u=i.startSize,C=i.endSize,I=i.type,b=i.color,$="".concat(h,"-").concat(Y),V=nt()(h,H,$),A=(d={},(0,m.Z)(d,"--start-x",D),(0,m.Z)(d,"--start-y",K),(0,m.Z)(d,"--end-x",J),(0,m.Z)(d,"--end-y",s),(0,m.Z)(d,"--start-size",u),(0,m.Z)(d,"--end-size",C),d);return I==="fill"?A["--background"]=b:A["--border"]="1px solid ".concat(b),o.createElement("div",{className:V,style:(0,T.Z)((0,T.Z)({},P),A)})})):null}function ae(n){var e=n.children,r=n.disabled,a=(0,pt.Z)(function(p,h){var O=h.token,L=h.hashId,c=document.createElement("div");c.style.position="absolute",c.style.left="0px",c.style.top="0px",document.body.appendChild(c),xt(o.createElement(ne,{target:p,token:O,hashId:L,onFinish:function(){lt(c).then(function(){var M;(M=c.parentElement)===null||M===void 0||M.removeChild(c)})}}),c)}),l=o.useMemo(function(){return r?{}:{showEffect:a}},[r]);return o.createElement(Q.ZP,{wave:l},e)}var re=t(58452),Lt=t(80475),oe=t(84853),G=t(91360),ie=t(73594),se=t(41969),le=t(19888),ce=t(68585),ue=t.n(ce),de=t(67825),ve=t.n(de),fe=t(30517),Ut=t(91011),y=t(96378),me=["children","theme"],Bt=64,Gt=72,he=function(e){var r=e.children,a=e.theme,l=ve()(e,me),p=(0,o.useContext)(Q.ZP.ConfigContext),h=p.getPrefixCls,O=p.iconPrefixCls,L=h(),c=Lt.Z.useToken(),g=c.token,M=(0,o.useContext)(Ut.Z),S=M.bannerVisible;return o.useEffect(function(){Q.ZP.config({theme:a})},[a]),(0,y.tZ)(fe.f6,ue()({},l,{theme:a,customToken:{headerHeight:Bt,bannerHeight:Gt,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:g.colorFillTertiary,antCls:".".concat(L),iconCls:".".concat(O),marginFarXS:g.marginXXL/6*7,marginFarSM:g.marginXXL/3*5,marginFar:g.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:Bt+g.margin+(S?Gt:0)}}),r)},ge=he,pe=t(87924),Se=t(38751);(0,pe.q)(function(n,e){e._reactRoot||(e._reactRoot=(0,Se.createRoot)(e));var r=e._reactRoot;return r.render(n),function(){return new Promise(function(a){setTimeout(function(){r.unmount(),a()},0)})}});var ye=o.lazy(function(){return Promise.all([t.e(5159),t.e(5724)]).then(t.bind(t,96736))}),Ce=768,Me="ANT_DESIGN_NOT_SHOW_BANNER";if(typeof window!="undefined"){var Ht=location.hash.slice(1);Ht.startsWith("components-")&&(document.querySelector("#".concat(Ht))||(location.hash="#".concat(Ht.replace(/^components-/,""))))}var Ee=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(function(r){return r==="dark"?Lt.Z.darkAlgorithm:r==="compact"?Lt.Z.compactAlgorithm:null}).filter(Boolean)},xe=function(){var e=(0,G.useOutlet)(),r=(0,le.Z)(),a=r.pathname,l=(0,G.useSearchParams)(),p=j()(l,2),h=p[0],O=p[1],L=(0,se.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),c=j()(L,2),g=c[0],M=g.theme,S=M===void 0?[]:M,ct=g.direction,ut=g.isMobile,dt=g.bannerVisible,ot=dt===void 0?!1:dt,vt=c[1],ft=h.get("cssVar")!=="false",F=(0,o.useCallback)(function(s){vt(function(I){return E()(E()({},I),s)});var u=h.toString(),C=h;Object.entries(s).forEach(function(I){var b=j()(I,2),$=b[0],V=b[1];if($==="direction"&&(V==="rtl"?C.set("direction","rtl"):C.delete("direction")),$==="theme"){var A;C=(0,G.createSearchParams)(E()(E()({},C),{},{theme:V.filter(function(mt){return mt!=="light"})})),(A=document.querySelector("html"))===null||A===void 0||A.setAttribute("data-prefers-color",V.includes("dark")?"dark":"light")}}),C.toString()!==u&&O(C)},[h,O]),i=function(){var u;F({isMobile:((u=window)===null||u===void 0?void 0:u.innerWidth)<Ce})};(0,o.useEffect)(function(){var s=h.getAll("theme"),u=h.get("direction");return vt({theme:s,direction:u==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",s.includes("dark")?"dark":"light"),i(),typeof window=="undefined"?function(){}:(window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)})},[]);var d=o.useMemo(function(){return{direction:ct,updateSiteConfig:F,theme:S,isMobile:ut,bannerVisible:ot}},[ut,ct,F,S,ot]),H=o.useMemo(function(){return{algorithm:Ee(S),token:{motion:!S.includes("motion-off")},cssVar:ft,hashed:!ft}},[S]),P=o.useState(function(){return(0,f.Df)()}),Y=j()(P,1),D=Y[0];(0,G.useServerInsertedHTML)(function(){var s=(0,f.EN)(D,{plain:!0,types:"style"});return(0,y.tZ)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:s}})}),(0,G.useServerInsertedHTML)(function(){var s=(0,f.EN)(D,{plain:!0,types:["cssVar","token"]});return(0,y.tZ)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:s}})}),(0,G.useServerInsertedHTML)(function(){return(0,y.tZ)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,re.$Z)()}})});var K=a.startsWith("/~demos"),J=e;return K||(J=(0,y.tZ)(oe.Z,null,e,(0,y.tZ)(o.Suspense,null,(0,y.tZ)(ye,{value:S,onChange:function(u){return F({theme:u})}})))),(0,y.tZ)(ie.f.Provider,{value:S.includes("dark")},(0,y.tZ)(f.V9,{cache:D,linters:[f.Ke,f.rA,f.__]},(0,y.tZ)(Ut.Z.Provider,{value:d},(0,y.tZ)(ge,{theme:H},(0,y.tZ)(ae,{disabled:!S.includes("happy-work")},J)))))},Te=xe},84853:function(Vt,X,t){t.d(X,{Z:function(){return Mt}});var v=t(75271),E=t(82187),k=t.n(E),j=t(71539),o=t(90248),f=t(8571),Q=t(87476),pt=t(15922),x=t(17245),it=t(12158);const St=w=>{const{componentCls:U,colorText:R,fontSize:q,lineHeight:B,fontFamily:Z}=w;return{[U]:{color:R,fontSize:q,lineHeight:B,fontFamily:Z,[`&${U}-rtl`]:{direction:"rtl"}}}},T=()=>({});var yt=(0,it.I$)("App",St,T);const Ct=()=>v.useContext(x.Z),N=w=>{const{prefixCls:U,children:R,className:q,rootClassName:B,message:Z,notification:st,style:Et,component:_="div"}=w,{direction:xt,getPrefixCls:Tt}=(0,v.useContext)(o.E_),z=Tt("app",U),[Zt,Xt,lt]=yt(z),tt=k()(Xt,z,q,B,lt,{[`${z}-rtl`]:xt==="rtl"}),m=(0,v.useContext)(x.J),W=v.useMemo(()=>({message:Object.assign(Object.assign({},m.message),Z),notification:Object.assign(Object.assign({},m.notification),st)}),[Z,st,m.message,m.notification]),[et,Pt]=(0,f.Z)(W.message),[nt,At]=(0,pt.Z)(W.notification),[at,Nt]=(0,Q.Z)(),rt=v.useMemo(()=>({message:et,notification:nt,modal:at}),[et,nt,at]);(0,j.ln)("App")(!(lt&&_===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const Rt=_===!1?v.Fragment:_,Ot={className:tt,style:Et};return Zt(v.createElement(x.Z.Provider,{value:rt},v.createElement(x.J.Provider,{value:W},v.createElement(Rt,Object.assign({},_===!1?void 0:Ot),Nt,Pt,At,R))))};N.useApp=Ct;var Mt=N}}]);
