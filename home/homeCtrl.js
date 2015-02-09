var app = angular.module('personalApi');

app.controller('homeCtrl', function($scope, mainService) {

	$scope.test = "hola mundo";

	mainService.getData("name").then(function(response) {
		$scope.name = response.data;
	});
	
	mainService.getData("location").then(function(response) {
		$scope.location = response.data;
	});


	

});