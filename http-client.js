const http = require("http");

function dataGet(url) {
  return new Promise((resolve, reject) => {
    let data = "";

    let request = http.get(url, (response) => {
      response.on("data", (chunk) => {
        data += chunk;
        console.log(data);
        data = "";
      });

      response.on("end", () => {
        resolve(data);
      });

      response.on("error", (error) => {
        reject(error);
      });
    });

    request.on("error", (error) => {
      reject(error);
    });
  });
}

let url = process.argv[2];

dataGet(url)
  .then((data) => {})
  .catch((error) => {
    console.error("Error:", error);
  });
