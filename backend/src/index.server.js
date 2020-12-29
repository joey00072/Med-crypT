const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/auth");
env.config();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(express.json());
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

app.listen(process.env.PORT, () => {
  console.log(`STARTED on Port ${process.env.PORT}`);
});
