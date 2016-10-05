(function () {

    "use-strict";

    angular.module('app.content.geodist', [])
        .directive('geographicDistance', geoDistDirective);

    geoDistDirective.$inject = [];

    function geoDistDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/base/content/geodist/geodist.directive.html',
            controllerAs: 'vm',
            controller: geoDistController,
            scope: {},
            transclude: true,
            bind: {},
        };
    }

    geoDistController.$inject = ['$scope'];
    
    function geoDistController($scope) {
        var vm = this;

        vm.cityItems = [];
        vm.current = {};
        vm.addCityByInput = addCityByInput;
        vm.removeCity = removeCity;
        vm.calculateClosest = calculateClosest;


        Array.prototype.remove = function(from, to) {
          var rest = this.slice((to || from) + 1 || this.length);
          this.length = from < 0 ? this.length + from : from;
          return this.push.apply(this, rest);
        };


        init();

        function removeCity(index) {
            vm.cityItems.remove(index);
        }

        function addCityByInput() {
            if (vm.current.name) {
                vm.cityItems.push(vm.current);
            }
        }

        function dist(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
        }

        function calculateClosest() {
            var max_dist = 999999999;
            for (var i = 0; i < vm.cityItems.length - 1; i++) {
                var city_i = vm.cityItems[i];
                var name_i = city_i.name;
                var lat_i = city_i.latitude;
                var lon_i = city_i.longitude;
                for (var j = i + 1; j < vm.cityItems.length; j++) {
                    var city_j = vm.cityItems[j];
                    var name_j = city_j.name;
                    var lat_j = city_j.latitude;
                    var lon_j = city_j.longitude;
                    var check_dist = dist(lat_i, lon_i, lat_j, lon_j);
                    if (check_dist < max_dist) {
                        max_dist = check_dist;
                        var min_city_i = name_i;
                        var min_city_j = name_j;
                    }
                }
            }
            vm.minCityOne = min_city_i;
            vm.minCityTwo = min_city_j;
        }

        function addCityByAddress(address) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    var cityItem = {
                        latitude: latitude,
                        longitude: longitude,
                        name: address
                    }
                    vm.cityItems.push(cityItem);
                    $scope.$apply();
                }
            });
        }

        function init() {
            var startingCities = [
                'Los Angeles',
                'San Francisco',
                'Boston',
                'New York',
                'Washington',
                'Seattle',
                'Austin',
                'Chicago',
                'San Diego',
                'Denver',
                'London',
                'Toronto',
                'Sydney',
                'Melbourne',
                'Paris',
                'Singapore'
            ];

            for (var i = 0; i < startingCities.length; i++) {
                addCityByAddress(startingCities[i]);
            }
        }
    }
})();

