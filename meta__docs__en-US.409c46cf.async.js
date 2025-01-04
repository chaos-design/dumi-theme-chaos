"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[7430],{25142:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(15494),d={}},93839:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(8488),d={}},20549:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(38208),d={}},47951:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(92266),d={}},73464:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(18322),d={}},46750:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(13983),d={}},43576:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(91286),d={}},78543:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(25560),d={}},67353:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(60157),d={}},90794:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(72626),d={}},31431:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(9147),d={}},59598:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(35849),d={}},37042:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(96487),d={}},83878:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(70346),d={}},82424:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(96685),d={}},7790:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(78788),d={}},5928:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(98367),d={}},99665:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(75271),n=e(37299),d={}},56652:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(15494);const n=[{value:"Here are some dumi-theme-chaos common questions and official answers for your reference.",paraId:0},{value:"0.3.0+",paraId:1},{value:"The home page of ",paraId:2,tocIndex:0},{value:"dumi-theme-chaos",paraId:2,tocIndex:0},{value:" is generated according to the configuration by default, and there will inevitably be some custom modules in the actual use process. ",paraId:2,tocIndex:0},{value:"dumi-theme-chaos",paraId:2,tocIndex:0},{value:" internally separates the home page module into a built-in component of ",paraId:2,tocIndex:0},{value:"HomeBaseLayout",paraId:2,tocIndex:0},{value:", if you want While fully customizing the homepage and wanting to retain the layout of the built-in homepage, it can be introduced and used in the page. For example, to create a new page:",paraId:2,tocIndex:0},{value:`<!-- .dumi/pages/index.md -->

<HomeBaseLayout></HomeBaseLayout>
....some text or images
<YourCustomComponent></YourCustomComponent>
`,paraId:3,tocIndex:0},{value:"Or import it as a React component:",paraId:4,tocIndex:0},{value:`/*.dumi/pages/index.tsx */
import { HomeBaseLayout } from 'dumi-theme-chaos';

const CustomHomePage = () => {
  return (
    <div>
      <HomeBaseLayout />
      <div>other content</div>
    </div>
  );
};

export default CustomHomePage;
`,paraId:5,tocIndex:0},{value:"0.3.3+",paraId:6,tocIndex:0},{value:"The theme package has been adapted to the conventional secondary navigation function provided by dumi, which is convenient for organizing documents. For the specific directory structure and FrontMatter configuration, please refer to the official website ",paraId:7,tocIndex:1},{value:"Conventional secondary navigation",paraId:7,tocIndex:1},{value:"\u3002",paraId:7,tocIndex:1},{value:"The theme switching logic inside the theme package is compatible with dumi\u2019s built-in ",paraId:8,tocIndex:2},{value:"usePrefersColor",paraId:8,tocIndex:2},{value:" API, so you can use the ",paraId:8,tocIndex:2},{value:"@dark-selector",paraId:8,tocIndex:2},{value:" global variable in the Less file to add a dark mode style to the components of the theme package:",paraId:8,tocIndex:2},{value:`.some-container {
  // Bright color mode is white
  color: #fff;

  // dark mode is black
  @{dark-selector} & {
    color: #000;
  }
}
`,paraId:9,tocIndex:2},{value:"If it is a pure css file, you can use ",paraId:10,tocIndex:2},{value:"prefers-color-scheme",paraId:10,tocIndex:2},{value:" to achieve.",paraId:10,tocIndex:2},{value:"0.3.9+",paraId:11,tocIndex:2},{value:"The theme package supports ssr, and the cssinjs' style was not completely compatible before the ` 0.3.9' version, but the problem has been fixed in later versions. SSR recommends the following configuration:",paraId:12,tocIndex:3},{value:`export default defineConfig({
  ssr: process.env.NODE_ENV === 'development' ? false : {}
});
`,paraId:13,tocIndex:3},{value:"When configured as SSR, if the homepage uses the built-in homepage module of the theme package, a 404 routing page will appear briefly when it is loaded for the first time. The reason is that the built-in homepage did not export ",paraId:14},{value:"index.html",paraId:14},{value:". is not immediately loaded into the corresponding resource. The solution is to create a custom homepage, then import the built-in ",paraId:14},{value:"<HomeBaseLayout />",paraId:14},{value:" module of the theme package, and then package and export",paraId:14},{value:"index.html",paraId:14},{value:", you can refer to [dumi-theme-chaos official website homepage](https:// github.com/chaos-design/dumi-theme-chaos/blob/main/example/.dumi/pages/index/index.tsx).",paraId:14},{value:"index.html",paraId:15},{value:"After using ",paraId:16,tocIndex:4},{value:"dumi-theme-chaos",paraId:16,tocIndex:4},{value:" theme package, the homepage is generated through configuration, and ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" is not written, so ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:" will not be generated. If you want to generate ",paraId:16,tocIndex:4},{value:"index.html",paraId:16,tocIndex:4},{value:", you can add ",paraId:16,tocIndex:4},{value:"index.md",paraId:16,tocIndex:4},{value:" or completely customize the home page, and then import the built-in ",paraId:16,tocIndex:4},{value:"HomeBaseLayout",paraId:16,tocIndex:4},{value:" component.",paraId:16,tocIndex:4},{value:"When deploying GitHub Pages, it will search for the ",paraId:17},{value:"index.html",paraId:17},{value:" file step by step by default. If you use nginx deployment, you can configure ",paraId:17},{value:"try_files",paraId:17},{value:" related parameters. When ",paraId:17},{value:"index.html",paraId:17},{value:" cannot be found in the root directory, it will go to other directories to find",paraId:17},{value:" index.html",paraId:17},{value:".",paraId:17}]},88661:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(8488);const n=[{value:"dumi-theme-chaos",paraId:0},{value:" In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the ",paraId:0},{value:"themeConfig",paraId:0},{value:" field of the ",paraId:0},{value:"dumi",paraId:0},{value:" theme configuration item. The specific configuration fields are as follows:",paraId:0},{value:" You can get better prompts through the ",paraId:1},{value:"defineThemeConfig",paraId:1},{value:" method inside the theme package:",paraId:1},{value:`import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chaos/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    title: 'Chaos Design Doc'
  })
});
`,paraId:2},{value:"type\uFF1A",paraId:3,tocIndex:1},{value:"string",paraId:3,tocIndex:1},{value:"default\uFF1A",paraId:3,tocIndex:1},{value:"null",paraId:3,tocIndex:1},{value:"The Github icon link in the navigation bar. If this field is not configured, it will not be displayed, and it is compatible with the official ",paraId:4,tocIndex:1},{value:"socialLinks.github",paraId:4,tocIndex:1},{value:" configuration.",paraId:4,tocIndex:1},{value:"type\uFF1A",paraId:5,tocIndex:2},{value:"IBannerConfig",paraId:5,tocIndex:2},{value:"default\uFF1A",paraId:5,tocIndex:2},{value:"bannerConfigDefault",paraId:5,tocIndex:2},{value:`export interface IBannerConfig {
  /** Whether to display the header banner background*/
  showBanner?: boolean;
  /** banner url */
  bannerImgUrl?: string;
  /** banner mobile url */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 official website comes with banner image
  bannerImgUrl: 'xx' // antd v5 official website comes with banner image
};
`,paraId:6,tocIndex:2},{value:"Home page header banner image configuration options",paraId:7,tocIndex:2},{value:"type\uFF1A",paraId:8,tocIndex:3},{value:"ILocaleEnhance[]",paraId:8,tocIndex:3},{value:"default\uFF1A",paraId:8,tocIndex:3},{value:"dumi-theme-chaos",paraId:8,tocIndex:3},{value:`interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
`,paraId:9,tocIndex:3},{value:"The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.",paraId:10,tocIndex:3},{value:"type\uFF1A",paraId:11,tocIndex:4},{value:"string | Record<string, string>",paraId:11,tocIndex:4},{value:"default\uFF1A",paraId:11,tocIndex:4},{value:"Dumi Theme AntD",paraId:11,tocIndex:4},{value:`// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Chaos Design Doc',
  'en-US': 'Chaos Design Doc'
}
`,paraId:12,tocIndex:4},{value:"Configure the title of the first screen area on the home page.",paraId:13,tocIndex:4},{value:"0.0.1+",paraId:14,tocIndex:4},{value:"type\uFF1A",paraId:15,tocIndex:5},{value:"Omit<ThemeConfig, 'algorithm'>",paraId:15,tocIndex:5},{value:"default\uFF1A",paraId:15,tocIndex:5},{value:"undefined",paraId:15,tocIndex:5},{value:`theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
`,paraId:16,tocIndex:5},{value:"It is used to customize antd theme style, same as ",paraId:17,tocIndex:5},{value:"theme",paraId:17,tocIndex:5},{value:" in ",paraId:17,tocIndex:5},{value:"ConfigProvider",paraId:17,tocIndex:5},{value:", delete its preset algorithm ",paraId:17,tocIndex:5},{value:"algorithm",paraId:17,tocIndex:5},{value:" attribute, and the preset algorithm can be modified through the page theme style button.",paraId:17,tocIndex:5},{value:"type\uFF1A",paraId:18,tocIndex:6},{value:"string | Record<string, string>",paraId:18,tocIndex:6},{value:"default\uFF1A",paraId:18,tocIndex:6},{value:"null",paraId:18,tocIndex:6},{value:"Configure the introduction text of the first screen area on the home page.",paraId:19,tocIndex:6},{value:"\u7C7B\u578B\uFF1A",paraId:20,tocIndex:7},{value:"IDocVersion",paraId:20,tocIndex:7},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:20,tocIndex:7},{value:"null",paraId:20,tocIndex:7},{value:`interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
`,paraId:21,tocIndex:7},{value:"Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.",paraId:22,tocIndex:7},{value:"0.0.1+",paraId:23,tocIndex:7},{value:"Type: ",paraId:24,tocIndex:8},{value:"Omit<ThemeConfig, 'AnnouncementBarProps'>",paraId:24,tocIndex:8},{value:"Default: ",paraId:24,tocIndex:8},{value:"undefined",paraId:24,tocIndex:8},{value:`announcementBar: {
  id: "announcementBar", // update announcementBar id
  type: "info", // bar type, options info, success, warning, error
  align: "left", // align, options left, center right
  message: "\u{1F389} Welcome dumi-theme-chaos", // message
  description: "chaos description", // description
  backgroundColor: '#69b1ff', // background color
  textColor: '#fff', // text color
  showIcon: false, // show icon
  closable: true, // is closable
}
`,paraId:25,tocIndex:8},{value:"Site announcement bar.",paraId:26,tocIndex:8},{value:"0.0.1+",paraId:27,tocIndex:8},{value:"Type: ",paraId:28,tocIndex:9},{value:"FooterColumn[] | Record<string, FooterColumn[]>",paraId:28,tocIndex:9},{value:"Default: ",paraId:28,tocIndex:9},{value:"null",paraId:28,tocIndex:9},{value:"FooterColumn",paraId:29,tocIndex:9},{value:" is the ",paraId:29,tocIndex:9},{value:"rc-footer",paraId:29,tocIndex:9},{value:" component ",paraId:29,tocIndex:9},{value:"columns",paraId:29,tocIndex:9},{value:" attribute type value, ",paraId:29,tocIndex:9},{value:"click to view details",paraId:29,tocIndex:9},{value:".",paraId:29,tocIndex:9},{value:`
   Note: The `,paraId:30},{value:"icon",paraId:30},{value:" field in ",paraId:30},{value:"FooterColumn",paraId:30},{value:" is ",paraId:30},{value:"ReactNode",paraId:30},{value:", because the ",paraId:30},{value:"themeConfig",paraId:30},{value:" field sequence in dumirc.ts needs to be used in actual use However, the ",paraId:30},{value:"ReactNode",paraId:30},{value:` type does not support serialization very well, so if you need to set this value, you can directly set it to the online image address.
`,paraId:30},{value:`// Just configure the array for single language
footerLinks: [
   {
     title: 'More Products',
     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
     items: [
       {
         icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
         title: 'Yuque',
         url: 'https://yuque.com',
         description: 'Build your digital garden',
         openExternal: true
       }
     ]
   }
]

// Multi-language configuration object, the key is the language name
footerLinks: {
   'zh-CN': [],
   'en-US': [],
},
`,paraId:31},{value:"The friendly link module at the top of footer, such as more products, community links, etc.",paraId:32},{value:"\u7C7B\u578B\uFF1A",paraId:33,tocIndex:10},{value:"IMoreLink[] | Record<string, IMoreLink[]>",paraId:33,tocIndex:10},{value:"\u9ED8\u8BA4\u503C\uFF1A",paraId:33,tocIndex:10},{value:"null",paraId:33,tocIndex:10},{value:`interface IMoreLink {
  /** link text description */
  text: string;
  /** link */
  link: string;
}
// Just configure the array for single language
moreLinks: [
  {
    text: 'Dumi',
    link: 'https://d.umijs.org/'
  },
  {
    text: 'Ant Design',
    link: 'https://ant.design/'
  }
];
// Multi-language configuration object, the key is the language name
moreLinks: {
  'zh-CN': [],
  'en-US': [],
},
`,paraId:34,tocIndex:10},{value:"Configure more ecosystem links in the navigation bar.",paraId:35,tocIndex:10},{value:"type\uFF1A",paraId:36,tocIndex:11},{value:"boolean",paraId:36,tocIndex:11},{value:"default\uFF1A",paraId:36,tocIndex:11},{value:"true",paraId:36,tocIndex:11},{value:"Whether to display the rtl navigation button, it is displayed by default.",paraId:37,tocIndex:11},{value:"type\uFF1A",paraId:38,tocIndex:12},{value:"IAction[] | Record<string, IAction[]>",paraId:38,tocIndex:12},{value:"default\uFF1A",paraId:38,tocIndex:12},{value:"null",paraId:38,tocIndex:12},{value:`interface IAction {
  /** \u6309\u94AE\u6587\u5B57\u63CF\u8FF0 */
  text: string;
  /** \u6309\u94AE\u94FE\u63A5 */
  link: string;
  /** \u6309\u94AE\u7C7B\u578B */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
`,paraId:39,tocIndex:12},{value:"Configure the operation buttons in the first screen area of the home page.",paraId:40,tocIndex:12},{value:"type\uFF1A",paraId:41,tocIndex:13},{value:"IFeature[] | Record<string, IFeature[]>",paraId:41,tocIndex:13},{value:"default\uFF1A",paraId:41,tocIndex:13},{value:"null",paraId:41,tocIndex:13},{value:`interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: '\u5F00\u7BB1\u5373\u7528'}, { details: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
`,paraId:42,tocIndex:13},{value:"After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.",paraId:43,tocIndex:13},{value:"type\uFF1A",paraId:44,tocIndex:14},{value:"Array<string> | true",paraId:44,tocIndex:14},{value:"default\uFF1A",paraId:44,tocIndex:14},{value:"[]",paraId:44,tocIndex:14},{value:`export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with \`/config\`
        '/config'
      ]
    }
  }
};
`,paraId:45,tocIndex:14},{value:"Whether the left navigation bar needs to be treated as a group, please refer to antd ",paraId:46,tocIndex:14},{value:"menuitemgrouptype",paraId:46,tocIndex:14},{value:".",paraId:46,tocIndex:14},{value:"type\uFF1A",paraId:47,tocIndex:15},{value:"Record<string, SidebarEnhanceItems>",paraId:47,tocIndex:15},{value:"default\uFF1A",paraId:47,tocIndex:15},{value:"undefined",paraId:47,tocIndex:15},{value:`export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: '\u5FEB\u901F\u5F00\u59CB',
          type: 'group',
          children: [
            {
              // \u652F\u6301\u591A\u5C42\u7EA7
              title: '\u5B89\u88C5',
              children: [
                '/welcome/getting-started/installation', // \u652F\u6301\u4EC5\u586B\u5199\u94FE\u63A5\uFF0Ctitle \u81EA\u52A8\u6839\u636E \`# xxx\` \u751F\u6210
                '/welcome/getting-started/installation/docker'
              ]
            },
            {
              title: '\u5347\u7EA7',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose'
              ]
            }
          ]
        },
        // \u652F\u6301\u5BF9\u8C61\u7684\u65B9\u5F0F
        {
          title: '\u66F4\u65B0\u8BB0\u5F55',
          link: 'https://github.com/xx/xx/changelog.md'
        }
      ]
    }
  }
};
`,paraId:48,tocIndex:15},{value:"Since dumi only supports two-level sidebar ",paraId:49,tocIndex:15},{value:"issues",paraId:49,tocIndex:15},{value:", if the customization needs need to support three-level sidebar or want to fully customize the sidebar display , you can use this parameter. For configuration parameters, refer to the ",paraId:49,tocIndex:15},{value:"items attribute",paraId:49,tocIndex:15},{value:" of the ant-design menu component.",paraId:49,tocIndex:15},{value:"type: ",paraId:50,tocIndex:17},{value:"ILoading",paraId:50,tocIndex:17},{value:".",paraId:50,tocIndex:17},{value:"default: ",paraId:50,tocIndex:17},{value:"undefined",paraId:50,tocIndex:17},{value:`interface ILoading {
  skeleton?: Array<string>;
}
`,paraId:51,tocIndex:17},{value:"In the loading status of the current page, routing is enabled on demand by default, so there will be a loading process when switching routes. ",paraId:52,tocIndex:17},{value:"dumi-theme-chaos",paraId:52,tocIndex:17},{value:" provides two common forms of loading: ",paraId:52,tocIndex:17},{value:"Skeleton",paraId:52,tocIndex:17},{value:" and ",paraId:52,tocIndex:17},{value:"spin",paraId:52,tocIndex:17},{value:", and the corresponding loading forms can be set for different routes, with the default Spin form.",paraId:52,tocIndex:17},{value:`
Because dumi does not provide the form of slot to support loading components, it is necessary to manually import the loading components in `,paraId:53},{value:"dumi-theme-chaos",paraId:53},{value:" into ",paraId:53},{value:".dumi/loading.(js|jsx|ts|tsx)",paraId:53},{value:` first.
`,paraId:53},{value:`/* .dumi/loading.tsx */
export { default } from 'dumi-theme-chaos/loading';
`,paraId:54},{value:"The import method after ",paraId:55},{value:"0.3.1",paraId:55},{value:" version:",paraId:55},{value:`/* .dumi/loading.tsx */
export { Loading as default } from 'dumi-theme-chaos';
`,paraId:56},{value:"Configure the loading value",paraId:57},{value:`/* .dumirc.ts */
export default {
  themeConfig: {
    loading: {
      Skeleton: [
        '/guide',
        ' /config'
      ] /* the route loading component at the beginning of /config or /guide are in skeleton form. */
    }
  }
};
`,paraId:58}]},72899:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(38208);const n=[{value:"All Markdown configurations are configured in the form of FrontMatter at the top of the Markdown file, for example",paraId:0},{value:`---
title: configure page title
---

Additional Markdown content
`,paraId:1},{value:"Currently the theme supports the following Markdown configurations.",paraId:2},{value:"This configuration needs to be distinguished from the ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter. The ",paraId:3,tocIndex:0},{value:"sidebarEnhance",paraId:3,tocIndex:0},{value:" parameter is to deal with issues such as multi-level file directories, custom sidebars, and preventing multi-level sidebar clicks and jumps. The Markdown configuration is in the same Under the file directory, functions such as grouping and three-level sidebars are realized through configuration.",paraId:3,tocIndex:0},{value:`
   This configuration only takes effect in none `,paraId:4},{value:"sidebarGroupModePath",paraId:4},{value:` mode.
`,paraId:4},{value:"Configuring multi-level sidebars mainly depends on two fields ",paraId:5},{value:"group",paraId:5},{value:" and ",paraId:5},{value:"type",paraId:5},{value:", ",paraId:5},{value:"group",paraId:5},{value:" configures the first-level sidebar, and ",paraId:5},{value:"type",paraId:5},{value:" configures the second-level sidebar. First level sidebar configuration:",paraId:5},{value:`<!-- /xx/a.md -->
---
group: '\u5168\u5C40\u6837\u5F0F'
order: 0
title: '\u8272\u5F69'
---

<!-- /xx/b.md -->
---
group: '\u5168\u5C40\u6837\u5F0F'
order: 1
title: '\u5E03\u5C40'
---
`,paraId:6},{value:"Second level sidebar configuration:",paraId:7},{value:`<!-- /xx/c.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
order: 0
title: '\u6982\u89C8'
---

<!-- /xx/d.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 1
title: '\u8868\u5355\u9875'
---

<!-- /xx/e.md -->
---
group: '\u8BBE\u8BA1\u6A21\u5F0F'
type: '\u6A21\u677F\u6587\u6863'
order: 0
title: '\u6570\u636E\u53EF\u89C6\u5316\u9875'
---
`,paraId:8},{value:"The ",paraId:9},{value:"group",paraId:9},{value:" field type supports object format, which is used to adjust the display order of ",paraId:9},{value:"group",paraId:9},{value:". For example, setting the ",paraId:9},{value:"order",paraId:9},{value:" field in ",paraId:9},{value:"group",paraId:9},{value:" can adjust the order of ",paraId:9},{value:"global style",paraId:9},{value:" and ",paraId:9},{value:"design mode",paraId:9},{value:":",paraId:9},{value:`<!-- /xx/a.md -->
---
group:
  title: '\u5168\u5C40\u6837\u5F0F'
  order: 2
order: 1
title: '\u5E03\u5C40'
---

<!-- /xx/c.md -->
---
group:
  title: '\u8BBE\u8BA1\u6A21\u5F0F'
  order: 1
order: 0
title: '\u6982\u89C8'
---
`,paraId:10},{value:"Similarly, ",paraId:11},{value:"type",paraId:11},{value:" field type also supports object format, which is used to adjust the display order of ",paraId:11},{value:"type",paraId:11},{value:".",paraId:11},{value:"To hide the sidebar just set the ",paraId:12,tocIndex:1},{value:"sidebar",paraId:12,tocIndex:1},{value:" value to ",paraId:12,tocIndex:1},{value:"false",paraId:12,tocIndex:1},{value:" in FrontMatter:",paraId:12,tocIndex:1},{value:`---
sidebar: false
nav: example
title: hide sidebar
order: 3
---
`,paraId:13,tocIndex:1},{value:"+0.3.4",paraId:14,tocIndex:1},{value:"In order to display the menu bar update or identify the status, the menu supports tag configuration:",paraId:15,tocIndex:2},{value:`---
tag:
  title: new
  color: success <!-- Same as color attribute of antd Tag component,eg. success,processing,warning etc.-->
---
`,paraId:16,tocIndex:2},{value:"The menu is then rendered as:",paraId:17,tocIndex:2},{value:`
<img description="tag" width=300 src="`,paraId:17,tocIndex:2},{value:"https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/259418494-f44e99d2-7ce2-4816-8eb1-45b66c473ea6.png",paraId:17,tocIndex:2},{value:'" / >',paraId:17,tocIndex:2},{value:"You can also directly use the simple mode and configure it directly as a string. In this case, the default color is ",paraId:18,tocIndex:2},{value:"processing",paraId:18,tocIndex:2},{value:".",paraId:18,tocIndex:2},{value:`---
tag: new
---
`,paraId:19,tocIndex:2}]},67876:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(92266);const n=[{value:"Ant Design allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc.",paraId:0},{value:"In version 5.0, we provide a new way to customize themes. Different from the less and CSS variables of the 4.x version, with CSS-in-JS, the ability of theming has also been enhanced, including but not limited to:",paraId:1},{value:"Switching theme dynamically\uFF1B",paraId:2},{value:"Multiple themes\uFF1B",paraId:2},{value:"Customizing theme variables for some component\uFF1B",paraId:2},{value:"...",paraId:2}]},89689:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(18322);const n=[{value:`
  `,paraId:0},{value:"Ant Financial has a large number of enterprise-level products. With complex scenarios, designers and developers often need to respond fast due to frequent changes in product demands and concurrent R & D workflow. Many similar contents exist in the process. Through abstraction, we could obtain some stable and highly reusable components and pages.",paraId:1},{value:"On the other hand, with the trend of commercialization, more and more enterprise products begin to pursue better user experiences. Under this situation, Ant User-Experience Design Team builds a design system for enterprise products based on four design values of Natural, Certain, Meaningful, and Growing. It aims to uniform the user interface specs and reduce redundancies and excessive production costs, helping product designers to focus on better user experience.",paraId:2}]},30034:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(13983);const n=[{value:"In order to help users understand what the application is currently doing, and to refer to the user's next behavior, and to understand the results of the operation, when the user need to interact with the system , use different modes to feedback information or results. When the designer uses feedback or customizes some feedback, please note:",paraId:0},{value:"Provide users with necessary, positive and immediate feedback at all stages;",paraId:1},{value:"Avoid excessive feedback, so as not to cause unnecessary disturbance to the user, you can omit the feedback prompt at the results users can see immediately and simple operation.",paraId:1}]},15768:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(91286);const n=[{value:"Broadly speaking, anything telling users where they are, where to go and how to get there can be called navigation. When using navigation or customizing navigational structures, please pay attention to following common pitfalls:",paraId:0},{value:"Provide visual and contextual cues as many as possible, to prevent users from getting lost",paraId:1},{value:"Maintain consistency between form and behavior, or reduce the number of items in navigation, to decrease user's learning cost",paraId:1},{value:"Minimize page transitions (i.e. reduce the number of page transitions required by a task from several to just once or twice), to ensure that user travels only a short distance from any page to another",paraId:1}]},54814:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(25560);const n=[{value:"The use of design patterns in enterprise-level businesses can significantly increase the certainty of the R&D team, save unnecessary design and maintain system consistency, allowing designers to focus on creativity where it is most needed.",paraId:0},{value:"Design patterns adhere to Ant Design design values and provide a general solution to recurring design issues in enterprise products. The designer can directly use the design pattern to complete the interface design, or the design pattern can be used as a starting point to derive a more business-specific solution to meet the individual design needs.",paraId:1}]},55255:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(60157);const n=[{value:"When several items are in close proximity to each other, they become one visual unit rather than several separate units. Otherwise, their distance should be larger and look more like several visual units. The basic purpose of proximity is to organize. To give an apparent view of the page structure and the hierarchy of information to users.",paraId:0}]},21304:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(72626);const n=[{value:"Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.",paraId:0},{value:"The system-level color system mainly defines the basic color palette, neutral color palette and data visualization color palette in the design of Ant Financial. The product-level color system is in the specific design process, based on the color of the system to further define the tone of the product in accordance with the requirements and function of the color.",paraId:1}]},25438:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(9147);const n=[{value:"The font system is one of the most foundational parts of any interface design.",paraId:0},{value:`Text is a major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency. The Ant Design typography system is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has been verified by a large number of Ant products. While defining the font system for a visual system, we propose to start from the following five aspects:`,paraId:1},{value:"Font Family",paraId:2},{value:"Base Font Size",paraId:2},{value:"Font Scale & Line Height",paraId:2},{value:"Font Weight",paraId:2},{value:"Font Color",paraId:2}]},6552:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(35849);const n=[{value:"Spatial layout is the starting point of systematic visual design. The difference from traditional graphic design is that the layout space of UI interface should be based on the dynamic and systematic perspective. We were inspired by the architectural ethic of the architect Le Corbusier and explored the dynamic spatial order in UI design and formed the interface layout of Ant Design based on the principle of 'beauty of order', making it possible for designers to create spatial layout that comes with rational beauty.",paraId:0},{value:"While defining the layout system in a visual system, we propose to start from the following 5 aspects:\uFF1A",paraId:1},{value:"Unified Canvas Dimension",paraId:2},{value:"Adaptation",paraId:2},{value:"Grid Unit",paraId:2},{value:"Raster",paraId:2},{value:"Common Scales",paraId:2}]},21613:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(96487);const n=[{value:"Button",paraId:0},{value:"Property",paraId:1,tocIndex:0},{value:"Description",paraId:1,tocIndex:0},{value:"Type",paraId:1,tocIndex:0},{value:"Default",paraId:1,tocIndex:0},{value:"Version",paraId:1,tocIndex:0},{value:"block",paraId:1,tocIndex:0},{value:"Option to fit button width to its parent width",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"classNames",paraId:1,tocIndex:0},{value:"Semantic DOM class",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, string>",paraId:2,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"danger",paraId:1,tocIndex:0},{value:"Set the danger status of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"disabled",paraId:1,tocIndex:0},{value:"Disabled state of button",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"ghost",paraId:1,tocIndex:0},{value:"Make background transparent and invert text and border colors",paraId:1,tocIndex:0},{value:"boolean",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"href",paraId:1,tocIndex:0},{value:"Redirect url of link button",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"htmlType",paraId:1,tocIndex:0},{value:"Set the original html ",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:" of ",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:", see: ",paraId:1,tocIndex:0},{value:"MDN",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"button",paraId:1,tocIndex:0},{value:"icon",paraId:1,tocIndex:0},{value:"Set the icon component of button",paraId:1,tocIndex:0},{value:"ReactNode",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"loading",paraId:1,tocIndex:0},{value:"Set the loading status of button",paraId:1,tocIndex:0},{value:"boolean | { delay: number }",paraId:1,tocIndex:0},{value:"false",paraId:1,tocIndex:0},{value:"shape",paraId:1,tocIndex:0},{value:"Can be set button shape",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"circle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"round",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"size",paraId:1,tocIndex:0},{value:"Set the size of button",paraId:1,tocIndex:0},{value:"large",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"small",paraId:1,tocIndex:0},{value:"middle",paraId:1,tocIndex:0},{value:"styles",paraId:1,tocIndex:0},{value:"Semantic DOM style",paraId:1,tocIndex:0},{value:"Record<SemanticDOM, CSSProperties>",paraId:3,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"5.4.0",paraId:1,tocIndex:0},{value:"target",paraId:1,tocIndex:0},{value:"Same as target attribute of a, works when href is specified",paraId:1,tocIndex:0},{value:"string",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0},{value:"type",paraId:1,tocIndex:0},{value:"Set button type",paraId:1,tocIndex:0},{value:"primary",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"dashed",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"link",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"text",paraId:1,tocIndex:0},{value:" | ",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"default",paraId:1,tocIndex:0},{value:"onClick",paraId:1,tocIndex:0},{value:"Set the handler to handle ",paraId:1,tocIndex:0},{value:"click",paraId:1,tocIndex:0},{value:" event",paraId:1,tocIndex:0},{value:"(event: MouseEvent) => void",paraId:1,tocIndex:0},{value:"-",paraId:1,tocIndex:0}]},65740:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(70346);const n=[{value:"Warning prompt, showing the information that needs attention, using the same method as the ",paraId:0},{value:"antd",paraId:0},{value:" ",paraId:0},{value:"Alert",paraId:0},{value:" component, which supports ",paraId:0},{value:"type",paraId:0},{value:", ",paraId:0},{value:"closable",paraId:0},{value:" and ",paraId:0},{value:"showIcon",paraId:0},{value:" parameters , with the same type.",paraId:0},{value:`<Alert>
  Text
</Alert>

<Alert type="success" showIcon >
  Success Text
</Alert>

<Alert type="info">
  Info Text
</Alert>

<Alert type="warning">
  Warning Text
</Alert>

<Alert type="error" closable >
  Error Text
</Alert>
`,paraId:1},{value:`
  Text
`,paraId:2},{value:`
  Success Text
`,paraId:3},{value:`
  Info Text
`,paraId:4},{value:`
  Warning Text
`,paraId:5},{value:`
  Error Text
`,paraId:6}]},24230:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(96685);const n=[{value:"Image preview component, used when images need to be displayed. This component supports two parameters ",paraId:0},{value:"float",paraId:0},{value:" and ",paraId:0},{value:"pure",paraId:0},{value:", which are used to control the image display effect.",paraId:0},{value:"By default, the background color will be added to the image and the relevant spacing will be adjusted. ",paraId:1,tocIndex:0},{value:"description",paraId:1,tocIndex:0},{value:" is the description of the image, which will be displayed below the image.",paraId:1,tocIndex:0},{value:`<ImagePreview Preview>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
`,paraId:2,tocIndex:0},{value:`
   `,paraId:3},{value:"If you don't need effects such as background color and image centering, set the ",paraId:4,tocIndex:1},{value:"pure",paraId:4,tocIndex:1},{value:" attribute.",paraId:4,tocIndex:1},{value:`<ImagePreview pure>
   <img description="Design Principles" src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*aFiGRbIvuH4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>
`,paraId:5,tocIndex:1},{value:`
   `,paraId:6},{value:"In this mode, the image will be displayed floating on the right, and the text will surround it. Set the ",paraId:7,tocIndex:2},{value:"float",paraId:7,tocIndex:2},{value:" property to use this mode.",paraId:7,tocIndex:2},{value:`<ImagePreview float>
   <img src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1c74TKxuEW4AAAAAAAAAAABkARQnAQ" />
</ImagePreview>

Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is \`#1890ff\`. The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.
`,paraId:8,tocIndex:2},{value:`
   `,paraId:9},{value:"Brand color is one of the most intuitive visual elements to reflect product characteristics and communication concepts. When choosing a color, it is necessary to clarify the use scene and scope of the brand color in the interface. Choose the main color in the basic color palette, we recommend choosing the sixth color from light to dark in the color palette as the main color. The brand color of Ant Design is taken from the blue of the basic color palette, and the Hex value is ",paraId:10},{value:"#1890ff",paraId:10},{value:". The application scenarios include: key action points, operation status, important information highlighting, graphics and other scenarios.",paraId:10},{value:"In some cases, multiple images need to be displayed side by side, just put multiple ",paraId:11,tocIndex:3},{value:"<img />",paraId:11,tocIndex:3},{value:" tags in the ",paraId:11,tocIndex:3},{value:"ImagePreview",paraId:11,tocIndex:3},{value:" component, and add ",paraId:11,tocIndex:3},{value:"inline",paraId:11,tocIndex:3},{value:" class name to the ",paraId:11,tocIndex:3},{value:"img",paraId:11,tocIndex:3},{value:" tags.",paraId:11,tocIndex:3},{value:`<ImagePreview float>
   <img class='bad inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*di8jS5EWYSIAAAAAAAAAAABkARQnAQ" alt="bad inline" description="Do not place more than one in a button area Main button.">
   <img class='good inline' src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*3WUkT5pD1SUAAAAAAAAAAABkARQnAQ" alt="correct demonstration" description="1. Emphasize a main operation;< br/>2. There is no primary or secondary operation, and the secondary button is the safest choice.">
</ImagePreview>
`,paraId:12,tocIndex:3},{value:`
   `,paraId:13},{value:`
   `,paraId:13},{value:"In this mode, comparison styles are also supported. For example, one is a positive example and the other is a negative example. You only need to add the class name ",paraId:14},{value:"good",paraId:14},{value:" or ",paraId:14},{value:"bad",paraId:14},{value:" to the corresponding ",paraId:14},{value:"<img />",paraId:14},{value:".",paraId:14}]},51263:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(78788);const n=[{value:"In order to use some components in Markdown more conveniently and enhance the display effect of Markdown, some common components are built into the theme, including the following components:",paraId:0},{value:"Alert",paraId:1},{value:" ",paraId:2},{value:"0.2.5+",paraId:3},{value:"ImagePreview",paraId:4},{value:" ",paraId:2},{value:"0.2.7+",paraId:5}]},86265:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(98367);const n=[{value:"The first version of ",paraId:0,tocIndex:0},{value:"dumi-theme-chaos",paraId:0,tocIndex:0},{value:" has been developed, but it is not yet fully adapted to some features of the Antd Design 5.0 official website. This is a continuous process. If you have any questions, please contact [issues](",paraId:0,tocIndex:0},{value:"https://github",paraId:0,tocIndex:0},{value:" .com/chaos-design/dumi-theme-chaos/issues) form feedback.",paraId:0,tocIndex:0},{value:"It is recommended to use ",paraId:1,tocIndex:2},{value:"pnpm",paraId:1,tocIndex:2},{value:" as a package management tool.",paraId:1,tocIndex:2},{value:"After you clone the dumi-theme-chaos code and use:",paraId:2,tocIndex:2},{value:`$ pnpm install
`,paraId:3},{value:`$ npm install
`,paraId:4},{value:`$ yarn
`,paraId:5},{value:"After installing the dependencies, run the following command to start the development mode.",paraId:6},{value:`$ pnpm run start
`,paraId:7},{value:`$ npm run start
`,paraId:8},{value:`$ yarn run start
`,paraId:9},{value:"Modify ",paraId:10},{value:"/src",paraId:10},{value:" to debug the files in the directory.",paraId:10},{value:"Thanks to the students who have contributed~",paraId:11,tocIndex:3},{value:`
  `,paraId:12,tocIndex:3},{value:`
    `,paraId:12,tocIndex:3},{value:`
  `,paraId:12,tocIndex:3}]},50362:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(37299);const n=[{value:" ",paraId:0,tocIndex:0},{value:" ",paraId:0,tocIndex:0},{value:"dumi-theme-chaos",paraId:1,tocIndex:0},{value:" is a ",paraId:1,tocIndex:0},{value:"dumi",paraId:1,tocIndex:0},{value:" theme package, the theme style refers to Antd Design 5.0 official website. Based on ",paraId:1,tocIndex:0},{value:"dumi",paraId:1,tocIndex:0},{value:" theme development function, deeply customized and developed:",paraId:1,tocIndex:0},{value:"HomePage",paraId:2,tocIndex:0},{value:"Announcement Bar",paraId:2,tocIndex:0},{value:"Navigation",paraId:2,tocIndex:0},{value:"Sidebar",paraId:2,tocIndex:0},{value:"Content",paraId:2,tocIndex:0},{value:"Footer",paraId:2,tocIndex:0},{value:"...",paraId:2,tocIndex:0},{value:"Install using pnpm or npm or yarn",paraId:3,tocIndex:1},{value:`$ pnpm install dumi-theme-chaos
`,paraId:4},{value:`$ npm install dumi-theme-chaos
`,paraId:5},{value:`$ yarn add dumi-theme-chaos
`,paraId:6},{value:"dumi-theme-chaos",paraId:7,tocIndex:2},{value:" is developed based on the ",paraId:7,tocIndex:2},{value:"dumi",paraId:7,tocIndex:2},{value:" theme package convention. After installation, ",paraId:7,tocIndex:2},{value:"dumi",paraId:7,tocIndex:2},{value:" will automatically load the theme package from ",paraId:7,tocIndex:2},{value:"packge.json",paraId:7,tocIndex:2},{value:" without any other configuration. ",paraId:7,tocIndex:2},{value:"dumi-theme-chaos",paraId:7,tocIndex:2},{value:" also supports some specific configuration parameters in order to better adapt to the Antd Design 5.0 official website theme style, go to ",paraId:7,tocIndex:2},{value:"Configuration",paraId:8,tocIndex:2},{value:" for details.",paraId:7,tocIndex:2}]}}]);
