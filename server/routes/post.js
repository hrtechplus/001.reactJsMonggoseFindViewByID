const mongoose = require('mongoose');

// Define the schema for the data
const postSchema = new mongoose.Schema({
  category: String,
  description: String,
  topic: String
});

// Create a model based on the schema
const Post = mongoose.model('Post', postSchema);

// Example route handler to save data to MongoDB
app.post('/posts', async (req, res) => {
  try {
    // Create a new post object with the data from the request body
    const post = new Post({
      category: req.body.category,
      description: req.body.description,
      topic: req.body.topic
    });

    // Save the post to the database
    await post.save();

    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
