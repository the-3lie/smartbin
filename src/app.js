const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/poubelles", require("./routes/poubelleRoutes"));
app.use("/api/esp32", require("./routes/esp32Routes"));


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connecté");
})
.catch((err) => {
    console.log(err);
});


module.exports = app;