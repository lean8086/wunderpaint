import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleGrid } from '../modules/counter';

const ToggleGrid = ({ selected, toggleGrid }) => (
  <button
    onMouseDown={() => toggleGrid()}
    style={selected ? { background: 'cyan' } : null}
  >Grid</button>
);

const mapStateToProps = (state) => ({
  selected: state.counter.grid,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleGrid }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ToggleGrid);
