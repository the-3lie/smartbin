const router = require("express").Router();
const controller = require("../controllers/interventionController");

router.get("/", controller.getInterventions);
router.post("/", controller.createIntervention);

module.exports = router;