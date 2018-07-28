function render({ x, y, color, layer }) {
  layer.ctx.fillStyle = color;
  layer.ctx.fillRect(x, y, 1, 1);
}

export default {
  handleMouseDown: render,
  handleMouseMove: render,
};
