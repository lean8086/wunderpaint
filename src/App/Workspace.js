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

    const pageX = ev.pageX || ev.touches[0].pageX;
    const pageY = ev.pageY || ev.touches[0].pageY;

    selectedTool[eventName]({
      x: Math.round((pageX - this.layer.canvas.offsetLeft) / scale),
      y: Math.round((pageY - this.layer.canvas.offsetTop) / scale),
      color,
      scale,
      layers: this.layer,
      shadowLayer: this.shadowLayer,
      selectedLayer: this.layer,
    });
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
        <Layer
          ref={l => this.layer = l}
          data={this.props.meta ? this.props.meta.layers[0] : null}
          scale={this.props.meta ? this.props.meta.scale : null}
          width={this.props.meta ? this.props.meta.width : null}
          height={this.props.meta ? this.props.meta.height : null}
        />
        <Layer
          ref={l => this.shadowLayer = l}
          scale={this.props.meta ? this.props.meta.scale : null}
          width={this.props.meta ? this.props.meta.width : null}
          height={this.props.meta ? this.props.meta.height : null}
        />
      </div>
    );
  }
}

export default Workspace;
