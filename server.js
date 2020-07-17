const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (res, res) => {
  res.setEncoding("Root");
});

app.listen(port, (req, res) => {
  console.log(`Server is ON ${port}`);
});
