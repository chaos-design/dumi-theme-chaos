"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{74232:function(Pn,R,o){o.d(R,{Z:function(){return U.Z}});var U=o(17501)},7936:function(Pn,R,o){o.r(R);var U=o(53649),C=o.n(U),V=o(75271),z=o(60885),sn=o(82145),vn=o(97940),xn=o(11486),c=o(96378),X,cn=function(e){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(h)},v=(0,vn.kc)(function(J){var e=J.token,h=J.css,A=e.colorIcon,Y=e.colorText,_=e.iconCls;return{editButton:h(X||(X=C()([`
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
    `])),e.marginXS,_,A,e.fontSizeLG,e.motionDurationSlow,Y)}}),rn=function(e){var h=e.title,A=e.filename,Y=v(),_=Y.styles,x=(0,xn.H)(),F=x.user,en=x.repo,kn=x.branch,un=x.docDir;return(0,c.tZ)(sn.Z,{title:h},(0,c.tZ)("a",{className:_.editButton,href:"".concat(cn("".concat(F,"/").concat(en),kn)).concat(un).concat(A),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(z.Z,null)))};R.default=rn},73594:function(Pn,R,o){o.d(R,{Z:function(){return V},f:function(){return C}});var U=o(75271),C=U.createContext(!1);function V(){return U.useContext(C)}},22687:function(Pn,R,o){var U=o(48305),C=o.n(U),V=o(15558),z=o.n(V),sn=o(82092),vn=o.n(sn),xn=o(53649),c=o.n(xn),X=o(75271),cn=o(45481),v=o(23753),rn=o(97940),J=o(82187),e=o.n(J),h=o(48702),A=o(41075),Y=o(19888),_=o(96378),x,F,en;function kn(q){return q&&/^\d+\.\d+\.\d+$/.test(q)}var un=(0,rn.kc)(function(q){var E=q.css,nn=q.token;return{link:E(x||(x=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:E(F||(F=c()([`
    margin-inline-end: 0;
  `]))),subtitle:E(en||(en=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),nn.fontSizeSM)}}),En=function(E){var nn,mn,j=un(),P=j.styles,O=E.before,I=E.after,bn=E.link,On=E.title,pn=E.subtitle,K=E.search,N=E.tag,_n=E.className,G=(nn=typeof N=="string"?N:N==null?void 0:N.title)!==null&&nn!==void 0?nn:"",Zn=(mn=typeof N=="string"?N:N==null?void 0:N.color)!==null&&mn!==void 0?mn:"";return!O&&!I?(0,_.tZ)(A.Z,{to:"".concat(bn).concat(K),className:e()(_n,vn()({},P.link,G))},(0,_.tZ)(cn.Z,null,(0,_.tZ)("span",null,On),pn&&(0,_.tZ)("span",{className:P.subtitle},pn)),G&&(0,_.tZ)(v.Z,{bordered:!1,className:e()(P.tag),color:kn(Zn)||Zn==="New"?"success":"processing"},G)):(0,_.tZ)(A.Z,{to:"".concat(bn).concat(K),className:_n},O,On,pn&&(0,_.tZ)("span",{className:P.subtitle},pn),I)},Nn=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},nn=(0,h.useFullSidebarData)(),mn=(0,Y.Z)(),j=mn.pathname,P=mn.search,O=(0,h.useSidebarData)(),I=E.before,bn=E.after,On=(0,X.useMemo)(function(){var pn,K=z()(O!=null?O:[]);if(j.startsWith("/docs/spec")){var N=K.splice(0,1);K.push.apply(K,z()(N))}if(j.startsWith("/docs/react")){var _n,G=(_n=Object.entries(nn).find(function(ln){var m=C()(ln,1),gn=m[0];return gn.startsWith("/changelog")}))===null||_n===void 0?void 0:_n[1];G&&K.splice(1,0,G[0])}if(j.startsWith("/changelog")){var Zn,Bn=(Zn=Object.entries(nn).find(function(ln){var m=C()(ln,1),gn=m[0];return gn.startsWith("/docs/react")}))===null||Zn===void 0?void 0:Zn[1];Bn&&(K.unshift(Bn[0]),K.push.apply(K,z()(Bn.slice(1))))}return(pn=K==null?void 0:K.reduce(function(ln,m){if(m!=null&&m.title)if(j.startsWith("/docs/spec")){var gn,Ln,Kn=m.children.reduce(function(u,M){var B,$,tn=(B=($=M.frontmatter)===null||$===void 0?void 0:$.type)!==null&&B!==void 0?B:"default";return u[tn]||(u[tn]=[]),u[tn].push(M),u},{}),Rn=[];Rn.push.apply(Rn,z()((gn=(Ln=Kn.default)===null||Ln===void 0?void 0:Ln.map(function(u){return{label:(0,_.tZ)(A.Z,{to:"".concat(u.link).concat(P)},I,u==null?void 0:u.title,bn),key:u.link.replace(/(-cn$)/g,"")}}))!==null&&gn!==void 0?gn:[])),Object.entries(Kn).forEach(function(u){var M=C()(u,2),B=M[0],$=M[1];B!=="default"&&Rn.push({type:"group",label:B,key:B,children:$==null?void 0:$.map(function(tn){return{label:(0,_.tZ)(A.Z,{to:"".concat(tn.link).concat(P)},I,tn==null?void 0:tn.title,bn),key:tn.link.replace(/(-cn$)/g,"")}})})}),ln.push({label:m==null?void 0:m.title,key:m==null?void 0:m.title,children:Rn})}else{var Cn;ln.push({type:"group",label:m==null?void 0:m.title,key:m==null?void 0:m.title,children:(Cn=m.children)===null||Cn===void 0?void 0:Cn.map(function(u){var M,B;return{label:(0,_.tZ)(En,{before:I,after:bn,link:u.link,title:u==null?void 0:u.title,subtitle:(M=u.frontmatter)===null||M===void 0?void 0:M.subtitle,search:P,tag:((B=u.frontmatter)===null||B===void 0?void 0:B.tag)||""}),key:u.link.replace(/(-cn$)/g,"")}})})}else{var jn=m.children||[];jn.every(function(u){var M;return u==null||(M=u.frontmatter)===null||M===void 0?void 0:M.date})&&jn.sort(function(u,M){var B,$;return((B=u.frontmatter)===null||B===void 0?void 0:B.date)>(($=M.frontmatter)===null||$===void 0?void 0:$.date)?-1:1}),ln.push.apply(ln,z()(jn.map(function(u){var M;return{label:(0,_.tZ)(En,{before:I,after:bn,link:u.link,title:u==null?void 0:u.title,search:P,tag:((M=u.frontmatter)===null||M===void 0?void 0:M.tag)||""}),key:u.link.replace(/(-cn$)/g,"")}})))}return ln},[]))!==null&&pn!==void 0?pn:[]},[O,nn,j,P,E]);return[On,j]};R.Z=Nn},54915:function(Pn,R,o){o.r(R),o.d(R,{default:function(){return vo}});var U=o(48305),C=o.n(U),V=o(82187),z=o.n(V),sn=o(16483),vn=o.n(sn),xn=o(81414),c=o(75271),X=o(70567),cn=o(41329),v=o(48702),rn=o(54425),J=o(19888),e=o(96378),h=o(97940),A={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Y=function(){var n=(0,h.Fg)(),a=function l(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(l(s,i+1),`
    `):""},r=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(A[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",a("blue")," ",a("purple")," ",a("cyan")," ",a("green")," ",a("magenta")," ",a("red")," ",a("volcano")," ",a("orange")," ",a("gold")," ",a("yellow")," ",a("lime")," ",a("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},_=Y,x=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",t.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",t.paddingXXS,"px;margin-inline-start:-",t.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",t.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},F=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:",t.fontFamily,";line-height:",t.lineHeight,";background:",t.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},en=o(21793),kn=function(){var t=(0,h.Fg)(),n=t.anchorTop;return c.useInsertionEffect(function(){(0,en.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},un=o(84432),En=function(){var n=(0,h.Fg)(),a=n.antCls,r=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",a,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",a,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",a,"-row>div,.code-box-demo ",a,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",a,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new un.FastColor(r).setA(.75).toHexString(),";}}",a,"-row .demo-col,.code-box-demo ",a,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",a,"-row .demo-col-1{background:",new un.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-2,.code-box-demo ",a,"-row .demo-col-2{background:",new un.FastColor(r).setA(.75).toHexString(),";}",a,"-row .demo-col-3,.code-box-demo ",a,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",a,"-row .demo-col-4,.code-box-demo ",a,"-row .demo-col-4{background:",new un.FastColor(r).setA(.6).toHexString(),";}",a,"-row .demo-col-5,.code-box-demo ",a,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",a,"-row>div{margin-top:0;margin-bottom:0;}}","")})},Nn=En,q=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,t.padding,"px ",t.paddingXL,"px;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",t.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",t.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",t.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",t.margin,"px 0;padding:",t.paddingSM,"px ",t.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",t.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},E=function(){var n=(0,h.Fg)(),a=n.antCls,r=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",r,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",a,"-row",a,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",a,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",a,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",a,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",r,"{color:",n.colorTextBase,";font-weight:bold;}}}",a,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},nn=E,mn=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",t.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",t.padding,"px;padding-inline-start:",t.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",t.margin,"px;.ant-row-rtl &{margin-inline-end:",t.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",t.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",t.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",t.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",t.paddingMD,"px;font-size:",t.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",t.marginXL,"px;.ant-divider{display:none;}a{font-size:",t.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",t.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",t.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",t.colorSplit,";&:last-child{margin-bottom:",t.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",t.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",t.marginXS,"px;font-size:",t.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",t.margin,"px;font-size:",t.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",t.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",t.marginXS,"px;}.page3-block{margin-bottom:",t.marginXL,"px;padding:",t.paddingLG,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",t.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",t.padding,"px;}}}}")})},j=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",t.colorPrimary,";}.peg{box-shadow:0 0 10px ",t.colorPrimary,",0 0 5px ",t.colorPrimary,";}.spinner-icon{border-top-color:",t.colorPrimary,";border-left-color:",t.colorPrimary,";}}")})},P=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",t.marginLG,"px;.ant-row-rtl &{margin-inline-end:",t.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",t.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorError,";content:'';}.preview-image-title{margin-top:",t.marginMD,"px;color:",t.colorText,";font-size:",t.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",t.colorTextSecondary,";font-size:",t.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",t.paddingSM,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadius,"px;cursor:pointer;transition:all ",t.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",t.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",t.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",t.marginXXL,"px 0 ",t.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",t.marginLG,"px;padding:",t.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",t.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",t.margin,"px 0 ",t.marginXS,"px;}p{font-size:",t.fontSizeSM,"px;line-height:24px;}}}")})},O="dumi-default-",I=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",O,"search-bar{&-input{color:",t.colorText,";background:",t.colorBgContainer,";&:focus{background:",t.colorBgContainer,";}&::placeholder{color:",t.colorTextPlaceholder,"!important;}}}.",O,"search-popover{background-color:",t.colorBgElevated,"!important;&::before{border-bottom-color:",t.colorBgElevated,"!important;}}.",O,"search-result{dl{dt{background-color:",t.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",t.controlItemBgHover,";h4,p{color:",t.colorText,"!important;}svg{fill:",t.colorText,"!important;}}}}}}}")})},bn=function(){var t=(0,h.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",t.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",t.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},On=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(F,null),(0,e.tZ)(kn,null),(0,e.tZ)(Nn,null),(0,e.tZ)(q,null),(0,e.tZ)(nn,null),(0,e.tZ)(mn,null),(0,e.tZ)(j,null),(0,e.tZ)(P,null),(0,e.tZ)(bn,null),(0,e.tZ)(_,null),(0,e.tZ)(x,null),(0,e.tZ)(I,null))},pn=On,K=o(68585),N=o.n(K),_n=o(26068),G=o.n(_n),Zn=o(82092),Bn=o.n(Zn),ln=o(53649),m=o.n(ln),gn=o(64733),Ln=o(52825),Kn=o(54669),Rn=o(93362),Cn=o(32860),jn=o(88283),u=o(56178),M=o(91011),B=o(41075),$=o(82145),tn,ee,te,Ke=(0,h.kc)(function(t){var n=t.token,a=t.css,r=n.headerHeight,l=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:a(tn||(tn=m()([`
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
    `])),r,l,s,r,n.marginSM,l,i),title:a(ee||(ee=m()([`
      line-height: 40px;
    `]))),logoImage:a(te||(te=m()([`&:hover {
      transform: rotate(666turn);
      transition: 59s cubic-bezier(.34,0,.84,1) 1s;
    }
  `])))}}),oe="chaos.logo.tour.dismiss",Ge=function(n){var a=n.isZhCN,r=c.useState((0,u.Fy)()?!localStorage.getItem(oe):!0),l=C()(r,2),s=l[0],i=l[1],d=(0,v.useSiteData)(),p=d.themeConfig,f=(0,v.useLocation)(),b=f.search,k=Ke(),y=k.styles,S=p.logo||"https://rain120.github.io/study-notes/img/chao.png";return(0,e.tZ)("h1",null,(0,e.tZ)(B.Z,{to:u.J1("/",a,b),className:y.logo},(0,e.tZ)($.Z,{title:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"right",open:s,onOpenChange:function(T){i(T),T&&(0,u.Fy)()&&localStorage.setItem(oe,"1")}},(0,e.tZ)("img",{id:"chaos-logo",className:y.logoImage,src:S,draggable:!1,alt:"logo"})),(0,e.tZ)("span",{className:y.title},"Chaos")))},$e=Ge,Ve=o(15558),Gn=o.n(Ve),ae=o(81905),An=o(11486),Je=o(77855),Ye=o(23831),Qe=o(32252),re=o(68714),ie=function(n){return(n!=null?n:[]).map(function(a,r){return{label:(0,e.tZ)("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.text),key:r}})},qe=function(){var n=(0,re.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Ye.Z,{menu:{items:ie(n)},placement:"bottomRight"},(0,e.tZ)(Qe.ZP,{size:"small"},(0,e.tZ)(v.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(Je.Z,null))):null},nt=qe,le,et=(0,h.kc)(function(t){var n=t.token,a=n.antCls,r=n.iconCls,l=n.fontFamily,s=n.fontSize,i=n.headerHeight,d=n.colorPrimary;return{nav:(0,h.iv)(le||(le=m()([`
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
    `])),s,l,a,a,a,40+12*2,i,n.paddingSM,n.paddingSM,i,a,r,a,d,a,a)}}),tt=function(n){var a,r,l=n.isZhCN,s=n.isMobile,i=n.responsive,d=n.directionText,p=n.onLangChange,f=n.onDirectionChange,b=(0,An.H)(),k=b.github,y=(0,v.useLocation)(),S=y.pathname,D=y.search,T=(0,v.useSiteData)(),w=T.locales,W=(0,v.useNavData)(),g=(0,v.useLocale)(),L=(0,re.Z)("moreLinks"),Q=(0,v.useFullSidebarData)(),dn=((a=Q["/docs/blog"])===null||a===void 0||(a=a[0])===null||a===void 0?void 0:a.children)||[],on=et(),hn=on.styles,yn=s?"inline":"horizontal",Tn=S.split("/").filter(Boolean).slice(0,-1).join("/"),wn="/".concat(Tn||"home");S.startsWith("/changelog")?wn="/docs/react":S.startsWith("/docs/resources")&&(wn="/docs/resources");var zn=function fn(Mn){return Mn.map(function(Z){var an,qn=((an=Z.link)!==null&&an!==void 0?an:"").split("/").slice(0,2).join("/");return{label:Z.children?Z.title:(0,u.YW)(Z.link)?(0,e.tZ)("a",{href:"".concat(Z.link).concat(D),target:"_blank",rel:"noreferrer"},Z.title):(0,e.tZ)(B.Z,{to:"".concat(Z.link).concat(D)},Z.title),key:(0,u.YW)(Z.link)?Z.link:qn,children:Z.children?fn(Z.children):null}})},Sn=zn(W),Qn=c.useCallback(function(){if(w.length<2)return null;if(w.length===2){var fn=w.filter(function(Z){return Z.id!==(g==null?void 0:g.id)})[0],Mn=(0,u.cY)({pathname:S,current:g,target:fn});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Mn},fn.name),key:fn.id}}return{label:(0,e.tZ)("span",null,g.name),key:"multi-lang",children:w.filter(function(Z){return Z.id!==g.id}).map(function(Z){var an=(0,u.cY)({pathname:S,current:g,target:Z});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:an},Z.name),key:Z.id}})}},[g,w]),Un=[],Vn=[k?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:k,target:"_blank"},"GitHub"),key:"github"}:null,Qn(),{label:(0,e.tZ)(v.FormattedMessage,{id:"app.header.lang"}),onClick:p,key:"switch-lang"},{label:d,onClick:f,key:"switch-direction"}].concat(Gn()(ie(L)||[]));s?Un=Vn:i==="crowded"&&(Un=[{label:(0,e.tZ)(gn.Z,null),key:"additional",children:Gn()(Vn)}]);var Hn=[].concat(Gn()(Sn!=null?Sn:[]),[dn.length?{label:(0,e.tZ)(B.Z,{to:u.J1(dn.sort(function(fn,Mn){var Z,an;return((Z=fn.frontmatter)===null||Z===void 0?void 0:Z.date)>((an=Mn.frontmatter)===null||an===void 0?void 0:an.date)?-1:1})[0].link,l,D)},g==null?void 0:g.blog),key:"docs/blog"}:null],Gn()((r=Un)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,e.tZ)(ae.Z,{mode:yn,selectedKeys:[wn],className:hn.nav,disabledOverflow:!0,items:Hn})},ot=tt,at=o(35947),de=o(16932),Jn="1.2em",rt=function(){var n=(0,de.Z)(),a=n.token,r=a.controlHeight,l=a.motionDurationMid;return{btn:(0,e.iv)("color:",a.colorText,";border-color:",a.colorBorder,";padding:0!important;width:",r,"px;height:",r,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",a.borderRadius,"px;transition:all ",l,";cursor:pointer;.btn-inner{transition:all ",l,";}&:hover{background:",a.colorBgTextHover,";}img{width:",Jn,";height:",Jn,";}.anticon{font-size:",Jn,";}","")}},it=function(){var n=(0,An.H)(),a=n.github,r=rt();return(0,e.tZ)("div",null,a?(0,e.tZ)($.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:a,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[r.btn,"",""],type:"button"},(0,e.tZ)(at.Z,null)))):null)},lt=it,dt=o(43151),se=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);r/=255,l/=255,s/=255;var i=Math.max(r,l,s),d=Math.min(r,l,s),p,f,b=(i+d)/2;if(i===d)p=f=0;else{var k=i-d;switch(f=b>.5?k/(2-i-d):k/(i+d),i){case r:p=(l-s)/k+(l<s?6:0);break;case l:p=(s-r)/k+2;break;case s:p=(r-l)/k+4;break}p/=6}return f=f*100,b=b*100-a,"hsl(".concat(Math.round(p*360),", ").concat(Math.round(f),"%, ").concat(Math.round(b),"%)")},st=function(n){var a=n.backgroundColor,r=a===void 0?"#e8d7ff":a,l=n.textColor,s=l===void 0?"#091E42":l,i=n.align,d=i===void 0?"center":i,p=(0,de.Z)(),f=p.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",f.fontSize,"px;@media only screen and (max-width: ",f.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",se(r,10),";--site-announcement-bar-stripe-color2:",se(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,d,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},ce="chaos.announcement.dismiss",ct=function(){var n=(0,c.useState)(!0),a=C()(n,2),r=a[0],l=a[1],s=(0,An.Z)()||{},i=s.announcementBar,d=(0,M.A)(),p=d.updateSiteConfig,f=st(i||{});(0,c.useEffect)(function(){var k=!0;i!=null&&i.id&&(!(0,u.Fy)()||localStorage.getItem(ce)===i.id)?l(!0):l(!1),l(k)},[i]),(0,c.useEffect)(function(){p({bannerVisible:!r})},[r]);var b=(0,c.useCallback)(function(){i!=null&&i.id&&(0,u.Fy)()&&localStorage.setItem(ce,i.id),l(!0)},[]);return r?null:(0,e.tZ)(X.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(dt.Z,N()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[f.link,"",""],href:i==null?void 0:i.link.link,target:"_blank",rel:"noreferrer",onClick:function(){var y,S;(y=(S=window).gtag)===null||y===void 0||y.call(S,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}},i==null?void 0:i.more)),onClose:b,css:i!=null&&i.backgroundColor?[f.container]:[]}))))},ut=ct,ue,me,pe,ge,he,In="1.2em",mt=(0,h.kc)(function(t){var n=t.token,a=t.css,r=n.colorText,l=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,d=n.borderRadius,p=n.controlHeight,f=n.motionDurationMid;return{btn:a(ue||(ue=m()([`
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
    `])),r,l,p,p,d,f,f,i,In,In,In),innerDiv:a(me||(me=m()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),In,In),labelStyle:a(pe||(pe=m()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),In,r,r),label1Style:a(ge||(ge=m()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,s),label2Style:a(he||(he=m()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(n){var a=n.label1,r=n.label2,l=n.tooltip1,s=n.tooltip2,i=n.value,d=n.pure,p=n.onClick,f=mt(),b=f.styles,k=b.btn,y=b.innerDiv,S=b.labelStyle,D=b.label1Style,T=b.label2Style,w=(0,e.tZ)("button",{type:"button",onClick:p,className:k,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},d&&(i===1?a:r),!d&&(0,e.tZ)("div",{className:y},(0,e.tZ)("span",{className:z()(S,i===1?D:T)},a),(0,e.tZ)("span",{className:z()(S,i===1?T:D)},r))));return l||s?(0,e.tZ)($.Z,{title:i===1?l:s},w):w},fe=pt,gt=Ln.default.Option,ht=function(){var n=(0,v.useSearchParams)(),a=C()(n,1),r=a[0],l=(0,An.Z)(),s=l.localesEnhance,i=(0,v.useSiteData)(),d=i.locales,p=(0,v.useIntl)(),f=p.locale,b=(0,v.useLocale)(),k=(0,v.useLocation)(),y=k.pathname,S=(0,c.useCallback)(function(g){var L=(0,u.cY)({pathname:y,current:b,target:d.find(function(Q){var dn=Q.id;return dn===g})});L.startsWith("/-")?L="/index".concat(L.substring(1)):L.endsWith("/index")&&(L=L.replace("/index","/")),v.history.push({pathname:L,search:r.toString()})},[y,b,d,r]),D=(0,c.useCallback)(function(){S(d.filter(function(g){return g.id!==f})[0].id)},[f,S,d]),T;if(d.length>2||!s&&d.length>2){var w=d.map(function(g){return(0,e.tZ)(gt,{value:g.id,key:g.id},g.name)});T=(0,e.tZ)(Ln.default,{key:"lang",className:"version",size:"small",defaultValue:f,onChange:S,popupMatchSelectWidth:!1,getPopupContainer:function(L){return L.parentNode}},w)}else if(d.length===2&&Array.isArray(s)&&s.length>1){var W=d[0].id===f?1:2;T=(0,e.tZ)(fe,{key:"lang",onClick:D,value:W,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(d[0].name," / ").concat(d[1].name),tooltip2:"".concat(d[1].name," / ").concat(d[0].name)})}return T},ft=ht,vt=o(25108),xt=function(n){var a=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(a==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},bt=c.forwardRef(function(t,n){return(0,e.tZ)(vt.Z,N()({ref:n,component:function(){return(0,e.tZ)(xt,{direction:t.direction})}},t))}),ve=bt,xe,yt=(0,h.kc)(function(t){var n=t.token,a=t.css;return{dataDirectionIcon:a(xe||(xe=m()([`
      width: 20px;
    `])))}}),wt=function(){var n=(0,c.useContext)(M.Z),a=n.direction,r=n.updateSiteConfig,l=yt(),s=l.styles,i=(0,An.Z)(),d=i.rtl,p=d===void 0?!0:d;if(!p)return null;var f=function(){r({direction:a!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(fe,{key:"direction",onClick:f,value:a==="rtl"?2:1,label1:(0,e.tZ)(ve,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(ve,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},St=wt,be,ye,we,Se,ke,_e,Ze=1120,Ce=1200,kt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},_t=(0,h.kc)(function(t){var n=t.token,a=t.css,r="#ced4d9";return{header:a(be||(be=m()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,r,r,r,n.borderRadiusSM,n.paddingSM),menuRow:a(ye||(ye=m()([`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: `,`px;
      padding-inline-end: `,`px;

      > * {
        flex: none;
        margin: 0;
      }
    `])),n.paddingSM,n.padding),dataDirectionIcon:a(we||(we=m()([`
      width: 20px;
    `]))),popoverMenu:Bn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:a(Se||(Se=m()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:a(ke||(ke=m()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:a(_e||(_e=m()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Zt=function(){var n,a=(0,rn.default)(kt),r=C()(a,2),l=r[0],s=r[1],i=(0,v.useSiteData)(),d=i.pkg,p=(0,An.Z)(),f=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),b=C()(f,2),k=b[0],y=b[1],S=(0,c.useContext)(M.Z),D=S.direction,T=S.isMobile,w=S.updateSiteConfig,W=(0,c.useRef)(null),g=(0,v.useLocation)(),L=g.pathname,Q=g.search,dn=_t(),on=dn.styles,hn=(0,c.useCallback)(function(){y(function(H){return G()(G()({},H),{},{menuVisible:!1})})},[]),yn=(0,c.useCallback)(function(){y(function(H){return G()(G()({},H),{},{windowWidth:window.innerWidth})})},[]),Tn=(0,c.useCallback)(function(H){y(function(Dn){return G()(G()({},Dn),{},{menuVisible:H})})},[]),wn=function(){w({direction:D!=="rtl"?"rtl":"ltr"})};(0,c.useEffect)(function(){hn()},[g]),(0,c.useEffect)(function(){return yn(),window.addEventListener("resize",yn),function(){window.removeEventListener("resize",yn),W.current&&clearTimeout(W.current)}},[]);var zn=(0,c.useCallback)(function(H){var Dn=window.location.href,yo=window.location.pathname;if(/overview/.test(yo)&&/0?[1-39][0-3]?x/.test(H)){window.location.href=Dn.replace(window.location.origin,H).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(H)?"":"/react","/introduce")).replace(/\/$/,"");return}var Fn=new URL(Dn.replace(window.location.origin,H));Fn.host.includes("antgroup")?(Fn.pathname="".concat(Fn.pathname.replace(/\/$/,""),"/"),window.location.href=Fn.toString()):window.location.href=Fn.href.replace(/\/$/,"")},[]),Sn=(0,c.useCallback)(function(){var H="".concat(window.location.protocol,"//"),Dn=window.location.href.slice(H.length);u.Fy()&&localStorage.setItem("locale",u.KE(L)?"en-US":"zh-CN"),window.location.href=H+Dn.replace(window.location.pathname,u.J1(L,!u.KE(L),Q).pathname)},[g]),Qn=(0,c.useMemo)(function(){return D!=="rtl"?"RTL":"LTR"},[D]),Un=(0,c.useMemo)(function(){return D==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[D]),Vn=k.menuVisible,Hn=k.windowWidth,fn=k.searching,Mn=G()(G()({},d.version?Bn()({},d.version,d.version):{}),p==null?void 0:p.docVersions),Z=Object.keys(Mn).filter(Boolean).map(function(H){return{value:Mn[H],label:H}}),an=["","index","index-cn"].includes(L),qn=s==="cn",xo=D==="rtl",ne=null;Hn<Ze?ne="crowded":Hn<Ce&&(ne="narrow");var bo=z()(on.header,"clearfix",{"home-header":an}),Ue={isZhCN:qn,isRTL:xo},Xe=(0,e.tZ)(ot,N()({key:"nav"},Ue,{responsive:ne,isMobile:T,directionText:Qn,onLangChange:Sn,onDirectionChange:wn})),Xn=[Xe,Z.length>0?(0,e.tZ)(Ln.default,{key:"version",size:"small",className:on.versionSelect,defaultValue:(n=Z[0])===null||n===void 0?void 0:n.value,onChange:zn,dropdownStyle:Un,popupMatchSelectWidth:!1,getPopupContainer:function(Dn){return Dn.parentNode},options:Z}):null,(0,e.tZ)(nt,{key:"more"}),(0,e.tZ)(ft,{key:new Date().getTime()}),(0,e.tZ)(St,{key:"direction"}),(0,e.tZ)(lt,{key:"header-Extra"})];Hn<Ze?Xn=fn?[]:[Xe]:Hn<Ce&&(Xn=fn?[]:Xn);var Fe=an?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:bo},T&&(0,e.tZ)(Kn.Z,{classNames:{root:on.popoverMenu},placement:"bottomRight",content:Xn,trigger:"click",open:Vn,arrow:{pointAtCenter:!0},onOpenChange:Tn},(0,e.tZ)(gn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ut,null),(0,e.tZ)(Rn.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Cn.Z,Fe[0],(0,e.tZ)($e,N()({},Ue,{location:g}))),(0,e.tZ)(Cn.Z,Fe[1],(0,e.tZ)("div",{className:on.menuRow},(0,e.tZ)(jn.ZP,null),!T&&Xn))))},Ct=Zt,wo=o(75927),Me=o(67034),Mt=function(n){var a=n.children,r=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,r),(0,e.tZ)("meta",{property:"og:title",content:r}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)("div",{style:{minHeight:"100vh"}},a),(0,e.tZ)(Me.default,null))},Dt=Mt,Et=o(66112),De=o(19972),Ee=o(73594),Lt=function(){var n=(0,v.useRouteMeta)(),a=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var d;i="".concat(n.frontmatter.subtitle||""," ").concat(((d=n.frontmatter)===null||d===void 0?void 0:d.title)||""," - Ant Design")}var p=n.frontmatter.description||"";return[i,p]},[n]),r=C()(a,2),l=r[0],s=r[1];return(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Le=Lt,Tt=o(7936),zt=o(24415),Pt=o(38209),Ot=o.n(Pt),Bt=o(39696),Te,ze,Pe,Oe=["scroll","resize"],Rt=(0,h.kc)(function(t){var n=t.token,a=t.css,r=n.boxShadowSecondary,l=n.antCls;return{affixTabs:a(Te||(Te=m()([`
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
    `])),r,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:a(ze||(ze=m()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:a(Pe||(Pe=m()([`
      text-transform: capitalize;
    `])))}}),Be=32,At=function(){var n=c.useRef(null),a=c.useRef([]),r=c.useState(!1),l=C()(r,2),s=l[0],i=l[1],d=c.useState(void 0),p=C()(d,2),f=p[0],b=p[1],k=Rt(),y=k.styles,S=y.affixTabs,D=y.affixTabsFixed,T=y.span;function w(g){var L=document.getElementById(g);if(L){var Q=L.offsetTop-n.current.offsetHeight-Be;(0,Bt.Z)(Q)}}c.useEffect(function(){var g=document.querySelectorAll("h2[id]");a.current=Array.from(g).map(function(L){var Q=L.id;return Q}),i(!0)},[]),c.useEffect(function(){var g=decodeURIComponent((location.hash||"").slice(1));g&&w(g)},[s]);var W=c.useMemo(function(){function g(){for(var L=window,Q=L.scrollY,dn=n.current.offsetHeight,on=a.current.length-1;on>=0;on-=1){var hn=a.current[on],yn=document.getElementById(hn),Tn=yn.offsetTop-dn-Be;if(Tn<=Q){b(hn);return}}b(void 0)}return Ot()(g)},[]);return c.useEffect(function(){return Oe.forEach(function(g){return window.addEventListener(g,W)}),W(),function(){Oe.forEach(function(g){return window.removeEventListener(g,W)})}},[]),(0,e.tZ)("div",{className:z()(S,f&&D),ref:n},(0,e.tZ)(zt.Z,{activeKey:f,centered:!0,size:"large",onChange:w,items:a.current.map(function(g){return{key:g,label:(0,e.tZ)("span",{className:T},g.replace(/-/g," "))}})}))},It=At,Re,Ae,Ie,We=40,$n=1208,Yn=24,Wt=function(){var n=(0,Ee.Z)();return(0,h.kc)(function(a){var r=a.token,l=a.css,s=r.antCls;return{resourcePage:l(Re||(Re=m()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),$n),resourceContent:l(Ae||(Ae=m()([`
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
      `])),We,$n,Yn,s,r.padding,r.padding),banner:l(Ie||(Ie=m()([`
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
      `])),We,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",$n,$n,r.fontSizeLG,Yn,Yn)}})()},Ht=function(n){var a,r=n.children,l=Wt(),s=l.styles,i=(0,v.useRouteMeta)(),d=(0,Ee.Z)(),p=(0,e.tZ)(Et.Z,null,(0,e.tZ)(Le,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(It,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(De.Z.Title,{style:{fontSize:30}},(a=i.frontmatter)===null||a===void 0?void 0:a.title,(0,e.tZ)(Tt.default,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},r),(0,e.tZ)(Me.default,null)));return d?p:(0,e.tZ)(X.ZP,{theme:{token:{colorBgLayout:"#fff"}}},p)},Nt=Ht,jt=o(10696),Ut=o(45481),Xt=o(41969),Ft=o(51077),Kt=o(19453),Gt=o(29135),$t=o(41698),Vt=function(n){var a=n.children,r=n.fallback,l=r===void 0?(0,e.tZ)(Gt.Z.Input,{active:!0,size:"small"}):r,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)($t.df,{triggerOnce:!0,delay:i},function(d){var p=d.inView,f=d.ref;return(0,e.tZ)("div",{ref:f},(0,e.tZ)(c.Suspense,{fallback:l},p?a:(0,e.tZ)("span",null)))})},Wn=Vt,Jt=o(95561),Yt=c.lazy(function(){return Promise.all([o.e(1045),o.e(2031)]).then(o.bind(o,32031))}),Qt=c.lazy(function(){return Promise.resolve().then(o.bind(o,95561))}),qt=c.lazy(function(){return o.e(7056).then(o.bind(o,37056))}),no=c.lazy(function(){return Promise.resolve().then(o.bind(o,67034))}),eo=c.lazy(function(){return o.e(270).then(o.bind(o,32433))}),to=c.lazy(function(){return Promise.resolve().then(o.bind(o,7936))}),oo=c.lazy(function(){return o.e(1786).then(o.bind(o,91786))}),ao=function(n){var a,r,l,s,i=n.children,d=(0,v.useRouteMeta)(),p=(0,J.Z)(),f=p.pathname,b=p.hash,k=(0,c.useContext)(M.Z),y=k.direction,S=(0,Jt.useStyle)(),D=S.styles,T=(0,Xt.Z)(!1),w=C()(T,2),W=w[0],g=w[1],L=(0,c.useState)("tsx"),Q=C()(L,2),dn=Q[0],on=Q[1],hn=(0,c.useMemo)(function(){var zn;return((zn=d.toc)===null||zn===void 0?void 0:zn.filter(function(Sn){return Sn._debug_demo}).map(function(Sn){return Sn.id}))||[]},[d]),yn=hn.includes(b.slice(1));(0,c.useLayoutEffect)(function(){g(yn)},[]);var Tn=(0,c.useMemo)(function(){return{showDebug:W,setShowDebug:g,codeType:dn,setCodeType:on}},[W,dn,hn]),wn=y==="rtl";return(0,e.tZ)(Kt.Z.Provider,{value:Tn},(0,e.tZ)(Cn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(Wn,{fallback:null},(0,e.tZ)(Qt,{showDebug:W,debugDemos:hn})),(0,e.tZ)("article",{className:z()(D.articleWrapper,{rtl:wn})},(a=d.frontmatter)!==null&&a!==void 0&&a.title?(0,e.tZ)(jt.Z,{justify:"space-between"},(0,e.tZ)(De.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Ut.Z,null,(0,e.tZ)("span",null,(r=d.frontmatter)===null||r===void 0?void 0:r.title),(0,e.tZ)("span",null,(l=d.frontmatter)===null||l===void 0?void 0:l.subtitle),!f.startsWith("/components/overview")&&(0,e.tZ)(Wn,{fallback:null},(0,e.tZ)(to,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename}))))):null,(0,e.tZ)(Wn,{fallback:null},(0,e.tZ)(qt,null)),!d.frontmatter.__autoDescription&&d.frontmatter.description,d.frontmatter.category==="Components"&&String(d.frontmatter.showImport)!=="false"&&(0,e.tZ)(Ft.Z,{source:!0,component:d.frontmatter.title,filename:d.frontmatter.filename,version:d.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"}},i),(0,e.tZ)("div",{style:{marginTop:120}},(0,e.tZ)(Wn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(Yt,{filename:d.frontmatter.filename})),(0,e.tZ)(Wn,{fallback:null},(0,e.tZ)("div",{className:z()(D.bottomEditContent,{rtl:wn})},(0,e.tZ)(oo,{time:(s=d.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(Wn,{fallback:null},(0,e.tZ)(eo,{rtl:wn})),(0,e.tZ)(no,null)))},ro=ao,io=o(92828),lo=o(22687),He,Ne,so=(0,h.kc)(function(t){var n=t.token,a=t.css,r=n.antCls,l=n.fontFamily,s=n.colorSplit,i=n.marginXXL,d=n.paddingXXS;return{asideContainer:a(He||(He=m()([`
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
    `])),i,l,d,r,r,r,r,n.fontSize,r,r,n.margin,n.margin,n.fontSize,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,n.marginXXS,r,n.padding,r,r,r,n.padding,r,r),mainMenu:a(Ne||(Ne=m()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),co=function(){var n=(0,v.useSidebarData)(),a=(0,c.useContext)(M.Z),r=a.isMobile,l=a.theme,s=so(),i=s.styles,d=(0,lo.Z)(),p=C()(d,2),f=p[0],b=p[1],k=l.includes("dark"),y=(0,h.Fg)(),S=y.colorBgContainer,D=(0,e.tZ)(X.ZP,{theme:{components:{Menu:{itemBg:S,darkItemBg:S}}}},(0,e.tZ)(ae.Z,{items:f,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:k?"dark":"light",selectedKeys:[b],defaultOpenKeys:n==null?void 0:n.map(function(T){var w=T.title;return w}).filter(Boolean)}));return r?(0,e.tZ)(io.Z,{key:"Mobile-menu"},D):(0,e.tZ)(Cn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},D)},uo=co,je,mo=(0,h.kc)(function(t){var n=t.css,a=t.token;return{main:n(je||(je=m()([`
    display: flex;
    margin-top: `,`px;
  `])),a.contentMarginTop)}}),po=function(n){var a=n.children,r=mo(),l=r.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(Le,null),(0,e.tZ)(uo,null),(0,e.tZ)(ro,null,a))},go=po,ho={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},fo=function(){var n=(0,v.useOutlet)(),a=(0,J.Z)(),r=a.pathname,l=a.search,s=a.hash,i=(0,rn.default)(ho),d=C()(i,2),p=d[0],f=d[1],b=(0,c.useRef)(null),k=(0,c.useContext)(M.Z),y=k.direction,S=(0,v.useSiteData)(),D=S.loading;(0,c.useLayoutEffect)(function(){f==="cn"?vn().locale("zh-cn"):vn().locale("en")},[]),(0,c.useEffect)(function(){var w=document.getElementById("nprogress-style");return b.current=setTimeout(function(){w==null||w.remove()},0),function(){return clearTimeout(b.current)}},[]),(0,c.useEffect)(function(){var w=s.replace("#","");if(w){var W;(W=document.getElementById(decodeURIComponent(w)))===null||W===void 0||W.scrollIntoView()}},[D,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+l)},[a]);var T=c.useMemo(function(){return["","/"].some(function(w){return w===r})||["/index"].some(function(w){return r.startsWith(w)})?(0,e.tZ)(Dt,{title:p.title,desc:p.description},n):r.startsWith("/docs/resource")?(0,e.tZ)(Nt,null,n):r.startsWith("/theme-editor")?n:(0,e.tZ)(go,null,n)},[r,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:f==="cn"?"zh-CN":f,"data-direction":y,className:z()({rtl:y==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:p.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(X.ZP,{direction:y,locale:f==="cn"?cn.Z:void 0},(0,e.tZ)(pn,null),(0,e.tZ)(Ct,null),T))},vo=fo},95561:function(Pn,R,o){o.r(R),o.d(R,{useStyle:function(){return A}});var U=o(26068),C=o.n(U),V=o(53649),z=o.n(V),sn=o(75271),vn=o(10286),xn=o(97940),c=o(82187),X=o.n(c),cn=o(48702),v=o(96378),rn,J,e,h,A=(0,xn.kc)(function(_){var x=_.token,F=_.css,en=x.antCls;return{anchorToc:F(rn||(rn=z()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),en,en,x.fontSizeSM),tocWrapper:F(J||(J=z()([`
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
    `])),x.headerHeight+x.contentMarginTop-4,x.borderRadius,x.purple6,x.purple5,x.headerHeight+x.contentMarginTop+24,x.paddingXXS,x.screenLG),articleWrapper:F(e||(e=z()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),x.screenLG,x.paddingLG*2),bottomEditContent:F(h||(h=z()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      flex: 0;
    `])))}}),Y=function(x){var F=x.showDebug,en=x.debugDemos,kn=en===void 0?[]:en,un=A(),En=un.styles,Nn=(0,xn.Fg)(),q=(0,cn.useRouteMeta)(),E=(0,cn.useTabMeta)(),nn=function(P){var O;return{href:"#".concat(P.id),title:P.title,key:P.id,children:(O=P.children)===null||O===void 0?void 0:O.filter(function(I){return F||!kn.includes(I.id)}).map(function(I){return{key:I.id,href:"#".concat(I.id),title:(0,v.tZ)("span",{className:X()({"toc-debug":kn.includes(I.id)})},I==null?void 0:I.title)}})}},mn=sn.useMemo(function(){return((E==null?void 0:E.toc)||q.toc).reduce(function(j,P){if(P.depth===2)j.push(C()({},P));else if(P.depth===3){var O=j[j.length-1];O&&(O.children=O.children||[],O.children.push(C()({},P)))}return j},[])},[E==null?void 0:E.toc,q.toc]);return q.frontmatter.toc?(0,v.tZ)("section",{className:En.tocWrapper},(0,v.tZ)(vn.Z,{affix:!1,className:En.anchorToc,targetOffset:Nn.anchorTop,showInkInFixed:!0,items:mn.map(nn)})):null};R.default=Y},67034:function(Pn,R,o){o.r(R);var U=o(75271),C=o(91574),V=o(96378),z=o(33230),sn=o(32699),vn=o.n(sn),xn=o(96058),c=o(16932),X=o(68714),cn=o(91011),v=function(){var e=(0,c.Z)(),h=e.token,A=(0,X.Z)("footerLinks"),Y=(0,U.useContext)(cn.Z),_=Y.isMobile,x=new C.C((0,xn.default)("#f0f3fa","#fff")).onBackground(h.colorBgContainer).toHexString();return{holder:(0,V.iv)("background:",x,";",""),footer:(0,V.iv)("background:",x,";color:",h.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",h.colorText,";}.rc-footer-column{margin-bottom:",_?60:0,"px;:last-child{margin-bottom:",_?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(A)&&A.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",h.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",h.fontSize,"px;}}","")}},rn=function(){var e=v(),h=(0,X.Z)("footer"),A=(0,X.Z)("footerLinks"),Y=(0,U.useCallback)(function(_){return Array.isArray(_)&&_.forEach(function(x){var F=x.icon;x.icon&&(delete x.icon,x.icon=(0,V.tZ)("img",{src:String(F),alt:"",style:{maxWidth:"100%"}})),Array.isArray(x.items)&&Y(x.items)}),_},[]);return h?(0,V.tZ)(z.Z,{columns:Y((0,sn.cloneDeep)(A)),css:e.footer,bottom:(0,V.tZ)("span",{dangerouslySetInnerHTML:{__html:h}})}):null};R.default=rn}}]);
