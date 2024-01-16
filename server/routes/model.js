const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
