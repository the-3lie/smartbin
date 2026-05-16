const router = require("express").Router();
const controller = require("../controllers/equipeController");

router.get("/", controller.getEquipes);
router.post("/", controller.createEquipe);

module.exports = router;