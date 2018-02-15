import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Workspace from './Workspace';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Workspace />
      </div>
    );
  }
}

export default App;
