import toolActions from './tools/index.js';

export function setSelectedTool(state, action) {
  return { ...state, selectedTool: action.selectedTool };
}

export function setSelectedColor(state, action) {
  return { ...state, selectedColor: action.selectedColor };
}

// TODO: break down into multiple functions
export function draw(state, action) {
  // Calculate coordinates of the intention to draw
  const { clientX = 0, clientY = 0, target } = action.event;
  const { left, top } = action.workspace.getBoundingClientRect();

  const coords = {
    x: Math.round(clientX - left),
    y: Math.round(clientY - top),
    isInsideWorkspace: target === action.workspace,
  };

  // Avoid visual changes
  // TODO: this should be defined by every tool
  if (!coords.isInsideWorkspace) { return state; }

  const { width, height, layers, selectedColor, selectedTool } = state;

  // Process tool with a context and coords, and get a base 64 as output
  // TODO: it's expensive to create a canvas on every click or move.
  // TODO: Use an off canvas or a previosly created one
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // TODO: very expensive process. The DOM layer is an Image so try to use that
  // TODO: Or keep the canvas updated so there's no need to reapply anything
  const img = new Image();
  img.src = layers[0].src;
  ctx.drawImage(img, 0, 0, width, height);

  // TODO: this is the pencil, so apply tool separately
  const toolAction = toolActions[selectedTool][action.subtype];
  if (!toolAction) { return state }
  toolAction({
    x: coords.x,
    y: coords.y,
    color: selectedColor,
    ctx,
  });
  const src = canvas.toDataURL();

  // TODO: Use selectedLayer
  return { ...state, layers: [{ ...layers[0], src }] };
}