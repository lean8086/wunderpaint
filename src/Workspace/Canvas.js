import React, { Component } from 'react';

import Layer from './Layer';

class Canvas extends Component {
  algo() {
    console.log(this.props.selectedTool);
  }

  render() {
    return (
      <div onClick={() => this.algo()}>
        <Layer />
      </div>
    );
  }
}

export default Canvas;
