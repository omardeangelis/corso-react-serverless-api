const express = require("express");
const serverless = require("serverless-http");
const app = express();

const cartshop = require("./routes/cartshop");
app.use("/.netlify/functions/cartshop", cartshop);

module.exports.handler = serverless(app);
