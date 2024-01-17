const express = require("express");
const router = express.Router();
const getRouter = require("./model");

router.get("/get:id", async (req, res) => {
  try {
    // get id form url
    const { id } = req.params;
    // Retrieve data from the database

    const data = await getRouter.findById(id);

    // Send the retrieved data to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
