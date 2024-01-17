const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Model = require("./model"); // Replace 'Model' with your actual model name

// Update route
router.put("/update:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, description, Catagory } = req.body; // Replace 'field1', 'field2', 'field3' with your actual field names

    // Find the document by ID and update the fields
    const updatedDocument = await Model.findByIdAndUpdate(
      id,
      { topic, description, Catagory },
      { new: true }
    );

    if (!updatedDocument) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(updatedDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
