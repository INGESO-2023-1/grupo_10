// Conctat list model for mongoose
const mongoose = require("mongoose");

// Definir esquema de mensajes
const messageSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
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
