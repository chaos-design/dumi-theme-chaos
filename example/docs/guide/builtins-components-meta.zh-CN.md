---
group:
  title: 内置组件
  order: 4
order: 4
category: Components
title: ComponentMeta
subtitle: 组件元数据
description: 组件元数据, 适用于组件开发的场景。
packageName: \@chaos-design/x
source: https://github.com/chaos-design/dumi-theme-chaos
version: 0.0.1
---

:::warning
上述👆🏻组件元数据数据和下述👇🏻的示例仅作为示例，实际使用时请根据实际情况进行配置。
:::

## 示例

<ComponentMeta
  source="https://github.com/chaos-design/dumi-theme-chaos"
  component="ComponentMeta"
  pkg="@chaos-design/x"
  filename="docs/guide/builtins-components-meta.zh-CN.md"
  version="0.0.1"
/>

### 配置

:::code-group

```md{2-9} [Component.md FrontMatter配置]
---
category: Components
title: ComponentMeta
subtitle: 组件元数据
description: 组件元数据, 适用于组件开发的场景。
packageName: \@chaos-design/x
source: https://github.com/chaos-design/dumi-theme-chaos
filename: docs/guide/builtins-components-meta.zh-CN.md
source: https://github.com/chaos-design/dumi-theme-chaos
version: 0.0.1
---
```

```ts [Component.md 组件配置]
<ComponentMeta
  source="https://github.com/chaos-design/dumi-theme-chaos"
  component="ComponentMeta"
  pkg="@chaos-design/x"
  filename="docs/guide/builtins-components-meta.zh-CN.md"
  version="0.0.1"
/>
```

:::

### 属性

:::info

- `pkg`、`package`、`packageName` 是同一个属性，`version`、`tag` 是同一个属性。

- 组件包名如有 `@scope/xx` 定义的时候，使用 `FrontMatter` 是需要将 `@` 进行转义
  :::

| 属性                         | 类型   | 默认值 | 必填 | 说明           |
| ---------------------------- | ------ | ------ | ---- | -------------- |
| pkg(= package = packageName) | string | -      | 是   | 组件包名       |
| source                       | string | -      | 否   | 组件源码地址   |
| component                    | string | -      | 否   | 组件名称       |
| filename                     | string | -      | 否   | 组件文档文件名 |
| version(= tag)               | string | -      | 否   | 组件版本号     |
