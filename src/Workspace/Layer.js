import React, { Component } from 'react';

class Layer extends Component {
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
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
