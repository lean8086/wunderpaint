import { dispatch } from './store.mjs';
import initialState from './initialState.mjs';

class Palette extends HTMLElement {
  onChange(value) {
    dispatch({ type: this.actionType, [this.actionProp]: value });
  }
  
  connectedCallback() {
    this.actionProp = this.getAttribute('sets');
    this.actionType = `set${this.actionProp.charAt(0).toUpperCase() + this.actionProp.slice(1)}`;

    const template = document.querySelector('#tool-palette-tmp');
    const node = document.importNode(template.content, true);

    const input = node.querySelector('input');
    input.value = initialState[this.actionProp];
    input.addEventListener('change', () => this.onChange(input.value));


    this.appendChild(node);
  }
}

customElements.define('da-palette', Palette);