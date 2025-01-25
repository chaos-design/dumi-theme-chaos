---
group:
  title: 内置组件
order: 4
title: 组件总览
description: 组件总览示意, 适用于组件开发的场景。
---

## 示例

### 简单使用

<ComponentOverview></ComponentOverview>

### 自定义增加

```tsx
/**
 * inline: true
 */

import React from 'react';
import ComponentOverview from '../../../src/builtins/ComponentOverview';

export default () => {
  return (
    <ComponentOverview
      list={[
        {
          cover:
            'https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg',
          link: 'https://procomponents.ant.design/components/table',
          subtitle: '高级表格',
          title: 'ProTable',
          tag: 'https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg',
        },
      ]}
      listLocale={{
        'zh-CN': '其他',
        'en-US': 'Others',
      }}
    />
  );
};
```

## 如何使用

### 原理

自动解析当前文档中是 `group` 配置的组件，自动生成组件总览。

### 文档配置

需要 `Component` 文档的对 `FrontMatter` 进行如下的配置

```md {2,3,7,8}
---
group:
  title: 内置组件
title: ComponentOverview
subtitle: 组件总览
description: 组件总览示意, 适用于组件开发的场景。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VcjGQLSrYdcAAAAAAAAAAAAADrJ8AQ/original
---
```

其中 `cover` 与 `coverDark` 为可选配置，用于组件总览的封面。默认值如下

```
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VcjGQLSrYdcAAAAAAAAAAAAADrJ8AQ/original
```

###

### Markdown如何使用

#### 简单使用

```ts
<ComponentOverview></ComponentOverview>
```

#### 自定义组件

:::code-group

```ts [CustomComponentOverview.tsx]
import React from 'react';
import { ComponentOverview } from 'dumi-theme-chaos';

export default () => {
  return (
    <ComponentOverview
      list={[
        {
          cover: 'https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg',
          link: 'https://procomponents.ant.design/components/table',
          subtitle: '高级表格',
          title: 'ProTable',
          tag: 'https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg',
        }
      ]}
      listLocale={{
        'zh-CN': '其他',
        'en-US': 'Others',
      }}
    />
  );
};
```

```md [CustomComponentOverview.md]
<CustomComponentOverview></CustomComponentOverview>
```

:::
