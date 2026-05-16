const Message = require("../models/message");

exports.getMessages = async (req, res) => {

  const messages = await Message.find();

  res.json(messages);
};

exports.sendMessage = async (req, res) => {

  const message = await Message.create(req.body);

  res.status(201).json(message);
};