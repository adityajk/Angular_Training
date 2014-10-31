var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $q) {
    $scope.name = 'World';

    function getCountry() {
        var deferred = $q.defer();

        setTimeout(function() {
            deferred.resolve('INDIA');
        }, 500);

        return deferred.promise;
    }

    function getCapital(country) {

        var deferred = $q.defer();
        setTimeout(function() {
            if (country == 'INDIA') {
                deferred.resolve('NEW DELHI');
            } else {
                deferred.reject('could not find country');
            }
        }, 500);

        return deferred.promise;
    }
    
    
    function getPopulation(city) {
        var deferred = $q.defer();
        
        setTimeout(function() {
            if (city == 'NEW DELHI') {
                deferred.resolve(8000000);
            } else {
                deferred.reject('could not find city');
            }
        }, 500);
        
        return deferred.promise;

    }

    function getArea(city) {
        var deferred = $q.defer();
        
        setTimeout(function() {
            if (city == 'NEW DELHI') {
                deferred.resolve(450000);
            } else {
                deferred.reject('could not find city');
            }
        }, 3500);
        
        return deferred.promise;

    }




    getCountry().then(function(country) {
        console.log(country);

        return getCapital(country);
    }).then(function(capital) {
        console.log(capital);
        
        var popPromise = getPopulation(capital);
        var areaPromise = getArea(capital);
        
        return $q.all({
            x : popPromise,
            y : areaPromise
        });
        
    }).then(function(result){
            
            console.log('pop : ' + result.x);
            console.log('area : ' + result.y);
        
    }, function(error){
        alert('ERROR : ' + error);
    })





});