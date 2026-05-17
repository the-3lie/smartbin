const router = require("express").Router();
const auth = require("../controllers/authController");


router.post("/register", (req, res) => {
    res.json({
        message: "Register fonctionne"
    });
});

module.exports = router;