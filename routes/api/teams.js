const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// @route   put     /api/teams/:league/:season
// @desc    Get team info of season
// @access  Public
router.get("/:league/:season", (req, res) => {
  fs.readFile(
    path.join(
      __dirname,
      `../../api/teams/${req.params.league}/${req.params.season}_teams.json`
    ),
    "utf8",
    (err, jsonFile) => {
      if (err) throw new Error(err);
      const jsonData = JSON.parse(jsonFile);
      const teams = jsonData.response;

      let data = [];

      let element;

      teams.forEach((team) => {
        element = {};
        element.id = team.team.id;
        element.name = team.team.name;
        element.logo = team.team.logo;
        element.venue = team.venue.name;
        data.push(element);
      });

      console.log(data);

      res.json(teams);
    }
  );
});

module.exports = router;
