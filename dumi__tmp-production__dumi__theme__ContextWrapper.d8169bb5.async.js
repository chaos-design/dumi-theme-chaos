"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[1923],{11038:function(U,s,e){e.r(s),e.d(s,{default:function(){return C}});var b=e(48305),y=e.n(b),i=e(75271),n=e(28691),v=e(78143),S=e(92633),a=null,o=e(61681),x=e(96378),r={},l={repository:{type:"git",url:"https://github.com/chaos-design/dumi-theme-chaos",directory:"example"}},d="browser",c=void 0,u={footer:'Made with<span style="color: rgb(255, 255, 255);">\u2764</span>by <span>chaos-design | Copyright \xA9 2025-present</span>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"dumi-theme-chaos",announcementBar:{id:"announcementBar",message:"\u{1F389} \u6B22\u8FCE\u4F7F\u7528 dumi-theme-chaos",description:"chaos description",backgroundColor:"#69b1ff",textColor:"#fff",showIcon:!1,closable:!0},nav:{"zh-CN":[{title:"\u6307\u5357",link:"/guide/introduce"},{title:"\u914D\u7F6E",link:"/config/base"},{title:"\u793A\u4F8B",link:"/demo/secondary-sidebar-colors"}],"en-US":[{title:"Guide",link:"/guide/introduce-en"},{title:"Config",link:"/config/base-en"},{title:"Demo",link:"/demo/secondary-sidebar-colors-en"}]},github:{url:"https://github.com/chaos-design/dumi-theme-chaos",branch:"main",docDir:"example"},localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D"},{id:"en-US",switchPrefix:"en"}],sidebarGroupModePath:["/config","/guide"],title:"Doc Theme",description:{"zh-CN":"Chaos Design","en-US":"Chaos Design"},actions:{"zh-CN":[{type:"primary",text:"\u5F00\u59CB\u4F7F\u7528",link:"/guide/introduce"},{text:"\u914D\u7F6E",link:"/config/base"}],"en-US":[{type:"primary",text:"Start",link:"/guide/introduce-en"},{text:"Config",link:"/config/base-en"}]},features:{"zh-CN":[{title:"\u5185\u7F6E\u5168\u6587\u641C\u7D22",details:"\u4E0D\u9700\u8981\u63A5\u5165\u4EFB\u4F55\u4E09\u65B9\u670D\u52A1\uFF0C\u6807\u9898\u3001\u6B63\u6587\u3001demo \u7B49\u5185\u5BB9\u5747\u53EF\u88AB\u641C\u7D22\uFF0C\u652F\u6301\u591A\u5173\u952E\u8BCD\u641C\u7D22\uFF0C\u4E14\u4E0D\u4F1A\u5E26\u6765\u4EA7\u7269\u4F53\u79EF\u7684\u589E\u52A0\u3002"},{title:"\u66F4\u597D\u7684\u7F16\u8BD1\u6027\u80FD",details:"\u901A\u8FC7\u7ED3\u5408\u4F7F\u7528 Umi 4 MFSU\u3001esbuild\u3001SWC\u3001\u6301\u4E45\u7F13\u5B58\u7B49\u65B9\u6848\uFF0C\u5E26\u6765\u6BD4 dumi 1.x \u66F4\u5FEB\u7684\u7F16\u8BD1\u901F\u5EA6\u3002"},{title:"SSR",details:"\u5168\u9762\u652F\u6301 SSR\uFF0C\u8BA9\u6587\u6863\u5177\u6709\u66F4\u597D\u7684\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u3001\u66F4\u597D\u7684SEO\u6548\u679C\u3001\u66F4\u5FEB\u7684\u5185\u5BB9\u5230\u8FBE\u7387\u3002"},{title:"\u6837\u5F0F\u98CE\u683C\u7EDF\u4E00",details:"\u57FA\u4E8E antd 5.0 CSS-in-JS \u6837\u5F0F\u52A0\u6301\uFF0C\u5168\u9762\u7EDF\u4E00 dumi \u5185\u7F6E\u6837\u5F0F\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\u52A0\u8F7D\u3002"},{title:"\u529F\u80FD\u589E\u5F3A",details:"\u5728 dumi \u5185\u7F6E markdown \u589E\u5F3A\u57FA\u7840\u4E0A\u65B0\u589E\u7279\u6709 FrontMatter \u914D\u7F6E\uFF0C\u5E76\u4E14\u5185\u7F6E\u591A\u79CD\u7EC4\u4EF6\uFF0C\u4F7F\u6587\u6863\u5C55\u793A\u6548\u679C\u5F97\u4EE5\u63D0\u5347\u3002"},{title:"\u5F00\u7BB1\u5373\u7528",details:"\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design \u98CE\u683C\uFF0C\u5185\u7F6E\u4E3B\u9898\u5207\u6362\uFF0C\u7D27\u51D1\u6A21\u5F0F\u7B49\u529F\u80FD\u3002"}],"en-US":[{title:"Built-in Full-Text search",details:"There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume."},{title:"Better Compilation Performance",details:"By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x."},{title:"SSR",details:"Fully supports SSR, allowing documents to have better first-screen loading speed, better SEO effect, and faster content arrival rate."},{title:"Uniform style",details:"Based on antd 5.0 CSS-in-JS style support, it fully unifies dumi's built-in styles and supports custom theme loading."},{title:"Function enhancement",details:"Based on dumi's built-in markdown enhancement, a unique FrontMatter configuration is added, and a variety of built-in components improve the document display effect."},{title:"Simple Use",details:"Easy access, installation and use, fully integrated into Ant Design style, built-in theme switching, compact mode and other functions."}]},loading:{skeleton:["/guide","/config","/demo"]},docVersions:{"0.0.1-alpha.2":"https://rain120.github.io/dumi-theme-chaos/"},footerLinks:[{title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Github",description:"Rain120",url:"https://github.com/rain120",openExternal:!0}]},{title:"\u5E2E\u52A9",items:[{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png",title:"GitHub",url:"https://github.com/chaos-design/dumi-theme-chaos",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181704-d443821a-38a2-490a-9aba-4955ceb8d89b.png",title:"\u5E38\u89C1\u95EE\u9898",url:"/dumi-theme-chaos/config/faq"},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181680-3b031d0f-1c51-48d2-a676-b2f82aa23e09.png",title:"\u62A5\u544A Bug",url:"https://github.com/chaos-design/dumi-theme-chaos/issues/new",openExternal:!0},{icon:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181701-b51d6a6f-3190-4525-80d0-43ac194437c9.png",title:"issues",url:"https://github.com/chaos-design/dumi-theme-chaos/issues",openExternal:!0}]}],moreLinks:[{text:"Chaos Design",link:"https://github.com/chaos-design"}],sourceLink:"https://github.com/chaos-design/dumi-theme-chaos/tree/main/example/{fileName}#L{line}",editLink:"https://github.com/chaos-design/dumi-theme-chaos/edit/main/example/{filename}"},h=!1;function C(){var k=(0,n.useOutlet)(),w=(0,i.useState)(!1),m=y()(w,2),p=m[0],g=m[1],f=(0,i.useRef)(n.history.location.pathname);(0,i.useEffect)(function(){return n.history.listen(function(t){t.location.pathname!==f.current&&(f.current=t.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var E=i.useMemo(function(){var t={pkg:l,historyType:d,entryExports:r,demos:null,components:a,locales:o.k,loading:p,setLoading:g,hostname:c,themeConfig:u,_2_level_nav_available:h};return Object.defineProperty(t,"demos",{get:function(){return(0,v.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),t},[l,d,r,a,o.k,p,g,c,u,h]);return(0,x.tZ)(S.D.Provider,{value:E},k)}}}]);
