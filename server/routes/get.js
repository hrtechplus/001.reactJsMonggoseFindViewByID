const express = require("express");
const router = express.Router();
const getRouter = require("./model");

router.get("/get", async (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
