const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 9000;
const msg = process.env.MSG || "Hello World from Docker and Node.js!";
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send(`<h1>${msg} </h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
