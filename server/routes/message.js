const express = require("express");
const router = express.Router();

// Archivos de controladores
const messageController = require("../controllers/message");

// Manejar peticiones
router.post("/send", messageController.sendMessage);
router.get("/list/:phone", messageController.getMessages);

module.exports = router;
