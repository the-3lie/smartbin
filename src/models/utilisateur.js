const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: {
    type: String,
    unique: true
  },
  motdepasse: String,
  role: {
    type: String,
    enum: ["admin", "intervenant"]
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);