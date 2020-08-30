import { dispatch, afterActionDispatches, getState } from './store.mjs';

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
    } else {
      dispatch({ type: 'draw', event, workspace: this.workspace, subtype: 'preview', shadow: true });
    }
  }

  onMouseUp(event) {
    this.shouldExecuteMoveEvent = false;
    this.dispatchAction('up', event);
  }

  render() {
    const { preview } = getState();
    this.composition.src = preview;
  }

  updateScale() {
    const { scale } = getState();
    this.workspace.style.transform = `scale(${scale})`;
  }

  updateBackgroundColor() {
    const { backgroundColor } = getState();
    this.container.style.backgroundColor = backgroundColor;
    this.workspace.style.backgroundColor = backgroundColor;
  }

  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);

    const { width, height } = getState();

    const workspace = node.querySelector('.workspace');
    workspace.style.width = width;
    workspace.style.height = height;
    this.workspace = workspace;

    this.composition = node.querySelector('.composition');

    const container = node.querySelector('.container');
    container.addEventListener('mousedown', event => this.onMouseDown(event));
    container.addEventListener('mousemove', event => this.onMouseMove(event));
    container.addEventListener('mouseup', event => this.onMouseUp(event));
    this.container = container;

    afterActionDispatches('draw', () => this.render());
    afterActionDispatches('setState', () => this.render());
    afterActionDispatches('setScale', () => this.updateScale());
    afterActionDispatches('setBackgroundColor', () => this.updateBackgroundColor());

    this.render();
    this.updateScale();
    this.updateBackgroundColor();
    this.appendChild(node);
  }
}

customElements.define('wunder-workspace', Workspace);