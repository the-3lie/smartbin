const mongoose = require("mongoose");

const poubelleSchema = new mongoose.Schema({

    nom: {
        type: String,
        required: true
    },

    uid: {
        type: String,
        required: true,
        unique: true
    },

    niveau: {
        type: Number,
        default: 0
    },

    statut: {
        type: String,
        enum: ["vide", "en cours", "pleine", "panne"],
        default: "vide"
    }

}, { timestamps: true });

module.exports = mongoose.model("Poubelle", poubelleSchema);