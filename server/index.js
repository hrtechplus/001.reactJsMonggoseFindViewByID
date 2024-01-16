const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// connect to mongodb database using mongoose

const mongoURI =
  "mongodb+srv://hasinduonline:6O66S7eC4S2sw3Fo@cluster0.ecidohi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
  } else {
    console.log("The connection with MongoDB is established");
  }
});
