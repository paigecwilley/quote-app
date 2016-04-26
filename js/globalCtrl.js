angular.module('boilerplate')
.controller('globalCtrl', function($scope, $http){


$scope.submitQuote = function(){
	console.log($scope.author)
	$http.post('http://localhost:8080/addquote', $scope.author)
}


})