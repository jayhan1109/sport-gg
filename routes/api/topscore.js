const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("topscore");
});

module.exports = router;
