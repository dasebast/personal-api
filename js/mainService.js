var app = angular.module('personalApi');

app.service('mainService', function($http, $q) {

	this.getData = function(str) {
		var dfd = $q.defer();
		$http.get('http://localhost:9006/' + str)
			.then(function(response) {
				dfd.resolve(response);
			})
			return dfd.promise;
	};

	this.postData = function(message) {
		return $http.post('http://localhost:9006/references', {text: message});
	};



});