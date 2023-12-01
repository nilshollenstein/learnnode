const http = require("http");

const port = process.argv[2];

const server = http.createServer(function (req, res) {
  let splitapi = req.url.split("?")[0];
  let iso = req.url.split("?iso=")[1];
  if (splitapi === "/api/parsetime") {
    let date = new Date(iso);
    let parsetime = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.end(JSON.stringify(parsetime));
  } else if (splitapi === "/api/unixtime") {
    let unixtime = {
      unixtime: new Date(iso).getTime(),
    };
    res.end(JSON.stringify(unixtime));
  }
});
server.listen(port);
