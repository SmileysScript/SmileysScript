const generator = require("@smileysscript/generator");
const lexer = require("@smileysscript/lexer");
const parser = require("@smileysscript/parser");

const compile = (code) => {
  const tokens = lexer(code);
  const ast = parser(tokens);
  const output = generator(ast);

  return output;
};

exports.compile = compile;
