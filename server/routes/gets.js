const express = require("express");
const router = express.Router();
const getRandomQuoteJson = require("../Database/quotes");

router.get("/gets", (req, res) => {
  // Call the function from quotes.js to get the JSON data
  const jsonQuote = getRandomQuoteJson();

  // Send the JSON data as the response
  res.send(jsonQuote);
});

module.exports = router;
