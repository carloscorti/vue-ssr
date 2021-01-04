const express = require("express");
const path = require("path");

const config = {
  port: process.env.PORT || 3000,
};

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send("index.html");
});

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!<br><a href="/">go back</a>');
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
