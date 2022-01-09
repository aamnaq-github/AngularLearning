angular.module('app.controllers', []).
    controller('temperatureConverterController', function ($scope, weatherDetailsAPIService) {
        $scope.fahrenheit = 0.00;
        $scope.celsius = 0.00;
        $scope.weatherData = [];

        $scope.toFahrenheit = function() {
            $scope.fahrenheit = ($scope.celsius * 1.8) + 32
        };

        $scope.toCelsius = function() {
            $scope.celsius = ($scope.fahrenheit - 32) / 1.8
        };

        weatherDetailsAPIService.getWeather().then(function successCallback(response) {
            $scope.weatherData = response.data;
        });

        $scope.getWeather = function () {
            $scope.result = $scope.weatherData.filter(p => p.name.toLowerCase() == $scope.city.toLowerCase())[0];
            if ($scope.result == null) {
                $scope.temperature = "No data found."
                $scope.wind = null;
                $scope.humidity = null;
            }
            else {
                $scope.temperature = $scope.result.temperature.split(' ')[0] + "° " + $scope.result.temperature.split(' ')[1];
                $scope.wind = "Wind: " + $scope.result.wind;
                $scope.humidity = "Humidity: " + $scope.result.humidity;
            }
        };
    });