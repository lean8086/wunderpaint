let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

const start = ({ x, y, color, ctx }) => {
  ctx.fillStyle = color;
  x0 = x;
  y0 = y;
};

const render = (x, y, ctx) => {
  // Semimajor (biggest radius) axes and semiminor (smallest radius) axes
  const rx = Math.round((x - x0) / 2);
  const ry = Math.round((y - y0) / 2);
  // Center of the ellipse
  const xp = x0 + rx;
  const yp = y0 + ry;

  let lastX;
  let lastY;
  let angle = 0;
  const steps = (Math.PI / 720);

  for (; angle <= 720; angle += 1) {
    const delta = angle * 2 * steps;
    const X = parseInt(xp + (rx * Math.cos(delta)) + .5, 10);
    const Y = parseInt(yp + (ry * Math.sin(delta)) + .5, 10);
    if (lastX !== X || lastY !== Y){
      lastX = X;
      lastY = Y;
      ctx.fillRect(X, Y, 1, 1);
    };
  }
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
