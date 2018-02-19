import React, { Component } from 'react';
import ColorPicker from './tools/ColorPicker';

const tools = {
  Pencil: require('./tools/Pencil'),
  Eraser: require('./tools/Eraser'),
  Line: require('./tools/Line'),
};

class Toolbox extends Component {
  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <ColorPicker selectColor={(color) => this.props.selectColor(color)} />
        <button onClick={() => this.props.selectTool(tools.Pencil)}>P</button>
        <button onClick={() => this.props.selectTool(tools.Eraser)}>E</button>
        <button onClick={() => this.props.selectTool(tools.Line)}>L</button>
      </div>
    );
  }
}

export default Toolbox;
