import { createStore, applyMiddleware } from 'redux';
import { generate } from 'shortid';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  grid: true,
  scale: 10,
  tool: 'pencil',
  color: '#000',
  width: 32,
  height: 32,
  layers: {},
  id: '',
  user: null,
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
    case 'SET_USER':
      return {
        ...state,
        user: {
          uid: action.user.uid,
          email: action.user.email,
          displayName: action.user.email ? action.user.email.split('@')[0]: '',
        },
      };
    case 'UPDATE_LAYER':
      return {
        ...state,
        layers: {
          ...state.layers,
          [action.layer.order]: action.layer.data,
        },
      };
    case 'RESET_STATE':
      return {
        ...initialState,
        id: generate(),
        user: state.user,
      };
    case 'POPULATE_STATE':
      return {
        ...initialState,
        ...action.preloadedData,
        user: state.user,
      };
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

export const setUser = (user) => dispatch => (
  dispatch({ type: 'SET_USER', user })
);

export const updateLayer = (layer) => dispatch => (
  dispatch({ type: 'UPDATE_LAYER', layer })
);

export const resetState = () => dispatch => (
  dispatch({ type: 'RESET_STATE' })
);

export const populateState = (preloadedData) => dispatch => (
  dispatch({ type: 'POPULATE_STATE', preloadedData })
);

/**
 * Init
 * param preloadedState May contain an 'id' from the URL or data from ddbb
 */
export default (state = initialState) => (
  createStore(reducer, state, applyMiddleware(thunkMiddleware))
);
