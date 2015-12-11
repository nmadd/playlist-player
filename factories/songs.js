app.factory("SongsFactory", function($http, $q){
	return {
		getSongs: function(){
			return $http.get('http://localhost:3000/songs')
			.then(function(response){
				return response.data;
			})
			// .then(function(songs){
			// 	return songs;
			// })
		},
		getSpotifySongs: function(){
			return $http.get("https://api.spotify.com/v1/albums/7oZG5VZ4SukMmnylJ16O24")
			.then(function(response){
				console.log(response.data.tracks.items)
				return response.data.tracks.items;
			})
		}
	}
})
