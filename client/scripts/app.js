//import angular module
var	myAppModule = angular.module('myApp', ['ngRoute','angularMoment']);
myAppModule.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/topics/:id',{
		templateUrl: 'partials/topics.html'
	})
	//access :id from $routeParams.id from usersController
	.when('/users/:id',{
		templateUrl: 'partials/users.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

myAppModule.filter("myFilter", function(){
	  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

    var output;

    // Do filter work here

    return output;

  }
});








