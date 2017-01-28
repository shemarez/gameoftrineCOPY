var app = require('express')();
var path = require('path');
var session = require('express-session');
// var mysql = require('mysql');
var moment = require('moment');
var bodyParser = require('body-parser');
var server = require('http').Server(app);
// var phaser = require('phaser.js');
// var io = require('socket.io')(server);
// var routes = require('./routes.js');
app.set('', __dirname + '/');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8888);

//serve static files in the public folder
app.use('/', require('express').static(path.join(__dirname + '/')));
// app.use('/js', express.static(__dirname + '/public'));


//middleware for passing data bewteen routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use session middleware
app.use(session({
	secret: 'keyboard cat', 
	cookie: {maxAge: 86400000},	//24hrs
	resave: false,
	saveUninitialized: false
}));

server.listen(app.get('port'), function() {
	console.log('listening on port:', app.get('port'));
});


// app.get('/', (req, res) => {
//     res.render('index.ejs');
// });
