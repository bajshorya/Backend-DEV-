//input validation

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});
// what if the user sends a wrong input or some other error is catched up in the above function
// the result will give up all our server info which will revel our backend info eg

// SyntaxError: Expected ',' or '}' after property value in JSON at position 21
//     at JSON.parse (<anonymous>)
//     at parse (/home/runner/RecklessLinearSpreadsheet/node_modules/body-parser/lib/types/json.js:92:19)
//     at /home/runner/RecklessLinearSpreadsheet/node_modules/body-parser/lib/read.js:128:18
//     at AsyncResource.runInAsyncScope (node:async_hooks:206:9)
//     at invokeCallback (/home/runner/RecklessLinearSpreadsheet/node_modules/raw-body/index.js:238:16)
//     at done (/home/runner/RecklessLinearSpreadsheet/node_modules/raw-body/index.js:227:7)
//     at IncomingMessage.onEnd (/home/runner/RecklessLinearSpreadsheet/node_modules/raw-body/index.js:287:7)
//     at IncomingMessage.emit (node:events:518:28)
//     at endReadableNT (node:internal/streams/readable:1696:12)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21)

// which is not suitable ,so to prevent this a validation check is written after the main http function
// if and when an error arrises itll response a function instead of the above error

//GLOBAL CATCHES
//error based middleware
app.use(function (err, req, res, next) {
  res.status(411).json({
    msg: "Sorry Something is up with our server",
  });
});

app.listen(3000);
