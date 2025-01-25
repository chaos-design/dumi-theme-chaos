---
group: 内置组件
title: 警告提示
order: 1
---

## 警告提示

警告提示，展现需要关注的信息，使用方法同 `antd` [Alert](https://ant.design/components/alert-cn) 组件，该组件支持 `type`、`closable`以及`showIcon`参数，类型与之保持一致。

```markdown
<Alert>
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
```

<Alert>
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

## Markdown 语法

:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::

### Code Block

```md
:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::
```
