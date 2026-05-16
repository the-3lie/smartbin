const mongoose = require("mongoose");

const poubelleSchema = new mongoose.Schema({
  rfid_uid: {
    type: String,
    unique: true
  },
  nom: String,
  latitude: Number,
  longitude: Number,
  niveau: {
    type: Number,
    default: 0
  },
  statut: {
    type: String,
    default: "vide"
  },
  active: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Poubelle", poubelleSchema);