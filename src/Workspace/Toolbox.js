import React, { Component } from 'react';
import ColorPicker from './tools/ColorPicker';

const tools = {
  Pencil: require('./tools/Pencil'),
  Eraser: require('./tools/Eraser'),
};

class Toolbox extends Component {
  render() {
    return (
      <div>
        <ColorPicker selectColor={(color) => this.props.selectColor(color)} />
        <button onClick={() => this.props.selectTool(tools.Pencil)}>P</button>
        <button onClick={() => this.props.selectTool(tools.Eraser)}>E</button>
      </div>
    );
  }
}

export default Toolbox;
