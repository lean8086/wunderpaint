import bresenham from 'bresenham/generator';

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
    for (const point of bresenham(x0, y0, x, y)) {
      shadowLayer.ctx.fillRect(point.x, point.y, 1, 1);
    }
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  for (const point of bresenham(x0, y0, x, y)) {
    selectedLayer.ctx.fillRect(point.x, point.y, 1, 1);
  }
  shadowLayer.clear();
}

export default {
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end,
};
