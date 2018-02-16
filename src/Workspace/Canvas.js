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

    const x = ev.pageX || ev.touches[0].pageX;
    const y = ev.pageY || ev.touches[0].pageY;

    this.layer.setScale(scale);

    selectedTool[eventName]({
      x: Math.floor((x - this.layer.canvas.offsetLeft) / scale),
      y: Math.floor((y - this.layer.canvas.offsetTop) / scale),
      color,
      scale,
      layers: this.layer,
      selectedLayer: this.layer,
    });

    this.layer.resetScale();
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
