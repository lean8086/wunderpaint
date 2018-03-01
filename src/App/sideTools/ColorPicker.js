import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectColor } from '../modules/counter';
import palette from './palette';

const Color = ({ colorName, selectColor }) => (
  <button onMouseDown={() => selectColor(palette[colorName])}>{colorName}</button>
);

const ColorPicker = (props) => (
  <div>
    {
      Object.keys(palette).map((colorName, i) => (
        <Color selectColor={props.selectColor} colorName={colorName} key={i} />
      ))
    }
    Color: {props.color}
  </div>
);

const mapStateToProps = (state) => ({
  color: state.counter.color,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectColor }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
