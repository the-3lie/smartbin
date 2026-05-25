const express = require("express");

const router = express.Router();

const controller = require("../controllers/poubelleController");

// RFID
router.post("/rfid", controller.rfid);

// NIVEAU
router.post("/niveau", controller.niveau);

// CRUD
router.get("/", controller.getPoubelles);

router.post("/", controller.createPoubelle);

router.put("/:id", controller.updatePoubelle);

router.delete("/:id", controller.deletePoubelle);

module.exports = router;