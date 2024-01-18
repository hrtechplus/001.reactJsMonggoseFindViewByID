const fs = require("fs");

// GET method
app.get("/api/data", (req, res) => {
  // Read the contents of the JavaScript file
  fs.readFile("/path/to/another/file.js", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      // Send the contents of the file as the response
      res.send(data);
    }
  });
});
