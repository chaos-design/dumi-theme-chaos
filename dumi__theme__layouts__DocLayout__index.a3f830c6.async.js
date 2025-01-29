"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{29292:function(Nn,j,t){t.d(j,{Z:function(){return V.Z}});var V=t(79830)},74232:function(Nn,j,t){t.d(j,{Z:function(){return V.Z}});var V=t(76297)},7936:function(Nn,j,t){t.r(j);var V=t(53649),O=t.n(V),an=t(75271),H=t(23424),hn=t(90420),vn=t(30517),On=t(11486),c=t(96378),K,dn=function(e){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(p)},x=(0,vn.kc)(function(sn){var e=sn.token,p=sn.css,en=e.colorIcon,W=e.colorText,J=e.iconCls;return{editButton:p(K||(K=O()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),e.marginXS,J,en,e.fontSizeLG,e.motionDurationSlow,W)}}),xn=function(e){var p=e.title,en=e.filename,W=x(),J=W.styles,X=(0,On.HP)(),F=X.owner,z=X.repo,rn=X.branch,pn=X.docDir;return(0,c.tZ)(hn.Z,{title:p},(0,c.tZ)("a",{className:J.editButton,href:"".concat(dn("".concat(F,"/").concat(z),rn)).concat(pn).concat(en),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(H.Z,null)))};j.default=xn},73594:function(Nn,j,t){t.d(j,{Z:function(){return an},f:function(){return O}});var V=t(75271),O=V.createContext(!1);function an(){return V.useContext(O)}},76687:function(Nn,j,t){t.d(j,{Z:function(){return jn}});var V=t(48305),O=t.n(V),an=t(15558),H=t.n(an),hn=t(31759),vn=t.n(hn),On=t(82092),c=t(53649),K=t.n(c),dn=t(75271),x=t(14768),xn=t(30517),sn=t(82187),e=t(91360),p=t(41075),en=t(19888),W=t(56178),J={i8:"0.0.1"},X=t(11486),F=t(96378),z,rn,pn;function En(bn){return bn&&/^\d+\.\d+\.\d+$/.test(bn)}var Qn=(0,xn.kc)(function(bn){var A=bn.css,G=bn.token;return{link:A(z||(z=K()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:A(rn||(rn=K()([`
    margin-inline-end: 0;
  `]))),subtitle:A(pn||(pn=K()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),G.fontSizeSM)}}),de=function(A){var G,kn,Zn=Qn(),U=Zn.styles,I=A.before,Y=A.after,_=A.link,Wn=A.title,tn=A.subtitle,Q=A.search,y=A.tag,Rn=A.className,An=(G=typeof y=="string"?y:y==null?void 0:y.title)!==null&&G!==void 0?G:"",gn=(kn=typeof y=="string"?y:y==null?void 0:y.color)!==null&&kn!==void 0?kn:"";return!I&&!Y?___EmotionJSX(Link,{to:"".concat(_).concat(Q),className:classnames(Rn,_defineProperty({},U.link,An))},___EmotionJSX(Space,null,___EmotionJSX("span",null,Wn),tn&&___EmotionJSX("span",{className:U.subtitle},tn)),An&&___EmotionJSX(Tag,{bordered:!1,className:classnames(U.tag),color:En(gn)||gn==="New"?"success":"processing"},An)):___EmotionJSX(Link,{to:"".concat(_).concat(Q),className:Rn},I,Wn,tn&&___EmotionJSX("span",{className:U.subtitle},tn),Y)},qn=function(){var A,G,kn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Zn=(0,en.Z)(),U=Zn.pathname,I=Zn.search,Y=(0,X.ZP)(),_=Y.sidebarGroupModePath,Wn=Y.sidebarEnhance,tn=Wn===void 0?{}:Wn,Q=kn.before,y=kn.after,Rn=(0,e.useFullSidebarData)(),An=(0,W.O1)(Rn),gn=(0,e.useLocale)(),S="/".concat((A=U.split("/"))===null||A===void 0?void 0:A[1]),Xn=An[S],Gn=(0,dn.useMemo)(function(){return Object.values(Rn).reduce(function(T,q){var fn=q.map(function(on){return on.children}).flat();return fn.forEach(function(on){T[on.link]=on.title}),T},{})},[Rn]),$n=(0,dn.useMemo)(function(){var T=Object.keys(tn).find(function(q){return U.startsWith(q)});if(T)return tn[T]},[U,tn]),ue=(0,dn.useMemo)(function(){var T=function(R){return R&&vn()(R)==="object"&&"link"in R&&"title"in R},q=function(R){return R&&vn()(R)==="object"&&R.type==="group"},fn=function(R){return R&&vn()(R)==="object"&&"children"in R};function on(C){return typeof C=="string"?{key:C,label:(0,F.tZ)(p.Z,{to:"".concat(C).concat(I)},Q,Gn[C],y)}:q(C)?{type:"group",label:C.title,key:C.title,children:C.children.map(on)}:fn(C)?{key:C.title,label:(0,F.tZ)("span",{style:{paddingLeft:10}},C.title),children:C.children.map(on)}:T(C)?{label:(0,F.tZ)(p.Z,{target:C.target,to:C.link},C.title),key:C.link}:null}if($n)return $n.map(on)},[y,Q,$n,Gn,I]),Vn=(0,dn.useMemo)(function(){var T,q,fn=new RegExp("".concat((T=gn==null?void 0:gn.suffix)!==null&&T!==void 0?T:"","$"),"g"),on=H()(Xn!=null?Xn:[]),C=function(b){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return b&&ne&&(0,F.tZ)(x.Z,{color:typeof b=="string"?"processing":b.color,bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2}},(typeof b=="string"?b:b.title).replace("VERSION","v".concat(J.i8)))};return(q=on==null?void 0:on.reduce(function(R,b){if(b!=null&&b.title){var ne=_===!0?!0:(_!=null?_:[]).filter(function(g){return U.startsWith(g)}).length>0;if(ne){var Fn;R.push({type:"group",label:b==null?void 0:b.title,order:b==null?void 0:b.order,key:b==null?void 0:b.title,children:(Fn=b.children)===null||Fn===void 0?void 0:Fn.map(function(g){var h,N;return{label:(0,F.tZ)(p.Z,{to:"".concat(g.link).concat(I),style:{display:"flex",alignItems:"center"}},Q,(0,F.tZ)("span",{key:"english"},(0,W.A0)(g==null?void 0:g.title)),(0,F.tZ)("span",{className:"chinese",key:"chinese"},(0,W.A0)((h=g.frontmatter)===null||h===void 0?void 0:h.subtitle)),C((N=g.frontmatter)===null||N===void 0?void 0:N.tag,!Q&&!y),y),key:g.link.replace(fn,"")}})})}else{var ee,te,Un={},In=b.children.reduce(function(g,h){var N,ln,un=g,$=h==null||(N=h.frontmatter)===null||N===void 0?void 0:N.type,Cn=typeof $=="string"?$:(ln=$==null?void 0:$.title)!==null&&ln!==void 0?ln:"default";if(un[Cn]||(un[Cn]=[]),Un[Cn])$!=null&&$.order&&(Un[Cn].order=$.order);else{var re;Un[Cn]={title:Cn,order:(re=$==null?void 0:$.order)!==null&&re!==void 0?re:-1}}return un[Cn].push(h),un},{}),oe=Object.keys(In).sort(function(g,h){return Un[g].order-Un[h].order}).reduce(function(g,h){var N=g;return N[h]=In[h],N},{}),cn=[];cn.push.apply(cn,H()((ee=(te=oe.default)===null||te===void 0?void 0:te.map(function(g){var h;return{label:(0,F.tZ)(p.Z,{to:"".concat(g.link).concat(I),style:{display:"flex",alignItems:"center"}},Q,(0,W.A0)(g==null?void 0:g.title),C((h=g.frontmatter)===null||h===void 0?void 0:h.tag,!Q&&!y),y),key:g.link.replace(fn,"")}}))!==null&&ee!==void 0?ee:[])),Object.entries(oe).forEach(function(g){var h=O()(g,2),N=h[0],ln=h[1];N!=="default"&&cn.push({type:"group",label:N,key:N,children:ln==null?void 0:ln.map(function(un){var $;return{label:(0,F.tZ)(p.Z,{to:"".concat(un.link).concat(I),style:{display:"flex",alignItems:"center"}},Q,(0,W.A0)(un==null?void 0:un.title),C(($=un.frontmatter)===null||$===void 0?void 0:$.tag,!Q&&!y),y),key:un.link.replace(fn,"")}})})}),R.push({label:b==null?void 0:b.title,key:b==null?void 0:b.title,order:b==null?void 0:b.order,children:cn})}}else{var ae=b.children||[];ae.every(function(g){var h;return g==null||(h=g.frontmatter)===null||h===void 0?void 0:h.date})&&ae.sort(function(g,h){var N,ln;return(g==null||(N=g.frontmatter)===null||N===void 0?void 0:N.date)>(h==null||(ln=h.frontmatter)===null||ln===void 0?void 0:ln.date)?-1:1}),R.push.apply(R,H()(ae.map(function(g){var h;return{order:g==null?void 0:g.order,label:(0,F.tZ)(p.Z,{to:"".concat(g.link).concat(I),style:{display:"flex",alignItems:"center"}},Q,(0,W.A0)(g==null?void 0:g.title),C((h=g.frontmatter)===null||h===void 0?void 0:h.tag,!Q&&!y),y),key:g.link.replace(fn,"")}})))}return R.sort(function(g,h){return(g==null?void 0:g.order)<(h==null?void 0:h.order)?-1:1}),R},[]))!==null&&q!==void 0?q:[]},[Xn,_,U,I,Q,y,gn]),me=U.replace(new RegExp("".concat((G=gn==null?void 0:gn.suffix)!==null&&G!==void 0?G:"","$"),"g"),"");return[ue||Vn,me]},jn=qn},54915:function(Nn,j,t){t.r(j),t.d(j,{default:function(){return bo}});var V=t(48305),O=t.n(V),an=t(82187),H=t.n(an),hn=t(16483),vn=t.n(hn),On=t(81414),c=t(75271),K=t(16010),dn=t(79558),x=t(91360),xn=t(54425),sn=t(19888),e=t(96378),p=t(30517),en={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},W=function(){var n=(0,p.Fg)(),a=function l(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(d,"-").concat(i,` {
  background: `).concat(n["".concat(d,"-").concat(i)],`;
}
`).concat(l(d,i+1),`
    `):""},r=function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return d<=13?`
.palette-gray-`.concat(d,` {
  background: `).concat(en[d],`;
}
`).concat(l(d+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",a("blue")," ",a("purple")," ",a("cyan")," ",a("green")," ",a("magenta")," ",a("red")," ",a("volcano")," ",a("orange")," ",a("gold")," ",a("yellow")," ",a("lime")," ",a("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},J=W,X=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},F=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},z=t(21793),rn=function(){return{"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}},pn=function(){var o=(0,p.Fg)(),n=o.anchorTop;return c.useInsertionEffect(function(){(0,z.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},En=t(84432),Qn=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",a,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",a,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",a,"-row>div,.code-box-demo ",a,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",a,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new En.FastColor(r).setA(.75).toHexString(),";}}",a,"-row .demo-col,.code-box-demo ",a,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",a,"-row .demo-col-1{background:",new En.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-2,.code-box-demo ",a,"-row .demo-col-2{background:",new En.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-3,.code-box-demo ",a,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",a,"-row .demo-col-4,.code-box-demo ",a,"-row .demo-col-4{background:",new En.FastColor(r).setA(.6).toHexString(),";}",a,"-row .demo-col-5,.code-box-demo ",a,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",a,"-row>div{margin-top:0;margin-bottom:0;}}","")})},de=Qn,qn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},jn=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",r,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",a,"-row",a,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",a,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",a,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",a,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",r,"{color:",n.colorTextBase,";font-weight:bold;}}}",a,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},bn=jn,A=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},G=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},kn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".clearfix{",rn(),";}.preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},Zn="dumi-default-",U=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",Zn,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",Zn,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",Zn,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},I=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},Y=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(F,null),(0,e.tZ)(pn,null),(0,e.tZ)(de,null),(0,e.tZ)(qn,null),(0,e.tZ)(bn,null),(0,e.tZ)(A,null),(0,e.tZ)(G,null),(0,e.tZ)(kn,null),(0,e.tZ)(I,null),(0,e.tZ)(J,null),(0,e.tZ)(X,null),(0,e.tZ)(U,null))},_=Y,Wn=t(68585),tn=t.n(Wn),Q=t(26068),y=t.n(Q),Rn=t(82092),An=t.n(Rn),gn=t(53649),S=t.n(gn),Xn=t(64733),Gn=t(79513),$n=t(86882),ue=t(22996),Vn=t(31931),me=t(2761),T=t(56178),q=t(91011),fn=t(41075),on,C,R,b,ne=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.headerHeight,l=n.colorTextHeading,d=n.fontFamily,i=n.mobileMaxWidth;return{logo:a(on||(on=S()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 24px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      column-gap: `,`px;

      &:hover {
        color: `,`;
      }

      img {
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),r,l,d,r,n.marginSM,l,i),title:a(C||(C=S()([`
      line-height: 40px;
    `]))),logoImage:a(R||(R=S()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `]))),tour:a(b||(b=S()([`
      .ant-popover-title,
      .ant-popover-inner-content {
        color: #fff;
      }
    `])))}}),Fn="chaos.logo.tour.dismiss",ee=function(n){var a,r=n.isZhCN,l=c.useState(!0),d=O()(l,2),i=d[0],s=d[1],u=(0,x.useSiteData)(),m=u.themeConfig,v=(0,x.useLocation)(),M=v.search,k=ne(),Z=k.styles,D=(m==null?void 0:m.logo)||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,T.Fy)()&&(localStorage.getItem(Fn)?s(!1):s(!0))},[i]),(0,e.tZ)("h1",null,(0,e.tZ)(fn.Z,{to:T.J1("/",r,M),className:Z.logo},(0,e.tZ)($n.Z,{title:"\u{1F389}\u{1F389}\u{1F389}",content:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"bottomRight",classNames:{root:Z.tour},color:"#1677ff",open:i,onOpenChange:function(w){w?(s(!1),(0,T.Fy)()&&localStorage.setItem(Fn,"1")):s(w)}},(0,e.tZ)("img",{id:"chaos-logo",className:Z.logoImage,src:D,draggable:!1,alt:"logo",onMouseEnter:function(){s(!1),(0,T.Fy)()&&localStorage.setItem(Fn,"1")}})),m!=null&&m.name?(0,e.tZ)("span",{className:Z.title,dangerouslySetInnerHTML:{__html:(a=m==null?void 0:m.name)!==null&&a!==void 0?a:""}}):null))},te=ee,Un=t(15558),In=t.n(Un),oe=t(36018),cn=t(11486),ae=t(55619),g=t(45366),h=t(74088),N=t(68714),ln=function(n){return(n!=null?n:[]).map(function(a,r){return{label:(0,e.tZ)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.text),key:r}})},un=function(){var n=(0,N.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(g.Z,{menu:{items:ln(n)},placement:"bottomRight"},(0,e.tZ)(h.ZP,{size:"small"},(0,e.tZ)(x.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(ae.Z,null))):null},$=un,Cn,re=(0,p.kc)(function(o){var n=o.token,a=n.antCls,r=n.iconCls,l=n.fontFamily,d=n.fontSize,i=n.headerHeight,s=n.colorPrimary;return{nav:(0,p.iv)(Cn||(Cn=S()([`
      height: 100%;
      max-width: 50%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;
      background-color: transparent;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-inline-end: `,`px;
          padding-inline-start: `,`px;
          line-height: `,`px;
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),d,l,a,a,a,40+12*2,i,n.paddingSM,n.paddingSM,i,a,r,a,s,a,a)}}),et=function(n){var a,r,l=n.isZhCN,d=n.isMobile,i=n.responsive,s=n.directionText,u=(0,cn.HP)(),m=u.github,v=(0,x.useLocation)(),M=v.pathname,k=v.search,Z=(0,x.useSiteData)(),D=Z.locales,L=(0,x.useNavData)(),w=(0,x.useLocale)(),P=(0,N.Z)("moreLinks"),f=(0,x.useFullSidebarData)(),B=((a=f["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],nn=re(),Tn=nn.styles,Mn=d?"inline":"horizontal",zn=M.split("/").filter(Boolean).slice(0,-1).join("/"),_n="/".concat(zn||"home"),Bn=function mn(Kn){return Kn.map(function(E){var Sn,ce=((Sn=E.link)!==null&&Sn!==void 0?Sn:"").split("/").slice(0,2).join("/");return{label:E.children?E.title:(0,T.YW)(E.link)?(0,e.tZ)("a",{href:"".concat(E.link).concat(k),target:"_blank",rel:"noreferrer"},E.title):(0,e.tZ)(fn.Z,{to:"".concat(E.link).concat(k)},E.title),key:(0,T.YW)(E.link)?E.link:ce,children:E.children?mn(E.children):null}})},Dn=Bn(L),ie=c.useCallback(function(){if(D.length<2)return null;if(D.length===2){var mn=D.filter(function(E){return E.id!==(w==null?void 0:w.id)})[0],Kn=(0,T.cY)({pathname:M,current:w,target:mn});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Kn},mn.name),key:mn.id}}return{label:(0,e.tZ)("span",null,w.name),key:"multi-lang",children:D.filter(function(E){return E.id!==w.id}).map(function(E){var Sn=(0,T.cY)({pathname:M,current:w,target:E});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Sn},E.name),key:E.id}})}},[w,D]),Ln=[],yn=[m?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:m,target:"_blank"},"GitHub"),key:"github"}:null].concat(In()(ln(P)||[]));d?Ln=yn:i==="crowded"&&(Ln=[{label:(0,e.tZ)(Xn.Z,null),key:"additional",children:In()(yn)}]);var Hn=[].concat(In()(Dn!=null?Dn:[]),[B.length?{label:(0,e.tZ)(fn.Z,{to:T.J1(B.sort(function(mn,Kn){var E,Sn;return((E=mn.frontmatter)===null||E===void 0?void 0:E.date)>((Sn=Kn.frontmatter)===null||Sn===void 0?void 0:Sn.date)?-1:1})[0].link,l,k)},w==null?void 0:w.blog),key:"docs/blog"}:null],In()((r=Ln)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,e.tZ)(oe.Z,{mode:Mn,selectedKeys:[_n],className:Tn.nav,disabledOverflow:!0,items:Hn})},tt=et,ge=t(27449),fe=t(16932),ot=t(43027),at="1.2em",rt=function(){var n=(0,fe.Z)(),a=n.token,r=a.controlHeight,l=a.motionDurationMid;return{extra:(0,e.iv)(".dumi-default-icon+.dumi-default-icon{margin-inline-start:12px;}.dumi-default-icon{font-size:16px;}.dumi-default-icon>svg{height:",at,";}","")}},it=function(){var n=(0,cn.ZP)(),a=n.socialLinks,r=(0,cn.HP)(),l=r.github,d=rt(),i=(0,c.useMemo)(function(){return[l?{icon:"github",link:l}:null].concat(In()(a?Object.keys(a).slice(0,l?4:5).map(function(s){return{icon:s,link:a[s]}}):[])).filter(Boolean)},[a]);return i.length?(0,e.tZ)(ge.Z,{gap:4,align:"center",css:d.extra},i.map(function(s){return(0,e.tZ)(ot.Z,{icon:s.icon,link:s.link||"",key:s.link})})):null},lt=it,dt=t(99018),he=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16);r/=255,l/=255,d/=255;var i=Math.max(r,l,d),s=Math.min(r,l,d),u,m,v=(i+s)/2;if(i===s)u=m=0;else{var M=i-s;switch(m=v>.5?M/(2-i-s):M/(i+s),i){case r:u=(l-d)/M+(l<d?6:0);break;case l:u=(d-r)/M+2;break;case d:u=(r-l)/M+4;break}u/=6}return m=m*100,v=v*100-a,"hsl(".concat(Math.round(u*360),", ").concat(Math.round(m),"%, ").concat(Math.round(v),"%)")},st=function(n){var a=n.backgroundColor,r=a===void 0?"#e8d7ff":a,l=n.textColor,d=l===void 0?"#091E42":l,i=n.align,s=i===void 0?"center":i,u=(0,fe.Z)(),m=u.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",m.fontSize,"px;@media only screen and (max-width: ",m.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",he(r,10),";--site-announcement-bar-stripe-color2:",he(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,s,";& .ant-alert-message{color:",d,";}& .ant-alert-description{color:",d,";}","")}},ve="chaos.announcement.dismiss",ct=function(){var n=(0,c.useState)(!0),a=O()(n,2),r=a[0],l=a[1],d=(0,cn.ZP)()||{},i=d.announcementBar,s=(0,q.A)(),u=s.updateSiteConfig,m=st(i||{});(0,c.useEffect)(function(){i!=null&&i.id?!(0,T.Fy)()||localStorage.getItem(ve)===i.id?l(!0):l(!1):l(!0)},[i]),(0,c.useEffect)(function(){u({bannerVisible:!r})},[r]);var v=(0,c.useCallback)(function(){i!=null&&i.id&&(0,T.Fy)()&&localStorage.setItem(ve,i.id),l(!0)},[]);return r?null:(0,e.tZ)(K.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(dt.Z,tn()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[m.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var k;if((k=window)!==null&&k!==void 0&&k.gtag){var Z,D;(Z=(D=window).gtag)===null||Z===void 0||Z.call(D,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:v,css:i!=null&&i.backgroundColor?[m.container]:[]}))))},ut=ct,mt=t(90420),xe,be,ye,Se,we,Jn="1.2em",pt=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.colorText,l=n.colorBorder,d=n.colorBgContainer,i=n.colorBgTextHover,s=n.borderRadius,u=n.controlHeight,m=n.motionDurationMid;return{btn:a(xe||(xe=S()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),r,l,u,u,s,m,m,i,Jn,Jn,Jn),innerDiv:a(be||(be=S()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Jn,Jn),labelStyle:a(ye||(ye=S()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Jn,r,r),label1Style:a(Se||(Se=S()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,d),label2Style:a(we||(we=S()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),gt=function(n){var a=n.label1,r=n.label2,l=n.tooltip1,d=n.tooltip2,i=n.value,s=n.pure,u=n.onClick,m=pt(),v=m.styles,M=v.btn,k=v.innerDiv,Z=v.labelStyle,D=v.label1Style,L=v.label2Style,w=(0,e.tZ)("button",{type:"button",onClick:u,className:M,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},s&&(i===1?a:r),!s&&(0,e.tZ)("div",{className:k},(0,e.tZ)("span",{className:H()(Z,i===1?D:L)},a),(0,e.tZ)("span",{className:H()(Z,i===1?L:D)},r))));return l||d?(0,e.tZ)(mt.Z,{title:i===1?l:d},w):w},ke=gt,ft=Gn.default.Option,ht="chaos.locale",vt=function(){var n=(0,x.useSearchParams)(),a=O()(n,1),r=a[0],l=(0,cn.ZP)(),d=l.localesEnhance,i=(0,x.useSiteData)(),s=i.locales,u=(0,x.useIntl)(),m=u.locale,v=(0,x.useLocale)(),M=(0,x.useLocation)(),k=M.pathname,Z=(0,c.useCallback)(function(f){var B=(0,T.cY)({pathname:k,current:v,target:s.find(function(nn){var Tn=nn.id;return Tn===f})});T.Fy()&&localStorage.setItem(ht,T.KE(k)?"en-US":"zh-CN"),B.startsWith("/-")?B="/index".concat(B.substring(1)):B.endsWith("/index")&&(B=B.replace("/index","/")),x.history.push({pathname:B,search:r.toString()})},[k,v,s,r]),D=(0,c.useCallback)(function(){Z(s.filter(function(f){return f.id!==m})[0].id)},[m,Z,s]),L;if(s.length>2||!d&&s.length>2){var w=s.map(function(f){return(0,e.tZ)(ft,{value:f.id,key:f.id},f.name)});L=L=(0,e.tZ)(Gn.default,{key:"lang",className:"version",size:"small",defaultValue:m,onChange:Z,popupMatchSelectWidth:!1,getPopupContainer:function(B){return B.parentNode}},w)}else if(s.length===2&&Array.isArray(d)&&d.length>1){var P=s[0].id===m?1:2;L=(0,e.tZ)(ke,{key:"lang",onClick:D,value:P,label1:d[0].switchPrefix,label2:d[1].switchPrefix,tooltip1:"".concat(s[0].name," / ").concat(s[1].name),tooltip2:"".concat(s[1].name," / ").concat(s[0].name)})}return L},xt=vt,bt=t(25108),yt=function(n){var a=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},St=c.forwardRef(function(o,n){return(0,e.tZ)(bt.Z,tn()({ref:n,component:function(){return(0,e.tZ)(yt,{direction:o.direction})}},o))}),Ze=St,Ce,wt=(0,p.kc)(function(o){var n=o.token,a=o.css;return{dataDirectionIcon:a(Ce||(Ce=S()([`
      width: 20px;
    `])))}}),kt=function(){var n=(0,c.useContext)(q.Z),a=n.direction,r=n.updateSiteConfig,l=wt(),d=l.styles,i=(0,cn.ZP)(),s=i.rtl,u=s===void 0?!0:s;if(!u)return null;var m=function(){r({direction:a!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(ke,{key:"direction",onClick:m,value:a==="rtl"?2:1,label1:(0,e.tZ)(Ze,{className:d.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(Ze,{className:d.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},Zt=kt,Me,De,Le,Ee,Te,ze,Be,Pe,Oe,Re=1120,Ae=1200,Ct=(0,p.kc)(function(o){var n=o.token,a=o.css,r="#ced4d9";return{header:a(Me||(Me=S()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      // background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);
      background-color: rgba(248, 248, 248, 0.4);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        // border-inline-start: 1px solid rgba(0, 0, 0, 0.06);
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 8px;

        > svg {
          width: 18px;
          inset-inline-start: 8px;
          fill: `,`;
        }

        > input {
          height: 36px;
          border: 1px solid transparent;
          min-width: 240px;
          max-width: calc(100vw - 768px);
          padding-inline-start: 32px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.03);

          &:focus {
            box-shadow: none;
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid `,`;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          // color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
          // position: static;
          // top: unset;
          // transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: `,`px;
          inset-inline-end: unset;
          z-index: 1;
          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
          & > section {
            scrollbar-width: thin;
            scrollbar-gutter: stable;
          }
        }
      }
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,r,n.colorPrimary,r,r,n.borderRadiusSM,n.paddingSM),searchBarContainer:a(De||(De=S()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:a(Le||(Le=S()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuCol:a(Ee||(Ee=S()([`
      display: flex;
      align-items: center;
    `]))),menuRow:a(Te||(Te=S()([`
      display: flex;
      align-items: center;
      flex: 1;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(ze||(ze=S()([`
      width: 20px;
    `]))),popoverMenu:An()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Be||(Be=S()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Pe||(Pe=S()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(Oe||(Oe=S()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Mt=function(){var n,a=(0,x.useSiteData)(),r=a.pkg,l=(0,cn.ZP)(),d=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),i=O()(d,2),s=i[0],u=i[1],m=(0,c.useContext)(q.Z),v=m.direction,M=m.isMobile,k=m.updateSiteConfig,Z=(0,c.useRef)(null),D=(0,x.useLocation)(),L=D.pathname,w=D.search,P=Ct(),f=P.styles,B=(0,c.useCallback)(function(){u(function(wn){return y()(y()({},wn),{},{menuVisible:!1})})},[]),nn=(0,c.useCallback)(function(){u(function(wn){var Pn;return y()(y()({},wn),{},{windowWidth:(Pn=window)===null||Pn===void 0?void 0:Pn.innerWidth})})},[]),Tn=(0,c.useCallback)(function(wn){u(function(Pn){return y()(y()({},Pn),{},{menuVisible:wn})})},[]);(0,c.useEffect)(function(){B()},[D]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(nn(),window.addEventListener("resize",nn),function(){window.removeEventListener("resize",nn),Z.current&&clearTimeout(Z.current)})},[]);var Mn=(0,c.useCallback)(function(wn){if(typeof window!="undefined"){var Pn=window.location.href,yo=new URL(Pn.replace(window.location.origin,wn));window.location.href=yo.href.replace(/\/$/,"")}},[]),zn=(0,c.useMemo)(function(){return v!=="rtl"?"RTL":"LTR"},[v]),_n=(0,c.useMemo)(function(){return v==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[v]),Bn=s.menuVisible,Dn=s.windowWidth,ie=s.searching,Ln=y()(y()({},r.version?An()({},r.version,r.version):{}),l==null?void 0:l.docVersions),yn=Object.keys(Ln).filter(Boolean).map(function(wn){return{value:Ln[wn],label:wn}}),Hn=["","index","index-cn"].includes(L),mn=T.KE(L),Kn=v==="rtl",E=null;Dn<Re?E="crowded":Dn<Ae&&(E="narrow");var Sn=H()(f.header,"clearfix",{"home-header":Hn}),ce={isZhCN:mn,isRTL:Kn},qe=(0,e.tZ)(tt,tn()({key:"nav"},ce,{responsive:E,isMobile:M,directionText:zn})),le=[qe,yn.length>0?(0,e.tZ)(Gn.default,{key:"version",size:"small",className:f.versionSelect,defaultValue:(n=yn[0])===null||n===void 0?void 0:n.value,onChange:Mn,dropdownStyle:_n,popupMatchSelectWidth:!1,getPopupContainer:function(Pn){return Pn.parentNode},options:yn}):null,(0,e.tZ)($,{key:"more"}),(0,e.tZ)(xt,{key:new Date().getTime()}),(0,e.tZ)(Zt,{key:"direction"}),(0,e.tZ)(lt,{key:"header-Extra"})];Dn<Re?le=ie?[]:[qe]:Dn<Ae&&(le=ie?[]:le);var nt=Hn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:Sn},M&&(0,e.tZ)($n.Z,{classNames:{root:f.popoverMenu},placement:"bottomRight",content:le,trigger:"click",open:Bn,arrow:{pointAtCenter:!0},onOpenChange:Tn},(0,e.tZ)(Xn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ut,null),(0,e.tZ)(ue.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Vn.Z,nt[0],(0,e.tZ)(te,tn()({},ce,{location:D}))),(0,e.tZ)(Vn.Z,tn()({},nt[1],{className:f.menuCol}),(0,e.tZ)("div",{className:f.menuRow},(0,e.tZ)("div",{className:f.searchBarContainer},(0,e.tZ)("div",{className:f.searchBar},(0,e.tZ)(me.ZP,null))),!M&&le))))},Dt=Mt,So=t(75927),Lt=t(46325),Et=t(84806),Ie=t(67034),Tt=function(n){var a=n.children,r=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(x.Helmet,null,(0,e.tZ)("title",null,r),(0,e.tZ)("meta",{property:"og:title",content:r}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)(Lt.Z,null),(0,e.tZ)(Et.Z,null),(0,e.tZ)("div",{className:"index-layout",style:{minHeight:"600px"}},a),(0,e.tZ)(Ie.default,null))},zt=Tt,Bt=t(32114),He=t(65323),Ne=t(73594),Pt=function(){var n=(0,x.useRouteMeta)(),a=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var s;i="".concat(n.frontmatter.subtitle||""," ").concat(((s=n.frontmatter)===null||s===void 0?void 0:s.title)||""," - Ant Design")}var u=n.frontmatter.description||"";return[i,u]},[n]),r=O()(a,2),l=r[0],d=r[1];return(0,e.tZ)(x.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),d&&(0,e.tZ)("meta",{name:"description",content:d}))},je=Pt,Ot=t(7936),Rt=t(5254),At=t(38209),It=t.n(At),Ht=t(84442),We,Xe,Fe,Ue=["scroll","resize"],Nt=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.boxShadowSecondary,l=n.antCls;return{affixTabs:a(We||(We=S()([`
      position: fixed;
      top: 0;
      inset-inline-end: 0;
      inset-inline-start: 0;
      z-index: 1001;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition:
        opacity `,`,
        transform `,`;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),r,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:a(Xe||(Xe=S()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Fe||(Fe=S()([`
      text-transform: capitalize;
    `])))}}),_e=32,jt=function(){var n=c.useRef(null),a=c.useRef([]),r=c.useState(!1),l=O()(r,2),d=l[0],i=l[1],s=c.useState(void 0),u=O()(s,2),m=u[0],v=u[1],M=Nt(),k=M.styles,Z=k.affixTabs,D=k.affixTabsFixed,L=k.span;function w(f){var B=document.getElementById(f);if(B){var nn=B.offsetTop-n.current.offsetHeight-_e;(0,Ht.Z)(nn)}}c.useEffect(function(){var f=document.querySelectorAll("h2[id]");a.current=Array.from(f).map(function(B){var nn=B.id;return nn}),i(!0)},[]),c.useEffect(function(){var f=decodeURIComponent((location.hash||"").slice(1));f&&w(f)},[d]);var P=c.useMemo(function(){function f(){for(var B=window,nn=B.scrollY,Tn=n.current.offsetHeight,Mn=a.current.length-1;Mn>=0;Mn-=1){var zn=a.current[Mn],_n=document.getElementById(zn),Bn=_n.offsetTop-Tn-_e;if(Bn<=nn){v(zn);return}}v(void 0)}return It()(f)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(Ue.forEach(function(f){return window.addEventListener(f,P)}),P(),function(){Ue.forEach(function(f){return window.removeEventListener(f,P)})})},[]),(0,e.tZ)("div",{className:H()(Z,m&&D),ref:n},(0,e.tZ)(Rt.Z,{activeKey:m,centered:!0,size:"large",onChange:w,items:a.current.map(function(f){return{key:f,label:(0,e.tZ)("span",{className:L},f.replace(/-/g," "))}})}))},Wt=jt,Ke,Ge,$e,Ve=40,se=1208,pe=24,Xt=function(){var n=(0,Ne.Z)();return(0,p.kc)(function(a){var r=a.token,l=a.css,d=r.antCls;return{resourcePage:l(Ke||(Ke=S()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),se),resourceContent:l(Ge||(Ge=S()([`
        padding: 0 `,`px;
        max-width: `,`px;
        margin: 0 auto;
        box-sizing: content-box;
        min-height: 100vh;

        @media only screen and (max-width: 767.99px) {
          & {
            article {
              padding: 0 `,`px;
            }
            `,`-col {
              padding-top: `,`px !important;
              padding-bottom: `,`px !important;
            }
          }
        }
      `])),Ve,se,pe,d,r.padding,r.padding),banner:l($e||($e=S()([`
        padding: 0 `,`px;
        overflow: hidden;
        `,`
        background-size: cover;

        h1 {
          box-sizing: content-box;
          max-width: `,`px;
          margin: 56px auto 16px;
        }

        section {
          max-width: `,`px;
          margin: 0 auto 56px;
          font-weight: 200;
          font-size: `,`px;
          line-height: 24px;
        }

        @media only screen and (max-width: 767.99px) {
          & {
            margin: 0 -`,`px;
            padding: 0 `,`px;
          }
        }
      `])),Ve,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",se,se,r.fontSizeLG,pe,pe)}})()},Ft=function(n){var a,r=n.children,l=Xt(),d=l.styles,i=(0,x.useRouteMeta)(),s=(0,Ne.Z)(),u=(0,e.tZ)(Bt.Z,null,(0,e.tZ)(je,null),(0,e.tZ)("div",{id:"resources-page",className:d.resourcePage},(0,e.tZ)(Wt,null),(0,e.tZ)("div",{className:d.banner},(0,e.tZ)(He.Z.Title,{style:{fontSize:30}},(a=i.frontmatter)===null||a===void 0?void 0:a.title,(0,e.tZ)(Ot.default,{title:(0,e.tZ)(x.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:d.resourceContent},r),(0,e.tZ)(Ie.default,null)));return s?u:(0,e.tZ)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}}},u)},Ut=Ft,_t=t(21623),Kt=t(41969),Gt=t(51077),$t=t(19453),Vt=t(46231),Jt=t(14478),Yt=function(n){var a=n.children,r=n.fallback,l=r===void 0?(0,e.tZ)(Vt.Z.Input,{active:!0,size:"small"}):r,d=n.delay,i=d===void 0?200:d;return(0,e.tZ)(Jt.df,{triggerOnce:!0,delay:i},function(s){var u=s.inView,m=s.ref;return(0,e.tZ)("div",{ref:m},(0,e.tZ)(c.Suspense,{fallback:l},u?a:(0,e.tZ)("span",null)))})},Yn=Yt,Qt=t(95561),qt=c.lazy(function(){return Promise.all([t.e(9061),t.e(2031)]).then(t.bind(t,32031))}),no=c.lazy(function(){return Promise.resolve().then(t.bind(t,95561))}),eo=c.lazy(function(){return t.e(7056).then(t.bind(t,37056))}),to=c.lazy(function(){return Promise.resolve().then(t.bind(t,67034))}),oo=c.lazy(function(){return t.e(270).then(t.bind(t,32433))}),ao=c.lazy(function(){return Promise.resolve().then(t.bind(t,7936))}),ro=c.lazy(function(){return t.e(1786).then(t.bind(t,91786))}),io=function(n){var a,r,l,d,i,s=n.children,u=(0,x.useRouteMeta)(),m=(0,sn.Z)(),v=m.pathname,M=m.hash,k=(0,cn.HP)(),Z=(0,c.useContext)(q.Z),D=Z.direction,L=(0,Qt.useStyle)(),w=L.styles,P=(0,Kt.Z)(!1),f=O()(P,2),B=f[0],nn=f[1],Tn=(0,c.useState)("tsx"),Mn=O()(Tn,2),zn=Mn[0],_n=Mn[1],Bn=(0,c.useMemo)(function(){var Hn;return((Hn=u.toc)===null||Hn===void 0?void 0:Hn.filter(function(mn){return mn._debug_demo}).map(function(mn){return mn.id}))||[]},[u]),Dn=Bn.includes(M.slice(1));(0,c.useLayoutEffect)(function(){nn(Dn)},[]);var ie=(0,c.useMemo)(function(){return{showDebug:B,setShowDebug:nn,codeType:zn,setCodeType:_n}},[B,zn,Bn]),Ln=D==="rtl",yn=((a=u.frontmatter)===null||a===void 0?void 0:a.sidebar)===!1;return(0,e.tZ)($t.Z.Provider,{value:ie},(0,e.tZ)(Vn.Z,{xxl:yn?24:20,xl:yn?24:19,lg:yn?24:18,md:yn?24:18,sm:24,xs:24},(0,e.tZ)(Yn,{fallback:null},(0,e.tZ)(no,{showDebug:B,debugDemos:Bn})),(0,e.tZ)("article",{className:H()(w.articleWrapper,{rtl:Ln})},(r=u.frontmatter)!==null&&r!==void 0&&r.title?(0,e.tZ)(ge.Z,{justify:"space-between"},(0,e.tZ)(He.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(_t.Z,null,(0,e.tZ)("span",null,(l=u.frontmatter)===null||l===void 0?void 0:l.title),(0,e.tZ)("span",null,(d=u.frontmatter)===null||d===void 0?void 0:d.subtitle),!v.startsWith("/components/overview")&&(0,e.tZ)(Yn,{fallback:null},(0,e.tZ)(ao,{title:(0,e.tZ)(x.FormattedMessage,{id:"app.content.edit-page"}),filename:u.frontmatter.filename}))))):null,(0,e.tZ)(Yn,{fallback:null},(0,e.tZ)(eo,null)),!u.frontmatter.__autoDescription&&u.frontmatter.description,u.frontmatter.category==="Components"&&String(u.frontmatter.showImport)!=="false"&&(0,e.tZ)(Gt.Z,{source:u.frontmatter.source,pkg:u.frontmatter.package||u.frontmatter.packageName||u.frontmatter.pkg,component:u.frontmatter.title,filename:u.frontmatter.filename,version:u.frontmatter.version||u.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"},className:"clearfix"},s),(0,e.tZ)("div",{style:{marginTop:80,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},(0,e.tZ)(Yn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(qt,tn()({},k,{filename:"".concat(k.originDocDir).concat(u.frontmatter.filename)}))),(0,e.tZ)(Yn,{fallback:null},(0,e.tZ)("div",{className:H()(w.bottomEditContent,{rtl:Ln})},(0,e.tZ)(ro,{time:(i=u.frontmatter)===null||i===void 0?void 0:i.lastUpdated}))))),(0,e.tZ)(Yn,{fallback:null},(0,e.tZ)(oo,{rtl:Ln})),(0,e.tZ)(to,null)))},lo=io,so=t(92828),co=t(76687),Je,Ye,uo=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.antCls,l=n.fontFamily,d=n.colorSplit,i=n.marginXXL,s=n.paddingXXS;return{asideContainer:a(Je||(Je=S()([`
      min-height: 100%;
      padding-bottom: `,`px !important;
      font-family: Avenir, `,`, sans-serif;
      padding: 0 `,`px;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: `,`px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: `,`px;
          margin-bottom: `,`px;
          font-size: `,`px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-inline: 36px 12px !important;
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-inline-start: `,`px;
            padding-inline-start: 60px;

            `,`-row-rtl & {
              padding-inline-end: 60px;
              padding-inline-start: `,`px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-inline-start: 80px !important;

            `,`-row-rtl & {
              padding-inline-end: 80px !important;
              padding-inline-start: `,`px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }
    `])),i,l,s,r,r,r,r,n.fontSize,r,r,n.margin,n.margin,n.fontSize,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,n.marginXXS,r,n.padding,r,r,r,n.padding,r,r),mainMenu:a(Ye||(Ye=S()([`
      z-index: 1;
      position: sticky;
      top: `,`px;
      width: 100%;
      max-height: calc(
        100vh - `,`px
      );
      overflow: hidden;
      scrollbar-width: thin;
      scrollbar-gutter: stable;

      &:hover {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),mo=function(){var n,a=(0,x.useSidebarData)(),r=(0,c.useContext)(q.Z),l=r.isMobile,d=r.theme,i=uo(),s=i.styles,u=(0,x.useRouteMeta)(),m=(0,co.Z)(),v=O()(m,2),M=v[0],k=v[1],Z=d.includes("dark"),D=(0,p.Fg)(),L=D.colorBgContainer,w=(0,e.tZ)(K.ZP,{theme:{components:{Menu:{itemBg:L,darkItemBg:L}}}},(0,e.tZ)(oe.Z,{items:M,inlineIndent:30,className:s.asideContainer,mode:"inline",theme:Z?"dark":"light",selectedKeys:[k],defaultOpenKeys:a==null?void 0:a.map(function(P){var f=P.title;return f}).filter(Boolean)}));return((n=u.frontmatter)===null||n===void 0?void 0:n.sidebar)===!1?null:l?(0,e.tZ)(so.Z,{key:"Mobile-menu"},w):(0,e.tZ)(Vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:s.mainMenu},(0,e.tZ)("section",{className:"main-menu-inner"},w))},po=mo,Qe,go=(0,p.kc)(function(o){var n=o.css,a=o.token;return{main:n(Qe||(Qe=S()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),fo=function(n){var a=n.children,r=go(),l=r.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(je,null),(0,e.tZ)(po,null),(0,e.tZ)(lo,null,a))},ho=fo,vo={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},xo=function(){var n=(0,x.useOutlet)(),a=(0,sn.Z)(),r=a.pathname,l=a.search,d=a.hash,i=(0,xn.default)(vo),s=O()(i,2),u=s[0],m=s[1],v=(0,c.useRef)(null),M=(0,c.useContext)(q.Z),k=M.direction,Z=(0,x.useSiteData)(),D=Z.loading,L=Z.themeConfig;(0,c.useLayoutEffect)(function(){m==="cn"?vn().locale("zh-cn"):vn().locale("en")},[]),(0,c.useEffect)(function(){var P=document.getElementById("nprogress-style");return v.current=setTimeout(function(){P==null||P.remove()},0),function(){return clearTimeout(v.current)}},[]),(0,c.useEffect)(function(){var P=d.replace("#","");if(P){var f;(f=document.getElementById(decodeURIComponent(P)))===null||f===void 0||f.scrollIntoView()}},[D,d]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+l)},[a]);var w=c.useMemo(function(){return["","/"].some(function(P){return P===r})||["/index"].some(function(P){return r.startsWith(P)})?(0,e.tZ)(zt,{title:u.title,desc:u.description},n):r.startsWith("/docs/resource")?(0,e.tZ)(Ut,null,n):r.startsWith("/theme-editor")?n:(0,e.tZ)(ho,null,n)},[r,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(x.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:m==="cn"?"zh-CN":m,"data-direction":k,className:H()({rtl:k==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:(L==null?void 0:L.logo)||"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:u.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:(L==null?void 0:L.logo)||"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(K.ZP,{direction:k,locale:m==="cn"?dn.Z:void 0},(0,e.tZ)(_,null),(0,e.tZ)(Dt,null),w))},bo=xo},95561:function(Nn,j,t){t.r(j),t.d(j,{useStyle:function(){return J}});var V=t(26068),O=t.n(V),an=t(53649),H=t.n(an),hn=t(75271),vn=t(96917),On=t(30517),c=t(82187),K=t.n(c),dn=t(91360),x=t(91011),xn=t(96378),sn,e,p,en,W,J=(0,On.kc)(function(F){var z=F.token,rn=F.css,pn=z.antCls;return{anchorToc:rn(sn||(sn=H()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),pn,pn,z.fontSizeSM),tocWrapper:rn(e||(e=H()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 148px;
      padding: 0;
      border-radius: `,`px;
      box-sizing: border-box;
      margin-inline-end: calc(8px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: `,`;
        &:hover {
          color: `,`;
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(
          100vh - `,`px
        ) !important;
        margin: auto;
        overflow: auto;
        padding: `,`px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),z.headerHeight+z.contentMarginTop-4,z.borderRadius,z.purple6,z.purple5,z.headerHeight+z.contentMarginTop+24,z.paddingXXS,z.screenLG),tocBannerWrapper:rn(p||(p=H()([`
      top: `,`px;
    `])),z.headerHeight+z.contentMarginTop+z.bannerHeight-4),articleWrapper:rn(en||(en=H()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),z.screenLG,z.paddingLG*2),bottomEditContent:rn(W||(W=H()([`
      min-width: 200px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    `])))}}),X=function(z){var rn=z.showDebug,pn=z.debugDemos,En=pn===void 0?[]:pn,Qn=(0,hn.useContext)(x.Z),de=Qn.bannerVisible,qn=J(),jn=qn.styles,bn=(0,On.Fg)(),A=(0,dn.useRouteMeta)(),G=(0,dn.useTabMeta)(),kn=function(I){var Y;return{href:"#".concat(I.id),title:I.title,key:I.id,children:(Y=I.children)===null||Y===void 0?void 0:Y.filter(function(_){return rn||!En.includes(_.id)}).map(function(_){return{key:_.id,href:"#".concat(_.id),title:(0,xn.tZ)("span",{className:K()({"toc-debug":En.includes(_.id)})},_==null?void 0:_.title)}})}},Zn=hn.useMemo(function(){return((G==null?void 0:G.toc)||A.toc).reduce(function(U,I){if(I.depth===2)U.push(O()({},I));else if(I.depth===3){var Y=U[U.length-1];Y&&(Y.children=Y.children||[],Y.children.push(O()({},I)))}return U},[])},[G==null?void 0:G.toc,A.toc]);return A.frontmatter.toc?(0,xn.tZ)("section",{className:K()(jn.tocWrapper,de&&jn.tocBannerWrapper)},(0,xn.tZ)(vn.Z,{affix:!1,className:jn.anchorToc,targetOffset:bn.anchorTop,showInkInFixed:!0,items:Zn.map(kn)})):null};j.default=X},67034:function(Nn,j,t){t.r(j);var V=t(75271),O=t(91574),an=t(96378),H=t(33230),hn=t(32699),vn=t.n(hn),On=t(82163),c=t(16932),K=t(68714),dn=t(91011),x=function(){var e=(0,c.Z)(),p=e.token,en=(0,K.Z)("footerLinks"),W=(0,V.useContext)(dn.Z),J=W.isMobile,X=new O.C((0,On.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,an.iv)("background:",X,";",""),footer:(0,an.iv)("background:",X,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",J?60:0,"px;:last-child{margin-bottom:",J?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(en)&&en.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},xn=function(){var e=x(),p=(0,K.Z)("footer"),en=(0,K.Z)("footerLinks"),W=(0,V.useCallback)(function(J){return Array.isArray(J)&&J.forEach(function(X){var F=X.icon;X.icon&&(delete X.icon,X.icon=(0,an.tZ)("img",{src:String(F),alt:"",style:{maxWidth:"100%"}})),Array.isArray(X.items)&&W(X.items)}),J},[]);return p?(0,an.tZ)(H.Z,{columns:W((0,hn.cloneDeep)(en)),css:e.footer,bottom:(0,an.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};j.default=xn}}]);
