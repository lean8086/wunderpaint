function action({ x, y, selectedLayer }) {
  selectedLayer.ctx.clearRect(x, y, 1, 1);
}

export default {
  handleMouseDown: action,
  handleMouseMove: action,
}
