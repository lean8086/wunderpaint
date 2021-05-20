import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

const down = ({ x, y, color, tweaks }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.globalAlpha = tweaks.strokeOpacity / 100;
  ctx.fillRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
};

const move = ({ x, y, color, tweaks }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.globalAlpha = tweaks.strokeOpacity / 100;
  for (const point of plotLine(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, tweaks.strokeWidth, tweaks.strokeWidth);
  }
  x0 = x;
  y0 = y;
};

const preview = ({ x, y, color, tweaks }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.globalAlpha = tweaks.strokeOpacity / 100;
  ctx.fillRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
  x0 = x;
  y0 = y;
};

export default { down, move, preview };
