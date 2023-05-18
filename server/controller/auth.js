module.exports.prueba = function (req, res, next) {
  // Show the req.body in the page then go back to "/"
  res.send("Prueba recibido. Peticion: " + JSON.stringify(req.body));
}

module.exports.login = function (req, res, next) {
  // Show the req.body in the page then go back to "/"
  res.send("Login recibido. Peticion: " + JSON.stringify(req.body));
}

module.exports.register = function (req, res, next) {
  // Show the req.body in the page then go back to "/"
  res.send("Register recibido. Peticion: " + JSON.stringify(req.body));
}
