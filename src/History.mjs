import history from './utils/history.mjs';
import { dispatch, getState } from './store.mjs';

class History extends HTMLElement {
  get actionParams() {
    const prop = this.getAttribute('sets');
    return { prop, type: `set${prop.charAt(0).toUpperCase()}${prop.slice(1)}` };
  }

  undo() {
    const state = history.undo();
    if (state) dispatch({ type: 'setState', state });
  }
  
  redo() {
    const state = history.redo();
    if (state) dispatch({ type: 'setState', state });
  }

  connectedCallback() {
    // First history ever
    history.add(getState());

    const template = document.querySelector('#history-tmp');
    const node = document.importNode(template.content, true);

    const undoButton = node.querySelector('[data-type="undo"]');
    undoButton.addEventListener('click', () => this.undo());
    const redoButton = node.querySelector('[data-type="redo"]');
    redoButton.addEventListener('click', () => this.redo());

    document.addEventListener('keydown', (ev) => {
      if (!ev.metaKey && !ev.ctrlKey) return;
      if (ev.key !== 'z') return;
      ev.preventDefault();
      if (ev.shiftKey) return this.redo();
      this.undo();
    });

    this.appendChild(node);
  }
}

customElements.define('wunder-history', History);