(self["webpackChunkdumi_theme_chaos"] = self["webpackChunkdumi_theme_chaos"] || []).push([[6058],{

/***/ 22845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);

var IconContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__.Z = (IconContext);

/***/ }),

/***/ 64680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60795);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14797);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87807);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16803);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82187);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24875);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22845);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23920);




var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
// Seems this is used for iconFont





var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(props, _excluded);
  var iconRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var mergedRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__/* .useComposeRef */ .x1)(iconRef, ref);
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warning */ .Kp)(Boolean(Component || children), 'Should have `component` prop or `children`.');
  (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useInsertStyles */ .C3)(iconRef);
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(rootClassName, prefixCls, className);
  var svgClassString = classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, _utils__WEBPACK_IMPORTED_MODULE_4__/* .svgBaseProps */ .vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, innerSvgProps, children);
    }
    if (children) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .warning */ .Kp)(Boolean(viewBox) || react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) && react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
    role: "img"
  }, restProps, {
    ref: mergedRef,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ __webpack_exports__.Z = (Icon);

/***/ }),

/***/ 23920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C3: function() { return /* binding */ useInsertStyles; },
/* harmony export */   H9: function() { return /* binding */ normalizeTwoToneColors; },
/* harmony export */   Kp: function() { return /* binding */ warning; },
/* harmony export */   R_: function() { return /* binding */ generate; },
/* harmony export */   pw: function() { return /* binding */ getSecondaryColor; },
/* harmony export */   r: function() { return /* binding */ isIconDefinition; },
/* harmony export */   vD: function() { return /* binding */ svgBaseProps; }
/* harmony export */ });
/* unused harmony exports normalizeAttrs, iconStyles */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14797);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18790);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68640);
/* harmony import */ var rc_util_es_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43965);
/* harmony import */ var rc_util_es_Dom_shadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90927);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39027);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22845);








function camelCase(input) {
  return input.replace(/-(.)/g, function (match, g) {
    return g.toUpperCase();
  });
}
function warning(valid, message) {
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(node.tag, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(node.tag, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  alignItems: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles(eleRef) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var ele = eleRef.current;
    var shadowRoot = (0,rc_util_es_Dom_shadow__WEBPACK_IMPORTED_MODULE_7__/* .getShadowRoot */ .A)(ele);
    (0,rc_util_es_Dom_dynamicCSS__WEBPACK_IMPORTED_MODULE_1__/* .updateCSS */ .hq)(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
      attachTo: shadowRoot
    });
  }, []);
};

/***/ }),

/***/ 58656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ isWindow; }
/* harmony export */ });
function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}
const getScroll = target => {
  var _a, _b;
  if (typeof window === 'undefined') {
    return 0;
  }
  let result = 0;
  if (isWindow(target)) {
    result = target.pageYOffset;
  } else if (target instanceof Document) {
    result = target.documentElement.scrollTop;
  } else if (target instanceof HTMLElement) {
    result = target.scrollTop;
  } else if (target) {
    // According to the type inference, the `target` is `never` type.
    // Since we configured the loose mode type checking, and supports mocking the target with such shape below::
    //    `{ documentElement: { scrollLeft: 200, scrollTop: 400 } }`,
    //    the program may falls into this branch.
    // Check the corresponding tests for details. Don't sure what is the real scenario this happens.
    /* biome-ignore lint/complexity/useLiteralKeys: target is a never type */ /* eslint-disable-next-line dot-notation */
    result = target['scrollTop'];
  }
  if (target && !isWindow(target) && typeof result !== 'number') {
    result = (_b = ((_a = target.ownerDocument) !== null && _a !== void 0 ? _a : target).documentElement) === null || _b === void 0 ? void 0 : _b.scrollTop;
  }
  return result;
};
/* harmony default export */ __webpack_exports__.Z = (getScroll);

/***/ }),

/***/ 63389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ scrollTo; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(88356);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/easings.js
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  // biome-ignore lint: it is a common easing function
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  // biome-ignore lint: it is a common easing function
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/getScroll.js
var getScroll = __webpack_require__(58656);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/scrollTo.js



function scrollTo(y) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    getContainer = () => window,
    callback,
    duration = 450
  } = options;
  const container = getContainer();
  const scrollTop = (0,getScroll/* default */.Z)(container);
  const startTime = Date.now();
  const frameFunc = () => {
    const timestamp = Date.now();
    const time = timestamp - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
    if ((0,getScroll/* isWindow */.F)(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < duration) {
      (0,raf/* default */.Z)(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };
  (0,raf/* default */.Z)(frameFunc);
}

/***/ }),

/***/ 64049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48328);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88356);


function throttleByAnimationFrame(fn) {
  let requestId;
  const later = args => () => {
    requestId = null;
    fn.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(args));
  };
  const throttled = function () {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      requestId = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(later(args));
    }
  };
  throttled.cancel = () => {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
/* harmony default export */ __webpack_exports__.Z = (throttleByAnimationFrame);

/***/ }),

/***/ 58293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ config_provider; }
});

// UNUSED EXPORTS: ConfigConsumer, ConfigContext, Variants, configConsumerProps, defaultIconPrefixCls, defaultPrefixCls, globalConfig, warnContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.22.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 33 modules
var es = __webpack_require__(32918);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(70347);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(81400);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/utils/set.js + 1 modules
var set = __webpack_require__(38749);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(99032);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/validateMessagesContext.js
"use client";


// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
/* harmony default export */ var validateMessagesContext = (/*#__PURE__*/(0,react.createContext)(undefined));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/en_US.js + 6 modules
var en_US = __webpack_require__(96096);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/locale.js

let runtimeLocale = Object.assign({}, en_US/* default */.Z.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => Object.assign(Object.assign({}, merged), locale), en_US/* default */.Z.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, en_US/* default */.Z.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/context.js
var locale_context = __webpack_require__(6094);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/index.js
"use client";






const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) {}
  react.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale === null || locale === void 0 ? void 0 : locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = react.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/react.createElement(locale_context/* default */.Z.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) {}
/* harmony default export */ var es_locale = (LocaleProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/context.js
var context = __webpack_require__(92016);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(77900);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(37609);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@7.2.0/node_modules/@ant-design/colors/es/index.js + 2 modules
var colors_es = __webpack_require__(68640);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99978);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(29489);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(14797);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/dynamicCSS.js



var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(0,canUseDom/* default */.Z)()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === 'prependQueue';
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (isPrependQueue) {
      var existStyle = (option.styles || findStyles(container)).filter(function (node) {
        // Ignore style which not injected by rc-util with prepend
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        // Ignore style which priority less then new style
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return (option.styles || findStyles(container)).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(originOption);
  var styles = findStyles(container);
  var option = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originOption), {}, {
    styles: styles
  });

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/cssVariables.js





const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new dist_module/* TinyColor */.C(colorVal);
    const colorPalettes = (0,colors_es.generate)(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new dist_module/* TinyColor */.C(theme.primaryColor);
    const primaryColors = (0,colors_es.generate)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new dist_module/* TinyColor */.C(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0,canUseDom/* default */.Z)()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
     false ? 0 : void 0;
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(18509);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(98352);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useConfig.js



function useConfig() {
  const componentDisabled = (0,react.useContext)(DisabledContext/* default */.Z);
  const componentSize = (0,react.useContext)(SizeContext/* default */.Z);
  return {
    componentDisabled,
    componentSize
  };
}
/* harmony default export */ var hooks_useConfig = (useConfig);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.3/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(18790);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(33670);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.44.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/isEqual.js



/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    (0,warning/* default */.ZP)(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && (0,esm_typeof/* default */.Z)(a) === 'object' && (0,esm_typeof/* default */.Z)(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}
/* harmony default export */ var es_isEqual = (isEqual);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useThemeKey.js

const fullClone = Object.assign({}, react_namespaceObject);
const {
  useId
} = fullClone;
const useEmptyId = () => '';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
/* harmony default export */ var hooks_useThemeKey = (useThemeKey);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useTheme.js





function useTheme(theme, parentTheme, config) {
  var _a, _b;
  const warning = (0,_util_warning/* devUseWarning */.ln)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, context/* defaultConfig */.u_), {
    hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : context/* defaultConfig */.u_.hashed,
    cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
  }) : parentTheme;
  const themeKey = hooks_useThemeKey();
  if (false) {}
  return (0,useMemo/* default */.Z)(() => {
    var _a, _b;
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: config === null || config === void 0 ? void 0 : config.prefixCls
    }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !es_isEqual(prevTheme, nextTheme, true);
  }));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.9.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-motion/es/index.js + 14 modules
var rc_motion_es = __webpack_require__(75389);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/useToken.js + 2 modules
var useToken = __webpack_require__(78431);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/MotionWrapper.js
"use client";




function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = (0,useToken/* default */.ZP)();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = react.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/react.createElement(rc_motion_es.Provider, {
      motion: motion
    }, children);
  }
  return children;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/PropWarning.js
"use client";



/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(_ref => {
  let {
    dropdownMatchSelectWidth
  } = _ref;
  const warning = devUseWarning('ConfigProvider');
  warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
  return null;
})));
if (false) {}
/* harmony default export */ var config_provider_PropWarning = ( false ? 0 : () => null);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(54374);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/useResetIconStyle.js



const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0,useToken/* default */.ZP)();
  // Generate style for icons
  return (0,es.useStyleRegister)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
    layer: {
      name: 'antd'
    }
  }, () => [(0,style/* genIconStyle */.JT)(iconPrefixCls)]);
};
/* harmony default export */ var util_useResetIconStyle = (useResetIconStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.22.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






















/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext = (/* unused pure expression or super */ null && ( false ? 0 : /* istanbul ignore next */
null));

const configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale']));
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'input', 'pagination', 'form', 'select', 'button'];
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
let globalHolderRender;
function getGlobalPrefixCls() {
  return globalPrefixCls || config_provider_context/* defaultPrefixCls */.Rf;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = props => {
  const {
    prefixCls,
    iconPrefixCls,
    theme,
    holderRender
  } = props;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if ('holderRender' in props) {
    globalHolderRender = holderRender;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
       false ? 0 : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme,
  holderRender: globalHolderRender
});
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    direction,
    space,
    splitter,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    textArea,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  } = props;
  // =================================== Context ===================================
  const getPrefixCls = react.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || config_provider_context/* defaultIconPrefixCls */.oR;
  const csp = customCsp || parentContext.csp;
  util_useResetIconStyle(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme, {
    prefixCls: getPrefixCls('')
  });
  if (false) {}
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    direction,
    space,
    splitter,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    textArea,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig,
    tour,
    floatButtonGroup,
    variant,
    inputNumber,
    treeSelect
  };
  if (false) {}
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  if (typeof autoInsertSpaceInButton !== 'undefined') {
    // merge deprecated api
    config.button = Object.assign({
      autoInsertSpace: autoInsertSpaceInButton
    }, config.button);
  }
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,useMemo/* default */.Z)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = react.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(config_provider_PropWarning, {
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }), children);
  const validateMessages = react.useMemo(() => {
    var _a, _b, _c, _d;
    return (0,set/* merge */.T)(((_a = en_US/* default */.Z.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(validateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale) {
    childNode = /*#__PURE__*/react.createElement(es_locale, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react.createElement(Context/* default */.Z.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/react.createElement(MotionWrapper, null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = react.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token,
        components,
        cssVar
      } = _a,
      rest = __rest(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,es.createTheme)(algorithm) : context/* defaultTheme */.uH;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(_ref => {
      let [componentName, componentToken] = _ref;
      const parsedToken = Object.assign({}, componentToken);
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
          parsedToken.theme = (0,es.createTheme)(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seed/* default */.Z), token);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar: cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/react.createElement(context/* DesignTokenContext */.Mj.Provider, {
      value: memoTheme
    }, childNode);
  }
  // ================================== Warning ===================================
  if (memoedConfig.warning) {
    childNode = /*#__PURE__*/react.createElement(_util_warning/* WarningContext */.G8.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react.createElement(config_provider_context/* ConfigContext */.E_.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = react.useContext(config_provider_context/* ConfigContext */.E_);
  const antLocale = react.useContext(locale_context/* default */.Z);
  return /*#__PURE__*/react.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.E_;
ConfigProvider.SizeContext = SizeContext/* default */.Z;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = hooks_useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     false ? 0 : void 0;
    return SizeContext/* default */.Z;
  }
});
if (false) {}
/* harmony default export */ var config_provider = (ConfigProvider);

/***/ }),

/***/ 38498:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(78770);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 20698:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 91162:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15558:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(38498);
var iterableToArray = __webpack_require__(20698);
var unsupportedIterableToArray = __webpack_require__(31479);
var nonIterableSpread = __webpack_require__(91162);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);