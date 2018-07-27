import React, { Component } from 'react';
import store from '../store';

// import './Layer.css';

class Layer extends Component {
  constructor(props) {
    super(props);
    const { scale, width, height } = store.getState().counter;
    this.state = {
      scale,
      width,
      height,
    };
    store.subscribe(() => this.updateState());
  }

  updateState() {
    const { scale, width, height } = store.getState().counter;
    this.setState({
      scale,
      width,
      height,
    });
  }

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
        className='Layer'
        width={this.state.width}
        height={this.state.height}
        style={{ transform: `scale(${this.state.scale})` }}
        ref={c => this.canvas = c}
      />
    );
  }
}

export default Layer;
