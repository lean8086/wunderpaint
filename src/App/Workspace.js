import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from './modules/counter';
import Layer from './Layer';
import Grid from './Grid';
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
      x: Math.round((pageX - this.layer.canvas.offsetLeft + this.element.scrollLeft) / scale - .5),
      y: Math.round((pageY - this.layer.canvas.offsetTop + this.element.scrollTop) / scale - .5),
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
    clearTimeout(this.timer);
  }

  handleMouseUp(ev) {
    this.setState({ isToolExecuting: false });
    this.handleEvent('handleMouseUp', ev);
    this.timer = setTimeout(() => this.takeSnapshot(), 5 * 1000);
  }

  handleMouseMove(ev) {
    if (this.state.isToolExecuting) {
      this.handleEvent('handleMouseMove', ev);
    }
  }

  componentDidMount() {
    // Center scroll
    const { offsetTop, offsetLeft } = this.layer.canvas;
    this.element.scrollTop = (this.element.clientHeight - offsetTop) / 2;
    this.element.scrollLeft = (this.element.clientWidth - offsetLeft) / 2;
  }

  takeSnapshot() {
    this.props.updateCanvas(this.layer.getImageData());
  }

  render() {
    return (
      <div
        className='Workspace'
        ref={w => this.element = w}
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        onMouseUp={(ev) => this.handleMouseUp(ev)}
        onMouseMove={(ev) => this.handleMouseMove(ev)}
      >
        <div className='Canvas'>
          <Layer ref={l => this.layer = l} />
          <Layer ref={l => this.shadowLayer = l} />
          <Grid />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.counter.color,
  scale: state.counter.scale,
  tool: state.counter.tool,
  canvas: state.counter.canvas,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateCanvas }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
