const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// @route   GET     /api/standing/:league/:season
// @desc    Get league standing of season
// @access  Public
router.get("/:league/:season", (req, res) => {
  const data = {};
  fs.readFile(
    path.join(
      __dirname,
      `../../api/standing/${req.params.league}/${req.params.season}_standing.json`
    ),
    "utf8",
    (err, jsonFile) => {
      if (err) throw new Error(err);
      const jsonData = JSON.parse(jsonFile);
      const result = jsonData.response[0];

      data.id = result.league.id;
      data.leagueName = result.league.name;
      data.leagueLogo = result.league.logo;
      data.standings = result.league.standings[0];

      res.json(data);
    }
  );
});

module.exports = router;
