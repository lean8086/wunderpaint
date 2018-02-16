import React, { Component } from 'react';

import Layer from './Layer';

class Canvas extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.layers = [];
  // }

  handleEvent(eventName, ev) {
    const { selectedTool, color, scale } = this.props;

    if (!selectedTool[eventName]) {
      return;
    }

    selectedTool[eventName]({
      x: (ev.pageX || ev.touches[0].pageX) - this.layer.canvas.offsetLeft,
      y: (ev.pageY || ev.touches[0].pageY) - this.layer.canvas.offsetTop,
      color,
      scale,
      layers: this.layer,
      selectedLayer: this.layer,
    });
  }

  handleClick(ev) {
    this.handleEvent('handleClick', ev);
  }

  handleMouseDown(ev) {
    this.handleEvent('handleMouseDown', ev);
  }

  render() {
    return (
      <div
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        // onMouseUp={() => this.handleMouseUp()}
      >
        <Layer ref={l => this.layer = l} />
      </div>
    );
  }
}

export default Canvas;
