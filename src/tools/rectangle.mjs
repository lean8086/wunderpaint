let x0;
let y0;

const downShadow = ({ x, y }) => () => {
  x0 = x;
  y0 = y;
};

function render({ x, y, ctx, color, tweaks }) {
  ctx.lineWidth = tweaks.strokeWidth;
  ctx.strokeStyle = color;
  // To get crisp line of width `1` rectangle should start from the half of a pixel
  ctx.strokeRect(x0 - .5, y0 - .5, x - x0, y - y0);
};

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
