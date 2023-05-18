var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('pages/index.html', { root: 'public' });
});

router.get('/home', function(req, res, next) {
  res.sendFile('pages/home.html', { root: 'public' });
});

router.get('/login', function(req, res, next) {
  res.sendFile('pages/login.html', { root: 'public' });
});

router.get('/register', function(req, res, next) {
  res.sendFile('pages/register.html', { root: 'public' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Esto es una pagina de prueba' });
});

module.exports = router;
