angular.module('WellsFargo').controller('amenityController', ['$scope',
function($scope) {
	$scope.amenities = [];

	$scope.addAmenity = function() {
		$scope.amenities.push($scope.newAmenity);

	}
}]);