const router = require("express").Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

    try {

        console.log(req.body);

        const user = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            motdepasse: req.body.motdepasse
        });

        await user.save();

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        console.log("ERREUR REGISTER");
        console.log(error);

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

});

module.exports = router;