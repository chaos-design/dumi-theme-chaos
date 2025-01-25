import React from 'react';
import ComponentOverview from '../../../src/builtins/ComponentOverview';

const App: React.FC = () => {
  console.log('listLocale', 123);
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

export default App;
