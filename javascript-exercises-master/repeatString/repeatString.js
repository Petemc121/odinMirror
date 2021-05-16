const repeatString = function (string, repeat) {
  stringRepeat = "";

  if (repeat < 0) {
    return "ERROR";
  } else {
    for (var i = 0; i < repeat; i++) {
      stringRepeat += string;
    }

    return stringRepeat;
  }
};

module.exports = repeatString;
