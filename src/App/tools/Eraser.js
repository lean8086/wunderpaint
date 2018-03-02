function erase({ x, y, layer }) {
  layer.ctx.clearRect(x, y, 1, 1);
}

export default {
  handleMouseDown: erase,
  handleMouseMove: erase,
}
