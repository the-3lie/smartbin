const mongoose = require("mongoose");

const panneSchema = new mongoose.Schema({
  poubelleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poubelle"
  },
  description: String,
  statut: {
    type: String,
    default: "non_resolu"
  }
}, { timestamps: true });

module.exports = mongoose.model("Panne", panneSchema);