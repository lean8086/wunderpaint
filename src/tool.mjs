import { dispatch, getState } from './store.mjs';

class Tool extends HTMLElement {
  get type() {
    return this.getAttribute('type');
  }

  select() {
    dispatch({ type: 'setSelectedTool', selectedTool: this.type });
  }

  connectedCallback() {
    const template = document.querySelector('#tool-tmp');
    const node = document.importNode(template.content, true);

    const tool = node.querySelector('.tool');
    tool.setAttribute('for', `tool--${this.type}`);
    tool.setAttribute('title', this.getAttribute('description'));
    tool.setAttribute('data-shortcut', this.getAttribute('shortcut'));
    // TODO: use slot
    tool.innerHTML += this.innerHTML;
    this.innerHTML = '';

    const input = node.querySelector('input');
    input.addEventListener('change', () => this.select());
    input.checked = this.type === getState().selectedTool;
    input.id = `tool--${this.type}`;

    document.addEventListener('keypress', (ev) => {
      if (ev.key === this.getAttribute('shortcut')) {
        this.select();
        input.checked = true;
      }
    });

    this.appendChild(node);
  }
}

customElements.define('wunder-tool', Tool);