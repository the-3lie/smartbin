const User = require("../models/utilisateur");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {

  const { nom, prenom, email, motdepasse, role } = req.body;

  const userExist = await User.findOne({ email });
  if(userExist){
    return res.status(400).json({
      message: "Utilisateur existe déjà"
    });
  }

  const hashed = await bcrypt.hash(motdepasse, 10);

  const user = await User.create({
    nom,
    prenom,
    email,
    motdepasse: hashed,
    role
  });

  res.status(201).json(user);
};

exports.login = async (req, res) => {

  const { email, motdepasse } = req.body;

  const user = await User.findOne({ email });

  if(!user){
    return res.status(404).json({
      message: "Utilisateur introuvable"
    });
  }

  const isMatch = await bcrypt.compare(
    motdepasse,
    user.motdepasse
  );

  if(!isMatch){
    return res.status(400).json({
      message: "Mot de passe incorrect"
    });
  }

  const token = jwt.sign({
    id: user._id,
    role: user.role
  }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  res.json({
    token,
    user
  });
};