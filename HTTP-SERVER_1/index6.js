// Validate Input
const express = require("express");
const zod = require("zod");
const app = express();

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}
app.post("/loginjn", (req, res) => {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "Your inputs are invalid",
    });
    return;
  }
});
