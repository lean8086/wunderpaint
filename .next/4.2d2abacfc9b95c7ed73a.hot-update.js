webpackHotUpdate(4,{

/***/ "./containers/Layer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layer__ = __webpack_require__("./components/Layer.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/Layer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LayerContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, (LayerContainer.__proto__ || Object.getPrototypeOf(LayerContainer)).apply(this, arguments));
  }

  _createClass(LayerContainer, [{
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
    }
  }, {
    key: "putImageData",
    value: function putImageData(data) {
      var _canvas = this.canvas,
          width = _canvas.width,
          height = _canvas.height;

      for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {
          var pos = (y * width + x) * 4;
          var pixel = data.slice(pos, pos + 4);
          this.ctx.fillStyle = "rgba(".concat(pixel.join(','), ")");
          this.ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, {
    key: "slowAndSafePutImageData",
    value: function slowAndSafePutImageData(data) {
      var _canvas2 = this.canvas,
          width = _canvas2.width,
          height = _canvas2.height;

      for (var y = 0; y < height; y += 1) {
        for (var x = 0; x < width; x += 1) {
          var pos = (y * width + x) * 4;
          var _ref = [data[pos], data[pos + 1], data[pos + 2], data[pos + 3] / 255],
              r = _ref[0],
              g = _ref[1],
              b = _ref[2],
              a = _ref[3];
          this.ctx.fillStyle = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
          this.ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layer__["a" /* default */], {
        width: this.props.width,
        height: this.props.height,
        scale: this.props.scale,
        setContext: function setContext(ctx) {
          return _this.ctx = ctx;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }]);

  return LayerContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    scale: state.scale,
    width: state.width,
    height: state.height
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(LayerContainer));

/***/ })

})
//# sourceMappingURL=4.2d2abacfc9b95c7ed73a.hot-update.js.map