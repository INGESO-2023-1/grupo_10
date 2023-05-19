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
console.log('[DB] Conectando a ' + dbURL + '...');
mongoose.connect(dbURL, options)
    .then(() => console.log('[DB] Base de datos conectada.'))
    .catch(err => console.log(`[DB] Error al conectar a la base de datos: ${err}`));

// Exportar modulo
module.exports = mongoose.connection;
