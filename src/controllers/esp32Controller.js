const Poubelle = require("../models/poubelle");
const Notification = require("../models/notification");

exports.rfid = async (req, res) => {

  const { rfid_uid } = req.body;

  let poubelle = await Poubelle.findOne({
    rfid_uid
  });


  if(!poubelle){

    poubelle = await Poubelle.create({
      rfid_uid,
      active: false
    });
  }

  res.json(poubelle);
};

exports.niveau = async (req, res) => {

  const { rfid_uid, niveau } = req.body;

  const poubelle = await Poubelle.findOne({
    rfid_uid
  });

  if(!poubelle){
    return res.status(404).json({
      message: "Poubelle introuvable"
    });
  }

  poubelle.niveau = niveau;

  if(niveau >= 100){

    poubelle.statut = "pleine";

  } else if(niveau >= 70){

    poubelle.statut = "en_cours";

    await Notification.create({
      poubelleId: poubelle._id,
      message: "Poubelle presque pleine",
      type: "warning"
    });

  } else {

    poubelle.statut = "vide";
  }

  await poubelle.save();

  res.json(poubelle);
};