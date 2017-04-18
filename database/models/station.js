/**
 * Created by konra on 12.04.2017.
 */
const mongoose = require('mongoose');
const Line = require('./line.js');
const Schema = mongoose.Schema;

//create schema
const stationSchema = new Schema({
  nameStation: String,
  lat: Number,
  lng: Number,
  linesUsed: [Line]

});

// the schema is useless so far
// we need to create a model using it
const StationModel = mongoose.model('Station', stationSchema);

module.exports = StationModel;
