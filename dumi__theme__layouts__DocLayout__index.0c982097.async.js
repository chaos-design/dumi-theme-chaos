"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{29292:function(Tn,A,t){t.d(A,{Z:function(){return N.Z}});var N=t(79830)},74232:function(Tn,A,t){t.d(A,{Z:function(){return N.Z}});var N=t(76297)},7936:function(Tn,A,t){t.r(A);var N=t(53649),E=t.n(N),J=t(75271),P=t(60885),dn=t(7520),kn=t(14492),Zn=t(11486),c=t(96378),U,fn=function(e){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(p)},v=(0,kn.kc)(function(Q){var e=Q.token,p=Q.css,j=e.colorIcon,K=e.colorText,M=e.iconCls;return{editButton:p(U||(U=E()([`
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
    `])),e.marginXS,M,j,e.fontSizeLG,e.motionDurationSlow,K)}}),sn=function(e){var p=e.title,j=e.filename,K=v(),M=K.styles,R=(0,Zn.H)(),rn=R.owner,D=R.repo,en=R.branch,cn=R.docDir;return(0,c.tZ)(dn.Z,{title:p},(0,c.tZ)("a",{className:M.editButton,href:"".concat(fn("".concat(rn,"/").concat(D),en)).concat(cn).concat(j),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(P.Z,null)))};A.default=sn},73594:function(Tn,A,t){t.d(A,{Z:function(){return J},f:function(){return E}});var N=t(75271),E=N.createContext(!1);function J(){return N.useContext(E)}},22687:function(Tn,A,t){var N=t(48305),E=t.n(N),J=t(15558),P=t.n(J),dn=t(82092),kn=t.n(dn),Zn=t(53649),c=t.n(Zn),U=t(75271),fn=t(94283),v=t(51778),sn=t(14492),Q=t(82187),e=t.n(Q),p=t(43389),j=t(41075),K=t(19888),M=t(96378),R,rn,D;function en(un){return un&&/^\d+\.\d+\.\d+$/.test(un)}var cn=(0,sn.kc)(function(un){var I=un.css,X=un.token;return{link:I(R||(R=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:I(rn||(rn=c()([`
    margin-inline-end: 0;
  `]))),subtitle:I(D||(D=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),X.fontSizeSM)}}),vn=function(I){var X,xn,q=cn(),W=q.styles,mn=I.before,tn=I.after,G=I.link,F=I.title,H=I.subtitle,L=I.search,nn=I.tag,on=I.className,Dn=(X=typeof nn=="string"?nn:nn==null?void 0:nn.title)!==null&&X!==void 0?X:"",V=(xn=typeof nn=="string"?nn:nn==null?void 0:nn.color)!==null&&xn!==void 0?xn:"";return!mn&&!tn?(0,M.tZ)(j.Z,{to:"".concat(G).concat(L),className:e()(on,kn()({},W.link,Dn))},(0,M.tZ)(fn.Z,null,(0,M.tZ)("span",null,F),H&&(0,M.tZ)("span",{className:W.subtitle},H)),Dn&&(0,M.tZ)(v.Z,{bordered:!1,className:e()(W.tag),color:en(V)||V==="New"?"success":"processing"},Dn)):(0,M.tZ)(j.Z,{to:"".concat(G).concat(L),className:on},mn,F,H&&(0,M.tZ)("span",{className:W.subtitle},H),tn)},jn=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},X=(0,p.useFullSidebarData)(),xn=(0,K.Z)(),q=xn.pathname,W=xn.search,mn=(0,p.useSidebarData)(),tn=I.before,G=I.after,F=(0,U.useMemo)(function(){var H,L=P()(mn!=null?mn:[]);if(q.startsWith("/docs/spec")){var nn=L.splice(0,1);L.push.apply(L,P()(nn))}if(q.startsWith("/docs/react")){var on,Dn=(on=Object.entries(X).find(function(an){var T=E()(an,1),h=T[0];return h.startsWith("/changelog")}))===null||on===void 0?void 0:on[1];Dn&&L.splice(1,0,Dn[0])}if(q.startsWith("/changelog")){var V,Nn=(V=Object.entries(X).find(function(an){var T=E()(an,1),h=T[0];return h.startsWith("/docs/react")}))===null||V===void 0?void 0:V[1];Nn&&(L.unshift(Nn[0]),L.push.apply(L,P()(Nn.slice(1))))}return(H=L==null?void 0:L.reduce(function(an,T){if(T!=null&&T.title)if(q.startsWith("/docs/spec")){var h,An,In=T.children.reduce(function(x,b){var z,$,ln=(z=($=b.frontmatter)===null||$===void 0?void 0:$.type)!==null&&z!==void 0?z:"default";return x[ln]||(x[ln]=[]),x[ln].push(b),x},{}),On=[];On.push.apply(On,P()((h=(An=In.default)===null||An===void 0?void 0:An.map(function(x){return{label:(0,M.tZ)(j.Z,{to:"".concat(x.link).concat(W)},tn,x==null?void 0:x.title,G),key:x.link.replace(/(-cn$)/g,"")}}))!==null&&h!==void 0?h:[])),Object.entries(In).forEach(function(x){var b=E()(x,2),z=b[0],$=b[1];z!=="default"&&On.push({type:"group",label:z,key:z,children:$==null?void 0:$.map(function(ln){return{label:(0,M.tZ)(j.Z,{to:"".concat(ln.link).concat(W)},tn,ln==null?void 0:ln.title,G),key:ln.link.replace(/(-cn$)/g,"")}})})}),an.push({label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:On})}else{var Un;an.push({type:"group",label:T==null?void 0:T.title,key:T==null?void 0:T.title,children:(Un=T.children)===null||Un===void 0?void 0:Un.map(function(x){var b,z;return{label:(0,M.tZ)(vn,{before:tn,after:G,link:x.link,title:x==null?void 0:x.title,subtitle:(b=x.frontmatter)===null||b===void 0?void 0:b.subtitle,search:W,tag:((z=x.frontmatter)===null||z===void 0?void 0:z.tag)||""}),key:x.link.replace(/(-cn$)/g,"")}})})}else{var En=T.children||[];En.every(function(x){var b;return x==null||(b=x.frontmatter)===null||b===void 0?void 0:b.date})&&En.sort(function(x,b){var z,$;return((z=x.frontmatter)===null||z===void 0?void 0:z.date)>(($=b.frontmatter)===null||$===void 0?void 0:$.date)?-1:1}),an.push.apply(an,P()(En.map(function(x){var b;return{label:(0,M.tZ)(vn,{before:tn,after:G,link:x.link,title:x==null?void 0:x.title,search:W,tag:((b=x.frontmatter)===null||b===void 0?void 0:b.tag)||""}),key:x.link.replace(/(-cn$)/g,"")}})))}return an},[]))!==null&&H!==void 0?H:[]},[mn,X,q,W,I]);return[F,q]};A.Z=jn},54915:function(Tn,A,t){t.r(A),t.d(A,{default:function(){return bo}});var N=t(48305),E=t.n(N),J=t(82187),P=t.n(J),dn=t(16483),kn=t.n(dn),Zn=t(81414),c=t(75271),U=t(79846),fn=t(16452),v=t(43389),sn=t(54425),Q=t(19888),e=t(96378),p=t(14492),j={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},K=function(){var n=(0,p.Fg)(),r=function d(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(d(s,i+1),`
    `):""},a=function d(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(j[s],`;
}
`).concat(d(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",r("blue")," ",r("purple")," ",r("cyan")," ",r("green")," ",r("magenta")," ",r("red")," ",r("volcano")," ",r("orange")," ",r("gold")," ",r("yellow")," ",r("lime")," ",r("geekblue")," ",a()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},M=K,R=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",o.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",o.paddingXXS,"px;margin-inline-start:-",o.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",o.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},rn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:",o.fontFamily,";line-height:",o.lineHeight,";background:",o.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},D=t(21793),en=function(){return{"&::before":{display:"table",content:'""'},"&::after":{display:"table",clear:"both",content:'""'}}},cn=function(){var o=(0,p.Fg)(),n=o.anchorTop;return c.useInsertionEffect(function(){(0,D.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},vn=t(84432),jn=function(){var n=(0,p.Fg)(),r=n.antCls,a=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",r,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",r,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",r,"-row>div,.code-box-demo ",r,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",r,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",a,";&:nth-child(2n + 1){background:",new vn.FastColor(a).setA(.75).toHexString(),";}}",r,"-row .demo-col,.code-box-demo ",r,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",r,"-row .demo-col-1{background:",new vn.FastColor(a).setA(.75).toHexString(),";}",r,"-row .demo-col-2,.code-box-demo ",r,"-row .demo-col-2{background:",new vn.FastColor(a).setA(.75).toHexString(),";}",r,"-row .demo-col-3,.code-box-demo ",r,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",r,"-row .demo-col-4,.code-box-demo ",r,"-row .demo-col-4{background:",new vn.FastColor(a).setA(.6).toHexString(),";}",r,"-row .demo-col-5,.code-box-demo ",r,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",r,"-row>div{margin-top:0;margin-bottom:0;}}","")})},un=jn,I=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,o.padding,"px ",o.paddingXL,"px;color:",o.colorText,";font-size:",o.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",o.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",o.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",o.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",o.margin,"px 0;padding:",o.paddingSM,"px ",o.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",o.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},X=function(){var n=(0,p.Fg)(),r=n.antCls,a=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",a,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",r,"-row",r,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",r,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",r,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",a,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",a,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",r,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",a,"{color:",n.colorTextBase,";font-weight:bold;}}}",r,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},xn=X,q=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",o.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",o.padding,"px;padding-inline-start:",o.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",o.margin,"px;.ant-row-rtl &{margin-inline-end:",o.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",o.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",o.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",o.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",o.paddingMD,"px;font-size:",o.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",o.marginXL,"px;.ant-divider{display:none;}a{font-size:",o.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",o.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",o.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",o.colorSplit,";&:last-child{margin-bottom:",o.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",o.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",o.marginXS,"px;font-size:",o.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",o.margin,"px;font-size:",o.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",o.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",o.marginXS,"px;}.page3-block{margin-bottom:",o.marginXL,"px;padding:",o.paddingLG,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",o.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",o.padding,"px;}}}}")})},W=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",o.colorPrimary,";}.peg{box-shadow:0 0 10px ",o.colorPrimary,",0 0 5px ",o.colorPrimary,";}.spinner-icon{border-top-color:",o.colorPrimary,";border-left-color:",o.colorPrimary,";}}")})},mn=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".clearfix{",en(),";}.preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",o.marginLG,"px;.ant-row-rtl &{margin-inline-end:",o.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",o.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",o.colorError,";content:'';}.preview-image-title{margin-top:",o.marginMD,"px;color:",o.colorText,";font-size:",o.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",o.colorTextSecondary,";font-size:",o.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",o.paddingSM,"px;background:",o.colorBgContainer,";border-radius:",o.borderRadius,"px;cursor:pointer;transition:all ",o.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",o.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",o.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",o.marginXXL,"px 0 ",o.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",o.marginLG,"px;padding:",o.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",o.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",o.margin,"px 0 ",o.marginXS,"px;}p{font-size:",o.fontSizeSM,"px;line-height:24px;}}}")})},tn="dumi-default-",G=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",tn,"search-bar{&-input{color:",o.colorText,";background:",o.colorBgContainer,";&:focus{background:",o.colorBgContainer,";}&::placeholder{color:",o.colorTextPlaceholder,"!important;}}}.",tn,"search-popover{background-color:",o.colorBgElevated,"!important;&::before{border-bottom-color:",o.colorBgElevated,"!important;}}.",tn,"search-result{dl{dt{background-color:",o.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",o.controlItemBgHover,";h4,p{color:",o.colorText,"!important;}svg{fill:",o.colorText,"!important;}}}}}}}")})},F=function(){var o=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",o.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",o.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},H=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(rn,null),(0,e.tZ)(cn,null),(0,e.tZ)(un,null),(0,e.tZ)(I,null),(0,e.tZ)(xn,null),(0,e.tZ)(q,null),(0,e.tZ)(W,null),(0,e.tZ)(mn,null),(0,e.tZ)(F,null),(0,e.tZ)(M,null),(0,e.tZ)(R,null),(0,e.tZ)(G,null))},L=H,nn=t(68585),on=t.n(nn),Dn=t(26068),V=t.n(Dn),Nn=t(82092),an=t.n(Nn),T=t(53649),h=t.n(T),An=t(64733),In=t(49584),On=t(77341),Un=t(16608),En=t(47272),x=t(2761),b=t(56178),z=t(91011),$=t(41075),ln,Qn,qn,ne,Xe=(0,p.kc)(function(o){var n=o.token,r=o.css,a=n.headerHeight,d=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:r(ln||(ln=h()([`
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
    `])),a,d,s,a,n.marginSM,d,i),title:r(Qn||(Qn=h()([`
      line-height: 40px;
    `]))),logoImage:r(qn||(qn=h()([`
      &:hover {
        transform: rotate(666turn);
        transition: 59s cubic-bezier(0.34, 0, 0.84, 1) 1s;
      }
    `]))),tour:r(ne||(ne=h()([`
      .ant-popover-title,
      .ant-popover-inner-content {
        color: #fff;
      }
    `])))}}),$n="chaos.logo.tour.dismiss",Ge=function(n){var r,a=n.isZhCN,d=c.useState(!0),s=E()(d,2),i=s[0],l=s[1],m=(0,v.useSiteData)(),u=m.themeConfig,f=(0,v.useLocation)(),y=f.search,k=Xe(),w=k.styles,S=(u==null?void 0:u.logo)||"https://rain120.github.io/study-notes/img/chao.png";return c.useEffect(function(){(0,b.Fy)()&&(localStorage.getItem($n)?l(!1):l(!0))},[i]),(0,e.tZ)("h1",null,(0,e.tZ)($.Z,{to:b.J1("/",a,y),className:w.logo},(0,e.tZ)(On.Z,{title:"\u9707\u60CA\u{1F389}\u{1F389}\u{1F389}",content:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"bottomRight",classNames:{root:w.tour},color:"#1677ff",open:i,onOpenChange:function(_){_?(l(!1),(0,b.Fy)()&&localStorage.setItem($n,"1")):l(_)}},(0,e.tZ)("img",{id:"chaos-logo",className:w.logoImage,src:S,draggable:!1,alt:"logo",onMouseEnter:function(){l(!1),(0,b.Fy)()&&localStorage.setItem($n,"1")}})),u!=null&&u.name?(0,e.tZ)("span",{className:w.title,dangerouslySetInnerHTML:{__html:(r=u==null?void 0:u.name)!==null&&r!==void 0?r:""}}):null))},Ve=Ge,$e=t(15558),Kn=t.n($e),ee=t(20119),Pn=t(11486),Ye=t(77855),Je=t(73262),Qe=t(73146),te=t(68714),oe=function(n){return(n!=null?n:[]).map(function(r,a){return{label:(0,e.tZ)("a",{href:r.link,target:"_blank",rel:"noopener noreferrer"},r.text),key:a}})},qe=function(){var n=(0,te.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Je.Z,{menu:{items:oe(n)},placement:"bottomRight"},(0,e.tZ)(Qe.ZP,{size:"small"},(0,e.tZ)(v.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(Ye.Z,null))):null},nt=qe,re,et=(0,p.kc)(function(o){var n=o.token,r=n.antCls,a=n.iconCls,d=n.fontFamily,s=n.fontSize,i=n.headerHeight,l=n.colorPrimary;return{nav:(0,p.iv)(re||(re=h()([`
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
    `])),s,d,r,r,r,40+12*2,i,n.paddingSM,n.paddingSM,i,r,a,r,l,r,r)}}),tt=function(n){var r,a,d=n.isZhCN,s=n.isMobile,i=n.responsive,l=n.directionText,m=(0,Pn.H)(),u=m.github,f=(0,v.useLocation)(),y=f.pathname,k=f.search,w=(0,v.useSiteData)(),S=w.locales,Z=(0,v.useNavData)(),_=(0,v.useLocale)(),B=(0,te.Z)("moreLinks"),g=(0,v.useFullSidebarData)(),O=((r=g["/docs/blog"])===null||r===void 0||(r=r[0])===null||r===void 0?void 0:r.children)||[],Y=et(),bn=Y.styles,yn=s?"inline":"horizontal",Ln=y.split("/").filter(Boolean).slice(0,-1).join("/"),pn="/".concat(Ln||"home");y.startsWith("/changelog")?pn="/docs/react":y.startsWith("/docs/resources")&&(pn="/docs/resources");var Bn=function Cn(Rn){return Rn.map(function(C){var gn,Vn=((gn=C.link)!==null&&gn!==void 0?gn:"").split("/").slice(0,2).join("/");return{label:C.children?C.title:(0,b.YW)(C.link)?(0,e.tZ)("a",{href:"".concat(C.link).concat(k),target:"_blank",rel:"noreferrer"},C.title):(0,e.tZ)($.Z,{to:"".concat(C.link).concat(k)},C.title),key:(0,b.YW)(C.link)?C.link:Vn,children:C.children?Cn(C.children):null}})},wn=Bn(Z),zn=c.useCallback(function(){if(S.length<2)return null;if(S.length===2){var Cn=S.filter(function(C){return C.id!==(_==null?void 0:_.id)})[0],Rn=(0,b.cY)({pathname:y,current:_,target:Cn});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Rn},Cn.name),key:Cn.id}}return{label:(0,e.tZ)("span",null,_.name),key:"multi-lang",children:S.filter(function(C){return C.id!==_.id}).map(function(C){var gn=(0,b.cY)({pathname:y,current:_,target:C});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:gn},C.name),key:C.id}})}},[_,S]),Sn=[],_n=[u?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:u,target:"_blank"},"GitHub"),key:"github"}:null].concat(Kn()(oe(B)||[]));s?Sn=_n:i==="crowded"&&(Sn=[{label:(0,e.tZ)(An.Z,null),key:"additional",children:Kn()(_n)}]);var Gn=[].concat(Kn()(wn!=null?wn:[]),[O.length?{label:(0,e.tZ)($.Z,{to:b.J1(O.sort(function(Cn,Rn){var C,gn;return((C=Cn.frontmatter)===null||C===void 0?void 0:C.date)>((gn=Rn.frontmatter)===null||gn===void 0?void 0:gn.date)?-1:1})[0].link,d,k)},_==null?void 0:_.blog),key:"docs/blog"}:null],Kn()((a=Sn)!==null&&a!==void 0?a:[])).filter(Boolean);return(0,e.tZ)(ee.Z,{mode:yn,selectedKeys:[pn],className:bn.nav,items:Gn})},ot=tt,rt=t(35947),ae=t(7520),ie=t(16932),Yn="1.2em",at=function(){var n=(0,ie.Z)(),r=n.token,a=r.controlHeight,d=r.motionDurationMid;return{btn:(0,e.iv)("color:",r.colorText,";border-color:",r.colorBorder,";padding:0!important;width:",a,"px;height:",a,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",r.borderRadius,"px;transition:all ",d,";cursor:pointer;.btn-inner{transition:all ",d,";}&:hover{background:",r.colorBgTextHover,";}img{width:",Yn,";height:",Yn,";}.anticon{font-size:",Yn,";}","")}},it=function(){var n=(0,Pn.H)(),r=n.github,a=at();return(0,e.tZ)("div",null,r?(0,e.tZ)(ae.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:r,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[a.btn,"",""],type:"button"},(0,e.tZ)(rt.Z,null)))):null)},lt=it,dt=t(70074),le=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=parseInt(n.slice(1,3),16),d=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);a/=255,d/=255,s/=255;var i=Math.max(a,d,s),l=Math.min(a,d,s),m,u,f=(i+l)/2;if(i===l)m=u=0;else{var y=i-l;switch(u=f>.5?y/(2-i-l):y/(i+l),i){case a:m=(d-s)/y+(d<s?6:0);break;case d:m=(s-a)/y+2;break;case s:m=(a-d)/y+4;break}m/=6}return u=u*100,f=f*100-r,"hsl(".concat(Math.round(m*360),", ").concat(Math.round(u),"%, ").concat(Math.round(f),"%)")},st=function(n){var r=n.backgroundColor,a=r===void 0?"#e8d7ff":r,d=n.textColor,s=d===void 0?"#091E42":d,i=n.align,l=i===void 0?"center":i,m=(0,ie.Z)(),u=m.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",u.fontSize,"px;@media only screen and (max-width: ",u.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",le(a,10),";--site-announcement-bar-stripe-color2:",le(a,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,l,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},de="chaos.announcement.dismiss",ct=function(){var n=(0,c.useState)(!0),r=E()(n,2),a=r[0],d=r[1],s=(0,Pn.Z)()||{},i=s.announcementBar,l=(0,z.A)(),m=l.updateSiteConfig,u=st(i||{});(0,c.useEffect)(function(){i!=null&&i.id?!(0,b.Fy)()||localStorage.getItem(de)===i.id?d(!0):d(!1):d(!0)},[i]),(0,c.useEffect)(function(){m({bannerVisible:!a})},[a]);var f=(0,c.useCallback)(function(){i!=null&&i.id&&(0,b.Fy)()&&localStorage.setItem(de,i.id),d(!0)},[]);return a?null:(0,e.tZ)(U.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(dt.Z,on()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[u.link,"",""],href:i==null?void 0:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var k;if((k=window)!==null&&k!==void 0&&k.gtag){var w,S;(w=(S=window).gtag)===null||w===void 0||w.call(S,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}}},i==null?void 0:i.more)),onClose:f,css:i!=null&&i.backgroundColor?[u.container]:[]}))))},ut=ct,se,ce,ue,me,pe,Wn="1.2em",mt=(0,p.kc)(function(o){var n=o.token,r=o.css,a=n.colorText,d=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,l=n.borderRadius,m=n.controlHeight,u=n.motionDurationMid;return{btn:r(se||(se=h()([`
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
    `])),a,d,m,m,l,u,u,i,Wn,Wn,Wn),innerDiv:r(ce||(ce=h()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Wn,Wn),labelStyle:r(ue||(ue=h()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Wn,a,a),label1Style:r(me||(me=h()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),a,s),label2Style:r(pe||(pe=h()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(n){var r=n.label1,a=n.label2,d=n.tooltip1,s=n.tooltip2,i=n.value,l=n.pure,m=n.onClick,u=mt(),f=u.styles,y=f.btn,k=f.innerDiv,w=f.labelStyle,S=f.label1Style,Z=f.label2Style,_=(0,e.tZ)("button",{type:"button",onClick:m,className:y,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},l&&(i===1?r:a),!l&&(0,e.tZ)("div",{className:k},(0,e.tZ)("span",{className:P()(w,i===1?S:Z)},r),(0,e.tZ)("span",{className:P()(w,i===1?Z:S)},a))));return d||s?(0,e.tZ)(ae.Z,{title:i===1?d:s},_):_},ge=pt,gt=In.default.Option,ht="chaos.locale",ft=function(){var n=(0,v.useSearchParams)(),r=E()(n,1),a=r[0],d=(0,Pn.Z)(),s=d.localesEnhance,i=(0,v.useSiteData)(),l=i.locales,m=(0,v.useIntl)(),u=m.locale,f=(0,v.useLocale)(),y=(0,v.useLocation)(),k=y.pathname,w=(0,c.useCallback)(function(g){var O=(0,b.cY)({pathname:k,current:f,target:l.find(function(Y){var bn=Y.id;return bn===g})});b.Fy()&&localStorage.setItem(ht,b.KE(k)?"en-US":"zh-CN"),O.startsWith("/-")?O="/index".concat(O.substring(1)):O.endsWith("/index")&&(O=O.replace("/index","/")),v.history.push({pathname:O,search:a.toString()})},[k,f,l,a]),S=(0,c.useCallback)(function(){w(l.filter(function(g){return g.id!==u})[0].id)},[u,w,l]),Z;if(l.length>2||!s&&l.length>2){var _=l.map(function(g){return(0,e.tZ)(gt,{value:g.id,key:g.id},g.name)});Z=Z=(0,e.tZ)(In.default,{key:"lang",className:"version",size:"small",defaultValue:u,onChange:w,popupMatchSelectWidth:!1,getPopupContainer:function(O){return O.parentNode}},_)}else if(l.length===2&&Array.isArray(s)&&s.length>1){var B=l[0].id===u?1:2;Z=(0,e.tZ)(ge,{key:"lang",onClick:S,value:B,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(l[0].name," / ").concat(l[1].name),tooltip2:"".concat(l[1].name," / ").concat(l[0].name)})}return Z},vt=ft,xt=t(25108),bt=function(n){var r=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(r==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},yt=c.forwardRef(function(o,n){return(0,e.tZ)(xt.Z,on()({ref:n,component:function(){return(0,e.tZ)(bt,{direction:o.direction})}},o))}),he=yt,fe,wt=(0,p.kc)(function(o){var n=o.token,r=o.css;return{dataDirectionIcon:r(fe||(fe=h()([`
      width: 20px;
    `])))}}),St=function(){var n=(0,c.useContext)(z.Z),r=n.direction,a=n.updateSiteConfig,d=wt(),s=d.styles,i=(0,Pn.Z)(),l=i.rtl,m=l===void 0?!0:l;if(!m)return null;var u=function(){a({direction:r!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(ge,{key:"direction",onClick:u,value:r==="rtl"?2:1,label1:(0,e.tZ)(he,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(he,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},_t=St,ve,xe,be,ye,we,Se,_e,ke,Ze,Ce=1120,Me=1200,kt=(0,p.kc)(function(o){var n=o.token,r=o.css,a="#ced4d9";return{header:r(ve||(ve=h()([`
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,a,n.colorPrimary,a,a,n.borderRadiusSM,n.paddingSM),searchBarContainer:r(xe||(xe=h()([`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `]))),searchBar:r(be||(be=h()([`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `]))),menuCol:r(ye||(ye=h()([`
      display: flex;
      align-items: center;
    `]))),menuRow:r(we||(we=h()([`
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
    `])),n.paddingSM,n.padding),dataDirectionIcon:r(Se||(Se=h()([`
      width: 20px;
    `]))),popoverMenu:an()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:r(_e||(_e=h()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(ke||(ke=h()([`
      margin-inline-start: 10px;
      @media only screen and (max-width: `,`px) {
        margin-inline-start: 0;
      }
    `])),n.mobileMaxWidth),versionSelect:r(Ze||(Ze=h()([`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `])))}}),Zt=function(){var n,r=(0,v.useSiteData)(),a=r.pkg,d=(0,Pn.Z)(),s=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),i=E()(s,2),l=i[0],m=i[1],u=(0,c.useContext)(z.Z),f=u.direction,y=u.isMobile,k=u.updateSiteConfig,w=(0,c.useRef)(null),S=(0,v.useLocation)(),Z=S.pathname,_=S.search,B=kt(),g=B.styles,O=(0,c.useCallback)(function(){m(function(hn){return V()(V()({},hn),{},{menuVisible:!1})})},[]),Y=(0,c.useCallback)(function(){m(function(hn){var Mn;return V()(V()({},hn),{},{windowWidth:(Mn=window)===null||Mn===void 0?void 0:Mn.innerWidth})})},[]),bn=(0,c.useCallback)(function(hn){m(function(Mn){return V()(V()({},Mn),{},{menuVisible:hn})})},[]);(0,c.useEffect)(function(){O()},[S]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(Y(),window.addEventListener("resize",Y),function(){window.removeEventListener("resize",Y),w.current&&clearTimeout(w.current)})},[]);var yn=(0,c.useCallback)(function(hn){if(typeof window!="undefined"){var Mn=window.location.href,yo=new URL(Mn.replace(window.location.origin,hn));window.location.href=yo.href.replace(/\/$/,"")}},[]),Ln=(0,c.useMemo)(function(){return f!=="rtl"?"RTL":"LTR"},[f]),pn=(0,c.useMemo)(function(){return f==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[f]),Bn=l.menuVisible,wn=l.windowWidth,zn=l.searching,Sn=V()(V()({},a.version?an()({},a.version,a.version):{}),d==null?void 0:d.docVersions),_n=Object.keys(Sn).filter(Boolean).map(function(hn){return{value:Sn[hn],label:hn}}),Gn=["","index","index-cn"].includes(Z),Cn=b.KE(Z),Rn=f==="rtl",C=null;wn<Ce?C="crowded":wn<Me&&(C="narrow");var gn=P()(g.header,"clearfix",{"home-header":Gn}),Vn={isZhCN:Cn,isRTL:Rn},Fe=(0,e.tZ)(ot,on()({key:"nav"},Vn,{responsive:C,isMobile:y,directionText:Ln})),Fn=[Fe,_n.length>0?(0,e.tZ)(In.default,{key:"version",size:"small",className:g.versionSelect,defaultValue:(n=_n[0])===null||n===void 0?void 0:n.value,onChange:yn,dropdownStyle:pn,popupMatchSelectWidth:!1,getPopupContainer:function(Mn){return Mn.parentNode},options:_n}):null,(0,e.tZ)(nt,{key:"more"}),(0,e.tZ)(vt,{key:new Date().getTime()}),(0,e.tZ)(_t,{key:"direction"}),(0,e.tZ)(lt,{key:"header-Extra"})];wn<Ce?Fn=zn?[]:[Fe]:wn<Me&&(Fn=zn?[]:Fn);var Ke=Gn?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:gn},y&&(0,e.tZ)(On.Z,{classNames:{root:g.popoverMenu},placement:"bottomRight",content:Fn,trigger:"click",open:Bn,arrow:{pointAtCenter:!0},onOpenChange:bn},(0,e.tZ)(An.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ut,null),(0,e.tZ)(Un.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(En.Z,Ke[0],(0,e.tZ)(Ve,on()({},Vn,{location:S}))),(0,e.tZ)(En.Z,on()({},Ke[1],{className:g.menuCol}),(0,e.tZ)("div",{className:g.menuRow},(0,e.tZ)("div",{className:g.searchBarContainer},(0,e.tZ)("div",{className:g.searchBar},(0,e.tZ)(x.ZP,null))),!y&&Fn))))},Ct=Zt,wo=t(75927),Mt=t(46325),Dt=t(84806),De=t(67034),Et=function(n){var r=n.children,a=n.title,d=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,a),(0,e.tZ)("meta",{property:"og:title",content:a}),d&&(0,e.tZ)("meta",{name:"description",content:d})),(0,e.tZ)(Mt.Z,null),(0,e.tZ)(Dt.Z,null),(0,e.tZ)("div",{style:{minHeight:"200px"}},r),(0,e.tZ)(De.default,null))},Lt=Et,Tt=t(37285),Ee=t(52625),Le=t(73594),Ot=function(){var n=(0,v.useRouteMeta)(),r=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var l;i="".concat(n.frontmatter.subtitle||""," ").concat(((l=n.frontmatter)===null||l===void 0?void 0:l.title)||""," - Ant Design")}var m=n.frontmatter.description||"";return[i,m]},[n]),a=E()(r,2),d=a[0],s=a[1];return(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,d),(0,e.tZ)("meta",{property:"og:title",content:d}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Te=Ot,Pt=t(7936),Bt=t(58510),zt=t(38209),Rt=t.n(zt),At=t(59471),Oe,Pe,Be,ze=["scroll","resize"],It=(0,p.kc)(function(o){var n=o.token,r=o.css,a=n.boxShadowSecondary,d=n.antCls;return{affixTabs:r(Oe||(Oe=h()([`
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
    `])),a,n.motionDurationSlow,n.motionDurationSlow,d,d,d),affixTabsFixed:r(Pe||(Pe=h()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Be||(Be=h()([`
      text-transform: capitalize;
    `])))}}),Re=32,Wt=function(){var n=c.useRef(null),r=c.useRef([]),a=c.useState(!1),d=E()(a,2),s=d[0],i=d[1],l=c.useState(void 0),m=E()(l,2),u=m[0],f=m[1],y=It(),k=y.styles,w=k.affixTabs,S=k.affixTabsFixed,Z=k.span;function _(g){var O=document.getElementById(g);if(O){var Y=O.offsetTop-n.current.offsetHeight-Re;(0,At.Z)(Y)}}c.useEffect(function(){var g=document.querySelectorAll("h2[id]");r.current=Array.from(g).map(function(O){var Y=O.id;return Y}),i(!0)},[]),c.useEffect(function(){var g=decodeURIComponent((location.hash||"").slice(1));g&&_(g)},[s]);var B=c.useMemo(function(){function g(){for(var O=window,Y=O.scrollY,bn=n.current.offsetHeight,yn=r.current.length-1;yn>=0;yn-=1){var Ln=r.current[yn],pn=document.getElementById(Ln),Bn=pn.offsetTop-bn-Re;if(Bn<=Y){f(Ln);return}}f(void 0)}return Rt()(g)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(ze.forEach(function(g){return window.addEventListener(g,B)}),B(),function(){ze.forEach(function(g){return window.removeEventListener(g,B)})})},[]),(0,e.tZ)("div",{className:P()(w,u&&S),ref:n},(0,e.tZ)(Bt.Z,{activeKey:u,centered:!0,size:"large",onChange:_,items:r.current.map(function(g){return{key:g,label:(0,e.tZ)("span",{className:Z},g.replace(/-/g," "))}})}))},Ht=Wt,Ae,Ie,We,He=40,Xn=1208,Jn=24,jt=function(){var n=(0,Le.Z)();return(0,p.kc)(function(r){var a=r.token,d=r.css,s=a.antCls;return{resourcePage:d(Ae||(Ae=h()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),Xn),resourceContent:d(Ie||(Ie=h()([`
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
      `])),He,Xn,Jn,s,a.padding,a.padding),banner:d(We||(We=h()([`
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
      `])),He,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",Xn,Xn,a.fontSizeLG,Jn,Jn)}})()},Nt=function(n){var r,a=n.children,d=jt(),s=d.styles,i=(0,v.useRouteMeta)(),l=(0,Le.Z)(),m=(0,e.tZ)(Tt.Z,null,(0,e.tZ)(Te,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(Ht,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(Ee.Z.Title,{style:{fontSize:30}},(r=i.frontmatter)===null||r===void 0?void 0:r.title,(0,e.tZ)(Pt.default,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},a),(0,e.tZ)(De.default,null)));return l?m:(0,e.tZ)(U.ZP,{theme:{token:{colorBgLayout:"#fff"}}},m)},Ut=Nt,Ft=t(87301),Kt=t(94283),Xt=t(41969),Gt=t(51077),Vt=t(19453),$t=t(47817),Yt=t(14478),Jt=function(n){var r=n.children,a=n.fallback,d=a===void 0?(0,e.tZ)($t.Z.Input,{active:!0,size:"small"}):a,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)(Yt.df,{triggerOnce:!0,delay:i},function(l){var m=l.inView,u=l.ref;return(0,e.tZ)("div",{ref:u},(0,e.tZ)(c.Suspense,{fallback:d},m?r:(0,e.tZ)("span",null)))})},Hn=Jt,Qt=t(95561),qt=c.lazy(function(){return Promise.all([t.e(3036),t.e(2031)]).then(t.bind(t,32031))}),no=c.lazy(function(){return Promise.resolve().then(t.bind(t,95561))}),eo=c.lazy(function(){return t.e(7056).then(t.bind(t,37056))}),to=c.lazy(function(){return Promise.resolve().then(t.bind(t,67034))}),oo=c.lazy(function(){return t.e(270).then(t.bind(t,32433))}),ro=c.lazy(function(){return Promise.resolve().then(t.bind(t,7936))}),ao=c.lazy(function(){return t.e(1786).then(t.bind(t,91786))}),io=function(n){var r,a,d,s,i=n.children,l=(0,v.useRouteMeta)(),m=(0,Q.Z)(),u=m.pathname,f=m.hash,y=(0,Pn.H)(),k=(0,c.useContext)(z.Z),w=k.direction,S=(0,Qt.useStyle)(),Z=S.styles,_=(0,Xt.Z)(!1),B=E()(_,2),g=B[0],O=B[1],Y=(0,c.useState)("tsx"),bn=E()(Y,2),yn=bn[0],Ln=bn[1],pn=(0,c.useMemo)(function(){var Sn;return((Sn=l.toc)===null||Sn===void 0?void 0:Sn.filter(function(_n){return _n._debug_demo}).map(function(_n){return _n.id}))||[]},[l]),Bn=pn.includes(f.slice(1));(0,c.useLayoutEffect)(function(){O(Bn)},[]);var wn=(0,c.useMemo)(function(){return{showDebug:g,setShowDebug:O,codeType:yn,setCodeType:Ln}},[g,yn,pn]),zn=w==="rtl";return(0,e.tZ)(Vt.Z.Provider,{value:wn},(0,e.tZ)(En.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(no,{showDebug:g,debugDemos:pn})),(0,e.tZ)("article",{className:P()(Z.articleWrapper,{rtl:zn})},(r=l.frontmatter)!==null&&r!==void 0&&r.title?(0,e.tZ)(Ft.Z,{justify:"space-between"},(0,e.tZ)(Ee.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Kt.Z,null,(0,e.tZ)("span",null,(a=l.frontmatter)===null||a===void 0?void 0:a.title),(0,e.tZ)("span",null,(d=l.frontmatter)===null||d===void 0?void 0:d.subtitle),!u.startsWith("/components/overview")&&(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(ro,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:l.frontmatter.filename}))))):null,(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(eo,null)),!l.frontmatter.__autoDescription&&l.frontmatter.description,l.frontmatter.category==="Components"&&String(l.frontmatter.showImport)!=="false"&&(0,e.tZ)(Gt.Z,{source:l.frontmatter.source,pkg:l.frontmatter.package||l.frontmatter.packageName||l.frontmatter.pkg,component:l.frontmatter.title,filename:l.frontmatter.filename,version:l.frontmatter.version||l.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"},className:"clearfix"},i),(0,e.tZ)("div",{style:{marginTop:80,display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},(0,e.tZ)(Hn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(qt,on()({},y,{filename:"".concat(y.originDocDir).concat(l.frontmatter.filename)}))),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)("div",{className:P()(Z.bottomEditContent,{rtl:zn})},(0,e.tZ)(ao,{time:(s=l.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(oo,{rtl:zn})),(0,e.tZ)(to,null)))},lo=io,so=t(92828),co=t(22687),je,Ne,uo=(0,p.kc)(function(o){var n=o.token,r=o.css,a=n.antCls,d=n.fontFamily,s=n.colorSplit,i=n.marginXXL,l=n.paddingXXS;return{asideContainer:r(je||(je=h()([`
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
    `])),i,d,l,a,a,a,a,n.fontSize,a,a,n.margin,n.margin,n.fontSize,s,a,a,a,a,a,a,a,a,a,a,a,a,a,a,n.marginXXS,a,n.padding,a,a,a,n.padding,a,a),mainMenu:r(Ne||(Ne=h()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),mo=function(){var n=(0,v.useSidebarData)(),r=(0,c.useContext)(z.Z),a=r.isMobile,d=r.theme,s=uo(),i=s.styles,l=(0,co.Z)(),m=E()(l,2),u=m[0],f=m[1],y=d.includes("dark"),k=(0,p.Fg)(),w=k.colorBgContainer,S=(0,e.tZ)(U.ZP,{theme:{components:{Menu:{itemBg:w,darkItemBg:w}}}},(0,e.tZ)(ee.Z,{items:u,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:y?"dark":"light",selectedKeys:[f],defaultOpenKeys:n==null?void 0:n.map(function(Z){var _=Z.title;return _}).filter(Boolean)}));return a?(0,e.tZ)(so.Z,{key:"Mobile-menu"},S):(0,e.tZ)(En.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},S)},po=mo,Ue,go=(0,p.kc)(function(o){var n=o.css,r=o.token;return{main:n(Ue||(Ue=h()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),ho=function(n){var r=n.children,a=go(),d=a.styles;return(0,e.tZ)("main",{className:d.main},(0,e.tZ)(Te,null),(0,e.tZ)(po,null),(0,e.tZ)(lo,null,r))},fo=ho,vo={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},xo=function(){var n=(0,v.useOutlet)(),r=(0,Q.Z)(),a=r.pathname,d=r.search,s=r.hash,i=(0,sn.default)(vo),l=E()(i,2),m=l[0],u=l[1],f=(0,c.useRef)(null),y=(0,c.useContext)(z.Z),k=y.direction,w=(0,v.useSiteData)(),S=w.loading,Z=w.themeConfig;(0,c.useLayoutEffect)(function(){u==="cn"?kn().locale("zh-cn"):kn().locale("en")},[]),(0,c.useEffect)(function(){var B=document.getElementById("nprogress-style");return f.current=setTimeout(function(){B==null||B.remove()},0),function(){return clearTimeout(f.current)}},[]),(0,c.useEffect)(function(){var B=s.replace("#","");if(B){var g;(g=document.getElementById(decodeURIComponent(B)))===null||g===void 0||g.scrollIntoView()}},[S,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",a+d)},[r]);var _=c.useMemo(function(){return["","/"].some(function(B){return B===a})||["/index"].some(function(B){return a.startsWith(B)})?(0,e.tZ)(Lt,{title:m.title,desc:m.description},n):a.startsWith("/docs/resource")?(0,e.tZ)(Ut,null,n):a.startsWith("/theme-editor")?n:(0,e.tZ)(fo,null,n)},[a,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:u==="cn"?"zh-CN":u,"data-direction":k,className:P()({rtl:k==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:(Z==null?void 0:Z.logo)||"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:m.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:(Z==null?void 0:Z.logo)||"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(U.ZP,{direction:k,locale:u==="cn"?fn.Z:void 0},(0,e.tZ)(L,null),(0,e.tZ)(Ct,null),_))},bo=xo},95561:function(Tn,A,t){t.r(A),t.d(A,{useStyle:function(){return M}});var N=t(26068),E=t.n(N),J=t(53649),P=t.n(J),dn=t(75271),kn=t(25344),Zn=t(14492),c=t(82187),U=t.n(c),fn=t(43389),v=t(91011),sn=t(96378),Q,e,p,j,K,M=(0,Zn.kc)(function(rn){var D=rn.token,en=rn.css,cn=D.antCls;return{anchorToc:en(Q||(Q=P()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),cn,cn,D.fontSizeSM),tocWrapper:en(e||(e=P()([`
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
    `])),D.headerHeight+D.contentMarginTop-4,D.borderRadius,D.purple6,D.purple5,D.headerHeight+D.contentMarginTop+24,D.paddingXXS,D.screenLG),tocBannerWrapper:en(p||(p=P()([`
      top: `,`px;
    `])),D.headerHeight+D.contentMarginTop+D.bannerHeight-4),articleWrapper:en(j||(j=P()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),D.screenLG,D.paddingLG*2),bottomEditContent:en(K||(K=P()([`
      min-width: 200px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    `])))}}),R=function(D){var en=D.showDebug,cn=D.debugDemos,vn=cn===void 0?[]:cn,jn=(0,dn.useContext)(v.Z),un=jn.bannerVisible,I=M(),X=I.styles,xn=(0,Zn.Fg)(),q=(0,fn.useRouteMeta)(),W=(0,fn.useTabMeta)(),mn=function(F){var H;return{href:"#".concat(F.id),title:F.title,key:F.id,children:(H=F.children)===null||H===void 0?void 0:H.filter(function(L){return en||!vn.includes(L.id)}).map(function(L){return{key:L.id,href:"#".concat(L.id),title:(0,sn.tZ)("span",{className:U()({"toc-debug":vn.includes(L.id)})},L==null?void 0:L.title)}})}},tn=dn.useMemo(function(){return((W==null?void 0:W.toc)||q.toc).reduce(function(G,F){if(F.depth===2)G.push(E()({},F));else if(F.depth===3){var H=G[G.length-1];H&&(H.children=H.children||[],H.children.push(E()({},F)))}return G},[])},[W==null?void 0:W.toc,q.toc]);return q.frontmatter.toc?(0,sn.tZ)("section",{className:U()(X.tocWrapper,un&&X.tocBannerWrapper)},(0,sn.tZ)(kn.Z,{affix:!1,className:X.anchorToc,targetOffset:xn.anchorTop,showInkInFixed:!0,items:tn.map(mn)})):null};A.default=R},67034:function(Tn,A,t){t.r(A);var N=t(75271),E=t(91574),J=t(96378),P=t(33230),dn=t(32699),kn=t.n(dn),Zn=t(55138),c=t(16932),U=t(68714),fn=t(91011),v=function(){var e=(0,c.Z)(),p=e.token,j=(0,U.Z)("footerLinks"),K=(0,N.useContext)(fn.Z),M=K.isMobile,R=new E.C((0,Zn.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,J.iv)("background:",R,";",""),footer:(0,J.iv)("background:",R,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",M?60:0,"px;:last-child{margin-bottom:",M?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(j)&&j.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},sn=function(){var e=v(),p=(0,U.Z)("footer"),j=(0,U.Z)("footerLinks"),K=(0,N.useCallback)(function(M){return Array.isArray(M)&&M.forEach(function(R){var rn=R.icon;R.icon&&(delete R.icon,R.icon=(0,J.tZ)("img",{src:String(rn),alt:"",style:{maxWidth:"100%"}})),Array.isArray(R.items)&&K(R.items)}),M},[]);return p?(0,J.tZ)(P.Z,{columns:K((0,dn.cloneDeep)(j)),css:e.footer,bottom:(0,J.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};A.default=sn}}]);
