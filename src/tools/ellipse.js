import { plotEllipseRect } from '../utils/bresenham.mjs';

let x0;
let y0;

function start({ x, y }) {
  return function () {
    x0 = x;
    y0 = y;
  };
}

function render({ x, y, ctx, color }) {
  ctx.fillStyle = color;
  for (const point of plotEllipseRect(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, 1, 1);
  }
}

function move({ x, y, color }) {
  return function (ctx) {
    render({ x, y, ctx, color });
  };
}

function end({ x, y, color }) {
  return function (ctx) {
    render({ x, y, ctx, color });
  };
}

export default {
  downShadow: start,
  moveShadow: move,
  up: end,
};
