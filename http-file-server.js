const http = require("http");
const fs = require("fs");
const url = process.argv[2];
const location = process.argv[3];

const server = http.createServer(function (req, res) {
  let infosServer = fs.createReadStream(location);
  const destination = res;
  data = infosServer.pipe(destination);
  console.log(data);
});
server.listen(url);
