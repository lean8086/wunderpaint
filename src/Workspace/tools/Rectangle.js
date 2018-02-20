import { draw } from './Pencil';

let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

function start({ x, y, color, shadowLayer }) {
  draw({ x, y, color, shadowLayer });
  x0 = x;
  y0 = y;
}

function move({ x, y, shadowLayer }) {
  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    // Horizontal
    shadowLayer.ctx.fillRect(x0, y0, x - x0, 1);
    shadowLayer.ctx.fillRect(x0, y, x - x0, 1);
    // Vertical
    shadowLayer.ctx.fillRect(x0, y0, 1, y - y0);
    shadowLayer.ctx.fillRect(x, y0, 1, y - y0 + 1);
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
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
