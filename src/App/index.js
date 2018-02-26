import React, { Component } from 'react';
import Toolbox from './Toolbox';
import Workspace from './Workspace';
import firebase from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: null,
      color: null,
      selectedLayer: null,
      scale: 10,
      meta: null,
    };
    // this.ref = firebase.database().ref(`works/${props.match.params.id}`);
    // this.ref.on('value', snapshot => this.updateFromDatabase(snapshot.val()));
  }

  render() {
    return (
      <div>
        {this.state.meta ? this.state.meta.layers['Layer 1'] : null}
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

  updateFromDatabase(meta) {
    this.setState({ meta });
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
