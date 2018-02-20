let x0 = 0;
let y0 = 0;
let x1 = 0;
let y1 = 0;

function start({ x, y, color, shadowLayer }) {
  shadowLayer.ctx.fillStyle = color;
  x0 = x;
  y0 = y;
}

function render(x, y, layer) {
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
      layer.ctx.fillRect(X, Y, 1, 1);
    };
  }
}

function move({ x, y, shadowLayer }) {
  if (x1 !== x || y1 !== y) {
    shadowLayer.clear();
    render(x, y, shadowLayer);
    x1 = x;
    y1 = y;
  }
}

function end({ x, y, color, shadowLayer, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  render(x, y, selectedLayer);
  shadowLayer.clear();
}

export default {
  handleMouseDown: start,
  handleMouseMove: move,
  handleMouseUp: end,
};
