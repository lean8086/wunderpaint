import React, { Component } from 'react';

import Layer from './Layer';

class Canvas extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.layers = [];
  // }

  handleClick() {
    this.props.selectedTool.handleClick({
      layers: this.layer,
      selectedLayer: this.layer,
    });
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <Layer ref={l => this.layer = l} />
      </div>
    );
  }
}

export default Canvas;
