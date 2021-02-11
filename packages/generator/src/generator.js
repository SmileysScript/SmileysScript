const generator = (jsAST) => {
  let output = "";

  // If a program
  if (jsAST.type === "Program") {
    while (jsAST.body.length > 0) {
      const section = jsAST.body.shift();
      switch (section.type) {
        // If A CallExpression
        case "CallExpression":
          switch (section.name) {
            // If a Log Expression
            case "Log":
              switch (section.arguments[0].type) {
                case "NumberLiteral":
                  output += "console.log(" + section.arguments[0].value + ");";
                  break;
                case "StringLiteral":
                  output +=
                    'console.log("' + section.arguments[0].value + '");';
                  break;
              }
              break;
          }
          break;
      }
    }
  }

  // Return Output
  return output;
};

module.exports = generator;
