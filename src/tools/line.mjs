import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

const downShadow = ({ x, y, color, tweaks }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color, tweaks }) {
  ctx.fillStyle = color;
  for (const point of plotLine(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, tweaks.strokeWidth, tweaks.strokeWidth);
  }
}

const moveShadow = ({ x, y, color, tweaks }) => (ctx) => {
  render({ x, y, ctx, color, tweaks });
};

const up = ({ x, y, color, tweaks }) => (ctx) => {
  render({ x, y, ctx, color, tweaks });
};

const preview = ({ x, y, color, tweaks }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.globalAlpha = tweaks.strokeOpacity / 100;
  ctx.fillRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
};

export default { downShadow, moveShadow, up, preview };
