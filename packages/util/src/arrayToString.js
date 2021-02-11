const punycode = require("punycode/");

const arrayToString = (array) => {
  return punycode.ucs2.encode(array);
};

module.exports = arrayToString;
