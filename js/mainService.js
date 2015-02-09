var app = angular.module('personalApi');

app.service('mainService', function($http, $q) {

	this.getName = function(str) {
		var dfd = $q.defer();
		$http.get('http://localhost:9006/' + str)
			.then(function(response) {
				dfd.resolve(response);
			})
			return dfd.promise;
	};



});