"use strict";
(self["webpackChunkdumi_theme_chaos"] = self["webpackChunkdumi_theme_chaos"] || []).push([[1009],{

/***/ 29849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26889);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var _theme_api_useRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31377);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18925);




var DemoRenderPage = function DemoRenderPage() {
  var params = (0,dumi__WEBPACK_IMPORTED_MODULE_0__.useParams)();
  var id = params.id;
  var demo = (0,dumi__WEBPACK_IMPORTED_MODULE_0__.useDemo)(id);
  var _useRenderer = (0,_theme_api_useRenderer__WEBPACK_IMPORTED_MODULE_2__/* .useRenderer */ .m)({
      id: id,
      component: demo.component,
      renderOpts: demo.renderOpts
    }),
    canvasRef = _useRenderer.canvasRef;
  var _ref = demo || {},
    component = _ref.component,
    renderOpts = _ref.renderOpts;
  var _useLiveDemo = (0,dumi__WEBPACK_IMPORTED_MODULE_0__.useLiveDemo)(id),
    liveDemoNode = _useLiveDemo.node,
    setSource = _useLiveDemo.setSource,
    liveDemoError = _useLiveDemo.error,
    loading = _useLiveDemo.loading;
  var finalNode = liveDemoNode || (renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
    ref: canvasRef
  }) : component && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(component));

  // listen message event for setSource
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = function handler(ev) {
      if (ev.data.type === 'dumi.liveDemo.setSource') {
        setSource(ev.data.value);
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, [setSource]);

  // notify parent window that compile done
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!loading && (liveDemoError || liveDemoNode)) {
      window.postMessage({
        type: 'dumi.liveDemo.compileDone',
        value: {
          err: liveDemoError
        }
      });
    }
  }, [liveDemoError, liveDemoNode, loading]);
  return finalNode;
};
/* harmony default export */ __webpack_exports__["default"] = (DemoRenderPage);

/***/ })

}]);