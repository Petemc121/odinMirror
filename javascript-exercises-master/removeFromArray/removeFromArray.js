const removeFromArray = function () {
  for (j = 1; j < arguments.length; j++) {
    for (i = 0; i < arguments[0].length; i++) {
      if (arguments[0][i] === arguments[j]) {
        arguments[0].splice(i, 1);
      }
    }
  }
  return arguments[0];
};

module.exports = removeFromArray;
