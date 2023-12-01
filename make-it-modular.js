const mymodule = require("./mymodule"); // Pfad zum Modul

const directory = process.argv[2];
const extension = process.argv[3];

// Aufruf der Funktion aus dem Modul
mymodule(directory, extension, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Ausgabe der Dateien
  data.forEach((file) => {
    console.log(file);
  });
});
