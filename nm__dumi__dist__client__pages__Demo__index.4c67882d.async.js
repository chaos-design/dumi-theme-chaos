"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1009],{37164:function(O,m,e){e.r(m),e.d(m,{default:function(){return g}});var o=e(14200),n=e(75271),D=e(65950),h=function(){var E=(0,o.useParams)(),t=E.id,a=(0,o.useDemo)(t),R=(0,D.m)({id:t,component:a.component,renderOpts:a.renderOpts}),w=R.canvasRef,i=a||{},v=i.component,d=i.renderOpts,r=(0,o.useLiveDemo)(t),s=r.node,c=r.setSource,u=r.error,f=r.loading,L=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:w}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var l=function(p){p.data.type==="dumi.liveDemo.setSource"&&c(p.data.value)};return window.addEventListener("message",l),function(){return window.removeEventListener("message",l)}},[c]),(0,n.useEffect)(function(){!f&&(u||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:u}})},[u,s,f]),L},g=h}}]);
