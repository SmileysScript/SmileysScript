#!/usr/bin/env node

const processFile = require("./processFile.js");

const glob = require("glob");
const { Command } = require("commander");
const program = new Command();
program.version("0.0.1");

program
  .option("-s, --source <directory>", "Changes the source directory.", "src")
  .option("-o, --output <directory>", "Changes the output directory.", "lib");

program.parse(process.argv);

const opts = program.opts();

glob(opts.source+"/**.😀", {}, (err, files) => {
    if(err) {
        throw new Error(err);
    }
    files.forEach((file) => {
        processFile(opts.source, file, opts.output);
    });
});

glob(opts.source+"/**.smiley", {}, (err, files) => {
    if(err) {
        throw new Error(err);
    }
    files.forEach((file) => {
        processFile(opts.source, file, opts.output);
    });
});
