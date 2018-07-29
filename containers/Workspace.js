import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../store';
import bus from '../bus';
import Layer from './Layer';
import Grid from './Grid';

class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { executing: false };
  }

  snapshot() {
    // this.props.sync(this.layer.getImageData());
    // this.timer = setTimeout(() => this.props.sync(), 3 * 1000);
  }

  handleEvent(actionName, ev) {
    const pageX = ev.pageX || ev.touches[0].pageX || 0;
    const pageY = ev.pageY || ev.touches[0].pageY || 0;

    bus.emit('workspaceaction', {
      type: actionName,
      x: Math.round((pageX - this.element.offsetLeft) / this.props.scale - .5),
      y: Math.round((pageY - this.element.offsetTop) / this.props.scale - .5),
    });
  }

  handleClick(ev) {
    this.setState({ executing: false });
    this.handleEvent('handleClick', ev);
  }

  handleMouseDown(ev) {
    this.setState({ executing: true });
    this.handleEvent('handleMouseDown', ev);
    if (this.timer) clearTimeout(this.timer);
  }

  handleMouseUp(ev) {
    this.setState({ executing: false });
    this.handleEvent('handleMouseUp', ev);
    this.snapshot();
  }

  handleMouseMove(ev) {
    if (this.state.executing) {
      this.handleEvent('handleMouseMove', ev);
    }
  }

  render() {
    return (
      <section
        ref={w => this.element = w}
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        onMouseUp={(ev) => this.handleMouseUp(ev)}
        onMouseMove={(ev) => this.handleMouseMove(ev)}
      >
        <div style={{
          width: `${this.props.width * this.props.scale}px`,
          height: `${this.props.height * this.props.scale}px`,
        }}>
          <Layer />
          <Layer shadow />
          <Grid />
        </div>

        <style jsx>{`
          section {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            cursor: crosshair;
            overflow: scroll;
          }
        `}</style>
      </section>
    );
  };
};

const mapStateToProps = (state) => ({
  scale: state.scale,
  canvas: state.canvas,
  width: state.width,
  height: state.height,
});

const mapDispatchToProps = {
  updateCanvas,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
