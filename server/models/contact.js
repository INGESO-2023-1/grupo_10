// Conctat list model for mongoose
const mongoose = require("mongoose");

// Definir esquema de lista de contactos
const contactSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    contacts: {
        type: Array,
        required: true,
    },
});

// Crear modelo de lista de contactos
const Contact = mongoose.model("Contact", contactSchema);

// Exportar modelo
module.exports = Contact;
