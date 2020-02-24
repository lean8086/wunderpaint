let x0;
let y0;

const downShadow = ({ x, y }) => () => {
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color }) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  // To get crisp line of width `1` rectangle should start from the half of a pixel
  ctx.strokeRect(x0 - .5, y0 - .5, x - x0, y - y0);
};

const moveShadow = ({ x, y, color }) => (ctx) => {
  render({ x, y, ctx, color });
};

const up = ({ x, y, color }) => (ctx) => {
  render({ x, y, ctx, color });
};

export default { downShadow, moveShadow, up };
