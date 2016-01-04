var express = require('express');
var app = express();
var fs = require('fs');
var mm = require('musicmetadata');
var bluebird = require('bluebird');
var swig = require('swig');
var mongoose = require('mongoose');
var Song = require('./models/songs.js').Song;
var SpotifySong = require('./models/songs.js').SpotifySong;
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/views"));
// app.use(express.static(__dirname + '/node_modules'));
// app.use('/views', express.static(__dirname + '/views'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/public/stylesheets', express.static(__dirname + '/public/stylesheets/'));

app.get('/', function(req, res) {
    res.sendFile("/index.html")
})

app.get('/songs', function(req, res, next) {
    SpotifySong.find({}).exec()
        .then(function(songs) {
            res.json(songs);
        })
        .then(null, next)
});

app.get('/spotify-songs', function(req, res, next) {
    SpotifySong.find({}).exec()
        .then(function(songs) {
            res.json(songs);
        })
        .then(null, next)
});

app.post('/addsong', function(req, res, next) {
    console.log(req.body);
    Song.create({
            title: req.body.title
        })
        // .then(function(songs){
        // 	res.json(songs);
        // })
        // .then(null, next)
});

app.post('/add-spotify-song', function(req, res, next) {
	console.log("Hi from the add-spotify-song api endpoint")
    console.log(req.body);
    SpotifySong.create({
        previewUrl: req.body.preview_url,
        // externalUrls: [String],
        title: req.body.name,
        artist: req.body.artists[0].name
        // album: String,
        // duration_ms: Number,
        // spotifyID: String,
        // audio: req.body.audio
        // genre: [String],
        // tags: [String],
        // image: String
    })

});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});
