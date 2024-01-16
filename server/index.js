const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// connect to mongodb database using mongoose

const mongoURI =
  "mongodb+srv://hasinduonline:gkr11388tm@cluster0.ecidohi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log("The connection with mongod is established");
});
