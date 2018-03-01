import { list as tools } from '../tools';
import { list as colors } from '../sideTools/palette';

const initialState = {
  tool: tools[0],
  color: colors[0],
  selectedLayer: null,
  scale: 10,
  meta: null,
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
