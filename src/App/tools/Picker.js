let rgba = '';

function check({ x, y, layer }) {
  const pixel = layer.ctx.getImageData(x, y, 1, 1).data;
  rgba = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${(pixel[3] / 255)})`;
}

function pick({ actionCreators }) {
  console.log(rgba);
}

export default {
  handlePermanentMouseMove: check,
};
