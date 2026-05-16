const router = require("express").Router();
const controller = require("../controllers/messageController");

router.get("/", controller.getMessages);
router.post("/", controller.sendMessage);

module.exports = router;