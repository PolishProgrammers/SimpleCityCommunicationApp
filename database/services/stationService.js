const Station = require('../models/station');

/**
 * Created by konra on 12.04.2017.
 */
exports = module.exports = {};
exports.save = function (nameStation, lat, lng) {
  var newStation = new Station({
    nameStation: nameStation,
    lat: lat,
    lng: lng
  });
  return newStation.save();

};

exports.saveWithLines = function (nameStation, lat, lng, stations) {
  var newStation = new Station({
    nameStation: nameStation,
    lat: lat,
    lng: lng,
    stations: stations
  });
  return newStation.save();

};

exports.getStationByName = function (nameStation) {
  return Station.findOne({nameStation: new RegExp('^' + nameStation + '$', "i")});
};

exports.findAll = function () {
  return Station.find();
};

exports.updateByName = function (nameStation, newName, newLat, newLng) {
  var newStation = {
    nameStation: newName,
    lat: newLat,
    lng: newLng
  };
  return Station.findOneAndUpdate({nameStation: new RegExp('^' + nameStation + '$', "i")}, newStation);

};

exports.removeByName = function (nameStation) {
  return Station.findOneAndRemove({nameStation: new RegExp('^' + nameStation + '$', "i")});
};
