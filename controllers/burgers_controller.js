const express = require('express');

const burger = require('../models/burger.js');

const app = express();

// Routes 

app.get('/', function (req, res) {
    res.redirect('/index');
  });

  app.get('/index', function (req, res) {
    burger.selectAll(function(data) {
      const hbsObject = { burgers: data };
      res.render('index', hbsObject);
    });
  });
  
//   Create Burger 

  app.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('/index');
    });
  });
  
//   Devour Burger 

  app.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('/index');
    });
  });

  module.exports = app;