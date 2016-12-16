var app = angular.module("meetupDemo", []);

app.controller("meetupsController",['$scope', function($scope){

	$scope.meetups = [
		{name:"test data"},
		{name:"data 2"}
	];

	$scope.createMeetup = function(){
		console.log("hehe");
		$scope.meetups.push({ name: $scope.meetupName });
		$scope.meetupName ='';
	};
}]);

