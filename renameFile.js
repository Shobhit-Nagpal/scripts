#! /usr/bin/env node

const fs = require("fs");

if (process.argv.length < 4) {
    console.log("Usage: rename <currentFileName> <newFileName>");
    process.exit(1);
}

const [currentFileName, newFileName] = [process.argv[2], process.argv[3]];

if (!fs.existsSync(currentFileName)) {
    console.log(`File ${currentFileName} does not exist. Please check again.`);
    process.exit(1);
}

try {
    fs.renameSync(currentFileName, newFileName);
    console.log(`File name changed from ${currentFileName} to ${newFileName}`);
}
catch (e) {
    console.log(e);
    process.exit(1);
}
