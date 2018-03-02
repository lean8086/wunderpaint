import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectColor } from '../modules/counter';
import { list as colors } from './palette';

const Color = ({ name, selectColor, selected }) => (
  <button
    onMouseDown={() => selectColor(name)}
    style={selected ? { background: 'cyan' } : null}
  >{name}</button>
);

const ColorPicker = (props) => (
  <div className='colorPicker'>
    {
      colors.map((name, i) => (
        <Color
          selectColor={props.selectColor}
          name={name}
          key={i}
          selected={props.color === name}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  color: state.counter.color,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectColor }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
