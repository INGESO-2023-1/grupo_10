// Conctat list model for mongoose
const mongoose = require("mongoose");

// Definir esquema de lista de contactos
const contactSchema = new mongoose.Schema({
    userPhone: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: String,
        required: true,
        minlength: 10,
    },
});

// Crear modelo de lista de contactos
const Contact = mongoose.model("Contact", contactSchema);

// Exportar modelo
module.exports = Contact;
