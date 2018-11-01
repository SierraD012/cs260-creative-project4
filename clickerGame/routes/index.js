//Use this file to create new routes for a REST API if we end up doing that


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

module.exports = router;
