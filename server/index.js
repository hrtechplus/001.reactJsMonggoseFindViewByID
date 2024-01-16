const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Connect to MongoDB database using mongoose

const mongoURI =
  "mongodb+srv://hasinduonline:6O66S7eC4S2sw3Fo@cluster0.ecidohi.mongodb.net/your-database-name?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
