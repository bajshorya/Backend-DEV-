const express = require("express");
const app = express();
const port = 3000;

const kidneyId = req.query.kidneyId;
const username = req.headers.username;
const password = req.headers.password;

function userMiddleware(req, res, next) {
  if (username != "shorya" && password != "pass") {
    res.status(403).json({
      msg: "user not found",
    });
  } else {
    next();
  }
}

function kidneyMiddeware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect Inputs",
    });
  } else {
    next();
  }
}
app.use(kidneyMiddeware);
app.use(userMiddleware);//these will allow us to use  these middlewares withoit mentioning them in the http methods
// middlewares can only be used adter this line 
//one more example
app.use(express.json())

//middlewares are the function which use initial checks before calling the actual functions (usually auth, sign in, inout validations etc.)


app.get("/heath-checkup", userMiddleware, kidneyMiddeware, (req, res) => {
  res.send("Your Heart is healthy !");
});

app.listen(port);
