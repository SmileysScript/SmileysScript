const util = require("@smileysscript/util");

const lexer = (fullCode) => {
  // Split Code At Spaces
  const codeSplit = fullCode.split(/\s+/).filter(function (t) {
    return t.length > 0;
  });

  // Creates Tokens Array
  const tokens = [];

  // Fill Tokens
  codeSplit.forEach((split) => {
    // Convert Lines into char arrays
    split = util.stringToArray(split);
    if (isNaN(util.arrayToString(split))) {
      tokens.push({ type: "string", value: util.arrayToString(split) });
    } else {
      tokens.push({ type: "number", value: Number(util.arrayToString(split)) });
    }
  });

  // Return Lexed
  return tokens;
};

module.exports = lexer;
