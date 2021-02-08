const express = require("express");
const cors = require("cors");

const data = require("../_data/gelateria");

const router = express.Router();

router.route("/").get(cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    success: true,
    data,
  });
});

module.exports = router;
