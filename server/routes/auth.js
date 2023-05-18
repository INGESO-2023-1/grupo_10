const express = require('express');
const router = express.Router();

// Archivos de controladores
const authController = require('../controller/auth');

// Manejar peticiones GET
router.get('/', authController.prueba);
router.get('/login', authController.login);
router.get('/register', authController.register);

module.exports = router;
