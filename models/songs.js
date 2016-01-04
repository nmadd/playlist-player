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

var spotifySongSchema = new mongoose.Schema({
  previewUrl: String,
  externalUrls: [String],
  title: {type: String, required: true},
  artist: String,
  album: String,
  duration_ms: Number,
  spotifyID: String,
  audio: Object,
  genre: [String],
  tags: [String],
  image:
   String
});

spotifySongSchema.methods.findByTitle = function(title){
  this.find({title: title}).exec()
  .then(function(songs){
    console.log("Songs found by the findByTitle Mongoose static method",songs)
    return songs;
  })
}

spotifySongSchema.virtual('all.tags').get(function(){
    var tagsString = '';
    this.tags.forEach(function(tag){
      tagsString += tag;
    })
    return tagsString;
})

var Song = mongoose.model('Song', songSchema);
var SpotifySong = mongoose.model('SpotifySong', spotifySongSchema)

module.exports = {
  Song: Song,
  SpotifySong: SpotifySong
};