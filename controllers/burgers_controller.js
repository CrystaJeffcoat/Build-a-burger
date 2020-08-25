const express = require('express');
const router = express.Router();
const burger = require('../models/burger');
/* GET home page. */

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbs = {
      burgers: data
    };
    console.log(hbs);
    res.render('index', hbs);
  });
});

module.exports = router;
