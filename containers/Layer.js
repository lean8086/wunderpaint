import { Component } from 'react';
import { connect } from 'react-redux';

class LayerContainer extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getImageData() {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
  }

  putImageData(data) {
    const { width, height } = this.canvas;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pos = (y * width + x) * 4;
        const pixel = data.slice(pos, pos + 4);
        this.ctx.fillStyle = `rgba(${pixel.join(',')})`;
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  slowAndSafePutImageData(data) {
    const { width, height } = this.canvas;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pos = (y * width + x) * 4;
        const [r, g, b, a] = [
          data[pos],
          data[pos + 1],
          data[pos + 2],
          data[pos + 3] / 255,
        ];
        this.ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        style={{ transform: `scale(${this.props.scale})` }}
        ref={c => this.canvas = c}
      >
        <style jsx>{`
          canvas {
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: 0 0;
            image-rendering: -moz-crisp-edges; /* Firefox */
            image-rendering: -webkit-crisp-edges; /* Webkit */
            -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
            image-rendering: pixelated; /* Chrome */
          }
        `}</style>
      </canvas>
    );
  }
}

const mapStateToProps = state => ({
  scale: state.scale,
  width: state.width,
  height: state.height,
});

export default connect(mapStateToProps)(LayerContainer);
