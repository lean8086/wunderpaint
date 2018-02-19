import bresenham from 'bresenham/generator';
import { draw } from './Pencil';

let x0 = 0;
let y0 = 0;

function doBresenham({ x, y, color, selectedLayer }) {
  for (const point of bresenham(x0, y0, x, y)) {
    draw({
      x: point.x,
      y: point.y,
      color,
      selectedLayer,
    });
  }
}

function start(props) {
  x0 = props.x;
  y0 = props.y;
  draw(props);
}

export default {
  handleMouseDown: start,
  handleMouseMove: doBresenham,
}
