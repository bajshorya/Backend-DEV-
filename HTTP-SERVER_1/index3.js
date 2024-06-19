const express = require("express");
const app = express();
const port = 3000;
app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId; // Use 'kidneyid' to match the query parameter
  const username = req.headers.username;
  const password = req.headers.password;
  if (username !== "shorya" && password !== "pass") {
    res.status(403).json({
      msg: "username/password doesn't exists",
    });
    return;
  }
  if (kidneyId !== "1" && kidneyId !== "2") {
    res.status(411).json({
      msg: "wrong inputs",
    });
    return;
  }
});
app.listen(port);
