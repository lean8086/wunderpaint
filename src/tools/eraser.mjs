import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

const down = ({ x, y, tweaks }) => (ctx) => {
  ctx.clearRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
  x0 = x;
  y0 = y;
};

const move = ({ x, y, tweaks }) => (ctx) => {
  for (const point of plotLine(x0, y0, x, y)) {
    ctx.clearRect(point.x, point.y, tweaks.strokeWidth, tweaks.strokeWidth);
  }
  x0 = x;
  y0 = y;
};

const preview = ({ x, y, tweaks, color }) => (ctx) => {
  ctx.fillStyle = color;
  // Invert color
  ctx.globalCompositeOperation = 'difference';
  ctx.fillRect(x, y, tweaks.strokeWidth, tweaks.strokeWidth);
};

export default { down, move, preview };
