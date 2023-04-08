const mongoose = require("mongoose");

const workProfileSchema = new mongoose.Schema({
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
module.exports = mongoose.Schema("WorkProfile", workProfileSchema);
