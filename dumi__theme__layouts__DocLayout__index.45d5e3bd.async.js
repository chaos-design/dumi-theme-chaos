"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{11446:function(We,I,t){t.d(I,{Z:function(){return ne.Z}});var ne=t(28442)},25457:function(We,I,t){t.r(I);var ne=t(53649),b=t.n(ne),fe=t(75271),Z=t(60885),X=t(56995),F=t(73005),ve=t(80553),c=t(96378),K,xe=function(n){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(n,"/edit/").concat(m)},p=(0,F.kc)(function(te){var n=te.token,m=te.css,W=n.colorIcon,oe=n.colorText,k=n.iconCls;return{editButton:m(K||(K=b()([`
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
    `])),n.marginXS,k,W,n.fontSizeLG,n.motionDurationSlow,oe)}}),pe=function(n){var m=n.title,W=n.filename,oe=p(),k=oe.styles,f=(0,ve.H)(),q=f.user,re=f.repo,N=f.branch,be=f.docDir;return(0,c.tZ)(X.Z,{title:m},(0,c.tZ)("a",{className:k.editButton,href:"".concat(xe("".concat(q,"/").concat(re),N)).concat(be).concat(W),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(Z.Z,null)))};I.default=pe},49630:function(We,I,t){t.d(I,{Z:function(){return fe},f:function(){return b}});var ne=t(75271),b=ne.createContext(!1);function fe(){return ne.useContext(b)}},88989:function(We,I,t){var ne=t(48305),b=t.n(ne),fe=t(15558),Z=t.n(fe),X=t(82092),F=t.n(X),ve=t(53649),c=t.n(ve),K=t(75271),xe=t(43356),p=t(53453),pe=t(73005),te=t(82187),n=t.n(te),m=t(28691),W=t(45679),oe=t(73168),k=t(96378),f,q,re;function N(ie){return ie&&/^\d+\.\d+\.\d+$/.test(ie)}var be=(0,pe.kc)(function(ie){var M=ie.css,ce=ie.token;return{link:M(f||(f=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:M(q||(q=c()([`
    margin-inline-end: 0;
  `]))),subtitle:M(re||(re=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),ce.fontSizeSM)}}),Me=function(M){var ce,ye,V=be(),P=V.styles,O=M.before,H=M.after,ke=M.link,Ie=M.title,ge=M.subtitle,z=M.search,B=M.tag,ue=M.className,G=(ce=typeof B=="string"?B:B==null?void 0:B.title)!==null&&ce!==void 0?ce:"",me=(ye=typeof B=="string"?B:B==null?void 0:B.color)!==null&&ye!==void 0?ye:"";return!O&&!H?(0,k.tZ)(W.Z,{to:"".concat(ke).concat(z),className:n()(ue,F()({},P.link,G))},(0,k.tZ)(xe.Z,null,(0,k.tZ)("span",null,Ie),ge&&(0,k.tZ)("span",{className:P.subtitle},ge)),G&&(0,k.tZ)(p.Z,{bordered:!1,className:n()(P.tag),color:N(me)||me==="New"?"success":"processing"},G)):(0,k.tZ)(W.Z,{to:"".concat(ke).concat(z),className:ue},O,Ie,ge&&(0,k.tZ)("span",{className:P.subtitle},ge),H)},Re=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ce=(0,m.useFullSidebarData)(),ye=(0,oe.Z)(),V=ye.pathname,P=ye.search,O=(0,m.useSidebarData)(),H=M.before,ke=M.after,Ie=(0,K.useMemo)(function(){var ge,z=Z()(O!=null?O:[]);if(V.startsWith("/docs/spec")){var B=z.splice(0,1);z.push.apply(z,Z()(B))}if(V.startsWith("/docs/react")){var ue,G=(ue=Object.entries(ce).find(function(ae){var u=b()(ae,1),de=u[0];return de.startsWith("/changelog")}))===null||ue===void 0?void 0:ue[1];G&&z.splice(1,0,G[0])}if(V.startsWith("/changelog")){var me,le=(me=Object.entries(ce).find(function(ae){var u=b()(ae,1),de=u[0];return de.startsWith("/docs/react")}))===null||me===void 0?void 0:me[1];le&&(z.unshift(le[0]),z.push.apply(z,Z()(le.slice(1))))}return(ge=z==null?void 0:z.reduce(function(ae,u){if(u!=null&&u.title)if(V.startsWith("/docs/spec")){var de,$,Te=u.children.reduce(function(v,A){var y,j,J=(y=(j=A.frontmatter)===null||j===void 0?void 0:j.type)!==null&&y!==void 0?y:"default";return v[J]||(v[J]=[]),v[J].push(A),v},{}),Y=[];Y.push.apply(Y,Z()((de=($=Te.default)===null||$===void 0?void 0:$.map(function(v){return{label:(0,k.tZ)(W.Z,{to:"".concat(v.link).concat(P)},H,v==null?void 0:v.title,ke),key:v.link.replace(/(-cn$)/g,"")}}))!==null&&de!==void 0?de:[])),Object.entries(Te).forEach(function(v){var A=b()(v,2),y=A[0],j=A[1];y!=="default"&&Y.push({type:"group",label:y,key:y,children:j==null?void 0:j.map(function(J){return{label:(0,k.tZ)(W.Z,{to:"".concat(J.link).concat(P)},H,J==null?void 0:J.title,ke),key:J.link.replace(/(-cn$)/g,"")}})})}),ae.push({label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:Y})}else{var Ne;ae.push({type:"group",label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:(Ne=u.children)===null||Ne===void 0?void 0:Ne.map(function(v){var A,y;return{label:(0,k.tZ)(Me,{before:H,after:ke,link:v.link,title:v==null?void 0:v.title,subtitle:(A=v.frontmatter)===null||A===void 0?void 0:A.subtitle,search:P,tag:((y=v.frontmatter)===null||y===void 0?void 0:y.tag)||""}),key:v.link.replace(/(-cn$)/g,"")}})})}else{var Ze=u.children||[];Ze.every(function(v){var A;return v==null||(A=v.frontmatter)===null||A===void 0?void 0:A.date})&&Ze.sort(function(v,A){var y,j;return((y=v.frontmatter)===null||y===void 0?void 0:y.date)>((j=A.frontmatter)===null||j===void 0?void 0:j.date)?-1:1}),ae.push.apply(ae,Z()(Ze.map(function(v){var A;return{label:(0,k.tZ)(Me,{before:H,after:ke,link:v.link,title:v==null?void 0:v.title,search:P,tag:((A=v.frontmatter)===null||A===void 0?void 0:A.tag)||""}),key:v.link.replace(/(-cn$)/g,"")}})))}return ae},[]))!==null&&ge!==void 0?ge:[]},[O,ce,V,P,M]);return[Ie,V]};I.Z=Re},43220:function(We,I,t){t.r(I),t.d(I,{default:function(){return So}});var ne=t(48305),b=t.n(ne),fe=t(82187),Z=t.n(fe),X=t(16483),F=t.n(X),ve=t(81414),c=t(75271),K=t(66108),xe=t(64380),p=t(28691),pe=t(56721),te=t(73168),n=t(96378),m=t(73005),W={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},oe=function(){var e=(0,m.Fg)(),a=function i(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return d<=10?`
.palette-`.concat(s,"-").concat(d,` {
  background: `).concat(e["".concat(s,"-").concat(d)],`;
}
`).concat(i(s,d+1),`
    `):""},r=function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(W[s],`;
}
`).concat(i(s+1),`
    `):""};return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",e.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",e.marginMD,"px;font-size:",e.fontSizeXL,"px;text-align:center;}&-picker{margin:",e.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",e.margin,"px;font-size:",e.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",e.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",e.margin,"px;color:",e.colorError,";font-size:",e.fontSize,"px;.ant-row-rtl &{margin-inline-end:",e.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",a("blue")," ",a("purple")," ",a("cyan")," ",a("green")," ",a("magenta")," ",a("red")," ",a("volcano")," ",a("orange")," ",a("gold")," ",a("yellow")," ",a("lime")," ",a("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",e.marginXXS,"px;padding:0 ",e.paddingSM,"px;font-size:",e.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",e.motionDurationMid,";&:first-child{border-radius:",e.borderRadiusSM,"px ",e.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",e.borderRadiusSM,"px ",e.borderRadiusSM,"px;}&:hover{margin-inline-end:-",e.marginXS,"px;border-radius:0 ",e.borderRadiusSM,"px ",e.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",e.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",e.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",e.motionDurationSlow,";}}.color-title{margin:0 0 ",e.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",e.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",e.paddingXL,"px ",e.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",e.borderRadiusSM,"px ",e.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",e.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},k=oe,f=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},q=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},re=t(21793),N=function(){var o=(0,m.Fg)(),e=o.anchorTop;return c.useInsertionEffect(function(){(0,re.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,n.tZ)(n.xB,{styles:(0,n.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",e,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},be=t(84432),Me=function(){var e=(0,m.Fg)(),a=e.antCls,r=e.colorPrimary;return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".markdown{color:",e.colorText,";font-size:",e.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",e.marginXS,"px;margin-bottom:",e.marginMD,"px;color:",e.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",e.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",e.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",e.colorTextHeading,";font-weight:500;font-family:Avenir,",e.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",e.fontSizeLG,"px;}.markdown h5{font-size:",e.fontSize,"px;}.markdown h6{font-size:",e.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",e.marginLG,"px 0;background:",e.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",a,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",e.paddingXXS,"px;margin-inline-start:",e.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",e.siteMarkdownCodeBg,";border:1px solid ",e.colorSplit,";border-radius:",e.borderRadiusSM,"px;}.markdown pre{font-family:",e.codeFamily,";background:",e.siteMarkdownCodeBg,";border-radius:",e.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",e.colorText,";font-size:",Math.max(e.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",e.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",e.siteMarkdownCodeBg,";border-radius:",e.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",e.paddingSM,"px ",e.paddingMD,"px;font-size:",e.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",e.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",e.colorTextSecondary,";font-size:90%;border-left:4px solid ",e.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",e.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",e.marginXS,"px;opacity:0;transition:opacity ",e.motionDurationSlow,";.rtl &{margin-inline-end:",e.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",e.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",e.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",a,"icon{display:block;color:",e.colorTextSecondary,";font-size:",e.fontSizeLG,"px;transition:all ",e.motionDurationSlow,";&:hover{color:",e.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",e.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",e.paddingSM,"px ",e.paddingLG,"px;text-align:left;border:1px solid ",e.colorSplit,";&:first-child{border-left:1px solid ",e.colorSplit,";}&:last-child{border-right:1px solid ",e.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",e.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(e.fontSize-1,12),"px;font-family:",e.codeFamily,";line-height:",e.lineHeight,";border:1px solid ",e.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",e.colorText,";font-weight:",e.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",e.magenta7,";font-size:",Math.max(e.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(e.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(e.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",a,"-row>div,.code-box-demo ",a,"-row>div{min-height:30px;margin-top:",e.marginXS,"px;margin-bottom:",e.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",a,"-row>div:not(.gutter-row){padding:",e.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new be.FastColor(r).setA(.75).toHexString(),";}}",a,"-row .demo-col,.code-box-demo ",a,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",e.colorWhite,";font-size:18px;text-align:center;border:none;}",a,"-row .demo-col-1{background:",new be.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-2,.code-box-demo ",a,"-row .demo-col-2{background:",new be.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-3,.code-box-demo ",a,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",a,"-row .demo-col-4,.code-box-demo ",a,"-row .demo-col-4{background:",new be.FastColor(r).setA(.6).toHexString(),";}",a,"-row .demo-col-5,.code-box-demo ",a,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",a,"-row>div{margin-top:0;margin-bottom:0;}}","")})},Re=Me,ie=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},M=function(){var e=(0,m.Fg)(),a=e.antCls,r=e.iconCls;return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",e.lineWidth*2,"px);margin:0 0 ",e.margin,"px;background-color:",e.colorBgContainer,";border:1px solid ",e.colorSplit,";border-radius:",e.borderRadiusLG,"px;transition:all ",e.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",e.colorText,"!important;background:",e.colorBgContainer,";}}.code-box-demo{background-color:",e.colorBgContainer,";border-radius:",e.borderRadiusLG,"px ",e.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",e.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",e.colorBgContainer,";border-radius:",e.borderRadius,"px ",e.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",e.margin,"px;a,a:hover{color:",e.colorText,";font-weight:500;font-size:",e.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",e.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",e.paddingXXS,"px;",r,"{color:",e.colorTextSecondary,";transition:all ",e.motionDurationSlow,";&:hover{color:",e.colorText,";}}",a,"-row",a,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",e.colorText,";border-bottom:1px solid ",e.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",e.fontSize,"px;border-radius:0 0 ",e.borderRadius,"px ",e.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",e.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",e.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",a,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",a,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",e.borderRadius,"px ",e.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",e.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",e.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",e.paddingSM,"px 0;border-top:1px dashed ",e.colorSplit,";opacity:0.7;transition:opacity ",e.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",e.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",e.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",e.fontSize,"px;text-align:center;background:",e.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",e.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",e.colorBgContainer,";border:none;box-shadow:unset;padding:",e.paddingSM,"px ",e.padding,"px;font-size:",e.fontSize,"px;}}&-debug{border-color:",e.purple3,";display:none;}&-debug &-title a{color:",e.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",e.marginXS,"px;}",a,"-btn{&.icon-enabled{background-color:",e.colorFillSecondary,";opacity:1;",r,"{color:",e.colorTextBase,";font-weight:bold;}}}",a,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},ce=M,ye=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},V=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},P=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},O="dumi-default-",H=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)("html{.",O,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",O,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",O,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},ke=function(){var o=(0,m.Fg)();return(0,n.tZ)(n.xB,{styles:(0,n.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},Ie=function(){return(0,n.tZ)(c.Fragment,null,(0,n.tZ)(q,null),(0,n.tZ)(N,null),(0,n.tZ)(Re,null),(0,n.tZ)(ie,null),(0,n.tZ)(ce,null),(0,n.tZ)(ye,null),(0,n.tZ)(V,null),(0,n.tZ)(P,null),(0,n.tZ)(ke,null),(0,n.tZ)(k,null),(0,n.tZ)(f,null),(0,n.tZ)(H,null))},ge=Ie,z=t(68585),B=t.n(z),ue=t(26068),G=t.n(ue),me=t(82092),le=t.n(me),ae=t(53649),u=t.n(ae),de=t(64733),$=t(35092),Te=t(31997),Y=t(21153),Ne=t(26582),Ze=t(68526),v=t(41099),A=t(88530),y=t(78742),j=t(47614),J=t(45679),He=t(56995),qe,en,nn,cn=(0,m.kc)(function(o){var e=o.token,a=o.css,r=e.headerHeight,i=e.colorTextHeading,s=e.fontFamily,d=e.mobileMaxWidth;return{logo:a(qe||(qe=u()([`
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
    `])),r,i,s,r,e.marginSM,i,d),title:a(en||(en=u()([`
      line-height: 40px;
    `]))),logoImage:a(nn||(nn=u()([`&:hover {
      transform: rotate(666turn);
      transition: 59s cubic-bezier(.34,0,.84,1) 1s;
    }
  `])))}}),Xe="chaos.logo.tour.dismiss",un=function(e){var a=e.isZhCN,r=c.useState((0,y.Fy)()?!localStorage.getItem(Xe):!0),i=b()(r,2),s=i[0],d=i[1],l=(0,p.useSiteData)(),g=l.themeConfig,x=(0,p.useLocation)(),S=x.search,D=cn(),E=D.styles,C=g.logo||"https://rain120.github.io/study-notes/img/chao.png";return(0,n.tZ)("h1",null,(0,n.tZ)(J.Z,{to:y.J1("/",a,S),className:E.logo},(0,n.tZ)(He.Z,{title:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"right",open:s,onOpenChange:function(R){d(R),R&&(0,y.Fy)()&&localStorage.setItem(Xe,"1")}},(0,n.tZ)("img",{id:"chaos-logo",className:E.logoImage,src:C,draggable:!1,alt:"logo"})),(0,n.tZ)("span",{className:E.title},"Chaos")))},tn=un,he=t(15558),Ee=t.n(he),_e=t(74032),Le=t(80553),on=t(77855),an=t(5053),Ve=t(71170),Fe=t(42089),rn=function(e){return(e!=null?e:[]).map(function(a,r){return{label:(0,n.tZ)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.text),key:r}})},ot=function(){var e=(0,Fe.Z)("moreLinks")||[];return Array.isArray(e)&&e.length>0?(0,n.tZ)(an.Z,{menu:{items:rn(e)},placement:"bottomRight"},(0,n.tZ)(Ve.ZP,{size:"small"},(0,n.tZ)(p.FormattedMessage,{id:"app.header.menu.more"}),(0,n.tZ)(on.Z,null))):null},at=ot,vn,rt=(0,m.kc)(function(o){var e=o.token,a=e.antCls,r=e.iconCls,i=e.fontFamily,s=e.fontSize,d=e.headerHeight,l=e.colorPrimary;return{nav:(0,m.iv)(vn||(vn=u()([`
      height: 100%;
      font-size: `,`px;
      font-family: Avenir, `,`, sans-serif;
      border: 0 !important;

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
    `])),s,i,a,a,a,40+12*2,d,e.paddingSM,e.paddingSM,d,a,r,a,l,a,a)}}),it=function(e){var a,r,i=e.isZhCN,s=e.isMobile,d=e.responsive,l=e.directionText,g=e.onLangChange,x=e.onDirectionChange,S=(0,Le.H)(),D=S.github,E=(0,p.useLocation)(),C=E.pathname,T=E.search,R=(0,p.useSiteData)(),w=R.locales,Q=(0,p.useNavData)(),h=(0,p.useLocale)(),_=(0,Fe.Z)("moreLinks"),ee=(0,p.useFullSidebarData)(),Ce=((a=ee["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],Pe=rt(),se=Pe.styles,je=s?"inline":"horizontal",Oe=C.split("/").filter(Boolean).slice(0,-1).join("/"),ze="/".concat(Oe||"home");C.startsWith("/changelog")?ze="/docs/react":C.startsWith("/docs/resources")&&(ze="/docs/resources");var Ue=function Ae(De){return De.map(function(L){var Se,Ye=((Se=L.link)!==null&&Se!==void 0?Se:"").split("/").slice(0,2).join("/");return{label:L.children?L.title:(0,y.YW)(L.link)?(0,n.tZ)("a",{href:"".concat(L.link).concat(T),target:"_blank",rel:"noreferrer"},L.title):(0,n.tZ)(J.Z,{to:"".concat(L.link).concat(T)},L.title),key:(0,y.YW)(L.link)?L.link:Ye,children:L.children?Ae(L.children):null}})},Be=Ue(Q),gn=c.useCallback(function(){if(w.length<2)return null;if(w.length===2){var Ae=w.filter(function(L){return L.id!==(h==null?void 0:h.id)})[0],De=(0,y.cY)({pathname:C,current:h,target:Ae});return{label:(0,n.tZ)("a",{rel:"noopener noreferrer",href:De},Ae.name),key:Ae.id}}return{label:(0,n.tZ)("span",null,h.name),key:"multi-lang",children:w.filter(function(L){return L.id!==h.id}).map(function(L){var Se=(0,y.cY)({pathname:C,current:h,target:L});return{label:(0,n.tZ)("a",{rel:"noopener noreferrer",href:Se},L.name),key:L.id}})}},[h,w]),$e=[],dn=[D?{label:(0,n.tZ)("a",{rel:"noopener noreferrer",href:D,target:"_blank"},"GitHub"),key:"github"}:null,gn(),{label:(0,n.tZ)(p.FormattedMessage,{id:"app.header.lang"}),onClick:g,key:"switch-lang"},{label:l,onClick:x,key:"switch-direction"}].concat(Ee()(rn(_)||[]));s?$e=dn:d==="crowded"&&($e=[{label:(0,n.tZ)(de.Z,null),key:"additional",children:Ee()(dn)}]);var hn=[].concat(Ee()(Be!=null?Be:[]),[Ce.length?{label:(0,n.tZ)(J.Z,{to:y.J1(Ce.sort(function(Ae,De){var L,Se;return((L=Ae.frontmatter)===null||L===void 0?void 0:L.date)>((Se=De.frontmatter)===null||Se===void 0?void 0:Se.date)?-1:1})[0].link,i,T)},h==null?void 0:h.blog),key:"docs/blog"}:null],Ee()((r=$e)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,n.tZ)(_e.Z,{mode:je,selectedKeys:[ze],className:se.nav,disabledOverflow:!0,items:hn})},lt=it,dt=t(35947),st=t(40347),mn="1.2em",ct=function(){var e=(0,st.Z)(),a=e.token,r=a.controlHeight,i=a.motionDurationMid;return{btn:(0,n.iv)("color:",a.colorText,";border-color:",a.colorBorder,";padding:0!important;width:",r,"px;height:",r,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",a.borderRadius,"px;transition:all ",i,";cursor:pointer;.btn-inner{transition:all ",i,";}&:hover{background:",a.colorBgTextHover,";}img{width:",mn,";height:",mn,";}.anticon{font-size:",mn,";}","")}},ut=function(){var e=(0,Le.H)(),a=e.github,r=ct();return(0,n.tZ)("div",null,a?(0,n.tZ)(He.Z,{title:"Github"},(0,n.tZ)("a",{key:"github",href:a,target:"_blank",rel:"noreferrer"},(0,n.tZ)("button",{css:[r.btn,"",""],type:"button"},(0,n.tZ)(dt.Z,null)))):null)},mt=ut,xn=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);r/=255,i/=255,s/=255;var d=Math.max(r,i,s),l=Math.min(r,i,s),g,x,S=(d+l)/2;if(d===l)g=x=0;else{var D=d-l;switch(x=S>.5?D/(2-d-l):D/(d+l),d){case r:g=(i-s)/D+(i<s?6:0);break;case i:g=(s-r)/D+2;break;case s:g=(r-i)/D+4;break}g/=6}return x=x*100,S=S*100-a,"hsl(".concat(Math.round(g*360),", ").concat(Math.round(x),"%, ").concat(Math.round(S),"%)")},pt=function(e){var a=e.backgroundColor,r=a===void 0?"#e8d7ff":a,i=e.textColor,s=i===void 0?"#091E42":i,d=e.align,l=d===void 0?"center":d;return{container:(0,n.iv)("--site-announcement-bar-stripe-color1:",xn(r,10),";--site-announcement-bar-stripe-color2:",xn(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,l,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},bn="chaos.announcement.dismiss",gt=function(){var e=(0,c.useState)(!0),a=b()(e,2),r=a[0],i=a[1],s=(0,Le.Z)()||{},d=s.announcementBar,l=pt(d||{});(0,c.useEffect)(function(){d!=null&&d.id&&(!(0,y.Fy)()||localStorage.getItem(bn)===d.id)?i(!0):i(!1)},[d]);var g=(0,c.useCallback)(function(){d!=null&&d.id&&(0,y.Fy)()&&localStorage.setItem(bn,d.id),i(!0)},[]);return r?null:(0,n.tZ)("div",{className:"announcement-bar"},(0,n.tZ)(Y.Z,B()({banner:!0,type:"info",closable:!0},d,{onClose:g,css:d!=null&&d.backgroundColor?[l.container]:[]})))},ht=gt,yn,Sn,wn,kn,Zn,Ke="1.2em",ft=(0,m.kc)(function(o){var e=o.token,a=o.css,r=e.colorText,i=e.colorBorder,s=e.colorBgContainer,d=e.colorBgTextHover,l=e.borderRadius,g=e.controlHeight,x=e.motionDurationMid;return{btn:a(yn||(yn=u()([`
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
    `])),r,i,g,g,l,x,x,d,Ke,Ke,Ke),innerDiv:a(Sn||(Sn=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Ke,Ke),labelStyle:a(wn||(wn=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Ke,r,r),label1Style:a(kn||(kn=u()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,s),label2Style:a(Zn||(Zn=u()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),vt=function(e){var a=e.label1,r=e.label2,i=e.tooltip1,s=e.tooltip2,d=e.value,l=e.pure,g=e.onClick,x=ft(),S=x.styles,D=S.btn,E=S.innerDiv,C=S.labelStyle,T=S.label1Style,R=S.label2Style,w=(0,n.tZ)("button",{type:"button",onClick:g,className:D,key:"lang-button","aria-label":e["aria-label"]},(0,n.tZ)("div",{className:"btn-inner"},l&&(d===1?a:r),!l&&(0,n.tZ)("div",{className:E},(0,n.tZ)("span",{className:Z()(C,d===1?T:R)},a),(0,n.tZ)("span",{className:Z()(C,d===1?R:T)},r))));return i||s?(0,n.tZ)(He.Z,{title:d===1?i:s},w):w},Cn=vt,xt=$.default.Option,bt=function(){var e=(0,p.useSearchParams)(),a=b()(e,1),r=a[0],i=(0,Le.Z)(),s=i.localesEnhance,d=(0,p.useSiteData)(),l=d.locales,g=(0,p.useIntl)(),x=g.locale,S=(0,p.useLocale)(),D=(0,p.useLocation)(),E=D.pathname,C=(0,c.useCallback)(function(h){var _=(0,y.cY)({pathname:E,current:S,target:l.find(function(ee){var Ce=ee.id;return Ce===h})});_.startsWith("/-")?_="/index".concat(_.substring(1)):_.endsWith("/index")&&(_=_.replace("/index","/")),p.history.push({pathname:_,search:r.toString()})},[E,S,l,r]),T=(0,c.useCallback)(function(){C(l.filter(function(h){return h.id!==x})[0].id)},[x,C,l]),R;if(l.length>2||!s&&l.length>2){var w=l.map(function(h){return(0,n.tZ)(xt,{value:h.id,key:h.id},h.name)});R=(0,n.tZ)($.default,{key:"lang",className:"version",size:"small",defaultValue:x,onChange:C,popupMatchSelectWidth:!1,getPopupContainer:function(_){return _.parentNode}},w)}else if(l.length===2&&Array.isArray(s)&&s.length>1){var Q=l[0].id===x?1:2;R=(0,n.tZ)(Cn,{key:"lang",onClick:T,value:Q,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(l[0].name," / ").concat(l[1].name),tooltip2:"".concat(l[1].name," / ").concat(l[0].name)})}return R},yt=bt,St=t(25108),wt=function(e){var a=e.direction;return(0,n.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")}},(0,n.tZ)("title",null,"Direction Icon"),(0,n.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},kt=c.forwardRef(function(o,e){return(0,n.tZ)(St.Z,B()({ref:e,component:function(){return(0,n.tZ)(wt,{direction:o.direction})}},o))}),Mn=kt,En,Zt=(0,m.kc)(function(o){var e=o.token,a=o.css;return{dataDirectionIcon:a(En||(En=u()([`
      width: 20px;
    `])))}}),Ct=function(){var e=(0,c.useContext)(j.Z),a=e.direction,r=e.updateSiteConfig,i=Zt(),s=i.styles,d=(0,Le.Z)(),l=d.rtl,g=l===void 0?!0:l;if(!g)return null;var x=function(){r({direction:a!=="rtl"?"rtl":"ltr"})};return(0,n.tZ)(Cn,{key:"direction",onClick:x,value:a==="rtl"?2:1,label1:(0,n.tZ)(Mn,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.tZ)(Mn,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},Mt=Ct,Ln,Dn,Tn,_n,Pn,On,zn=1120,Bn=1200,Et={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},Lt=(0,m.kc)(function(o){var e=o.token,a=o.css,r="#ced4d9";return{header:a(Ln||(Ln=u()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;
          max-width: calc(100vw - 768px);

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: `,`px;
          position: static;
          top: unset;
          transform: unset;
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
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,r,r,r,e.borderRadiusSM,e.paddingSM),menuRow:a(Dn||(Dn=u()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),e.paddingSM,e.padding),dataDirectionIcon:a(Tn||(Tn=u()([`
      width: 20px;
    `]))),popoverMenu:le()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:a(_n||(_n=u()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(Pn||(Pn=u()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),e.mobileMaxWidth),versionSelect:a(On||(On=u()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Dt=function(){var e,a=(0,pe.default)(Et),r=b()(a,2),i=r[0],s=r[1],d=(0,p.useSiteData)(),l=d.pkg,g=(0,Le.Z)(),x=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),S=b()(x,2),D=S[0],E=S[1],C=(0,c.useContext)(j.Z),T=C.direction,R=C.isMobile,w=C.bannerVisible,Q=C.updateSiteConfig,h=(0,c.useRef)(null),_=(0,p.useLocation)(),ee=_.pathname,Ce=_.search,Pe=Lt(),se=Pe.styles,je=(0,c.useCallback)(function(){E(function(U){return G()(G()({},U),{},{menuVisible:!1})})},[]),Oe=(0,c.useCallback)(function(){E(function(U){return G()(G()({},U),{},{windowWidth:window.innerWidth})})},[]),ze=(0,c.useCallback)(function(U){E(function(we){return G()(G()({},we),{},{menuVisible:U})})},[]),Ue=function(){Q({direction:T!=="rtl"?"rtl":"ltr"})},Be=function(){Q({bannerVisible:!1}),y.Fy()&&localStorage.setItem(A.ANT_DESIGN_NOT_SHOW_BANNER,F()().toISOString())};(0,c.useEffect)(function(){je()},[_]),(0,c.useEffect)(function(){return Oe(),window.addEventListener("resize",Oe),function(){window.removeEventListener("resize",Oe),h.current&&clearTimeout(h.current)}},[]);var gn=(0,c.useCallback)(function(U){var we=window.location.href,sn=window.location.pathname;if(/overview/.test(sn)&&/0?[1-39][0-3]?x/.test(U)){window.location.href=we.replace(window.location.origin,U).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(U)?"":"/react","/introduce")).replace(/\/$/,"");return}var Qe=new URL(we.replace(window.location.origin,U));Qe.host.includes("antgroup")?(Qe.pathname="".concat(Qe.pathname.replace(/\/$/,""),"/"),window.location.href=Qe.toString()):window.location.href=Qe.href.replace(/\/$/,"")},[]),$e=(0,c.useCallback)(function(){var U="".concat(window.location.protocol,"//"),we=window.location.href.slice(U.length);y.Fy()&&localStorage.setItem("locale",y.KE(ee)?"en-US":"zh-CN"),window.location.href=U+we.replace(window.location.pathname,y.J1(ee,!y.KE(ee),Ce).pathname)},[_]),dn=(0,c.useMemo)(function(){return T!=="rtl"?"RTL":"LTR"},[T]),hn=(0,c.useMemo)(function(){return T==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[T]),Ae=D.menuVisible,De=D.windowWidth,L=D.searching,Se=G()(G()({},l.version?le()({},l.version,l.version):{}),g==null?void 0:g.docVersions),Ye=Object.keys(Se).filter(Boolean).map(function(U){return{value:Se[U],label:U}}),Qn=["","index","index-cn"].includes(ee),qn=s==="cn",wo=T==="rtl",fn=null;De<zn?fn="crowded":De<Bn&&(fn="narrow");var ko=Z()(se.header,"clearfix",{"home-header":Qn}),et={isZhCN:qn,isRTL:wo},nt=(0,n.tZ)(lt,B()({key:"nav"},et,{responsive:fn,isMobile:R,directionText:dn,onLangChange:$e,onDirectionChange:Ue})),Je=[nt,Ye.length>0?(0,n.tZ)($.default,{key:"version",size:"small",className:se.versionSelect,defaultValue:(e=Ye[0])===null||e===void 0?void 0:e.value,onChange:gn,dropdownStyle:hn,popupMatchSelectWidth:!1,getPopupContainer:function(we){return we.parentNode},options:Ye}):null,(0,n.tZ)(at,{key:"more"}),(0,n.tZ)(yt,{key:new Date().getTime()}),(0,n.tZ)(Mt,{key:"direction"}),(0,n.tZ)(mt,{key:"header-Extra"})];De<zn?Je=L?[]:[nt]:De<Bn&&(Je=L?[]:Je);var tt=Qn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.tZ)("header",{className:ko},(0,n.tZ)(ht,null),R&&(0,n.tZ)(Te.Z,{classNames:{root:se.popoverMenu},placement:"bottomRight",content:Je,trigger:"click",open:Ae,arrow:{pointAtCenter:!0},onOpenChange:ze},(0,n.tZ)(de.Z,{className:"nav-phone-icon"})),qn&&w&&(0,n.tZ)(K.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}}},(0,n.tZ)(Y.Z,{className:se.banner,message:(0,n.tZ)(c.Fragment,null,(0,n.tZ)("span",null,R?i.shortMessage:i.message),(0,n.tZ)("a",{className:se.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var we,sn;(we=(sn=window).gtag)===null||we===void 0||we.call(sn,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})}},i.more)),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:Be})),(0,n.tZ)(Ne.Z,{style:{flexFlow:"nowrap",height:64}},(0,n.tZ)(Ze.Z,tt[0],(0,n.tZ)(tn,B()({},et,{location:_}))),(0,n.tZ)(Ze.Z,tt[1],(0,n.tZ)("div",{className:se.menuRow},(0,n.tZ)(v.ZP,null),!R&&Je))))},Tt=Dt,Zo=t(33894),An=t(29915),_t=function(e){var a=e.children,r=e.title,i=e.desc;return(0,n.tZ)(c.Fragment,null,(0,n.tZ)(p.Helmet,null,(0,n.tZ)("title",null,r),(0,n.tZ)("meta",{property:"og:title",content:r}),i&&(0,n.tZ)("meta",{name:"description",content:i})),(0,n.tZ)("div",{style:{minHeight:"100vh"}},a),(0,n.tZ)(An.default,null))},Pt=_t,Ot=t(93702),Rn=t(52369),In=t(49630),zt=function(){var e=(0,p.useRouteMeta)(),a=c.useMemo(function(){var d;if(!e.frontmatter.subtitle&&!e.frontmatter.title)d="404 Not Found - Ant Design";else{var l;d="".concat(e.frontmatter.subtitle||""," ").concat(((l=e.frontmatter)===null||l===void 0?void 0:l.title)||""," - Ant Design")}var g=e.frontmatter.description||"";return[d,g]},[e]),r=b()(a,2),i=r[0],s=r[1];return(0,n.tZ)(p.Helmet,null,(0,n.tZ)("title",null,i),(0,n.tZ)("meta",{property:"og:title",content:i}),s&&(0,n.tZ)("meta",{name:"description",content:s}))},Nn=zt,Bt=t(25457),At=t(43510),Rt=t(38209),It=t.n(Rt),Nt=t(49153),Wn,Hn,jn,Un=["scroll","resize"],Wt=(0,m.kc)(function(o){var e=o.token,a=o.css,r=e.boxShadowSecondary,i=e.antCls;return{affixTabs:a(Wn||(Wn=u()([`
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
    `])),r,e.motionDurationSlow,e.motionDurationSlow,i,i,i),affixTabsFixed:a(Hn||(Hn=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(jn||(jn=u()([`
      text-transform: capitalize;
    `])))}}),Xn=32,Ht=function(){var e=c.useRef(null),a=c.useRef([]),r=c.useState(!1),i=b()(r,2),s=i[0],d=i[1],l=c.useState(void 0),g=b()(l,2),x=g[0],S=g[1],D=Wt(),E=D.styles,C=E.affixTabs,T=E.affixTabsFixed,R=E.span;function w(h){var _=document.getElementById(h);if(_){var ee=_.offsetTop-e.current.offsetHeight-Xn;(0,Nt.Z)(ee)}}c.useEffect(function(){var h=document.querySelectorAll("h2[id]");a.current=Array.from(h).map(function(_){var ee=_.id;return ee}),d(!0)},[]),c.useEffect(function(){var h=decodeURIComponent((location.hash||"").slice(1));h&&w(h)},[s]);var Q=c.useMemo(function(){function h(){for(var _=window,ee=_.scrollY,Ce=e.current.offsetHeight,Pe=a.current.length-1;Pe>=0;Pe-=1){var se=a.current[Pe],je=document.getElementById(se),Oe=je.offsetTop-Ce-Xn;if(Oe<=ee){S(se);return}}S(void 0)}return It()(h)},[]);return c.useEffect(function(){return Un.forEach(function(h){return window.addEventListener(h,Q)}),Q(),function(){Un.forEach(function(h){return window.removeEventListener(h,Q)})}},[]),(0,n.tZ)("div",{className:Z()(C,x&&T),ref:e},(0,n.tZ)(At.Z,{activeKey:x,centered:!0,size:"large",onChange:w,items:a.current.map(function(h){return{key:h,label:(0,n.tZ)("span",{className:R},h.replace(/-/g," "))}})}))},jt=Ht,Fn,Kn,Gn,Vn=40,ln=1208,pn=24,Ut=function(){var e=(0,In.Z)();return(0,m.kc)(function(a){var r=a.token,i=a.css,s=r.antCls;return{resourcePage:i(Fn||(Fn=u()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),ln),resourceContent:i(Kn||(Kn=u()([`
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
      `])),Vn,ln,pn,s,r.padding,r.padding),banner:i(Gn||(Gn=u()([`
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
      `])),Vn,e?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",ln,ln,r.fontSizeLG,pn,pn)}})()},Xt=function(e){var a,r=e.children,i=Ut(),s=i.styles,d=(0,p.useRouteMeta)(),l=(0,In.Z)(),g=(0,n.tZ)(Ot.Z,null,(0,n.tZ)(Nn,null),(0,n.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,n.tZ)(jt,null),(0,n.tZ)("div",{className:s.banner},(0,n.tZ)(Rn.Z.Title,{style:{fontSize:30}},(a=d.frontmatter)===null||a===void 0?void 0:a.title,(0,n.tZ)(Bt.default,{title:(0,n.tZ)(p.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename})),(0,n.tZ)("section",null,d.frontmatter.description)),(0,n.tZ)("div",{className:s.resourceContent},r),(0,n.tZ)(An.default,null)));return l?g:(0,n.tZ)(K.ZP,{theme:{token:{colorBgLayout:"#fff"}}},g)},Ft=Xt,Kt=t(44923),Gt=t(43356),Vt=t(75018),$t=t(36864),Yt=t(31877),Jt=t(99021),Qt=t(67420),qt=function(e){var a=e.children,r=e.fallback,i=r===void 0?(0,n.tZ)(Jt.Z.Input,{active:!0,size:"small"}):r,s=e.delay,d=s===void 0?200:s;return(0,n.tZ)(Qt.df,{triggerOnce:!0,delay:d},function(l){var g=l.inView,x=l.ref;return(0,n.tZ)("div",{ref:x},(0,n.tZ)(c.Suspense,{fallback:i},g?a:(0,n.tZ)("span",null)))})},Ge=qt,eo=t(4203),no=c.lazy(function(){return Promise.all([t.e(1589),t.e(4358)]).then(t.bind(t,94358))}),to=c.lazy(function(){return Promise.resolve().then(t.bind(t,4203))}),oo=c.lazy(function(){return t.e(4289).then(t.bind(t,34289))}),ao=c.lazy(function(){return Promise.resolve().then(t.bind(t,29915))}),ro=c.lazy(function(){return t.e(186).then(t.bind(t,80186))}),io=c.lazy(function(){return Promise.resolve().then(t.bind(t,25457))}),lo=c.lazy(function(){return t.e(6118).then(t.bind(t,66118))}),so=function(e){var a,r,i,s,d=e.children,l=(0,p.useRouteMeta)(),g=(0,te.Z)(),x=g.pathname,S=g.hash,D=(0,c.useContext)(j.Z),E=D.direction,C=(0,eo.useStyle)(),T=C.styles,R=(0,Vt.Z)(!1),w=b()(R,2),Q=w[0],h=w[1],_=(0,c.useState)("tsx"),ee=b()(_,2),Ce=ee[0],Pe=ee[1],se=(0,c.useMemo)(function(){var Ue;return((Ue=l.toc)===null||Ue===void 0?void 0:Ue.filter(function(Be){return Be._debug_demo}).map(function(Be){return Be.id}))||[]},[l]),je=se.includes(S.slice(1));(0,c.useLayoutEffect)(function(){h(je)},[]);var Oe=(0,c.useMemo)(function(){return{showDebug:Q,setShowDebug:h,codeType:Ce,setCodeType:Pe}},[Q,Ce,se]),ze=E==="rtl";return(0,n.tZ)(Yt.Z.Provider,{value:Oe},(0,n.tZ)(Ze.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,n.tZ)(Ge,{fallback:null},(0,n.tZ)(to,{showDebug:Q,debugDemos:se})),(0,n.tZ)("article",{className:Z()(T.articleWrapper,{rtl:ze})},(a=l.frontmatter)!==null&&a!==void 0&&a.title?(0,n.tZ)(Kt.Z,{justify:"space-between"},(0,n.tZ)(Rn.Z.Title,{style:{fontSize:32,position:"relative"}},(0,n.tZ)(Gt.Z,null,(0,n.tZ)("span",null,(r=l.frontmatter)===null||r===void 0?void 0:r.title),(0,n.tZ)("span",null,(i=l.frontmatter)===null||i===void 0?void 0:i.subtitle),!x.startsWith("/components/overview")&&(0,n.tZ)(Ge,{fallback:null},(0,n.tZ)(io,{title:(0,n.tZ)(p.FormattedMessage,{id:"app.content.edit-page"}),filename:l.frontmatter.filename}))))):null,(0,n.tZ)(Ge,{fallback:null},(0,n.tZ)(oo,null)),!l.frontmatter.__autoDescription&&l.frontmatter.description,l.frontmatter.category==="Components"&&String(l.frontmatter.showImport)!=="false"&&(0,n.tZ)($t.Z,{source:!0,component:l.frontmatter.title,filename:l.frontmatter.filename,version:l.frontmatter.tag}),(0,n.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"}},d),(0,n.tZ)("div",{style:{marginTop:120}},(0,n.tZ)(Ge,{fallback:(0,n.tZ)("div",{style:{height:50}})},(0,n.tZ)(no,{filename:l.frontmatter.filename})),(0,n.tZ)(Ge,{fallback:null},(0,n.tZ)("div",{className:Z()(T.bottomEditContent,{rtl:ze})},(0,n.tZ)(lo,{time:(s=l.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,n.tZ)(Ge,{fallback:null},(0,n.tZ)(ro,{rtl:ze})),(0,n.tZ)(ao,null)))},co=so,uo=t(92828),mo=t(88989),$n,Yn,po=(0,m.kc)(function(o){var e=o.token,a=o.css,r=e.antCls,i=e.fontFamily,s=e.colorSplit,d=e.marginXXL,l=e.paddingXXS;return{asideContainer:a($n||($n=u()([`
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
    `])),d,i,l,r,r,r,r,e.fontSize,r,r,e.margin,e.margin,e.fontSize,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,e.marginXXS,r,e.padding,r,r,r,e.padding,r,r),mainMenu:a(Yn||(Yn=u()([`
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
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),go=function(){var e=(0,p.useSidebarData)(),a=(0,c.useContext)(j.Z),r=a.isMobile,i=a.theme,s=po(),d=s.styles,l=(0,mo.Z)(),g=b()(l,2),x=g[0],S=g[1],D=i.includes("dark"),E=(0,m.Fg)(),C=E.colorBgContainer,T=(0,n.tZ)(K.ZP,{theme:{components:{Menu:{itemBg:C,darkItemBg:C}}}},(0,n.tZ)(_e.Z,{items:x,inlineIndent:30,className:d.asideContainer,mode:"inline",theme:D?"dark":"light",selectedKeys:[S],defaultOpenKeys:e==null?void 0:e.map(function(R){var w=R.title;return w}).filter(Boolean)}));return r?(0,n.tZ)(uo.Z,{key:"Mobile-menu"},T):(0,n.tZ)(Ze.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:d.mainMenu},T)},ho=go,Jn,fo=(0,m.kc)(function(o){var e=o.css,a=o.token;return{main:e(Jn||(Jn=u()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),vo=function(e){var a=e.children,r=fo(),i=r.styles;return(0,n.tZ)("main",{className:i.main},(0,n.tZ)(Nn,null),(0,n.tZ)(ho,null),(0,n.tZ)(co,null,a))},xo=vo,bo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},yo=function(){var e=(0,p.useOutlet)(),a=(0,te.Z)(),r=a.pathname,i=a.search,s=a.hash,d=(0,pe.default)(bo),l=b()(d,2),g=l[0],x=l[1],S=(0,c.useRef)(null),D=(0,c.useContext)(j.Z),E=D.direction,C=(0,p.useSiteData)(),T=C.loading;(0,c.useLayoutEffect)(function(){x==="cn"?F().locale("zh-cn"):F().locale("en")},[]),(0,c.useEffect)(function(){var w=document.getElementById("nprogress-style");return S.current=setTimeout(function(){w==null||w.remove()},0),function(){return clearTimeout(S.current)}},[]),(0,c.useEffect)(function(){var w=s.replace("#","");if(w){var Q;(Q=document.getElementById(decodeURIComponent(w)))===null||Q===void 0||Q.scrollIntoView()}},[T,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+i)},[a]);var R=c.useMemo(function(){return["","/"].some(function(w){return w===r})||["/index"].some(function(w){return r.startsWith(w)})?(0,n.tZ)(Pt,{title:g.title,desc:g.description},e):r.startsWith("/docs/resource")?(0,n.tZ)(Ft,null,e):r.startsWith("/theme-editor")?e:(0,n.tZ)(xo,null,e)},[r,e]);return(0,n.tZ)(c.Fragment,null,(0,n.tZ)(p.Helmet,{encodeSpecialCharacters:!1},(0,n.tZ)("html",{lang:x==="cn"?"zh-CN":x,"data-direction":E,className:Z()({rtl:E==="rtl"})}),(0,n.tZ)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.tZ)("meta",{property:"og:description",content:g.description}),(0,n.tZ)("meta",{property:"og:type",content:"website"}),(0,n.tZ)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})),(0,n.tZ)(K.ZP,{direction:E,locale:x==="cn"?xe.Z:void 0},(0,n.tZ)(ge,null),(0,n.tZ)(Tt,null),R))},So=yo},88530:function(We,I,t){t.r(I),t.d(I,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return P},default:function(){return Ie}});var ne=t(26068),b=t.n(ne),fe=t(48305),Z=t.n(fe),X=t(75271),F=t(88570),ve=t(76505),c=t(26318),K=t(22972),xe=t(23878),p=t(28691),pe=t(49630),te=t(75018),n=t(73168),m=t(68585),W=t.n(m),oe=t(67825),k=t.n(oe),f=t(66108),q=t(73005),re=t(47614),N=t(96378),be=["children","theme"],Me=64,Re=38,ie=function(z){var B=z.children,ue=z.theme,G=k()(z,be),me=(0,X.useContext)(f.ZP.ConfigContext),le=me.getPrefixCls,ae=me.iconPrefixCls,u=le(),de=K.Z.useToken(),$=de.token,Te=(0,X.useContext)(re.Z),Y=Te.bannerVisible;return X.useEffect(function(){f.ZP.config({theme:ue})},[ue]),(0,N.tZ)(q.f6,W()({},G,{theme:ue,customToken:{headerHeight:Me,bannerHeight:Re,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:$.colorFillTertiary,antCls:".".concat(u),iconCls:".".concat(ae),marginFarXS:$.marginXXL/6*7,marginFarSM:$.marginXXL/3*5,marginFar:$.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:Me+$.margin+(Y?Re:0)}}),B)},M=ie,ce=t(56636),ye=X.lazy(function(){return Promise.all([t.e(5537),t.e(3091)]).then(t.bind(t,13781))}),V=768,P="ANT_DESIGN_NOT_SHOW_BANNER";if(typeof window!="undefined"){var O=location.hash.slice(1);O.startsWith("components-")&&(document.querySelector("#".concat(O))||(location.hash="#".concat(O.replace(/^components-/,""))))}var H=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return z.map(function(B){return B==="dark"?K.Z.darkAlgorithm:B==="compact"?K.Z.compactAlgorithm:null}).filter(Boolean)},ke=function(){var z=(0,p.useOutlet)(),B=(0,n.Z)(),ue=B.pathname,G=(0,p.useSearchParams)(),me=Z()(G,2),le=me[0],ae=me[1],u=(0,te.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),de=Z()(u,2),$=de[0],Te=$.theme,Y=Te===void 0?[]:Te,Ne=$.direction,Ze=$.isMobile,v=$.bannerVisible,A=v===void 0?!1:v,y=de[1],j=le.get("cssVar")!=="false",J=(0,X.useCallback)(function(he){y(function(Le){return b()(b()({},Le),he)});var Ee=le.toString(),_e=le;Object.entries(he).forEach(function(Le){var on=Z()(Le,2),an=on[0],Ve=on[1];if(an==="direction"&&(Ve==="rtl"?_e.set("direction","rtl"):_e.delete("direction")),an==="theme"){var Fe;_e=(0,p.createSearchParams)(b()(b()({},_e),{},{theme:Ve.filter(function(rn){return rn!=="light"})})),(Fe=document.querySelector("html"))===null||Fe===void 0||Fe.setAttribute("data-prefers-color",Ve.includes("dark")?"dark":"light")}}),_e.toString()!==Ee&&ae(_e)},[le,ae]),He=function(){J({isMobile:window.innerWidth<V})};(0,X.useEffect)(function(){var he=le.getAll("theme"),Ee=le.get("direction");return y({theme:he,direction:Ee==="rtl"?"rtl":"ltr"}),document.documentElement.setAttribute("data-prefers-color",he.includes("dark")?"dark":"light"),He(),window.addEventListener("resize",He),function(){window.removeEventListener("resize",He)}},[]);var qe=X.useMemo(function(){return{direction:Ne,updateSiteConfig:J,theme:Y,isMobile:Ze,bannerVisible:A}},[Ze,Ne,J,Y,A]),en=X.useMemo(function(){return{algorithm:H(Y),token:{motion:!Y.includes("motion-off")},cssVar:j,hashed:!j}},[Y]),nn=X.useState(function(){return(0,F.createCache)()}),cn=Z()(nn,1),Xe=cn[0];(0,p.useServerInsertedHTML)(function(){var he=(0,F.extractStyle)(Xe,{plain:!0,types:"style"});return(0,N.tZ)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:he}})}),(0,p.useServerInsertedHTML)(function(){var he=(0,F.extractStyle)(Xe,{plain:!0,types:["cssVar","token"]});return(0,N.tZ)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:he}})}),(0,p.useServerInsertedHTML)(function(){return(0,N.tZ)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,c.$Z)()}})});var un=ue.startsWith("/~demos"),tn=z;return un||(tn=(0,N.tZ)(xe.Z,null,z,(0,N.tZ)(X.Suspense,null,(0,N.tZ)(ye,{value:Y,onChange:function(Ee){return J({theme:Ee})}})))),(0,N.tZ)(pe.f.Provider,{value:Y.includes("dark")},(0,N.tZ)(F.StyleProvider,{cache:Xe,linters:[F.legacyNotSelectorLinter,F.parentSelectorLinter,F.NaNLinter]},(0,N.tZ)(re.Z.Provider,{value:qe},(0,N.tZ)(M,{theme:en},(0,N.tZ)(ve.R,{disabled:!Y.includes("happy-work")},tn)))))},Ie=ke},4203:function(We,I,t){t.r(I),t.d(I,{useStyle:function(){return W}});var ne=t(26068),b=t.n(ne),fe=t(53649),Z=t.n(fe),X=t(75271),F=t(58190),ve=t(73005),c=t(82187),K=t.n(c),xe=t(28691),p=t(96378),pe,te,n,m,W=(0,ve.kc)(function(k){var f=k.token,q=k.css,re=f.antCls;return{anchorToc:q(pe||(pe=Z()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),re,re,f.fontSizeSM),tocWrapper:q(te||(te=Z()([`
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
        max-height: calc(100vh - `,`px) !important;
        margin: auto;
        overflow: auto;
        padding: `,`px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),f.headerHeight+f.contentMarginTop-4,f.borderRadius,f.purple6,f.purple5,f.headerHeight+f.contentMarginTop+24,f.paddingXXS,f.screenLG),articleWrapper:q(n||(n=Z()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),f.screenLG,f.paddingLG*2),bottomEditContent:q(m||(m=Z()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      flex: 0;
    `])))}}),oe=function(f){var q=f.showDebug,re=f.debugDemos,N=re===void 0?[]:re,be=W(),Me=be.styles,Re=(0,ve.Fg)(),ie=(0,xe.useRouteMeta)(),M=(0,xe.useTabMeta)(),ce=function(P){var O;return{href:"#".concat(P.id),title:P.title,key:P.id,children:(O=P.children)===null||O===void 0?void 0:O.filter(function(H){return q||!N.includes(H.id)}).map(function(H){return{key:H.id,href:"#".concat(H.id),title:(0,p.tZ)("span",{className:K()({"toc-debug":N.includes(H.id)})},H==null?void 0:H.title)}})}},ye=X.useMemo(function(){return((M==null?void 0:M.toc)||ie.toc).reduce(function(V,P){if(P.depth===2)V.push(b()({},P));else if(P.depth===3){var O=V[V.length-1];O&&(O.children=O.children||[],O.children.push(b()({},P)))}return V},[])},[M==null?void 0:M.toc,ie.toc]);return ie.frontmatter.toc?(0,p.tZ)("section",{className:Me.tocWrapper},(0,p.tZ)(F.Z,{affix:!1,className:Me.anchorToc,targetOffset:Re.anchorTop,showInkInFixed:!0,items:ye.map(ce)})):null};I.default=oe},29915:function(We,I,t){t.r(I);var ne=t(91574),b=t(96378),fe=t(33230),Z=t(32699),X=t.n(Z),F=t(87394),ve=t(75271),c=t(40347),K=t(42089),xe=t(47614),p=function(){var n=(0,c.Z)(),m=n.token,W=(0,K.Z)("footerLinks"),oe=(0,ve.useContext)(xe.Z),k=oe.isMobile,f=new ne.C((0,F.default)("#f0f3fa","#fff")).onBackground(m.colorBgContainer).toHexString();return{holder:(0,b.iv)("background:",f,";",""),footer:(0,b.iv)("background:",f,";color:",m.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",m.colorText,";}.rc-footer-column{margin-bottom:",k?60:0,"px;:last-child{margin-bottom:",k?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(W)&&W.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",m.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",m.fontSize,"px;}}","")}},pe=function(){var n=p(),m=(0,K.Z)("footer"),W=(0,K.Z)("footerLinks"),oe=(0,ve.useCallback)(function(k){return Array.isArray(k)&&k.forEach(function(f){var q=f.icon;f.icon&&(delete f.icon,f.icon=(0,b.tZ)("img",{src:String(q),alt:"",style:{maxWidth:"100%"}})),Array.isArray(f.items)&&oe(f.items)}),k},[]);return m?(0,b.tZ)(fe.Z,{columns:oe((0,Z.cloneDeep)(W)),css:n.footer,bottom:(0,b.tZ)("span",{dangerouslySetInnerHTML:{__html:m}})}):null};I.default=pe}}]);
