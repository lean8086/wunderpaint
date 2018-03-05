import React, { Component } from 'react';
import store from '../store';

import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    const { scale, width, height, grid } = store.getState().counter;
    this.state = {
      scale,
      width,
      height,
      grid,
    };
    store.subscribe(() => this.updateState());
  }

  updateState() {
    const { scale, width, height, grid } = store.getState().counter;
    this.setState({
      scale,
      width,
      height,
      grid,
    });
  }

  render() {
    const { scale, width, height, grid } = this.state;
    return (
      <div
        className='Grid Layer'
        hidden={!grid}
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
