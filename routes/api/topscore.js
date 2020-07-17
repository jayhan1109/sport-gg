const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// @route   GET     /api/topscore/:league/:season
// @desc    Get top scorer of season
// @access  Public
router.get("/:league/:season", (req, res) => {
  fs.readFile(
    path.join(
      __dirname,
      `../../api/topscore/${req.params.league}/${req.params.season}_topScore.json`
    ),
    "utf8",
    (err, jsonFile) => {
      if (err) throw new Error(err);
      const jsonData = JSON.parse(jsonFile);
      const players = jsonData.response;

      const data = [];

      players.forEach((el) => {
        const { player, statistics } = el;
        element = {};
        element.id = player.id;
        element.name = player.name;
        element.age = player.age;
        element.team = statistics[0].team.name;
        element.goals = statistics[0].goals.total;
        data.push(element);
      });

      res.send(data);
    }
  );
});

module.exports = router;
