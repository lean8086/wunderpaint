import React, { Component } from 'react';
import store from '../store';

import './Grid.css';

class Grid extends Component {
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

  render() {
    const { scale, width, height } = this.state;
    return (
      <div
        className='Grid Layer'
        style={{
          backgroundSize: `${scale}px ${scale}px`,
          width: `${width * scale}px`,
          height: `${height * scale}px`,
        }}
      />
    );
  }
}

export default Grid;
