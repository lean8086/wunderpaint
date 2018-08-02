const erase = ({ x, y, ctx }) => {
  ctx.clearRect(x, y, 1, 1);
};

export default {
  handleMouseDown: erase,
  handleMouseMove: erase,
};
