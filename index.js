const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to my app! :D");
});

app.get("/about", function (req, res) {
  res.send("About and Faq");
});

app.get("/blog", function (req, res) {
  res.send("welcome to my blog");
});

app.get("/hello/:name/:age", function (req, res) {
  res.send(req.params);
});
app.listen(7777, function () {
  console.log("server ir running in http://localhost:7777");
});
