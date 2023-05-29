const User = require('../models/user');

module.exports.prueba = function (req, res) {
  if (req.method == "GET") {
    res.send("Prueba recibida. Peticion GET: " + JSON.stringify(req.query));
  } else if (req.method == "POST") {
    res.send("Prueba recibida. Peticion POST: " + JSON.stringify(req.body));
  }
}

module.exports.login = function (req, res) {
  if (req.method == "GET") {
    res.send("Login recibido. Peticion GET: " + JSON.stringify(req.query));
  } else if (req.method == "POST") {
    res.send("Login recibido. Peticion POST: " + JSON.stringify(req.body));
  }
}

module.exports.register = function (req, res) {
  if (req.method == "GET") {
    res.send("Register recibido. Peticion GET: " + JSON.stringify(req.query));

    // Crear usuario
    var user = new User({
      username: req.query.username,
      telephone: req.query.telephone,
      password: req.query.password
    });

    // Guardar usuario en base de datos
    user.save()
      .then(() => {
        console.log('[DB] Usuario guardado.');
      })
      .catch((err) => {
        console.log('[DB] Error guardando usuario:');
        console.log(err);
      });

  } else if (req.method == "POST") {
    res.send("Register recibido. Peticion POST: " + JSON.stringify(req.body));
  }
}
