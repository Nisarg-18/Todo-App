const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is required"],
  },
  description: {
    type: String,
    require: [false],
  },
});

module.exports = mongoose.model("Todo", todoSchema);
