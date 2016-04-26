angular.module('boilerplate')
.controller('mainCtrl', function($scope, $http, quoteService){

$scope.test = "Here is a test";

$scope.getRoot= function(){
	$http.get('http://localhost:8080/')
		.then(function(response){
			console.log(response);
		})
}

$scope.getQuoteClick= function(){
	console.log(quoteService.quotes);
};
});