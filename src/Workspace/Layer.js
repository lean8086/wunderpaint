import React, { Component } from 'react';

class Layer extends Component {
  componentDidMount() {
    this.context = this.canvas.getContext('2d');
  }

  render() {
    return (
      <canvas
        width="20"
        height="20"
        style={{border: '1px solid black'}}
        ref={c => this.canvas = c}
        className="square"
      />
    );
  }
}

export default Layer;
