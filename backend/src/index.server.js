const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const BodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/user");
env.config();

app.use(BodyParser());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.jg3k8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // userCreateIndex: true,
      useCreateIndex: true,
      // useNewUrlParser: true,
    }
  )
  .then((e) => {
    console.log("DATABASE Connected");
  });

app.use("/api", userRoutes);

app.post("/post", (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`STARTED on Port ${process.env.PORT}`);
});
