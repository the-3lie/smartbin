const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  motdepasse: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum:["admin", "equipe"],
    default: "equipe"
  }
}, 
{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);