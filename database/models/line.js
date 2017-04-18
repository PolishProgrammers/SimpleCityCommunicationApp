/**
 * Created by konra on 12.04.2017.
 */
const mongoose = require('mongoose');
const Station = require('./station.js');
const Schema = mongoose.Schema;

//create schema
const lineSchema = new Schema({
  lineNumber: Number,
  stations : [Station]
});

// the schema is useless so far
// we need to create a model using it
const lineModel = mongoose.model('Line', lineSchema);

module.exports = lineModel;
