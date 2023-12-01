const fs = require("fs");
const path = require("path");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err); // Fehler behandeln und an die Rückruffunktion weitergeben
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${extension}`
    );
    return callback(null, filteredFiles); // Kein Fehler, Daten an die Rückruffunktion übergeben
  });
};
