import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTool } from './modules/counter';
import { list as tools } from './tools';

const Tool = ({ name, selectTool, selected }) => (
  <button
    className='tool'
    onMouseDown={() => selectTool(name)}
    style={selected ? { background: 'cyan' } : null}
  >{name}</button>
);

const Toolbox = (props) => (
  <div className='toolbox'>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    {
      tools.map((name, i) => (
        <Tool
          selectTool={props.selectTool}
          name={name}
          key={i}
          selected={props.tool === name}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  tool: state.counter.tool,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectTool }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
