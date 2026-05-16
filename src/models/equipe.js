const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
  nom_equipe: String,
  localite: String,
  telephone_chef: String,
  statut: {
    type: String,
    default: "disponible"
  }
}, { timestamps: true });

module.exports = mongoose.model("Equipe", equipeSchema);