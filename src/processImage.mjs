const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();

// Process tool with a context and coords, and get a base 64 as output
export function processToImageData({ width, height, preloadedData, useTool }) {
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);

  img.src = preloadedData;
  ctx.drawImage(img, 0, 0, width, height);

  useTool(ctx);

  return canvas.toDataURL();
}

export function compose({ width, height, layers }) {
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);

  for (const layer of layers) {
    img.src = layer.src;
    ctx.drawImage(img, 0, 0, width, height);
  }

  return canvas.toDataURL();
}