import { dispatch, getState } from './store.mjs';

class Vandelay extends HTMLElement {
  load(input) {
    const reader = new FileReader();
    reader.onload = () => dispatch({ type: 'setState', state: JSON.parse(reader.result) });
    reader.readAsText(input.files[0]);
  }

  save() {
    const snapshot = getState();
    const blob = new Blob([JSON.stringify(snapshot)], { type: 'text/plain;charset=utf-8' });
    const saveEl = document.createElement('a');
    saveEl.download = `${snapshot.title}_${(new Date()).toISOString()}.wunder`;
    saveEl.href = URL.createObjectURL(blob);
    saveEl.click();
  }

  export() {
    const { width, height, preview, title } = getState();
    const canvas = document.createElement('canvas');
    const img = new Image();
    const ctx = canvas.getContext('2d');
    const exportEl = document.createElement('a');
    canvas.width = width;
    canvas.height = height;
    img.src = preview;
    ctx.drawImage(img, 0, 0);
    exportEl.download = `${title}.png`;
    exportEl.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    exportEl.click();
  }

  setTitle(title) {
    dispatch({ type: 'setTitle', title });
  }

  connectedCallback() {
    const template = document.querySelector('#vandelay-tmp');
    const node = document.importNode(template.content, true);

    const loadInput = node.querySelector('[data-type="load"]');
    loadInput.addEventListener('change', () => this.load(loadInput));
    node.querySelector('[data-type="save"]').addEventListener('click', () => this.save());
    node.querySelector('[data-type="export"]').addEventListener('click', () => this.export());

    const titleEl = node.querySelector('[data-type="title"]');
    titleEl.value = getState().title;
    titleEl.addEventListener('input', () => this.setTitle(titleEl.value));

    this.appendChild(node);
  }
}

customElements.define('wunder-vandelay', Vandelay);