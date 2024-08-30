const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());

// list of users
var list = [
  { name: "Zombie Kapoor", kidneys: [{ health: true }, { health: false }] },
  { name: "Lucifer Jain", kidneys: [{ health: false }, { health: true }] },
  { name: "Betaal Mahajan", kidneys: [{ health: false }] },
];

// routes
// app.get("/", function (req, res) {
//   try {
//     const userKidneys = list[2].kidneys; // kidney array
//     const kidneyCount = userKidneys.length;

//     let healthyKidneyCount = 0;
//     for (let i = 0; i < kidneyCount; i++) {
//       if (userKidneys[i].health === true) {
//         healthyKidneyCount++;
//       }
//     }

//     const unhealthyKidneyCount = kidneyCount - healthyKidneyCount;
//     const k1Health = kidneyCount > 0 ? userKidneys[0].health : null;
//     const k2Health = kidneyCount > 1 ? userKidneys[1].health : null;

//     res.json({
//       healthyKidneyCount,
//       unhealthyKidneyCount,
//       k1Health,
//       k2Health,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
app.get("/", function (req, res) {
  try {
    const userKidneys = list[2].kidneys; // kidney array
    const kidneyCount = userKidneys.length;

    let healthyKidneyCount = 0;
    for (let i = 0; i < kidneyCount; i++) {
      if (userKidneys[i].health == true) {
        healthyKidneyCount++;
      }
    }

    const unhealthyKidneyCount = kidneyCount - healthyKidneyCount;
    const k1Health = userKidneys[0].health;
    const k2Health = userKidneys[1].health;

    res.json({
      healthyKidneyCount,
      unhealthyKidneyCount,
      k1Health,
      k2Health,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/", function (req, res) {
  const newOrgan = req.body.newOrgan;
  list[2].kidneys.push({ health: newOrgan });

  res.json({
    msg: "Kidney Insertion  successful!",
  });
});
// app.post("/", function (req, res) {
//   console.log(req.body);
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "done!",
//   });
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
