webpackHotUpdate(4,{

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducer */
/* unused harmony export toggleGrid */
/* unused harmony export increaseScale */
/* unused harmony export decreaseScale */
/* unused harmony export selectTool */
/* unused harmony export selectColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateCanvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/es/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  grid: true,
  scale: 10,
  tool: 'pencil',
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__["a" /* default */]))));

/***/ })

})
//# sourceMappingURL=4.2dbd5e038fdea023d7da.hot-update.js.map