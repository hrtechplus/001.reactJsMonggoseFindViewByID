const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const getRouter = require("./routes/get");
const updateRouter = require("./routes/update");
const getIDRouter = require("./routes/getID");
const quotesRouter = require("./routes/gets");
// middleware
app.use(express.json());
app.use(getRouter);
app.use(updateRouter);
app.use(getIDRouter);
app.use(quotesRouter);
// service start
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Connect to MongoDB database using mongoose

const mongoURI =
  "mongodb+srv://hasinduonline:6O66S7eC4S2sw3Fo@cluster0.ecidohi.mongodb.net/MERN_Learn?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
