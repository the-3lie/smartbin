const mongoose = require("mongoose");

const mesureSchema = new mongoose.Schema({
  poubelleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poubelle"
  },
  niveau: Number
}, { timestamps: true });

module.exports = mongoose.model("Mesure", mesureSchema);