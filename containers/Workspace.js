import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../store';
import Layer from './Layer';
import Grid from './Grid';

class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToolExecuting: false,
    };
  }

  snapshot() {
    this.props.sync(this.layer.getImageData());
    this.timer = setTimeout(() => this.props.sync(), 3 * 1000);
  }

  handleEvent(actionName, ev) {
    if (!tools[this.props.tool][actionName]) return;
    const { tool, color, scale } = this.props;
    const pageX = ev.pageX || ev.touches[0].pageX || 0;
    const pageY = ev.pageY || ev.touches[0].pageY || 0;

    // TODO: move to state
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
    if (this.timer) clearTimeout(this.timer);
  }

  handleMouseUp(ev) {
    this.setState({ isToolExecuting: false });
    this.handleEvent('handleMouseUp', ev);
    this.snapshot();
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
        <div className='Canvas'>
          <Layer ref={l => this.layer = l} />
          <Layer ref={l => this.shadowLayer = l} />
          <Grid />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  color: state.color,
  scale: state.scale,
  tool: state.tool,
  canvas: state.canvas,
  width: state.width,
  height: state.height,
});

const mapDispatchToProps = {
  updateCanvas,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
