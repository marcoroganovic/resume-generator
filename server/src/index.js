const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    home: "Hello World"
  })
});

const PORT = 5000;
app.listen(PORT, (err) => {
  if(err) {
    console.log(`Could not start server on port ${PORT}`);
    return;
  }

  console.log(`Server running on port ${PORT}`);
});
