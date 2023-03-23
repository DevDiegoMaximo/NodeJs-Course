var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Hey!");
  })
  .listen(7777);

console.log("Server is running!");
