import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

function start({ x, y }) {
  return function (ctx) {
    ctx.clearRect(x, y, 1, 1);
    x0 = x;
    y0 = y;
  };
}

function move({ x, y }) {
  return function (ctx) {
    for (const point of plotLine(x0, y0, x, y)) {
      ctx.clearRect(point.x, point.y, 1, 1);
    }
    x0 = x;
    y0 = y;
  };
}

export default {
  down: start,
  move,
};
