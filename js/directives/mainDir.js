angular.module('boilerplate')
.directive('mainDir', function(){

return {
	restrict: "A",
	scope: true,
	link: function(scope, element, attr){
		$(".quote-type").on('click', function(e){
			$(".quote-type").removeClass('active');
			$(e.target).toggleClass('active');

		})
	}
}









})