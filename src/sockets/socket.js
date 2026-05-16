module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("Utilisateur connecté");

    socket.on("sendMessage", (data) => {

      io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {

      console.log("Utilisateur déconnecté");
    });
  });
};