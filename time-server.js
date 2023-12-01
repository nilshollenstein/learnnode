const net = require("net");
const server = net.createServer(function (socket) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // starts at 0
  let day = date.getDate(); // returns the day of month
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours.length() !== 2) {
    hours = "0" + hours;
  }
  let timeString = `${year}-${month}-${day}` + " " + `${hours}:${minutes}`;

  socket.write(timeString + "\n");
  socket.end();
});
server.listen(Number(process.argv[2]));
