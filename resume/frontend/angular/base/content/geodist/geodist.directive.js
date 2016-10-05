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

