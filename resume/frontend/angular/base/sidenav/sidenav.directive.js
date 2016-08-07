(function (){
    "use-strict";

    angular.module('app.sidenav', [])
        .directive('resumeSideNav', resumeSideNavDirective);

    function resumeSideNavDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'static/app/templates/sidenav/sidenav.directive.html',
            controllerAs: 'vm',
            controller: resumeSideNavController,
            scope: {},
            transclude: true,
            bind: {}
        }
    }

    resumeSideNavController.$inject = ['$state', '$rootScope'];

    function resumeSideNavController($state, $rootScope) {
        var vm = this;
    }
})();