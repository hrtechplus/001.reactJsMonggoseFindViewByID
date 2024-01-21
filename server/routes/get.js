const express = require("express");
const router = express.Router();
const getRouter = require("./model");

router.get("/get", async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await getRouter.find();

    // Send the retrieved data to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
