import React, { useContext } from 'react';
import { Anchor } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import type { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import c from 'classnames';
import { useRouteMeta, useTabMeta } from 'dumi';
import SiteContext from '../SiteContext';

export const useStyle = createStyles(({ token, css }) => {
  const { antCls } = token;

  return {
    anchorToc: css`
      scrollbar-width: thin;
      scrollbar-gutter: stable;
      ${antCls}-anchor {
        ${antCls}-anchor-link-title {
          font-size: ${token.fontSizeSM}px;
        }
      }
    `,
    tocWrapper: css`
      position: fixed;
      top: ${token.headerHeight + token.contentMarginTop - 4}px;
      inset-inline-end: 0;
      width: 148px;
      padding: 0;
      border-radius: ${token.borderRadius}px;
      box-sizing: border-box;
      margin-inline-end: calc(8px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: ${token.purple6};
        &:hover {
          color: ${token.purple5};
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(
          100vh - ${token.headerHeight + token.contentMarginTop + 24}px
        ) !important;
        margin: auto;
        overflow: auto;
        padding: ${token.paddingXXS}px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
    tocBannerWrapper: css`
      top: ${token.headerHeight +
      token.contentMarginTop +
      token.bannerHeight -
      4}px;
    `,
    articleWrapper: css`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: ${token.screenLG}px) {
        & {
          padding: 0 ${token.paddingLG * 2}px;
        }
      }
    `,
    bottomEditContent: css`
      min-width: 200px;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    `,
  };
});

interface DocAnchorProps {
  showDebug?: boolean;
  debugDemos?: string[];
}

interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}

const DocAnchor: React.FC<DocAnchorProps> = ({
  showDebug,
  debugDemos = [],
}) => {
  const { bannerVisible } = useContext(SiteContext);

  const { styles } = useStyle();
  const token = useTheme();
  const meta = useRouteMeta();
  const tab = useTabMeta();

  const renderAnchorItem = (item: AnchorItem): AnchorLinkItemProps => ({
    href: `#${item.id}`,
    title: item.title,
    key: item.id,
    children: item.children
      ?.filter((child) => showDebug || !debugDemos.includes(child.id))
      .map<AnchorLinkItemProps>((child) => ({
        key: child.id,
        href: `#${child.id}`,
        title: (
          <span
            className={c({
              'toc-debug': debugDemos.includes(child.id),
            })}
          >
            {child?.title}
          </span>
        ),
      })),
  });

  const anchorItems = React.useMemo<AnchorItem[]>(
    () =>
      (tab?.toc || meta.toc).reduce<AnchorItem[]>((result, item) => {
        if (item.depth === 2) {
          result.push({ ...item });
        } else if (item.depth === 3) {
          const parent = result[result.length - 1];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push({ ...item });
          }
        }
        return result;
      }, []),
    [tab?.toc, meta.toc],
  );

  if (!meta.frontmatter.toc) {
    return null;
  }

  return (
    <section
      className={c(styles.tocWrapper, bannerVisible && styles.tocBannerWrapper)}
    >
      <Anchor
        affix={false}
        className={styles.anchorToc}
        targetOffset={token.anchorTop}
        showInkInFixed
        items={anchorItems.map<AnchorLinkItemProps>(renderAnchorItem)}
      />
    </section>
  );
};

export default DocAnchor;
