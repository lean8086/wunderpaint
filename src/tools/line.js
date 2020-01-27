import bresenham from 'bresenham/generator';

let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

function start({ x, y, color, ctx }) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
}

function move({ x, y, ctx, clear }) {
  if (x1 !== x || y1 !== y) {
    clear();
    for (const point of bresenham(x0, y0, x, y)) {
      ctx.fillRect(point.x, point.y, 1, 1);
    }
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, ctx }) {
  ctx.fillStyle = color;
  for (const point of bresenham(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, 1, 1);
  }
}

export default {
  handleMouseDownShadow: start,
  handleMouseMoveShadow: move,
  handleMouseUp: end,
  handleMouseUpShadow: ({ clear }) => clear(),
};
