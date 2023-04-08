const mongoose = require("mongoose");

const datingProfileSchema = new mongoose.Schema({
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
module.exports = mongoose.Schema("DatingProfile", datingProfileSchema);
