function draw({ x, y, color, ctx }) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
};

export default {
  down: draw,
  move: draw,
};
