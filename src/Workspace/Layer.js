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

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    return (
      <div>
        <canvas
          width="200"
          height="200"
          style={{border: '1px solid black', position: 'absolute' }}
          ref={c => this.canvas = c}
        />
      </div>
    );
  }
}

export default Layer;
