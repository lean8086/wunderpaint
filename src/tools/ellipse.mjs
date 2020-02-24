import { plotEllipseRect } from '../utils/bresenham.mjs';

let x0;
let y0;

const downShadow = ({ x, y }) => () => {
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color }) {
  ctx.fillStyle = color;
  for (const point of plotEllipseRect(x0, y0, x, y)) {
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
