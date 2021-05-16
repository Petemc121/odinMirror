const reverseString = function (string) {
  if (string === "") {
    return "";
  }

  return reverseString(string.substr(1)) + string.charAt(0);
};

module.exports = reverseString;
