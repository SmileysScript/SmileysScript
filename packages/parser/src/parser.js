const util = require("@smileysscript/util");

const parser = (tokens) => {
  const AST = {
    type: "Unknown",
    body: [],
  };

  // Set Type
  const typeToken = tokens.shift();
  if (typeToken.type === "string") {
    const valueArray = util.stringToArray(typeToken.value);
    switch (valueArray[0]) {
      case util.stringToArray("😀")[0]:
        AST.type = "Program";
        break;
      default:
        throw new Error("Not A Valid File Header: " + typeToken.value);
    }
  } else {
    throw new Error("Not A Valid File Header: " + typeToken.value);
  }

  // Process File
  while (tokens.length > 0) {
    const currentToken = tokens.shift();

    if (util.stringToArray(currentToken.value).length === 1) {
      // Switch For One Symbols
      switch (util.stringToArray(currentToken.value)[0]) {
        case util.stringToArray("😜")[0]: {
          const expression = {
            type: "CallExpression",
            name: "Log",
            arguments: [],
          };
          const argument = tokens.shift();
          if (argument.type === "number") {
            expression.arguments.push({
              type: "NumberLiteral",
              value: argument.value,
            });
          } else if (argument.type === "string") {
            expression.arguments.push({
              type: "StringLiteral",
              value: argument.value,
            });
          }
          AST.body.push(expression);
          break;
        }
      }
    }
  }

  return AST;
};

module.exports = parser;
