angular.module('app.services', []).
    factory('weatherDetailsAPIService', function ($http) {

        var weatherDetailsAPI = {};

        weatherDetailsAPI.getWeather = function () {
            /*return $http({
                method: 'GET',
                url: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?unitGroup=metric&contentType=json'*/

            return $http.get('app/weatherData.json');
        };

        return weatherDetailsAPI;
    });