const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  lastLogin: {
    type: Date,
  },
  preferences: {
    type: Object,
  },
  isActive: {
    type: Boolean,
  },
  authUsers: {
    type: Array
  }
});

module.exports = mongoose.model("User", userSchema);
