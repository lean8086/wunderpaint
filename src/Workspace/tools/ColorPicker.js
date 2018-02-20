import React, { Component } from 'react';

// const palette = {
//
// };

class ColorPicker extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.selectColor('#000')}>black</button>
        <button onClick={() => this.props.selectColor('#f00')}>red</button>
      </div>
    );
  }
}

export default ColorPicker;
