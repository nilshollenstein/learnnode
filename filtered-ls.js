const fs = require("fs");
const path = require("path");

const directory = process.argv[2];
const filterExtension = process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    return console.error(err);
  }

  files.forEach((file) => {
    if (path.extname(file) === `.${filterExtension}`) {
      console.log(file);
    }
  });
});
