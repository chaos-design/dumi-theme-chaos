"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{29292:function(En,B,t){t.d(B,{Z:function(){return U.Z}});var U=t(14223)},74232:function(En,B,t){t.d(B,{Z:function(){return U.Z}});var U=t(17501)},7936:function(En,B,t){t.r(B);var U=t(53649),D=t.n(U),Y=t(75271),O=t(60885),rn=t(82145),bn=t(97940),yn=t(11486),c=t(96378),X,mn=function(e){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(h)},b=(0,bn.kc)(function(J){var e=J.token,h=J.css,A=e.colorIcon,G=e.colorText,k=e.iconCls;return{editButton:h(X||(X=D()([`
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
    `])),e.marginXS,k,A,e.fontSizeLG,e.motionDurationSlow,G)}}),an=function(e){var h=e.title,A=e.filename,G=b(),k=G.styles,E=(0,yn.H)(),Z=E.user,q=E.repo,ln=E.branch,nn=E.docDir;return(0,c.tZ)(rn.Z,{title:h},(0,c.tZ)("a",{className:k.editButton,href:"".concat(mn("".concat(Z,"/").concat(q),ln)).concat(nn).concat(A),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(O.Z,null)))};B.default=an},73594:function(En,B,t){t.d(B,{Z:function(){return Y},f:function(){return D}});var U=t(75271),D=U.createContext(!1);function Y(){return U.useContext(D)}},22687:function(En,B,t){var U=t(48305),D=t.n(U),Y=t(15558),O=t.n(Y),rn=t(82092),bn=t.n(rn),yn=t(53649),c=t.n(yn),X=t(75271),mn=t(45481),b=t(23753),an=t(97940),J=t(82187),e=t.n(J),h=t(48702),A=t(41075),G=t(19888),k=t(96378),E,Z,q;function ln(dn){return dn&&/^\d+\.\d+\.\d+$/.test(dn)}var nn=(0,an.kc)(function(dn){var P=dn.css,I=dn.token;return{link:P(E||(E=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:P(Z||(Z=c()([`
    margin-inline-end: 0;
  `]))),subtitle:P(q||(q=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),I.fontSizeSM)}}),Zn=function(P){var I,pn,en=nn(),W=en.styles,z=P.before,H=P.after,N=P.link,Bn=P.title,gn=P.subtitle,V=P.search,j=P.tag,Cn=P.className,$=(I=typeof j=="string"?j:j==null?void 0:j.title)!==null&&I!==void 0?I:"",Mn=(pn=typeof j=="string"?j:j==null?void 0:j.color)!==null&&pn!==void 0?pn:"";return!z&&!H?(0,k.tZ)(A.Z,{to:"".concat(N).concat(V),className:e()(Cn,bn()({},W.link,$))},(0,k.tZ)(mn.Z,null,(0,k.tZ)("span",null,Bn),gn&&(0,k.tZ)("span",{className:W.subtitle},gn)),$&&(0,k.tZ)(b.Z,{bordered:!1,className:e()(W.tag),color:ln(Mn)||Mn==="New"?"success":"processing"},$)):(0,k.tZ)(A.Z,{to:"".concat(N).concat(V),className:Cn},z,Bn,gn&&(0,k.tZ)("span",{className:W.subtitle},gn),H)},zn=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=(0,h.useFullSidebarData)(),pn=(0,G.Z)(),en=pn.pathname,W=pn.search,z=(0,h.useSidebarData)(),H=P.before,N=P.after,Bn=(0,X.useMemo)(function(){var gn,V=O()(z!=null?z:[]);if(en.startsWith("/docs/spec")){var j=V.splice(0,1);V.push.apply(V,O()(j))}if(en.startsWith("/docs/react")){var Cn,$=(Cn=Object.entries(I).find(function(sn){var u=D()(sn,1),hn=u[0];return hn.startsWith("/changelog")}))===null||Cn===void 0?void 0:Cn[1];$&&V.splice(1,0,$[0])}if(en.startsWith("/changelog")){var Mn,Rn=(Mn=Object.entries(I).find(function(sn){var u=D()(sn,1),hn=u[0];return hn.startsWith("/docs/react")}))===null||Mn===void 0?void 0:Mn[1];Rn&&(V.unshift(Rn[0]),V.push.apply(V,O()(Rn.slice(1))))}return(gn=V==null?void 0:V.reduce(function(sn,u){if(u!=null&&u.title)if(en.startsWith("/docs/spec")){var hn,Ln,jn=u.children.reduce(function(m,C){var R,Q,tn=(R=(Q=C.frontmatter)===null||Q===void 0?void 0:Q.type)!==null&&R!==void 0?R:"default";return m[tn]||(m[tn]=[]),m[tn].push(C),m},{}),An=[];An.push.apply(An,O()((hn=(Ln=jn.default)===null||Ln===void 0?void 0:Ln.map(function(m){return{label:(0,k.tZ)(A.Z,{to:"".concat(m.link).concat(W)},H,m==null?void 0:m.title,N),key:m.link.replace(/(-cn$)/g,"")}}))!==null&&hn!==void 0?hn:[])),Object.entries(jn).forEach(function(m){var C=D()(m,2),R=C[0],Q=C[1];R!=="default"&&An.push({type:"group",label:R,key:R,children:Q==null?void 0:Q.map(function(tn){return{label:(0,k.tZ)(A.Z,{to:"".concat(tn.link).concat(W)},H,tn==null?void 0:tn.title,N),key:tn.link.replace(/(-cn$)/g,"")}})})}),sn.push({label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:An})}else{var Dn;sn.push({type:"group",label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:(Dn=u.children)===null||Dn===void 0?void 0:Dn.map(function(m){var C,R;return{label:(0,k.tZ)(Zn,{before:H,after:N,link:m.link,title:m==null?void 0:m.title,subtitle:(C=m.frontmatter)===null||C===void 0?void 0:C.subtitle,search:W,tag:((R=m.frontmatter)===null||R===void 0?void 0:R.tag)||""}),key:m.link.replace(/(-cn$)/g,"")}})})}else{var Un=u.children||[];Un.every(function(m){var C;return m==null||(C=m.frontmatter)===null||C===void 0?void 0:C.date})&&Un.sort(function(m,C){var R,Q;return((R=m.frontmatter)===null||R===void 0?void 0:R.date)>((Q=C.frontmatter)===null||Q===void 0?void 0:Q.date)?-1:1}),sn.push.apply(sn,O()(Un.map(function(m){var C;return{label:(0,k.tZ)(Zn,{before:H,after:N,link:m.link,title:m==null?void 0:m.title,search:W,tag:((C=m.frontmatter)===null||C===void 0?void 0:C.tag)||""}),key:m.link.replace(/(-cn$)/g,"")}})))}return sn},[]))!==null&&gn!==void 0?gn:[]},[z,I,en,W,P]);return[Bn,en]};B.Z=zn},54915:function(En,B,t){t.r(B),t.d(B,{default:function(){return xo}});var U=t(48305),D=t.n(U),Y=t(82187),O=t.n(Y),rn=t(16483),bn=t.n(rn),yn=t(81414),c=t(75271),X=t(70567),mn=t(41329),b=t(48702),an=t(54425),J=t(19888),e=t(96378),h=t(97940),A={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},G=function(){var n=(0,h.Fg)(),r=function l(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(l(s,i+1),`
    `):""},a=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(A[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",r("blue")," ",r("purple")," ",r("cyan")," ",r("green")," ",r("magenta")," ",r("red")," ",r("volcano")," ",r("orange")," ",r("gold")," ",r("yellow")," ",r("lime")," ",r("geekblue")," ",a()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},k=G,E=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},Z=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},q=t(21793),ln=function(){var o=(0,h.Fg)(),n=o.anchorTop;return c.useInsertionEffect(function(){(0,q.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},nn=t(84432),Zn=function(){var n=(0,h.Fg)(),r=n.antCls,a=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",r,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",r,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",r,"-row>div,.code-box-demo ",r,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",r,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",a,";&:nth-child(2n + 1){background:",new nn.FastColor(a).setA(.75).toHexString(),";}}",r,"-row .demo-col,.code-box-demo ",r,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",r,"-row .demo-col-1{background:",new nn.FastColor(a).setA(.75).toHexString(),";}",r,"-row .demo-col-2,.code-box-demo ",r,"-row .demo-col-2{background:",new nn.FastColor(a).setA(.75).toHexString(),";}",r,"-row .demo-col-3,.code-box-demo ",r,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",r,"-row .demo-col-4,.code-box-demo ",r,"-row .demo-col-4{background:",new nn.FastColor(a).setA(.6).toHexString(),";}",r,"-row .demo-col-5,.code-box-demo ",r,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",r,"-row>div{margin-top:0;margin-bottom:0;}}","")})},zn=Zn,dn=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},P=function(){var n=(0,h.Fg)(),r=n.antCls,a=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",a,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",r,"-row",r,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",r,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",r,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",a,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",a,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",r,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",a,"{color:",n.colorTextBase,";font-weight:bold;}}}",r,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},I=P,pn=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},en=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},W=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},z="dumi-default-",H=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",z,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",z,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",z,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},N=function(){var o=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},Bn=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(Z,null),(0,e.tZ)(ln,null),(0,e.tZ)(zn,null),(0,e.tZ)(dn,null),(0,e.tZ)(I,null),(0,e.tZ)(pn,null),(0,e.tZ)(en,null),(0,e.tZ)(W,null),(0,e.tZ)(N,null),(0,e.tZ)(k,null),(0,e.tZ)(E,null),(0,e.tZ)(H,null))},gn=Bn,V=t(68585),j=t.n(V),Cn=t(26068),$=t.n(Cn),Mn=t(82092),Rn=t.n(Mn),sn=t(53649),u=t.n(sn),hn=t(64733),Ln=t(52825),jn=t(54669),An=t(93362),Dn=t(32860),Un=t(88283),m=t(56178),C=t(91011),R=t(41075),Q,tn,Qn,qn,Ke=(0,h.kc)(function(o){var n=o.token,r=o.css,a=n.headerHeight,l=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:r(Q||(Q=u()([`
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
    `])),a,l,s,a,n.marginSM,l,i),title:r(tn||(tn=u()([`
      line-height: 40px;
    `]))),logoImage:r(Qn||(Qn=u()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `]))),tour:r(qn||(qn=u()([`
      .ant-popover-title,
      .ant-popover-inner-content {
        color: #fff;
      }
    `])))}}),$n="chaos.logo.tour.dismiss",Xe=function(n){var r=n.isZhCN,a=c.useState(!0),l=D()(a,2),s=l[0],i=l[1],d=(0,b.useSiteData)(),p=d.themeConfig,g=(0,b.useLocation)(),f=g.search,w=Ke(),y=w.styles,M=p.logo||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,m.Fy)()&&(localStorage.getItem($n)?i(!1):i(!0))},[s]),(0,e.tZ)("h1",null,(0,e.tZ)(R.Z,{to:m.J1("/",r,f),className:y.logo},(0,e.tZ)(jn.Z,{title:"\u9707\u60CA\u{1F389}\u{1F389}\u{1F389}",content:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"bottomRight",classNames:{root:y.tour},color:"#1677ff",open:s,onOpenChange:function(L){L?(i(!1),(0,m.Fy)()&&localStorage.setItem($n,"1")):i(L)}},(0,e.tZ)("img",{id:"chaos-logo",className:y.logoImage,src:M,draggable:!1,alt:"logo",onMouseEnter:function(){i(!1),(0,m.Fy)()&&localStorage.setItem($n,"1")}})),(0,e.tZ)("span",{className:y.title},"Chaos")))},Ge=Xe,Ve=t(15558),Kn=t.n(Ve),ne=t(81905),In=t(11486),$e=t(77855),Ye=t(23831),Je=t(32252),ee=t(68714),te=function(n){return(n!=null?n:[]).map(function(r,a){return{label:(0,e.tZ)("a",{href:r.link,target:"_blank",rel:"noopener noreferrer"},r.text),key:a}})},Qe=function(){var n=(0,ee.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Ye.Z,{menu:{items:te(n)},placement:"bottomRight"},(0,e.tZ)(Je.ZP,{size:"small"},(0,e.tZ)(b.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)($e.Z,null))):null},qe=Qe,oe,nt=(0,h.kc)(function(o){var n=o.token,r=n.antCls,a=n.iconCls,l=n.fontFamily,s=n.fontSize,i=n.headerHeight,d=n.colorPrimary;return{nav:(0,h.iv)(oe||(oe=u()([`
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
    `])),s,l,r,r,r,40+12*2,i,n.paddingSM,n.paddingSM,i,r,a,r,d,r,r)}}),et=function(n){var r,a,l=n.isZhCN,s=n.isMobile,i=n.responsive,d=n.directionText,p=(0,In.H)(),g=p.github,f=(0,b.useLocation)(),w=f.pathname,y=f.search,M=(0,b.useSiteData)(),S=M.locales,L=(0,b.useNavData)(),x=(0,b.useLocale)(),F=(0,ee.Z)("moreLinks"),v=(0,b.useFullSidebarData)(),T=((r=v["/docs/blog"])===null||r===void 0||(r=r[0])===null||r===void 0?void 0:r.children)||[],K=nt(),fn=K.styles,wn=s?"inline":"horizontal",vn=w.split("/").filter(Boolean).slice(0,-1).join("/"),Sn="/".concat(vn||"home");w.startsWith("/changelog")?Sn="/docs/react":w.startsWith("/docs/resources")&&(Sn="/docs/resources");var Tn=function _n(Pn){return Pn.map(function(_){var cn,Vn=((cn=_.link)!==null&&cn!==void 0?cn:"").split("/").slice(0,2).join("/");return{label:_.children?_.title:(0,m.YW)(_.link)?(0,e.tZ)("a",{href:"".concat(_.link).concat(y),target:"_blank",rel:"noreferrer"},_.title):(0,e.tZ)(R.Z,{to:"".concat(_.link).concat(y)},_.title),key:(0,m.YW)(_.link)?_.link:Vn,children:_.children?_n(_.children):null}})},on=Tn(L),On=c.useCallback(function(){if(S.length<2)return null;if(S.length===2){var _n=S.filter(function(_){return _.id!==(x==null?void 0:x.id)})[0],Pn=(0,m.cY)({pathname:w,current:x,target:_n});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Pn},_n.name),key:_n.id}}return{label:(0,e.tZ)("span",null,x.name),key:"multi-lang",children:S.filter(function(_){return _.id!==x.id}).map(function(_){var cn=(0,m.cY)({pathname:w,current:x,target:_});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:cn},_.name),key:_.id}})}},[x,S]),xn=[],Nn=[g?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:g,target:"_blank"},"GitHub"),key:"github"}:null].concat(Kn()(te(F)||[]));s?xn=Nn:i==="crowded"&&(xn=[{label:(0,e.tZ)(hn.Z,null),key:"additional",children:Kn()(Nn)}]);var Gn=[].concat(Kn()(on!=null?on:[]),[T.length?{label:(0,e.tZ)(R.Z,{to:m.J1(T.sort(function(_n,Pn){var _,cn;return((_=_n.frontmatter)===null||_===void 0?void 0:_.date)>((cn=Pn.frontmatter)===null||cn===void 0?void 0:cn.date)?-1:1})[0].link,l,y)},x==null?void 0:x.blog),key:"docs/blog"}:null],Kn()((a=xn)!==null&&a!==void 0?a:[])).filter(Boolean);return(0,e.tZ)(ne.Z,{mode:wn,selectedKeys:[Sn],className:fn.nav,items:Gn})},tt=et,ot=t(35947),re=t(82145),ae=t(16932),Yn="1.2em",rt=function(){var n=(0,ae.Z)(),r=n.token,a=r.controlHeight,l=r.motionDurationMid;return{btn:(0,e.iv)("color:",r.colorText,";border-color:",r.colorBorder,";padding:0!important;width:",a,"px;height:",a,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",r.borderRadius,"px;transition:all ",l,";cursor:pointer;.btn-inner{transition:all ",l,";}&:hover{background:",r.colorBgTextHover,";}img{width:",Yn,";height:",Yn,";}.anticon{font-size:",Yn,";}","")}},at=function(){var n=(0,In.H)(),r=n.github,a=rt();return(0,e.tZ)("div",null,r?(0,e.tZ)(re.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:r,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[a.btn,"",""],type:"button"},(0,e.tZ)(ot.Z,null)))):null)},it=at,lt=t(43151),ie=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);a/=255,l/=255,s/=255;var i=Math.max(a,l,s),d=Math.min(a,l,s),p,g,f=(i+d)/2;if(i===d)p=g=0;else{var w=i-d;switch(g=f>.5?w/(2-i-d):w/(i+d),i){case a:p=(l-s)/w+(l<s?6:0);break;case l:p=(s-a)/w+2;break;case s:p=(a-l)/w+4;break}p/=6}return g=g*100,f=f*100-r,"hsl(".concat(Math.round(p*360),", ").concat(Math.round(g),"%, ").concat(Math.round(f),"%)")},dt=function(n){var r=n.backgroundColor,a=r===void 0?"#e8d7ff":r,l=n.textColor,s=l===void 0?"#091E42":l,i=n.align,d=i===void 0?"center":i,p=(0,ae.Z)(),g=p.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",g.fontSize,"px;@media only screen and (max-width: ",g.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",ie(a,10),";--site-announcement-bar-stripe-color2:",ie(a,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,d,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},le="chaos.announcement.dismiss",st=function(){var n=(0,c.useState)(!0),r=D()(n,2),a=r[0],l=r[1],s=(0,In.Z)()||{},i=s.announcementBar,d=(0,C.A)(),p=d.updateSiteConfig,g=dt(i||{});(0,c.useEffect)(function(){i!=null&&i.id?!(0,m.Fy)()||localStorage.getItem(le)===i.id?l(!0):l(!1):l(!0)},[i]),(0,c.useEffect)(function(){p({bannerVisible:!a})},[a]);var f=(0,c.useCallback)(function(){i!=null&&i.id&&(0,m.Fy)()&&localStorage.setItem(le,i.id),l(!0)},[]);return a?null:(0,e.tZ)(X.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(lt.Z,j()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[g.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var y;if((y=window)!==null&&y!==void 0&&y.gtag){var M,S;(M=(S=window).gtag)===null||M===void 0||M.call(S,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:f,css:i!=null&&i.backgroundColor?[g.container]:[]}))))},ct=st,de,se,ce,ue,me,Wn="1.2em",ut=(0,h.kc)(function(o){var n=o.token,r=o.css,a=n.colorText,l=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,d=n.borderRadius,p=n.controlHeight,g=n.motionDurationMid;return{btn:r(de||(de=u()([`
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
    `])),a,l,p,p,d,g,g,i,Wn,Wn,Wn),innerDiv:r(se||(se=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Wn,Wn),labelStyle:r(ce||(ce=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Wn,a,a),label1Style:r(ue||(ue=u()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,s),label2Style:r(me||(me=u()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),mt=function(n){var r=n.label1,a=n.label2,l=n.tooltip1,s=n.tooltip2,i=n.value,d=n.pure,p=n.onClick,g=ut(),f=g.styles,w=f.btn,y=f.innerDiv,M=f.labelStyle,S=f.label1Style,L=f.label2Style,x=(0,e.tZ)("button",{type:"button",onClick:p,className:w,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},d&&(i===1?r:a),!d&&(0,e.tZ)("div",{className:y},(0,e.tZ)("span",{className:O()(M,i===1?S:L)},r),(0,e.tZ)("span",{className:O()(M,i===1?L:S)},a))));return l||s?(0,e.tZ)(re.Z,{title:i===1?l:s},x):x},pe=mt,pt=Ln.default.Option,gt="chaos.locale",ht=function(){var n=(0,b.useSearchParams)(),r=D()(n,1),a=r[0],l=(0,In.Z)(),s=l.localesEnhance,i=(0,b.useSiteData)(),d=i.locales,p=(0,b.useIntl)(),g=p.locale,f=(0,b.useLocale)(),w=(0,b.useLocation)(),y=w.pathname,M=(0,c.useCallback)(function(v){var T=(0,m.cY)({pathname:y,current:f,target:d.find(function(K){var fn=K.id;return fn===v})});m.Fy()&&localStorage.setItem(gt,m.KE(y)?"en-US":"zh-CN"),T.startsWith("/-")?T="/index".concat(T.substring(1)):T.endsWith("/index")&&(T=T.replace("/index","/")),b.history.push({pathname:T,search:a.toString()})},[y,f,d,a]),S=(0,c.useCallback)(function(){M(d.filter(function(v){return v.id!==g})[0].id)},[g,M,d]),L;if(d.length>2||!s&&d.length>2){var x=d.map(function(v){return(0,e.tZ)(pt,{value:v.id,key:v.id},v.name)});L=L=(0,e.tZ)(Ln.default,{key:"lang",className:"version",size:"small",defaultValue:g,onChange:M,popupMatchSelectWidth:!1,getPopupContainer:function(T){return T.parentNode}},x)}else if(d.length===2&&Array.isArray(s)&&s.length>1){var F=d[0].id===g?1:2;L=(0,e.tZ)(pe,{key:"lang",onClick:S,value:F,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(d[0].name," / ").concat(d[1].name),tooltip2:"".concat(d[1].name," / ").concat(d[0].name)})}return L},ft=ht,vt=t(25108),xt=function(n){var r=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(r==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},bt=c.forwardRef(function(o,n){return(0,e.tZ)(vt.Z,j()({ref:n,component:function(){return(0,e.tZ)(xt,{direction:o.direction})}},o))}),ge=bt,he,yt=(0,h.kc)(function(o){var n=o.token,r=o.css;return{dataDirectionIcon:r(he||(he=u()([`
      width: 20px;
    `])))}}),wt=function(){var n=(0,c.useContext)(C.Z),r=n.direction,a=n.updateSiteConfig,l=yt(),s=l.styles,i=(0,In.Z)(),d=i.rtl,p=d===void 0?!0:d;if(!p)return null;var g=function(){a({direction:r!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(pe,{key:"direction",onClick:g,value:r==="rtl"?2:1,label1:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},St=wt,fe,ve,xe,be,ye,we,Se,_e,ke,Ze=1120,Ce=1200,_t=(0,h.kc)(function(o){var n=o.token,r=o.css,a="#ced4d9";return{header:r(fe||(fe=u()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,a,n.colorPrimary,a,a,n.borderRadiusSM,n.paddingSM),searchBarContainer:r(ve||(ve=u()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:r(xe||(xe=u()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuCol:r(be||(be=u()([`
      display: flex;
      align-items: center;
    `]))),menuRow:r(ye||(ye=u()([`
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
    `])),n.paddingSM,n.padding),dataDirectionIcon:r(we||(we=u()([`
      width: 20px;
    `]))),popoverMenu:Rn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:r(Se||(Se=u()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(_e||(_e=u()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:r(ke||(ke=u()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),kt=function(){var n,r=(0,b.useSiteData)(),a=r.pkg,l=(0,In.Z)(),s=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),i=D()(s,2),d=i[0],p=i[1],g=(0,c.useContext)(C.Z),f=g.direction,w=g.isMobile,y=g.updateSiteConfig,M=(0,c.useRef)(null),S=(0,b.useLocation)(),L=S.pathname,x=S.search,F=_t(),v=F.styles,T=(0,c.useCallback)(function(){p(function(un){return $()($()({},un),{},{menuVisible:!1})})},[]),K=(0,c.useCallback)(function(){p(function(un){var kn;return $()($()({},un),{},{windowWidth:(kn=window)===null||kn===void 0?void 0:kn.innerWidth})})},[]),fn=(0,c.useCallback)(function(un){p(function(kn){return $()($()({},kn),{},{menuVisible:un})})},[]);(0,c.useEffect)(function(){T()},[S]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(K(),window.addEventListener("resize",K),function(){window.removeEventListener("resize",K),M.current&&clearTimeout(M.current)})},[]);var wn=(0,c.useCallback)(function(un){if(typeof window!="undefined"){var kn=window.location.href,bo=new URL(kn.replace(window.location.origin,un));window.location.href=bo.href.replace(/\/$/,"")}},[]),vn=(0,c.useMemo)(function(){return f!=="rtl"?"RTL":"LTR"},[f]),Sn=(0,c.useMemo)(function(){return f==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[f]),Tn=d.menuVisible,on=d.windowWidth,On=d.searching,xn=$()($()({},a.version?Rn()({},a.version,a.version):{}),l==null?void 0:l.docVersions),Nn=Object.keys(xn).filter(Boolean).map(function(un){return{value:xn[un],label:un}}),Gn=["","index","index-cn"].includes(L),_n=m.KE(L),Pn=f==="rtl",_=null;on<Ze?_="crowded":on<Ce&&(_="narrow");var cn=O()(v.header,"clearfix",{"home-header":Gn}),Vn={isZhCN:_n,isRTL:Pn},Ue=(0,e.tZ)(tt,j()({key:"nav"},Vn,{responsive:_,isMobile:w,directionText:vn})),Fn=[Ue,Nn.length>0?(0,e.tZ)(Ln.default,{key:"version",size:"small",className:v.versionSelect,defaultValue:(n=Nn[0])===null||n===void 0?void 0:n.value,onChange:wn,dropdownStyle:Sn,popupMatchSelectWidth:!1,getPopupContainer:function(kn){return kn.parentNode},options:Nn}):null,(0,e.tZ)(qe,{key:"more"}),(0,e.tZ)(ft,{key:new Date().getTime()}),(0,e.tZ)(St,{key:"direction"}),(0,e.tZ)(it,{key:"header-Extra"})];on<Ze?Fn=On?[]:[Ue]:on<Ce&&(Fn=On?[]:Fn);var Fe=Gn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:cn},w&&(0,e.tZ)(jn.Z,{classNames:{root:v.popoverMenu},placement:"bottomRight",content:Fn,trigger:"click",open:Tn,arrow:{pointAtCenter:!0},onOpenChange:fn},(0,e.tZ)(hn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ct,null),(0,e.tZ)(An.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Dn.Z,Fe[0],(0,e.tZ)(Ge,j()({},Vn,{location:S}))),(0,e.tZ)(Dn.Z,j()({},Fe[1],{className:v.menuCol}),(0,e.tZ)("div",{className:v.menuRow},(0,e.tZ)("div",{className:v.searchBarContainer},(0,e.tZ)("div",{className:v.searchBar},(0,e.tZ)(Un.ZP,null))),!w&&Fn))))},Zt=kt,yo=t(75927),Ct=t(30571),Mt=t(96718),Me=t(67034),Dt=function(n){var r=n.children,a=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(b.Helmet,null,(0,e.tZ)("title",null,a),(0,e.tZ)("meta",{property:"og:title",content:a}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)(Ct.Z,null),(0,e.tZ)(Mt.Z,null),(0,e.tZ)("div",{style:{minHeight:"200px"}},r),(0,e.tZ)(Me.default,null))},Et=Dt,Lt=t(66112),De=t(19972),Ee=t(73594),Tt=function(){var n=(0,b.useRouteMeta)(),r=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var d;i="".concat(n.frontmatter.subtitle||""," ").concat(((d=n.frontmatter)===null||d===void 0?void 0:d.title)||""," - Ant Design")}var p=n.frontmatter.description||"";return[i,p]},[n]),a=D()(r,2),l=a[0],s=a[1];return(0,e.tZ)(b.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Le=Tt,Ot=t(7936),Pt=t(24415),zt=t(38209),Bt=t.n(zt),Rt=t(39696),Te,Oe,Pe,ze=["scroll","resize"],At=(0,h.kc)(function(o){var n=o.token,r=o.css,a=n.boxShadowSecondary,l=n.antCls;return{affixTabs:r(Te||(Te=u()([`
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
    `])),a,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:r(Oe||(Oe=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Pe||(Pe=u()([`
      text-transform: capitalize;
    `])))}}),Be=32,It=function(){var n=c.useRef(null),r=c.useRef([]),a=c.useState(!1),l=D()(a,2),s=l[0],i=l[1],d=c.useState(void 0),p=D()(d,2),g=p[0],f=p[1],w=At(),y=w.styles,M=y.affixTabs,S=y.affixTabsFixed,L=y.span;function x(v){var T=document.getElementById(v);if(T){var K=T.offsetTop-n.current.offsetHeight-Be;(0,Rt.Z)(K)}}c.useEffect(function(){var v=document.querySelectorAll("h2[id]");r.current=Array.from(v).map(function(T){var K=T.id;return K}),i(!0)},[]),c.useEffect(function(){var v=decodeURIComponent((location.hash||"").slice(1));v&&x(v)},[s]);var F=c.useMemo(function(){function v(){for(var T=window,K=T.scrollY,fn=n.current.offsetHeight,wn=r.current.length-1;wn>=0;wn-=1){var vn=r.current[wn],Sn=document.getElementById(vn),Tn=Sn.offsetTop-fn-Be;if(Tn<=K){f(vn);return}}f(void 0)}return Bt()(v)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(ze.forEach(function(v){return window.addEventListener(v,F)}),F(),function(){ze.forEach(function(v){return window.removeEventListener(v,F)})})},[]),(0,e.tZ)("div",{className:O()(M,g&&S),ref:n},(0,e.tZ)(Pt.Z,{activeKey:g,centered:!0,size:"large",onChange:x,items:r.current.map(function(v){return{key:v,label:(0,e.tZ)("span",{className:L},v.replace(/-/g," "))}})}))},Wt=It,Re,Ae,Ie,We=40,Xn=1208,Jn=24,Ht=function(){var n=(0,Ee.Z)();return(0,h.kc)(function(r){var a=r.token,l=r.css,s=a.antCls;return{resourcePage:l(Re||(Re=u()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),Xn),resourceContent:l(Ae||(Ae=u()([`
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
      `])),We,Xn,Jn,s,a.padding,a.padding),banner:l(Ie||(Ie=u()([`
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
      `])),We,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",Xn,Xn,a.fontSizeLG,Jn,Jn)}})()},Nt=function(n){var r,a=n.children,l=Ht(),s=l.styles,i=(0,b.useRouteMeta)(),d=(0,Ee.Z)(),p=(0,e.tZ)(Lt.Z,null,(0,e.tZ)(Le,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(Wt,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(De.Z.Title,{style:{fontSize:30}},(r=i.frontmatter)===null||r===void 0?void 0:r.title,(0,e.tZ)(Ot.default,{title:(0,e.tZ)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},a),(0,e.tZ)(Me.default,null)));return d?p:(0,e.tZ)(X.ZP,{theme:{token:{colorBgLayout:"#fff"}}},p)},jt=Nt,Ut=t(10696),Ft=t(45481),Kt=t(41969),Xt=t(51077),Gt=t(19453),Vt=t(29135),$t=t(41698),Yt=function(n){var r=n.children,a=n.fallback,l=a===void 0?(0,e.tZ)(Vt.Z.Input,{active:!0,size:"small"}):a,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)($t.df,{triggerOnce:!0,delay:i},function(d){var p=d.inView,g=d.ref;return(0,e.tZ)("div",{ref:g},(0,e.tZ)(c.Suspense,{fallback:l},p?r:(0,e.tZ)("span",null)))})},Hn=Yt,Jt=t(95561),Qt=c.lazy(function(){return Promise.all([t.e(1045),t.e(2031)]).then(t.bind(t,32031))}),qt=c.lazy(function(){return Promise.resolve().then(t.bind(t,95561))}),no=c.lazy(function(){return t.e(7056).then(t.bind(t,37056))}),eo=c.lazy(function(){return Promise.resolve().then(t.bind(t,67034))}),to=c.lazy(function(){return t.e(270).then(t.bind(t,32433))}),oo=c.lazy(function(){return Promise.resolve().then(t.bind(t,7936))}),ro=c.lazy(function(){return t.e(1786).then(t.bind(t,91786))}),ao=function(n){var r,a,l,s,i=n.children,d=(0,b.useRouteMeta)(),p=(0,J.Z)(),g=p.pathname,f=p.hash,w=(0,c.useContext)(C.Z),y=w.direction,M=(0,Jt.useStyle)(),S=M.styles,L=(0,Kt.Z)(!1),x=D()(L,2),F=x[0],v=x[1],T=(0,c.useState)("tsx"),K=D()(T,2),fn=K[0],wn=K[1],vn=(0,c.useMemo)(function(){var On;return((On=d.toc)===null||On===void 0?void 0:On.filter(function(xn){return xn._debug_demo}).map(function(xn){return xn.id}))||[]},[d]),Sn=vn.includes(f.slice(1));(0,c.useLayoutEffect)(function(){v(Sn)},[]);var Tn=(0,c.useMemo)(function(){return{showDebug:F,setShowDebug:v,codeType:fn,setCodeType:wn}},[F,fn,vn]),on=y==="rtl";return(0,e.tZ)(Gt.Z.Provider,{value:Tn},(0,e.tZ)(Dn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(qt,{showDebug:F,debugDemos:vn})),(0,e.tZ)("article",{className:O()(S.articleWrapper,{rtl:on})},(r=d.frontmatter)!==null&&r!==void 0&&r.title?(0,e.tZ)(Ut.Z,{justify:"space-between"},(0,e.tZ)(De.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Ft.Z,null,(0,e.tZ)("span",null,(a=d.frontmatter)===null||a===void 0?void 0:a.title),(0,e.tZ)("span",null,(l=d.frontmatter)===null||l===void 0?void 0:l.subtitle),!g.startsWith("/components/overview")&&(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(oo,{title:(0,e.tZ)(b.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename}))))):null,(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(no,null)),!d.frontmatter.__autoDescription&&d.frontmatter.description,d.frontmatter.category==="Components"&&String(d.frontmatter.showImport)!=="false"&&(0,e.tZ)(Xt.Z,{source:!0,component:d.frontmatter.title,filename:d.frontmatter.filename,version:d.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"}},i),(0,e.tZ)("div",{style:{marginTop:120}},(0,e.tZ)(Hn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(Qt,{filename:d.frontmatter.filename})),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)("div",{className:O()(S.bottomEditContent,{rtl:on})},(0,e.tZ)(ro,{time:(s=d.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(to,{rtl:on})),(0,e.tZ)(eo,null)))},io=ao,lo=t(92828),so=t(22687),He,Ne,co=(0,h.kc)(function(o){var n=o.token,r=o.css,a=n.antCls,l=n.fontFamily,s=n.colorSplit,i=n.marginXXL,d=n.paddingXXS;return{asideContainer:r(He||(He=u()([`
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
    `])),i,l,d,a,a,a,a,n.fontSize,a,a,n.margin,n.margin,n.fontSize,s,a,a,a,a,a,a,a,a,a,a,a,a,a,a,n.marginXXS,a,n.padding,a,a,a,n.padding,a,a),mainMenu:r(Ne||(Ne=u()([`
      z-index: 1;
      position: sticky;
      top: `,`px;
      width: 100%;
      max-height: calc(100vh - `,`px);
      overflow: hidden;
      scrollbar-width: thin;
      scrollbar-gutter: stable;

      &:hover {
        overflow-y: auto;
      }
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),uo=function(){var n=(0,b.useSidebarData)(),r=(0,c.useContext)(C.Z),a=r.isMobile,l=r.theme,s=co(),i=s.styles,d=(0,so.Z)(),p=D()(d,2),g=p[0],f=p[1],w=l.includes("dark"),y=(0,h.Fg)(),M=y.colorBgContainer,S=(0,e.tZ)(X.ZP,{theme:{components:{Menu:{itemBg:M,darkItemBg:M}}}},(0,e.tZ)(ne.Z,{items:g,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:w?"dark":"light",selectedKeys:[f],defaultOpenKeys:n==null?void 0:n.map(function(L){var x=L.title;return x}).filter(Boolean)}));return a?(0,e.tZ)(lo.Z,{key:"Mobile-menu"},S):(0,e.tZ)(Dn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},S)},mo=uo,je,po=(0,h.kc)(function(o){var n=o.css,r=o.token;return{main:n(je||(je=u()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),go=function(n){var r=n.children,a=po(),l=a.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(Le,null),(0,e.tZ)(mo,null),(0,e.tZ)(io,null,r))},ho=go,fo={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},vo=function(){var n=(0,b.useOutlet)(),r=(0,J.Z)(),a=r.pathname,l=r.search,s=r.hash,i=(0,an.default)(fo),d=D()(i,2),p=d[0],g=d[1],f=(0,c.useRef)(null),w=(0,c.useContext)(C.Z),y=w.direction,M=(0,b.useSiteData)(),S=M.loading;(0,c.useLayoutEffect)(function(){g==="cn"?bn().locale("zh-cn"):bn().locale("en")},[]),(0,c.useEffect)(function(){var x=document.getElementById("nprogress-style");return f.current=setTimeout(function(){x==null||x.remove()},0),function(){return clearTimeout(f.current)}},[]),(0,c.useEffect)(function(){var x=s.replace("#","");if(x){var F;(F=document.getElementById(decodeURIComponent(x)))===null||F===void 0||F.scrollIntoView()}},[S,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+l)},[r]);var L=c.useMemo(function(){return["","/"].some(function(x){return x===a})||["/index"].some(function(x){return a.startsWith(x)})?(0,e.tZ)(Et,{title:p.title,desc:p.description},n):a.startsWith("/docs/resource")?(0,e.tZ)(jt,null,n):a.startsWith("/theme-editor")?n:(0,e.tZ)(ho,null,n)},[a,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(b.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":y,className:O()({rtl:y==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:p.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(X.ZP,{direction:y,locale:g==="cn"?mn.Z:void 0},(0,e.tZ)(gn,null),(0,e.tZ)(Zt,null),L))},xo=vo},95561:function(En,B,t){t.r(B),t.d(B,{useStyle:function(){return G}});var U=t(26068),D=t.n(U),Y=t(53649),O=t.n(Y),rn=t(75271),bn=t(10286),yn=t(97940),c=t(82187),X=t.n(c),mn=t(48702),b=t(91011),an=t(96378),J,e,h,A,G=(0,yn.kc)(function(E){var Z=E.token,q=E.css,ln=Z.antCls,nn=(0,rn.useContext)(b.Z),Zn=nn.bannerVisible;return{anchorToc:q(J||(J=O()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),ln,ln,Z.fontSizeSM),tocWrapper:q(e||(e=O()([`
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
    `])),Z.headerHeight+Z.contentMarginTop+(Zn?Z.bannerHeight:0)-4,Z.borderRadius,Z.purple6,Z.purple5,Z.headerHeight+Z.contentMarginTop+24,Z.paddingXXS,Z.screenLG),articleWrapper:q(h||(h=O()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),Z.screenLG,Z.paddingLG*2),bottomEditContent:q(A||(A=O()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      flex: 0;
    `])))}}),k=function(Z){var q=Z.showDebug,ln=Z.debugDemos,nn=ln===void 0?[]:ln,Zn=G(),zn=Zn.styles,dn=(0,yn.Fg)(),P=(0,mn.useRouteMeta)(),I=(0,mn.useTabMeta)(),pn=function(z){var H;return{href:"#".concat(z.id),title:z.title,key:z.id,children:(H=z.children)===null||H===void 0?void 0:H.filter(function(N){return q||!nn.includes(N.id)}).map(function(N){return{key:N.id,href:"#".concat(N.id),title:(0,an.tZ)("span",{className:X()({"toc-debug":nn.includes(N.id)})},N==null?void 0:N.title)}})}},en=rn.useMemo(function(){return((I==null?void 0:I.toc)||P.toc).reduce(function(W,z){if(z.depth===2)W.push(D()({},z));else if(z.depth===3){var H=W[W.length-1];H&&(H.children=H.children||[],H.children.push(D()({},z)))}return W},[])},[I==null?void 0:I.toc,P.toc]);return P.frontmatter.toc?(0,an.tZ)("section",{className:zn.tocWrapper},(0,an.tZ)(bn.Z,{affix:!1,className:zn.anchorToc,targetOffset:dn.anchorTop,showInkInFixed:!0,items:en.map(pn)})):null};B.default=k},67034:function(En,B,t){t.r(B);var U=t(75271),D=t(91574),Y=t(96378),O=t(33230),rn=t(32699),bn=t.n(rn),yn=t(96058),c=t(16932),X=t(68714),mn=t(91011),b=function(){var e=(0,c.Z)(),h=e.token,A=(0,X.Z)("footerLinks"),G=(0,U.useContext)(mn.Z),k=G.isMobile,E=new D.C((0,yn.default)("#f0f3fa","#fff")).onBackground(h.colorBgContainer).toHexString();return{holder:(0,Y.iv)("background:",E,";",""),footer:(0,Y.iv)("background:",E,";color:",h.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",h.colorText,";}.rc-footer-column{margin-bottom:",k?60:0,"px;:last-child{margin-bottom:",k?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(A)&&A.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",h.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",h.fontSize,"px;}}","")}},an=function(){var e=b(),h=(0,X.Z)("footer"),A=(0,X.Z)("footerLinks"),G=(0,U.useCallback)(function(k){return Array.isArray(k)&&k.forEach(function(E){var Z=E.icon;E.icon&&(delete E.icon,E.icon=(0,Y.tZ)("img",{src:String(Z),alt:"",style:{maxWidth:"100%"}})),Array.isArray(E.items)&&G(E.items)}),k},[]);return h?(0,Y.tZ)(O.Z,{columns:G((0,rn.cloneDeep)(A)),css:e.footer,bottom:(0,Y.tZ)("span",{dangerouslySetInnerHTML:{__html:h}})}):null};B.default=an}}]);
