import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import SourceCode, { ISourceCodeProps } from 'dumi/theme-default/builtins/SourceCode';
import toArray from 'rc-util/lib/Children/toArray';
import React from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;
type Item = Unpacked<Required<TabsProps>['items']>;

function CodeGroup(props: React.PropsWithChildren<unknown>) {
  const { children } = props;

  const usefulChildren = toArray(children).filter(
    (child) =>
      typeof child === 'object' &&
      typeof child.type === 'function' &&
      child.type?.name === SourceCode.name,
  ) as React.ReactElement<ISourceCodeProps>[];

  const items = usefulChildren.map<Item>((child, idx) => {
    const { lang, title } = child.props ?? {};

    return {
      key: String(child.key ?? idx),
      label: title || lang || 'txt', // fallback to txt if no lang and title
      children: child,
      icon: <span>123</span>
    };
  });

  return <Tabs className="dumi-default-code-group" items={items} />;
}

export default CodeGroup;