app.factory("SpotifyPlayerFactory", function($http, $q, $rootScope, SongsFactory) {
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
            url: song.previewUrl,
            whileplaying: function() {
                // progress = currentSong.audio.position / currentSong.audio.duration;
                // $rootScope.$digest();
                //$(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
            },
            onfinish: function() {
                // factory.next(songs)
            }
        });
        // songs = playlist;
        // currentSong.metadata = songObj;
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