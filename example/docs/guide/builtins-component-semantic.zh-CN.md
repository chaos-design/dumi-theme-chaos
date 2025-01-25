---
group:
  title: 内置组件
  order: 4
order: 4
title: 语义化 DOM
description: 组件配置对应位置提示, 适用于组件开发的场景。
---

# Demo

<code src="./_component_semantic.tsx" simplify="true"></code>

## 关于语义化 DOM

:::info
请务必遵循下面规范实现组件，否则无法生效, 了解设计思路即可。
:::

### 设计思路

`SemanticsPreview` 通过属性`semantics` 配置对应的属性 `header`、`body`、`extra`、`title`、`actions`、`cover` 会被渲染到组件对应的位置。

即，组件需要接受通过 `SemanticsPreview` 配置的类名

:::code-group

```ts [SemanticsPreview.tsx]
const Preview = () => {
  return (
    <SemanticPreview
      semantics={[
        { name: 'header', desc: locale.header, version: '5.14.0' },
        { name: 'title', desc: locale.title, version: '5.14.0' },
        { name: 'extra', desc: locale.extra, version: '5.14.0' },
        { name: 'cover', desc: locale.cover, version: '5.14.0' },
        { name: 'body', desc: locale.body, version: '5.14.0' },
        { name: 'actions', desc: locale.actions, version: '5.14.0' },
      ]}
    >
      <Card
        {...props}
        title="Card title"
        extra="More"
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      />
    </SemanticPreview>
  );
};
```

```ts [CardComponent.tsx]
const Card = ({
  classNames,
}: {
  classNames?: {
    header?: string;
    body?: string;
    extra?: string;
    title?: string;
    actions?: string;
    cover?: string;
  };
}) => {
  return (
    <div className={className}>
      <div className={c('header', classNames?.header)}>header</div>
      <div className={c('body')}>b, classNames?.body</div>
      <div className={c('extra', classNames?.extra)}>extra</div>
      <div className={c('title', classNames?.title)}>title</div>
      <div className={c('actions', classNames?.actions)}>actions</div>
      <div className={c('cover', classNames?.cover)}>cover</div>
    </div>
  );
};
```

:::
