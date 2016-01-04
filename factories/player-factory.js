app.factory("PlayerFactory", function($http, $q, $rootScope, SongsFactory) {
    var factory = {};
    var currentSong = {};
    currentSong.metadata = '';
    currentSong.audio = '';
    var currentSongData;
    var isPlaying = false;
    var progress = 0;
    var songs = [];

    var findSong = function(songData, playlist) {
        var songIndex;
        playlist.forEach(function(song) {
            if (songData.title === song.title) {
                songIndex = playlist.indexOf(song);
            }
        })
        return songIndex;
    }

    factory.load = function(song, playlist) {
        var songUrl;
        var songObj;
        console.log(song)
        if (song.eventPhase) {
            songObj = JSON.parse(event.currentTarget.attributes.data.nodeValue);
            songUrl = event.currentTarget.attributes.songURL.nodeValue;
        } else {
            songUrl = song.url;
            songObj = song;
        }

        var newSong = soundManager.createSound({
            // id: 'song1',
            url: ".." + songUrl,
            whileplaying: function() {
                progress = currentSong.audio.position / currentSong.audio.duration;
                $rootScope.$digest();
                //$(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
            },
            onfinish: function() {
                factory.next(songs)
            }
        });
        songs = playlist;
        currentSong.metadata = songObj;
        factory.play(newSong);
    }

    factory.play = function(song) {
        if (currentSong.audio) currentSong.audio.stop();
        song.play();
        currentSong.audio = song;
        isPlaying = true;
    }

    factory.toggle = function(currentSong) {
        console.log(currentSong)
        currentSong.audio.togglePause();
        if (isPlaying) isPlaying = false;
        else isPlaying = true;
    }

    factory.getCurrentSong = function() {
        return currentSong;
    }

    factory.getIsPlaying = function() {
        return isPlaying;
    }

    factory.getProgress = function() {
        //progres = currentSong.position/currentSong.duration * 100;
        return progress;
    }

    factory.next = function(songs) {
        var currentSongIndex = findSong(currentSong.metadata, songs);
        var newSong = songs[currentSongIndex + 1];
        factory.load(newSong, songs);
    }

    factory.prev = function(songs) {
        var currentSongIndex = findSong(currentSong.metadata, songs);
        var newSong = songs[currentSongIndex - 1];
        factory.load(newSong, songs);
    }

    return factory;

})































//LEGACY JQUERY CODE

// var mySound;
// var myPlaylist = [];

// soundManager.setup({
//   url: './sounds/',
//   onready: function() {
//     mySound = soundManager.createSound({
//       id: 'aSound',
//       url: './sounds/Time.m4a'
//     });
//     //mySound.play();
//   }, 
//   ontimeout: function() {
//     // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
//   }
// });

// // function loadSound(songName){
// //   mySound = soundManager.createSound({
// //       id: songName + 1,
// //       url: './sounds/' + songName + '.m4a',
// //       whileplaying: function() {
// //       $(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
// //   }
// //     });
// // }
// var idCount = 0;
// function createSound(val){
//   idCount++;
//   mySound = soundManager.createSound({
//       id: "song" + idCount,
//       url: val,
//       whileplaying: function() {
//       $(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
//   }
//     });

// }



// $(document).ready(function(){
//   $('p').each(function(index){
//     var $this = $(this);
//     console.log($this.attr("val"));
//     var newSound = createSound($this.attr('val'))
//     console.log(newSound)
//     myPlaylist.push(newSound);

//   });

//   $(".play-pause").click(function(){
//     mySound.togglePause();
//     // console.log("position " + mySound.position/1000);
//     // console.log("duration " + mySound.duration/1000);
//     // console.log("progress bar " + mySound.position/mySound.duration * 100)
//   });
//   // $(".load-btn").click(function(){
//   //   mySound.stop();
//   //   console.log($(this).val())
//   //   loadSound($(this).val());
//   //   mySound.togglePause();
//   // });
//   $(".song").click(function(){
//     mySound.stop();
//     console.log($(this).val())
//     createSound($(this).attr('val'));
//     mySound.togglePause();
//   });
//   $(".progress").click(function(e){
//     //mySound.stop();
//     //console.log(e.pageX);
//     var clickLocation = e.pageX/$(".progress").width()*100;
//     var progBarLocation = mySound.position/mySound.duration * 100;
//     console.log(clickLocation);
//     console.log(mySound.position);
//     soundManager.setPosition(mySound.id, clickLocation *mySound.duration /100);
//     });
// });
