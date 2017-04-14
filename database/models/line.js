/**
 * Created by konra on 12.04.2017.
 */
const mongoose = require('mongoose');
//define connection
mongoose.connect('mongodb://localhost/communicationdb');
//define promise when queried
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

//create schema
const lineSchema = new Schema({
  lineNumber: Number,
  lat: Number,
  lng: Number

});

// the schema is useless so far
// we need to create a model using it
const lineModel = mongoose.model('Line', lineSchema);

module.exports = lineModel;
