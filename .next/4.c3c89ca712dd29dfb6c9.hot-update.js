webpackHotUpdate(4,{

/***/ "./components/Grid.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Grid__ = __webpack_require__("./components/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Grid__);
var _jsxFileName = "/Users/lean/development/lodpi/containers/Grid.js";




var GridContainer = function GridContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Grid___default.a, {
    hidden: !props.grid || props.scale <= 3,
    gridSize: props.scale,
    width: props.width * props.scale,
    height: props.height * props.scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    grid: state.counter.grid,
    scale: state.counter.scale,
    width: state.counter.width,
    height: state.counter.height
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(GridContainer));

/***/ })

})
//# sourceMappingURL=4.c3c89ca712dd29dfb6c9.hot-update.js.map