const express = require("express");
const serverless = require("serverless-http");
const rateLimit = require("express-rate-limit");
const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
    "Limite di 200 richieste per minuto superato. Attendi 1 minuto e riprova",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

const gelateria = require("./routes/gelateria");
app.use("/.netlify/functions/gelateria", gelateria);

module.exports.handler = serverless(app);
