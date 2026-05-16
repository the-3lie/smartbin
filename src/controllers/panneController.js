const Panne = require("../models/panne");

exports.getPannes = async (req, res) => {

  const pannes = await Panne.find();

  res.json(pannes);
};

exports.createPanne = async (req, res) => {

  const panne = await Panne.create(req.body);

  res.status(201).json(panne);
};