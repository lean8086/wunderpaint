function erase({ x, y, selectedLayer }) {
  selectedLayer.ctx.clearRect(x, y, 1, 1);
}

export default {
  handleMouseDown: erase,
  handleMouseMove: erase,
}
