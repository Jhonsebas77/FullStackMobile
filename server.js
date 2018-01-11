var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
var router = express.Router();
var HotelsCtrl = require('./controllers/CrlHotels');
/*
  Conexion a MongoDB por medio del servicio MongoLab
*/
mongoose.connect('mongodb://sebastian:12345@ds245287.mlab.com:45287/fullstackmobile', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(methodOverride());

var hotels = express.Router();

hotels.route('/hotels')
  .get(HotelsCtrl.findAllHotels)
  .post(HotelsCtrl.addHotels);

hotels.route('/hotels/:id')
  .get(HotelsCtrl.findById)
  .put(HotelsCtrl.updateHotels)
  .delete(HotelsCtrl.deleteHotels);

app.use('/api', hotels);
