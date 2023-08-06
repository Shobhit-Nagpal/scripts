#! /usr/bin/env node

const fs = require("fs");

if (process.argv.length < 3) {
    console.log("Usage: copy <fileToCopy>");
    process.exit(1);
}

const originalFile = process.argv[2];

if (!fs.existsSync(originalFile)) {
    console.log(`File ${originalFile} does not exist. Please check again.`);
    process.exit(1);
}

let fileName = originalFile.split('/');
fileName = fileName[fileName.length - 1];


try {

    fs.copyFileSync(originalFile, `${process.cwd()}/${fileName}`);
    console.log(`Copied file ${fileName}`);
}
catch (e) {
    console.log(e);
    process.exit(1);
}
