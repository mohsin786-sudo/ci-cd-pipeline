const express = require("express")
const app = express();


app.get("/", (req, res) => {
  res.send("Day 9 CI Working!");
});

app.listen(3000, () => {
    console.log("Server running");
});


