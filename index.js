require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// SOCKET.IO
require("./src/sockets/socket")(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});

const jwt = require('jsonwebtoken');

const token = jwt.sign(
   {
      id: user._id,
      role: user.role
   },
   process.env.JWT_SECRET,
   { expiresIn: '7d' }
);