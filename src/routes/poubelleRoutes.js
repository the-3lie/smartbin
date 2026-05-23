const express = require("express");

const router = express.Router();

const controller = require("../controllers/poubelleController");

router.post("/rfid", controller.rfid);

router.post("/niveau", controller.niveau);

router.get("/", controller.getPoubelles);

router.post("/", controller.createPoubelle);

router.put("/:id", controller.updatePoubelle);

router.delete("/:id", controller.deletePoubelle);

module.exports = router;