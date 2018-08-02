import { Component } from 'react';
import { connect } from 'react-redux';
import { getRefById } from '../firebase';
import bus from '../bus';
import Workspace from '../components/Workspace';

class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { executing: false };
    this.syncRef = getRefById(props.id);
  }

  sync() {
    const { width, height, layers, id } = this.props;
    this.syncRef.set({ width, height, layers, id });
  }

  handleEvent(actionName, { clientX = 0, clientY = 0, target }) {
    const { left, top } = target.getBoundingClientRect();
    bus.emit('workspaceaction', {
      type: actionName,
      x: Math.round((clientX - left) / this.props.scale - .5),
      y: Math.round((clientY - top) / this.props.scale - .5),
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
    this.timer = setTimeout(() => this.sync(), 3000);
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
  grid: state.grid,
  scale: state.scale,
  width: state.width,
  height: state.height,
  layers: state.layers,
  id: state.id,
});

export default connect(mapStateToProps)(WorkspaceContainer);
