import { dispatch, getState } from './store.mjs';
import initialState from './initialState.mjs';

class Workspace extends HTMLElement {
  // executingEvent = false;

  onMouseDown(workspace) {
    return (event) => {
      // this.executingEvent = true;
      dispatch({ type: 'draw', event, workspace });
      this.renderLayers();
    }
  }

  renderLayers() {
    const { layers, width, height } = getState();
    this.layers.innerHTML = '';
    for (const layer of layers) {
      const img = new Image();
      img.src = layer.src;
      img.width = width;
      img.height = height;
      this.layers.appendChild(img);
    }
  }

  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);

    const workspace = node.querySelector('.workspace');
    workspace.style.width = initialState.width;
    workspace.style.height = initialState.height;

    const container = node.querySelector('.container');
    container.addEventListener('mousedown', this.onMouseDown(workspace));
    // node.addEventListener('mousemove', (ev) => this.onMouseMove(ev));
    // node.addEventListener('mouseup', (ev) => this.onMouseUp(ev));
    // node.addEventListener('click', (ev) => this.onClick(ev));

    this.layers = workspace.querySelector('.layers');
    this.phantomLayer = workspace.querySelector('.phantomLayer');
    this.grid = workspace.querySelector('.grid');

    this.appendChild(node);
  }
}

customElements.define('da-workspace', Workspace);