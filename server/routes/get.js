const express = require("express");
const router = express.Router();
const YourModel = require("../models/YourModel");

router.get("/", async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await YourModel.find();

    // Send the retrieved data to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
