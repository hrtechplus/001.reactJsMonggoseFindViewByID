const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// POST /api/posts
router.post("/", async (req, res) => {
  try {
    const { topic, description, category } = req.body;

    // Create a new post object
    const newPost = new Post({
      topic,
      description,
      category,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
