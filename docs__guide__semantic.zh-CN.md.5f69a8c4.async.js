"use strict";(self.webpackChunkdumi_theme_chaos=self.webpackChunkdumi_theme_chaos||[]).push([[2407],{17377:function(c,s,_){_.r(s);var E=_(23198),p=_(98024),a=_(27156),d=_(1589),x=_(12291),m=_(13814),v=_(54804),D=_(11187),P=_(71359),M=_(37998),O=_(52122),y=_(69686),C=_(45955),T=_(67384),B=_(77424),A=_(36864),b=_(64910),f=_(65446),I=_(2683),R=_(51890),L=_(26594),Z=_(6331),W=_(6934),t=_(42993),g=_(74006),K=_(78751),U=_(19171),w=_(72628),k=_(60736),j=_(58081),S=_(19128),o=_(28691),l=_(70194),i=_(75271),e=_(96378);function u(){var h=(0,o.useRouteMeta)(),n=h.texts;return(0,e.tZ)(i.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h1",{id:"demo"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#demo",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Demo")),(0,e.tZ)(o.DumiDemo,{demo:{id:"docs-guide-semantic-demo-_semantic"},previewerProps:{simplify:"true",filename:"docs/guide/_semantic.tsx",pkgDependencyList:{"@commitlint/cli":"^17.6.5","@commitlint/config-conventional":"^17.6.5","@emotion/babel-preset-css-prop":"11.10.0","@types/gtag.js":"^0.0.20","@types/lodash":"^4.14.195","@types/prismjs":"^1.26.4","@types/react":"~18.0.0","@types/react-copy-to-clipboard":"^5.0.7","@umijs/lint":"^4.0.0",chalk:"^5.0.0","cross-env":"^7.0.3",eslint:"^8.23.0",express:"^4.21.2",father:"^4.5.1","father-plugin-dumi-theme":"^1.0.0-rc.1",husky:"^8.0.3","lint-staged":"^13.0.3",prettier:"^3.4.2","prettier-plugin-organize-imports":"^3.0.0","prettier-plugin-packagejson":"^2.2.18",react:"^18.0.0","react-dom":"^18.0.0",stylelint:"^14.9.1",sylvanas:"^0.6.1","@ant-design/colors":"^7.2.0","@ant-design/cssinjs":"1.22.1","@ant-design/fast-color":"^2.0.6","@ant-design/happy-work-theme":"^1.0.0","@ant-design/icons":"5.5.2","@ant-design/v5-patch-for-react-19":"^1.0.2","@babel/runtime":"7.22.3","@codesandbox/sandpack-react":"^2.19.10","@ctrl/tinycolor":"3.6.0","@emotion/css":"11.13.5","@emotion/react":"11.14.0","@emotion/server":"11.11.0","@qixian.cs/github-contributors-list":"^2.0.2","antd-style":"^3.7.1","antd-token-previewer":"2.0.8",classnames:"2.5.1","cross-fetch":"^4.0.0",dayjs:"1.11.13","jsonml-to-react-element":"^1.1.11","jsonml.js":"^0.1.0",lodash:"^4.17.21","lz-string":"^1.5.0",prismjs:"^1.29.0","rc-drawer":"6.2.0","rc-footer":"0.6.8","rc-util":"5.41.0","react-copy-to-clipboard":"^5.1.0","react-intersection-observer":"^9.13.1","scroll-into-view-if-needed":"^3.1.0",semver:"^7.6.3"},jsx:`import React from 'react';
import { Avatar, Card } from 'antd';
import useLocale from '../../.dumi/theme/hooks/useLocale';
import SemanticPreview from '../../../src/components/SemanticPreview';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
const locales = {
  cn: {
    header: '\u8BBE\u7F6E\u5361\u7247\u5934\u90E8\u533A\u57DF',
    body: '\u8BBE\u7F6E\u5361\u7247\u5185\u5BB9\u533A\u57DF',
    extra: '\u8BBE\u7F6E\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF',
    title: '\u8BBE\u7F6E\u5361\u7247\u6807\u9898',
    actions: '\u8BBE\u7F6E\u5361\u7247\u5E95\u90E8\u64CD\u4F5C\u7EC4',
    cover: '\u8BBE\u7F6E\u6807\u9898\u5C01\u9762',
  },
  en: {
    header: 'set header of card',
    body: 'set body of card',
    extra: 'set extra of card',
    title: 'set title of card',
    actions: 'set actions of card',
    cover: 'set cover of card',
  },
};
const BlockCard = (props) => {
  const divRef = React.useRef(null);
  return (
    <div
      ref={divRef}
      style={{
        position: 'absolute',
        inset: 0,
      }}
    >
      <Card
        {...props}
        title="Card title"
        extra="More"
        style={{
          width: 300,
        }}
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
    </div>
  );
};
const App = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      semantics={[
        {
          name: 'header',
          desc: locale.header,
          version: '5.14.0',
        },
        {
          name: 'title',
          desc: locale.title,
          version: '5.14.0',
        },
        {
          name: 'extra',
          desc: locale.extra,
          version: '5.14.0',
        },
        {
          name: 'cover',
          desc: locale.cover,
          version: '5.14.0',
        },
        {
          name: 'body',
          desc: locale.body,
          version: '5.14.0',
        },
        {
          name: 'actions',
          desc: locale.actions,
          version: '5.14.0',
        },
      ]}
    >
      <BlockCard>
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card Meta title"
          description="This is the description"
        />
      </BlockCard>
    </SemanticPreview>
  );
};
export default App;
`}}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"\u5173\u4E8E\u8BED\u4E49\u5316-dom"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E\u8BED\u4E49\u5316-dom",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5173\u4E8E\u8BED\u4E49\u5316 DOM")),(0,e.tZ)(d.Z,{type:"info"},(0,e.tZ)("p",null,n[0].value)),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h3",{id:"\u8BBE\u8BA1\u601D\u8DEF"},(0,e.tZ)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BBE\u8BA1\u601D\u8DEF",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u601D\u8DEF"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[1].value),n[2].value,(0,e.tZ)("code",null,n[3].value),n[4].value,(0,e.tZ)("code",null,n[5].value),n[6].value,(0,e.tZ)("code",null,n[7].value),n[8].value,(0,e.tZ)("code",null,n[9].value),n[10].value,(0,e.tZ)("code",null,n[11].value),n[12].value,(0,e.tZ)("code",null,n[13].value),n[14].value,(0,e.tZ)("code",null,n[15].value),n[16].value),(0,e.tZ)("p",null,n[17].value,(0,e.tZ)("code",null,n[18].value),n[19].value)),(0,e.tZ)(a.Z,null,(0,e.tZ)(m.Z,{title:"SemanticsPreview.tsx",lang:"ts"},n[20].value),(0,e.tZ)(m.Z,{title:"CardComponent.tsx",lang:"ts"},n[21].value)))}function r(){return(0,e.tZ)(o.DumiPage,null,(0,e.tZ)(i.Suspense,{fallback:(0,e.tZ)(l.Z,null)},(0,e.tZ)(u,null)))}s.default=r}}]);
