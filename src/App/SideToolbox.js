import React from 'react';
import ColorPicker from './sideTools/ColorPicker';
import ToggleGrid from './sideTools/ToggleGrid';
import Zoom from './sideTools/Zoom';

import './SideToolbox.css';

const SideToolbox = (props) => (
  <div className='SideToolbox'>
    <ColorPicker />
    <ToggleGrid />
    <Zoom />
  </div>
);

export default SideToolbox;
