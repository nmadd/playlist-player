app.controller("SongsController", function ($scope, PlayerFactory, theSongs) {

	$scope.songs = theSongs;
	// $scope.test = PlayerFactory.load;
	// $scope.currentSong;
	// $scope.next = PlayerFactory.next;
	// $scope.prev = PlayerFactory.prev;
	// $scope.getCurrentSong = function(){
	// 	$scope.currentSong = PlayerFactory.getCurrentSong();
	// 	//console.log($scope.currentSong)
	// 	// return PlayerFactory.getCurrentSong().metadata.title;
	// 	return PlayerFactory.getCurrentSong();
	// }

	// $scope.isCurrent = function(song){
	// 	var nowPlaying = $scope.getCurrentSong();
	// 	console.log(nowPlaying)
	// 	if(song._id === nowPlaying.metadata._id) return true
	// }
	// $scope.getProgress = function(){
	// 	//return "50%";
	// 	return (100 * PlayerFactory.getProgress()) + '%';
	// 	//return PlayerFactory.getProgress() + "%";
	// }

	// $scope.isPlaying = function(){
	// 	return PlayerFactory.getIsPlaying();
	// }

	// $scope.toggle = function(){
	// 	var currentSong = PlayerFactory.getCurrentSong();
	// 	PlayerFactory.toggle(currentSong);
	// };
	// $scope.songs = PlayerFactory.songs;
	// SongsFactory.getSongs()
	// .then(function(songs){
	// 	$scope.songs = songs.data;
	// })
});