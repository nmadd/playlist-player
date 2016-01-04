app.controller("SongFormController", function($scope,$http,$location, SubmitSongsFactory){
	$scope.addSpotifySong = SubmitSongsFactory.addSpotifySong;
	$scope.addSong = function(){
		$http({
			method: "POST",
			url: '/addsong',
			data: $scope.song
		}).then(function(){
			$scope.song.title = '';
		})
	}
	$scope.searchSong = function(){
		var paramsURI = decodeURIComponent("artist:" + $scope.artist + ' track:' + $scope.title)
		$http({
			method: "GET",
			url: 'https://api.spotify.com/v1/search',
			params: {q: paramsURI, type: 'track'}
		}).then(function(response){
			$scope.searchResults = response.data.tracks.items
			console.log($scope.searchResults)
		})
	}
});