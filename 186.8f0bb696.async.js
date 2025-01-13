"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[186],{80186:function(G,v,n){n.r(v);var y=n(48305),f=n.n(y),T=n(53649),r=n.n(T),l=n(75271),h=n(68533),E=n(94388),I=n(97940),L=n(82187),p=n.n(L),K=n(88989),B=n(47614),_=n(96378),M,O,P,x,R=(0,I.kc)(function(i){var e=i.token,t=i.css,o=e.colorSplit,a=e.iconCls,s=e.fontSizeIcon;return{prevNextNav:t(M||(M=r()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),e.fontSize,o),pageNav:t(O||(O=r()([`
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
    `])),a,s,e.motionDurationSlow,e.marginXXS),prevNav:t(P||(P=r()([`
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
    `])),e.motionDurationSlow),nextNav:t(x||(x=r()([`
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
    `])),e.motionDurationSlow)}}),U=function i(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var a;return t.concat((a=i(o.children))!==null&&a!==void 0?a:[])}return t.concat(o)},[]):null},W=function(e){var t=e.rtl,o=R(),a=o.styles,s={className:"footer-nav-icon-before"},D={className:"footer-nav-icon-after"},S=t?(0,_.tZ)(h.Z,s):(0,_.tZ)(E.Z,s),Z=t?(0,_.tZ)(E.Z,D):(0,_.tZ)(h.Z,D),j=(0,K.Z)({before:S,after:Z}),g=f()(j,2),b=g[0],C=g[1],z=(0,l.useContext)(B.Z),X=z.isMobile,k=(0,l.useMemo)(function(){var m=U(b);if(!m)return[null,null];var c=-1;return m.forEach(function(A,F){A&&A.key===C&&(c=F)}),[m[c-1],m[c+1]]},[b,C]),N=f()(k,2),d=N[0],u=N[1];return X?null:(0,_.tZ)("section",{className:a.prevNextNav},d&&l.cloneElement(d.label,{className:p()(a.pageNav,a.prevNav,d.className)}),u&&l.cloneElement(u.label,{className:p()(a.pageNav,a.nextNav,u.className)}))};v.default=W}}]);
