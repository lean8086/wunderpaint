import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/:id' component={App} />
    </div>
  </Router>
);

export default Root;
