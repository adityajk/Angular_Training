angular.module('WellsFargo', ['ngRoute']);

angular.module('WellsFargo').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addHotel', {
		templateUrl: 'partials/addHotel.html',
		controller: 'addHotelController'
	}).
	when('/listing', {
		templateUrl: 'partials/hotelList.html',
		controller: 'hotelsController'
	})

}]);

angular.module('WellsFargo').filter('toFeet', function() {
	return function(input) {
		return input * 0.092903;
	}
});

angular.module('WellsFargo').controller('greetingController', ['$scope', '$timeout',
function($scope, $timeout) {
	$scope.companyName = "Wells Fargo India";
	//$scope.message = "Welcome"

	$timeout(function() {
		$scope.message = "Welcome"
	}, 2000);
}]);

angular.module('WellsFargo').controller('hotelsController', ['$scope', 'votingService', 'dataHotelService',
function($scope, votingService, dataHotelService) {
	
	$scope.showHotels = true;	
	
	$scope.upRating = votingService.voteUp;

	$scope.downRating = votingService.voteDown;

	/*$scope.upRating = function(rateHotel) {
		rateHotel.Rating = rateHotel.Rating || 0;
		rateHotel.Rating++;
	}

	$scope.downRating = function(rateHotel) {
		//if($rateHotel.Rating !== 0) {
			rateHotel.Rating = rateHotel.Rating || 0;	
			rateHotel.Rating--;
		//}
		
	}	*/	
	
	$scope.hotels = dataHotelService.getHotels();
}]);