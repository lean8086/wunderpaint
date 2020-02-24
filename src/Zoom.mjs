import { dispatch, getState } from './store.mjs';

class Zoom extends HTMLElement {
  onChange(scale) {
    dispatch({ type: 'setScale', scale });
    this.render();
  }

  render() {
    const { scale } = getState();
    this.label.textContent = scale * 100;
  }
  
  connectedCallback() {
    const template = document.querySelector('#tool-zoom-tmp');
    const node = document.importNode(template.content, true);

    const input = node.querySelector('input');
    input.value = getState().scale;
    input.addEventListener('input', () => this.onChange(input.value));
    
    this.label = node.querySelector('span');
    
    this.render();
    this.appendChild(node);
  }
}

customElements.define('da-zoom', Zoom);