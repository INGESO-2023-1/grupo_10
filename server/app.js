// CMD: SET DEBUG=wasap_server:* & npm start
// Powershell: $env:DEBUG='wasap_server:*'; npm start
// Linux: DEBUG=wasap_server:* npm start
// Servidor: http://localhost:3000/

// Librerias
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Aplicacion
const app = express();

// Variables de entorno (./.env) (usado con process.env)
require("dotenv").config();

// Ajustes de la aplicacion
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Archivos de vistas/plantillas (./views) (usado con res.render)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estaticos (./public) (usado con res.sendFile)
app.use(express.static(path.join(__dirname, "public")));

// Archivos de rutas (./routes) (usado con app.use)
const indexRoute = require("./routes/index");
const authRoute = require("./routes/auth");

// Configuracion de rutas
app.use("/api", indexRoute);
app.use("/api/auth", authRoute);

// Capturar 404 y reenviar al manejador de errores
app.use(function (req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Renderizar la pagina de error
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
