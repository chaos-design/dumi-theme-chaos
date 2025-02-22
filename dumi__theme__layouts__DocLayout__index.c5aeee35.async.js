"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{93617:function(In,X,t){t.d(X,{Z:function(){return Q.Z}});var Q=t(5829)},29208:function(In,X,t){t.d(X,{Z:function(){return Q.Z}});var Q=t(68885)},2144:function(In,X,t){t.r(X);var Q=t(53649),R=t.n(Q),sn=t(75271),j=t(23424),xn=t(40931),bn=t(47998),Pn=t(17003),c=t(96378),$,un=function(e,p){var _=p.branch,I=_===void 0?"main":_,F=p.blob,B=F===void 0?!1:F;return"https://github.com/".concat(e,"/").concat(B?"blob":"edit","/").concat(I)},x=(0,bn.kc)(function(mn){var e=mn.token,p=mn.css,_=e.colorIcon,I=e.colorText,F=e.iconCls;return{editButton:p($||($=R()([`
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
    `])),e.marginXS,F,_,e.fontSizeLG,e.motionDurationSlow,I)}}),yn=function(e){var p=e.title,_=e.filename,I=x(),F=I.styles,B=(0,Pn.HP)(),U=B.owner,z=B.repo,on=B.branch,pn=B.docDir,Sn=B.isGithub,Hn=B.github,Nn=B.blob;return(0,c.tZ)(xn.Z,{title:p},(0,c.tZ)("a",{className:F.editButton,href:Sn?"".concat(un("".concat(U,"/").concat(z),{branch:on,blob:Nn})).concat(pn).concat(_):Nn?"".concat(Hn,"/blob/").concat(on).concat(pn).concat(_):"",target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(j.Z,null)))};X.default=yn},77737:function(In,X,t){t.d(X,{Z:function(){return sn},f:function(){return R}});var Q=t(75271),R=Q.createContext(!1);function sn(){return Q.useContext(R)}},69543:function(In,X,t){t.d(X,{Z:function(){return jn}});var Q=t(48305),R=t.n(Q),sn=t(15558),j=t.n(sn),xn=t(31759),bn=t.n(xn),Pn=t(82092),c=t(53649),$=t.n(c),un=t(75271),x=t(15999),yn=t(47998),mn=t(82187),e=t(6995),p=t(55137),_=t(46834),I=t(48130),F=JSON.parse('{"i8":"0.0.2-alpha.1"}'),B=t(17003),U=t(96378),z,on,pn;function Sn(wn){return wn&&/^\d+\.\d+\.\d+$/.test(wn)}var Hn=(0,yn.kc)(function(wn){var H=wn.css,V=wn.token;return{link:H(z||(z=$()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:H(on||(on=$()([`
    margin-inline-end: 0;
  `]))),subtitle:H(pn||(pn=$()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),V.fontSizeSM)}}),Nn=function(H){var V,Cn,Mn=Hn(),G=Mn.styles,N=H.before,q=H.after,K=H.link,Wn=H.title,an=H.subtitle,nn=H.search,k=H.tag,On=H.className,Rn=(V=typeof k=="string"?k:k==null?void 0:k.title)!==null&&V!==void 0?V:"",hn=(Cn=typeof k=="string"?k:k==null?void 0:k.color)!==null&&Cn!==void 0?Cn:"";return!N&&!q?___EmotionJSX(Link,{to:"".concat(K).concat(nn),className:classnames(On,_defineProperty({},G.link,Rn))},___EmotionJSX(Space,null,___EmotionJSX("span",null,Wn),an&&___EmotionJSX("span",{className:G.subtitle},an)),Rn&&___EmotionJSX(Tag,{bordered:!1,className:classnames(G.tag),color:Sn(hn)||hn==="New"?"success":"processing"},Rn)):___EmotionJSX(Link,{to:"".concat(K).concat(nn),className:On},N,Wn,an&&___EmotionJSX("span",{className:G.subtitle},an),q)},ne=function(){var H,V,Cn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Mn=(0,_.Z)(),G=Mn.pathname,N=Mn.search,q=(0,B.ZP)(),K=q.sidebarGroupModePath,Wn=q.sidebarEnhance,an=Wn===void 0?{}:Wn,nn=Cn.before,k=Cn.after,On=(0,e.useFullSidebarData)(),Rn=(0,I.O1)(On),hn=(0,e.useLocale)(),Z="/".concat((H=G.split("/"))===null||H===void 0?void 0:H[1]),Xn=Rn[Z],$n=(0,un.useMemo)(function(){return Object.values(On).reduce(function(T,en){var vn=en.map(function(rn){return rn.children}).flat();return vn.forEach(function(rn){T[rn.link]=rn.title}),T},{})},[On]),Vn=(0,un.useMemo)(function(){var T=Object.keys(an).find(function(en){return G.startsWith(en)});if(T)return an[T]},[G,an]),ue=(0,un.useMemo)(function(){var T=function(A){return A&&bn()(A)==="object"&&"link"in A&&"title"in A},en=function(A){return A&&bn()(A)==="object"&&A.type==="group"},vn=function(A){return A&&bn()(A)==="object"&&"children"in A};function rn(E){return typeof E=="string"?{key:E,label:(0,U.tZ)(p.Z,{to:"".concat(E).concat(N)},nn,$n[E],k)}:en(E)?{type:"group",label:E.title,key:E.title,children:E.children.map(rn)}:vn(E)?{key:E.title,label:(0,U.tZ)("span",{style:{paddingLeft:10}},E.title),children:E.children.map(rn)}:T(E)?{label:(0,U.tZ)(p.Z,{target:E.target,to:E.link},E.title),key:E.link}:null}if(Vn)return Vn.map(rn)},[k,nn,Vn,$n,N]),Jn=(0,un.useMemo)(function(){var T,en,vn=new RegExp("".concat((T=hn==null?void 0:hn.suffix)!==null&&T!==void 0?T:"","$"),"g"),rn=j()(Xn!=null?Xn:[]),E=function(y){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return y&&ee&&(0,U.tZ)(x.Z,{color:typeof y=="string"?"processing":y.color,bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2}},(typeof y=="string"?y:y.title).replace("VERSION","v".concat(F.i8)))};return(en=rn==null?void 0:rn.reduce(function(A,y){if(y!=null&&y.title){var ee=K===!0?!0:(K!=null?K:[]).filter(function(g){return G.startsWith(g)}).length>0;if(ee){var Fn;A.push({type:"group",label:y==null?void 0:y.title,order:y==null?void 0:y.order,key:y==null?void 0:y.title,children:(Fn=y.children)===null||Fn===void 0?void 0:Fn.map(function(g){var v,W;return{label:(0,U.tZ)(p.Z,{to:"".concat(g.link).concat(N),style:{display:"flex",alignItems:"center"}},nn,(0,U.tZ)("span",{key:"english"},(0,I.A0)(g==null?void 0:g.title)),(0,U.tZ)("span",{className:"chinese",key:"chinese"},(0,I.A0)((v=g.frontmatter)===null||v===void 0?void 0:v.subtitle)),E((W=g.frontmatter)===null||W===void 0?void 0:W.tag,!nn&&!k),k),key:g.link.replace(vn,"")}})})}else{var te,oe,Un={},An=y.children.reduce(function(g,v){var W,cn,gn=g,Y=v==null||(W=v.frontmatter)===null||W===void 0?void 0:W.type,En=typeof Y=="string"?Y:(cn=Y==null?void 0:Y.title)!==null&&cn!==void 0?cn:"default";if(gn[En]||(gn[En]=[]),Un[En])Y!=null&&Y.order&&(Un[En].order=Y.order);else{var ie;Un[En]={title:En,order:(ie=Y==null?void 0:Y.order)!==null&&ie!==void 0?ie:-1}}return gn[En].push(v),gn},{}),ae=Object.keys(An).sort(function(g,v){return Un[g].order-Un[v].order}).reduce(function(g,v){var W=g;return W[v]=An[v],W},{}),J=[];J.push.apply(J,j()((te=(oe=ae.default)===null||oe===void 0?void 0:oe.map(function(g){var v;return{label:(0,U.tZ)(p.Z,{to:"".concat(g.link).concat(N),style:{display:"flex",alignItems:"center"}},nn,(0,I.A0)(g==null?void 0:g.title),E((v=g.frontmatter)===null||v===void 0?void 0:v.tag,!nn&&!k),k),key:g.link.replace(vn,"")}}))!==null&&te!==void 0?te:[])),Object.entries(ae).forEach(function(g){var v=R()(g,2),W=v[0],cn=v[1];W!=="default"&&J.push({type:"group",label:W,key:W,children:cn==null?void 0:cn.map(function(gn){var Y;return{label:(0,U.tZ)(p.Z,{to:"".concat(gn.link).concat(N),style:{display:"flex",alignItems:"center"}},nn,(0,I.A0)(gn==null?void 0:gn.title),E((Y=gn.frontmatter)===null||Y===void 0?void 0:Y.tag,!nn&&!k),k),key:gn.link.replace(vn,"")}})})}),A.push({label:y==null?void 0:y.title,key:y==null?void 0:y.title,order:y==null?void 0:y.order,children:J})}}else{var re=y.children||[];re.every(function(g){var v;return g==null||(v=g.frontmatter)===null||v===void 0?void 0:v.date})&&re.sort(function(g,v){var W,cn;return(g==null||(W=g.frontmatter)===null||W===void 0?void 0:W.date)>(v==null||(cn=v.frontmatter)===null||cn===void 0?void 0:cn.date)?-1:1}),A.push.apply(A,j()(re.map(function(g){var v;return{order:g==null?void 0:g.order,label:(0,U.tZ)(p.Z,{to:"".concat(g.link).concat(N),style:{display:"flex",alignItems:"center"}},nn,(0,I.A0)(g==null?void 0:g.title),E((v=g.frontmatter)===null||v===void 0?void 0:v.tag,!nn&&!k),k),key:g.link.replace(vn,"")}})))}return A.sort(function(g,v){return(g==null?void 0:g.order)<(v==null?void 0:v.order)?-1:1}),A},[]))!==null&&en!==void 0?en:[]},[Xn,K,G,N,nn,k,hn]),me=G.replace(new RegExp("".concat((V=hn==null?void 0:hn.suffix)!==null&&V!==void 0?V:"","$"),"g"),"");return[ue||Jn,me]},jn=ne},18169:function(In,X,t){t.r(X),t.d(X,{default:function(){return yo}});var Q=t(48305),R=t.n(Q),sn=t(82187),j=t.n(sn),xn=t(16483),bn=t.n(xn),Pn=t(81414),c=t(75271),$=t(79142),un=t(77945),x=t(6995),yn=t(13390),mn=t(46834),e=t(96378),p=t(47998),_={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},I=function(){var n=(0,p.Fg)(),a=function l(d){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(d,"-").concat(i,` {
  background: `).concat(n["".concat(d,"-").concat(i)],`;
}
`).concat(l(d,i+1),`
    `):""},r=function l(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return d<=13?`
.palette-gray-`.concat(d,` {
  background: `).concat(_[d],`;
}
`).concat(l(d+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",a("blue")," ",a("purple")," ",a("cyan")," ",a("green")," ",a("magenta")," ",a("red")," ",a("volcano")," ",a("orange")," ",a("gold")," ",a("yellow")," ",a("lime")," ",a("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},F=I,B=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},U=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},z=t(21793),on=function(){return{"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}},pn=function(){var o=(0,p.Fg)(),n=o.anchorTop;return c.useInsertionEffect(function(){(0,z.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},Sn=t(84432),Hn=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",a,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",a,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",a,"-row>div,.code-box-demo ",a,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",a,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new Sn.FastColor(r).setA(.75).toHexString(),";}}",a,"-row .demo-col,.code-box-demo ",a,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",a,"-row .demo-col-1{background:",new Sn.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-2,.code-box-demo ",a,"-row .demo-col-2{background:",new Sn.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-3,.code-box-demo ",a,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",a,"-row .demo-col-4,.code-box-demo ",a,"-row .demo-col-4{background:",new Sn.FastColor(r).setA(.6).toHexString(),";}",a,"-row .demo-col-5,.code-box-demo ",a,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",a,"-row>div{margin-top:0;margin-bottom:0;}}","")})},Nn=Hn,ne=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},jn=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",r,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",a,"-row",a,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",a,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",a,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",a,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",r,"{color:",n.colorTextBase,";font-weight:bold;}}}",a,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},wn=jn,H=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},V=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},Cn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".clearfix{",on(),";}.preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},Mn="dumi-default-",G=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",Mn,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",Mn,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",Mn,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},N=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},q=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(U,null),(0,e.tZ)(pn,null),(0,e.tZ)(Nn,null),(0,e.tZ)(ne,null),(0,e.tZ)(wn,null),(0,e.tZ)(H,null),(0,e.tZ)(V,null),(0,e.tZ)(Cn,null),(0,e.tZ)(N,null),(0,e.tZ)(F,null),(0,e.tZ)(B,null),(0,e.tZ)(G,null))},K=q,Wn=t(68585),an=t.n(Wn),nn=t(26068),k=t.n(nn),On=t(82092),Rn=t.n(On),hn=t(53649),Z=t.n(hn),Xn=t(64733),$n=t(46346),Vn=t(80526),ue=t(57207),Jn=t(29320),me=t(65156),T=t(48130),en=t(67286),vn=t(55137),rn,E,A,y,ee=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.headerHeight,l=n.colorTextHeading,d=n.fontFamily,i=n.mobileMaxWidth;return{logo:a(rn||(rn=Z()([`
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
    `])),r,l,d,r,n.marginSM,l,i),title:a(E||(E=Z()([`
      line-height: 40px;
    `]))),logoImage:a(A||(A=Z()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `]))),tour:a(y||(y=Z()([`
      .ant-popover-title,
      .ant-popover-inner-content {
        color: #fff;
      }
    `])))}}),Fn="chaos.logo.tour.dismiss",te=function(n){var a,r=n.isZhCN,l=c.useState(!0),d=R()(l,2),i=d[0],s=d[1],u=(0,x.useSiteData)(),m=u.themeConfig,h=(0,x.useLocation)(),w=h.search,b=ee(),M=b.styles,D=(m==null?void 0:m.logo)||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,T.Fy)()&&(localStorage.getItem(Fn)?s(!1):s(!0))},[i]),(0,e.tZ)("h1",null,(0,e.tZ)(vn.Z,{to:T.J1("/",r,w),className:M.logo},(0,e.tZ)(Vn.Z,{title:"\u{1F389}\u{1F389}\u{1F389}",content:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"bottomRight",classNames:{root:M.tour},color:"#1677ff",open:i,onOpenChange:function(C){C?(s(!1),(0,T.Fy)()&&localStorage.setItem(Fn,"1")):s(C)}},(0,e.tZ)("img",{id:"chaos-logo",className:M.logoImage,src:D,draggable:!1,alt:"logo",onMouseEnter:function(){s(!1),(0,T.Fy)()&&localStorage.setItem(Fn,"1")}})),m!=null&&m.name?(0,e.tZ)("span",{className:M.title,dangerouslySetInnerHTML:{__html:(a=m==null?void 0:m.name)!==null&&a!==void 0?a:""}}):null))},oe=te,Un=t(15558),An=t.n(Un),ae=t(53021),J=t(17003),re=t(55619),g=t(32515),v=t(65083),W=t(84651),cn=function(n){return(n!=null?n:[]).map(function(a,r){return{label:(0,e.tZ)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.text),key:r}})},gn=function(){var n=(0,W.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(g.Z,{menu:{items:cn(n)},placement:"bottomRight"},(0,e.tZ)(v.ZP,{size:"small"},(0,e.tZ)(x.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(re.Z,null))):null},Y=gn,En,ie=(0,p.kc)(function(o){var n=o.token,a=n.antCls,r=n.iconCls,l=n.fontFamily,d=n.fontSize,i=n.headerHeight,s=n.colorPrimary;return{nav:(0,p.iv)(En||(En=Z()([`
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
    `])),d,l,a,a,a,40+12*2,i,n.paddingSM,n.paddingSM,i,a,r,a,s,a,a)}}),tt=function(n){var a,r,l=n.isZhCN,d=n.isMobile,i=n.responsive,s=n.directionText,u=(0,J.HP)(),m=u.github,h=(0,x.useLocation)(),w=h.pathname,b=h.search,M=(0,x.useSiteData)(),D=M.locales,L=(0,x.useNavData)(),C=(0,x.useLocale)(),O=(0,W.Z)("moreLinks"),f=(0,x.useFullSidebarData)(),P=((a=f["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],tn=ie(),Ln=tn.styles,Dn=d?"inline":"horizontal",Tn=w.split("/").filter(Boolean).slice(0,-1).join("/"),_n="/".concat(Tn||"home"),zn=function ln(fn){return fn.map(function(S){var dn,le=((dn=S.link)!==null&&dn!==void 0?dn:"").split("/").slice(0,2).join("/");return{label:S.children?S.title:(0,T.YW)(S.link)?(0,e.tZ)("a",{href:"".concat(S.link).concat(b),target:"_blank",rel:"noreferrer"},S.title):(0,e.tZ)(vn.Z,{to:"".concat(S.link).concat(b)},S.title),key:(0,T.YW)(S.link)||S!=null&&S.original?S.link:le,children:S.children?ln(S.children):null}})},Gn=zn(L),ce=c.useCallback(function(){if(D.length<2)return null;if(D.length===2){var ln=D.filter(function(S){return S.id!==(C==null?void 0:C.id)})[0],fn=(0,T.cY)({pathname:w,current:C,target:ln});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:fn},ln.name),key:ln.id}}return{label:(0,e.tZ)("span",null,C.name),key:"multi-lang",children:D.filter(function(S){return S.id!==C.id}).map(function(S){var dn=(0,T.cY)({pathname:w,current:C,target:S});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:dn},S.name),key:S.id}})}},[C,D]),kn=[],Kn=[m?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:m,target:"_blank"},"GitHub"),key:"github"}:null].concat(An()(cn(O)||[]));d?kn=Kn:i==="crowded"&&(kn=[{label:(0,e.tZ)(Xn.Z,null),key:"additional",children:An()(Kn)}]);var qn=[].concat(An()(Gn!=null?Gn:[]),[P.length?{label:(0,e.tZ)(vn.Z,{to:T.J1(P.sort(function(ln,fn){var S,dn;return((S=ln.frontmatter)===null||S===void 0?void 0:S.date)>((dn=fn.frontmatter)===null||dn===void 0?void 0:dn.date)?-1:1})[0].link,l,b)},C==null?void 0:C.blog),key:"docs/blog"}:null],An()((r=kn)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,e.tZ)(ae.Z,{mode:Dn,selectedKeys:[_n],className:Ln.nav,disabledOverflow:!0,items:qn})},ot=tt,ge=t(96055),fe=t(33971),at=t(17898),rt="1.2em",it=function(){var n=(0,fe.Z)(),a=n.token,r=a.controlHeight,l=a.motionDurationMid;return{extra:(0,e.iv)(".dumi-default-icon+.dumi-default-icon{margin-inline-start:12px;}.dumi-default-icon{font-size:16px;}.dumi-default-icon>svg{height:",rt,";}","")}},lt=function(){var n=(0,J.ZP)(),a=n.socialLinks,r=(0,J.HP)(),l=r.github,d=it(),i=(0,c.useMemo)(function(){return[l?{icon:"github",link:l}:null].concat(An()(a?Object.keys(a).slice(0,l?4:5).map(function(s){return{icon:s,link:a[s]}}):[])).filter(Boolean)},[a]);return i.length?(0,e.tZ)(ge.Z,{gap:4,align:"center",css:d.extra},i.map(function(s){return(0,e.tZ)(at.Z,{icon:s.icon,link:s.link||"",key:s.link})})):null},dt=lt,st=t(70699),he=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),d=parseInt(n.slice(5,7),16);r/=255,l/=255,d/=255;var i=Math.max(r,l,d),s=Math.min(r,l,d),u,m,h=(i+s)/2;if(i===s)u=m=0;else{var w=i-s;switch(m=h>.5?w/(2-i-s):w/(i+s),i){case r:u=(l-d)/w+(l<d?6:0);break;case l:u=(d-r)/w+2;break;case d:u=(r-l)/w+4;break}u/=6}return m=m*100,h=h*100-a,"hsl(".concat(Math.round(u*360),", ").concat(Math.round(m),"%, ").concat(Math.round(h),"%)")},ct=function(n){var a=n.backgroundColor,r=a===void 0?"#e8d7ff":a,l=n.textColor,d=l===void 0?"#091E42":l,i=n.align,s=i===void 0?"center":i,u=(0,fe.Z)(),m=u.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",m.fontSize,"px;@media only screen and (max-width: ",m.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",he(r,10),";--site-announcement-bar-stripe-color2:",he(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,s,";& .ant-alert-message{color:",d,";}& .ant-alert-description{color:",d,";}","")}},ve="chaos.announcement.dismiss",ut=function(){var n=(0,c.useState)(!0),a=R()(n,2),r=a[0],l=a[1],d=(0,J.ZP)()||{},i=d.announcementBar,s=(0,en.A)(),u=s.updateSiteConfig,m=ct(i||{});(0,c.useEffect)(function(){i!=null&&i.id?!(0,T.Fy)()||localStorage.getItem(ve)===i.id?l(!0):l(!1):l(!0)},[i]),(0,c.useEffect)(function(){u({bannerVisible:!r})},[r]);var h=(0,c.useCallback)(function(){i!=null&&i.id&&(0,T.Fy)()&&localStorage.setItem(ve,i.id),l(!0)},[]);return r?null:(0,e.tZ)($.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(st.Z,an()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[m.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var b;if((b=window)!==null&&b!==void 0&&b.gtag){var M,D;(M=(D=window).gtag)===null||M===void 0||M.call(D,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:h,css:i!=null&&i.backgroundColor?[m.container]:[]}))))},mt=ut,pt=t(40931),xe,be,ye,Se,we,Yn="1.2em",gt=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.colorText,l=n.colorBorder,d=n.colorBgContainer,i=n.colorBgTextHover,s=n.borderRadius,u=n.controlHeight,m=n.motionDurationMid;return{btn:a(xe||(xe=Z()([`
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
    `])),r,l,u,u,s,m,m,i,Yn,Yn,Yn),innerDiv:a(be||(be=Z()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Yn,Yn),labelStyle:a(ye||(ye=Z()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Yn,r,r),label1Style:a(Se||(Se=Z()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,d),label2Style:a(we||(we=Z()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),ft=function(n){var a=n.label1,r=n.label2,l=n.tooltip1,d=n.tooltip2,i=n.value,s=n.pure,u=n.onClick,m=gt(),h=m.styles,w=h.btn,b=h.innerDiv,M=h.labelStyle,D=h.label1Style,L=h.label2Style,C=(0,e.tZ)("button",{type:"button",onClick:u,className:w,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},s&&(i===1?a:r),!s&&(0,e.tZ)("div",{className:b},(0,e.tZ)("span",{className:j()(M,i===1?D:L)},a),(0,e.tZ)("span",{className:j()(M,i===1?L:D)},r))));return l||d?(0,e.tZ)(pt.Z,{title:i===1?l:d},C):C},ke=ft,ht=$n.default.Option,vt="chaos.locale",xt=function(){var n=(0,x.useSearchParams)(),a=R()(n,1),r=a[0],l=(0,J.ZP)(),d=l.localesEnhance,i=(0,x.useSiteData)(),s=i.locales,u=(0,x.useIntl)(),m=u.locale,h=(0,x.useLocale)(),w=(0,x.useLocation)(),b=w.pathname,M=(0,c.useCallback)(function(f){var P=(0,T.cY)({pathname:b,current:h,target:s.find(function(tn){var Ln=tn.id;return Ln===f})});T.Fy()&&localStorage.setItem(vt,T.KE(b)?"en-US":"zh-CN"),P.startsWith("/-")?P="/index".concat(P.substring(1)):P.endsWith("/index")&&(P=P.replace("/index","/")),x.history.push({pathname:P,search:r.toString()})},[b,h,s,r]),D=(0,c.useCallback)(function(){M(s.filter(function(f){return f.id!==m})[0].id)},[m,M,s]),L;if(s.length>2||!d&&s.length>2){var C=s.map(function(f){return(0,e.tZ)(ht,{value:f.id,key:f.id},f.name)});L=L=(0,e.tZ)($n.default,{key:"lang",className:"version",size:"small",defaultValue:m,onChange:M,popupMatchSelectWidth:!1,getPopupContainer:function(P){return P.parentNode}},C)}else if(s.length===2&&Array.isArray(d)&&d.length>1){var O=s[0].id===m?1:2;L=(0,e.tZ)(ke,{key:"lang",onClick:D,value:O,label1:d[0].switchPrefix,label2:d[1].switchPrefix,tooltip1:"".concat(s[0].name," / ").concat(s[1].name),tooltip2:"".concat(s[1].name," / ").concat(s[0].name)})}return L},bt=xt,yt=t(25108),St=function(n){var a=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},wt=c.forwardRef(function(o,n){return(0,e.tZ)(yt.Z,an()({ref:n,component:function(){return(0,e.tZ)(St,{direction:o.direction})}},o))}),Ze=wt,Ce,kt=(0,p.kc)(function(o){var n=o.token,a=o.css;return{dataDirectionIcon:a(Ce||(Ce=Z()([`
      width: 20px;
    `])))}}),Zt=function(){var n=(0,c.useContext)(en.Z),a=n.direction,r=n.updateSiteConfig,l=kt(),d=l.styles,i=(0,J.HE)(),s=i.rtl,u=s===void 0?!0:s;if(!u)return null;var m=function(){r({direction:a!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(ke,{key:"direction",onClick:m,value:a==="rtl"?2:1,label1:(0,e.tZ)(Ze,{className:d.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(Ze,{className:d.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},Ct=Zt,Me,Ee,De,Le,Te,ze,Be,Pe,Oe,Re=1120,Ae=1200,Mt=(0,p.kc)(function(o){var n=o.token,a=o.css,r="#ced4d9";return{header:a(Me||(Me=Z()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,r,n.colorPrimary,r,r,n.borderRadiusSM,n.paddingSM),searchBarContainer:a(Ee||(Ee=Z()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:a(De||(De=Z()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuCol:a(Le||(Le=Z()([`
      display: flex;
      align-items: center;
    `]))),menuRow:a(Te||(Te=Z()([`
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
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(ze||(ze=Z()([`
      width: 20px;
    `]))),popoverMenu:Rn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Be||(Be=Z()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Pe||(Pe=Z()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(Oe||(Oe=Z()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Et=function(){var n,a=(0,x.useSiteData)(),r=a.pkg,l=(0,J.ZP)(),d=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),i=R()(d,2),s=i[0],u=i[1],m=(0,c.useContext)(en.Z),h=m.direction,w=m.isMobile,b=m.updateSiteConfig,M=(0,c.useRef)(null),D=(0,x.useLocation)(),L=D.pathname,C=D.search,O=Mt(),f=O.styles,P=(0,c.useCallback)(function(){u(function(Zn){return k()(k()({},Zn),{},{menuVisible:!1})})},[]),tn=(0,c.useCallback)(function(){u(function(Zn){var Bn;return k()(k()({},Zn),{},{windowWidth:(Bn=window)===null||Bn===void 0?void 0:Bn.innerWidth})})},[]),Ln=(0,c.useCallback)(function(Zn){u(function(Bn){return k()(k()({},Bn),{},{menuVisible:Zn})})},[]);(0,c.useEffect)(function(){P()},[D]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(tn(),window.addEventListener("resize",tn),function(){window.removeEventListener("resize",tn),M.current&&clearTimeout(M.current)})},[]);var Dn=(0,c.useCallback)(function(Zn){if(typeof window!="undefined"){var Bn=window.location.href,wo=new URL(Bn.replace(window.location.origin,Zn));window.location.href=wo.href.replace(/\/$/,"")}},[]),Tn=(0,c.useMemo)(function(){return h!=="rtl"?"RTL":"LTR"},[h]),_n=(0,c.useMemo)(function(){return h==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[h]),zn=(0,J.HE)(),Gn=zn.docVersions,ce=s.menuVisible,kn=s.windowWidth,Kn=s.searching,qn=k()(k()({},r.version?Rn()({},r.version,r.version):{}),l==null?void 0:l.docVersions),ln=Object.keys(qn).filter(Boolean).map(function(Zn){return{value:qn[Zn],label:Zn}}),fn=["","index","index-cn"].includes(L),S=T.KE(L),dn=h==="rtl",le=null;kn<Re?le="crowded":kn<Ae&&(le="narrow");var So=j()(f.header,"clearfix",{"home-header":fn}),qe={isZhCN:S,isRTL:dn},nt=(0,e.tZ)(ot,an()({key:"nav"},qe,{responsive:le,isMobile:w,directionText:Tn})),de=[nt,Gn&&ln.length>0?(0,e.tZ)($n.default,{key:"version",size:"small",className:f.versionSelect,defaultValue:(n=ln[0])===null||n===void 0?void 0:n.value,onChange:Dn,dropdownStyle:_n,popupMatchSelectWidth:!1,getPopupContainer:function(Bn){return Bn.parentNode},options:ln}):null,(0,e.tZ)(Y,{key:"more"}),(0,e.tZ)(bt,{key:new Date().getTime()}),(0,e.tZ)(Ct,{key:"direction"}),(0,e.tZ)(dt,{key:"header-Extra"})];kn<Re?de=Kn?[]:[nt]:kn<Ae&&(de=Kn?[]:de);var et=fn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:So},w&&(0,e.tZ)(Vn.Z,{classNames:{root:f.popoverMenu},placement:"bottomRight",content:de,trigger:"click",open:ce,arrow:{pointAtCenter:!0},onOpenChange:Ln},(0,e.tZ)(Xn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(mt,null),(0,e.tZ)(ue.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Jn.Z,et[0],(0,e.tZ)(oe,an()({},qe,{location:D}))),(0,e.tZ)(Jn.Z,an()({},et[1],{className:f.menuCol}),(0,e.tZ)("div",{className:f.menuRow},(0,e.tZ)("div",{className:f.searchBarContainer},(0,e.tZ)("div",{className:f.searchBar},(0,e.tZ)(me.ZP,null))),!w&&de))))},Dt=Et,ko=t(76125),Lt=t(12840),Tt=t(59330),Ie=t(13371),zt=function(n){var a=n.children,r=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(x.Helmet,null,(0,e.tZ)("title",null,r),(0,e.tZ)("meta",{property:"og:title",content:r}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)(Lt.Z,null),(0,e.tZ)(Tt.Z,null),(0,e.tZ)("div",{className:"index-layout",style:{minHeight:"600px"}},a),(0,e.tZ)(Ie.default,null))},Bt=zt,Pt=t(69093),He=t(53288),Ne=t(77737),Ot=function(){var n=(0,x.useRouteMeta)(),a=(0,J.ZP)(),r=a.name,l=c.useMemo(function(){var u;if(!n.frontmatter.subtitle&&!n.frontmatter.title)u="404 Not Found - ".concat(r||"");else{var m;u="".concat(n.frontmatter.subtitle||""," ").concat(((m=n.frontmatter)===null||m===void 0?void 0:m.title)||""," - ").concat(r||"")}var h=n.frontmatter.description||"";return[u,h]},[n]),d=R()(l,2),i=d[0],s=d[1];return(0,e.tZ)(x.Helmet,null,(0,e.tZ)("title",null,i),(0,e.tZ)("meta",{property:"og:title",content:i}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},je=Ot,Rt=t(2144),At=t(2973),It=t(38209),Ht=t.n(It),Nt=t(8357),We,Xe,Fe,Ue=["scroll","resize"],jt=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.boxShadowSecondary,l=n.antCls;return{affixTabs:a(We||(We=Z()([`
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
    `])),r,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:a(Xe||(Xe=Z()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Fe||(Fe=Z()([`
      text-transform: capitalize;
    `])))}}),_e=32,Wt=function(){var n=c.useRef(null),a=c.useRef([]),r=c.useState(!1),l=R()(r,2),d=l[0],i=l[1],s=c.useState(void 0),u=R()(s,2),m=u[0],h=u[1],w=jt(),b=w.styles,M=b.affixTabs,D=b.affixTabsFixed,L=b.span;function C(f){var P=document.getElementById(f);if(P){var tn=P.offsetTop-n.current.offsetHeight-_e;(0,Nt.Z)(tn)}}c.useEffect(function(){var f=document.querySelectorAll("h2[id]");a.current=Array.from(f).map(function(P){var tn=P.id;return tn}),i(!0)},[]),c.useEffect(function(){var f=decodeURIComponent((location.hash||"").slice(1));f&&C(f)},[d]);var O=c.useMemo(function(){function f(){for(var P=window,tn=P.scrollY,Ln=n.current.offsetHeight,Dn=a.current.length-1;Dn>=0;Dn-=1){var Tn=a.current[Dn],_n=document.getElementById(Tn),zn=_n.offsetTop-Ln-_e;if(zn<=tn){h(Tn);return}}h(void 0)}return Ht()(f)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(Ue.forEach(function(f){return window.addEventListener(f,O)}),O(),function(){Ue.forEach(function(f){return window.removeEventListener(f,O)})})},[]),(0,e.tZ)("div",{className:j()(M,m&&D),ref:n},(0,e.tZ)(At.Z,{activeKey:m,centered:!0,size:"large",onChange:C,items:a.current.map(function(f){return{key:f,label:(0,e.tZ)("span",{className:L},f.replace(/-/g," "))}})}))},Xt=Wt,Ge,Ke,$e,Ve=40,se=1208,pe=24,Ft=function(){var n=(0,Ne.Z)();return(0,p.kc)(function(a){var r=a.token,l=a.css,d=r.antCls;return{resourcePage:l(Ge||(Ge=Z()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),se),resourceContent:l(Ke||(Ke=Z()([`
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
      `])),Ve,se,pe,d,r.padding,r.padding),banner:l($e||($e=Z()([`
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
      `])),Ve,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",se,se,r.fontSizeLG,pe,pe)}})()},Ut=function(n){var a,r=n.children,l=Ft(),d=l.styles,i=(0,x.useRouteMeta)(),s=(0,Ne.Z)(),u=(0,J.HE)(),m=u.editButton,h=m===void 0?!0:m,w=(0,J.HP)(),b=(0,e.tZ)(Pt.Z,null,(0,e.tZ)(je,null),(0,e.tZ)("div",{id:"resources-page",className:d.resourcePage},(0,e.tZ)(Xt,null),(0,e.tZ)("div",{className:d.banner},(0,e.tZ)(He.Z.Title,{style:{fontSize:30}},(a=i.frontmatter)===null||a===void 0?void 0:a.title,h&&(0,e.tZ)(Rt.default,{title:w!=null&&w.isGithub?(0,e.tZ)(x.FormattedMessage,{id:"app.content.edit-page"}):"Edit",filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:d.resourceContent},r),(0,e.tZ)(Ie.default,null)));return s?b:(0,e.tZ)($.ZP,{theme:{token:{colorBgLayout:"#fff"}}},b)},_t=Ut,Gt=t(3361),Kt=t(6974),$t=t(8333),Vt=t(26865),Jt=t(32337),Yt=t(14478),Qt=function(n){var a=n.children,r=n.fallback,l=r===void 0?(0,e.tZ)(Jt.Z.Input,{active:!0,size:"small"}):r,d=n.delay,i=d===void 0?200:d;return(0,e.tZ)(Yt.df,{triggerOnce:!0,delay:i},function(s){var u=s.inView,m=s.ref;return(0,e.tZ)("div",{ref:m},(0,e.tZ)(c.Suspense,{fallback:l},u?a:(0,e.tZ)("span",null)))})},Qn=Qt,qt=t(49424),no=c.lazy(function(){return Promise.all([t.e(6447),t.e(4795)]).then(t.bind(t,54795))}),eo=c.lazy(function(){return Promise.resolve().then(t.bind(t,49424))}),to=c.lazy(function(){return t.e(6009).then(t.bind(t,36009))}),oo=c.lazy(function(){return Promise.resolve().then(t.bind(t,13371))}),ao=c.lazy(function(){return t.e(1051).then(t.bind(t,31051))}),ro=c.lazy(function(){return Promise.resolve().then(t.bind(t,2144))}),io=c.lazy(function(){return t.e(2912).then(t.bind(t,82912))}),lo=function(n){var a,r,l,d,i,s=n.children,u=(0,x.useRouteMeta)(),m=(0,mn.Z)(),h=m.pathname,w=m.hash,b=(0,J.HP)(),M=(0,c.useContext)(en.Z),D=M.direction,L=(0,qt.useStyle)(),C=L.styles,O=(0,Kt.Z)(!1),f=R()(O,2),P=f[0],tn=f[1],Ln=(0,c.useState)("tsx"),Dn=R()(Ln,2),Tn=Dn[0],_n=Dn[1],zn=(0,c.useMemo)(function(){var S;return((S=u.toc)===null||S===void 0?void 0:S.filter(function(dn){return dn._debug_demo}).map(function(dn){return dn.id}))||[]},[u]),Gn=zn.includes(w.slice(1)),ce=(0,J.HE)(),kn=ce.editButton,Kn=kn===void 0?!0:kn;(0,c.useLayoutEffect)(function(){tn(Gn)},[]);var qn=(0,c.useMemo)(function(){return{showDebug:P,setShowDebug:tn,codeType:Tn,setCodeType:_n}},[P,Tn,zn]),ln=D==="rtl",fn=((a=u.frontmatter)===null||a===void 0?void 0:a.sidebar)===!1;return(0,e.tZ)(Vt.Z.Provider,{value:qn},(0,e.tZ)(Jn.Z,{xxl:fn?24:20,xl:fn?24:19,lg:fn?24:18,md:fn?24:18,sm:24,xs:24},(0,e.tZ)(Qn,{fallback:null},(0,e.tZ)(eo,{showDebug:P,debugDemos:zn})),(0,e.tZ)("article",{className:j()(C.articleWrapper,{rtl:ln})},(r=u.frontmatter)!==null&&r!==void 0&&r.title?(0,e.tZ)(ge.Z,{justify:"space-between"},(0,e.tZ)(He.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Gt.Z,null,(0,e.tZ)("span",null,(l=u.frontmatter)===null||l===void 0?void 0:l.title),(0,e.tZ)("span",null,(d=u.frontmatter)===null||d===void 0?void 0:d.subtitle),!h.startsWith("/components/overview")&&Kn&&(0,e.tZ)(Qn,{fallback:null},(0,e.tZ)(ro,{title:b!=null&&b.isGithub?(0,e.tZ)(x.FormattedMessage,{id:"app.content.edit-page"}):"Edit",filename:u.frontmatter.filename}))))):null,(0,e.tZ)(Qn,{fallback:null},(0,e.tZ)(to,null)),!u.frontmatter.__autoDescription&&u.frontmatter.description,u.frontmatter.category==="Components"&&String(u.frontmatter.showImport)!=="false"&&(0,e.tZ)($t.Z,{source:u.frontmatter.source,pkg:u.frontmatter.package||u.frontmatter.packageName||u.frontmatter.pkg,component:u.frontmatter.title,filename:u.frontmatter.filename,version:u.frontmatter.version||u.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"},className:"clearfix"},s),(0,e.tZ)("div",{style:{marginTop:80,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},(0,e.tZ)(Qn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(no,an()({},b,{filename:"".concat(b.originDocDir).concat(u.frontmatter.filename)}))),(0,e.tZ)(Qn,{fallback:null},(0,e.tZ)("div",{className:j()(C.bottomEditContent,{rtl:ln})},(0,e.tZ)(io,{time:(i=u.frontmatter)===null||i===void 0?void 0:i.lastUpdated}))))),(0,e.tZ)(Qn,{fallback:null},(0,e.tZ)(ao,{rtl:ln})),(0,e.tZ)(oo,null)))},so=lo,co=t(92828),uo=t(69543),Je,Ye,mo=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.antCls,l=n.fontFamily,d=n.colorSplit,i=n.marginXXL,s=n.paddingXXS;return{asideContainer:a(Je||(Je=Z()([`
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
    `])),i,l,s,r,r,r,r,n.fontSize,r,r,n.margin,n.margin,n.fontSize,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,n.marginXXS,r,n.padding,r,r,r,n.padding,r,r),mainMenu:a(Ye||(Ye=Z()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),po=function(){var n,a=(0,x.useSidebarData)(),r=(0,c.useContext)(en.Z),l=r.isMobile,d=r.theme,i=mo(),s=i.styles,u=(0,x.useRouteMeta)(),m=(0,uo.Z)(),h=R()(m,2),w=h[0],b=h[1],M=d.includes("dark"),D=(0,p.Fg)(),L=D.colorBgContainer,C=(0,e.tZ)($.ZP,{theme:{components:{Menu:{itemBg:L,darkItemBg:L}}}},(0,e.tZ)(ae.Z,{items:w,inlineIndent:30,className:s.asideContainer,mode:"inline",theme:M?"dark":"light",selectedKeys:[b],defaultOpenKeys:a==null?void 0:a.map(function(O){var f=O.title;return f}).filter(Boolean)}));return((n=u.frontmatter)===null||n===void 0?void 0:n.sidebar)===!1?null:l?(0,e.tZ)(co.Z,{key:"Mobile-menu"},C):(0,e.tZ)(Jn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:s.mainMenu},(0,e.tZ)("section",{className:"main-menu-inner"},C))},go=po,Qe,fo=(0,p.kc)(function(o){var n=o.css,a=o.token;return{main:n(Qe||(Qe=Z()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),ho=function(n){var a=n.children,r=fo(),l=r.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(je,null),(0,e.tZ)(go,null),(0,e.tZ)(so,null,a))},vo=ho,xo={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},bo=function(){var n=(0,x.useOutlet)(),a=(0,mn.Z)(),r=a.pathname,l=a.search,d=a.hash,i=(0,yn.default)(xo),s=R()(i,2),u=s[0],m=s[1],h=(0,c.useRef)(null),w=(0,c.useContext)(en.Z),b=w.direction,M=(0,x.useSiteData)(),D=M.loading,L=M.themeConfig;(0,c.useLayoutEffect)(function(){m==="cn"?bn().locale("zh-cn"):bn().locale("en")},[]),(0,c.useEffect)(function(){var O=document.getElementById("nprogress-style");return h.current=setTimeout(function(){O==null||O.remove()},0),function(){return clearTimeout(h.current)}},[]),(0,c.useEffect)(function(){var O=d.replace("#","");if(O){var f;(f=document.getElementById(decodeURIComponent(O)))===null||f===void 0||f.scrollIntoView()}},[D,d]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+l)},[a]);var C=c.useMemo(function(){return["","/"].some(function(O){return O===r})||["/index"].some(function(O){return r.startsWith(O)})?(0,e.tZ)(Bt,{title:u.title,desc:u.description},n):r.startsWith("/docs/resource")?(0,e.tZ)(_t,null,n):r.startsWith("/theme-editor")?n:(0,e.tZ)(vo,null,n)},[r,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(x.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:m==="cn"?"zh-CN":m,"data-direction":b,className:j()({rtl:b==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:(L==null?void 0:L.logo)||"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:u.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:(L==null?void 0:L.logo)||"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)($.ZP,{direction:b,locale:m==="cn"?un.Z:void 0},(0,e.tZ)(K,null),(0,e.tZ)(Dt,null),C))},yo=bo},49424:function(In,X,t){t.r(X),t.d(X,{useStyle:function(){return F}});var Q=t(26068),R=t.n(Q),sn=t(53649),j=t.n(sn),xn=t(75271),bn=t(86179),Pn=t(47998),c=t(82187),$=t.n(c),un=t(6995),x=t(67286),yn=t(96378),mn,e,p,_,I,F=(0,Pn.kc)(function(U){var z=U.token,on=U.css,pn=z.antCls;return{anchorToc:on(mn||(mn=j()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),pn,pn,z.fontSizeSM),tocWrapper:on(e||(e=j()([`
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
    `])),z.headerHeight+z.contentMarginTop-4,z.borderRadius,z.purple6,z.purple5,z.headerHeight+z.contentMarginTop+24,z.paddingXXS,z.screenLG),tocBannerWrapper:on(p||(p=j()([`
      top: `,`px;
    `])),z.headerHeight+z.contentMarginTop+z.bannerHeight-4),articleWrapper:on(_||(_=j()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),z.screenLG,z.paddingLG*2),bottomEditContent:on(I||(I=j()([`
      min-width: 200px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    `])))}}),B=function(z){var on=z.showDebug,pn=z.debugDemos,Sn=pn===void 0?[]:pn,Hn=(0,xn.useContext)(x.Z),Nn=Hn.bannerVisible,ne=F(),jn=ne.styles,wn=(0,Pn.Fg)(),H=(0,un.useRouteMeta)(),V=(0,un.useTabMeta)(),Cn=function(N){var q;return{href:"#".concat(N.id),title:N.title,key:N.id,children:(q=N.children)===null||q===void 0?void 0:q.filter(function(K){return on||!Sn.includes(K.id)}).map(function(K){return{key:K.id,href:"#".concat(K.id),title:(0,yn.tZ)("span",{className:$()({"toc-debug":Sn.includes(K.id)})},K==null?void 0:K.title)}})}},Mn=xn.useMemo(function(){return((V==null?void 0:V.toc)||H.toc).reduce(function(G,N){if(N.depth===2)G.push(R()({},N));else if(N.depth===3){var q=G[G.length-1];q&&(q.children=q.children||[],q.children.push(R()({},N)))}return G},[])},[V==null?void 0:V.toc,H.toc]);return H.frontmatter.toc?(0,yn.tZ)("section",{className:$()(jn.tocWrapper,Nn&&jn.tocBannerWrapper)},(0,yn.tZ)(bn.Z,{affix:!1,className:jn.anchorToc,targetOffset:wn.anchorTop,showInkInFixed:!0,items:Mn.map(Cn)})):null};X.default=B},13371:function(In,X,t){t.r(X);var Q=t(75271),R=t(91574),sn=t(96378),j=t(33230),xn=t(32699),bn=t.n(xn),Pn=t(61141),c=t(33971),$=t(84651),un=t(67286),x=function(){var e=(0,c.Z)(),p=e.token,_=(0,$.Z)("footerLinks"),I=(0,Q.useContext)(un.Z),F=I.isMobile,B=new R.C((0,Pn.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,sn.iv)("background:",B,";",""),footer:(0,sn.iv)("background:",B,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",F?60:0,"px;:last-child{margin-bottom:",F?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(_)&&_.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},yn=function(){var e=x(),p=(0,$.Z)("footer"),_=(0,$.Z)("footerLinks"),I=(0,Q.useCallback)(function(F){return Array.isArray(F)&&F.forEach(function(B){var U=B.icon;B.icon&&(delete B.icon,B.icon=(0,sn.tZ)("img",{src:String(U),alt:"",style:{maxWidth:"100%"}})),Array.isArray(B.items)&&I(B.items)}),F},[]);return p?(0,sn.tZ)(j.Z,{columns:I((0,xn.cloneDeep)(_)),css:e.footer,bottom:(0,sn.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};X.default=yn}}]);
