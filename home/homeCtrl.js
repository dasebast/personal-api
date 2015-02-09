var app = angular.module('personalApi');

app.controller('homeCtrl', function($scope, mainService) {

	$scope.test = "hola mundo";

	mainService.getName("name").then(function(response) {
		$scope.name = response.data;
	});
	


	

});