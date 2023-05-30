// User model for mongoose
const mongoose = require("mongoose");

// Definir esquema de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
  },
});

// Crear modelo de usuario
const User = mongoose.model("User", userSchema);

// Exportar modelo
module.exports = User;
