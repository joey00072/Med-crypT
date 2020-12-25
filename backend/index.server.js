const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

const app = express();
env.config();

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hello There",
  });
});

app.get("/data", (req, res, next) => {
  res.status(200).json({
    message: "hello There",
  });
});

app.listen(process.env.PORT, () => {
  console.log("doo doo doo");
});
