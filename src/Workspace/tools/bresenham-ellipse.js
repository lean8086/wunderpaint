export default function bresenhamEllipse(x0, y0, x1, y1) {
  const width = x1 - x0;
  const height = y1 - y0;
  let xc = x1;
  let yc = y1;
  let a2 = width * width;
  let b2 = height * height;
  let fa2 = 4 * a2;
  let fb2 = 4 * b2;
  let x = 0;
  let y = height;
  let sigma = 2 * b2 + a2 * (1 - 2 * height);
  let ellipse = [];

  /* first half */
  for (; b2 * x <= a2 * y; x += 1) {
    ellipse.push(
      { x: xc + x, y: yc + y },
      { x: xc - x, y: yc + y },
      { x: xc + x, y: yc - y },
      { x: xc - x, y: yc - y },
    );

    if (sigma >= 0) {
      sigma += fa2 * (1 - y);
      y--;
    }
    sigma += b2 * ((4 * x) + 6);
  }

  x = width;
  y = 0;
  sigma = 2 * a2 + b2 * (1 - 2 * width);

  /* second half */
  for (; a2 * y <= b2 * x; y += 1) {
    ellipse.push(
      { x: xc + x, y: yc + y },
      { x: xc - x, y: yc + y },
      { x: xc + x, y: yc - y },
      { x: xc - x, y: yc - y },
    );
    if (sigma >= 0) {
      sigma += fb2 * (1 - x);
      x--;
    }
    sigma += a2 * ((4 * y) + 6);
  }

  return ellipse;
};
