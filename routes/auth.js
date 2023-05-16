var express = require('express');
var router = express.Router();

// Manejar peticiones POST

router.post('/login', function(req, res, next) {
  // Show the req.body in the webpage as string
  res.send("POST Login recibido. Peticion: " + JSON.stringify(req.body));

});

router.post('/register', function(req, res, next) {
  // Show the req.body in the webpage as string
  res.send("POST Register recibido. Peticion: " + JSON.stringify(req.body));
});

module.exports = router;
