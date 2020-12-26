const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    hash_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "hospital"],
      default: "admin",
    },
    contactNumber: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

userSchema.virtual("password").set(function (password) {
  console.log(password);
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methoed = {
  authenticate: (possword) => {
    console.log(password);
    bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = User = mongoose.model("User", userSchema);
