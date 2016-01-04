app.factory("SongsFactory", function($http, $q){
	var SongsFactory = {};

	SongsFactory.getSongs = function(){
		return $http.get('http://localhost:3000/songs')
			.then(function(response){
				return response.data;
			})
	}

	SongsFactory.getSpotifySongs = function(){
		return $http.get('http://localhost:3000/spotify-songs')
			.then(function(response){
				console.log(response.data)
				return response.data;
			})
	}

	return SongsFactory;
})
