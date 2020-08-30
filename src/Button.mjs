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
        const textarea = document.createElement('textarea');
        textarea.textContent = JSON.stringify(getState());
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        break;
      case 'export':
        const { width, height, preview, title } = getState();
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        
        const img = new Image();
        img.src = preview;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const link = document.createElement('a');
        link.download = `${title}.png`;
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
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