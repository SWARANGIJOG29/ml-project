const mongoose = require("mongoose");

const contactusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    messgae: {
      type: String,
    },

  }
);

module.exports = mongoose.model("contactus", contactusSchema);