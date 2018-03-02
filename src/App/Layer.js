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
