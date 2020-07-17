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

      teams.forEach((el) => {
        const { team, venue } = el;
        element = {};
        element.id = team.id;
        element.name = team.name;
        element.logo = team.logo;
        element.venue = venue.name;
        data.push(element);
      });

      res.json(data);
    }
  );
});

module.exports = router;
