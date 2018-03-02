import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectColor } from '../modules/counter';
import palette, { list } from './palette';

const Color = ({ name, value, selectColor, selected }) => (
  <button
    onMouseDown={() => selectColor(value)}
    style={selected ? { background: 'cyan' } : null}
  >{name}</button>
);

const ColorPicker = (props) => (
  <div className='colorPicker'>
    {
      list.map((name, i) => (
        <Color
          selectColor={props.selectColor}
          name={name}
          value={palette[name]}
          key={i}
          selected={props.color === palette[name]}
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
