import React, { Component } from 'react';

import Layer from './Layer';

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToolExecuting: false,
    };
  }

  handleEvent(eventName, ev) {
    const { selectedTool, color, scale } = this.props;

    if (!selectedTool[eventName]) {
      return;
    }

    const x = ev.pageX || ev.touches[0].pageX;
    const y = ev.pageY || ev.touches[0].pageY;

    this.layer.setScale(scale);
    this.shadowLayer.setScale(scale);

    selectedTool[eventName]({
      x: Math.floor((x - this.layer.canvas.offsetLeft) / scale),
      y: Math.floor((y - this.layer.canvas.offsetTop) / scale),
      color,
      scale,
      layers: this.layer,
      shadowLayer: this.shadowLayer,
      selectedLayer: this.layer,
    });

    this.layer.resetScale();
    this.shadowLayer.resetScale();
  }

  handleClick(ev) {
    this.setState({ isToolExecuting: false });
    this.handleEvent('handleClick', ev);
  }

  handleMouseDown(ev) {
    this.setState({ isToolExecuting: true });
    this.handleEvent('handleMouseDown', ev);
  }

  handleMouseUp(ev) {
    this.setState({ isToolExecuting: false });
    this.handleEvent('handleMouseUp', ev);
  }

  handleMouseMove(ev) {
    if (this.state.isToolExecuting) {
      this.handleEvent('handleMouseMove', ev);
    }
  }

  render() {
    return (
      <div
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        onMouseUp={(ev) => this.handleMouseUp(ev)}
        onMouseMove={(ev) => this.handleMouseMove(ev)}
      >
        <Layer ref={l => this.layer = l} />
        <Layer ref={l => this.shadowLayer = l} />
      </div>
    );
  }
}

export default Workspace;