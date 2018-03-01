import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTool } from './modules/counter';
import { list as tools } from './tools';

const Tool = ({ name, selectTool }) => (
  <button onMouseDown={() => selectTool(name)}>{name}</button>
);

const Toolbox = (props) => (
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    {
      tools.map((name, i) => (
        <Tool selectTool={props.selectTool} name={name} key={i} />
      ))
    }
    Tool: {props.tool}
  </div>
);

const mapStateToProps = (state) => ({
  tool: state.counter.tool,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ selectTool }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
