import React, { Component } from 'react';

class Layer extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
  }

  setScale(n) {
    this.ctx.scale(n, n);
  }

  resetScale() {
    // Reset current transformation matrix to the identity matrix
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  render() {
    return (
      <canvas
        width="200"
        height="200"
        style={{border: '1px solid black'}}
        ref={c => this.canvas = c}
      />
    );
  }
}

export default Layer;
