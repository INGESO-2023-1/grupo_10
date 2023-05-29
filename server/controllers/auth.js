// Archivos de modelos
const User = require("../models/user");

// Librerias
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.prueba = function (req, res) {
  if (req.method == "GET") {
    res.send("Prueba recibida. Peticion GET: " + JSON.stringify(req.query));
  } else if (req.method == "POST") {
    res.send("Prueba recibida. Peticion POST: " + JSON.stringify(req.body));
  }
}

module.exports.login = function (req, res) {
  if (req.method == "GET") {
    // Obtener datos del formulario
    const username = req.query.username;
    const password = req.query.password;

    // Validar datos
    if (!username || !password) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Buscar usuario en base de datos
    User.findOne({ username: username })
      .then((found) => {
        // Validar usuario
        if (!found) {
          res.status(400).send("Usuario no encontrado.");
          return;
        }
        console.log("[DB] Usuario encontrado en la base de datos. " + found);

        var hashedPassword = found.password;
        // Comparar contraseñas
        bcrypt
          .compare(password, hashedPassword)
          .then((match) => {
            if (match) {
              res.send("Usuario autenticado.");
            } else {
              res.status(400).send("Contraseña incorrecta.");
            }
          })
          .catch((error) => {
            console.log("[DB] Error comparando contraseñas:");
            console.log(error);
            res.status(500).send("Error comparando contraseñas.");
          });
      })
      .catch((error) => {
        console.log("[DB] Error buscando usuario en la base de datos:");
        console.log(error);
        res.status(500).send("Error buscando usuario en la base de datos.");
      });
  } else if (req.method == "POST") {
    res.send("Login recibido. Peticion POST: " + JSON.stringify(req.body));
  }
}

module.exports.register = function (req, res) {
  if (req.method == "GET") {
    // Obtener datos del formulario
    const username = req.query.username;
    const password = req.query.password;

    // Validar datos
    if (!username || !password) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Encriptar contraseña
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          res.status(500).send("Error encriptando contraseña.");
          return;
        } else {
          // Guardar contraseña encriptada en variable
          const passwordHash = hash;
          // Crear usuario
          const user = new User({
            username: username,
            password: passwordHash,
          });

          // Guardar usuario en la base de datos
          user
            .save()
            .then((saved) => {
              console.log("[DB] Usuario guardado en la base de datos.");
              res.send("Usuario guardado en la base de datos.\n" + saved);
            })
            .catch((error) => {
              console.log("[DB] Error guardando usuario en la base de datos:");
              console.log(error);
              res.status(500).send("Error guardando usuario en la base de datos.");
            });
        }
      });
    });
  } else if (req.method == "POST") {
    res.send("Register recibido. Peticion POST: " + JSON.stringify(req.body));
  }
}
