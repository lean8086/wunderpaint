import {
  setSelectedTool,
  setSelectedColor,
  setBackgroundColor,
  setScale,
  draw,
} from './actions.mjs';

const stateUpdateEvent = new Event('stateUpdate');

let state = {
  selectedTool: 'brush',
  width: window.innerWidth / 5,
  height: window.innerHeight / 5,
  selectedColor: '#000000',
  backgroundColor: '#ffffff',
  scale: 5,
  preview: '',
  layers: [
    {
      src: '',
    }
  ]
};

export function dispatch(action) {
  state = reducer(state, action);
  dispatchEvent(stateUpdateEvent);
};

export function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedTool': return setSelectedTool(state, action);
    case 'setSelectedColor': return setSelectedColor(state, action);
    case 'setBackgroundColor': return setBackgroundColor(state, action);
    case 'setScale': return setScale(state, action);
    case 'draw': return draw(state, action);
    default: throw new Error();
  }
};

export function getState() {
  return state;
};