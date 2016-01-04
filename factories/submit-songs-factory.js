app.factory('SubmitSongsFactory', function($http) {
    var SubmitSongsFactory = {};

    SubmitSongsFactory.addSpotifySong = function(event) {
        console.log('Hi from the submit-songs factory')
        console.log(event.currentTarget.parentElement.attributes.songData.nodeValue)
        var songObject = event.currentTarget.parentElement.attributes.songData.nodeValue;

        var newSong = soundManager.createSound({
            // id: 'song1',
            url: event.currentTarget.parentElement.attributes.songData.nodeValue.preview_url,
            whileplaying: function() {
                // progress = currentSong.audio.position / currentSong.audio.duration;
                // $rootScope.$digest();
                // //$(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
            },
            onfinish: function() {
                factory.next(songs)
            }
        });

        // var songObject = {metadata: songMetadata, audio: newSong}

        $http({
            method: "POST",
            url: 'http://localhost:3000/add-spotify-song',
            data: songObject
        })

    }

    return SubmitSongsFactory;
})
