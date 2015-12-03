var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testsongs');
//db.on('error', console.error.bind(console, 'mongodb connection error: '));

var songSchema = new mongoose.Schema({
  url: String,
  title: String,
  artist: [String],
  albumartist: [String],
  album: String,
  year: Date,
  track: Object,
  genre: [String],
  disk: Object,
  picture:
   [Object],
  duration: Number 
});

var Song = mongoose.model('Song', songSchema);

module.exports = {
  Song: Song
};