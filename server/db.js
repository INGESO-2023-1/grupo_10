const mongoose = require("mongoose");

// Guardar direccion de base de datos
var dbURL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/wasap_db";

// Establecer opciones para conexion: timeout de 1 segundo
const options = {
  serverSelectionTimeoutMS: 3000, // Esperar 3 segundos antes de fallar
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Funcion asincrona para conectar a la base de datos
async function connectDB() {
  try {
    console.log("[DB] Conectando a " + dbURL + " ...");
    await mongoose.connect(dbURL, options);
    console.log("[DB] Conectado.");
  } catch (error) {
    console.log("[DB] Error conectando base de datos:");
    console.log(error);
    throw new Error("Failed to connect to MongoDB");
  }
}

// Exportar modulo
module.exports = connectDB;
