import React, { Component } from 'react';

class Toolbox extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick('a')}>toolA</button>
        <button onClick={() => this.props.onClick('b')}>toolB</button>
      </div>
    );
  }
}

export default Toolbox;
