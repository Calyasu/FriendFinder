var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set the function Express to the variable app
var app = express();

// Choose port for server
var PORT = process.env.PORT || 3000;

// Body-Parser is used to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static(path.join(__dirname, 'app/public')));

//Routers
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// POST /login gets urlencoded bodies
app.listen(PORT, function () {
    console.log('App Listening on PORT: ' + PORT)
})