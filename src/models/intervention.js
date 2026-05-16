const mongoose = require("mongoose");

const interventionSchema = new mongoose.Schema({
  poubelleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poubelle"
  },
  equipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipe"
  },
  statut: {
    type: String,
    default: "en_attente"
  },
  dateFin: Date
}, { timestamps: true });

module.exports = mongoose.model("Intervention", interventionSchema);