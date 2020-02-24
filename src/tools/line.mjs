import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

const downShadow = ({ x, y, color }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color }) {
  ctx.fillStyle = color;
  for (const point of plotLine(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, 1, 1);
  }
}

const moveShadow = ({ x, y, color }) => (ctx) => {
  render({ x, y, ctx, color });
};

const up = ({ x, y, color }) => (ctx) => {
  render({ x, y, ctx, color });
};

export default { downShadow, moveShadow, up };
