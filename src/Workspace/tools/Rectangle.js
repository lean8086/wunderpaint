let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

function start({ x, y, color, shadowLayer }) {
  shadowLayer.ctx.fillStyle = color;
  shadowLayer.ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
}

function move({ x, y, shadowLayer }) {
  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    // Horizontal
    const hSize = x - x0 + 1;
    shadowLayer.ctx.fillRect(x0, y0, hSize, 1);
    shadowLayer.ctx.fillRect(x0, y, hSize, 1);
    // Vertical
    const vSize = y - y0 + 1;
    shadowLayer.ctx.fillRect(x0, y0, 1, vSize);
    shadowLayer.ctx.fillRect(x, y0, 1, vSize);
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  // Horizontal
  selectedLayer.ctx.fillRect(x0, y0, x - x0, 1);
  selectedLayer.ctx.fillRect(x0, y, x - x0, 1);
  // Vertical
  selectedLayer.ctx.fillRect(x0, y0, 1, y - y0);
  selectedLayer.ctx.fillRect(x, y0, 1, y - y0 + 1);

  shadowLayer.clear();
}

export default {
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end,
};
