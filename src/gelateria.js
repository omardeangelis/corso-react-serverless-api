const express = require("express");
const serverless = require("serverless-http");
const app = express();

const gelateria = require("./routes/gelateria");
app.use("/.netlify/functions/gelateria", gelateria);

module.exports.handler = serverless(app);
