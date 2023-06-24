const express = require("express");
const router = express.Router();

// Archivos de controladores
const userController = require("../controllers/user");

// Manejar peticiones GET
router.get("/", userController.getActualUser);
router.get("/phone/:phone", userController.getUserByPhone);
router.get("/username/:username", userController.getUser);

module.exports = router;
