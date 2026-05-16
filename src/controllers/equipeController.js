const Equipe = require("../models/equipe");

exports.getEquipes = async (req, res) => {
  const equipes = await Equipe.find();
  res.json(equipes);
};

exports.createEquipe = async (req, res) => {
  const equipe = await Equipe.create(req.body);
  res.status(201).json(equipe);
};