const smileysscript = require("@smileysscript/core");
const fs = require("fs");
const path = require("path");

const processFile = (pathIn, file, pathOut) => {
  try {
    const code = fs.readFileSync(path.resolve(pathIn, file));
    const output = smileysscript.compile(code);
    fs.writeFileSync(
      path.resolve(pathOut, path.basename(file) + ".js"),
      output
    );
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = processFile;
