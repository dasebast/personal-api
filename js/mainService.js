var app = angular.module('personalApi');

app.service('mainService', function($http) {

	this.getName = function() {
		return $http.get('http://localhost:9006/')
			.then(function(response) {
				console.log(name);
				return response.name;
			})
	};

	this.getName();

});