const router = require("express").Router();
const controller = require("../controllers/notificationController");

router.get("/", controller.getNotifications);

module.exports = router;