import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  grid: true,
  scale: 10,
  tool: 'pencil',
  color: '#000',
  canvas: [],
  width: 32,
  height: 32,
};

/**
 * Reducers
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_GRID':
      return { ...state, grid: !state.grid };
    case 'INCREASE_SCALE':
      return { ...state, scale: state.scale += 1 };
    case 'DECREASE_SCALE':
      return { ...state, scale: state.scale -= 1 };
    case 'SELECT_TOOL':
      return { ...state, tool: action.tool };
    case 'SELECT_COLOR':
      return { ...state, color: action.color };
    case 'UPDATE_CANVAS':
      return { ...state, canvas: action.data };
    default:
      return state;
  }
};

/**
 * Actions
 */
export const toggleGrid = () => dispatch => (
  dispatch({ type: 'TOGGLE_GRID' })
);

export const increaseScale = () => dispatch => (
  dispatch({ type: 'INCREASE_SCALE' })
);

export const decreaseScale = () => dispatch => (
  dispatch({ type: 'DECREASE_SCALE' })
);

export const selectTool = (tool) => dispatch => (
  dispatch({ type: 'SELECT_TOOL', tool })
);

export const selectColor = (color) => dispatch => (
  dispatch({ type: 'SELECT_COLOR', color })
);

export const updateCanvas = (data) => dispatch => (
  dispatch({ type: 'UPDATE_CANVAS', data })
);

/**
 * Init
 */
export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
