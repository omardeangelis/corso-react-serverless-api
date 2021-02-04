const express = require("express");
const data = require("../_data/holiday");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    success: true,
    data,
  });
});

module.exports = router;
