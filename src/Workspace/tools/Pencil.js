function action({ x, y, color, selectedLayer }) {
  selectedLayer.ctx.fillStyle = color;
  selectedLayer.ctx.fillRect(x, y, 1, 1);
}

export default {
  handleMouseDown: action,
  handleMouseMove: action,
}
