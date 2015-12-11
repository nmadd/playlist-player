app.controller("SongFormController", function($scope,$http){
	$scope.addSong = function(){
		$http({
			method: "POST",
			url: '/addsong',
			data: $scope.song
		}).then(function(){
			$scope.song.title = '';
		})
	}
});