const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["open", "in_progress", "completed", "cancelled"],
    default: "open",
  },

  //customer, koppla projektet till kund som skapade det
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  //created at
  createdAt: {
    type: Date,
    default: Date.now,
  },

  //updated at
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
