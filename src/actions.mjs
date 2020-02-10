import toolActions from './tools/index.js';
import { processToImageData, compose } from './utils/processImage.mjs';

export function setSelectedTool(state, action) {
  return { ...state, selectedTool: action.selectedTool };
}

export function setSelectedColor(state, action) {
  return { ...state, selectedColor: action.selectedColor };
}

export function draw(state, action) {
  // Avoid to execute if there is no tool action for this event
  const prepareToolAction = toolActions[state.selectedTool][action.subtype];
  if (!prepareToolAction) { return state; }

  // Calculate coordinates of the intention to draw
  const { clientX, clientY } = action.event;
  const { left, top } = action.workspace.getBoundingClientRect();
  const { width, height, layers, selectedColor } = state;

  const imageData = processToImageData({
    width,
    height,
    // TODO: when more layers use selectedLayer
    preloadedData: layers[0].src,
    useTool: prepareToolAction({
      x: Math.floor(clientX - left),
      y: Math.floor(clientY - top),
      color: selectedColor,
    }),
  });

  /**
   * IMPORTANT NOTE: using general `preview` as a shadow layer!
   * If this is a shadowing action then `preview` will be updated but the reference that is stored
   * in the `selectedLayer` won't. This way next iteration will continue fresh while preview is
   * showing something unfinished.
   */
  return {
    ...state,
    // TODO when more layers use compose({ width, height, layers: updatedLayers }),
    preview: imageData,
    // TODO: when more layers use selectedLayer
    layers: action.shadow ? layers : [{ ...layers[0], src: imageData }],
  };
}