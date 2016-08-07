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
            transclude: true
        }
    }

    resumeTopNavController.$inject = ['$state']

    function resumeTopNavController($state) {
        var vm = this;
    }
})();