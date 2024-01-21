const express = require("express");
const router = express.Router();
const getRouter = require("./model");

router.get("/about", async (req, res) => {
  try {
    res.json({
      title: "Random-inspirational-quotes-API",
      developer: "Hasindu Rangika",
      github: "https://github.com/hrtechplus",
      version: "1.0.0",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
