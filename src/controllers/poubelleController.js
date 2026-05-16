const Poubelle = require("../models/poubelle");

exports.getPoubelles = async (req, res) => {

  const poubelles = await Poubelle.find();

  res.json(poubelles);
};

exports.createPoubelle = async (req, res) => {

  const poubelle = await Poubelle.create(req.body);

  res.status(201).json(poubelle);
};

exports.updatePoubelle = async (req, res) => {

  const poubelle = await Poubelle.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(poubelle);
};

exports.deletePoubelle = async (req, res) => {

  await Poubelle.findByIdAndDelete(req.params.id);

  res.json({
    message: "Poubelle supprimée"
  });
};