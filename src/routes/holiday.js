const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    data: {
      id: 1,
      nome: "api-holiday",
    },
  });
});

router.route("/test").get((req, res) => {
  res.status(200).json({
    success: true,
    data: "Prova Secondo Route Holiday",
  });
});

module.exports = router;
