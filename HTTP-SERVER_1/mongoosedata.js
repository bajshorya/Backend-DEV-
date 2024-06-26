const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Y6aH3nOuK2E7y9vc@cluster0.51xfrcy.mongodb.net/"
);

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists!!!");
  }
});

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({ name: "b", email: "bcd@123", password: "bcd" });
user.save();
app.listen(3000);
