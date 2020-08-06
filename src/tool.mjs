import { dispatch, getState } from './store.mjs';

class Tool extends HTMLElement {
  get type() {
    return this.getAttribute('type');
  }

  onChange() {
    dispatch({ type: 'setSelectedTool', selectedTool: this.type });
  }

  connectedCallback() {
    const template = document.querySelector('#tool-tmp');
    const node = document.importNode(template.content, true);

    const tool = node.querySelector('.tool');
    tool.setAttribute('for', `tool--${this.type}`);
    // TODO: use slot
    tool.innerHTML += this.innerHTML;
    this.innerHTML = '';

    const input = node.querySelector('input');
    input.addEventListener('change', () => this.onChange());
    input.checked = this.type === getState().selectedTool;
    input.id = `tool--${this.type}`;

    this.appendChild(node);
  }
}

customElements.define('wunder-tool', Tool);