console.log("Loading server.js");

var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = 8000, // Adjust Required Port Number
    project  = "Mean Community", // Change Project Name
    app      = express();

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAC4v18lWW2xicQUROmZ4nHWIdhe1-s384'
});

app.use(express.static('client'));
app.use(express.static('bower_components'));
app.use(bp.json());

require(path.join(root, './server/config/mongoose.js'));
require(path.join(root, './server/config/routes.js'))(app);

app.listen(port, function(){
  console.log(`listening for ${ project } on port ${ port }`);
});
