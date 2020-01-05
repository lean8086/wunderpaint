import { dispatch } from './store.mjs';
import initialState from './initialState.mjs';

class Tool extends HTMLElement {
  get type() {
    return this.getAttribute('type');
  }

  onChange() {
    dispatch({
      type: 'setSelectedTool',
      selectedTool: this.type,
    })
  }
  
  connectedCallback() {
    const template = document.querySelector('#tool-tmp');
    const node = document.importNode(template.content, true);
    const tool = node.querySelector('.tool');

    tool.classList.add(`tool--${this.type}`);
    tool.insertAdjacentHTML('beforeend', this.type);
    tool.addEventListener('change', () => this.onChange());

    // Default behavior
    tool.querySelector('input').checked = this.type === initialState.selectedTool;

    this.appendChild(node);
  }
}

customElements.define('da-tool', Tool);