import initialState from './initialState.mjs';

class Workspace extends HTMLElement {
  connectedCallback() {
    const template = document.querySelector('#workspace-tmp');
    const node = document.importNode(template.content, true);
    
    const workspace = node.querySelector('.workspace');
    workspace.style.width = initialState.width;
    workspace.style.height = initialState.height;
    
    this.layers = workspace.querySelector('.layers');
    this.phatom = workspace.querySelector('.phatom');
    this.grid = workspace.querySelector('.grid');

    // node.addEventListener('click', (ev) => this.onClick(ev));
    // node.addEventListener('mousedown', (ev) => this.onMouseDown(ev));
    // node.addEventListener('mouseup', (ev) => this.onMouseUp(ev));
    // node.addEventListener('mousemove', (ev) => this.onMouseMove(ev));

    this.appendChild(node);
  }
}

customElements.define('da-workspace', Workspace);