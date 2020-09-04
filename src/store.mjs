import {
  setSelectedTool,
  setSelectedColor,
  setBackgroundColor,
  setScale,
  setTweak,
  setState,
  setTitle,
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
  title: 'Untitled Art',
  layers: [
    {
      src: '',
    }
  ],
  tweaks: {
    brush: {
      strokeWidth: 1,
    },
    ellipse: {
      strokeWidth: 1,
    },
    eraser: {
      strokeWidth: 1,
    },
    line: {
      strokeWidth: 1,
    },
    rectangle: {
      strokeWidth: 1,
    },
  }
};

const events = {
  setSelectedTool: new Event('setSelectedTool'),
  setBackgroundColor: new Event('setBackgroundColor'),
  setScale: new Event('setScale'),
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
    case 'setTitle': return setTitle(state, action);
    case 'setTweak': return setTweak(state, action);
    case 'setState': return setState(action);
    case 'draw': return draw(state, action);
    default: throw new Error(`A reducer for the action '${action.type}' was not found.`);
  }
};

export function getState() {
  return state;
};