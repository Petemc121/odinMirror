const ftoc = function (f) {
  let cel = (f - 32) / 1.8;

  if (Number.isInteger(cel)) {
    return cel;
  } else {
    return Math.round(cel * 10) / 10;
  }
};

const ctof = function (c) {
  let far = c * 1.8 + 32;
  if (Number.isInteger(far)) {
    return far;
  } else {
    return Math.round(far * 10) / 10;
  }
};

module.exports = {
  ftoc,
  ctof,
};
