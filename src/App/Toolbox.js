import React, { Component } from 'react';
import ColorPicker from './tools/ColorPicker';

const tools = {
  Pencil: require('./tools/Pencil'),
  Eraser: require('./tools/Eraser'),
  Line: require('./tools/Line'),
  Rectangle: require('./tools/Rectangle'),
  Ellipse: require('./tools/Ellipse'),
};

class Toolbox extends Component {
  componentDidMount() {
    this.props.selectTool(tools.Pencil);
  }

  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <ColorPicker selectColor={(color) => this.props.selectColor(color)} />
        <button onClick={() => this.props.selectTool(tools.Pencil)}>P</button>
        <button onClick={() => this.props.selectTool(tools.Eraser)}>E</button>
        <button onClick={() => this.props.selectTool(tools.Line)}>L</button>
        <button onClick={() => this.props.selectTool(tools.Rectangle)}>R</button>
        <button onClick={() => this.props.selectTool(tools.Ellipse)}>C</button>
      </div>
    );
  }
}

export default Toolbox;
