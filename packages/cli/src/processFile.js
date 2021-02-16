const smileysscript = require("@smileysscript/core");
const fs = require("fs");
const path = require("path");

const processFile = (pathIn, file, pathOut) => {
  try {
    const code = fs.readFileSync(file, "utf8");
    const output = smileysscript.compile(code);
    const fileSplit = file.split(path.sep);
    const pathInSplit = pathIn.split(path.sep);
    const finalFile = joinMulti(shiftMulti(pathInSplit.length, fileSplit));
    const filePath = path.resolve(
      pathOut,
      finalFile.slice(0, -path.extname(file).length) + ".js"
    );
    ensureDirectoryExistence(filePath);
    fs.writeFileSync(path.resolve(filePath), output);
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
};

const shiftMulti = (times, array) => {
  for (let i = 0; i < times; i++) {
    array.shift();
  }
  return array;
};

const joinMulti = (array) => {
  if (array.length === 1) {
    return path.resolve(array);
  } else if (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      path.resolve(array[i], array[i + 1]);
    }
    return array;
  } else {
    return "";
  }
};

module.exports = processFile;
