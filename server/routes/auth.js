const express = require("express");
const router = express.Router();

// Archivos de controladores
const authController = require("../controllers/auth");

// Manejar peticiones POST
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

module.exports = router;
