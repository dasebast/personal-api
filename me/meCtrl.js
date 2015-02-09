var app = angular.module('personalApi');

app.controller('meCtrl', function($scope, mainService) {

	$scope.test = "me test";

	mainService.getData("hobbies").then(function(response) {
		$scope.hobbies = response.data;
	});

	mainService.getData("occupations").then(function(response) {
		// console.log(response);
		$scope.occupations = response.data;
	});

	mainService.getData("mentions").then(function(response) {
		
		$scope.mentions = response.data;
	});

	mainService.getData("references").then(function(response) {
		console.log(response);
		$scope.references = response.data;
	});

	$scope.referenceAdd = function() {
		mainService.postData($scope.referenceText).then(function(response) {
			$scope.references = response.data;
			$scope.referenceText = '';
		})
	};

});