import { dispatch } from './store.mjs';
import initialState from './initialState.mjs';

class Zoom extends HTMLElement {
  onChange(scale) {
    dispatch({ type: 'setScale', scale });
  }
  
  connectedCallback() {
    const template = document.querySelector('#tool-zoom-tmp');
    const node = document.importNode(template.content, true);
    
    const input = node.querySelector('input');
    input.value = initialState.scale;
    input.addEventListener('input', () => {
      this.onChange(input.value);
      label.textContent = input.value * 100;
    });

    const label = node.querySelector('span');
    label.textContent = initialState.scale * 100;

    this.appendChild(node);
  }
}

customElements.define('da-zoom', Zoom);