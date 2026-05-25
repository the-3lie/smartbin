const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ================= REGISTER =================

exports.register = async (req, res) => {

   try {

      const user = new User({

         nom: req.body.nom,
         prenom: req.body.prenom,
         email: req.body.email,
         motdepasse: await bcrypt.hash(req.body.motdepasse, 10),
         role: req.body.role

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

// ================= LOGIN =================

exports.connexion = async (req, res) => {

   try {

      const { email, motdepasse } = req.body;

      if (!email || !motdepasse) {
         return res.status(400).json({
            success: false,
            message: "Veuillez remplir tous les champs"
         });
      }

      const user = await User.findOne({ email });

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "Utilisateur introuvable"
         });
      }

      const isMatch = await bcrypt.compare(
         motdepasse,
         user.motdepasse
      );

      if (!isMatch) {
         return res.status(401).json({
            success: false,
            message: "Mot de passe incorrect"
         });
      }

      const token = jwt.sign(
         {
            id: user._id,
            role: user.role
         },
         process.env.JWT_SECRET,
         { expiresIn: "7d" }
      );

      res.status(200).json({

         success: true,
         message: "Connexion réussie",
         token,

         user: {

            id: user._id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            role: user.role

         }

      });

   } catch (error) {

      console.log(error);

      res.status(500).json({

         success: false,
         message: error.message

      });

   }

};