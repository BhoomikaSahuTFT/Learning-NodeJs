const fs = require("fs");
// console.log(fs);

// fs.writeFileSync("read.txt", "Hi!, I am Bhoomika Sahu");
// fs.appendFileSync("read.txt", " Hello World");
// const buff = fs.readFileSync("read.txt");
const buff = fs.readFileSync("read.txt");
console.log(buff.toString());