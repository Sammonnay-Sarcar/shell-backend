const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },
  likes: {
    type: Number,
  },
  reply: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comments",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Comment", commentSchema);
