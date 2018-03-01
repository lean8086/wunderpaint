import React from 'react';
import SideToolbox from './SideToolbox';
import Toolbox from './Toolbox';

const App = (props) => (
  <div>
    {props.match.params.id}
    <SideToolbox />
    <p>workspace</p>
    <Toolbox />
  </div>
);

export default App;
