import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseScale, decreaseScale } from '../modules/counter';

const Z = (props) => (
  <div className='Z'>
    <button onMouseDown={() => props.increaseScale()}>+</button>
    <span>{100 * props.scale}%</span>
    <button onMouseDown={() => props.decreaseScale()}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  scale: state.counter.scale,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ increaseScale, decreaseScale }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Z);
