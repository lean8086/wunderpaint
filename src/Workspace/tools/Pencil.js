export default {
  handleMouseDown: draw,
  handleMouseMove: draw,
}

export function draw(props) {
  const layer = props.selectedLayer || props.shadowLayer;
  layer.ctx.fillStyle = props.color;
  layer.ctx.fillRect(props.x, props.y, 1, 1);
}
