import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Alert, Col, ConfigProvider, Popover, Row, Select } from 'antd';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useLocation, useSiteData } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';

import useLocale from '../../hooks/useLocale';
import DirectionIcon from '../../icons/DirectionIcon';
import { ANT_DESIGN_NOT_SHOW_BANNER } from '../../layouts/GlobalLayout';
import * as utils from '../../utils';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import type { SharedProps } from './interface';
import Logo from './Logo';
import Navigation from './Navigation';
import SwitchBtn from './SwitchBtn';
import More from './More';
import HeaderExtra from './HeaderExtra';
import AnnouncementBar from './AnnouncementBar';
import useUserThemeConfig from '../../hooks/useUserThemeConfig';
import LangSwitch from '../LangSwitch';
import RtlSwitch from '../RtlSwitch';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

const useStyle = createStyles(({ token, css }) => {
  const searchIconColor = '#ced4d9';
  return {
    header: css`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      // background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};
      backdrop-filter: blur(8px);
      background-color: rgba(248, 248, 248, 0.4);

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        // border-inline-start: 1px solid rgba(0, 0, 0, 0.06);
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 8px;

        > svg {
          width: 18px;
          inset-inline-start: 8px;
          fill: ${searchIconColor};
        }

        > input {
          height: 36px;
          border: 1px solid transparent;
          min-width: 240px;
          max-width: calc(100vw - 768px);
          padding-inline-start: 32px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.03);

          &:focus {
            box-shadow: none;
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid ${token.colorPrimary};
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          // color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: ${token.borderRadiusSM}px;
          // position: static;
          // top: unset;
          // transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: ${token.paddingSM}px;
          inset-inline-end: unset;
          z-index: 1;
          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
          & > section {
            scrollbar-width: thin;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
    searchBarContainer: css`
      display: inline-flex;
      align-items: center;
      flex: auto !important;
      margin: 0;
      border-radius: inherit;
      transition: all 0.2s;
    `,
    searchBar: css`
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 8px;
    `,
    menuCol: css`
      display: flex;
      align-items: center;
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      flex: 1;
      margin: 0;
      column-gap: ${token.paddingSM}px;
      padding-inline-end: ${token.padding}px;

      > * {
        flex: none;
        margin: 0;
      }
    `,
    dataDirectionIcon: css`
      width: 20px;
    `,
    popoverMenu: {
      width: 300,
      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
    banner: css`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `,
    link: css`
      margin-inline-start: 10px;
      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        margin-inline-start: 0;
      }
    `,
    versionSelect: css`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-gutter: stable;
        }
      }
    `,
  };
});

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

// ================================= Header =================================
const Header: React.FC = () => {
  const { pkg } = useSiteData();

  const themeConfig = useUserThemeConfig();
  const [headerState, setHeaderState] = useState<HeaderState>({
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  });
  const { direction, isMobile, updateSiteConfig } =
    useContext<SiteContextProps>(SiteContext);

  const pingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const { pathname, search } = location;

  const { styles } = useStyle();

  const handleHideMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: false }));
  }, []);

  const onWindowResize = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, windowWidth: window?.innerWidth }));
  }, []);

  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState((prev) => ({ ...prev, menuVisible: visible }));
  }, []);

  // const onDirectionChange = () => {
  //   updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  // };

  useEffect(() => {
    handleHideMenu();
  }, [location]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {};
    }

    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (pingTimer.current) {
        clearTimeout(pingTimer.current);
      }
    };
  }, []);

  const handleVersionChange = useCallback((url: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    const currentUrl = window.location.href;

    // Mirror url must have `/`, we add this for compatible
    const urlObj = new URL(currentUrl.replace(window.location.origin, url));
    window.location.href = urlObj.href.replace(/\/$/, '');
  }, []);

  // const onLangChange = useCallback(() => {
  //   if (typeof window === 'undefined') {
  //     return;
  //   }

  //   const currentProtocol = `${window.location.protocol}//`;
  //   const currentHref = window.location.href.slice(currentProtocol.length);

  //   if (utils.isLocalStorageNameSupported()) {
  //     localStorage.setItem(
  //       'locale',
  //       utils.isZhCN(pathname) ? 'en-US' : 'zh-CN',
  //     );
  //   }

  //   window.location.href =
  //     currentProtocol +
  //     currentHref.replace(
  //       window.location.pathname,
  //       utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search)
  //         .pathname,
  //     );
  // }, [location]);

  const nextDirectionText = useMemo<string>(
    () => (direction !== 'rtl' ? 'RTL' : 'LTR'),
    [direction],
  );

  const getDropdownStyle = useMemo<React.CSSProperties>(
    () => (direction === 'rtl' ? { direction: 'ltr', textAlign: 'right' } : {}),
    [direction],
  );

  const { menuVisible, windowWidth, searching } = headerState;
  const docVersions: Record<string, string> = {
    ...(pkg.version ? { [pkg.version]: pkg.version } : {}),
    ...themeConfig?.docVersions,
  };

  const versionOptions = Object.keys(docVersions)
    .filter(Boolean)
    .map((version) => ({
      value: docVersions[version],
      label: version,
    }));

  const isHome = ['', 'index', 'index-cn'].includes(pathname);
  const isZhCN = utils.isZhCN(pathname);
  const isRTL = direction === 'rtl';
  let responsive: null | 'narrow' | 'crowded' = null;
  if (windowWidth < RESPONSIVE_XS) {
    responsive = 'crowded';
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = 'narrow';
  }

  const headerClassName = classNames(styles.header, 'clearfix', {
    'home-header': isHome,
  });

  const sharedProps: SharedProps = {
    isZhCN,
    isRTL,
  };

  const navigationNode = (
    <Navigation
      key="nav"
      {...sharedProps}
      responsive={responsive}
      isMobile={isMobile}
      directionText={nextDirectionText}
      // onLangChange={onLangChange}
      // onDirectionChange={onDirectionChange}
    />
  );

  let menu = [
    navigationNode,
    versionOptions.length > 0 ? (
      <Select
        key="version"
        size="small"
        className={styles.versionSelect}
        defaultValue={versionOptions[0]?.value}
        onChange={handleVersionChange}
        dropdownStyle={getDropdownStyle}
        popupMatchSelectWidth={false}
        getPopupContainer={(trigger) => trigger.parentNode}
        options={versionOptions}
      />
    ) : null,
    <More key="more" />,
    <LangSwitch key={new Date().getTime()} />,
    <RtlSwitch key="direction" />,
    <HeaderExtra key="header-Extra" />,
  ];

  if (windowWidth < RESPONSIVE_XS) {
    menu = searching ? [] : [navigationNode];
  } else if (windowWidth < RESPONSIVE_SM) {
    menu = searching ? [] : menu;
  }

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];

  return (
    <header className={headerClassName}>
      {isMobile && (
        <Popover
          classNames={{ root: styles.popoverMenu }}
          placement="bottomRight"
          content={menu}
          trigger="click"
          open={menuVisible}
          arrow={{ pointAtCenter: true }}
          onOpenChange={onMenuVisibleChange}
        >
          <MenuOutlined className="nav-phone-icon" />
        </Popover>
      )}
      <AnnouncementBar />
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo {...sharedProps} location={location} />
        </Col>
        <Col {...colProps[1]} className={styles.menuCol}>
          <div className={styles.menuRow}>
            <div className={styles.searchBarContainer}>
              <div className={styles.searchBar}>
                <DumiSearchBar />
              </div>
            </div>
            {!isMobile && menu}
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
