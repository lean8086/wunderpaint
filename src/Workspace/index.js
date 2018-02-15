import React, { Component } from 'react';

import Toolbox from './Toolbox';
import Canvas from './Canvas';

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: null,
      primaryColor: null,
      secondaryColor: null,
      selectedColor: null,
      selectedLayers: [],
    };
  }

  selectTool(toolname) {
    this.setState({ selectedTool: toolname });
  }

  render() {
    return (
      <div>
        <Toolbox onClick={(toolname) => this.selectTool(toolname)} />
        <Canvas {...this.state} />
        workspace -> {this.state.selectedTool}
      </div>
    );
  }
}

export default Workspace;
