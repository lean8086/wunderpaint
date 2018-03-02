import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layer from './Layer';
import tools from './tools';

import './Workspace.css';

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToolExecuting: false,
    };
  }

  handleEvent(actionName, ev) {
    if (!tools[this.props.tool][actionName]) {
      return;
    }

    const { tool, color, scale } = this.props;
    const pageX = ev.pageX || ev.touches[0].pageX || 0;
    const pageY = ev.pageY || ev.touches[0].pageY || 0;

    tools[tool][actionName]({
      x: Math.round((pageX - this.layer.canvas.offsetLeft) / scale),
      y: Math.round((pageY - this.layer.canvas.offsetTop) / scale),
      color,
      scale,
      shadowLayer: this.shadowLayer,
      layer: this.layer,
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
        className='Workspace'
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        onMouseUp={(ev) => this.handleMouseUp(ev)}
        onMouseMove={(ev) => this.handleMouseMove(ev)}
      >
        <Layer
          ref={l => this.layer = l}
          data={this.props.meta ? this.props.meta.layers['Layer 1'] : null}
        />
        <Layer
          ref={l => this.shadowLayer = l}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.counter.color,
  scale: state.counter.scale,
  tool: state.counter.tool,
});

export default connect(mapStateToProps)(Workspace);
