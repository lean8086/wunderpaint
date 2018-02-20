import bresenham from 'bresenham/generator';
import { draw } from './Pencil';

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
    for (const point of bresenham(x0, y0, x, y)) {
      draw({ x: point.x, y: point.y, shadowLayer });
    }
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
  for (const point of bresenham(x0, y0, x, y)) {
    draw({ x: point.x, y: point.y, color, selectedLayer });
  }
  shadowLayer.clear();
}

export default {
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end,
};
