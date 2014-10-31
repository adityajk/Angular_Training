angular.module('WellsFargo').controller('addHotelController', ['$scope', 'dataHotelService', '$location',
function($scope, dataHotelService, $location) {
	$scope.addHotel = function(path) {
		//alert("Hello");
		//var newHotel = {"name": $scope.name, "Location": $scope.location, "Price": $scope.price};
		
			dataHotelService.addHotel($scope.newHotel);	
			//$location.url('/listing');
		
		
		//hotels.push(newHotel);	
		//$scope.hotels = hotels;
		$location.path(path);
	}
}]);