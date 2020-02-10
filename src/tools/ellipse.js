import { plotEllipseRect } from '../utils/bresenham2.mjs';

let x0;
let y0;
let x1;
let y1;

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


  // // Semimajor (biggest radius) axes and semiminor (smallest radius) axes
  // const rx = Math.round((x - x0) / 2);
  // const ry = Math.round((y - y0) / 2);
  // // Center of the ellipse
  // const xp = x0 + rx;
  // const yp = y0 + ry;

  // let lastX;
  // let lastY;
  // let angle = 0;
  // const steps = (Math.PI / 720);

  // ctx.fillStyle = color;
  // for (; angle <= 720; angle += 1) {
  //   const delta = angle * 2 * steps;
  //   const X = parseInt(xp + (rx * Math.cos(delta)) + .5, 10);
  //   const Y = parseInt(yp + (ry * Math.sin(delta)) + .5, 10);
  //   if (lastX !== X || lastY !== Y){
  //     lastX = X;
  //     lastY = Y;
  //     ctx.fillRect(X, Y, 1, 1);
  //   };
  // }
}

function move({ x, y, color }) {
  return function (ctx) {
    if (x1 !== x || y1 !== y) {
      render({ x, y, ctx, color });
      x1 = x;
      y1 = y;
    }
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
