export function setSelectedTool(state, action) {
  return { ...state, selectedTool: action.selectedTool };
}

export function setSelectedColor(state, action) {
  return { ...state, selectedColor: action.selectedColor };
}

export function draw(state, action) {
  // Calculate coordinates of the intention to draw
  const { clientX = 0, clientY = 0, target } = action.event;
  const { left, top } = action.workspace.getBoundingClientRect();

  const coords = {
    x: Math.round(clientX - left),
    y: Math.round(clientY - top),
    isInsideWorkspace: target === action.workspace,
  };

  // Process tool with a context and coords, and get a base 64 as output
  const canvas = document.createElement('canvas');
  canvas.width = state.width;
  canvas.height = state.height;
  const ctx = canvas.getContext('2d');

  // TODO: import existing src here before applying any tool
  // TODO: this is the pencil, so apply tool separately
  ctx.fillStyle = state.selectedColor;
  ctx.fillRect(coords.x, coords.y, 1, 1);

  const src = canvas.toDataURL();

  return { ...state, layers: [{ ...state.layers[0], src }] };
}