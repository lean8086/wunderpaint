import { getState } from './store.mjs';

function workspace() {
  const { width, height } = getState();
  const div = document.createElement('div');
  div.className = 'workspace';
  div.style.width = width;
  div.style.height = height;

  return div;
}

export default workspace;