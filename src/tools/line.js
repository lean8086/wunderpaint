import bresenham from '../utils/bresenham.mjs';

let x0;
let y0;
let x1;
let y1;

function start({ x, y, color }) {
  return function (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
    x0 = x;
    y0 = y;
  };
}

function move({ x, y }) {
  return function (ctx) {
    if (x1 !== x || y1 !== y) {
      for (const point of bresenham(x0, y0, x, y)) {
        ctx.fillRect(point.x, point.y, 1, 1);
      }
      x1 = x;
      y1 = y;
    }
  };
}

function end({ x, y, color }) {
  return function (ctx) {
    ctx.fillStyle = color;
    for (const point of bresenham(x0, y0, x, y)) {
      ctx.fillRect(point.x, point.y, 1, 1);
    }
  };
}

export default {
  downShadow: start,
  moveShadow: move,
  up: end,
};
