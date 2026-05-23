const Poubelle = require("../models/poubelle");


// ======================
// GET ALL POUBELLES
// ======================

exports.getPoubelles = async (req, res) => {

    try {

        const poubelles = await Poubelle.find();

        res.status(200).json({
            success: true,
            data: poubelles
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// ======================
// CREATE POUBELLE
// ======================

exports.createPoubelle = async (req, res) => {

    try {

        const poubelle = await Poubelle.create(req.body);

        res.status(201).json({
            success: true,
            message: "Poubelle créée",
            data: poubelle
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// ======================
// UPDATE POUBELLE
// ======================

exports.updatePoubelle = async (req, res) => {

    try {

        const poubelle = await Poubelle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!poubelle) {

            return res.status(404).json({
                success: false,
                message: "Poubelle introuvable"
            });

        }

        res.status(200).json({
            success: true,
            message: "Poubelle modifiée",
            data: poubelle
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// ======================
// DELETE POUBELLE
// ======================

exports.deletePoubelle = async (req, res) => {

    try {

        const poubelle = await Poubelle.findByIdAndDelete(req.params.id);

        if (!poubelle) {

            return res.status(404).json({
                success: false,
                message: "Poubelle introuvable"
            });

        }

        res.status(200).json({
            success: true,
            message: "Poubelle supprimée"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// ======================
// RFID
// ======================

exports.rfid = async (req, res) => {

    try {

        const { uid, nom } = req.body;

        if (!uid || !nom) {

            return res.status(400).json({
                success: false,
                message: "UID et nom obligatoires"
            });

        }

        const exist = await Poubelle.findOne({ uid });

        if (exist) {

            return res.status(400).json({
                success: false,
                message: "Carte RFID déjà enregistrée"
            });

        }

        const poubelle = await Poubelle.create({
            nom,
            uid,
            niveau: 0,
            statut: "vide"
        });

        res.status(201).json({
            success: true,
            message: "Carte RFID ajoutée",
            data: poubelle
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// ======================
// NIVEAU ESP32
// ======================

exports.niveau = async (req, res) => {

    try {

        const { uid, niveau } = req.body;

        if (!uid || niveau === undefined) {

            return res.status(400).json({
                success: false,
                message: "UID et niveau obligatoires"
            });

        }

        const poubelle = await Poubelle.findOne({ uid });

        if (!poubelle) {

            return res.status(404).json({
                success: false,
                message: "Poubelle introuvable"
            });

        }

        poubelle.niveau = niveau;

        // Gestion statut automatique

        if (niveau >= 80) {

            poubelle.statut = "pleine";

        } else if (niveau >= 40) {

            poubelle.statut = "en cours";

        } else {

            poubelle.statut = "vide";

        }

        await poubelle.save();

        res.status(200).json({
            success: true,
            message: "Niveau mis à jour",
            data: poubelle
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};