---
nav:
  title: config
title: Base
order: 1
---

`dumi-theme-chaos` In order to better adapt to the theme style of the antd v5 official website, some unique fields have been added and placed in the `themeConfig` field of the `dumi` theme configuration item. The specific configuration fields are as follows:

<Alert showIcon> You can get better prompts through the `defineThemeConfig` method inside the theme package:</Alert>

```ts
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chaos/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    title: 'Chaos Design Doc'
  })
});
```

## Basic Configuration

### github

- type：`string`
- default：`null`

The Github icon link in the navigation bar. If this field is not configured, it will not be displayed, and it is compatible with the official `socialLinks.github` configuration.

### bannerConfig

- type：`IBannerConfig`
- default：`bannerConfigDefault`

```ts
export interface IBannerConfig {
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
```

Home page header banner image configuration options

### localesEnhance

- type：`ILocaleEnhance[]`
- default：`dumi-theme-chaos`

```ts
interface ILocaleEnhance {
  /** Same as the id in the locales item in themeConfig */
  id: string;
  /** The prefix used to display switching when there are only two items in multiple languages */
  switchPrefix: string;
}
```

The display of the multi-language switching prefix icon in the navigation header is only applicable to two multi-language situations.

### title

- type：`string | Record<string, string>`
- default：`Dumi Theme AntD`

```ts
// multi-language configuration object, the key is the language name
title: {
  'zh-CN': 'Chaos Design Doc',
  'en-US': 'Chaos Design Doc'
}
```

Configure the title of the first screen area on the home page.

### theme <Badge>0.0.1+</Badge>

- type：`Omit<ThemeConfig, 'algorithm'>`
- default：`undefined`

```ts
theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
```

It is used to customize antd theme style, same as `theme` in `ConfigProvider`, delete its preset algorithm `algorithm` attribute, and the preset algorithm can be modified through the page theme style button.

### description

- type：`string | Record<string, string>`
- default：`null`

Configure the introduction text of the first screen area on the home page.

### docVersions

- 类型：`IDocVersion`
- 默认值：`null`

```ts
interface IDocVersion {
  [propName: string]: string;
}
// .dumi.ts
docVersions: {
  '1.0.0': '',
  '0.x.x': 'http://xxxx.com'
}
```

Display the current document version or multi-document drop-down selection box in the navigation bar, and the default first attribute is the current document version.

### announcementBar <Badge>0.0.1+</Badge>

- Type: `Omit<ThemeConfig, 'AnnouncementBarProps'>`
- Default: `undefined`

```ts
announcementBar: {
  id: "announcementBar", // update announcementBar id
  type: "info", // bar type, options info, success, warning, error
  align: "left", // align, options left, center right
  message: "🎉 Welcome dumi-theme-chaos", // message
  description: "chaos description", // description
  backgroundColor: '#69b1ff', // background color
  textColor: '#fff', // text color
  showIcon: false, // show icon
  closable: true, // is closable
}
```

Site announcement bar.


### footerLinks <Badge>0.0.1+</Badge>

- Type: `FooterColumn[] | Record<string, FooterColumn[]>`
- Default: `null`

`FooterColumn` is the `rc-footer` component `columns` attribute type value, [click to view details](https://react-component.github.io/footer/#column).

<Alert type="info">
   Note: The <code>icon</code> field in <code>FooterColumn</code> is <code>ReactNode</code>, because the <code>themeConfig</code> field sequence in dumirc.ts needs to be used in actual use However, the <code>ReactNode</code> type does not support serialization very well, so if you need to set this value, you can directly set it to the online image address.
</Alert>

```ts
// Just configure the array for single language
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
```

The friendly link module at the top of footer, such as more products, community links, etc.

### moreLinks

- 类型：`IMoreLink[] | Record<string, IMoreLink[]>`
- 默认值：`null`

```ts
interface IMoreLink {
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
```

Configure more ecosystem links in the navigation bar.

### rtl

- type：`boolean`
- default：`true`

Whether to display the rtl navigation button, it is displayed by default.

### actions

- type：`IAction[] | Record<string, IAction[]>`
- default：`null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
}

// Just configure the array for single language
actions: [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }]
// Multi-language configuration object, the key is the language name
actions: {
  'zh-CN': [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
```

Configure the operation buttons in the first screen area of the home page.

### features

- type：`IFeature[] | Record<string, IFeature[]>`
- default：`null`

```ts
interface IFeature {
  /** title */
  title: string;
  /** detail */
  details: string;
}
// Just configure the array for single language
features: [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
// Multi-language configuration object, the key is the language name
features: {
  'zh-CN': [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
```

After configuration, the page will be presented as the homepage, used to display the features of the component library in the form of 3 per row.

### sidebarGroupModePath

- type：`Array<string> | true`
- default：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // when true, all routes will be treated as a group
      sidebarGroupModePath: [
        // Matches routes starting with `/config`
        '/config'
      ]
    }
  }
};
```

Whether the left navigation bar needs to be treated as a group, please refer to antd [menuitemgrouptype][antd-menuitemgrouptype-url].

### sidebarEnhance

- type：`Record<string, SidebarEnhanceItems>`
- default：`undefined`

```ts
export default {
  themeConfig: {
    sidebarEnhance: {
      '/welcome': [
        {
          title: '快速开始',
          type: 'group',
          children: [
            {
              // 支持多层级
              title: '安装',
              children: [
                '/welcome/getting-started/installation', // 支持仅填写链接，title 自动根据 `# xxx` 生成
                '/welcome/getting-started/installation/docker'
              ]
            },
            {
              title: '升级',
              children: [
                '/welcome/getting-started/upgrading',
                '/welcome/getting-started/upgrading/docker-compose'
              ]
            }
          ]
        },
        // 支持对象的方式
        {
          title: '更新记录',
          link: 'https://github.com/xx/xx/changelog.md'
        }
      ]
    }
  }
};
```

Since dumi only supports two-level sidebar [issues](https://github.com/umijs/dumi/issues/748), if the customization needs need to support three-level sidebar or want to fully customize the sidebar display , you can use this parameter. For configuration parameters, refer to the [items attribute](https://ant.design/components/menu-cn#itemtype) of the ant-design menu component.

## Extended configuration

### loading

- type: `ILoading`.
- default: `undefined`

```ts
interface ILoading {
  skeleton?: Array<string>;
}
```

In the loading status of the current page, routing is enabled on demand by default, so there will be a loading process when switching routes. `dumi-theme-chaos` provides two common forms of loading: **Skeleton** and **spin**, and the corresponding loading forms can be set for different routes, with the default Spin form.

<Alert type="warning">
Because dumi does not provide the form of slot to support loading components, it is necessary to manually import the loading components in <code>dumi-theme-chaos</code > into <code>.dumi/loading.(js|jsx|ts|tsx)</code > first.
</Alert>

```ts
/* .dumi/loading.tsx */
export { default } from 'dumi-theme-chaos/loading';
```

The import method after `0.3.1` version:

```ts
/* .dumi/loading.tsx */
export { Loading as default } from 'dumi-theme-chaos';
```

Configure the loading value

```ts
/* .dumirc.ts */
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
```

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
