// Bresenham Curve Rasterizing Algorithms by Zingl Alois
// http://members.chello.at/easyfilter/bresenham.html
// http://members.chello.at/easyfilter/canvas.html

export function* plotEllipseRect(x0, y0, x1, y1) {
  let a = Math.abs(x1 - x0);
  const b = Math.abs(y1 - y0);
  let b1 = b & 1;
  // Diameter
  let dx = 4 * (1 - a) * b * b;
  let dy = 4 * (b1 + 1) * a * a;
  // Error increment
  let err = dx + dy + b1 * a * a
  // Error of 1.step
  let e2;

  // If called with swapped points exchange them
  if (x0 > x1) { x0 = x1; x1 += a; }
  if (y0 > y1) { y0 = y1; }

  // Starting pixel
  y0 += (b + 1) >> 1;
  y1 = y0 - b1;
  a = 8 * a * a;
  b1 = 8 * b * b;

  // Quadrant I, II, III, IV
  do {
    yield({ x: x1, y: y0 });
    yield({ x: x0, y: y0 });
    yield({ x: x0, y: y1 });
    yield({ x: x1, y: y1 });
    e2 = 2 * err;
    // Y step
    if (e2 <= dy) { y0++; y1--; err += dy += a; }
    // X step
    if (e2 >= dx || 2 * err > dy) { x0++; x1--; err += dx += b1; }
  } while (x0 <= x1);

  // Too early stop of flat ellipses a=1
  while (y0 - y1 <= b) {
    // Finish tip of ellipse
    yield({ x: x0 - 1, y: y0 });
    yield({ x: x1 + 1, y: y0++ });
    yield({ x: x0 - 1, y: y1 });
    yield({ x: x1 + 1, y: y1-- });
  }
}

export function* plotLine(x0, y0, x1, y1) {
  const dx = Math.abs(x1 - x0);
  const sx = x0 < x1 ? 1 : -1;
  const dy = -Math.abs(y1 - y0);
  const sy = y0 < y1 ? 1 : -1;
  // Error value e_xy
  let err = dx + dy;
  let e2;

  for (;;) {
    yield({ x: x0, y: y0 });
    if (x0 === x1 && y0 === y1) { break; }
    e2 = 2 * err;
    // X step
    if (e2 >= dy) { err += dy; x0 += sx; }
    // Y step
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}