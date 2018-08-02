import { Component } from 'react';
import { connect } from 'react-redux';
import { updateLayer } from '../store';
import bus from '../bus';
import tools from '../tools';
import Layer from '../components/Layer';

class LayerContainer extends Component {
  constructor(props) {
    super(props);
    this.layer = React.createRef();
  }

  componentDidMount() {
    this.ctx = this.layer.current.getCtx();
    bus.on('workspaceaction', (data) => {
      this.executeToolAction(data);
      if (!this.props.shadow && data.type === 'handleMouseUp') {
        this.updateStore();
      }
    });
  }

  executeToolAction({ type, x, y }) {
    const { scale, tool, color } = this.props;
    // handleMouseDown vs. handleMouseDownShadow
    const action = tools[tool][!this.props.shadow ? type : `${type}Shadow`];
    if (!action) return;
    action({
      x, y,
      color,
      scale,
      ctx: this.ctx,
      clear: () => this.clear(),
    });
  }

  updateStore() {
    const { order, updateLayer } = this.props;
    updateLayer({
      order,
      data: this.getImageData(),
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.props.width, this.props.height);
  }

  getImageData() {
    return this.ctx.getImageData(0, 0, this.props.width, this.props.height).data;
  }

  putImageData(data) {
    const { width, height } = this.props;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pos = (y * width + x) * 4;
        const pixel = data.slice(pos, pos + 4);
        this.ctx.fillStyle = `rgba(${pixel.join(',')})`;
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  slowAndSafePutImageData(data) {
    const { width, height } = this.props;
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const pos = (y * width + x) * 4;
        const [r, g, b, a] = [
          data[pos],
          data[pos + 1],
          data[pos + 2],
          data[pos + 3] / 255,
        ];
        this.ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  render() {
    const { width, height, scale } = this.props;
    return (
      <Layer
        ref={this.layer}
        width={width}
        height={height}
        scale={scale}
      />
    );
  }
}

const mapStateToProps = state => ({
  scale: state.scale,
  tool: state.tool,
  color: state.color,
  width: state.width,
  height: state.height,
});

const mapDispatchToProps = {
  updateLayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerContainer);
