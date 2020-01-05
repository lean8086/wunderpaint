import { dispatch, getState } from './store.mjs';

function input({ name }) {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'tool';
  radio.checked = name === getState().selectedTool;
  radio.className = 'tool__input';
  radio.value = name;
  radio.addEventListener('change', () => dispatch({
    type: 'setSelectedTool',
    selectedTool: name,
  }));

  return radio;
}

function tool({ name }) {
  const label = document.createElement('label');
  label.textContent = name;
  label.className = `tool tool--${name}`;

  label.appendChild(input({ name }));

  return label;
}

export default tool;