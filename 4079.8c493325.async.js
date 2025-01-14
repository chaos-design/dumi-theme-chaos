"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[4079],{14079:function(B,v,t){t.r(v),t.d(v,{default:function(){return L}});var g=t(82092),h=t.n(g),Z=t(53649),m=t.n(Z),C=t(75271),p=t(85367),y=t(97940),x=t(82187),S=t.n(x),A=t(14200),M=t(94268),b=t(29135),I=t(82145),z=t(81074),a=t(96378),N=function(e){var n=e.num,l=n===void 0?3:n;return(0,a.tZ)("li",null,Array.from({length:l}).map(function(r,o){return(0,a.tZ)(b.Z.Avatar,{size:"small",active:!0,key:o,style:{marginInlineStart:o===0?0:-8}})}))},P=function(e){var n=e.item,l=n===void 0?{}:n,r=l.username,o=l.url,s=e.loading;return s?(0,a.tZ)(N,null):r!=null&&r.includes("github-actions")?null:(0,a.tZ)(I.Z,{title:r},(0,a.tZ)("li",null,(0,a.tZ)("a",{href:"https://github.com/".concat(r),target:"_blank",rel:"noopener noreferrer"},(0,a.tZ)(z.C,{size:"small",src:o,alt:r},r))))},j=P,d,f,c,O=(0,y.kc)(function(i){var e=i.token,n=i.css;return{listMobile:n(d||(d=m()([`
    margin: 1em 0 !important;
  `]))),title:n(f||(f=m()([`
    font-size: `,`px;
    opacity: 0.5;
    margin-bottom: `,`px;
  `])),e.fontSizeSM,e.marginXS),list:n(c||(c=m()([`
    display: flex;
    flex-wrap: wrap;
    clear: both;
    li {
      height: 24px;
      transition: all `,`;
      margin-inline-end: -`,`px;
    }
    &:hover {
      li {
        margin-inline-end: 0;
      }
    }
  `])),e.motionDurationSlow,e.marginXS)}}),$=function(e){var n=e.filename,l=(0,A.useIntl)(),r=l.formatMessage,o=O(),s=o.styles,T=(0,C.useContext)(M.Z),X=T.isMobile;return n?(0,a.tZ)("div",{className:S()(h()({},s.listMobile,X))},(0,a.tZ)("div",{className:s.title},r({id:"app.content.contributors"})),(0,a.tZ)(p.Z,{cache:!0,repo:"chaos-design",owner:"dumi-theme-chaos",fileName:n,className:s.list,renderItem:function(u,D){return(0,a.tZ)(j,{item:u,loading:D,key:u==null?void 0:u.url})}})):null},L=$}}]);
