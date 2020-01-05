import { dispatch } from './store.mjs';
import initialState from './initialState.mjs';

class Palette extends HTMLElement {
  onChange(color) {
    dispatch({
      type: 'setSelectedColor',
      selectedColor: color,
    })
  }
  
  connectedCallback() {
    const input = document.createElement('input');
    input.type = 'color';
    input.addEventListener('change', () => this.onChange(input.value))

    // Default behavior
    input.value = initialState.selectedColor;

    this.appendChild(input);
  }
}

customElements.define('tool-palette', Palette);