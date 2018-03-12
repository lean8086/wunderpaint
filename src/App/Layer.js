import React, { Component } from 'react';
import store from '../store';

import './Layer.css';

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
    this.setImageData(this.ctx, data, 0, 0, 0, 0, this.canvas.width, this.canvas.height);
  }

  setImageData(ctx, imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    var data = imageData;
    var height = dirtyHeight;
    var width = dirtyWidth;
    dirtyX = dirtyX || 0;
    dirtyY = dirtyY || 0;
    dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
    dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
    var limitBottom = Math.min(dirtyHeight, height);
    var limitRight = Math.min(dirtyWidth, width);
    for (var y = dirtyY; y < limitBottom; y++) {
      for (var x = dirtyX; x < limitRight; x++) {
        var pos = y * width + x;
        ctx.fillStyle = 'rgba(' + data[pos * 4 + 0]
          + ',' + data[pos * 4 + 1]
          + ',' + data[pos * 4 + 2]
          + ',' + (data[pos * 4 + 3] / 255) + ')';
        ctx.fillRect(x + dx, y + dy, 1, 1);
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
