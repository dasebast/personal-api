var app = angular.module('personalApi');

app.controller('skillsCtrl', function($scope, mainService) {

	mainService.getData("skills").then(function(response) {
		// console.log(response);
		$scope.skills = response.data;
	});

});