---
nav:
  title: 配置
title: 基础
order: 1
---

`dumi-theme-chaos` 为了更好地适配 antd v5 官网主题风格，增加了一些特有字段，并将其置于 `dumi` 主题配置项 `themeConfig` 字段中，具体配置字段如下：

<Alert showIcon>可通过主题包内部 `defineThemeConfig` 方法获取更好的提示：</Alert>

```ts
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chaos/dist/defineThemeConfig';

export default defineConfig({
  themeConfig: defineThemeConfig({
    title: 'Chaos Design Doc'
  })
});
```

## 基础配置项

### github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示，同时兼容官方`socialLinks.github`配置。

### bannerConfig

- 类型：`IBannerConfig`
- 默认值：`bannerConfigDefault`

```ts
export interface IBannerConfig {
  /** 是否展示头部 banner 背景 */
  showBanner?: boolean;
  /** banner 图片地址 */
  bannerImgUrl?: string;
  /** banner 移动端图片地址 */
  bannerMobileImgUrl?: string;
}

const bannerConfigDefault: IBannerConfig = {
  showBanner: true,
  bannerMobileImgUrl: 'xx', // antd v5 官网自带 banner 图
  bannerImgUrl: 'xx' // antd v5 官网自带 banner 图
};
```

首页头部 banner 图配置选项

### localesEnhance

- 类型：`ILocaleEnhance[]`
- 默认值：`dumi-theme-chaos`

```ts
interface ILocaleEnhance {
  /** 同 themeConfig 中 locales 项中的 id */
  id: string;
  /** 当多语言只有两项时用于展示切换的前缀 */
  switchPrefix: string;
}
```

导航头部多语言切换前缀图标展示，只适用于两种多语言的情况。

### title

- 类型：`string | Record<string, string>`
- 默认值：`Dumi Theme AntD`

```ts
// 多语言时配置对象，key 为语言名
title: {
  'zh-CN': 'Chaos Design Doc',
  'en-US': 'Chaos Design Doc'
}
```

配置首页首屏区域的大标题。

### theme <Badge>0.0.1+</Badge>

- 类型：`Omit<ThemeConfig, 'algorithm'>`
- 默认值：`undefined`

```ts
theme: {
  token: {
    colorPrimary: '#00b96b',
  },
}
```

用于定制 antd 主题样式，同 `ConfigProvider` 中 `theme`，删除其预设算法`algorithm`属性，预设算法通过页面主题样式按钮修改。

### description

- 类型：`string | Record<string, string>`
- 默认值：`null`

配置首页首屏区域的简介文字。

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

在导航栏中显示当前文档版本或者多文档本下拉选择框，默认第一个属性为当前文档版本。

### announcementBar <Badge>0.0.1+</Badge>

- 类型：`Omit<ThemeConfig, 'AnnouncementBarProps'>`
- 默认值：`undefined`

```ts
announcementBar: {
  id: "announcementBar", // 新公告id
  type: "info", // 类型，可选 info, success, warning, error
  align: "left", // 对齐方式，可选 left, center, right
  message: "🎉 欢迎使用 dumi-theme-chaos", // 内容
  description: "chaos description", // 描述
  backgroundColor: '#69b1ff', // 背景颜色
  textColor: '#fff', // 文字颜色
  showIcon: false, // 是否展示 icon
  closable: true, // 是否可关闭
}
```

用于定制站点公告。

### footerLinks <Badge>0.0.1+</Badge>

- 类型：`FooterColumn[] | Record<string, FooterColumn[]>`
- 默认值：`null`

`FooterColumn` 为 `rc-footer` 组件 `columns`属性 type 值，[点击查看详情](https://react-component.github.io/footer/#column)。

<Alert type="info">
  注： <code>FooterColumn</code> 中 <code>icon</code> 字段为 <code>ReactNode</code>，由于实际使用时需将 dumirc.ts 中<code>themeConfig</code> 字段序列化，但 <code>ReactNode</code> 类型不能很好支持序列化，因此如需设置该值，直接设置为线上图片地址即可。
</Alert>

```ts
// 单语言时配置数组即可
footerLinks: [
  {
    title: '更多产品',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
    items: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
        title: '语雀',
        url: 'https://yuque.com',
        description: '构建你的数字花园',
        openExternal: true
      }
    ]
  }
]

// 多语言时配置对象，key 为语言名
footerLinks: {
  'zh-CN': [],
  'en-US': [],
},
```

footer 上方友情链接模块，例如更多产品、社区链接等。

### moreLinks

- 类型：`IMoreLink[] | Record<string, IMoreLink[]>`
- 默认值：`null`

```ts
interface IMoreLink {
  /** 链接文字描述 */
  text: string;
  /** 链接 */
  link: string;
}
// 单语言时配置数组即可
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
// 多语言时配置对象，key 为语言名
moreLinks: {
  'zh-CN': [],
  'en-US': [],
},
```

在导航栏中配置更多生态系统链接。

### rtl

- 类型：`boolean`
- 默认值：`true`

是否展示 rtl 导航按钮，默认展示。

### actions

- 类型：`IAction[] | Record<string, IAction[]>`
- 默认值：`null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
  /** 按钮类型 */
  type?: 'primary' | 'default';
}

// 单语言时配置数组即可
actions: [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }]
// 多语言时配置对象，key 为语言名
actions: {
  'zh-CN': [{ type: 'primary', text: '开始使用', link: '/guide/introduce' }],
  'en-US': [{ type: 'primary', text: 'Start', link: '/guide/introduce-en' }],
},
```

配置首页首屏区域的操作按钮。

### features

- 类型：`IFeature[] | Record<string, IFeature[]>`
- 默认值：`null`

```ts
interface IFeature {
  /** 特性名称 */
  title: string;
  /** 特性具体描述 */
  details: string;
}
// 单语言时配置数组即可
features: [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
// 多语言时配置对象，key 为语言名
features: {
  'zh-CN': [{ title: '开箱即用'}, { details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}],
  'en-US': [{ title: 'Simple Use'}, { details: 'Simple access, installation and use, fully integrated into Ant Design 5.0 style.'}],
},
```

配置后该页面将会以首页形式呈现，用于每行 3 个的形式展示组件库的特性。

### sidebarGroupModePath

- 类型：`Array<string> | true`
- 默认值：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      // sidebarGroupModePath: true, // 当为 true 时，全部都以分组形式展示
      sidebarGroupModePath: [
        // 匹配以 /config 开头的路由
        '/config'
      ]
    }
  }
};
```

左侧导航栏是否需要作为分组处理，参考 antd [menuitemgrouptype][antd-menuitemgrouptype-url]。

### sidebarEnhance

- 类型：`Record<string, SidebarEnhanceItems>`
- 默认值：`undefined`

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

由于 dumi 暂只支持两级侧边栏 [issues](https://github.com/umijs/dumi/issues/748)，如果定制需求需要支持三级侧边栏或者想完全定制侧边栏展示的，可以使用该参数，配置参数参考 ant-design menu 组件的 [items 属性](https://ant.design/components/menu-cn#itemtype)。

## 扩展配置项

### loading

- 类型：`ILoading`
- 默认值：`undefined`

```ts
interface ILoading {
  skeleton?: Array<string>;
}
```

当前页面的加载状态，由于默认启用路由按需加载，所以切换路由时会有 loading 的过程，`dumi-theme-chaos` 提供了常见的两种 loading 形式：**Skeleton** 以及 **Spin**，可对不同的路由设置对应的加载形式，默认 spin 形式。

<Alert type="warning">
  由于 dumi 没有提供 slot 的形式来支持加载组件，因此首先需要手动将 <code>dumi-theme-chaos</code> 中加载组件引入到 <code>.dumi/loading.(js|jsx|ts|tsx)</code> 中
</Alert>

```ts
/* .dumi/loading.tsx */
export { default } from 'dumi-theme-chaos/loading';
```

`0.3.1`版本后引入方式：

```ts
/* .dumi/loading.tsx */
export { Loading as default } from 'dumi-theme-chaos';
```

配置 loading 值

```ts
/* .dumirc.ts */
export default {
  themeConfig: {
    loading: {
      skeleton: ['/guide', '/config'] /* /guide 以及 /config 开头的路由加载组件为 skeleton 形式 */
    }
  }
};
```

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype
