const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// @route   GET     /api/teams/:league/:season
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

// @route   GET     /api/teams/:id
// @desc    Get players info of season
// @access  Public
router.get("/:id", (req, res) => {
  fs.readFile(
    path.join(__dirname, `../../api/players_demo.json`),
    "utf8",
    (err, jsonFile) => {
      if (err) throw new Error(err);
      const jsonData = JSON.parse(jsonFile);
      const players = jsonData.response;

      let data = [];

      let element;

      players.forEach((el) => {
        const { player } = el;
        element = {};
        element.id = player.id;
        element.name = player.name;
        element.age = player.age;
        element.nationality = player.nationality;
        element.photo = player.photo;
        data.push(element);
      });

      res.json(data);
    }
  );
});

module.exports = router;
