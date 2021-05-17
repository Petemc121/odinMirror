const sumAll = function (a, b) {
  let sum = 0;

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else {
    if (a > b) {
      for (var i = a; i >= b; i--) {
        sum += i;
      }
    } else if (b > a) {
      for (var i = a; i <= b; i++) {
        sum += i;
      }
    }
  }

  return sum;
};

module.exports = sumAll;
