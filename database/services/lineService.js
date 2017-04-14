const line = require('../models/line');

/**
 * Created by konra on 12.04.2017.
 */
exports = module.exports = {};
exports.save = function (lineNumber, lat, lng) {
  var newLine = line({
      lineNumber: lineNumber,
      lat: lat,
      lng: lng
      });
  return newLine.save();

};

