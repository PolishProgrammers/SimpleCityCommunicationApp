const express = require('express');
const lineService = require('../../database/services/lineService');
const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/lineAdd', (req, res) => {
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
module.exports = router;
