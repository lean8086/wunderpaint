import { dispatch, getState } from './store.mjs';

class Palette extends HTMLElement {
  get actionParams() {
    const prop = this.getAttribute('sets');
    return { prop, type: `set${prop.charAt(0).toUpperCase()}${prop.slice(1)}` };
  }

  onChange(value) {
    const { prop, type } = this.actionParams;
    dispatch({ type, [prop]: value });
  }

  connectedCallback() {
    const template = document.querySelector('#tool-palette-tmp');
    const node = document.importNode(template.content, true);

    const input = node.querySelector('input');
    input.value = getState()[this.actionParams.prop];
    input.addEventListener('change', () => this.onChange(input.value));

    this.appendChild(node);
  }
}

customElements.define('wunder-palette', Palette);