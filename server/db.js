const mongoose = require('mongoose');

// Guardar direccion de base de datos
var dbURL = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/wasap_db';
mongoose.set('strictQuery', false);

// Establecer opciones para conexion: timeout de 1 segundo
const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Conectar a la base de datos
mongoose.connect(dbURL, options)

// Exportar modulo
module.exports = mongoose.connection;
