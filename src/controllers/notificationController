const Notification = require("../models/notification");

exports.getNotifications = async (req, res) => {

  const notifications = await Notification.find();

  res.json(notifications);
};