const express = require("express");
const app = express();
const port = 3000;

app.get("/shorya-handler", function (req, res) {
  res.json({
    name: "Shorya",
    age: 20,
  });
});
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
