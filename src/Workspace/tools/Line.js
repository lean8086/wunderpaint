import bresenham from 'bresenham/generator';
import { draw } from './Pencil';

let x0 = 0;
let y0 = 0;
let line = [];

function start({ x, y, color, shadowLayer }) {
  x0 = x;
  y0 = y;
  draw({ x, y, color, shadowLayer });
}

function doBresenham({ x, y, color, shadowLayer }) {
  shadowLayer.clear();
  line = [];
  for (const point of bresenham(x0, y0, x, y)) {
    draw({ x: point.x, y: point.y, color, shadowLayer });
    line.push({ x: point.x, y: point.y });
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
  shadowLayer.clear();
  line.forEach(point => draw({ x: point.x, y: point.y, color, selectedLayer }));
  line = [];
}

export default {
  handleMouseDown: start,
  handleMouseMove: doBresenham,
  handleMouseUp: end,
};
