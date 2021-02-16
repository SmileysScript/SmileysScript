const smileysscript = require("@smileysscript/core");
const fs = require("fs");
const path = require("path");

const processFile = (pathIn, file, pathOut) => {
  try {
    const code = fs.readFileSync(file, "utf8");
    const output = smileysscript.compile(code);
    const filePath = path.resolve(pathOut, file.slice(0, -path.extname(file).length) + ".js");
    ensureDirectoryExistence(filePath);
    fs.writeFileSync(
      path.resolve(filePath),
      output
    );
  } catch (err) {
    throw new Error(err);
  }
};

const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

module.exports = processFile;
