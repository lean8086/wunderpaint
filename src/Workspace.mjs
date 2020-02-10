import { dispatch, getState } from './store.mjs';
import initialState from './initialState.mjs';
import { compose } from './utils/processImage.mjs';

class Workspace extends HTMLElement {
  shouldExecuteMoveEvent = false;

  dispatchAction(subtype, event) {
    const action = { type: 'draw', event, workspace: this.workspace };
    dispatch({ ...action, subtype: `${subtype}Shadow`, shadow: true });
    dispatch({ ...action, subtype });
  }

  onMouseDown(event) {
    this.shouldExecuteMoveEvent = true;
    this.dispatchAction('down', event);
    this.renderPreview();
  }

  onMouseMove(event) {
    if (this.shouldExecuteMoveEvent) {
      this.dispatchAction('move', event);
      this.renderPreview();
    }
  }

  onMouseUp(event) {
    this.shouldExecuteMoveEvent = false;
    this.dispatchAction('up', event);
    this.renderPreview();
  }

  renderPreview() {
    const { preview } = getState();
    this.composition.src = preview;
  }

  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);

    this.workspace = node.querySelector('.workspace');
    this.workspace.style.width = initialState.width;
    this.workspace.style.height = initialState.height;

    this.composition = node.querySelector('.composition');

    const container = node.querySelector('.container');
    container.addEventListener('mousedown', event => this.onMouseDown(event));
    container.addEventListener('mousemove', event => this.onMouseMove(event));
    container.addEventListener('mouseup', event => this.onMouseUp(event));

    this.appendChild(node);
  }
}

customElements.define('da-workspace', Workspace);