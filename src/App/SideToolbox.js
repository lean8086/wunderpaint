import React from 'react';
import ColorPicker from './sideTools/ColorPicker';
import ToggleGrid from './sideTools/ToggleGrid';

import './SideToolbox.css';

const SideToolbox = (props) => (
  <div className='SideToolbox'>
    <ColorPicker />
    <ToggleGrid />
  </div>
);

export default SideToolbox;
