import React from 'react';
import Header from './Header';
import Workspace from './Workspace';

const App = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
    <Header />
    <Workspace />
  </div>
);

export default App;
