var express = require('express');
var router = express.Router();

// Manejar peticiones POST

router.post('/login', function(req, res, next) {
  // Show the req.body in the console then go back to "/"
  console.log("POST Login recibido. Peticion: " + JSON.stringify(req.body));
  res.redirect('/');

});

router.post('/register', function(req, res, next) {
  // Show the req.body in the console then go back to "/"
  console.log("POST Register recibido. Peticion: " + JSON.stringify(req.body));
  res.redirect('/');
});

module.exports = router;
