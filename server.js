const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/dist/output.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/output.css"));
});

app.get("/node_modules/@firebase/app", function (req, res) {
  res.sendFile(path.join(__dirname, "/node_modules/@firebase/app"));
});

app.get("/node_modules/@firebase/firestore/lite", function (req, res) {
  res.sendFile(path.join(__dirname, "/node_modules/@firebase/firestore/lite"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
