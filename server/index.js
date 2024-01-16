const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// connect to mongodb database using mongoose

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/expressmongo";

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log("The connection with mongod is established");
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");
const db = mongoose.connection;
