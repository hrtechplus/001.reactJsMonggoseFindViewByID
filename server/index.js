const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const getRouter = require("./routes/get");
const getIDRouter = require("./routes/getID");
const testing = require("./routes/gets");
// middleware
app.use(cors());
app.use(express.json());
app.use(getRouter);

app.use(getIDRouter);
app.use(testing);
// service start
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Connect to MongoDB database using mongoose
