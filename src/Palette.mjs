import { dispatch } from './store.mjs';
import initialState from './initialState.mjs';

class Palette extends HTMLElement {
  onChange(selectedColor) {
    dispatch({ type: 'setSelectedColor', selectedColor });
  }
  
  connectedCallback() {
    const template = document.querySelector('#tool-palette-tmp');
    const node = document.importNode(template.content, true);
    
    const input = node.querySelector('input');
    input.value = initialState.selectedColor;
    input.addEventListener('change', () => this.onChange(input.value));

    this.appendChild(node);
  }
}

customElements.define('da-palette', Palette);