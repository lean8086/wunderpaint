export default {
  handleMouseDown: draw,
  handleMouseMove: draw,
}

export function draw({ x, y, color, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  selectedLayer.ctx.fillRect(x, y, 1, 1);
}
