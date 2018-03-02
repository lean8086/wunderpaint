import React from 'react';
import SideToolbox from './SideToolbox';
import Toolbox from './Toolbox';
import Workspace from './Workspace';

const App = (props) => (
  <div>
    {props.match.params.id}
    <SideToolbox />
    <Workspace />
    <Toolbox />
  </div>
);

export default App;
