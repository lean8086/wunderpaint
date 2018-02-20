function render({ x, y, color, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  selectedLayer.ctx.fillRect(x, y, 1, 1);
}

export default {
  handleMouseDown: render,
  handleMouseMove: render,
};
