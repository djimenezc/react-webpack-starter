// source -- https://github.com/sequelize/express-example

"use strict";

var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/user_test', function(req, res) {
  var dump = [
    {
      author: "Pete Hunt",
      text:"This is one comment"
    },
    {
      author: "Jordan Walke",
      text: "This is *another* comment"
    }
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(dump));
});

router.post('/create', function(req, res) {
  models.User.create({
    username: req.param('username')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.find({
    where: {id: req.param('user_id')},
    include: [models.Task]
  }).then(function(user) {
    models.Task.destroy(
      {where: {UserId: user.id}}
    ).then(function(affectedRows) {
      user.destroy().then(function() {
        res.redirect('/');
      });
    });
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.User.find({
    where: { id: req.param('user_id') }
  }).then(function(user) {
    models.Task.create({
      title: req.param('title')
    }).then(function(title) {
      title.setUser(user).then(function() {
        res.redirect('/');
      });
    });
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.User.find({
    where: { id: req.param('user_id') }
  }).then(function(user) {
    models.Task.find({
      where: { id: req.param('task_id') }
    }).then(function(task) {
      task.setUser(null).then(function() {
        task.destroy().then(function() {
          res.redirect('/');
        });
      });
    });
  });
});


module.exports = router;
