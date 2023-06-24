const express = require("express");
const router = express.Router();

// Archivos de controladores
const messageController = require("../controllers/message");

// Manejar peticiones
router.post("/send/:phone", messageController.sendMessage);

module.exports = router;
