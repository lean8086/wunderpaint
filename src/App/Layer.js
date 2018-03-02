import React, { Component } from 'react';
import store from '../store';

import './Layer.css';

class Layer extends Component {
  constructor(props) {
    super(props);
    const { scale } = store.getState().counter;
    this.state = {
      scale,
    };
    store.subscribe(() => this.updateState());
  }

  updateState() {
    const { scale } = store.getState().counter;
    this.setState({
      scale,
    });
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      // Get a pointer to the current location in the image (x,y,w,h).
      const palette = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      // Wrap array as a Uint8ClampedArray. Assuming values 0..255, RGBA, pre-mult.
      palette.data.set(new Uint8ClampedArray(nextProps.data));
      // Repost the data.
      this.ctx.putImageData(palette, 0, 0);
    }
  }

  setScale(scale) {
    this.setState({ scale });
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
      <canvas
        className='Layer'
        width='20'
        height='20'
        style={{ transform: `scale(${this.state.scale})` }}
        ref={c => this.canvas = c}
      />
    );
  }
}

export default Layer;
