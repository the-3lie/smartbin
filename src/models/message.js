const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  expediteur: String,
  destinataire: String,
  contenu: String
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);