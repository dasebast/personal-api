var app = angular.module('personalApi');

app.controller('homeCtrl', function($scope, mainService) {

	$scope.test = "hola mundo";

	$scope.showName = function() {
		mainService.getName()
			.then(function(data) {
				$scope.myName = data;
			})
	};

	// $scope.showName = mainService.getName();

	

});