// Archivos de modelos
const User = require("../models/user");

// Librerias
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Funcion para encriptar contraseñas
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

// URL: POST /api/auth/login
module.exports.login = function (req, res) {
  if (req.session.authenticated) {
    console.log("[controllers/auth.login] Sesion ya iniciada.");
    res.status(400).send("Sesion ya iniciada.");
    return;
  } else {
    console.log("[controllers/auth.login] Sesion no iniciada.");

    // Obtener datos del formulario
    const username = req.body.username;
    const password = req.body.password;

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
        console.log("[controllers/auth.login] Usuario encontrado en la base de datos. " + found);

        var hashedPassword = found.password;
        // Comparar contraseñas
        bcrypt
          .compare(password, hashedPassword)
          .then((match) => {
            if (match) {
              // Guardar id de usuario en la sesion
              console.log(
                "[controllers/auth.login] Contraseña correcta. Guardando id de usuario en la sesion."
              );
              req.session.authenticated = true;
              req.session.userId = found._id;
              req.session.username = found.username;
              req.session.phone = found.phone;

              res.send(found);
            } else {
              res.status(400).send("Contraseña incorrecta.");
            }
          })
          .catch((error) => {
            console.log("[controllers/auth.login] Error comparando contraseñas:");
            console.log(error);
            res.status(500).send("Error comparando contraseñas.");
          });
      })
      .catch((error) => {
        console.log("[controllers/auth.login] Error buscando usuario en la base de datos:");
        console.log(error);
        res.status(500).send("Error buscando usuario en la base de datos.");
      });
  }
};

// URL: POST /api/auth/register
module.exports.register = function (req, res) {
  if (req.session.authenticated) {
    console.log("[controllers/auth.register] Sesion ya iniciada.");
    res.status(400).send("Sesion ya iniciada.");
    return;
  } else {
    console.log("[controllers/auth.register] Sesion no iniciada.");

    // Obtener datos del formulario
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;

    // Validar datos
    if (!username || !password || !phone) {
      res.status(400).send("Faltan datos.");
      return;
    }

    // Buscar usuario en base de datos
    User.findOne({ username: username })
      .then(async (user) => {
        if (user) {
          console.log("[controllers/auth.register] Usuario encontrado:", user);
          res.status(400).send("Usuario ya existe.");
        } else {
          console.log(
            "[controllers/auth.register] Usuario no encontrado. Creando nuevo usuario..."
          );

          // Encriptar contraseña
          const hashedPassword = await hashPassword(password);

          // Crear nuevo usuario
          const newUser = new User({
            username: username,
            password: hashedPassword,
            phone: phone,
          });

          // Guardar nuevo usuario en la base de datos
          newUser
            .save()
            .then(() => {
              console.log("[controllers/auth.register] Nuevo usuario creado:", newUser);
              res.send("Usuario creado exitosamente.");
            })
            .catch((error) => {
              console.log("[controllers/auth.register] Error guardando nuevo usuario:", error);
              res.status(500).send("Error guardando nuevo usuario.");
            });
        }
      })
      .catch((error) => {
        console.log("[controllers/auth.register] Error searching for user:", error);
        res.status(500).send("Error buscando usuario en la base de datos.");
      });
  }
};

// URL: POST /api/auth/logout
module.exports.logout = function (req, res) {
  // Verificar si la sesion esta iniciada
  if (req.session.authenticated) {
    console.log("[controllers/auth.logout] Sesion iniciada. Cerrando sesion...");
    req.session.destroy();
    res.send("Sesion cerrada exitosamente.");
  } else {
    console.log("[controllers/auth.logout] Sesion no iniciada.");
    res.status(400).send("Sesion no iniciada.");
  }
}
