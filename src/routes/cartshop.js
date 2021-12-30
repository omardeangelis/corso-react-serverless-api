const express = require("express");
const cors = require("cors");
const data = require("../_data/products");

const router = express.Router();

router.route("/").get(cors(), (req, res) => {
  res.status(200).json(data);
});

module.exports = router;
