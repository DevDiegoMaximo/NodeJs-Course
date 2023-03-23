const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Posts");

//Config
//Template Engine
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route

app.get("/", function (req, res) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function (posts) {
    res.render("layouts/home", { posts: posts });
  });
});

app.get("/cad", function (req, res) {
  res.render("layouts/form");
});

app.post("/add", function (req, res) {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (error) {
      res.send("Failed to create post, error: " + error);
    });
});

app.get("/delete:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.send("Post deleted successfully");
    })
    .catch(function () {
      res.send("Post not found");
    });
});

app.listen(7777, function () {
  console.log("server ir running in http://localhost:7777");
});
