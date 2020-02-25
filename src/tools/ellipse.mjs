import { plotEllipseRect } from '../utils/bresenham.mjs';

let x0;
let y0;

const downShadow = ({ x, y }) => () => {
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color, tweaks }) {
  ctx.fillStyle = color;
  for (const point of plotEllipseRect(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, tweaks.strokeWidth, tweaks.strokeWidth);
  }
}

const moveShadow = ({ x, y, color, tweaks }) => (ctx) => {
  render({ x, y, ctx, color, tweaks });
};

const up = ({ x, y, color, tweaks }) => (ctx) => {
  render({ x, y, ctx, color, tweaks });
};

export default { downShadow, moveShadow, up };
