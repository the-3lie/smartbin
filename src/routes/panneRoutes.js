const router = require("express").Router();
const controller = require("../controllers/panneController");

router.get("/", controller.getPannes);
router.post("/", controller.createPanne);

module.exports = router;