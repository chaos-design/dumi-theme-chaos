import classNames from 'classnames';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import ConfigProvider from 'antd/es/config-provider';
import zhCN from 'antd/es/locale/zh_CN';
import { Helmet, useOutlet, useSiteData } from 'dumi';

import useLocale from '../../hooks/useLocale';
import useLocation from '../../hooks/useLocation';
import GlobalStyles from '../../common/GlobalStyles';
import Header from '../../slots/Header';
import SiteContext from '../../slots/SiteContext';

import '../../static/style';

import IndexLayout from '../IndexLayout';
import ResourceLayout from '../ResourceLayout';
import SidebarLayout from '../SidebarLayout';

const locales = {
  cn: {
    title: 'Chaos Design',
    description: 'Doc',
  },
  en: {
    title: 'Chaos Design',
    description: 'Doc',
  },
};

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, search, hash } = location;
  const [locale, lang] = useLocale(locales);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null!);
  const { direction } = useContext(SiteContext);
  const { loading } = useSiteData();

  useLayoutEffect(() => {
    if (lang === 'cn') {
      dayjs.locale('zh-cn');
    } else {
      dayjs.locale('en');
    }
  }, []);

  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    timerRef.current = setTimeout(() => {
      nprogressHiddenStyle?.remove();
    }, 0);
    return () => clearTimeout(timerRef.current);
  }, []);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) {
      document.getElementById(decodeURIComponent(id))?.scrollIntoView();
    }
  }, [loading, hash]);

  useEffect(() => {
    if (typeof (window as any).ga !== 'undefined') {
      (window as any).ga('send', 'pageview', pathname + search);
    }
  }, [location]);

  const content = React.useMemo<React.ReactNode>(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return (
        <IndexLayout title={locale.title} desc={locale.description}>
          {outlet}
        </IndexLayout>
      );
    }
    if (pathname.startsWith('/docs/resource')) {
      return <ResourceLayout>{outlet}</ResourceLayout>;
    }

    if (pathname.startsWith('/theme-editor')) {
      return outlet;
    }

    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);

  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang === 'cn' ? 'zh-CN' : lang}
          data-direction={direction}
          className={classNames({ rtl: direction === 'rtl' })}
        />
        <link
          sizes="144x144"
          href="https://rain120.github.io/study-notes/img/chao.png"
        />
        <meta property="og:description" content={locale.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://rain120.github.io/study-notes/img/chao.png"
        />
      </Helmet>
      <ConfigProvider
        direction={direction}
        locale={lang === 'cn' ? zhCN : undefined}
      >
        <GlobalStyles />
        <Header />
        {content}
      </ConfigProvider>
    </>
  );
};

export default DocLayout;
