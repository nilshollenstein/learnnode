const fs = require("fs");

countLinesfiles(fs.readFileSync(process.argv[2]));
function countLinesfiles(file) {
  let numberOfNewlines = file.toString().split("\n").length - 1;
  console.log(numberOfNewlines);
}
