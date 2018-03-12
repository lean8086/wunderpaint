import { list as tools } from '../tools';
import palette, { list as colors } from '../sideTools/palette';

const initialState = {
  tool: tools[0],
  color: palette[colors[0]],
  scale: 10,
  width: 16,
  height: 16,
  grid: true,
  canvas: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TOOL':
      return {
        ...state,
        tool: action.toolName,
      }
    case 'SELECT_COLOR':
      return {
        ...state,
        color: action.colorValue,
      }
    case 'TOGGLE_GRID':
      return {
        ...state,
        grid: !state.grid,
      }
    case 'INCREASE_SCALE':
      return {
        ...state,
        scale: state.scale += 1,
      }
    case 'DECREASE_SCALE':
      return {
        ...state,
        scale: state.scale -= 1,
      }
    case 'UPDATE_CANVAS':
      return {
        ...state,
        canvas: action.data,
      }
    default:
      return state;
  }
};

export const selectTool = (toolName) => (dispatch) => (
  dispatch({
    type: 'SELECT_TOOL',
    toolName,
  })
);

export const selectColor = (colorValue) => (dispatch) => (
  dispatch({
    type: 'SELECT_COLOR',
    colorValue,
  })
);

export const toggleGrid = () => (dispatch) => (
  dispatch({
    type: 'TOGGLE_GRID',
  })
);

export const increaseScale = () => (dispatch) => (
  dispatch({
    type: 'INCREASE_SCALE',
  })
);

export const decreaseScale = () => (dispatch) => (
  dispatch({
    type: 'DECREASE_SCALE',
  })
);

export const updateCanvas = (data) => (dispatch) => (
  dispatch({
    type: 'UPDATE_CANVAS',
    data,
  })
);
