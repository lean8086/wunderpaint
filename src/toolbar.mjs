import tool from './tool.mjs';
import colorPicker from './colorPicker.mjs';

const toolList = [
  'brush',
  'line',
  'eraser',
  'ellipse',
  'rectangle',
];

function toolbar() {
  const div = document.createElement('div');
  div.className = 'toolbar';
  
  toolList.forEach(name => {
    div.appendChild(tool({ name }));
  });

  div.appendChild(colorPicker());

  return div;
}

export default toolbar;