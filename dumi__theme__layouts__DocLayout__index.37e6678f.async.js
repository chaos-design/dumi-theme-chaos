"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{74232:function(zn,R,r){r.d(R,{Z:function(){return j.Z}});var j=r(91449)},7936:function(zn,R,r){r.r(R);var j=r(53649),D=r.n(j),V=r(75271),O=r(60885),sn=r(82145),xn=r(97940),bn=r(11486),c=r(96378),U,cn=function(e){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(p)},f=(0,xn.kc)(function($){var e=$.token,p=$.css,A=e.colorIcon,Y=e.colorText,Z=e.iconCls;return{editButton:p(U||(U=D()([`
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
    `])),e.marginXS,Z,A,e.fontSizeLG,e.motionDurationSlow,Y)}}),rn=function(e){var p=e.title,A=e.filename,Y=f(),Z=Y.styles,v=(0,bn.H)(),X=v.user,en=v.repo,_n=v.branch,un=v.docDir;return(0,c.tZ)(sn.Z,{title:p},(0,c.tZ)("a",{className:Z.editButton,href:"".concat(cn("".concat(X,"/").concat(en),_n)).concat(un).concat(A),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(O.Z,null)))};R.default=rn},73594:function(zn,R,r){r.d(R,{Z:function(){return V},f:function(){return D}});var j=r(75271),D=j.createContext(!1);function V(){return j.useContext(D)}},22687:function(zn,R,r){var j=r(48305),D=r.n(j),V=r(15558),O=r.n(V),sn=r(82092),xn=r.n(sn),bn=r(53649),c=r.n(bn),U=r(75271),cn=r(45481),f=r(23753),rn=r(97940),$=r(82187),e=r.n($),p=r(51675),A=r(41075),Y=r(19888),Z=r(96378),v,X,en;function _n(Q){return Q&&/^\d+\.\d+\.\d+$/.test(Q)}var un=(0,rn.kc)(function(Q){var E=Q.css,q=Q.token;return{link:E(v||(v=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:E(X||(X=c()([`
    margin-inline-end: 0;
  `]))),subtitle:E(en||(en=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),q.fontSizeSM)}}),En=function(E){var q,mn,N=un(),P=N.styles,B=E.before,I=E.after,yn=E.link,On=E.title,pn=E.subtitle,F=E.search,H=E.tag,Zn=E.className,K=(q=typeof H=="string"?H:H==null?void 0:H.title)!==null&&q!==void 0?q:"",Cn=(mn=typeof H=="string"?H:H==null?void 0:H.color)!==null&&mn!==void 0?mn:"";return!B&&!I?(0,Z.tZ)(A.Z,{to:"".concat(yn).concat(F),className:e()(Zn,xn()({},P.link,K))},(0,Z.tZ)(cn.Z,null,(0,Z.tZ)("span",null,On),pn&&(0,Z.tZ)("span",{className:P.subtitle},pn)),K&&(0,Z.tZ)(f.Z,{bordered:!1,className:e()(P.tag),color:_n(Cn)||Cn==="New"?"success":"processing"},K)):(0,Z.tZ)(A.Z,{to:"".concat(yn).concat(F),className:Zn},B,On,pn&&(0,Z.tZ)("span",{className:P.subtitle},pn),I)},Nn=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},q=(0,p.useFullSidebarData)(),mn=(0,Y.Z)(),N=mn.pathname,P=mn.search,B=(0,p.useSidebarData)(),I=E.before,yn=E.after,On=(0,U.useMemo)(function(){var pn,F=O()(B!=null?B:[]);if(N.startsWith("/docs/spec")){var H=F.splice(0,1);F.push.apply(F,O()(H))}if(N.startsWith("/docs/react")){var Zn,K=(Zn=Object.entries(q).find(function(an){var u=D()(an,1),gn=u[0];return gn.startsWith("/changelog")}))===null||Zn===void 0?void 0:Zn[1];K&&F.splice(1,0,K[0])}if(N.startsWith("/changelog")){var Cn,Pn=(Cn=Object.entries(q).find(function(an){var u=D()(an,1),gn=u[0];return gn.startsWith("/docs/react")}))===null||Cn===void 0?void 0:Cn[1];Pn&&(F.unshift(Pn[0]),F.push.apply(F,O()(Pn.slice(1))))}return(pn=F==null?void 0:F.reduce(function(an,u){if(u!=null&&u.title)if(N.startsWith("/docs/spec")){var gn,Ln,Xn=u.children.reduce(function(h,T){var _,G,tn=(_=(G=T.frontmatter)===null||G===void 0?void 0:G.type)!==null&&_!==void 0?_:"default";return h[tn]||(h[tn]=[]),h[tn].push(T),h},{}),Bn=[];Bn.push.apply(Bn,O()((gn=(Ln=Xn.default)===null||Ln===void 0?void 0:Ln.map(function(h){return{label:(0,Z.tZ)(A.Z,{to:"".concat(h.link).concat(P)},I,h==null?void 0:h.title,yn),key:h.link.replace(/(-cn$)/g,"")}}))!==null&&gn!==void 0?gn:[])),Object.entries(Xn).forEach(function(h){var T=D()(h,2),_=T[0],G=T[1];_!=="default"&&Bn.push({type:"group",label:_,key:_,children:G==null?void 0:G.map(function(tn){return{label:(0,Z.tZ)(A.Z,{to:"".concat(tn.link).concat(P)},I,tn==null?void 0:tn.title,yn),key:tn.link.replace(/(-cn$)/g,"")}})})}),an.push({label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:Bn})}else{var Mn;an.push({type:"group",label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:(Mn=u.children)===null||Mn===void 0?void 0:Mn.map(function(h){var T,_;return{label:(0,Z.tZ)(En,{before:I,after:yn,link:h.link,title:h==null?void 0:h.title,subtitle:(T=h.frontmatter)===null||T===void 0?void 0:T.subtitle,search:P,tag:((_=h.frontmatter)===null||_===void 0?void 0:_.tag)||""}),key:h.link.replace(/(-cn$)/g,"")}})})}else{var jn=u.children||[];jn.every(function(h){var T;return h==null||(T=h.frontmatter)===null||T===void 0?void 0:T.date})&&jn.sort(function(h,T){var _,G;return((_=h.frontmatter)===null||_===void 0?void 0:_.date)>((G=T.frontmatter)===null||G===void 0?void 0:G.date)?-1:1}),an.push.apply(an,O()(jn.map(function(h){var T;return{label:(0,Z.tZ)(En,{before:I,after:yn,link:h.link,title:h==null?void 0:h.title,search:P,tag:((T=h.frontmatter)===null||T===void 0?void 0:T.tag)||""}),key:h.link.replace(/(-cn$)/g,"")}})))}return an},[]))!==null&&pn!==void 0?pn:[]},[B,q,N,P,E]);return[On,N]};R.Z=Nn},54915:function(zn,R,r){r.r(R),r.d(R,{default:function(){return vo}});var j=r(48305),D=r.n(j),V=r(82187),O=r.n(V),sn=r(16483),xn=r.n(sn),bn=r(81414),c=r(75271),U=r(70567),cn=r(41329),f=r(51675),rn=r(54425),$=r(19888),e=r(96378),p=r(97940),A={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Y=function(){var n=(0,p.Fg)(),o=function l(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(l(s,i+1),`
    `):""},a=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(A[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",o("blue")," ",o("purple")," ",o("cyan")," ",o("green")," ",o("magenta")," ",o("red")," ",o("volcano")," ",o("orange")," ",o("gold")," ",o("yellow")," ",o("lime")," ",o("geekblue")," ",a()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},Z=Y,v=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",t.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",t.paddingXXS,"px;margin-inline-start:-",t.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",t.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},X=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:",t.fontFamily,";line-height:",t.lineHeight,";background:",t.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},en=r(21793),_n=function(){var t=(0,p.Fg)(),n=t.anchorTop;return c.useInsertionEffect(function(){(0,en.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},un=r(84432),En=function(){var n=(0,p.Fg)(),o=n.antCls,a=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",o,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",o,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",o,"-row>div,.code-box-demo ",o,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",o,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",a,";&:nth-child(2n + 1){background:",new un.FastColor(a).setA(.75).toHexString(),";}}",o,"-row .demo-col,.code-box-demo ",o,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",o,"-row .demo-col-1{background:",new un.FastColor(a).setA(.75).toHexString(),";}",o,"-row .demo-col-2,.code-box-demo ",o,"-row .demo-col-2{background:",new un.FastColor(a).setA(.75).toHexString(),";}",o,"-row .demo-col-3,.code-box-demo ",o,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",o,"-row .demo-col-4,.code-box-demo ",o,"-row .demo-col-4{background:",new un.FastColor(a).setA(.6).toHexString(),";}",o,"-row .demo-col-5,.code-box-demo ",o,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",o,"-row>div{margin-top:0;margin-bottom:0;}}","")})},Nn=En,Q=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,t.padding,"px ",t.paddingXL,"px;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",t.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",t.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",t.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",t.margin,"px 0;padding:",t.paddingSM,"px ",t.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",t.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},E=function(){var n=(0,p.Fg)(),o=n.antCls,a=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",a,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",o,"-row",o,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",o,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",o,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",a,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",a,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",o,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",a,"{color:",n.colorTextBase,";font-weight:bold;}}}",o,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},q=E,mn=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",t.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",t.padding,"px;padding-inline-start:",t.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",t.margin,"px;.ant-row-rtl &{margin-inline-end:",t.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",t.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",t.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",t.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",t.paddingMD,"px;font-size:",t.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",t.marginXL,"px;.ant-divider{display:none;}a{font-size:",t.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",t.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",t.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",t.colorSplit,";&:last-child{margin-bottom:",t.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",t.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",t.marginXS,"px;font-size:",t.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",t.margin,"px;font-size:",t.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",t.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",t.marginXS,"px;}.page3-block{margin-bottom:",t.marginXL,"px;padding:",t.paddingLG,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",t.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",t.padding,"px;}}}}")})},N=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",t.colorPrimary,";}.peg{box-shadow:0 0 10px ",t.colorPrimary,",0 0 5px ",t.colorPrimary,";}.spinner-icon{border-top-color:",t.colorPrimary,";border-left-color:",t.colorPrimary,";}}")})},P=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",t.marginLG,"px;.ant-row-rtl &{margin-inline-end:",t.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",t.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorError,";content:'';}.preview-image-title{margin-top:",t.marginMD,"px;color:",t.colorText,";font-size:",t.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",t.colorTextSecondary,";font-size:",t.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",t.paddingSM,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadius,"px;cursor:pointer;transition:all ",t.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",t.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",t.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",t.marginXXL,"px 0 ",t.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",t.marginLG,"px;padding:",t.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",t.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",t.margin,"px 0 ",t.marginXS,"px;}p{font-size:",t.fontSizeSM,"px;line-height:24px;}}}")})},B="dumi-default-",I=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",B,"search-bar{&-input{color:",t.colorText,";background:",t.colorBgContainer,";&:focus{background:",t.colorBgContainer,";}&::placeholder{color:",t.colorTextPlaceholder,"!important;}}}.",B,"search-popover{background-color:",t.colorBgElevated,"!important;&::before{border-bottom-color:",t.colorBgElevated,"!important;}}.",B,"search-result{dl{dt{background-color:",t.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",t.controlItemBgHover,";h4,p{color:",t.colorText,"!important;}svg{fill:",t.colorText,"!important;}}}}}}}")})},yn=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",t.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",t.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},On=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(X,null),(0,e.tZ)(_n,null),(0,e.tZ)(Nn,null),(0,e.tZ)(Q,null),(0,e.tZ)(q,null),(0,e.tZ)(mn,null),(0,e.tZ)(N,null),(0,e.tZ)(P,null),(0,e.tZ)(yn,null),(0,e.tZ)(Z,null),(0,e.tZ)(v,null),(0,e.tZ)(I,null))},pn=On,F=r(68585),H=r.n(F),Zn=r(26068),K=r.n(Zn),Cn=r(82092),Pn=r.n(Cn),an=r(53649),u=r.n(an),gn=r(64733),Ln=r(52825),Xn=r(54669),Bn=r(93362),Mn=r(32860),jn=r(93052),h=r(91011),T=r(41075),_=r(56178),G=r(82145),tn,Qn,qn,Fe=(0,p.kc)(function(t){var n=t.token,o=t.css,a=n.headerHeight,l=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:o(tn||(tn=u()([`
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
    `])),a,l,s,a,n.marginSM,l,i),title:o(Qn||(Qn=u()([`
      line-height: 40px;
    `]))),logoImage:o(qn||(qn=u()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `])))}}),ne="chaos.logo.tour.dismiss",Ke=function(n){var o=n.isZhCN,a=c.useState(!0),l=D()(a,2),s=l[0],i=l[1],d=(0,f.useSiteData)(),m=d.themeConfig,g=(0,f.useLocation)(),b=g.search,S=Fe(),w=S.styles,M=m.logo||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,_.Fy)()&&(localStorage.getItem(ne)?i(!1):i(!0))},[s]),(0,e.tZ)("h1",null,(0,e.tZ)(T.Z,{to:_.J1("/",o,b),className:w.logo},(0,e.tZ)(G.Z,{title:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"right",open:s,onOpenChange:function(L){L?(0,_.Fy)()&&localStorage.setItem(ne,"1"):i(L)}},(0,e.tZ)("img",{id:"chaos-logo",className:w.logoImage,src:M,draggable:!1,alt:"logo"})),(0,e.tZ)("span",{className:w.title},"Chaos")))},Ge=Ke,Ve=r(15558),Fn=r.n(Ve),ee=r(81905),Rn=r(11486),$e=r(77855),Ye=r(23831),Je=r(32252),te=r(68714),oe=function(n){return(n!=null?n:[]).map(function(o,a){return{label:(0,e.tZ)("a",{href:o.link,target:"_blank",rel:"noopener noreferrer"},o.text),key:a}})},Qe=function(){var n=(0,te.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Ye.Z,{menu:{items:oe(n)},placement:"bottomRight"},(0,e.tZ)(Je.ZP,{size:"small"},(0,e.tZ)(f.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)($e.Z,null))):null},qe=Qe,re,nt=(0,p.kc)(function(t){var n=t.token,o=n.antCls,a=n.iconCls,l=n.fontFamily,s=n.fontSize,i=n.headerHeight,d=n.colorPrimary;return{nav:(0,p.iv)(re||(re=u()([`
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
    `])),s,l,o,o,o,40+12*2,i,n.paddingSM,n.paddingSM,i,o,a,o,d,o,o)}}),et=function(n){var o,a,l=n.isZhCN,s=n.isMobile,i=n.responsive,d=n.directionText,m=(0,Rn.H)(),g=m.github,b=(0,f.useLocation)(),S=b.pathname,w=b.search,M=(0,f.useSiteData)(),k=M.locales,L=(0,f.useNavData)(),x=(0,f.useLocale)(),W=(0,te.Z)("moreLinks"),y=(0,f.useFullSidebarData)(),z=((o=y["/docs/blog"])===null||o===void 0||(o=o[0])===null||o===void 0?void 0:o.children)||[],nn=nt(),hn=nn.styles,J=s?"inline":"horizontal",fn=S.split("/").filter(Boolean).slice(0,-1).join("/"),ln="/".concat(fn||"home");S.startsWith("/changelog")?ln="/docs/react":S.startsWith("/docs/resources")&&(ln="/docs/resources");var Tn=function vn(Dn){return Dn.map(function(C){var on,Yn=((on=C.link)!==null&&on!==void 0?on:"").split("/").slice(0,2).join("/");return{label:C.children?C.title:(0,_.YW)(C.link)?(0,e.tZ)("a",{href:"".concat(C.link).concat(w),target:"_blank",rel:"noreferrer"},C.title):(0,e.tZ)(T.Z,{to:"".concat(C.link).concat(w)},C.title),key:(0,_.YW)(C.link)?C.link:Yn,children:C.children?vn(C.children):null}})},wn=Tn(L),Wn=c.useCallback(function(){if(k.length<2)return null;if(k.length===2){var vn=k.filter(function(C){return C.id!==(x==null?void 0:x.id)})[0],Dn=(0,_.cY)({pathname:S,current:x,target:vn});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Dn},vn.name),key:vn.id}}return{label:(0,e.tZ)("span",null,x.name),key:"multi-lang",children:k.filter(function(C){return C.id!==x.id}).map(function(C){var on=(0,_.cY)({pathname:S,current:x,target:C});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:on},C.name),key:C.id}})}},[x,k]),Sn=[],Gn=[g?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:g,target:"_blank"},"GitHub"),key:"github"}:null].concat(Fn()(oe(W)||[]));s?Sn=Gn:i==="crowded"&&(Sn=[{label:(0,e.tZ)(gn.Z,null),key:"additional",children:Fn()(Gn)}]);var Hn=[].concat(Fn()(wn!=null?wn:[]),[z.length?{label:(0,e.tZ)(T.Z,{to:_.J1(z.sort(function(vn,Dn){var C,on;return((C=vn.frontmatter)===null||C===void 0?void 0:C.date)>((on=Dn.frontmatter)===null||on===void 0?void 0:on.date)?-1:1})[0].link,l,w)},x==null?void 0:x.blog),key:"docs/blog"}:null],Fn()((a=Sn)!==null&&a!==void 0?a:[])).filter(Boolean);return(0,e.tZ)(ee.Z,{mode:J,selectedKeys:[ln],className:hn.nav,items:Hn})},tt=et,ot=r(35947),ae=r(16932),Vn="1.2em",rt=function(){var n=(0,ae.Z)(),o=n.token,a=o.controlHeight,l=o.motionDurationMid;return{btn:(0,e.iv)("color:",o.colorText,";border-color:",o.colorBorder,";padding:0!important;width:",a,"px;height:",a,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",o.borderRadius,"px;transition:all ",l,";cursor:pointer;.btn-inner{transition:all ",l,";}&:hover{background:",o.colorBgTextHover,";}img{width:",Vn,";height:",Vn,";}.anticon{font-size:",Vn,";}","")}},at=function(){var n=(0,Rn.H)(),o=n.github,a=rt();return(0,e.tZ)("div",null,o?(0,e.tZ)(G.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:o,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[a.btn,"",""],type:"button"},(0,e.tZ)(ot.Z,null)))):null)},it=at,lt=r(43151),ie=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);a/=255,l/=255,s/=255;var i=Math.max(a,l,s),d=Math.min(a,l,s),m,g,b=(i+d)/2;if(i===d)m=g=0;else{var S=i-d;switch(g=b>.5?S/(2-i-d):S/(i+d),i){case a:m=(l-s)/S+(l<s?6:0);break;case l:m=(s-a)/S+2;break;case s:m=(a-l)/S+4;break}m/=6}return g=g*100,b=b*100-o,"hsl(".concat(Math.round(m*360),", ").concat(Math.round(g),"%, ").concat(Math.round(b),"%)")},dt=function(n){var o=n.backgroundColor,a=o===void 0?"#e8d7ff":o,l=n.textColor,s=l===void 0?"#091E42":l,i=n.align,d=i===void 0?"center":i,m=(0,ae.Z)(),g=m.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",g.fontSize,"px;@media only screen and (max-width: ",g.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",ie(a,10),";--site-announcement-bar-stripe-color2:",ie(a,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,d,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},le="chaos.announcement.dismiss",st=function(){var n=(0,c.useState)(!0),o=D()(n,2),a=o[0],l=o[1],s=(0,Rn.Z)()||{},i=s.announcementBar,d=(0,h.A)(),m=d.updateSiteConfig,g=dt(i||{});(0,c.useEffect)(function(){i!=null&&i.id&&(!(0,_.Fy)()||localStorage.getItem(le)===i.id)?l(!0):l(!1)},[i]),(0,c.useEffect)(function(){m({bannerVisible:!a})},[a]);var b=(0,c.useCallback)(function(){i!=null&&i.id&&(0,_.Fy)()&&localStorage.setItem(le,i.id),l(!0)},[]);return a?null:(0,e.tZ)(U.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(lt.Z,H()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[g.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var w;if((w=window)!==null&&w!==void 0&&w.gtag){var M,k;(M=(k=window).gtag)===null||M===void 0||M.call(k,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:b,css:i!=null&&i.backgroundColor?[g.container]:[]}))))},ct=st,de,se,ce,ue,me,An="1.2em",ut=(0,p.kc)(function(t){var n=t.token,o=t.css,a=n.colorText,l=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,d=n.borderRadius,m=n.controlHeight,g=n.motionDurationMid;return{btn:o(de||(de=u()([`
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
    `])),a,l,m,m,d,g,g,i,An,An,An),innerDiv:o(se||(se=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),An,An),labelStyle:o(ce||(ce=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),An,a,a),label1Style:o(ue||(ue=u()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,s),label2Style:o(me||(me=u()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),mt=function(n){var o=n.label1,a=n.label2,l=n.tooltip1,s=n.tooltip2,i=n.value,d=n.pure,m=n.onClick,g=ut(),b=g.styles,S=b.btn,w=b.innerDiv,M=b.labelStyle,k=b.label1Style,L=b.label2Style,x=(0,e.tZ)("button",{type:"button",onClick:m,className:S,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},d&&(i===1?o:a),!d&&(0,e.tZ)("div",{className:w},(0,e.tZ)("span",{className:O()(M,i===1?k:L)},o),(0,e.tZ)("span",{className:O()(M,i===1?L:k)},a))));return l||s?(0,e.tZ)(G.Z,{title:i===1?l:s},x):x},pe=mt,pt=Ln.default.Option,gt="chaos.locale",ht=function(){var n=(0,f.useSearchParams)(),o=D()(n,1),a=o[0],l=(0,Rn.Z)(),s=l.localesEnhance,i=(0,f.useSiteData)(),d=i.locales,m=(0,f.useIntl)(),g=m.locale,b=(0,f.useLocale)(),S=(0,f.useLocation)(),w=S.pathname,M=(0,c.useCallback)(function(y){var z=(0,_.cY)({pathname:w,current:b,target:d.find(function(nn){var hn=nn.id;return hn===y})});_.Fy()&&localStorage.setItem(gt,_.KE(w)?"en-US":"zh-CN"),z.startsWith("/-")?z="/index".concat(z.substring(1)):z.endsWith("/index")&&(z=z.replace("/index","/")),f.history.push({pathname:z,search:a.toString()})},[w,b,d,a]),k=(0,c.useCallback)(function(){M(d.filter(function(y){return y.id!==g})[0].id)},[g,M,d]),L;if(d.length>2||!s&&d.length>2){var x=d.map(function(y){return(0,e.tZ)(pt,{value:y.id,key:y.id},y.name)});L=L=(0,e.tZ)(Ln.default,{key:"lang",className:"version",size:"small",defaultValue:g,onChange:M,popupMatchSelectWidth:!1,getPopupContainer:function(z){return z.parentNode}},x)}else if(d.length===2&&Array.isArray(s)&&s.length>1){var W=d[0].id===g?1:2;L=(0,e.tZ)(pe,{key:"lang",onClick:k,value:W,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(d[0].name," / ").concat(d[1].name),tooltip2:"".concat(d[1].name," / ").concat(d[0].name)})}return L},ft=ht,vt=r(25108),xt=function(n){var o=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(o==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},bt=c.forwardRef(function(t,n){return(0,e.tZ)(vt.Z,H()({ref:n,component:function(){return(0,e.tZ)(xt,{direction:t.direction})}},t))}),ge=bt,he,yt=(0,p.kc)(function(t){var n=t.token,o=t.css;return{dataDirectionIcon:o(he||(he=u()([`
      width: 20px;
    `])))}}),wt=function(){var n=(0,c.useContext)(h.Z),o=n.direction,a=n.updateSiteConfig,l=yt(),s=l.styles,i=(0,Rn.Z)(),d=i.rtl,m=d===void 0?!0:d;if(!m)return null;var g=function(){a({direction:o!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(pe,{key:"direction",onClick:g,value:o==="rtl"?2:1,label1:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},St=wt,fe,ve,xe,be,ye,we,Se,ke,_e=1120,Ze=1200,kt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},_t=(0,p.kc)(function(t){var n=t.token,o=t.css,a="#ced4d9";return{header:o(fe||(fe=u()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,a,n.colorPrimary,a,a,n.borderRadiusSM,n.paddingSM),searchBarContainer:o(ve||(ve=u()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:o(xe||(xe=u()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuRow:o(be||(be=u()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),n.paddingSM,n.padding),dataDirectionIcon:o(ye||(ye=u()([`
      width: 20px;
    `]))),popoverMenu:Pn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:o(we||(we=u()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:o(Se||(Se=u()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:o(ke||(ke=u()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Zt=function(){var n,o=(0,rn.default)(kt),a=D()(o,2),l=a[0],s=a[1],i=(0,f.useSiteData)(),d=i.pkg,m=(0,Rn.Z)(),g=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),b=D()(g,2),S=b[0],w=b[1],M=(0,c.useContext)(h.Z),k=M.direction,L=M.isMobile,x=M.updateSiteConfig,W=(0,c.useRef)(null),y=(0,f.useLocation)(),z=y.pathname,nn=y.search,hn=_t(),J=hn.styles,fn=(0,c.useCallback)(function(){w(function(dn){return K()(K()({},dn),{},{menuVisible:!1})})},[]),ln=(0,c.useCallback)(function(){w(function(dn){var kn;return K()(K()({},dn),{},{windowWidth:(kn=window)===null||kn===void 0?void 0:kn.innerWidth})})},[]),Tn=(0,c.useCallback)(function(dn){w(function(kn){return K()(K()({},kn),{},{menuVisible:dn})})},[]);(0,c.useEffect)(function(){fn()},[y]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(ln(),window.addEventListener("resize",ln),function(){window.removeEventListener("resize",ln),W.current&&clearTimeout(W.current)})},[]);var wn=(0,c.useCallback)(function(dn){if(typeof window!="undefined"){var kn=window.location.href,yo=new URL(kn.replace(window.location.origin,dn));window.location.href=yo.href.replace(/\/$/,"")}},[]),Wn=(0,c.useMemo)(function(){return k!=="rtl"?"RTL":"LTR"},[k]),Sn=(0,c.useMemo)(function(){return k==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[k]),Gn=S.menuVisible,Hn=S.windowWidth,vn=S.searching,Dn=K()(K()({},d.version?Pn()({},d.version,d.version):{}),m==null?void 0:m.docVersions),C=Object.keys(Dn).filter(Boolean).map(function(dn){return{value:Dn[dn],label:dn}}),on=["","index","index-cn"].includes(z),Yn=s==="cn",xo=k==="rtl",Jn=null;Hn<_e?Jn="crowded":Hn<Ze&&(Jn="narrow");var bo=O()(J.header,"clearfix",{"home-header":on}),je={isZhCN:Yn,isRTL:xo},Ue=(0,e.tZ)(tt,H()({key:"nav"},je,{responsive:Jn,isMobile:L,directionText:Wn})),Un=[Ue,C.length>0?(0,e.tZ)(Ln.default,{key:"version",size:"small",className:J.versionSelect,defaultValue:(n=C[0])===null||n===void 0?void 0:n.value,onChange:wn,dropdownStyle:Sn,popupMatchSelectWidth:!1,getPopupContainer:function(kn){return kn.parentNode},options:C}):null,(0,e.tZ)(qe,{key:"more"}),(0,e.tZ)(ft,{key:new Date().getTime()}),(0,e.tZ)(St,{key:"direction"}),(0,e.tZ)(it,{key:"header-Extra"})];Hn<_e?Un=vn?[]:[Ue]:Hn<Ze&&(Un=vn?[]:Un);var Xe=on?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:bo},L&&(0,e.tZ)(Xn.Z,{classNames:{root:J.popoverMenu},placement:"bottomRight",content:Un,trigger:"click",open:Gn,arrow:{pointAtCenter:!0},onOpenChange:Tn},(0,e.tZ)(gn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ct,null),(0,e.tZ)(Bn.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Mn.Z,Xe[0],(0,e.tZ)(Ge,H()({},je,{location:y}))),(0,e.tZ)(Mn.Z,Xe[1],(0,e.tZ)("div",{className:J.menuRow},(0,e.tZ)("div",{className:J.searchBarContainer},(0,e.tZ)("div",{className:J.searchBar},(0,e.tZ)(jn.ZP,null))),!L&&Un))))},Ct=Zt,wo=r(75927),Ce=r(67034),Mt=function(n){var o=n.children,a=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(f.Helmet,null,(0,e.tZ)("title",null,a),(0,e.tZ)("meta",{property:"og:title",content:a}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)("div",{style:{minHeight:"100vh"}},o),(0,e.tZ)(Ce.default,null))},Dt=Mt,Et=r(66112),Me=r(19972),De=r(73594),Lt=function(){var n=(0,f.useRouteMeta)(),o=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var d;i="".concat(n.frontmatter.subtitle||""," ").concat(((d=n.frontmatter)===null||d===void 0?void 0:d.title)||""," - Ant Design")}var m=n.frontmatter.description||"";return[i,m]},[n]),a=D()(o,2),l=a[0],s=a[1];return(0,e.tZ)(f.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Ee=Lt,Tt=r(7936),zt=r(24415),Ot=r(38209),Pt=r.n(Ot),Bt=r(39696),Le,Te,ze,Oe=["scroll","resize"],Rt=(0,p.kc)(function(t){var n=t.token,o=t.css,a=n.boxShadowSecondary,l=n.antCls;return{affixTabs:o(Le||(Le=u()([`
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
    `])),a,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:o(Te||(Te=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(ze||(ze=u()([`
      text-transform: capitalize;
    `])))}}),Pe=32,At=function(){var n=c.useRef(null),o=c.useRef([]),a=c.useState(!1),l=D()(a,2),s=l[0],i=l[1],d=c.useState(void 0),m=D()(d,2),g=m[0],b=m[1],S=Rt(),w=S.styles,M=w.affixTabs,k=w.affixTabsFixed,L=w.span;function x(y){var z=document.getElementById(y);if(z){var nn=z.offsetTop-n.current.offsetHeight-Pe;(0,Bt.Z)(nn)}}c.useEffect(function(){var y=document.querySelectorAll("h2[id]");o.current=Array.from(y).map(function(z){var nn=z.id;return nn}),i(!0)},[]),c.useEffect(function(){var y=decodeURIComponent((location.hash||"").slice(1));y&&x(y)},[s]);var W=c.useMemo(function(){function y(){for(var z=window,nn=z.scrollY,hn=n.current.offsetHeight,J=o.current.length-1;J>=0;J-=1){var fn=o.current[J],ln=document.getElementById(fn),Tn=ln.offsetTop-hn-Pe;if(Tn<=nn){b(fn);return}}b(void 0)}return Pt()(y)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(Oe.forEach(function(y){return window.addEventListener(y,W)}),W(),function(){Oe.forEach(function(y){return window.removeEventListener(y,W)})})},[]),(0,e.tZ)("div",{className:O()(M,g&&k),ref:n},(0,e.tZ)(zt.Z,{activeKey:g,centered:!0,size:"large",onChange:x,items:o.current.map(function(y){return{key:y,label:(0,e.tZ)("span",{className:L},y.replace(/-/g," "))}})}))},It=At,Be,Re,Ae,Ie=40,Kn=1208,$n=24,Wt=function(){var n=(0,De.Z)();return(0,p.kc)(function(o){var a=o.token,l=o.css,s=a.antCls;return{resourcePage:l(Be||(Be=u()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),Kn),resourceContent:l(Re||(Re=u()([`
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
      `])),Ie,Kn,$n,s,a.padding,a.padding),banner:l(Ae||(Ae=u()([`
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
      `])),Ie,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",Kn,Kn,a.fontSizeLG,$n,$n)}})()},Ht=function(n){var o,a=n.children,l=Wt(),s=l.styles,i=(0,f.useRouteMeta)(),d=(0,De.Z)(),m=(0,e.tZ)(Et.Z,null,(0,e.tZ)(Ee,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(It,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(Me.Z.Title,{style:{fontSize:30}},(o=i.frontmatter)===null||o===void 0?void 0:o.title,(0,e.tZ)(Tt.default,{title:(0,e.tZ)(f.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},a),(0,e.tZ)(Ce.default,null)));return d?m:(0,e.tZ)(U.ZP,{theme:{token:{colorBgLayout:"#fff"}}},m)},Nt=Ht,jt=r(10696),Ut=r(45481),Xt=r(41969),Ft=r(51077),Kt=r(19453),Gt=r(29135),Vt=r(41698),$t=function(n){var o=n.children,a=n.fallback,l=a===void 0?(0,e.tZ)(Gt.Z.Input,{active:!0,size:"small"}):a,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)(Vt.df,{triggerOnce:!0,delay:i},function(d){var m=d.inView,g=d.ref;return(0,e.tZ)("div",{ref:g},(0,e.tZ)(c.Suspense,{fallback:l},m?o:(0,e.tZ)("span",null)))})},In=$t,Yt=r(95561),Jt=c.lazy(function(){return Promise.all([r.e(1045),r.e(2031)]).then(r.bind(r,32031))}),Qt=c.lazy(function(){return Promise.resolve().then(r.bind(r,95561))}),qt=c.lazy(function(){return r.e(7056).then(r.bind(r,37056))}),no=c.lazy(function(){return Promise.resolve().then(r.bind(r,67034))}),eo=c.lazy(function(){return r.e(270).then(r.bind(r,32433))}),to=c.lazy(function(){return Promise.resolve().then(r.bind(r,7936))}),oo=c.lazy(function(){return r.e(1786).then(r.bind(r,91786))}),ro=function(n){var o,a,l,s,i=n.children,d=(0,f.useRouteMeta)(),m=(0,$.Z)(),g=m.pathname,b=m.hash,S=(0,c.useContext)(h.Z),w=S.direction,M=(0,Yt.useStyle)(),k=M.styles,L=(0,Xt.Z)(!1),x=D()(L,2),W=x[0],y=x[1],z=(0,c.useState)("tsx"),nn=D()(z,2),hn=nn[0],J=nn[1],fn=(0,c.useMemo)(function(){var Wn;return((Wn=d.toc)===null||Wn===void 0?void 0:Wn.filter(function(Sn){return Sn._debug_demo}).map(function(Sn){return Sn.id}))||[]},[d]),ln=fn.includes(b.slice(1));(0,c.useLayoutEffect)(function(){y(ln)},[]);var Tn=(0,c.useMemo)(function(){return{showDebug:W,setShowDebug:y,codeType:hn,setCodeType:J}},[W,hn,fn]),wn=w==="rtl";return(0,e.tZ)(Kt.Z.Provider,{value:Tn},(0,e.tZ)(Mn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(In,{fallback:null},(0,e.tZ)(Qt,{showDebug:W,debugDemos:fn})),(0,e.tZ)("article",{className:O()(k.articleWrapper,{rtl:wn})},(o=d.frontmatter)!==null&&o!==void 0&&o.title?(0,e.tZ)(jt.Z,{justify:"space-between"},(0,e.tZ)(Me.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Ut.Z,null,(0,e.tZ)("span",null,(a=d.frontmatter)===null||a===void 0?void 0:a.title),(0,e.tZ)("span",null,(l=d.frontmatter)===null||l===void 0?void 0:l.subtitle),!g.startsWith("/components/overview")&&(0,e.tZ)(In,{fallback:null},(0,e.tZ)(to,{title:(0,e.tZ)(f.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename}))))):null,(0,e.tZ)(In,{fallback:null},(0,e.tZ)(qt,null)),!d.frontmatter.__autoDescription&&d.frontmatter.description,d.frontmatter.category==="Components"&&String(d.frontmatter.showImport)!=="false"&&(0,e.tZ)(Ft.Z,{source:!0,component:d.frontmatter.title,filename:d.frontmatter.filename,version:d.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"}},i),(0,e.tZ)("div",{style:{marginTop:120}},(0,e.tZ)(In,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(Jt,{filename:d.frontmatter.filename})),(0,e.tZ)(In,{fallback:null},(0,e.tZ)("div",{className:O()(k.bottomEditContent,{rtl:wn})},(0,e.tZ)(oo,{time:(s=d.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(In,{fallback:null},(0,e.tZ)(eo,{rtl:wn})),(0,e.tZ)(no,null)))},ao=ro,io=r(92828),lo=r(22687),We,He,so=(0,p.kc)(function(t){var n=t.token,o=t.css,a=n.antCls,l=n.fontFamily,s=n.colorSplit,i=n.marginXXL,d=n.paddingXXS;return{asideContainer:o(We||(We=u()([`
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
    `])),i,l,d,a,a,a,a,n.fontSize,a,a,n.margin,n.margin,n.fontSize,s,a,a,a,a,a,a,a,a,a,a,a,a,a,a,n.marginXXS,a,n.padding,a,a,a,n.padding,a,a),mainMenu:o(He||(He=u()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),co=function(){var n=(0,f.useSidebarData)(),o=(0,c.useContext)(h.Z),a=o.isMobile,l=o.theme,s=so(),i=s.styles,d=(0,lo.Z)(),m=D()(d,2),g=m[0],b=m[1],S=l.includes("dark"),w=(0,p.Fg)(),M=w.colorBgContainer,k=(0,e.tZ)(U.ZP,{theme:{components:{Menu:{itemBg:M,darkItemBg:M}}}},(0,e.tZ)(ee.Z,{items:g,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:S?"dark":"light",selectedKeys:[b],defaultOpenKeys:n==null?void 0:n.map(function(L){var x=L.title;return x}).filter(Boolean)}));return a?(0,e.tZ)(io.Z,{key:"Mobile-menu"},k):(0,e.tZ)(Mn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},k)},uo=co,Ne,mo=(0,p.kc)(function(t){var n=t.css,o=t.token;return{main:n(Ne||(Ne=u()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),po=function(n){var o=n.children,a=mo(),l=a.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(Ee,null),(0,e.tZ)(uo,null),(0,e.tZ)(ao,null,o))},go=po,ho={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},fo=function(){var n=(0,f.useOutlet)(),o=(0,$.Z)(),a=o.pathname,l=o.search,s=o.hash,i=(0,rn.default)(ho),d=D()(i,2),m=d[0],g=d[1],b=(0,c.useRef)(null),S=(0,c.useContext)(h.Z),w=S.direction,M=(0,f.useSiteData)(),k=M.loading;(0,c.useLayoutEffect)(function(){g==="cn"?xn().locale("zh-cn"):xn().locale("en")},[]),(0,c.useEffect)(function(){var x=document.getElementById("nprogress-style");return b.current=setTimeout(function(){x==null||x.remove()},0),function(){return clearTimeout(b.current)}},[]),(0,c.useEffect)(function(){var x=s.replace("#","");if(x){var W;(W=document.getElementById(decodeURIComponent(x)))===null||W===void 0||W.scrollIntoView()}},[k,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+l)},[o]);var L=c.useMemo(function(){return["","/"].some(function(x){return x===a})||["/index"].some(function(x){return a.startsWith(x)})?(0,e.tZ)(Dt,{title:m.title,desc:m.description},n):a.startsWith("/docs/resource")?(0,e.tZ)(Nt,null,n):a.startsWith("/theme-editor")?n:(0,e.tZ)(go,null,n)},[a,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(f.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":w,className:O()({rtl:w==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:m.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(U.ZP,{direction:w,locale:g==="cn"?cn.Z:void 0},(0,e.tZ)(pn,null),(0,e.tZ)(Ct,null),L))},vo=fo},95561:function(zn,R,r){r.r(R),r.d(R,{useStyle:function(){return A}});var j=r(26068),D=r.n(j),V=r(53649),O=r.n(V),sn=r(75271),xn=r(10286),bn=r(97940),c=r(82187),U=r.n(c),cn=r(51675),f=r(96378),rn,$,e,p,A=(0,bn.kc)(function(Z){var v=Z.token,X=Z.css,en=v.antCls;return{anchorToc:X(rn||(rn=O()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),en,en,v.fontSizeSM),tocWrapper:X($||($=O()([`
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
    `])),v.headerHeight+v.contentMarginTop-4,v.borderRadius,v.purple6,v.purple5,v.headerHeight+v.contentMarginTop+24,v.paddingXXS,v.screenLG),articleWrapper:X(e||(e=O()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),v.screenLG,v.paddingLG*2),bottomEditContent:X(p||(p=O()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      flex: 0;
    `])))}}),Y=function(v){var X=v.showDebug,en=v.debugDemos,_n=en===void 0?[]:en,un=A(),En=un.styles,Nn=(0,bn.Fg)(),Q=(0,cn.useRouteMeta)(),E=(0,cn.useTabMeta)(),q=function(P){var B;return{href:"#".concat(P.id),title:P.title,key:P.id,children:(B=P.children)===null||B===void 0?void 0:B.filter(function(I){return X||!_n.includes(I.id)}).map(function(I){return{key:I.id,href:"#".concat(I.id),title:(0,f.tZ)("span",{className:U()({"toc-debug":_n.includes(I.id)})},I==null?void 0:I.title)}})}},mn=sn.useMemo(function(){return((E==null?void 0:E.toc)||Q.toc).reduce(function(N,P){if(P.depth===2)N.push(D()({},P));else if(P.depth===3){var B=N[N.length-1];B&&(B.children=B.children||[],B.children.push(D()({},P)))}return N},[])},[E==null?void 0:E.toc,Q.toc]);return Q.frontmatter.toc?(0,f.tZ)("section",{className:En.tocWrapper},(0,f.tZ)(xn.Z,{affix:!1,className:En.anchorToc,targetOffset:Nn.anchorTop,showInkInFixed:!0,items:mn.map(q)})):null};R.default=Y},67034:function(zn,R,r){r.r(R);var j=r(75271),D=r(91574),V=r(96378),O=r(33230),sn=r(32699),xn=r.n(sn),bn=r(96058),c=r(16932),U=r(68714),cn=r(91011),f=function(){var e=(0,c.Z)(),p=e.token,A=(0,U.Z)("footerLinks"),Y=(0,j.useContext)(cn.Z),Z=Y.isMobile,v=new D.C((0,bn.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,V.iv)("background:",v,";",""),footer:(0,V.iv)("background:",v,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",Z?60:0,"px;:last-child{margin-bottom:",Z?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(A)&&A.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},rn=function(){var e=f(),p=(0,U.Z)("footer"),A=(0,U.Z)("footerLinks"),Y=(0,j.useCallback)(function(Z){return Array.isArray(Z)&&Z.forEach(function(v){var X=v.icon;v.icon&&(delete v.icon,v.icon=(0,V.tZ)("img",{src:String(X),alt:"",style:{maxWidth:"100%"}})),Array.isArray(v.items)&&Y(v.items)}),Z},[]);return p?(0,V.tZ)(O.Z,{columns:Y((0,sn.cloneDeep)(A)),css:e.footer,bottom:(0,V.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};R.default=rn}}]);
