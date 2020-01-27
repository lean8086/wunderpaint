import initialState from './initialState.mjs';
import {
  setSelectedTool,
  setSelectedColor,
  draw,
} from './actions.mjs';

let state = initialState;

export function dispatch(action) {
  state = reducer(state, action);
  console.log('dispatched', state);
};

export function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedTool': return setSelectedTool(state, action);
    case 'setSelectedColor': return setSelectedColor(state, action);
    case 'draw': return draw(state, action);
    default: throw new Error();
  }
};

export function getState() {
  return state;
};