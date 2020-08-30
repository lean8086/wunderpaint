import { dispatch, getState } from './store.mjs';

class Zoom extends HTMLElement {
  scales = [.25, .5, .75, 1, 2, 3, 4, 5, 10, 20, 30, 50]

  setScale(scale) {
    dispatch({ type: 'setScale', scale });
  }

  connectedCallback() {
    const select = document.createElement('select');
    select.addEventListener('change', () => this.setScale(select.value));

    this.scales.forEach(scale => {
      const option = document.createElement('option');
      option.value = scale;
      option.selected = scale === getState().scale;
      option.textContent = `${scale * 100}%`;
      select.appendChild(option);
    });

    this.appendChild(select);
  }
}

customElements.define('wunder-zoom', Zoom);