---
group: Builtins Components
title: Alert
order: 1
---

## Alert Component

Prompt component, showing the information that needs attention, using the same method as the `antd` [Alert](https://ant.design/components/alert-cn) component, which supports `type`, `closable` and `showIcon` parameters , with the same type.

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

## Markdown

:::info{title=Custom&nbsp;Title}
Normal Text
:::

:::success
Success Text
:::

:::warning
Warning Text
:::

:::error
Error Text
:::

### Code Block

```md
:::info{title=Custom&nbsp;Title}
Normal Text
:::

:::success
Success Text
:::

:::warning
Warning Text
:::

:::error
Error Text
:::
```
