app.directive('playlist', function(PlayerFactory, SpotifyPlayerFactory) {
    return {
        restrict: 'E',
        templateUrl: "../templates/playlist.html",
        scope: {
            songs: "="
        },
        link: function(scope, element, attrs) {
            scope.test = PlayerFactory.load;
            scope.loadSpotifySong = SpotifyPlayerFactory.load;
            scope.playSpotifySong = function(song) {
                console.log(song);

                var newSong = soundManager.createSound({
                    // id: 'song1',
                    url: song.previewUrl,
                    whileplaying: function() {
                        // progress = currentSong.audio.position / currentSong.audio.duration;
                        // $rootScope.$digest();
                        // //$(".progress-bar").css('width', ((mySound.position/mySound.duration) * 100) + '%');
                    },
                    onfinish: function() {
                        factory.next(songs)
                    }
                })
                console.log(newSong)
                newSong.play();
            }
        }
    }
});
