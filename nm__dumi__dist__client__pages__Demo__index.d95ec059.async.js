"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1009],{40089:function(R,m,e){e.r(m);var o=e(26889),n=e(75271),_=e(94087),M=e(45998),D=function(){var p=(0,o.useParams)(),a=p.id,t=(0,o.useDemo)(a),O=(0,_.m)({id:a,component:t.component,renderOpts:t.renderOpts}),P=O.canvasRef,u=t||{},v=u.component,d=u.renderOpts,r=(0,o.useLiveDemo)(a),s=r.node,c=r.setSource,i=r.error,l=r.loading,h=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var f=function(E){E.data.type==="dumi.liveDemo.setSource"&&c(E.data.value)};return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}},[c]),(0,n.useEffect)(function(){!l&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,l]),h};m.default=D}}]);
