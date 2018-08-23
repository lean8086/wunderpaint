import { Component } from 'react';
import { connect } from 'react-redux';
import { workReference, getUser } from '../firebase';
import { generate } from 'shortid';
import bus from '../bus';
import Workspace from '../components/Workspace';

class WorkspaceContainer extends Component {
  state = {
    executing: false,
    author: '',
  }

  componentDidMount() {
    getUser().then(({ uid }) => this.setState({ author: uid }));
  }

  sync() {
    const { width, height, layers, id, preloaded } = this.props;
    workReference(id)
      .set({ width, height, layers, id, author: this.state.author })
      .then(!preloaded ? history.replaceState({}, '', `/p/${id}`) : null);
  }

  handleEvent(type, { clientX = 0, clientY = 0, target }) {
    const { left, top } = target.getBoundingClientRect();
    bus.emit('workspaceaction', {
      type,
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
    this.timer = setTimeout(() => this.sync(), 1000);
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
  blank: state.blank,
  id: state.id,
});

export default connect(mapStateToProps)(WorkspaceContainer);
