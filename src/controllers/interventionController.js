const Intervention = require("../models/intervention");

exports.getInterventions = async (req, res) => {

  const interventions = await Intervention.find()
  .populate("poubelleId")
  .populate("equipeId");

  res.json(interventions);
};

exports.createIntervention = async (req, res) => {

  const intervention = await Intervention.create(req.body);

  res.status(201).json(intervention);
};