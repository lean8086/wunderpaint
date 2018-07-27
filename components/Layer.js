import { Component } from 'react';

class Layer extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.props.setContext(this.canvas.getContext('2d'));
  }

  render() {
    const { width, height, scale } = this.props;
    return (
      <canvas
        className='Layer'
        width={width}
        height={height}
        style={{ transform: `scale(${scale})` }}
        ref={this.canvas}
      />
    );
  }
};
