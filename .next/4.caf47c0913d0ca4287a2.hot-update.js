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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "GridContainer Layer",
    hidden: !props.grid || props.scale <= 3,
    style: {
      backgroundSize: "".concat(props.scale, "px ").concat(props.scale, "px"),
      width: "".concat(props.width * props.scale, "px"),
      height: "".concat(props.height * props.scale, "px")
    },
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

/***/ }),

/***/ "./containers/Workspace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layer__ = __webpack_require__("./components/Layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Grid__ = __webpack_require__("./containers/Grid.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/Workspace.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var WorkspaceContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(WorkspaceContainer, _Component);

  function WorkspaceContainer(props) {
    var _this;

    _classCallCheck(this, WorkspaceContainer);

    _this = _possibleConstructorReturn(this, (WorkspaceContainer.__proto__ || Object.getPrototypeOf(WorkspaceContainer)).call(this, props));
    _this.state = {
      isToolExecuting: false
    };
    return _this;
  }

  _createClass(WorkspaceContainer, [{
    key: "snapshot",
    value: function snapshot() {
      var _this2 = this;

      this.props.sync(this.layer.getImageData());
      this.timer = setTimeout(function () {
        return _this2.props.sync();
      }, 3 * 1000);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(actionName, ev) {
      if (!tools[this.props.tool][actionName]) return;
      var _props = this.props,
          tool = _props.tool,
          color = _props.color,
          scale = _props.scale;
      var pageX = ev.pageX || ev.touches[0].pageX || 0;
      var pageY = ev.pageY || ev.touches[0].pageY || 0; // TODO: move to state

      tools[tool][actionName]({
        x: Math.round((pageX - this.layer.canvas.offsetLeft + this.element.scrollLeft) / scale - .5),
        y: Math.round((pageY - this.layer.canvas.offsetTop + this.element.scrollTop) / scale - .5),
        color: color,
        scale: scale,
        shadowLayer: this.shadowLayer,
        layer: this.layer
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(ev) {
      this.setState({
        isToolExecuting: false
      });
      this.handleEvent('handleClick', ev);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(ev) {
      this.setState({
        isToolExecuting: true
      });
      this.handleEvent('handleMouseDown', ev);
      if (this.timer) clearTimeout(this.timer);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(ev) {
      this.setState({
        isToolExecuting: false
      });
      this.handleEvent('handleMouseUp', ev);
      this.snapshot();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(ev) {
      if (this.state.isToolExecuting) {
        this.handleEvent('handleMouseMove', ev);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: function onClick(ev) {
          return _this3.handleClick(ev);
        },
        onMouseDown: function onMouseDown(ev) {
          return _this3.handleMouseDown(ev);
        },
        onMouseUp: function onMouseUp(ev) {
          return _this3.handleMouseUp(ev);
        },
        onMouseMove: function onMouseMove(ev) {
          return _this3.handleMouseMove(ev);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "Canvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layer__["a" /* default */], {
        ref: function ref(l) {
          return _this3.layer = l;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layer__["a" /* default */], {
        ref: function ref(l) {
          return _this3.shadowLayer = l;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Grid__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })));
    }
  }]);

  return WorkspaceContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    color: state.color,
    scale: state.scale,
    tool: state.tool,
    canvas: state.canvas,
    width: state.width,
    height: state.height
  };
};

var mapDispatchToProps = {
  updateCanvas: __WEBPACK_IMPORTED_MODULE_3__store__["b" /* updateCanvas */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(WorkspaceContainer));

/***/ })

})
//# sourceMappingURL=4.caf47c0913d0ca4287a2.hot-update.js.map