const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/public/projects.html");
});

app.get("/blogs", (req, res) => {
  res.sendFile(__dirname + "/public/blog.html");
});

app.listen(PORT, () => {
  console.log("server running on", PORT);
});
