let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

const start = ({ x, y, color, ctx }) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
  x0 = x;
  y0 = y;
};

const render = (x, y, ctx) => {
  // Horizontal
  const hSize = x - x0 + 1;
  ctx.fillRect(x0, y0, hSize, 1);
  ctx.fillRect(x0, y, hSize, 1);
  // Vertical
  const vSize = y - y0 + 1;
  ctx.fillRect(x0, y0, 1, vSize);
  ctx.fillRect(x, y0, 1, vSize);
};

const move = ({ x, y, ctx, clear }) => {
  if (x1 !== x || y1 !== y) {
    clear();
    render(x, y, ctx);
    x1 = x;
    y1 = y;
  }
};

const end = ({ x, y, color, ctx }) => {
  ctx.fillStyle = color;
  render(x, y, ctx);
};

export default {
  handleMouseDownShadow: start,
  handleMouseMoveShadow: move,
  handleMouseUp: end,
  handleMouseUpShadow: ({ clear }) => clear(),
};
