import { plotLine } from '../utils/bresenham.mjs';

let x0;
let y0;

const down = ({ x, y, color }) => (ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
};

const move = ({ x, y, color }) => (ctx) => {
  ctx.fillStyle = color;
  for (const point of plotLine(x0, y0, x, y)) {
    ctx.fillRect(point.x, point.y, 1, 1);
  }
  x0 = x;
  y0 = y;
};

export default { down, move };
