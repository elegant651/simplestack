var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var engine = require('ejs-locals');
var stackModule = require('./routes/stack');
var stack = new stackModule();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', __dirname+"/views");

//for dealiing with CORS
app.use(function(req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', '*');      
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');        

    next();
});

app.get('/api/init', stack.init);
app.get('/api/push/:id', stack.push);
app.get('/api/pop', stack.pop);

app.get('/', function(req, res) {
	res.render('index-fob');
});

var server = app.listen(3015, function() {
	console.log('listening on port %d', server.address().port);
});