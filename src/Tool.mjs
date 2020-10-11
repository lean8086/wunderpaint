import { dispatch, getState } from './store.mjs';

class Tool extends HTMLElement {
  get type() {
    return this.getAttribute('type');
  }
  
  get description() {
    return this.getAttribute('description');
  }
  
  get shortcut() {
    return this.getAttribute('shortcut');
  }

  setSelectedTool() {
    dispatch({ type: 'setSelectedTool', selectedTool: this.type });
  }

  connectedCallback() {
    const template = document.querySelector('#tool-tmp');
    const node = document.importNode(template.content, true);

    const tool = node.querySelector('.tool');
    tool.setAttribute('for', `tool--${this.type}`);
    tool.setAttribute('title', `${this.description} (${this.shortcut.toUpperCase()})`);
    // TODO: use slot
    tool.innerHTML += this.innerHTML;
    this.innerHTML = '';

    const input = node.querySelector('input');
    input.addEventListener('change', () => this.setSelectedTool());
    input.checked = this.type === getState().selectedTool;
    input.id = `tool--${this.type}`;

    document.addEventListener('keypress', (ev) => {
      if (ev.key === this.shortcut) {
        this.setSelectedTool();
        input.checked = true;
      }
    });

    this.appendChild(node);
  }
}

customElements.define('wunder-tool', Tool);