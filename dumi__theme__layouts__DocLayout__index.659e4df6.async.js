"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{29292:function(Ln,R,t){t.d(R,{Z:function(){return U.Z}});var U=t(14223)},74232:function(Ln,R,t){t.d(R,{Z:function(){return U.Z}});var U=t(17501)},7936:function(Ln,R,t){t.r(R);var U=t(53649),D=t.n(U),J=t(75271),P=t(60885),rn=t(82145),_n=t(97940),kn=t(11486),c=t(96378),K,gn=function(e){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(p)},v=(0,_n.kc)(function(Q){var e=Q.token,p=Q.css,W=e.colorIcon,X=e.colorText,Z=e.iconCls;return{editButton:p(K||(K=D()([`
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
    `])),e.marginXS,Z,W,e.fontSizeLG,e.motionDurationSlow,X)}}),ln=function(e){var p=e.title,W=e.filename,X=v(),Z=X.styles,O=(0,kn.H)(),C=O.owner,nn=O.repo,dn=O.branch,hn=O.docDir;return(0,c.tZ)(rn.Z,{title:p},(0,c.tZ)("a",{className:Z.editButton,href:"".concat(gn("".concat(C,"/").concat(nn),dn)).concat(hn).concat(W),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(P.Z,null)))};R.default=ln},73594:function(Ln,R,t){t.d(R,{Z:function(){return J},f:function(){return D}});var U=t(75271),D=U.createContext(!1);function J(){return U.useContext(D)}},22687:function(Ln,R,t){var U=t(48305),D=t.n(U),J=t(15558),P=t.n(J),rn=t(82092),_n=t.n(rn),kn=t(53649),c=t.n(kn),K=t(75271),gn=t(45481),v=t(23753),ln=t(97940),Q=t(82187),e=t.n(Q),p=t(40674),W=t(41075),X=t(19888),Z=t(96378),O,C,nn;function dn(cn){return cn&&/^\d+\.\d+\.\d+$/.test(cn)}var hn=(0,ln.kc)(function(cn){var z=cn.css,H=cn.token;return{link:z(O||(O=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:z(C||(C=c()([`
    margin-inline-end: 0;
  `]))),subtitle:z(nn||(nn=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),H.fontSizeSM)}}),sn=function(z){var H,fn,tn=hn(),N=tn.styles,I=z.before,A=z.after,j=z.link,An=z.title,vn=z.subtitle,G=z.search,q=z.tag,en=z.className,Mn=(H=typeof q=="string"?q:q==null?void 0:q.title)!==null&&H!==void 0?H:"",V=(fn=typeof q=="string"?q:q==null?void 0:q.color)!==null&&fn!==void 0?fn:"";return!I&&!A?(0,Z.tZ)(W.Z,{to:"".concat(j).concat(G),className:e()(en,_n()({},N.link,Mn))},(0,Z.tZ)(gn.Z,null,(0,Z.tZ)("span",null,An),vn&&(0,Z.tZ)("span",{className:N.subtitle},vn)),Mn&&(0,Z.tZ)(v.Z,{bordered:!1,className:e()(N.tag),color:dn(V)||V==="New"?"success":"processing"},Mn)):(0,Z.tZ)(W.Z,{to:"".concat(j).concat(G),className:en},I,An,vn&&(0,Z.tZ)("span",{className:N.subtitle},vn),A)},Rn=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},H=(0,p.useFullSidebarData)(),fn=(0,X.Z)(),tn=fn.pathname,N=fn.search,I=(0,p.useSidebarData)(),A=z.before,j=z.after,An=(0,K.useMemo)(function(){var vn,G=P()(I!=null?I:[]);if(tn.startsWith("/docs/spec")){var q=G.splice(0,1);G.push.apply(G,P()(q))}if(tn.startsWith("/docs/react")){var en,Mn=(en=Object.entries(H).find(function(on){var E=D()(on,1),h=E[0];return h.startsWith("/changelog")}))===null||en===void 0?void 0:en[1];Mn&&G.splice(1,0,Mn[0])}if(tn.startsWith("/changelog")){var V,jn=(V=Object.entries(H).find(function(on){var E=D()(on,1),h=E[0];return h.startsWith("/docs/react")}))===null||V===void 0?void 0:V[1];jn&&(G.unshift(jn[0]),G.push.apply(G,P()(jn.slice(1))))}return(vn=G==null?void 0:G.reduce(function(on,E){if(E!=null&&E.title)if(tn.startsWith("/docs/spec")){var h,In,Wn=E.children.reduce(function(x,b){var B,$,an=(B=($=b.frontmatter)===null||$===void 0?void 0:$.type)!==null&&B!==void 0?B:"default";return x[an]||(x[an]=[]),x[an].push(b),x},{}),Tn=[];Tn.push.apply(Tn,P()((h=(In=Wn.default)===null||In===void 0?void 0:In.map(function(x){return{label:(0,Z.tZ)(W.Z,{to:"".concat(x.link).concat(N)},A,x==null?void 0:x.title,j),key:x.link.replace(/(-cn$)/g,"")}}))!==null&&h!==void 0?h:[])),Object.entries(Wn).forEach(function(x){var b=D()(x,2),B=b[0],$=b[1];B!=="default"&&Tn.push({type:"group",label:B,key:B,children:$==null?void 0:$.map(function(an){return{label:(0,Z.tZ)(W.Z,{to:"".concat(an.link).concat(N)},A,an==null?void 0:an.title,j),key:an.link.replace(/(-cn$)/g,"")}})})}),on.push({label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:Tn})}else{var Un;on.push({type:"group",label:E==null?void 0:E.title,key:E==null?void 0:E.title,children:(Un=E.children)===null||Un===void 0?void 0:Un.map(function(x){var b,B;return{label:(0,Z.tZ)(sn,{before:A,after:j,link:x.link,title:x==null?void 0:x.title,subtitle:(b=x.frontmatter)===null||b===void 0?void 0:b.subtitle,search:N,tag:((B=x.frontmatter)===null||B===void 0?void 0:B.tag)||""}),key:x.link.replace(/(-cn$)/g,"")}})})}else{var Dn=E.children||[];Dn.every(function(x){var b;return x==null||(b=x.frontmatter)===null||b===void 0?void 0:b.date})&&Dn.sort(function(x,b){var B,$;return((B=x.frontmatter)===null||B===void 0?void 0:B.date)>(($=b.frontmatter)===null||$===void 0?void 0:$.date)?-1:1}),on.push.apply(on,P()(Dn.map(function(x){var b;return{label:(0,Z.tZ)(sn,{before:A,after:j,link:x.link,title:x==null?void 0:x.title,search:N,tag:((b=x.frontmatter)===null||b===void 0?void 0:b.tag)||""}),key:x.link.replace(/(-cn$)/g,"")}})))}return on},[]))!==null&&vn!==void 0?vn:[]},[I,H,tn,N,z]);return[An,tn]};R.Z=Rn},54915:function(Ln,R,t){t.r(R),t.d(R,{default:function(){return bo}});var U=t(48305),D=t.n(U),J=t(82187),P=t.n(J),rn=t(16483),_n=t.n(rn),kn=t(81414),c=t(75271),K=t(70567),gn=t(41329),v=t(40674),ln=t(54425),Q=t(19888),e=t(96378),p=t(97940),W={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},X=function(){var n=(0,p.Fg)(),a=function l(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(l(s,i+1),`
    `):""},r=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(W[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",a("blue")," ",a("purple")," ",a("cyan")," ",a("green")," ",a("magenta")," ",a("red")," ",a("volcano")," ",a("orange")," ",a("gold")," ",a("yellow")," ",a("lime")," ",a("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},Z=X,O=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},C=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},nn=t(21793),dn=function(){return{"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}},hn=function(){var o=(0,p.Fg)(),n=o.anchorTop;return c.useInsertionEffect(function(){(0,nn.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},sn=t(84432),Rn=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",a,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",a,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",a,"-row>div,.code-box-demo ",a,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",a,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new sn.FastColor(r).setA(.75).toHexString(),";}}",a,"-row .demo-col,.code-box-demo ",a,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",a,"-row .demo-col-1{background:",new sn.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-2,.code-box-demo ",a,"-row .demo-col-2{background:",new sn.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-3,.code-box-demo ",a,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",a,"-row .demo-col-4,.code-box-demo ",a,"-row .demo-col-4{background:",new sn.FastColor(r).setA(.6).toHexString(),";}",a,"-row .demo-col-5,.code-box-demo ",a,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",a,"-row>div{margin-top:0;margin-bottom:0;}}","")})},cn=Rn,z=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},H=function(){var n=(0,p.Fg)(),a=n.antCls,r=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",r,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",a,"-row",a,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",a,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",a,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",a,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",r,"{color:",n.colorTextBase,";font-weight:bold;}}}",a,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},fn=H,tn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},N=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},I=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".clearfix{",dn(),";}.preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},A="dumi-default-",j=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",A,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",A,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",A,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},An=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},vn=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(C,null),(0,e.tZ)(hn,null),(0,e.tZ)(cn,null),(0,e.tZ)(z,null),(0,e.tZ)(fn,null),(0,e.tZ)(tn,null),(0,e.tZ)(N,null),(0,e.tZ)(I,null),(0,e.tZ)(An,null),(0,e.tZ)(Z,null),(0,e.tZ)(O,null),(0,e.tZ)(j,null))},G=vn,q=t(68585),en=t.n(q),Mn=t(26068),V=t.n(Mn),jn=t(82092),on=t.n(jn),E=t(53649),h=t.n(E),In=t(64733),Wn=t(52825),Tn=t(54669),Un=t(93362),Dn=t(32860),x=t(88283),b=t(56178),B=t(91011),$=t(41075),an,Qn,qn,ne,Xe=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.headerHeight,l=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:a(an||(an=h()([`
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
    `])),r,l,s,r,n.marginSM,l,i),title:a(Qn||(Qn=h()([`
      line-height: 40px;
    `]))),logoImage:a(qn||(qn=h()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `]))),tour:a(ne||(ne=h()([`
      .ant-popover-title,
      .ant-popover-inner-content {
        color: #fff;
      }
    `])))}}),$n="chaos.logo.tour.dismiss",Ge=function(n){var a=n.isZhCN,r=c.useState(!0),l=D()(r,2),s=l[0],i=l[1],d=(0,v.useSiteData)(),u=d.themeConfig,m=(0,v.useLocation)(),f=m.search,w=Xe(),S=w.styles,M=u.logo||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,b.Fy)()&&(localStorage.getItem($n)?i(!1):i(!0))},[s]),(0,e.tZ)("h1",null,(0,e.tZ)($.Z,{to:b.J1("/",a,f),className:S.logo},(0,e.tZ)(Tn.Z,{title:"\u9707\u60CA\u{1F389}\u{1F389}\u{1F389}",content:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"bottomRight",classNames:{root:S.tour},color:"#1677ff",open:s,onOpenChange:function(L){L?(i(!1),(0,b.Fy)()&&localStorage.setItem($n,"1")):i(L)}},(0,e.tZ)("img",{id:"chaos-logo",className:S.logoImage,src:M,draggable:!1,alt:"logo",onMouseEnter:function(){i(!1),(0,b.Fy)()&&localStorage.setItem($n,"1")}})),(0,e.tZ)("span",{className:S.title},"Chaos")))},Ve=Ge,$e=t(15558),Kn=t.n($e),ee=t(81905),On=t(11486),Ye=t(77855),Je=t(23831),Qe=t(32252),te=t(68714),oe=function(n){return(n!=null?n:[]).map(function(a,r){return{label:(0,e.tZ)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.text),key:r}})},qe=function(){var n=(0,te.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Je.Z,{menu:{items:oe(n)},placement:"bottomRight"},(0,e.tZ)(Qe.ZP,{size:"small"},(0,e.tZ)(v.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(Ye.Z,null))):null},nt=qe,ae,et=(0,p.kc)(function(o){var n=o.token,a=n.antCls,r=n.iconCls,l=n.fontFamily,s=n.fontSize,i=n.headerHeight,d=n.colorPrimary;return{nav:(0,p.iv)(ae||(ae=h()([`
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
    `])),s,l,a,a,a,40+12*2,i,n.paddingSM,n.paddingSM,i,a,r,a,d,a,a)}}),tt=function(n){var a,r,l=n.isZhCN,s=n.isMobile,i=n.responsive,d=n.directionText,u=(0,On.H)(),m=u.github,f=(0,v.useLocation)(),w=f.pathname,S=f.search,M=(0,v.useSiteData)(),_=M.locales,L=(0,v.useNavData)(),y=(0,v.useLocale)(),F=(0,te.Z)("moreLinks"),g=(0,v.useFullSidebarData)(),T=((a=g["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],Y=et(),xn=Y.styles,bn=s?"inline":"horizontal",En=w.split("/").filter(Boolean).slice(0,-1).join("/"),un="/".concat(En||"home");w.startsWith("/changelog")?un="/docs/react":w.startsWith("/docs/resources")&&(un="/docs/resources");var Pn=function Zn(Bn){return Bn.map(function(k){var mn,Vn=((mn=k.link)!==null&&mn!==void 0?mn:"").split("/").slice(0,2).join("/");return{label:k.children?k.title:(0,b.YW)(k.link)?(0,e.tZ)("a",{href:"".concat(k.link).concat(S),target:"_blank",rel:"noreferrer"},k.title):(0,e.tZ)($.Z,{to:"".concat(k.link).concat(S)},k.title),key:(0,b.YW)(k.link)?k.link:Vn,children:k.children?Zn(k.children):null}})},yn=Pn(L),zn=c.useCallback(function(){if(_.length<2)return null;if(_.length===2){var Zn=_.filter(function(k){return k.id!==(y==null?void 0:y.id)})[0],Bn=(0,b.cY)({pathname:w,current:y,target:Zn});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Bn},Zn.name),key:Zn.id}}return{label:(0,e.tZ)("span",null,y.name),key:"multi-lang",children:_.filter(function(k){return k.id!==y.id}).map(function(k){var mn=(0,b.cY)({pathname:w,current:y,target:k});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:mn},k.name),key:k.id}})}},[y,_]),wn=[],Sn=[m?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:m,target:"_blank"},"GitHub"),key:"github"}:null].concat(Kn()(oe(F)||[]));s?wn=Sn:i==="crowded"&&(wn=[{label:(0,e.tZ)(In.Z,null),key:"additional",children:Kn()(Sn)}]);var Gn=[].concat(Kn()(yn!=null?yn:[]),[T.length?{label:(0,e.tZ)($.Z,{to:b.J1(T.sort(function(Zn,Bn){var k,mn;return((k=Zn.frontmatter)===null||k===void 0?void 0:k.date)>((mn=Bn.frontmatter)===null||mn===void 0?void 0:mn.date)?-1:1})[0].link,l,S)},y==null?void 0:y.blog),key:"docs/blog"}:null],Kn()((r=wn)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,e.tZ)(ee.Z,{mode:bn,selectedKeys:[un],className:xn.nav,items:Gn})},ot=tt,at=t(35947),re=t(82145),ie=t(16932),Yn="1.2em",rt=function(){var n=(0,ie.Z)(),a=n.token,r=a.controlHeight,l=a.motionDurationMid;return{btn:(0,e.iv)("color:",a.colorText,";border-color:",a.colorBorder,";padding:0!important;width:",r,"px;height:",r,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",a.borderRadius,"px;transition:all ",l,";cursor:pointer;.btn-inner{transition:all ",l,";}&:hover{background:",a.colorBgTextHover,";}img{width:",Yn,";height:",Yn,";}.anticon{font-size:",Yn,";}","")}},it=function(){var n=(0,On.H)(),a=n.github,r=rt();return(0,e.tZ)("div",null,a?(0,e.tZ)(re.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:a,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[r.btn,"",""],type:"button"},(0,e.tZ)(at.Z,null)))):null)},lt=it,dt=t(43151),le=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);r/=255,l/=255,s/=255;var i=Math.max(r,l,s),d=Math.min(r,l,s),u,m,f=(i+d)/2;if(i===d)u=m=0;else{var w=i-d;switch(m=f>.5?w/(2-i-d):w/(i+d),i){case r:u=(l-s)/w+(l<s?6:0);break;case l:u=(s-r)/w+2;break;case s:u=(r-l)/w+4;break}u/=6}return m=m*100,f=f*100-a,"hsl(".concat(Math.round(u*360),", ").concat(Math.round(m),"%, ").concat(Math.round(f),"%)")},st=function(n){var a=n.backgroundColor,r=a===void 0?"#e8d7ff":a,l=n.textColor,s=l===void 0?"#091E42":l,i=n.align,d=i===void 0?"center":i,u=(0,ie.Z)(),m=u.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",m.fontSize,"px;@media only screen and (max-width: ",m.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",le(r,10),";--site-announcement-bar-stripe-color2:",le(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,d,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},de="chaos.announcement.dismiss",ct=function(){var n=(0,c.useState)(!0),a=D()(n,2),r=a[0],l=a[1],s=(0,On.Z)()||{},i=s.announcementBar,d=(0,B.A)(),u=d.updateSiteConfig,m=st(i||{});(0,c.useEffect)(function(){i!=null&&i.id?!(0,b.Fy)()||localStorage.getItem(de)===i.id?l(!0):l(!1):l(!0)},[i]),(0,c.useEffect)(function(){u({bannerVisible:!r})},[r]);var f=(0,c.useCallback)(function(){i!=null&&i.id&&(0,b.Fy)()&&localStorage.setItem(de,i.id),l(!0)},[]);return r?null:(0,e.tZ)(K.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(dt.Z,en()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[m.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var S;if((S=window)!==null&&S!==void 0&&S.gtag){var M,_;(M=(_=window).gtag)===null||M===void 0||M.call(_,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:f,css:i!=null&&i.backgroundColor?[m.container]:[]}))))},ut=ct,se,ce,ue,me,pe,Hn="1.2em",mt=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.colorText,l=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,d=n.borderRadius,u=n.controlHeight,m=n.motionDurationMid;return{btn:a(se||(se=h()([`
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
    `])),r,l,u,u,d,m,m,i,Hn,Hn,Hn),innerDiv:a(ce||(ce=h()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Hn,Hn),labelStyle:a(ue||(ue=h()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Hn,r,r),label1Style:a(me||(me=h()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,s),label2Style:a(pe||(pe=h()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(n){var a=n.label1,r=n.label2,l=n.tooltip1,s=n.tooltip2,i=n.value,d=n.pure,u=n.onClick,m=mt(),f=m.styles,w=f.btn,S=f.innerDiv,M=f.labelStyle,_=f.label1Style,L=f.label2Style,y=(0,e.tZ)("button",{type:"button",onClick:u,className:w,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},d&&(i===1?a:r),!d&&(0,e.tZ)("div",{className:S},(0,e.tZ)("span",{className:P()(M,i===1?_:L)},a),(0,e.tZ)("span",{className:P()(M,i===1?L:_)},r))));return l||s?(0,e.tZ)(re.Z,{title:i===1?l:s},y):y},ge=pt,gt=Wn.default.Option,ht="chaos.locale",ft=function(){var n=(0,v.useSearchParams)(),a=D()(n,1),r=a[0],l=(0,On.Z)(),s=l.localesEnhance,i=(0,v.useSiteData)(),d=i.locales,u=(0,v.useIntl)(),m=u.locale,f=(0,v.useLocale)(),w=(0,v.useLocation)(),S=w.pathname,M=(0,c.useCallback)(function(g){var T=(0,b.cY)({pathname:S,current:f,target:d.find(function(Y){var xn=Y.id;return xn===g})});b.Fy()&&localStorage.setItem(ht,b.KE(S)?"en-US":"zh-CN"),T.startsWith("/-")?T="/index".concat(T.substring(1)):T.endsWith("/index")&&(T=T.replace("/index","/")),v.history.push({pathname:T,search:r.toString()})},[S,f,d,r]),_=(0,c.useCallback)(function(){M(d.filter(function(g){return g.id!==m})[0].id)},[m,M,d]),L;if(d.length>2||!s&&d.length>2){var y=d.map(function(g){return(0,e.tZ)(gt,{value:g.id,key:g.id},g.name)});L=L=(0,e.tZ)(Wn.default,{key:"lang",className:"version",size:"small",defaultValue:m,onChange:M,popupMatchSelectWidth:!1,getPopupContainer:function(T){return T.parentNode}},y)}else if(d.length===2&&Array.isArray(s)&&s.length>1){var F=d[0].id===m?1:2;L=(0,e.tZ)(ge,{key:"lang",onClick:_,value:F,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(d[0].name," / ").concat(d[1].name),tooltip2:"".concat(d[1].name," / ").concat(d[0].name)})}return L},vt=ft,xt=t(25108),bt=function(n){var a=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},yt=c.forwardRef(function(o,n){return(0,e.tZ)(xt.Z,en()({ref:n,component:function(){return(0,e.tZ)(bt,{direction:o.direction})}},o))}),he=yt,fe,wt=(0,p.kc)(function(o){var n=o.token,a=o.css;return{dataDirectionIcon:a(fe||(fe=h()([`
      width: 20px;
    `])))}}),St=function(){var n=(0,c.useContext)(B.Z),a=n.direction,r=n.updateSiteConfig,l=wt(),s=l.styles,i=(0,On.Z)(),d=i.rtl,u=d===void 0?!0:d;if(!u)return null;var m=function(){r({direction:a!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(ge,{key:"direction",onClick:m,value:a==="rtl"?2:1,label1:(0,e.tZ)(he,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(he,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},_t=St,ve,xe,be,ye,we,Se,_e,ke,Ze,Ce=1120,Me=1200,kt=(0,p.kc)(function(o){var n=o.token,a=o.css,r="#ced4d9";return{header:a(ve||(ve=h()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,r,n.colorPrimary,r,r,n.borderRadiusSM,n.paddingSM),searchBarContainer:a(xe||(xe=h()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:a(be||(be=h()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuCol:a(ye||(ye=h()([`
      display: flex;
      align-items: center;
    `]))),menuRow:a(we||(we=h()([`
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
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(Se||(Se=h()([`
      width: 20px;
    `]))),popoverMenu:on()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(_e||(_e=h()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(ke||(ke=h()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(Ze||(Ze=h()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Zt=function(){var n,a=(0,v.useSiteData)(),r=a.pkg,l=(0,On.Z)(),s=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),i=D()(s,2),d=i[0],u=i[1],m=(0,c.useContext)(B.Z),f=m.direction,w=m.isMobile,S=m.updateSiteConfig,M=(0,c.useRef)(null),_=(0,v.useLocation)(),L=_.pathname,y=_.search,F=kt(),g=F.styles,T=(0,c.useCallback)(function(){u(function(pn){return V()(V()({},pn),{},{menuVisible:!1})})},[]),Y=(0,c.useCallback)(function(){u(function(pn){var Cn;return V()(V()({},pn),{},{windowWidth:(Cn=window)===null||Cn===void 0?void 0:Cn.innerWidth})})},[]),xn=(0,c.useCallback)(function(pn){u(function(Cn){return V()(V()({},Cn),{},{menuVisible:pn})})},[]);(0,c.useEffect)(function(){T()},[_]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(Y(),window.addEventListener("resize",Y),function(){window.removeEventListener("resize",Y),M.current&&clearTimeout(M.current)})},[]);var bn=(0,c.useCallback)(function(pn){if(typeof window!="undefined"){var Cn=window.location.href,yo=new URL(Cn.replace(window.location.origin,pn));window.location.href=yo.href.replace(/\/$/,"")}},[]),En=(0,c.useMemo)(function(){return f!=="rtl"?"RTL":"LTR"},[f]),un=(0,c.useMemo)(function(){return f==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[f]),Pn=d.menuVisible,yn=d.windowWidth,zn=d.searching,wn=V()(V()({},r.version?on()({},r.version,r.version):{}),l==null?void 0:l.docVersions),Sn=Object.keys(wn).filter(Boolean).map(function(pn){return{value:wn[pn],label:pn}}),Gn=["","index","index-cn"].includes(L),Zn=b.KE(L),Bn=f==="rtl",k=null;yn<Ce?k="crowded":yn<Me&&(k="narrow");var mn=P()(g.header,"clearfix",{"home-header":Gn}),Vn={isZhCN:Zn,isRTL:Bn},Fe=(0,e.tZ)(ot,en()({key:"nav"},Vn,{responsive:k,isMobile:w,directionText:En})),Fn=[Fe,Sn.length>0?(0,e.tZ)(Wn.default,{key:"version",size:"small",className:g.versionSelect,defaultValue:(n=Sn[0])===null||n===void 0?void 0:n.value,onChange:bn,dropdownStyle:un,popupMatchSelectWidth:!1,getPopupContainer:function(Cn){return Cn.parentNode},options:Sn}):null,(0,e.tZ)(nt,{key:"more"}),(0,e.tZ)(vt,{key:new Date().getTime()}),(0,e.tZ)(_t,{key:"direction"}),(0,e.tZ)(lt,{key:"header-Extra"})];yn<Ce?Fn=zn?[]:[Fe]:yn<Me&&(Fn=zn?[]:Fn);var Ke=Gn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:mn},w&&(0,e.tZ)(Tn.Z,{classNames:{root:g.popoverMenu},placement:"bottomRight",content:Fn,trigger:"click",open:Pn,arrow:{pointAtCenter:!0},onOpenChange:xn},(0,e.tZ)(In.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ut,null),(0,e.tZ)(Un.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Dn.Z,Ke[0],(0,e.tZ)(Ve,en()({},Vn,{location:_}))),(0,e.tZ)(Dn.Z,en()({},Ke[1],{className:g.menuCol}),(0,e.tZ)("div",{className:g.menuRow},(0,e.tZ)("div",{className:g.searchBarContainer},(0,e.tZ)("div",{className:g.searchBar},(0,e.tZ)(x.ZP,null))),!w&&Fn))))},Ct=Zt,wo=t(75927),Mt=t(30571),Dt=t(96718),De=t(67034),Et=function(n){var a=n.children,r=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,r),(0,e.tZ)("meta",{property:"og:title",content:r}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)(Mt.Z,null),(0,e.tZ)(Dt.Z,null),(0,e.tZ)("div",{style:{minHeight:"200px"}},a),(0,e.tZ)(De.default,null))},Lt=Et,Tt=t(66112),Ee=t(19972),Le=t(73594),Ot=function(){var n=(0,v.useRouteMeta)(),a=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var d;i="".concat(n.frontmatter.subtitle||""," ").concat(((d=n.frontmatter)===null||d===void 0?void 0:d.title)||""," - Ant Design")}var u=n.frontmatter.description||"";return[i,u]},[n]),r=D()(a,2),l=r[0],s=r[1];return(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Te=Ot,Pt=t(7936),zt=t(24415),Bt=t(38209),Rt=t.n(Bt),At=t(39696),Oe,Pe,ze,Be=["scroll","resize"],It=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.boxShadowSecondary,l=n.antCls;return{affixTabs:a(Oe||(Oe=h()([`
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
    `])),r,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:a(Pe||(Pe=h()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(ze||(ze=h()([`
      text-transform: capitalize;
    `])))}}),Re=32,Wt=function(){var n=c.useRef(null),a=c.useRef([]),r=c.useState(!1),l=D()(r,2),s=l[0],i=l[1],d=c.useState(void 0),u=D()(d,2),m=u[0],f=u[1],w=It(),S=w.styles,M=S.affixTabs,_=S.affixTabsFixed,L=S.span;function y(g){var T=document.getElementById(g);if(T){var Y=T.offsetTop-n.current.offsetHeight-Re;(0,At.Z)(Y)}}c.useEffect(function(){var g=document.querySelectorAll("h2[id]");a.current=Array.from(g).map(function(T){var Y=T.id;return Y}),i(!0)},[]),c.useEffect(function(){var g=decodeURIComponent((location.hash||"").slice(1));g&&y(g)},[s]);var F=c.useMemo(function(){function g(){for(var T=window,Y=T.scrollY,xn=n.current.offsetHeight,bn=a.current.length-1;bn>=0;bn-=1){var En=a.current[bn],un=document.getElementById(En),Pn=un.offsetTop-xn-Re;if(Pn<=Y){f(En);return}}f(void 0)}return Rt()(g)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(Be.forEach(function(g){return window.addEventListener(g,F)}),F(),function(){Be.forEach(function(g){return window.removeEventListener(g,F)})})},[]),(0,e.tZ)("div",{className:P()(M,m&&_),ref:n},(0,e.tZ)(zt.Z,{activeKey:m,centered:!0,size:"large",onChange:y,items:a.current.map(function(g){return{key:g,label:(0,e.tZ)("span",{className:L},g.replace(/-/g," "))}})}))},Ht=Wt,Ae,Ie,We,He=40,Xn=1208,Jn=24,Nt=function(){var n=(0,Le.Z)();return(0,p.kc)(function(a){var r=a.token,l=a.css,s=r.antCls;return{resourcePage:l(Ae||(Ae=h()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),Xn),resourceContent:l(Ie||(Ie=h()([`
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
      `])),He,Xn,Jn,s,r.padding,r.padding),banner:l(We||(We=h()([`
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
      `])),He,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",Xn,Xn,r.fontSizeLG,Jn,Jn)}})()},jt=function(n){var a,r=n.children,l=Nt(),s=l.styles,i=(0,v.useRouteMeta)(),d=(0,Le.Z)(),u=(0,e.tZ)(Tt.Z,null,(0,e.tZ)(Te,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(Ht,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(Ee.Z.Title,{style:{fontSize:30}},(a=i.frontmatter)===null||a===void 0?void 0:a.title,(0,e.tZ)(Pt.default,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},r),(0,e.tZ)(De.default,null)));return d?u:(0,e.tZ)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}}},u)},Ut=jt,Ft=t(10696),Kt=t(45481),Xt=t(41969),Gt=t(51077),Vt=t(19453),$t=t(29135),Yt=t(41698),Jt=function(n){var a=n.children,r=n.fallback,l=r===void 0?(0,e.tZ)($t.Z.Input,{active:!0,size:"small"}):r,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)(Yt.df,{triggerOnce:!0,delay:i},function(d){var u=d.inView,m=d.ref;return(0,e.tZ)("div",{ref:m},(0,e.tZ)(c.Suspense,{fallback:l},u?a:(0,e.tZ)("span",null)))})},Nn=Jt,Qt=t(95561),qt=c.lazy(function(){return Promise.all([t.e(1045),t.e(2031)]).then(t.bind(t,32031))}),no=c.lazy(function(){return Promise.resolve().then(t.bind(t,95561))}),eo=c.lazy(function(){return t.e(7056).then(t.bind(t,37056))}),to=c.lazy(function(){return Promise.resolve().then(t.bind(t,67034))}),oo=c.lazy(function(){return t.e(270).then(t.bind(t,32433))}),ao=c.lazy(function(){return Promise.resolve().then(t.bind(t,7936))}),ro=c.lazy(function(){return t.e(1786).then(t.bind(t,91786))}),io=function(n){var a,r,l,s,i=n.children,d=(0,v.useRouteMeta)(),u=(0,Q.Z)(),m=u.pathname,f=u.hash,w=(0,On.H)(),S=(0,c.useContext)(B.Z),M=S.direction,_=(0,Qt.useStyle)(),L=_.styles,y=(0,Xt.Z)(!1),F=D()(y,2),g=F[0],T=F[1],Y=(0,c.useState)("tsx"),xn=D()(Y,2),bn=xn[0],En=xn[1],un=(0,c.useMemo)(function(){var wn;return((wn=d.toc)===null||wn===void 0?void 0:wn.filter(function(Sn){return Sn._debug_demo}).map(function(Sn){return Sn.id}))||[]},[d]),Pn=un.includes(f.slice(1));(0,c.useLayoutEffect)(function(){T(Pn)},[]);var yn=(0,c.useMemo)(function(){return{showDebug:g,setShowDebug:T,codeType:bn,setCodeType:En}},[g,bn,un]),zn=M==="rtl";return(0,e.tZ)(Vt.Z.Provider,{value:yn},(0,e.tZ)(Dn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(Nn,{fallback:null},(0,e.tZ)(no,{showDebug:g,debugDemos:un})),(0,e.tZ)("article",{className:P()(L.articleWrapper,{rtl:zn})},(a=d.frontmatter)!==null&&a!==void 0&&a.title?(0,e.tZ)(Ft.Z,{justify:"space-between"},(0,e.tZ)(Ee.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Kt.Z,null,(0,e.tZ)("span",null,(r=d.frontmatter)===null||r===void 0?void 0:r.title),(0,e.tZ)("span",null,(l=d.frontmatter)===null||l===void 0?void 0:l.subtitle),!m.startsWith("/components/overview")&&(0,e.tZ)(Nn,{fallback:null},(0,e.tZ)(ao,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename}))))):null,(0,e.tZ)(Nn,{fallback:null},(0,e.tZ)(eo,null)),!d.frontmatter.__autoDescription&&d.frontmatter.description,d.frontmatter.category==="Components"&&String(d.frontmatter.showImport)!=="false"&&(0,e.tZ)(Gt.Z,{source:!0,component:d.frontmatter.title,filename:d.frontmatter.filename,version:d.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"},className:"clearfix"},i),(0,e.tZ)("div",{style:{marginTop:80,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},(0,e.tZ)(Nn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(qt,en()({},w,{filename:"".concat(w.originDocDir).concat(d.frontmatter.filename)}))),(0,e.tZ)(Nn,{fallback:null},(0,e.tZ)("div",{className:P()(L.bottomEditContent,{rtl:zn})},(0,e.tZ)(ro,{time:(s=d.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(Nn,{fallback:null},(0,e.tZ)(oo,{rtl:zn})),(0,e.tZ)(to,null)))},lo=io,so=t(92828),co=t(22687),Ne,je,uo=(0,p.kc)(function(o){var n=o.token,a=o.css,r=n.antCls,l=n.fontFamily,s=n.colorSplit,i=n.marginXXL,d=n.paddingXXS;return{asideContainer:a(Ne||(Ne=h()([`
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
    `])),i,l,d,r,r,r,r,n.fontSize,r,r,n.margin,n.margin,n.fontSize,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,n.marginXXS,r,n.padding,r,r,r,n.padding,r,r),mainMenu:a(je||(je=h()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),mo=function(){var n=(0,v.useSidebarData)(),a=(0,c.useContext)(B.Z),r=a.isMobile,l=a.theme,s=uo(),i=s.styles,d=(0,co.Z)(),u=D()(d,2),m=u[0],f=u[1],w=l.includes("dark"),S=(0,p.Fg)(),M=S.colorBgContainer,_=(0,e.tZ)(K.ZP,{theme:{components:{Menu:{itemBg:M,darkItemBg:M}}}},(0,e.tZ)(ee.Z,{items:m,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:w?"dark":"light",selectedKeys:[f],defaultOpenKeys:n==null?void 0:n.map(function(L){var y=L.title;return y}).filter(Boolean)}));return r?(0,e.tZ)(so.Z,{key:"Mobile-menu"},_):(0,e.tZ)(Dn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},_)},po=mo,Ue,go=(0,p.kc)(function(o){var n=o.css,a=o.token;return{main:n(Ue||(Ue=h()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),ho=function(n){var a=n.children,r=go(),l=r.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(Te,null),(0,e.tZ)(po,null),(0,e.tZ)(lo,null,a))},fo=ho,vo={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},xo=function(){var n=(0,v.useOutlet)(),a=(0,Q.Z)(),r=a.pathname,l=a.search,s=a.hash,i=(0,ln.default)(vo),d=D()(i,2),u=d[0],m=d[1],f=(0,c.useRef)(null),w=(0,c.useContext)(B.Z),S=w.direction,M=(0,v.useSiteData)(),_=M.loading;(0,c.useLayoutEffect)(function(){m==="cn"?_n().locale("zh-cn"):_n().locale("en")},[]),(0,c.useEffect)(function(){var y=document.getElementById("nprogress-style");return f.current=setTimeout(function(){y==null||y.remove()},0),function(){return clearTimeout(f.current)}},[]),(0,c.useEffect)(function(){var y=s.replace("#","");if(y){var F;(F=document.getElementById(decodeURIComponent(y)))===null||F===void 0||F.scrollIntoView()}},[_,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+l)},[a]);var L=c.useMemo(function(){return["","/"].some(function(y){return y===r})||["/index"].some(function(y){return r.startsWith(y)})?(0,e.tZ)(Lt,{title:u.title,desc:u.description},n):r.startsWith("/docs/resource")?(0,e.tZ)(Ut,null,n):r.startsWith("/theme-editor")?n:(0,e.tZ)(fo,null,n)},[r,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:m==="cn"?"zh-CN":m,"data-direction":S,className:P()({rtl:S==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:u.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(K.ZP,{direction:S,locale:m==="cn"?gn.Z:void 0},(0,e.tZ)(G,null),(0,e.tZ)(Ct,null),L))},bo=xo},95561:function(Ln,R,t){t.r(R),t.d(R,{useStyle:function(){return X}});var U=t(26068),D=t.n(U),J=t(53649),P=t.n(J),rn=t(75271),_n=t(10286),kn=t(97940),c=t(82187),K=t.n(c),gn=t(40674),v=t(91011),ln=t(96378),Q,e,p,W,X=(0,kn.kc)(function(O){var C=O.token,nn=O.css,dn=C.antCls,hn=(0,rn.useContext)(v.Z),sn=hn.bannerVisible;return{anchorToc:nn(Q||(Q=P()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),dn,dn,C.fontSizeSM),tocWrapper:nn(e||(e=P()([`
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
    `])),C.headerHeight+C.contentMarginTop+(sn?C.bannerHeight:0)-4,C.borderRadius,C.purple6,C.purple5,C.headerHeight+C.contentMarginTop+24,C.paddingXXS,C.screenLG),articleWrapper:nn(p||(p=P()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),C.screenLG,C.paddingLG*2),bottomEditContent:nn(W||(W=P()([`
      min-width: 200px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    `])))}}),Z=function(C){var nn=C.showDebug,dn=C.debugDemos,hn=dn===void 0?[]:dn,sn=X(),Rn=sn.styles,cn=(0,kn.Fg)(),z=(0,gn.useRouteMeta)(),H=(0,gn.useTabMeta)(),fn=function(I){var A;return{href:"#".concat(I.id),title:I.title,key:I.id,children:(A=I.children)===null||A===void 0?void 0:A.filter(function(j){return nn||!hn.includes(j.id)}).map(function(j){return{key:j.id,href:"#".concat(j.id),title:(0,ln.tZ)("span",{className:K()({"toc-debug":hn.includes(j.id)})},j==null?void 0:j.title)}})}},tn=rn.useMemo(function(){return((H==null?void 0:H.toc)||z.toc).reduce(function(N,I){if(I.depth===2)N.push(D()({},I));else if(I.depth===3){var A=N[N.length-1];A&&(A.children=A.children||[],A.children.push(D()({},I)))}return N},[])},[H==null?void 0:H.toc,z.toc]);return z.frontmatter.toc?(0,ln.tZ)("section",{className:Rn.tocWrapper},(0,ln.tZ)(_n.Z,{affix:!1,className:Rn.anchorToc,targetOffset:cn.anchorTop,showInkInFixed:!0,items:tn.map(fn)})):null};R.default=Z},67034:function(Ln,R,t){t.r(R);var U=t(75271),D=t(91574),J=t(96378),P=t(33230),rn=t(32699),_n=t.n(rn),kn=t(96058),c=t(16932),K=t(68714),gn=t(91011),v=function(){var e=(0,c.Z)(),p=e.token,W=(0,K.Z)("footerLinks"),X=(0,U.useContext)(gn.Z),Z=X.isMobile,O=new D.C((0,kn.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,J.iv)("background:",O,";",""),footer:(0,J.iv)("background:",O,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",Z?60:0,"px;:last-child{margin-bottom:",Z?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(W)&&W.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},ln=function(){var e=v(),p=(0,K.Z)("footer"),W=(0,K.Z)("footerLinks"),X=(0,U.useCallback)(function(Z){return Array.isArray(Z)&&Z.forEach(function(O){var C=O.icon;O.icon&&(delete O.icon,O.icon=(0,J.tZ)("img",{src:String(C),alt:"",style:{maxWidth:"100%"}})),Array.isArray(O.items)&&X(O.items)}),Z},[]);return p?(0,J.tZ)(P.Z,{columns:X((0,rn.cloneDeep)(W)),css:e.footer,bottom:(0,J.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};R.default=ln}}]);
