import React, { Component } from 'react';
import Toolbox from './Toolbox';
import Canvas from './Canvas';
import Pencil from './tools/Pencil';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: Pencil,
      color: '#000',
      selectedLayer: null,
      scale: 10,
    };
  }

  render() {
    return (
      <div>
        {this.props.match.params.id}
        <Canvas
          {...this.state}
        />
        <Toolbox
          // selectLayer={(layer) => this.selectLayer(layer)}
          selectTool={(tool) => this.selectTool(tool)}
          selectColor={(color) => this.selectColor(color)}
        />
      </div>
    );
  }

  selectTool(tool) {
    this.setState({ selectedTool: tool.default });
  }

  selectColor(color) {
    this.setState({ color });
  }

  selectLayer(layer) {
    this.setState({ selectedLayer: layer });
  }
}

export default App;
