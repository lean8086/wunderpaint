import React, { Component } from 'react';

import Toolbox from './Toolbox';
import Canvas from './Canvas';

import Pencil from './tools/Pencil';

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: Pencil,
      color: '#000',
      selectedLayer: null,
      scale: 10,
    };
  }

  selectTool(tool) {
    this.setState({ selectedTool: tool.default });
  }

  selectLayer(layer) {
    this.setState({ selectedLayer: layer });
  }

  render() {
    return (
      <div>
        <Canvas
          {...this.state}
        />
        <Toolbox
          // selectLayer={(layer) => this.selectLayer(layer)}
          selectTool={(tool) => this.selectTool(tool)}
        />
      </div>
    );
  }
}

export default Workspace;
