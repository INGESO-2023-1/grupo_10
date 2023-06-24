const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Wasap API" });
});

// URL: GET /api/test
router.get("/sessionTest", function (req, res) {
  // Verificar si la sesion esta iniciada
  if (req.session.authenticated) {
    console.log("[api/sessionTest] Sesion iniciada.");
    res.send(req.session);
  } else {
    console.log("[api/sessionTest] Sesion no iniciada.");
    res.status(401).send("Sesion no iniciada");
  }
});

module.exports = router;
