import Pencil from './Pencil';
import Eraser from './Eraser';
import Line from './Line';
import Rectangle from './Rectangle';
import Ellipse from './Ellipse';

const tools = {
  Pencil,
  Eraser,
  Line,
  Rectangle,
  Ellipse,
};

export default tools;
export const list = Object.keys(tools);
