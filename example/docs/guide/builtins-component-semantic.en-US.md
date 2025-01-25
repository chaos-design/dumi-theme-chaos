---
group:
  title: Builtins Components
  order: 4
order: 4
title: Semantics DOM
description: Component configuration corresponding position prompt, suitable for component development scenarios.
---

## Example

<code src="./_component_semantic.tsx" simplify="true"></code>

## Semantics DOM

:::info
Please follow the specifications below to implement the component, otherwise it will not take effect, understanding the design concept is sufficient.
:::

### Principle

`SemanticsPreview` configures the attributes `header`, `body`, `extra`, `title`, `actions`, and `cover` using the semantics attribute, which will determine how they are displayed within the components.

Therefore, the component needs to accept the class name configured through `SemanticsPreview`.

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
