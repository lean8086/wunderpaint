import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCanvas } from '../store';
import bus from '../bus';
import Workspace from '../components/Workspace';

class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { executing: false };
  }

  handleEvent(actionName, { pageX = 0, pageY = 0, target }) {
    bus.emit('workspaceaction', {
      type: actionName,
      x: Math.round((pageX - target.offsetLeft) / this.props.scale - .5),
      y: Math.round((pageY - target.offsetTop) / this.props.scale - .5),
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
    this.timer = setTimeout(() => bus.emit('save'), 3000);
  }

  handleMouseMove(ev) {
    if (this.state.executing) {
      this.handleEvent('handleMouseMove', ev);
    }
  }

  render() {
    const { width, height, scale, grid } = this.props;
    return (
      <Workspace
        onClick={(ev) => this.handleClick(ev)}
        onMouseDown={(ev) => this.handleMouseDown(ev)}
        onMouseUp={(ev) => this.handleMouseUp(ev)}
        onMouseMove={(ev) => this.handleMouseMove(ev)}
        grid={grid}
        gridSize={scale}
        width={width * scale}
        height={height * scale}
      />
    );
  };
};

const mapStateToProps = (state) => ({
  scale: state.scale,
  grid: state.grid,
  width: state.width,
  height: state.height,
});

export default connect(mapStateToProps)(WorkspaceContainer);
