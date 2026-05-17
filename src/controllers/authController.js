const User = require("../models/User");

exports.register = async (req, res) => {

    try {

        const user = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            motdepasse: req.body.motdepasse
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "Utilisateur enregistré",
            user
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};