import toolActions from './tools/index.js';
import { processToImageData } from './processImage.mjs';

export function setSelectedTool(state, action) {
  return { ...state, selectedTool: action.selectedTool };
}

export function setSelectedColor(state, action) {
  return { ...state, selectedColor: action.selectedColor };
}

export function draw(state, action) {
  // Avoid to execute if there is no tool action for this event
  const toolAction = toolActions[state.selectedTool][action.subtype];
  if (!toolAction) { return state; }

  // Avoid to execute if this event is happening outside workspace
  // TODO: this should be defined by every tool
  const isInsideWorkspace = action.event.target === action.workspace;
  if (!isInsideWorkspace) { return state; }

  // Calculate coordinates of the intention to draw
  const { clientX, clientY } = action.event;
  const { left, top } = action.workspace.getBoundingClientRect();
  const { width, height, layers, selectedColor } = state;

  const imageData = processToImageData({
    width,
    height,
    // TODO: Use selectedLayer
    preloadedData: layers[0].src,
    useTool: toolAction({
      x: Math.round(clientX - left),
      y: Math.round(clientY - top),
      color: selectedColor,
    }),
  });

  // TODO: Use selectedLayer
  return { ...state, layers: [{ ...layers[0], src: imageData }] };
}