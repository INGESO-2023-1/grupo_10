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
  } else if (req.method == "POST") {
    res.send("Register recibido. Peticion POST: " + JSON.stringify(req.body));
  }
}
