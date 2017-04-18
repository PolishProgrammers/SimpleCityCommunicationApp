const express = require('express');
const mongoose = require('mongoose');
const lineService = require('../../database/services/lineService');
const stationService = require('../../database/services/stationService');
const router = express.Router();
//define connection
mongoose.connect('mongodb://localhost/communicationdb');
//define promise when queried
mongoose.Promise = Promise;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/line/add', (req, res) => {
  var lineNumber = req.body.lineNumber;
  var lat = req.body.lat;
  var lng = req.body.lng;
  var promise = lineService.save(lineNumber, lat, lng);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
  });

});

router.post('/station/add', (req, res) => {
  var nameStation = req.body.nameStation;
  var lat = req.body.lat;
  var lng = req.body.lng;
  var promise = stationService.save(nameStation, lat, lng);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.post('/station/addWithLine', (req, res) => {
  var nameStation = req.body.nameStation;
  var lat = req.body.lat;
  var lng = req.body.lng;
  var line = req.body.line;
  var promise = stationService.save(nameStation, lat, lng, line);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.post('/station/addWithLines', (req, res) => {
  var nameStation = req.body.nameStation;
  var lat = req.body.lat;
  var lng = req.body.lng;
  var line = req.body.lines;
  var promise = stationService.save(nameStation, lat, lng, lines);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.get('/station/find', (req, res) => {
  var promise = stationService.findAll();
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.get('/station/:stationName', (req, res) => {
  var name = req.params.stationName;
  var promise = stationService.getStationByName(name);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.post('/station/:stationName/update', (req, res) => {
  var stationName = req.params.stationName;
  var newName = req.body.name;
  var newLat = req.body.lat;
  var newLng = req.body.lng;
  var promise = stationService.updateByName(stationName, newName, newLat, newLng);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

router.get('/station/:stationName/remove', (req, res) => {
  var stationName = req.params.stationName;
  var promise = stationService.removeByName(stationName);
  promise
    .catch(function(error) {
      res.status(500);
      res.send('error : ' + error);
    })
    .then(function (doc) {
      res.status(200);
      res.json(doc);
    });

});

module.exports = router;
