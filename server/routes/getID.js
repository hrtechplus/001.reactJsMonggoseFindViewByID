const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./model");

// GET item by ID
router.get("/:id", async (req, res) => {
  // sample request URL : http://localhost:8080/6564572a30c8b1c824de0b0e
  // smaple ID : 6564572a30c8b1c824de0b0e%0A
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
