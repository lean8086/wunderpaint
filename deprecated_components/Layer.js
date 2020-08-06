import { Component } from 'react';

class Layer extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.getCtx = this.getCtx.bind(this);
  }

  getCtx() {
    return this.canvas.current.getContext('2d');
  }

  render() {
    const { width, height, scale } = this.props;
    return (
      <canvas
        width={width}
        height={height}
        style={{ transform: `scale(${scale})` }}
        ref={this.canvas}
      >
        <style jsx>{`
          canvas {
            position: absolute;
            left: 0;
            top: 0;
            transform-origin: 0 0;
            image-rendering: -moz-crisp-edges; /* Firefox */
            image-rendering: -webkit-crisp-edges; /* Webkit */
            -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
            image-rendering: pixelated; /* Chrome */
          }
        `}</style>
      </canvas>
    );
  }
};

export default Layer;
