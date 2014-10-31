angular.module('WellsFargo').factory('votingService', function() {

	function upVote(rateHotel) {
		rateHotel.Rating = rateHotel.Rating || 0;
		rateHotel.Rating++;
	}

	function downVote(rateHotel) {
		rateHotel.Rating = rateHotel.Rating || 0;
		rateHotel.Rating--;
	}

	return {
		voteUp: upVote,
		voteDown: downVote
	}


});   