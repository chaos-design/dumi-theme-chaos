"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[6118],{98936:function(p,o,e){e.d(o,{Z:function(){return m}});var l=e(2053),s=e(75271),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},t=n,_=e(61776),i=function(c,v){return s.createElement(_.Z,(0,l.Z)({},c,{ref:v,icon:t}))},u=s.forwardRef(i),m=u},66118:function(p,o,e){e.r(o);var l=e(48305),s=e.n(l),n=e(75271),t=e(96378),_=e(28691),i=e(98936),u=e(40347),m=e(80553),h=function(){var f=(0,u.Z)(),a=f.token,d=a.colorTextTertiary,r=a.marginXXS;return{lastUpdatedWrap:(0,t.iv)("color:",d,";display:flex;align-items:center;font-size:",a.fontSizeSM,"px;",""),lastUpdatedLabel:(0,t.iv)("margin-inline-start:",r,"px;margin-inline-end:",r,"px;",""),lastUpdatedTime:(0,t.iv)("","")}},c=function(f){var a=f.time,d=h(),r=(0,m.Z)(),E=r.lastUpdated,O=(0,n.useState)(""),C=s()(O,2),M=C[0],S=C[1],D=(0,n.useState)(""),U=s()(D,2),L=U[0],P=U[1],T=E&&a;return(0,n.useEffect)(function(){T&&(S(new Date(a).toISOString()),P(new Intl.DateTimeFormat(void 0,{dateStyle:"short",timeStyle:"short"}).format(a)))},[T,a]),E&&a?(0,t.tZ)("div",{css:d.lastUpdatedWrap},(0,t.tZ)(i.Z,null),(0,t.tZ)("span",{css:d.lastUpdatedLabel},(0,t.tZ)(_.FormattedMessage,{id:"content.footer.last.updated"})),(0,t.tZ)("time",{css:d.lastUpdatedTime,dateTime:M},L)):null};o.default=c}}]);
