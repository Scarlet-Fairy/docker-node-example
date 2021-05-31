const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 9000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World from Docker and Node.js!</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
