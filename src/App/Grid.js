import React from 'react';
import { connect } from 'react-redux';

import './Grid.css';

const Grid = (props) => (
  <div
    className='Grid Layer'
    hidden={!props.grid}
    style={{
      backgroundSize: `${props.scale}px ${props.scale}px`,
      width: `${props.width * props.scale}px`,
      height: `${props.height * props.scale}px`,
    }}
  />
);

const mapStateToProps = (state) => ({
  grid: state.counter.grid,
  scale: state.counter.scale,
  width: state.counter.width,
  height: state.counter.height,
});

export default connect(mapStateToProps)(Grid);
