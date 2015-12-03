var express = require('express');
var app = express();
var fs = require('fs');
var mm = require('musicmetadata');
var bluebird = require('bluebird');
var swig = require('swig');
var mongoose = require('mongoose');
var Song = require('./models/songs.js').Song;


//app.set('views', __dirname + '/views');
//app.set('view engine','html');

app.use(express.static(__dirname));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/public/stylesheets', express.static(__dirname + '/public/stylesheets/'));

app.set('views', (__dirname +  '/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.get('/', function(req, res){
	Song.find({}).exec()
	.then(function(songs){
		var count = 1;
		songs.forEach(function(song){
			song.order = count;
			count++;
			console.log(song.order);
		})
		res.render('index',{playlist: songs})
	})
	
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});