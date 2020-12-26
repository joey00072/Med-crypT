const express = require("express");
const user = require("../models/user");
const User = require("../models/user");
const router = express.Router();

router.post("/signin", (req, res) => {});

// User.findOne({{ email: "jdb" }}, (error, user) => {
//   console.log(error, user);
// });

router.post("/signup", (req, res) => {
  User.find({ email: req.body.email })
    .limit(1)
    .exec((error, user) => {
      if (error || user.length != 0) {
        console.log(user.length, "SU");
        return res.status(400).json({
          message: "User already registered",
        });
      }
      const { firstName, lastName, email, password } = req.body;
      // console.log(req.body, "SS");
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username: Math.random().toString(),
      });

      _user.save((error, data) => {
        if (error) {
          console.log(error);
          return res.status(400).json({
            message: "Something Went Worng",
          });
        }

        if (data) {
          return res.status(200).json({
            user: data,
          });
        }
      });
    });
});

module.exports = router;
