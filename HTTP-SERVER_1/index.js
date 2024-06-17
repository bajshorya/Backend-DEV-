const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

function calculateSum(n) {
  let ans = 0;
  for (let index = 1; index <= n; index++) {
    ans = ans + index;
  }
  return ans;
}

// app.post(bodyParse r.json());
// app.get("/shorya-handler", function (req, res) {
//   res.json({
//     name: "Shorya",
//     age: 20,
//   });
// });
app.get("/", function (req, res) {
  const n = req.query.n; //used for adding input to the function that we are calling syntax => localhost:{portnumber}/?n=value
  const ans = calculateSum(n);
  // console.log(req.body);
  res.send("your ans is :" + ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
