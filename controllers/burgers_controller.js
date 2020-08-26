const express = require('express');
const router = express.Router();
const burger = require('../models/burger');
/* GET home page. */

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbs = {
      burgers: data
    };
    res.render('index', hbs);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function(result) {
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne("consumed = true", condition, function() {
      res.status(200).end();
    }
  );
})

module.exports = router;
