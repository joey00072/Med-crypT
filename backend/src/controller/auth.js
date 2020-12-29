const express = require("express");
// const user = require("../models/user");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { use } = require("../routes/auth");
exports.signup = (req, res) => {
  // User.findOne({ email: req.body.email }).exec((error, user) => {
  //   console.log(error, user);
  // });
  User.find({ email: req.body.email })
    .limit(1)
    .exec((error, user) => {
      if (error || user.length != 0) {
        return res.status(400).json({
          message: "User already registered",
        });
      }
      console.log(req.body);
      const { firstName, lastName, email, password } = req.body;
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
          return res.status(201).json({
            message: "User Created Successfully...",
          });
        }
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1hr",
        });
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(500).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
};
