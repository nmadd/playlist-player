app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/playlists');

	$stateProvider
	.state('submit-song', {
		url: "/submit-song",
		templateUrl: '../templates/submit-song.html',
		controller: "SongFormController"
	})	
})