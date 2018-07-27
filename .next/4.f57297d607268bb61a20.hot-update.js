webpackHotUpdate(4,{

/***/ "./containers/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Grid__ = __webpack_require__("./components/Grid.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/Grid.js";




var GridContainer = function GridContainer(_ref) {
  var grid = _ref.grid,
      scale = _ref.scale,
      width = _ref.width,
      height = _ref.height;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Grid__["a" /* default */], {
    hidden: !grid || scale <= 3,
    gridSize: scale,
    width: width * scale,
    height: height * scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    grid: state.grid,
    scale: state.scale,
    width: state.width,
    height: state.height
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(GridContainer));

/***/ })

})
//# sourceMappingURL=4.f57297d607268bb61a20.hot-update.js.map