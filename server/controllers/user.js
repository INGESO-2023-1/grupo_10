// Archivos de modelos
const User = require("../models/user");

// URL: GET /api/user
module.exports.getActualUser = function (req, res) {
  // Verificar que haya un usuario en sesion
  if (!req.session.authenticated) {
    res.status(401).send("No hay un usuario en sesion.");
    return;
  } else {
    // Buscar usuario en base de datos
    User.findById(req.session.userId)
      .then((user) => {
        if (!user) {
          res.status(404).send("Usuario no encontrado.");
          return;
        }
        // Enviar username y phone como JSON
        res.json({
          username: user.username,
          phone: user.phone,
        });
      })
      .catch((err) => {
        res.status(500).send("Error al buscar usuario.");
      });
  }
}


// URL: GET /api/user/:username
module.exports.getUser = function (req, res) {
  // Obtener datos del URL (usando req.params)
  const username = req.params.username;

  // Verificar que haya un username
  if (!username) {
    res.status(400).send("Falta el username.");
    return;
  }

  // Buscar usuario en base de datos
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        res.status(404).send("Usuario no encontrado.");
        return;
      }
      // Enviar username y phone como JSON
      res.json({
        username: user.username,
        phone: user.phone,
      });
    })
    .catch((err) => {
      res.status(500).send("Error al buscar usuario.");
    });
};

// URL: GET /api/user/phone/:phone
module.exports.getUserByPhone = function (req, res) {
  // Obtener datos del URL (usando req.params)
  const phone = req.params.phone;

  // Verificar que haya un phone
  if (!phone) {
    res.status(400).send("Falta el phone.");
    return;
  }

  // Buscar usuario en base de datos
  User.findOne({ phone: phone })
    .then((user) => {
      if (!user) {
        res.status(404).send("Usuario no encontrado.");
        return;
      }
      // Enviar username y phone como JSON
      res.json({
        username: user.username,
        phone: user.phone,
      });
    })
    .catch((err) => {
      res.status(500).send("Error al buscar usuario.");
    });
};
