const { Command } = require("commander");
const program = new Command();
program.version("0.0.1");

program
  .option("-s, --source <location>", "Changes the source location.", "src")
  .option("-o, --output <location>", "Changes the output location.", "lib");

program.parse(process.argv);

// const opts = program.opts();
