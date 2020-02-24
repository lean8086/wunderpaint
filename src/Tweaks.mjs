import { dispatch, afterActionDispatches, getState } from './store.mjs';

// TODO: maybe strokeShape checkbox square/circle
const inputsSetup = {
  strokeWidth: { type: 'range', min: 1, max: 25 },
  strokeOpacity: { type: 'range', min: 1, max: 100 },
  filled: { type: 'checkbox' },
};

class Tweaks extends HTMLElement {
  onChange(tweak, value) {
    dispatch({ type: 'setTweak', tweak, value });
  }

  render() {
    // FIXME
    this.innerHTML = '';

    const { tweaks, selectedTool } = getState();
    const tweaksByTool = tweaks[selectedTool];
    if (!tweaksByTool) { return; }
    
    for (const [ prop, value ] of Object.entries(tweaksByTool)) {
      const input = document.createElement('input');
      for (const [ p, v ] of Object.entries(inputsSetup[prop])) {
        input[p] = v;
      }
      input.value = value;
      input.addEventListener('change', () => this.onChange(prop, input.value));
      this.appendChild(input);
    }
  }

  connectedCallback() {
    afterActionDispatches('setSelectedTool', () => this.render());
    this.render();
  }
}

customElements.define('da-tweaks', Tweaks);