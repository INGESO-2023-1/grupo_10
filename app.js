// CMD: SET DEBUG=wasap:* & npm start
// Powershell: $env:DEBUG='wasap:*'; npm start
// Linux: DEBUG=wasap:* npm start
// Servidor: http://localhost:3000/

// Librerias
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Aplicacion
const app = express();

// Ajustes de la aplicacion
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Archivos de vistas/plantillas (./views) (usado con res.render)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estaticos (./public) (usado con res.sendFile)
app.use(express.static(path.join(__dirname, 'public')));

// Archivos de rutas (./routes) (usado con app.use)
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

// Configuracion de rutas
app.use('/', indexRouter);
app.use('/auth', authRouter);

// Capturar 404 y reenviar al manejador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la pagina de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
