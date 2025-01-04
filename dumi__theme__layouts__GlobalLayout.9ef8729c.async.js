"use strict";
(self["webpackChunkdumi_theme_chaos"] = self["webpackChunkdumi_theme_chaos"] || []).push([[1032],{

/***/ 8844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ layouts_GlobalLayout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.20.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 26 modules
var es = __webpack_require__(74336);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var es_theme = __webpack_require__(19201);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 13 modules
var config_provider = __webpack_require__(58293);
// EXTERNAL MODULE: ./example/.dumi/tmp-production/dumi/exports.ts
var dumi_exports = __webpack_require__(26889);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/hooks/useAdditionalThemeConfig.ts
var useAdditionalThemeConfig = __webpack_require__(5641);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/float-button/index.js + 19 modules
var float_button = __webpack_require__(58589);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd-token-previewer@2.0.8_@babel+core@7.26.0_@types+react@18.0.38_antd@5.22.7_react-dom@18.3_sirnh7lywqvutv7oyqnkomdu2u/node_modules/antd-token-previewer/lib/icons/index.js
var icons = __webpack_require__(44963);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(68585);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.3.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Icon.js
var Icon = __webpack_require__(64680);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.0_@types+react@18.0.38_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 15 modules
var emotion_react_browser_esm = __webpack_require__(12304);
;// CONCATENATED MODULE: ./src/common/ThemeSwitch/ThemeIcon.tsx




var ThemeIcon = function ThemeIcon(props) {
  var SVGIcon = react.useCallback(function () {
    return (0,emotion_react_browser_esm/* jsx */.tZ)("svg", extends_default()({
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, props), (0,emotion_react_browser_esm/* jsx */.tZ)("g", {
      fillRule: "evenodd"
    }, (0,emotion_react_browser_esm/* jsx */.tZ)("g", {
      fillRule: "nonzero"
    }, (0,emotion_react_browser_esm/* jsx */.tZ)("path", {
      d: "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"
    }))));
  }, [props]);
  return (0,emotion_react_browser_esm/* jsx */.tZ)(Icon/* default */.Z, extends_default()({
    component: SVGIcon
  }, props));
};
/* harmony default export */ var ThemeSwitch_ThemeIcon = (ThemeIcon);
;// CONCATENATED MODULE: ./src/common/ThemeSwitch/index.tsx







var ThemeSwitch = function ThemeSwitch(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? ['light'] : _props$value,
    onChange = props.onChange;
  return (0,emotion_react_browser_esm/* jsx */.tZ)(float_button/* default */.Z.Group, {
    trigger: "click",
    icon: (0,emotion_react_browser_esm/* jsx */.tZ)(ThemeSwitch_ThemeIcon, null)
  }, (0,emotion_react_browser_esm/* jsx */.tZ)(float_button/* default */.Z, {
    icon: (0,emotion_react_browser_esm/* jsx */.tZ)(icons/* DarkTheme */.Cs, null),
    type: value.includes('dark') ? 'primary' : 'default',
    onClick: function onClick() {
      var themeValue = value.includes('dark') ? 'light' : 'dark';
      onChange([themeValue].concat(toConsumableArray_default()(value.filter(function (item) {
        return ['dark', 'light'].indexOf(item) < 0;
      })))); // compact 值必须放在靠后位置
    },
    tooltip: (0,emotion_react_browser_esm/* jsx */.tZ)(dumi_exports.FormattedMessage, {
      id: "app.theme.switch.dark"
    })
  }), (0,emotion_react_browser_esm/* jsx */.tZ)(float_button/* default */.Z, {
    icon: (0,emotion_react_browser_esm/* jsx */.tZ)(icons/* CompactTheme */.dR, null),
    type: value.includes('compact') ? 'primary' : 'default',
    onClick: function onClick() {
      if (value.includes('compact')) {
        onChange(value.filter(function (item) {
          return item !== 'compact';
        }));
      } else {
        onChange([].concat(toConsumableArray_default()(value), ['compact']));
      }
    },
    tooltip: (0,emotion_react_browser_esm/* jsx */.tZ)(dumi_exports.FormattedMessage, {
      id: "app.theme.switch.compact"
    })
  }));
};
/* harmony default export */ var common_ThemeSwitch = (ThemeSwitch);
// EXTERNAL MODULE: ./src/slots/SiteContext.ts
var SiteContext = __webpack_require__(94268);
;// CONCATENATED MODULE: ./src/layouts/GlobalLayout.tsx










var RESPONSIVE_MOBILE = 768;
var SITE_STATE_LOCALSTORAGE_KEY = 'dumi-theme-chaos-site-state';
var defaultSiteState = {
  theme: ['light'],
  isMobile: false,
  direction: 'ltr'
};
var getAlgorithm = function getAlgorithm() {
  var themes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return themes.map(function (theme) {
    if (theme === 'dark') {
      return es_theme/* default */.Z.darkAlgorithm;
    }
    if (theme === 'compact') {
      return es_theme/* default */.Z.compactAlgorithm;
    }
    return es_theme/* default */.Z.defaultAlgorithm;
  });
};
var isThemeDark = function isThemeDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
var getSiteState = function getSiteState(siteState) {
  var localSiteState = siteState;
  var isDark = isThemeDark(); // 系统默认主题
  var theme = (localSiteState === null || localSiteState === void 0 ? void 0 : localSiteState.theme) || [];
  var isAutoTheme = theme.filter(function (item) {
    return item === 'auto';
  }).length > 0;
  if (isAutoTheme) {
    var nextTheme = theme.filter(function (item) {
      return item !== 'auto';
    });
    nextTheme.push(isDark ? 'dark' : 'light');
    localSiteState.theme = nextTheme;
  }
  return Object.assign(defaultSiteState, localSiteState);
};
var GlobalLayout = function GlobalLayout() {
  var _usePrefersColor = (0,dumi_exports.usePrefersColor)(),
    _usePrefersColor2 = slicedToArray_default()(_usePrefersColor, 3),
    setPrefersColor = _usePrefersColor2[2];
  var _useAdditionalThemeCo = (0,useAdditionalThemeConfig/* default */.Z)(),
    configTheme = _useAdditionalThemeCo.theme,
    ssr = _useAdditionalThemeCo.ssr,
    prefersColor = _useAdditionalThemeCo.prefersColor;
  var _useState = (0,react.useState)(defaultSiteState),
    _useState2 = slicedToArray_default()(_useState, 2),
    _useState2$ = _useState2[0],
    theme = _useState2$.theme,
    isMobile = _useState2$.isMobile,
    direction = _useState2$.direction,
    setSiteState = _useState2[1];

  // 基于 localStorage 实现
  var updateSiteConfig = (0,react.useCallback)(function (props) {
    try {
      var localSiteState = JSON.parse(window.localStorage.getItem(SITE_STATE_LOCALSTORAGE_KEY) || '{}');
      var nextLocalSiteState = Object.assign(localSiteState, props);
      window.localStorage.setItem(SITE_STATE_LOCALSTORAGE_KEY, JSON.stringify(nextLocalSiteState));
      setSiteState(function (prev) {
        return objectSpread2_default()(objectSpread2_default()({}, prev), props);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);
  var updateMobileMode = (0,react.useCallback)(function () {
    updateSiteConfig({
      isMobile: window.innerWidth < RESPONSIVE_MOBILE
    });
  }, [updateSiteConfig]);
  (0,react.useEffect)(function () {
    try {
      var localSiteState = JSON.parse(window.localStorage.getItem(SITE_STATE_LOCALSTORAGE_KEY) || '{}');
      // 首次设置主题样式
      if (!(localSiteState !== null && localSiteState !== void 0 && localSiteState.theme)) {
        localSiteState.theme = [prefersColor["default"]];
      }
      var siteConfig = getSiteState(localSiteState);
      updateSiteConfig(siteConfig);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [prefersColor, updateSiteConfig]);
  (0,react.useEffect)(function () {
    updateMobileMode();
    // set data-prefers-color
    setPrefersColor((theme !== null && theme !== void 0 ? theme : []).indexOf('dark') > -1 ? 'dark' : 'light');
    window.addEventListener('resize', updateMobileMode);
    return function () {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, [theme, updateMobileMode, setPrefersColor]);
  var siteContextValue = (0,react.useMemo)(function () {
    return {
      direction: direction,
      isMobile: isMobile,
      theme: theme,
      updateSiteConfig: updateSiteConfig
    };
  }, [isMobile, theme, direction, updateSiteConfig]);
  var _React$useState = react.useState(function () {
      return (0,es/* createCache */.Df)();
    }),
    _React$useState2 = slicedToArray_default()(_React$useState, 1),
    styleCache = _React$useState2[0];
  (0,dumi_exports.useServerInsertedHTML)(function () {
    var styleText = (0,es/* extractStyle */.EN)(styleCache, {
      plain: true,
      types: 'style'
    });
    return (0,emotion_react_browser_esm/* jsx */.tZ)("style", {
      "data-type": "antd-cssinjs",
      dangerouslySetInnerHTML: {
        __html: styleText
      }
    });
  });
  (0,dumi_exports.useServerInsertedHTML)(function () {
    var styleText = (0,es/* extractStyle */.EN)(styleCache, {
      plain: true,
      types: ['cssVar', 'token']
    });
    return (0,emotion_react_browser_esm/* jsx */.tZ)("style", {
      "data-type": "antd-css-var",
      "data-rc-order": "prepend",
      "data-rc-priority": "-9999",
      dangerouslySetInnerHTML: {
        __html: styleText
      }
    });
  });
  var BaseGlobalLayoutJSX = (0,emotion_react_browser_esm/* jsx */.tZ)(SiteContext/* default */.Z.Provider, {
    value: siteContextValue
  }, (0,emotion_react_browser_esm/* jsx */.tZ)(config_provider/* default */.ZP, {
    theme: objectSpread2_default()(objectSpread2_default()({}, configTheme), {}, {
      algorithm: getAlgorithm(theme)
    })
  }, (0,emotion_react_browser_esm/* jsx */.tZ)(dumi_exports.Outlet, null), prefersColor["switch"] && (0,emotion_react_browser_esm/* jsx */.tZ)(common_ThemeSwitch, {
    value: theme,
    onChange: function onChange(nextTheme) {
      return updateSiteConfig({
        theme: nextTheme
      });
    }
  })));
  var SSRGlobalLayoutJSX = (0,emotion_react_browser_esm/* jsx */.tZ)(es/* StyleProvider */.V9, {
    cache: styleCache,
    linters: [es/* logicalPropertiesLinter */.nc, es/* legacyNotSelectorLinter */.Ke, es/* parentSelectorLinter */.rA]
  }, BaseGlobalLayoutJSX);
  if (ssr) {
    __webpack_require__.g.styleCache = styleCache;
    return SSRGlobalLayoutJSX;
  }
  return BaseGlobalLayoutJSX;
};
/* harmony default export */ var layouts_GlobalLayout = (GlobalLayout);

/***/ })

}]);