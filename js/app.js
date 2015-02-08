var app = angular.module('personalApi', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	})
	.when('/me', {
		templateUrl: 'me/me.html',
		controller: 'meCtrl'
	})
	.when('/skills', {
		templateUrl: 'skills/skills.html',
		controller: 'skillsCtrl'
	})
	.otherwise('/');
});