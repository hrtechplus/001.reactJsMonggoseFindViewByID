const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const mongoose = require("mongoose");
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// connect to mongodb database using mongoose

const mongoURI =
  "mongodb+srv://hasindu:TqCFHY7JslwNNwns@mern.tz2lnh1.mongodb.net/mern?retryWrites=true&w=majority";

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
