import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTool } from './modules/counter';

const tools = {
  Pencil: require('./tools/Pencil'),
  Eraser: require('./tools/Eraser'),
  Line: require('./tools/Line'),
  Rectangle: require('./tools/Rectangle'),
  Ellipse: require('./tools/Ellipse'),
};

const Tool = ({ toolName, selectTool }) => (
  <button onMouseDown={() => selectTool(toolName)}>{toolName}</button>
);

const Toolbox = (props) => (
  <div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    {
      Object.keys(tools).map((toolName, i) => (
        <Tool selectTool={props.selectTool} toolName={toolName} key={i} />
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
