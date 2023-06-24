// Conctat list model for mongoose
const mongoose = require("mongoose");

// Definir esquema de mensajes
const messageSchema = new mongoose.Schema({
    fromPhone: {
        type: String,
        required: true,
        minlength: 10,
    },
    toPhone: {
        type: String,
        required: true,
        minlength: 10,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

// Crear modelo de lista de contactos
const Message = mongoose.model("Message", messageSchema);

// Exportar modelo
module.exports = Message;
