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

    geoDistController.$inject = [];
    
    function geoDistController() {
        var vm = this;
        vm.cityItems = [
            'Los Angeles',
            'Los Angeles',
            'Los Angeles',
            'Los Angeles',
            'Los Angeles',
            'Los Angeles', 
            'Los Angeles',
            'Los Angeles',
            'Los Angeles'];
    }
})();

