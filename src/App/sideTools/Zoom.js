import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseScale, decreaseScale } from '../modules/counter';

const Zoom = (props) => (
  <div className='Zoom'>
    <button
      onMouseDown={() => props.increaseScale()}
      disabled={props.scale >= 32}
    >+</button>
    <span>{100 * props.scale}%</span>
    <button
      onMouseDown={() => props.decreaseScale()}
      disabled={props.scale <= 0}
    >-</button>
  </div>
);

const mapStateToProps = (state) => ({
  scale: state.counter.scale,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ increaseScale, decreaseScale }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Zoom);
