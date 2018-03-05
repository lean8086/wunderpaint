import React from 'react';
import SideToolbox from './SideToolbox';
import Toolbox from './Toolbox';
import Workspace from './Workspace';

import './index.css';

const App = (props) => (
  <div className='App'>
    <SideToolbox />
    <Workspace id={props.match.params.id} />
    <Toolbox />
  </div>
);

export default App;
