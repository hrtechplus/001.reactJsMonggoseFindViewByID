const express = require("express");
const app = express();
const quotes = require("./quotes");

// Change the route path from "/" to "/quotes"
app.get("/", (req, res) => {
  const randomQuote = quotes();
  console.log(randomQuote);
  res.send("Hello World");
});

module.exports = app;
