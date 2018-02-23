import React, { Component } from 'react';
import Toolbox from './Toolbox';
import Workspace from './Workspace';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: null,
      color: null,
      selectedLayer: null,
      scale: 10,
    };
  }

  render() {
    return (
      <div>
        {this.props.match.params.id}
        <Workspace {...this.state} />
        <Toolbox
          // selectLayer={(layer) => this.selectLayer(layer)}
          selectTool={(tool) => this.selectTool(tool)}
          selectColor={(color) => this.selectColor(color)}
        />
      </div>
    );
  }

  selectTool(selectedTool) {
    this.setState({ selectedTool: selectedTool.default });
  }

  selectColor(color) {
    this.setState({ color });
  }

  selectLayer(selectedLayer) {
    this.setState({ selectedLayer });
  }
}

export default App;
