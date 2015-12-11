app.directive('playerBar', function(PlayerFactory, SongsFactory) {
    return {
        restrict: 'E',
        templateUrl: "../templates/player-bar.html",
        link: function(scope, element, attrs) {
            // scope.songs = theSongs;
            // scope.test = PlayerFactory.load;
            scope.currentSong;
            scope.next = PlayerFactory.next;
            scope.prev = PlayerFactory.prev;
            scope.getCurrentSong = function() {
                scope.currentSong = PlayerFactory.getCurrentSong();
                return PlayerFactory.getCurrentSong();
            }

            scope.isCurrent = function(song) {
                var nowPlaying = scope.getCurrentSong();
                if (song._id === nowPlaying.metadata._id) return true
            }
            scope.getProgress = function() {
                return (100 * PlayerFactory.getProgress()) + '%';
            }

            scope.isPlaying = function() {
                return PlayerFactory.getIsPlaying();
            }

            scope.toggle = function() {
                var currentSong = PlayerFactory.getCurrentSong();
                PlayerFactory.toggle(currentSong);
            };
            SongsFactory.getSongs()
            .then(function(songs){
                scope.songs = songs;
            })
        }
    }
});
