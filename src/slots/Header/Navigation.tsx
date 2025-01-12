import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { createStyles, css } from 'antd-style';
import { FormattedMessage, useFullSidebarData, useLocale, useLocation, useNavData, useSiteData } from 'dumi';

import Link from '../../common/Link';
import * as utils from '../../utils';
import type { SharedProps } from './interface';
import { useThemeGithubConfig } from '../../hooks/useUserThemeConfig';
import { getMoreLinksGroup } from './More';
import useLocaleValue from '../../hooks/useLocaleValue';
import { getTargetLocalePath, isExternalLinks } from '../../utils';
import { INavItem } from 'dumi/dist/client/theme-api/types';

// ============================= Style =============================
const useStyle = createStyles(({ token }) => {
  const { antCls, iconCls, fontFamily, fontSize, headerHeight, colorPrimary } = token;

  return {
    nav: css`
      height: 100%;
      font-size: ${fontSize}px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      border: 0 !important;

      &${antCls}-menu-horizontal {
        border-bottom: none;

        & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
          min-width: ${40 + 12 * 2}px;
          height: ${headerHeight}px;
          padding-inline-end: ${token.paddingSM}px;
          padding-inline-start: ${token.paddingSM}px;
          line-height: ${headerHeight}px;
        }

        & ${antCls}-menu-submenu-title ${iconCls} {
          margin: 0;
        }

        & > ${antCls}-menu-item-selected {
          a {
            color: ${colorPrimary};
          }
        }
      }

      & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
        text-align: center;
      }
    `,
  };
});

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  responsive: null | 'narrow' | 'crowded';
  directionText: string;
  onLangChange: () => void;
  onDirectionChange: () => void;
}


const HeaderNavigation: React.FC<NavigationProps> = (props) => {
  const { isZhCN, isMobile, responsive, directionText, onLangChange, onDirectionChange } = props;
  const { github } = useThemeGithubConfig();
  const { pathname, search } = useLocation();
  const { locales } = useSiteData();
  // 统一使用 themeConfig.nav，使用 useNavData，当存在自定义 pages 时，会导致 nav 混乱
  const navList = useNavData();
  const locale = useLocale();
  const moreLinks = useLocaleValue('moreLinks');

  const sidebarData = useFullSidebarData();
  const blogList = sidebarData['/docs/blog']?.[0]?.children || [];

  const { styles } = useStyle();

  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname.split('/').filter(Boolean).slice(0, -1).join('/');
  let activeMenuItem = `/${module || 'home'}`;

  if (pathname.startsWith('/changelog')) {
    activeMenuItem = '/docs/react';
  } else if (pathname.startsWith('/docs/resources')) {
    activeMenuItem = '/docs/resources';
  }

  const createMenuItems = (navs: INavItem[]) => {
    return navs.map((navItem: INavItem) => {
      const linkKeyValue = (navItem.link ?? '').split('/').slice(0, 2).join('/');

      return {
        // eslint-disable-next-line no-nested-ternary
        label: navItem.children ? (
          navItem.title
        ) : isExternalLinks(navItem.link) ? (
          <a href={`${navItem.link}${search}`} target="_blank" rel="noreferrer">
            {navItem.title}
          </a>
        ) : (
          <Link to={`${navItem.link}${search}`}>{navItem.title}</Link>
        ),
        key: isExternalLinks(navItem.link) ? navItem.link : linkKeyValue,
        children: navItem.children ? createMenuItems(navItem.children) : null
      };
    });
  };

  const menuItems: MenuProps['items'] = createMenuItems(navList);

  // 获取小屏幕下多语言导航栏节点
  const getLangNode = React.useCallback(() => {
    if (locales.length < 2) {
      return null;
    }

    if (locales.length === 2) {
      const nextLang = locales.filter((item) => item.id !== locale?.id)[0];

      const nextPath = getTargetLocalePath({
        pathname,
        current: locale,
        target: nextLang
      });
      return {
        label: (
          <a rel="noopener noreferrer" href={nextPath}>
            {nextLang.name}
          </a>
        ),
        key: nextLang.id
      };
    }
    return {
      label: <span>{locale.name}</span>,
      key: 'multi-lang',
      children: locales
        .filter((item) => item.id !== locale.id)
        .map((item) => {
          const nextPath = getTargetLocalePath({
            pathname,
            current: locale,
            target: item
          });
          return {
            label: (
              <a rel="noopener noreferrer" href={nextPath}>
                {item.name}
              </a>
            ),
            key: item.id
          };
        })
    };
  }, [locale, locales]);

  let additional: MenuProps['items'] = [];
  const additionalItems: MenuProps['items'] = [
    github
      ? {
        label: (
          <a rel="noopener noreferrer" href={github} target="_blank">
            GitHub
          </a>
        ),
        key: 'github'
      }
      : null,
    getLangNode(),
    {
      label: <FormattedMessage id="app.header.lang" />,
      onClick: onLangChange,
      key: 'switch-lang',
    },
    {
      label: directionText,
      onClick: onDirectionChange,
      key: 'switch-direction',
    },
    ...(getMoreLinksGroup(moreLinks) || [])
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = [
      {
        label: <MenuOutlined />,
        key: 'additional',
        children: [...additionalItems],
      },
    ];
  }

  const items: MenuProps['items'] = [
    ...(menuItems ?? []),
    blogList.length
      ? {
        label: (
          <Link
            to={utils.getLocalizedPathname(
              blogList.sort((a, b) => (a.frontmatter?.date > b.frontmatter?.date ? -1 : 1))[0]
                .link,
              isZhCN,
              search,
            )}
          >
            {(locale as any)?.blog}
          </Link>
        ),
        key: 'docs/blog',
      }
      : null,
    ...(additional ?? []),
  ].filter(Boolean);

  return (
    <Menu
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      className={styles.nav}
      disabledOverflow
      items={items}
    />
  );
};

export default HeaderNavigation;
