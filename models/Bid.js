const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      // companies are users with role 'company' — reference the User model
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Bid", bidSchema);
