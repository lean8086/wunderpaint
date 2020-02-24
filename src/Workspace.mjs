import { dispatch, getState } from './store.mjs';
import initialState from './initialState.mjs';

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
  }

  onMouseMove(event) {
    if (this.shouldExecuteMoveEvent) {
      this.dispatchAction('move', event);
    }
  }

  onMouseUp(event) {
    this.shouldExecuteMoveEvent = false;
    this.dispatchAction('up', event);
  }

  render() {
    const { preview, scale, backgroundColor } = getState();
    this.composition.src = preview;
    this.workspace.style.transform = `scale(${scale})`;
    this.workspace.style.backgroundColor = backgroundColor;
  }

  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);

    this.workspace = node.querySelector('.workspace');
    this.workspace.style.width = initialState.width;
    this.workspace.style.height = initialState.height;
    this.workspace.style.transform = `scale(${initialState.scale})`;
    
    this.composition = node.querySelector('.composition');
    
    const container = node.querySelector('.container');
    container.addEventListener('mousedown', event => this.onMouseDown(event));
    container.addEventListener('mousemove', event => this.onMouseMove(event));
    container.addEventListener('mouseup', event => this.onMouseUp(event));
    
    window.addEventListener('stateUpdate', () => this.render());

    this.appendChild(node);
  }
}

customElements.define('da-workspace', Workspace);