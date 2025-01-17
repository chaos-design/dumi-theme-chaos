"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[2031],{32031:function(G,d,t){t.r(d),t.d(d,{default:function(){return D}});var g=t(82092),Z=t.n(g),p=t(67825),C=t.n(p),y=t(53649),u=t.n(y),x=t(75271),b=t(85367),S=t(97940),A=t(82187),M=t.n(A),P=t(40674),j=t(91011),I=t(29135),z=t(82145),N=t(81074),e=t(96378),O=function(n){var a=n.num,r=a===void 0?3:a;return(0,e.tZ)("li",null,Array.from({length:r}).map(function(l,o){return(0,e.tZ)(I.Z.Avatar,{size:"small",active:!0,key:o,style:{marginInlineStart:o===0?0:-8}})}))},$=function(n){var a=n.item,r=a===void 0?{}:a,l=r.username,o=r.url,m=n.loading;return m?(0,e.tZ)(O,null):l!=null&&l.includes("github-actions")?null:(0,e.tZ)(z.Z,{title:l},(0,e.tZ)("li",null,(0,e.tZ)("a",{href:"https://github.com/".concat(l),target:"_blank",rel:"noopener noreferrer"},(0,e.tZ)(N.C,{size:"small",src:o,alt:l},l))))},L=$,T=["filename"],f,c,h,W=(0,S.kc)(function(i){var n=i.token,a=i.css;return{listMobile:a(f||(f=u()([`
    margin: 1em 0 !important;
  `]))),title:a(c||(c=u()([`
    font-size: `,`px;
    opacity: 0.5;
    margin-bottom: `,`px;
  `])),n.fontSizeSM,n.marginXS),list:a(h||(h=u()([`
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
  `])),n.motionDurationSlow,n.marginXS)}}),X=function(n){var a=n.filename,r=C()(n,T),l=(0,P.useIntl)(),o=l.formatMessage,m=W(),v=m.styles,B=(0,x.useContext)(j.Z),E=B.isMobile;return!a||!r.repo||!r.owner?null:(0,e.tZ)("div",{className:M()(Z()({},v.listMobile,E))},(0,e.tZ)("div",{className:v.title},o({id:"app.content.contributors"})),(0,e.tZ)(b.Z,{cache:!0,repo:r.repo,owner:r.owner,fileName:a,branch:r.branch,className:v.list,renderItem:function(s,F){return(0,e.tZ)(L,{item:s,loading:F,key:s==null?void 0:s.url})}}))},D=X}}]);
