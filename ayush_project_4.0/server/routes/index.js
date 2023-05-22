const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const messageRoutes = require("./messages");
const roomChats = require("./roomChats");

authRoutes(router);
messageRoutes(router);
roomChats(router);

module.exports = router;
