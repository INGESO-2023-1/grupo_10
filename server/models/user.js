const mongoose = require('mongoose');

// Definir esquema de usuario
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true
    },
    password: String
});

// Crear modelo de usuario
var User = mongoose.model('User', userSchema);

// Exportar modelo
module.exports = User;
