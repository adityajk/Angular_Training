angular.module('WellsFargo').factory('dataHotelService', function() {

	var hotels = [{"name": "Red Fox", "Location": "Hyderabad", "Price": 20000, "img": "redfox.jpg", 
	"description": "Angular comes with a set of these directives built-in, like ngBind , ngModel , and ngClass . Much like you create controllers and services, you can create your ..", "area": "200000"},
					{"name": "Taj", "Location": "Mumbai", "Price": 7000, "img": "taj.jpg", "description": "Angular comes with a set of these directives dddd built-in, like ngBind , ngModel , and ngClass . Much like ddfs sdfs sdfyou create controllers and services, you can create your ..", "area": "400000"},
					{"name": "Hayaat", "Location": "Delhi", "Price": 12000, "img": "hyaat.jpg", "description": "Hotel Hyaat", "area": "1000000"}];

	var dataService = {
		getHotels: function() {
			return hotels;
		},
		addHotel: function(newHotel) {
			hotels.push(newHotel);
		}
	}
	return dataService;

});   