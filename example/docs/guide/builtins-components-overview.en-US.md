---
group:
  title: Builtins Components
order: 4
title: ComponentOverview
description: Component overview diagram, suitable for component development scenarios.
---

## Example

### Official

<ComponentOverview></ComponentOverview>

### Custom Additions

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
          subtitle: 'Table Description',
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

## How to use

### Principle

Automatically parse the components configured as `group` in the current document and generate an overview of the components.

### Document Configuration

You need to configure the `FrontMatter` of the `Component` document as follows.

```md {2,3,7,8}
---
group:
  title: Builtins Components
title: ComponentOverview
description: Component overview diagram, suitable for component development scenarios.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VcjGQLSrYdcAAAAAAAAAAAAADrJ8AQ/original
---
```

The `cover` and `coverDark` are optional configurations for the cover of the component overview. The default values are as follows.

```
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*uae3QbkNCm8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*VcjGQLSrYdcAAAAAAAAAAAAADrJ8AQ/original
```

###

### How to use in Markdown

#### Simple Usage

```md
<ComponentOverview></ComponentOverview>
```

#### Custom Component

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
