import React, { Component } from 'react';

const tools = {
  Pencil: require('./tools/Pencil'),
  Eraser: require('./tools/Eraser'),
}

class Toolbox extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.selectTool(tools.Pencil)}>P</button>
        <button onClick={() => this.props.selectTool(tools.Eraser)}>E</button>
      </div>
    );
  }
}

export default Toolbox;
