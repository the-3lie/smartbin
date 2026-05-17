const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


// ===============================
// MIDDLEWARES
// ===============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ===============================
// CONNEXION MONGODB
// ===============================

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connecté");
})
.catch((err) => {
    console.log("Erreur connexion MongoDB");
    console.error(err);
});


// ===============================
// ROUTE PRINCIPALE
// ===============================

app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "API SMARTBIN fonctionne"
    });

});


// ===============================
// ROUTES API
// ===============================

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/equipes", require("./routes/equipeRoutes"));

app.use("/api/interventions", require("./routes/interventionRoutes"));

app.use("/api/messages", require("./routes/messageRoutes"));

app.use("/api/notifications", require("./routes/notificationRoutes"));

app.use("/api/pannes", require("./routes/panneRoutes"));

app.use("/api/poubelles", require("./routes/poubelleRoutes"));

app.use("/api/esp32", require("./routes/esp32Routes"));


// ===============================
// ROUTE INTROUVABLE
// ===============================

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});


// ===============================
// GESTION DES ERREURS
// ===============================

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Erreur interne du serveur"
    });

});

module.exports = app;