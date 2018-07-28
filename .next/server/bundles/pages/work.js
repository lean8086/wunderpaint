module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Toolbar__ = __webpack_require__("./components/Toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Workspace__ = __webpack_require__("./containers/Workspace.js");
var _jsxFileName = "/Users/lean/development/lodpi/components/App.js";



 // import Toolbox from '../components/Toolbox';

var App = function App(_ref) {
  var id = _ref.id,
      sync = _ref.sync,
      preloaded = _ref.preloaded;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1818130120"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Toolbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Workspace__["a" /* default */], {
    sync: sync,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1818130120",
    css: "*,*::before,*::after{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF1QixBQUsrQixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xlYW4vZGV2ZWxvcG1lbnQvbG9kcGkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9vbGJhciBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xiYXInO1xuaW1wb3J0IFdvcmtzcGFjZSBmcm9tICcuLi9jb250YWluZXJzL1dvcmtzcGFjZSc7XG4vLyBpbXBvcnQgVG9vbGJveCBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xib3gnO1xuXG5jb25zdCBBcHAgPSAoeyBpZCwgc3luYywgcHJlbG9hZGVkIH0pID0+IChcbiAgPGRpdj5cbiAgICA8VG9vbGJhciAvPlxuICAgIDxXb3Jrc3BhY2Ugc3luYz17c3luY30vPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqLFxuICAgICAgKjo6YmVmb3JlLFxuICAgICAgKjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=components/App.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/lean/development/lodpi/components/Grid.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var hidden = _ref.hidden,
      gridSize = _ref.gridSize,
      width = _ref.width,
      height = _ref.height;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    hidden: hidden,
    style: {
      backgroundSize: "".concat(gridSize, "px ").concat(gridSize, "px"),
      width: "".concat(width, "px"),
      height: "".concat(height, "px")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-399174488"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "399174488",
    css: "div.jsx-399174488{background-image: linear-gradient(#eee 1px,transparent 1px), linear-gradient(90deg,#eee 1px,transparent 1px);pointer-events:none;z-index:98;cursor:inherit;box-shadow:1px 0 0 #eee,0 1px 0 #eee,1px 1px 0 #eee;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTZ0IsQUFLNEQsNkdBQ2hDLG9CQUNULFdBQ0ksZUFDd0Msb0RBQ3BDLGtCQUNYLE9BQ0QsTUFDUiIsImZpbGUiOiJjb21wb25lbnRzL0dyaWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xlYW4vZGV2ZWxvcG1lbnQvbG9kcGkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBoaWRkZW4sIGdyaWRTaXplLCB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgPGRpdlxuICAgIGhpZGRlbj17aGlkZGVufVxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYCR7Z3JpZFNpemV9cHggJHtncmlkU2l6ZX1weGAsXG4gICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgIH19XG4gID5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWVlIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlZWUgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgICAgXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIFx0ei1pbmRleDogOTg7XG4gICAgICBcdGN1cnNvcjogaW5oZXJpdDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMCAjZWVlLCAwIDFweCAwICNlZWUsIDFweCAxcHggMCAjZWVlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=components/Grid.js */"
  }));
});

/***/ }),

/***/ "./components/New.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shortid__ = __webpack_require__("shortid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_shortid__);
var _jsxFileName = "/Users/lean/development/lodpi/components/New.js";



var id = Object(__WEBPACK_IMPORTED_MODULE_2_shortid__["generate"])();
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    as: "/w/".concat(id),
    href: "/work?id=".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "New"));
});

/***/ }),

/***/ "./components/ToggleGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/lean/development/lodpi/components/ToggleGrid.js";

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var onMouseDown = _ref.onMouseDown,
      selected = _ref.selected;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onMouseDown: onMouseDown,
    style: selected ? {
      background: 'cyan'
    } : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, "Grid");
});

/***/ }),

/***/ "./components/Toolbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__New__ = __webpack_require__("./components/New.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Zoom__ = __webpack_require__("./containers/Zoom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_ToggleGrid__ = __webpack_require__("./containers/ToggleGrid.js");
var _jsxFileName = "/Users/lean/development/lodpi/components/Toolbar.js";




 // import ColorPicker from './ColorPicker';

var Toolbar = function Toolbar(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1146633035"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__New__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Zoom__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_ToggleGrid__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1146633035",
    css: "div.jsx-1146633035{z-index:99;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9vbGJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHb0IsV0FDTyxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9Ub29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZWFuL2RldmVsb3BtZW50L2xvZHBpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldyBmcm9tICcuL05ldyc7XG5pbXBvcnQgWm9vbSBmcm9tICcuLi9jb250YWluZXJzL1pvb20nO1xuaW1wb3J0IFRvZ2dsZUdyaWQgZnJvbSAnLi4vY29udGFpbmVycy9Ub2dnbGVHcmlkJztcbi8vIGltcG9ydCBDb2xvclBpY2tlciBmcm9tICcuL0NvbG9yUGlja2VyJztcblxuY29uc3QgVG9vbGJhciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOZXcgLz5cbiAgICA8Wm9vbSAvPlxuICAgIDxUb2dnbGVHcmlkIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcbiJdfQ== */\n/*@ sourceURL=components/Toolbar.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),

/***/ "./components/Zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/lean/development/lodpi/components/Zoom.js";

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Zoom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onMouseDown: function onMouseDown() {
      return props.increaseScale();
    },
    disabled: props.blockIncrease,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "+"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.percentage, "%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    onMouseDown: function onMouseDown() {
      return props.decreaseScale();
    },
    disabled: props.blockDecrease,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "-"));
});

/***/ }),

/***/ "./components/tools/Ellipse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var x0 = 0;
var y0 = 0;
var x1 = 0;
var y1 = 0;

function start(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      shadowLayer = _ref.shadowLayer;
  shadowLayer.ctx.fillStyle = color;
  x0 = x;
  y0 = y;
}

function render(x, y, layer) {
  // Semimajor (biggest radius) axes and semiminor (smallest radius) axes
  var rx = Math.round((x - x0) / 2);
  var ry = Math.round((y - y0) / 2); // Center of the ellipse

  var xp = x0 + rx;
  var yp = y0 + ry;
  var lastX;
  var lastY;
  var angle = 0;
  var steps = Math.PI / 720;

  for (; angle <= 720; angle += 1) {
    var delta = angle * 2 * steps;
    var X = parseInt(xp + rx * Math.cos(delta) + .5, 10);
    var Y = parseInt(yp + ry * Math.sin(delta) + .5, 10);

    if (lastX !== X || lastY !== Y) {
      lastX = X;
      lastY = Y;
      layer.ctx.fillRect(X, Y, 1, 1);
    }

    ;
  }
}

function move(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      shadowLayer = _ref2.shadowLayer;

  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    render(x, y, shadowLayer);
    x1 = x;
    y1 = y;
  }
}

function end(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      color = _ref3.color,
      shadowLayer = _ref3.shadowLayer,
      layer = _ref3.layer;
  layer.ctx.fillStyle = color;
  render(x, y, layer);
  shadowLayer.clear();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end
});

/***/ }),

/***/ "./components/tools/Eraser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function erase(_ref) {
  var x = _ref.x,
      y = _ref.y,
      layer = _ref.layer;
  layer.ctx.clearRect(x, y, 1, 1);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  handleMouseDown: erase,
  handleMouseMove: erase
});

/***/ }),

/***/ "./components/tools/Line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bresenham_generator__ = __webpack_require__("bresenham/generator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bresenham_generator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bresenham_generator__);

var x0 = 0;
var y0 = 0;
var x1 = 0;
var y1 = 0;

function start(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      shadowLayer = _ref.shadowLayer;
  shadowLayer.ctx.fillStyle = color;
  shadowLayer.ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
}

function move(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      shadowLayer = _ref2.shadowLayer;

  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_bresenham_generator___default()(x0, y0, x, y)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _point = _step.value;
        shadowLayer.ctx.fillRect(_point.x, _point.y, 1, 1);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    x1 = x;
    y1 = y;
  }
}

function end(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      color = _ref3.color,
      shadowLayer = _ref3.shadowLayer,
      layer = _ref3.layer;
  layer.ctx.fillStyle = color;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_bresenham_generator___default()(x0, y0, x, y)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _point2 = _step2.value;
      layer.ctx.fillRect(_point2.x, _point2.y, 1, 1);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  shadowLayer.clear();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end
});

/***/ }),

/***/ "./components/tools/Pencil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function render(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      layer = _ref.layer;
  layer.ctx.fillStyle = color;
  layer.ctx.fillRect(x, y, 1, 1);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  handleMouseDown: render,
  handleMouseMove: render
});

/***/ }),

/***/ "./components/tools/Rectangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var x0 = 0;
var y0 = 0;
var x1 = 0;
var y1 = 0;

function start(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      shadowLayer = _ref.shadowLayer;
  shadowLayer.ctx.fillStyle = color;
  shadowLayer.ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
}

function render(x, y, layer) {
  // Horizontal
  var hSize = x - x0 + 1;
  layer.ctx.fillRect(x0, y0, hSize, 1);
  layer.ctx.fillRect(x0, y, hSize, 1); // Vertical

  var vSize = y - y0 + 1;
  layer.ctx.fillRect(x0, y0, 1, vSize);
  layer.ctx.fillRect(x, y0, 1, vSize);
}

function move(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      shadowLayer = _ref2.shadowLayer;

  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    render(x, y, shadowLayer);
    x1 = x;
    y1 = y;
  }
}

function end(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      color = _ref3.color,
      shadowLayer = _ref3.shadowLayer,
      layer = _ref3.layer;
  layer.ctx.fillStyle = color;
  render(x, y, layer);
  shadowLayer.clear();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end
});

/***/ }),

/***/ "./components/tools/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export list */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pencil__ = __webpack_require__("./components/tools/Pencil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Eraser__ = __webpack_require__("./components/tools/Eraser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Line__ = __webpack_require__("./components/tools/Line.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rectangle__ = __webpack_require__("./components/tools/Rectangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Ellipse__ = __webpack_require__("./components/tools/Ellipse.js");





var tools = {
  Pencil: __WEBPACK_IMPORTED_MODULE_0__Pencil__["a" /* default */],
  Eraser: __WEBPACK_IMPORTED_MODULE_1__Eraser__["a" /* default */],
  Line: __WEBPACK_IMPORTED_MODULE_2__Line__["a" /* default */],
  Rectangle: __WEBPACK_IMPORTED_MODULE_3__Rectangle__["a" /* default */],
  Ellipse: __WEBPACK_IMPORTED_MODULE_4__Ellipse__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["a"] = (tools);
var list = Object.keys(tools);

/***/ }),

/***/ "./containers/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(GridContainer));

/***/ }),

/***/ "./containers/Layer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ctx = this.canvas.getContext('2d');
    }
  }, {
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("canvas", {
        className: "Layer",
        width: this.props.width,
        height: this.props.height,
        style: {
          transform: "scale(".concat(this.props.scale, ")")
        },
        ref: function ref(c) {
          return _this.canvas = c;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(LayerContainer));

/***/ }),

/***/ "./containers/ToggleGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ToggleGrid__ = __webpack_require__("./components/ToggleGrid.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/ToggleGrid.js";





var ToggleGridContainer = function ToggleGridContainer(_ref) {
  var grid = _ref.grid,
      toggleGrid = _ref.toggleGrid;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ToggleGrid__["a" /* default */], {
    onMouseDown: function onMouseDown() {
      return toggleGrid();
    },
    selected: grid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    grid: state.grid
  };
};

var mapDispatchToProps = {
  toggleGrid: __WEBPACK_IMPORTED_MODULE_2__store__["d" /* toggleGrid */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ToggleGridContainer));

/***/ }),

/***/ "./containers/Workspace.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layer__ = __webpack_require__("./containers/Layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Grid__ = __webpack_require__("./containers/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tools__ = __webpack_require__("./components/tools/index.js");
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
      if (!__WEBPACK_IMPORTED_MODULE_7__components_tools__["a" /* default */][this.props.tool][actionName]) return;
      var _props = this.props,
          tool = _props.tool,
          color = _props.color,
          scale = _props.scale;
      var pageX = ev.pageX || ev.touches[0].pageX || 0;
      var pageY = ev.pageY || ev.touches[0].pageY || 0; // TODO: move to state

      __WEBPACK_IMPORTED_MODULE_7__components_tools__["a" /* default */][tool][actionName]({
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
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
          lineNumber: 64
        },
        className: "jsx-505954170"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-505954170"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Layer__["a" /* default */], {
        ref: function ref(l) {
          return _this3.layer = l;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Layer__["a" /* default */], {
        ref: function ref(l) {
          return _this3.shadowLayer = l;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Grid__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "505954170",
        css: "section.jsx-505954170{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;cursor:crosshair;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvV29ya3NwYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFHK0Isa0JBQ1osTUFDQyxPQUNDLFFBQ0MsU0FDQyxVQUNPLGlCQUNELGdCQUNsQiIsImZpbGUiOiJjb250YWluZXJzL1dvcmtzcGFjZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGVhbi9kZXZlbG9wbWVudC9sb2RwaSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVDYW52YXMgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi9MYXllcic7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHMnO1xuXG5jbGFzcyBXb3Jrc3BhY2VDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNUb29sRXhlY3V0aW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgc25hcHNob3QoKSB7XG4gICAgdGhpcy5wcm9wcy5zeW5jKHRoaXMubGF5ZXIuZ2V0SW1hZ2VEYXRhKCkpO1xuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuc3luYygpLCAzICogMTAwMCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChhY3Rpb25OYW1lLCBldikge1xuICAgIGlmICghdG9vbHNbdGhpcy5wcm9wcy50b29sXVthY3Rpb25OYW1lXSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgdG9vbCwgY29sb3IsIHNjYWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhZ2VYID0gZXYucGFnZVggfHwgZXYudG91Y2hlc1swXS5wYWdlWCB8fCAwO1xuICAgIGNvbnN0IHBhZ2VZID0gZXYucGFnZVkgfHwgZXYudG91Y2hlc1swXS5wYWdlWSB8fCAwO1xuXG4gICAgLy8gVE9ETzogbW92ZSB0byBzdGF0ZVxuICAgIHRvb2xzW3Rvb2xdW2FjdGlvbk5hbWVdKHtcbiAgICAgIHg6IE1hdGgucm91bmQoKHBhZ2VYIC0gdGhpcy5sYXllci5jYW52YXMub2Zmc2V0TGVmdCArIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0KSAvIHNjYWxlIC0gLjUpLFxuICAgICAgeTogTWF0aC5yb3VuZCgocGFnZVkgLSB0aGlzLmxheWVyLmNhbnZhcy5vZmZzZXRUb3AgKyB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wKSAvIHNjYWxlIC0gLjUpLFxuICAgICAgY29sb3IsXG4gICAgICBzY2FsZSxcbiAgICAgIHNoYWRvd0xheWVyOiB0aGlzLnNoYWRvd0xheWVyLFxuICAgICAgbGF5ZXI6IHRoaXMubGF5ZXIsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Rvb2xFeGVjdXRpbmc6IGZhbHNlIH0pO1xuICAgIHRoaXMuaGFuZGxlRXZlbnQoJ2hhbmRsZUNsaWNrJywgZXYpO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duKGV2KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVG9vbEV4ZWN1dGluZzogdHJ1ZSB9KTtcbiAgICB0aGlzLmhhbmRsZUV2ZW50KCdoYW5kbGVNb3VzZURvd24nLCBldik7XG4gICAgaWYgKHRoaXMudGltZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoZXYpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNUb29sRXhlY3V0aW5nOiBmYWxzZSB9KTtcbiAgICB0aGlzLmhhbmRsZUV2ZW50KCdoYW5kbGVNb3VzZVVwJywgZXYpO1xuICAgIHRoaXMuc25hcHNob3QoKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZShldikge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzVG9vbEV4ZWN1dGluZykge1xuICAgICAgdGhpcy5oYW5kbGVFdmVudCgnaGFuZGxlTW91c2VNb3ZlJywgZXYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgb25DbGljaz17KGV2KSA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2KX1cbiAgICAgICAgb25Nb3VzZURvd249eyhldikgPT4gdGhpcy5oYW5kbGVNb3VzZURvd24oZXYpfVxuICAgICAgICBvbk1vdXNlVXA9eyhldikgPT4gdGhpcy5oYW5kbGVNb3VzZVVwKGV2KX1cbiAgICAgICAgb25Nb3VzZU1vdmU9eyhldikgPT4gdGhpcy5oYW5kbGVNb3VzZU1vdmUoZXYpfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMYXllciByZWY9e2wgPT4gdGhpcy5sYXllciA9IGx9IC8+XG4gICAgICAgICAgPExheWVyIHJlZj17bCA9PiB0aGlzLnNoYWRvd0xheWVyID0gbH0gLz5cbiAgICAgICAgICA8R3JpZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9O1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBjb2xvcjogc3RhdGUuY29sb3IsXG4gIHNjYWxlOiBzdGF0ZS5zY2FsZSxcbiAgdG9vbDogc3RhdGUudG9vbCxcbiAgY2FudmFzOiBzdGF0ZS5jYW52YXMsXG4gIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICB1cGRhdGVDYW52YXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShXb3Jrc3BhY2VDb250YWluZXIpO1xuIl19 */\n/*@ sourceURL=containers/Workspace.js */"
      }));
    }
  }]);

  return WorkspaceContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

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
  updateCanvas: __WEBPACK_IMPORTED_MODULE_4__store__["e" /* updateCanvas */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(WorkspaceContainer));

/***/ }),

/***/ "./containers/Zoom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Zoom__ = __webpack_require__("./components/Zoom.js");
var _jsxFileName = "/Users/lean/development/lodpi/containers/Zoom.js";





var ZoomContainer = function ZoomContainer(_ref) {
  var _increaseScale = _ref.increaseScale,
      _decreaseScale = _ref.decreaseScale,
      scale = _ref.scale;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Zoom__["a" /* default */], {
    increaseScale: function increaseScale() {
      return _increaseScale();
    },
    decreaseScale: function decreaseScale() {
      return _decreaseScale();
    },
    blockIncrease: scale >= 32,
    blockDecrease: scale <= 0,
    percentage: 100 * scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    scale: state.scale
  };
};

var mapDispatchToProps = {
  increaseScale: __WEBPACK_IMPORTED_MODULE_2__store__["c" /* increaseScale */],
  decreaseScale: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* decreaseScale */]
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ZoomContainer));

/***/ }),

/***/ "./firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var config = {
  apiKey: 'AIzaSyCJnfKVhoBw6aoupX1xhbb0X_w-nGqJpC8',
  authDomain: 'lodpi-63998.firebaseapp.com',
  databaseURL: 'https://lodpi-63998.firebaseio.com' // storageBucket: '<BUCKET>.appspot.com',

};
/* harmony default export */ __webpack_exports__["a"] = (!__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.apps.length ? __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config) : __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.app());

/***/ }),

/***/ "./pages/work.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase__ = __webpack_require__("./firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__("./components/App.js");

var _jsxFileName = "/Users/lean/development/lodpi/pages/work.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var Work = Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(function (_ref) {
  var router = _ref.router,
      ref = _ref.ref,
      preloaded = _ref.preloaded;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"], {
    store: __WEBPACK_IMPORTED_MODULE_5__store__["b" /* default */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */], {
    id: router.query.id,
    sync: function sync() {
      return ref.set(attrs);
    },
    preloaded: preloaded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
});

Work.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var query, preloaded, ref;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3__firebase__["a" /* default */].database().ref("works/".concat(query.id));

          case 3:
            ref = _context.sent;
            _context.next = 6;
            return ref.once('value', function (snapshot) {
              return preloaded = snapshot.val();
            });

          case 6:
            return _context.abrupt("return", {
              ref: ref,
              preloaded: preloaded
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toggleGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return increaseScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decreaseScale; });
/* unused harmony export selectTool */
/* unused harmony export selectColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCanvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  grid: true,
  scale: 10,
  tool: 'Pencil',
  color: '#000',
  canvas: [],
  width: 32,
  height: 32
};
/**
 * Reducers
 */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE_GRID':
      return _objectSpread({}, state, {
        grid: !state.grid
      });

    case 'INCREASE_SCALE':
      return _objectSpread({}, state, {
        scale: state.scale += 1
      });

    case 'DECREASE_SCALE':
      return _objectSpread({}, state, {
        scale: state.scale -= 1
      });

    case 'SELECT_TOOL':
      return _objectSpread({}, state, {
        tool: action.tool
      });

    case 'SELECT_COLOR':
      return _objectSpread({}, state, {
        color: action.color
      });

    case 'UPDATE_CANVAS':
      return _objectSpread({}, state, {
        canvas: action.data
      });

    default:
      return state;
  }
};
/**
 * Actions
 */

var toggleGrid = function toggleGrid() {
  return function (dispatch) {
    return dispatch({
      type: 'TOGGLE_GRID'
    });
  };
};
var increaseScale = function increaseScale() {
  return function (dispatch) {
    return dispatch({
      type: 'INCREASE_SCALE'
    });
  };
};
var decreaseScale = function decreaseScale() {
  return function (dispatch) {
    return dispatch({
      type: 'DECREASE_SCALE'
    });
  };
};
var selectTool = function selectTool(tool) {
  return function (dispatch) {
    return dispatch({
      type: 'SELECT_TOOL',
      tool: tool
    });
  };
};
var selectColor = function selectColor(color) {
  return function (dispatch) {
    return dispatch({
      type: 'SELECT_COLOR',
      color: color
    });
  };
};
var updateCanvas = function updateCanvas(data) {
  return function (dispatch) {
    return dispatch({
      type: 'UPDATE_CANVAS',
      data: data
    });
  };
};
/**
 * Init
 */

/* harmony default export */ __webpack_exports__["b"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a))));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/work.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bresenham/generator":
/***/ (function(module, exports) {

module.exports = require("bresenham/generator");

/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "shortid":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map