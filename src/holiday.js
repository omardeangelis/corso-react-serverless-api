const express = require("express");
const serverless = require("serverless-http");
const app = express();

const holiday = require("./routes/holiday");

app.use("/.netlify/functions/holiday", holiday);

module.exports.handler = serverless(app);
