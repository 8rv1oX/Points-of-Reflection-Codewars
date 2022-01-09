function symmetricPoint(p, q) {
  let p1 = [];
  let X = p[0] - q[0];
  p1 [0] = q [0] - X;
  let Y = p[1] - q[1];
  p1[1] = q[1] - Y;
  return p1;
}
