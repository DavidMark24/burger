const express = require('express');

const burger = require('../models/burger.js');

const router = express.Router()

// Routes 

router.get('/', function (req, res) {
    res.redirect('/index');
  });

  router.get('/index', function (req, res) {
    burger.selectAll(function(data) {
      const hbsObject = { burgers: data };
      res.render('index', hbsObject);
    });
  });
  
//   Create Burger 

router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('/index');
    });
  });
  
//   Devour Burger 

router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('/index');
    });
  });

  module.exports = router;