"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1051],{35401:function(P,l){var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};l.Z=n},72587:function(P,l,n){var v=n(99441),r=n(75271),u=n(19984),a=n(61776),o=function(c,m){return r.createElement(a.Z,(0,v.Z)({},c,{ref:m,icon:u.Z}))},d=r.forwardRef(o);l.Z=d},75079:function(P,l,n){var v=n(99441),r=n(75271),u=n(70922),a=n(61776),o=function(c,m){return r.createElement(a.Z,(0,v.Z)({},c,{ref:m,icon:u.Z}))},d=r.forwardRef(o);l.Z=d},90081:function(P,l,n){var v=n(99441),r=n(75271),u=n(35401),a=n(61776),o=function(c,m){return r.createElement(a.Z,(0,v.Z)({},c,{ref:m,icon:u.Z}))},d=r.forwardRef(o);l.Z=d},31051:function(P,l,n){n.r(l);var v=n(48305),r=n.n(v),u=n(53649),a=n.n(u),o=n(75271),d=n(55619),M=n(75079),c=n(90081),m=n(72587),W=n(96055),y=n(47998),S=n(82187),D=n.n(S),j=n(69543),z=n(67286),i=n(96378),I,R,L,Z,C,N,X=(0,y.kc)(function(h){var t=h.token,_=h.css,s=t.colorSplit,e=t.iconCls,f=t.fontSizeIcon;return{prevNextNavMobile:_(I||(I=a()([`
      position: fixed;
      top: 40%;
      right: 10px;
      z-index: 2;
      cursor: pointer;
    `]))),verticalText:_(R||(R=a()([`
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: `,`px;
      background: `,`;
      padding: 12px 6px;
      border-radius: 40px;

      a {
        height: auto;
        line-height: unset;
        color: #fff;

        .anticon {
          color: #fff;
        }

        .anticon-up {
          margin-bottom: 4px;
        }

        .anticon-down {
          margin-top: 4px;
        }
      }
    `])),t.fontSize,t.colorPrimary),prevNextNav:_(L||(L=a()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),t.fontSize,s),pageNav:_(Z||(Z=a()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all `,`;
      }

      .chinese {
        margin-inline-start: `,`px;
      }
    `])),e,f,t.motionDurationSlow,t.marginXXS),prevNav:_(C||(C=a()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end `,`;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `])),t.motionDurationSlow),nextNav:_(N||(N=a()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start `,`;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])),t.motionDurationSlow)}}),F=function h(t){return Array.isArray(t)?t.reduce(function(_,s){if(!s)return _;if("children"in s&&s.children){var e;return _.concat((e=h(s.children))!==null&&e!==void 0?e:[])}return _.concat(s)},[]):null},G=function(t){var _=t.rtl,s=X(),e=s.styles,f={className:"footer-nav-icon-before"},g={className:"footer-nav-icon-after"},H=(0,o.useContext)(z.Z),p=H.isMobile,J=_?p?(0,i.tZ)(d.Z,f):(0,i.tZ)(M.Z,f):p?(0,i.tZ)(c.Z,f):(0,i.tZ)(m.Z,f),Q=_?p?(0,i.tZ)(c.Z,g):(0,i.tZ)(m.Z,g):p?(0,i.tZ)(d.Z,g):(0,i.tZ)(M.Z,g),V=(0,j.Z)({before:J,after:Q}),T=r()(V,2),U=T[0],b=T[1],Y=(0,o.useMemo)(function(){var x=F(U);if(!x)return[null,null];var A=-1;return x.forEach(function(K,$){K&&K.key===b&&(A=$)}),[x[A-1],x[A+1]]},[U,b]),B=r()(Y,2),E=B[0],O=B[1];return p?(0,i.tZ)(W.Z,{vertical:!0,className:e.prevNextNavMobile,gap:16},E&&(0,i.tZ)("div",{className:e.verticalText},o.cloneElement(E.label,{className:D()(e.pageNav,e.prevNav,E.className)})),O&&(0,i.tZ)("div",{className:e.verticalText},o.cloneElement(O.label,{className:D()(e.pageNav,e.nextNav,O.className)}))):(0,i.tZ)("section",{className:e.prevNextNav},E&&o.cloneElement(E.label,{className:D()(e.pageNav,e.prevNav,E.className)}),O&&o.cloneElement(O.label,{className:D()(e.pageNav,e.nextNav,O.className)}))};l.default=G}}]);
