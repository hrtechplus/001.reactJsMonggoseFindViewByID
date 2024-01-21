const express = require("express");
const router = express.Router();
const getRouter = require("./model");

router.get("/get", async (req, res) => {
  try {
    res.json({
      title: "Random-inspirational-quotes-API",
      developer: "Hasindu Rangika",
      github: "https://github.com/hrtechplus",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
