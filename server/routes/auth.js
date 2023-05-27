const express = require('express');
const router = express.Router();

// Archivos de controladores
const authController = require('../controllers/auth');

// Manejar peticiones GET (usando req.query)
router.get('/', authController.prueba);
router.get('/login', authController.login);
router.get('/register', authController.register);

// Manejar peticiones POST (usando req.body)
router.post('/', authController.prueba);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
