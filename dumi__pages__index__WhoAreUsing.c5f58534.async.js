"use strict";
(self["webpackChunkdumi_theme_chaos"] = self["webpackChunkdumi_theme_chaos"] || []).push([[8941],{

/***/ 8377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ index_WhoAreUsing; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(36075);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 38 modules
var typography = __webpack_require__(6391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(37793);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(42510);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js + 2 modules
var flex = __webpack_require__(8605);
// EXTERNAL MODULE: ./example/.dumi/tmp-production/dumi/exports.ts
var dumi_exports = __webpack_require__(26889);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.0_@types+react@18.0.38_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 15 modules
var emotion_react_browser_esm = __webpack_require__(12304);
;// CONCATENATED MODULE: ./example/.dumi/constants/images.ts
var defaultImage = 'data:image/png;base64,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';
var addImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAMtJREFUaEPtmUEKwzAMBKNP28emR/vT7slQaFwsxNKoTM6KbO2OFEHsSP5Y8vsfFPBrB3EAB4IKgFBQwPDrEgdaa6eZPcYYz1rrGb7llwSSAnrvY55ZSpGcMfNLklOAgzkcuBILhEDIoQAIBcViCoEQCAUVuC1CcyUW1LeVcncVX06h93Vg60RB0M4qviwgvQMRQVnmHOrxJb7tGHW4+BFKDzjUowfoAQcuV6EgBEIgFFTgLxFK/39AYOoypWSMUoBDARxwiCUJTe/AC7+YlDFymq3WAAAAAElFTkSuQmCC';

// EXTERNAL MODULE: ./src/hooks/useSiteToken.ts
var useSiteToken = __webpack_require__(74699);
;// CONCATENATED MODULE: ./example/.dumi/pages/index/WhoAreUsing.tsx

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var userList = [{
  name: 'Chaos Design Doc',
  site: 'https://chaos-design.github.io/dumi-theme-chaos/',
  logoUrl: 'https://rain120.github.io/study-notes/img/chao.png'
}, {
  name: '增加更多',
  site: 'https://github.com/chaos-design/dumi-theme-chaos/issues/23',
  logoUrl: addImage
}];
var localesConfig = {
  'zh-CN': {
    'page.home.who-are-using': '谁在使用'
  },
  'en-US': {
    'page.home.who-are-using': 'Who are using'
  }
};
var _ref =  true ? {
  name: "hyck8i",
  styles: "width:100%;text-align:center"
} : 0;
var _ref2 =  true ? {
  name: "pgx3ze",
  styles: "background:rgba(255, 255, 255, 0.1);backdropfilter:blur(25px)"
} : 0;
var useStyle = function useStyle() {
  var _useSiteToken = (0,useSiteToken/* default */.Z)(),
    token = _useSiteToken.token;
  return {
    containerWrap: _ref2,
    container: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.iv)("display:flex;flex-wrap:wrap;max-width:1208px;margin-inline:auto;padding-bottom:", token.marginFarSM, "px;box-sizing:border-box;padding-inline:2.5%;column-gap:2.5%;align-items:stretch;text-align:start;" + ( true ? "" : 0),  true ? "" : 0),
    title: _ref,
    userItem: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.iv)("height:40px;text-align:center;cursor:pointer;padding:", token.paddingSM, "px ", token.padding, "px;border:1px solid ", token.colorBorderSecondary, ";font-size:", token.fontSizeLG, "px;border-radius:", token.borderRadius, "px;background:", token.colorBgContainer, ";a{color:", token.colorText, ";}&:hover{box-shadow:", token.boxShadowTertiary, ";transform:translateY(-1px);}" + ( true ? "" : 0),  true ? "" : 0),
    userLogo: /*#__PURE__*/(0,emotion_react_browser_esm/* css */.iv)("width:42px;margin-right:", token.marginSM, "px;" + ( true ? "" : 0),  true ? "" : 0)
  };
};
var WhoAreUsing = function WhoAreUsing() {
  var _localesConfig$id;
  var style = useStyle();
  var _useLocale = (0,dumi_exports.useLocale)(),
    id = _useLocale.id;
  objectDestructuringEmpty_default()((0,useSiteToken/* default */.Z)());
  var handleError = (0,react.useCallback)(function (e) {
    e.target.src = defaultImage;
  }, []);
  return (0,emotion_react_browser_esm/* jsx */.tZ)("div", {
    css: style.containerWrap
  }, (0,emotion_react_browser_esm/* jsx */.tZ)("div", {
    css: style.container
  }, (0,emotion_react_browser_esm/* jsx */.tZ)("div", {
    css: style.title
  }, (0,emotion_react_browser_esm/* jsx */.tZ)(typography/* default */.Z.Title, {
    level: 3
  }, (_localesConfig$id = localesConfig[id]) === null || _localesConfig$id === void 0 ? void 0 : _localesConfig$id['page.home.who-are-using'])), (0,emotion_react_browser_esm/* jsx */.tZ)(row/* default */.Z, {
    gutter: [20, 16],
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, userList.map(function (item, index) {
    return (0,emotion_react_browser_esm/* jsx */.tZ)(col/* default */.Z, {
      span: 6,
      xxl: 6,
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
      key: index
    }, (0,emotion_react_browser_esm/* jsx */.tZ)(flex/* default */.Z, {
      css: style.userItem,
      justify: "center",
      align: "center"
    }, (0,emotion_react_browser_esm/* jsx */.tZ)("a", {
      href: item.site,
      target: "_blank",
      rel: "noreferrer"
    }, (0,emotion_react_browser_esm/* jsx */.tZ)(flex/* default */.Z, {
      justify: "center",
      align: "center"
    }, (0,emotion_react_browser_esm/* jsx */.tZ)("img", {
      css: style.userLogo,
      src: item.logoUrl,
      alt: item.name,
      onError: handleError
    }), (0,emotion_react_browser_esm/* jsx */.tZ)("span", null, item.name)))));
  }))));
};
/* harmony default export */ var index_WhoAreUsing = (WhoAreUsing);

/***/ })

}]);