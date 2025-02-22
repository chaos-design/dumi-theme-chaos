"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[4795],{54795:function(G,d,t){t.r(d),t.d(d,{default:function(){return D}});var g=t(82092),Z=t.n(g),p=t(67825),C=t.n(p),y=t(53649),u=t.n(y),b=t(75271),x=t(93232),S=t(47998),A=t(82187),M=t.n(A),P=t(6995),j=t(67286),I=t(32337),z=t(40931),N=t(36018),e=t(96378),O=function(n){var a=n.num,r=a===void 0?3:a;return(0,e.tZ)("li",null,Array.from({length:r}).map(function(o,l){return(0,e.tZ)(I.Z.Avatar,{size:"small",active:!0,key:l,style:{marginInlineStart:l===0?0:-8}})}))},$=function(n){var a=n.item,r=a===void 0?{}:a,o=r.username,l=r.url,m=n.loading;return m?(0,e.tZ)(O,null):o!=null&&o.includes("github-actions")?null:(0,e.tZ)(z.Z,{title:o},(0,e.tZ)("li",null,(0,e.tZ)("a",{href:"https://github.com/".concat(o),target:"_blank",rel:"noopener noreferrer"},(0,e.tZ)(N.Z,{size:"small",src:l,alt:o},o))))},L=$,T=["filename"],f,c,h,W=(0,S.kc)(function(i){var n=i.token,a=i.css;return{listMobile:a(f||(f=u()([`
    // margin: 1em 0 !important;
    margin-bottom: 1em !important;
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
  `])),n.motionDurationSlow,n.marginXS)}}),X=function(n){var a=n.filename,r=C()(n,T),o=(0,P.useIntl)(),l=o.formatMessage,m=W(),v=m.styles,B=(0,b.useContext)(j.Z),E=B.isMobile;return!a||!r.repo||!r.owner?null:(0,e.tZ)("div",{className:M()(Z()({},v.listMobile,E))},(0,e.tZ)("div",{className:v.title},l({id:"app.content.contributors"})),(0,e.tZ)(x.Z,{cache:!0,repo:r.repo,owner:r.owner,fileName:a,branch:r.branch,className:v.list,renderItem:function(s,F){return(0,e.tZ)(L,{item:s,loading:F,key:s==null?void 0:s.url})}}))},D=X}}]);
