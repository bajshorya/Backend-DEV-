const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:Y6aH3nOuK2E7y9vc@cluster0.51xfrcy.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({ name: "b", email: "bcd@123", password: "bcd" });
user.save();
