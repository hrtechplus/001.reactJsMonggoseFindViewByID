const express = require("express");
const router = express.Router();
const quotes = require("../Database/quotes");

router.get("/gets", (req, res) => {
  // Call the function from quotes.js to get the item
  const item = quotes.getItem();

  // Send the item as the response
  res.send(item);
});

module.exports = router;
