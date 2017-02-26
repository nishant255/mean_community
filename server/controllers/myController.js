console.log("Loading Serverside myController.js");

var mongoose = require('mongoose'),
    myModel = mongoose.model('MyModel');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAC4v18lWW2xicQUROmZ4nHWIdhe1-s384'
});

function MyController() {

  var _this = this;

  // // Geocode an address.
  // googleMapsClient.geocode({
  //   address: '40767 High Street, Fremont, CA'
  // }, function(err, res) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("results ");
  //   console.log(res.json.results[0]);
  // });

  // -------------------------------------------------------------------------
  //                           My Controller Method
  // -------------------------------------------------------------------------
  _this.myMethod = function (req, res) {
    // Add Some Logic
  };
}

module.exports = new MyController();
