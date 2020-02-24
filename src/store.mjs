import initialState from './initialState.mjs';
import {
  setSelectedTool,
  setSelectedColor,
  draw,
} from './actions.mjs';

let state = initialState;
const stateUpdateEvent = new Event('stateUpdate');

export function dispatch(action) {
  state = reducer(state, action);
  dispatchEvent(stateUpdateEvent);
  console.log(`dispatched ${action.type} ${action.subtype || ''}`, state);
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