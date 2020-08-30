import { dispatch, getState } from './store.mjs';

class Button extends HTMLElement {
  get type() {
    return this.getAttribute('type');
  }
  
  get description() {
    return this.getAttribute('description');
  }

  onClick() {
    switch (this.type) {
      case 'save':
        const snapshot = getState();
        const blob = new Blob([JSON.stringify(snapshot)], { type: 'text/plain;charset=utf-8' });
        const saveEl = document.createElement('a');
        saveEl.download = `${snapshot.title}_${(new Date()).toISOString()}.wunder`;
        saveEl.href = URL.createObjectURL(blob);
        saveEl.click();
        break;
      case 'export':
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
        break;
      default: break;
    }
  }

  connectedCallback() {
    const button = document.createElement('button');
    button.className = 'toolbar-button';
    button.setAttribute('title', this.description);
    // TODO: use slot
    button.innerHTML += this.innerHTML;
    this.innerHTML = '';
    button.addEventListener('click', () => this.onClick());

    this.appendChild(button);
  }
}

customElements.define('wunder-button', Button);