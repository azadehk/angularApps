var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', ['$scope', function ($scope) {
    
    /* This data cannot be changed */
    this.weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
                   {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
                   {"high":"77","low":"56","text":"Clear","cityName":"San Diego"},
                   {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];

    $scope.title = "Weather App";

    // Define title model.
    this.degree = "cent";
    this.CurrentCity = "";
    this.CurrentCityDesc = "";
    this.CurrentHighTemp;
    this.CurrentLowTemp;


    this.showAlert = function(highTemp, lowTemp, descrip, city)  {
        this.showElements= true;
        this.CurrentCity = city;
        this.CurrentCityDesc = descrip;
        this.CurrentHighTemp = parseInt(highTemp);
        this.CurrentLowTemp = parseInt(lowTemp);
    }

    this.updateToF = function () {
        this.CurrentHighTemp = (this.CurrentHighTemp*9/5)+32;
        this.CurrentLowTemp = (this.CurrentLowTemp*9/5)+32;
    }

    this.updateToC = function () {
        this.CurrentHighTemp = (this.CurrentHighTemp-32)*5/9;
        this.CurrentLowTemp = (this.CurrentLowTemp-32)*5/9;
    }
}]);

