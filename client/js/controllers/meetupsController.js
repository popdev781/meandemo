var app = angular.module("meetupDemo", []);

app.controller("meetupsController",['$scope', function($scope){
	$scope.meetupsCount= 10;
}]);

