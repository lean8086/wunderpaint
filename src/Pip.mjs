import { dispatch, getState, afterActionDispatches } from './store.mjs';

let positions = ['right-bottom', 'left-bottom', 'left-top', 'right-top'];

class Pip extends HTMLElement {
  togglePip() {
    dispatch({ type: 'togglePip' });
    this.updateElements();
  }
  
  updateElements() {
    const { pip } = getState();
    this.toggle.classList[pip ? 'add' : 'remove']('toolbar-button--active');
    this.pip.hidden = !pip;
    this.render();
    this.updateScale();
    this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    const { backgroundColor, pip } = getState();
    if (!pip) return;
    this.pip.style.backgroundColor = backgroundColor;
  }

  updateScale() {
    const { width, height, pip } = getState();
    if (!pip) return;
    this.pip.style.width = `${width}px`;
    this.pip.style.height = `${height}px`;
  }

  render() {
    const { preview, pip } = getState();
    if (!pip) return;
    this.pip.src = preview;
  }

  changePipPosition() {
    positions.push(positions.shift());
    positions.unshift();
    this.pip.dataset.position = positions[0];
  }

  connectedCallback() {
    const template = document.querySelector('#pip-tmp');
    const node = document.importNode(template.content, true);

    const toggle = node.querySelector('button');
    toggle.addEventListener('click', () => this.togglePip());
    this.toggle = toggle;

    const pip = node.querySelector('#pip');
    pip.addEventListener('click', () => this.changePipPosition());
    this.pip = pip;

    afterActionDispatches('draw', () => this.render());
    afterActionDispatches('setState', () => this.render());
    afterActionDispatches('setScale', () => this.updateScale());
    afterActionDispatches('setBackgroundColor', () => this.updateBackgroundColor());

    this.updateElements();

    this.appendChild(node);
  }
}

customElements.define('wunder-pip', Pip);