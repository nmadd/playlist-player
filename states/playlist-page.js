app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/playlists');

	$stateProvider
	.state('playlists', {
		url: "/playlists",
		templateUrl: '../templates/playlist-page.html',
		controller: 'SongsController',
		resolve: {
			theSongs: function (SongsFactory) {
				return SongsFactory.getSongs()
			}
		}
	})
	
})