import { dispatch, getState } from './store.mjs';

const pickerElement = (() => {
  const { selectedColor } = getState();

  const el = document.createElement('label');
  el.setAttribute('for', 'selected-color');
  el.textContent = selectedColor;
  el.className = `tool tool--color`;

  return el;
})();

function color({ hex }) {
  const button = document.createElement('button');
  button.textContent = hex;
  button.style.background = hex;
  button.addEventListener('click', () => {
    pickerElement.textContent = hex;
    dispatch({
      type: 'setSelectedColor',
      selectedColor: hex,
    });
  });
  return button;
}

function picker() {
  const { palettes } = getState();

  const div = document.createElement('div');
  div.className = 'colorPicker__list';
  for (const palette in palettes) {
    palettes[palette].forEach(hex => {
      div.appendChild(color({ hex }));
    });
  }
  return div;
}

function colorPicker() {
  const div = document.createElement('div');
  div.className = 'colorPicker';

  div.appendChild(pickerElement);

  const input = document.createElement('input');
  input.id = 'selected-color';
  input.type = 'checkbox';
  div.appendChild(input);

  div.appendChild(picker());

  return div;
}

export default colorPicker;