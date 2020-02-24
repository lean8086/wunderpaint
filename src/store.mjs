import {
  setSelectedTool,
  setSelectedColor,
  setBackgroundColor,
  setScale,
  setTweak,
  draw,
} from './actions.mjs';

let state = {
  selectedTool: 'brush',
  selectedColor: '#000000',
  width: window.innerWidth / 5,
  height: window.innerHeight / 5,
  backgroundColor: '#ffffff',
  scale: 5,
  preview: '',
  layers: [
    {
      src: '',
    }
  ],
  tweaks: {
    brush: {
      strokeWidth: 1,
      strokeOpacity: 100,
    },
    eraser: {
      strokeWidth: 1,
    },
  }
};

const events = {
  setSelectedTool: new Event('setSelectedTool'),
  draw: new Event('draw'),
};

export function dispatch(action) {
  state = reducer(state, action);
  if (events[action.type]) {
    dispatchEvent(events[action.type]);
  }
};

export function afterActionDispatches(type, callback) {
  window.addEventListener(type, callback);
};

export function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedTool': return setSelectedTool(state, action);
    case 'setSelectedColor': return setSelectedColor(state, action);
    case 'setBackgroundColor': return setBackgroundColor(state, action);
    case 'setScale': return setScale(state, action);
    case 'setTweak': return setTweak(state, action);
    case 'draw': return draw(state, action);
    default: throw new Error();
  }
};

export function getState() {
  return state;
};