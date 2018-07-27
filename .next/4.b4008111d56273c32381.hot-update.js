webpackHotUpdate(4,{

/***/ "./components/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/lean/development/lodpi/components/Grid.js";

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Grid Layer",
    hidden: props.hidden,
    style: {
      backgroundSize: "".concat(props.gridSize, "px ").concat(props.gridSize, "px"),
      width: "".concat(props.width, "px"),
      height: "".concat(props.height, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
});

/***/ }),

/***/ "./containers/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Grid__ = __webpack_require__("./components/Grid.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/Grid.js";




var GridContainer = function GridContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Grid__["a" /* default */], {
    hidden: !props.grid || props.scale <= 3,
    gridSize: props.scale,
    width: props.width * props.scale,
    height: props.height * props.scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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
//# sourceMappingURL=4.b4008111d56273c32381.hot-update.js.map