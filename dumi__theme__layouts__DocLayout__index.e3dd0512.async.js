"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[367],{74232:function(Pn,R,a){a.d(R,{Z:function(){return j.Z}});var j=a(91449)},7936:function(Pn,R,a){a.r(R);var j=a(53649),C=a.n(j),$=a(75271),z=a(60885),cn=a(82145),vn=a(97940),xn=a(11486),c=a(96378),U,un=function(e){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"main";return"https://github.com/".concat(e,"/edit/").concat(p)},v=(0,vn.kc)(function(V){var e=V.token,p=V.css,A=e.colorIcon,Y=e.colorText,_=e.iconCls;return{editButton:p(U||(U=C()([`
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
    `])),e.marginXS,_,A,e.fontSizeLG,e.motionDurationSlow,Y)}}),on=function(e){var p=e.title,A=e.filename,Y=v(),_=Y.styles,x=(0,xn.H)(),X=x.user,en=x.repo,_n=x.branch,mn=x.docDir;return(0,c.tZ)(cn.Z,{title:p},(0,c.tZ)("a",{className:_.editButton,href:"".concat(un("".concat(X,"/").concat(en),_n)).concat(mn).concat(A),target:"_blank",rel:"noopener noreferrer"},(0,c.tZ)(z.Z,null)))};R.default=on},73594:function(Pn,R,a){a.d(R,{Z:function(){return $},f:function(){return C}});var j=a(75271),C=j.createContext(!1);function $(){return j.useContext(C)}},22687:function(Pn,R,a){var j=a(48305),C=a.n(j),$=a(15558),z=a.n($),cn=a(82092),vn=a.n(cn),xn=a(53649),c=a.n(xn),U=a(75271),un=a(45481),v=a(23753),on=a(97940),V=a(82187),e=a.n(V),p=a(51675),A=a(41075),Y=a(19888),_=a(96378),x,X,en;function _n(Q){return Q&&/^\d+\.\d+\.\d+$/.test(Q)}var mn=(0,on.kc)(function(Q){var D=Q.css,q=Q.token;return{link:D(x||(x=c()([`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `]))),tag:D(X||(X=c()([`
    margin-inline-end: 0;
  `]))),subtitle:D(en||(en=c()([`
    font-weight: normal;
    font-size: `,`px;
    opacity: 0.8;
  `])),q.fontSizeSM)}}),Ln=function(D){var q,pn,N=mn(),O=N.styles,B=D.before,I=D.after,bn=D.link,Bn=D.title,gn=D.subtitle,F=D.search,H=D.tag,Zn=D.className,K=(q=typeof H=="string"?H:H==null?void 0:H.title)!==null&&q!==void 0?q:"",Cn=(pn=typeof H=="string"?H:H==null?void 0:H.color)!==null&&pn!==void 0?pn:"";return!B&&!I?(0,_.tZ)(A.Z,{to:"".concat(bn).concat(F),className:e()(Zn,vn()({},O.link,K))},(0,_.tZ)(un.Z,null,(0,_.tZ)("span",null,Bn),gn&&(0,_.tZ)("span",{className:O.subtitle},gn)),K&&(0,_.tZ)(v.Z,{bordered:!1,className:e()(O.tag),color:_n(Cn)||Cn==="New"?"success":"processing"},K)):(0,_.tZ)(A.Z,{to:"".concat(bn).concat(F),className:Zn},B,Bn,gn&&(0,_.tZ)("span",{className:O.subtitle},gn),I)},Nn=function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},q=(0,p.useFullSidebarData)(),pn=(0,Y.Z)(),N=pn.pathname,O=pn.search,B=(0,p.useSidebarData)(),I=D.before,bn=D.after,Bn=(0,U.useMemo)(function(){var gn,F=z()(B!=null?B:[]);if(N.startsWith("/docs/spec")){var H=F.splice(0,1);F.push.apply(F,z()(H))}if(N.startsWith("/docs/react")){var Zn,K=(Zn=Object.entries(q).find(function(an){var u=C()(an,1),hn=u[0];return hn.startsWith("/changelog")}))===null||Zn===void 0?void 0:Zn[1];K&&F.splice(1,0,K[0])}if(N.startsWith("/changelog")){var Cn,Rn=(Cn=Object.entries(q).find(function(an){var u=C()(an,1),hn=u[0];return hn.startsWith("/docs/react")}))===null||Cn===void 0?void 0:Cn[1];Rn&&(F.unshift(Rn[0]),F.push.apply(F,z()(Rn.slice(1))))}return(gn=F==null?void 0:F.reduce(function(an,u){if(u!=null&&u.title)if(N.startsWith("/docs/spec")){var hn,Tn,Kn=u.children.reduce(function(f,T){var k,G,tn=(k=(G=T.frontmatter)===null||G===void 0?void 0:G.type)!==null&&k!==void 0?k:"default";return f[tn]||(f[tn]=[]),f[tn].push(T),f},{}),An=[];An.push.apply(An,z()((hn=(Tn=Kn.default)===null||Tn===void 0?void 0:Tn.map(function(f){return{label:(0,_.tZ)(A.Z,{to:"".concat(f.link).concat(O)},I,f==null?void 0:f.title,bn),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&hn!==void 0?hn:[])),Object.entries(Kn).forEach(function(f){var T=C()(f,2),k=T[0],G=T[1];k!=="default"&&An.push({type:"group",label:k,key:k,children:G==null?void 0:G.map(function(tn){return{label:(0,_.tZ)(A.Z,{to:"".concat(tn.link).concat(O)},I,tn==null?void 0:tn.title,bn),key:tn.link.replace(/(-cn$)/g,"")}})})}),an.push({label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:An})}else{var Mn;an.push({type:"group",label:u==null?void 0:u.title,key:u==null?void 0:u.title,children:(Mn=u.children)===null||Mn===void 0?void 0:Mn.map(function(f){var T,k;return{label:(0,_.tZ)(Ln,{before:I,after:bn,link:f.link,title:f==null?void 0:f.title,subtitle:(T=f.frontmatter)===null||T===void 0?void 0:T.subtitle,search:O,tag:((k=f.frontmatter)===null||k===void 0?void 0:k.tag)||""}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var jn=u.children||[];jn.every(function(f){var T;return f==null||(T=f.frontmatter)===null||T===void 0?void 0:T.date})&&jn.sort(function(f,T){var k,G;return((k=f.frontmatter)===null||k===void 0?void 0:k.date)>((G=T.frontmatter)===null||G===void 0?void 0:G.date)?-1:1}),an.push.apply(an,z()(jn.map(function(f){var T;return{label:(0,_.tZ)(Ln,{before:I,after:bn,link:f.link,title:f==null?void 0:f.title,search:O,tag:((T=f.frontmatter)===null||T===void 0?void 0:T.tag)||""}),key:f.link.replace(/(-cn$)/g,"")}})))}return an},[]))!==null&&gn!==void 0?gn:[]},[B,q,N,O,D]);return[Bn,N]};R.Z=Nn},54915:function(Pn,R,a){a.r(R),a.d(R,{default:function(){return vo}});var j=a(48305),C=a.n(j),$=a(82187),z=a.n($),cn=a(16483),vn=a.n(cn),xn=a(81414),c=a(75271),U=a(70567),un=a(41329),v=a(51675),on=a(54425),V=a(19888),e=a(96378),p=a(97940),A={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Y=function(){var n=(0,p.Fg)(),o=function l(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return i<=10?`
.palette-`.concat(s,"-").concat(i,` {
  background: `).concat(n["".concat(s,"-").concat(i)],`;
}
`).concat(l(s,i+1),`
    `):""},r=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(A[s],`;
}
`).concat(l(s+1),`
    `):""};return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".color-palettes{margin:0 1%;&-dark{margin:0;padding:0 28px;background-color:#141414;.color-title{color:rgba(255, 255, 255, 0.85);}.color-description{color:rgba(255, 255, 255, 0.45);}.color-palette{margin:45px 3.5% 45px 0;&:nth-of-type(3n){margin-inline-end:0;}.main-color-item{margin-inline-end:0;&:hover{margin-inline-end:-",n.paddingXS,"px;}}}}}.color-palette{display:inline-block;width:31%;margin:45px 1%;&-pick{margin:0 0 ",n.marginMD,"px;font-size:",n.fontSizeXL,"px;text-align:center;}&-picker{margin:",n.marginLG,"px 0;&-value{position:relative;top:-3px;margin-inline-start:",n.margin,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}}&-validation{position:relative;top:-3px;margin-inline-start:",n.margin,"px;color:",n.colorError,";font-size:",n.fontSize,"px;.ant-row-rtl &{margin-inline-end:",n.margin,"px;margin-inline-start:0;}&-dark{margin-inline-start:0;}}}}.main-color{",o("blue")," ",o("purple")," ",o("cyan")," ",o("green")," ",o("magenta")," ",o("red")," ",o("volcano")," ",o("orange")," ",o("gold")," ",o("yellow")," ",o("lime")," ",o("geekblue")," ",r()," text-align:left;&-item{position:relative;height:44px;margin-inline-end:",n.marginXXS,"px;padding:0 ",n.paddingSM,"px;font-size:",n.fontSize,"px;font-family:Consolas,sans-serif;line-height:44px;cursor:pointer;transition:all ",n.motionDurationMid,";&:first-child{border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}&:last-child{border-radius:0 0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px;}&:hover{margin-inline-end:-",n.marginXS,"px;border-radius:0 ",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0;}}&-item &-text{float:left;transition:all ",n.motionDurationSlow,";}&-item &-value{position:relative;inset-inline-start:",n.marginXXS,"px;float:right;transform:scale(0.85);transform-origin:100% 50%;opacity:0;transition:all ",n.motionDurationSlow,";}}.color-title{margin:0 0 ",n.marginLG,"px;color:#5c6b77;font-weight:500;font-size:22px;text-align:center;text-transform:capitalize;}.color-description{display:block;color:#777;font-weight:lighter;font-size:",n.fontSize,"px;}.main-color:hover{.main-color-value{inset-inline-start:0;opacity:0.7;}}.color-palette-horizontal{box-sizing:border-box;width:100%;&-dark{height:303px;padding:",n.paddingXL,"px ",n.paddingXL-4,"px;background-color:#141414;.color-palette-picker{margin-bottom:0;}.color-palette-pick{color:rgba(255, 255, 255, 0.65);text-align:left;&-hex{color:rgba(255, 255, 255, 0.65);}.ant-row-rtl &{direction:rtl;text-align:right;}}}.main-color{display:flex;&-item{position:relative;flex:1;box-sizing:border-box;height:86px;margin-inline-end:0;padding:37px 0 0;line-height:normal;text-align:center;border-radius:0;.main-color-text{float:none;}&:hover{height:96px;margin-top:-10px;border-radius:",n.borderRadiusSM,"px ",n.borderRadiusSM,"px 0 0;}}&-value{position:absolute;bottom:0;inset-inline-start:0;width:100%;text-align:center;transform-origin:unset;}&:hover{.main-color-item{padding-top:",n.paddingXS,"px;}.main-color-value{bottom:8px;opacity:0.7;}}}}","")})},_=Y,x=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("h1,h2,h3,h4,h5,h6{>a[aria-hidden]:first-child{float:left;width:20px;padding-inline-end:",t.paddingXXS,"px;font-size:0;line-height:inherit;text-align:right;padding-inline-end:",t.paddingXXS,"px;margin-inline-start:-",t.marginLG,"px;[data-direction='rtl'] &{float:right;}&:hover{border:0;}>.icon-link::before{font-size:",t.fontSizeXL,"px;content:'#';}}&:not(:hover)>a[aria-hidden]:first-child>.icon-link{visibility:hidden;}}")})},X=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("@font-face{font-weight:normal;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:bold;font-family:AlibabaPuHuiTi;src:url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');font-display:swap;}@font-face{font-weight:900;font-family:'AliPuHui';src:url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');font-display:swap;}html{direction:initial;&.rtl{direction:rtl;}}body{overflow-x:hidden;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:",t.fontFamily,";line-height:",t.lineHeight,";background:",t.colorBgContainer,";transition:background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);}")})},en=a(21793),_n=function(){var t=(0,p.Fg)(),n=t.anchorTop;return c.useInsertionEffect(function(){(0,en.hq)("@layer global, antd;","site-global",{prepend:!0})},[]),(0,e.tZ)(e.xB,{styles:(0,e.iv)("@layer global{body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0;}ul,ol{list-style:none;}img{vertical-align:middle;border-style:none;}[id]{scroll-margin-top:",n,"px;}[data-prefers-color='dark']{color-scheme:dark;}[data-prefers-color='light']{color-scheme:light;}}")})},mn=a(84432),Ln=function(){var n=(0,p.Fg)(),o=n.antCls,r=n.colorPrimary;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".markdown{color:",n.colorText,";font-size:",n.fontSize,"px;line-height:2;}.highlight{line-height:1.5;}.markdown img{max-width:calc(100% - 32px);max-height:100%;}.markdown>a>img,.markdown>img{display:block;margin:0 auto;}.markdown p>img,.markdown li>img{margin:34px auto;box-shadow:0 8px 20px rgba(143, 168, 191, 0.35);display:block;}.markdown p>img.markdown-inline-image{margin:0;box-shadow:none;}.markdown h1{margin-top:",n.marginXS,"px;margin-bottom:",n.marginMD,"px;color:",n.colorTextHeading,";font-weight:500;font-size:30px;font-family:Avenir,",n.fontFamily,",sans-serif;line-height:38px;.subtitle{margin-inline-start:",n.marginSM,"px;}}.markdown h2{font-size:24px;line-height:32px;}.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{clear:both;margin:1.6em 0 0.6em;color:",n.colorTextHeading,";font-weight:500;font-family:Avenir,",n.fontFamily,",sans-serif;}.markdown h3{font-size:18px;}.markdown h4{font-size:",n.fontSizeLG,"px;}.markdown h5{font-size:",n.fontSize,"px;}.markdown h6{font-size:",n.fontSizeSM,"px;}.markdown hr{clear:both;height:1px;margin:",n.marginLG,"px 0;background:",n.colorSplit,";border:0;}.markdown p,.markdown pre{margin:1em 0;",o,"-row-rtl &{direction:rtl;text-align:right;}}.markdown ul>li,.markdown ol>li{padding-inline-start:",n.paddingXXS,"px;margin-inline-start:",n.marginMD,"px;>p{margin:0.2em 0;}&:empty{display:none;}}.markdown ul>li{list-style-type:circle;}.markdown ol>li{list-style-type:decimal;}.markdown code{margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",n.siteMarkdownCodeBg,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusSM,"px;}.markdown pre{font-family:",n.codeFamily,";background:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;}.markdown pre code{margin:0;padding:0;overflow:auto;color:",n.colorText,";font-size:",Math.max(n.fontSize-1,12),"px;direction:ltr;text-align:left;background-color:",n.colorBgLayout,";border:none;}.markdown strong,.markdown b{font-weight:500;}.markdown .dumi-default-source-code{margin:1em 0;background-color:",n.siteMarkdownCodeBg,";border-radius:",n.borderRadius,"px;>pre.prism-code{scrollbar-width:thin;scrollbar-gutter:stable;padding:",n.paddingSM,"px ",n.paddingMD,"px;font-size:",n.fontSize,"px;line-height:2;}}.pic-plus{&>*{display:inline-block!important;vertical-align:middle;}span{margin:0 ",n.marginMD,"px;color:#aaa;font-size:30px;user-select:none;}}.markdown table td>a:not(:last-child){margin-inline-end:0!important;&::after{position:relative!important;}}.markdown blockquote{margin:1em 0;padding-inline-start:0.8em;color:",n.colorTextSecondary,";font-size:90%;border-left:4px solid ",n.colorSplit,";.rtl &{padding-inline-end:0.8em;padding-inline-start:0;border-right:4px solid ",n.colorSplit,";border-left:none;}}.markdown blockquote p{margin:0;}.markdown .anchor{margin-inline-start:",n.marginXS,"px;opacity:0;transition:opacity ",n.motionDurationSlow,";.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;}}.markdown .waiting{color:#ccc;cursor:not-allowed;}.markdown a.edit-button{display:inline-block;margin-inline-start:",n.marginXS,"px;text-decoration:none;.rtl &{margin-inline-end:",n.marginXS,"px;margin-inline-start:0;transform:rotateY(180deg);}",o,"icon{display:block;color:",n.colorTextSecondary,";font-size:",n.fontSizeLG,"px;transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}}.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{display:inline-block;opacity:1;}.markdown>br,.markdown>p>br{clear:both;}.markdown .dumi-default-table{&-content{scrollbar-width:thin;scrollbar-gutter:stable;}table{margin:0;overflow-x:auto;overflow-y:hidden;direction:ltr;empty-cells:show;border:1px solid ",n.colorSplit,";border-collapse:collapse;border-spacing:0;th,td{padding:",n.paddingSM,"px ",n.paddingLG,"px;text-align:left;border:1px solid ",n.colorSplit,";&:first-child{border-left:1px solid ",n.colorSplit,";}&:last-child{border-right:1px solid ",n.colorSplit,";}img{max-width:unset;}}th{color:#5c6b77;font-weight:500;white-space:nowrap;background:rgba(0, 0, 0, 0.02);border-width:1px 1px 2px;}tbody tr{transition:all ",n.motionDurationSlow,";&:hover{background:rgba(60, 90, 100, 0.04);}}}table.component-api-table{margin:0;overflow-x:auto;overflow-y:hidden;font-size:",Math.max(n.fontSize-1,12),"px;font-family:",n.codeFamily,";line-height:",n.lineHeight,";border:1px solid ",n.colorSplit,";border-width:0 1px;th{border-width:1px 0 2px;}td{border-width:1px 0;&:first-child{width:18%;min-width:58px;color:",n.colorText,";font-weight:",n.fontWeightStrong,";white-space:nowrap;}&:nth-child(2){min-width:160px;}&:nth-child(3){width:22%;color:",n.magenta7,";font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(4){width:15%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-child(5){width:8%;font-size:",Math.max(n.fontSize-1,12),"px;}&:nth-last-child(3):first-child{width:38%;}&:nth-last-child(3):first-child~td:nth-last-child(2){width:70%;}}}}.grid-demo,[id^='grid-demo-']{",o,"-row>div,.code-box-demo ",o,"-row>div{min-height:30px;margin-top:",n.marginXS,"px;margin-bottom:",n.marginXS,"px;color:#fff;text-align:center;border-radius:0;}.code-box-demo ",o,"-row>div:not(.gutter-row){padding:",n.padding,"px 0;background:",r,";&:nth-child(2n + 1){background:",new mn.FastColor(r).setA(.75).toHexString(),";}}",o,"-row .demo-col,.code-box-demo ",o,"-row .demo-col{margin-top:0;margin-bottom:0;padding:30px 0;color:",n.colorWhite,";font-size:18px;text-align:center;border:none;}",o,"-row .demo-col-1{background:",new mn.FastColor(r).setA(.75).toHexString(),";}",o,"-row .demo-col-2,.code-box-demo ",o,"-row .demo-col-2{background:",new mn.FastColor(r).setA(.75).toHexString(),";}",o,"-row .demo-col-3,.code-box-demo ",o,"-row .demo-col-3{color:#999;background:rgba(255, 255, 255, 0.2);}",o,"-row .demo-col-4,.code-box-demo ",o,"-row .demo-col-4{background:",new mn.FastColor(r).setA(.6).toHexString(),";}",o,"-row .demo-col-5,.code-box-demo ",o,"-row .demo-col-5{color:#999;background:rgba(255, 255, 255, 0.2);}.code-box-demo .height-100{height:100px;line-height:100px;}.code-box-demo .height-50{height:50px;line-height:50px;}.code-box-demo .height-120{height:120px;line-height:120px;}.code-box-demo .height-80{height:80px;line-height:80px;}}[id='grid-demo-playground'],[id='grid-demo-gutter']{>.code-box-demo ",o,"-row>div{margin-top:0;margin-bottom:0;}}","")})},Nn=Ln,Q=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(`/**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/pre code{display:block;padding:`,t.padding,"px ",t.paddingXL,"px;color:",t.colorText,";font-size:",t.fontSize,"px;font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:2;white-space:pre;background:white;border:1px solid #e9e9e9;border-radius:",t.borderRadius,"px;}code[class*='language-'],pre[class*='language-']{color:",t.colorText,";font-family:'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;line-height:",t.lineHeightLG,";direction:ltr;white-space:pre;text-align:left;word-wrap:normal;word-break:normal;word-spacing:normal;tab-size:4;hyphens:none;background:none;}code[class*='css']{direction:ltr;}pre[class*='language-'] ::selection,code[class*='language-'] ::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*='language-'],pre[class*='language-']{text-shadow:none;}}pre[class*='language-']{margin:",t.margin,"px 0;padding:",t.paddingSM,"px ",t.paddingMD,"px;overflow:auto;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:",t.colorBgLayout,";}:not(pre)>code[class*='language-']{padding:0.1em;white-space:normal;border-radius:0.3em;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:0.7;}.markdown{.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f81d22;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#0b8235;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#0b8235;}.token.atrule,.token.attr-value,.token.keyword{color:#008dff;}.token.function{color:#f81d22;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}}")})},D=function(){var n=(0,p.Fg)(),o=n.antCls,r=n.iconCls;return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".code-boxes-col-1-1{width:100%;}.code-boxes-col-2-1{display:inline-block;vertical-align:top;}.code-box{position:relative;display:inline-block;width:calc(100% - ",n.lineWidth*2,"px);margin:0 0 ",n.margin,"px;background-color:",n.colorBgContainer,";border:1px solid ",n.colorSplit,";border-radius:",n.borderRadiusLG,"px;transition:all ",n.motionDurationMid,";&.code-box-simplify{border-radius:0;margin-bottom:0;.code-box-demo{padding:0;border-bottom:0;}}.code-box-title{&,a{color:",n.colorText,"!important;background:",n.colorBgContainer,";}}.code-box-demo{background-color:",n.colorBgContainer,";border-radius:",n.borderRadiusLG,"px ",n.borderRadiusLG,"px 0 0;>.demo{overflow:auto;}}.markdown{pre{margin:0.5em 0;padding:6px 12px;}pre code{margin:0;background:#f5f5f5;}}&:target{border:1px solid ",n.colorPrimary,";}&-title{position:absolute;top:-14px;padding:1px 8px;color:#777;background:",n.colorBgContainer,";border-radius:",n.borderRadius,"px ",n.borderRadius,"px 0 0;transition:background-color 0.4s;margin-inline-start:",n.margin,"px;a,a:hover{color:",n.colorText,";font-weight:500;font-size:",n.fontSize,"px;}}&-description{padding:18px 24px 12px;}a.edit-button{position:absolute;top:7px;inset-inline-end:-16px;font-size:",n.fontSizeSM,"px;text-decoration:none;background:inherit;transform:scale(0.9);padding-inline-end:",n.paddingXXS,"px;",r,"{color:",n.colorTextSecondary,";transition:all ",n.motionDurationSlow,";&:hover{color:",n.colorText,";}}",o,"-row",o,"-row-rtl &{inset-inline-end:auto;inset-inline-start:-22px;}}&-demo{padding:42px 24px 50px;color:",n.colorText,";border-bottom:1px solid ",n.colorSplit,";}iframe{width:100%;border:0;}&-meta{&.markdown{position:relative;width:100%;font-size:",n.fontSize,"px;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;transition:background-color 0.4s;}blockquote{line-height:1.5;}h4,section& p{margin:0;}>p{width:100%;margin:0.5em 0;font-size:",n.fontSizeSM,"px;word-break:break-word;padding-inline-end:25px;}}&.expand &-meta{border-bottom:1px dashed ",n.colorSplit,";border-radius:0;}.code-expand-icon{position:relative;width:16px;height:16px;cursor:pointer;}.code-expand-icon-show,.code-expand-icon-hide{position:absolute;top:0;inset-inline-start:0;width:100%;max-width:100%;margin:0;box-shadow:none;transition:all 0.4s;user-select:none;",o,"-row-rtl &{inset-inline-end:0;inset-inline-start:auto;}}.code-expand-icon-show{opacity:0.55;pointer-events:auto;&:hover{opacity:1;}}.code-expand-icon",o,"-tooltip-open .code-expand-icon-show{opacity:1;}.code-expand-icon-hide{opacity:0;pointer-events:none;}.highlight-wrapper{display:none;border-radius:0 0 ",n.borderRadius,"px ",n.borderRadius,"px;&-expand{display:block;}}.highlight{position:relative;pre{margin:0;padding:0;background:",n.colorBgContainer,";}&:not(:first-child){border-top:1px dashed ",n.colorSplit,";}}&-actions{display:flex;justify-content:center;padding:",n.paddingSM,"px 0;border-top:1px dashed ",n.colorSplit,";opacity:0.7;transition:opacity ",n.motionDurationSlow,";&:hover{opacity:1;}}&-actions &-code-action{position:relative;display:flex;align-items:center;width:16px;height:16px;color:",n.colorTextSecondary,";cursor:pointer;transition:all 0.24s;&:hover{color:",n.colorText,";}",r,"{display:block;}}&-code-copy{width:14px;height:14px;font-size:",n.fontSize,"px;text-align:center;background:",n.colorBgContainer,";cursor:pointer;transition:transform 0.24s;&",r,"-check{color:",n.green6,"!important;font-weight:bold;}}&-codepen{width:14px;height:14px;overflow:hidden;border:0;cursor:pointer;}&-codeblock{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;max-width:100%!important;}&-codesandbox{width:16px;height:16px;overflow:hidden;border:0;cursor:pointer;&:hover{opacity:1;}}.highlight-wrapper:hover &-code-copy,.highlight-wrapper:hover &-codepen,.highlight-wrapper:hover &-codesandbox,.highlight-wrapper:hover &-riddle{opacity:1;}pre{width:auto;margin:0;code{background:",n.colorBgContainer,";border:none;box-shadow:unset;padding:",n.paddingSM,"px ",n.padding,"px;font-size:",n.fontSize,"px;}}&-debug{border-color:",n.purple3,";display:none;}&-debug &-title a{color:",n.purple6,";}}.demo-wrapper{position:relative;&-show-debug .code-box-debug{display:block;}}.all-code-box-controls{position:absolute;top:-32px;inset-inline-end:0;display:flex;align-items:center;column-gap:",n.marginXS,"px;}",o,"-btn{&.icon-enabled{background-color:",n.colorFillSecondary,";opacity:1;",r,"{color:",n.colorTextBase,";font-weight:bold;}}}",o,"-row-rtl{#tooltip-demo-placement,#popover-demo-placement,#popconfirm-demo-placement{.code-box-demo{direction:ltr;}}}","")})},q=D,pn=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".nav-phone-icon{position:absolute;bottom:17px;inset-inline-end:30px;z-index:1;display:none;width:16px;height:22px;cursor:pointer;}@media only screen and (max-width: ",t.screenLG,"px){.code-boxes-col-2-1,.code-boxes-col-1-1{float:none;width:100%;max-width:unset;}}@media only screen and (max-width: 767.99px){.preview-image-boxes{float:none;width:100%;margin:0!important;}.preview-image-box{width:100%;margin:10px 0;padding:0;}.image-wrapper{display:none;}div.version{display:block;margin:29px auto 16px;}.toc{display:none;}.nav-phone-icon{display:block;}.main{height:calc(100% - 86px);}.aside-container{float:none;width:auto;padding-bottom:30px;border-right:0;}.ant-row-rtl{margin-inline-end:0;margin-inline-start:0;padding-inline-end:",t.padding,"px;padding-inline-start:",t.padding,"px;>.markdown>*{width:100%!important;}}.main-wrapper{width:100%;margin:0;border-radius:0;}.prev-next-nav{width:calc(100% - 32px);margin-inline-start:",t.margin,"px;.ant-row-rtl &{margin-inline-end:",t.margin,"px;margin-inline-start:64px;}}.drawer{.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after{inset-inline-end:auto;inset-inline-start:0;}}.home-page-wrapper{.page{h2{margin:80px auto 64px;}}.parallax-bg{display:none;}}.banner{display:block;height:632px;&-bg-wrapper{display:none;}.img-wrapper,.text-wrapper{display:inline-block;width:100%;min-width:unset;max-width:unset;margin:auto;text-align:center;}.img-wrapper{position:initial;margin-top:",t.marginMD,"px;text-align:center;svg{width:100%;max-width:260px;height:auto;margin:0 auto;}}.text-wrapper{min-height:200px;margin-top:",t.marginXL,"px;padding:0;h1{display:none;}p{color:#314659;font-size:",t.fontSize,"px;line-height:28px;}.banner-btns{display:block;min-width:100%;white-space:nowrap;text-align:center;.banner-btn{padding:0 ",t.paddingMD,"px;font-size:",t.fontSize,"px;}}.banner-promote{min-width:100%;margin-top:",t.marginXL,"px;.ant-divider{display:none;}a{font-size:",t.fontSize,"px;white-space:nowrap;img{width:20px;}}}}}.page1{min-height:1300px;.ant-row{margin:24px auto 64px;>div{margin-bottom:48px;}}}.page2{min-height:840px;background:",t.colorBgContainer,";&-content{box-shadow:none;}&-components{display:none;}&-product{min-height:auto;padding:0 ",t.padding,"px;.product-block{margin-bottom:34px;padding-bottom:35px;border-bottom:1px solid ",t.colorSplit,";&:last-child{margin-bottom:",t.marginXL,"px;border-bottom:none;.block-text-wrapper{height:auto;}}.block-image-wrapper{height:88px;img{height:100%;}}.block-text-wrapper{padding-bottom:0;border-bottom:none;h4{margin-bottom:",t.marginXXS,"px;font-size:18px;line-height:24px;}p{margin-bottom:",t.marginXS,"px;font-size:",t.fontSizeSM,"px;line-height:20px;}a{line-height:20px;}.components-button-wrapper{margin-top:",t.margin,"px;font-size:",t.fontSizeSM,"px;a{display:block;}}a.more-mobile-react,a.more-mobile-angular{margin-top:0;color:",t.colorLink,";}a.more-mobile-react:hover,a.more-mobile-angular:hover{color:#40a9ff;}}}}}.page3{min-height:688px;background-image:url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg');background-repeat:no-repeat;background-size:cover;.ant-row{margin:0 ",t.marginXS,"px;}.page3-block{margin-bottom:",t.marginXL,"px;padding:",t.paddingLG,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadiusSM,"px;box-shadow:0 8px 16px rgba(174, 185, 193, 0.3);&:nth-child(2){.page3-img-wrapper img{display:block;width:70%;margin:auto;}}p{font-size:",t.fontSizeSM,"px;}.page3-img-wrapper{width:20%;img{width:100%;}}.page3-text-wrapper{width:80%;max-width:initial;margin:0;padding-inline-start:",t.padding,"px;}}}}")})},N=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("#nprogress{.bar{background:",t.colorPrimary,";}.peg{box-shadow:0 0 10px ",t.colorPrimary,",0 0 5px ",t.colorPrimary,";}.spinner-icon{border-top-color:",t.colorPrimary,";border-left-color:",t.colorPrimary,";}}")})},O=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".preview-image-boxes{display:flex;float:right;clear:both;width:496px;margin:0 0 70px 64px;&-with-carousel{width:420px;.preview-image-box img{padding:0;}}.ant-row-rtl &{float:left;margin:0 64px 70px 0;}}.preview-image-boxes+.preview-image-boxes{margin-top:-35px;}.preview-image-box{float:left;width:100%;}.preview-image-box+.preview-image-box{margin-inline-start:",t.marginLG,"px;.ant-row-rtl &{margin-inline-end:",t.marginLG,"px;margin-inline-start:0;}}.preview-image-wrapper{position:relative;display:inline-block;width:100%;padding:",t.padding,"px;text-align:center;background:#f2f4f5;box-sizing:border-box;}.preview-image-wrapper.video{display:block;padding:0;background:0;}.preview-image-wrapper video{display:block;width:100%;+svg{position:absolute;top:0;inset-inline-start:0;}}.preview-image-wrapper.good::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorPrimary,";content:'';}.preview-image-wrapper.bad::after{position:absolute;bottom:0;inset-inline-start:0;display:block;width:100%;height:3px;background:",t.colorError,";content:'';}.preview-image-title{margin-top:",t.marginMD,"px;color:",t.colorText,";font-size:",t.fontSizeSM,"px;}.preview-image-description{margin-top:2px;color:",t.colorTextSecondary,";font-size:",t.fontSizeSM,"px;line-height:1.5;}.preview-image-description hr{margin:2px 0;background:none;border:0;}.preview-image-box img{box-sizing:border-box;max-width:100%;padding:",t.paddingSM,"px;background:",t.colorBgContainer,";border-radius:",t.borderRadius,"px;cursor:pointer;transition:all ",t.motionDurationSlow,";&.no-padding{padding:0;background:none;}}.preview-image-boxes.preview-image-boxes-with-carousel img{padding:0;box-shadow:0 1px 0 0 #ddd,0 3px 0 0 ",t.colorBgContainer,",0 4px 0 0 #ddd,0 6px 0 0 ",t.colorBgContainer,",0 7px 0 0 #ddd;}.preview-image-box img:hover{box-shadow:1px 1px 6px rgba(0, 0, 0, 0.3);}.transition-video-player,.motion-video-min{float:right;width:600px;padding:0 0 70px 20px;.preview-image-wrapper{padding:0;}.ant-row-rtl &{float:left;}}.motion-video-min{width:390px;}.motion-principle-wrapper{width:100%;max-width:900px;margin:",t.marginXXL,"px 0 ",t.marginLG,"px;}.principle-wrapper{width:100%;.principle{display:inline-block;box-sizing:border-box;width:100%;min-height:180px;margin-inline-end:12.5%;margin-bottom:",t.marginLG,"px;padding:",t.paddingLG,"px;font-size:24px;text-align:center;border:1px solid #e8e8e8;border-radius:",t.borderRadiusSM,"px;&:last-child{margin-inline-end:0;}h4{margin:",t.margin,"px 0 ",t.marginXS,"px;}p{font-size:",t.fontSizeSM,"px;line-height:24px;}}}")})},B="dumi-default-",I=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)("html{.",B,"search-bar{&-input{color:",t.colorText,";background:",t.colorBgContainer,";&:focus{background:",t.colorBgContainer,";}&::placeholder{color:",t.colorTextPlaceholder,"!important;}}}.",B,"search-popover{background-color:",t.colorBgElevated,"!important;&::before{border-bottom-color:",t.colorBgElevated,"!important;}}.",B,"search-result{dl{dt{background-color:",t.controlItemBgActive,"!important;}dd{a{&:hover{background-color:",t.controlItemBgHover,";h4,p{color:",t.colorText,"!important;}svg{fill:",t.colorText,"!important;}}}}}}}")})},bn=function(){var t=(0,p.Fg)();return(0,e.tZ)(e.xB,{styles:(0,e.iv)(".design-inline-cards{display:flex;margin:0 -",t.marginMD,"px;}.design-inline-cards>*{flex:10%;margin:0 ",t.marginMD,"px;}.design-inline-cards img{width:100%;max-width:100%;}.design-inline-cards h4{margin-bottom:0;}")})},Bn=function(){return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(X,null),(0,e.tZ)(_n,null),(0,e.tZ)(Nn,null),(0,e.tZ)(Q,null),(0,e.tZ)(q,null),(0,e.tZ)(pn,null),(0,e.tZ)(N,null),(0,e.tZ)(O,null),(0,e.tZ)(bn,null),(0,e.tZ)(_,null),(0,e.tZ)(x,null),(0,e.tZ)(I,null))},gn=Bn,F=a(68585),H=a.n(F),Zn=a(26068),K=a.n(Zn),Cn=a(82092),Rn=a.n(Cn),an=a(53649),u=a.n(an),hn=a(64733),Tn=a(52825),Kn=a(54669),An=a(93362),Mn=a(32860),jn=a(93052),f=a(91011),T=a(41075),k=a(56178),G=a(82145),tn,Qn,qn,Ke=(0,p.kc)(function(t){var n=t.token,o=t.css,r=n.headerHeight,l=n.colorTextHeading,s=n.fontFamily,i=n.mobileMaxWidth;return{logo:o(tn||(tn=u()([`
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
    `])),r,l,s,r,n.marginSM,l,i),title:o(Qn||(Qn=u()([`
      line-height: 40px;
    `]))),logoImage:o(qn||(qn=u()([`&:hover {
      transform: rotate(666turn);
      transition: 59s cubic-bezier(.34,0,.84,1) 1s;
    }
  `])))}}),ne="chaos.logo.tour.dismiss",Ge=function(n){var o=n.isZhCN,r=c.useState((0,k.Fy)()?!localStorage.getItem(ne):!0),l=C()(r,2),s=l[0],i=l[1],d=(0,v.useSiteData)(),m=d.themeConfig,h=(0,v.useLocation)(),b=h.search,Z=Ke(),y=Z.styles,w=m.logo||"https://rain120.github.io/study-notes/img/chao.png";return(0,e.tZ)("h1",null,(0,e.tZ)(T.Z,{to:k.J1("/",o,b),className:y.logo},(0,e.tZ)(G.Z,{title:"Hover\u89C1\u8BC1\u9B54\u6CD5 \u{1F609}",placement:"right",open:s,onOpenChange:function(L){i(L),L&&(0,k.Fy)()&&localStorage.setItem(ne,"1")}},(0,e.tZ)("img",{id:"chaos-logo",className:y.logoImage,src:w,draggable:!1,alt:"logo"})),(0,e.tZ)("span",{className:y.title},"Chaos")))},$e=Ge,Ve=a(15558),Gn=a.n(Ve),ee=a(81905),In=a(11486),Ye=a(77855),Je=a(23831),Qe=a(32252),te=a(68714),oe=function(n){return(n!=null?n:[]).map(function(o,r){return{label:(0,e.tZ)("a",{href:o.link,target:"_blank",rel:"noopener noreferrer"},o.text),key:r}})},qe=function(){var n=(0,te.Z)("moreLinks")||[];return Array.isArray(n)&&n.length>0?(0,e.tZ)(Je.Z,{menu:{items:oe(n)},placement:"bottomRight"},(0,e.tZ)(Qe.ZP,{size:"small"},(0,e.tZ)(v.FormattedMessage,{id:"app.header.menu.more"}),(0,e.tZ)(Ye.Z,null))):null},nt=qe,ae,et=(0,p.kc)(function(t){var n=t.token,o=n.antCls,r=n.iconCls,l=n.fontFamily,s=n.fontSize,i=n.headerHeight,d=n.colorPrimary;return{nav:(0,p.iv)(ae||(ae=u()([`
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
    `])),s,l,o,o,o,40+12*2,i,n.paddingSM,n.paddingSM,i,o,r,o,d,o,o)}}),tt=function(n){var o,r,l=n.isZhCN,s=n.isMobile,i=n.responsive,d=n.directionText,m=n.onLangChange,h=n.onDirectionChange,b=(0,In.H)(),Z=b.github,y=(0,v.useLocation)(),w=y.pathname,E=y.search,L=(0,v.useSiteData)(),S=L.locales,W=(0,v.useNavData)(),g=(0,v.useLocale)(),P=(0,te.Z)("moreLinks"),nn=(0,v.useFullSidebarData)(),rn=((o=nn["/docs/blog"])===null||o===void 0||(o=o[0])===null||o===void 0?void 0:o.children)||[],J=et(),fn=J.styles,yn=s?"inline":"horizontal",zn=w.split("/").filter(Boolean).slice(0,-1).join("/"),wn="/".concat(zn||"home");w.startsWith("/changelog")?wn="/docs/react":w.startsWith("/docs/resources")&&(wn="/docs/resources");var On=function ln(En){return En.map(function(M){var dn,Xn=((dn=M.link)!==null&&dn!==void 0?dn:"").split("/").slice(0,2).join("/");return{label:M.children?M.title:(0,k.YW)(M.link)?(0,e.tZ)("a",{href:"".concat(M.link).concat(E),target:"_blank",rel:"noreferrer"},M.title):(0,e.tZ)(T.Z,{to:"".concat(M.link).concat(E)},M.title),key:(0,k.YW)(M.link)?M.link:Xn,children:M.children?ln(M.children):null}})},Sn=On(W),je=c.useCallback(function(){if(S.length<2)return null;if(S.length===2){var ln=S.filter(function(M){return M.id!==(g==null?void 0:g.id)})[0],En=(0,k.cY)({pathname:w,current:g,target:ln});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:En},ln.name),key:ln.id}}return{label:(0,e.tZ)("span",null,g.name),key:"multi-lang",children:S.filter(function(M){return M.id!==g.id}).map(function(M){var dn=(0,k.cY)({pathname:w,current:g,target:M});return{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:dn},M.name),key:M.id}})}},[g,S]),Dn=[],Un=[Z?{label:(0,e.tZ)("a",{rel:"noopener noreferrer",href:Z,target:"_blank"},"GitHub"),key:"github"}:null].concat(Gn()(oe(P)||[]));s?Dn=Un:i==="crowded"&&(Dn=[{label:(0,e.tZ)(hn.Z,null),key:"additional",children:Gn()(Un)}]);var Vn=[].concat(Gn()(Sn!=null?Sn:[]),[rn.length?{label:(0,e.tZ)(T.Z,{to:k.J1(rn.sort(function(ln,En){var M,dn;return((M=ln.frontmatter)===null||M===void 0?void 0:M.date)>((dn=En.frontmatter)===null||dn===void 0?void 0:dn.date)?-1:1})[0].link,l,E)},g==null?void 0:g.blog),key:"docs/blog"}:null],Gn()((r=Dn)!==null&&r!==void 0?r:[])).filter(Boolean);return(0,e.tZ)(ee.Z,{mode:yn,selectedKeys:[wn],className:fn.nav,items:Vn})},ot=tt,at=a(35947),re=a(16932),Yn="1.2em",rt=function(){var n=(0,re.Z)(),o=n.token,r=o.controlHeight,l=o.motionDurationMid;return{btn:(0,e.iv)("color:",o.colorText,";border-color:",o.colorBorder,";padding:0!important;width:",r,"px;height:",r,"px;display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:",o.borderRadius,"px;transition:all ",l,";cursor:pointer;.btn-inner{transition:all ",l,";}&:hover{background:",o.colorBgTextHover,";}img{width:",Yn,";height:",Yn,";}.anticon{font-size:",Yn,";}","")}},it=function(){var n=(0,In.H)(),o=n.github,r=rt();return(0,e.tZ)("div",null,o?(0,e.tZ)(G.Z,{title:"Github"},(0,e.tZ)("a",{key:"github",href:o,target:"_blank",rel:"noreferrer"},(0,e.tZ)("button",{css:[r.btn,"",""],type:"button"},(0,e.tZ)(at.Z,null)))):null)},lt=it,dt=a(43151),ie=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);r/=255,l/=255,s/=255;var i=Math.max(r,l,s),d=Math.min(r,l,s),m,h,b=(i+d)/2;if(i===d)m=h=0;else{var Z=i-d;switch(h=b>.5?Z/(2-i-d):Z/(i+d),i){case r:m=(l-s)/Z+(l<s?6:0);break;case l:m=(s-r)/Z+2;break;case s:m=(r-l)/Z+4;break}m/=6}return h=h*100,b=b*100-o,"hsl(".concat(Math.round(m*360),", ").concat(Math.round(h),"%, ").concat(Math.round(b),"%)")},st=function(n){var o=n.backgroundColor,r=o===void 0?"#e8d7ff":o,l=n.textColor,s=l===void 0?"#091E42":l,i=n.align,d=i===void 0?"center":i,m=(0,re.Z)(),h=m.token;return{link:(0,e.iv)("margin-inline-start:4px;font-size:",h.fontSize,"px;@media only screen and (max-width: ",h.mobileMaxWidth,"px){margin-inline-start:0;}",""),container:(0,e.iv)("--site-announcement-bar-stripe-color1:",ie(r,10),";--site-announcement-bar-stripe-color2:",ie(r,15),`;background:repeating-linear-gradient(
        35deg,
        var(--site-announcement-bar-stripe-color1),
        var(--site-announcement-bar-stripe-color1) 20px,
        var(--site-announcement-bar-stripe-color2) 10px,
        var(--site-announcement-bar-stripe-color2) 40px
      );padding:8px 16px;text-align:`,d,";& .ant-alert-message{color:",s,";}& .ant-alert-description{color:",s,";}","")}},le="chaos.announcement.dismiss",ct=function(){var n=(0,c.useState)(!0),o=C()(n,2),r=o[0],l=o[1],s=(0,In.Z)()||{},i=s.announcementBar,d=(0,f.A)(),m=d.updateSiteConfig,h=st(i||{});(0,c.useEffect)(function(){i!=null&&i.id&&(!(0,k.Fy)()||localStorage.getItem(le)===i.id)?l(!0):l(!1)},[i]),(0,c.useEffect)(function(){m({bannerVisible:!r})},[r]);var b=(0,c.useCallback)(function(){i!=null&&i.id&&(0,k.Fy)()&&localStorage.setItem(le,i.id),l(!0)},[]);return r?null:(0,e.tZ)(U.ZP,{theme:{token:{colorInfoBg:(i==null?void 0:i.backgroundColor)||"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:(i==null?void 0:i.textColor)||"#000"}}},(0,e.tZ)("div",{className:"announcement-bar"},(0,e.tZ)(dt.Z,H()({banner:!0,type:"info",closable:!0},i,{message:(0,e.tZ)(c.Fragment,null,(0,e.tZ)("span",null,i==null?void 0:i.message),!(i!=null&&i.more)||!(i!=null&&i.link)?null:(0,e.tZ)("a",{css:[h.link,"",""],href:i==null?void 0:i.link.link,target:"_blank",rel:"noreferrer",onClick:function(){var y,w;(y=(w=window).gtag)===null||y===void 0||y.call(w,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i==null?void 0:i.link})}},i==null?void 0:i.more)),onClose:b,css:i!=null&&i.backgroundColor?[h.container]:[]}))))},ut=ct,de,se,ce,ue,me,Wn="1.2em",mt=(0,p.kc)(function(t){var n=t.token,o=t.css,r=n.colorText,l=n.colorBorder,s=n.colorBgContainer,i=n.colorBgTextHover,d=n.borderRadius,m=n.controlHeight,h=n.motionDurationMid;return{btn:o(de||(de=u()([`
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
    `])),r,l,m,m,d,h,h,i,Wn,Wn,Wn),innerDiv:o(se||(se=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Wn,Wn),labelStyle:o(ce||(ce=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Wn,r,r),label1Style:o(ue||(ue=u()([`
      inset-inline-start: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,s),label2Style:o(me||(me=u()([`
      inset-inline-end: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),pt=function(n){var o=n.label1,r=n.label2,l=n.tooltip1,s=n.tooltip2,i=n.value,d=n.pure,m=n.onClick,h=mt(),b=h.styles,Z=b.btn,y=b.innerDiv,w=b.labelStyle,E=b.label1Style,L=b.label2Style,S=(0,e.tZ)("button",{type:"button",onClick:m,className:Z,key:"lang-button","aria-label":n["aria-label"]},(0,e.tZ)("div",{className:"btn-inner"},d&&(i===1?o:r),!d&&(0,e.tZ)("div",{className:y},(0,e.tZ)("span",{className:z()(w,i===1?E:L)},o),(0,e.tZ)("span",{className:z()(w,i===1?L:E)},r))));return l||s?(0,e.tZ)(G.Z,{title:i===1?l:s},S):S},pe=pt,gt=Tn.default.Option,ht=function(){var n=(0,v.useSearchParams)(),o=C()(n,1),r=o[0],l=(0,In.Z)(),s=l.localesEnhance,i=(0,v.useSiteData)(),d=i.locales,m=(0,v.useIntl)(),h=m.locale,b=(0,v.useLocale)(),Z=(0,v.useLocation)(),y=Z.pathname,w=(0,c.useCallback)(function(g){var P=(0,k.cY)({pathname:y,current:b,target:d.find(function(nn){var rn=nn.id;return rn===g})});k.Fy()&&localStorage.setItem("locale",k.KE(y)?"en-US":"zh-CN"),P.startsWith("/-")?P="/index".concat(P.substring(1)):P.endsWith("/index")&&(P=P.replace("/index","/")),v.history.push({pathname:P,search:r.toString()})},[y,b,d,r]),E=(0,c.useCallback)(function(){w(d.filter(function(g){return g.id!==h})[0].id)},[h,w,d]),L;if(d.length>2||!s&&d.length>2){var S=d.map(function(g){return(0,e.tZ)(gt,{value:g.id,key:g.id},g.name)});L=L=(0,e.tZ)(Tn.default,{key:"lang",className:"version",size:"small",defaultValue:h,onChange:w,popupMatchSelectWidth:!1,getPopupContainer:function(P){return P.parentNode}},S)}else if(d.length===2&&Array.isArray(s)&&s.length>1){var W=d[0].id===h?1:2;L=(0,e.tZ)(pe,{key:"lang",onClick:E,value:W,label1:s[0].switchPrefix,label2:s[1].switchPrefix,tooltip1:"".concat(d[0].name," / ").concat(d[1].name),tooltip2:"".concat(d[1].name," / ").concat(d[0].name)})}return L},ft=ht,vt=a(25108),xt=function(n){var o=n.direction;return(0,e.tZ)("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor",style:{transform:"scaleX(".concat(o==="ltr"?"1":"-1",")")}},(0,e.tZ)("title",null,"Direction Icon"),(0,e.tZ)("path",{d:"m14.6961816 11.6470802.0841184.0726198 2 2c.2662727.2662727.2904793.682876.0726198.9764816l-.0726198.0841184-2 2c-.2929.2929-.7677.2929-1.0606 0-.2662727-.2662727-.2904793-.682876-.0726198-.9764816l.0726198-.0841184.7196-.7197h-10.6893c-.41421 0-.75-.3358-.75-.75 0-.3796833.28215688-.6934889.64823019-.7431531l.10176981-.0068469h10.6893l-.7196-.7197c-.2929-.2929-.2929-.7677 0-1.0606.2662727-.2662727.682876-.2904793.9764816-.0726198zm-8.1961616-8.6470802c.30667 0 .58246.18671.69635.47146l3.00003 7.50004c.1538.3845-.0333.821-.41784.9749-.38459.1538-.82107-.0333-.9749-.4179l-.81142-2.0285h-2.98445l-.81142 2.0285c-.15383.3846-.59031.5717-.9749.4179-.38458-.1539-.57165-.5904-.41781-.9749l3-7.50004c.1139-.28475.38968-.47146.69636-.47146zm8.1961616 1.14705264.0841184.07261736 2 2c.2662727.26626364.2904793.68293223.0726198.97654222l-.0726198.08411778-2 2c-.2929.29289-.7677.29289-1.0606 0-.2662727-.26626364-.2904793-.68293223-.0726198-.97654222l.0726198-.08411778.7196-.7196675h-3.6893c-.4142 0-.75-.3357925-.75-.7500025 0-.3796925.2821653-.69348832.6482323-.74315087l.1017677-.00684663h3.6893l-.7196-.7196725c-.2929-.29289-.2929-.76777 0-1.06066.2662727-.26626364.682876-.29046942.9764816-.07261736zm-8.1961616 1.62238736-.89223 2.23056h1.78445z"}))},bt=c.forwardRef(function(t,n){return(0,e.tZ)(vt.Z,H()({ref:n,component:function(){return(0,e.tZ)(xt,{direction:t.direction})}},t))}),ge=bt,he,yt=(0,p.kc)(function(t){var n=t.token,o=t.css;return{dataDirectionIcon:o(he||(he=u()([`
      width: 20px;
    `])))}}),wt=function(){var n=(0,c.useContext)(f.Z),o=n.direction,r=n.updateSiteConfig,l=yt(),s=l.styles,i=(0,In.Z)(),d=i.rtl,m=d===void 0?!0:d;if(!m)return null;var h=function(){r({direction:o!=="rtl"?"rtl":"ltr"})};return(0,e.tZ)(pe,{key:"direction",onClick:h,value:o==="rtl"?2:1,label1:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.tZ)(ge,{className:s.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"})},St=wt,fe,ve,xe,be,ye,we,Se,ke,_e=1120,Ze=1200,kt={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},_t=(0,p.kc)(function(t){var n=t.token,o=t.css,r="#ced4d9";return{header:o(fe||(fe=u()([`
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
          max-width: calc(100vw - 768px);
          padding-inline-start: 32px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.03);

          &:focus {
            box-shadow: none;
            background: rgba(0, 0, 0, 0.03);
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
    `])),n.colorBgContainer,n.boxShadowTertiary,n.mobileMaxWidth,r,r,r,n.borderRadiusSM,n.paddingSM),searchBarContainer:o(ve||(ve=u()([`
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
    `]))),popoverMenu:Rn()({width:300},"".concat(n.antCls,"-popover-inner-content"),{padding:0}),banner:o(we||(we=u()([`
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
    `])))}}),Zt=function(){var n,o=(0,on.default)(kt),r=C()(o,2),l=r[0],s=r[1],i=(0,v.useSiteData)(),d=i.pkg,m=(0,In.Z)(),h=(0,c.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),b=C()(h,2),Z=b[0],y=b[1],w=(0,c.useContext)(f.Z),E=w.direction,L=w.isMobile,S=w.updateSiteConfig,W=(0,c.useRef)(null),g=(0,v.useLocation)(),P=g.pathname,nn=g.search,rn=_t(),J=rn.styles,fn=(0,c.useCallback)(function(){y(function(sn){return K()(K()({},sn),{},{menuVisible:!1})})},[]),yn=(0,c.useCallback)(function(){y(function(sn){var kn;return K()(K()({},sn),{},{windowWidth:(kn=window)===null||kn===void 0?void 0:kn.innerWidth})})},[]),zn=(0,c.useCallback)(function(sn){y(function(kn){return K()(K()({},kn),{},{menuVisible:sn})})},[]);(0,c.useEffect)(function(){fn()},[g]),(0,c.useEffect)(function(){return typeof window=="undefined"?function(){}:(yn(),window.addEventListener("resize",yn),function(){window.removeEventListener("resize",yn),W.current&&clearTimeout(W.current)})},[]);var wn=(0,c.useCallback)(function(sn){if(typeof window!="undefined"){var kn=window.location.href,bo=new URL(kn.replace(window.location.origin,sn));window.location.href=bo.href.replace(/\/$/,"")}},[]),On=(0,c.useMemo)(function(){return E!=="rtl"?"RTL":"LTR"},[E]),Sn=(0,c.useMemo)(function(){return E==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[E]),je=Z.menuVisible,Dn=Z.windowWidth,Un=Z.searching,Vn=K()(K()({},d.version?Rn()({},d.version,d.version):{}),m==null?void 0:m.docVersions),ln=Object.keys(Vn).filter(Boolean).map(function(sn){return{value:Vn[sn],label:sn}}),En=["","index","index-cn"].includes(P),M=s==="cn",dn=E==="rtl",Xn=null;Dn<_e?Xn="crowded":Dn<Ze&&(Xn="narrow");var xo=z()(J.header,"clearfix",{"home-header":En}),Ue={isZhCN:M,isRTL:dn},Xe=(0,e.tZ)(ot,H()({key:"nav"},Ue,{responsive:Xn,isMobile:L,directionText:On})),Fn=[Xe,ln.length>0?(0,e.tZ)(Tn.default,{key:"version",size:"small",className:J.versionSelect,defaultValue:(n=ln[0])===null||n===void 0?void 0:n.value,onChange:wn,dropdownStyle:Sn,popupMatchSelectWidth:!1,getPopupContainer:function(kn){return kn.parentNode},options:ln}):null,(0,e.tZ)(nt,{key:"more"}),(0,e.tZ)(ft,{key:new Date().getTime()}),(0,e.tZ)(St,{key:"direction"}),(0,e.tZ)(lt,{key:"header-Extra"})];Dn<_e?Fn=Un?[]:[Xe]:Dn<Ze&&(Fn=Un?[]:Fn);var Fe=En?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.tZ)("header",{className:xo},L&&(0,e.tZ)(Kn.Z,{classNames:{root:J.popoverMenu},placement:"bottomRight",content:Fn,trigger:"click",open:je,arrow:{pointAtCenter:!0},onOpenChange:zn},(0,e.tZ)(hn.Z,{className:"nav-phone-icon"})),(0,e.tZ)(ut,null),(0,e.tZ)(An.Z,{style:{flexFlow:"nowrap",height:64}},(0,e.tZ)(Mn.Z,Fe[0],(0,e.tZ)($e,H()({},Ue,{location:g}))),(0,e.tZ)(Mn.Z,Fe[1],(0,e.tZ)("div",{className:J.menuRow},(0,e.tZ)("div",{className:J.searchBarContainer},(0,e.tZ)("div",{className:J.searchBar},(0,e.tZ)(jn.ZP,null))),!L&&Fn))))},Ct=Zt,yo=a(75927),Ce=a(67034),Mt=function(n){var o=n.children,r=n.title,l=n.desc;return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,r),(0,e.tZ)("meta",{property:"og:title",content:r}),l&&(0,e.tZ)("meta",{name:"description",content:l})),(0,e.tZ)("div",{style:{minHeight:"100vh"}},o),(0,e.tZ)(Ce.default,null))},Dt=Mt,Et=a(66112),Me=a(19972),De=a(73594),Lt=function(){var n=(0,v.useRouteMeta)(),o=c.useMemo(function(){var i;if(!n.frontmatter.subtitle&&!n.frontmatter.title)i="404 Not Found - Ant Design";else{var d;i="".concat(n.frontmatter.subtitle||""," ").concat(((d=n.frontmatter)===null||d===void 0?void 0:d.title)||""," - Ant Design")}var m=n.frontmatter.description||"";return[i,m]},[n]),r=C()(o,2),l=r[0],s=r[1];return(0,e.tZ)(v.Helmet,null,(0,e.tZ)("title",null,l),(0,e.tZ)("meta",{property:"og:title",content:l}),s&&(0,e.tZ)("meta",{name:"description",content:s}))},Ee=Lt,Tt=a(7936),zt=a(24415),Ot=a(38209),Pt=a.n(Ot),Bt=a(39696),Le,Te,ze,Oe=["scroll","resize"],Rt=(0,p.kc)(function(t){var n=t.token,o=t.css,r=n.boxShadowSecondary,l=n.antCls;return{affixTabs:o(Le||(Le=u()([`
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
    `])),r,n.motionDurationSlow,n.motionDurationSlow,l,l,l),affixTabsFixed:o(Te||(Te=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:o(ze||(ze=u()([`
      text-transform: capitalize;
    `])))}}),Pe=32,At=function(){var n=c.useRef(null),o=c.useRef([]),r=c.useState(!1),l=C()(r,2),s=l[0],i=l[1],d=c.useState(void 0),m=C()(d,2),h=m[0],b=m[1],Z=Rt(),y=Z.styles,w=y.affixTabs,E=y.affixTabsFixed,L=y.span;function S(g){var P=document.getElementById(g);if(P){var nn=P.offsetTop-n.current.offsetHeight-Pe;(0,Bt.Z)(nn)}}c.useEffect(function(){var g=document.querySelectorAll("h2[id]");o.current=Array.from(g).map(function(P){var nn=P.id;return nn}),i(!0)},[]),c.useEffect(function(){var g=decodeURIComponent((location.hash||"").slice(1));g&&S(g)},[s]);var W=c.useMemo(function(){function g(){for(var P=window,nn=P.scrollY,rn=n.current.offsetHeight,J=o.current.length-1;J>=0;J-=1){var fn=o.current[J],yn=document.getElementById(fn),zn=yn.offsetTop-rn-Pe;if(zn<=nn){b(fn);return}}b(void 0)}return Pt()(g)},[]);return c.useEffect(function(){return typeof window=="undefined"?function(){}:(Oe.forEach(function(g){return window.addEventListener(g,W)}),W(),function(){Oe.forEach(function(g){return window.removeEventListener(g,W)})})},[]),(0,e.tZ)("div",{className:z()(w,h&&E),ref:n},(0,e.tZ)(zt.Z,{activeKey:h,centered:!0,size:"large",onChange:S,items:o.current.map(function(g){return{key:g,label:(0,e.tZ)("span",{className:L},g.replace(/-/g," "))}})}))},It=At,Be,Re,Ae,Ie=40,$n=1208,Jn=24,Wt=function(){var n=(0,De.Z)();return(0,p.kc)(function(o){var r=o.token,l=o.css,s=r.antCls;return{resourcePage:l(Be||(Be=u()([`
        footer {
          margin-top: 176px;

          .rc-footer-container {
            max-width: `,`px;
            margin: 0 auto;
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      `])),$n),resourceContent:l(Re||(Re=u()([`
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
      `])),Ie,$n,Jn,s,r.padding,r.padding),banner:l(Ae||(Ae=u()([`
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
      `])),Ie,n?"":"background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');",$n,$n,r.fontSizeLG,Jn,Jn)}})()},Ht=function(n){var o,r=n.children,l=Wt(),s=l.styles,i=(0,v.useRouteMeta)(),d=(0,De.Z)(),m=(0,e.tZ)(Et.Z,null,(0,e.tZ)(Ee,null),(0,e.tZ)("div",{id:"resources-page",className:s.resourcePage},(0,e.tZ)(It,null),(0,e.tZ)("div",{className:s.banner},(0,e.tZ)(Me.Z.Title,{style:{fontSize:30}},(o=i.frontmatter)===null||o===void 0?void 0:o.title,(0,e.tZ)(Tt.default,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:i.frontmatter.filename})),(0,e.tZ)("section",null,i.frontmatter.description)),(0,e.tZ)("div",{className:s.resourceContent},r),(0,e.tZ)(Ce.default,null)));return d?m:(0,e.tZ)(U.ZP,{theme:{token:{colorBgLayout:"#fff"}}},m)},Nt=Ht,jt=a(10696),Ut=a(45481),Xt=a(41969),Ft=a(51077),Kt=a(19453),Gt=a(29135),$t=a(41698),Vt=function(n){var o=n.children,r=n.fallback,l=r===void 0?(0,e.tZ)(Gt.Z.Input,{active:!0,size:"small"}):r,s=n.delay,i=s===void 0?200:s;return(0,e.tZ)($t.df,{triggerOnce:!0,delay:i},function(d){var m=d.inView,h=d.ref;return(0,e.tZ)("div",{ref:h},(0,e.tZ)(c.Suspense,{fallback:l},m?o:(0,e.tZ)("span",null)))})},Hn=Vt,Yt=a(95561),Jt=c.lazy(function(){return Promise.all([a.e(1045),a.e(2031)]).then(a.bind(a,32031))}),Qt=c.lazy(function(){return Promise.resolve().then(a.bind(a,95561))}),qt=c.lazy(function(){return a.e(7056).then(a.bind(a,37056))}),no=c.lazy(function(){return Promise.resolve().then(a.bind(a,67034))}),eo=c.lazy(function(){return a.e(270).then(a.bind(a,32433))}),to=c.lazy(function(){return Promise.resolve().then(a.bind(a,7936))}),oo=c.lazy(function(){return a.e(1786).then(a.bind(a,91786))}),ao=function(n){var o,r,l,s,i=n.children,d=(0,v.useRouteMeta)(),m=(0,V.Z)(),h=m.pathname,b=m.hash,Z=(0,c.useContext)(f.Z),y=Z.direction,w=(0,Yt.useStyle)(),E=w.styles,L=(0,Xt.Z)(!1),S=C()(L,2),W=S[0],g=S[1],P=(0,c.useState)("tsx"),nn=C()(P,2),rn=nn[0],J=nn[1],fn=(0,c.useMemo)(function(){var On;return((On=d.toc)===null||On===void 0?void 0:On.filter(function(Sn){return Sn._debug_demo}).map(function(Sn){return Sn.id}))||[]},[d]),yn=fn.includes(b.slice(1));(0,c.useLayoutEffect)(function(){g(yn)},[]);var zn=(0,c.useMemo)(function(){return{showDebug:W,setShowDebug:g,codeType:rn,setCodeType:J}},[W,rn,fn]),wn=y==="rtl";return(0,e.tZ)(Kt.Z.Provider,{value:zn},(0,e.tZ)(Mn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24},(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(Qt,{showDebug:W,debugDemos:fn})),(0,e.tZ)("article",{className:z()(E.articleWrapper,{rtl:wn})},(o=d.frontmatter)!==null&&o!==void 0&&o.title?(0,e.tZ)(jt.Z,{justify:"space-between"},(0,e.tZ)(Me.Z.Title,{style:{fontSize:32,position:"relative"}},(0,e.tZ)(Ut.Z,null,(0,e.tZ)("span",null,(r=d.frontmatter)===null||r===void 0?void 0:r.title),(0,e.tZ)("span",null,(l=d.frontmatter)===null||l===void 0?void 0:l.subtitle),!h.startsWith("/components/overview")&&(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(to,{title:(0,e.tZ)(v.FormattedMessage,{id:"app.content.edit-page"}),filename:d.frontmatter.filename}))))):null,(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(qt,null)),!d.frontmatter.__autoDescription&&d.frontmatter.description,d.frontmatter.category==="Components"&&String(d.frontmatter.showImport)!=="false"&&(0,e.tZ)(Ft.Z,{source:!0,component:d.frontmatter.title,filename:d.frontmatter.filename,version:d.frontmatter.tag}),(0,e.tZ)("div",{style:{minHeight:"calc(100vh - 64px)"}},i),(0,e.tZ)("div",{style:{marginTop:120}},(0,e.tZ)(Hn,{fallback:(0,e.tZ)("div",{style:{height:50}})},(0,e.tZ)(Jt,{filename:d.frontmatter.filename})),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)("div",{className:z()(E.bottomEditContent,{rtl:wn})},(0,e.tZ)(oo,{time:(s=d.frontmatter)===null||s===void 0?void 0:s.lastUpdated}))))),(0,e.tZ)(Hn,{fallback:null},(0,e.tZ)(eo,{rtl:wn})),(0,e.tZ)(no,null)))},ro=ao,io=a(92828),lo=a(22687),We,He,so=(0,p.kc)(function(t){var n=t.token,o=t.css,r=n.antCls,l=n.fontFamily,s=n.colorSplit,i=n.marginXXL,d=n.paddingXXS;return{asideContainer:o(We||(We=u()([`
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
    `])),i,l,d,r,r,r,r,n.fontSize,r,r,n.margin,n.margin,n.fontSize,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,n.marginXXS,r,n.padding,r,r,r,n.padding,r,r),mainMenu:o(He||(He=u()([`
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
    `])),n.headerHeight+n.contentMarginTop,n.headerHeight+n.contentMarginTop)}}),co=function(){var n=(0,v.useSidebarData)(),o=(0,c.useContext)(f.Z),r=o.isMobile,l=o.theme,s=so(),i=s.styles,d=(0,lo.Z)(),m=C()(d,2),h=m[0],b=m[1],Z=l.includes("dark"),y=(0,p.Fg)(),w=y.colorBgContainer,E=(0,e.tZ)(U.ZP,{theme:{components:{Menu:{itemBg:w,darkItemBg:w}}}},(0,e.tZ)(ee.Z,{items:h,inlineIndent:30,className:i.asideContainer,mode:"inline",theme:Z?"dark":"light",selectedKeys:[b],defaultOpenKeys:n==null?void 0:n.map(function(L){var S=L.title;return S}).filter(Boolean)}));return r?(0,e.tZ)(io.Z,{key:"Mobile-menu"},E):(0,e.tZ)(Mn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:i.mainMenu},E)},uo=co,Ne,mo=(0,p.kc)(function(t){var n=t.css,o=t.token;return{main:n(Ne||(Ne=u()([`
    display: flex;
    margin-top: `,`px;
  `])),o.contentMarginTop)}}),po=function(n){var o=n.children,r=mo(),l=r.styles;return(0,e.tZ)("main",{className:l.main},(0,e.tZ)(Ee,null),(0,e.tZ)(uo,null),(0,e.tZ)(ro,null,o))},go=po,ho={cn:{title:"Chaos Design",description:"Doc"},en:{title:"Chaos Design",description:"Doc"}},fo=function(){var n=(0,v.useOutlet)(),o=(0,V.Z)(),r=o.pathname,l=o.search,s=o.hash,i=(0,on.default)(ho),d=C()(i,2),m=d[0],h=d[1],b=(0,c.useRef)(null),Z=(0,c.useContext)(f.Z),y=Z.direction,w=(0,v.useSiteData)(),E=w.loading;(0,c.useLayoutEffect)(function(){h==="cn"?vn().locale("zh-cn"):vn().locale("en")},[]),(0,c.useEffect)(function(){var S=document.getElementById("nprogress-style");return b.current=setTimeout(function(){S==null||S.remove()},0),function(){return clearTimeout(b.current)}},[]),(0,c.useEffect)(function(){var S=s.replace("#","");if(S){var W;(W=document.getElementById(decodeURIComponent(S)))===null||W===void 0||W.scrollIntoView()}},[E,s]),(0,c.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+l)},[o]);var L=c.useMemo(function(){return["","/"].some(function(S){return S===r})||["/index"].some(function(S){return r.startsWith(S)})?(0,e.tZ)(Dt,{title:m.title,desc:m.description},n):r.startsWith("/docs/resource")?(0,e.tZ)(Nt,null,n):r.startsWith("/theme-editor")?n:(0,e.tZ)(go,null,n)},[r,n]);return(0,e.tZ)(c.Fragment,null,(0,e.tZ)(v.Helmet,{encodeSpecialCharacters:!1},(0,e.tZ)("html",{lang:h==="cn"?"zh-CN":h,"data-direction":y,className:z()({rtl:y==="rtl"})}),(0,e.tZ)("link",{sizes:"144x144",href:"https://rain120.github.io/study-notes/img/chao.png"}),(0,e.tZ)("meta",{property:"og:description",content:m.description}),(0,e.tZ)("meta",{property:"og:type",content:"website"}),(0,e.tZ)("meta",{property:"og:image",content:"https://rain120.github.io/study-notes/img/chao.png"})),(0,e.tZ)(U.ZP,{direction:y,locale:h==="cn"?un.Z:void 0},(0,e.tZ)(gn,null),(0,e.tZ)(Ct,null),L))},vo=fo},95561:function(Pn,R,a){a.r(R),a.d(R,{useStyle:function(){return A}});var j=a(26068),C=a.n(j),$=a(53649),z=a.n($),cn=a(75271),vn=a(10286),xn=a(97940),c=a(82187),U=a.n(c),un=a(51675),v=a(96378),on,V,e,p,A=(0,xn.kc)(function(_){var x=_.token,X=_.css,en=x.antCls;return{anchorToc:X(on||(on=z()([`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: `,`px;
        }
      }
    `])),en,en,x.fontSizeSM),tocWrapper:X(V||(V=z()([`
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
    `])),x.headerHeight+x.contentMarginTop-4,x.borderRadius,x.purple6,x.purple5,x.headerHeight+x.contentMarginTop+24,x.paddingXXS,x.screenLG),articleWrapper:X(e||(e=z()([`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: `,`px) {
        & {
          padding: 0 `,`px;
        }
      }
    `])),x.screenLG,x.paddingLG*2),bottomEditContent:X(p||(p=z()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      flex: 0;
    `])))}}),Y=function(x){var X=x.showDebug,en=x.debugDemos,_n=en===void 0?[]:en,mn=A(),Ln=mn.styles,Nn=(0,xn.Fg)(),Q=(0,un.useRouteMeta)(),D=(0,un.useTabMeta)(),q=function(O){var B;return{href:"#".concat(O.id),title:O.title,key:O.id,children:(B=O.children)===null||B===void 0?void 0:B.filter(function(I){return X||!_n.includes(I.id)}).map(function(I){return{key:I.id,href:"#".concat(I.id),title:(0,v.tZ)("span",{className:U()({"toc-debug":_n.includes(I.id)})},I==null?void 0:I.title)}})}},pn=cn.useMemo(function(){return((D==null?void 0:D.toc)||Q.toc).reduce(function(N,O){if(O.depth===2)N.push(C()({},O));else if(O.depth===3){var B=N[N.length-1];B&&(B.children=B.children||[],B.children.push(C()({},O)))}return N},[])},[D==null?void 0:D.toc,Q.toc]);return Q.frontmatter.toc?(0,v.tZ)("section",{className:Ln.tocWrapper},(0,v.tZ)(vn.Z,{affix:!1,className:Ln.anchorToc,targetOffset:Nn.anchorTop,showInkInFixed:!0,items:pn.map(q)})):null};R.default=Y},67034:function(Pn,R,a){a.r(R);var j=a(75271),C=a(91574),$=a(96378),z=a(33230),cn=a(32699),vn=a.n(cn),xn=a(96058),c=a(16932),U=a(68714),un=a(91011),v=function(){var e=(0,c.Z)(),p=e.token,A=(0,U.Z)("footerLinks"),Y=(0,j.useContext)(un.Z),_=Y.isMobile,x=new C.C((0,xn.default)("#f0f3fa","#fff")).onBackground(p.colorBgContainer).toHexString();return{holder:(0,$.iv)("background:",x,";",""),footer:(0,$.iv)("background:",x,";color:",p.colorTextSecondary,";box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);*{box-sizing:border-box;}h2,a{color:",p.colorText,";}.rc-footer-column{margin-bottom:",_?60:0,"px;:last-child{margin-bottom:",_?20:0,"px;}}.rc-footer-item-icon{top:-1.5px;}.rc-footer-container{display:",Array.isArray(A)&&A.length>0?"block":"none",";max-width:1208px;margin-inline:auto;padding-inline:",p.marginXXL,"px;}.rc-footer-bottom{box-shadow:inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);.rc-footer-bottom-container{font-size:",p.fontSize,"px;}}","")}},on=function(){var e=v(),p=(0,U.Z)("footer"),A=(0,U.Z)("footerLinks"),Y=(0,j.useCallback)(function(_){return Array.isArray(_)&&_.forEach(function(x){var X=x.icon;x.icon&&(delete x.icon,x.icon=(0,$.tZ)("img",{src:String(X),alt:"",style:{maxWidth:"100%"}})),Array.isArray(x.items)&&Y(x.items)}),_},[]);return p?(0,$.tZ)(z.Z,{columns:Y((0,cn.cloneDeep)(A)),css:e.footer,bottom:(0,$.tZ)("span",{dangerouslySetInnerHTML:{__html:p}})}):null};R.default=on}}]);
