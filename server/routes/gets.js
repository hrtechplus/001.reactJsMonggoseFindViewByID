const express = require("express");
const app = express();
const quotes = require("./quotes");

// Change the route path from "/" to "/quotes"
app.get("/", (req, res) => {
  const randomQuote = quotes();

  res.json(JSON.stringify(randomQuote));
});

module.exports = app;
