const express = require("express");
const router = express.Router();

// Archivos de controladores
const contactController = require("../controllers/contact");

// Manejar peticiones GET
router.post("/add", contactController.addContact);
router.delete("/remove", contactController.removeContact);

module.exports = router;
