import { dispatch, getState } from './store.mjs';
import initialState from './initialState.mjs';

class Workspace extends HTMLElement {
  shouldExecuteMoveEvent = false;

  onMouseDown(event) {
    this.shouldExecuteMoveEvent = true;
    dispatch({ type: 'draw', event, workspace: this.workspace });
    this.renderLayers();
  }

  onMouseMove(event) {
    if (this.shouldExecuteMoveEvent) {
      dispatch({ type: 'draw', event, workspace: this.workspace });
      this.renderLayers();
    }
  }

  onMouseUp(event) {
    this.shouldExecuteMoveEvent = false;
    // dispatch({ type: 'draw', event, workspace: this.workspace });
    // this.renderLayers();
  }

  // TODO: this should be triggered by an event (dispatched) and/or in a Layer component
  // TODO: instead of creating layers every time, this should ONLY update the already created selectedLayer
  renderLayers() {
    const { layers, width, height } = getState();

    this.workspace.innerHTML = '';
    for (const layer of layers) {
      const img = new Image();
      img.src = layer.src;
      img.width = width;
      img.height = height;
      this.workspace.appendChild(img);
    }
  }

  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);

    this.workspace = node.querySelector('.workspace');
    this.workspace.style.width = initialState.width;
    this.workspace.style.height = initialState.height;

    const container = node.querySelector('.container');
    container.addEventListener('mousedown', event => this.onMouseDown(event));
    container.addEventListener('mousemove', event => this.onMouseMove(event));
    container.addEventListener('mouseup', event => this.onMouseUp(event));

    this.appendChild(node);
  }
}

customElements.define('da-workspace', Workspace);