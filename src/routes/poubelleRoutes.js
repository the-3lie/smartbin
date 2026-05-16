const router = require("express").Router();
const controller = require("../controllers/poubelleController");

router.get("/", controller.getPoubelles);
router.post("/", controller.createPoubelle);
router.put("/:id", controller.updatePoubelle);
router.delete("/:id", controller.deletePoubelle);

module.exports = router;