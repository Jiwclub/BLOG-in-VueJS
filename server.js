const express = require("express");
const mongoose = require("mongoose");

const app = express();
// Middleware

app.use(express.json());
app.use(express.urlencoded());

//Start out Server
app.get("/", (req, res) => {
  res.send("Hello word");
});

app.listen(process.env.PORT || 3000, err => {
  if (err) console.error(err);
  console.log("Server has Started on port ", 3000 || process.env.PORT);
});
