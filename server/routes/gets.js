const express = require("express");
const router = express.Router();
//const getRandomQuoteJson = require("../Database/quotes");

router.get("/my", (req, res) => {
  // Call the function from quotes.js to get the JSON data
  const jsonQuote = getRandomQuoteJson();

  // Send the JSON data as the response
  // res.send(jsonQuote);
  res.send("Hello World");
});

module.exports = router;
