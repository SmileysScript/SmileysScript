const punycode = require("punycode/");

const stringToArray = (string) => {
  return punycode.ucs2.decode(string);
};

module.exports = stringToArray;
