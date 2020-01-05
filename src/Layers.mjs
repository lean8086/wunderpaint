// import { dispatch } from './store.mjs';
// import initialState from './initialState.mjs';
// import colorPicker from './colorPicker.mjs';

// class Layers extends HTMLElement {
//   toggle() {
//     this.dialog.hidden = !this.dialog.hidden;
//   }
  
//   attributeChangedCallback(attrName, oldValue, newValue) {
//     this[attrName] = this.hasAttribute(attrName);
//   }
  
//   connectedCallback() {
//     const template = document.querySelector('#palette-tmp');
//     const node = document.importNode(template.content, true);
//     this.dialog = node.querySelector('.dialog');
    
//     const trigger = node.querySelector('.trigger');
//     trigger.addEventListener('click', () => this.toggle());
//     trigger.textContent = initialState.selectedColor;
    
//     const selectedColor = node.querySelector('.selected-color');
//     selectedColor.textContent = initialState.selectedColor;

//     this.appendChild(node);
//   }
// }

// customElements.define('tool-palette', Layers);