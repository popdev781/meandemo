
  
app.controller("meetupsController",['$scope', '$resource', function($scope, $resource){

	$scope.meetups = [
		{name:"test data"},
		{name:"data 2"}
	];

	$scope.createMeetup = function(){
		$scope.meetups.push({ name: $scope.meetupName });
		$scope.meetupName ='';
	};
}]);

