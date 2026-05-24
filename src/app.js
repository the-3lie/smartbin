require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();


// ================= CORS =================

app.use(cors({

    origin: "*",

    methods: ["GET", "POST", "PUT", "DELETE"],

    credentials: true

}));


// ================= MIDDLEWARES =================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ================= ROUTES =================

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/equipes", require("./routes/equipeRoutes"));

app.use("/api/interventions", require("./routes/interventionRoutes"));

app.use("/api/messages", require("./routes/messageRoutes"));

app.use("/api/notifications", require("./routes/notificationRoutes"));

app.use("/api/pannes", require("./routes/panneRoutes"));

app.use("/api/poubelles", require("./routes/poubelleRoutes"));

app.use("/api/esp32", require("./routes/esp32Routes"));


// ================= ROOT =================

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "API SMARTBIN fonctionne"

    });

});


// ================= MONGODB =================

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB connecté");
})
.catch((err) => {
    console.log("❌ Erreur MongoDB");
    console.log(err);
});

// ================= 404 =================

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route not found"

    });

});


// ================= ERROR =================

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({

        success: false,

        message: "Erreur interne du serveur"

    });

});


module.exports = app;