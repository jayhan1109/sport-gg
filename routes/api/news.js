const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();

// @route   GET     /api/news
// @desc    Get News
// @access  Public
router.get("/", (req, res) => {
  request(
    `https://newsapi.org/v2/everything?q=football&from=2020-07-22&to=2020-07-22&sortBy=popularity&apiKey=${config.get(
      "newsAPI"
    )}`,
    function (err, response, body) {
      res.send(body);
    }
  );
});

module.exports = router;
