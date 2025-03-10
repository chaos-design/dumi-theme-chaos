// 多语言切换
import React from 'react';
import { Select } from 'antd';
import {
  history,
  useIntl,
  useLocale,
  useLocation,
  useSearchParams,
  useSiteData,
} from 'dumi';
import { useCallback, type FC } from 'react';
import { getTargetLocalePath } from '../../utils';
import SwitchBtn from '../Header/SwitchBtn';
import useUserThemeConfig from '../../hooks/useUserThemeConfig';
import * as utils from '../../utils';

const { Option } = Select;

const CHAOS_LOCALE = 'chaos.locale';

const LangSwitch: FC = () => {
  const [searchParams] = useSearchParams();
  const { localesEnhance } = useUserThemeConfig();
  const { locales } = useSiteData();
  const { locale } = useIntl();
  const current = useLocale();
  const { pathname } = useLocation();

  const handleLangChange = useCallback(
    (lang: string) => {
      let path = getTargetLocalePath({
        pathname,
        current,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        target: locales.find(({ id }) => id === lang)!,
      });

      if (utils.isLocalStorageNameSupported()) {
        localStorage.setItem(
          CHAOS_LOCALE,
          utils.isZhCN(pathname) ? 'en-US' : 'zh-CN',
        );
      }

      // 多多语言首页做特殊处理 eg. /index-en
      if (path.startsWith('/-')) {
        path = `/index${path.substring(1)}`;
      } else if (path.endsWith('/index')) {
        path = path.replace('/index', '/');
      }
      history.push({
        pathname: path,
        search: searchParams.toString(),
      });
    },
    [pathname, current, locales, searchParams],
  );

  const onLangChange = useCallback(() => {
    handleLangChange(locales.filter((item) => item.id !== locale)[0].id);
  }, [locale, handleLangChange, locales]);

  let LangSwitchJSX;
  // do not render in single language
  if (locales.length > 2 || (!localesEnhance && locales.length > 2)) {
    const langOptions = locales.map((lang) => (
      <Option value={lang.id} key={lang.id}>
        {lang.name}
      </Option>
    ));
    LangSwitchJSX = LangSwitchJSX = (
      <Select
        key="lang"
        className="version"
        size="small"
        defaultValue={locale}
        onChange={handleLangChange}
        popupMatchSelectWidth={false}
        getPopupContainer={(trigger) => trigger.parentNode}
      >
        {langOptions}
      </Select>
    );
  } else if (
    locales.length === 2 &&
    Array.isArray(localesEnhance) &&
    localesEnhance.length > 1
  ) {
    // 按 locales 顺序展示
    const switchValue = locales[0].id === locale ? 1 : 2;
    LangSwitchJSX = (
      <SwitchBtn
        key="lang"
        onClick={onLangChange}
        value={switchValue}
        label1={localesEnhance[0].switchPrefix}
        label2={localesEnhance[1].switchPrefix}
        tooltip1={`${locales[0].name} / ${locales[1].name}`}
        tooltip2={`${locales[1].name} / ${locales[0].name}`}
      />
    );
  }
  return LangSwitchJSX;
};

export default LangSwitch;
