const mongoose = require("mongoose");

const personalProfileSchema = new mongoose.Schema({
  friends: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
    },
  ],
});
module.exports = mongoose.Schema("PersonalProfile", personalProfileSchema);
