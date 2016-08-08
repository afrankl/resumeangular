(function () {

    "use-strict";

    angular.module('app.topnav', [])
        .directive('resumeTopNav', resumeTopNavDirective);


    function resumeTopNavDirective(){
        return {
            restrict: 'EA',
            templateUrl: '/static/app/templates/topnav/topnav.directive.html',
            controllerAs: 'vm',
            controller: resumeTopNavController,
            scope: {},
            bind: {},
            transclude: true,
        }
    }

    resumeTopNavController.$inject = ['$state', '$rootScope']
    function resumeTopNavController($state, $rootScope) {
        var vm = this;

        //functions
        vm.menuClicked = menuClicked;

        function menuClicked() {
            $rootScope.navOpen = !$rootScope.navOpen;
        }
    }
})();