---
group:
  title: Builtins Components
  order: 4
order: 4
category: Components
title: ComponentMeta
description: Component metadata, suitable for component development scenarios.
packageName: \@chaos-design/x
source: https://github.com/chaos-design/dumi-theme-chaos
version: 0.0.1
---

:::warning
The above component metadata and the following examples are for reference only. Please configure according to the actual situation when using.
:::

## Example

<ComponentMeta
  source="https://github.com/chaos-design/dumi-theme-chaos"
  component="ComponentMeta"
  pkg="@chaos-design/x"
  filename="docs/guide/builtins-components-meta.zh-CN.md"
  version="0.0.1"
/>

### Configuration

:::code-group

```md{2-9} [Component.md FrontMatter Configuration]
---
category: Components
title: ComponentMeta
description: Component metadata, suitable for component development scenarios.
packageName: \@chaos-design/x
source: https://github.com/chaos-design/dumi-theme-chaos
version: 0.0.1
---
```

```ts [Component.md Component Configuration]
<ComponentMeta
  source="https://github.com/chaos-design/dumi-theme-chaos"
  component="ComponentMeta"
  pkg="@chaos-design/x"
  filename="docs/guide/builtins-components-meta.zh-CN.md"
  version="0.0.1"
/>
```

:::

### Params

:::info

- Both `pkg` ,`package`, `packageName` is same property，`version` and`tag` is same property。

- When the component package name is defined with `@scope/xx`, using `FrontMatter` requires escaping the `@` symbol.
  :::

| Component Props              | Types  | Default | Optional | Description    |
| ---------------------------- | ------ | ------- | -------- | -------------- |
| pkg(= package = packageName) | string | -       | Y        | 组件包名       |
| source                       | string | -       | N        | 组件源码地址   |
| component                    | string | -       | N        | 组件名称       |
| filename                     | string | -       | N        | 组件文档文件名 |
| version(= tag)               | string | -       | N        | 组件版本号     |
