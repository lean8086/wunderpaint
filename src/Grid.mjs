import { dispatch, getState, afterActionDispatches } from './store.mjs';

class Grid extends HTMLElement {
  bgCorrection = { 3: [0, -1], 4: [0, -1], 5: [0, 0], 10: [0, -4], 20: [0, -1], 30: [0, -8], 50: [19, 8] };

  toggleGrid() {
    dispatch({ type: 'toggleGrid' });
    this.updateElements();
  }

  updateElements() {
    const { grid, scale } = getState();
    if (scale > 1) {
      this.container.classList[grid ? 'add' : 'remove']('grid');
      this.toggle.classList[grid ? 'add' : 'remove']('toolbar-button--active');
    } else {
      this.container.classList.remove('grid');
      this.toggle.classList.remove('toolbar-button--active');
    }
  }

  updateScale() {
    const { scale } = getState();
    if (scale > 2) {
      this.container.classList.add('grid');
      let cssVars = `--scale:${scale}px;`;
      const [ corrX, corrY ] = this.bgCorrection[scale];
      if (corrX || corrY) cssVars += `--grid-correction:${corrX}px ${corrY}px`;
      this.container.style = cssVars;
    } else {
      this.container.classList.remove('grid');
    }
  }

  connectedCallback() {
    const template = document.querySelector('#grid-tmp');
    const node = document.importNode(template.content, true);

    const toggle = node.querySelector('button');
    toggle.addEventListener('click', () => this.toggleGrid());
    this.toggle = toggle;

    this.container = document.querySelector('.container');

    afterActionDispatches('setScale', () => this.updateScale());

    this.updateElements();
    this.updateScale();

    this.appendChild(node);
  }
}

customElements.define('wunder-grid', Grid);