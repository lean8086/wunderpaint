let x0;
let y0;

function start({ x, y }) {
  return function () {
    x0 = x;
    y0 = y;
  };
}

function render({ x, y, ctx, color }) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  // To get crisp line of width `1` rectangle should start from the half of a pixel
  ctx.strokeRect(x0 - .5, y0 - .5, x - x0, y - y0);
};

function move({ x, y, color }) {
  return function (ctx) {
    render({ x, y, ctx, color });
  }
};

function end({ x, y, color }) {
  return function (ctx) {
    render({ x, y, ctx, color });
  }
};

export default {
  downShadow: start,
  moveShadow: move,
  up: end,
};
