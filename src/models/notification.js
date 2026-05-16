const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  poubelleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poubelle"
  },
  message: String,
  type: String,
  lu: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);