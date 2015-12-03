var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/testsongs');
var Song = require('./songs').Song;
//db.on('error', console.error.bind(console, 'mongodb connection error: '));
//console.log(Song);
var fs = require('fs');
var mm = require('musicmetadata');


fs.readdir(__dirname.slice(0,46) + '/sounds', function (err, list) {
    // Return the error if something went wrong
      //return action(err);

    // For every file in the list
    list.forEach(function (file) {
      // Full path of that file
      var path = __dirname.slice(0,46) + "/sounds/" + file;
	    mm(fs.createReadStream(path), function (err, metadata) {
	  		//if (err) throw err;
	  		Song.findOne({title: metadata.title}).exec()
        .then(function(song){
          console.log(song);
           if(song === null){
              //console.log(metadata.title)
            var song = new Song({
              title: metadata.title,
              artist: metadata.artist,
              albumartist: metadata.albumartist,
              album: metadata.album,
              year: metadata.year,
              track: metadata.track,
              genre: metadata.genre,
              disk: metadata.disk,
              picture: metadata.picture,
              duration: metadata.duration 
            });
            song.save();
          // 
        }
        

		});
    });
  });
  })