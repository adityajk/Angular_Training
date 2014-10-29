angular.module('WellsFargo', []);
angular.module('WellsFargo').controller('greetingController',
function greetingController($scope, $timeout) {
	$scope.companyName = "Wells Fargo India";
	//$scope.message = "Welcome"

	$timeout(function() {
		$scope.message = "Welcome"
	}, 2000);
});

angular.module('WellsFargo').controller('hotelsController',
function hotelsController($scope) {

	$scope.showHotels = true;
	var hotels = [{"name": "Red Fox", "Location": "Hyderabad", "Price": 20000},
					{"name": "Taj", "Location": "Mumbai", "Price": 7000},
					{"name": "Hayaat", "Location": "Delhi", "Price": 12000}];

	$scope.addHotel = function() {
		var newHotel = {"name": $scope.name, "Location": $scope.location, "Price": $scope.price};
		hotels.push(newHotel);	
	}					
	$scope.hotels = hotels;
});